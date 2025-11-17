let i;
n.d(t, { Z: () => eO }), n(539854);
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
    m = n(668781),
    y = n(239091),
    b = n(13245),
    _ = n(425493),
    v = n(951483),
    O = n(714338),
    E = n(185666),
    S = n(100527),
    Z = n(906732),
    x = n(600164);
n(70097);
var j = n(594190),
    C = n(74299),
    I = n(989941),
    P = n(377400),
    w = n(329557),
    T = n(199902),
    N = n(314897),
    D = n(592125),
    k = n(430824),
    R = n(355863),
    A = n(131951),
    L = n(944486),
    M = n(618541),
    z = n(449224),
    V = n(574254),
    W = n(556296),
    U = n(808506),
    G = n(372679),
    B = n(237997),
    F = n(451478),
    H = n(70956),
    Y = n(358085),
    K = n(998502),
    X = n(378799),
    q = n(13140),
    J = n(145597),
    Q = n(658785),
    $ = n(837268),
    ee = n(32300),
    et = n(681603),
    en = n(358446),
    ei = n(348733),
    er = n(312178),
    eo = n(708383),
    el = n(923532),
    es = n(107200),
    ea = n(624864),
    ec = n(987650),
    ed = n(757744),
    eu = n(981631),
    eh = n(388032),
    ep = n(722363);
function ef(e, t, n) {
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
let eg = null;
function em(e) {
    e.preventDefault();
}
function ey(e) {
    (0, y.jW)(e, async () => {
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
                                ef(e, t, n[t]);
                            });
                    }
                    return e;
                })({}, t)),
                (i = i = { version: ed.bv }),
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
Y.isPlatformEmbedded;
let eb = (e) => {
        let { keybind: t, onClick: n, isPreviewingInGame: i, locked: o } = e,
            l = o ? g.P3F : "div";
        return (0, r.jsx)(l, {
            className: s()(ep.overlayBackground, {
                [ep.overlayActive]: !o,
                [ep.overlayLocked]: o,
                [ep.previewMode]: !o && i,
            }),
            onMouseDown: (e) => {
                let { currentTarget: t, target: i, button: r } = e;
                r === eu.AeJ.PRIMARY && t === i && n();
            },
            onContextMenu: ey,
            children: o
                ? null
                : (0, r.jsx)("div", {
                      className: ep.closeContainer,
                      children: (0, r.jsx)(_.Z, {
                          variant: _.Z.Variants.BOLD,
                          keybind: t,
                          closeAction: n,
                      }),
                  }),
        });
    },
    e_ = (e) => {
        let { keyCode: t, shiftKey: n, metaKey: i, altKey: r, ctrlKey: o } = e;
        return {
            keyCode: t,
            shiftKey: n,
            metaKey: i,
            altKey: r,
            ctrlKey: o,
        };
    };
class ev extends o.Component {
    handleLock() {
        (0, g.$sL)() || V.Z.isOpen() || b.Z.setInputLocked(!0, (0, J.getPID)());
    }
    handleDeactivate() {
        b.Z.deactivateAllRegions();
    }
    componentDidMount() {
        b.Z.startSession(), P.Z.initialize(), E.Z.initialize(), w.Z.initialize();
    }
    componentDidUpdate(e) {
        let { initialized: t } = this.props;
        if (t) {
            if (t && !this.didUpdate) {
                (this.didUpdate = !0), this.initialSetup();
                return;
            }
            if (!e.locked && this.props.locked) {
                if ((window.addEventListener("contextmenu", em, !1), null != eg)) {
                    let e = Date.now() - eg;
                    b.Z.track(eu.rMx.OVERLAY_LOCKED, { unlocked_duration: e }), (eg = null);
                }
                O.Z.disable(),
                    (this.activeKeyEventShapes = []),
                    B.default.isPinned(eu.Odu.TEXT) && (O.Z.setLayout(v.Xq), O.Z.enable());
            } else
                e.locked &&
                    !this.props.locked &&
                    (window.removeEventListener("contextmenu", em, !1),
                    null == eg && ((eg = Date.now()), b.Z.track(eu.rMx.OVERLAY_UNLOCKED)),
                    O.Z.disable(),
                    (this.activeKeyEventShapes = []),
                    O.Z.setLayout(v.Sr),
                    O.Z.enable());
            e.keybindKeyCodes !== this.props.keybindKeyCodes &&
                (this.lockEventShape = (0, q.d2)(this.props.keybindKeyCodes));
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
        b.Z.track(eu.rMx.OVERLAY_INITIALIZED, {
            voice_widget_connected: t,
            text_widget_connected: B.default.isPinned(eu.Odu.TEXT),
            overlay_render_method: $.gl[$.gl.Hook],
            unpinned_widget_types: R.Z.getAllUnpinnedPinnedWidgets(J.OVERLAY_LAYOUT_ID),
        }),
            Q.Z.trackExposure({ location: "Overlay" });
        let d = i && !r && null != s,
            u = t && null != o && null != l,
            h = ea.Z.isNotificationDisabled(ec.n0.WelcomeNudge),
            p = ea.Z.isNotificationDisabled(ec.n0.GoLiveNudge);
        if (
            (h || (e = { type: ec.nc.WELCOME }),
            a && !h
                ? (e = {
                      type: ec.nc.KEYBIND_INDICATORS,
                      markAsDismissed: c,
                  })
                : d && u && !p
                  ? (e = {
                        type: ec.nc.GO_LIVE_VOICE,
                        game: s,
                        voiceChannelId: l,
                        voiceGuild: o,
                    })
                  : d &&
                    !p &&
                    (e = {
                        type: ec.nc.GO_LIVE_NON_VOICE,
                        game: s,
                    }),
            setTimeout(async () => {
                await (0, X.s5)(), null != e ? b.Z.overlayMounted(e) : b.Z.overlayMounted();
            }, 128),
            window.addEventListener("resize", this.handleWindowResize),
            n && window.addEventListener("contextmenu", em, !1),
            Y.isPlatformEmbedded)
        ) {
            let e = (0, G.M)();
            if (null == e) return;
            if (void 0 !== e.setPerfInfoCallback) {
                var f;
                e.setPerfInfoCallback((e) => {
                    b.Z.track(eu.rMx.OVERLAY_PERF_INFO, e);
                }),
                    null == (f = e.broadcastCommand) ||
                        f.call(e, {
                            message: "set_perf_report_interval",
                            interval: 15 * H.Z.Millis.MINUTE,
                        });
            }
            K.ZP.on("REQUEST_OPEN_EXTERNAL_URL", (e, t) => {
                B.default.getDisableExternalLinkAlert() || t === M.Z.getLastURL()
                    ? K.ZP.send("OPEN_EXTERNAL_URL", t)
                    : m.Z.show({
                          title: eh.intl.string(eh.t.WLx4F6),
                          body: eh.intl.string(eh.t.H8O1TK),
                          secondaryConfirmText: eh.intl.string(eh.t.IwqGhU),
                          confirmText: eh.intl.string(eh.t["3PatSz"]),
                          cancelText: eh.intl.string(eh.t["ETE/oC"]),
                          onConfirmSecondary: () => {
                              b.Z.disableExternalLinkAlert();
                          },
                          onConfirm: () => K.ZP.send("OPEN_EXTERNAL_URL", t),
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
            P.Z.terminate(),
            E.Z.terminate(),
            w.Z.terminate();
    }
    renderInvalidSizeMessage() {
        return (0, r.jsx)(x.Z, {
            justify: x.Z.Justify.CENTER,
            align: x.Z.Align.CENTER,
            className: ep.invalidContainer,
            children: (0, r.jsx)("div", {
                className: ep.inactiveContainer,
                children: eh.intl.format(eh.t.ketnW0, J.OVERLAY_MIN_RESOLUTION),
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
            g = N.default.getId();
        return (0, r.jsxs)("div", {
            className: ep.overlay,
            children: [
                (0, r.jsx)(eo.Z, {}),
                l &&
                    (0, r.jsx)("header", {
                        className: ep.previewingInGameHeader,
                        children: eh.intl.string(eh.t.iOq96m),
                    }),
                i,
                (!e || a.has(eu.O0n.TEXT_WIDGET)) &&
                    (0, r.jsx)(eb, {
                        locked: e,
                        keybind: t,
                        onClick: e ? this.handleDeactivate : this.handleLock,
                        isPreviewingInGame: l,
                    }),
                (0, J.validResolution)(c)
                    ? (0, r.jsx)(er.Z, {
                          className: s()({
                              [ep.layoutLocked]: e,
                              [ep.layoutUnlocked]: !e,
                          }),
                      })
                    : e
                      ? null
                      : this.renderInvalidSizeMessage(),
                (0, r.jsx)(es.Z, {}),
                null != d &&
                    null != u &&
                    (0, r.jsx)(el.Z, {
                        streamerId: g,
                        guildId: d.id,
                        channelId: u,
                    }),
                (0, r.jsx)(ei.Z, {
                    locked: f,
                    keybind: t,
                }),
                (0, r.jsx)(et.Z, {}),
                (0, r.jsx)("div", { className: ep.overlayMountPx }),
            ],
        });
    }
    constructor(e) {
        super(e),
            ef(this, "didUpdate", !1),
            ef(
                this,
                "debouncedForceUpdate",
                u()(() => {
                    this.forceUpdate();
                }, 500),
            ),
            ef(this, "handleWindowResize", () => {
                U.default.isFocusedPidOutOfProcess() ? this.forceUpdate() : this.debouncedForceUpdate();
            }),
            ef(this, "activeKeyEventShapes", []),
            ef(this, "lockEventShape", (0, q.d2)(this.props.keybindKeyCodes)),
            ef(this, "getActiveKeyEventIndex", (e) => this.activeKeyEventShapes.findIndex((t) => p()(t, e))),
            ef(this, "onKeyDownGlobal", (e) => {
                let t = e_(e),
                    n = this.getActiveKeyEventIndex(t) > -1,
                    i = [16, 17, 18, 91].includes(e.keyCode);
                n || i || this.activeKeyEventShapes.push(t),
                    this.activeKeyEventShapes.length === this.lockEventShape.length &&
                        this.lockEventShape.every((e) => this.activeKeyEventShapes.some((t) => p()(e, t))) &&
                        (e.preventDefault(), e.stopPropagation());
                let { locked: r, activeRegions: o } = this.props;
                t.keyCode === c().codes.esc && r && o.has(eu.O0n.TEXT_WIDGET) && b.Z.deactivateAllRegions();
            }),
            ef(this, "onKeyUpGlobal", (e) => {
                let t = e_(e),
                    n = this.getActiveKeyEventIndex(t);
                n > -1 && this.activeKeyEventShapes.splice(n, 1);
            });
        let t = e.locked && B.default.isPinned(eu.Odu.TEXT);
        O.Z.setLayout(t ? v.Xq : v.Sr), t && O.Z.enable();
    }
}
function eO() {
    let {
            locked: e,
            initialized: t,
            incompatibleApp: n,
            activeRegions: i,
            isPreviewingInGame: l,
        } = (0, f.cj)([B.default], () => ({
            locked: B.default.isLocked((0, J.getPID)()),
            initialized: B.default.initialized,
            incompatibleApp: B.default.incompatibleApp,
            activeRegions: B.default.getActiveRegions(),
            isPreviewingInGame: B.default.isPreviewingInGame(),
        })),
        s = (0, f.e7)([F.Z], () => F.Z.windowSize()),
        a = (0, f.e7)([W.ZP], () => W.ZP.getOverlayKeybind()),
        c = (0, f.e7)([L.Z], () => L.Z.getVoiceChannelId()),
        d = (0, f.e7)([D.Z], () => D.Z.getChannel(c)),
        u = (0, f.e7)([k.Z], () => (null != d ? k.Z.getGuild(d.guild_id) : null)),
        h = (0, f.e7)([j.ZP, z.Z], () => (0, I.Z)(j.ZP, z.Z)),
        p = (0, f.e7)([A.Z], () => (0, C.Z)(A.Z)),
        g = (0, f.e7)([T.Z], () => null != T.Z.getCurrentUserActiveStream()),
        { analyticsLocations: m } = (0, Z.ZP)(S.Z.OVERLAY),
        { showKeybindIndicators: y, dismissKeybindNotification: b } = (0, en.K)();
    return (
        o.useEffect(() => {
            t && (0, ee.F3)();
        }, [t]),
        (0, r.jsx)(Z.Gt, {
            value: m,
            children: (0, r.jsx)(ev, {
                locked: e,
                initialized: t,
                incompatibleApp: n,
                activeRegions: i,
                isPreviewingInGame: l,
                windowSize: s,
                keybind: null != a ? (0, q.BB)(a.shortcut, !0) : "???",
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
