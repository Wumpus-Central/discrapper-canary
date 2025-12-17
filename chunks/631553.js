let i;
n.d(t, { Z: () => ex }), n(539854);
var r = n(54381),
    a = n(473749),
    s = n(120356),
    o = n.n(s),
    l = n(921738),
    c = n.n(l),
    d = n(954955),
    u = n.n(d),
    f = n(498607),
    h = n.n(f),
    p = n(442837),
    g = n(481060),
    b = n(239091),
    m = n(13245),
    y = n(425493),
    v = n(951483),
    O = n(714338),
    E = n(185666),
    x = n(100527),
    S = n(906732),
    _ = n(600164);
n(70097);
var Z = n(594190),
    j = n(74299),
    C = n(989941),
    I = n(377400),
    P = n(329557),
    w = n(199902),
    T = n(314897),
    N = n(592125),
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
    F = n(70956),
    H = n(358085),
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
    ea = n(923532),
    es = n(107200),
    eo = n(624864),
    el = n(987650),
    ec = n(757744),
    ed = n(981631),
    eu = n(388032),
    ef = n(813653);
function eh(e, t, n) {
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
function ep(e) {
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
                eh(e, t, n[t]);
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
(p.ZP.PersistedStore.disableWrites = __OVERLAY__), p.ZP.initialize();
let eb = null;
function em(e) {
    e.preventDefault();
}
function ey(e) {
    (0, b.jW)(e, async () => {
        let { default: e } = await n.e("92780").then(n.bind(n, 930381));
        return (t) => (0, r.jsx)(e, eg(ep({}, t), { version: ec.bv }));
    });
}
H.isPlatformEmbedded;
let ev = (e) => {
        let { keybind: t, onClick: n, isPreviewingInGame: i, locked: a } = e,
            s = a ? g.P3F : "div";
        return (0, r.jsx)(s, {
            className: o()(ef.overlayBackground, {
                [ef.overlayActive]: !a,
                [ef.overlayLocked]: a,
                [ef.previewMode]: !a && i,
            }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: i, button: r } = e;
                r === ed.AeJ.PRIMARY && t === i && n();
            },
            onContextMenu: ey,
            children: a
                ? null
                : (0, r.jsx)("div", {
                      className: ef.closeContainer,
                      children: (0, r.jsx)(y.Z, {
                          variant: y.Z.Variants.BOLD,
                          keybind: t,
                          closeAction: n,
                      }),
                  }),
        });
    },
    eO = (e) => {
        let { keyCode: t, shiftKey: n, metaKey: i, altKey: r, ctrlKey: a } = e;
        return {
            keyCode: t,
            shiftKey: n,
            metaKey: i,
            altKey: r,
            ctrlKey: a,
        };
    };
class eE extends a.Component {
    handleLock() {
        (0, g.$sL)() || z.Z.isOpen() || m.Z.setInputLocked(!0, (0, J.getPID)());
    }
    handleDeactivate() {
        m.Z.deactivateAllRegions();
    }
    componentDidMount() {
        m.Z.startSession(), I.Z.initialize(), E.Z.initialize(), P.Z.initialize();
    }
    componentDidUpdate(e) {
        let { initialized: t } = this.props;
        if (t) {
            if (t && !this.didUpdate) {
                (this.didUpdate = !0), this.initialSetup();
                return;
            }
            if (!e.locked && this.props.locked) {
                if ((window.addEventListener("contextmenu", em, !1), null != eb)) {
                    let e = Date.now() - eb;
                    m.Z.track(ed.rMx.OVERLAY_LOCKED, { unlocked_duration: e }), (eb = null);
                }
                O.Z.disable(),
                    (this.activeKeyEventShapes = []),
                    G.default.isPinned(ed.Odu.TEXT) && (O.Z.setLayout(v.Xq), O.Z.enable());
            } else
                e.locked &&
                    !this.props.locked &&
                    (window.removeEventListener("contextmenu", em, !1),
                    null == eb && ((eb = Date.now()), m.Z.track(ed.rMx.OVERLAY_UNLOCKED)),
                    O.Z.disable(),
                    (this.activeKeyEventShapes = []),
                    O.Z.setLayout(v.Sr),
                    O.Z.enable());
            e.keybindKeyCodes !== this.props.keybindKeyCodes &&
                (this.lockEventShape = (0, X.d2)(this.props.keybindKeyCodes));
        }
    }
    initialSetup() {
        let e,
            {
                connectedToVoice: t,
                locked: i,
                canGoLive: a,
                isStreaming: s,
                voiceGuild: o,
                voiceChannelId: l,
                game: c,
                showKeybindNotification: d,
                dismissKeybindNotification: u,
            } = this.props;
        m.Z.track(ed.rMx.OVERLAY_INITIALIZED, {
            voice_widget_connected: t,
            text_widget_connected: G.default.isPinned(ed.Odu.TEXT),
            overlay_render_method: Q.gl[Q.gl.Hook],
            unpinned_widget_types: k.Z.getAllUnpinnedPinnedWidgets(J.OVERLAY_LAYOUT_ID),
        }),
            q.Z.trackExposure({ location: "Overlay" });
        let f = a && !s && null != c,
            h = t && null != o && null != l,
            p = eo.Z.isNotificationDisabled(el.n0.WelcomeNudge),
            b = eo.Z.isNotificationDisabled(el.n0.GoLiveNudge);
        if (
            (p || (e = { type: el.nc.WELCOME }),
            d && !p
                ? (e = {
                      type: el.nc.KEYBIND_INDICATORS,
                      markAsDismissed: u,
                  })
                : f && h && !b
                  ? (e = {
                        type: el.nc.GO_LIVE_VOICE,
                        game: c,
                        voiceChannelId: l,
                        voiceGuild: o,
                    })
                  : f &&
                    !b &&
                    (e = {
                        type: el.nc.GO_LIVE_NON_VOICE,
                        game: c,
                    }),
            setTimeout(async () => {
                await (0, K.s5)(), null != e ? m.Z.overlayMounted(e) : m.Z.overlayMounted();
            }, 128),
            window.addEventListener("resize", this.handleWindowResize),
            i && window.addEventListener("contextmenu", em, !1),
            H.isPlatformEmbedded)
        ) {
            let e = (0, U.M)();
            if (null == e) return;
            if (void 0 !== e.setPerfInfoCallback) {
                var y;
                e.setPerfInfoCallback((e) => {
                    m.Z.track(ed.rMx.OVERLAY_PERF_INFO, e);
                }),
                    null == (y = e.broadcastCommand) ||
                        y.call(e, {
                            message: "set_perf_report_interval",
                            interval: 15 * F.Z.Millis.MINUTE,
                        });
            }
            Y.ZP.on("REQUEST_OPEN_EXTERNAL_URL", (e, t) => {
                G.default.getDisableExternalLinkAlert() || t === L.Z.getLastURL()
                    ? Y.ZP.send("OPEN_EXTERNAL_URL", t)
                    : (0, g.ZDy)(async () => {
                          let { default: e } = await n.e("32493").then(n.bind(n, 939791));
                          return (n) => (0, r.jsx)(e, eg(ep({}, n), { url: t }));
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
            this.props.locked && window.removeEventListener("contextmenu", em, !1),
            I.Z.terminate(),
            E.Z.terminate(),
            P.Z.terminate();
    }
    renderInvalidSizeMessage() {
        return (0, r.jsx)(_.Z, {
            justify: _.Z.Justify.CENTER,
            align: _.Z.Align.CENTER,
            className: ef.invalidContainer,
            children: (0, r.jsx)("div", {
                className: ef.inactiveContainer,
                children: eu.intl.format(eu.t.ketnW0, J.OVERLAY_MIN_RESOLUTION),
            }),
        });
    }
    render() {
        let {
                locked: e,
                keybind: t,
                incompatibleApp: n,
                initialized: a,
                isPreviewingInGame: s,
                activeRegions: l,
                windowSize: c,
                voiceGuild: d,
                voiceChannelId: u,
            } = this.props,
            { width: f, height: h } = c;
        if (0 === f || 0 === h || n || !a) return null;
        let p = e || s,
            g = T.default.getId();
        return (0, r.jsxs)("div", {
            className: ef.overlay,
            children: [
                (0, r.jsx)(er.Z, {}),
                s &&
                    (0, r.jsx)("header", {
                        className: ef.previewingInGameHeader,
                        children: eu.intl.string(eu.t.iOq96m),
                    }),
                i,
                (!e || l.has(ed.O0n.TEXT_WIDGET)) &&
                    (0, r.jsx)(ev, {
                        locked: e,
                        keybind: t,
                        onClick: e ? this.handleDeactivate : this.handleLock,
                        isPreviewingInGame: s,
                    }),
                (0, J.validResolution)(c)
                    ? (0, r.jsx)(ei.Z, {
                          className: o()({
                              [ef.layoutLocked]: e,
                              [ef.layoutUnlocked]: !e,
                          }),
                      })
                    : e
                      ? null
                      : this.renderInvalidSizeMessage(),
                (0, r.jsx)(es.Z, {}),
                null != d &&
                    null != u &&
                    (0, r.jsx)(ea.Z, {
                        streamerId: g,
                        guildId: d.id,
                        channelId: u,
                    }),
                (0, r.jsx)(en.Z, {
                    locked: p,
                    keybind: t,
                }),
                (0, r.jsx)(ee.Z, {}),
                (0, r.jsx)("div", { className: ef.overlayMountPx }),
            ],
        });
    }
    constructor(e) {
        super(e),
            eh(this, "didUpdate", !1),
            eh(
                this,
                "debouncedForceUpdate",
                u()(() => {
                    this.forceUpdate();
                }, 500),
            ),
            eh(this, "handleWindowResize", () => {
                W.default.isFocusedPidOutOfProcess() ? this.forceUpdate() : this.debouncedForceUpdate();
            }),
            eh(this, "activeKeyEventShapes", []),
            eh(this, "lockEventShape", (0, X.d2)(this.props.keybindKeyCodes)),
            eh(this, "getActiveKeyEventIndex", (e) => this.activeKeyEventShapes.findIndex((t) => h()(t, e))),
            eh(this, "onKeyDownGlobal", (e) => {
                let t = eO(e),
                    n = this.getActiveKeyEventIndex(t) > -1,
                    i = [16, 17, 18, 91].includes(e.keyCode);
                n || i || this.activeKeyEventShapes.push(t),
                    this.activeKeyEventShapes.length === this.lockEventShape.length &&
                        this.lockEventShape.every((e) => this.activeKeyEventShapes.some((t) => h()(e, t))) &&
                        (e.preventDefault(), e.stopPropagation());
                let { locked: r, activeRegions: a } = this.props;
                t.keyCode === c().codes.esc && r && a.has(ed.O0n.TEXT_WIDGET) && m.Z.deactivateAllRegions();
            }),
            eh(this, "onKeyUpGlobal", (e) => {
                let t = eO(e),
                    n = this.getActiveKeyEventIndex(t);
                n > -1 && this.activeKeyEventShapes.splice(n, 1);
            });
        let t = e.locked && G.default.isPinned(ed.Odu.TEXT);
        O.Z.setLayout(t ? v.Xq : v.Sr), t && O.Z.enable();
    }
}
function ex() {
    let {
            locked: e,
            initialized: t,
            incompatibleApp: n,
            activeRegions: i,
            isPreviewingInGame: s,
        } = (0, p.cj)([G.default], () => ({
            locked: G.default.isLocked((0, J.getPID)()),
            initialized: G.default.initialized,
            incompatibleApp: G.default.incompatibleApp,
            activeRegions: G.default.getActiveRegions(),
            isPreviewingInGame: G.default.isPreviewingInGame(),
        })),
        o = (0, p.e7)([B.Z], () => B.Z.windowSize()),
        l = (0, p.e7)([V.ZP], () => V.ZP.getOverlayKeybind()),
        c = (0, p.e7)([A.Z], () => A.Z.getVoiceChannelId()),
        d = (0, p.e7)([N.Z], () => N.Z.getChannel(c)),
        u = (0, p.e7)([D.Z], () => (null != d ? D.Z.getGuild(d.guild_id) : null)),
        f = (0, p.e7)([Z.ZP, M.Z], () => (0, C.Z)(Z.ZP, M.Z)),
        h = (0, p.e7)([R.Z], () => (0, j.Z)(R.Z)),
        g = (0, p.e7)([w.Z], () => null != w.Z.getCurrentUserActiveStream()),
        { analyticsLocations: b } = (0, S.ZP)(x.Z.OVERLAY),
        { showKeybindIndicators: m, dismissKeybindNotification: y } = (0, et.K)();
    return (
        a.useEffect(() => {
            t && (0, $.F3)();
        }, [t]),
        (0, r.jsx)(S.Gt, {
            value: b,
            children: (0, r.jsx)(eE, {
                locked: e,
                initialized: t,
                incompatibleApp: n,
                activeRegions: i,
                isPreviewingInGame: s,
                windowSize: o,
                keybind: null != l ? (0, X.BB)(l.shortcut, !0) : "???",
                keybindKeyCodes: null != l ? l.shortcut : [],
                connectedToVoice: null != c,
                voiceChannelId: null != d ? d.id : null,
                voiceGuild: u,
                game: f,
                canGoLive: h,
                isStreaming: g,
                showKeybindNotification: m,
                dismissKeybindNotification: y,
            }),
        })
    );
}
