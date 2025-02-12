let i;
n.d(t, { Z: () => eE }), n(653041);
var o = n(200651),
    r = n(192379),
    a = n(120356),
    c = n.n(a),
    s = n(921738),
    l = n.n(s),
    d = n(954955),
    u = n.n(d),
    _ = n(498607),
    f = n.n(_),
    p = n(442837),
    h = n(481060),
    m = n(668781),
    v = n(239091),
    b = n(13245),
    x = n(425493),
    g = n(615287),
    y = n(951483),
    E = n(714338),
    Z = n(185666),
    k = n(100527),
    I = n(906732),
    C = n(146282),
    L = n(600164);
n(70097);
var w = n(594190),
    A = n(567409),
    S = n(74299),
    T = n(989941),
    O = n(377400),
    P = n(329557),
    N = n(93127),
    D = n(199902),
    R = n(314897),
    j = n(592125),
    M = n(480294),
    G = n(430824),
    U = n(355863),
    K = n(131951),
    B = n(944486),
    z = n(618541),
    F = n(449224),
    W = n(574254),
    Y = n(556296),
    V = n(808506),
    H = n(372679),
    q = n(237997),
    Q = n(451478),
    X = n(70956),
    J = n(358085),
    $ = n(998502),
    ee = n(13140),
    et = n(145597),
    en = n(658785),
    ei = n(681603),
    eo = n(358446),
    er = n(348733),
    ea = n(312178),
    ec = n(708383),
    es = n(923532),
    el = n(107200),
    ed = n(987650),
    eu = n(981631),
    e_ = n(206583),
    ef = n(388032),
    ep = n(950426);
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
let em = null;
function ev(e) {
    e.preventDefault();
}
function eb(e) {
    (0, v.jW)(e, async () => {
        let { default: e } = await n.e('92780').then(n.bind(n, 930381));
        return (t) => (0, o.jsx)(e, { ...t });
    });
}
J.isPlatformEmbedded;
let ex = (e) => {
        let { keybind: t, onClick: n, isPreviewingInGame: i, locked: r } = e,
            a = r ? h.P3F : 'div';
        return (0, o.jsx)(a, {
            className: c()(ep.overlayBackground, {
                [ep.overlayActive]: !r,
                [ep.overlayLocked]: r,
                [ep.previewMode]: !r && i
            }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: i, button: o } = e;
                o === eu.AeJ.PRIMARY && t === i && n();
            },
            onContextMenu: eb,
            children: r
                ? null
                : (0, o.jsx)('div', {
                      className: ep.closeContainer,
                      children: (0, o.jsx)(x.Z, {
                          variant: x.Z.Variants.BOLD,
                          keybind: t,
                          closeAction: n
                      })
                  })
        });
    },
    eg = (e) => {
        let { keyCode: t, shiftKey: n, metaKey: i, altKey: o, ctrlKey: r } = e;
        return {
            keyCode: t,
            shiftKey: n,
            metaKey: i,
            altKey: o,
            ctrlKey: r
        };
    };
class ey extends r.Component {
    handleLock() {
        (0, h.$sL)() || W.Z.isOpen() || b.Z.setInputLocked(!0, (0, et.QF)());
    }
    handleDeactivate() {
        b.Z.deactivateAllRegions();
    }
    componentDidMount() {
        b.Z.startSession(), O.Z.initialize(), Z.Z.initialize(), P.Z.initialize();
    }
    componentDidUpdate(e) {
        let { initialized: t } = this.props;
        if (t) {
            if (t && !e.initialized) {
                this.initialSetup();
                return;
            }
            if (!e.locked && this.props.locked) {
                if ((window.addEventListener('contextmenu', ev, !1), null != em)) {
                    let e = Date.now() - em;
                    b.Z.track(eu.rMx.OVERLAY_LOCKED, { unlocked_duration: e }), (em = null);
                }
                E.Z.disable(), (this.activeKeyEventShapes = []), q.Z.isPinned(eu.Odu.TEXT) && (E.Z.setLayout(y.Xq), E.Z.enable());
            } else e.locked && !this.props.locked && (window.removeEventListener('contextmenu', ev, !1), null == em && ((em = Date.now()), b.Z.track(eu.rMx.OVERLAY_UNLOCKED)), E.Z.disable(), (this.activeKeyEventShapes = []), E.Z.setLayout(y.Sr), E.Z.enable());
            e.keybindKeyCodes !== this.props.keybindKeyCodes && (this.lockEventShape = (0, ee.d2)(this.props.keybindKeyCodes)), !e.hasFetchedContentInventory && this.props.hasFetchedContentInventory && b.Z.notifyContentInventoryReady(this.props.contentInventoryEntries);
        }
    }
    initialSetup() {
        let { connectedToVoice: e, locked: t, canGoLive: n, isStreaming: i, voiceGuild: o, voiceChannelId: r, game: a, showKeybindNotification: c, dismissKeybindNotification: s } = this.props;
        b.Z.track(eu.rMx.OVERLAY_INITIALIZED, {
            voice_widget_connected: e,
            text_widget_connected: q.Z.isPinned(eu.Odu.TEXT),
            overlay_render_method: g.gl[g.gl.Hook],
            unpinned_widget_types: U.Z.getAllUnpinnedPinnedWidgets(et.qU)
        }),
            en.Z.trackExposure({ location: 'Overlay' });
        let l = n && !i && null != a,
            d = e && null != o && null != r,
            u = { type: ed.nc.WELCOME };
        if (
            (c
                ? (u = {
                      type: ed.nc.KEYBIND_INDICATORS,
                      markAsDismissed: s
                  })
                : l && d
                  ? (u = {
                        type: ed.nc.GO_LIVE_VOICE,
                        game: a,
                        voiceChannelId: r,
                        voiceGuild: o
                    })
                  : l &&
                    (u = {
                        type: ed.nc.GO_LIVE_NON_VOICE,
                        game: a
                    }),
            b.Z.overlayMounted(u),
            window.addEventListener('resize', this.handleWindowResize),
            t && window.addEventListener('contextmenu', ev, !1),
            J.isPlatformEmbedded)
        ) {
            let e = (0, H.M)();
            if (null == e) return;
            if (void 0 !== e.setPerfInfoCallback) {
                var _;
                e.setPerfInfoCallback((e) => {
                    b.Z.track(eu.rMx.OVERLAY_PERF_INFO, e);
                }),
                    null === (_ = e.broadcastCommand) ||
                        void 0 === _ ||
                        _.call(e, {
                            message: 'set_perf_report_interval',
                            interval: 15 * X.Z.Millis.MINUTE
                        });
            }
            $.ZP.on('REQUEST_OPEN_EXTERNAL_URL', (e, t) => {
                q.Z.getDisableExternalLinkAlert() || t === z.Z.getLastURL()
                    ? $.ZP.send('OPEN_EXTERNAL_URL', t)
                    : m.Z.show({
                          title: ef.intl.string(ef.t.WLx4Fx),
                          body: ef.intl.string(ef.t.H8O1TE),
                          secondaryConfirmText: ef.intl.string(ef.t.IwqGhY),
                          confirmText: ef.intl.string(ef.t['3PatS0']),
                          cancelText: ef.intl.string(ef.t['ETE/oK']),
                          onConfirmSecondary: () => {
                              b.Z.disableExternalLinkAlert(), $.ZP.send('OPEN_EXTERNAL_URL', t);
                          },
                          onConfirm: () => $.ZP.send('OPEN_EXTERNAL_URL', t)
                      });
            });
        }
        window.addEventListener('keydown', this.onKeyDownGlobal, !0), window.addEventListener('keyup', this.onKeyUpGlobal, !0);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowResize), window.removeEventListener('keydown', this.onKeyDownGlobal, !0), window.removeEventListener('keyup', this.onKeyUpGlobal, !0), this.props.locked && window.removeEventListener('contextmenu', ev, !1), O.Z.terminate(), Z.Z.terminate(), P.Z.terminate();
    }
    renderInvalidSizeMessage() {
        return (0, o.jsx)(L.Z, {
            justify: L.Z.Justify.CENTER,
            align: L.Z.Align.CENTER,
            className: ep.invalidContainer,
            children: (0, o.jsx)('div', {
                className: ep.inactiveContainer,
                children: ef.intl.format(ef.t.ketnW1, et.FW)
            })
        });
    }
    render() {
        let { locked: e, keybind: t, incompatibleApp: n, initialized: r, isPreviewingInGame: a, activeRegions: s, windowSize: l, voiceGuild: d, voiceChannelId: u } = this.props,
            { width: _, height: f } = l;
        if (0 === _ || 0 === f || n || !r) return null;
        let p = e || a,
            h = R.default.getId();
        return (0, o.jsxs)('div', {
            className: ep.overlay,
            children: [
                (0, o.jsx)(ec.Z, {}),
                a &&
                    (0, o.jsx)('header', {
                        className: ep.previewingInGameHeader,
                        children: ef.intl.string(ef.t.iOq96u)
                    }),
                i,
                (!e || s.has(eu.O0n.TEXT_WIDGET)) &&
                    (0, o.jsx)(ex, {
                        locked: e,
                        keybind: t,
                        onClick: e ? this.handleDeactivate : this.handleLock,
                        isPreviewingInGame: a
                    }),
                (0, et.Te)(l)
                    ? (0, o.jsx)(ea.Z, {
                          className: c()({
                              [ep.layoutLocked]: e,
                              [ep.layoutUnlocked]: !e
                          })
                      })
                    : e
                      ? null
                      : this.renderInvalidSizeMessage(),
                (0, o.jsx)(el.Z, {}),
                null != d &&
                    null != u &&
                    (0, o.jsx)(es.Z, {
                        streamerId: h,
                        guildId: d.id,
                        channelId: u
                    }),
                (0, o.jsx)(er.Z, {
                    locked: p,
                    keybind: t
                }),
                (0, o.jsx)(ei.Z, {})
            ]
        });
    }
    constructor(e) {
        super(e),
            eh(this, 'handleWindowResize', () => {
                V.Z.isFocusedPidOutOfProcess()
                    ? this.forceUpdate()
                    : u()(() => {
                          this.forceUpdate();
                      }, 500);
            }),
            eh(this, 'activeKeyEventShapes', []),
            eh(this, 'lockEventShape', (0, ee.d2)(this.props.keybindKeyCodes)),
            eh(this, 'getActiveKeyEventIndex', (e) => this.activeKeyEventShapes.findIndex((t) => f()(t, e))),
            eh(this, 'onKeyDownGlobal', (e) => {
                let t = eg(e),
                    n = this.getActiveKeyEventIndex(t) > -1,
                    i = [16, 17, 18, 91].includes(e.keyCode);
                n || i || this.activeKeyEventShapes.push(t), this.activeKeyEventShapes.length === this.lockEventShape.length && this.lockEventShape.every((e) => this.activeKeyEventShapes.some((t) => f()(e, t))) && (e.preventDefault(), e.stopPropagation());
                let { locked: o, activeRegions: r } = this.props;
                t.keyCode === l().codes.esc && o && r.has(eu.O0n.TEXT_WIDGET) && b.Z.deactivateAllRegions();
            }),
            eh(this, 'onKeyUpGlobal', (e) => {
                let t = eg(e),
                    n = this.getActiveKeyEventIndex(t);
                n > -1 && this.activeKeyEventShapes.splice(n, 1);
            });
        let t = e.locked && q.Z.isPinned(eu.Odu.TEXT);
        E.Z.setLayout(t ? y.Xq : y.Sr), t && E.Z.enable();
    }
}
function eE() {
    let {
            locked: e,
            initialized: t,
            incompatibleApp: n,
            activeRegions: i,
            isPreviewingInGame: a
        } = (0, p.cj)([q.Z], () => ({
            locked: q.Z.isLocked((0, et.QF)()),
            initialized: q.Z.initialized,
            incompatibleApp: q.Z.incompatibleApp,
            activeRegions: q.Z.getActiveRegions(),
            isPreviewingInGame: q.Z.isPreviewingInGame()
        })),
        c = (0, p.e7)([Q.Z], () => Q.Z.windowSize()),
        s = (0, p.e7)([Y.ZP], () => Y.ZP.getOverlayKeybind()),
        l = (0, p.e7)([B.Z], () => B.Z.getVoiceChannelId()),
        d = (0, p.e7)([j.Z], () => j.Z.getChannel(l)),
        u = (0, p.e7)([G.Z], () => (null != d ? G.Z.getGuild(d.guild_id) : null)),
        _ = (0, p.e7)([w.ZP, F.Z], () => (0, T.Z)(w.ZP, F.Z)),
        f = (0, A.Ns)(null == _ ? void 0 : _.id),
        m = (0, p.e7)([C.Z], () => null != C.Z.getLastFeedFetchDate(e_.YN.GAME_PROFILE_FEED)),
        v = (0, p.e7)([K.Z], () => (0, S.Z)(K.Z)),
        b = (0, p.e7)([D.Z], () => null != D.Z.getCurrentUserActiveStream()),
        { analyticsLocations: x } = (0, I.ZP)(k.Z.OVERLAY),
        { showKeybindIndicators: g, dismissKeybindNotification: y } = (0, eo.K)(),
        E = (0, p.e7)([M.Z], () => M.Z.fetchedConsents);
    return (
        r.useEffect(() => {
            E && (0, N._)();
        }, [E]),
        (0, o.jsx)(I.Gt, {
            value: x,
            children: (0, o.jsx)(h.vWI, {
                children: (0, o.jsx)(ey, {
                    locked: e,
                    initialized: t,
                    incompatibleApp: n,
                    activeRegions: i,
                    isPreviewingInGame: a,
                    windowSize: c,
                    keybind: null != s ? (0, ee.BB)(s.shortcut, !0) : '???',
                    keybindKeyCodes: null != s ? s.shortcut : [],
                    connectedToVoice: null != l,
                    voiceChannelId: null != d ? d.id : null,
                    voiceGuild: u,
                    game: _,
                    canGoLive: v,
                    isStreaming: b,
                    showKeybindNotification: g,
                    dismissKeybindNotification: y,
                    contentInventoryEntries: f,
                    hasFetchedContentInventory: m
                })
            })
        })
    );
}
