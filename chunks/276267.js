"use strict";
n.d(t, { A: () => tW });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(607399),
    l = n(337836),
    d = n(825437),
    _ = n(17928),
    u = n(506774),
    c = n(752239),
    E = n(192308),
    h = n(187322),
    m = n(373495),
    f = n(988393),
    g = n(707233),
    p = n(318009),
    A = n(638421),
    I = n(464792),
    T = n(775602),
    S = n(697138),
    N = n(989395),
    C = n(139286),
    R = n(942381),
    O = n(939249),
    y = n(834730),
    v = n(628284),
    D = n(285796),
    L = n(865116),
    b = n(750506),
    w = n(540999),
    P = n(797820),
    k = n(803102),
    M = n(686757),
    U = n(820276);
function x() {
    let { debugTrackedData: e, impressions: t } = (0, M.SD)(
            (e) => ({ debugTrackedData: e.debugTrackedData, impressions: e.impressions }),
            R.x,
        ),
        n = (0, _.bG)([L.Ay], () => L.Ay.get("analytics_debugger")),
        s = (0, _.bG)([w.A], () => w.A.isDeveloper),
        [o, l] = r.useState(!1),
        { name: d, ...u } = e ?? {},
        c = null != d;
    return s && n
        ? (0, i.jsx)(b.Ay, {
              children: (0, i.jsxs)("div", {
                  className: a()(U.kL, { [U.YV]: o, [U.cn]: !c }),
                  children: [
                      (0, i.jsx)(O.D, {
                          className: U.VI,
                          onClick: () => {
                              l(!o);
                          },
                          children: o ? (0, i.jsx)(P.A, {}) : (0, i.jsx)(k.A, {}),
                      }),
                      (0, i.jsxs)("div", {
                          className: a()(U.Qs, { [U.Cx]: o }),
                          children: [
                              (0, i.jsxs)(y.E, {
                                  className: a()(U.Pf, { [U.cn]: !c }),
                                  variant: "text-xxs/normal",
                                  children: [
                                      c
                                          ? (0, i.jsx)(v.y, { size: "md", color: "currentColor", className: U.sG })
                                          : (0, i.jsx)(D.a, { size: "md", color: "currentColor", className: U.jZ }),
                                      d ?? "(untracked)",
                                  ],
                              }),
                              (0, i.jsx)("div", { className: U.ss, children: JSON.stringify(u, void 0, 2) }),
                              (0, i.jsx)(y.E, {
                                  className: a()(U.Pf, { [U.cn]: !c }),
                                  variant: "text-xxs/normal",
                                  children: "impressions stack",
                              }),
                              (0, i.jsx)("div", { className: U.t$, children: JSON.stringify(t, void 0, 2) }),
                          ],
                      }),
                  ],
              }),
          })
        : null;
}
var G = n(501280),
    V = n(735438),
    F = n.n(V),
    B = n(976634),
    H = n(866323),
    j = n(933958),
    W = n(268218),
    Y = n(400492),
    K = n(312671),
    z = n(803224),
    $ = n(309010),
    q = n(351906),
    X = n(503509),
    Z = n(5867),
    Q = n(235079);
let J = () => Promise.all([n.e("95752"), n.e("24927")]).then(n.bind(n, 710637)),
    ee = (0, W.Fe)({ createPromise: J, webpackId: 710637 }),
    et = { transform: "scale(0.7)", opacity: 0 },
    en = { transform: "scale(1)", opacity: 1 },
    ei = r.memo(function () {
        let e = (0, _.yK)([X.A, $.A, j.Ay], () =>
                X.A.getIncomingCalls().filter((e) => {
                    let { channel: t } = e,
                        n = $.A.getChannelId() === t.id,
                        i = null == t.guild_id && n,
                        r =
                            j.Ay.getConnectedActivityChannelId() === t.id &&
                            $.A.getVoiceChannelId() !== t.id &&
                            j.Ay.getActivityPanelMode() === Z.Gd.PANEL;
                    return !i || r;
                }),
            ),
            t = (0, _.bG)([X.A], () => X.A.hasIncomingCalls()),
            n = (0, _.bG)([z.A], () => z.A.isSoundDisabled("call_ringing")),
            s = (0, _.bG)([q.A], () => q.A.disableSounds),
            a = (0, _.bG)([K.A], () => K.A.getSoundpack()),
            o = r.useRef(!1),
            l = (0, B.A)(
                () =>
                    a === Q.i.CLASSIC
                        ? (0, Y.Qh)(
                              500 !== F().random(1, 1e3)
                                  ? "call_ringing"
                                  : F().sample(["call_ringing_beat", "call_ringing_snow_halation"]),
                              "call_ringing",
                          )
                        : (0, Y.aN)("call_ringing", a),
                [a],
            );
        return (
            r.useEffect(() => {
                J();
            }, []),
            r.useEffect(
                () => () => {
                    l.stop();
                },
                [l],
            ),
            r.useEffect(() => {
                if (s || n) {
                    o.current && (l.stop(), (o.current = !1));
                    return;
                }
                t && !o.current ? (l.loop(), (o.current = !0)) : !t && o.current && (l.stop(), (o.current = !1));
            }, [n, s, t, l]),
            (0, H.p)(e, {
                keys: (e) => e.channel?.id,
                enter: { from: et, to: en },
                leave: et,
                config: { mass: 1, tension: 500, friction: 18, clamp: !0 },
            })((e, t) => (0, i.jsx)(ee, { ...t, animatedStyle: e }))
        );
    });
n(66713), n(284009);
let er = r.createContext(void 0);
function es(e) {
    let { children: t } = e,
        [n, s] = r.useState(null),
        a = r.useMemo(() => ({ setComponentToSnapshot: s }), [s]);
    return (0, i.jsxs)(er.Provider, {
        value: a,
        children: [
            t,
            null != n &&
                (0, i.jsx)("div", {
                    id: "component-to-image-container",
                    style: { position: "fixed", top: "-1000px", right: "-1000px" },
                    children: n,
                }),
        ],
    });
}
var ea = n(681582),
    eo = n(172272),
    el = n(156828),
    ed = n(567249),
    e_ = n(723702),
    eu = n(538064),
    ec = n(265059),
    eE = n(652215);
let eh = (0, el.Fe)({
    createPromise: () =>
        Promise.all([
            n.e("62731"),
            n.e("34786"),
            n.e("57174"),
            n.e("38939"),
            n.e("94678"),
            n.e("93812"),
            n.e("1856"),
            n.e("64310"),
            n.e("90874"),
            n.e("83815"),
            n.e("93103"),
            n.e("24170"),
            n.e("53635"),
            n.e("44575"),
            n.e("97278"),
            n.e("8555"),
            n.e("35313"),
            n.e("49328"),
            n.e("34268"),
            n.e("69295"),
            n.e("43768"),
            n.e("82486"),
            n.e("98765"),
            n.e("68883"),
            n.e("44236"),
            n.e("97386"),
            n.e("92414"),
            n.e("65437"),
            n.e("84812"),
            n.e("92803"),
            n.e("99011"),
            n.e("40393"),
            n.e("17637"),
            n.e("6159"),
            n.e("43765"),
            n.e("25979"),
            n.e("77602"),
            n.e("33297"),
            n.e("33773"),
            n.e("23297"),
            n.e("95752"),
            n.e("92754"),
            n.e("51440"),
            n.e("53668"),
            n.e("62092"),
            n.e("27752"),
            n.e("52338"),
            n.e("86546"),
            n.e("15373"),
            n.e("49319"),
            n.e("9931"),
            n.e("35614"),
            n.e("14875"),
            n.e("2736"),
            n.e("62175"),
            n.e("46277"),
            n.e("93764"),
            n.e("65848"),
            n.e("21420"),
            n.e("42282"),
            n.e("81297"),
            n.e("80388"),
            n.e("13988"),
            n.e("67925"),
            n.e("61763"),
            n.e("52803"),
            n.e("92630"),
            n.e("64879"),
            n.e("8018"),
            n.e("77259"),
            n.e("51299"),
            n.e("49862"),
            n.e("69059"),
            n.e("6214"),
            n.e("92847"),
            n.e("66512"),
            n.e("51873"),
            n.e("2806"),
            n.e("96817"),
            n.e("33098"),
            n.e("10730"),
            n.e("92867"),
            n.e("37886"),
            n.e("23324"),
            n.e("89993"),
            n.e("91652"),
            n.e("25013"),
            n.e("54792"),
            n.e("98083"),
            n.e("95782"),
            n.e("40114"),
            n.e("19119"),
            n.e("35843"),
            n.e("83518"),
            n.e("84704"),
            n.e("67646"),
            n.e("72649"),
            n.e("71018"),
            n.e("92007"),
            n.e("39967"),
            n.e("28499"),
            n.e("78467"),
            n.e("68515"),
            n.e("38249"),
            n.e("41706"),
            n.e("15307"),
            n.e("40976"),
            n.e("90266"),
            n.e("33064"),
            n.e("85216"),
            n.e("17965"),
            n.e("76053"),
            n.e("39849"),
            n.e("80119"),
            n.e("80683"),
            n.e("96975"),
            n.e("88109"),
            n.e("12867"),
            n.e("83438"),
            n.e("29919"),
            n.e("4787"),
            n.e("5536"),
            n.e("81161"),
            n.e("12942"),
            n.e("81250"),
            n.e("96086"),
            n.e("24805"),
            n.e("50783"),
            n.e("21595"),
            n.e("75260"),
            n.e("57648"),
            n.e("20873"),
            n.e("67032"),
            n.e("31294"),
        ]).then(n.bind(n, 902592)),
    webpackId: 902592,
});
function em(e) {
    let { mobile: t } = e,
        n = (0, _.bG)([w.A], () => w.A.isDeveloper),
        s = (0, _.bG)([ec.A], () => ec.A.displayTools),
        a = (0, _.bG)([ed.A], () => ed.A.getWindowOpen(eE.MLl.DEVTOOLS_POPOUT)),
        o = r.useCallback((e) => {
            ((0, e_.isMac)() ? e.metaKey : e.ctrlKey) && e.altKey && "KeyO" === e.code && (0, eu.pf)();
        }, []);
    return (r.useLayoutEffect(
        () => (
            window.addEventListener("keydown", o),
            () => {
                window.removeEventListener("keydown", o);
            }
        ),
        [o],
    ),
    (t ? n : s) && !a)
        ? (0, i.jsx)(eh, { mobile: t })
        : null;
}
var ef = n(670735),
    eg = n(981133),
    ep = n(183636),
    eA = n(469177),
    eI = n(361158),
    eT = n(80556),
    eS = n(267102);
n(321073);
var eN = n(133171),
    eC = n(885576),
    eR = n(287809),
    eO = n(818348),
    ey = n(801964);
function ev() {
    let e = (0, _.bG)([L.Ay], () => L.Ay.get("idle_status_indicator")),
        t = (0, _.bG)([eR.default], () => eR.default.getCurrentUser()?.isStaff() ?? !1),
        [n, r] = (0, _.yK)([eC.A], () => [eC.A.isIdle(), eC.A.isAFK()]),
        s = [];
    return (
        n || r || s.push("ACTIVE"),
        n && s.push("IDLE"),
        r && s.push("AFK"),
        t && e
            ? (0, i.jsx)(b.Ay, {
                  children: (0, i.jsxs)("div", {
                      className: ey.kL,
                      children: [
                          (0, i.jsxs)("div", {
                              className: ey.h5,
                              children: [
                                  (0, i.jsx)(eN.nW, {
                                      status: s.includes("ACTIVE") ? eO.cl.ONLINE : eO.cl.IDLE,
                                      className: ey.UX,
                                  }),
                                  (0, i.jsx)(y.E, { variant: "text-md/normal", children: "IDLE STATUS:" }),
                                  (0, i.jsx)("div", {
                                      className: ey.qS,
                                      children: (0, i.jsx)(y.E, { variant: "text-md/bold", children: s.join(" + ") }),
                                  }),
                              ],
                          }),
                          n &&
                              (0, i.jsxs)(y.E, {
                                  variant: "text-md/normal",
                                  children: [
                                      "Idle since:",
                                      " ",
                                      new Date(eC.A.getIdleSince() ?? 0).toLocaleDateString(void 0, {
                                          year: "numeric",
                                          day: "numeric",
                                          month: "numeric",
                                          hour: "numeric",
                                          minute: "numeric",
                                          second: "numeric",
                                      }),
                                  ],
                              }),
                      ],
                  }),
              })
            : null
    );
}
var eD = n(164942),
    eL = n(189213),
    eb = n(827343),
    ew = n(969341),
    eP = n(985018);
let ek = () => {
    let e = (0, _.bG)([ew.Ay], () => ew.Ay.isInteractionRequired(), []),
        t = r.useRef(null);
    function n() {
        null !== t.current && ((0, E.closeModal)(t.current), (t.current = null));
    }
    return (
        r.useEffect(
            () => (
                e
                    ? (t.current = (0, E.openModal)((e) =>
                          (0, i.jsx)(eL.Modal, {
                              title: eP.intl.string(eP.t.dLLxC2),
                              subtitle: eP.intl.string(eP.t["64lmtw"]),
                              actions: [
                                  {
                                      text: eP.intl.string(eP.t.BddRzS),
                                      onClick: () => {
                                          eb.A.interact(), e.onClose();
                                      },
                                  },
                              ],
                              ...e,
                          }),
                      ))
                    : n(),
                () => {
                    n();
                }
            ),
            [e],
        ),
        null
    );
};
var eM = n(386406),
    eU = n(228366),
    ex = n(495544),
    eG = n(734057),
    eV = n(576705),
    eF = n(763827),
    eB = n(977997);
let eH = !0,
    ej = !0;
function eW() {
    let e,
        t = eF.A.getChannelId();
    if (null == t) e = !0;
    else {
        let n = eG.A.getChannel(t),
            i = eB.A.getVoiceState(n?.getGuildId(), ex.default.getId());
        e =
            ew.Ay.getMode() !== eE.TBI.VOICE_ACTIVITY ||
            null == n ||
            n.isPrivate() ||
            n.isGuildStageVoice() ||
            eV.A.can(eE.xBc.USE_VAD, n) ||
            null == i ||
            !!i.suppress ||
            null != i.requestToSpeakTimestamp;
    }
    return eH !== e && ((ej = e), (eH = e), eU.h.dispatch({ type: "SET_VAD_PERMISSION", hasPermission: eH }), !0);
}
class eY extends _.Ay.Store {
    static displayName = "PermissionVADStore";
    initialize() {
        this.waitFor(ex.default, eG.A, ew.Ay, eV.A, eF.A, eB.A);
    }
    shouldShowWarning() {
        return !ej;
    }
    canUseVoiceActivity() {
        return eH;
    }
}
let eK = new eY(eU.h, {
    RTC_CONNECTION_STATE: eW,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: eW,
    AUDIO_SET_MODE: eW,
    CHANNEL_UPDATES: eW,
    THREAD_UPDATE: eW,
    GUILD_ROLE_UPDATE: eW,
    GUILD_MEMBER_UPDATE: eW,
    IMPERSONATE_UPDATE: eW,
    IMPERSONATE_STOP: eW,
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return t.some((e) => {
            let { userId: t } = e;
            return t === ex.default.getId() && eW();
        });
    },
    AUDIO_TOGGLE_SELF_MUTE: function () {
        ej = eH;
    },
    PERMISSION_CLEAR_VAD_WARNING: function () {
        ej = !0;
    },
});
function ez(e) {
    return (0, i.jsx)(eL.Modal, {
        size: "md",
        title: eP.intl.string(eP.t.NYklhr),
        subtitle: eP.intl.string(eP.t.EJ26Oh),
        actions: [
            {
                text: eP.intl.string(eP.t.UYW0dz),
                onClick: () => {
                    e.onClose(), eM.A.clearVADWarning();
                },
                variant: "secondary",
            },
            {
                text: eP.intl.string(eP.t.E3Y7NH),
                onClick: () => {
                    eb.A.setMode(eE.TBI.PUSH_TO_TALK), e.onClose(), eM.A.clearVADWarning();
                },
                variant: "primary",
            },
        ],
        ...e,
    });
}
function e$() {
    let e = (0, _.bG)([eK], () => eK.shouldShowWarning(), []),
        t = r.useRef(null);
    function n() {
        null !== t.current && ((0, E.closeModal)(t.current), (t.current = null));
    }
    return (
        r.useEffect(
            () => (
                e ? (t.current = (0, E.openModal)((e) => (0, i.jsx)(ez, { ...e }))) : n(),
                () => {
                    n();
                }
            ),
            [e],
        ),
        null
    );
}
var eq = n(150934),
    eX = n(964486),
    eZ = n(328153),
    eQ = n(935671),
    eJ = n(975571);
function e0(e) {
    let { currentGame: t, ...n } = e,
        [s, a] = r.useState(!1);
    return (
        (0, eX.l0)(() => {
            s && eM.A.clearPTTAdminWarning();
        }),
        (0, i.jsx)(eL.Modal, {
            size: "md",
            title: eP.intl.string(eP.t.eotlXE),
            subtitle: eP.intl.formatToPlainString(eP.t.Lw6KXV, { game: t?.name }),
            actions: [
                {
                    text: eP.intl.string(eP.t.psXQHP),
                    onClick: () => {
                        n.onClose(), window.open(eJ.A.getArticleURL(eE.MVz.PUSH_TO_TALK_ADMINISTRATOR_MODE), "_blank");
                    },
                },
            ],
            actionBarInput: (0, i.jsx)(eq.S, {
                checked: s,
                onChange: (e) => a(e),
                label: eP.intl.string(eP.t["5E9SB9"]),
                labelType: "secondary",
            }),
            ...n,
        })
    );
}
function e1() {
    let [e, t] = (0, _.yK)([eZ.Ay], () => [eZ.Ay.canShowAdminWarning, eZ.Ay.getVisibleGame()], []),
        n = (0, _.bG)([eF.A], () => eF.A.isConnected(), []),
        s = (0, _.bG)([ew.Ay], () => ew.Ay.getMode() === eE.TBI.PUSH_TO_TALK, []),
        a = null != t && t.elevated && n && s && e,
        o = r.useRef(null);
    return (
        r.useEffect(() => {
            if (!(0, eQ.yA)(eZ.Ay))
                return (
                    a ? (o.current = (0, E.openModal)((e) => (0, i.jsx)(e0, { currentGame: t, ...e }))) : e(),
                    () => {
                        e();
                    }
                );
            function e() {
                null !== o.current && ((0, E.closeModal)(o.current), (o.current = null));
            }
        }, [t, a]),
        null
    );
}
var e2 = n(48686),
    e3 = n(737613);
function e6(e) {
    let t,
        n,
        { afk: s, ...a } = e,
        [o, l] = r.useState(!1);
    return (
        s
            ? ((t = eP.intl.string(eP.t.Y40Jke)), (n = eP.intl.string(eP.t["5J4yGc"])))
            : ((t = eP.intl.string(eP.t.FJSZVM)), (n = eP.intl.string(eP.t.etJjgW))),
        (0, i.jsx)(eL.Modal, {
            size: "md",
            title: t,
            subtitle: n,
            actions: [
                {
                    text: eP.intl.string(eP.t.BddRzS),
                    onClick: () => {
                        a.onClose(), eM.A.clearSuppressWarning(o);
                    },
                    variant: "primary",
                },
            ],
            actionBarInput: (0, i.jsx)(eq.S, {
                checked: o,
                onChange: (e) => l(e),
                label: eP.intl.string(eP.t["5E9SB9"]),
                labelType: "secondary",
            }),
            ...a,
        })
    );
}
let e4 = () => {
        let e = r.useRef(null);
        function t() {
            null !== e.current && ((0, E.closeModal)(e.current), (e.current = null));
        }
        let [s, a] = (0, _.yK)([e3.A], () => [e3.A.shouldShowWarning(), e3.A.isAFKChannel()], []),
            o = r.useCallback(() => {
                e.current = (0, E.openModal)((e) => (0, i.jsx)(e6, { afk: a, ...e }));
            }, [a]),
            l = r.useCallback(() => {
                (0, E.openModalLazy)(async () => {
                    let { default: e } = await n.e("59866").then(n.bind(n, 937489));
                    return (t) => (0, i.jsx)(e, { ...t, showHideSuppressWarning: !0 });
                }).then((t) => {
                    null != t && (e.current = t);
                });
            }, []);
        return (
            r.useEffect(
                () => (
                    s && (0, e2.t)() ? l() : s ? o() : t(),
                    () => {
                        t();
                    }
                ),
                [s, o, l],
            ),
            null
        );
    },
    e7 = () =>
        (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(e1, {}), (0, i.jsx)(ek, {}), (0, i.jsx)(e4, {}), (0, i.jsx)(e$, {})],
        });
var e5 = n(186111),
    e8 = n(949666),
    e9 = n(554146),
    te = n(821609),
    tt = n(862482),
    tn = n(534514),
    ti = n(661531),
    tr = n(707554),
    ts = n(364522),
    ta = n(82495),
    to = n(793574),
    tl = n(688810),
    td = n(793943),
    t_ = n(234419),
    tu = n(725807),
    tc = n(450232),
    tE = n(780964),
    th = n(858897),
    tm = n(954571),
    tf = n(927578);
function tg() {
    eU.h.dispatch({ type: "APP_ICON_EDITOR_RESET" });
}
var tp = n(526162),
    tA = n(806932),
    tI = n(635917),
    tT = n(49999),
    tS = n(788868),
    tN = n(564194);
let tC = () => {
        let e = (0, _.bG)([eR.default], () => tf.Ay.isPremium(eR.default.getCurrentUser())),
            t = (0, t_.V)(),
            n = t?.subscription_trial?.sku_id === tS.pe.TIER_2;
        return (0, i.jsx)(tu.A, {
            size: tt.$n.Sizes.MEDIUM,
            textOptions: {
                textOverride: e
                    ? eP.intl.string(eP.t.IJI7yk)
                    : n
                      ? (0, tf.FY)({
                            intervalType: t?.subscription_trial?.interval,
                            intervalCount: t?.subscription_trial?.interval_count,
                        })
                      : eP.intl.string(eP.t.mr4K7D),
            },
            subscriptionTier: tS.pe.TIER_2,
        });
    },
    tR = (e) => {
        let { markAsDismissed: t } = e;
        return (0, i.jsxs)("div", {
            className: tN.nV,
            children: [
                (0, i.jsx)(O.D, {
                    className: tN.VV,
                    onClick: () => void (t?.(tT.i.DISMISS), (0, td.Jp)(), tg()),
                    children: (0, i.jsx)(D.a, { size: "md", color: "currentColor", className: tN.P0 }),
                }),
                (0, i.jsxs)("div", {
                    className: tN.DD,
                    children: [
                        (0, i.jsx)(tn.D, { variant: "heading-lg/extrabold", children: eP.intl.string(eP.t["hb/wE0"]) }),
                        (0, i.jsx)(tc.A, { color: ti.A.colors.TEXT_STRONG, size: "sm", className: tN.PC }),
                    ],
                }),
            ],
        });
    },
    tO = (e) => {
        let { isCoachmark: t, markAsDismissed: n } = e,
            r = (0, _.bG)([tp.A], () => tp.A.isUpsellPreview);
        return (0, i.jsxs)("div", {
            className: tN.N3,
            children: [
                r && (0, i.jsx)(tC, {}),
                (0, i.jsx)(te.$, {
                    onClick: () => {
                        n?.(tT.i.DISMISS),
                            (0, td.Jp)(),
                            tg(),
                            t || (0, th.openUserSettings)(tE.X.APPEARANCE_IN_APP_ICON_CATEGORY);
                    },
                    variant: "secondary",
                    fullWidth: !0,
                    text: r || t ? eP.intl.string(eP.t["dqH+qr"]) : eP.intl.string(eP.t.Olc2K3),
                }),
            ],
        });
    };
function ty(e) {
    let { isCoachmark: t, markAsDismissed: n, iconSize: s = tI.N8.SIZE_60 } = e,
        { analyticsLocations: o } = (0, tl.Ay)(to.A.APP_ICON_EDITOR),
        l = (0, _.bG)([eR.default], () => eR.default.getCurrentUser()),
        { isUpsellPreview: d, shouldEditorAnimate: u } = (0, _.cf)([tp.A, T.A], () => ({
            isUpsellPreview: tp.A.isUpsellPreview,
            shouldEditorAnimate: t && !T.A.useReducedMotion,
        })),
        c = td.fy.getState().activePanel === td.HP.APP_ICON;
    r.useEffect(() => {
        d && tm.default.track(eE.HAw.PREMIUM_UPSELL_VIEWED, { type: tS.e.APP_ICON_UPSELL, location_stack: o });
    }, [d, o]);
    let E = (0, ta.A)(null, d ? tg : eE.tEg);
    r.useEffect(() => {
        if (d && !c) return tg;
    }, [d, c]);
    let h = r.useMemo(
        () => ({
            "--custom-in-app-icon-editor-content-width": `${3 * s + 48}px`,
            "--custom-in-app-icon-editor-padding": "16px",
        }),
        [s],
    );
    return null == l
        ? null
        : (0, i.jsx)(tl.f5, {
              value: o,
              children: (0, i.jsx)("div", {
                  ref: E,
                  className: a()(tN.EN, u ? tN.hP : null),
                  "data-app-right-panel": !0,
                  style: h,
                  children: (0, i.jsxs)(tr.F, {
                      children: [
                          (0, i.jsx)(tR, { markAsDismissed: n }),
                          (0, i.jsx)(ts.Ip, {
                              className: tN.sV,
                              children: (0, i.jsx)(tA.A, { className: tN.Gg, isEditor: !0, iconSize: s }),
                          }),
                          (0, i.jsx)(tO, { markAsDismissed: n, isCoachmark: t }),
                      ],
                  }),
              }),
          });
}
var tv = n(47671),
    tD = n(826673),
    tL = n(932001),
    tb = n(805627),
    tw = n(45945);
function tP() {
    return (0, i.jsx)("div", { "data-app-right-panel": !0, className: tw.kL });
}
let tk = (0, W.Fe)({ createPromise: () => n.e("66996").then(n.bind(n, 974800)), webpackId: 974800, renderLoader: tP }),
    tM = (0, W.Fe)({ createPromise: () => n.e("51200").then(n.bind(n, 290948)), webpackId: 290948, renderLoader: tP }),
    tU = (0, W.Fe)({ createPromise: () => n.e("33049").then(n.bind(n, 563380)), webpackId: 563380 }),
    tx = function (e) {
        let { mobile: t } = e,
            n = (0, _.bG)([eR.default], () => tf.Ay.canUseClientThemes(eR.default.getCurrentUser())),
            r = (0, _.bG)([tv.A], () => tv.A.isCoachmark),
            s =
                null != (0, _.bG)([eG.A, $.A], () => eG.A.getChannel($.A.getChannelId())) &&
                !!(function () {
                    try {
                        return CSS.supports("selector(:has(*))");
                    } catch (e) {
                        return !1;
                    }
                })(),
            { activePanel: a, metadata: o } = (0, td.fy)(),
            l = (0, _.bG)([e5.A], () => e5.A.hasLayers()),
            d = [];
        null == a &&
            !l &&
            (r && !n && d.push(e9.M.CLIENT_THEMES_COACHMARK), s && n && d.push(e9.M.CUSTOM_THEME_COACHMARK));
        let [u, c] = (0, tL.kn)(d, tT.m.SIDEBAR, !0),
            E = u === e9.M.CLIENT_THEMES_COACHMARK,
            h = u === e9.M.CUSTOM_THEME_COACHMARK,
            m = a === td.HP.CLIENT_THEMES || E,
            f = a === td.HP.APP_ICON,
            g = a === td.HP.CUSTOM_THEME || h,
            p = a === td.HP.APPLICATION_TEST_MODE_DEBUG;
        if (!(m || f || g || p)) return null;
        let A = () =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    m &&
                        (0, i.jsx)(tk, {
                            markAsDismissed: E
                                ? c
                                : () => {
                                      (0, tD.Dr)(e9.M.CLIENT_THEMES_COACHMARK, {
                                          dismissAction: tT.i.INDIRECT_ACTION,
                                          forceTrack: !0,
                                      });
                                  },
                            showClientThemesCoachmark: E,
                        }),
                    f && (0, i.jsx)(ty, { isCoachmark: !1, markAsDismissed: c }),
                    g && (0, i.jsx)(tM, { metadata: o ?? {}, markAsDismissed: c, isCoachmark: h, isMobile: t }),
                    p && (0, i.jsx)(tU, {}),
                ],
            });
        return t ? (0, i.jsx)("div", { className: tb.A, children: A() }) : A();
    };
var tG = n(404374),
    tV = n(573435),
    tF = n(71855),
    tB = n(906292);
n(939857),
    Promise.resolve()
        .then(n.bind(n, 677134))
        .then((e) => {
            e_.isPlatformEmbedded
                ? window.addEventListener("contextmenu", e.contextMenuCallbackNative, !1)
                : window.addEventListener("contextmenu", e.contextMenuCallbackWeb, !1);
        }),
    (0, c.h)({ getDefaultLinkInterceptor: I.default }),
    (0, W.Fe)({
        createPromise: () => Promise.all([n.e("94678"), n.e("1856"), n.e("4787"), n.e("8188")]).then(n.bind(n, 441588)),
        webpackId: 441588,
    }),
    (0, W.Fe)({
        createPromise: () =>
            Promise.all([n.e("94678"), n.e("1856"), n.e("4787"), n.e("56795")]).then(n.bind(n, 461624)),
        webpackId: 461624,
    });
let tH = (0, W.Fe)({ createPromise: () => n.e("99063").then(n.bind(n, 154056)), webpackId: 154056 }),
    tj = r.memo(function () {
        let e = (0, _.bG)([e5.A], () => e5.A.hasLayers()),
            t = (0, E.useModalsStore)(E.hasAnyModalOpen),
            n = (0, _.bG)([ex.default], () => ex.default.isAuthenticated());
        return (0, i.jsx)(tF.v5, { fixed: !0, show: e || t || !n, isLayerOpen: e });
    }),
    tW = function (e) {
        var t;
        let n,
            { children: s, skipsSettingDefaultPageTitle: c } = e,
            E = (0, e_.getPlatform)(),
            I = o.Fr || o.v1,
            R = (0, _.bG)([T.A], () => (T.A.useForcedColors ? "yes" : "no")),
            O = r.useRef(document.body),
            y = `${R}`;
        (t = "AppSkeleton"),
            (n = ep.A.useCanUIRequestGatewaySocket()),
            r.useEffect(() => {
                if (n)
                    return (
                        eA.uG(t),
                        () => {
                            eA.qr(t);
                        }
                    );
            }, [t, n]);
        let v = (0, eg.sK)("AppSkeleton");
        return (
            r.useEffect(() => {
                v ? u.w.set(eg.AL, !0) : u.w.remove(eg.AL);
            }, [v]),
            (0, i.jsx)(
                eD.e,
                {
                    children: (0, i.jsxs)(S.A, {
                        children: [
                            (0, i.jsx)(e8.A, { skipsSettingDefaultPageTitle: c }),
                            (0, i.jsx)(A.N, {
                                children: (0, i.jsx)(ef.A, {
                                    children: (0, i.jsxs)(h.xp, {
                                        containerRef: O,
                                        children: [
                                            (0, i.jsx)(tV.Al, {}),
                                            (0, i.jsx)(tG.Ay, {}),
                                            (0, i.jsx)(d.Ut, {}),
                                            (0, i.jsx)(eS.Wr, {
                                                appContext: eE.BRT.APP,
                                                renderWindow: window,
                                                children: (0, i.jsxs)(b.Yf, {
                                                    children: [
                                                        null != E ? (0, i.jsx)(tj, {}) : null,
                                                        (0, i.jsxs)("div", {
                                                            className: a()(tB.XX, I && tB.Xq),
                                                            children: [
                                                                (0, i.jsx)(eo.C1, {}),
                                                                (0, i.jsx)("div", {
                                                                    className: tB.x$,
                                                                    "data-app-not-dev-tools": !0,
                                                                    children: (0, i.jsx)(ea.l, {
                                                                        children: (0, i.jsx)(eT.ks, {
                                                                            children: (0, i.jsx)(N.A.Provider, {
                                                                                value: C.A,
                                                                                children: (0, i.jsxs)(es, {
                                                                                    children: [
                                                                                        (0, i.jsx)("div", {
                                                                                            className: a()(
                                                                                                I ? tB.C$ : tB.yA,
                                                                                            ),
                                                                                            children: s,
                                                                                        }),
                                                                                        (0, i.jsx)(g.A, {}),
                                                                                        (0, i.jsx)(G.A, {}),
                                                                                        (0, i.jsx)(p.A, {}),
                                                                                        (0, i.jsx)(m.b, {}),
                                                                                        (0, i.jsx)(e7, {}),
                                                                                        (0, i.jsx)(eI.up, {}),
                                                                                        (0, i.jsx)(l.P, {}),
                                                                                        (0, i.jsx)(b.C8, {}),
                                                                                        (0, i.jsx)(eT.ok, {}),
                                                                                        (0, i.jsx)(f.N, {
                                                                                            appContext: eE.BRT.APP,
                                                                                        }),
                                                                                        (0, i.jsx)(x, {}),
                                                                                        (0, i.jsx)(ev, {}),
                                                                                        (0, i.jsx)(tH, {}),
                                                                                    ],
                                                                                }),
                                                                            }),
                                                                        }),
                                                                    }),
                                                                }),
                                                                (0, i.jsx)(ei, {}),
                                                                (0, i.jsx)(tx, { mobile: I }),
                                                                (0, i.jsx)(em, { mobile: I }),
                                                            ],
                                                        }),
                                                        !1,
                                                    ],
                                                }),
                                            }),
                                            (0, i.jsx)(d.Ut, {}),
                                        ],
                                    }),
                                }),
                            }),
                        ],
                    }),
                },
                y,
            )
        );
    };
