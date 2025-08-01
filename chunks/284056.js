(n.d(t, {
    Z: () => E,
    _: () => g._
}),
    n(953529),
    n(388685));
var i = n(255367),
    r = n(73800),
    s = n(392711),
    a = n.n(s),
    l = n(442837),
    o = n(46973),
    c = n(846519),
    d = n(755721),
    u = n(481060),
    m = n(846027),
    p = n(393238),
    g = n(794347),
    h = n(131951),
    f = n(19780),
    b = n(626135),
    x = n(981631),
    _ = n(388032),
    j = n(283806);
function O(e, t, n) {
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
class C extends r.PureComponent {
    componentDidMount() {
        this._initTimeout.start(1000, this.setupVoiceActivity);
    }
    componentWillUnmount() {
        (this._initTimeout.stop(), this._silenceTimeout.stop(), this._micTestStop(), h.Z.getMediaEngine().removeListener(o.aB.VoiceActivity, this.handleVoiceActivity));
    }
    _micTestStart() {
        let { isVoiceConnected: e, inputDeviceName: t, inputVolume: n, outputDeviceName: i, outputVolume: r, inputMode: s, vadAutoThreshold: a, vadThreshold: l, location: o, isDeafened: c } = this.props,
            d = !1;
        (e && !c && (m.Z.toggleSelfDeaf(), (d = !0)),
            m.Z.setLoopback('mic_test', !0),
            (this._micTestStartTime = Date.now()),
            this.setState({
                isMicTesting: !0,
                isDetectingInput: !0,
                didDeafenUser: d
            }),
            b.default.track(x.rMx.MIC_TESTING_STARTED, {
                input_device_name: t,
                input_device_volume: n,
                output_device_name: i,
                output_device_volume: r,
                input_mode: s,
                input_sensitivity_is_automatic: a,
                input_sensitivity_threshold: Math.round(l),
                location: o
            }));
    }
    _micTestStop() {
        let { didDeafenUser: e, isMicTesting: t } = this.state,
            { isVoiceConnected: n, isDeafened: i } = this.props;
        t &&
            (n && i && e && m.Z.toggleSelfDeaf(),
            m.Z.setLoopback('mic_test', !1),
            this.setState({
                isMicTesting: !1,
                didDeafenUser: !1
            }),
            null != this._micTestStartTime && b.default.track(x.rMx.MIC_TESTING_STOPPED, { testing_duration: Math.round((Date.now() - this._micTestStartTime) / 1000) }));
    }
    renderCaption() {
        let { captionVoice: e, captionNoVoice: t } = this.props,
            { isMicTesting: n, isDetectingInput: r } = this.state;
        return (0, i.jsx)(u.R94, {
            className: j.micTestCaption,
            type: u.R94.Types.DESCRIPTION,
            children: n ? (r ? e : t) : null
        });
    }
    render() {
        let { isVoiceConnected: e, title: t, description: n, notchBackground: r, buttonTest: s, buttonStop: a, buttonClassName: l, buttonColor: o, isDeafened: c, buttonMinWidth: m, measureButtonRef: p } = this.props,
            { isMicTesting: h, volume: f } = this.state,
            b = e && !h ? _.intl.string(_.t['9viE2N']) : null;
        h && e && !c && this._micTestStop();
        let x = a.length >= s.length ? a : s;
        return (0, i.jsxs)('div', {
            className: j.container,
            children: [
                (0, i.jsx)(u.vwX, {
                    tag: u.RB0.H5,
                    className: j.title,
                    children: t
                }),
                null != n &&
                    (0, i.jsx)(u.R94, {
                        type: u.R94.Types.DESCRIPTION,
                        className: j.description,
                        children: n
                    }),
                (0, i.jsxs)('div', {
                    className: j.micTest,
                    children: [
                        (0, i.jsxs)('div', {
                            className: j.buttonSizer,
                            'aria-hidden': !0,
                            children: [
                                (0, i.jsx)(d.zx, {
                                    buttonRef: p,
                                    grow: !0,
                                    size: d.zx.Sizes.SMALL,
                                    className: l,
                                    color: o,
                                    children: x
                                }),
                                (0, i.jsx)('div', { className: j.buttonSizerSpacer })
                            ]
                        }),
                        (0, i.jsx)(u.ua7, {
                            text: b,
                            children: (e) => {
                                let { onMouseEnter: t, onMouseLeave: n } = e;
                                return (0, i.jsx)(d.zx, {
                                    grow: !0,
                                    onClick: this.handleToggleMicTest,
                                    onMouseEnter: t,
                                    onMouseLeave: n,
                                    size: d.zx.Sizes.SMALL,
                                    className: l,
                                    color: o,
                                    style: null != m ? { minWidth: m } : { visibility: 'hidden' },
                                    children: h ? a : s
                                });
                            }
                        }),
                        (0, i.jsx)(g.Z, {
                            progress: h ? f + 100 : 0,
                            notchBackground: r,
                            children: this.renderCaption()
                        })
                    ]
                })
            ]
        });
    }
    constructor(...e) {
        (super(...e),
            O(this, '_initTimeout', new c.V7()),
            O(this, '_silenceTimeout', new c.V7()),
            O(this, '_messageTimeout', new c.V7()),
            O(this, '_micTestStartTime', void 0),
            O(this, 'state', {
                volume: -100,
                isMicTesting: !1,
                isDetectingInput: !0,
                didDeafenUser: !1
            }),
            O(this, 'setupVoiceActivity', () => {
                h.Z.getMediaEngine().on(o.aB.VoiceActivity, this.handleVoiceActivity);
            }),
            O(this, 'handleVoiceActivity', (e) => {
                let { isMicTesting: t } = this.state;
                if (t && e <= -100) {
                    (this._silenceTimeout.isStarted() ||
                        this._silenceTimeout.start(2000, () => {
                            this.setState({ isDetectingInput: !1 });
                        }),
                        this.setState({ volume: -100 }));
                    return;
                }
                (this._silenceTimeout.stop(),
                    this.setState({
                        volume: e,
                        isDetectingInput: !0
                    }));
            }),
            O(this, 'handleToggleMicTest', () => {
                this.state.isMicTesting ? this._micTestStop() : this._micTestStart();
            }));
    }
}
function E(e) {
    var t, n;
    let {
            inputDevice: r,
            outputDevice: s,
            threshold: o,
            autoThreshold: c,
            inputVolume: d,
            outputVolume: u,
            inputMode: m,
            isDeafened: g
        } = (0, l.cj)([h.Z], () => {
            let e = h.Z.getInputDeviceId(),
                t = h.Z.getInputDevices(),
                n = a().find(t, (t) => {
                    let { id: n } = t;
                    return n === e;
                }),
                i = h.Z.getOutputDeviceId(),
                r = h.Z.getOutputDevices(),
                s = a().find(r, (e) => {
                    let { id: t } = e;
                    return t === i;
                }),
                { threshold: l, autoThreshold: o } = h.Z.getModeOptions(),
                c = h.Z.getInputVolume(),
                d = h.Z.getOutputVolume();
            return {
                inputDevice: n,
                outputDevice: s,
                threshold: l,
                autoThreshold: o,
                inputVolume: c,
                outputVolume: d,
                inputMode: h.Z.getMode(),
                isDeafened: h.Z.isSelfDeaf()
            };
        }),
        b = (0, l.e7)([f.Z], () => f.Z.isConnected()),
        { ref: x, width: _ } = (0, p.ZP)();
    return (0, i.jsx)(
        C,
        (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    i = Object.keys(n);
                ('function' == typeof Object.getOwnPropertySymbols &&
                    (i = i.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                    )),
                    i.forEach(function (t) {
                        O(e, t, n[t]);
                    }));
            }
            return e;
        })(
            {
                isVoiceConnected: b,
                inputVolume: d,
                outputVolume: u,
                inputMode: m,
                isDeafened: g,
                vadThreshold: o,
                vadAutoThreshold: c,
                inputDeviceName: null != (t = null == r ? void 0 : r.name) ? t : '',
                outputDeviceName: null != (n = null == s ? void 0 : s.name) ? n : '',
                measureButtonRef: x,
                buttonMinWidth: _
            },
            e
        )
    );
}
