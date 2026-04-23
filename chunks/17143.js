n.d(t, { A: () => M, V: () => T.V });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(735438),
    o = n.n(a),
    u = n(311907),
    c = n(205693),
    d = n(451988),
    m = n(990078),
    h = n(834730),
    A = n(452027),
    v = n(821609),
    p = n(827343),
    g = n(765671),
    T = n(123902),
    f = n(430452),
    b = n(383501),
    _ = n(954571),
    y = n(652215),
    x = n(985018),
    C = n(32854);
class I extends l.PureComponent {
    _initTimeout = new d.Ep();
    _silenceTimeout = new d.Ep();
    _messageTimeout = new d.Ep();
    _micTestStartTime;
    state = { volume: -100, isMicTesting: !1, isDetectingInput: !0, didDeafenUser: !1 };
    componentDidMount() {
        this._initTimeout.start(1e3, this.setupVoiceActivity);
    }
    setupVoiceActivity = () => {
        f.Ay.getMediaEngine().on(c.bg.VoiceActivity, this.handleVoiceActivity);
    };
    componentWillUnmount() {
        this._initTimeout.stop(),
            this._silenceTimeout.stop(),
            this._micTestStop(),
            f.Ay.getMediaEngine().removeListener(c.bg.VoiceActivity, this.handleVoiceActivity);
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
            _.default.track(y.HAw.MIC_TESTING_STARTED, {
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
                _.default.track(y.HAw.MIC_TESTING_STOPPED, {
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
            : (0, i.jsx)(h.E, {
                  variant: "text-xs/normal",
                  color: "text-subtle",
                  className: C.Qe,
                  children: n ? (l ? e : t) : void 0,
              });
    }
    render() {
        let {
                isVoiceConnected: e,
                title: t,
                description: n,
                notchBackground: l,
                buttonTest: s = "",
                buttonStop: a = "",
                buttonVariant: o = "secondary",
                size: u = "sm",
                isDeafened: c,
                buttonMinWidth: d,
                measureButtonRef: p,
                meterOnly: g = !1,
                containerClassName: f,
                helpText: b,
            } = this.props,
            { isMicTesting: _, volume: y, isDetectingInput: I } = this.state,
            M = e && !_ ? x.intl.string(x.t["9viE2A"]) : null;
        _ && e && !c && this._micTestStop();
        let D = a.length >= s.length ? a : s;
        return (0, i.jsxs)("div", {
            className: r()(C.kL, f),
            children: [
                (0, i.jsx)(A.D, {
                    label: t ?? void 0,
                    hideLabel: g,
                    description: g ? null : n,
                    children: (0, i.jsxs)("div", {
                        className: r()(C.ak, { [C.mi]: g, [C.EX]: "sm" === u }),
                        children: [
                            !g &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)("div", {
                                            className: C.km,
                                            "aria-hidden": !0,
                                            children: (0, i.jsx)(v.$, { buttonRef: p, size: u, variant: o, text: D }),
                                        }),
                                        (0, i.jsx)(m.m, {
                                            text: M,
                                            children: (0, i.jsx)("div", {
                                                style: null != d ? { minWidth: d } : { visibility: "hidden" },
                                                children: (0, i.jsx)(v.$, {
                                                    size: u,
                                                    variant: o,
                                                    text: _ ? a : s,
                                                    onClick: this.handleToggleMicTest,
                                                    fullWidth: !0,
                                                }),
                                            }),
                                        }),
                                    ],
                                }),
                            (0, i.jsx)(T.A, {
                                progress: _ || g ? y + 100 : 0,
                                notchBackground: l,
                                notchClassName: this.props.notchClassName,
                                size: u,
                            }),
                            this.renderCaption(),
                        ],
                    }),
                }),
                null != b &&
                    (0, i.jsx)(h.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        style: { visibility: _ && !I ? "hidden" : "visible" },
                        children: b,
                    }),
            ],
        });
    }
}
function M(e) {
    let {
            inputDevice: t,
            outputDevice: n,
            threshold: l,
            autoThreshold: s,
            inputVolume: r,
            outputVolume: a,
            inputMode: c,
            isDeafened: d,
        } = (0, u.cf)([f.Ay], () => {
            let e = f.Ay.getInputDeviceId(),
                t = f.Ay.getInputDevices(),
                n = o().find(t, (t) => {
                    let { id: n } = t;
                    return n === e;
                }),
                i = f.Ay.getOutputDeviceId(),
                l = f.Ay.getOutputDevices(),
                s = o().find(l, (e) => {
                    let { id: t } = e;
                    return t === i;
                }),
                { threshold: r, autoThreshold: a } = f.Ay.getModeOptions(),
                u = f.Ay.getInputVolume(),
                c = f.Ay.getOutputVolume();
            return {
                inputDevice: n,
                outputDevice: s,
                threshold: r,
                autoThreshold: a,
                inputVolume: u,
                outputVolume: c,
                inputMode: f.Ay.getMode(),
                isDeafened: f.Ay.isSelfDeaf(),
            };
        }),
        m = (0, u.bG)([b.A], () => b.A.isConnected()),
        { ref: h, width: A } = (0, g.Ay)();
    return (0, i.jsx)(I, {
        isVoiceConnected: m,
        inputVolume: r,
        outputVolume: a,
        inputMode: c,
        isDeafened: d,
        vadThreshold: l,
        vadAutoThreshold: s,
        inputDeviceName: t?.name ?? "",
        outputDeviceName: n?.name ?? "",
        measureButtonRef: h,
        buttonMinWidth: A,
        ...e,
    });
}
