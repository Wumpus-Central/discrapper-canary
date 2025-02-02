let i;
n.d(t, { Z: () => eZ }), n(653041);
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
    W = n(131951),
    M = n(944486),
    U = n(618541),
    B = n(449224),
    K = n(574254),
    H = n(556296),
    Y = n(808506),
    F = n(372679),
    V = n(237997),
    X = n(451478),
    q = n(70956),
    Q = n(358085),
    J = n(998502),
    $ = n(13140),
    ee = n(145597),
    et = n(658785),
    en = n(681603),
    ei = n(358446),
    er = n(348733),
    ea = n(312178),
    eo = n(708383),
    es = n(923532),
    ed = n(107200),
    ec = n(987650),
    el = n(981631),
    eu = n(206583),
    e_ = n(388032),
    ef = n(746120);
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
function ev(e) {
    e.preventDefault();
}
function eg(e) {
    (0, g.jW)(e, async () => {
        let { default: e } = await n.e('92780').then(n.bind(n, 930381));
        return (t) => (0, r.jsx)(e, { ...t });
    });
}
Q.isPlatformEmbedded;
let em = (e) => {
        let { keybind: t, onClick: n, isPreviewingInGame: i, locked: a } = e,
            o = a ? h.P3F : 'div';
        return (0, r.jsx)(o, {
            className: s()(ef.overlayBackground, {
                [ef.overlayActive]: !a,
                [ef.overlayLocked]: a,
                [ef.previewMode]: !a && i
            }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: i, button: r } = e;
                r === el.AeJ.PRIMARY && t === i && n();
            },
            onContextMenu: eg,
            children: a
                ? null
                : (0, r.jsx)('div', {
                      className: ef.closeContainer,
                      children: (0, r.jsx)(E.Z, {
                          variant: E.Z.Variants.BOLD,
                          keybind: t,
                          closeAction: n
                      })
                  })
        });
    },
    eE = (e) => {
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
        (0, h.$sL)() || K.Z.isOpen() || m.Z.setInputLocked(!0, (0, ee.QF)());
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
                if ((window.addEventListener('contextmenu', ev, !1), null != eh)) {
                    let e = Date.now() - eh;
                    m.Z.track(el.rMx.OVERLAY_LOCKED, { unlocked_duration: e }), (eh = null);
                }
                b.Z.disable(), (this.activeKeyEventShapes = []), V.Z.isPinned(el.Odu.TEXT) && (b.Z.setLayout(Z.Xq), b.Z.enable());
            } else e.locked && !this.props.locked && (window.removeEventListener('contextmenu', ev, !1), null == eh && ((eh = Date.now()), m.Z.track(el.rMx.OVERLAY_UNLOCKED)), b.Z.disable(), (this.activeKeyEventShapes = []), b.Z.setLayout(Z.Sr), b.Z.enable());
            e.keybindKeyCodes !== this.props.keybindKeyCodes && (this.lockEventShape = (0, $.d2)(this.props.keybindKeyCodes)), !e.hasFetchedContentInventory && this.props.hasFetchedContentInventory && m.Z.notifyContentInventoryReady(this.props.contentInventoryEntries);
        }
    }
    initialSetup() {
        let { connectedToVoice: e, locked: t, canGoLive: n, isStreaming: i, voiceGuild: r, voiceChannelId: a, game: o, showKeybindNotification: s, dismissKeybindNotification: d } = this.props;
        m.Z.track(el.rMx.OVERLAY_INITIALIZED, {
            voice_widget_connected: e,
            text_widget_connected: V.Z.isPinned(el.Odu.TEXT),
            overlay_render_method: x.gl[x.gl.Hook]
        }),
            et.Z.trackExposure({ location: 'Overlay' });
        let c = n && !i && null != o,
            l = e && null != r && null != a,
            u = { type: ec.nc.WELCOME };
        if (
            (s
                ? (u = {
                      type: ec.nc.KEYBIND_INDICATORS,
                      markAsDismissed: d
                  })
                : c && l
                  ? (u = {
                        type: ec.nc.GO_LIVE_VOICE,
                        game: o,
                        voiceChannelId: a,
                        voiceGuild: r
                    })
                  : c &&
                    (u = {
                        type: ec.nc.GO_LIVE_NON_VOICE,
                        game: o
                    }),
            m.Z.overlayMounted(u),
            window.addEventListener('resize', this.handleWindowResize),
            t && window.addEventListener('contextmenu', ev, !1),
            Q.isPlatformEmbedded)
        ) {
            let e = (0, F.M)();
            if (null == e) return;
            if (void 0 !== e.setPerfInfoCallback) {
                var _;
                e.setPerfInfoCallback((e) => {
                    m.Z.track(el.rMx.OVERLAY_PERF_INFO, e);
                }),
                    null === (_ = e.broadcastCommand) ||
                        void 0 === _ ||
                        _.call(e, {
                            message: 'set_perf_report_interval',
                            interval: 15 * q.Z.Millis.MINUTE
                        });
            }
            J.ZP.on('REQUEST_OPEN_EXTERNAL_URL', (e, t) => {
                V.Z.getDisableExternalLinkAlert() || t === U.Z.getLastURL()
                    ? J.ZP.send('OPEN_EXTERNAL_URL', t)
                    : v.Z.show({
                          title: e_.intl.string(e_.t.WLx4Fx),
                          body: e_.intl.string(e_.t.H8O1TE),
                          secondaryConfirmText: e_.intl.string(e_.t.IwqGhY),
                          confirmText: e_.intl.string(e_.t['3PatS0']),
                          cancelText: e_.intl.string(e_.t['ETE/oK']),
                          onConfirmSecondary: () => {
                              m.Z.disableExternalLinkAlert(), J.ZP.send('OPEN_EXTERNAL_URL', t);
                          },
                          onConfirm: () => J.ZP.send('OPEN_EXTERNAL_URL', t)
                      });
            });
        }
        window.addEventListener('keydown', this.onKeyDownGlobal, !0), window.addEventListener('keyup', this.onKeyUpGlobal, !0);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowResize), window.removeEventListener('keydown', this.onKeyDownGlobal, !0), window.removeEventListener('keyup', this.onKeyUpGlobal, !0), this.props.locked && window.removeEventListener('contextmenu', ev, !1), O.Z.terminate(), y.Z.terminate(), S.Z.terminate();
    }
    renderInvalidSizeMessage() {
        return (0, r.jsx)(A.Z, {
            justify: A.Z.Justify.CENTER,
            align: A.Z.Align.CENTER,
            className: ef.invalidContainer,
            children: (0, r.jsx)('div', {
                className: ef.inactiveContainer,
                children: e_.intl.format(e_.t.ketnW1, ee.FW)
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
            className: ef.overlay,
            children: [
                (0, r.jsx)(eo.Z, {}),
                o &&
                    (0, r.jsx)('header', {
                        className: ef.previewingInGameHeader,
                        children: e_.intl.string(e_.t.iOq96u)
                    }),
                i,
                (!e || d.has(el.O0n.TEXT_WIDGET)) &&
                    (0, r.jsx)(em, {
                        locked: e,
                        keybind: t,
                        onClick: e ? this.handleDeactivate : this.handleLock,
                        isPreviewingInGame: o
                    }),
                (0, ee.Te)(c)
                    ? (0, r.jsx)(ea.Z, {
                          className: s()({
                              [ef.layoutLocked]: e,
                              [ef.layoutUnlocked]: !e
                          })
                      })
                    : e
                      ? null
                      : this.renderInvalidSizeMessage(),
                (0, r.jsx)(ed.Z, {}),
                null != l &&
                    null != u &&
                    (0, r.jsx)(es.Z, {
                        streamerId: h,
                        guildId: l.id,
                        channelId: u
                    }),
                (0, r.jsx)(er.Z, {
                    locked: p,
                    keybind: t
                }),
                (0, r.jsx)(en.Z, {})
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
                let t = eE(e),
                    n = this.getActiveKeyEventIndex(t) > -1,
                    i = [16, 17, 18, 91].includes(e.keyCode);
                n || i || this.activeKeyEventShapes.push(t), this.activeKeyEventShapes.length === this.lockEventShape.length && this.lockEventShape.every((e) => this.activeKeyEventShapes.some((t) => f()(e, t))) && (e.preventDefault(), e.stopPropagation());
                let { locked: r, activeRegions: a } = this.props;
                t.keyCode === c().codes.esc && r && a.has(el.O0n.TEXT_WIDGET) && m.Z.deactivateAllRegions();
            }),
            ep(this, 'onKeyUpGlobal', (e) => {
                let t = eE(e),
                    n = this.getActiveKeyEventIndex(t);
                n > -1 && this.activeKeyEventShapes.splice(n, 1);
            });
        let t = e.locked && V.Z.isPinned(el.Odu.TEXT);
        b.Z.setLayout(t ? Z.Xq : Z.Sr), t && b.Z.enable();
    }
}
function eZ() {
    let {
            locked: e,
            initialized: t,
            incompatibleApp: n,
            activeRegions: i,
            isPreviewingInGame: o
        } = (0, p.cj)([V.Z], () => ({
            locked: V.Z.isLocked((0, ee.QF)()),
            initialized: V.Z.initialized,
            incompatibleApp: V.Z.incompatibleApp,
            activeRegions: V.Z.getActiveRegions(),
            isPreviewingInGame: V.Z.isPreviewingInGame()
        })),
        s = (0, p.e7)([X.Z], () => X.Z.windowSize()),
        d = (0, p.e7)([H.Z], () => H.Z.getOverlayKeybind()),
        c = (0, p.e7)([M.Z], () => M.Z.getVoiceChannelId()),
        l = (0, p.e7)([j.Z], () => j.Z.getChannel(c)),
        u = (0, p.e7)([G.Z], () => (null != l ? G.Z.getGuild(l.guild_id) : null)),
        _ = (0, p.e7)([L.ZP, B.Z], () => (0, N.Z)(L.ZP, B.Z)),
        f = (0, w.Ns)(null == _ ? void 0 : _.id),
        v = (0, p.e7)([k.Z], () => null != k.Z.getLastFeedFetchDate(eu.YN.GAME_PROFILE_FEED)),
        g = (0, p.e7)([W.Z], () => (0, T.Z)(W.Z)),
        m = (0, p.e7)([R.Z], () => null != R.Z.getCurrentUserActiveStream()),
        { analyticsLocations: E } = (0, I.ZP)(C.Z.OVERLAY),
        { showKeybindIndicators: x, dismissKeybindNotification: Z } = (0, ei.K)(),
        b = (0, p.e7)([z.Z], () => z.Z.fetchedConsents);
    return (
        a.useEffect(() => {
            b && (0, P._)();
        }, [b]),
        (0, r.jsx)(I.Gt, {
            value: E,
            children: (0, r.jsx)(h.vWI, {
                children: (0, r.jsx)(ex, {
                    locked: e,
                    initialized: t,
                    incompatibleApp: n,
                    activeRegions: i,
                    isPreviewingInGame: o,
                    windowSize: s,
                    keybind: null != d ? (0, $.BB)(d.shortcut, !0) : '???',
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
