let i;
n.d(t, { Z: () => eS }), n(539854);
var r = n(255367),
    o = n(73800),
    l = n(120356),
    s = n.n(l),
    a = n(921738),
    c = n.n(a),
    d = n(954955),
    u = n.n(d),
    h = n(498607),
    p = n.n(h),
    f = n(442837),
    g = n(704215),
    m = n(481060),
    y = n(668781),
    O = n(239091),
    v = n(13245),
    _ = n(425493),
    b = n(615287),
    E = n(951483),
    S = n(714338),
    x = n(185666),
    C = n(100527),
    j = n(906732),
    Z = n(600164);
n(70097);
var I = n(605236),
    P = n(594190),
    w = n(74299),
    N = n(989941),
    T = n(377400),
    k = n(329557),
    D = n(199902),
    R = n(314897),
    A = n(592125),
    L = n(430824),
    M = n(355863),
    z = n(131951),
    V = n(944486),
    W = n(618541),
    U = n(449224),
    B = n(574254),
    G = n(556296),
    F = n(808506),
    H = n(372679),
    Y = n(237997),
    K = n(451478),
    X = n(70956),
    J = n(358085),
    Q = n(998502),
    q = n(378799),
    $ = n(13140),
    ee = n(145597),
    et = n(658785),
    en = n(32300),
    ei = n(681603),
    er = n(358446),
    eo = n(348733),
    el = n(312178),
    es = n(708383),
    ea = n(923532),
    ec = n(107200),
    ed = n(983660),
    eu = n(987650),
    eh = n(757744),
    ep = n(981631),
    ef = n(388032),
    eg = n(411961);
function em(e, t, n) {
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
(f.ZP.PersistedStore.disableWrites = __OVERLAY__), f.ZP.initialize();
let ey = null;
function eO(e) {
    e.preventDefault();
}
function ev(e) {
    (0, O.jW)(e, async () => {
        let { default: e } = await n.e('92780').then(n.bind(n, 930381));
        return (t) => {
            var n, i;
            return (0, r.jsx)(
                e,
                ((n = (function (e) {
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
                                em(e, t, n[t]);
                            });
                    }
                    return e;
                })({}, t)),
                (i = i = { version: eh.bv }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var i = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, i);
                          }
                          return n;
                      })(Object(i)).forEach(function (e) {
                          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                      }),
                n)
            );
        };
    });
}
J.isPlatformEmbedded;
let e_ = (e) => {
        let { keybind: t, onClick: n, isPreviewingInGame: i, locked: o } = e,
            l = o ? m.P3F : 'div';
        return (0, r.jsx)(l, {
            className: s()(eg.overlayBackground, {
                [eg.overlayActive]: !o,
                [eg.overlayLocked]: o,
                [eg.previewMode]: !o && i
            }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: i, button: r } = e;
                r === ep.AeJ.PRIMARY && t === i && n();
            },
            onContextMenu: ev,
            children: o
                ? null
                : (0, r.jsx)('div', {
                      className: eg.closeContainer,
                      children: (0, r.jsx)(_.Z, {
                          variant: _.Z.Variants.BOLD,
                          keybind: t,
                          closeAction: n
                      })
                  })
        });
    },
    eb = (e) => {
        let { keyCode: t, shiftKey: n, metaKey: i, altKey: r, ctrlKey: o } = e;
        return {
            keyCode: t,
            shiftKey: n,
            metaKey: i,
            altKey: r,
            ctrlKey: o
        };
    };
class eE extends o.Component {
    handleLock() {
        (0, m.$sL)() || B.Z.isOpen() || v.Z.setInputLocked(!0, (0, ee.getPID)());
    }
    handleDeactivate() {
        v.Z.deactivateAllRegions();
    }
    componentDidMount() {
        v.Z.startSession(), T.Z.initialize(), x.Z.initialize(), k.Z.initialize();
    }
    componentDidUpdate(e) {
        let { initialized: t } = this.props;
        if (t) {
            if (t && !e.initialized) return void this.initialSetup();
            if (!e.locked && this.props.locked) {
                if ((window.addEventListener('contextmenu', eO, !1), null != ey)) {
                    let e = Date.now() - ey;
                    v.Z.track(ep.rMx.OVERLAY_LOCKED, { unlocked_duration: e }), (ey = null);
                }
                S.Z.disable(), (this.activeKeyEventShapes = []), Y.default.isPinned(ep.Odu.TEXT) && (S.Z.setLayout(E.Xq), S.Z.enable());
            } else e.locked && !this.props.locked && (window.removeEventListener('contextmenu', eO, !1), null == ey && ((ey = Date.now()), v.Z.track(ep.rMx.OVERLAY_UNLOCKED)), S.Z.disable(), (this.activeKeyEventShapes = []), S.Z.setLayout(E.Sr), S.Z.enable());
            e.keybindKeyCodes !== this.props.keybindKeyCodes && (this.lockEventShape = (0, $.d2)(this.props.keybindKeyCodes));
        }
    }
    initialSetup() {
        let { connectedToVoice: e, locked: t, canGoLive: n, isStreaming: i, voiceGuild: r, voiceChannelId: o, game: l, showKeybindNotification: s, dismissKeybindNotification: a } = this.props;
        v.Z.track(ep.rMx.OVERLAY_INITIALIZED, {
            voice_widget_connected: e,
            text_widget_connected: Y.default.isPinned(ep.Odu.TEXT),
            overlay_render_method: b.gl[b.gl.Hook],
            unpinned_widget_types: M.Z.getAllUnpinnedPinnedWidgets(ee.OVERLAY_LAYOUT_ID)
        }),
            et.Z.trackExposure({ location: 'Overlay' });
        let c = n && !i && null != l,
            d = e && null != r && null != o,
            u = (0, I.un)(g.z.OVERLAY_OOP_WELCOME_SWITCH_FROM_IP_NUX),
            h = this.props.hasOverlayV3UI,
            p = { type: eu.nc.WELCOME };
        if (
            (h
                ? (p = {
                      type: eu.nc.OOP_WELCOME,
                      game: null != l ? l : void 0,
                      isFirstTimeNux: !u
                  })
                : s
                  ? (p = {
                        type: eu.nc.KEYBIND_INDICATORS,
                        markAsDismissed: a
                    })
                  : c && d
                    ? (p = {
                          type: eu.nc.GO_LIVE_VOICE,
                          game: l,
                          voiceChannelId: o,
                          voiceGuild: r
                      })
                    : c &&
                      (p = {
                          type: eu.nc.GO_LIVE_NON_VOICE,
                          game: l
                      }),
            setTimeout(async () => {
                await (0, q.s5)(), v.Z.overlayMounted(p);
            }, 128),
            window.addEventListener('resize', this.handleWindowResize),
            t && window.addEventListener('contextmenu', eO, !1),
            J.isPlatformEmbedded)
        ) {
            let e = (0, H.M)();
            if (null == e) return;
            if (void 0 !== e.setPerfInfoCallback) {
                var f;
                e.setPerfInfoCallback((e) => {
                    v.Z.track(ep.rMx.OVERLAY_PERF_INFO, e);
                }),
                    null == (f = e.broadcastCommand) ||
                        f.call(e, {
                            message: 'set_perf_report_interval',
                            interval: 15 * X.Z.Millis.MINUTE
                        });
            }
            Q.ZP.on('REQUEST_OPEN_EXTERNAL_URL', (e, t) => {
                Y.default.getDisableExternalLinkAlert() || t === W.Z.getLastURL()
                    ? Q.ZP.send('OPEN_EXTERNAL_URL', t)
                    : y.Z.show({
                          title: ef.intl.string(ef.t.WLx4Fx),
                          body: ef.intl.string(ef.t.H8O1TE),
                          secondaryConfirmText: ef.intl.string(ef.t.IwqGhY),
                          confirmText: ef.intl.string(ef.t['3PatS0']),
                          cancelText: ef.intl.string(ef.t['ETE/oK']),
                          onConfirmSecondary: () => {
                              v.Z.disableExternalLinkAlert();
                          },
                          onConfirm: () => Q.ZP.send('OPEN_EXTERNAL_URL', t)
                      });
            });
        }
        window.addEventListener('keydown', this.onKeyDownGlobal, !0), window.addEventListener('keyup', this.onKeyUpGlobal, !0);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowResize), window.removeEventListener('keydown', this.onKeyDownGlobal, !0), window.removeEventListener('keyup', this.onKeyUpGlobal, !0), this.props.locked && window.removeEventListener('contextmenu', eO, !1), T.Z.terminate(), x.Z.terminate(), k.Z.terminate();
    }
    renderInvalidSizeMessage() {
        return (0, r.jsx)(Z.Z, {
            justify: Z.Z.Justify.CENTER,
            align: Z.Z.Align.CENTER,
            className: eg.invalidContainer,
            children: (0, r.jsx)('div', {
                className: eg.inactiveContainer,
                children: ef.intl.format(ef.t.ketnW1, ee.OVERLAY_MIN_RESOLUTION)
            })
        });
    }
    render() {
        let { locked: e, keybind: t, incompatibleApp: n, initialized: o, isPreviewingInGame: l, activeRegions: a, windowSize: c, voiceGuild: d, voiceChannelId: u, hasOverlayV3UI: h } = this.props,
            { width: p, height: f } = c;
        if (0 === p || 0 === f || n || !o) return null;
        let g = e || l,
            m = R.default.getId();
        return (0, r.jsxs)('div', {
            className: eg.overlay,
            children: [
                (0, r.jsx)(es.Z, {}),
                l &&
                    (0, r.jsx)('header', {
                        className: eg.previewingInGameHeader,
                        children: ef.intl.string(ef.t.iOq96u)
                    }),
                i,
                (!e || a.has(ep.O0n.TEXT_WIDGET)) &&
                    (0, r.jsx)(e_, {
                        locked: e,
                        keybind: t,
                        onClick: e ? this.handleDeactivate : this.handleLock,
                        isPreviewingInGame: l
                    }),
                (0, ee.validResolution)(c)
                    ? (0, r.jsx)(el.Z, {
                          className: s()({
                              [eg.layoutLocked]: e,
                              [eg.layoutUnlocked]: !e
                          })
                      })
                    : e
                      ? null
                      : this.renderInvalidSizeMessage(),
                (0, r.jsx)(ec.Z, {}),
                null != d &&
                    null != u &&
                    (0, r.jsx)(ea.Z, {
                        streamerId: m,
                        guildId: d.id,
                        channelId: u
                    }),
                h && (0, r.jsx)(ed.Z, { locked: e }),
                (0, r.jsx)(eo.Z, {
                    locked: g,
                    keybind: t
                }),
                (0, r.jsx)(ei.Z, {})
            ]
        });
    }
    constructor(e) {
        super(e),
            em(this, 'handleWindowResize', () => {
                F.default.isFocusedPidOutOfProcess()
                    ? this.forceUpdate()
                    : u()(() => {
                          this.forceUpdate();
                      }, 500);
            }),
            em(this, 'activeKeyEventShapes', []),
            em(this, 'lockEventShape', (0, $.d2)(this.props.keybindKeyCodes)),
            em(this, 'getActiveKeyEventIndex', (e) => this.activeKeyEventShapes.findIndex((t) => p()(t, e))),
            em(this, 'onKeyDownGlobal', (e) => {
                let t = eb(e),
                    n = this.getActiveKeyEventIndex(t) > -1,
                    i = [16, 17, 18, 91].includes(e.keyCode);
                n || i || this.activeKeyEventShapes.push(t), this.activeKeyEventShapes.length === this.lockEventShape.length && this.lockEventShape.every((e) => this.activeKeyEventShapes.some((t) => p()(e, t))) && (e.preventDefault(), e.stopPropagation());
                let { locked: r, activeRegions: o } = this.props;
                t.keyCode === c().codes.esc && r && o.has(ep.O0n.TEXT_WIDGET) && v.Z.deactivateAllRegions();
            }),
            em(this, 'onKeyUpGlobal', (e) => {
                let t = eb(e),
                    n = this.getActiveKeyEventIndex(t);
                n > -1 && this.activeKeyEventShapes.splice(n, 1);
            });
        let t = e.locked && Y.default.isPinned(ep.Odu.TEXT);
        S.Z.setLayout(t ? E.Xq : E.Sr), t && S.Z.enable();
    }
}
function eS() {
    let {
            locked: e,
            initialized: t,
            incompatibleApp: n,
            activeRegions: i,
            isPreviewingInGame: o
        } = (0, f.cj)([Y.default], () => ({
            locked: Y.default.isLocked((0, ee.getPID)()),
            initialized: Y.default.initialized,
            incompatibleApp: Y.default.incompatibleApp,
            activeRegions: Y.default.getActiveRegions(),
            isPreviewingInGame: Y.default.isPreviewingInGame()
        })),
        l = (0, f.e7)([K.Z], () => K.Z.windowSize()),
        s = (0, f.e7)([G.ZP], () => G.ZP.getOverlayKeybind()),
        a = (0, f.e7)([V.Z], () => V.Z.getVoiceChannelId()),
        c = (0, f.e7)([A.Z], () => A.Z.getChannel(a)),
        d = (0, f.e7)([L.Z], () => (null != c ? L.Z.getGuild(c.guild_id) : null)),
        u = (0, f.e7)([P.ZP, U.Z], () => (0, N.Z)(P.ZP, U.Z)),
        h = (0, f.e7)([z.Z], () => (0, w.Z)(z.Z)),
        p = (0, f.e7)([D.Z], () => null != D.Z.getCurrentUserActiveStream()),
        { analyticsLocations: g } = (0, j.ZP)(C.Z.OVERLAY),
        { showKeybindIndicators: m, dismissKeybindNotification: y } = (0, er.K)(),
        O = (0, en.o4)('ipOverlay').overlayV3UI;
    return (0, r.jsx)(j.Gt, {
        value: g,
        children: (0, r.jsx)(eE, {
            locked: e,
            initialized: t,
            incompatibleApp: n,
            activeRegions: i,
            isPreviewingInGame: o,
            windowSize: l,
            keybind: null != s ? (0, $.BB)(s.shortcut, !0) : '???',
            keybindKeyCodes: null != s ? s.shortcut : [],
            connectedToVoice: null != a,
            voiceChannelId: null != c ? c.id : null,
            voiceGuild: d,
            game: u,
            canGoLive: h,
            isStreaming: p,
            showKeybindNotification: m,
            dismissKeybindNotification: y,
            hasOverlayV3UI: O
        })
    });
}
