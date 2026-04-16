n.d(t, { A: () => T, V: () => _.V });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(735438),
    o = n.n(r),
    c = n(311907),
    d = n(205693),
    u = n(451988),
    h = n(990078),
    m = n(397927),
    A = n(827343),
    g = n(765671),
    _ = n(123902),
    p = n(430452),
    f = n(383501),
    E = n(954571),
    C = n(652215),
    x = n(985018),
    S = n(32854);
class I extends l.PureComponent {
    _initTimeout = new u.Ep();
    _silenceTimeout = new u.Ep();
    _messageTimeout = new u.Ep();
    _micTestStartTime;
    state = { volume: -100, isMicTesting: !1, isDetectingInput: !0, didDeafenUser: !1 };
    componentDidMount() {
        this._initTimeout.start(1e3, this.setupVoiceActivity);
    }
    setupVoiceActivity = () => {
        p.Ay.getMediaEngine().on(d.bg.VoiceActivity, this.handleVoiceActivity);
    };
    componentWillUnmount() {
        this._initTimeout.stop(),
            this._silenceTimeout.stop(),
            this._micTestStop(),
            p.Ay.getMediaEngine().removeListener(d.bg.VoiceActivity, this.handleVoiceActivity);
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
                inputMode: a,
                vadAutoThreshold: s,
                vadThreshold: r,
                location: o,
                isDeafened: c,
            } = this.props,
            d = !1;
        e && !c && (A.A.toggleSelfDeaf(), (d = !0)),
            A.A.setLoopback("mic_test", !0),
            (this._micTestStartTime = Date.now()),
            this.setState({ isMicTesting: !0, isDetectingInput: !0, didDeafenUser: d }),
            E.default.track(C.HAw.MIC_TESTING_STARTED, {
                input_device_name: t,
                input_device_volume: n,
                output_device_name: i,
                output_device_volume: l,
                input_mode: a,
                input_sensitivity_is_automatic: s,
                input_sensitivity_threshold: Math.round(r),
                location: o,
            });
    }
    _micTestStop() {
        let { didDeafenUser: e, isMicTesting: t } = this.state,
            { isVoiceConnected: n, isDeafened: i } = this.props;
        t &&
            (n && i && e && A.A.toggleSelfDeaf(),
            A.A.setLoopback("mic_test", !1),
            this.setState({ isMicTesting: !1, didDeafenUser: !1 }),
            null != this._micTestStartTime &&
                E.default.track(C.HAw.MIC_TESTING_STOPPED, {
                    testing_duration: Math.round((Date.now() - this._micTestStartTime) / 1e3),
                }));
    }
    handleToggleMicTest = () => {
        this.state.isMicTesting ? this._micTestStop() : this._micTestStart();
    };
    renderCaption() {
        let { captionVoice: e, captionNoVoice: t } = this.props,
            { isMicTesting: n, isDetectingInput: l } = this.state;
        return null == e && null == t
            ? null
            : (0, i.jsx)(m.Text, {
                  variant: "text-xs/normal",
                  color: "text-subtle",
                  className: S.Qe,
                  children: n ? (l ? e : t) : void 0,
              });
    }
    render() {
        let {
                isVoiceConnected: e,
                title: t,
                description: n,
                notchBackground: l,
                buttonTest: a = "",
                buttonStop: r = "",
                buttonVariant: o = "secondary",
                size: c = "sm",
                isDeafened: d,
                buttonMinWidth: u,
                measureButtonRef: A,
                meterOnly: g = !1,
                containerClassName: p,
                helpText: f,
            } = this.props,
            { isMicTesting: E, volume: C, isDetectingInput: I } = this.state,
            T = e && !E ? x.intl.string(x.t["9viE2A"]) : null;
        E && e && !d && this._micTestStop();
        let v = r.length >= a.length ? r : a;
        return (0, i.jsxs)("div", {
            className: s()(S.kL, p),
            children: [
                (0, i.jsx)(m.D0$, {
                    label: t ?? void 0,
                    hideLabel: g,
                    description: g ? null : n,
                    children: (0, i.jsxs)("div", {
                        className: s()(S.ak, { [S.mi]: g, [S.EX]: "sm" === c }),
                        children: [
                            !g &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)("div", {
                                            className: S.km,
                                            "aria-hidden": !0,
                                            children: (0, i.jsx)(m.Button, {
                                                buttonRef: A,
                                                size: c,
                                                variant: o,
                                                text: v,
                                            }),
                                        }),
                                        (0, i.jsx)(h.m, {
                                            text: T,
                                            children: (0, i.jsx)("div", {
                                                style: null != u ? { minWidth: u } : { visibility: "hidden" },
                                                children: (0, i.jsx)(m.Button, {
                                                    size: c,
                                                    variant: o,
                                                    text: E ? r : a,
                                                    onClick: this.handleToggleMicTest,
                                                    fullWidth: !0,
                                                }),
                                            }),
                                        }),
                                    ],
                                }),
                            (0, i.jsx)(_.A, {
                                progress: E || g ? C + 100 : 0,
                                notchBackground: l,
                                notchClassName: this.props.notchClassName,
                                size: c,
                            }),
                            this.renderCaption(),
                        ],
                    }),
                }),
                null != f &&
                    (0, i.jsx)(m.Text, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        style: { visibility: E && !I ? "hidden" : "visible" },
                        children: f,
                    }),
            ],
        });
    }
}
function T(e) {
    let {
            inputDevice: t,
            outputDevice: n,
            threshold: l,
            autoThreshold: a,
            inputVolume: s,
            outputVolume: r,
            inputMode: d,
            isDeafened: u,
        } = (0, c.cf)([p.Ay], () => {
            let e = p.Ay.getInputDeviceId(),
                t = p.Ay.getInputDevices(),
                n = o().find(t, (t) => {
                    let { id: n } = t;
                    return n === e;
                }),
                i = p.Ay.getOutputDeviceId(),
                l = p.Ay.getOutputDevices(),
                a = o().find(l, (e) => {
                    let { id: t } = e;
                    return t === i;
                }),
                { threshold: s, autoThreshold: r } = p.Ay.getModeOptions(),
                c = p.Ay.getInputVolume(),
                d = p.Ay.getOutputVolume();
            return {
                inputDevice: n,
                outputDevice: a,
                threshold: s,
                autoThreshold: r,
                inputVolume: c,
                outputVolume: d,
                inputMode: p.Ay.getMode(),
                isDeafened: p.Ay.isSelfDeaf(),
            };
        }),
        h = (0, c.bG)([f.A], () => f.A.isConnected()),
        { ref: m, width: A } = (0, g.Ay)();
    return (0, i.jsx)(I, {
        isVoiceConnected: h,
        inputVolume: s,
        outputVolume: r,
        inputMode: d,
        isDeafened: u,
        vadThreshold: l,
        vadAutoThreshold: a,
        inputDeviceName: t?.name ?? "",
        outputDeviceName: n?.name ?? "",
        measureButtonRef: m,
        buttonMinWidth: A,
        ...e,
    });
}
