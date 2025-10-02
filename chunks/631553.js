let i;
n.d(t, { Z: () => ej }), n(539854);
var r = n(951288),
    s = n(647438),
    o = n(120356),
    l = n.n(o),
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
    b = n(13245),
    v = n(425493),
    _ = n(593472),
    E = n(951483),
    x = n(714338),
    S = n(185666),
    C = n(100527),
    Z = n(906732),
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
    H = n(808506),
    F = n(372679),
    Y = n(237997),
    K = n(451478),
    X = n(70956),
    q = n(358085),
    J = n(998502),
    Q = n(378799),
    $ = n(13140),
    ee = n(145597),
    et = n(658785),
    en = n(486016),
    ei = n(454991),
    er = n(837268),
    es = n(32300),
    eo = n(681603),
    el = n(358446),
    ea = n(348733),
    ec = n(312178),
    ed = n(708383),
    eu = n(923532),
    eh = n(107200),
    ep = n(983660),
    ef = n(624864),
    eg = n(987650),
    em = n(757744),
    ey = n(981631),
    eO = n(388032),
    eb = n(735831);
function ev(e, t, n) {
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
let e_ = null;
function eE(e) {
    e.preventDefault();
}
function ex(e) {
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
                                ev(e, t, n[t]);
                            });
                    }
                    return e;
                })({}, t)),
                (i = i = { version: em.bv }),
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
        let { keybind: t, onClick: n, isPreviewingInGame: i, locked: s } = e,
            o = s ? m.P3F : "div";
        return (0, r.jsx)(o, {
            className: l()(eb.overlayBackground, {
                [eb.overlayActive]: !s,
                [eb.overlayLocked]: s,
                [eb.previewMode]: !s && i,
            }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: i, button: r } = e;
                r === ey.AeJ.PRIMARY && t === i && n();
            },
            onContextMenu: ex,
            children: s
                ? null
                : (0, r.jsx)("div", {
                      className: eb.closeContainer,
                      children: (0, r.jsx)(v.Z, {
                          variant: v.Z.Variants.BOLD,
                          keybind: t,
                          closeAction: n,
                      }),
                  }),
        });
    },
    eC = (e) => {
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
        (0, m.$sL)() || G.Z.isOpen() || b.Z.setInputLocked(!0, (0, ee.getPID)());
    }
    handleDeactivate() {
        b.Z.deactivateAllRegions();
    }
    componentDidMount() {
        b.Z.startSession(), T.Z.initialize(), S.Z.initialize(), D.Z.initialize();
    }
    componentDidUpdate(e) {
        let { initialized: t } = this.props;
        if (t) {
            if (t && !e.initialized) return void this.initialSetup();
            if (!e.locked && this.props.locked) {
                if ((window.addEventListener("contextmenu", eE, !1), null != e_)) {
                    let e = Date.now() - e_;
                    b.Z.track(ey.rMx.OVERLAY_LOCKED, { unlocked_duration: e }), (e_ = null);
                }
                x.Z.disable(),
                    (this.activeKeyEventShapes = []),
                    Y.default.isPinned(ey.Odu.TEXT) && (x.Z.setLayout(E.Xq), x.Z.enable());
            } else
                e.locked &&
                    !this.props.locked &&
                    (window.removeEventListener("contextmenu", eE, !1),
                    null == e_ && ((e_ = Date.now()), b.Z.track(ey.rMx.OVERLAY_UNLOCKED)),
                    x.Z.disable(),
                    (this.activeKeyEventShapes = []),
                    x.Z.setLayout(E.Sr),
                    x.Z.enable());
            e.keybindKeyCodes !== this.props.keybindKeyCodes &&
                (this.lockEventShape = (0, $.d2)(this.props.keybindKeyCodes));
        }
    }
    initialSetup() {
        let {
            connectedToVoice: e,
            locked: t,
            canGoLive: n,
            isStreaming: i,
            voiceGuild: r,
            voiceChannelId: s,
            game: o,
            showKeybindNotification: l,
            dismissKeybindNotification: a,
            isOOPOverlayAvailable: c,
        } = this.props;
        b.Z.track(ey.rMx.OVERLAY_INITIALIZED, {
            voice_widget_connected: e,
            text_widget_connected: Y.default.isPinned(ey.Odu.TEXT),
            overlay_render_method: er.gl[er.gl.Hook],
            unpinned_widget_types: M.Z.getAllUnpinnedPinnedWidgets(ee.OVERLAY_LAYOUT_ID),
        }),
            et.Z.trackExposure({ location: "Overlay" });
        let d = n && !i && null != o,
            u = e && null != r && null != s,
            h = (0, I.zu)(g.z.OVERLAY_OOP_WELCOME_SWITCH_FROM_IP_NUX),
            p = ef.Z.isNotificationDisabled(en.OverlayNotificationDisabledSetting.WELCOME_GENERAL),
            f = ef.Z.isNotificationDisabled(en.OverlayNotificationDisabledSetting.GO_LIVE_NUDGE),
            m = [];
        if (
            (p ||
                (m.push({ type: eg.nc.WELCOME }),
                c
                    ? m.push({
                          type: eg.nc.OOP_WELCOME,
                          game: null != o ? o : void 0,
                          isFirstTimeNux: !h,
                      })
                    : l
                      ? m.push({
                            type: eg.nc.KEYBIND_INDICATORS,
                            markAsDismissed: a,
                        })
                      : d && u && !f
                        ? m.push({
                              type: eg.nc.GO_LIVE_VOICE,
                              game: o,
                              voiceChannelId: s,
                              voiceGuild: r,
                          })
                        : d &&
                          !f &&
                          m.push({
                              type: eg.nc.GO_LIVE_NON_VOICE,
                              game: o,
                          })),
            setTimeout(async () => {
                if ((await (0, Q.s5)(), m.length > 0)) {
                    let e = m[m.length - 1];
                    b.Z.overlayMounted(e);
                } else b.Z.overlayMounted();
            }, 128),
            window.addEventListener("resize", this.handleWindowResize),
            t && window.addEventListener("contextmenu", eE, !1),
            q.isPlatformEmbedded)
        ) {
            let e = (0, F.M)();
            if (null == e) return;
            if (void 0 !== e.setPerfInfoCallback) {
                var O;
                e.setPerfInfoCallback((e) => {
                    b.Z.track(ey.rMx.OVERLAY_PERF_INFO, e);
                }),
                    null == (O = e.broadcastCommand) ||
                        O.call(e, {
                            message: "set_perf_report_interval",
                            interval: 15 * X.Z.Millis.MINUTE,
                        });
            }
            J.ZP.on("REQUEST_OPEN_EXTERNAL_URL", (e, t) => {
                Y.default.getDisableExternalLinkAlert() || t === W.Z.getLastURL()
                    ? J.ZP.send("OPEN_EXTERNAL_URL", t)
                    : y.Z.show({
                          title: eO.intl.string(eO.t.WLx4Fx),
                          body: eO.intl.string(eO.t.H8O1TE),
                          secondaryConfirmText: eO.intl.string(eO.t.IwqGhY),
                          confirmText: eO.intl.string(eO.t["3PatS0"]),
                          cancelText: eO.intl.string(eO.t["ETE/oK"]),
                          onConfirmSecondary: () => {
                              b.Z.disableExternalLinkAlert();
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
            this.props.locked && window.removeEventListener("contextmenu", eE, !1),
            T.Z.terminate(),
            S.Z.terminate(),
            D.Z.terminate();
    }
    renderInvalidSizeMessage() {
        return (0, r.jsx)(j.Z, {
            justify: j.Z.Justify.CENTER,
            align: j.Z.Align.CENTER,
            className: eb.invalidContainer,
            children: (0, r.jsx)("div", {
                className: eb.inactiveContainer,
                children: eO.intl.format(eO.t.ketnW1, ee.OVERLAY_MIN_RESOLUTION),
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
                isOOPOverlayAvailable: h,
            } = this.props,
            { width: p, height: f } = c;
        if (0 === p || 0 === f || n || !s) return null;
        let g = e || o,
            m = R.default.getId();
        return (0, r.jsxs)("div", {
            className: eb.overlay,
            children: [
                (0, r.jsx)(ed.Z, {}),
                o &&
                    (0, r.jsx)("header", {
                        className: eb.previewingInGameHeader,
                        children: eO.intl.string(eO.t.iOq96u),
                    }),
                i,
                (!e || a.has(ey.O0n.TEXT_WIDGET)) &&
                    (0, r.jsx)(eS, {
                        locked: e,
                        keybind: t,
                        onClick: e ? this.handleDeactivate : this.handleLock,
                        isPreviewingInGame: o,
                    }),
                (0, ee.validResolution)(c)
                    ? (0, r.jsx)(ec.Z, {
                          className: l()({
                              [eb.layoutLocked]: e,
                              [eb.layoutUnlocked]: !e,
                          }),
                      })
                    : e
                      ? null
                      : this.renderInvalidSizeMessage(),
                (0, r.jsx)(eh.Z, {}),
                null != d &&
                    null != u &&
                    (0, r.jsx)(eu.Z, {
                        streamerId: m,
                        guildId: d.id,
                        channelId: u,
                    }),
                h && (0, r.jsx)(ep.Z, { locked: e }),
                (0, r.jsx)(ea.Z, {
                    locked: g,
                    keybind: t,
                }),
                (0, r.jsx)(eo.Z, {}),
            ],
        });
    }
    constructor(e) {
        super(e),
            ev(this, "handleWindowResize", () => {
                H.default.isFocusedPidOutOfProcess()
                    ? this.forceUpdate()
                    : u()(() => {
                          this.forceUpdate();
                      }, 500);
            }),
            ev(this, "activeKeyEventShapes", []),
            ev(this, "lockEventShape", (0, $.d2)(this.props.keybindKeyCodes)),
            ev(this, "getActiveKeyEventIndex", (e) => this.activeKeyEventShapes.findIndex((t) => p()(t, e))),
            ev(this, "onKeyDownGlobal", (e) => {
                let t = eC(e),
                    n = this.getActiveKeyEventIndex(t) > -1,
                    i = [16, 17, 18, 91].includes(e.keyCode);
                n || i || this.activeKeyEventShapes.push(t),
                    this.activeKeyEventShapes.length === this.lockEventShape.length &&
                        this.lockEventShape.every((e) => this.activeKeyEventShapes.some((t) => p()(e, t))) &&
                        (e.preventDefault(), e.stopPropagation());
                let { locked: r, activeRegions: s } = this.props;
                t.keyCode === c().codes.esc && r && s.has(ey.O0n.TEXT_WIDGET) && b.Z.deactivateAllRegions();
            }),
            ev(this, "onKeyUpGlobal", (e) => {
                let t = eC(e),
                    n = this.getActiveKeyEventIndex(t);
                n > -1 && this.activeKeyEventShapes.splice(n, 1);
            });
        let t = e.locked && Y.default.isPinned(ey.Odu.TEXT);
        x.Z.setLayout(t ? E.Xq : E.Sr), t && x.Z.enable();
    }
}
function ej() {
    var e, t;
    let {
            locked: n,
            initialized: i,
            incompatibleApp: s,
            activeRegions: o,
            isPreviewingInGame: l,
            trackedGame: a,
        } = (0, f.cj)([Y.default], () => ({
            locked: Y.default.isLocked((0, ee.getPID)()),
            initialized: Y.default.initialized,
            incompatibleApp: Y.default.incompatibleApp,
            activeRegions: Y.default.getActiveRegions(),
            isPreviewingInGame: Y.default.isPreviewingInGame(),
            trackedGame: Y.default.getTrackedGame((0, ee.getPID)()),
        })),
        c = (0, f.e7)([K.Z], () => K.Z.windowSize()),
        d = (0, f.e7)([B.ZP], () => B.ZP.getOverlayKeybind()),
        u = (0, f.e7)([V.Z], () => V.Z.getVoiceChannelId()),
        h = (0, f.e7)([A.Z], () => A.Z.getChannel(u)),
        p = (0, f.e7)([L.Z], () => (null != h ? L.Z.getGuild(h.guild_id) : null)),
        g = (0, f.e7)([P.ZP, U.Z], () => (0, N.Z)(P.ZP, U.Z)),
        m = (0, f.e7)([z.Z], () => (0, w.Z)(z.Z)),
        y = (0, f.e7)([k.Z], () => null != k.Z.getCurrentUserActiveStream()),
        { analyticsLocations: O } = (0, Z.ZP)(C.Z.OVERLAY),
        { showKeybindIndicators: b, dismissKeybindNotification: v } = (0, el.K)(),
        E = (null == a ? void 0 : a.fullscreenType) === _.Jx.FULLSCREEN,
        x = null != (e = null == a ? void 0 : a.oopEnabled) && e,
        S = ei.v.oopEnabled,
        j = null != (t = null == a ? void 0 : a.hasChangedRenderMode) && t,
        { useContextualNudge: I, disableNudge: T } = (0, es.J0)("OverlaySetup");
    return (0, r.jsx)(Z.Gt, {
        value: O,
        children: (0, r.jsx)(eZ, {
            locked: n,
            initialized: i,
            incompatibleApp: s,
            activeRegions: o,
            isPreviewingInGame: l,
            windowSize: c,
            keybind: null != d ? (0, $.BB)(d.shortcut, !0) : "???",
            keybindKeyCodes: null != d ? d.shortcut : [],
            connectedToVoice: null != u,
            voiceChannelId: null != h ? h.id : null,
            voiceGuild: p,
            game: g,
            canGoLive: m,
            isStreaming: y,
            showKeybindNotification: b,
            dismissKeybindNotification: v,
            isOOPOverlayAvailable: (!I || (S && x && E && !j)) && !T,
        }),
    });
}
