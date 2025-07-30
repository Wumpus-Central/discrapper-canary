let i;
(n.d(t, { Z: () => eC }), n(539854));
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
    b = n(593472),
    E = n(951483),
    S = n(714338),
    x = n(185666),
    C = n(100527),
    j = n(906732),
    Z = n(600164);
n(70097);
var I = n(266454),
    P = n(594190),
    w = n(74299),
    N = n(989941),
    T = n(377400),
    D = n(329557),
    k = n(199902),
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
    H = n(808506),
    F = n(372679),
    Y = n(237997),
    K = n(451478),
    X = n(70956),
    J = n(358085),
    Q = n(998502),
    q = n(378799),
    $ = n(13140),
    ee = n(145597),
    et = n(658785),
    en = n(454991),
    ei = n(837268),
    er = n(32300),
    eo = n(681603),
    el = n(358446),
    es = n(348733),
    ea = n(312178),
    ec = n(708383),
    ed = n(923532),
    eu = n(107200),
    eh = n(983660),
    ep = n(987650),
    ef = n(757744),
    eg = n(981631),
    em = n(388032),
    ey = n(411961);
function eO(e, t, n) {
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
((f.ZP.PersistedStore.disableWrites = __OVERLAY__), f.ZP.initialize());
let ev = null;
function e_(e) {
    e.preventDefault();
}
function eb(e) {
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
                        ('function' == typeof Object.getOwnPropertySymbols &&
                            (i = i.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            i.forEach(function (t) {
                                eO(e, t, n[t]);
                            }));
                    }
                    return e;
                })({}, t)),
                (i = i = { version: ef.bv }),
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
let eE = (e) => {
        let { keybind: t, onClick: n, isPreviewingInGame: i, locked: o } = e,
            l = o ? m.P3F : 'div';
        return (0, r.jsx)(l, {
            className: s()(ey.overlayBackground, {
                [ey.overlayActive]: !o,
                [ey.overlayLocked]: o,
                [ey.previewMode]: !o && i
            }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: i, button: r } = e;
                r === eg.AeJ.PRIMARY && t === i && n();
            },
            onContextMenu: eb,
            children: o
                ? null
                : (0, r.jsx)('div', {
                      className: ey.closeContainer,
                      children: (0, r.jsx)(_.Z, {
                          variant: _.Z.Variants.BOLD,
                          keybind: t,
                          closeAction: n
                      })
                  })
        });
    },
    eS = (e) => {
        let { keyCode: t, shiftKey: n, metaKey: i, altKey: r, ctrlKey: o } = e;
        return {
            keyCode: t,
            shiftKey: n,
            metaKey: i,
            altKey: r,
            ctrlKey: o
        };
    };
class ex extends o.Component {
    handleLock() {
        (0, m.$sL)() || B.Z.isOpen() || v.Z.setInputLocked(!0, (0, ee.getPID)());
    }
    handleDeactivate() {
        v.Z.deactivateAllRegions();
    }
    componentDidMount() {
        (v.Z.startSession(), T.Z.initialize(), x.Z.initialize(), D.Z.initialize());
    }
    componentDidUpdate(e) {
        let { initialized: t } = this.props;
        if (t) {
            if (t && !e.initialized) return void this.initialSetup();
            if (!e.locked && this.props.locked) {
                if ((window.addEventListener('contextmenu', e_, !1), null != ev)) {
                    let e = Date.now() - ev;
                    (v.Z.track(eg.rMx.OVERLAY_LOCKED, { unlocked_duration: e }), (ev = null));
                }
                (S.Z.disable(), (this.activeKeyEventShapes = []), Y.default.isPinned(eg.Odu.TEXT) && (S.Z.setLayout(E.Xq), S.Z.enable()));
            } else e.locked && !this.props.locked && (window.removeEventListener('contextmenu', e_, !1), null == ev && ((ev = Date.now()), v.Z.track(eg.rMx.OVERLAY_UNLOCKED)), S.Z.disable(), (this.activeKeyEventShapes = []), S.Z.setLayout(E.Sr), S.Z.enable());
            e.keybindKeyCodes !== this.props.keybindKeyCodes && (this.lockEventShape = (0, $.d2)(this.props.keybindKeyCodes));
        }
    }
    initialSetup() {
        let { connectedToVoice: e, locked: t, canGoLive: n, isStreaming: i, voiceGuild: r, voiceChannelId: o, game: l, showKeybindNotification: s, dismissKeybindNotification: a, isOOPOverlayAvailable: c } = this.props;
        (v.Z.track(eg.rMx.OVERLAY_INITIALIZED, {
            voice_widget_connected: e,
            text_widget_connected: Y.default.isPinned(eg.Odu.TEXT),
            overlay_render_method: ei.gl[ei.gl.Hook],
            unpinned_widget_types: M.Z.getAllUnpinnedPinnedWidgets(ee.OVERLAY_LAYOUT_ID)
        }),
            et.Z.trackExposure({ location: 'Overlay' }));
        let d = n && !i && null != l,
            u = e && null != r && null != o,
            h = (0, I.zu)(g.z.OVERLAY_OOP_WELCOME_SWITCH_FROM_IP_NUX),
            p = { type: ep.nc.WELCOME };
        if (
            (c
                ? (p = {
                      type: ep.nc.OOP_WELCOME,
                      game: null != l ? l : void 0,
                      isFirstTimeNux: !h
                  })
                : s
                  ? (p = {
                        type: ep.nc.KEYBIND_INDICATORS,
                        markAsDismissed: a
                    })
                  : d && u
                    ? (p = {
                          type: ep.nc.GO_LIVE_VOICE,
                          game: l,
                          voiceChannelId: o,
                          voiceGuild: r
                      })
                    : d &&
                      (p = {
                          type: ep.nc.GO_LIVE_NON_VOICE,
                          game: l
                      }),
            setTimeout(async () => {
                (await (0, q.s5)(), v.Z.overlayMounted(p));
            }, 128),
            window.addEventListener('resize', this.handleWindowResize),
            t && window.addEventListener('contextmenu', e_, !1),
            J.isPlatformEmbedded)
        ) {
            let e = (0, F.M)();
            if (null == e) return;
            if (void 0 !== e.setPerfInfoCallback) {
                var f;
                (e.setPerfInfoCallback((e) => {
                    v.Z.track(eg.rMx.OVERLAY_PERF_INFO, e);
                }),
                    null == (f = e.broadcastCommand) ||
                        f.call(e, {
                            message: 'set_perf_report_interval',
                            interval: 15 * X.Z.Millis.MINUTE
                        }));
            }
            Q.ZP.on('REQUEST_OPEN_EXTERNAL_URL', (e, t) => {
                Y.default.getDisableExternalLinkAlert() || t === W.Z.getLastURL()
                    ? Q.ZP.send('OPEN_EXTERNAL_URL', t)
                    : y.Z.show({
                          title: em.intl.string(em.t.WLx4Fx),
                          body: em.intl.string(em.t.H8O1TE),
                          secondaryConfirmText: em.intl.string(em.t.IwqGhY),
                          confirmText: em.intl.string(em.t['3PatS0']),
                          cancelText: em.intl.string(em.t['ETE/oK']),
                          onConfirmSecondary: () => {
                              v.Z.disableExternalLinkAlert();
                          },
                          onConfirm: () => Q.ZP.send('OPEN_EXTERNAL_URL', t)
                      });
            });
        }
        (window.addEventListener('keydown', this.onKeyDownGlobal, !0), window.addEventListener('keyup', this.onKeyUpGlobal, !0));
    }
    componentWillUnmount() {
        (window.removeEventListener('resize', this.handleWindowResize), window.removeEventListener('keydown', this.onKeyDownGlobal, !0), window.removeEventListener('keyup', this.onKeyUpGlobal, !0), this.props.locked && window.removeEventListener('contextmenu', e_, !1), T.Z.terminate(), x.Z.terminate(), D.Z.terminate());
    }
    renderInvalidSizeMessage() {
        return (0, r.jsx)(Z.Z, {
            justify: Z.Z.Justify.CENTER,
            align: Z.Z.Align.CENTER,
            className: ey.invalidContainer,
            children: (0, r.jsx)('div', {
                className: ey.inactiveContainer,
                children: em.intl.format(em.t.ketnW1, ee.OVERLAY_MIN_RESOLUTION)
            })
        });
    }
    render() {
        let { locked: e, keybind: t, incompatibleApp: n, initialized: o, isPreviewingInGame: l, activeRegions: a, windowSize: c, voiceGuild: d, voiceChannelId: u, isOOPOverlayAvailable: h } = this.props,
            { width: p, height: f } = c;
        if (0 === p || 0 === f || n || !o) return null;
        let g = e || l,
            m = R.default.getId();
        return (0, r.jsxs)('div', {
            className: ey.overlay,
            children: [
                (0, r.jsx)(ec.Z, {}),
                l &&
                    (0, r.jsx)('header', {
                        className: ey.previewingInGameHeader,
                        children: em.intl.string(em.t.iOq96u)
                    }),
                i,
                (!e || a.has(eg.O0n.TEXT_WIDGET)) &&
                    (0, r.jsx)(eE, {
                        locked: e,
                        keybind: t,
                        onClick: e ? this.handleDeactivate : this.handleLock,
                        isPreviewingInGame: l
                    }),
                (0, ee.validResolution)(c)
                    ? (0, r.jsx)(ea.Z, {
                          className: s()({
                              [ey.layoutLocked]: e,
                              [ey.layoutUnlocked]: !e
                          })
                      })
                    : e
                      ? null
                      : this.renderInvalidSizeMessage(),
                (0, r.jsx)(eu.Z, {}),
                null != d &&
                    null != u &&
                    (0, r.jsx)(ed.Z, {
                        streamerId: m,
                        guildId: d.id,
                        channelId: u
                    }),
                h && (0, r.jsx)(eh.Z, { locked: e }),
                (0, r.jsx)(es.Z, {
                    locked: g,
                    keybind: t
                }),
                (0, r.jsx)(eo.Z, {})
            ]
        });
    }
    constructor(e) {
        (super(e),
            eO(this, 'handleWindowResize', () => {
                H.default.isFocusedPidOutOfProcess()
                    ? this.forceUpdate()
                    : u()(() => {
                          this.forceUpdate();
                      }, 500);
            }),
            eO(this, 'activeKeyEventShapes', []),
            eO(this, 'lockEventShape', (0, $.d2)(this.props.keybindKeyCodes)),
            eO(this, 'getActiveKeyEventIndex', (e) => this.activeKeyEventShapes.findIndex((t) => p()(t, e))),
            eO(this, 'onKeyDownGlobal', (e) => {
                let t = eS(e),
                    n = this.getActiveKeyEventIndex(t) > -1,
                    i = [16, 17, 18, 91].includes(e.keyCode);
                (n || i || this.activeKeyEventShapes.push(t), this.activeKeyEventShapes.length === this.lockEventShape.length && this.lockEventShape.every((e) => this.activeKeyEventShapes.some((t) => p()(e, t))) && (e.preventDefault(), e.stopPropagation()));
                let { locked: r, activeRegions: o } = this.props;
                t.keyCode === c().codes.esc && r && o.has(eg.O0n.TEXT_WIDGET) && v.Z.deactivateAllRegions();
            }),
            eO(this, 'onKeyUpGlobal', (e) => {
                let t = eS(e),
                    n = this.getActiveKeyEventIndex(t);
                n > -1 && this.activeKeyEventShapes.splice(n, 1);
            }));
        let t = e.locked && Y.default.isPinned(eg.Odu.TEXT);
        (S.Z.setLayout(t ? E.Xq : E.Sr), t && S.Z.enable());
    }
}
function eC() {
    var e, t;
    let {
            locked: n,
            initialized: i,
            incompatibleApp: o,
            activeRegions: l,
            isPreviewingInGame: s,
            trackedGame: a
        } = (0, f.cj)([Y.default], () => ({
            locked: Y.default.isLocked((0, ee.getPID)()),
            initialized: Y.default.initialized,
            incompatibleApp: Y.default.incompatibleApp,
            activeRegions: Y.default.getActiveRegions(),
            isPreviewingInGame: Y.default.isPreviewingInGame(),
            trackedGame: Y.default.getTrackedGame((0, ee.getPID)())
        })),
        c = (0, f.e7)([K.Z], () => K.Z.windowSize()),
        d = (0, f.e7)([G.ZP], () => G.ZP.getOverlayKeybind()),
        u = (0, f.e7)([V.Z], () => V.Z.getVoiceChannelId()),
        h = (0, f.e7)([A.Z], () => A.Z.getChannel(u)),
        p = (0, f.e7)([L.Z], () => (null != h ? L.Z.getGuild(h.guild_id) : null)),
        g = (0, f.e7)([P.ZP, U.Z], () => (0, N.Z)(P.ZP, U.Z)),
        m = (0, f.e7)([z.Z], () => (0, w.Z)(z.Z)),
        y = (0, f.e7)([k.Z], () => null != k.Z.getCurrentUserActiveStream()),
        { analyticsLocations: O } = (0, j.ZP)(C.Z.OVERLAY),
        { showKeybindIndicators: v, dismissKeybindNotification: _ } = (0, el.K)(),
        E = (null == a ? void 0 : a.fullscreenType) === b.Jx.FULLSCREEN,
        S = null != (e = null == a ? void 0 : a.oopEnabled) && e,
        x = en.v.oopEnabled,
        Z = null != (t = null == a ? void 0 : a.hasChangedRenderMode) && t,
        { useContextualNudge: I, disableNudge: T } = (0, er.J0)('OverlaySetup');
    return (0, r.jsx)(j.Gt, {
        value: O,
        children: (0, r.jsx)(ex, {
            locked: n,
            initialized: i,
            incompatibleApp: o,
            activeRegions: l,
            isPreviewingInGame: s,
            windowSize: c,
            keybind: null != d ? (0, $.BB)(d.shortcut, !0) : '???',
            keybindKeyCodes: null != d ? d.shortcut : [],
            connectedToVoice: null != u,
            voiceChannelId: null != h ? h.id : null,
            voiceGuild: p,
            game: g,
            canGoLive: m,
            isStreaming: y,
            showKeybindNotification: v,
            dismissKeybindNotification: _,
            isOOPOverlayAvailable: (!I || (x && S && E && !Z)) && !T
        })
    });
}
