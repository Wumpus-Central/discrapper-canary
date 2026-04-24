n.d(t, { V: () => x, A: () => k });
var i,
    l = n(627968),
    s = n(64700),
    r = n(503698),
    a = n.n(r),
    o = n(735438),
    u = n.n(o),
    c = n(17928),
    d = n(205693),
    m = n(451988),
    h = n(990078),
    A = n(834730),
    v = n(452027),
    g = n(821609),
    p = n(827343),
    f = n(765671),
    T = n(661531),
    b = n(953727);
function y(e) {
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
        ...(0, b.A)(a),
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
    x = (((i = {}).BLACK = "BLACK"), (i.GRAY = "GRAY"), i);
let C = { BLACK: _.Ql, GRAY: _.wm },
    I = { sm: 20, md: 28 };
function M(e) {
    return 8 * Math.round(e / 8);
}
function D(e) {
    let {
            notchBackground: t,
            progress: n,
            size: i = "md",
            gradientStart: r = T.A.unsafe_rawColors.YELLOW_260.css,
            gradientEnd: o = T.A.unsafe_rawColors.GREEN_360.css,
            className: u,
            notchClassName: c,
            children: d,
        } = e,
        m = I[i],
        { ref: h, width: A } = (0, f.Ay)(),
        v = s.useMemo(() => (null != A ? M(A) : 0), [A]),
        g = s.useMemo(() => {
            let e = Math.abs(M((v * (100 - Math.max(0, Math.min(100, n)))) / 100) - v);
            return { transform: `translateX(${e}px)` };
        }, [n, v]),
        p = s.useMemo(
            () => ({ width: `${v}px`, background: n <= 0 ? "none" : `linear-gradient(to right, ${r}, ${o})` }),
            [o, r, n, v],
        );
    return (0, l.jsxs)("div", {
        className: _.iE,
        ref: h,
        style: { height: m },
        children: [
            (0, l.jsxs)("div", {
                className: a()(_.kL, u),
                style: p,
                children: [
                    (0, l.jsx)("div", { className: _.qB, style: g }),
                    0 !== v && (0, l.jsx)(y, { width: v, height: m, className: a()(_.DR, C[t], c) }),
                ],
            }),
            d,
        ],
    });
}
var j = n(969341),
    O = n(763827),
    S = n(954571),
    E = n(652215),
    U = n(985018),
    L = n(32854);
class N extends s.PureComponent {
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
            c = !1;
        e && !u && (p.A.toggleSelfDeaf(), (c = !0)),
            p.A.setLoopback("mic_test", !0),
            (this._micTestStartTime = Date.now()),
            this.setState({ isMicTesting: !0, isDetectingInput: !0, didDeafenUser: c }),
            S.default.track(E.HAw.MIC_TESTING_STARTED, {
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
            (n && i && e && p.A.toggleSelfDeaf(),
            p.A.setLoopback("mic_test", !1),
            this.setState({ isMicTesting: !1, didDeafenUser: !1 }),
            null != this._micTestStartTime &&
                S.default.track(E.HAw.MIC_TESTING_STOPPED, {
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
                isDeafened: c,
                buttonMinWidth: d,
                measureButtonRef: m,
                meterOnly: p = !1,
                containerClassName: f,
                helpText: T,
            } = this.props,
            { isMicTesting: b, volume: y, isDetectingInput: _ } = this.state,
            x = e && !b ? U.intl.string(U.t["9viE2A"]) : null;
        b && e && !c && this._micTestStop();
        let C = r.length >= s.length ? r : s;
        return (0, l.jsxs)("div", {
            className: a()(L.kL, f),
            children: [
                (0, l.jsx)(v.D, {
                    label: t ?? void 0,
                    hideLabel: p,
                    description: p ? null : n,
                    children: (0, l.jsxs)("div", {
                        className: a()(L.ak, { [L.mi]: p, [L.EX]: "sm" === u }),
                        children: [
                            !p &&
                                (0, l.jsxs)(l.Fragment, {
                                    children: [
                                        (0, l.jsx)("div", {
                                            className: L.km,
                                            "aria-hidden": !0,
                                            children: (0, l.jsx)(g.$, { buttonRef: m, size: u, variant: o, text: C }),
                                        }),
                                        (0, l.jsx)(h.m, {
                                            text: x,
                                            children: (0, l.jsx)("div", {
                                                style: null != d ? { minWidth: d } : { visibility: "hidden" },
                                                children: (0, l.jsx)(g.$, {
                                                    size: u,
                                                    variant: o,
                                                    text: b ? r : s,
                                                    onClick: this.handleToggleMicTest,
                                                    fullWidth: !0,
                                                }),
                                            }),
                                        }),
                                    ],
                                }),
                            (0, l.jsx)(D, {
                                progress: b || p ? y + 100 : 0,
                                notchBackground: i,
                                notchClassName: this.props.notchClassName,
                                size: u,
                            }),
                            this.renderCaption(),
                        ],
                    }),
                }),
                null != T &&
                    (0, l.jsx)(A.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        style: { visibility: b && !_ ? "hidden" : "visible" },
                        children: T,
                    }),
            ],
        });
    }
}
function k(e) {
    let {
            inputDevice: t,
            outputDevice: n,
            threshold: i,
            autoThreshold: s,
            inputVolume: r,
            outputVolume: a,
            inputMode: o,
            isDeafened: d,
        } = (0, c.cf)([j.Ay], () => {
            let e = j.Ay.getInputDeviceId(),
                t = j.Ay.getInputDevices(),
                n = u().find(t, (t) => {
                    let { id: n } = t;
                    return n === e;
                }),
                i = j.Ay.getOutputDeviceId(),
                l = j.Ay.getOutputDevices(),
                s = u().find(l, (e) => {
                    let { id: t } = e;
                    return t === i;
                }),
                { threshold: r, autoThreshold: a } = j.Ay.getModeOptions(),
                o = j.Ay.getInputVolume(),
                c = j.Ay.getOutputVolume();
            return {
                inputDevice: n,
                outputDevice: s,
                threshold: r,
                autoThreshold: a,
                inputVolume: o,
                outputVolume: c,
                inputMode: j.Ay.getMode(),
                isDeafened: j.Ay.isSelfDeaf(),
            };
        }),
        m = (0, c.bG)([O.A], () => O.A.isConnected()),
        { ref: h, width: A } = (0, f.Ay)();
    return (0, l.jsx)(N, {
        isVoiceConnected: m,
        inputVolume: r,
        outputVolume: a,
        inputMode: o,
        isDeafened: d,
        vadThreshold: i,
        vadAutoThreshold: s,
        inputDeviceName: t?.name ?? "",
        outputDeviceName: n?.name ?? "",
        measureButtonRef: h,
        buttonMinWidth: A,
        ...e,
    });
}
