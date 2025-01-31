n.d(t, {
    Z: () => N,
    _: () => h._
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(392711),
    l = n.n(r),
    a = n(442837),
    o = n(46973),
    c = n(846519),
    d = n(481060),
    u = n(846027),
    m = n(393238),
    h = n(794347),
    g = n(131951),
    _ = n(19780),
    x = n(626135),
    p = n(981631),
    E = n(388032),
    C = n(621519);
function f(e, t, n) {
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
class T extends s.PureComponent {
    componentDidMount() {
        this._initTimeout.start(1000, this.setupVoiceActivity);
    }
    componentWillUnmount() {
        this._initTimeout.stop(), this._silenceTimeout.stop(), this._micTestStop(), g.Z.getMediaEngine().removeListener(o.aB.VoiceActivity, this.handleVoiceActivity);
    }
    _micTestStart() {
        let { isVoiceConnected: e, inputDeviceName: t, inputVolume: n, outputDeviceName: i, outputVolume: s, inputMode: r, vadAutoThreshold: l, vadThreshold: a, location: o, isDeafened: c } = this.props,
            d = !1;
        e && !c && (u.Z.toggleSelfDeaf(), (d = !0)),
            u.Z.setLoopback(!0),
            (this._micTestStartTime = Date.now()),
            this.setState({
                isMicTesting: !0,
                isDetectingInput: !0,
                didDeafenUser: d
            }),
            x.default.track(p.rMx.MIC_TESTING_STARTED, {
                input_device_name: t,
                input_device_volume: n,
                output_device_name: i,
                output_device_volume: s,
                input_mode: r,
                input_sensitivity_is_automatic: l,
                input_sensitivity_threshold: Math.round(a),
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
                null != this._micTestStartTime && x.default.track(p.rMx.MIC_TESTING_STOPPED, { testing_duration: Math.round((Date.now() - this._micTestStartTime) / 1000) });
    }
    renderCaption() {
        let { captionVoice: e, captionNoVoice: t } = this.props,
            { isMicTesting: n, isDetectingInput: s } = this.state;
        return (0, i.jsx)(d.R94, {
            className: C.micTestCaption,
            type: d.R94.Types.DESCRIPTION,
            children: n ? (s ? e : t) : null
        });
    }
    render() {
        let { isVoiceConnected: e, title: t, description: n, notchBackground: s, buttonTest: r, buttonStop: l, buttonClassName: a, buttonColor: o, isDeafened: c, buttonMinWidth: u, measureButtonRef: m } = this.props,
            { isMicTesting: g, volume: _ } = this.state,
            x = e && !g ? E.intl.string(E.t['9viE2N']) : null;
        g && e && !c && this._micTestStop();
        let p = l.length >= r.length ? l : r;
        return (0, i.jsxs)('div', {
            className: C.container,
            children: [
                (0, i.jsx)(d.vwX, {
                    tag: d.RB0.H5,
                    className: C.title,
                    children: t
                }),
                null != n &&
                    (0, i.jsx)(d.R94, {
                        type: d.R94.Types.DESCRIPTION,
                        className: C.description,
                        children: n
                    }),
                (0, i.jsxs)('div', {
                    className: C.micTest,
                    children: [
                        (0, i.jsxs)('div', {
                            className: C.buttonSizer,
                            'aria-hidden': !0,
                            children: [
                                (0, i.jsx)(d.zxk, {
                                    buttonRef: m,
                                    grow: !0,
                                    size: d.zxk.Sizes.SMALL,
                                    className: a,
                                    color: o,
                                    children: p
                                }),
                                (0, i.jsx)('div', { className: C.buttonSizerSpacer })
                            ]
                        }),
                        (0, i.jsx)(d.ua7, {
                            text: x,
                            children: (e) => {
                                let { onMouseEnter: t, onMouseLeave: n } = e;
                                return (0, i.jsx)(d.zxk, {
                                    grow: !0,
                                    onClick: this.handleToggleMicTest,
                                    onMouseEnter: t,
                                    onMouseLeave: n,
                                    size: d.zxk.Sizes.SMALL,
                                    className: a,
                                    color: o,
                                    style: null != u ? { minWidth: u } : { visibility: 'hidden' },
                                    children: g ? l : r
                                });
                            }
                        }),
                        (0, i.jsx)(h.Z, {
                            progress: g ? _ + 100 : 0,
                            notchBackground: s,
                            children: this.renderCaption()
                        })
                    ]
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            f(this, '_initTimeout', new c.V7()),
            f(this, '_silenceTimeout', new c.V7()),
            f(this, '_messageTimeout', new c.V7()),
            f(this, '_micTestStartTime', void 0),
            f(this, 'state', {
                volume: -100,
                isMicTesting: !1,
                isDetectingInput: !0,
                didDeafenUser: !1
            }),
            f(this, 'setupVoiceActivity', () => {
                g.Z.getMediaEngine().on(o.aB.VoiceActivity, this.handleVoiceActivity);
            }),
            f(this, 'handleVoiceActivity', (e) => {
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
            f(this, 'handleToggleMicTest', () => {
                this.state.isMicTesting ? this._micTestStop() : this._micTestStart();
            });
    }
}
function N(e) {
    var t, n;
    let {
            inputDevice: s,
            outputDevice: r,
            modeOptions: o,
            inputVolume: c,
            outputVolume: d,
            inputMode: u,
            isDeafened: h
        } = (0, a.cj)([g.Z], () => {
            let e = g.Z.getInputDeviceId(),
                t = g.Z.getInputDevices(),
                n = l().find(t, (t) => {
                    let { id: n } = t;
                    return n === e;
                }),
                i = g.Z.getOutputDeviceId(),
                s = g.Z.getOutputDevices(),
                r = l().find(s, (e) => {
                    let { id: t } = e;
                    return t === i;
                }),
                a = g.Z.getModeOptions(),
                o = g.Z.getInputVolume(),
                c = g.Z.getOutputVolume();
            return {
                inputDevice: n,
                outputDevice: r,
                modeOptions: a,
                inputVolume: o,
                outputVolume: c,
                inputMode: g.Z.getMode(),
                isDeafened: g.Z.isSelfDeaf()
            };
        }),
        x = (0, a.e7)([_.Z], () => _.Z.isConnected()),
        { ref: p, width: E } = (0, m.Z)();
    return (0, i.jsx)(T, {
        isVoiceConnected: x,
        inputVolume: c,
        outputVolume: d,
        inputMode: u,
        isDeafened: h,
        vadThreshold: o.threshold,
        vadAutoThreshold: o.autoThreshold,
        inputDeviceName: null !== (t = null == s ? void 0 : s.name) && void 0 !== t ? t : '',
        outputDeviceName: null !== (n = null == r ? void 0 : r.name) && void 0 !== n ? n : '',
        measureButtonRef: p,
        buttonMinWidth: E,
        ...e
    });
}
