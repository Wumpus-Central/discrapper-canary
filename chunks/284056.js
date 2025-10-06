n.d(t, {
    Z: () => R,
    _: () => g._,
}),
    n(953529),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n.n(s),
    c = n(442837),
    u = n(46973),
    d = n(846519),
    f = n(28664),
    _ = n(755721),
    p = n(481060),
    h = n(846027),
    m = n(393238),
    g = n(794347),
    E = n(131951),
    b = n(19780),
    y = n(626135),
    O = n(981631),
    v = n(388032),
    I = n(512588);
function T(e, t, n) {
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
function S(e) {
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
                T(e, t, n[t]);
            });
    }
    return e;
}
let A = 2000,
    C = -100;
class N extends i.PureComponent {
    componentDidMount() {
        this._initTimeout.start(1000, this.setupVoiceActivity);
    }
    componentWillUnmount() {
        this._initTimeout.stop(),
            this._silenceTimeout.stop(),
            this._micTestStop(),
            E.Z.getMediaEngine().removeListener(u.aB.VoiceActivity, this.handleVoiceActivity);
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
        e && !c && (h.Z.toggleSelfDeaf(), (u = !0)),
            h.Z.setLoopback("mic_test", !0),
            (this._micTestStartTime = Date.now()),
            this.setState({
                isMicTesting: !0,
                isDetectingInput: !0,
                didDeafenUser: u,
            }),
            y.default.track(O.rMx.MIC_TESTING_STARTED, {
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
            (n && r && e && h.Z.toggleSelfDeaf(),
            h.Z.setLoopback("mic_test", !1),
            this.setState({
                isMicTesting: !1,
                didDeafenUser: !1,
            }),
            null != this._micTestStartTime &&
                y.default.track(O.rMx.MIC_TESTING_STOPPED, {
                    testing_duration: Math.round((Date.now() - this._micTestStartTime) / 1000),
                }));
    }
    renderCaption() {
        let { captionVoice: e, captionNoVoice: t } = this.props,
            { isMicTesting: n, isDetectingInput: i } = this.state;
        return (0, r.jsx)(p.R94, {
            className: I.micTestCaption,
            type: p.R94.Types.DESCRIPTION,
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
                buttonClassName: l,
                buttonColor: c = _.zx.Colors.BRAND,
                isDeafened: u,
                buttonMinWidth: d,
                measureButtonRef: h,
                meterOnly: m = !1,
                containerClassName: E,
            } = this.props,
            { isMicTesting: b, volume: y } = this.state,
            O = e && !b ? v.intl.string(v.t["9viE2N"]) : null;
        b && e && !u && this._micTestStop();
        let T = s.length >= a.length ? s : a;
        return (0, r.jsxs)("div", {
            className: o()(I.container, E),
            children: [
                !m &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(p.vwX, {
                                className: I.title,
                                children: t,
                            }),
                            null != n &&
                                (0, r.jsx)(p.R94, {
                                    type: p.R94.Types.DESCRIPTION,
                                    className: I.description,
                                    children: n,
                                }),
                        ],
                    }),
                (0, r.jsxs)("div", {
                    className: I.micTest,
                    children: [
                        !m &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: I.buttonSizer,
                                        "aria-hidden": !0,
                                        children: [
                                            (0, r.jsx)(_.zx, {
                                                buttonRef: h,
                                                grow: !0,
                                                size: _.zx.Sizes.SMALL,
                                                className: l,
                                                color: c,
                                                children: T,
                                            }),
                                            (0, r.jsx)("div", { className: I.buttonSizerSpacer }),
                                        ],
                                    }),
                                    (0, r.jsx)(f.u, {
                                        text: O,
                                        children: (0, r.jsx)(_.zx, {
                                            grow: !0,
                                            onClick: this.handleToggleMicTest,
                                            size: _.zx.Sizes.SMALL,
                                            className: l,
                                            color: c,
                                            style: null != d ? { minWidth: d } : { visibility: "hidden" },
                                            children: b ? s : a,
                                        }),
                                    }),
                                ],
                            }),
                        (0, r.jsx)(g.Z, {
                            progress: b || m ? y + 100 : 0,
                            notchBackground: i,
                            notchClassName: this.props.notchClassName,
                            children: this.renderCaption(),
                        }),
                    ],
                }),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            T(this, "_initTimeout", new d.V7()),
            T(this, "_silenceTimeout", new d.V7()),
            T(this, "_messageTimeout", new d.V7()),
            T(this, "_micTestStartTime", void 0),
            T(this, "state", {
                volume: C,
                isMicTesting: !1,
                isDetectingInput: !0,
                didDeafenUser: !1,
            }),
            T(this, "setupVoiceActivity", () => {
                E.Z.getMediaEngine().on(u.aB.VoiceActivity, this.handleVoiceActivity);
            }),
            T(this, "handleVoiceActivity", (e) => {
                let { isMicTesting: t } = this.state;
                if (t && e <= C) {
                    this._silenceTimeout.isStarted() ||
                        this._silenceTimeout.start(A, () => {
                            this.setState({ isDetectingInput: !1 });
                        }),
                        this.setState({ volume: C });
                    return;
                }
                this._silenceTimeout.stop(),
                    this.setState({
                        volume: e,
                        isDetectingInput: !0,
                    });
            }),
            T(this, "handleToggleMicTest", () => {
                this.state.isMicTesting ? this._micTestStop() : this._micTestStart();
            });
    }
}
function R(e) {
    var t, n;
    let {
            inputDevice: i,
            outputDevice: a,
            threshold: o,
            autoThreshold: s,
            inputVolume: u,
            outputVolume: d,
            inputMode: f,
            isDeafened: _,
        } = (0, c.cj)([E.Z], () => {
            let e = E.Z.getInputDeviceId(),
                t = E.Z.getInputDevices(),
                n = l().find(t, (t) => {
                    let { id: n } = t;
                    return n === e;
                }),
                r = E.Z.getOutputDeviceId(),
                i = E.Z.getOutputDevices(),
                a = l().find(i, (e) => {
                    let { id: t } = e;
                    return t === r;
                }),
                { threshold: o, autoThreshold: s } = E.Z.getModeOptions(),
                c = E.Z.getInputVolume(),
                u = E.Z.getOutputVolume();
            return {
                inputDevice: n,
                outputDevice: a,
                threshold: o,
                autoThreshold: s,
                inputVolume: c,
                outputVolume: u,
                inputMode: E.Z.getMode(),
                isDeafened: E.Z.isSelfDeaf(),
            };
        }),
        p = (0, c.e7)([b.Z], () => b.Z.isConnected()),
        { ref: h, width: g } = (0, m.ZP)();
    return (0, r.jsx)(
        N,
        S(
            {
                isVoiceConnected: p,
                inputVolume: u,
                outputVolume: d,
                inputMode: f,
                isDeafened: _,
                vadThreshold: o,
                vadAutoThreshold: s,
                inputDeviceName: null != (t = null == i ? void 0 : i.name) ? t : "",
                outputDeviceName: null != (n = null == a ? void 0 : a.name) ? n : "",
                measureButtonRef: h,
                buttonMinWidth: g,
            },
            e,
        ),
    );
}
