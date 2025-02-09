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
    E = n(951483),
    y = n(714338),
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
    U = n(131951),
    K = n(944486),
    B = n(618541),
    z = n(449224),
    F = n(574254),
    W = n(556296),
    Y = n(808506),
    V = n(372679),
    H = n(237997),
    q = n(451478),
    Q = n(70956),
    X = n(358085),
    J = n(998502),
    $ = n(13140),
    ee = n(145597),
    et = n(658785),
    en = n(681603),
    ei = n(358446),
    eo = n(348733),
    er = n(312178),
    ea = n(708383),
    ec = n(923532),
    es = n(107200),
    el = n(987650),
    ed = n(981631),
    eu = n(206583),
    e_ = n(388032),
    ef = n(950426);
function ep(e, t, n) {
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
let eh = null;
function em(e) {
    e.preventDefault();
}
function ev(e) {
    (0, v.jW)(e, async () => {
        let { default: e } = await n.e('92780').then(n.bind(n, 930381));
        return (t) => (0, o.jsx)(e, { ...t });
    });
}
X.isPlatformEmbedded;
let eb = (e) => {
        let { keybind: t, onClick: n, isPreviewingInGame: i, locked: r } = e,
            a = r ? h.P3F : 'div';
        return (0, o.jsx)(a, {
            className: c()(ef.overlayBackground, {
                [ef.overlayActive]: !r,
                [ef.overlayLocked]: r,
                [ef.previewMode]: !r && i
            }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: i, button: o } = e;
                o === ed.AeJ.PRIMARY && t === i && n();
            },
            onContextMenu: ev,
            children: r
                ? null
                : (0, o.jsx)('div', {
                      className: ef.closeContainer,
                      children: (0, o.jsx)(x.Z, {
                          variant: x.Z.Variants.BOLD,
                          keybind: t,
                          closeAction: n
                      })
                  })
        });
    },
    ex = (e) => {
        let { keyCode: t, shiftKey: n, metaKey: i, altKey: o, ctrlKey: r } = e;
        return {
            keyCode: t,
            shiftKey: n,
            metaKey: i,
            altKey: o,
            ctrlKey: r
        };
    };
class eg extends r.Component {
    handleLock() {
        (0, h.$sL)() || F.Z.isOpen() || b.Z.setInputLocked(!0, (0, ee.QF)());
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
                if ((window.addEventListener('contextmenu', em, !1), null != eh)) {
                    let e = Date.now() - eh;
                    b.Z.track(ed.rMx.OVERLAY_LOCKED, { unlocked_duration: e }), (eh = null);
                }
                y.Z.disable(), (this.activeKeyEventShapes = []), H.Z.isPinned(ed.Odu.TEXT) && (y.Z.setLayout(E.Xq), y.Z.enable());
            } else e.locked && !this.props.locked && (window.removeEventListener('contextmenu', em, !1), null == eh && ((eh = Date.now()), b.Z.track(ed.rMx.OVERLAY_UNLOCKED)), y.Z.disable(), (this.activeKeyEventShapes = []), y.Z.setLayout(E.Sr), y.Z.enable());
            e.keybindKeyCodes !== this.props.keybindKeyCodes && (this.lockEventShape = (0, $.d2)(this.props.keybindKeyCodes)), !e.hasFetchedContentInventory && this.props.hasFetchedContentInventory && b.Z.notifyContentInventoryReady(this.props.contentInventoryEntries);
        }
    }
    initialSetup() {
        let { connectedToVoice: e, locked: t, canGoLive: n, isStreaming: i, voiceGuild: o, voiceChannelId: r, game: a, showKeybindNotification: c, dismissKeybindNotification: s } = this.props;
        b.Z.track(ed.rMx.OVERLAY_INITIALIZED, {
            voice_widget_connected: e,
            text_widget_connected: H.Z.isPinned(ed.Odu.TEXT),
            overlay_render_method: g.gl[g.gl.Hook]
        }),
            et.Z.trackExposure({ location: 'Overlay' });
        let l = n && !i && null != a,
            d = e && null != o && null != r,
            u = { type: el.nc.WELCOME };
        if (
            (c
                ? (u = {
                      type: el.nc.KEYBIND_INDICATORS,
                      markAsDismissed: s
                  })
                : l && d
                  ? (u = {
                        type: el.nc.GO_LIVE_VOICE,
                        game: a,
                        voiceChannelId: r,
                        voiceGuild: o
                    })
                  : l &&
                    (u = {
                        type: el.nc.GO_LIVE_NON_VOICE,
                        game: a
                    }),
            b.Z.overlayMounted(u),
            window.addEventListener('resize', this.handleWindowResize),
            t && window.addEventListener('contextmenu', em, !1),
            X.isPlatformEmbedded)
        ) {
            let e = (0, V.M)();
            if (null == e) return;
            if (void 0 !== e.setPerfInfoCallback) {
                var _;
                e.setPerfInfoCallback((e) => {
                    b.Z.track(ed.rMx.OVERLAY_PERF_INFO, e);
                }),
                    null === (_ = e.broadcastCommand) ||
                        void 0 === _ ||
                        _.call(e, {
                            message: 'set_perf_report_interval',
                            interval: 15 * Q.Z.Millis.MINUTE
                        });
            }
            J.ZP.on('REQUEST_OPEN_EXTERNAL_URL', (e, t) => {
                H.Z.getDisableExternalLinkAlert() || t === B.Z.getLastURL()
                    ? J.ZP.send('OPEN_EXTERNAL_URL', t)
                    : m.Z.show({
                          title: e_.intl.string(e_.t.WLx4Fx),
                          body: e_.intl.string(e_.t.H8O1TE),
                          secondaryConfirmText: e_.intl.string(e_.t.IwqGhY),
                          confirmText: e_.intl.string(e_.t['3PatS0']),
                          cancelText: e_.intl.string(e_.t['ETE/oK']),
                          onConfirmSecondary: () => {
                              b.Z.disableExternalLinkAlert(), J.ZP.send('OPEN_EXTERNAL_URL', t);
                          },
                          onConfirm: () => J.ZP.send('OPEN_EXTERNAL_URL', t)
                      });
            });
        }
        window.addEventListener('keydown', this.onKeyDownGlobal, !0), window.addEventListener('keyup', this.onKeyUpGlobal, !0);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowResize), window.removeEventListener('keydown', this.onKeyDownGlobal, !0), window.removeEventListener('keyup', this.onKeyUpGlobal, !0), this.props.locked && window.removeEventListener('contextmenu', em, !1), O.Z.terminate(), Z.Z.terminate(), P.Z.terminate();
    }
    renderInvalidSizeMessage() {
        return (0, o.jsx)(L.Z, {
            justify: L.Z.Justify.CENTER,
            align: L.Z.Align.CENTER,
            className: ef.invalidContainer,
            children: (0, o.jsx)('div', {
                className: ef.inactiveContainer,
                children: e_.intl.format(e_.t.ketnW1, ee.FW)
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
            className: ef.overlay,
            children: [
                (0, o.jsx)(ea.Z, {}),
                a &&
                    (0, o.jsx)('header', {
                        className: ef.previewingInGameHeader,
                        children: e_.intl.string(e_.t.iOq96u)
                    }),
                i,
                (!e || s.has(ed.O0n.TEXT_WIDGET)) &&
                    (0, o.jsx)(eb, {
                        locked: e,
                        keybind: t,
                        onClick: e ? this.handleDeactivate : this.handleLock,
                        isPreviewingInGame: a
                    }),
                (0, ee.Te)(l)
                    ? (0, o.jsx)(er.Z, {
                          className: c()({
                              [ef.layoutLocked]: e,
                              [ef.layoutUnlocked]: !e
                          })
                      })
                    : e
                      ? null
                      : this.renderInvalidSizeMessage(),
                (0, o.jsx)(es.Z, {}),
                null != d &&
                    null != u &&
                    (0, o.jsx)(ec.Z, {
                        streamerId: h,
                        guildId: d.id,
                        channelId: u
                    }),
                (0, o.jsx)(eo.Z, {
                    locked: p,
                    keybind: t
                }),
                (0, o.jsx)(en.Z, {})
            ]
        });
    }
    constructor(e) {
        super(e),
            ep(this, 'handleWindowResize', () => {
                Y.Z.isFocusedPidOutOfProcess()
                    ? this.forceUpdate()
                    : u()(() => {
                          this.forceUpdate();
                      }, 500);
            }),
            ep(this, 'activeKeyEventShapes', []),
            ep(this, 'lockEventShape', (0, $.d2)(this.props.keybindKeyCodes)),
            ep(this, 'getActiveKeyEventIndex', (e) => this.activeKeyEventShapes.findIndex((t) => f()(t, e))),
            ep(this, 'onKeyDownGlobal', (e) => {
                let t = ex(e),
                    n = this.getActiveKeyEventIndex(t) > -1,
                    i = [16, 17, 18, 91].includes(e.keyCode);
                n || i || this.activeKeyEventShapes.push(t), this.activeKeyEventShapes.length === this.lockEventShape.length && this.lockEventShape.every((e) => this.activeKeyEventShapes.some((t) => f()(e, t))) && (e.preventDefault(), e.stopPropagation());
                let { locked: o, activeRegions: r } = this.props;
                t.keyCode === l().codes.esc && o && r.has(ed.O0n.TEXT_WIDGET) && b.Z.deactivateAllRegions();
            }),
            ep(this, 'onKeyUpGlobal', (e) => {
                let t = ex(e),
                    n = this.getActiveKeyEventIndex(t);
                n > -1 && this.activeKeyEventShapes.splice(n, 1);
            });
        let t = e.locked && H.Z.isPinned(ed.Odu.TEXT);
        y.Z.setLayout(t ? E.Xq : E.Sr), t && y.Z.enable();
    }
}
function eE() {
    let {
            locked: e,
            initialized: t,
            incompatibleApp: n,
            activeRegions: i,
            isPreviewingInGame: a
        } = (0, p.cj)([H.Z], () => ({
            locked: H.Z.isLocked((0, ee.QF)()),
            initialized: H.Z.initialized,
            incompatibleApp: H.Z.incompatibleApp,
            activeRegions: H.Z.getActiveRegions(),
            isPreviewingInGame: H.Z.isPreviewingInGame()
        })),
        c = (0, p.e7)([q.Z], () => q.Z.windowSize()),
        s = (0, p.e7)([W.ZP], () => W.ZP.getOverlayKeybind()),
        l = (0, p.e7)([K.Z], () => K.Z.getVoiceChannelId()),
        d = (0, p.e7)([j.Z], () => j.Z.getChannel(l)),
        u = (0, p.e7)([G.Z], () => (null != d ? G.Z.getGuild(d.guild_id) : null)),
        _ = (0, p.e7)([w.ZP, z.Z], () => (0, T.Z)(w.ZP, z.Z)),
        f = (0, A.Ns)(null == _ ? void 0 : _.id),
        m = (0, p.e7)([C.Z], () => null != C.Z.getLastFeedFetchDate(eu.YN.GAME_PROFILE_FEED)),
        v = (0, p.e7)([U.Z], () => (0, S.Z)(U.Z)),
        b = (0, p.e7)([D.Z], () => null != D.Z.getCurrentUserActiveStream()),
        { analyticsLocations: x } = (0, I.ZP)(k.Z.OVERLAY),
        { showKeybindIndicators: g, dismissKeybindNotification: E } = (0, ei.K)(),
        y = (0, p.e7)([M.Z], () => M.Z.fetchedConsents);
    return (
        r.useEffect(() => {
            y && (0, N._)();
        }, [y]),
        (0, o.jsx)(I.Gt, {
            value: x,
            children: (0, o.jsx)(h.vWI, {
                children: (0, o.jsx)(eg, {
                    locked: e,
                    initialized: t,
                    incompatibleApp: n,
                    activeRegions: i,
                    isPreviewingInGame: a,
                    windowSize: c,
                    keybind: null != s ? (0, $.BB)(s.shortcut, !0) : '???',
                    keybindKeyCodes: null != s ? s.shortcut : [],
                    connectedToVoice: null != l,
                    voiceChannelId: null != d ? d.id : null,
                    voiceGuild: u,
                    game: _,
                    canGoLive: v,
                    isStreaming: b,
                    showKeybindNotification: g,
                    dismissKeybindNotification: E,
                    contentInventoryEntries: f,
                    hasFetchedContentInventory: m
                })
            })
        })
    );
}
