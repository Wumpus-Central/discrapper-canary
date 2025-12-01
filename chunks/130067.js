n.d(t, {
    Z: () => N,
    _: () => h._,
}),
    n(953529),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n.n(s),
    c = n(442837),
    u = n(46973),
    d = n(846519),
    f = n(28664),
    p = n(481060),
    _ = n(846027),
    m = n(393238),
    h = n(794347),
    g = n(131951),
    E = n(19780),
    b = n(626135),
    y = n(981631),
    O = n(388032),
    v = n(953620);
function S(e, t, n) {
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
function I(e) {
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
                S(e, t, n[t]);
            });
    }
    return e;
}
let T = 2000,
    A = -100;
class C extends i.PureComponent {
    componentDidMount() {
        this._initTimeout.start(1000, this.setupVoiceActivity);
    }
    componentWillUnmount() {
        this._initTimeout.stop(),
            this._silenceTimeout.stop(),
            this._micTestStop(),
            g.Z.getMediaEngine().removeListener(u.aB.VoiceActivity, this.handleVoiceActivity);
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
        e && !c && (_.Z.toggleSelfDeaf(), (u = !0)),
            _.Z.setLoopback("mic_test", !0),
            (this._micTestStartTime = Date.now()),
            this.setState({
                isMicTesting: !0,
                isDetectingInput: !0,
                didDeafenUser: u,
            }),
            b.default.track(y.rMx.MIC_TESTING_STARTED, {
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
            (n && r && e && _.Z.toggleSelfDeaf(),
            _.Z.setLoopback("mic_test", !1),
            this.setState({
                isMicTesting: !1,
                didDeafenUser: !1,
            }),
            null != this._micTestStartTime &&
                b.default.track(y.rMx.MIC_TESTING_STOPPED, {
                    testing_duration: Math.round((Date.now() - this._micTestStartTime) / 1000),
                }));
    }
    renderCaption() {
        let { captionVoice: e, captionNoVoice: t } = this.props,
            { isMicTesting: n, isDetectingInput: i } = this.state;
        return (0, r.jsx)(p.Text, {
            variant: "text-xs/normal",
            color: "text-secondary",
            className: v.micTestCaption,
            children: n ? (i ? e : t) : null,
        });
    }
    render() {
        let {
                isVoiceConnected: e,
                title: t,
                description: n,
                notchBackground: i,
                buttonTest: a = "",
                buttonStop: s = "",
                buttonVariant: l = "secondary",
                isDeafened: c,
                buttonMinWidth: u,
                measureButtonRef: d,
                meterOnly: _ = !1,
                containerClassName: m,
            } = this.props,
            { isMicTesting: g, volume: E } = this.state,
            b = e && !g ? O.intl.string(O.t["9viE2A"]) : null;
        g && e && !c && this._micTestStop();
        let y = s.length >= a.length ? s : a;
        return (0, r.jsx)("div", {
            className: o()(v.container, m),
            children: (0, r.jsx)(p.gNt, {
                label: null != t ? t : void 0,
                hideLabel: _,
                description: _ ? null : n,
                children: (0, r.jsxs)("div", {
                    className: v.micTest,
                    children: [
                        !_ &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: v.buttonSizer,
                                        "aria-hidden": !0,
                                        children: [
                                            (0, r.jsx)(p.Button, {
                                                buttonRef: d,
                                                size: "sm",
                                                variant: l,
                                                text: y,
                                            }),
                                            (0, r.jsx)("div", { className: v.buttonSizerSpacer }),
                                        ],
                                    }),
                                    (0, r.jsx)(f.u, {
                                        text: b,
                                        children: (0, r.jsx)("div", {
                                            className: v.buttonWrapper,
                                            style: null != u ? { minWidth: u } : { visibility: "hidden" },
                                            children: (0, r.jsx)(p.Button, {
                                                size: "sm",
                                                variant: l,
                                                text: g ? s : a,
                                                onClick: this.handleToggleMicTest,
                                                fullWidth: !0,
                                            }),
                                        }),
                                    }),
                                ],
                            }),
                        (0, r.jsx)(h.Z, {
                            progress: g || _ ? E + 100 : 0,
                            notchBackground: i,
                            notchClassName: this.props.notchClassName,
                            children: this.renderCaption(),
                        }),
                    ],
                }),
            }),
        });
    }
    constructor(...e) {
        super(...e),
            S(this, "_initTimeout", new d.V7()),
            S(this, "_silenceTimeout", new d.V7()),
            S(this, "_messageTimeout", new d.V7()),
            S(this, "_micTestStartTime", void 0),
            S(this, "state", {
                volume: A,
                isMicTesting: !1,
                isDetectingInput: !0,
                didDeafenUser: !1,
            }),
            S(this, "setupVoiceActivity", () => {
                g.Z.getMediaEngine().on(u.aB.VoiceActivity, this.handleVoiceActivity);
            }),
            S(this, "handleVoiceActivity", (e) => {
                let { isMicTesting: t } = this.state;
                if (t && e <= A) {
                    this._silenceTimeout.isStarted() ||
                        this._silenceTimeout.start(T, () => {
                            this.setState({ isDetectingInput: !1 });
                        }),
                        this.setState({ volume: A });
                    return;
                }
                this._silenceTimeout.stop(),
                    this.setState({
                        volume: e,
                        isDetectingInput: !0,
                    });
            }),
            S(this, "handleToggleMicTest", () => {
                this.state.isMicTesting ? this._micTestStop() : this._micTestStart();
            });
    }
}
function N(e) {
    var t, n;
    let {
            inputDevice: i,
            outputDevice: a,
            threshold: o,
            autoThreshold: s,
            inputVolume: u,
            outputVolume: d,
            inputMode: f,
            isDeafened: p,
        } = (0, c.cj)([g.Z], () => {
            let e = g.Z.getInputDeviceId(),
                t = g.Z.getInputDevices(),
                n = l().find(t, (t) => {
                    let { id: n } = t;
                    return n === e;
                }),
                r = g.Z.getOutputDeviceId(),
                i = g.Z.getOutputDevices(),
                a = l().find(i, (e) => {
                    let { id: t } = e;
                    return t === r;
                }),
                { threshold: o, autoThreshold: s } = g.Z.getModeOptions(),
                c = g.Z.getInputVolume(),
                u = g.Z.getOutputVolume();
            return {
                inputDevice: n,
                outputDevice: a,
                threshold: o,
                autoThreshold: s,
                inputVolume: c,
                outputVolume: u,
                inputMode: g.Z.getMode(),
                isDeafened: g.Z.isSelfDeaf(),
            };
        }),
        _ = (0, c.e7)([E.Z], () => E.Z.isConnected()),
        { ref: h, width: b } = (0, m.ZP)();
    return (0, r.jsx)(
        C,
        I(
            {
                isVoiceConnected: _,
                inputVolume: u,
                outputVolume: d,
                inputMode: f,
                isDeafened: p,
                vadThreshold: o,
                vadAutoThreshold: s,
                inputDeviceName: null != (t = null == i ? void 0 : i.name) ? t : "",
                outputDeviceName: null != (n = null == a ? void 0 : a.name) ? n : "",
                measureButtonRef: h,
                buttonMinWidth: b,
            },
            e,
        ),
    );
}
