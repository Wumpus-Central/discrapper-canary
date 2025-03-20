let i;
n.d(t, { Z: () => eP }), n(653041);
var r = n(200651),
    o = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(921738),
    c = n.n(a),
    d = n(954955),
    u = n.n(d),
    h = n(498607),
    p = n.n(h),
    f = n(442837),
    v = n(704215),
    m = n(481060),
    y = n(668781),
    O = n(239091),
    E = n(13245),
    g = n(425493),
    _ = n(615287),
    Z = n(951483),
    b = n(714338),
    P = n(185666),
    x = n(100527),
    C = n(906732),
    N = n(146282),
    I = n(600164);
n(70097);
var k = n(605236),
    j = n(594190),
    w = n(567409),
    L = n(74299),
    A = n(989941),
    T = n(377400),
    R = n(329557),
    D = n(199902),
    S = n(314897),
    W = n(592125),
    M = n(430824),
    U = n(355863),
    K = n(131951),
    G = n(944486),
    V = n(618541),
    Y = n(449224),
    z = n(574254),
    H = n(556296),
    F = n(808506),
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
    el = n(348733),
    es = n(312178),
    ea = n(708383),
    ec = n(923532),
    ed = n(107200),
    eu = n(983660),
    eh = n(987650),
    ep = n(981631),
    ef = n(206583),
    ev = n(388032),
    em = n(702116);
function ey(e, t, n) {
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
let eO = null;
function eE(e) {
    e.preventDefault();
}
function eg(e) {
    (0, O.jW)(e, async () => {
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
                                ey(e, t, n[t]);
                            });
                    }
                    return e;
                })({}, t)
            );
    });
}
J.isPlatformEmbedded;
let e_ = (e) => {
        let { keybind: t, onClick: n, isPreviewingInGame: i, locked: o } = e,
            l = o ? m.P3F : 'div';
        return (0, r.jsx)(l, {
            className: s()(em.overlayBackground, {
                [em.overlayActive]: !o,
                [em.overlayLocked]: o,
                [em.previewMode]: !o && i
            }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: i, button: r } = e;
                r === ep.AeJ.PRIMARY && t === i && n();
            },
            onContextMenu: eg,
            children: o
                ? null
                : (0, r.jsx)('div', {
                      className: em.closeContainer,
                      children: (0, r.jsx)(g.Z, {
                          variant: g.Z.Variants.BOLD,
                          keybind: t,
                          closeAction: n
                      })
                  })
        });
    },
    eZ = (e) => {
        let { keyCode: t, shiftKey: n, metaKey: i, altKey: r, ctrlKey: o } = e;
        return {
            keyCode: t,
            shiftKey: n,
            metaKey: i,
            altKey: r,
            ctrlKey: o
        };
    };
class eb extends o.Component {
    handleLock() {
        (0, m.$sL)() || z.Z.isOpen() || E.Z.setInputLocked(!0, (0, et.getPID)());
    }
    handleDeactivate() {
        E.Z.deactivateAllRegions();
    }
    componentDidMount() {
        E.Z.startSession(), T.Z.initialize(), P.Z.initialize(), R.Z.initialize();
    }
    componentDidUpdate(e) {
        let { initialized: t } = this.props;
        if (t) {
            if (t && !e.initialized) {
                this.initialSetup();
                return;
            }
            if (!e.locked && this.props.locked) {
                if ((window.addEventListener('contextmenu', eE, !1), null != eO)) {
                    let e = Date.now() - eO;
                    E.Z.track(ep.rMx.OVERLAY_LOCKED, { unlocked_duration: e }), (eO = null);
                }
                b.Z.disable(), (this.activeKeyEventShapes = []), X.default.isPinned(ep.Odu.TEXT) && (b.Z.setLayout(Z.Xq), b.Z.enable());
            } else e.locked && !this.props.locked && (window.removeEventListener('contextmenu', eE, !1), null == eO && ((eO = Date.now()), E.Z.track(ep.rMx.OVERLAY_UNLOCKED)), b.Z.disable(), (this.activeKeyEventShapes = []), b.Z.setLayout(Z.Sr), b.Z.enable());
            e.keybindKeyCodes !== this.props.keybindKeyCodes && (this.lockEventShape = (0, ee.d2)(this.props.keybindKeyCodes)), !e.hasFetchedContentInventory && this.props.hasFetchedContentInventory && E.Z.notifyContentInventoryReady(this.props.contentInventoryEntries);
        }
    }
    initialSetup() {
        let { connectedToVoice: e, locked: t, canGoLive: n, isStreaming: i, voiceGuild: r, voiceChannelId: o, game: l, showKeybindNotification: s, dismissKeybindNotification: a } = this.props;
        E.Z.track(ep.rMx.OVERLAY_INITIALIZED, {
            voice_widget_connected: e,
            text_widget_connected: X.default.isPinned(ep.Odu.TEXT),
            overlay_render_method: _.gl[_.gl.Hook],
            unpinned_widget_types: U.Z.getAllUnpinnedPinnedWidgets(et.OVERLAY_LAYOUT_ID)
        }),
            en.Z.trackExposure({ location: 'Overlay' });
        let c = n && !i && null != l,
            d = e && null != r && null != o,
            u = (0, k.un)(v.z.OVERLAY_OOP_WELCOME_SWITCH_FROM_IP_NUX),
            h = this.props.hasOverlayV3UI,
            p = { type: eh.nc.WELCOME };
        if (
            (h
                ? (p = {
                      type: eh.nc.OOP_WELCOME,
                      game: null != l ? l : void 0,
                      isFirstTimeNux: !u
                  })
                : s
                  ? (p = {
                        type: eh.nc.KEYBIND_INDICATORS,
                        markAsDismissed: a
                    })
                  : c && d
                    ? (p = {
                          type: eh.nc.GO_LIVE_VOICE,
                          game: l,
                          voiceChannelId: o,
                          voiceGuild: r
                      })
                    : c &&
                      (p = {
                          type: eh.nc.GO_LIVE_NON_VOICE,
                          game: l
                      }),
            E.Z.overlayMounted(p),
            window.addEventListener('resize', this.handleWindowResize),
            t && window.addEventListener('contextmenu', eE, !1),
            J.isPlatformEmbedded)
        ) {
            let e = (0, B.M)();
            if (null == e) return;
            if (void 0 !== e.setPerfInfoCallback) {
                var f;
                e.setPerfInfoCallback((e) => {
                    E.Z.track(ep.rMx.OVERLAY_PERF_INFO, e);
                }),
                    null === (f = e.broadcastCommand) ||
                        void 0 === f ||
                        f.call(e, {
                            message: 'set_perf_report_interval',
                            interval: 15 * Q.Z.Millis.MINUTE
                        });
            }
            $.ZP.on('REQUEST_OPEN_EXTERNAL_URL', (e, t) => {
                X.default.getDisableExternalLinkAlert() || t === V.Z.getLastURL()
                    ? $.ZP.send('OPEN_EXTERNAL_URL', t)
                    : y.Z.show({
                          title: ev.NW.string(ev.t.WLx4Fx),
                          body: ev.NW.string(ev.t.H8O1TE),
                          secondaryConfirmText: ev.NW.string(ev.t.IwqGhY),
                          confirmText: ev.NW.string(ev.t['3PatS0']),
                          cancelText: ev.NW.string(ev.t['ETE/oK']),
                          onConfirmSecondary: () => {
                              E.Z.disableExternalLinkAlert(), $.ZP.send('OPEN_EXTERNAL_URL', t);
                          },
                          onConfirm: () => $.ZP.send('OPEN_EXTERNAL_URL', t)
                      });
            });
        }
        window.addEventListener('keydown', this.onKeyDownGlobal, !0), window.addEventListener('keyup', this.onKeyUpGlobal, !0);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowResize), window.removeEventListener('keydown', this.onKeyDownGlobal, !0), window.removeEventListener('keyup', this.onKeyUpGlobal, !0), this.props.locked && window.removeEventListener('contextmenu', eE, !1), T.Z.terminate(), P.Z.terminate(), R.Z.terminate();
    }
    renderInvalidSizeMessage() {
        return (0, r.jsx)(I.Z, {
            justify: I.Z.Justify.CENTER,
            align: I.Z.Align.CENTER,
            className: em.invalidContainer,
            children: (0, r.jsx)('div', {
                className: em.inactiveContainer,
                children: ev.NW.format(ev.t.ketnW1, et.OVERLAY_MIN_RESOLUTION)
            })
        });
    }
    render() {
        let { locked: e, keybind: t, incompatibleApp: n, initialized: o, isPreviewingInGame: l, activeRegions: a, windowSize: c, voiceGuild: d, voiceChannelId: u, hasOverlayV3UI: h } = this.props,
            { width: p, height: f } = c;
        if (0 === p || 0 === f || n || !o) return null;
        let v = e || l,
            m = S.default.getId();
        return (0, r.jsxs)('div', {
            className: em.overlay,
            children: [
                (0, r.jsx)(ea.Z, {}),
                l &&
                    (0, r.jsx)('header', {
                        className: em.previewingInGameHeader,
                        children: ev.NW.string(ev.t.iOq96u)
                    }),
                i,
                (!e || a.has(ep.O0n.TEXT_WIDGET)) &&
                    (0, r.jsx)(e_, {
                        locked: e,
                        keybind: t,
                        onClick: e ? this.handleDeactivate : this.handleLock,
                        isPreviewingInGame: l
                    }),
                (0, et.validResolution)(c)
                    ? (0, r.jsx)(es.Z, {
                          className: s()({
                              [em.layoutLocked]: e,
                              [em.layoutUnlocked]: !e
                          })
                      })
                    : e
                      ? null
                      : this.renderInvalidSizeMessage(),
                (0, r.jsx)(ed.Z, {}),
                null != d &&
                    null != u &&
                    (0, r.jsx)(ec.Z, {
                        streamerId: m,
                        guildId: d.id,
                        channelId: u
                    }),
                h && (0, r.jsx)(eu.Z, { locked: e }),
                (0, r.jsx)(el.Z, {
                    locked: v,
                    keybind: t
                }),
                (0, r.jsx)(er.Z, {})
            ]
        });
    }
    constructor(e) {
        super(e),
            ey(this, 'handleWindowResize', () => {
                F.default.isFocusedPidOutOfProcess()
                    ? this.forceUpdate()
                    : u()(() => {
                          this.forceUpdate();
                      }, 500);
            }),
            ey(this, 'activeKeyEventShapes', []),
            ey(this, 'lockEventShape', (0, ee.d2)(this.props.keybindKeyCodes)),
            ey(this, 'getActiveKeyEventIndex', (e) => this.activeKeyEventShapes.findIndex((t) => p()(t, e))),
            ey(this, 'onKeyDownGlobal', (e) => {
                let t = eZ(e),
                    n = this.getActiveKeyEventIndex(t) > -1,
                    i = [16, 17, 18, 91].includes(e.keyCode);
                n || i || this.activeKeyEventShapes.push(t), this.activeKeyEventShapes.length === this.lockEventShape.length && this.lockEventShape.every((e) => this.activeKeyEventShapes.some((t) => p()(e, t))) && (e.preventDefault(), e.stopPropagation());
                let { locked: r, activeRegions: o } = this.props;
                t.keyCode === c().codes.esc && r && o.has(ep.O0n.TEXT_WIDGET) && E.Z.deactivateAllRegions();
            }),
            ey(this, 'onKeyUpGlobal', (e) => {
                let t = eZ(e),
                    n = this.getActiveKeyEventIndex(t);
                n > -1 && this.activeKeyEventShapes.splice(n, 1);
            });
        let t = e.locked && X.default.isPinned(ep.Odu.TEXT);
        b.Z.setLayout(t ? Z.Xq : Z.Sr), t && b.Z.enable();
    }
}
function eP() {
    let {
            locked: e,
            initialized: t,
            incompatibleApp: n,
            activeRegions: i,
            isPreviewingInGame: o
        } = (0, f.cj)([X.default], () => ({
            locked: X.default.isLocked((0, et.getPID)()),
            initialized: X.default.initialized,
            incompatibleApp: X.default.incompatibleApp,
            activeRegions: X.default.getActiveRegions(),
            isPreviewingInGame: X.default.isPreviewingInGame()
        })),
        l = (0, f.e7)([q.Z], () => q.Z.windowSize()),
        s = (0, f.e7)([H.ZP], () => H.ZP.getOverlayKeybind()),
        a = (0, f.e7)([G.Z], () => G.Z.getVoiceChannelId()),
        c = (0, f.e7)([W.Z], () => W.Z.getChannel(a)),
        d = (0, f.e7)([M.Z], () => (null != c ? M.Z.getGuild(c.guild_id) : null)),
        u = (0, f.e7)([j.ZP, Y.Z], () => (0, A.Z)(j.ZP, Y.Z)),
        h = (0, w.Ns)(null == u ? void 0 : u.id),
        p = (0, f.e7)([N.Z], () => null != N.Z.getLastFeedFetchDate(ef.YN.GAME_PROFILE_FEED)),
        v = (0, f.e7)([K.Z], () => (0, L.Z)(K.Z)),
        m = (0, f.e7)([D.Z], () => null != D.Z.getCurrentUserActiveStream()),
        { analyticsLocations: y } = (0, C.ZP)(x.Z.OVERLAY),
        { showKeybindIndicators: O, dismissKeybindNotification: E } = (0, eo.K)(),
        g = (0, ei.o4)('ipOverlay').overlayV3UI;
    return (0, r.jsx)(C.Gt, {
        value: y,
        children: (0, r.jsx)(eb, {
            locked: e,
            initialized: t,
            incompatibleApp: n,
            activeRegions: i,
            isPreviewingInGame: o,
            windowSize: l,
            keybind: null != s ? (0, ee.BB)(s.shortcut, !0) : '???',
            keybindKeyCodes: null != s ? s.shortcut : [],
            connectedToVoice: null != a,
            voiceChannelId: null != c ? c.id : null,
            voiceGuild: d,
            game: u,
            canGoLive: v,
            isStreaming: m,
            showKeybindNotification: O,
            dismissKeybindNotification: E,
            contentInventoryEntries: h,
            hasFetchedContentInventory: p,
            hasOverlayV3UI: g
        })
    });
}
