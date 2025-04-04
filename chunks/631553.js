let i;
n.d(t, { Z: () => eI }), n(539854);
var r = n(200651),
    a = n(192379),
    o = n(120356),
    s = n.n(o),
    l = n(921738),
    c = n.n(l),
    d = n(954955),
    _ = n.n(d),
    u = n(498607),
    f = n.n(u),
    p = n(442837),
    h = n(704215),
    m = n(481060),
    v = n(668781),
    g = n(239091),
    y = n(13245),
    b = n(425493),
    E = n(615287),
    C = n(951483),
    O = n(714338),
    x = n(185666),
    I = n(100527),
    k = n(906732),
    Z = n(146282),
    P = n(600164);
n(70097);
var N = n(605236),
    w = n(594190),
    L = n(567409),
    T = n(74299),
    j = n(989941),
    A = n(377400),
    S = n(329557),
    R = n(199902),
    D = n(314897),
    W = n(592125),
    M = n(430824),
    z = n(355863),
    B = n(131951),
    G = n(944486),
    U = n(618541),
    K = n(449224),
    V = n(574254),
    H = n(556296),
    Y = n(808506),
    F = n(372679),
    X = n(237997),
    q = n(451478),
    Q = n(70956),
    J = n(358085),
    $ = n(998502),
    ee = n(378799),
    et = n(13140),
    en = n(145597),
    ei = n(658785),
    er = n(32300),
    ea = n(681603),
    eo = n(358446),
    es = n(348733),
    el = n(312178),
    ec = n(708383),
    ed = n(923532),
    e_ = n(107200),
    eu = n(983660),
    ef = n(987650),
    ep = n(981631),
    eh = n(206583),
    em = n(388032),
    ev = n(411961);
function eg(e, t, n) {
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
let ey = null;
function eb(e) {
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
                                eg(e, t, n[t]);
                            });
                    }
                    return e;
                })({}, t)
            );
    });
}
J.isPlatformEmbedded;
let eC = (e) => {
        let { keybind: t, onClick: n, isPreviewingInGame: i, locked: a } = e,
            o = a ? m.P3F : 'div';
        return (0, r.jsx)(o, {
            className: s()(ev.overlayBackground, {
                [ev.overlayActive]: !a,
                [ev.overlayLocked]: a,
                [ev.previewMode]: !a && i
            }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: i, button: r } = e;
                r === ep.AeJ.PRIMARY && t === i && n();
            },
            onContextMenu: eE,
            children: a
                ? null
                : (0, r.jsx)('div', {
                      className: ev.closeContainer,
                      children: (0, r.jsx)(b.Z, {
                          variant: b.Z.Variants.BOLD,
                          keybind: t,
                          closeAction: n
                      })
                  })
        });
    },
    eO = (e) => {
        let { keyCode: t, shiftKey: n, metaKey: i, altKey: r, ctrlKey: a } = e;
        return {
            keyCode: t,
            shiftKey: n,
            metaKey: i,
            altKey: r,
            ctrlKey: a
        };
    };
class ex extends a.Component {
    handleLock() {
        (0, m.$sL)() || V.Z.isOpen() || y.Z.setInputLocked(!0, (0, en.getPID)());
    }
    handleDeactivate() {
        y.Z.deactivateAllRegions();
    }
    componentDidMount() {
        y.Z.startSession(), A.Z.initialize(), x.Z.initialize(), S.Z.initialize();
    }
    componentDidUpdate(e) {
        let { initialized: t } = this.props;
        if (t) {
            if (t && !e.initialized) return void this.initialSetup();
            if (!e.locked && this.props.locked) {
                if ((window.addEventListener('contextmenu', eb, !1), null != ey)) {
                    let e = Date.now() - ey;
                    y.Z.track(ep.rMx.OVERLAY_LOCKED, { unlocked_duration: e }), (ey = null);
                }
                O.Z.disable(), (this.activeKeyEventShapes = []), X.default.isPinned(ep.Odu.TEXT) && (O.Z.setLayout(C.Xq), O.Z.enable());
            } else e.locked && !this.props.locked && (window.removeEventListener('contextmenu', eb, !1), null == ey && ((ey = Date.now()), y.Z.track(ep.rMx.OVERLAY_UNLOCKED)), O.Z.disable(), (this.activeKeyEventShapes = []), O.Z.setLayout(C.Sr), O.Z.enable());
            e.keybindKeyCodes !== this.props.keybindKeyCodes && (this.lockEventShape = (0, et.d2)(this.props.keybindKeyCodes)), !e.hasFetchedContentInventory && this.props.hasFetchedContentInventory && y.Z.notifyContentInventoryReady(this.props.contentInventoryEntries);
        }
    }
    initialSetup() {
        let { connectedToVoice: e, locked: t, canGoLive: n, isStreaming: i, voiceGuild: r, voiceChannelId: a, game: o, showKeybindNotification: s, dismissKeybindNotification: l } = this.props;
        y.Z.track(ep.rMx.OVERLAY_INITIALIZED, {
            voice_widget_connected: e,
            text_widget_connected: X.default.isPinned(ep.Odu.TEXT),
            overlay_render_method: E.gl[E.gl.Hook],
            unpinned_widget_types: z.Z.getAllUnpinnedPinnedWidgets(en.OVERLAY_LAYOUT_ID)
        }),
            ei.Z.trackExposure({ location: 'Overlay' });
        let c = n && !i && null != o,
            d = e && null != r && null != a,
            _ = (0, N.un)(h.z.OVERLAY_OOP_WELCOME_SWITCH_FROM_IP_NUX),
            u = this.props.hasOverlayV3UI,
            f = { type: ef.nc.WELCOME };
        if (
            (u
                ? (f = {
                      type: ef.nc.OOP_WELCOME,
                      game: null != o ? o : void 0,
                      isFirstTimeNux: !_
                  })
                : s
                  ? (f = {
                        type: ef.nc.KEYBIND_INDICATORS,
                        markAsDismissed: l
                    })
                  : c && d
                    ? (f = {
                          type: ef.nc.GO_LIVE_VOICE,
                          game: o,
                          voiceChannelId: a,
                          voiceGuild: r
                      })
                    : c &&
                      (f = {
                          type: ef.nc.GO_LIVE_NON_VOICE,
                          game: o
                      }),
            setTimeout(async () => {
                await (0, ee.s5)(), y.Z.overlayMounted(f);
            }, 128),
            window.addEventListener('resize', this.handleWindowResize),
            t && window.addEventListener('contextmenu', eb, !1),
            J.isPlatformEmbedded)
        ) {
            let e = (0, F.M)();
            if (null == e) return;
            if (void 0 !== e.setPerfInfoCallback) {
                var p;
                e.setPerfInfoCallback((e) => {
                    y.Z.track(ep.rMx.OVERLAY_PERF_INFO, e);
                }),
                    null == (p = e.broadcastCommand) ||
                        p.call(e, {
                            message: 'set_perf_report_interval',
                            interval: 15 * Q.Z.Millis.MINUTE
                        });
            }
            $.ZP.on('REQUEST_OPEN_EXTERNAL_URL', (e, t) => {
                X.default.getDisableExternalLinkAlert() || t === U.Z.getLastURL()
                    ? $.ZP.send('OPEN_EXTERNAL_URL', t)
                    : v.Z.show({
                          title: em.NW.string(em.t.WLx4Fx),
                          body: em.NW.string(em.t.H8O1TE),
                          secondaryConfirmText: em.NW.string(em.t.IwqGhY),
                          confirmText: em.NW.string(em.t['3PatS0']),
                          cancelText: em.NW.string(em.t['ETE/oK']),
                          onConfirmSecondary: () => {
                              y.Z.disableExternalLinkAlert(), $.ZP.send('OPEN_EXTERNAL_URL', t);
                          },
                          onConfirm: () => $.ZP.send('OPEN_EXTERNAL_URL', t)
                      });
            });
        }
        window.addEventListener('keydown', this.onKeyDownGlobal, !0), window.addEventListener('keyup', this.onKeyUpGlobal, !0);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowResize), window.removeEventListener('keydown', this.onKeyDownGlobal, !0), window.removeEventListener('keyup', this.onKeyUpGlobal, !0), this.props.locked && window.removeEventListener('contextmenu', eb, !1), A.Z.terminate(), x.Z.terminate(), S.Z.terminate();
    }
    renderInvalidSizeMessage() {
        return (0, r.jsx)(P.Z, {
            justify: P.Z.Justify.CENTER,
            align: P.Z.Align.CENTER,
            className: ev.invalidContainer,
            children: (0, r.jsx)('div', {
                className: ev.inactiveContainer,
                children: em.NW.format(em.t.ketnW1, en.OVERLAY_MIN_RESOLUTION)
            })
        });
    }
    render() {
        let { locked: e, keybind: t, incompatibleApp: n, initialized: a, isPreviewingInGame: o, activeRegions: l, windowSize: c, voiceGuild: d, voiceChannelId: _, hasOverlayV3UI: u } = this.props,
            { width: f, height: p } = c;
        if (0 === f || 0 === p || n || !a) return null;
        let h = e || o,
            m = D.default.getId();
        return (0, r.jsxs)('div', {
            className: ev.overlay,
            children: [
                (0, r.jsx)(ec.Z, {}),
                o &&
                    (0, r.jsx)('header', {
                        className: ev.previewingInGameHeader,
                        children: em.NW.string(em.t.iOq96u)
                    }),
                i,
                (!e || l.has(ep.O0n.TEXT_WIDGET)) &&
                    (0, r.jsx)(eC, {
                        locked: e,
                        keybind: t,
                        onClick: e ? this.handleDeactivate : this.handleLock,
                        isPreviewingInGame: o
                    }),
                (0, en.validResolution)(c)
                    ? (0, r.jsx)(el.Z, {
                          className: s()({
                              [ev.layoutLocked]: e,
                              [ev.layoutUnlocked]: !e
                          })
                      })
                    : e
                      ? null
                      : this.renderInvalidSizeMessage(),
                (0, r.jsx)(e_.Z, {}),
                null != d &&
                    null != _ &&
                    (0, r.jsx)(ed.Z, {
                        streamerId: m,
                        guildId: d.id,
                        channelId: _
                    }),
                u && (0, r.jsx)(eu.Z, { locked: e }),
                (0, r.jsx)(es.Z, {
                    locked: h,
                    keybind: t
                }),
                (0, r.jsx)(ea.Z, {})
            ]
        });
    }
    constructor(e) {
        super(e),
            eg(this, 'handleWindowResize', () => {
                Y.default.isFocusedPidOutOfProcess()
                    ? this.forceUpdate()
                    : _()(() => {
                          this.forceUpdate();
                      }, 500);
            }),
            eg(this, 'activeKeyEventShapes', []),
            eg(this, 'lockEventShape', (0, et.d2)(this.props.keybindKeyCodes)),
            eg(this, 'getActiveKeyEventIndex', (e) => this.activeKeyEventShapes.findIndex((t) => f()(t, e))),
            eg(this, 'onKeyDownGlobal', (e) => {
                let t = eO(e),
                    n = this.getActiveKeyEventIndex(t) > -1,
                    i = [16, 17, 18, 91].includes(e.keyCode);
                n || i || this.activeKeyEventShapes.push(t), this.activeKeyEventShapes.length === this.lockEventShape.length && this.lockEventShape.every((e) => this.activeKeyEventShapes.some((t) => f()(e, t))) && (e.preventDefault(), e.stopPropagation());
                let { locked: r, activeRegions: a } = this.props;
                t.keyCode === c().codes.esc && r && a.has(ep.O0n.TEXT_WIDGET) && y.Z.deactivateAllRegions();
            }),
            eg(this, 'onKeyUpGlobal', (e) => {
                let t = eO(e),
                    n = this.getActiveKeyEventIndex(t);
                n > -1 && this.activeKeyEventShapes.splice(n, 1);
            });
        let t = e.locked && X.default.isPinned(ep.Odu.TEXT);
        O.Z.setLayout(t ? C.Xq : C.Sr), t && O.Z.enable();
    }
}
function eI() {
    let {
            locked: e,
            initialized: t,
            incompatibleApp: n,
            activeRegions: i,
            isPreviewingInGame: a
        } = (0, p.cj)([X.default], () => ({
            locked: X.default.isLocked((0, en.getPID)()),
            initialized: X.default.initialized,
            incompatibleApp: X.default.incompatibleApp,
            activeRegions: X.default.getActiveRegions(),
            isPreviewingInGame: X.default.isPreviewingInGame()
        })),
        o = (0, p.e7)([q.Z], () => q.Z.windowSize()),
        s = (0, p.e7)([H.ZP], () => H.ZP.getOverlayKeybind()),
        l = (0, p.e7)([G.Z], () => G.Z.getVoiceChannelId()),
        c = (0, p.e7)([W.Z], () => W.Z.getChannel(l)),
        d = (0, p.e7)([M.Z], () => (null != c ? M.Z.getGuild(c.guild_id) : null)),
        _ = (0, p.e7)([w.ZP, K.Z], () => (0, j.Z)(w.ZP, K.Z)),
        u = (0, L.Ns)(null == _ ? void 0 : _.id),
        f = (0, p.e7)([Z.Z], () => null != Z.Z.getLastFeedFetchDate(eh.YN.GAME_PROFILE_FEED)),
        h = (0, p.e7)([B.Z], () => (0, T.Z)(B.Z)),
        m = (0, p.e7)([R.Z], () => null != R.Z.getCurrentUserActiveStream()),
        { analyticsLocations: v } = (0, k.ZP)(I.Z.OVERLAY),
        { showKeybindIndicators: g, dismissKeybindNotification: y } = (0, eo.K)(),
        b = (0, er.o4)('ipOverlay').overlayV3UI;
    return (0, r.jsx)(k.Gt, {
        value: v,
        children: (0, r.jsx)(ex, {
            locked: e,
            initialized: t,
            incompatibleApp: n,
            activeRegions: i,
            isPreviewingInGame: a,
            windowSize: o,
            keybind: null != s ? (0, et.BB)(s.shortcut, !0) : '???',
            keybindKeyCodes: null != s ? s.shortcut : [],
            connectedToVoice: null != l,
            voiceChannelId: null != c ? c.id : null,
            voiceGuild: d,
            game: _,
            canGoLive: h,
            isStreaming: m,
            showKeybindNotification: g,
            dismissKeybindNotification: y,
            contentInventoryEntries: u,
            hasFetchedContentInventory: f,
            hasOverlayV3UI: b
        })
    });
}
