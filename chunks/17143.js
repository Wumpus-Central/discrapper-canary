i.d(t, { A: () => I, V: () => g.V });
var n = i(627968),
    s = i(64700),
    l = i(503698),
    a = i.n(l),
    r = i(735438),
    o = i.n(r),
    c = i(311907),
    u = i(205693),
    d = i(451988),
    h = i(990078),
    m = i(397927),
    p = i(827343),
    v = i(765671),
    g = i(123902),
    f = i(430452),
    x = i(383501),
    _ = i(954571),
    A = i(652215),
    T = i(985018),
    C = i(265891);
class D extends s.PureComponent {
    _initTimeout = new d.Ep();
    _silenceTimeout = new d.Ep();
    _messageTimeout = new d.Ep();
    _micTestStartTime;
    state = { volume: -100, isMicTesting: !1, isDetectingInput: !0, didDeafenUser: !1 };
    componentDidMount() {
        this._initTimeout.start(1e3, this.setupVoiceActivity);
    }
    setupVoiceActivity = () => {
        f.A.getMediaEngine().on(u.bg.VoiceActivity, this.handleVoiceActivity);
    };
    componentWillUnmount() {
        this._initTimeout.stop(),
            this._silenceTimeout.stop(),
            this._micTestStop(),
            f.A.getMediaEngine().removeListener(u.bg.VoiceActivity, this.handleVoiceActivity);
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
                inputVolume: i,
                outputDeviceName: n,
                outputVolume: s,
                inputMode: l,
                vadAutoThreshold: a,
                vadThreshold: r,
                location: o,
                isDeafened: c,
            } = this.props,
            u = !1;
        e && !c && (p.A.toggleSelfDeaf(), (u = !0)),
            p.A.setLoopback("mic_test", !0),
            (this._micTestStartTime = Date.now()),
            this.setState({ isMicTesting: !0, isDetectingInput: !0, didDeafenUser: u }),
            _.default.track(A.HAw.MIC_TESTING_STARTED, {
                input_device_name: t,
                input_device_volume: i,
                output_device_name: n,
                output_device_volume: s,
                input_mode: l,
                input_sensitivity_is_automatic: a,
                input_sensitivity_threshold: Math.round(r),
                location: o,
            });
    }
    _micTestStop() {
        let { didDeafenUser: e, isMicTesting: t } = this.state,
            { isVoiceConnected: i, isDeafened: n } = this.props;
        t &&
            (i && n && e && p.A.toggleSelfDeaf(),
            p.A.setLoopback("mic_test", !1),
            this.setState({ isMicTesting: !1, didDeafenUser: !1 }),
            null != this._micTestStartTime &&
                _.default.track(A.HAw.MIC_TESTING_STOPPED, {
                    testing_duration: Math.round((Date.now() - this._micTestStartTime) / 1e3),
                }));
    }
    handleToggleMicTest = () => {
        this.state.isMicTesting ? this._micTestStop() : this._micTestStart();
    };
    renderCaption() {
        let { captionVoice: e, captionNoVoice: t } = this.props,
            { isMicTesting: i, isDetectingInput: s } = this.state;
        return (0, n.jsx)(m.Text, {
            variant: "text-xs/normal",
            color: "text-subtle",
            className: C.Qe,
            children: i ? (s ? e : t) : null,
        });
    }
    render() {
        let {
                isVoiceConnected: e,
                title: t,
                description: i,
                notchBackground: s,
                buttonTest: l = "",
                buttonStop: r = "",
                buttonVariant: o = "secondary",
                isDeafened: c,
                buttonMinWidth: u,
                measureButtonRef: d,
                meterOnly: p = !1,
                containerClassName: v,
            } = this.props,
            { isMicTesting: f, volume: x } = this.state,
            _ = e && !f ? T.intl.string(T.t["9viE2A"]) : null;
        f && e && !c && this._micTestStop();
        let A = r.length >= l.length ? r : l;
        return (0, n.jsx)("div", {
            className: a()(C.kL, v),
            children: (0, n.jsx)(m.D0$, {
                label: t ?? void 0,
                hideLabel: p,
                description: p ? null : i,
                children: (0, n.jsxs)("div", {
                    className: C.ak,
                    children: [
                        !p &&
                            (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsxs)("div", {
                                        className: C.km,
                                        "aria-hidden": !0,
                                        children: [
                                            (0, n.jsx)(m.Button, { buttonRef: d, size: "sm", variant: o, text: A }),
                                            (0, n.jsx)("div", { className: C.qB }),
                                        ],
                                    }),
                                    (0, n.jsx)(h.m, {
                                        text: _,
                                        children: (0, n.jsx)("div", {
                                            className: C._o,
                                            style: null != u ? { minWidth: u } : { visibility: "hidden" },
                                            children: (0, n.jsx)(m.Button, {
                                                size: "sm",
                                                variant: o,
                                                text: f ? r : l,
                                                onClick: this.handleToggleMicTest,
                                                fullWidth: !0,
                                            }),
                                        }),
                                    }),
                                ],
                            }),
                        (0, n.jsx)(g.A, {
                            progress: f || p ? x + 100 : 0,
                            notchBackground: s,
                            notchClassName: this.props.notchClassName,
                            children: this.renderCaption(),
                        }),
                    ],
                }),
            }),
        });
    }
}
function I(e) {
    let {
            inputDevice: t,
            outputDevice: i,
            threshold: s,
            autoThreshold: l,
            inputVolume: a,
            outputVolume: r,
            inputMode: u,
            isDeafened: d,
        } = (0, c.cf)([f.A], () => {
            let e = f.A.getInputDeviceId(),
                t = f.A.getInputDevices(),
                i = o().find(t, (t) => {
                    let { id: i } = t;
                    return i === e;
                }),
                n = f.A.getOutputDeviceId(),
                s = f.A.getOutputDevices(),
                l = o().find(s, (e) => {
                    let { id: t } = e;
                    return t === n;
                }),
                { threshold: a, autoThreshold: r } = f.A.getModeOptions(),
                c = f.A.getInputVolume(),
                u = f.A.getOutputVolume();
            return {
                inputDevice: i,
                outputDevice: l,
                threshold: a,
                autoThreshold: r,
                inputVolume: c,
                outputVolume: u,
                inputMode: f.A.getMode(),
                isDeafened: f.A.isSelfDeaf(),
            };
        }),
        h = (0, c.bG)([x.A], () => x.A.isConnected()),
        { ref: m, width: p } = (0, v.Ay)();
    return (0, n.jsx)(D, {
        isVoiceConnected: h,
        inputVolume: a,
        outputVolume: r,
        inputMode: u,
        isDeafened: d,
        vadThreshold: s,
        vadAutoThreshold: l,
        inputDeviceName: t?.name ?? "",
        outputDeviceName: i?.name ?? "",
        measureButtonRef: m,
        buttonMinWidth: p,
        ...e,
    });
}
