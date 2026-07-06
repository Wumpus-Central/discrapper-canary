"use strict";
n.d(t, { V: () => N, A: () => x });
var i,
    r = n(627968),
    s = n(64700),
    a = n(503698),
    o = n.n(a),
    l = n(735438),
    u = n.n(l),
    c = n(17928),
    d = n(459838),
    _ = n(451988),
    h = n(990078),
    f = n(834730),
    E = n(452027),
    p = n(821609),
    m = n(827343),
    g = n(765671),
    A = n(661531),
    I = n(953727);
function T(e) {
    let { width: t = 80, height: n = 28, color: i = "currentColor", foreground: a, ...o } = e,
        l = `pill-frame-pattern-${n}`,
        u = s.useMemo(() => {
            let e;
            return (
                (e = n - 8),
                `m0 0h8v${n}h-8zm4 2c-1.1045695 0-2 .8954305-2 2v${e}c0 1.1045695.8954305 2 2 2s2-.8954305 2-2v-${e}c0-1.1045695-.8954305-2-2-2z`
            );
        }, [n]);
    return (0, r.jsxs)("svg", {
        ...(0, I.A)(o),
        width: t,
        height: n,
        viewBox: `0 0 ${t} ${n}`,
        children: [
            (0, r.jsx)("pattern", {
                id: l,
                width: 8 / t,
                height: "1",
                children: (0, r.jsx)("path", { d: u, fillRule: "evenodd", fill: i, className: a }),
            }),
            (0, r.jsx)("rect", { fill: `url(#${l})`, height: "100%", width: "100%" }),
        ],
    });
}
var S = n(75753),
    N = (((i = {}).BLACK = "BLACK"), (i.GRAY = "GRAY"), i);
let C = { BLACK: S.Ql, GRAY: S.wm },
    y = { sm: 20, md: 28 };
function O(e) {
    return 8 * Math.round(e / 8);
}
function R(e) {
    let {
            notchBackground: t,
            progress: n,
            size: i = "md",
            gradientStart: a = A.A.unsafe_rawColors.YELLOW_260.css,
            gradientEnd: l = A.A.unsafe_rawColors.GREEN_360.css,
            className: u,
            notchClassName: c,
            children: d,
        } = e,
        _ = y[i],
        { ref: h, width: f } = (0, g.Ay)(),
        E = s.useMemo(() => (null != f ? O(f) : 0), [f]),
        p = s.useMemo(() => {
            let e = Math.abs(O((E * (100 - Math.max(0, Math.min(100, n)))) / 100) - E);
            return { transform: `translateX(${e}px)` };
        }, [n, E]),
        m = s.useMemo(
            () => ({ width: `${E}px`, background: n <= 0 ? "none" : `linear-gradient(to right, ${a}, ${l})` }),
            [l, a, n, E],
        );
    return (0, r.jsxs)("div", {
        className: S.iE,
        ref: h,
        style: { height: _ },
        children: [
            (0, r.jsxs)("div", {
                className: o()(S.kL, u),
                style: m,
                children: [
                    (0, r.jsx)("div", { className: S.qB, style: p }),
                    0 !== E && (0, r.jsx)(T, { width: E, height: _, className: o()(S.DR, C[t], c) }),
                ],
            }),
            d,
        ],
    });
}
var v = n(451409),
    b = n(763827),
    L = n(174459),
    D = n(652215),
    w = n(375708),
    P = n(32854);
class M extends s.PureComponent {
    _initTimeout = new _.Ep();
    _silenceTimeout = new _.Ep();
    _messageTimeout = new _.Ep();
    _micTestStartTime;
    state = { volume: -100, isMicTesting: !1, isDetectingInput: !0, didDeafenUser: !1 };
    componentDidMount() {
        this._initTimeout.start(1e3, this.setupVoiceActivity);
    }
    setupVoiceActivity = () => {
        v.Ay.getMediaEngine().on(d.bg.VoiceActivity, this.handleVoiceActivity);
    };
    componentWillUnmount() {
        this._initTimeout.stop(),
            this._silenceTimeout.stop(),
            this._micTestStop(),
            v.Ay.getMediaEngine().removeListener(d.bg.VoiceActivity, this.handleVoiceActivity);
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
                outputVolume: r,
                inputMode: s,
                vadAutoThreshold: a,
                vadThreshold: o,
                location: l,
                isDeafened: u,
            } = this.props,
            c = !1;
        e && !u && (m.A.toggleSelfDeaf(), (c = !0)),
            m.A.setLoopback("mic_test", !0),
            (this._micTestStartTime = Date.now()),
            this.setState({ isMicTesting: !0, isDetectingInput: !0, didDeafenUser: c }),
            L.default.track(D.HAw.MIC_TESTING_STARTED, {
                input_device_name: t,
                input_device_volume: n,
                output_device_name: i,
                output_device_volume: r,
                input_mode: s,
                input_sensitivity_is_automatic: a,
                input_sensitivity_threshold: Math.round(o),
                location: l,
            });
    }
    _micTestStop() {
        let { didDeafenUser: e, isMicTesting: t } = this.state,
            { isVoiceConnected: n, isDeafened: i } = this.props;
        t &&
            (n && i && e && m.A.toggleSelfDeaf(),
            m.A.setLoopback("mic_test", !1),
            this.setState({ isMicTesting: !1, didDeafenUser: !1 }),
            null != this._micTestStartTime &&
                L.default.track(D.HAw.MIC_TESTING_STOPPED, {
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
            : (0, r.jsx)("span", {
                  "aria-live": "polite",
                  "aria-atomic": "true",
                  className: P.b_,
                  children: (0, r.jsx)(f.E, {
                      variant: "text-xs/normal",
                      color: "text-subtle",
                      className: P.Qe,
                      children: n ? (i ? e : t) : void 0,
                  }),
              });
    }
    render() {
        let {
                isVoiceConnected: e,
                title: t,
                description: n,
                notchBackground: i,
                buttonTest: s = "",
                buttonStop: a = "",
                buttonVariant: l = "secondary",
                size: u = "sm",
                isDeafened: c,
                buttonMinWidth: d,
                measureButtonRef: _,
                meterOnly: m = !1,
                containerClassName: g,
                helpText: A,
            } = this.props,
            { isMicTesting: I, volume: T, isDetectingInput: S } = this.state,
            N = e && !I ? w.intl.string(w.t["9viE2A"]) : null;
        I && e && !c && this._micTestStop();
        let C = a.length >= s.length ? a : s;
        return (0, r.jsxs)("div", {
            className: o()(P.kL, g),
            children: [
                (0, r.jsx)(E.D, {
                    label: t ?? void 0,
                    hideLabel: m,
                    description: m ? null : n,
                    children: (0, r.jsxs)("div", {
                        className: o()(P.ak, { [P.mi]: m, [P.EX]: "sm" === u }),
                        children: [
                            !m &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)("div", {
                                            className: P.km,
                                            "aria-hidden": !0,
                                            children: (0, r.jsx)(p.$, { buttonRef: _, size: u, variant: l, text: C }),
                                        }),
                                        (0, r.jsx)(h.m, {
                                            text: N,
                                            children: (0, r.jsx)("div", {
                                                style: null != d ? { minWidth: d } : { visibility: "hidden" },
                                                children: (0, r.jsx)(p.$, {
                                                    size: u,
                                                    variant: l,
                                                    text: I ? a : s,
                                                    onClick: this.handleToggleMicTest,
                                                    fullWidth: !0,
                                                }),
                                            }),
                                        }),
                                    ],
                                }),
                            (0, r.jsx)(R, {
                                progress: I || m ? T + 100 : 0,
                                notchBackground: i,
                                notchClassName: this.props.notchClassName,
                                size: u,
                            }),
                            this.renderCaption(),
                        ],
                    }),
                }),
                null != A &&
                    (0, r.jsx)(f.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        style: { visibility: I && !S ? "hidden" : "visible" },
                        children: A,
                    }),
            ],
        });
    }
}
function x(e) {
    let {
            inputDevice: t,
            outputDevice: n,
            threshold: i,
            autoThreshold: s,
            inputVolume: a,
            outputVolume: o,
            inputMode: l,
            isDeafened: d,
        } = (0, c.cf)([v.Ay], () => {
            let e = v.Ay.getInputDeviceId(),
                t = v.Ay.getInputDevices(),
                n = u().find(t, (t) => {
                    let { id: n } = t;
                    return n === e;
                }),
                i = v.Ay.getOutputDeviceId(),
                r = v.Ay.getOutputDevices(),
                s = u().find(r, (e) => {
                    let { id: t } = e;
                    return t === i;
                }),
                { threshold: a, autoThreshold: o } = v.Ay.getModeOptions(),
                l = v.Ay.getInputVolume(),
                c = v.Ay.getOutputVolume();
            return {
                inputDevice: n,
                outputDevice: s,
                threshold: a,
                autoThreshold: o,
                inputVolume: l,
                outputVolume: c,
                inputMode: v.Ay.getMode(),
                isDeafened: v.Ay.isSelfDeaf(),
            };
        }),
        _ = (0, c.bG)([b.A], () => b.A.isConnected()),
        { ref: h, width: f } = (0, g.Ay)();
    return (0, r.jsx)(M, {
        isVoiceConnected: _,
        inputVolume: a,
        outputVolume: o,
        inputMode: l,
        isDeafened: d,
        vadThreshold: i,
        vadAutoThreshold: s,
        inputDeviceName: t?.name ?? "",
        outputDeviceName: n?.name ?? "",
        measureButtonRef: h,
        buttonMinWidth: f,
        ...e,
    });
}
