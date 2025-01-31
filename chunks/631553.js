let i;
n.d(t, { Z: () => eZ }), n(653041);
var a = n(200651),
    o = n(192379),
    r = n(120356),
    s = n.n(r),
    l = n(921738),
    d = n.n(l),
    c = n(954955),
    _ = n.n(c),
    u = n(498607),
    h = n.n(u),
    f = n(442837),
    p = n(481060),
    v = n(668781),
    m = n(239091),
    g = n(13245),
    E = n(425493),
    Z = n(615287),
    y = n(951483),
    b = n(714338),
    C = n(185666),
    I = n(100527),
    k = n(906732),
    x = n(146282),
    L = n(600164);
n(70097);
var w = n(594190),
    A = n(567409),
    T = n(74299),
    N = n(989941),
    P = n(377400),
    S = n(329557),
    O = n(93127),
    R = n(199902),
    D = n(314897),
    W = n(592125),
    j = n(480294),
    z = n(430824),
    G = n(131951),
    M = n(944486),
    B = n(618541),
    K = n(449224),
    U = n(574254),
    H = n(556296),
    F = n(808506),
    V = n(237997),
    Y = n(451478),
    X = n(70956),
    q = n(358085),
    Q = n(998502),
    J = n(13140),
    $ = n(145597),
    ee = n(658785),
    et = n(681603),
    en = n(358446),
    ei = n(348733),
    ea = n(312178),
    eo = n(708383),
    er = n(923532),
    es = n(107200),
    el = n(987650),
    ed = n(981631),
    ec = n(206583),
    e_ = n(388032),
    eu = n(746120);
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
(f.ZP.PersistedStore.disableWrites = __OVERLAY__), f.ZP.initialize();
let ef = null;
function ep(e) {
    e.preventDefault();
}
function ev(e) {
    (0, m.jW)(e, async () => {
        let { default: e } = await n.e('92780').then(n.bind(n, 930381));
        return (t) => (0, a.jsx)(e, { ...t });
    });
}
q.isPlatformEmbedded;
let em = (e) => {
        let { keybind: t, onClick: n, isPreviewingInGame: i, locked: o } = e,
            r = o ? p.P3F : 'div';
        return (0, a.jsx)(r, {
            className: s()(eu.overlayBackground, {
                [eu.overlayActive]: !o,
                [eu.overlayLocked]: o,
                [eu.previewMode]: !o && i
            }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: i, button: a } = e;
                a === ed.AeJ.PRIMARY && t === i && n();
            },
            onContextMenu: ev,
            children: o
                ? null
                : (0, a.jsx)('div', {
                      className: eu.closeContainer,
                      children: (0, a.jsx)(E.Z, {
                          variant: E.Z.Variants.BOLD,
                          keybind: t,
                          closeAction: n
                      })
                  })
        });
    },
    eg = (e) => {
        let { keyCode: t, shiftKey: n, metaKey: i, altKey: a, ctrlKey: o } = e;
        return {
            keyCode: t,
            shiftKey: n,
            metaKey: i,
            altKey: a,
            ctrlKey: o
        };
    };
class eE extends o.Component {
    handleLock() {
        (0, p.$sL)() || U.Z.isOpen() || g.Z.setInputLocked(!0, (0, $.QF)());
    }
    handleDeactivate() {
        g.Z.deactivateAllRegions();
    }
    componentDidMount() {
        g.Z.startSession(), P.Z.initialize(), C.Z.initialize(), S.Z.initialize();
    }
    componentDidUpdate(e) {
        let { initialized: t } = this.props;
        if (t) {
            if (t && !e.initialized) {
                this.initialSetup();
                return;
            }
            if (!e.locked && this.props.locked) {
                if ((window.addEventListener('contextmenu', ep, !1), null != ef)) {
                    let e = Date.now() - ef;
                    g.Z.track(ed.rMx.OVERLAY_LOCKED, { unlocked_duration: e }), (ef = null);
                }
                b.Z.disable(), (this.activeKeyEventShapes = []), V.Z.isPinned(ed.Odu.TEXT) && (b.Z.setLayout(y.Xq), b.Z.enable());
            } else e.locked && !this.props.locked && (window.removeEventListener('contextmenu', ep, !1), null == ef && ((ef = Date.now()), g.Z.track(ed.rMx.OVERLAY_UNLOCKED)), b.Z.disable(), (this.activeKeyEventShapes = []), b.Z.setLayout(y.Sr), b.Z.enable());
            e.keybindKeyCodes !== this.props.keybindKeyCodes && (this.lockEventShape = (0, J.d2)(this.props.keybindKeyCodes)), !e.hasFetchedContentInventory && this.props.hasFetchedContentInventory && g.Z.notifyContentInventoryReady(this.props.contentInventoryEntries);
        }
    }
    initialSetup() {
        let { connectedToVoice: e, locked: t, canGoLive: n, isStreaming: i, voiceGuild: a, voiceChannelId: o, game: r, showKeybindNotification: s, dismissKeybindNotification: l } = this.props;
        g.Z.track(ed.rMx.OVERLAY_INITIALIZED, {
            voice_widget_connected: e,
            text_widget_connected: V.Z.isPinned(ed.Odu.TEXT),
            overlay_render_method: Z.gl[Z.gl.Hook]
        }),
            ee.Z.trackExposure({ location: 'Overlay' });
        let d = n && !i && null != r,
            c = e && null != a && null != o,
            _ = { type: el.nc.WELCOME };
        if (
            (s
                ? (_ = {
                      type: el.nc.KEYBIND_INDICATORS,
                      markAsDismissed: l
                  })
                : d && c
                  ? (_ = {
                        type: el.nc.GO_LIVE_VOICE,
                        game: r,
                        voiceChannelId: o,
                        voiceGuild: a
                    })
                  : d &&
                    (_ = {
                        type: el.nc.GO_LIVE_NON_VOICE,
                        game: r
                    }),
            g.Z.overlayMounted(_),
            window.addEventListener('resize', this.handleWindowResize),
            t && window.addEventListener('contextmenu', ep, !1),
            q.isPlatformEmbedded)
        ) {
            let e = Q.ZP.requireModule('discord_overlay2');
            if (void 0 !== e.setPerfInfoCallback) {
                var u;
                e.setPerfInfoCallback((e) => {
                    g.Z.track(ed.rMx.OVERLAY_PERF_INFO, e);
                }),
                    null === (u = e.broadcastCommand) ||
                        void 0 === u ||
                        u.call(e, {
                            message: 'set_perf_report_interval',
                            interval: 15 * X.Z.Millis.MINUTE
                        });
            }
            Q.ZP.on('REQUEST_OPEN_EXTERNAL_URL', (e, t) => {
                V.Z.getDisableExternalLinkAlert() || t === B.Z.getLastURL()
                    ? Q.ZP.send('OPEN_EXTERNAL_URL', t)
                    : v.Z.show({
                          title: e_.intl.string(e_.t.WLx4Fx),
                          body: e_.intl.string(e_.t.H8O1TE),
                          secondaryConfirmText: e_.intl.string(e_.t.IwqGhY),
                          confirmText: e_.intl.string(e_.t['3PatS0']),
                          cancelText: e_.intl.string(e_.t['ETE/oK']),
                          onConfirmSecondary: () => {
                              g.Z.disableExternalLinkAlert(), Q.ZP.send('OPEN_EXTERNAL_URL', t);
                          },
                          onConfirm: () => Q.ZP.send('OPEN_EXTERNAL_URL', t)
                      });
            });
        }
        window.addEventListener('keydown', this.onKeyDownGlobal, !0), window.addEventListener('keyup', this.onKeyUpGlobal, !0);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowResize), window.removeEventListener('keydown', this.onKeyDownGlobal, !0), window.removeEventListener('keyup', this.onKeyUpGlobal, !0), this.props.locked && window.removeEventListener('contextmenu', ep, !1), P.Z.terminate(), C.Z.terminate(), S.Z.terminate();
    }
    renderInvalidSizeMessage() {
        return (0, a.jsx)(L.Z, {
            justify: L.Z.Justify.CENTER,
            align: L.Z.Align.CENTER,
            className: eu.invalidContainer,
            children: (0, a.jsx)('div', {
                className: eu.inactiveContainer,
                children: e_.intl.format(e_.t.ketnW1, $.FW)
            })
        });
    }
    render() {
        let { locked: e, keybind: t, incompatibleApp: n, initialized: o, isPreviewingInGame: r, activeRegions: l, windowSize: d, voiceGuild: c, voiceChannelId: _ } = this.props,
            { width: u, height: h } = d;
        if (0 === u || 0 === h || n || !o) return null;
        let f = e || r,
            p = D.default.getId();
        return (0, a.jsxs)('div', {
            className: eu.overlay,
            children: [
                (0, a.jsx)(eo.Z, {}),
                r &&
                    (0, a.jsx)('header', {
                        className: eu.previewingInGameHeader,
                        children: e_.intl.string(e_.t.iOq96u)
                    }),
                i,
                (!e || l.has(ed.O0n.TEXT_WIDGET)) &&
                    (0, a.jsx)(em, {
                        locked: e,
                        keybind: t,
                        onClick: e ? this.handleDeactivate : this.handleLock,
                        isPreviewingInGame: r
                    }),
                (0, $.Te)(d)
                    ? (0, a.jsx)(ea.Z, {
                          className: s()({
                              [eu.layoutLocked]: e,
                              [eu.layoutUnlocked]: !e
                          })
                      })
                    : e
                      ? null
                      : this.renderInvalidSizeMessage(),
                (0, a.jsx)(es.Z, {}),
                null != c &&
                    null != _ &&
                    (0, a.jsx)(er.Z, {
                        streamerId: p,
                        guildId: c.id,
                        channelId: _
                    }),
                (0, a.jsx)(ei.Z, {
                    locked: f,
                    keybind: t
                }),
                (0, a.jsx)(et.Z, {})
            ]
        });
    }
    constructor(e) {
        super(e),
            eh(this, 'handleWindowResize', () => {
                F.Z.isFocusedPidOutOfProcess()
                    ? this.forceUpdate()
                    : _()(() => {
                          this.forceUpdate();
                      }, 500);
            }),
            eh(this, 'activeKeyEventShapes', []),
            eh(this, 'lockEventShape', (0, J.d2)(this.props.keybindKeyCodes)),
            eh(this, 'getActiveKeyEventIndex', (e) => this.activeKeyEventShapes.findIndex((t) => h()(t, e))),
            eh(this, 'onKeyDownGlobal', (e) => {
                let t = eg(e),
                    n = this.getActiveKeyEventIndex(t) > -1,
                    i = [16, 17, 18, 91].includes(e.keyCode);
                n || i || this.activeKeyEventShapes.push(t), this.activeKeyEventShapes.length === this.lockEventShape.length && this.lockEventShape.every((e) => this.activeKeyEventShapes.some((t) => h()(e, t))) && (e.preventDefault(), e.stopPropagation());
                let { locked: a, activeRegions: o } = this.props;
                t.keyCode === d().codes.esc && a && o.has(ed.O0n.TEXT_WIDGET) && g.Z.deactivateAllRegions();
            }),
            eh(this, 'onKeyUpGlobal', (e) => {
                let t = eg(e),
                    n = this.getActiveKeyEventIndex(t);
                n > -1 && this.activeKeyEventShapes.splice(n, 1);
            });
        let t = e.locked && V.Z.isPinned(ed.Odu.TEXT);
        b.Z.setLayout(t ? y.Xq : y.Sr), t && b.Z.enable();
    }
}
function eZ() {
    let {
            locked: e,
            initialized: t,
            incompatibleApp: n,
            activeRegions: i,
            isPreviewingInGame: r
        } = (0, f.cj)([V.Z], () => ({
            locked: V.Z.isLocked((0, $.QF)()),
            initialized: V.Z.initialized,
            incompatibleApp: V.Z.incompatibleApp,
            activeRegions: V.Z.getActiveRegions(),
            isPreviewingInGame: V.Z.isPreviewingInGame()
        })),
        s = (0, f.e7)([Y.Z], () => Y.Z.windowSize()),
        l = (0, f.e7)([H.Z], () => H.Z.getOverlayKeybind()),
        d = (0, f.e7)([M.Z], () => M.Z.getVoiceChannelId()),
        c = (0, f.e7)([W.Z], () => W.Z.getChannel(d)),
        _ = (0, f.e7)([z.Z], () => (null != c ? z.Z.getGuild(c.guild_id) : null)),
        u = (0, f.e7)([w.ZP, K.Z], () => (0, N.Z)(w.ZP, K.Z)),
        h = (0, A.Ns)(null == u ? void 0 : u.id),
        v = (0, f.e7)([x.Z], () => null != x.Z.getLastFeedFetchDate(ec.YN.GAME_PROFILE_FEED)),
        m = (0, f.e7)([G.Z], () => (0, T.Z)(G.Z)),
        g = (0, f.e7)([R.Z], () => null != R.Z.getCurrentUserActiveStream()),
        { analyticsLocations: E } = (0, k.ZP)(I.Z.OVERLAY),
        { showKeybindIndicators: Z, dismissKeybindNotification: y } = (0, en.K)(),
        b = (0, f.e7)([j.Z], () => j.Z.fetchedConsents);
    return (
        o.useEffect(() => {
            b && (0, O._)();
        }, [b]),
        (0, a.jsx)(k.Gt, {
            value: E,
            children: (0, a.jsx)(p.vWI, {
                children: (0, a.jsx)(eE, {
                    locked: e,
                    initialized: t,
                    incompatibleApp: n,
                    activeRegions: i,
                    isPreviewingInGame: r,
                    windowSize: s,
                    keybind: null != l ? (0, J.BB)(l.shortcut, !0) : '???',
                    keybindKeyCodes: null != l ? l.shortcut : [],
                    connectedToVoice: null != d,
                    voiceChannelId: null != c ? c.id : null,
                    voiceGuild: _,
                    game: u,
                    canGoLive: m,
                    isStreaming: g,
                    showKeybindNotification: Z,
                    dismissKeybindNotification: y,
                    contentInventoryEntries: h,
                    hasFetchedContentInventory: v
                })
            })
        })
    );
}
