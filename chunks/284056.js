n.d(t, {
    Z: () => C,
    _: () => p._
}),
    n(953529),
    n(388685);
var i = n(255367),
    r = n(73800),
    s = n(392711),
    l = n.n(s),
    a = n(442837),
    o = n(46973),
    c = n(846519),
    d = n(481060),
    u = n(846027),
    m = n(393238),
    p = n(794347),
    g = n(131951),
    h = n(19780),
    f = n(626135),
    b = n(981631),
    _ = n(388032),
    x = n(283806);
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
class j extends r.PureComponent {
    componentDidMount() {
        this._initTimeout.start(1000, this.setupVoiceActivity);
    }
    componentWillUnmount() {
        this._initTimeout.stop(), this._silenceTimeout.stop(), this._micTestStop(), g.Z.getMediaEngine().removeListener(o.aB.VoiceActivity, this.handleVoiceActivity);
    }
    _micTestStart() {
        let { isVoiceConnected: e, inputDeviceName: t, inputVolume: n, outputDeviceName: i, outputVolume: r, inputMode: s, vadAutoThreshold: l, vadThreshold: a, location: o, isDeafened: c } = this.props,
            d = !1;
        e && !c && (u.Z.toggleSelfDeaf(), (d = !0)),
            u.Z.setLoopback('mic_test', !0),
            (this._micTestStartTime = Date.now()),
            this.setState({
                isMicTesting: !0,
                isDetectingInput: !0,
                didDeafenUser: d
            }),
            f.default.track(b.rMx.MIC_TESTING_STARTED, {
                input_device_name: t,
                input_device_volume: n,
                output_device_name: i,
                output_device_volume: r,
                input_mode: s,
                input_sensitivity_is_automatic: l,
                input_sensitivity_threshold: Math.round(a),
                location: o
            });
    }
    _micTestStop() {
        let { didDeafenUser: e, isMicTesting: t } = this.state,
            { isVoiceConnected: n, isDeafened: i } = this.props;
        t &&
            (n && i && e && u.Z.toggleSelfDeaf(),
            u.Z.setLoopback('mic_test', !1),
            this.setState({
                isMicTesting: !1,
                didDeafenUser: !1
            }),
            null != this._micTestStartTime && f.default.track(b.rMx.MIC_TESTING_STOPPED, { testing_duration: Math.round((Date.now() - this._micTestStartTime) / 1000) }));
    }
    renderCaption() {
        let { captionVoice: e, captionNoVoice: t } = this.props,
            { isMicTesting: n, isDetectingInput: r } = this.state;
        return (0, i.jsx)(d.R94, {
            className: x.micTestCaption,
            type: d.R94.Types.DESCRIPTION,
            children: n ? (r ? e : t) : null
        });
    }
    render() {
        let { isVoiceConnected: e, title: t, description: n, notchBackground: r, buttonTest: s, buttonStop: l, buttonClassName: a, buttonColor: o, isDeafened: c, buttonMinWidth: u, measureButtonRef: m } = this.props,
            { isMicTesting: g, volume: h } = this.state,
            f = e && !g ? _.intl.string(_.t['9viE2N']) : null;
        g && e && !c && this._micTestStop();
        let b = l.length >= s.length ? l : s;
        return (0, i.jsxs)('div', {
            className: x.container,
            children: [
                (0, i.jsx)(d.vwX, {
                    tag: d.RB0.H5,
                    className: x.title,
                    children: t
                }),
                null != n &&
                    (0, i.jsx)(d.R94, {
                        type: d.R94.Types.DESCRIPTION,
                        className: x.description,
                        children: n
                    }),
                (0, i.jsxs)('div', {
                    className: x.micTest,
                    children: [
                        (0, i.jsxs)('div', {
                            className: x.buttonSizer,
                            'aria-hidden': !0,
                            children: [
                                (0, i.jsx)(d.zxk, {
                                    buttonRef: m,
                                    grow: !0,
                                    size: d.zxk.Sizes.SMALL,
                                    className: a,
                                    color: o,
                                    children: b
                                }),
                                (0, i.jsx)('div', { className: x.buttonSizerSpacer })
                            ]
                        }),
                        (0, i.jsx)(d.ua7, {
                            text: f,
                            children: (e) => {
                                let { onMouseEnter: t, onMouseLeave: n } = e;
                                return (0, i.jsx)(d.zxk, {
                                    grow: !0,
                                    onClick: this.handleToggleMicTest,
                                    onMouseEnter: t,
                                    onMouseLeave: n,
                                    size: d.zxk.Sizes.SMALL,
                                    className: a,
                                    color: o,
                                    style: null != u ? { minWidth: u } : { visibility: 'hidden' },
                                    children: g ? l : s
                                });
                            }
                        }),
                        (0, i.jsx)(p.Z, {
                            progress: g ? h + 100 : 0,
                            notchBackground: r,
                            children: this.renderCaption()
                        })
                    ]
                })
            ]
        });
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
                    this._silenceTimeout.isStarted() ||
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
function C(e) {
    var t, n;
    let {
            inputDevice: r,
            outputDevice: s,
            modeOptions: o,
            inputVolume: c,
            outputVolume: d,
            inputMode: u,
            isDeafened: p
        } = (0, a.cj)([g.Z], () => {
            let e = g.Z.getInputDeviceId(),
                t = g.Z.getInputDevices(),
                n = l().find(t, (t) => {
                    let { id: n } = t;
                    return n === e;
                }),
                i = g.Z.getOutputDeviceId(),
                r = g.Z.getOutputDevices(),
                s = l().find(r, (e) => {
                    let { id: t } = e;
                    return t === i;
                }),
                a = g.Z.getModeOptions(),
                o = g.Z.getInputVolume(),
                c = g.Z.getOutputVolume();
            return {
                inputDevice: n,
                outputDevice: s,
                modeOptions: a,
                inputVolume: o,
                outputVolume: c,
                inputMode: g.Z.getMode(),
                isDeafened: g.Z.isSelfDeaf()
            };
        }),
        f = (0, a.e7)([h.Z], () => h.Z.isConnected()),
        { ref: b, width: _ } = (0, m.ZP)();
    return (0, i.jsx)(
        j,
        (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    i = Object.keys(n);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (i = i.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                    )),
                    i.forEach(function (t) {
                        E(e, t, n[t]);
                    });
            }
            return e;
        })(
            {
                isVoiceConnected: f,
                inputVolume: c,
                outputVolume: d,
                inputMode: u,
                isDeafened: p,
                vadThreshold: o.threshold,
                vadAutoThreshold: o.autoThreshold,
                inputDeviceName: null != (t = null == r ? void 0 : r.name) ? t : '',
                outputDeviceName: null != (n = null == s ? void 0 : s.name) ? n : '',
                measureButtonRef: b,
                buttonMinWidth: _
            },
            e
        )
    );
}
