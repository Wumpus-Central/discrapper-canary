n.d(t, { V: () => N, A: () => P });
var i,
    l = n(627968),
    s = n(64700),
    r = n(503698),
    a = n.n(r),
    o = n(735438),
    u = n.n(o),
    d = n(17928),
    c = n(459838),
    h = n(451988),
    g = n(990078),
    A = n(834730),
    f = n(452027),
    E = n(821609),
    I = n(827343),
    S = n(765671),
    m = n(661531),
    p = n(953727);
function C(e) {
    let { width: t = 80, height: n = 28, color: i = "currentColor", foreground: r, ...a } = e,
        o = `pill-frame-pattern-${n}`,
        u = s.useMemo(() => {
            let e;
            return (
                (e = n - 8),
                `m0 0h8v${n}h-8zm4 2c-1.1045695 0-2 .8954305-2 2v${e}c0 1.1045695.8954305 2 2 2s2-.8954305 2-2v-${e}c0-1.1045695-.8954305-2-2-2z`
            );
        }, [n]);
    return (0, l.jsxs)("svg", {
        ...(0, p.A)(a),
        width: t,
        height: n,
        viewBox: `0 0 ${t} ${n}`,
        children: [
            (0, l.jsx)("pattern", {
                id: o,
                width: 8 / t,
                height: "1",
                children: (0, l.jsx)("path", { d: u, fillRule: "evenodd", fill: i, className: r }),
            }),
            (0, l.jsx)("rect", { fill: `url(#${o})`, height: "100%", width: "100%" }),
        ],
    });
}
var _ = n(75753),
    N = (((i = {}).BLACK = "BLACK"), (i.GRAY = "GRAY"), i);
let T = { BLACK: _.Ql, GRAY: _.wm },
    v = { sm: 20, md: 28 };
function M(e) {
    return 8 * Math.round(e / 8);
}
function y(e) {
    let {
            notchBackground: t,
            progress: n,
            size: i = "md",
            gradientStart: r = m.A.unsafe_rawColors.YELLOW_260.css,
            gradientEnd: o = m.A.unsafe_rawColors.GREEN_360.css,
            className: u,
            notchClassName: d,
            children: c,
        } = e,
        h = v[i],
        { ref: g, width: A } = (0, S.Ay)(),
        f = s.useMemo(() => (null != A ? M(A) : 0), [A]),
        E = s.useMemo(() => {
            let e = Math.abs(M((f * (100 - Math.max(0, Math.min(100, n)))) / 100) - f);
            return { transform: `translateX(${e}px)` };
        }, [n, f]),
        I = s.useMemo(
            () => ({ width: `${f}px`, background: n <= 0 ? "none" : `linear-gradient(to right, ${r}, ${o})` }),
            [o, r, n, f],
        );
    return (0, l.jsxs)("div", {
        className: _.iE,
        ref: g,
        style: { height: h },
        children: [
            (0, l.jsxs)("div", {
                className: a()(_.kL, u),
                style: I,
                children: [
                    (0, l.jsx)("div", { className: _.qB, style: E }),
                    0 !== f && (0, l.jsx)(C, { width: f, height: h, className: a()(_.DR, T[t], d) }),
                ],
            }),
            c,
        ],
    });
}
var D = n(51760),
    x = n(763827),
    R = n(174459),
    O = n(652215),
    U = n(375708),
    L = n(32854);
class w extends s.PureComponent {
    _initTimeout = new h.Ep();
    _silenceTimeout = new h.Ep();
    _messageTimeout = new h.Ep();
    _micTestStartTime;
    state = { volume: -100, isMicTesting: !1, isDetectingInput: !0, didDeafenUser: !1 };
    componentDidMount() {
        this._initTimeout.start(1e3, this.setupVoiceActivity);
    }
    setupVoiceActivity = () => {
        D.Ay.getMediaEngine().on(c.bg.VoiceActivity, this.handleVoiceActivity);
    };
    componentWillUnmount() {
        this._initTimeout.stop(),
            this._silenceTimeout.stop(),
            this._micTestStop(),
            D.Ay.getMediaEngine().removeListener(c.bg.VoiceActivity, this.handleVoiceActivity);
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
                location: o,
                isDeafened: u,
            } = this.props,
            d = !1;
        e && !u && (I.A.toggleSelfDeaf(), (d = !0)),
            I.A.setLoopback("mic_test", !0),
            (this._micTestStartTime = Date.now()),
            this.setState({ isMicTesting: !0, isDetectingInput: !0, didDeafenUser: d }),
            R.default.track(O.HAw.MIC_TESTING_STARTED, {
                input_device_name: t,
                input_device_volume: n,
                output_device_name: i,
                output_device_volume: l,
                input_mode: s,
                input_sensitivity_is_automatic: r,
                input_sensitivity_threshold: Math.round(a),
                location: o,
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
                R.default.track(O.HAw.MIC_TESTING_STOPPED, {
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
            : (0, l.jsx)(A.E, {
                  variant: "text-xs/normal",
                  color: "text-subtle",
                  className: L.Qe,
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
                buttonVariant: o = "secondary",
                size: u = "sm",
                isDeafened: d,
                buttonMinWidth: c,
                measureButtonRef: h,
                meterOnly: I = !1,
                containerClassName: S,
                helpText: m,
            } = this.props,
            { isMicTesting: p, volume: C, isDetectingInput: _ } = this.state,
            N = e && !p ? U.intl.string(U.t["9viE2A"]) : null;
        p && e && !d && this._micTestStop();
        let T = r.length >= s.length ? r : s;
        return (0, l.jsxs)("div", {
            className: a()(L.kL, S),
            children: [
                (0, l.jsx)(f.D, {
                    label: t ?? void 0,
                    hideLabel: I,
                    description: I ? null : n,
                    children: (0, l.jsxs)("div", {
                        className: a()(L.ak, { [L.mi]: I, [L.EX]: "sm" === u }),
                        children: [
                            !I &&
                                (0, l.jsxs)(l.Fragment, {
                                    children: [
                                        (0, l.jsx)("div", {
                                            className: L.km,
                                            "aria-hidden": !0,
                                            children: (0, l.jsx)(E.$, { buttonRef: h, size: u, variant: o, text: T }),
                                        }),
                                        (0, l.jsx)(g.m, {
                                            text: N,
                                            children: (0, l.jsx)("div", {
                                                style: null != c ? { minWidth: c } : { visibility: "hidden" },
                                                children: (0, l.jsx)(E.$, {
                                                    size: u,
                                                    variant: o,
                                                    text: p ? r : s,
                                                    onClick: this.handleToggleMicTest,
                                                    fullWidth: !0,
                                                }),
                                            }),
                                        }),
                                    ],
                                }),
                            (0, l.jsx)(y, {
                                progress: p || I ? C + 100 : 0,
                                notchBackground: i,
                                notchClassName: this.props.notchClassName,
                                size: u,
                            }),
                            this.renderCaption(),
                        ],
                    }),
                }),
                null != m &&
                    (0, l.jsx)(A.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        style: { visibility: p && !_ ? "hidden" : "visible" },
                        children: m,
                    }),
            ],
        });
    }
}
function P(e) {
    let {
            inputDevice: t,
            outputDevice: n,
            threshold: i,
            autoThreshold: s,
            inputVolume: r,
            outputVolume: a,
            inputMode: o,
            isDeafened: c,
        } = (0, d.cf)([D.Ay], () => {
            let e = D.Ay.getInputDeviceId(),
                t = D.Ay.getInputDevices(),
                n = u().find(t, (t) => {
                    let { id: n } = t;
                    return n === e;
                }),
                i = D.Ay.getOutputDeviceId(),
                l = D.Ay.getOutputDevices(),
                s = u().find(l, (e) => {
                    let { id: t } = e;
                    return t === i;
                }),
                { threshold: r, autoThreshold: a } = D.Ay.getModeOptions(),
                o = D.Ay.getInputVolume(),
                d = D.Ay.getOutputVolume();
            return {
                inputDevice: n,
                outputDevice: s,
                threshold: r,
                autoThreshold: a,
                inputVolume: o,
                outputVolume: d,
                inputMode: D.Ay.getMode(),
                isDeafened: D.Ay.isSelfDeaf(),
            };
        }),
        h = (0, d.bG)([x.A], () => x.A.isConnected()),
        { ref: g, width: A } = (0, S.Ay)();
    return (0, l.jsx)(w, {
        isVoiceConnected: h,
        inputVolume: r,
        outputVolume: a,
        inputMode: o,
        isDeafened: c,
        vadThreshold: i,
        vadAutoThreshold: s,
        inputDeviceName: t?.name ?? "",
        outputDeviceName: n?.name ?? "",
        measureButtonRef: g,
        buttonMinWidth: A,
        ...e,
    });
}
