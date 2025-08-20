n.d(t, {
    Z: () => A,
    _: () => p._,
}),
    n(953529),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(392711),
    o = n.n(a),
    s = n(442837),
    l = n(46973),
    c = n(846519),
    u = n(755721),
    d = n(481060),
    f = n(846027),
    _ = n(393238),
    p = n(794347),
    h = n(131951),
    m = n(19780),
    g = n(626135),
    E = n(981631),
    b = n(388032),
    y = n(81272);
function O(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                O(e, t, n[t]);
            });
    }
    return e;
}
let I = 2000,
    T = -100;
class S extends i.PureComponent {
    componentDidMount() {
        this._initTimeout.start(1000, this.setupVoiceActivity);
    }
    componentWillUnmount() {
        this._initTimeout.stop(),
            this._silenceTimeout.stop(),
            this._micTestStop(),
            h.Z.getMediaEngine().removeListener(l.aB.VoiceActivity, this.handleVoiceActivity);
    }
    _micTestStart() {
        let {
                isVoiceConnected: e,
                inputDeviceName: t,
                inputVolume: n,
                outputDeviceName: r,
                outputVolume: i,
                inputMode: a,
                vadAutoThreshold: o,
                vadThreshold: s,
                location: l,
                isDeafened: c,
            } = this.props,
            u = !1;
        e && !c && (f.Z.toggleSelfDeaf(), (u = !0)),
            f.Z.setLoopback("mic_test", !0),
            (this._micTestStartTime = Date.now()),
            this.setState({
                isMicTesting: !0,
                isDetectingInput: !0,
                didDeafenUser: u,
            }),
            g.default.track(E.rMx.MIC_TESTING_STARTED, {
                input_device_name: t,
                input_device_volume: n,
                output_device_name: r,
                output_device_volume: i,
                input_mode: a,
                input_sensitivity_is_automatic: o,
                input_sensitivity_threshold: Math.round(s),
                location: l,
            });
    }
    _micTestStop() {
        let { didDeafenUser: e, isMicTesting: t } = this.state,
            { isVoiceConnected: n, isDeafened: r } = this.props;
        t &&
            (n && r && e && f.Z.toggleSelfDeaf(),
            f.Z.setLoopback("mic_test", !1),
            this.setState({
                isMicTesting: !1,
                didDeafenUser: !1,
            }),
            null != this._micTestStartTime &&
                g.default.track(E.rMx.MIC_TESTING_STOPPED, {
                    testing_duration: Math.round((Date.now() - this._micTestStartTime) / 1000),
                }));
    }
    renderCaption() {
        let { captionVoice: e, captionNoVoice: t } = this.props,
            { isMicTesting: n, isDetectingInput: i } = this.state;
        return (0, r.jsx)(d.R94, {
            className: y.micTestCaption,
            type: d.R94.Types.DESCRIPTION,
            children: n ? (i ? e : t) : null,
        });
    }
    render() {
        let {
                isVoiceConnected: e,
                title: t,
                description: n,
                notchBackground: i,
                buttonTest: a,
                buttonStop: o,
                buttonClassName: s,
                buttonColor: l,
                isDeafened: c,
                buttonMinWidth: f,
                measureButtonRef: _,
            } = this.props,
            { isMicTesting: h, volume: m } = this.state,
            g = e && !h ? b.intl.string(b.t["9viE2N"]) : null;
        h && e && !c && this._micTestStop();
        let E = o.length >= a.length ? o : a;
        return (0, r.jsxs)("div", {
            className: y.container,
            children: [
                (0, r.jsx)(d.vwX, {
                    tag: d.RB0.H5,
                    className: y.title,
                    children: t,
                }),
                null != n &&
                    (0, r.jsx)(d.R94, {
                        type: d.R94.Types.DESCRIPTION,
                        className: y.description,
                        children: n,
                    }),
                (0, r.jsxs)("div", {
                    className: y.micTest,
                    children: [
                        (0, r.jsxs)("div", {
                            className: y.buttonSizer,
                            "aria-hidden": !0,
                            children: [
                                (0, r.jsx)(u.zx, {
                                    buttonRef: _,
                                    grow: !0,
                                    size: u.zx.Sizes.SMALL,
                                    className: s,
                                    color: l,
                                    children: E,
                                }),
                                (0, r.jsx)("div", { className: y.buttonSizerSpacer }),
                            ],
                        }),
                        (0, r.jsx)(d.ua7, {
                            text: g,
                            children: (e) => {
                                let { onMouseEnter: t, onMouseLeave: n } = e;
                                return (0, r.jsx)(u.zx, {
                                    grow: !0,
                                    onClick: this.handleToggleMicTest,
                                    onMouseEnter: t,
                                    onMouseLeave: n,
                                    size: u.zx.Sizes.SMALL,
                                    className: s,
                                    color: l,
                                    style: null != f ? { minWidth: f } : { visibility: "hidden" },
                                    children: h ? o : a,
                                });
                            },
                        }),
                        (0, r.jsx)(p.Z, {
                            progress: h ? m + 100 : 0,
                            notchBackground: i,
                            children: this.renderCaption(),
                        }),
                    ],
                }),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            O(this, "_initTimeout", new c.V7()),
            O(this, "_silenceTimeout", new c.V7()),
            O(this, "_messageTimeout", new c.V7()),
            O(this, "_micTestStartTime", void 0),
            O(this, "state", {
                volume: T,
                isMicTesting: !1,
                isDetectingInput: !0,
                didDeafenUser: !1,
            }),
            O(this, "setupVoiceActivity", () => {
                h.Z.getMediaEngine().on(l.aB.VoiceActivity, this.handleVoiceActivity);
            }),
            O(this, "handleVoiceActivity", (e) => {
                let { isMicTesting: t } = this.state;
                if (t && e <= T) {
                    this._silenceTimeout.isStarted() ||
                        this._silenceTimeout.start(I, () => {
                            this.setState({ isDetectingInput: !1 });
                        }),
                        this.setState({ volume: T });
                    return;
                }
                this._silenceTimeout.stop(),
                    this.setState({
                        volume: e,
                        isDetectingInput: !0,
                    });
            }),
            O(this, "handleToggleMicTest", () => {
                this.state.isMicTesting ? this._micTestStop() : this._micTestStart();
            });
    }
}
function A(e) {
    var t, n;
    let {
            inputDevice: i,
            outputDevice: a,
            threshold: l,
            autoThreshold: c,
            inputVolume: u,
            outputVolume: d,
            inputMode: f,
            isDeafened: p,
        } = (0, s.cj)([h.Z], () => {
            let e = h.Z.getInputDeviceId(),
                t = h.Z.getInputDevices(),
                n = o().find(t, (t) => {
                    let { id: n } = t;
                    return n === e;
                }),
                r = h.Z.getOutputDeviceId(),
                i = h.Z.getOutputDevices(),
                a = o().find(i, (e) => {
                    let { id: t } = e;
                    return t === r;
                }),
                { threshold: s, autoThreshold: l } = h.Z.getModeOptions(),
                c = h.Z.getInputVolume(),
                u = h.Z.getOutputVolume();
            return {
                inputDevice: n,
                outputDevice: a,
                threshold: s,
                autoThreshold: l,
                inputVolume: c,
                outputVolume: u,
                inputMode: h.Z.getMode(),
                isDeafened: h.Z.isSelfDeaf(),
            };
        }),
        g = (0, s.e7)([m.Z], () => m.Z.isConnected()),
        { ref: E, width: b } = (0, _.ZP)();
    return (0, r.jsx)(
        S,
        v(
            {
                isVoiceConnected: g,
                inputVolume: u,
                outputVolume: d,
                inputMode: f,
                isDeafened: p,
                vadThreshold: l,
                vadAutoThreshold: c,
                inputDeviceName: null != (t = null == i ? void 0 : i.name) ? t : "",
                outputDeviceName: null != (n = null == a ? void 0 : a.name) ? n : "",
                measureButtonRef: E,
                buttonMinWidth: b,
            },
            e,
        ),
    );
}
