n.d(t, {
    Z: () => j,
    _: () => g._
}),
    n(953529),
    n(388685);
var r = n(200651),
    i = n(192379),
    s = n(392711),
    a = n.n(s),
    l = n(442837),
    o = n(46973),
    c = n(846519),
    d = n(481060),
    u = n(846027),
    m = n(393238),
    g = n(794347),
    p = n(131951),
    h = n(19780),
    f = n(626135),
    b = n(981631),
    _ = n(388032),
    N = n(105770);
function x(e, t, n) {
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
class E extends i.PureComponent {
    componentDidMount() {
        this._initTimeout.start(1000, this.setupVoiceActivity);
    }
    componentWillUnmount() {
        this._initTimeout.stop(), this._silenceTimeout.stop(), this._micTestStop(), p.Z.getMediaEngine().removeListener(o.aB.VoiceActivity, this.handleVoiceActivity);
    }
    _micTestStart() {
        let { isVoiceConnected: e, inputDeviceName: t, inputVolume: n, outputDeviceName: r, outputVolume: i, inputMode: s, vadAutoThreshold: a, vadThreshold: l, location: o, isDeafened: c } = this.props,
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
                output_device_name: r,
                output_device_volume: i,
                input_mode: s,
                input_sensitivity_is_automatic: a,
                input_sensitivity_threshold: Math.round(l),
                location: o
            });
    }
    _micTestStop() {
        let { didDeafenUser: e, isMicTesting: t } = this.state,
            { isVoiceConnected: n, isDeafened: r } = this.props;
        t &&
            (n && r && e && u.Z.toggleSelfDeaf(),
            u.Z.setLoopback('mic_test', !1),
            this.setState({
                isMicTesting: !1,
                didDeafenUser: !1
            }),
            null != this._micTestStartTime && f.default.track(b.rMx.MIC_TESTING_STOPPED, { testing_duration: Math.round((Date.now() - this._micTestStartTime) / 1000) }));
    }
    renderCaption() {
        let { captionVoice: e, captionNoVoice: t } = this.props,
            { isMicTesting: n, isDetectingInput: i } = this.state;
        return (0, r.jsx)(d.R94, {
            className: N.micTestCaption,
            type: d.R94.Types.DESCRIPTION,
            children: n ? (i ? e : t) : null
        });
    }
    render() {
        let { isVoiceConnected: e, title: t, description: n, notchBackground: i, buttonTest: s, buttonStop: a, buttonClassName: l, buttonColor: o, isDeafened: c, buttonMinWidth: u, measureButtonRef: m } = this.props,
            { isMicTesting: p, volume: h } = this.state,
            f = e && !p ? _.NW.string(_.t['9viE2N']) : null;
        p && e && !c && this._micTestStop();
        let b = a.length >= s.length ? a : s;
        return (0, r.jsxs)('div', {
            className: N.container,
            children: [
                (0, r.jsx)(d.vwX, {
                    tag: d.RB0.H5,
                    className: N.title,
                    children: t
                }),
                null != n &&
                    (0, r.jsx)(d.R94, {
                        type: d.R94.Types.DESCRIPTION,
                        className: N.description,
                        children: n
                    }),
                (0, r.jsxs)('div', {
                    className: N.micTest,
                    children: [
                        (0, r.jsxs)('div', {
                            className: N.buttonSizer,
                            'aria-hidden': !0,
                            children: [
                                (0, r.jsx)(d.zxk, {
                                    buttonRef: m,
                                    grow: !0,
                                    size: d.zxk.Sizes.SMALL,
                                    className: l,
                                    color: o,
                                    children: b
                                }),
                                (0, r.jsx)('div', { className: N.buttonSizerSpacer })
                            ]
                        }),
                        (0, r.jsx)(d.ua7, {
                            text: f,
                            children: (e) => {
                                let { onMouseEnter: t, onMouseLeave: n } = e;
                                return (0, r.jsx)(d.zxk, {
                                    grow: !0,
                                    onClick: this.handleToggleMicTest,
                                    onMouseEnter: t,
                                    onMouseLeave: n,
                                    size: d.zxk.Sizes.SMALL,
                                    className: l,
                                    color: o,
                                    style: null != u ? { minWidth: u } : { visibility: 'hidden' },
                                    children: p ? a : s
                                });
                            }
                        }),
                        (0, r.jsx)(g.Z, {
                            progress: p ? h + 100 : 0,
                            notchBackground: i,
                            children: this.renderCaption()
                        })
                    ]
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            x(this, '_initTimeout', new c.V7()),
            x(this, '_silenceTimeout', new c.V7()),
            x(this, '_messageTimeout', new c.V7()),
            x(this, '_micTestStartTime', void 0),
            x(this, 'state', {
                volume: -100,
                isMicTesting: !1,
                isDetectingInput: !0,
                didDeafenUser: !1
            }),
            x(this, 'setupVoiceActivity', () => {
                p.Z.getMediaEngine().on(o.aB.VoiceActivity, this.handleVoiceActivity);
            }),
            x(this, 'handleVoiceActivity', (e) => {
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
            x(this, 'handleToggleMicTest', () => {
                this.state.isMicTesting ? this._micTestStop() : this._micTestStart();
            });
    }
}
function j(e) {
    var t, n;
    let {
            inputDevice: i,
            outputDevice: s,
            modeOptions: o,
            inputVolume: c,
            outputVolume: d,
            inputMode: u,
            isDeafened: g
        } = (0, l.cj)([p.Z], () => {
            let e = p.Z.getInputDeviceId(),
                t = p.Z.getInputDevices(),
                n = a().find(t, (t) => {
                    let { id: n } = t;
                    return n === e;
                }),
                r = p.Z.getOutputDeviceId(),
                i = p.Z.getOutputDevices(),
                s = a().find(i, (e) => {
                    let { id: t } = e;
                    return t === r;
                }),
                l = p.Z.getModeOptions(),
                o = p.Z.getInputVolume(),
                c = p.Z.getOutputVolume();
            return {
                inputDevice: n,
                outputDevice: s,
                modeOptions: l,
                inputVolume: o,
                outputVolume: c,
                inputMode: p.Z.getMode(),
                isDeafened: p.Z.isSelfDeaf()
            };
        }),
        f = (0, l.e7)([h.Z], () => h.Z.isConnected()),
        { ref: b, width: _ } = (0, m.ZP)();
    return (0, r.jsx)(
        E,
        (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                    )),
                    r.forEach(function (t) {
                        x(e, t, n[t]);
                    });
            }
            return e;
        })(
            {
                isVoiceConnected: f,
                inputVolume: c,
                outputVolume: d,
                inputMode: u,
                isDeafened: g,
                vadThreshold: o.threshold,
                vadAutoThreshold: o.autoThreshold,
                inputDeviceName: null != (t = null == i ? void 0 : i.name) ? t : '',
                outputDeviceName: null != (n = null == s ? void 0 : s.name) ? n : '',
                measureButtonRef: b,
                buttonMinWidth: _
            },
            e
        )
    );
}
