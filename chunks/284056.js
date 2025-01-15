n.d(t, {
    _: function () {
        return m._;
    }
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(392711),
    a = n.n(r),
    l = n(442837),
    o = n(46973),
    c = n(846519),
    d = n(481060),
    u = n(846027),
    m = n(794347),
    g = n(131951),
    h = n(19780),
    p = n(626135),
    x = n(981631),
    f = n(388032),
    _ = n(621519);
function E(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class C extends s.PureComponent {
    componentDidMount() {
        this._initTimeout.start(1000, this.setupVoiceActivity);
    }
    componentWillUnmount() {
        this._initTimeout.stop(), this._silenceTimeout.stop(), this._micTestStop(), g.Z.getMediaEngine().removeListener(o.aB.VoiceActivity, this.handleVoiceActivity);
    }
    _micTestStart() {
        let { isVoiceConnected: e, inputDeviceName: t, inputVolume: n, outputDeviceName: i, outputVolume: s, inputMode: r, vadAutoThreshold: a, vadThreshold: l, location: o, isDeafened: c } = this.props,
            d = !1;
        e && !c && (u.Z.toggleSelfDeaf(), (d = !0)),
            u.Z.setLoopback(!0),
            (this._micTestStartTime = Date.now()),
            this.setState({
                isMicTesting: !0,
                isDetectingInput: !0,
                didDeafenUser: d
            }),
            p.default.track(x.rMx.MIC_TESTING_STARTED, {
                input_device_name: t,
                input_device_volume: n,
                output_device_name: i,
                output_device_volume: s,
                input_mode: r,
                input_sensitivity_is_automatic: a,
                input_sensitivity_threshold: Math.round(l),
                location: o
            });
    }
    _micTestStop() {
        let { didDeafenUser: e, isMicTesting: t } = this.state,
            { isVoiceConnected: n, isDeafened: i } = this.props;
        if (!t) return;
        if (
            (n && i && e && u.Z.toggleSelfDeaf(),
            u.Z.setLoopback(!1),
            this.setState({
                isMicTesting: !1,
                didDeafenUser: !1
            }),
            null != this._micTestStartTime)
        )
            p.default.track(x.rMx.MIC_TESTING_STOPPED, { testing_duration: Math.round((Date.now() - this._micTestStartTime) / 1000) });
    }
    renderCaption() {
        let { captionVoice: e, captionNoVoice: t } = this.props,
            { isMicTesting: n, isDetectingInput: s } = this.state;
        return (0, i.jsx)(d.FormText, {
            className: _.micTestCaption,
            type: d.FormText.Types.DESCRIPTION,
            children: n ? (s ? e : t) : null
        });
    }
    render() {
        let { isVoiceConnected: e, title: t, description: n, notchBackground: s, buttonTest: r, buttonStop: a, buttonClassName: l, buttonColor: o, isDeafened: c } = this.props,
            { isMicTesting: u, volume: g } = this.state,
            h = e && !u ? f.intl.string(f.t['9viE2N']) : null;
        return (
            u && e && !c && this._micTestStop(),
            (0, i.jsxs)('div', {
                className: _.container,
                children: [
                    (0, i.jsx)(d.FormTitle, {
                        tag: d.FormTitleTags.H5,
                        className: _.title,
                        children: t
                    }),
                    null != n &&
                        (0, i.jsx)(d.FormText, {
                            type: d.FormText.Types.DESCRIPTION,
                            className: _.description,
                            children: n
                        }),
                    (0, i.jsxs)('div', {
                        className: _.micTest,
                        children: [
                            (0, i.jsx)(d.Tooltip, {
                                text: h,
                                children: (e) => {
                                    let { onMouseEnter: t, onMouseLeave: n } = e;
                                    return (0, i.jsx)(d.Button, {
                                        grow: !1,
                                        onClick: this.handleToggleMicTest,
                                        onMouseEnter: t,
                                        onMouseLeave: n,
                                        size: d.Button.Sizes.SMALL,
                                        className: l,
                                        color: o,
                                        children: u ? a : r
                                    });
                                }
                            }),
                            (0, i.jsx)(m.Z, {
                                progress: u ? g + 100 : 0,
                                notchBackground: s
                            }),
                            this.renderCaption()
                        ]
                    })
                ]
            })
        );
    }
    constructor(...e) {
        super(...e),
            E(this, '_initTimeout', new c.V7()),
            E(this, '_silenceTimeout', new c.V7()),
            E(this, '_messageTimeout', new c.V7()),
            E(this, '_micTestStartTime', void 0),
            E(this, 'state', {
                volume: -100,
                isMicTesting: !1,
                isDetectingInput: !0,
                didDeafenUser: !1
            }),
            E(this, 'setupVoiceActivity', () => {
                g.Z.getMediaEngine().on(o.aB.VoiceActivity, this.handleVoiceActivity);
            }),
            E(this, 'handleVoiceActivity', (e) => {
                let { isMicTesting: t } = this.state;
                if (t && e <= -100) {
                    !this._silenceTimeout.isStarted() &&
                        this._silenceTimeout.start(2000, () => {
                            this.setState({ isDetectingInput: !1 });
                        }),
                        this.setState({ volume: -100 });
                    return;
                }
                this._silenceTimeout.stop(),
                    this.setState({
                        volume: e,
                        isDetectingInput: !0
                    });
            }),
            E(this, 'handleToggleMicTest', () => {
                this.state.isMicTesting ? this._micTestStop() : this._micTestStart();
            });
    }
}
t.Z = l.ZP.connectStores([h.Z, g.Z], () => {
    let e = g.Z.getInputDeviceId(),
        t = g.Z.getInputDevices(),
        n = a().find(t, (t) => {
            let { id: n } = t;
            return n === e;
        }),
        i = g.Z.getOutputDeviceId(),
        s = g.Z.getOutputDevices(),
        r = a().find(s, (e) => {
            let { id: t } = e;
            return t === i;
        }),
        l = g.Z.getModeOptions();
    return {
        isVoiceConnected: h.Z.isConnected(),
        inputVolume: g.Z.getInputVolume(),
        outputVolume: g.Z.getOutputVolume(),
        inputMode: g.Z.getMode(),
        vadThreshold: l.threshold,
        isDeafened: g.Z.isSelfDeaf(),
        vadAutoThreshold: l.autoThreshold,
        inputDeviceName: null != n ? n.name : '',
        outputDeviceName: null != r ? r.name : ''
    };
})(C);
