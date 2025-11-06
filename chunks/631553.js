let i;
n.d(t, { Z: () => ej }), n(539854);
var r = n(951288),
    o = n(647438),
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
    _ = n(13245),
    v = n(425493),
    b = n(593472),
    E = n(951483),
    S = n(714338),
    x = n(185666),
    Z = n(100527),
    j = n(906732),
    C = n(600164);
n(70097);
var I = n(266454),
    P = n(594190),
    w = n(74299),
    N = n(989941),
    T = n(377400),
    D = n(329557),
    k = n(199902),
    R = n(314897),
    A = n(592125),
    L = n(430824),
    M = n(355863),
    z = n(131951),
    V = n(944486),
    W = n(618541),
    U = n(449224),
    G = n(574254),
    B = n(556296),
    F = n(808506),
    H = n(372679),
    Y = n(237997),
    K = n(451478),
    X = n(70956),
    q = n(358085),
    J = n(998502),
    Q = n(378799),
    $ = n(13140),
    ee = n(145597),
    et = n(658785),
    en = n(454991),
    ei = n(837268),
    er = n(32300),
    eo = n(681603),
    el = n(358446),
    es = n(348733),
    ea = n(312178),
    ec = n(708383),
    ed = n(923532),
    eu = n(107200),
    eh = n(983660),
    ep = n(624864),
    ef = n(987650),
    eg = n(757744),
    em = n(981631),
    ey = n(388032),
    eO = n(722363);
function e_(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
(f.ZP.PersistedStore.disableWrites = __OVERLAY__), f.ZP.initialize();
let ev = null;
function eb(e) {
    e.preventDefault();
}
function eE(e) {
    (0, O.jW)(e, async () => {
        let { default: e } = await n.e("92780").then(n.bind(n, 930381));
        return (t) => {
            var n, i;
            return (0, r.jsx)(
                e,
                ((n = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            i = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (i = i.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                }),
                            )),
                            i.forEach(function (t) {
                                e_(e, t, n[t]);
                            });
                    }
                    return e;
                })({}, t)),
                (i = i = { version: eg.bv }),
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
                n),
            );
        };
    });
}
q.isPlatformEmbedded;
let eS = (e) => {
        let { keybind: t, onClick: n, isPreviewingInGame: i, locked: o } = e,
            l = o ? m.P3F : "div";
        return (0, r.jsx)(l, {
            className: s()(eO.overlayBackground, {
                [eO.overlayActive]: !o,
                [eO.overlayLocked]: o,
                [eO.previewMode]: !o && i,
            }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: i, button: r } = e;
                r === em.AeJ.PRIMARY && t === i && n();
            },
            onContextMenu: eE,
            children: o
                ? null
                : (0, r.jsx)("div", {
                      className: eO.closeContainer,
                      children: (0, r.jsx)(v.Z, {
                          variant: v.Z.Variants.BOLD,
                          keybind: t,
                          closeAction: n,
                      }),
                  }),
        });
    },
    ex = (e) => {
        let { keyCode: t, shiftKey: n, metaKey: i, altKey: r, ctrlKey: o } = e;
        return {
            keyCode: t,
            shiftKey: n,
            metaKey: i,
            altKey: r,
            ctrlKey: o,
        };
    };
class eZ extends o.Component {
    handleLock() {
        (0, m.$sL)() || G.Z.isOpen() || _.Z.setInputLocked(!0, (0, ee.getPID)());
    }
    handleDeactivate() {
        _.Z.deactivateAllRegions();
    }
    componentDidMount() {
        _.Z.startSession(), T.Z.initialize(), x.Z.initialize(), D.Z.initialize();
    }
    componentDidUpdate(e) {
        let { initialized: t } = this.props;
        if (t) {
            if (t && !this.didUpdate) {
                (this.didUpdate = !0), this.initialSetup();
                return;
            }
            if (!e.locked && this.props.locked) {
                if ((window.addEventListener("contextmenu", eb, !1), null != ev)) {
                    let e = Date.now() - ev;
                    _.Z.track(em.rMx.OVERLAY_LOCKED, { unlocked_duration: e }), (ev = null);
                }
                S.Z.disable(),
                    (this.activeKeyEventShapes = []),
                    Y.default.isPinned(em.Odu.TEXT) && (S.Z.setLayout(E.Xq), S.Z.enable());
            } else
                e.locked &&
                    !this.props.locked &&
                    (window.removeEventListener("contextmenu", eb, !1),
                    null == ev && ((ev = Date.now()), _.Z.track(em.rMx.OVERLAY_UNLOCKED)),
                    S.Z.disable(),
                    (this.activeKeyEventShapes = []),
                    S.Z.setLayout(E.Sr),
                    S.Z.enable());
            e.keybindKeyCodes !== this.props.keybindKeyCodes &&
                (this.lockEventShape = (0, $.d2)(this.props.keybindKeyCodes));
        }
    }
    initialSetup() {
        let e,
            {
                connectedToVoice: t,
                locked: n,
                canGoLive: i,
                isStreaming: r,
                voiceGuild: o,
                voiceChannelId: l,
                game: s,
                showKeybindNotification: a,
                dismissKeybindNotification: c,
            } = this.props;
        _.Z.track(em.rMx.OVERLAY_INITIALIZED, {
            voice_widget_connected: t,
            text_widget_connected: Y.default.isPinned(em.Odu.TEXT),
            overlay_render_method: ei.gl[ei.gl.Hook],
            unpinned_widget_types: M.Z.getAllUnpinnedPinnedWidgets(ee.OVERLAY_LAYOUT_ID),
        }),
            et.Z.trackExposure({ location: "Overlay" });
        let d = i && !r && null != s,
            u = t && null != o && null != l;
        (0, I.zu)(g.z.OVERLAY_OOP_WELCOME_SWITCH_FROM_IP_NUX) || (0, I.Q3)(g.z.OVERLAY_OOP_WELCOME_SWITCH_FROM_IP_NUX);
        let h = ep.Z.isNotificationDisabled(ef.n0.WelcomeNudge),
            p = ep.Z.isNotificationDisabled(ef.n0.GoLiveNudge);
        if (
            (h || (e = { type: ef.nc.WELCOME }),
            a && !h
                ? (e = {
                      type: ef.nc.KEYBIND_INDICATORS,
                      markAsDismissed: c,
                  })
                : d && u && !p
                  ? (e = {
                        type: ef.nc.GO_LIVE_VOICE,
                        game: s,
                        voiceChannelId: l,
                        voiceGuild: o,
                    })
                  : d &&
                    !p &&
                    (e = {
                        type: ef.nc.GO_LIVE_NON_VOICE,
                        game: s,
                    }),
            setTimeout(async () => {
                await (0, Q.s5)(), null != e ? _.Z.overlayMounted(e) : _.Z.overlayMounted();
            }, 128),
            window.addEventListener("resize", this.handleWindowResize),
            n && window.addEventListener("contextmenu", eb, !1),
            q.isPlatformEmbedded)
        ) {
            let e = (0, H.M)();
            if (null == e) return;
            if (void 0 !== e.setPerfInfoCallback) {
                var f;
                e.setPerfInfoCallback((e) => {
                    _.Z.track(em.rMx.OVERLAY_PERF_INFO, e);
                }),
                    null == (f = e.broadcastCommand) ||
                        f.call(e, {
                            message: "set_perf_report_interval",
                            interval: 15 * X.Z.Millis.MINUTE,
                        });
            }
            J.ZP.on("REQUEST_OPEN_EXTERNAL_URL", (e, t) => {
                Y.default.getDisableExternalLinkAlert() || t === W.Z.getLastURL()
                    ? J.ZP.send("OPEN_EXTERNAL_URL", t)
                    : y.Z.show({
                          title: ey.intl.string(ey.t.WLx4F6),
                          body: ey.intl.string(ey.t.H8O1TK),
                          secondaryConfirmText: ey.intl.string(ey.t.IwqGhU),
                          confirmText: ey.intl.string(ey.t["3PatSz"]),
                          cancelText: ey.intl.string(ey.t["ETE/oC"]),
                          onConfirmSecondary: () => {
                              _.Z.disableExternalLinkAlert();
                          },
                          onConfirm: () => J.ZP.send("OPEN_EXTERNAL_URL", t),
                      });
            });
        }
        window.addEventListener("keydown", this.onKeyDownGlobal, !0),
            window.addEventListener("keyup", this.onKeyUpGlobal, !0);
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.handleWindowResize),
            window.removeEventListener("keydown", this.onKeyDownGlobal, !0),
            window.removeEventListener("keyup", this.onKeyUpGlobal, !0),
            this.props.locked && window.removeEventListener("contextmenu", eb, !1),
            T.Z.terminate(),
            x.Z.terminate(),
            D.Z.terminate();
    }
    renderInvalidSizeMessage() {
        return (0, r.jsx)(C.Z, {
            justify: C.Z.Justify.CENTER,
            align: C.Z.Align.CENTER,
            className: eO.invalidContainer,
            children: (0, r.jsx)("div", {
                className: eO.inactiveContainer,
                children: ey.intl.format(ey.t.ketnW0, ee.OVERLAY_MIN_RESOLUTION),
            }),
        });
    }
    render() {
        let {
                locked: e,
                keybind: t,
                incompatibleApp: n,
                initialized: o,
                isPreviewingInGame: l,
                activeRegions: a,
                windowSize: c,
                voiceGuild: d,
                voiceChannelId: u,
                isOOPOverlayAvailable: h,
            } = this.props,
            { width: p, height: f } = c;
        if (0 === p || 0 === f || n || !o) return null;
        let g = e || l,
            m = R.default.getId();
        return (0, r.jsxs)("div", {
            className: eO.overlay,
            children: [
                (0, r.jsx)(ec.Z, {}),
                l &&
                    (0, r.jsx)("header", {
                        className: eO.previewingInGameHeader,
                        children: ey.intl.string(ey.t.iOq96m),
                    }),
                i,
                (!e || a.has(em.O0n.TEXT_WIDGET)) &&
                    (0, r.jsx)(eS, {
                        locked: e,
                        keybind: t,
                        onClick: e ? this.handleDeactivate : this.handleLock,
                        isPreviewingInGame: l,
                    }),
                (0, ee.validResolution)(c)
                    ? (0, r.jsx)(ea.Z, {
                          className: s()({
                              [eO.layoutLocked]: e,
                              [eO.layoutUnlocked]: !e,
                          }),
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
                        channelId: u,
                    }),
                h && (0, r.jsx)(eh.Z, { locked: e }),
                (0, r.jsx)(es.Z, {
                    locked: g,
                    keybind: t,
                }),
                (0, r.jsx)(eo.Z, {}),
                (0, r.jsx)("div", { className: eO.overlayMountPx }),
            ],
        });
    }
    constructor(e) {
        super(e),
            e_(this, "didUpdate", !1),
            e_(
                this,
                "debouncedForceUpdate",
                u()(() => {
                    this.forceUpdate();
                }, 500),
            ),
            e_(this, "handleWindowResize", () => {
                F.default.isFocusedPidOutOfProcess() ? this.forceUpdate() : this.debouncedForceUpdate();
            }),
            e_(this, "activeKeyEventShapes", []),
            e_(this, "lockEventShape", (0, $.d2)(this.props.keybindKeyCodes)),
            e_(this, "getActiveKeyEventIndex", (e) => this.activeKeyEventShapes.findIndex((t) => p()(t, e))),
            e_(this, "onKeyDownGlobal", (e) => {
                let t = ex(e),
                    n = this.getActiveKeyEventIndex(t) > -1,
                    i = [16, 17, 18, 91].includes(e.keyCode);
                n || i || this.activeKeyEventShapes.push(t),
                    this.activeKeyEventShapes.length === this.lockEventShape.length &&
                        this.lockEventShape.every((e) => this.activeKeyEventShapes.some((t) => p()(e, t))) &&
                        (e.preventDefault(), e.stopPropagation());
                let { locked: r, activeRegions: o } = this.props;
                t.keyCode === c().codes.esc && r && o.has(em.O0n.TEXT_WIDGET) && _.Z.deactivateAllRegions();
            }),
            e_(this, "onKeyUpGlobal", (e) => {
                let t = ex(e),
                    n = this.getActiveKeyEventIndex(t);
                n > -1 && this.activeKeyEventShapes.splice(n, 1);
            });
        let t = e.locked && Y.default.isPinned(em.Odu.TEXT);
        S.Z.setLayout(t ? E.Xq : E.Sr), t && S.Z.enable();
    }
}
function ej() {
    var e, t;
    let {
            locked: n,
            initialized: i,
            incompatibleApp: l,
            activeRegions: s,
            isPreviewingInGame: a,
            trackedGame: c,
        } = (0, f.cj)([Y.default], () => ({
            locked: Y.default.isLocked((0, ee.getPID)()),
            initialized: Y.default.initialized,
            incompatibleApp: Y.default.incompatibleApp,
            activeRegions: Y.default.getActiveRegions(),
            isPreviewingInGame: Y.default.isPreviewingInGame(),
            trackedGame: Y.default.getTrackedGame((0, ee.getPID)()),
        })),
        d = (0, f.e7)([K.Z], () => K.Z.windowSize()),
        u = (0, f.e7)([B.ZP], () => B.ZP.getOverlayKeybind()),
        h = (0, f.e7)([V.Z], () => V.Z.getVoiceChannelId()),
        p = (0, f.e7)([A.Z], () => A.Z.getChannel(h)),
        g = (0, f.e7)([L.Z], () => (null != p ? L.Z.getGuild(p.guild_id) : null)),
        m = (0, f.e7)([P.ZP, U.Z], () => (0, N.Z)(P.ZP, U.Z)),
        y = (0, f.e7)([z.Z], () => (0, w.Z)(z.Z)),
        O = (0, f.e7)([k.Z], () => null != k.Z.getCurrentUserActiveStream()),
        { analyticsLocations: _ } = (0, j.ZP)(Z.Z.OVERLAY),
        { showKeybindIndicators: v, dismissKeybindNotification: E } = (0, el.K)(),
        S = (null == c ? void 0 : c.fullscreenType) === b.Jx.FULLSCREEN,
        x = null != (e = null == c ? void 0 : c.oopEnabled) && e,
        C = en.v.oopEnabled,
        I = null != (t = null == c ? void 0 : c.hasChangedRenderMode) && t,
        { useContextualNudge: T, disableNudge: D } = (0, er.J0)("OverlaySetup");
    return (
        o.useEffect(() => {
            i && (0, er.F3)();
        }, [i]),
        (0, r.jsx)(j.Gt, {
            value: _,
            children: (0, r.jsx)(eZ, {
                locked: n,
                initialized: i,
                incompatibleApp: l,
                activeRegions: s,
                isPreviewingInGame: a,
                windowSize: d,
                keybind: null != u ? (0, $.BB)(u.shortcut, !0) : "???",
                keybindKeyCodes: null != u ? u.shortcut : [],
                connectedToVoice: null != h,
                voiceChannelId: null != p ? p.id : null,
                voiceGuild: g,
                game: m,
                canGoLive: y,
                isStreaming: O,
                showKeybindNotification: v,
                dismissKeybindNotification: E,
                isOOPOverlayAvailable: (!T || (C && x && S && !I)) && !D,
            }),
        })
    );
}
