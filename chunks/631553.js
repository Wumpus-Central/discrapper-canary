let i;
n.d(t, { Z: () => eC }), n(539854);
var r = n(951288),
    s = n(647438),
    o = n(120356),
    l = n.n(o),
    a = n(921738),
    c = n.n(a),
    d = n(954955),
    u = n.n(d),
    p = n(498607),
    h = n.n(p),
    f = n(442837),
    g = n(704215),
    m = n(481060),
    y = n(668781),
    _ = n(239091),
    O = n(13245),
    v = n(425493),
    b = n(593472),
    E = n(951483),
    x = n(714338),
    S = n(185666),
    Z = n(100527),
    C = n(906732),
    j = n(600164);
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
    J = n(358085),
    q = n(998502),
    Q = n(378799),
    $ = n(13140),
    ee = n(145597),
    et = n(658785),
    en = n(454991),
    ei = n(837268),
    er = n(32300),
    es = n(681603),
    eo = n(358446),
    el = n(348733),
    ea = n(312178),
    ec = n(708383),
    ed = n(923532),
    eu = n(107200),
    ep = n(983660),
    eh = n(624864),
    ef = n(987650),
    eg = n(757744),
    em = n(981631),
    ey = n(388032),
    e_ = n(722363);
function eO(e, t, n) {
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
    (0, _.jW)(e, async () => {
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
                                eO(e, t, n[t]);
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
J.isPlatformEmbedded;
let ex = (e) => {
        let { keybind: t, onClick: n, isPreviewingInGame: i, locked: s } = e,
            o = s ? m.P3F : "div";
        return (0, r.jsx)(o, {
            className: l()(e_.overlayBackground, {
                [e_.overlayActive]: !s,
                [e_.overlayLocked]: s,
                [e_.previewMode]: !s && i,
            }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: i, button: r } = e;
                r === em.AeJ.PRIMARY && t === i && n();
            },
            onContextMenu: eE,
            children: s
                ? null
                : (0, r.jsx)("div", {
                      className: e_.closeContainer,
                      children: (0, r.jsx)(v.Z, {
                          variant: v.Z.Variants.BOLD,
                          keybind: t,
                          closeAction: n,
                      }),
                  }),
        });
    },
    eS = (e) => {
        let { keyCode: t, shiftKey: n, metaKey: i, altKey: r, ctrlKey: s } = e;
        return {
            keyCode: t,
            shiftKey: n,
            metaKey: i,
            altKey: r,
            ctrlKey: s,
        };
    };
class eZ extends s.Component {
    handleLock() {
        (0, m.$sL)() || G.Z.isOpen() || O.Z.setInputLocked(!0, (0, ee.getPID)());
    }
    handleDeactivate() {
        O.Z.deactivateAllRegions();
    }
    componentDidMount() {
        O.Z.startSession(), T.Z.initialize(), S.Z.initialize(), D.Z.initialize();
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
                    O.Z.track(em.rMx.OVERLAY_LOCKED, { unlocked_duration: e }), (ev = null);
                }
                x.Z.disable(),
                    (this.activeKeyEventShapes = []),
                    Y.default.isPinned(em.Odu.TEXT) && (x.Z.setLayout(E.Xq), x.Z.enable());
            } else
                e.locked &&
                    !this.props.locked &&
                    (window.removeEventListener("contextmenu", eb, !1),
                    null == ev && ((ev = Date.now()), O.Z.track(em.rMx.OVERLAY_UNLOCKED)),
                    x.Z.disable(),
                    (this.activeKeyEventShapes = []),
                    x.Z.setLayout(E.Sr),
                    x.Z.enable());
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
                voiceGuild: s,
                voiceChannelId: o,
                game: l,
                showKeybindNotification: a,
                dismissKeybindNotification: c,
            } = this.props;
        O.Z.track(em.rMx.OVERLAY_INITIALIZED, {
            voice_widget_connected: t,
            text_widget_connected: Y.default.isPinned(em.Odu.TEXT),
            overlay_render_method: ei.gl[ei.gl.Hook],
            unpinned_widget_types: M.Z.getAllUnpinnedPinnedWidgets(ee.OVERLAY_LAYOUT_ID),
        }),
            et.Z.trackExposure({ location: "Overlay" });
        let d = i && !r && null != l,
            u = t && null != s && null != o;
        (0, I.zu)(g.z.OVERLAY_OOP_WELCOME_SWITCH_FROM_IP_NUX) || (0, I.Q3)(g.z.OVERLAY_OOP_WELCOME_SWITCH_FROM_IP_NUX);
        let p = eh.Z.isNotificationDisabled(ef.n0.WelcomeNudge),
            h = eh.Z.isNotificationDisabled(ef.n0.GoLiveNudge);
        if (
            (p || (e = { type: ef.nc.WELCOME }),
            a && !p
                ? (e = {
                      type: ef.nc.KEYBIND_INDICATORS,
                      markAsDismissed: c,
                  })
                : d && u && !h
                  ? (e = {
                        type: ef.nc.GO_LIVE_VOICE,
                        game: l,
                        voiceChannelId: o,
                        voiceGuild: s,
                    })
                  : d &&
                    !h &&
                    (e = {
                        type: ef.nc.GO_LIVE_NON_VOICE,
                        game: l,
                    }),
            setTimeout(async () => {
                await (0, Q.s5)(), null != e ? O.Z.overlayMounted(e) : O.Z.overlayMounted();
            }, 128),
            window.addEventListener("resize", this.handleWindowResize),
            n && window.addEventListener("contextmenu", eb, !1),
            J.isPlatformEmbedded)
        ) {
            let e = (0, H.M)();
            if (null == e) return;
            if (void 0 !== e.setPerfInfoCallback) {
                var f;
                e.setPerfInfoCallback((e) => {
                    O.Z.track(em.rMx.OVERLAY_PERF_INFO, e);
                }),
                    null == (f = e.broadcastCommand) ||
                        f.call(e, {
                            message: "set_perf_report_interval",
                            interval: 15 * X.Z.Millis.MINUTE,
                        });
            }
            q.ZP.on("REQUEST_OPEN_EXTERNAL_URL", (e, t) => {
                Y.default.getDisableExternalLinkAlert() || t === W.Z.getLastURL()
                    ? q.ZP.send("OPEN_EXTERNAL_URL", t)
                    : y.Z.show({
                          title: ey.intl.string(ey.t.WLx4Fx),
                          body: ey.intl.string(ey.t.H8O1TE),
                          secondaryConfirmText: ey.intl.string(ey.t.IwqGhY),
                          confirmText: ey.intl.string(ey.t["3PatS0"]),
                          cancelText: ey.intl.string(ey.t["ETE/oK"]),
                          onConfirmSecondary: () => {
                              O.Z.disableExternalLinkAlert();
                          },
                          onConfirm: () => q.ZP.send("OPEN_EXTERNAL_URL", t),
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
            S.Z.terminate(),
            D.Z.terminate();
    }
    renderInvalidSizeMessage() {
        return (0, r.jsx)(j.Z, {
            justify: j.Z.Justify.CENTER,
            align: j.Z.Align.CENTER,
            className: e_.invalidContainer,
            children: (0, r.jsx)("div", {
                className: e_.inactiveContainer,
                children: ey.intl.format(ey.t.ketnW1, ee.OVERLAY_MIN_RESOLUTION),
            }),
        });
    }
    render() {
        let {
                locked: e,
                keybind: t,
                incompatibleApp: n,
                initialized: s,
                isPreviewingInGame: o,
                activeRegions: a,
                windowSize: c,
                voiceGuild: d,
                voiceChannelId: u,
                isOOPOverlayAvailable: p,
            } = this.props,
            { width: h, height: f } = c;
        if (0 === h || 0 === f || n || !s) return null;
        let g = e || o,
            m = R.default.getId();
        return (0, r.jsxs)("div", {
            className: e_.overlay,
            children: [
                (0, r.jsx)(ec.Z, {}),
                o &&
                    (0, r.jsx)("header", {
                        className: e_.previewingInGameHeader,
                        children: ey.intl.string(ey.t.iOq96u),
                    }),
                i,
                (!e || a.has(em.O0n.TEXT_WIDGET)) &&
                    (0, r.jsx)(ex, {
                        locked: e,
                        keybind: t,
                        onClick: e ? this.handleDeactivate : this.handleLock,
                        isPreviewingInGame: o,
                    }),
                (0, ee.validResolution)(c)
                    ? (0, r.jsx)(ea.Z, {
                          className: l()({
                              [e_.layoutLocked]: e,
                              [e_.layoutUnlocked]: !e,
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
                p && (0, r.jsx)(ep.Z, { locked: e }),
                (0, r.jsx)(el.Z, {
                    locked: g,
                    keybind: t,
                }),
                (0, r.jsx)(es.Z, {}),
                (0, r.jsx)("div", { className: e_.overlayMountPx }),
            ],
        });
    }
    constructor(e) {
        super(e),
            eO(this, "didUpdate", !1),
            eO(this, "handleWindowResize", () => {
                F.default.isFocusedPidOutOfProcess()
                    ? this.forceUpdate()
                    : u()(() => {
                          this.forceUpdate();
                      }, 500);
            }),
            eO(this, "activeKeyEventShapes", []),
            eO(this, "lockEventShape", (0, $.d2)(this.props.keybindKeyCodes)),
            eO(this, "getActiveKeyEventIndex", (e) => this.activeKeyEventShapes.findIndex((t) => h()(t, e))),
            eO(this, "onKeyDownGlobal", (e) => {
                let t = eS(e),
                    n = this.getActiveKeyEventIndex(t) > -1,
                    i = [16, 17, 18, 91].includes(e.keyCode);
                n || i || this.activeKeyEventShapes.push(t),
                    this.activeKeyEventShapes.length === this.lockEventShape.length &&
                        this.lockEventShape.every((e) => this.activeKeyEventShapes.some((t) => h()(e, t))) &&
                        (e.preventDefault(), e.stopPropagation());
                let { locked: r, activeRegions: s } = this.props;
                t.keyCode === c().codes.esc && r && s.has(em.O0n.TEXT_WIDGET) && O.Z.deactivateAllRegions();
            }),
            eO(this, "onKeyUpGlobal", (e) => {
                let t = eS(e),
                    n = this.getActiveKeyEventIndex(t);
                n > -1 && this.activeKeyEventShapes.splice(n, 1);
            });
        let t = e.locked && Y.default.isPinned(em.Odu.TEXT);
        x.Z.setLayout(t ? E.Xq : E.Sr), t && x.Z.enable();
    }
}
function eC() {
    var e, t;
    let {
            locked: n,
            initialized: i,
            incompatibleApp: o,
            activeRegions: l,
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
        p = (0, f.e7)([V.Z], () => V.Z.getVoiceChannelId()),
        h = (0, f.e7)([A.Z], () => A.Z.getChannel(p)),
        g = (0, f.e7)([L.Z], () => (null != h ? L.Z.getGuild(h.guild_id) : null)),
        m = (0, f.e7)([P.ZP, U.Z], () => (0, N.Z)(P.ZP, U.Z)),
        y = (0, f.e7)([z.Z], () => (0, w.Z)(z.Z)),
        _ = (0, f.e7)([k.Z], () => null != k.Z.getCurrentUserActiveStream()),
        { analyticsLocations: O } = (0, C.ZP)(Z.Z.OVERLAY),
        { showKeybindIndicators: v, dismissKeybindNotification: E } = (0, eo.K)(),
        x = (null == c ? void 0 : c.fullscreenType) === b.Jx.FULLSCREEN,
        S = null != (e = null == c ? void 0 : c.oopEnabled) && e,
        j = en.v.oopEnabled,
        I = null != (t = null == c ? void 0 : c.hasChangedRenderMode) && t,
        { useContextualNudge: T, disableNudge: D } = (0, er.J0)("OverlaySetup");
    return (
        s.useEffect(() => {
            i && (0, er.F3)();
        }, [i]),
        (0, r.jsx)(C.Gt, {
            value: O,
            children: (0, r.jsx)(eZ, {
                locked: n,
                initialized: i,
                incompatibleApp: o,
                activeRegions: l,
                isPreviewingInGame: a,
                windowSize: d,
                keybind: null != u ? (0, $.BB)(u.shortcut, !0) : "???",
                keybindKeyCodes: null != u ? u.shortcut : [],
                connectedToVoice: null != p,
                voiceChannelId: null != h ? h.id : null,
                voiceGuild: g,
                game: m,
                canGoLive: y,
                isStreaming: _,
                showKeybindNotification: v,
                dismissKeybindNotification: E,
                isOOPOverlayAvailable: (!T || (j && S && x && !I)) && !D,
            }),
        })
    );
}
