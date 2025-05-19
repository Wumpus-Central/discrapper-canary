let i;
n.d(t, { Z: () => ej }), n(539854);
var r = n(255367),
    s = n(73800),
    o = n(120356),
    l = n.n(o),
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
    v = n(239091),
    _ = n(13245),
    O = n(425493),
    b = n(615287),
    x = n(951483),
    E = n(714338),
    S = n(185666),
    C = n(100527),
    j = n(906732),
    Z = n(146282),
    I = n(600164);
n(70097);
var P = n(605236),
    N = n(594190),
    w = n(567409),
    T = n(74299),
    k = n(989941),
    D = n(377400),
    R = n(329557),
    A = n(199902),
    L = n(314897),
    M = n(592125),
    z = n(430824),
    V = n(355863),
    W = n(131951),
    U = n(944486),
    B = n(618541),
    G = n(449224),
    F = n(574254),
    H = n(556296),
    Y = n(808506),
    K = n(372679),
    X = n(237997),
    J = n(451478),
    q = n(70956),
    Q = n(358085),
    $ = n(998502),
    ee = n(378799),
    et = n(13140),
    en = n(145597),
    ei = n(658785),
    er = n(32300),
    es = n(681603),
    eo = n(358446),
    el = n(348733),
    ea = n(312178),
    ec = n(708383),
    ed = n(923532),
    eu = n(107200),
    eh = n(983660),
    ep = n(987650),
    ef = n(757744),
    eg = n(981631),
    em = n(206583),
    ey = n(388032),
    ev = n(551346);
function e_(e, t, n) {
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
function eb(e) {
    e.preventDefault();
}
function ex(e) {
    (0, v.jW)(e, async () => {
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
                                e_(e, t, n[t]);
                            });
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
Q.isPlatformEmbedded;
let eE = (e) => {
        let { keybind: t, onClick: n, isPreviewingInGame: i, locked: s } = e,
            o = s ? m.P3F : 'div';
        return (0, r.jsx)(o, {
            className: l()(ev.overlayBackground, {
                [ev.overlayActive]: !s,
                [ev.overlayLocked]: s,
                [ev.previewMode]: !s && i
            }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: i, button: r } = e;
                r === eg.AeJ.PRIMARY && t === i && n();
            },
            onContextMenu: ex,
            children: s
                ? null
                : (0, r.jsx)('div', {
                      className: ev.closeContainer,
                      children: (0, r.jsx)(O.Z, {
                          variant: O.Z.Variants.BOLD,
                          keybind: t,
                          closeAction: n
                      })
                  })
        });
    },
    eS = (e) => {
        let { keyCode: t, shiftKey: n, metaKey: i, altKey: r, ctrlKey: s } = e;
        return {
            keyCode: t,
            shiftKey: n,
            metaKey: i,
            altKey: r,
            ctrlKey: s
        };
    };
class eC extends s.Component {
    handleLock() {
        (0, m.$sL)() || F.Z.isOpen() || _.Z.setInputLocked(!0, (0, en.getPID)());
    }
    handleDeactivate() {
        _.Z.deactivateAllRegions();
    }
    componentDidMount() {
        _.Z.startSession(), D.Z.initialize(), S.Z.initialize(), R.Z.initialize();
    }
    componentDidUpdate(e) {
        let { initialized: t } = this.props;
        if (t) {
            if (t && !e.initialized) return void this.initialSetup();
            if (!e.locked && this.props.locked) {
                if ((window.addEventListener('contextmenu', eb, !1), null != eO)) {
                    let e = Date.now() - eO;
                    _.Z.track(eg.rMx.OVERLAY_LOCKED, { unlocked_duration: e }), (eO = null);
                }
                E.Z.disable(), (this.activeKeyEventShapes = []), X.default.isPinned(eg.Odu.TEXT) && (E.Z.setLayout(x.Xq), E.Z.enable());
            } else e.locked && !this.props.locked && (window.removeEventListener('contextmenu', eb, !1), null == eO && ((eO = Date.now()), _.Z.track(eg.rMx.OVERLAY_UNLOCKED)), E.Z.disable(), (this.activeKeyEventShapes = []), E.Z.setLayout(x.Sr), E.Z.enable());
            e.keybindKeyCodes !== this.props.keybindKeyCodes && (this.lockEventShape = (0, et.d2)(this.props.keybindKeyCodes)), !e.hasFetchedContentInventory && this.props.hasFetchedContentInventory && _.Z.notifyContentInventoryReady(this.props.contentInventoryEntries);
        }
    }
    initialSetup() {
        let { connectedToVoice: e, locked: t, canGoLive: n, isStreaming: i, voiceGuild: r, voiceChannelId: s, game: o, showKeybindNotification: l, dismissKeybindNotification: a } = this.props;
        _.Z.track(eg.rMx.OVERLAY_INITIALIZED, {
            voice_widget_connected: e,
            text_widget_connected: X.default.isPinned(eg.Odu.TEXT),
            overlay_render_method: b.gl[b.gl.Hook],
            unpinned_widget_types: V.Z.getAllUnpinnedPinnedWidgets(en.OVERLAY_LAYOUT_ID)
        }),
            ei.Z.trackExposure({ location: 'Overlay' });
        let c = n && !i && null != o,
            d = e && null != r && null != s,
            u = (0, P.un)(g.z.OVERLAY_OOP_WELCOME_SWITCH_FROM_IP_NUX),
            h = this.props.hasOverlayV3UI,
            p = { type: ep.nc.WELCOME };
        if (
            (h
                ? (p = {
                      type: ep.nc.OOP_WELCOME,
                      game: null != o ? o : void 0,
                      isFirstTimeNux: !u
                  })
                : l
                  ? (p = {
                        type: ep.nc.KEYBIND_INDICATORS,
                        markAsDismissed: a
                    })
                  : c && d
                    ? (p = {
                          type: ep.nc.GO_LIVE_VOICE,
                          game: o,
                          voiceChannelId: s,
                          voiceGuild: r
                      })
                    : c &&
                      (p = {
                          type: ep.nc.GO_LIVE_NON_VOICE,
                          game: o
                      }),
            setTimeout(async () => {
                await (0, ee.s5)(), _.Z.overlayMounted(p);
            }, 128),
            window.addEventListener('resize', this.handleWindowResize),
            t && window.addEventListener('contextmenu', eb, !1),
            Q.isPlatformEmbedded)
        ) {
            let e = (0, K.M)();
            if (null == e) return;
            if (void 0 !== e.setPerfInfoCallback) {
                var f;
                e.setPerfInfoCallback((e) => {
                    _.Z.track(eg.rMx.OVERLAY_PERF_INFO, e);
                }),
                    null == (f = e.broadcastCommand) ||
                        f.call(e, {
                            message: 'set_perf_report_interval',
                            interval: 15 * q.Z.Millis.MINUTE
                        });
            }
            $.ZP.on('REQUEST_OPEN_EXTERNAL_URL', (e, t) => {
                X.default.getDisableExternalLinkAlert() || t === B.Z.getLastURL()
                    ? $.ZP.send('OPEN_EXTERNAL_URL', t)
                    : y.Z.show({
                          title: ey.intl.string(ey.t.WLx4Fx),
                          body: ey.intl.string(ey.t.H8O1TE),
                          secondaryConfirmText: ey.intl.string(ey.t.IwqGhY),
                          confirmText: ey.intl.string(ey.t['3PatS0']),
                          cancelText: ey.intl.string(ey.t['ETE/oK']),
                          onConfirmSecondary: () => {
                              _.Z.disableExternalLinkAlert(), $.ZP.send('OPEN_EXTERNAL_URL', t);
                          },
                          onConfirm: () => $.ZP.send('OPEN_EXTERNAL_URL', t)
                      });
            });
        }
        window.addEventListener('keydown', this.onKeyDownGlobal, !0), window.addEventListener('keyup', this.onKeyUpGlobal, !0);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowResize), window.removeEventListener('keydown', this.onKeyDownGlobal, !0), window.removeEventListener('keyup', this.onKeyUpGlobal, !0), this.props.locked && window.removeEventListener('contextmenu', eb, !1), D.Z.terminate(), S.Z.terminate(), R.Z.terminate();
    }
    renderInvalidSizeMessage() {
        return (0, r.jsx)(I.Z, {
            justify: I.Z.Justify.CENTER,
            align: I.Z.Align.CENTER,
            className: ev.invalidContainer,
            children: (0, r.jsx)('div', {
                className: ev.inactiveContainer,
                children: ey.intl.format(ey.t.ketnW1, en.OVERLAY_MIN_RESOLUTION)
            })
        });
    }
    render() {
        let { locked: e, keybind: t, incompatibleApp: n, initialized: s, isPreviewingInGame: o, activeRegions: a, windowSize: c, voiceGuild: d, voiceChannelId: u, hasOverlayV3UI: h } = this.props,
            { width: p, height: f } = c;
        if (0 === p || 0 === f || n || !s) return null;
        let g = e || o,
            m = L.default.getId();
        return (0, r.jsxs)('div', {
            className: ev.overlay,
            children: [
                (0, r.jsx)(ec.Z, {}),
                o &&
                    (0, r.jsx)('header', {
                        className: ev.previewingInGameHeader,
                        children: ey.intl.string(ey.t.iOq96u)
                    }),
                i,
                (!e || a.has(eg.O0n.TEXT_WIDGET)) &&
                    (0, r.jsx)(eE, {
                        locked: e,
                        keybind: t,
                        onClick: e ? this.handleDeactivate : this.handleLock,
                        isPreviewingInGame: o
                    }),
                (0, en.validResolution)(c)
                    ? (0, r.jsx)(ea.Z, {
                          className: l()({
                              [ev.layoutLocked]: e,
                              [ev.layoutUnlocked]: !e
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
                (0, r.jsx)(el.Z, {
                    locked: g,
                    keybind: t
                }),
                (0, r.jsx)(es.Z, {})
            ]
        });
    }
    constructor(e) {
        super(e),
            e_(this, 'handleWindowResize', () => {
                Y.default.isFocusedPidOutOfProcess()
                    ? this.forceUpdate()
                    : u()(() => {
                          this.forceUpdate();
                      }, 500);
            }),
            e_(this, 'activeKeyEventShapes', []),
            e_(this, 'lockEventShape', (0, et.d2)(this.props.keybindKeyCodes)),
            e_(this, 'getActiveKeyEventIndex', (e) => this.activeKeyEventShapes.findIndex((t) => p()(t, e))),
            e_(this, 'onKeyDownGlobal', (e) => {
                let t = eS(e),
                    n = this.getActiveKeyEventIndex(t) > -1,
                    i = [16, 17, 18, 91].includes(e.keyCode);
                n || i || this.activeKeyEventShapes.push(t), this.activeKeyEventShapes.length === this.lockEventShape.length && this.lockEventShape.every((e) => this.activeKeyEventShapes.some((t) => p()(e, t))) && (e.preventDefault(), e.stopPropagation());
                let { locked: r, activeRegions: s } = this.props;
                t.keyCode === c().codes.esc && r && s.has(eg.O0n.TEXT_WIDGET) && _.Z.deactivateAllRegions();
            }),
            e_(this, 'onKeyUpGlobal', (e) => {
                let t = eS(e),
                    n = this.getActiveKeyEventIndex(t);
                n > -1 && this.activeKeyEventShapes.splice(n, 1);
            });
        let t = e.locked && X.default.isPinned(eg.Odu.TEXT);
        E.Z.setLayout(t ? x.Xq : x.Sr), t && E.Z.enable();
    }
}
function ej() {
    let {
            locked: e,
            initialized: t,
            incompatibleApp: n,
            activeRegions: i,
            isPreviewingInGame: s
        } = (0, f.cj)([X.default], () => ({
            locked: X.default.isLocked((0, en.getPID)()),
            initialized: X.default.initialized,
            incompatibleApp: X.default.incompatibleApp,
            activeRegions: X.default.getActiveRegions(),
            isPreviewingInGame: X.default.isPreviewingInGame()
        })),
        o = (0, f.e7)([J.Z], () => J.Z.windowSize()),
        l = (0, f.e7)([H.ZP], () => H.ZP.getOverlayKeybind()),
        a = (0, f.e7)([U.Z], () => U.Z.getVoiceChannelId()),
        c = (0, f.e7)([M.Z], () => M.Z.getChannel(a)),
        d = (0, f.e7)([z.Z], () => (null != c ? z.Z.getGuild(c.guild_id) : null)),
        u = (0, f.e7)([N.ZP, G.Z], () => (0, k.Z)(N.ZP, G.Z)),
        h = (0, w.Ns)(null == u ? void 0 : u.id),
        p = (0, f.e7)([Z.Z], () => null != Z.Z.getLastFeedFetchDate(em.YN.GAME_PROFILE_FEED)),
        g = (0, f.e7)([W.Z], () => (0, T.Z)(W.Z)),
        m = (0, f.e7)([A.Z], () => null != A.Z.getCurrentUserActiveStream()),
        { analyticsLocations: y } = (0, j.ZP)(C.Z.OVERLAY),
        { showKeybindIndicators: v, dismissKeybindNotification: _ } = (0, eo.K)(),
        O = (0, er.o4)('ipOverlay').overlayV3UI;
    return (0, r.jsx)(j.Gt, {
        value: y,
        children: (0, r.jsx)(eC, {
            locked: e,
            initialized: t,
            incompatibleApp: n,
            activeRegions: i,
            isPreviewingInGame: s,
            windowSize: o,
            keybind: null != l ? (0, et.BB)(l.shortcut, !0) : '???',
            keybindKeyCodes: null != l ? l.shortcut : [],
            connectedToVoice: null != a,
            voiceChannelId: null != c ? c.id : null,
            voiceGuild: d,
            game: u,
            canGoLive: g,
            isStreaming: m,
            showKeybindNotification: v,
            dismissKeybindNotification: _,
            contentInventoryEntries: h,
            hasFetchedContentInventory: p,
            hasOverlayV3UI: O
        })
    });
}
