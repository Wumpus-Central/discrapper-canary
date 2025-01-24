let i;
n.d(t, {
    Z: function () {
        return eb;
    }
}),
    n(653041);
var o = n(200651),
    r = n(192379),
    a = n(120356),
    l = n.n(a),
    s = n(921738),
    d = n.n(s),
    c = n(954955),
    u = n.n(c),
    p = n(498607),
    h = n.n(p),
    _ = n(442837),
    v = n(481060),
    m = n(668781),
    f = n(239091),
    y = n(13245),
    E = n(425493),
    b = n(615287),
    Z = n(951483),
    g = n(714338),
    k = n(185666),
    C = n(100527),
    x = n(906732),
    I = n(146282),
    w = n(600164);
n(70097);
var L = n(594190),
    S = n(567409),
    A = n(74299),
    P = n(989941),
    O = n(377400),
    T = n(329557),
    N = n(93127),
    D = n(199902),
    R = n(314897),
    M = n(592125),
    j = n(480294),
    G = n(430824),
    U = n(131951),
    K = n(944486),
    V = n(618541),
    Y = n(449224),
    F = n(574254),
    W = n(556296),
    z = n(808506),
    B = n(237997),
    H = n(451478),
    Q = n(70956),
    q = n(358085),
    X = n(998502),
    J = n(13140),
    $ = n(145597),
    ee = n(658785),
    et = n(681603),
    en = n(358446),
    ei = n(348733),
    eo = n(312178),
    er = n(708383),
    ea = n(923532),
    el = n(107200),
    es = n(987650),
    ed = n(981631),
    ec = n(206583),
    eu = n(388032),
    ep = n(746120);
function eh(e, t, n) {
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
(_.ZP.PersistedStore.disableWrites = __OVERLAY__), _.ZP.initialize();
let e_ = null;
function ev(e) {
    e.preventDefault();
}
function em(e) {
    (0, f.jW)(e, async () => {
        let { default: e } = await n.e('92780').then(n.bind(n, 930381));
        return (t) => (0, o.jsx)(e, { ...t });
    });
}
q.isPlatformEmbedded;
let ef = (e) => {
        let { keybind: t, onClick: n, isPreviewingInGame: i, locked: r } = e,
            a = r ? v.Clickable : 'div';
        return (0, o.jsx)(a, {
            className: l()(ep.overlayBackground, {
                [ep.overlayActive]: !r,
                [ep.overlayLocked]: r,
                [ep.previewMode]: !r && i
            }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: i, button: o } = e;
                o === ed.AeJ.PRIMARY && t === i && n();
            },
            onContextMenu: em,
            children: r
                ? null
                : (0, o.jsx)('div', {
                      className: ep.closeContainer,
                      children: (0, o.jsx)(E.Z, {
                          variant: E.Z.Variants.BOLD,
                          keybind: t,
                          closeAction: n
                      })
                  })
        });
    },
    ey = (e) => {
        let { keyCode: t, shiftKey: n, metaKey: i, altKey: o, ctrlKey: r } = e;
        return {
            keyCode: t,
            shiftKey: n,
            metaKey: i,
            altKey: o,
            ctrlKey: r
        };
    };
class eE extends r.Component {
    handleLock() {
        !(0, v.hasAnyModalOpen)() && !F.Z.isOpen() && y.Z.setInputLocked(!0, (0, $.QF)());
    }
    handleDeactivate() {
        y.Z.deactivateAllRegions();
    }
    componentDidMount() {
        y.Z.startSession(), O.Z.initialize(), k.Z.initialize(), T.Z.initialize();
    }
    componentDidUpdate(e) {
        let { initialized: t } = this.props;
        if (!!t) {
            if (t && !e.initialized) {
                this.initialSetup();
                return;
            }
            if (!e.locked && this.props.locked) {
                if ((window.addEventListener('contextmenu', ev, !1), null != e_)) {
                    let e = Date.now() - e_;
                    y.Z.track(ed.rMx.OVERLAY_LOCKED, { unlocked_duration: e }), (e_ = null);
                }
                g.Z.disable(), (this.activeKeyEventShapes = []), B.Z.isPinned(ed.Odu.TEXT) && (g.Z.setLayout(Z.Xq), g.Z.enable());
            } else e.locked && !this.props.locked && (window.removeEventListener('contextmenu', ev, !1), null == e_ && ((e_ = Date.now()), y.Z.track(ed.rMx.OVERLAY_UNLOCKED)), g.Z.disable(), (this.activeKeyEventShapes = []), g.Z.setLayout(Z.Sr), g.Z.enable());
            e.keybindKeyCodes !== this.props.keybindKeyCodes && (this.lockEventShape = (0, J.d2)(this.props.keybindKeyCodes)), !e.hasFetchedContentInventory && this.props.hasFetchedContentInventory && y.Z.notifyContentInventoryReady(this.props.contentInventoryEntries);
        }
    }
    initialSetup() {
        let { connectedToVoice: e, locked: t, canGoLive: n, isStreaming: i, voiceGuild: o, voiceChannelId: r, game: a, showKeybindNotification: l, dismissKeybindNotification: s } = this.props;
        y.Z.track(ed.rMx.OVERLAY_INITIALIZED, {
            voice_widget_connected: e,
            text_widget_connected: B.Z.isPinned(ed.Odu.TEXT),
            overlay_render_method: b.gl[b.gl.Hook]
        }),
            ee.Z.trackExposure({ location: 'Overlay' });
        let d = n && !i && null != a,
            c = e && null != o && null != r,
            u = { type: es.nc.WELCOME };
        if (
            (l
                ? (u = {
                      type: es.nc.KEYBIND_INDICATORS,
                      markAsDismissed: s
                  })
                : d && c
                  ? (u = {
                        type: es.nc.GO_LIVE_VOICE,
                        game: a,
                        voiceChannelId: r,
                        voiceGuild: o
                    })
                  : d &&
                    (u = {
                        type: es.nc.GO_LIVE_NON_VOICE,
                        game: a
                    }),
            y.Z.overlayMounted(u),
            window.addEventListener('resize', this.handleWindowResize),
            t && window.addEventListener('contextmenu', ev, !1),
            q.isPlatformEmbedded)
        ) {
            let e = X.ZP.requireModule('discord_overlay2');
            void 0 !== e.setPerfInfoCallback &&
                (e.setPerfInfoCallback((e) => {
                    y.Z.track(ed.rMx.OVERLAY_PERF_INFO, e);
                }),
                e.broadcastCommand({
                    message: 'set_perf_report_interval',
                    interval: 15 * Q.Z.Millis.MINUTE
                })),
                X.ZP.on('REQUEST_OPEN_EXTERNAL_URL', (e, t) => {
                    B.Z.getDisableExternalLinkAlert() || t === V.Z.getLastURL()
                        ? X.ZP.send('OPEN_EXTERNAL_URL', t)
                        : m.Z.show({
                              title: eu.intl.string(eu.t.WLx4Fx),
                              body: eu.intl.string(eu.t.H8O1TE),
                              secondaryConfirmText: eu.intl.string(eu.t.IwqGhY),
                              confirmText: eu.intl.string(eu.t['3PatS0']),
                              cancelText: eu.intl.string(eu.t['ETE/oK']),
                              onConfirmSecondary: () => {
                                  y.Z.disableExternalLinkAlert(), X.ZP.send('OPEN_EXTERNAL_URL', t);
                              },
                              onConfirm: () => X.ZP.send('OPEN_EXTERNAL_URL', t)
                          });
                });
        }
        window.addEventListener('keydown', this.onKeyDownGlobal, !0), window.addEventListener('keyup', this.onKeyUpGlobal, !0);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowResize), window.removeEventListener('keydown', this.onKeyDownGlobal, !0), window.removeEventListener('keyup', this.onKeyUpGlobal, !0), this.props.locked && window.removeEventListener('contextmenu', ev, !1), O.Z.terminate(), k.Z.terminate(), T.Z.terminate();
    }
    renderInvalidSizeMessage() {
        return (0, o.jsx)(w.Z, {
            justify: w.Z.Justify.CENTER,
            align: w.Z.Align.CENTER,
            className: ep.invalidContainer,
            children: (0, o.jsx)('div', {
                className: ep.inactiveContainer,
                children: eu.intl.format(eu.t.ketnW1, $.FW)
            })
        });
    }
    render() {
        let { locked: e, keybind: t, incompatibleApp: n, initialized: r, isPreviewingInGame: a, activeRegions: s, windowSize: d, voiceGuild: c, voiceChannelId: u } = this.props,
            { width: p, height: h } = d;
        if (0 === p || 0 === h || n || !r) return null;
        let _ = e || a,
            v = R.default.getId();
        return (0, o.jsxs)('div', {
            className: ep.overlay,
            children: [
                (0, o.jsx)(er.Z, {}),
                a &&
                    (0, o.jsx)('header', {
                        className: ep.previewingInGameHeader,
                        children: eu.intl.string(eu.t.iOq96u)
                    }),
                i,
                (!e || s.has(ed.O0n.TEXT_WIDGET)) &&
                    (0, o.jsx)(ef, {
                        locked: e,
                        keybind: t,
                        onClick: e ? this.handleDeactivate : this.handleLock,
                        isPreviewingInGame: a
                    }),
                (0, $.Te)(d)
                    ? (0, o.jsx)(eo.Z, {
                          className: l()({
                              [ep.layoutLocked]: e,
                              [ep.layoutUnlocked]: !e
                          })
                      })
                    : e
                      ? null
                      : this.renderInvalidSizeMessage(),
                (0, o.jsx)(el.Z, {}),
                null != c &&
                    null != u &&
                    (0, o.jsx)(ea.Z, {
                        streamerId: v,
                        guildId: c.id,
                        channelId: u
                    }),
                (0, o.jsx)(ei.Z, {
                    locked: _,
                    keybind: t
                }),
                (0, o.jsx)(et.Z, {})
            ]
        });
    }
    constructor(e) {
        super(e),
            eh(this, 'handleWindowResize', () => {
                z.Z.isFocusedPidOutOfProcess()
                    ? this.forceUpdate()
                    : u()(() => {
                          this.forceUpdate();
                      }, 500);
            }),
            eh(this, 'activeKeyEventShapes', []),
            eh(this, 'lockEventShape', (0, J.d2)(this.props.keybindKeyCodes)),
            eh(this, 'getActiveKeyEventIndex', (e) => this.activeKeyEventShapes.findIndex((t) => h()(t, e))),
            eh(this, 'onKeyDownGlobal', (e) => {
                let t = ey(e),
                    n = this.getActiveKeyEventIndex(t) > -1,
                    i = [16, 17, 18, 91].includes(e.keyCode);
                !n && !i && this.activeKeyEventShapes.push(t), this.activeKeyEventShapes.length === this.lockEventShape.length && this.lockEventShape.every((e) => this.activeKeyEventShapes.some((t) => h()(e, t))) && (e.preventDefault(), e.stopPropagation());
                let { locked: o, activeRegions: r } = this.props;
                t.keyCode === d().codes.esc && o && r.has(ed.O0n.TEXT_WIDGET) && y.Z.deactivateAllRegions();
            }),
            eh(this, 'onKeyUpGlobal', (e) => {
                let t = ey(e),
                    n = this.getActiveKeyEventIndex(t);
                n > -1 && this.activeKeyEventShapes.splice(n, 1);
            });
        let t = e.locked && B.Z.isPinned(ed.Odu.TEXT);
        g.Z.setLayout(t ? Z.Xq : Z.Sr), t && g.Z.enable();
    }
}
function eb() {
    let {
            locked: e,
            initialized: t,
            incompatibleApp: n,
            activeRegions: i,
            isPreviewingInGame: a
        } = (0, _.cj)([B.Z], () => ({
            locked: B.Z.isLocked((0, $.QF)()),
            initialized: B.Z.initialized,
            incompatibleApp: B.Z.incompatibleApp,
            activeRegions: B.Z.getActiveRegions(),
            isPreviewingInGame: B.Z.isPreviewingInGame()
        })),
        l = (0, _.e7)([H.Z], () => H.Z.windowSize()),
        s = (0, _.e7)([W.Z], () => W.Z.getOverlayKeybind()),
        d = (0, _.e7)([K.Z], () => K.Z.getVoiceChannelId()),
        c = (0, _.e7)([M.Z], () => M.Z.getChannel(d)),
        u = (0, _.e7)([G.Z], () => (null != c ? G.Z.getGuild(c.guild_id) : null)),
        p = (0, _.e7)([L.ZP, Y.Z], () => (0, P.Z)(L.ZP, Y.Z)),
        h = (0, S.Ns)(null == p ? void 0 : p.id),
        m = (0, _.e7)([I.Z], () => null != I.Z.getLastFeedFetchDate(ec.YN.GAME_PROFILE_FEED)),
        f = (0, _.e7)([U.Z], () => (0, A.Z)(U.Z)),
        y = (0, _.e7)([D.Z], () => null != D.Z.getCurrentUserActiveStream()),
        { analyticsLocations: E } = (0, x.ZP)(C.Z.OVERLAY),
        { showKeybindIndicators: b, dismissKeybindNotification: Z } = (0, en.K)(),
        g = (0, _.e7)([j.Z], () => j.Z.fetchedConsents);
    return (
        r.useEffect(() => {
            g && (0, N._)();
        }, [g]),
        (0, o.jsx)(x.Gt, {
            value: E,
            children: (0, o.jsx)(v.RedesignIconContextProvider, {
                children: (0, o.jsx)(eE, {
                    locked: e,
                    initialized: t,
                    incompatibleApp: n,
                    activeRegions: i,
                    isPreviewingInGame: a,
                    windowSize: l,
                    keybind: null != s ? (0, J.BB)(s.shortcut, !0) : '???',
                    keybindKeyCodes: null != s ? s.shortcut : [],
                    connectedToVoice: null != d,
                    voiceChannelId: null != c ? c.id : null,
                    voiceGuild: u,
                    game: p,
                    canGoLive: f,
                    isStreaming: y,
                    showKeybindNotification: b,
                    dismissKeybindNotification: Z,
                    contentInventoryEntries: h,
                    hasFetchedContentInventory: m
                })
            })
        })
    );
}
