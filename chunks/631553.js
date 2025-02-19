let i;
n.d(t, { Z: () => eI }), n(653041);
var r = n(200651),
    o = n(192379),
    a = n(120356),
    s = n.n(a),
    c = n(921738),
    d = n.n(c),
    l = n(954955),
    u = n.n(l),
    _ = n(498607),
    f = n.n(_),
    p = n(442837),
    h = n(704215),
    v = n(481060),
    m = n(668781),
    g = n(239091),
    x = n(13245),
    b = n(425493),
    y = n(615287),
    E = n(951483),
    O = n(714338),
    C = n(185666),
    Z = n(100527),
    I = n(906732),
    k = n(146282),
    N = n(600164);
n(70097);
var w = n(605236),
    P = n(594190),
    L = n(567409),
    A = n(74299),
    j = n(989941),
    T = n(377400),
    S = n(329557),
    R = n(93127),
    D = n(199902),
    W = n(314897),
    z = n(592125),
    M = n(480294),
    U = n(430824),
    G = n(355863),
    B = n(131951),
    K = n(944486),
    V = n(618541),
    H = n(449224),
    Y = n(574254),
    F = n(556296),
    X = n(808506),
    q = n(372679),
    Q = n(237997),
    J = n(451478),
    $ = n(70956),
    ee = n(358085),
    et = n(998502),
    en = n(13140),
    ei = n(145597),
    er = n(658785),
    eo = n(32300),
    ea = n(681603),
    es = n(358446),
    ec = n(348733),
    ed = n(312178),
    el = n(708383),
    eu = n(923532),
    e_ = n(107200),
    ef = n(983660),
    ep = n(987650),
    eh = n(981631),
    ev = n(206583),
    em = n(388032),
    eg = n(470568);
function ex(e, t, n) {
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
(p.ZP.PersistedStore.disableWrites = __OVERLAY__), p.ZP.initialize();
let eb = null;
function ey(e) {
    e.preventDefault();
}
function eE(e) {
    (0, g.jW)(e, async () => {
        let { default: e } = await n.e('92780').then(n.bind(n, 930381));
        return (t) =>
            (0, r.jsx)(
                e,
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
                                ex(e, t, n[t]);
                            });
                    }
                    return e;
                })({}, t)
            );
    });
}
ee.isPlatformEmbedded;
let eO = (e) => {
        let { keybind: t, onClick: n, isPreviewingInGame: i, locked: o } = e,
            a = o ? v.P3F : 'div';
        return (0, r.jsx)(a, {
            className: s()(eg.overlayBackground, {
                [eg.overlayActive]: !o,
                [eg.overlayLocked]: o,
                [eg.previewMode]: !o && i
            }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: i, button: r } = e;
                r === eh.AeJ.PRIMARY && t === i && n();
            },
            onContextMenu: eE,
            children: o
                ? null
                : (0, r.jsx)('div', {
                      className: eg.closeContainer,
                      children: (0, r.jsx)(b.Z, {
                          variant: b.Z.Variants.BOLD,
                          keybind: t,
                          closeAction: n
                      })
                  })
        });
    },
    eC = (e) => {
        let { keyCode: t, shiftKey: n, metaKey: i, altKey: r, ctrlKey: o } = e;
        return {
            keyCode: t,
            shiftKey: n,
            metaKey: i,
            altKey: r,
            ctrlKey: o
        };
    };
class eZ extends o.Component {
    handleLock() {
        (0, v.$sL)() || Y.Z.isOpen() || x.Z.setInputLocked(!0, (0, ei.QF)());
    }
    handleDeactivate() {
        x.Z.deactivateAllRegions();
    }
    componentDidMount() {
        x.Z.startSession(), T.Z.initialize(), C.Z.initialize(), S.Z.initialize();
    }
    componentDidUpdate(e) {
        let { initialized: t } = this.props;
        if (t) {
            if (t && !e.initialized) {
                this.initialSetup();
                return;
            }
            if (!e.locked && this.props.locked) {
                if ((window.addEventListener('contextmenu', ey, !1), null != eb)) {
                    let e = Date.now() - eb;
                    x.Z.track(eh.rMx.OVERLAY_LOCKED, { unlocked_duration: e }), (eb = null);
                }
                O.Z.disable(), (this.activeKeyEventShapes = []), Q.Z.isPinned(eh.Odu.TEXT) && (O.Z.setLayout(E.Xq), O.Z.enable());
            } else e.locked && !this.props.locked && (window.removeEventListener('contextmenu', ey, !1), null == eb && ((eb = Date.now()), x.Z.track(eh.rMx.OVERLAY_UNLOCKED)), O.Z.disable(), (this.activeKeyEventShapes = []), O.Z.setLayout(E.Sr), O.Z.enable());
            e.keybindKeyCodes !== this.props.keybindKeyCodes && (this.lockEventShape = (0, en.d2)(this.props.keybindKeyCodes)), !e.hasFetchedContentInventory && this.props.hasFetchedContentInventory && x.Z.notifyContentInventoryReady(this.props.contentInventoryEntries);
        }
    }
    initialSetup() {
        let { connectedToVoice: e, locked: t, canGoLive: n, isStreaming: i, voiceGuild: r, voiceChannelId: o, game: a, showKeybindNotification: s, dismissKeybindNotification: c } = this.props;
        x.Z.track(eh.rMx.OVERLAY_INITIALIZED, {
            voice_widget_connected: e,
            text_widget_connected: Q.Z.isPinned(eh.Odu.TEXT),
            overlay_render_method: y.gl[y.gl.Hook],
            unpinned_widget_types: G.Z.getAllUnpinnedPinnedWidgets(ei.qU)
        }),
            er.Z.trackExposure({ location: 'Overlay' });
        let d = n && !i && null != a,
            l = e && null != r && null != o,
            u = (0, w.un)(h.z.OVERLAY_OOP_WELCOME_SWITCH_FROM_IP_NUX),
            _ = this.props.hasOverlayV3UI,
            f = { type: ep.nc.WELCOME };
        if (
            (_
                ? (f = {
                      type: ep.nc.OOP_WELCOME,
                      game: null != a ? a : void 0,
                      isFirstTimeNux: !u
                  })
                : s
                  ? (f = {
                        type: ep.nc.KEYBIND_INDICATORS,
                        markAsDismissed: c
                    })
                  : d && l
                    ? (f = {
                          type: ep.nc.GO_LIVE_VOICE,
                          game: a,
                          voiceChannelId: o,
                          voiceGuild: r
                      })
                    : d &&
                      (f = {
                          type: ep.nc.GO_LIVE_NON_VOICE,
                          game: a
                      }),
            x.Z.overlayMounted(f),
            window.addEventListener('resize', this.handleWindowResize),
            t && window.addEventListener('contextmenu', ey, !1),
            ee.isPlatformEmbedded)
        ) {
            let e = (0, q.M)();
            if (null == e) return;
            if (void 0 !== e.setPerfInfoCallback) {
                var p;
                e.setPerfInfoCallback((e) => {
                    x.Z.track(eh.rMx.OVERLAY_PERF_INFO, e);
                }),
                    null === (p = e.broadcastCommand) ||
                        void 0 === p ||
                        p.call(e, {
                            message: 'set_perf_report_interval',
                            interval: 15 * $.Z.Millis.MINUTE
                        });
            }
            et.ZP.on('REQUEST_OPEN_EXTERNAL_URL', (e, t) => {
                Q.Z.getDisableExternalLinkAlert() || t === V.Z.getLastURL()
                    ? et.ZP.send('OPEN_EXTERNAL_URL', t)
                    : m.Z.show({
                          title: em.NW.string(em.t.WLx4Fx),
                          body: em.NW.string(em.t.H8O1TE),
                          secondaryConfirmText: em.NW.string(em.t.IwqGhY),
                          confirmText: em.NW.string(em.t['3PatS0']),
                          cancelText: em.NW.string(em.t['ETE/oK']),
                          onConfirmSecondary: () => {
                              x.Z.disableExternalLinkAlert(), et.ZP.send('OPEN_EXTERNAL_URL', t);
                          },
                          onConfirm: () => et.ZP.send('OPEN_EXTERNAL_URL', t)
                      });
            });
        }
        window.addEventListener('keydown', this.onKeyDownGlobal, !0), window.addEventListener('keyup', this.onKeyUpGlobal, !0);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowResize), window.removeEventListener('keydown', this.onKeyDownGlobal, !0), window.removeEventListener('keyup', this.onKeyUpGlobal, !0), this.props.locked && window.removeEventListener('contextmenu', ey, !1), T.Z.terminate(), C.Z.terminate(), S.Z.terminate();
    }
    renderInvalidSizeMessage() {
        return (0, r.jsx)(N.Z, {
            justify: N.Z.Justify.CENTER,
            align: N.Z.Align.CENTER,
            className: eg.invalidContainer,
            children: (0, r.jsx)('div', {
                className: eg.inactiveContainer,
                children: em.NW.format(em.t.ketnW1, ei.FW)
            })
        });
    }
    render() {
        let { locked: e, keybind: t, incompatibleApp: n, initialized: o, isPreviewingInGame: a, activeRegions: c, windowSize: d, voiceGuild: l, voiceChannelId: u, hasOverlayV3UI: _ } = this.props,
            { width: f, height: p } = d;
        if (0 === f || 0 === p || n || !o) return null;
        let h = e || a,
            v = W.default.getId();
        return (0, r.jsxs)('div', {
            className: eg.overlay,
            children: [
                (0, r.jsx)(el.Z, {}),
                a &&
                    (0, r.jsx)('header', {
                        className: eg.previewingInGameHeader,
                        children: em.NW.string(em.t.iOq96u)
                    }),
                i,
                (!e || c.has(eh.O0n.TEXT_WIDGET)) &&
                    (0, r.jsx)(eO, {
                        locked: e,
                        keybind: t,
                        onClick: e ? this.handleDeactivate : this.handleLock,
                        isPreviewingInGame: a
                    }),
                (0, ei.Te)(d)
                    ? (0, r.jsx)(ed.Z, {
                          className: s()({
                              [eg.layoutLocked]: e,
                              [eg.layoutUnlocked]: !e
                          })
                      })
                    : e
                      ? null
                      : this.renderInvalidSizeMessage(),
                (0, r.jsx)(e_.Z, {}),
                null != l &&
                    null != u &&
                    (0, r.jsx)(eu.Z, {
                        streamerId: v,
                        guildId: l.id,
                        channelId: u
                    }),
                _ && (0, r.jsx)(ef.Z, { locked: e }),
                (0, r.jsx)(ec.Z, {
                    locked: h,
                    keybind: t
                }),
                (0, r.jsx)(ea.Z, {})
            ]
        });
    }
    constructor(e) {
        super(e),
            ex(this, 'handleWindowResize', () => {
                X.Z.isFocusedPidOutOfProcess()
                    ? this.forceUpdate()
                    : u()(() => {
                          this.forceUpdate();
                      }, 500);
            }),
            ex(this, 'activeKeyEventShapes', []),
            ex(this, 'lockEventShape', (0, en.d2)(this.props.keybindKeyCodes)),
            ex(this, 'getActiveKeyEventIndex', (e) => this.activeKeyEventShapes.findIndex((t) => f()(t, e))),
            ex(this, 'onKeyDownGlobal', (e) => {
                let t = eC(e),
                    n = this.getActiveKeyEventIndex(t) > -1,
                    i = [16, 17, 18, 91].includes(e.keyCode);
                n || i || this.activeKeyEventShapes.push(t), this.activeKeyEventShapes.length === this.lockEventShape.length && this.lockEventShape.every((e) => this.activeKeyEventShapes.some((t) => f()(e, t))) && (e.preventDefault(), e.stopPropagation());
                let { locked: r, activeRegions: o } = this.props;
                t.keyCode === d().codes.esc && r && o.has(eh.O0n.TEXT_WIDGET) && x.Z.deactivateAllRegions();
            }),
            ex(this, 'onKeyUpGlobal', (e) => {
                let t = eC(e),
                    n = this.getActiveKeyEventIndex(t);
                n > -1 && this.activeKeyEventShapes.splice(n, 1);
            });
        let t = e.locked && Q.Z.isPinned(eh.Odu.TEXT);
        O.Z.setLayout(t ? E.Xq : E.Sr), t && O.Z.enable();
    }
}
function eI() {
    let {
            locked: e,
            initialized: t,
            incompatibleApp: n,
            activeRegions: i,
            isPreviewingInGame: a
        } = (0, p.cj)([Q.Z], () => ({
            locked: Q.Z.isLocked((0, ei.QF)()),
            initialized: Q.Z.initialized,
            incompatibleApp: Q.Z.incompatibleApp,
            activeRegions: Q.Z.getActiveRegions(),
            isPreviewingInGame: Q.Z.isPreviewingInGame()
        })),
        s = (0, p.e7)([J.Z], () => J.Z.windowSize()),
        c = (0, p.e7)([F.ZP], () => F.ZP.getOverlayKeybind()),
        d = (0, p.e7)([K.Z], () => K.Z.getVoiceChannelId()),
        l = (0, p.e7)([z.Z], () => z.Z.getChannel(d)),
        u = (0, p.e7)([U.Z], () => (null != l ? U.Z.getGuild(l.guild_id) : null)),
        _ = (0, p.e7)([P.ZP, H.Z], () => (0, j.Z)(P.ZP, H.Z)),
        f = (0, L.Ns)(null == _ ? void 0 : _.id),
        h = (0, p.e7)([k.Z], () => null != k.Z.getLastFeedFetchDate(ev.YN.GAME_PROFILE_FEED)),
        m = (0, p.e7)([B.Z], () => (0, A.Z)(B.Z)),
        g = (0, p.e7)([D.Z], () => null != D.Z.getCurrentUserActiveStream()),
        { analyticsLocations: x } = (0, I.ZP)(Z.Z.OVERLAY),
        { showKeybindIndicators: b, dismissKeybindNotification: y } = (0, es.K)(),
        E = (0, p.e7)([M.Z], () => M.Z.fetchedConsents);
    o.useEffect(() => {
        E && (0, R._)();
    }, [E]);
    let O = (0, eo.o4)('ipOverlay').overlayV3UI;
    return (0, r.jsx)(I.Gt, {
        value: x,
        children: (0, r.jsx)(v.vWI, {
            children: (0, r.jsx)(eZ, {
                locked: e,
                initialized: t,
                incompatibleApp: n,
                activeRegions: i,
                isPreviewingInGame: a,
                windowSize: s,
                keybind: null != c ? (0, en.BB)(c.shortcut, !0) : '???',
                keybindKeyCodes: null != c ? c.shortcut : [],
                connectedToVoice: null != d,
                voiceChannelId: null != l ? l.id : null,
                voiceGuild: u,
                game: _,
                canGoLive: m,
                isStreaming: g,
                showKeybindNotification: b,
                dismissKeybindNotification: y,
                contentInventoryEntries: f,
                hasFetchedContentInventory: h,
                hasOverlayV3UI: O
            })
        })
    });
}
