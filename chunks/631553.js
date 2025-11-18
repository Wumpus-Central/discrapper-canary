let i;
n.d(t, { Z: () => eE }), n(539854);
var r = n(54381),
    o = n(473749),
    l = n(120356),
    s = n.n(l),
    a = n(921738),
    c = n.n(a),
    d = n(954955),
    u = n.n(d),
    h = n(498607),
    p = n.n(h),
    f = n(442837),
    g = n(481060),
    m = n(239091),
    y = n(13245),
    b = n(425493),
    _ = n(951483),
    v = n(714338),
    O = n(185666),
    E = n(100527),
    S = n(906732),
    Z = n(600164);
n(70097);
var j = n(594190),
    x = n(74299),
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
    q = n(145597),
    J = n(658785),
    Q = n(837268),
    $ = n(32300),
    ee = n(681603),
    et = n(358446),
    en = n(348733),
    ei = n(312178),
    er = n(708383),
    eo = n(923532),
    el = n(107200),
    es = n(624864),
    ea = n(987650),
    ec = n(757744),
    ed = n(981631),
    eu = n(388032),
    eh = n(735831);
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
function ey(e) {
    e.preventDefault();
}
function eb(e) {
    (0, m.jW)(e, async () => {
        let { default: e } = await n.e("92780").then(n.bind(n, 930381));
        return (t) => (0, r.jsx)(e, eg(ef({}, t), { version: ec.bv }));
    });
}
H.isPlatformEmbedded;
let e_ = (e) => {
        let { keybind: t, onClick: n, isPreviewingInGame: i, locked: o } = e,
            l = o ? g.P3F : "div";
        return (0, r.jsx)(l, {
            className: s()(eh.overlayBackground, {
                [eh.overlayActive]: !o,
                [eh.overlayLocked]: o,
                [eh.previewMode]: !o && i,
            }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: i, button: r } = e;
                r === ed.AeJ.PRIMARY && t === i && n();
            },
            onContextMenu: eb,
            children: o
                ? null
                : (0, r.jsx)("div", {
                      className: eh.closeContainer,
                      children: (0, r.jsx)(b.Z, {
                          variant: b.Z.Variants.BOLD,
                          keybind: t,
                          closeAction: n,
                      }),
                  }),
        });
    },
    ev = (e) => {
        let { keyCode: t, shiftKey: n, metaKey: i, altKey: r, ctrlKey: o } = e;
        return {
            keyCode: t,
            shiftKey: n,
            metaKey: i,
            altKey: r,
            ctrlKey: o,
        };
    };
class eO extends o.Component {
    handleLock() {
        (0, g.$sL)() || z.Z.isOpen() || y.Z.setInputLocked(!0, (0, q.getPID)());
    }
    handleDeactivate() {
        y.Z.deactivateAllRegions();
    }
    componentDidMount() {
        y.Z.startSession(), I.Z.initialize(), O.Z.initialize(), P.Z.initialize();
    }
    componentDidUpdate(e) {
        let { initialized: t } = this.props;
        if (t) {
            if (t && !this.didUpdate) {
                (this.didUpdate = !0), this.initialSetup();
                return;
            }
            if (!e.locked && this.props.locked) {
                if ((window.addEventListener("contextmenu", ey, !1), null != em)) {
                    let e = Date.now() - em;
                    y.Z.track(ed.rMx.OVERLAY_LOCKED, { unlocked_duration: e }), (em = null);
                }
                v.Z.disable(),
                    (this.activeKeyEventShapes = []),
                    G.default.isPinned(ed.Odu.TEXT) && (v.Z.setLayout(_.Xq), v.Z.enable());
            } else
                e.locked &&
                    !this.props.locked &&
                    (window.removeEventListener("contextmenu", ey, !1),
                    null == em && ((em = Date.now()), y.Z.track(ed.rMx.OVERLAY_UNLOCKED)),
                    v.Z.disable(),
                    (this.activeKeyEventShapes = []),
                    v.Z.setLayout(_.Sr),
                    v.Z.enable());
            e.keybindKeyCodes !== this.props.keybindKeyCodes &&
                (this.lockEventShape = (0, X.d2)(this.props.keybindKeyCodes));
        }
    }
    initialSetup() {
        let e,
            {
                connectedToVoice: t,
                locked: i,
                canGoLive: o,
                isStreaming: l,
                voiceGuild: s,
                voiceChannelId: a,
                game: c,
                showKeybindNotification: d,
                dismissKeybindNotification: u,
            } = this.props;
        y.Z.track(ed.rMx.OVERLAY_INITIALIZED, {
            voice_widget_connected: t,
            text_widget_connected: G.default.isPinned(ed.Odu.TEXT),
            overlay_render_method: Q.gl[Q.gl.Hook],
            unpinned_widget_types: k.Z.getAllUnpinnedPinnedWidgets(q.OVERLAY_LAYOUT_ID),
        }),
            J.Z.trackExposure({ location: "Overlay" });
        let h = o && !l && null != c,
            p = t && null != s && null != a,
            f = es.Z.isNotificationDisabled(ea.n0.WelcomeNudge),
            m = es.Z.isNotificationDisabled(ea.n0.GoLiveNudge);
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
                        voiceGuild: s,
                    })
                  : h &&
                    !m &&
                    (e = {
                        type: ea.nc.GO_LIVE_NON_VOICE,
                        game: c,
                    }),
            setTimeout(async () => {
                await (0, K.s5)(), null != e ? y.Z.overlayMounted(e) : y.Z.overlayMounted();
            }, 128),
            window.addEventListener("resize", this.handleWindowResize),
            i && window.addEventListener("contextmenu", ey, !1),
            H.isPlatformEmbedded)
        ) {
            let e = (0, U.M)();
            if (null == e) return;
            if (void 0 !== e.setPerfInfoCallback) {
                var b;
                e.setPerfInfoCallback((e) => {
                    y.Z.track(ed.rMx.OVERLAY_PERF_INFO, e);
                }),
                    null == (b = e.broadcastCommand) ||
                        b.call(e, {
                            message: "set_perf_report_interval",
                            interval: 15 * F.Z.Millis.MINUTE,
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
            this.props.locked && window.removeEventListener("contextmenu", ey, !1),
            I.Z.terminate(),
            O.Z.terminate(),
            P.Z.terminate();
    }
    renderInvalidSizeMessage() {
        return (0, r.jsx)(Z.Z, {
            justify: Z.Z.Justify.CENTER,
            align: Z.Z.Align.CENTER,
            className: eh.invalidContainer,
            children: (0, r.jsx)("div", {
                className: eh.inactiveContainer,
                children: eu.intl.format(eu.t.ketnW0, q.OVERLAY_MIN_RESOLUTION),
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
            } = this.props,
            { width: h, height: p } = c;
        if (0 === h || 0 === p || n || !o) return null;
        let f = e || l,
            g = T.default.getId();
        return (0, r.jsxs)("div", {
            className: eh.overlay,
            children: [
                (0, r.jsx)(er.Z, {}),
                l &&
                    (0, r.jsx)("header", {
                        className: eh.previewingInGameHeader,
                        children: eu.intl.string(eu.t.iOq96m),
                    }),
                i,
                (!e || a.has(ed.O0n.TEXT_WIDGET)) &&
                    (0, r.jsx)(e_, {
                        locked: e,
                        keybind: t,
                        onClick: e ? this.handleDeactivate : this.handleLock,
                        isPreviewingInGame: l,
                    }),
                (0, q.validResolution)(c)
                    ? (0, r.jsx)(ei.Z, {
                          className: s()({
                              [eh.layoutLocked]: e,
                              [eh.layoutUnlocked]: !e,
                          }),
                      })
                    : e
                      ? null
                      : this.renderInvalidSizeMessage(),
                (0, r.jsx)(el.Z, {}),
                null != d &&
                    null != u &&
                    (0, r.jsx)(eo.Z, {
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
                let t = ev(e),
                    n = this.getActiveKeyEventIndex(t) > -1,
                    i = [16, 17, 18, 91].includes(e.keyCode);
                n || i || this.activeKeyEventShapes.push(t),
                    this.activeKeyEventShapes.length === this.lockEventShape.length &&
                        this.lockEventShape.every((e) => this.activeKeyEventShapes.some((t) => p()(e, t))) &&
                        (e.preventDefault(), e.stopPropagation());
                let { locked: r, activeRegions: o } = this.props;
                t.keyCode === c().codes.esc && r && o.has(ed.O0n.TEXT_WIDGET) && y.Z.deactivateAllRegions();
            }),
            ep(this, "onKeyUpGlobal", (e) => {
                let t = ev(e),
                    n = this.getActiveKeyEventIndex(t);
                n > -1 && this.activeKeyEventShapes.splice(n, 1);
            });
        let t = e.locked && G.default.isPinned(ed.Odu.TEXT);
        v.Z.setLayout(t ? _.Xq : _.Sr), t && v.Z.enable();
    }
}
function eE() {
    let {
            locked: e,
            initialized: t,
            incompatibleApp: n,
            activeRegions: i,
            isPreviewingInGame: l,
        } = (0, f.cj)([G.default], () => ({
            locked: G.default.isLocked((0, q.getPID)()),
            initialized: G.default.initialized,
            incompatibleApp: G.default.incompatibleApp,
            activeRegions: G.default.getActiveRegions(),
            isPreviewingInGame: G.default.isPreviewingInGame(),
        })),
        s = (0, f.e7)([B.Z], () => B.Z.windowSize()),
        a = (0, f.e7)([V.ZP], () => V.ZP.getOverlayKeybind()),
        c = (0, f.e7)([A.Z], () => A.Z.getVoiceChannelId()),
        d = (0, f.e7)([N.Z], () => N.Z.getChannel(c)),
        u = (0, f.e7)([D.Z], () => (null != d ? D.Z.getGuild(d.guild_id) : null)),
        h = (0, f.e7)([j.ZP, M.Z], () => (0, C.Z)(j.ZP, M.Z)),
        p = (0, f.e7)([R.Z], () => (0, x.Z)(R.Z)),
        g = (0, f.e7)([w.Z], () => null != w.Z.getCurrentUserActiveStream()),
        { analyticsLocations: m } = (0, S.ZP)(E.Z.OVERLAY),
        { showKeybindIndicators: y, dismissKeybindNotification: b } = (0, et.K)();
    return (
        o.useEffect(() => {
            t && (0, $.F3)();
        }, [t]),
        (0, r.jsx)(S.Gt, {
            value: m,
            children: (0, r.jsx)(eO, {
                locked: e,
                initialized: t,
                incompatibleApp: n,
                activeRegions: i,
                isPreviewingInGame: l,
                windowSize: s,
                keybind: null != a ? (0, X.BB)(a.shortcut, !0) : "???",
                keybindKeyCodes: null != a ? a.shortcut : [],
                connectedToVoice: null != c,
                voiceChannelId: null != d ? d.id : null,
                voiceGuild: u,
                game: h,
                canGoLive: p,
                isStreaming: g,
                showKeybindNotification: y,
                dismissKeybindNotification: b,
            }),
        })
    );
}
