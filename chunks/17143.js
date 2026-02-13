i.d(t, { A: () => C, V: () => g.V });
var n = i(627968),
    s = i(64700),
    l = i(503698),
    a = i.n(l),
    r = i(735438),
    o = i.n(r),
    c = i(311907),
    d = i(205693),
    u = i(451988),
    h = i(990078),
    m = i(397927),
    p = i(827343),
    v = i(765671),
    g = i(123902),
    x = i(430452),
    f = i(383501),
    _ = i(954571),
    A = i(652215),
    T = i(985018),
    y = i(265891);
class j extends s.PureComponent {
    _initTimeout = new u.Ep();
    _silenceTimeout = new u.Ep();
    _messageTimeout = new u.Ep();
    _micTestStartTime;
    state = { volume: -100, isMicTesting: !1, isDetectingInput: !0, didDeafenUser: !1 };
    componentDidMount() {
        this._initTimeout.start(1e3, this.setupVoiceActivity);
    }
    setupVoiceActivity = () => {
        x.Ay.getMediaEngine().on(d.bg.VoiceActivity, this.handleVoiceActivity);
    };
    componentWillUnmount() {
        this._initTimeout.stop(),
            this._silenceTimeout.stop(),
            this._micTestStop(),
            x.Ay.getMediaEngine().removeListener(d.bg.VoiceActivity, this.handleVoiceActivity);
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
            d = !1;
        e && !c && (p.A.toggleSelfDeaf(), (d = !0)),
            p.A.setLoopback("mic_test", !0),
            (this._micTestStartTime = Date.now()),
            this.setState({ isMicTesting: !0, isDetectingInput: !0, didDeafenUser: d }),
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
        return null == e && null == t
            ? null
            : (0, n.jsx)(m.Text, {
                  variant: "text-xs/normal",
                  color: "text-subtle",
                  className: y.Qe,
                  children: i ? (s ? e : t) : void 0,
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
                size: c = "sm",
                isDeafened: d,
                buttonMinWidth: u,
                measureButtonRef: p,
                meterOnly: v = !1,
                containerClassName: x,
                helpText: f,
            } = this.props,
            { isMicTesting: _, volume: A, isDetectingInput: j } = this.state,
            C = e && !_ ? T.intl.string(T.t["9viE2A"]) : null;
        _ && e && !d && this._micTestStop();
        let D = r.length >= l.length ? r : l;
        return (0, n.jsxs)("div", {
            className: a()(y.kL, x),
            children: [
                (0, n.jsx)(m.D0$, {
                    label: t ?? void 0,
                    hideLabel: v,
                    description: v ? null : i,
                    children: (0, n.jsxs)("div", {
                        className: a()(y.ak, { [y.mi]: v, [y.EX]: "sm" === c }),
                        children: [
                            !v &&
                                (0, n.jsxs)(n.Fragment, {
                                    children: [
                                        (0, n.jsx)("div", {
                                            className: y.km,
                                            "aria-hidden": !0,
                                            children: (0, n.jsx)(m.Button, {
                                                buttonRef: p,
                                                size: c,
                                                variant: o,
                                                text: D,
                                            }),
                                        }),
                                        (0, n.jsx)(h.m, {
                                            text: C,
                                            children: (0, n.jsx)("div", {
                                                style: null != u ? { minWidth: u } : { visibility: "hidden" },
                                                children: (0, n.jsx)(m.Button, {
                                                    size: c,
                                                    variant: o,
                                                    text: _ ? r : l,
                                                    onClick: this.handleToggleMicTest,
                                                    fullWidth: !0,
                                                }),
                                            }),
                                        }),
                                    ],
                                }),
                            (0, n.jsx)(g.A, {
                                progress: _ || v ? A + 100 : 0,
                                notchBackground: s,
                                notchClassName: this.props.notchClassName,
                                size: c,
                            }),
                            this.renderCaption(),
                        ],
                    }),
                }),
                null != f &&
                    (0, n.jsx)(m.Text, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        style: { visibility: _ && !j ? "hidden" : "visible" },
                        children: f,
                    }),
            ],
        });
    }
}
function C(e) {
    let {
            inputDevice: t,
            outputDevice: i,
            threshold: s,
            autoThreshold: l,
            inputVolume: a,
            outputVolume: r,
            inputMode: d,
            isDeafened: u,
        } = (0, c.cf)([x.Ay], () => {
            let e = x.Ay.getInputDeviceId(),
                t = x.Ay.getInputDevices(),
                i = o().find(t, (t) => {
                    let { id: i } = t;
                    return i === e;
                }),
                n = x.Ay.getOutputDeviceId(),
                s = x.Ay.getOutputDevices(),
                l = o().find(s, (e) => {
                    let { id: t } = e;
                    return t === n;
                }),
                { threshold: a, autoThreshold: r } = x.Ay.getModeOptions(),
                c = x.Ay.getInputVolume(),
                d = x.Ay.getOutputVolume();
            return {
                inputDevice: i,
                outputDevice: l,
                threshold: a,
                autoThreshold: r,
                inputVolume: c,
                outputVolume: d,
                inputMode: x.Ay.getMode(),
                isDeafened: x.Ay.isSelfDeaf(),
            };
        }),
        h = (0, c.bG)([f.A], () => f.A.isConnected()),
        { ref: m, width: p } = (0, v.Ay)();
    return (0, n.jsx)(j, {
        isVoiceConnected: h,
        inputVolume: a,
        outputVolume: r,
        inputMode: d,
        isDeafened: u,
        vadThreshold: s,
        vadAutoThreshold: l,
        inputDeviceName: t?.name ?? "",
        outputDeviceName: i?.name ?? "",
        measureButtonRef: m,
        buttonMinWidth: p,
        ...e,
    });
}
