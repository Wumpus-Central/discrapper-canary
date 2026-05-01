n.d(t, { V: () => p, A: () => G });
var i,
    l = n(627968),
    s = n(64700),
    r = n(503698),
    a = n.n(r),
    u = n(735438),
    o = n.n(u),
    d = n(17928),
    c = n(205693),
    h = n(451988),
    A = n(990078),
    f = n(834730),
    g = n(452027),
    E = n(821609),
    I = n(827343),
    S = n(765671),
    _ = n(661531),
    T = n(953727);
function C(e) {
    let { width: t = 80, height: n = 28, color: i = "currentColor", foreground: r, ...a } = e,
        u = `pill-frame-pattern-${n}`,
        o = s.useMemo(() => {
            let e;
            return (
                (e = n - 8),
                `m0 0h8v${n}h-8zm4 2c-1.1045695 0-2 .8954305-2 2v${e}c0 1.1045695.8954305 2 2 2s2-.8954305 2-2v-${e}c0-1.1045695-.8954305-2-2-2z`
            );
        }, [n]);
    return (0, l.jsxs)("svg", {
        ...(0, T.A)(a),
        width: t,
        height: n,
        viewBox: `0 0 ${t} ${n}`,
        children: [
            (0, l.jsx)("pattern", {
                id: u,
                width: 8 / t,
                height: "1",
                children: (0, l.jsx)("path", { d: o, fillRule: "evenodd", fill: i, className: r }),
            }),
            (0, l.jsx)("rect", { fill: `url(#${u})`, height: "100%", width: "100%" }),
        ],
    });
}
var m = n(75753),
    p = (((i = {}).BLACK = "BLACK"), (i.GRAY = "GRAY"), i);
let N = { BLACK: m.Ql, GRAY: m.wm },
    M = { sm: 20, md: 28 };
function D(e) {
    return 8 * Math.round(e / 8);
}
function v(e) {
    let {
            notchBackground: t,
            progress: n,
            size: i = "md",
            gradientStart: r = _.A.unsafe_rawColors.YELLOW_260.css,
            gradientEnd: u = _.A.unsafe_rawColors.GREEN_360.css,
            className: o,
            notchClassName: d,
            children: c,
        } = e,
        h = M[i],
        { ref: A, width: f } = (0, S.Ay)(),
        g = s.useMemo(() => (null != f ? D(f) : 0), [f]),
        E = s.useMemo(() => {
            let e = Math.abs(D((g * (100 - Math.max(0, Math.min(100, n)))) / 100) - g);
            return { transform: `translateX(${e}px)` };
        }, [n, g]),
        I = s.useMemo(
            () => ({ width: `${g}px`, background: n <= 0 ? "none" : `linear-gradient(to right, ${r}, ${u})` }),
            [u, r, n, g],
        );
    return (0, l.jsxs)("div", {
        className: m.iE,
        ref: A,
        style: { height: h },
        children: [
            (0, l.jsxs)("div", {
                className: a()(m.kL, o),
                style: I,
                children: [
                    (0, l.jsx)("div", { className: m.qB, style: E }),
                    0 !== g && (0, l.jsx)(C, { width: g, height: h, className: a()(m.DR, N[t], d) }),
                ],
            }),
            c,
        ],
    });
}
var y = n(51760),
    U = n(763827),
    O = n(954571),
    L = n(652215),
    R = n(985018),
    w = n(32854);
class P extends s.PureComponent {
    _initTimeout = new h.Ep();
    _silenceTimeout = new h.Ep();
    _messageTimeout = new h.Ep();
    _micTestStartTime;
    state = { volume: -100, isMicTesting: !1, isDetectingInput: !0, didDeafenUser: !1 };
    componentDidMount() {
        this._initTimeout.start(1e3, this.setupVoiceActivity);
    }
    setupVoiceActivity = () => {
        y.Ay.getMediaEngine().on(c.bg.VoiceActivity, this.handleVoiceActivity);
    };
    componentWillUnmount() {
        this._initTimeout.stop(),
            this._silenceTimeout.stop(),
            this._micTestStop(),
            y.Ay.getMediaEngine().removeListener(c.bg.VoiceActivity, this.handleVoiceActivity);
    }
    handleVoiceActivity = (e) => {
        let { isMicTesting: t } = this.state;
        if (t && e <= -100) {
            this._silenceTimeout.isStarted() ||
                this._silenceTimeout.start(2e3, () => {
                    this.setState({ isDetectingInput: !1 });
                }),
                this.setState({ volume: -100 });
            return;
        }
        this._silenceTimeout.stop(), this.setState({ volume: e, isDetectingInput: !0 });
    };
    _micTestStart() {
        let {
                isVoiceConnected: e,
                inputDeviceName: t,
                inputVolume: n,
                outputDeviceName: i,
                outputVolume: l,
                inputMode: s,
                vadAutoThreshold: r,
                vadThreshold: a,
                location: u,
                isDeafened: o,
            } = this.props,
            d = !1;
        e && !o && (I.A.toggleSelfDeaf(), (d = !0)),
            I.A.setLoopback("mic_test", !0),
            (this._micTestStartTime = Date.now()),
            this.setState({ isMicTesting: !0, isDetectingInput: !0, didDeafenUser: d }),
            O.default.track(L.HAw.MIC_TESTING_STARTED, {
                input_device_name: t,
                input_device_volume: n,
                output_device_name: i,
                output_device_volume: l,
                input_mode: s,
                input_sensitivity_is_automatic: r,
                input_sensitivity_threshold: Math.round(a),
                location: u,
            });
    }
    _micTestStop() {
        let { didDeafenUser: e, isMicTesting: t } = this.state,
            { isVoiceConnected: n, isDeafened: i } = this.props;
        t &&
            (n && i && e && I.A.toggleSelfDeaf(),
            I.A.setLoopback("mic_test", !1),
            this.setState({ isMicTesting: !1, didDeafenUser: !1 }),
            null != this._micTestStartTime &&
                O.default.track(L.HAw.MIC_TESTING_STOPPED, {
                    testing_duration: Math.round((Date.now() - this._micTestStartTime) / 1e3),
                }));
    }
    handleToggleMicTest = () => {
        this.state.isMicTesting ? this._micTestStop() : this._micTestStart();
    };
    renderCaption() {
        let { captionVoice: e, captionNoVoice: t } = this.props,
            { isMicTesting: n, isDetectingInput: i } = this.state;
        return null == e && null == t
            ? null
            : (0, l.jsx)(f.E, {
                  variant: "text-xs/normal",
                  color: "text-subtle",
                  className: w.Qe,
                  children: n ? (i ? e : t) : void 0,
              });
    }
    render() {
        let {
                isVoiceConnected: e,
                title: t,
                description: n,
                notchBackground: i,
                buttonTest: s = "",
                buttonStop: r = "",
                buttonVariant: u = "secondary",
                size: o = "sm",
                isDeafened: d,
                buttonMinWidth: c,
                measureButtonRef: h,
                meterOnly: I = !1,
                containerClassName: S,
                helpText: _,
            } = this.props,
            { isMicTesting: T, volume: C, isDetectingInput: m } = this.state,
            p = e && !T ? R.intl.string(R.t["9viE2A"]) : null;
        T && e && !d && this._micTestStop();
        let N = r.length >= s.length ? r : s;
        return (0, l.jsxs)("div", {
            className: a()(w.kL, S),
            children: [
                (0, l.jsx)(g.D, {
                    label: t ?? void 0,
                    hideLabel: I,
                    description: I ? null : n,
                    children: (0, l.jsxs)("div", {
                        className: a()(w.ak, { [w.mi]: I, [w.EX]: "sm" === o }),
                        children: [
                            !I &&
                                (0, l.jsxs)(l.Fragment, {
                                    children: [
                                        (0, l.jsx)("div", {
                                            className: w.km,
                                            "aria-hidden": !0,
                                            children: (0, l.jsx)(E.$, { buttonRef: h, size: o, variant: u, text: N }),
                                        }),
                                        (0, l.jsx)(A.m, {
                                            text: p,
                                            children: (0, l.jsx)("div", {
                                                style: null != c ? { minWidth: c } : { visibility: "hidden" },
                                                children: (0, l.jsx)(E.$, {
                                                    size: o,
                                                    variant: u,
                                                    text: T ? r : s,
                                                    onClick: this.handleToggleMicTest,
                                                    fullWidth: !0,
                                                }),
                                            }),
                                        }),
                                    ],
                                }),
                            (0, l.jsx)(v, {
                                progress: T || I ? C + 100 : 0,
                                notchBackground: i,
                                notchClassName: this.props.notchClassName,
                                size: o,
                            }),
                            this.renderCaption(),
                        ],
                    }),
                }),
                null != _ &&
                    (0, l.jsx)(f.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        style: { visibility: T && !m ? "hidden" : "visible" },
                        children: _,
                    }),
            ],
        });
    }
}
function G(e) {
    let {
            inputDevice: t,
            outputDevice: n,
            threshold: i,
            autoThreshold: s,
            inputVolume: r,
            outputVolume: a,
            inputMode: u,
            isDeafened: c,
        } = (0, d.cf)([y.Ay], () => {
            let e = y.Ay.getInputDeviceId(),
                t = y.Ay.getInputDevices(),
                n = o().find(t, (t) => {
                    let { id: n } = t;
                    return n === e;
                }),
                i = y.Ay.getOutputDeviceId(),
                l = y.Ay.getOutputDevices(),
                s = o().find(l, (e) => {
                    let { id: t } = e;
                    return t === i;
                }),
                { threshold: r, autoThreshold: a } = y.Ay.getModeOptions(),
                u = y.Ay.getInputVolume(),
                d = y.Ay.getOutputVolume();
            return {
                inputDevice: n,
                outputDevice: s,
                threshold: r,
                autoThreshold: a,
                inputVolume: u,
                outputVolume: d,
                inputMode: y.Ay.getMode(),
                isDeafened: y.Ay.isSelfDeaf(),
            };
        }),
        h = (0, d.bG)([U.A], () => U.A.isConnected()),
        { ref: A, width: f } = (0, S.Ay)();
    return (0, l.jsx)(P, {
        isVoiceConnected: h,
        inputVolume: r,
        outputVolume: a,
        inputMode: u,
        isDeafened: c,
        vadThreshold: i,
        vadAutoThreshold: s,
        inputDeviceName: t?.name ?? "",
        outputDeviceName: n?.name ?? "",
        measureButtonRef: A,
        buttonMinWidth: f,
        ...e,
    });
}
