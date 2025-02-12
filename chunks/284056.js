n.d(t, {
    Z: () => v,
    _: () => g._
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    a = n(392711),
    s = n.n(a),
    l = n(442837),
    o = n(46973),
    c = n(846519),
    d = n(481060),
    u = n(846027),
    m = n(393238),
    g = n(794347),
    _ = n(131951),
    p = n(19780),
    f = n(626135),
    h = n(981631),
    x = n(388032),
    E = n(448724);
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
class b extends r.PureComponent {
    componentDidMount() {
        this._initTimeout.start(1000, this.setupVoiceActivity);
    }
    componentWillUnmount() {
        this._initTimeout.stop(), this._silenceTimeout.stop(), this._micTestStop(), _.Z.getMediaEngine().removeListener(o.aB.VoiceActivity, this.handleVoiceActivity);
    }
    _micTestStart() {
        let { isVoiceConnected: e, inputDeviceName: t, inputVolume: n, outputDeviceName: i, outputVolume: r, inputMode: a, vadAutoThreshold: s, vadThreshold: l, location: o, isDeafened: c } = this.props,
            d = !1;
        e && !c && (u.Z.toggleSelfDeaf(), (d = !0)),
            u.Z.setLoopback(!0),
            (this._micTestStartTime = Date.now()),
            this.setState({
                isMicTesting: !0,
                isDetectingInput: !0,
                didDeafenUser: d
            }),
            f.default.track(h.rMx.MIC_TESTING_STARTED, {
                input_device_name: t,
                input_device_volume: n,
                output_device_name: i,
                output_device_volume: r,
                input_mode: a,
                input_sensitivity_is_automatic: s,
                input_sensitivity_threshold: Math.round(l),
                location: o
            });
    }
    _micTestStop() {
        let { didDeafenUser: e, isMicTesting: t } = this.state,
            { isVoiceConnected: n, isDeafened: i } = this.props;
        if (t)
            n && i && e && u.Z.toggleSelfDeaf(),
                u.Z.setLoopback(!1),
                this.setState({
                    isMicTesting: !1,
                    didDeafenUser: !1
                }),
                null != this._micTestStartTime && f.default.track(h.rMx.MIC_TESTING_STOPPED, { testing_duration: Math.round((Date.now() - this._micTestStartTime) / 1000) });
    }
    renderCaption() {
        let { captionVoice: e, captionNoVoice: t } = this.props,
            { isMicTesting: n, isDetectingInput: r } = this.state;
        return (0, i.jsx)(d.R94, {
            className: E.micTestCaption,
            type: d.R94.Types.DESCRIPTION,
            children: n ? (r ? e : t) : null
        });
    }
    render() {
        let { isVoiceConnected: e, title: t, description: n, notchBackground: r, buttonTest: a, buttonStop: s, buttonClassName: l, buttonColor: o, isDeafened: c, buttonMinWidth: u, measureButtonRef: m } = this.props,
            { isMicTesting: _, volume: p } = this.state,
            f = e && !_ ? x.intl.string(x.t['9viE2N']) : null;
        _ && e && !c && this._micTestStop();
        let h = s.length >= a.length ? s : a;
        return (0, i.jsxs)('div', {
            className: E.container,
            children: [
                (0, i.jsx)(d.vwX, {
                    tag: d.RB0.H5,
                    className: E.title,
                    children: t
                }),
                null != n &&
                    (0, i.jsx)(d.R94, {
                        type: d.R94.Types.DESCRIPTION,
                        className: E.description,
                        children: n
                    }),
                (0, i.jsxs)('div', {
                    className: E.micTest,
                    children: [
                        (0, i.jsxs)('div', {
                            className: E.buttonSizer,
                            'aria-hidden': !0,
                            children: [
                                (0, i.jsx)(d.zxk, {
                                    buttonRef: m,
                                    grow: !0,
                                    size: d.zxk.Sizes.SMALL,
                                    className: l,
                                    color: o,
                                    children: h
                                }),
                                (0, i.jsx)('div', { className: E.buttonSizerSpacer })
                            ]
                        }),
                        (0, i.jsx)(d.ua7, {
                            text: f,
                            children: (e) => {
                                let { onMouseEnter: t, onMouseLeave: n } = e;
                                return (0, i.jsx)(d.zxk, {
                                    grow: !0,
                                    onClick: this.handleToggleMicTest,
                                    onMouseEnter: t,
                                    onMouseLeave: n,
                                    size: d.zxk.Sizes.SMALL,
                                    className: l,
                                    color: o,
                                    style: null != u ? { minWidth: u } : { visibility: 'hidden' },
                                    children: _ ? s : a
                                });
                            }
                        }),
                        (0, i.jsx)(g.Z, {
                            progress: _ ? p + 100 : 0,
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
                _.Z.getMediaEngine().on(o.aB.VoiceActivity, this.handleVoiceActivity);
            }),
            C(this, 'handleVoiceActivity', (e) => {
                let { isMicTesting: t } = this.state;
                if (t && e <= -100) {
                    this._silenceTimeout.isStarted() ||
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
function v(e) {
    var t, n;
    let {
            inputDevice: r,
            outputDevice: a,
            modeOptions: o,
            inputVolume: c,
            outputVolume: d,
            inputMode: u,
            isDeafened: g
        } = (0, l.cj)([_.Z], () => {
            let e = _.Z.getInputDeviceId(),
                t = _.Z.getInputDevices(),
                n = s().find(t, (t) => {
                    let { id: n } = t;
                    return n === e;
                }),
                i = _.Z.getOutputDeviceId(),
                r = _.Z.getOutputDevices(),
                a = s().find(r, (e) => {
                    let { id: t } = e;
                    return t === i;
                }),
                l = _.Z.getModeOptions(),
                o = _.Z.getInputVolume(),
                c = _.Z.getOutputVolume();
            return {
                inputDevice: n,
                outputDevice: a,
                modeOptions: l,
                inputVolume: o,
                outputVolume: c,
                inputMode: _.Z.getMode(),
                isDeafened: _.Z.isSelfDeaf()
            };
        }),
        f = (0, l.e7)([p.Z], () => p.Z.isConnected()),
        { ref: h, width: x } = (0, m.Z)();
    return (0, i.jsx)(b, {
        isVoiceConnected: f,
        inputVolume: c,
        outputVolume: d,
        inputMode: u,
        isDeafened: g,
        vadThreshold: o.threshold,
        vadAutoThreshold: o.autoThreshold,
        inputDeviceName: null !== (t = null == r ? void 0 : r.name) && void 0 !== t ? t : '',
        outputDeviceName: null !== (n = null == a ? void 0 : a.name) && void 0 !== n ? n : '',
        measureButtonRef: h,
        buttonMinWidth: x,
        ...e
    });
}
