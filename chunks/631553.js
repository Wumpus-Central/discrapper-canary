let i;
n.d(t, { Z: () => eb }), n(653041);
var r = n(200651),
    o = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(921738),
    c = n.n(l),
    d = n(954955),
    u = n.n(d),
    f = n(498607),
    p = n.n(f),
    h = n(442837),
    v = n(704215),
    E = n(481060),
    m = n(668781),
    x = n(239091),
    O = n(13245),
    y = n(425493),
    g = n(615287),
    _ = n(951483),
    Z = n(714338),
    b = n(185666),
    C = n(100527),
    N = n(906732),
    P = n(146282),
    j = n(600164);
n(70097);
var I = n(605236),
    L = n(594190),
    A = n(567409),
    k = n(74299),
    w = n(989941),
    T = n(377400),
    R = n(329557),
    S = n(199902),
    D = n(314897),
    U = n(592125),
    W = n(430824),
    M = n(355863),
    G = n(131951),
    K = n(944486),
    V = n(618541),
    z = n(449224),
    Y = n(574254),
    F = n(556296),
    H = n(808506),
    B = n(372679),
    X = n(237997),
    q = n(451478),
    Q = n(70956),
    J = n(358085),
    $ = n(998502),
    ee = n(13140),
    et = n(145597),
    en = n(658785),
    ei = n(32300),
    er = n(681603),
    eo = n(358446),
    ea = n(348733),
    es = n(312178),
    el = n(708383),
    ec = n(923532),
    ed = n(107200),
    eu = n(983660),
    ef = n(987650),
    ep = n(981631),
    eh = n(206583),
    ev = n(388032),
    eE = n(470568);
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
(h.ZP.PersistedStore.disableWrites = __OVERLAY__), h.ZP.initialize();
let ex = null;
function eO(e) {
    e.preventDefault();
}
function ey(e) {
    (0, x.jW)(e, async () => {
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
                                em(e, t, n[t]);
                            });
                    }
                    return e;
                })({}, t)
            );
    });
}
J.isPlatformEmbedded;
let eg = (e) => {
        let { keybind: t, onClick: n, isPreviewingInGame: i, locked: o } = e,
            a = o ? E.P3F : 'div';
        return (0, r.jsx)(a, {
            className: s()(eE.overlayBackground, {
                [eE.overlayActive]: !o,
                [eE.overlayLocked]: o,
                [eE.previewMode]: !o && i
            }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: i, button: r } = e;
                r === ep.AeJ.PRIMARY && t === i && n();
            },
            onContextMenu: ey,
            children: o
                ? null
                : (0, r.jsx)('div', {
                      className: eE.closeContainer,
                      children: (0, r.jsx)(y.Z, {
                          variant: y.Z.Variants.BOLD,
                          keybind: t,
                          closeAction: n
                      })
                  })
        });
    },
    e_ = (e) => {
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
        (0, E.$sL)() || Y.Z.isOpen() || O.Z.setInputLocked(!0, (0, et.QF)());
    }
    handleDeactivate() {
        O.Z.deactivateAllRegions();
    }
    componentDidMount() {
        O.Z.startSession(), T.Z.initialize(), b.Z.initialize(), R.Z.initialize();
    }
    componentDidUpdate(e) {
        let { initialized: t } = this.props;
        if (t) {
            if (t && !e.initialized) {
                this.initialSetup();
                return;
            }
            if (!e.locked && this.props.locked) {
                if ((window.addEventListener('contextmenu', eO, !1), null != ex)) {
                    let e = Date.now() - ex;
                    O.Z.track(ep.rMx.OVERLAY_LOCKED, { unlocked_duration: e }), (ex = null);
                }
                Z.Z.disable(), (this.activeKeyEventShapes = []), X.Z.isPinned(ep.Odu.TEXT) && (Z.Z.setLayout(_.Xq), Z.Z.enable());
            } else e.locked && !this.props.locked && (window.removeEventListener('contextmenu', eO, !1), null == ex && ((ex = Date.now()), O.Z.track(ep.rMx.OVERLAY_UNLOCKED)), Z.Z.disable(), (this.activeKeyEventShapes = []), Z.Z.setLayout(_.Sr), Z.Z.enable());
            e.keybindKeyCodes !== this.props.keybindKeyCodes && (this.lockEventShape = (0, ee.d2)(this.props.keybindKeyCodes)), !e.hasFetchedContentInventory && this.props.hasFetchedContentInventory && O.Z.notifyContentInventoryReady(this.props.contentInventoryEntries);
        }
    }
    initialSetup() {
        let { connectedToVoice: e, locked: t, canGoLive: n, isStreaming: i, voiceGuild: r, voiceChannelId: o, game: a, showKeybindNotification: s, dismissKeybindNotification: l } = this.props;
        O.Z.track(ep.rMx.OVERLAY_INITIALIZED, {
            voice_widget_connected: e,
            text_widget_connected: X.Z.isPinned(ep.Odu.TEXT),
            overlay_render_method: g.gl[g.gl.Hook],
            unpinned_widget_types: M.Z.getAllUnpinnedPinnedWidgets(et.qU)
        }),
            en.Z.trackExposure({ location: 'Overlay' });
        let c = n && !i && null != a,
            d = e && null != r && null != o,
            u = (0, I.un)(v.z.OVERLAY_OOP_WELCOME_SWITCH_FROM_IP_NUX),
            f = this.props.hasOverlayV3UI,
            p = { type: ef.nc.WELCOME };
        if (
            (f
                ? (p = {
                      type: ef.nc.OOP_WELCOME,
                      game: null != a ? a : void 0,
                      isFirstTimeNux: !u
                  })
                : s
                  ? (p = {
                        type: ef.nc.KEYBIND_INDICATORS,
                        markAsDismissed: l
                    })
                  : c && d
                    ? (p = {
                          type: ef.nc.GO_LIVE_VOICE,
                          game: a,
                          voiceChannelId: o,
                          voiceGuild: r
                      })
                    : c &&
                      (p = {
                          type: ef.nc.GO_LIVE_NON_VOICE,
                          game: a
                      }),
            O.Z.overlayMounted(p),
            window.addEventListener('resize', this.handleWindowResize),
            t && window.addEventListener('contextmenu', eO, !1),
            J.isPlatformEmbedded)
        ) {
            let e = (0, B.M)();
            if (null == e) return;
            if (void 0 !== e.setPerfInfoCallback) {
                var h;
                e.setPerfInfoCallback((e) => {
                    O.Z.track(ep.rMx.OVERLAY_PERF_INFO, e);
                }),
                    null === (h = e.broadcastCommand) ||
                        void 0 === h ||
                        h.call(e, {
                            message: 'set_perf_report_interval',
                            interval: 15 * Q.Z.Millis.MINUTE
                        });
            }
            $.ZP.on('REQUEST_OPEN_EXTERNAL_URL', (e, t) => {
                X.Z.getDisableExternalLinkAlert() || t === V.Z.getLastURL()
                    ? $.ZP.send('OPEN_EXTERNAL_URL', t)
                    : m.Z.show({
                          title: ev.NW.string(ev.t.WLx4Fx),
                          body: ev.NW.string(ev.t.H8O1TE),
                          secondaryConfirmText: ev.NW.string(ev.t.IwqGhY),
                          confirmText: ev.NW.string(ev.t['3PatS0']),
                          cancelText: ev.NW.string(ev.t['ETE/oK']),
                          onConfirmSecondary: () => {
                              O.Z.disableExternalLinkAlert(), $.ZP.send('OPEN_EXTERNAL_URL', t);
                          },
                          onConfirm: () => $.ZP.send('OPEN_EXTERNAL_URL', t)
                      });
            });
        }
        window.addEventListener('keydown', this.onKeyDownGlobal, !0), window.addEventListener('keyup', this.onKeyUpGlobal, !0);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowResize), window.removeEventListener('keydown', this.onKeyDownGlobal, !0), window.removeEventListener('keyup', this.onKeyUpGlobal, !0), this.props.locked && window.removeEventListener('contextmenu', eO, !1), T.Z.terminate(), b.Z.terminate(), R.Z.terminate();
    }
    renderInvalidSizeMessage() {
        return (0, r.jsx)(j.Z, {
            justify: j.Z.Justify.CENTER,
            align: j.Z.Align.CENTER,
            className: eE.invalidContainer,
            children: (0, r.jsx)('div', {
                className: eE.inactiveContainer,
                children: ev.NW.format(ev.t.ketnW1, et.FW)
            })
        });
    }
    render() {
        let { locked: e, keybind: t, incompatibleApp: n, initialized: o, isPreviewingInGame: a, activeRegions: l, windowSize: c, voiceGuild: d, voiceChannelId: u, hasOverlayV3UI: f } = this.props,
            { width: p, height: h } = c;
        if (0 === p || 0 === h || n || !o) return null;
        let v = e || a,
            E = D.default.getId();
        return (0, r.jsxs)('div', {
            className: eE.overlay,
            children: [
                (0, r.jsx)(el.Z, {}),
                a &&
                    (0, r.jsx)('header', {
                        className: eE.previewingInGameHeader,
                        children: ev.NW.string(ev.t.iOq96u)
                    }),
                i,
                (!e || l.has(ep.O0n.TEXT_WIDGET)) &&
                    (0, r.jsx)(eg, {
                        locked: e,
                        keybind: t,
                        onClick: e ? this.handleDeactivate : this.handleLock,
                        isPreviewingInGame: a
                    }),
                (0, et.Te)(c)
                    ? (0, r.jsx)(es.Z, {
                          className: s()({
                              [eE.layoutLocked]: e,
                              [eE.layoutUnlocked]: !e
                          })
                      })
                    : e
                      ? null
                      : this.renderInvalidSizeMessage(),
                (0, r.jsx)(ed.Z, {}),
                null != d &&
                    null != u &&
                    (0, r.jsx)(ec.Z, {
                        streamerId: E,
                        guildId: d.id,
                        channelId: u
                    }),
                f && (0, r.jsx)(eu.Z, { locked: e }),
                (0, r.jsx)(ea.Z, {
                    locked: v,
                    keybind: t
                }),
                (0, r.jsx)(er.Z, {})
            ]
        });
    }
    constructor(e) {
        super(e),
            em(this, 'handleWindowResize', () => {
                H.ZP.isFocusedPidOutOfProcess()
                    ? this.forceUpdate()
                    : u()(() => {
                          this.forceUpdate();
                      }, 500);
            }),
            em(this, 'activeKeyEventShapes', []),
            em(this, 'lockEventShape', (0, ee.d2)(this.props.keybindKeyCodes)),
            em(this, 'getActiveKeyEventIndex', (e) => this.activeKeyEventShapes.findIndex((t) => p()(t, e))),
            em(this, 'onKeyDownGlobal', (e) => {
                let t = e_(e),
                    n = this.getActiveKeyEventIndex(t) > -1,
                    i = [16, 17, 18, 91].includes(e.keyCode);
                n || i || this.activeKeyEventShapes.push(t), this.activeKeyEventShapes.length === this.lockEventShape.length && this.lockEventShape.every((e) => this.activeKeyEventShapes.some((t) => p()(e, t))) && (e.preventDefault(), e.stopPropagation());
                let { locked: r, activeRegions: o } = this.props;
                t.keyCode === c().codes.esc && r && o.has(ep.O0n.TEXT_WIDGET) && O.Z.deactivateAllRegions();
            }),
            em(this, 'onKeyUpGlobal', (e) => {
                let t = e_(e),
                    n = this.getActiveKeyEventIndex(t);
                n > -1 && this.activeKeyEventShapes.splice(n, 1);
            });
        let t = e.locked && X.Z.isPinned(ep.Odu.TEXT);
        Z.Z.setLayout(t ? _.Xq : _.Sr), t && Z.Z.enable();
    }
}
function eb() {
    let {
            locked: e,
            initialized: t,
            incompatibleApp: n,
            activeRegions: i,
            isPreviewingInGame: o
        } = (0, h.cj)([X.Z], () => ({
            locked: X.Z.isLocked((0, et.QF)()),
            initialized: X.Z.initialized,
            incompatibleApp: X.Z.incompatibleApp,
            activeRegions: X.Z.getActiveRegions(),
            isPreviewingInGame: X.Z.isPreviewingInGame()
        })),
        a = (0, h.e7)([q.Z], () => q.Z.windowSize()),
        s = (0, h.e7)([F.ZP], () => F.ZP.getOverlayKeybind()),
        l = (0, h.e7)([K.Z], () => K.Z.getVoiceChannelId()),
        c = (0, h.e7)([U.Z], () => U.Z.getChannel(l)),
        d = (0, h.e7)([W.Z], () => (null != c ? W.Z.getGuild(c.guild_id) : null)),
        u = (0, h.e7)([L.ZP, z.Z], () => (0, w.Z)(L.ZP, z.Z)),
        f = (0, A.Ns)(null == u ? void 0 : u.id),
        p = (0, h.e7)([P.Z], () => null != P.Z.getLastFeedFetchDate(eh.YN.GAME_PROFILE_FEED)),
        v = (0, h.e7)([G.Z], () => (0, k.Z)(G.Z)),
        m = (0, h.e7)([S.Z], () => null != S.Z.getCurrentUserActiveStream()),
        { analyticsLocations: x } = (0, N.ZP)(C.Z.OVERLAY),
        { showKeybindIndicators: O, dismissKeybindNotification: y } = (0, eo.K)(),
        g = (0, ei.o4)('ipOverlay').overlayV3UI;
    return (0, r.jsx)(N.Gt, {
        value: x,
        children: (0, r.jsx)(E.vWI, {
            children: (0, r.jsx)(eZ, {
                locked: e,
                initialized: t,
                incompatibleApp: n,
                activeRegions: i,
                isPreviewingInGame: o,
                windowSize: a,
                keybind: null != s ? (0, ee.BB)(s.shortcut, !0) : '???',
                keybindKeyCodes: null != s ? s.shortcut : [],
                connectedToVoice: null != l,
                voiceChannelId: null != c ? c.id : null,
                voiceGuild: d,
                game: u,
                canGoLive: v,
                isStreaming: m,
                showKeybindNotification: O,
                dismissKeybindNotification: y,
                contentInventoryEntries: f,
                hasFetchedContentInventory: p,
                hasOverlayV3UI: g
            })
        })
    });
}
