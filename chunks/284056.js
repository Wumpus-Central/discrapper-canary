n.d(t, {
    Z: function () {
        return S;
    },
    _: function () {
        return g._;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    s = n(392711),
    a = n.n(s),
    l = n(442837),
    o = n(46973),
    c = n(846519),
    d = n(481060),
    u = n(846027),
    m = n(393238),
    g = n(794347),
    h = n(131951),
    p = n(19780),
    x = n(626135),
    f = n(981631),
    E = n(388032),
    _ = n(621519);
function C(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class T extends r.PureComponent {
    componentDidMount() {
        this._initTimeout.start(1000, this.setupVoiceActivity);
    }
    componentWillUnmount() {
        this._initTimeout.stop(), this._silenceTimeout.stop(), this._micTestStop(), h.Z.getMediaEngine().removeListener(o.aB.VoiceActivity, this.handleVoiceActivity);
    }
    _micTestStart() {
        let { isVoiceConnected: e, inputDeviceName: t, inputVolume: n, outputDeviceName: i, outputVolume: r, inputMode: s, vadAutoThreshold: a, vadThreshold: l, location: o, isDeafened: c } = this.props,
            d = !1;
        e && !c && (u.Z.toggleSelfDeaf(), (d = !0)),
            u.Z.setLoopback(!0),
            (this._micTestStartTime = Date.now()),
            this.setState({
                isMicTesting: !0,
                isDetectingInput: !0,
                didDeafenUser: d
            }),
            x.default.track(f.rMx.MIC_TESTING_STARTED, {
                input_device_name: t,
                input_device_volume: n,
                output_device_name: i,
                output_device_volume: r,
                input_mode: s,
                input_sensitivity_is_automatic: a,
                input_sensitivity_threshold: Math.round(l),
                location: o
            });
    }
    _micTestStop() {
        let { didDeafenUser: e, isMicTesting: t } = this.state,
            { isVoiceConnected: n, isDeafened: i } = this.props;
        if (!t) return;
        if (
            (n && i && e && u.Z.toggleSelfDeaf(),
            u.Z.setLoopback(!1),
            this.setState({
                isMicTesting: !1,
                didDeafenUser: !1
            }),
            null != this._micTestStartTime)
        )
            x.default.track(f.rMx.MIC_TESTING_STOPPED, { testing_duration: Math.round((Date.now() - this._micTestStartTime) / 1000) });
    }
    renderCaption() {
        let { captionVoice: e, captionNoVoice: t } = this.props,
            { isMicTesting: n, isDetectingInput: r } = this.state;
        return (0, i.jsx)(d.FormText, {
            className: _.micTestCaption,
            type: d.FormText.Types.DESCRIPTION,
            children: n ? (r ? e : t) : null
        });
    }
    render() {
        let { isVoiceConnected: e, title: t, description: n, notchBackground: r, buttonTest: s, buttonStop: a, buttonClassName: l, buttonColor: o, isDeafened: c, buttonMinWidth: u, measureButtonRef: m } = this.props,
            { isMicTesting: h, volume: p } = this.state,
            x = e && !h ? E.intl.string(E.t['9viE2N']) : null;
        h && e && !c && this._micTestStop();
        let f = a.length >= s.length ? a : s;
        return (0, i.jsxs)('div', {
            className: _.container,
            children: [
                (0, i.jsx)(d.FormTitle, {
                    tag: d.FormTitleTags.H5,
                    className: _.title,
                    children: t
                }),
                null != n &&
                    (0, i.jsx)(d.FormText, {
                        type: d.FormText.Types.DESCRIPTION,
                        className: _.description,
                        children: n
                    }),
                (0, i.jsxs)('div', {
                    className: _.micTest,
                    children: [
                        (0, i.jsxs)('div', {
                            className: _.buttonSizer,
                            'aria-hidden': !0,
                            children: [
                                (0, i.jsx)(d.Button, {
                                    buttonRef: m,
                                    grow: !0,
                                    size: d.Button.Sizes.SMALL,
                                    className: l,
                                    color: o,
                                    children: f
                                }),
                                (0, i.jsx)('div', { className: _.buttonSizerSpacer })
                            ]
                        }),
                        (0, i.jsx)(d.Tooltip, {
                            text: x,
                            children: (e) => {
                                let { onMouseEnter: t, onMouseLeave: n } = e;
                                return (0, i.jsx)(d.Button, {
                                    grow: !0,
                                    onClick: this.handleToggleMicTest,
                                    onMouseEnter: t,
                                    onMouseLeave: n,
                                    size: d.Button.Sizes.SMALL,
                                    className: l,
                                    color: o,
                                    style: null != u ? { minWidth: u } : { visibility: 'hidden' },
                                    children: h ? a : s
                                });
                            }
                        }),
                        (0, i.jsx)(g.Z, {
                            progress: h ? p + 100 : 0,
                            notchBackground: r,
                            children: this.renderCaption()
                        })
                    ]
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            C(this, '_initTimeout', new c.V7()),
            C(this, '_silenceTimeout', new c.V7()),
            C(this, '_messageTimeout', new c.V7()),
            C(this, '_micTestStartTime', void 0),
            C(this, 'state', {
                volume: -100,
                isMicTesting: !1,
                isDetectingInput: !0,
                didDeafenUser: !1
            }),
            C(this, 'setupVoiceActivity', () => {
                h.Z.getMediaEngine().on(o.aB.VoiceActivity, this.handleVoiceActivity);
            }),
            C(this, 'handleVoiceActivity', (e) => {
                let { isMicTesting: t } = this.state;
                if (t && e <= -100) {
                    !this._silenceTimeout.isStarted() &&
                        this._silenceTimeout.start(2000, () => {
                            this.setState({ isDetectingInput: !1 });
                        }),
                        this.setState({ volume: -100 });
                    return;
                }
                this._silenceTimeout.stop(),
                    this.setState({
                        volume: e,
                        isDetectingInput: !0
                    });
            }),
            C(this, 'handleToggleMicTest', () => {
                this.state.isMicTesting ? this._micTestStop() : this._micTestStart();
            });
    }
}
function S(e) {
    var t, n;
    let {
            inputDevice: r,
            outputDevice: s,
            modeOptions: o,
            inputVolume: c,
            outputVolume: d,
            inputMode: u,
            isDeafened: g
        } = (0, l.cj)([h.Z], () => {
            let e = h.Z.getInputDeviceId(),
                t = h.Z.getInputDevices(),
                n = a().find(t, (t) => {
                    let { id: n } = t;
                    return n === e;
                }),
                i = h.Z.getOutputDeviceId(),
                r = h.Z.getOutputDevices(),
                s = a().find(r, (e) => {
                    let { id: t } = e;
                    return t === i;
                }),
                l = h.Z.getModeOptions(),
                o = h.Z.getInputVolume(),
                c = h.Z.getOutputVolume(),
                d = h.Z.getMode();
            return {
                inputDevice: n,
                outputDevice: s,
                modeOptions: l,
                inputVolume: o,
                outputVolume: c,
                inputMode: d,
                isDeafened: h.Z.isSelfDeaf()
            };
        }),
        x = (0, l.e7)([p.Z], () => p.Z.isConnected()),
        { ref: f, width: E } = (0, m.Z)();
    return (0, i.jsx)(T, {
        isVoiceConnected: x,
        inputVolume: c,
        outputVolume: d,
        inputMode: u,
        isDeafened: g,
        vadThreshold: o.threshold,
        vadAutoThreshold: o.autoThreshold,
        inputDeviceName: null !== (t = null == r ? void 0 : r.name) && void 0 !== t ? t : '',
        outputDeviceName: null !== (n = null == s ? void 0 : s.name) && void 0 !== n ? n : '',
        measureButtonRef: f,
        buttonMinWidth: E,
        ...e
    });
}
