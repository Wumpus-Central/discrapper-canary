let i;
n.d(t, { Z: () => ek }), n(653041);
var r = n(200651),
    a = n(192379),
    o = n(120356),
    s = n.n(o),
    d = n(921738),
    l = n.n(d),
    c = n(954955),
    u = n.n(c),
    _ = n(498607),
    f = n.n(_),
    p = n(442837),
    h = n(704215),
    v = n(481060),
    m = n(668781),
    x = n(239091),
    g = n(13245),
    E = n(425493),
    C = n(615287),
    b = n(951483),
    Z = n(714338),
    y = n(185666),
    I = n(100527),
    k = n(906732),
    O = n(146282),
    L = n(600164);
n(70097);
var A = n(605236),
    T = n(594190),
    N = n(567409),
    w = n(74299),
    S = n(989941),
    P = n(377400),
    R = n(329557),
    j = n(93127),
    D = n(199902),
    z = n(314897),
    W = n(592125),
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
    ea = n(32300),
    eo = n(681603),
    es = n(358446),
    ed = n(348733),
    el = n(312178),
    ec = n(708383),
    eu = n(923532),
    e_ = n(107200),
    ef = n(983660),
    ep = n(987650),
    eh = n(981631),
    ev = n(206583),
    em = n(388032),
    ex = n(622330);
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
let eE = null;
function eC(e) {
    e.preventDefault();
}
function eb(e) {
    (0, x.jW)(e, async () => {
        let { default: e } = await n.e('92780').then(n.bind(n, 930381));
        return (t) => (0, r.jsx)(e, { ...t });
    });
}
ee.isPlatformEmbedded;
let eZ = (e) => {
        let { keybind: t, onClick: n, isPreviewingInGame: i, locked: a } = e,
            o = a ? v.P3F : 'div';
        return (0, r.jsx)(o, {
            className: s()(ex.overlayBackground, {
                [ex.overlayActive]: !a,
                [ex.overlayLocked]: a,
                [ex.previewMode]: !a && i
            }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: i, button: r } = e;
                r === eh.AeJ.PRIMARY && t === i && n();
            },
            onContextMenu: eb,
            children: a
                ? null
                : (0, r.jsx)('div', {
                      className: ex.closeContainer,
                      children: (0, r.jsx)(E.Z, {
                          variant: E.Z.Variants.BOLD,
                          keybind: t,
                          closeAction: n
                      })
                  })
        });
    },
    ey = (e) => {
        let { keyCode: t, shiftKey: n, metaKey: i, altKey: r, ctrlKey: a } = e;
        return {
            keyCode: t,
            shiftKey: n,
            metaKey: i,
            altKey: r,
            ctrlKey: a
        };
    };
class eI extends a.Component {
    handleLock() {
        (0, v.$sL)() || Y.Z.isOpen() || g.Z.setInputLocked(!0, (0, ei.QF)());
    }
    handleDeactivate() {
        g.Z.deactivateAllRegions();
    }
    componentDidMount() {
        g.Z.startSession(), P.Z.initialize(), y.Z.initialize(), R.Z.initialize();
    }
    componentDidUpdate(e) {
        let { initialized: t } = this.props;
        if (t) {
            if (t && !e.initialized) {
                this.initialSetup();
                return;
            }
            if (!e.locked && this.props.locked) {
                if ((window.addEventListener('contextmenu', eC, !1), null != eE)) {
                    let e = Date.now() - eE;
                    g.Z.track(eh.rMx.OVERLAY_LOCKED, { unlocked_duration: e }), (eE = null);
                }
                Z.Z.disable(), (this.activeKeyEventShapes = []), Q.Z.isPinned(eh.Odu.TEXT) && (Z.Z.setLayout(b.Xq), Z.Z.enable());
            } else e.locked && !this.props.locked && (window.removeEventListener('contextmenu', eC, !1), null == eE && ((eE = Date.now()), g.Z.track(eh.rMx.OVERLAY_UNLOCKED)), Z.Z.disable(), (this.activeKeyEventShapes = []), Z.Z.setLayout(b.Sr), Z.Z.enable());
            e.keybindKeyCodes !== this.props.keybindKeyCodes && (this.lockEventShape = (0, en.d2)(this.props.keybindKeyCodes)), !e.hasFetchedContentInventory && this.props.hasFetchedContentInventory && g.Z.notifyContentInventoryReady(this.props.contentInventoryEntries);
        }
    }
    initialSetup() {
        let { connectedToVoice: e, locked: t, canGoLive: n, isStreaming: i, voiceGuild: r, voiceChannelId: a, game: o, showKeybindNotification: s, dismissKeybindNotification: d } = this.props;
        g.Z.track(eh.rMx.OVERLAY_INITIALIZED, {
            voice_widget_connected: e,
            text_widget_connected: Q.Z.isPinned(eh.Odu.TEXT),
            overlay_render_method: C.gl[C.gl.Hook],
            unpinned_widget_types: G.Z.getAllUnpinnedPinnedWidgets(ei.qU)
        }),
            er.Z.trackExposure({ location: 'Overlay' });
        let l = n && !i && null != o,
            c = e && null != r && null != a,
            u = (0, A.un)(h.z.OVERLAY_OOP_WELCOME_SWITCH_FROM_IP_NUX),
            _ = this.props.hasOverlayV3UI,
            f = { type: ep.nc.WELCOME };
        if (
            (_
                ? (f = {
                      type: ep.nc.OOP_WELCOME,
                      game: null != o ? o : void 0,
                      isFirstTimeNux: !u
                  })
                : s
                  ? (f = {
                        type: ep.nc.KEYBIND_INDICATORS,
                        markAsDismissed: d
                    })
                  : l && c
                    ? (f = {
                          type: ep.nc.GO_LIVE_VOICE,
                          game: o,
                          voiceChannelId: a,
                          voiceGuild: r
                      })
                    : l &&
                      (f = {
                          type: ep.nc.GO_LIVE_NON_VOICE,
                          game: o
                      }),
            g.Z.overlayMounted(f),
            window.addEventListener('resize', this.handleWindowResize),
            t && window.addEventListener('contextmenu', eC, !1),
            ee.isPlatformEmbedded)
        ) {
            let e = (0, q.M)();
            if (null == e) return;
            if (void 0 !== e.setPerfInfoCallback) {
                var p;
                e.setPerfInfoCallback((e) => {
                    g.Z.track(eh.rMx.OVERLAY_PERF_INFO, e);
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
                          title: em.intl.string(em.t.WLx4Fx),
                          body: em.intl.string(em.t.H8O1TE),
                          secondaryConfirmText: em.intl.string(em.t.IwqGhY),
                          confirmText: em.intl.string(em.t['3PatS0']),
                          cancelText: em.intl.string(em.t['ETE/oK']),
                          onConfirmSecondary: () => {
                              g.Z.disableExternalLinkAlert(), et.ZP.send('OPEN_EXTERNAL_URL', t);
                          },
                          onConfirm: () => et.ZP.send('OPEN_EXTERNAL_URL', t)
                      });
            });
        }
        window.addEventListener('keydown', this.onKeyDownGlobal, !0), window.addEventListener('keyup', this.onKeyUpGlobal, !0);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowResize), window.removeEventListener('keydown', this.onKeyDownGlobal, !0), window.removeEventListener('keyup', this.onKeyUpGlobal, !0), this.props.locked && window.removeEventListener('contextmenu', eC, !1), P.Z.terminate(), y.Z.terminate(), R.Z.terminate();
    }
    renderInvalidSizeMessage() {
        return (0, r.jsx)(L.Z, {
            justify: L.Z.Justify.CENTER,
            align: L.Z.Align.CENTER,
            className: ex.invalidContainer,
            children: (0, r.jsx)('div', {
                className: ex.inactiveContainer,
                children: em.intl.format(em.t.ketnW1, ei.FW)
            })
        });
    }
    render() {
        let { locked: e, keybind: t, incompatibleApp: n, initialized: a, isPreviewingInGame: o, activeRegions: d, windowSize: l, voiceGuild: c, voiceChannelId: u, hasOverlayV3UI: _ } = this.props,
            { width: f, height: p } = l;
        if (0 === f || 0 === p || n || !a) return null;
        let h = e || o,
            v = z.default.getId();
        return (0, r.jsxs)('div', {
            className: ex.overlay,
            children: [
                (0, r.jsx)(ec.Z, {}),
                o &&
                    (0, r.jsx)('header', {
                        className: ex.previewingInGameHeader,
                        children: em.intl.string(em.t.iOq96u)
                    }),
                i,
                (!e || d.has(eh.O0n.TEXT_WIDGET)) &&
                    (0, r.jsx)(eZ, {
                        locked: e,
                        keybind: t,
                        onClick: e ? this.handleDeactivate : this.handleLock,
                        isPreviewingInGame: o
                    }),
                (0, ei.Te)(l)
                    ? (0, r.jsx)(el.Z, {
                          className: s()({
                              [ex.layoutLocked]: e,
                              [ex.layoutUnlocked]: !e
                          })
                      })
                    : e
                      ? null
                      : this.renderInvalidSizeMessage(),
                (0, r.jsx)(e_.Z, {}),
                null != c &&
                    null != u &&
                    (0, r.jsx)(eu.Z, {
                        streamerId: v,
                        guildId: c.id,
                        channelId: u
                    }),
                _ && (0, r.jsx)(ef.Z, { locked: e }),
                (0, r.jsx)(ed.Z, {
                    locked: h,
                    keybind: t
                }),
                (0, r.jsx)(eo.Z, {})
            ]
        });
    }
    constructor(e) {
        super(e),
            eg(this, 'handleWindowResize', () => {
                X.Z.isFocusedPidOutOfProcess()
                    ? this.forceUpdate()
                    : u()(() => {
                          this.forceUpdate();
                      }, 500);
            }),
            eg(this, 'activeKeyEventShapes', []),
            eg(this, 'lockEventShape', (0, en.d2)(this.props.keybindKeyCodes)),
            eg(this, 'getActiveKeyEventIndex', (e) => this.activeKeyEventShapes.findIndex((t) => f()(t, e))),
            eg(this, 'onKeyDownGlobal', (e) => {
                let t = ey(e),
                    n = this.getActiveKeyEventIndex(t) > -1,
                    i = [16, 17, 18, 91].includes(e.keyCode);
                n || i || this.activeKeyEventShapes.push(t), this.activeKeyEventShapes.length === this.lockEventShape.length && this.lockEventShape.every((e) => this.activeKeyEventShapes.some((t) => f()(e, t))) && (e.preventDefault(), e.stopPropagation());
                let { locked: r, activeRegions: a } = this.props;
                t.keyCode === l().codes.esc && r && a.has(eh.O0n.TEXT_WIDGET) && g.Z.deactivateAllRegions();
            }),
            eg(this, 'onKeyUpGlobal', (e) => {
                let t = ey(e),
                    n = this.getActiveKeyEventIndex(t);
                n > -1 && this.activeKeyEventShapes.splice(n, 1);
            });
        let t = e.locked && Q.Z.isPinned(eh.Odu.TEXT);
        Z.Z.setLayout(t ? b.Xq : b.Sr), t && Z.Z.enable();
    }
}
function ek() {
    let {
            locked: e,
            initialized: t,
            incompatibleApp: n,
            activeRegions: i,
            isPreviewingInGame: o
        } = (0, p.cj)([Q.Z], () => ({
            locked: Q.Z.isLocked((0, ei.QF)()),
            initialized: Q.Z.initialized,
            incompatibleApp: Q.Z.incompatibleApp,
            activeRegions: Q.Z.getActiveRegions(),
            isPreviewingInGame: Q.Z.isPreviewingInGame()
        })),
        s = (0, p.e7)([J.Z], () => J.Z.windowSize()),
        d = (0, p.e7)([F.ZP], () => F.ZP.getOverlayKeybind()),
        l = (0, p.e7)([K.Z], () => K.Z.getVoiceChannelId()),
        c = (0, p.e7)([W.Z], () => W.Z.getChannel(l)),
        u = (0, p.e7)([U.Z], () => (null != c ? U.Z.getGuild(c.guild_id) : null)),
        _ = (0, p.e7)([T.ZP, H.Z], () => (0, S.Z)(T.ZP, H.Z)),
        f = (0, N.Ns)(null == _ ? void 0 : _.id),
        h = (0, p.e7)([O.Z], () => null != O.Z.getLastFeedFetchDate(ev.YN.GAME_PROFILE_FEED)),
        m = (0, p.e7)([B.Z], () => (0, w.Z)(B.Z)),
        x = (0, p.e7)([D.Z], () => null != D.Z.getCurrentUserActiveStream()),
        { analyticsLocations: g } = (0, k.ZP)(I.Z.OVERLAY),
        { showKeybindIndicators: E, dismissKeybindNotification: C } = (0, es.K)(),
        b = (0, p.e7)([M.Z], () => M.Z.fetchedConsents);
    a.useEffect(() => {
        b && (0, j._)();
    }, [b]);
    let Z = (0, ea.o4)('ipOverlay').overlayV3UI;
    return (0, r.jsx)(k.Gt, {
        value: g,
        children: (0, r.jsx)(v.vWI, {
            children: (0, r.jsx)(eI, {
                locked: e,
                initialized: t,
                incompatibleApp: n,
                activeRegions: i,
                isPreviewingInGame: o,
                windowSize: s,
                keybind: null != d ? (0, en.BB)(d.shortcut, !0) : '???',
                keybindKeyCodes: null != d ? d.shortcut : [],
                connectedToVoice: null != l,
                voiceChannelId: null != c ? c.id : null,
                voiceGuild: u,
                game: _,
                canGoLive: m,
                isStreaming: x,
                showKeybindNotification: E,
                dismissKeybindNotification: C,
                contentInventoryEntries: f,
                hasFetchedContentInventory: h,
                hasOverlayV3UI: Z
            })
        })
    });
}
