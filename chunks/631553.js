let i;
n.d(t, { Z: () => eZ }), n(539854);
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
    Z = n(906732),
    j = n(146282),
    I = n(600164);
n(70097);
var P = n(605236),
    w = n(594190),
    N = n(567409),
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
    Q = n(70956),
    q = n(358085),
    $ = n(998502),
    ee = n(378799),
    et = n(13140),
    en = n(145597),
    ei = n(658785),
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
    em = n(206583),
    ey = n(388032),
    eO = n(411961);
function ev(e, t, n) {
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
let e_ = null;
function eb(e) {
    e.preventDefault();
}
function eE(e) {
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
                                ev(e, t, n[t]);
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
q.isPlatformEmbedded;
let eS = (e) => {
        let { keybind: t, onClick: n, isPreviewingInGame: i, locked: o } = e,
            l = o ? m.P3F : 'div';
        return (0, r.jsx)(l, {
            className: s()(eO.overlayBackground, {
                [eO.overlayActive]: !o,
                [eO.overlayLocked]: o,
                [eO.previewMode]: !o && i
            }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: i, button: r } = e;
                r === eg.AeJ.PRIMARY && t === i && n();
            },
            onContextMenu: eE,
            children: o
                ? null
                : (0, r.jsx)('div', {
                      className: eO.closeContainer,
                      children: (0, r.jsx)(_.Z, {
                          variant: _.Z.Variants.BOLD,
                          keybind: t,
                          closeAction: n
                      })
                  })
        });
    },
    ex = (e) => {
        let { keyCode: t, shiftKey: n, metaKey: i, altKey: r, ctrlKey: o } = e;
        return {
            keyCode: t,
            shiftKey: n,
            metaKey: i,
            altKey: r,
            ctrlKey: o
        };
    };
class eC extends o.Component {
    handleLock() {
        (0, m.$sL)() || F.Z.isOpen() || v.Z.setInputLocked(!0, (0, en.getPID)());
    }
    handleDeactivate() {
        v.Z.deactivateAllRegions();
    }
    componentDidMount() {
        v.Z.startSession(), D.Z.initialize(), x.Z.initialize(), R.Z.initialize();
    }
    componentDidUpdate(e) {
        let { initialized: t } = this.props;
        if (t) {
            if (t && !e.initialized) return void this.initialSetup();
            if (!e.locked && this.props.locked) {
                if ((window.addEventListener('contextmenu', eb, !1), null != e_)) {
                    let e = Date.now() - e_;
                    v.Z.track(eg.rMx.OVERLAY_LOCKED, { unlocked_duration: e }), (e_ = null);
                }
                S.Z.disable(), (this.activeKeyEventShapes = []), X.default.isPinned(eg.Odu.TEXT) && (S.Z.setLayout(E.Xq), S.Z.enable());
            } else e.locked && !this.props.locked && (window.removeEventListener('contextmenu', eb, !1), null == e_ && ((e_ = Date.now()), v.Z.track(eg.rMx.OVERLAY_UNLOCKED)), S.Z.disable(), (this.activeKeyEventShapes = []), S.Z.setLayout(E.Sr), S.Z.enable());
            e.keybindKeyCodes !== this.props.keybindKeyCodes && (this.lockEventShape = (0, et.d2)(this.props.keybindKeyCodes));
        }
    }
    initialSetup() {
        let { connectedToVoice: e, locked: t, canGoLive: n, isStreaming: i, voiceGuild: r, voiceChannelId: o, game: l, showKeybindNotification: s, dismissKeybindNotification: a } = this.props;
        v.Z.track(eg.rMx.OVERLAY_INITIALIZED, {
            voice_widget_connected: e,
            text_widget_connected: X.default.isPinned(eg.Odu.TEXT),
            overlay_render_method: b.gl[b.gl.Hook],
            unpinned_widget_types: V.Z.getAllUnpinnedPinnedWidgets(en.OVERLAY_LAYOUT_ID)
        }),
            ei.Z.trackExposure({ location: 'Overlay' });
        let c = n && !i && null != l,
            d = e && null != r && null != o,
            u = (0, P.un)(g.z.OVERLAY_OOP_WELCOME_SWITCH_FROM_IP_NUX),
            h = this.props.hasOverlayV3UI,
            p = { type: ep.nc.WELCOME };
        if (
            (h
                ? (p = {
                      type: ep.nc.OOP_WELCOME,
                      game: null != l ? l : void 0,
                      isFirstTimeNux: !u
                  })
                : s
                  ? (p = {
                        type: ep.nc.KEYBIND_INDICATORS,
                        markAsDismissed: a
                    })
                  : c && d
                    ? (p = {
                          type: ep.nc.GO_LIVE_VOICE,
                          game: l,
                          voiceChannelId: o,
                          voiceGuild: r
                      })
                    : c &&
                      (p = {
                          type: ep.nc.GO_LIVE_NON_VOICE,
                          game: l
                      }),
            setTimeout(async () => {
                await (0, ee.s5)(), v.Z.overlayMounted(p);
            }, 128),
            window.addEventListener('resize', this.handleWindowResize),
            t && window.addEventListener('contextmenu', eb, !1),
            q.isPlatformEmbedded)
        ) {
            let e = (0, K.M)();
            if (null == e) return;
            if (void 0 !== e.setPerfInfoCallback) {
                var f;
                e.setPerfInfoCallback((e) => {
                    v.Z.track(eg.rMx.OVERLAY_PERF_INFO, e);
                }),
                    null == (f = e.broadcastCommand) ||
                        f.call(e, {
                            message: 'set_perf_report_interval',
                            interval: 15 * Q.Z.Millis.MINUTE
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
                              v.Z.disableExternalLinkAlert(), $.ZP.send('OPEN_EXTERNAL_URL', t);
                          },
                          onConfirm: () => $.ZP.send('OPEN_EXTERNAL_URL', t)
                      });
            });
        }
        window.addEventListener('keydown', this.onKeyDownGlobal, !0), window.addEventListener('keyup', this.onKeyUpGlobal, !0);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowResize), window.removeEventListener('keydown', this.onKeyDownGlobal, !0), window.removeEventListener('keyup', this.onKeyUpGlobal, !0), this.props.locked && window.removeEventListener('contextmenu', eb, !1), D.Z.terminate(), x.Z.terminate(), R.Z.terminate();
    }
    renderInvalidSizeMessage() {
        return (0, r.jsx)(I.Z, {
            justify: I.Z.Justify.CENTER,
            align: I.Z.Align.CENTER,
            className: eO.invalidContainer,
            children: (0, r.jsx)('div', {
                className: eO.inactiveContainer,
                children: ey.intl.format(ey.t.ketnW1, en.OVERLAY_MIN_RESOLUTION)
            })
        });
    }
    render() {
        let { locked: e, keybind: t, incompatibleApp: n, initialized: o, isPreviewingInGame: l, activeRegions: a, windowSize: c, voiceGuild: d, voiceChannelId: u, hasOverlayV3UI: h } = this.props,
            { width: p, height: f } = c;
        if (0 === p || 0 === f || n || !o) return null;
        let g = e || l,
            m = L.default.getId();
        return (0, r.jsxs)('div', {
            className: eO.overlay,
            children: [
                (0, r.jsx)(ec.Z, {}),
                l &&
                    (0, r.jsx)('header', {
                        className: eO.previewingInGameHeader,
                        children: ey.intl.string(ey.t.iOq96u)
                    }),
                i,
                (!e || a.has(eg.O0n.TEXT_WIDGET)) &&
                    (0, r.jsx)(eS, {
                        locked: e,
                        keybind: t,
                        onClick: e ? this.handleDeactivate : this.handleLock,
                        isPreviewingInGame: l
                    }),
                (0, en.validResolution)(c)
                    ? (0, r.jsx)(ea.Z, {
                          className: s()({
                              [eO.layoutLocked]: e,
                              [eO.layoutUnlocked]: !e
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
        super(e),
            ev(this, 'handleWindowResize', () => {
                Y.default.isFocusedPidOutOfProcess()
                    ? this.forceUpdate()
                    : u()(() => {
                          this.forceUpdate();
                      }, 500);
            }),
            ev(this, 'activeKeyEventShapes', []),
            ev(this, 'lockEventShape', (0, et.d2)(this.props.keybindKeyCodes)),
            ev(this, 'getActiveKeyEventIndex', (e) => this.activeKeyEventShapes.findIndex((t) => p()(t, e))),
            ev(this, 'onKeyDownGlobal', (e) => {
                let t = ex(e),
                    n = this.getActiveKeyEventIndex(t) > -1,
                    i = [16, 17, 18, 91].includes(e.keyCode);
                n || i || this.activeKeyEventShapes.push(t), this.activeKeyEventShapes.length === this.lockEventShape.length && this.lockEventShape.every((e) => this.activeKeyEventShapes.some((t) => p()(e, t))) && (e.preventDefault(), e.stopPropagation());
                let { locked: r, activeRegions: o } = this.props;
                t.keyCode === c().codes.esc && r && o.has(eg.O0n.TEXT_WIDGET) && v.Z.deactivateAllRegions();
            }),
            ev(this, 'onKeyUpGlobal', (e) => {
                let t = ex(e),
                    n = this.getActiveKeyEventIndex(t);
                n > -1 && this.activeKeyEventShapes.splice(n, 1);
            });
        let t = e.locked && X.default.isPinned(eg.Odu.TEXT);
        S.Z.setLayout(t ? E.Xq : E.Sr), t && S.Z.enable();
    }
}
function eZ() {
    let {
            locked: e,
            initialized: t,
            incompatibleApp: n,
            activeRegions: i,
            isPreviewingInGame: o
        } = (0, f.cj)([X.default], () => ({
            locked: X.default.isLocked((0, en.getPID)()),
            initialized: X.default.initialized,
            incompatibleApp: X.default.incompatibleApp,
            activeRegions: X.default.getActiveRegions(),
            isPreviewingInGame: X.default.isPreviewingInGame()
        })),
        l = (0, f.e7)([J.Z], () => J.Z.windowSize()),
        s = (0, f.e7)([H.ZP], () => H.ZP.getOverlayKeybind()),
        a = (0, f.e7)([U.Z], () => U.Z.getVoiceChannelId()),
        c = (0, f.e7)([M.Z], () => M.Z.getChannel(a)),
        d = (0, f.e7)([z.Z], () => (null != c ? z.Z.getGuild(c.guild_id) : null)),
        u = (0, f.e7)([w.ZP, G.Z], () => (0, k.Z)(w.ZP, G.Z)),
        h = (0, N.Ns)(null == u ? void 0 : u.id),
        p = (0, f.e7)([j.Z], () => null != j.Z.getLastFeedFetchDate(em.YN.GAME_PROFILE_FEED)),
        g = (0, f.e7)([W.Z], () => (0, T.Z)(W.Z)),
        m = (0, f.e7)([A.Z], () => null != A.Z.getCurrentUserActiveStream()),
        { analyticsLocations: y } = (0, Z.ZP)(C.Z.OVERLAY),
        { showKeybindIndicators: O, dismissKeybindNotification: v } = (0, el.K)(),
        _ = (0, er.o4)('ipOverlay').overlayV3UI;
    return (0, r.jsx)(Z.Gt, {
        value: y,
        children: (0, r.jsx)(eC, {
            locked: e,
            initialized: t,
            incompatibleApp: n,
            activeRegions: i,
            isPreviewingInGame: o,
            windowSize: l,
            keybind: null != s ? (0, et.BB)(s.shortcut, !0) : '???',
            keybindKeyCodes: null != s ? s.shortcut : [],
            connectedToVoice: null != a,
            voiceChannelId: null != c ? c.id : null,
            voiceGuild: d,
            game: u,
            canGoLive: g,
            isStreaming: m,
            showKeybindNotification: O,
            dismissKeybindNotification: v,
            contentInventoryEntries: h,
            hasFetchedContentInventory: p,
            hasOverlayV3UI: _
        })
    });
}
