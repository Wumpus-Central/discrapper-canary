n.d(e, { V: () => b, A: () => V });
var i,
    s = n(627968),
    l = n(64700),
    r = n(503698),
    a = n.n(r),
    u = n(735438),
    o = n.n(u),
    c = n(17928),
    d = n(205693),
    m = n(451988),
    h = n(990078),
    p = n(834730),
    A = n(452027),
    g = n(821609),
    v = n(827343),
    T = n(765671),
    _ = n(661531),
    f = n(953727);
function y(t) {
    let { width: e = 80, height: n = 28, color: i = "currentColor", foreground: r, ...a } = t,
        u = `pill-frame-pattern-${n}`,
        o = l.useMemo(() => {
            let t;
            return (
                (t = n - 8),
                `m0 0h8v${n}h-8zm4 2c-1.1045695 0-2 .8954305-2 2v${t}c0 1.1045695.8954305 2 2 2s2-.8954305 2-2v-${t}c0-1.1045695-.8954305-2-2-2z`
            );
        }, [n]);
    return (0, s.jsxs)("svg", {
        ...(0, f.A)(a),
        width: e,
        height: n,
        viewBox: `0 0 ${e} ${n}`,
        children: [
            (0, s.jsx)("pattern", {
                id: u,
                width: 8 / e,
                height: "1",
                children: (0, s.jsx)("path", { d: o, fillRule: "evenodd", fill: i, className: r }),
            }),
            (0, s.jsx)("rect", { fill: `url(#${u})`, height: "100%", width: "100%" }),
        ],
    });
}
var C = n(75753),
    b = (((i = {}).BLACK = "BLACK"), (i.GRAY = "GRAY"), i);
let x = { BLACK: C.Ql, GRAY: C.wm },
    I = { sm: 20, md: 28 };
function M(t) {
    return 8 * Math.round(t / 8);
}
function S(t) {
    let {
            notchBackground: e,
            progress: n,
            size: i = "md",
            gradientStart: r = _.A.unsafe_rawColors.YELLOW_260.css,
            gradientEnd: u = _.A.unsafe_rawColors.GREEN_360.css,
            className: o,
            notchClassName: c,
            children: d,
        } = t,
        m = I[i],
        { ref: h, width: p } = (0, T.Ay)(),
        A = l.useMemo(() => (null != p ? M(p) : 0), [p]),
        g = l.useMemo(() => {
            let t = Math.abs(M((A * (100 - Math.max(0, Math.min(100, n)))) / 100) - A);
            return { transform: `translateX(${t}px)` };
        }, [n, A]),
        v = l.useMemo(
            () => ({ width: `${A}px`, background: n <= 0 ? "none" : `linear-gradient(to right, ${r}, ${u})` }),
            [u, r, n, A],
        );
    return (0, s.jsxs)("div", {
        className: C.iE,
        ref: h,
        style: { height: m },
        children: [
            (0, s.jsxs)("div", {
                className: a()(C.kL, o),
                style: v,
                children: [
                    (0, s.jsx)("div", { className: C.qB, style: g }),
                    0 !== A && (0, s.jsx)(y, { width: A, height: m, className: a()(C.DR, x[e], c) }),
                ],
            }),
            d,
        ],
    });
}
var j = n(51760),
    O = n(763827),
    D = n(954571),
    E = n(652215),
    k = n(985018),
    N = n(32854);
class L extends l.PureComponent {
    _initTimeout = new m.Ep();
    _silenceTimeout = new m.Ep();
    _messageTimeout = new m.Ep();
    _micTestStartTime;
    state = { volume: -100, isMicTesting: !1, isDetectingInput: !0, didDeafenUser: !1 };
    componentDidMount() {
        this._initTimeout.start(1e3, this.setupVoiceActivity);
    }
    setupVoiceActivity = () => {
        j.Ay.getMediaEngine().on(d.bg.VoiceActivity, this.handleVoiceActivity);
    };
    componentWillUnmount() {
        this._initTimeout.stop(),
            this._silenceTimeout.stop(),
            this._micTestStop(),
            j.Ay.getMediaEngine().removeListener(d.bg.VoiceActivity, this.handleVoiceActivity);
    }
    handleVoiceActivity = (t) => {
        let { isMicTesting: e } = this.state;
        if (e && t <= -100) {
            this._silenceTimeout.isStarted() ||
                this._silenceTimeout.start(2e3, () => {
                    this.setState({ isDetectingInput: !1 });
                }),
                this.setState({ volume: -100 });
            return;
        }
        this._silenceTimeout.stop(), this.setState({ volume: t, isDetectingInput: !0 });
    };
    _micTestStart() {
        let {
                isVoiceConnected: t,
                inputDeviceName: e,
                inputVolume: n,
                outputDeviceName: i,
                outputVolume: s,
                inputMode: l,
                vadAutoThreshold: r,
                vadThreshold: a,
                location: u,
                isDeafened: o,
            } = this.props,
            c = !1;
        t && !o && (v.A.toggleSelfDeaf(), (c = !0)),
            v.A.setLoopback("mic_test", !0),
            (this._micTestStartTime = Date.now()),
            this.setState({ isMicTesting: !0, isDetectingInput: !0, didDeafenUser: c }),
            D.default.track(E.HAw.MIC_TESTING_STARTED, {
                input_device_name: e,
                input_device_volume: n,
                output_device_name: i,
                output_device_volume: s,
                input_mode: l,
                input_sensitivity_is_automatic: r,
                input_sensitivity_threshold: Math.round(a),
                location: u,
            });
    }
    _micTestStop() {
        let { didDeafenUser: t, isMicTesting: e } = this.state,
            { isVoiceConnected: n, isDeafened: i } = this.props;
        e &&
            (n && i && t && v.A.toggleSelfDeaf(),
            v.A.setLoopback("mic_test", !1),
            this.setState({ isMicTesting: !1, didDeafenUser: !1 }),
            null != this._micTestStartTime &&
                D.default.track(E.HAw.MIC_TESTING_STOPPED, {
                    testing_duration: Math.round((Date.now() - this._micTestStartTime) / 1e3),
                }));
    }
    handleToggleMicTest = () => {
        this.state.isMicTesting ? this._micTestStop() : this._micTestStart();
    };
    renderCaption() {
        let { captionVoice: t, captionNoVoice: e } = this.props,
            { isMicTesting: n, isDetectingInput: i } = this.state;
        return null == t && null == e
            ? null
            : (0, s.jsx)(p.E, {
                  variant: "text-xs/normal",
                  color: "text-subtle",
                  className: N.Qe,
                  children: n ? (i ? t : e) : void 0,
              });
    }
    render() {
        let {
                isVoiceConnected: t,
                title: e,
                description: n,
                notchBackground: i,
                buttonTest: l = "",
                buttonStop: r = "",
                buttonVariant: u = "secondary",
                size: o = "sm",
                isDeafened: c,
                buttonMinWidth: d,
                measureButtonRef: m,
                meterOnly: v = !1,
                containerClassName: T,
                helpText: _,
            } = this.props,
            { isMicTesting: f, volume: y, isDetectingInput: C } = this.state,
            b = t && !f ? k.intl.string(k.t["9viE2A"]) : null;
        f && t && !c && this._micTestStop();
        let x = r.length >= l.length ? r : l;
        return (0, s.jsxs)("div", {
            className: a()(N.kL, T),
            children: [
                (0, s.jsx)(A.D, {
                    label: e ?? void 0,
                    hideLabel: v,
                    description: v ? null : n,
                    children: (0, s.jsxs)("div", {
                        className: a()(N.ak, { [N.mi]: v, [N.EX]: "sm" === o }),
                        children: [
                            !v &&
                                (0, s.jsxs)(s.Fragment, {
                                    children: [
                                        (0, s.jsx)("div", {
                                            className: N.km,
                                            "aria-hidden": !0,
                                            children: (0, s.jsx)(g.$, { buttonRef: m, size: o, variant: u, text: x }),
                                        }),
                                        (0, s.jsx)(h.m, {
                                            text: b,
                                            children: (0, s.jsx)("div", {
                                                style: null != d ? { minWidth: d } : { visibility: "hidden" },
                                                children: (0, s.jsx)(g.$, {
                                                    size: o,
                                                    variant: u,
                                                    text: f ? r : l,
                                                    onClick: this.handleToggleMicTest,
                                                    fullWidth: !0,
                                                }),
                                            }),
                                        }),
                                    ],
                                }),
                            (0, s.jsx)(S, {
                                progress: f || v ? y + 100 : 0,
                                notchBackground: i,
                                notchClassName: this.props.notchClassName,
                                size: o,
                            }),
                            this.renderCaption(),
                        ],
                    }),
                }),
                null != _ &&
                    (0, s.jsx)(p.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        style: { visibility: f && !C ? "hidden" : "visible" },
                        children: _,
                    }),
            ],
        });
    }
}
function V(t) {
    let {
            inputDevice: e,
            outputDevice: n,
            threshold: i,
            autoThreshold: l,
            inputVolume: r,
            outputVolume: a,
            inputMode: u,
            isDeafened: d,
        } = (0, c.cf)([j.Ay], () => {
            let t = j.Ay.getInputDeviceId(),
                e = j.Ay.getInputDevices(),
                n = o().find(e, (e) => {
                    let { id: n } = e;
                    return n === t;
                }),
                i = j.Ay.getOutputDeviceId(),
                s = j.Ay.getOutputDevices(),
                l = o().find(s, (t) => {
                    let { id: e } = t;
                    return e === i;
                }),
                { threshold: r, autoThreshold: a } = j.Ay.getModeOptions(),
                u = j.Ay.getInputVolume(),
                c = j.Ay.getOutputVolume();
            return {
                inputDevice: n,
                outputDevice: l,
                threshold: r,
                autoThreshold: a,
                inputVolume: u,
                outputVolume: c,
                inputMode: j.Ay.getMode(),
                isDeafened: j.Ay.isSelfDeaf(),
            };
        }),
        m = (0, c.bG)([O.A], () => O.A.isConnected()),
        { ref: h, width: p } = (0, T.Ay)();
    return (0, s.jsx)(L, {
        isVoiceConnected: m,
        inputVolume: r,
        outputVolume: a,
        inputMode: u,
        isDeafened: d,
        vadThreshold: i,
        vadAutoThreshold: l,
        inputDeviceName: e?.name ?? "",
        outputDeviceName: n?.name ?? "",
        measureButtonRef: h,
        buttonMinWidth: p,
        ...t,
    });
}
