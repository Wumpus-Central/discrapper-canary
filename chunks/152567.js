"use strict";
n.d(t, { V: () => N, A: () => w });
var i,
    r = n(627968),
    a = n(64700),
    s = n(503698),
    l = n.n(s),
    o = n(735438),
    d = n.n(o),
    c = n(17928),
    u = n(459838),
    _ = n(451988),
    E = n(990078),
    A = n(834730),
    h = n(452027),
    I = n(821609),
    f = n(827343),
    p = n(765671),
    T = n(661531),
    m = n(953727);
function g(e) {
    let { width: t = 80, height: n = 28, color: i = "currentColor", foreground: s, ...l } = e,
        o = `pill-frame-pattern-${n}`,
        d = a.useMemo(() => {
            let e;
            return (
                (e = n - 8),
                `m0 0h8v${n}h-8zm4 2c-1.1045695 0-2 .8954305-2 2v${e}c0 1.1045695.8954305 2 2 2s2-.8954305 2-2v-${e}c0-1.1045695-.8954305-2-2-2z`
            );
        }, [n]);
    return (0, r.jsxs)("svg", {
        ...(0, m.A)(l),
        width: t,
        height: n,
        viewBox: `0 0 ${t} ${n}`,
        children: [
            (0, r.jsx)("pattern", {
                id: o,
                width: 8 / t,
                height: "1",
                children: (0, r.jsx)("path", { d: d, fillRule: "evenodd", fill: i, className: s }),
            }),
            (0, r.jsx)("rect", { fill: `url(#${o})`, height: "100%", width: "100%" }),
        ],
    });
}
var S = n(75753),
    N = (((i = {}).BLACK = "BLACK"), (i.GRAY = "GRAY"), i);
let C = { BLACK: S.Ql, GRAY: S.wm },
    O = { sm: 20, md: 28 };
function R(e) {
    return 8 * Math.round(e / 8);
}
function L(e) {
    let {
            notchBackground: t,
            progress: n,
            size: i = "md",
            gradientStart: s = T.A.unsafe_rawColors.YELLOW_260.css,
            gradientEnd: o = T.A.unsafe_rawColors.GREEN_360.css,
            className: d,
            notchClassName: c,
            children: u,
        } = e,
        _ = O[i],
        { ref: E, width: A } = (0, p.Ay)(),
        h = a.useMemo(() => (null != A ? R(A) : 0), [A]),
        I = a.useMemo(() => {
            let e = Math.abs(R((h * (100 - Math.max(0, Math.min(100, n)))) / 100) - h);
            return { transform: `translateX(${e}px)` };
        }, [n, h]),
        f = a.useMemo(
            () => ({ width: `${h}px`, background: n <= 0 ? "none" : `linear-gradient(to right, ${s}, ${o})` }),
            [o, s, n, h],
        );
    return (0, r.jsxs)("div", {
        className: S.iE,
        ref: E,
        style: { height: _ },
        children: [
            (0, r.jsxs)("div", {
                className: l()(S.kL, d),
                style: f,
                children: [
                    (0, r.jsx)("div", { className: S.qB, style: I }),
                    0 !== h && (0, r.jsx)(g, { width: h, height: _, className: l()(S.DR, C[t], c) }),
                ],
            }),
            u,
        ],
    });
}
var D = n(186295),
    y = n(763827),
    v = n(174459),
    b = n(652215),
    M = n(375708),
    P = n(32854);
class U extends a.PureComponent {
    _initTimeout = new _.Ep();
    _silenceTimeout = new _.Ep();
    _messageTimeout = new _.Ep();
    _micTestStartTime;
    state = { volume: -100, isMicTesting: !1, isDetectingInput: !0, didDeafenUser: !1 };
    componentDidMount() {
        this._initTimeout.start(1e3, this.setupVoiceActivity);
    }
    setupVoiceActivity = () => {
        D.Ay.getMediaEngine().on(u.bg.VoiceActivity, this.handleVoiceActivity);
    };
    componentWillUnmount() {
        this._initTimeout.stop(),
            this._silenceTimeout.stop(),
            this._micTestStop(),
            D.Ay.getMediaEngine().removeListener(u.bg.VoiceActivity, this.handleVoiceActivity);
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
                inputMode: a,
                vadAutoThreshold: s,
                vadThreshold: l,
                location: o,
                isDeafened: d,
            } = this.props,
            c = !1;
        e && !d && (f.A.toggleSelfDeaf(), (c = !0)),
            f.A.setLoopback("mic_test", !0),
            (this._micTestStartTime = Date.now()),
            this.setState({ isMicTesting: !0, isDetectingInput: !0, didDeafenUser: c }),
            v.default.track(b.HAw.MIC_TESTING_STARTED, {
                input_device_name: t,
                input_device_volume: n,
                output_device_name: i,
                output_device_volume: r,
                input_mode: a,
                input_sensitivity_is_automatic: s,
                input_sensitivity_threshold: Math.round(l),
                location: o,
            });
    }
    _micTestStop() {
        let { didDeafenUser: e, isMicTesting: t } = this.state,
            { isVoiceConnected: n, isDeafened: i } = this.props;
        t &&
            (n && i && e && f.A.toggleSelfDeaf(),
            f.A.setLoopback("mic_test", !1),
            this.setState({ isMicTesting: !1, didDeafenUser: !1 }),
            null != this._micTestStartTime &&
                v.default.track(b.HAw.MIC_TESTING_STOPPED, {
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
                  children: (0, r.jsx)(A.E, {
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
                buttonTest: a = "",
                buttonStop: s = "",
                buttonVariant: o = "secondary",
                size: d = "sm",
                isDeafened: c,
                buttonMinWidth: u,
                measureButtonRef: _,
                meterOnly: f = !1,
                containerClassName: p,
                helpText: T,
            } = this.props,
            { isMicTesting: m, volume: g, isDetectingInput: S } = this.state,
            N = e && !m ? M.intl.string(M.t["9viE2A"]) : null;
        m && e && !c && this._micTestStop();
        let C = s.length >= a.length ? s : a;
        return (0, r.jsxs)("div", {
            className: l()(P.kL, p),
            children: [
                (0, r.jsx)(h.D, {
                    label: t ?? void 0,
                    hideLabel: f,
                    description: f ? null : n,
                    children: (0, r.jsxs)("div", {
                        className: l()(P.ak, { [P.mi]: f, [P.EX]: "sm" === d }),
                        children: [
                            !f &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)("div", {
                                            className: P.km,
                                            "aria-hidden": !0,
                                            children: (0, r.jsx)(I.$, {
                                                buttonRef: _,
                                                size: d,
                                                variant: o,
                                                text: C,
                                                tabIndex: -1,
                                            }),
                                        }),
                                        (0, r.jsx)(E.m, {
                                            text: N,
                                            children: (0, r.jsx)("div", {
                                                style: null != u ? { minWidth: u } : { opacity: 0 },
                                                children: (0, r.jsx)(I.$, {
                                                    size: d,
                                                    variant: o,
                                                    text: m ? s : a,
                                                    onClick: this.handleToggleMicTest,
                                                    fullWidth: !0,
                                                }),
                                            }),
                                        }),
                                    ],
                                }),
                            (0, r.jsx)(L, {
                                progress: m || f ? g + 100 : 0,
                                notchBackground: i,
                                notchClassName: this.props.notchClassName,
                                size: d,
                            }),
                            this.renderCaption(),
                        ],
                    }),
                }),
                null != T &&
                    (0, r.jsx)(A.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        style: { visibility: m && !S ? "hidden" : "visible" },
                        children: T,
                    }),
            ],
        });
    }
}
function w(e) {
    let {
            inputDevice: t,
            outputDevice: n,
            threshold: i,
            autoThreshold: a,
            inputVolume: s,
            outputVolume: l,
            inputMode: o,
            isDeafened: u,
        } = (0, c.cf)([D.Ay], () => {
            let e = D.Ay.getInputDeviceId(),
                t = D.Ay.getInputDevices(),
                n = d().find(t, (t) => {
                    let { id: n } = t;
                    return n === e;
                }),
                i = D.Ay.getOutputDeviceId(),
                r = D.Ay.getOutputDevices(),
                a = d().find(r, (e) => {
                    let { id: t } = e;
                    return t === i;
                }),
                { threshold: s, autoThreshold: l } = D.Ay.getModeOptions(),
                o = D.Ay.getInputVolume(),
                c = D.Ay.getOutputVolume();
            return {
                inputDevice: n,
                outputDevice: a,
                threshold: s,
                autoThreshold: l,
                inputVolume: o,
                outputVolume: c,
                inputMode: D.Ay.getMode(),
                isDeafened: D.Ay.isSelfDeaf(),
            };
        }),
        _ = (0, c.bG)([y.A], () => y.A.isConnected()),
        { ref: E, width: A } = (0, p.Ay)();
    return (0, r.jsx)(U, {
        isVoiceConnected: _,
        inputVolume: s,
        outputVolume: l,
        inputMode: o,
        isDeafened: u,
        vadThreshold: i,
        vadAutoThreshold: a,
        inputDeviceName: t?.name ?? "",
        outputDeviceName: n?.name ?? "",
        measureButtonRef: E,
        buttonMinWidth: A,
        ...e,
    });
}
