"use strict";
n.d(t, { A: () => np });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(607399),
    l = n(337836),
    _ = n(825437),
    d = n(17928),
    u = n(506774),
    c = n(752239),
    E = n(192308),
    h = n(187322),
    m = n(373495),
    f = n(988393),
    g = n(707233),
    I = n(318009),
    A = n(638421),
    p = n(464792),
    T = n(775602),
    S = n(697138),
    N = n(989395),
    O = n(139286),
    R = n(942381),
    C = n(939249),
    y = n(834730),
    D = n(628284),
    L = n(285796),
    v = n(865116),
    w = n(750506),
    P = n(540999),
    b = n(797820),
    k = n(803102),
    U = n(686757),
    M = n(820276);
function G() {
    let { debugTrackedData: e, impressions: t } = (0, U.SD)(
            (e) => ({ debugTrackedData: e.debugTrackedData, impressions: e.impressions }),
            R.x,
        ),
        n = (0, d.bG)([v.Ay], () => v.Ay.get("analytics_debugger")),
        s = (0, d.bG)([P.A], () => P.A.isDeveloper),
        [o, l] = r.useState(!1),
        { name: _, ...u } = e ?? {},
        c = null != _;
    return s && n
        ? (0, i.jsx)(w.Ay, {
              children: (0, i.jsxs)("div", {
                  className: a()(M.kL, { [M.YV]: o, [M.cn]: !c }),
                  children: [
                      (0, i.jsx)(C.D, {
                          className: M.VI,
                          onClick: () => {
                              l(!o);
                          },
                          children: o ? (0, i.jsx)(b.A, {}) : (0, i.jsx)(k.A, {}),
                      }),
                      (0, i.jsxs)("div", {
                          className: a()(M.Qs, { [M.Cx]: o }),
                          children: [
                              (0, i.jsxs)(y.E, {
                                  className: a()(M.Pf, { [M.cn]: !c }),
                                  variant: "text-xxs/normal",
                                  children: [
                                      c
                                          ? (0, i.jsx)(D.y, { size: "md", color: "currentColor", className: M.sG })
                                          : (0, i.jsx)(L.a, { size: "md", color: "currentColor", className: M.jZ }),
                                      _ ?? "(untracked)",
                                  ],
                              }),
                              (0, i.jsx)("div", { className: M.ss, children: JSON.stringify(u, void 0, 2) }),
                              (0, i.jsx)(y.E, {
                                  className: a()(M.Pf, { [M.cn]: !c }),
                                  variant: "text-xxs/normal",
                                  children: "impressions stack",
                              }),
                              (0, i.jsx)("div", { className: M.t$, children: JSON.stringify(t, void 0, 2) }),
                          ],
                      }),
                  ],
              }),
          })
        : null;
}
var x = n(501280),
    V = n(735438),
    F = n.n(V),
    B = n(976634),
    H = n(866323),
    Y = n(933958),
    W = n(268218),
    K = n(400492),
    j = n(312671),
    $ = n(803224),
    z = n(309010),
    q = n(351906),
    X = n(503509),
    Q = n(5867),
    J = n(235079);
let Z = () => Promise.all([n.e("96123"), n.e("95752"), n.e("24927")]).then(n.bind(n, 710637)),
    ee = (0, W.Fe)({ createPromise: Z, webpackId: 710637 }),
    et = { transform: "scale(0.7)", opacity: 0 },
    en = { transform: "scale(1)", opacity: 1 },
    ei = r.memo(function () {
        let e = (0, d.yK)([X.A, z.A, Y.Ay], () =>
                X.A.getIncomingCalls().filter((e) => {
                    let { channel: t } = e,
                        n = z.A.getChannelId() === t.id,
                        i = null == t.guild_id && n,
                        r =
                            Y.Ay.getConnectedActivityChannelId() === t.id &&
                            z.A.getVoiceChannelId() !== t.id &&
                            Y.Ay.getActivityPanelMode() === Q.Gd.PANEL;
                    return !i || r;
                }),
            ),
            t = (0, d.bG)([X.A], () => X.A.hasIncomingCalls()),
            n = (0, d.bG)([$.A], () => $.A.isSoundDisabled("call_ringing")),
            s = (0, d.bG)([q.A], () => q.A.disableSounds),
            a = (0, d.bG)([j.A], () => j.A.getSoundpack()),
            o = r.useRef(!1),
            l = (0, B.A)(
                () =>
                    a === J.i.CLASSIC
                        ? (0, K.Qh)(
                              500 !== F().random(1, 1e3)
                                  ? "call_ringing"
                                  : F().sample(["call_ringing_beat", "call_ringing_snow_halation"]),
                              "call_ringing",
                          )
                        : (0, K.aN)("call_ringing", a),
                [a],
            );
        return (
            r.useEffect(() => {
                Z();
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
    e_ = n(567249),
    ed = n(723702),
    eu = n(538064),
    ec = n(265059),
    eE = n(652215);
let eh = (0, el.Fe)({
    createPromise: () =>
        Promise.all([
            n.e("32292"),
            n.e("24199"),
            n.e("57036"),
            n.e("88394"),
            n.e("62731"),
            n.e("34786"),
            n.e("57174"),
            n.e("38939"),
            n.e("94678"),
            n.e("2035"),
            n.e("1856"),
            n.e("64310"),
            n.e("90874"),
            n.e("93942"),
            n.e("28367"),
            n.e("45174"),
            n.e("85519"),
            n.e("11871"),
            n.e("37266"),
            n.e("55057"),
            n.e("14976"),
            n.e("63229"),
            n.e("31988"),
            n.e("55343"),
            n.e("93103"),
            n.e("80527"),
            n.e("21909"),
            n.e("31825"),
            n.e("23353"),
            n.e("96123"),
            n.e("7175"),
            n.e("37249"),
            n.e("88342"),
            n.e("14138"),
            n.e("8971"),
            n.e("88017"),
            n.e("77404"),
            n.e("1040"),
            n.e("64615"),
            n.e("17239"),
            n.e("7454"),
            n.e("64492"),
            n.e("8555"),
            n.e("20861"),
            n.e("36682"),
            n.e("45723"),
            n.e("56871"),
            n.e("69601"),
            n.e("63191"),
            n.e("40142"),
            n.e("60161"),
            n.e("51444"),
            n.e("62290"),
            n.e("98765"),
            n.e("35313"),
            n.e("65437"),
            n.e("34983"),
            n.e("80973"),
            n.e("92414"),
            n.e("95208"),
            n.e("72401"),
            n.e("47417"),
            n.e("19558"),
            n.e("58946"),
            n.e("76390"),
            n.e("93312"),
            n.e("95752"),
            n.e("67339"),
            n.e("48900"),
            n.e("31538"),
            n.e("63087"),
            n.e("98954"),
            n.e("20735"),
            n.e("227"),
            n.e("27846"),
            n.e("8306"),
            n.e("10567"),
            n.e("62718"),
            n.e("12542"),
            n.e("24170"),
            n.e("84317"),
            n.e("68883"),
            n.e("93858"),
            n.e("29594"),
            n.e("8018"),
            n.e("7637"),
            n.e("3025"),
            n.e("42282"),
            n.e("49862"),
            n.e("20382"),
            n.e("80093"),
            n.e("44647"),
            n.e("10730"),
            n.e("25657"),
            n.e("34268"),
            n.e("49320"),
            n.e("60989"),
            n.e("35327"),
            n.e("82486"),
            n.e("75349"),
            n.e("73644"),
            n.e("99011"),
            n.e("54490"),
            n.e("40393"),
            n.e("6159"),
            n.e("77602"),
            n.e("33773"),
            n.e("63078"),
            n.e("88808"),
            n.e("62092"),
            n.e("27752"),
            n.e("96963"),
            n.e("24431"),
            n.e("86546"),
            n.e("15373"),
            n.e("7679"),
            n.e("98970"),
            n.e("14875"),
            n.e("86300"),
            n.e("72474"),
            n.e("44935"),
            n.e("62175"),
            n.e("26663"),
            n.e("91139"),
            n.e("47568"),
            n.e("8021"),
            n.e("45675"),
            n.e("29491"),
            n.e("41706"),
            n.e("62597"),
            n.e("98352"),
            n.e("26297"),
            n.e("77058"),
            n.e("4986"),
            n.e("72822"),
            n.e("90779"),
            n.e("52803"),
            n.e("53275"),
            n.e("16310"),
            n.e("7121"),
            n.e("49448"),
            n.e("55811"),
            n.e("96817"),
            n.e("84704"),
            n.e("33098"),
            n.e("37886"),
            n.e("82866"),
            n.e("23324"),
            n.e("91652"),
            n.e("25013"),
            n.e("56686"),
            n.e("2059"),
            n.e("20803"),
            n.e("98083"),
            n.e("95782"),
            n.e("49914"),
            n.e("40114"),
            n.e("19119"),
            n.e("83518"),
            n.e("67646"),
            n.e("51050"),
            n.e("76477"),
            n.e("23536"),
            n.e("39967"),
            n.e("13504"),
            n.e("78467"),
            n.e("48612"),
            n.e("38249"),
            n.e("40976"),
            n.e("85216"),
            n.e("96234"),
            n.e("6044"),
            n.e("9842"),
            n.e("18294"),
            n.e("11848"),
            n.e("24639"),
            n.e("96975"),
            n.e("20172"),
            n.e("83438"),
            n.e("36423"),
            n.e("4787"),
            n.e("5536"),
            n.e("81161"),
            n.e("66774"),
            n.e("81250"),
            n.e("24805"),
            n.e("52813"),
            n.e("21595"),
            n.e("18779"),
            n.e("46454"),
            n.e("30803"),
            n.e("31294"),
        ]).then(n.bind(n, 902592)),
    webpackId: 902592,
});
function em(e) {
    let { mobile: t } = e,
        n = (0, d.bG)([P.A], () => P.A.isDeveloper),
        s = (0, d.bG)([ec.A], () => ec.A.displayTools),
        a = (0, d.bG)([e_.A], () => e_.A.getWindowOpen(eE.MLl.DEVTOOLS_POPOUT)),
        o = r.useCallback((e) => {
            ((0, ed.isMac)() ? e.metaKey : e.ctrlKey) && e.altKey && "KeyO" === e.code && (0, eu.pf)();
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
    eI = n(183636),
    eA = n(469177),
    ep = n(361158),
    eT = n(80556),
    eS = n(267102);
n(321073);
var eN = n(133171),
    eO = n(885576),
    eR = n(287809),
    eC = n(818348),
    ey = n(801964);
function eD() {
    let e = (0, d.bG)([v.Ay], () => v.Ay.get("idle_status_indicator")),
        t = (0, d.bG)([eR.default], () => eR.default.getCurrentUser()?.isStaff() ?? !1),
        [n, r] = (0, d.yK)([eO.A], () => [eO.A.isIdle(), eO.A.isAFK()]),
        s = [];
    return (
        n || r || s.push("ACTIVE"),
        n && s.push("IDLE"),
        r && s.push("AFK"),
        t && e
            ? (0, i.jsx)(w.Ay, {
                  children: (0, i.jsxs)("div", {
                      className: ey.kL,
                      children: [
                          (0, i.jsxs)("div", {
                              className: ey.h5,
                              children: [
                                  (0, i.jsx)(eN.nW, {
                                      status: s.includes("ACTIVE") ? eC.cl.ONLINE : eC.cl.IDLE,
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
                                      new Date(eO.A.getIdleSince() ?? 0).toLocaleDateString(void 0, {
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
var eL = n(164942),
    ev = n(189213),
    ew = n(827343),
    eP = n(969341),
    eb = n(985018);
let ek = () => {
    let e = (0, d.bG)([eP.Ay], () => eP.Ay.isInteractionRequired(), []),
        t = r.useRef(null);
    function n() {
        null !== t.current && ((0, E.closeModal)(t.current), (t.current = null));
    }
    return (
        r.useEffect(
            () => (
                e
                    ? (t.current = (0, E.openModal)((e) =>
                          (0, i.jsx)(ev.Modal, {
                              title: eb.intl.string(eb.t.dLLxC2),
                              subtitle: eb.intl.string(eb.t["64lmtw"]),
                              actions: [
                                  {
                                      text: eb.intl.string(eb.t.BddRzS),
                                      onClick: () => {
                                          ew.A.interact(), e.onClose();
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
var eU = n(386406),
    eM = n(228366),
    eG = n(495544),
    ex = n(734057),
    eV = n(576705),
    eF = n(763827),
    eB = n(977997);
let eH = !0,
    eY = !0;
function eW() {
    let e,
        t = eF.A.getChannelId();
    if (null == t) e = !0;
    else {
        let n = ex.A.getChannel(t),
            i = eB.A.getVoiceState(n?.getGuildId(), eG.default.getId());
        e =
            eP.Ay.getMode() !== eE.TBI.VOICE_ACTIVITY ||
            null == n ||
            n.isPrivate() ||
            n.isGuildStageVoice() ||
            eV.A.can(eE.xBc.USE_VAD, n) ||
            null == i ||
            !!i.suppress ||
            null != i.requestToSpeakTimestamp;
    }
    return eH !== e && ((eY = e), (eH = e), eM.h.dispatch({ type: "SET_VAD_PERMISSION", hasPermission: eH }), !0);
}
class eK extends d.Ay.Store {
    static displayName = "PermissionVADStore";
    initialize() {
        this.waitFor(eG.default, ex.A, eP.Ay, eV.A, eF.A, eB.A);
    }
    shouldShowWarning() {
        return !eY;
    }
    canUseVoiceActivity() {
        return eH;
    }
}
let ej = new eK(eM.h, {
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
            return t === eG.default.getId() && eW();
        });
    },
    AUDIO_TOGGLE_SELF_MUTE: function () {
        eY = eH;
    },
    PERMISSION_CLEAR_VAD_WARNING: function () {
        eY = !0;
    },
});
function e$(e) {
    return (0, i.jsx)(ev.Modal, {
        size: "md",
        title: eb.intl.string(eb.t.NYklhr),
        subtitle: eb.intl.string(eb.t.EJ26Oh),
        actions: [
            {
                text: eb.intl.string(eb.t.UYW0dz),
                onClick: () => {
                    e.onClose(), eU.A.clearVADWarning();
                },
                variant: "secondary",
            },
            {
                text: eb.intl.string(eb.t.E3Y7NH),
                onClick: () => {
                    ew.A.setMode(eE.TBI.PUSH_TO_TALK), e.onClose(), eU.A.clearVADWarning();
                },
                variant: "primary",
            },
        ],
        ...e,
    });
}
function ez() {
    let e = (0, d.bG)([ej], () => ej.shouldShowWarning(), []),
        t = r.useRef(null);
    function n() {
        null !== t.current && ((0, E.closeModal)(t.current), (t.current = null));
    }
    return (
        r.useEffect(
            () => (
                e ? (t.current = (0, E.openModal)((e) => (0, i.jsx)(e$, { ...e }))) : n(),
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
    eQ = n(328153),
    eJ = n(935671),
    eZ = n(975571);
function e0(e) {
    let { currentGame: t, ...n } = e,
        [s, a] = r.useState(!1);
    return (
        (0, eX.l0)(() => {
            s && eU.A.clearPTTAdminWarning();
        }),
        (0, i.jsx)(ev.Modal, {
            size: "md",
            title: eb.intl.string(eb.t.eotlXE),
            subtitle: eb.intl.formatToPlainString(eb.t.Lw6KXV, { game: t?.name }),
            actions: [
                {
                    text: eb.intl.string(eb.t.psXQHP),
                    onClick: () => {
                        n.onClose(), window.open(eZ.A.getArticleURL(eE.MVz.PUSH_TO_TALK_ADMINISTRATOR_MODE), "_blank");
                    },
                },
            ],
            actionBarInput: (0, i.jsx)(eq.S, {
                checked: s,
                onChange: (e) => a(e),
                label: eb.intl.string(eb.t["5E9SB9"]),
                labelType: "secondary",
            }),
            ...n,
        })
    );
}
function e1() {
    let [e, t] = (0, d.yK)([eQ.Ay], () => [eQ.Ay.canShowAdminWarning, eQ.Ay.getVisibleGame()], []),
        n = (0, d.bG)([eF.A], () => eF.A.isConnected(), []),
        s = (0, d.bG)([eP.Ay], () => eP.Ay.getMode() === eE.TBI.PUSH_TO_TALK, []),
        a = null != t && t.elevated && n && s && e,
        o = r.useRef(null);
    return (
        r.useEffect(() => {
            if (!(0, eJ.yA)(eQ.Ay))
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
            ? ((t = eb.intl.string(eb.t.Y40Jke)), (n = eb.intl.string(eb.t["5J4yGc"])))
            : ((t = eb.intl.string(eb.t.FJSZVM)), (n = eb.intl.string(eb.t.etJjgW))),
        (0, i.jsx)(ev.Modal, {
            size: "md",
            title: t,
            subtitle: n,
            actions: [
                {
                    text: eb.intl.string(eb.t.BddRzS),
                    onClick: () => {
                        a.onClose(), eU.A.clearSuppressWarning(o);
                    },
                    variant: "primary",
                },
            ],
            actionBarInput: (0, i.jsx)(eq.S, {
                checked: o,
                onChange: (e) => l(e),
                label: eb.intl.string(eb.t["5E9SB9"]),
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
        let [s, a] = (0, d.yK)([e3.A], () => [e3.A.shouldShowWarning(), e3.A.isAFKChannel()], []),
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
            children: [(0, i.jsx)(e1, {}), (0, i.jsx)(ek, {}), (0, i.jsx)(e4, {}), (0, i.jsx)(ez, {})],
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
    t_ = n(793943),
    td = n(234419),
    tu = n(725807),
    tc = n(450232),
    tE = n(780964),
    th = n(858897),
    tm = n(954571),
    tf = n(927578);
function tg() {
    eM.h.dispatch({ type: "APP_ICON_EDITOR_RESET" });
}
var tI = n(526162),
    tA = n(806932),
    tp = n(635917),
    tT = n(49999),
    tS = n(788868),
    tN = n(564194);
let tO = () => {
        let e = (0, d.bG)([eR.default], () => tf.Ay.isPremium(eR.default.getCurrentUser())),
            t = (0, td.V)(),
            n = t?.subscription_trial?.sku_id === tS.pe.TIER_2;
        return (0, i.jsx)(tu.A, {
            size: tt.$n.Sizes.MEDIUM,
            textOptions: {
                textOverride: e
                    ? eb.intl.string(eb.t.IJI7yk)
                    : n
                      ? (0, tf.FY)({
                            intervalType: t?.subscription_trial?.interval,
                            intervalCount: t?.subscription_trial?.interval_count,
                        })
                      : eb.intl.string(eb.t.mr4K7D),
            },
            subscriptionTier: tS.pe.TIER_2,
        });
    },
    tR = (e) => {
        let { markAsDismissed: t } = e;
        return (0, i.jsxs)("div", {
            className: tN.nV,
            children: [
                (0, i.jsx)(C.D, {
                    className: tN.VV,
                    onClick: () => void (t?.(tT.i.DISMISS), (0, t_.Jp)(), tg()),
                    children: (0, i.jsx)(L.a, { size: "md", color: "currentColor", className: tN.P0 }),
                }),
                (0, i.jsxs)("div", {
                    className: tN.DD,
                    children: [
                        (0, i.jsx)(tn.D, { variant: "heading-lg/extrabold", children: eb.intl.string(eb.t["hb/wE0"]) }),
                        (0, i.jsx)(tc.A, { color: ti.A.colors.TEXT_STRONG, size: "sm", className: tN.PC }),
                    ],
                }),
            ],
        });
    },
    tC = (e) => {
        let { isCoachmark: t, markAsDismissed: n } = e,
            r = (0, d.bG)([tI.A], () => tI.A.isUpsellPreview);
        return (0, i.jsxs)("div", {
            className: tN.N3,
            children: [
                r && (0, i.jsx)(tO, {}),
                (0, i.jsx)(te.$, {
                    onClick: () => {
                        n?.(tT.i.DISMISS),
                            (0, t_.Jp)(),
                            tg(),
                            t || (0, th.openUserSettings)(tE.X.APPEARANCE_IN_APP_ICON_CATEGORY);
                    },
                    variant: "secondary",
                    fullWidth: !0,
                    text: r || t ? eb.intl.string(eb.t["dqH+qr"]) : eb.intl.string(eb.t.Olc2K3),
                }),
            ],
        });
    };
function ty(e) {
    let { isCoachmark: t, markAsDismissed: n, iconSize: s = tp.N8.SIZE_60 } = e,
        { analyticsLocations: o } = (0, tl.Ay)(to.A.APP_ICON_EDITOR),
        l = (0, d.bG)([eR.default], () => eR.default.getCurrentUser()),
        { isUpsellPreview: _, shouldEditorAnimate: u } = (0, d.cf)([tI.A, T.A], () => ({
            isUpsellPreview: tI.A.isUpsellPreview,
            shouldEditorAnimate: t && !T.A.useReducedMotion,
        })),
        c = t_.fy.getState().activePanel === t_.HP.APP_ICON;
    r.useEffect(() => {
        _ && tm.default.track(eE.HAw.PREMIUM_UPSELL_VIEWED, { type: tS.e.APP_ICON_UPSELL, location_stack: o });
    }, [_, o]);
    let E = (0, ta.A)(null, _ ? tg : eE.tEg);
    r.useEffect(() => {
        if (_ && !c) return tg;
    }, [_, c]);
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
                          (0, i.jsx)(tC, { markAsDismissed: n, isCoachmark: t }),
                      ],
                  }),
              }),
          });
}
var tD = n(47671),
    tL = n(176781),
    tv = n(815021),
    tw = n(672477),
    tP = n(274372);
let tb = (e) => {
    let { clips: t, onBeforeDelete: r, onAfterDelete: s } = e;
    (0, E.openModalLazy)(
        async () => {
            let { default: e } = await n.e("13367").then(n.bind(n, 223818));
            return (n) =>
                (0, i.jsx)(e, {
                    clips: t,
                    ...n,
                    onBeforeDelete: r,
                    onAfterDelete: async () => {
                        await n.onClose(), s?.();
                    },
                });
        },
        { stackingBehavior: "stack" },
    );
};
var tk = n(271597),
    tU = n(777666);
let tM = r.createContext(null),
    tG = (e) => {
        let { clip: t, children: n } = e;
        return (0, i.jsx)(tM.Provider, { value: t, children: n });
    };
var tx = n(408278),
    tV = n(241326),
    tF = n(990078);
let tB = (e) => {
    let { onBeforeDelete: t, onAfterDelete: n, variant: s = "overlay-secondary" } = e,
        a = r.useContext(tM),
        o = r.useCallback(
            (e) => {
                e.stopPropagation(), e.preventDefault(), tb({ clips: [a], onAfterDelete: n, onBeforeDelete: t });
            },
            [a, n, t],
        );
    return (0, i.jsx)(tF.m, {
        text: eb.intl.string(eb.t.oyYWHE),
        position: "top",
        children: (0, i.jsx)(tx.K, {
            onClick: o,
            icon: tV.u,
            "aria-label": eb.intl.string(eb.t.oyYWHE),
            variant: s,
            size: "sm",
        }),
    });
};
var tH = n(22231);
let tY = (e) => {
    let { variant: t = "overlay-secondary" } = e,
        n = r.useContext(tM),
        s = r.useCallback(
            (e) => {
                e.stopPropagation(), e.preventDefault(), (0, tk.p)({ initialEditingClipId: n.id });
            },
            [n],
        );
    return (0, i.jsx)(tF.m, {
        text: eb.intl.string(eb.t.bt75uw),
        position: "top",
        children: (0, i.jsx)(tx.K, {
            onClick: s,
            icon: tH.R,
            "aria-label": eb.intl.string(eb.t.bt75uw),
            variant: t,
            size: "sm",
        }),
    });
};
var tW = n(27232),
    tK = n(505930),
    tj = n(399925),
    t$ = n(16590);
let tz = () => {
    let e = r.useContext(tM),
        t = r.useCallback(
            (t) => {
                t.stopPropagation(), t.preventDefault(), (0, tj.XK)(e);
            },
            [e],
        );
    return (0, i.jsx)(
        tF.m,
        {
            text: eb.intl.string(e.isFavorite ? t$.default.IZsalP : t$.default.ihBfyA),
            position: "top",
            children: (0, i.jsx)(tx.K, {
                onClick: t,
                icon: e.isFavorite ? tW.G : tK.y,
                "aria-label": eb.intl.string(eb.t.k8fFjp),
                variant: "overlay-secondary",
                size: "sm",
            }),
        },
        `${e.id}:favorite:${e.isFavorite}`,
    );
};
var tq = n(405433),
    tX = n(602902);
let tQ = (e) => {
    let { variant: t = "primary" } = e,
        n = r.useContext(tM),
        { analyticsLocations: s } = (0, tl.Ay)(),
        a = r.useCallback(
            (e) => {
                e.stopPropagation(), e.preventDefault(), (0, tX.K)([n], { analyticsLocations: s });
            },
            [n, s],
        );
    return (0, i.jsx)(te.$, {
        onClick: a,
        icon: tq.l,
        variant: t,
        size: "sm",
        text: eb.intl.string(eb.t.RDE0Sc),
        fullWidth: !0,
    });
};
var tJ = n(66455),
    tZ = n(607470),
    t0 = n(665039),
    t1 = n(204351);
let t2 = (e) => {
    let { isPlaying: t = !1, scrubOnHover: n = !1, preload: s = "metadata", children: a } = e,
        o = r.useContext(tM),
        l = r.useRef(null),
        _ = (0, tJ.A)(o.editMetadata?.start ?? 0),
        d = (0, t0.j)(o),
        u = 0 === o.length,
        [c, E] = r.useState(0),
        h = r.useCallback(
            (e) => {
                let t = l.current;
                if (null == t) return;
                let n = o.editMetadata?.start ?? 0,
                    i = o.editMetadata?.end ?? t.duration;
                t.currentTime = Math.max(0, _.current + ((i - n) * e) / 100);
            },
            [l, _, o],
        ),
        m = r.useCallback(
            (e) => {
                if (!n || null == l.current) return;
                let t = l.current.getBoundingClientRect();
                h(((e.clientX - t.left) / t.width) * 100);
            },
            [l, n, h],
        );
    return (
        r.useEffect(() => {
            if (u) return;
            let e = l.current;
            null == e || ((!t || e.paused) && ((e.currentTime = _.current), t ? e.play() : e.pause()));
        }, [t, l, u, _]),
        r.useEffect(() => {
            let e = l?.current;
            if (null == e || u) return;
            let t = null,
                n = () => {
                    if (e.paused || e.ended) {
                        (t = null), E(0);
                        return;
                    }
                    let i = o.editMetadata?.start ?? 0,
                        r = o.editMetadata?.end ?? e.duration,
                        s = ((e.currentTime - i) / (r - i)) * 100;
                    E(isNaN(s) ? 0 : Math.max(0, Math.min(100, s))), (t = requestAnimationFrame(n));
                },
                i = () => {
                    null == t && (t = requestAnimationFrame(n));
                },
                r = () => {
                    null != t && (cancelAnimationFrame(t), (t = null), E(0));
                };
            return (
                e.addEventListener("play", i),
                e.addEventListener("pause", r),
                e.addEventListener("ended", r),
                e.paused || i(),
                () => {
                    null != t && (cancelAnimationFrame(t), E(0)),
                        e.removeEventListener("play", i),
                        e.removeEventListener("pause", r),
                        e.removeEventListener("ended", r);
                }
            );
        }, [l, u, o.editMetadata]),
        (0, i.jsxs)("div", {
            className: t1.Q,
            onMouseMove: m,
            children: [
                u
                    ? (0, i.jsx)("img", { alt: "", src: o.thumbnail, className: t1.f })
                    : null != d
                      ? (0, i.jsx)(tZ.A, {
                            preload: s,
                            poster: o.thumbnail,
                            muted: !0,
                            src: d,
                            loop: !0,
                            className: t1.f,
                            ref: l,
                        })
                      : null,
                a,
            ],
        })
    );
};
var t3 = n(780479);
let t6 = (e) => {
    let { children: t, className: n, isVisible: r = !0 } = e;
    return (0, i.jsx)("div", { className: a()(t3.n, { [t3.z]: r }, n), children: t });
};
var t4 = n(46437);
let t7 = (e) => {
        let { clip: t, isNew: n } = e,
            [s, a] = r.useState(!1),
            { scrubOnHover: o } = tw.Z.useConfig({ location: "ClipsSidebarItem" }),
            l = r.useRef(null),
            _ = r.useCallback(() => a(!0), []),
            d = r.useCallback(() => a(!1), []);
        return null == t
            ? null
            : (0, i.jsx)("div", {
                  ref: l,
                  className: t4.Jr,
                  onMouseEnter: _,
                  onMouseLeave: d,
                  onFocus: _,
                  onBlur: d,
                  children: (0, i.jsx)(tG, {
                      clip: t,
                      children: (0, i.jsxs)(t2, {
                          scrubOnHover: o,
                          isPlaying: !o && s,
                          preload: n ? "auto" : "metadata",
                          children: [
                              n && (0, i.jsx)(tU.Lp, { className: t4.Ad, text: eb.intl.string(eb.t.y2b7CA) }),
                              (0, i.jsxs)(t6, {
                                  isVisible: s,
                                  className: t4.PJ,
                                  children: [(0, i.jsx)(t5, {}), (0, i.jsx)(t8, {})],
                              }),
                          ],
                      }),
                  }),
              });
    },
    t5 = () => (0, i.jsxs)("div", { className: t4.oK, children: [(0, i.jsx)(tz, {}), (0, i.jsx)(tB, {})] }),
    t8 = () =>
        (0, i.jsxs)("div", {
            className: t4.yG,
            children: [(0, i.jsx)(tY, { variant: "primary" }), (0, i.jsx)(tQ, {})],
        });
var t9 = n(542772);
let ne = (e) => {
    let { clips: t } = e,
        n = (0, d.bG)([tP.A], () => tP.A.getLastClipsSession()?.newClipIds) ?? [];
    return (0, i.jsx)("div", {
        className: t9.u,
        children: t.map((e) => (0, i.jsx)(t7, { clip: e, isNew: n.includes(e.id) }, e.id)),
    });
};
var nt = n(994337);
let nn = (e, t) => t.createdAt - e.createdAt;
function ni() {
    let { enableReminderSidebar: e } = tw.Z.useConfig({ location: "ClipsReminderSidebar" }),
        { clips: t, remindersEnabled: n } = (0, d.cf)([tP.A], () => {
            let e = Date.now() - 6048e5;
            return {
                clips: tP.A.getClipIds()
                    .map((e) => tP.A.getClipById(e))
                    .filter((t) => t.createdAt > e)
                    .sort(nn)
                    .slice(0, 15),
                remindersEnabled: tP.A.getSettings().remindersEnabled,
            };
        });
    return (r.useEffect(() => {
        (e && n) || (0, t_.Jp)();
    }, [e, n]),
    e && n && 0 !== t.length)
        ? (0, i.jsxs)("div", {
              className: nt.kL,
              "data-app-right-panel": !0,
              children: [
                  (0, i.jsxs)("div", {
                      className: nt.wx,
                      children: [
                          (0, i.jsxs)(y.E, {
                              variant: "text-md/bold",
                              color: "text-strong",
                              className: nt.DD,
                              children: [
                                  (0, i.jsx)(tL.x, { size: "sm", color: ti.A.colors.TEXT_STRONG.css }),
                                  eb.intl.formatToPlainString(t$.default.dFu8vZ, { count: t.length }),
                              ],
                          }),
                          (0, i.jsx)(tv.J, { onClick: t_.Jp }),
                      ],
                  }),
                  (0, i.jsx)(ts.Ip, { className: nt.Qs, children: (0, i.jsx)(ne, { clips: t }) }),
                  (0, i.jsx)(nr, { clips: t }),
              ],
          })
        : null;
}
let nr = (e) => {
    let { clips: t } = e,
        n = r.useCallback(() => {
            (0, tk.p)();
        }, []),
        s = r.useCallback(() => {
            tb({ clips: t, onAfterDelete: () => (0, t_.Jp)() });
        }, [t]);
    return (0, i.jsxs)("div", {
        className: nt.qr,
        children: [
            (0, i.jsx)(te.$, {
                text: eb.intl.string(t$.default.f98Qe3),
                variant: "critical-secondary",
                size: "md",
                onClick: s,
            }),
            (0, i.jsx)(te.$, {
                text: eb.intl.string(t$.default["55C2MH"]),
                variant: "primary",
                size: "md",
                onClick: n,
            }),
        ],
    });
};
var ns = n(826673),
    na = n(932001),
    no = n(805627),
    nl = n(45945);
function n_() {
    return (0, i.jsx)("div", { "data-app-right-panel": !0, className: nl.kL });
}
let nd = (0, W.Fe)({
        createPromise: () => Promise.all([n.e("37249"), n.e("62290"), n.e("66996")]).then(n.bind(n, 974800)),
        webpackId: 974800,
        renderLoader: n_,
    }),
    nu = (0, W.Fe)({
        createPromise: () => Promise.all([n.e("37249"), n.e("62290"), n.e("51200")]).then(n.bind(n, 290948)),
        webpackId: 290948,
        renderLoader: n_,
    }),
    nc = (0, W.Fe)({
        createPromise: () => Promise.all([n.e("36682"), n.e("33049")]).then(n.bind(n, 563380)),
        webpackId: 563380,
    }),
    nE = function (e) {
        let { mobile: t } = e,
            n = (0, d.bG)([eR.default], () => tf.Ay.canUseClientThemes(eR.default.getCurrentUser())),
            r = (0, d.bG)([tD.A], () => tD.A.isCoachmark),
            s =
                null != (0, d.bG)([ex.A, z.A], () => ex.A.getChannel(z.A.getChannelId())) &&
                !!(function () {
                    try {
                        return CSS.supports("selector(:has(*))");
                    } catch (e) {
                        return !1;
                    }
                })(),
            { activePanel: a, metadata: o } = (0, t_.fy)(),
            l = (0, d.bG)([e5.A], () => e5.A.hasLayers()),
            _ = [];
        null == a &&
            !l &&
            (r && !n && _.push(e9.M.CLIENT_THEMES_COACHMARK), s && n && _.push(e9.M.CUSTOM_THEME_COACHMARK));
        let [u, c] = (0, na.kn)(_, tT.m.SIDEBAR, !0),
            E = u === e9.M.CLIENT_THEMES_COACHMARK,
            h = u === e9.M.CUSTOM_THEME_COACHMARK,
            m = a === t_.HP.CLIENT_THEMES || E,
            f = a === t_.HP.APP_ICON,
            g = a === t_.HP.CUSTOM_THEME || h,
            I = a === t_.HP.APPLICATION_TEST_MODE_DEBUG,
            A = a === t_.HP.CLIPS_REMINDER;
        if (!(m || f || g || I || A)) return null;
        let p = () =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    m &&
                        (0, i.jsx)(nd, {
                            markAsDismissed: E
                                ? c
                                : () => {
                                      (0, ns.Dr)(e9.M.CLIENT_THEMES_COACHMARK, {
                                          dismissAction: tT.i.INDIRECT_ACTION,
                                          forceTrack: !0,
                                      });
                                  },
                            showClientThemesCoachmark: E,
                        }),
                    f && (0, i.jsx)(ty, { isCoachmark: !1, markAsDismissed: c }),
                    g && (0, i.jsx)(nu, { metadata: o ?? {}, markAsDismissed: c, isCoachmark: h, isMobile: t }),
                    I && (0, i.jsx)(nc, {}),
                    A && (0, i.jsx)(ni, {}),
                ],
            });
        return t ? (0, i.jsx)("div", { className: no.A, children: p() }) : p();
    };
var nh = n(404374),
    nm = n(573435),
    nf = n(71855),
    ng = n(906292);
n(939857),
    Promise.resolve()
        .then(n.bind(n, 677134))
        .then((e) => {
            ed.isPlatformEmbedded
                ? window.addEventListener("contextmenu", e.contextMenuCallbackNative, !1)
                : window.addEventListener("contextmenu", e.contextMenuCallbackWeb, !1);
        }),
    (0, c.h)({ getDefaultLinkInterceptor: p.default }),
    (0, W.Fe)({
        createPromise: () => Promise.all([n.e("94678"), n.e("1856"), n.e("4787"), n.e("8188")]).then(n.bind(n, 441588)),
        webpackId: 441588,
    }),
    (0, W.Fe)({
        createPromise: () =>
            Promise.all([n.e("94678"), n.e("1856"), n.e("4787"), n.e("56795")]).then(n.bind(n, 461624)),
        webpackId: 461624,
    });
let nI = (0, W.Fe)({ createPromise: () => n.e("99063").then(n.bind(n, 154056)), webpackId: 154056 }),
    nA = r.memo(function () {
        let e = (0, d.bG)([e5.A], () => e5.A.hasLayers()),
            t = (0, E.useModalsStore)(E.hasAnyModalOpen),
            n = (0, d.bG)([eG.default], () => eG.default.isAuthenticated());
        return (0, i.jsx)(nf.v5, { fixed: !0, show: e || t || !n, isLayerOpen: e });
    }),
    np = function (e) {
        var t;
        let n,
            { children: s, skipsSettingDefaultPageTitle: c } = e,
            E = (0, ed.getPlatform)(),
            p = o.Fr || o.v1,
            R = (0, d.bG)([T.A], () => (T.A.useForcedColors ? "yes" : "no")),
            C = r.useRef(document.body),
            y = `${R}`;
        (t = "AppSkeleton"),
            (n = eI.A.useCanUIRequestGatewaySocket()),
            r.useEffect(() => {
                if (n)
                    return (
                        eA.uG(t),
                        () => {
                            eA.qr(t);
                        }
                    );
            }, [t, n]);
        let D = (0, eg.sK)("AppSkeleton");
        return (
            r.useEffect(() => {
                D ? u.w.set(eg.AL, !0) : u.w.remove(eg.AL);
            }, [D]),
            (0, i.jsx)(
                eL.e,
                {
                    children: (0, i.jsxs)(S.A, {
                        children: [
                            (0, i.jsx)(e8.A, { skipsSettingDefaultPageTitle: c }),
                            (0, i.jsx)(A.N, {
                                children: (0, i.jsx)(ef.A, {
                                    children: (0, i.jsxs)(h.xp, {
                                        containerRef: C,
                                        children: [
                                            (0, i.jsx)(nm.Al, {}),
                                            (0, i.jsx)(nh.Ay, {}),
                                            (0, i.jsx)(_.Ut, {}),
                                            (0, i.jsx)(eS.Wr, {
                                                appContext: eE.BRT.APP,
                                                renderWindow: window,
                                                children: (0, i.jsxs)(w.Yf, {
                                                    children: [
                                                        null != E ? (0, i.jsx)(nA, {}) : null,
                                                        (0, i.jsxs)("div", {
                                                            className: a()(ng.XX, p && ng.Xq),
                                                            children: [
                                                                (0, i.jsx)(eo.C1, {}),
                                                                (0, i.jsx)("div", {
                                                                    className: ng.x$,
                                                                    "data-app-not-dev-tools": !0,
                                                                    children: (0, i.jsx)(ea.l, {
                                                                        children: (0, i.jsx)(eT.ks, {
                                                                            children: (0, i.jsx)(N.A.Provider, {
                                                                                value: O.A,
                                                                                children: (0, i.jsxs)(es, {
                                                                                    children: [
                                                                                        (0, i.jsx)("div", {
                                                                                            className: a()(
                                                                                                p ? ng.C$ : ng.yA,
                                                                                            ),
                                                                                            children: s,
                                                                                        }),
                                                                                        (0, i.jsx)(g.A, {}),
                                                                                        (0, i.jsx)(x.A, {}),
                                                                                        (0, i.jsx)(I.A, {}),
                                                                                        (0, i.jsx)(m.b, {}),
                                                                                        (0, i.jsx)(e7, {}),
                                                                                        (0, i.jsx)(ep.up, {}),
                                                                                        (0, i.jsx)(l.P, {}),
                                                                                        (0, i.jsx)(w.C8, {}),
                                                                                        (0, i.jsx)(eT.ok, {}),
                                                                                        (0, i.jsx)(f.N, {
                                                                                            appContext: eE.BRT.APP,
                                                                                        }),
                                                                                        (0, i.jsx)(G, {}),
                                                                                        (0, i.jsx)(eD, {}),
                                                                                        (0, i.jsx)(nI, {}),
                                                                                    ],
                                                                                }),
                                                                            }),
                                                                        }),
                                                                    }),
                                                                }),
                                                                (0, i.jsx)(ei, {}),
                                                                (0, i.jsx)(nE, { mobile: p }),
                                                                (0, i.jsx)(em, { mobile: p }),
                                                            ],
                                                        }),
                                                        !1,
                                                    ],
                                                }),
                                            }),
                                            (0, i.jsx)(_.Ut, {}),
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
