let i;
n.d(t, { Z: () => eb }), n(653041);
var r = n(200651),
    a = n(192379),
    o = n(120356),
    s = n.n(o),
    d = n(921738),
    c = n.n(d),
    l = n(954955),
    u = n.n(l),
    _ = n(498607),
    f = n.n(_),
    p = n(442837),
    h = n(481060),
    v = n(668781),
    g = n(239091),
    m = n(13245),
    E = n(425493),
    x = n(615287),
    Z = n(951483),
    b = n(714338),
    y = n(185666),
    C = n(100527),
    I = n(906732),
    k = n(146282),
    A = n(600164);
n(70097);
var L = n(594190),
    w = n(567409),
    T = n(74299),
    N = n(989941),
    O = n(377400),
    S = n(329557),
    P = n(93127),
    R = n(199902),
    D = n(314897),
    j = n(592125),
    z = n(480294),
    G = n(430824),
    W = n(355863),
    M = n(131951),
    U = n(944486),
    B = n(618541),
    K = n(449224),
    H = n(574254),
    Y = n(556296),
    F = n(808506),
    V = n(372679),
    X = n(237997),
    q = n(451478),
    Q = n(70956),
    J = n(358085),
    $ = n(998502),
    ee = n(13140),
    et = n(145597),
    en = n(658785),
    ei = n(681603),
    er = n(358446),
    ea = n(348733),
    eo = n(312178),
    es = n(708383),
    ed = n(923532),
    ec = n(107200),
    el = n(987650),
    eu = n(981631),
    e_ = n(206583),
    ef = n(388032),
    ep = n(622330);
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
(p.ZP.PersistedStore.disableWrites = __OVERLAY__), p.ZP.initialize();
let ev = null;
function eg(e) {
    e.preventDefault();
}
function em(e) {
    (0, g.jW)(e, async () => {
        let { default: e } = await n.e('92780').then(n.bind(n, 930381));
        return (t) => (0, r.jsx)(e, { ...t });
    });
}
J.isPlatformEmbedded;
let eE = (e) => {
        let { keybind: t, onClick: n, isPreviewingInGame: i, locked: a } = e,
            o = a ? h.P3F : 'div';
        return (0, r.jsx)(o, {
            className: s()(ep.overlayBackground, {
                [ep.overlayActive]: !a,
                [ep.overlayLocked]: a,
                [ep.previewMode]: !a && i
            }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: i, button: r } = e;
                r === eu.AeJ.PRIMARY && t === i && n();
            },
            onContextMenu: em,
            children: a
                ? null
                : (0, r.jsx)('div', {
                      className: ep.closeContainer,
                      children: (0, r.jsx)(E.Z, {
                          variant: E.Z.Variants.BOLD,
                          keybind: t,
                          closeAction: n
                      })
                  })
        });
    },
    ex = (e) => {
        let { keyCode: t, shiftKey: n, metaKey: i, altKey: r, ctrlKey: a } = e;
        return {
            keyCode: t,
            shiftKey: n,
            metaKey: i,
            altKey: r,
            ctrlKey: a
        };
    };
class eZ extends a.Component {
    handleLock() {
        (0, h.$sL)() || H.Z.isOpen() || m.Z.setInputLocked(!0, (0, et.QF)());
    }
    handleDeactivate() {
        m.Z.deactivateAllRegions();
    }
    componentDidMount() {
        m.Z.startSession(), O.Z.initialize(), y.Z.initialize(), S.Z.initialize();
    }
    componentDidUpdate(e) {
        let { initialized: t } = this.props;
        if (t) {
            if (t && !e.initialized) {
                this.initialSetup();
                return;
            }
            if (!e.locked && this.props.locked) {
                if ((window.addEventListener('contextmenu', eg, !1), null != ev)) {
                    let e = Date.now() - ev;
                    m.Z.track(eu.rMx.OVERLAY_LOCKED, { unlocked_duration: e }), (ev = null);
                }
                b.Z.disable(), (this.activeKeyEventShapes = []), X.Z.isPinned(eu.Odu.TEXT) && (b.Z.setLayout(Z.Xq), b.Z.enable());
            } else e.locked && !this.props.locked && (window.removeEventListener('contextmenu', eg, !1), null == ev && ((ev = Date.now()), m.Z.track(eu.rMx.OVERLAY_UNLOCKED)), b.Z.disable(), (this.activeKeyEventShapes = []), b.Z.setLayout(Z.Sr), b.Z.enable());
            e.keybindKeyCodes !== this.props.keybindKeyCodes && (this.lockEventShape = (0, ee.d2)(this.props.keybindKeyCodes)), !e.hasFetchedContentInventory && this.props.hasFetchedContentInventory && m.Z.notifyContentInventoryReady(this.props.contentInventoryEntries);
        }
    }
    initialSetup() {
        let { connectedToVoice: e, locked: t, canGoLive: n, isStreaming: i, voiceGuild: r, voiceChannelId: a, game: o, showKeybindNotification: s, dismissKeybindNotification: d } = this.props;
        m.Z.track(eu.rMx.OVERLAY_INITIALIZED, {
            voice_widget_connected: e,
            text_widget_connected: X.Z.isPinned(eu.Odu.TEXT),
            overlay_render_method: x.gl[x.gl.Hook],
            unpinned_widget_types: W.Z.getAllUnpinnedPinnedWidgets(et.qU)
        }),
            en.Z.trackExposure({ location: 'Overlay' });
        let c = n && !i && null != o,
            l = e && null != r && null != a,
            u = { type: el.nc.WELCOME };
        if (
            (s
                ? (u = {
                      type: el.nc.KEYBIND_INDICATORS,
                      markAsDismissed: d
                  })
                : c && l
                  ? (u = {
                        type: el.nc.GO_LIVE_VOICE,
                        game: o,
                        voiceChannelId: a,
                        voiceGuild: r
                    })
                  : c &&
                    (u = {
                        type: el.nc.GO_LIVE_NON_VOICE,
                        game: o
                    }),
            m.Z.overlayMounted(u),
            window.addEventListener('resize', this.handleWindowResize),
            t && window.addEventListener('contextmenu', eg, !1),
            J.isPlatformEmbedded)
        ) {
            let e = (0, V.M)();
            if (null == e) return;
            if (void 0 !== e.setPerfInfoCallback) {
                var _;
                e.setPerfInfoCallback((e) => {
                    m.Z.track(eu.rMx.OVERLAY_PERF_INFO, e);
                }),
                    null === (_ = e.broadcastCommand) ||
                        void 0 === _ ||
                        _.call(e, {
                            message: 'set_perf_report_interval',
                            interval: 15 * Q.Z.Millis.MINUTE
                        });
            }
            $.ZP.on('REQUEST_OPEN_EXTERNAL_URL', (e, t) => {
                X.Z.getDisableExternalLinkAlert() || t === B.Z.getLastURL()
                    ? $.ZP.send('OPEN_EXTERNAL_URL', t)
                    : v.Z.show({
                          title: ef.intl.string(ef.t.WLx4Fx),
                          body: ef.intl.string(ef.t.H8O1TE),
                          secondaryConfirmText: ef.intl.string(ef.t.IwqGhY),
                          confirmText: ef.intl.string(ef.t['3PatS0']),
                          cancelText: ef.intl.string(ef.t['ETE/oK']),
                          onConfirmSecondary: () => {
                              m.Z.disableExternalLinkAlert(), $.ZP.send('OPEN_EXTERNAL_URL', t);
                          },
                          onConfirm: () => $.ZP.send('OPEN_EXTERNAL_URL', t)
                      });
            });
        }
        window.addEventListener('keydown', this.onKeyDownGlobal, !0), window.addEventListener('keyup', this.onKeyUpGlobal, !0);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowResize), window.removeEventListener('keydown', this.onKeyDownGlobal, !0), window.removeEventListener('keyup', this.onKeyUpGlobal, !0), this.props.locked && window.removeEventListener('contextmenu', eg, !1), O.Z.terminate(), y.Z.terminate(), S.Z.terminate();
    }
    renderInvalidSizeMessage() {
        return (0, r.jsx)(A.Z, {
            justify: A.Z.Justify.CENTER,
            align: A.Z.Align.CENTER,
            className: ep.invalidContainer,
            children: (0, r.jsx)('div', {
                className: ep.inactiveContainer,
                children: ef.intl.format(ef.t.ketnW1, et.FW)
            })
        });
    }
    render() {
        let { locked: e, keybind: t, incompatibleApp: n, initialized: a, isPreviewingInGame: o, activeRegions: d, windowSize: c, voiceGuild: l, voiceChannelId: u } = this.props,
            { width: _, height: f } = c;
        if (0 === _ || 0 === f || n || !a) return null;
        let p = e || o,
            h = D.default.getId();
        return (0, r.jsxs)('div', {
            className: ep.overlay,
            children: [
                (0, r.jsx)(es.Z, {}),
                o &&
                    (0, r.jsx)('header', {
                        className: ep.previewingInGameHeader,
                        children: ef.intl.string(ef.t.iOq96u)
                    }),
                i,
                (!e || d.has(eu.O0n.TEXT_WIDGET)) &&
                    (0, r.jsx)(eE, {
                        locked: e,
                        keybind: t,
                        onClick: e ? this.handleDeactivate : this.handleLock,
                        isPreviewingInGame: o
                    }),
                (0, et.Te)(c)
                    ? (0, r.jsx)(eo.Z, {
                          className: s()({
                              [ep.layoutLocked]: e,
                              [ep.layoutUnlocked]: !e
                          })
                      })
                    : e
                      ? null
                      : this.renderInvalidSizeMessage(),
                (0, r.jsx)(ec.Z, {}),
                null != l &&
                    null != u &&
                    (0, r.jsx)(ed.Z, {
                        streamerId: h,
                        guildId: l.id,
                        channelId: u
                    }),
                (0, r.jsx)(ea.Z, {
                    locked: p,
                    keybind: t
                }),
                (0, r.jsx)(ei.Z, {})
            ]
        });
    }
    constructor(e) {
        super(e),
            eh(this, 'handleWindowResize', () => {
                F.Z.isFocusedPidOutOfProcess()
                    ? this.forceUpdate()
                    : u()(() => {
                          this.forceUpdate();
                      }, 500);
            }),
            eh(this, 'activeKeyEventShapes', []),
            eh(this, 'lockEventShape', (0, ee.d2)(this.props.keybindKeyCodes)),
            eh(this, 'getActiveKeyEventIndex', (e) => this.activeKeyEventShapes.findIndex((t) => f()(t, e))),
            eh(this, 'onKeyDownGlobal', (e) => {
                let t = ex(e),
                    n = this.getActiveKeyEventIndex(t) > -1,
                    i = [16, 17, 18, 91].includes(e.keyCode);
                n || i || this.activeKeyEventShapes.push(t), this.activeKeyEventShapes.length === this.lockEventShape.length && this.lockEventShape.every((e) => this.activeKeyEventShapes.some((t) => f()(e, t))) && (e.preventDefault(), e.stopPropagation());
                let { locked: r, activeRegions: a } = this.props;
                t.keyCode === c().codes.esc && r && a.has(eu.O0n.TEXT_WIDGET) && m.Z.deactivateAllRegions();
            }),
            eh(this, 'onKeyUpGlobal', (e) => {
                let t = ex(e),
                    n = this.getActiveKeyEventIndex(t);
                n > -1 && this.activeKeyEventShapes.splice(n, 1);
            });
        let t = e.locked && X.Z.isPinned(eu.Odu.TEXT);
        b.Z.setLayout(t ? Z.Xq : Z.Sr), t && b.Z.enable();
    }
}
function eb() {
    let {
            locked: e,
            initialized: t,
            incompatibleApp: n,
            activeRegions: i,
            isPreviewingInGame: o
        } = (0, p.cj)([X.Z], () => ({
            locked: X.Z.isLocked((0, et.QF)()),
            initialized: X.Z.initialized,
            incompatibleApp: X.Z.incompatibleApp,
            activeRegions: X.Z.getActiveRegions(),
            isPreviewingInGame: X.Z.isPreviewingInGame()
        })),
        s = (0, p.e7)([q.Z], () => q.Z.windowSize()),
        d = (0, p.e7)([Y.ZP], () => Y.ZP.getOverlayKeybind()),
        c = (0, p.e7)([U.Z], () => U.Z.getVoiceChannelId()),
        l = (0, p.e7)([j.Z], () => j.Z.getChannel(c)),
        u = (0, p.e7)([G.Z], () => (null != l ? G.Z.getGuild(l.guild_id) : null)),
        _ = (0, p.e7)([L.ZP, K.Z], () => (0, N.Z)(L.ZP, K.Z)),
        f = (0, w.Ns)(null == _ ? void 0 : _.id),
        v = (0, p.e7)([k.Z], () => null != k.Z.getLastFeedFetchDate(e_.YN.GAME_PROFILE_FEED)),
        g = (0, p.e7)([M.Z], () => (0, T.Z)(M.Z)),
        m = (0, p.e7)([R.Z], () => null != R.Z.getCurrentUserActiveStream()),
        { analyticsLocations: E } = (0, I.ZP)(C.Z.OVERLAY),
        { showKeybindIndicators: x, dismissKeybindNotification: Z } = (0, er.K)(),
        b = (0, p.e7)([z.Z], () => z.Z.fetchedConsents);
    return (
        a.useEffect(() => {
            b && (0, P._)();
        }, [b]),
        (0, r.jsx)(I.Gt, {
            value: E,
            children: (0, r.jsx)(h.vWI, {
                children: (0, r.jsx)(eZ, {
                    locked: e,
                    initialized: t,
                    incompatibleApp: n,
                    activeRegions: i,
                    isPreviewingInGame: o,
                    windowSize: s,
                    keybind: null != d ? (0, ee.BB)(d.shortcut, !0) : '???',
                    keybindKeyCodes: null != d ? d.shortcut : [],
                    connectedToVoice: null != c,
                    voiceChannelId: null != l ? l.id : null,
                    voiceGuild: u,
                    game: _,
                    canGoLive: g,
                    isStreaming: m,
                    showKeybindNotification: x,
                    dismissKeybindNotification: Z,
                    contentInventoryEntries: f,
                    hasFetchedContentInventory: v
                })
            })
        })
    );
}
