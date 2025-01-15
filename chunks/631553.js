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
    c = n(921738),
    s = n.n(c),
    d = n(954955),
    u = n.n(d),
    p = n(498607),
    h = n.n(p),
    _ = n(442837),
    v = n(481060),
    f = n(668781),
    m = n(239091),
    b = n(13245),
    y = n(425493),
    E = n(615287),
    Z = n(951483),
    g = n(714338),
    k = n(185666),
    C = n(100527),
    x = n(906732),
    w = n(146282),
    I = n(600164);
n(70097);
var L = n(594190),
    S = n(567409),
    A = n(74299),
    P = n(989941),
    O = n(377400),
    T = n(329557),
    N = n(199902),
    D = n(314897),
    R = n(592125),
    M = n(430824),
    j = n(131951),
    G = n(944486),
    U = n(618541),
    K = n(449224),
    V = n(574254),
    Y = n(556296),
    F = n(808506),
    z = n(237997),
    B = n(451478),
    W = n(70956),
    H = n(358085),
    Q = n(998502),
    q = n(13140),
    X = n(145597),
    J = n(658785),
    $ = n(681603),
    ee = n(358446),
    et = n(348733),
    en = n(312178),
    ei = n(708383),
    eo = n(923532),
    er = n(107200),
    ea = n(987650),
    el = n(981631),
    ec = n(206583),
    es = n(388032),
    ed = n(550841);
function eu(e, t, n) {
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
let ep = null;
function eh(e) {
    e.preventDefault();
}
function e_(e) {
    (0, m.jW)(e, async () => {
        let { default: e } = await n.e('92780').then(n.bind(n, 930381));
        return (t) => (0, o.jsx)(e, { ...t });
    });
}
H.isPlatformEmbedded;
let ev = (e) => {
        let { keybind: t, onClick: n, isPreviewingInGame: i, locked: r } = e,
            a = r ? v.Clickable : 'div';
        return (0, o.jsx)(a, {
            className: l()(ed.overlayBackground, {
                [ed.overlayActive]: !r,
                [ed.overlayLocked]: r,
                [ed.previewMode]: !r && i
            }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: i, button: o } = e;
                o === el.AeJ.PRIMARY && t === i && n();
            },
            onContextMenu: e_,
            children: r
                ? null
                : (0, o.jsx)('div', {
                      className: ed.closeContainer,
                      children: (0, o.jsx)(y.Z, {
                          variant: y.Z.Variants.BOLD,
                          keybind: t,
                          closeAction: n
                      })
                  })
        });
    },
    ef = (e) => {
        let { keyCode: t, shiftKey: n, metaKey: i, altKey: o, ctrlKey: r } = e;
        return {
            keyCode: t,
            shiftKey: n,
            metaKey: i,
            altKey: o,
            ctrlKey: r
        };
    };
class em extends r.Component {
    handleLock() {
        !(0, v.hasAnyModalOpen)() && !V.Z.isOpen() && b.Z.setInputLocked(!0, (0, X.QF)());
    }
    handleDeactivate() {
        b.Z.deactivateAllRegions();
    }
    componentDidMount() {
        b.Z.startSession(), O.Z.initialize(), k.Z.initialize(), T.Z.initialize();
    }
    componentDidUpdate(e) {
        let { initialized: t } = this.props;
        if (!!t) {
            if (t && !e.initialized) {
                this.initialSetup();
                return;
            }
            if (!e.locked && this.props.locked) {
                if ((window.addEventListener('contextmenu', eh, !1), null != ep)) {
                    let e = Date.now() - ep;
                    b.Z.track(el.rMx.OVERLAY_LOCKED, { unlocked_duration: e }), (ep = null);
                }
                g.Z.disable(), (this.activeKeyEventShapes = []), z.Z.isPinned(el.Odu.TEXT) && (g.Z.setLayout(Z.Xq), g.Z.enable());
            } else e.locked && !this.props.locked && (window.removeEventListener('contextmenu', eh, !1), null == ep && ((ep = Date.now()), b.Z.track(el.rMx.OVERLAY_UNLOCKED)), g.Z.disable(), (this.activeKeyEventShapes = []), g.Z.setLayout(Z.Sr), g.Z.enable());
            e.keybindKeyCodes !== this.props.keybindKeyCodes && (this.lockEventShape = (0, q.d2)(this.props.keybindKeyCodes)), !e.hasFetchedContentInventory && this.props.hasFetchedContentInventory && b.Z.notifyContentInventoryReady(this.props.contentInventoryEntries);
        }
    }
    initialSetup() {
        let { connectedToVoice: e, locked: t, canGoLive: n, isStreaming: i, voiceGuild: o, voiceChannelId: r, game: a, showKeybindNotification: l, dismissKeybindNotification: c } = this.props;
        b.Z.track(el.rMx.OVERLAY_INITIALIZED, {
            voice_widget_connected: e,
            text_widget_connected: z.Z.isPinned(el.Odu.TEXT),
            overlay_render_method: E.gl[E.gl.Hook]
        }),
            J.Z.trackExposure({ location: 'Overlay' });
        let s = n && !i && null != a,
            d = e && null != o && null != r,
            u = { type: ea.nc.WELCOME };
        if (
            (l
                ? (u = {
                      type: ea.nc.KEYBIND_INDICATORS,
                      markAsDismissed: c
                  })
                : s && d
                  ? (u = {
                        type: ea.nc.GO_LIVE_VOICE,
                        game: a,
                        voiceChannelId: r,
                        voiceGuild: o
                    })
                  : s &&
                    (u = {
                        type: ea.nc.GO_LIVE_NON_VOICE,
                        game: a
                    }),
            b.Z.overlayMounted(u),
            window.addEventListener('resize', this.handleWindowResize),
            t && window.addEventListener('contextmenu', eh, !1),
            H.isPlatformEmbedded)
        ) {
            let e = Q.ZP.requireModule('discord_overlay2');
            void 0 !== e.setPerfInfoCallback &&
                (e.setPerfInfoCallback((e) => {
                    b.Z.track(el.rMx.OVERLAY_PERF_INFO, e);
                }),
                e.broadcastCommand({
                    message: 'set_perf_report_interval',
                    interval: 15 * W.Z.Millis.MINUTE
                })),
                Q.ZP.on('REQUEST_OPEN_EXTERNAL_URL', (e, t) => {
                    z.Z.getDisableExternalLinkAlert() || t === U.Z.getLastURL()
                        ? Q.ZP.send('OPEN_EXTERNAL_URL', t)
                        : f.Z.show({
                              title: es.intl.string(es.t.WLx4Fx),
                              body: es.intl.string(es.t.H8O1TE),
                              secondaryConfirmText: es.intl.string(es.t.IwqGhY),
                              confirmText: es.intl.string(es.t['3PatS0']),
                              cancelText: es.intl.string(es.t['ETE/oK']),
                              onConfirmSecondary: () => {
                                  b.Z.disableExternalLinkAlert(), Q.ZP.send('OPEN_EXTERNAL_URL', t);
                              },
                              onConfirm: () => Q.ZP.send('OPEN_EXTERNAL_URL', t)
                          });
                });
        }
        window.addEventListener('keydown', this.onKeyDownGlobal, !0), window.addEventListener('keyup', this.onKeyUpGlobal, !0);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowResize), window.removeEventListener('keydown', this.onKeyDownGlobal, !0), window.removeEventListener('keyup', this.onKeyUpGlobal, !0), this.props.locked && window.removeEventListener('contextmenu', eh, !1), O.Z.terminate(), k.Z.terminate(), T.Z.terminate();
    }
    renderInvalidSizeMessage() {
        return (0, o.jsx)(I.Z, {
            justify: I.Z.Justify.CENTER,
            align: I.Z.Align.CENTER,
            className: ed.invalidContainer,
            children: (0, o.jsx)('div', {
                className: ed.inactiveContainer,
                children: es.intl.format(es.t.ketnW1, X.FW)
            })
        });
    }
    render() {
        let { locked: e, keybind: t, incompatibleApp: n, initialized: r, isPreviewingInGame: a, activeRegions: c, windowSize: s, voiceGuild: d, voiceChannelId: u } = this.props,
            { width: p, height: h } = s;
        if (0 === p || 0 === h || n || !r) return null;
        let _ = e || a,
            v = D.default.getId();
        return (0, o.jsxs)('div', {
            className: ed.overlay,
            children: [
                (0, o.jsx)(ei.Z, {}),
                a &&
                    (0, o.jsx)('header', {
                        className: ed.previewingInGameHeader,
                        children: es.intl.string(es.t.iOq96u)
                    }),
                i,
                (!e || c.has(el.O0n.TEXT_WIDGET)) &&
                    (0, o.jsx)(ev, {
                        locked: e,
                        keybind: t,
                        onClick: e ? this.handleDeactivate : this.handleLock,
                        isPreviewingInGame: a
                    }),
                (0, X.Te)(s)
                    ? (0, o.jsx)(en.Z, {
                          className: l()({
                              [ed.layoutLocked]: e,
                              [ed.layoutUnlocked]: !e
                          })
                      })
                    : e
                      ? null
                      : this.renderInvalidSizeMessage(),
                (0, o.jsx)(er.Z, {}),
                null != d &&
                    null != u &&
                    (0, o.jsx)(eo.Z, {
                        streamerId: v,
                        guildId: d.id,
                        channelId: u
                    }),
                (0, o.jsx)(et.Z, {
                    locked: _,
                    keybind: t
                }),
                (0, o.jsx)($.Z, {})
            ]
        });
    }
    constructor(e) {
        super(e),
            eu(this, 'handleWindowResize', () => {
                F.Z.isFocusedPidOutOfProcess()
                    ? this.forceUpdate()
                    : u()(() => {
                          this.forceUpdate();
                      }, 500);
            }),
            eu(this, 'activeKeyEventShapes', []),
            eu(this, 'lockEventShape', (0, q.d2)(this.props.keybindKeyCodes)),
            eu(this, 'getActiveKeyEventIndex', (e) => this.activeKeyEventShapes.findIndex((t) => h()(t, e))),
            eu(this, 'onKeyDownGlobal', (e) => {
                let t = ef(e),
                    n = this.getActiveKeyEventIndex(t) > -1,
                    i = [16, 17, 18, 91].includes(e.keyCode);
                !n && !i && this.activeKeyEventShapes.push(t), this.activeKeyEventShapes.length === this.lockEventShape.length && this.lockEventShape.every((e) => this.activeKeyEventShapes.some((t) => h()(e, t))) && (e.preventDefault(), e.stopPropagation());
                let { locked: o, activeRegions: r } = this.props;
                t.keyCode === s().codes.esc && o && r.has(el.O0n.TEXT_WIDGET) && b.Z.deactivateAllRegions();
            }),
            eu(this, 'onKeyUpGlobal', (e) => {
                let t = ef(e),
                    n = this.getActiveKeyEventIndex(t);
                n > -1 && this.activeKeyEventShapes.splice(n, 1);
            });
        let t = e.locked && z.Z.isPinned(el.Odu.TEXT);
        g.Z.setLayout(t ? Z.Xq : Z.Sr), t && g.Z.enable();
    }
}
function eb() {
    let {
            locked: e,
            initialized: t,
            incompatibleApp: n,
            activeRegions: i,
            isPreviewingInGame: r
        } = (0, _.cj)([z.Z], () => ({
            locked: z.Z.isLocked((0, X.QF)()),
            initialized: z.Z.initialized,
            incompatibleApp: z.Z.incompatibleApp,
            activeRegions: z.Z.getActiveRegions(),
            isPreviewingInGame: z.Z.isPreviewingInGame()
        })),
        a = (0, _.e7)([B.Z], () => B.Z.windowSize()),
        l = (0, _.e7)([Y.Z], () => Y.Z.getOverlayKeybind()),
        c = (0, _.e7)([G.Z], () => G.Z.getVoiceChannelId()),
        s = (0, _.e7)([R.Z], () => R.Z.getChannel(c)),
        d = (0, _.e7)([M.Z], () => (null != s ? M.Z.getGuild(s.guild_id) : null)),
        u = (0, _.e7)([L.ZP, K.Z], () => (0, P.Z)(L.ZP, K.Z)),
        p = (0, S.Ns)(null == u ? void 0 : u.id),
        h = (0, _.e7)([w.Z], () => null != w.Z.getLastFeedFetchDate(ec.YN.GAME_PROFILE_FEED)),
        f = (0, _.e7)([j.Z], () => (0, A.Z)(j.Z)),
        m = (0, _.e7)([N.Z], () => null != N.Z.getCurrentUserActiveStream()),
        { analyticsLocations: b } = (0, x.ZP)(C.Z.OVERLAY),
        { showKeybindIndicators: y, dismissKeybindNotification: E } = (0, ee.K)();
    return (0, o.jsx)(x.Gt, {
        value: b,
        children: (0, o.jsx)(v.RedesignIconContextProvider, {
            children: (0, o.jsx)(em, {
                locked: e,
                initialized: t,
                incompatibleApp: n,
                activeRegions: i,
                isPreviewingInGame: r,
                windowSize: a,
                keybind: null != l ? (0, q.BB)(l.shortcut, !0) : '???',
                keybindKeyCodes: null != l ? l.shortcut : [],
                connectedToVoice: null != c,
                voiceChannelId: null != s ? s.id : null,
                voiceGuild: d,
                game: u,
                canGoLive: f,
                isStreaming: m,
                showKeybindNotification: y,
                dismissKeybindNotification: E,
                contentInventoryEntries: p,
                hasFetchedContentInventory: h
            })
        })
    });
}
