let i;
n.d(t, { Z: () => eE }), n(539854);
var r = n(54381),
    s = n(473749),
    o = n(120356),
    l = n.n(o),
    a = n(921738),
    c = n.n(a),
    d = n(954955),
    u = n.n(d),
    h = n(498607),
    p = n.n(h),
    f = n(442837),
    g = n(481060),
    m = n(239091),
    _ = n(13245),
    y = n(425493),
    v = n(951483),
    b = n(714338),
    O = n(185666),
    E = n(100527),
    x = n(906732),
    S = n(600164);
n(70097);
var Z = n(594190),
    j = n(74299),
    C = n(989941),
    I = n(377400),
    P = n(329557),
    w = n(199902),
    N = n(314897),
    T = n(592125),
    D = n(430824),
    k = n(355863),
    R = n(131951),
    A = n(944486),
    L = n(618541),
    M = n(449224),
    z = n(574254),
    V = n(556296),
    W = n(808506),
    U = n(372679),
    G = n(237997),
    B = n(451478),
    H = n(70956),
    F = n(358085),
    Y = n(998502),
    K = n(378799),
    X = n(13140),
    J = n(145597),
    q = n(658785),
    Q = n(837268),
    $ = n(32300),
    ee = n(681603),
    et = n(358446),
    en = n(348733),
    ei = n(312178),
    er = n(708383),
    es = n(923532),
    eo = n(107200),
    el = n(624864),
    ea = n(987650),
    ec = n(757744),
    ed = n(981631),
    eu = n(388032),
    eh = n(722363);
function ep(e, t, n) {
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
function ef(e) {
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
                ep(e, t, n[t]);
            });
    }
    return e;
}
function eg(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
(f.ZP.PersistedStore.disableWrites = __OVERLAY__), f.ZP.initialize();
let em = null;
function e_(e) {
    e.preventDefault();
}
function ey(e) {
    (0, m.jW)(e, async () => {
        let { default: e } = await n.e("92780").then(n.bind(n, 930381));
        return (t) => (0, r.jsx)(e, eg(ef({}, t), { version: ec.bv }));
    });
}
F.isPlatformEmbedded;
let ev = (e) => {
        let { keybind: t, onClick: n, isPreviewingInGame: i, locked: s } = e,
            o = s ? g.P3F : "div";
        return (0, r.jsx)(o, {
            className: l()(eh.overlayBackground, {
                [eh.overlayActive]: !s,
                [eh.overlayLocked]: s,
                [eh.previewMode]: !s && i,
            }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: i, button: r } = e;
                r === ed.AeJ.PRIMARY && t === i && n();
            },
            onContextMenu: ey,
            children: s
                ? null
                : (0, r.jsx)("div", {
                      className: eh.closeContainer,
                      children: (0, r.jsx)(y.Z, {
                          variant: y.Z.Variants.BOLD,
                          keybind: t,
                          closeAction: n,
                      }),
                  }),
        });
    },
    eb = (e) => {
        let { keyCode: t, shiftKey: n, metaKey: i, altKey: r, ctrlKey: s } = e;
        return {
            keyCode: t,
            shiftKey: n,
            metaKey: i,
            altKey: r,
            ctrlKey: s,
        };
    };
class eO extends s.Component {
    handleLock() {
        (0, g.$sL)() || z.Z.isOpen() || _.Z.setInputLocked(!0, (0, J.getPID)());
    }
    handleDeactivate() {
        _.Z.deactivateAllRegions();
    }
    componentDidMount() {
        _.Z.startSession(), I.Z.initialize(), O.Z.initialize(), P.Z.initialize();
    }
    componentDidUpdate(e) {
        let { initialized: t } = this.props;
        if (t) {
            if (t && !this.didUpdate) {
                (this.didUpdate = !0), this.initialSetup();
                return;
            }
            if (!e.locked && this.props.locked) {
                if ((window.addEventListener("contextmenu", e_, !1), null != em)) {
                    let e = Date.now() - em;
                    _.Z.track(ed.rMx.OVERLAY_LOCKED, { unlocked_duration: e }), (em = null);
                }
                b.Z.disable(),
                    (this.activeKeyEventShapes = []),
                    G.default.isPinned(ed.Odu.TEXT) && (b.Z.setLayout(v.Xq), b.Z.enable());
            } else
                e.locked &&
                    !this.props.locked &&
                    (window.removeEventListener("contextmenu", e_, !1),
                    null == em && ((em = Date.now()), _.Z.track(ed.rMx.OVERLAY_UNLOCKED)),
                    b.Z.disable(),
                    (this.activeKeyEventShapes = []),
                    b.Z.setLayout(v.Sr),
                    b.Z.enable());
            e.keybindKeyCodes !== this.props.keybindKeyCodes &&
                (this.lockEventShape = (0, X.d2)(this.props.keybindKeyCodes));
        }
    }
    initialSetup() {
        let e,
            {
                connectedToVoice: t,
                locked: i,
                canGoLive: s,
                isStreaming: o,
                voiceGuild: l,
                voiceChannelId: a,
                game: c,
                showKeybindNotification: d,
                dismissKeybindNotification: u,
            } = this.props;
        _.Z.track(ed.rMx.OVERLAY_INITIALIZED, {
            voice_widget_connected: t,
            text_widget_connected: G.default.isPinned(ed.Odu.TEXT),
            overlay_render_method: Q.gl[Q.gl.Hook],
            unpinned_widget_types: k.Z.getAllUnpinnedPinnedWidgets(J.OVERLAY_LAYOUT_ID),
        }),
            q.Z.trackExposure({ location: "Overlay" });
        let h = s && !o && null != c,
            p = t && null != l && null != a,
            f = el.Z.isNotificationDisabled(ea.n0.WelcomeNudge),
            m = el.Z.isNotificationDisabled(ea.n0.GoLiveNudge);
        if (
            (f || (e = { type: ea.nc.WELCOME }),
            d && !f
                ? (e = {
                      type: ea.nc.KEYBIND_INDICATORS,
                      markAsDismissed: u,
                  })
                : h && p && !m
                  ? (e = {
                        type: ea.nc.GO_LIVE_VOICE,
                        game: c,
                        voiceChannelId: a,
                        voiceGuild: l,
                    })
                  : h &&
                    !m &&
                    (e = {
                        type: ea.nc.GO_LIVE_NON_VOICE,
                        game: c,
                    }),
            setTimeout(async () => {
                await (0, K.s5)(), null != e ? _.Z.overlayMounted(e) : _.Z.overlayMounted();
            }, 128),
            window.addEventListener("resize", this.handleWindowResize),
            i && window.addEventListener("contextmenu", e_, !1),
            F.isPlatformEmbedded)
        ) {
            let e = (0, U.M)();
            if (null == e) return;
            if (void 0 !== e.setPerfInfoCallback) {
                var y;
                e.setPerfInfoCallback((e) => {
                    _.Z.track(ed.rMx.OVERLAY_PERF_INFO, e);
                }),
                    null == (y = e.broadcastCommand) ||
                        y.call(e, {
                            message: "set_perf_report_interval",
                            interval: 15 * H.Z.Millis.MINUTE,
                        });
            }
            Y.ZP.on("REQUEST_OPEN_EXTERNAL_URL", (e, t) => {
                G.default.getDisableExternalLinkAlert() || t === L.Z.getLastURL()
                    ? Y.ZP.send("OPEN_EXTERNAL_URL", t)
                    : (0, g.ZDy)(async () => {
                          let { default: e } = await n.e("32493").then(n.bind(n, 939791));
                          return (n) => (0, r.jsx)(e, eg(ef({}, n), { url: t }));
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
            this.props.locked && window.removeEventListener("contextmenu", e_, !1),
            I.Z.terminate(),
            O.Z.terminate(),
            P.Z.terminate();
    }
    renderInvalidSizeMessage() {
        return (0, r.jsx)(S.Z, {
            justify: S.Z.Justify.CENTER,
            align: S.Z.Align.CENTER,
            className: eh.invalidContainer,
            children: (0, r.jsx)("div", {
                className: eh.inactiveContainer,
                children: eu.intl.format(eu.t.ketnW0, J.OVERLAY_MIN_RESOLUTION),
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
            } = this.props,
            { width: h, height: p } = c;
        if (0 === h || 0 === p || n || !s) return null;
        let f = e || o,
            g = N.default.getId();
        return (0, r.jsxs)("div", {
            className: eh.overlay,
            children: [
                (0, r.jsx)(er.Z, {}),
                o &&
                    (0, r.jsx)("header", {
                        className: eh.previewingInGameHeader,
                        children: eu.intl.string(eu.t.iOq96m),
                    }),
                i,
                (!e || a.has(ed.O0n.TEXT_WIDGET)) &&
                    (0, r.jsx)(ev, {
                        locked: e,
                        keybind: t,
                        onClick: e ? this.handleDeactivate : this.handleLock,
                        isPreviewingInGame: o,
                    }),
                (0, J.validResolution)(c)
                    ? (0, r.jsx)(ei.Z, {
                          className: l()({
                              [eh.layoutLocked]: e,
                              [eh.layoutUnlocked]: !e,
                          }),
                      })
                    : e
                      ? null
                      : this.renderInvalidSizeMessage(),
                (0, r.jsx)(eo.Z, {}),
                null != d &&
                    null != u &&
                    (0, r.jsx)(es.Z, {
                        streamerId: g,
                        guildId: d.id,
                        channelId: u,
                    }),
                (0, r.jsx)(en.Z, {
                    locked: f,
                    keybind: t,
                }),
                (0, r.jsx)(ee.Z, {}),
                (0, r.jsx)("div", { className: eh.overlayMountPx }),
            ],
        });
    }
    constructor(e) {
        super(e),
            ep(this, "didUpdate", !1),
            ep(
                this,
                "debouncedForceUpdate",
                u()(() => {
                    this.forceUpdate();
                }, 500),
            ),
            ep(this, "handleWindowResize", () => {
                W.default.isFocusedPidOutOfProcess() ? this.forceUpdate() : this.debouncedForceUpdate();
            }),
            ep(this, "activeKeyEventShapes", []),
            ep(this, "lockEventShape", (0, X.d2)(this.props.keybindKeyCodes)),
            ep(this, "getActiveKeyEventIndex", (e) => this.activeKeyEventShapes.findIndex((t) => p()(t, e))),
            ep(this, "onKeyDownGlobal", (e) => {
                let t = eb(e),
                    n = this.getActiveKeyEventIndex(t) > -1,
                    i = [16, 17, 18, 91].includes(e.keyCode);
                n || i || this.activeKeyEventShapes.push(t),
                    this.activeKeyEventShapes.length === this.lockEventShape.length &&
                        this.lockEventShape.every((e) => this.activeKeyEventShapes.some((t) => p()(e, t))) &&
                        (e.preventDefault(), e.stopPropagation());
                let { locked: r, activeRegions: s } = this.props;
                t.keyCode === c().codes.esc && r && s.has(ed.O0n.TEXT_WIDGET) && _.Z.deactivateAllRegions();
            }),
            ep(this, "onKeyUpGlobal", (e) => {
                let t = eb(e),
                    n = this.getActiveKeyEventIndex(t);
                n > -1 && this.activeKeyEventShapes.splice(n, 1);
            });
        let t = e.locked && G.default.isPinned(ed.Odu.TEXT);
        b.Z.setLayout(t ? v.Xq : v.Sr), t && b.Z.enable();
    }
}
function eE() {
    let {
            locked: e,
            initialized: t,
            incompatibleApp: n,
            activeRegions: i,
            isPreviewingInGame: o,
        } = (0, f.cj)([G.default], () => ({
            locked: G.default.isLocked((0, J.getPID)()),
            initialized: G.default.initialized,
            incompatibleApp: G.default.incompatibleApp,
            activeRegions: G.default.getActiveRegions(),
            isPreviewingInGame: G.default.isPreviewingInGame(),
        })),
        l = (0, f.e7)([B.Z], () => B.Z.windowSize()),
        a = (0, f.e7)([V.ZP], () => V.ZP.getOverlayKeybind()),
        c = (0, f.e7)([A.Z], () => A.Z.getVoiceChannelId()),
        d = (0, f.e7)([T.Z], () => T.Z.getChannel(c)),
        u = (0, f.e7)([D.Z], () => (null != d ? D.Z.getGuild(d.guild_id) : null)),
        h = (0, f.e7)([Z.ZP, M.Z], () => (0, C.Z)(Z.ZP, M.Z)),
        p = (0, f.e7)([R.Z], () => (0, j.Z)(R.Z)),
        g = (0, f.e7)([w.Z], () => null != w.Z.getCurrentUserActiveStream()),
        { analyticsLocations: m } = (0, x.ZP)(E.Z.OVERLAY),
        { showKeybindIndicators: _, dismissKeybindNotification: y } = (0, et.K)();
    return (
        s.useEffect(() => {
            t && (0, $.F3)();
        }, [t]),
        (0, r.jsx)(x.Gt, {
            value: m,
            children: (0, r.jsx)(eO, {
                locked: e,
                initialized: t,
                incompatibleApp: n,
                activeRegions: i,
                isPreviewingInGame: o,
                windowSize: l,
                keybind: null != a ? (0, X.BB)(a.shortcut, !0) : "???",
                keybindKeyCodes: null != a ? a.shortcut : [],
                connectedToVoice: null != c,
                voiceChannelId: null != d ? d.id : null,
                voiceGuild: u,
                game: h,
                canGoLive: p,
                isStreaming: g,
                showKeybindNotification: _,
                dismissKeybindNotification: y,
            }),
        })
    );
}
