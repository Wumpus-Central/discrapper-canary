n.d(t, {
    _: function () {
        return g._;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    a = n(392711),
    s = n.n(a),
    l = n(442837),
    o = n(46973),
    c = n(846519),
    d = n(481060),
    u = n(846027),
    g = n(794347),
    m = n(131951),
    f = n(19780),
    p = n(626135),
    _ = n(981631),
    h = n(388032),
    x = n(621519);
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
class b extends r.PureComponent {
    componentDidMount() {
        this._initTimeout.start(1000, this.setupVoiceActivity);
    }
    componentWillUnmount() {
        this._initTimeout.stop(), this._silenceTimeout.stop(), this._micTestStop(), m.Z.getMediaEngine().removeListener(o.aB.VoiceActivity, this.handleVoiceActivity);
    }
    _micTestStart() {
        let { isVoiceConnected: e, inputDeviceName: t, inputVolume: n, outputDeviceName: i, outputVolume: r, inputMode: a, vadAutoThreshold: s, vadThreshold: l, location: o, isDeafened: c } = this.props,
            d = !1;
        e && !c && (u.Z.toggleSelfDeaf(), (d = !0)),
            u.Z.setLoopback(!0),
            (this._micTestStartTime = Date.now()),
            this.setState({
                isMicTesting: !0,
                isDetectingInput: !0,
                didDeafenUser: d
            }),
            p.default.track(_.rMx.MIC_TESTING_STARTED, {
                input_device_name: t,
                input_device_volume: n,
                output_device_name: i,
                output_device_volume: r,
                input_mode: a,
                input_sensitivity_is_automatic: s,
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
            p.default.track(_.rMx.MIC_TESTING_STOPPED, { testing_duration: Math.round((Date.now() - this._micTestStartTime) / 1000) });
    }
    renderCaption() {
        let { captionVoice: e, captionNoVoice: t } = this.props,
            { isMicTesting: n, isDetectingInput: r } = this.state;
        return (0, i.jsx)(d.FormText, {
            className: x.micTestCaption,
            type: d.FormText.Types.DESCRIPTION,
            children: n ? (r ? e : t) : null
        });
    }
    render() {
        let { isVoiceConnected: e, title: t, description: n, notchBackground: r, buttonTest: a, buttonStop: s, buttonClassName: l, buttonColor: o, isDeafened: c } = this.props,
            { isMicTesting: u, volume: m } = this.state,
            f = e && !u ? h.intl.string(h.t['9viE2N']) : null;
        return (
            u && e && !c && this._micTestStop(),
            (0, i.jsxs)('div', {
                className: x.container,
                children: [
                    (0, i.jsx)(d.FormTitle, {
                        tag: d.FormTitleTags.H5,
                        className: x.title,
                        children: t
                    }),
                    null != n &&
                        (0, i.jsx)(d.FormText, {
                            type: d.FormText.Types.DESCRIPTION,
                            className: x.description,
                            children: n
                        }),
                    (0, i.jsxs)('div', {
                        className: x.micTest,
                        children: [
                            (0, i.jsx)(d.Tooltip, {
                                text: f,
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
                                        children: u ? s : a
                                    });
                                }
                            }),
                            (0, i.jsx)(g.Z, {
                                progress: u ? m + 100 : 0,
                                notchBackground: r
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
                m.Z.getMediaEngine().on(o.aB.VoiceActivity, this.handleVoiceActivity);
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
t.Z = l.ZP.connectStores([f.Z, m.Z], () => {
    let e = m.Z.getInputDeviceId(),
        t = m.Z.getInputDevices(),
        n = s().find(t, (t) => {
            let { id: n } = t;
            return n === e;
        }),
        i = m.Z.getOutputDeviceId(),
        r = m.Z.getOutputDevices(),
        a = s().find(r, (e) => {
            let { id: t } = e;
            return t === i;
        }),
        l = m.Z.getModeOptions();
    return {
        isVoiceConnected: f.Z.isConnected(),
        inputVolume: m.Z.getInputVolume(),
        outputVolume: m.Z.getOutputVolume(),
        inputMode: m.Z.getMode(),
        vadThreshold: l.threshold,
        isDeafened: m.Z.isSelfDeaf(),
        vadAutoThreshold: l.autoThreshold,
        inputDeviceName: null != n ? n.name : '',
        outputDeviceName: null != a ? a.name : ''
    };
})(b);
