n.d(t, { Jd: () => nT, Ay: () => nR, h9: () => nv, bG: () => nS });
var l = n(477900),
    i = n(582128),
    s = n(435558),
    r = n.n(s),
    a = n(837381),
    o = n(681154),
    u = n(17928),
    c = n(922016),
    d = n(939249),
    h = n(442433),
    m = n(775602),
    f = n(941726),
    p = n(963307),
    g = n(287809),
    x = n(947593),
    A = n(468581),
    C = n(808666),
    E = n(821609),
    I = n(414499),
    y = n(323384),
    S = n(55730),
    v = n(765379),
    N = n(146779),
    _ = n(284525),
    j = n(793574),
    b = n(482030),
    T = n(627363),
    R = n(403362),
    O = n(583846),
    M = n(506326),
    L = n(503698),
    k = n.n(L),
    w = n(284009),
    P = n.n(w);
n(333007);
var D = n(554146),
    U = n(661531),
    V = n(342952),
    G = n(315710),
    F = n(43990),
    H = n(866665),
    B = n(276293),
    W = n(935063),
    K = n(789645),
    z = n(778712),
    Z = n(696986),
    Y = n(297264),
    q = n(834730),
    J = n(320448),
    $ = n(97808),
    X = n(738188),
    Q = n(983851),
    ee = n(31300),
    et = n(308528),
    en = n(367513),
    el = n(730852),
    ei = n(401843),
    es = n(969151),
    er = n(736653),
    ea = n(355622),
    eo = n(408018),
    eu = n(959070),
    ec = n(375499),
    ed = n(429433),
    eh = n(95701),
    em = n(652215),
    ef = n(375708),
    ep = n(324688);
let eg = (0, eh.createChannelRecord)({ id: "1", type: em.rbe.DM });
function ex(e) {
    let {
            placeholder: t,
            onEnter: n,
            setEditorRef: s,
            showEmojiButton: r = !1,
            renderAttachButton: a,
            autoFocus: o = !0,
            onFocus: u,
            channel: c,
            className: d,
        } = e,
        [h, m] = i.useState(""),
        [f, p] = i.useState((0, eo.x7)("")),
        g = ea.oU.ATOMIC_REACTOR_REPLY_INPUT,
        x = i.useRef(null);
    return (0, l.jsx)(eu.Ay, {
        ref: x,
        placeholder: t,
        editorClassName: d,
        className: k()(ep.N8, d),
        showRemainingCharsAfterCount: -1,
        allowNewLines: !1,
        maxCharacterCount: 200,
        channel: c ?? eg,
        onChange: (e, t, n) => {
            (m(t), p(n));
        },
        type: r ? { ...g, emojis: { button: !0 } } : g,
        textValue: h,
        richValue: f,
        onSubmit: (e) => {
            let { value: t } = e;
            return t.length > 200
                ? Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })
                : (n(t), m(""), p((0, eo.x7)("")), Promise.resolve({ shouldClear: !0, shouldRefocus: !1 }));
        },
        setEditorRef: s,
        focused: o,
        onFocus: u,
        disableThemedBackground: !0,
        emojiPickerCloseOnModalOuterClick: !0,
        disabled: !1,
        autoCompletePosition: (function () {
            if (null == x.current) return "top";
            let e = x.current.getBoundingClientRect(),
                t = window.innerHeight;
            return e.top < t / 2 ? "bottom" : "top";
        })(),
        renderAttachButton: a,
    });
}
function eA(e) {
    var t;
    let { onSelectEmoji: n, onClick: s } = e,
        r = (0, er.Ay)(),
        [a, o] = i.useState(!1),
        u = i.useRef(null),
        d = i.useRef(null);
    return (
        (t = () => o(!1)),
        i.useEffect(() => {
            function e(e) {
                "Escape" === e.key && t();
            }
            function n(e) {
                null != e.target && (u?.current?.contains(e?.target) || t());
            }
            return (
                document.addEventListener("keydown", e),
                document.addEventListener("mousedown", n),
                () => {
                    (document.removeEventListener("keydown", e), document.removeEventListener("mousedown", n));
                }
            );
        }, [t, u]),
        (0, l.jsx)(c.Y, {
            targetElementRef: d,
            align: "right",
            position: "top",
            shouldShow: a,
            disablePointerEvents: !1,
            renderPopout: () =>
                (0, l.jsx)(F.N, {
                    theme: r,
                    children: (e) =>
                        (0, l.jsx)("div", {
                            className: e,
                            ref: u,
                            children: (0, l.jsx)(ed.C, {
                                messageId: em.dJq,
                                channel: eg,
                                closePopout: () => {
                                    o(!1);
                                },
                                onSelectEmoji: (e) => {
                                    let { emoji: t, willClose: l, isBurst: i } = e;
                                    null != t && (n({ emoji: t, willClose: l, isBurst: i }), o(!1));
                                },
                            }),
                        }),
                }),
            children: () =>
                (0, l.jsx)(H.m, {
                    text: ef.intl.string(ef.t.lfIHs4),
                    children: (0, l.jsx)("div", {
                        ref: d,
                        className: ep.mJ,
                        children: (0, l.jsx)(ec.A, {
                            active: !1,
                            tabIndex: 0,
                            onClick: () => {
                                (s?.(), o(!0));
                            },
                        }),
                    }),
                }),
        })
    );
}
var eC = n(47167),
    eE = n(262763),
    eI = n(402216),
    ey = n(268218),
    eS = n(826673),
    ev = n(822123),
    eN = n(409626),
    e_ = n(692969),
    ej = n(711589),
    eb = n(607407),
    eT = n(548118),
    eR = n(499211),
    eO = n(378570),
    eM = n(832163),
    eL = n(533562),
    ek = n(202091),
    ew = n(805901),
    eP = n(565645);
n(915089);
var eD = n(713517);
n(267889);
var eU = n(7584);
(n(850992), n(690521), n(806931));
var eV = n(307731);
n(650583);
var eG = n(866780);
function eF(e) {
    let { emoji: t, isDisabled: n = !1, onClick: s, className: r } = e,
        a = i.useRef(null),
        o = (0, eD.M)(a);
    return (0, l.jsx)("span", {
        ref: a,
        children: (0, l.jsx)(d.D, {
            onClick: s,
            focusProps: { enabled: !n },
            children: (0, l.jsx)(ew.c, {
                config: ec.B,
                from: { value: 0 },
                to: { value: +!!o },
                children: (e) => {
                    let { value: i } = e;
                    return (0, l.jsx)(ek.animated.div, {
                        style: { transform: i.to([0, 1], [1, 1.14]).to((e) => `scale(${e})`) },
                        children: (0, l.jsx)(eP.A, {
                            className: k()(eG.Zg, r, { [eG.c4]: n }),
                            emojiId: t.id,
                            emojiName: t?.surrogates,
                            animated: t.animated,
                        }),
                    });
                },
            }),
        }),
    });
}
(eV.EmojiIntention.CHAT,
    [
        eU.Ay.getByName("thumbsup"),
        eU.Ay.getByName("eyes"),
        eU.Ay.getByName("laughing"),
        eU.Ay.getByName("watermelon"),
        eU.Ay.getByName("fork_and_knife"),
        eU.Ay.getByName("yum"),
    ].filter(R.Vq));
var eH = n(636585),
    eB = n(734057),
    eW = n(71393),
    eK = n(576705),
    ez = n(994500),
    eZ = n(543465),
    eY = n(977997),
    eq = n(607567),
    eJ = n(174459),
    e$ = n(486020),
    eX = n(562153),
    eQ = n(939341),
    e0 = n(20805),
    e1 = n(22869),
    e2 = n(623671),
    e3 = n(428249),
    e8 = n(327098),
    e6 = n(576757),
    e5 = n(202195),
    e7 = n(140651),
    e4 = n(43105),
    e9 = n(131607),
    te = n(49999),
    tt = n(345394);
let tn = function (e) {
    let { children: t } = e,
        [n, s] = (0, e9.kn)([D.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP]),
        [r, a] = i.useState(!1),
        o = i.useRef(null);
    i.useEffect(() => {
        let e = setTimeout(() => {
            a(!0);
        }, 300);
        return () => clearTimeout(e);
    }, []);
    let u = i.useCallback(() => {
        s(te.i.USER_DISMISS);
    }, [s]);
    return n !== D.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP
        ? t
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)("div", { ref: o, children: t }),
                  (0, l.jsx)(e4.A, {
                      targetElementRef: o,
                      shouldShow: r,
                      onRequestClose: u,
                      position: "left",
                      title: ef.intl.string(ef.t.V5y3qZ),
                      body: ef.intl.string(ef.t.eSDHDk),
                      graphic: { type: "image", src: tt.A },
                  }),
              ],
          });
};
var tl = n(315246),
    ti = n(866323),
    ts = n(857250),
    tr = n(97483),
    ta = n(289873),
    to = n(339190),
    tu = n(655214);
function tc() {
    return (0, l.jsxs)("div", {
        className: tu.oR,
        children: [
            (0, l.jsx)(ta.y, { type: ta.t.SPINNING_CIRCLE_SIMPLE, className: to.S }),
            (0, l.jsx)(q.E, {
                color: "text-strong",
                variant: "text-md/normal",
                children: ef.intl.string(ef.t["5z/hlE"]),
            }),
        ],
    });
}
let td = (e) => {
    let { shown: t, sent: n, className: i } = e,
        s = (0, u.bG)([m.Ay], () => m.Ay.useReducedMotion),
        r = (0, ti.p)(
            t,
            {
                from: { transform: s ? "translateY(0)" : "translateY(16px)", opacity: 0 },
                enter: { transform: "translateY(0)", opacity: 1 },
                leave: { transform: s ? "translateY(0)" : "translateY(16px)", opacity: 0 },
                config: { mass: 1, tension: 500, friction: 18, clamp: !0 },
                delay: 200,
            },
            "animate-always",
        );
    return (0, l.jsx)(l.Fragment, {
        children: r(
            (e, t) =>
                t &&
                (0, l.jsx)(ek.animated.div, {
                    className: i,
                    style: e,
                    children: n
                        ? (0, l.jsx)(ts.y, {
                              message: ef.intl.string(ef.t.fjcCk5),
                              type: tr.Ck.SUCCESS,
                              id: "success_message_toast",
                          })
                        : (0, l.jsx)(ts.y, {
                              message: "",
                              type: tr.Ck.CUSTOM,
                              id: "custom_loading_message_toast",
                              options: { component: (0, l.jsx)(tc, {}) },
                          }),
                }),
        ),
    });
};
var th = n(424994),
    tm = n(381941),
    tf = n(699976),
    tp = n(231188);
let tg = (0, ey.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("291103"),
                n.e("419121"),
                n.e("315513"),
                n.e("162775"),
                n.e("60882"),
                n.e("121046"),
                n.e("489020"),
                n.e("919789"),
                n.e("669130"),
                n.e("70866"),
                n.e("802890"),
                n.e("377109"),
                n.e("74886"),
                n.e("713273"),
                n.e("656997"),
                n.e("324732"),
                n.e("679157"),
                n.e("1955"),
                n.e("341161"),
                n.e("401696"),
                n.e("202985"),
                n.e("455021"),
                n.e("812196"),
                n.e("661630"),
                n.e("470126"),
                n.e("128804"),
                n.e("71151"),
                n.e("227853"),
                n.e("286615"),
                n.e("311541"),
                n.e("472847"),
                n.e("986735"),
                n.e("586662"),
                n.e("758053"),
                n.e("247471"),
                n.e("889002"),
                n.e("462408"),
                n.e("709976"),
                n.e("750955"),
                n.e("953343"),
                n.e("405763"),
                n.e("25300"),
                n.e("686731"),
                n.e("807432"),
                n.e("873532"),
                n.e("279774"),
                n.e("307158"),
                n.e("410470"),
                n.e("295570"),
                n.e("765208"),
                n.e("711562"),
                n.e("906470"),
                n.e("661157"),
                n.e("730931"),
                n.e("82937"),
                n.e("987221"),
                n.e("253781"),
                n.e("132964"),
                n.e("254215"),
                n.e("314304"),
                n.e("853855"),
                n.e("157064"),
                n.e("831835"),
                n.e("156957"),
                n.e("363189"),
                n.e("604153"),
                n.e("641877"),
                n.e("866212"),
                n.e("535308"),
                n.e("762309"),
                n.e("340341"),
                n.e("918786"),
                n.e("352421"),
                n.e("970760"),
                n.e("701335"),
                n.e("257935"),
                n.e("724086"),
                n.e("358937"),
                n.e("448738"),
                n.e("548938"),
                n.e("258407"),
                n.e("894292"),
                n.e("153302"),
                n.e("836576"),
                n.e("661779"),
                n.e("923981"),
                n.e("750370"),
                n.e("686809"),
                n.e("636909"),
                n.e("466592"),
                n.e("73946"),
                n.e("282050"),
                n.e("436101"),
                n.e("976888"),
                n.e("387970"),
                n.e("847445"),
                n.e("919659"),
                n.e("698136"),
                n.e("718368"),
                n.e("983513"),
                n.e("76928"),
                n.e("355502"),
                n.e("528311"),
                n.e("38012"),
                n.e("156422"),
                n.e("348567"),
                n.e("452075"),
                n.e("900277"),
                n.e("127962"),
                n.e("968201"),
                n.e("161282"),
                n.e("76428"),
                n.e("77473"),
                n.e("863232"),
                n.e("364827"),
                n.e("25279"),
                n.e("907167"),
                n.e("517888"),
                n.e("784569"),
                n.e("811133"),
                n.e("861060"),
                n.e("959880"),
                n.e("174016"),
                n.e("910471"),
                n.e("11301"),
                n.e("952372"),
                n.e("262156"),
                n.e("960235"),
                n.e("425412"),
                n.e("77333"),
                n.e("910486"),
                n.e("56366"),
                n.e("147662"),
                n.e("265607"),
                n.e("331988"),
                n.e("544571"),
                n.e("40291"),
                n.e("402368"),
                n.e("733115"),
                n.e("397270"),
                n.e("190779"),
                n.e("373122"),
                n.e("217951"),
                n.e("221856"),
                n.e("293159"),
                n.e("755936"),
                n.e("798233"),
                n.e("172503"),
                n.e("833703"),
                n.e("256274"),
                n.e("362931"),
                n.e("745959"),
                n.e("858529"),
                n.e("481987"),
                n.e("595653"),
                n.e("958038"),
                n.e("171202"),
                n.e("346802"),
                n.e("576909"),
                n.e("406174"),
                n.e("715555"),
                n.e("407170"),
                n.e("27773"),
                n.e("132191"),
                n.e("577084"),
                n.e("682337"),
                n.e("371133"),
                n.e("454625"),
                n.e("523276"),
                n.e("729963"),
                n.e("812042"),
                n.e("102328"),
                n.e("896137"),
                n.e("830938"),
                n.e("563983"),
                n.e("821924"),
                n.e("837687"),
                n.e("147864"),
                n.e("50097"),
                n.e("638257"),
                n.e("348900"),
                n.e("182069"),
                n.e("35485"),
                n.e("446800"),
                n.e("384996"),
                n.e("306306"),
                n.e("920282"),
                n.e("963584"),
                n.e("654282"),
                n.e("363618"),
                n.e("928662"),
                n.e("534928"),
                n.e("40286"),
                n.e("880239"),
                n.e("860177"),
                n.e("875016"),
                n.e("2329"),
                n.e("278412"),
                n.e("235996"),
                n.e("509856"),
                n.e("476087"),
                n.e("791824"),
                n.e("628752"),
                n.e("831445"),
                n.e("423532"),
                n.e("262841"),
                n.e("488990"),
                n.e("509793"),
                n.e("143549"),
                n.e("697526"),
                n.e("710575"),
                n.e("881379"),
                n.e("154630"),
                n.e("521574"),
                n.e("906723"),
                n.e("209729"),
                n.e("736926"),
                n.e("214866"),
                n.e("93461"),
                n.e("474907"),
                n.e("604172"),
                n.e("437961"),
                n.e("949013"),
                n.e("309763"),
                n.e("820667"),
            ]).then(n.bind(n, 316725)),
        webpackId: 316725,
    }),
    tx = i.createContext(void 0);
function tA(e) {
    let { children: t } = e,
        n = i.useRef(null),
        s = i.useId();
    return (
        (0, G.tj)(n),
        (0, l.jsx)(tx.Provider, {
            value: s,
            children: (0, l.jsx)("div", {
                ref: n,
                className: tp.SW,
                role: "dialog",
                "aria-modal": "true",
                "aria-labelledby": s,
                tabIndex: -1,
                children: t,
            }),
        })
    );
}
function tC(e) {
    let { children: t, backgroundImgSrc: n, className: i, style: s = {} } = e,
        { primaryColor: r, secondaryColor: a } = (0, e7.A)(n);
    return (
        null != n && (s.background = `linear-gradient(45deg, ${r}, ${a})`),
        (0, l.jsx)(F.N, {
            theme: em.NJ8.DARK,
            disableAdaptiveTheme: !0,
            children: (e) => (0, l.jsx)("div", { className: k()(tp.ZK, e, i), style: s, children: t }),
        })
    );
}
function tE(e) {
    let { children: t } = e;
    return (0, l.jsx)("div", { className: tp.$m, children: t });
}
function tI(e) {
    var t;
    let n,
        s,
        r,
        a,
        { channel: o, user: c, onReaction: h, entry: m, buttons: f = [], header: p, onVoiceChannelPreview: x } = e,
        [A, C] = i.useState(!1),
        [I, y] = i.useState(null),
        S = (0, u.bG)(
            [eK.A],
            () => null != o && em.kvI.CONTENT_ENTRY_EMBEDS.has(o.type) && eK.A.can(em.xBc.SEND_MESSAGES, o),
        ),
        [v, N] = i.useState(!1),
        [_, j] = i.useState(!1),
        { voiceBar: b, joinVoiceButton: T } = (function (e) {
            let { channel: t, entry: n, onVoiceChannelPreview: s } = e,
                { streamPreviewUrl: r, channel: a } = (0, e5.A)(n),
                o = (0, eC.Ay)(a),
                { needSubscriptionToAccess: c } = (0, eR.A)(t?.id),
                h = (0, u.bG)([eW.A], () => (null != a ? eW.A.getGuild(a.guild_id) : void 0)),
                m = (0, u.yK)([eq.Ay], () => (null != a ? eq.Ay.getVoiceStatesForChannel(a) : []), [a]),
                f = (0, u.bG)([eY.A], () => eY.A.isInChannel(a?.id)),
                p = i.useMemo(() => {
                    for (let e of m) {
                        let t = eB.A.getDMFromUserId(e.user.id),
                            n = null != t && eZ.Ay.isChannelMuted(null, t),
                            l = ez.A.isBlockedOrIgnored(e.user.id);
                        if (n || l) return !0;
                    }
                    return !1;
                }, [m]);
            if (null == a || null == h) return { voiceBar: void 0, joinVoiceButton: void 0 };
            let g = null != r;
            function x(e) {
                let { children: t, text: n, hasRestrictedOrMutedVCParticipant: i } = e,
                    s = i
                        ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                  (0, l.jsx)(X.WarningIcon, {
                                      size: "custom",
                                      width: 13,
                                      height: 13,
                                      className: tp.vb,
                                  }),
                                  ef.intl.string(ef.t.d6DpXI),
                              ],
                          })
                        : n;
                return (0, l.jsx)(
                    H.m,
                    {
                        "aria-label": i ? ef.intl.string(ef.t.d6DpXI) : (n ?? !1),
                        __unsupportedReactNodeAsText: s,
                        shouldShow: !0,
                        children: t,
                    },
                    "voice-preview",
                );
            }
            return {
                voiceBar: (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsxs)("div", {
                            className: tp.kP,
                            children: [
                                (0, l.jsx)(x, {
                                    text: ef.intl.string(ef.t.WIVYqJ),
                                    hasRestrictedOrMutedVCParticipant: p,
                                    children: (0, l.jsxs)(d.D, {
                                        "aria-label": ef.intl.string(ef.t.WIVYqJ),
                                        onClick: function () {
                                            null != a && (en.A.updateChatOpen(a.id, !0), (0, eO.iN)(a.id), s?.(a));
                                        },
                                        className: tp.I3,
                                        children: [
                                            (0, l.jsx)(eT.Ay, {
                                                guild: h,
                                                size: eT.Ay.Sizes.SMOL,
                                                className: tp.O9,
                                                active: !0,
                                            }),
                                            (0, l.jsx)(J._, {
                                                size: "xxs",
                                                color: U.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                            }),
                                            (0, l.jsx)(Q.H, { size: "xs", color: U.A.colors.TEXT_DEFAULT }),
                                            (0, l.jsx)(q.E, {
                                                variant: "text-sm/medium",
                                                color: "text-default",
                                                className: tp.NR,
                                                children: o,
                                            }),
                                        ],
                                    }),
                                }),
                                (0, l.jsx)(eH.A, {
                                    guildId: h.id,
                                    users: m,
                                    max: 3,
                                    renderUser: (e, t) =>
                                        (0, l.jsx)($.eu, {
                                            src: e.user.getAvatarURL(h.id, 16),
                                            size: z._3.SIZE_16,
                                            "aria-label": "avatar",
                                            className: t,
                                        }),
                                    renderMoreUsers: (e) =>
                                        (0, l.jsx)("div", {
                                            className: tp.V9,
                                            children: (0, l.jsx)(q.E, {
                                                variant: "text-xxs/semibold",
                                                color: "text-default",
                                                children: e,
                                            }),
                                        }),
                                }),
                            ],
                        }),
                        (0, l.jsx)(Z.h, { size: 16 }),
                    ],
                }),
                joinVoiceButton: f
                    ? null
                    : (0, l.jsx)(x, {
                          hasRestrictedOrMutedVCParticipant: p,
                          children: (0, l.jsx)(E.$, {
                              onClick: function () {
                                  null != a &&
                                      eE.A.handleVoiceConnect({
                                          channel: a,
                                          connected: f,
                                          needSubscriptionToAccess: c,
                                          routeDirectlyToChannel: !0,
                                      });
                              },
                              fullWidth: !0,
                              text: g ? ef.intl.string(ef.t.I6JG46) : ef.intl.string(ef.t.VJlc0S),
                              icon: g ? ee.k : Q.H,
                              variant: "active",
                              size: "md",
                          }),
                      }),
            };
        })({ channel: o, entry: m, onVoiceChannelPreview: x }),
        { embeddedActivity: R } = (0, e8.A)(m),
        O =
            ((t = R),
            (n = (0, u.bG)([eW.A], () => eW.A.getGuild((0, es.D)(t?.location)))),
            (s = (0, u.bG)([eB.A], () => eB.A.getChannel((0, es.H)(t?.location)))),
            (r = (0, u.yK)([g.default], () => t?.participants?.map((e) => g.default.getUser(e.userId)) ?? [])),
            (a = (0, eC.Ay)(s)),
            null != t && null != n && null != s && eh.k3.has(s.type)
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsxs)("div", {
                              className: tp.kP,
                              children: [
                                  (0, l.jsxs)(d.D, {
                                      "aria-label": ef.intl.string(ef.t["W/A4Qp"]),
                                      onClick: () => (0, eO.iN)(s.id),
                                      className: tp.I3,
                                      children: [
                                          (0, l.jsx)(eT.Ay, {
                                              guild: n,
                                              size: eT.Ay.Sizes.SMOL,
                                              className: tp.O9,
                                              active: !0,
                                          }),
                                          (0, l.jsx)(J._, { size: "xxs", color: U.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                                          (0, l.jsx)(B.N, { size: "xs", color: U.A.colors.TEXT_DEFAULT }),
                                          (0, l.jsx)(q.E, {
                                              variant: "text-sm/medium",
                                              color: "text-default",
                                              className: tp.NR,
                                              children: a,
                                          }),
                                      ],
                                  }),
                                  (0, l.jsx)(eH.A, {
                                      guildId: n.id,
                                      users: r,
                                      max: 3,
                                      renderUser: (e, t) =>
                                          (0, l.jsx)($.eu, {
                                              src: e.getAvatarURL(n.id, 16),
                                              size: z._3.SIZE_16,
                                              "aria-label": "avatar",
                                              className: t,
                                          }),
                                      renderMoreUsers: (e) =>
                                          (0, l.jsx)("div", {
                                              className: tp.V9,
                                              children: (0, l.jsx)(q.E, {
                                                  variant: "text-xxs/semibold",
                                                  color: "text-default",
                                                  children: e,
                                              }),
                                          }),
                                  }),
                              ],
                          }),
                          (0, l.jsx)(Z.h, { size: 16 }),
                      ],
                  })
                : null),
        M = null != T && 0 === f.length ? [T] : f,
        L = M.length > 0,
        k = M.length >= 2,
        [w, V] = i.useState(!L),
        G = eX.Ay.getName(o?.guild_id, o?.id, c),
        F = (0, eC.Ay)(o, !0),
        Y =
            null != o && A
                ? ef.intl.formatToPlainString(ef.t["8lzR/R"], { channel: F })
                : ef.intl.formatToPlainString(ef.t["4c+CAx"], { channel: `@${G}` }),
        el = A ? ef.intl.string(ef.t.Z2CUgn) : ef.intl.string(ef.t.XLGiTG);
    async function ei(e) {
        let t,
            { emoji: n } = e;
        if (null != n) {
            if (
                (eJ.default.track(em.HAw.CONTENT_POPOUT_EMOJI_CLICKED, {
                    surface_type: th.UG.GUILD_MEMBER_LIST,
                    channel_id: o?.id,
                    guild_id: o?.guild_id,
                }),
                (0, eS.Dr)(D.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP),
                N(!0),
                j(!1),
                A)
            )
                (P()(null != o, "shareToChannelMode should only be true if a valid channel is passed"), (t = o));
            else {
                let e = await et.A.getOrEnsurePrivateChannel(c.id);
                t = eB.A.getChannel(e) ?? null;
            }
            return (
                P()(null != t, "Send channel must be defined"),
                ea({
                    reply: `:${n.name}:`,
                    sendToChannel: t,
                    onComplete: (e, t) => {
                        (j(!0),
                            setTimeout(() => {
                                (N(!1), h(e, t));
                            }, 600));
                    },
                    interactionType: th.PA.REACTION_EMOJI_REACT_SENT,
                    requiresChannelReadiness: !1,
                })
            );
        }
    }
    async function er(e) {
        let t;
        if (((0, eS.Dr)(D.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), A))
            (P()(null != o, "shareToChannelMode should only be true if a valid channel is passed"), (t = o));
        else {
            let e = await et.A.openPrivateChannel({ recipientIds: c.id }),
                n = eB.A.getChannel(e);
            (P()(null != n, "DM channel must be defined"), (t = n));
        }
        let n = t.type === em.rbe.DM ? th.PA.DM_REACTION_MESSAGE_SENT : th.PA.CHANNEL_REACTION_MESSAGE_SENT;
        return ea({ reply: e, sendToChannel: t, interactionType: n, onComplete: h, requiresChannelReadiness: !0 });
    }
    async function ea(e) {
        let { reply: t, sendToChannel: n, onComplete: l, interactionType: i, requiresChannelReadiness: s } = e;
        (I?.focus(),
            await (0, e3.d)({
                channel: n,
                content: t,
                entry: m,
                whenReady: s,
                doNotNotifyOnError: !1,
                location: tm.Hx.CONTENT_INVENTORY_MEMBERLIST,
            }),
            l?.(i, n));
    }
    let eo = p ?? b ?? O;
    function eu() {
        (C((e) => !e), w && I?.focus());
    }
    function ec(e) {
        (V(e), e && I?.focus());
    }
    return (0, l.jsxs)("div", {
        style: { pointerEvents: v ? "none" : "all" },
        children: [
            (0, l.jsx)(td, { sent: _, shown: v, className: tp.Jt }),
            eo ??
                (0, l.jsx)(tn, {
                    children: (0, l.jsxs)("div", {
                        className: tp.T7,
                        children: [
                            (0, l.jsx)(ty, { channel: o, onClickSuggestion: ei }),
                            (0, l.jsx)(eA, { onSelectEmoji: ei }),
                        ],
                    }),
                }),
            (0, l.jsxs)("div", {
                className: w ? tp.P2 : tp.VE,
                children: [
                    (0, l.jsx)(ex, {
                        placeholder: Y,
                        onEnter: er,
                        setEditorRef: (e) => y(e),
                        channel: A ? o : void 0,
                        showEmojiButton: null != eo,
                        className: tp.N8,
                        autoFocus: !1,
                        renderAttachButton: S
                            ? () =>
                                  (0, l.jsx)(H.m, {
                                      text: el,
                                      children: (0, l.jsx)(d.D, {
                                          className: tp.wD,
                                          onClick: eu,
                                          children: A
                                              ? (0, l.jsx)(B.N, { size: "custom", width: 20, height: 20 })
                                              : (0, l.jsx)(W.X, { size: "custom", width: 20, height: 20 }),
                                      }),
                                  })
                            : void 0,
                    }),
                    L &&
                        (0, l.jsx)(d.D, {
                            onClick: () => ec(!1),
                            className: tp.i3,
                            children: (0, l.jsx)(K.P, {
                                size: "custom",
                                width: 20,
                                height: 20,
                                color: U.A.colors.ICON_STRONG,
                            }),
                        }),
                ],
            }),
            !1 === w &&
                (0, l.jsxs)("div", {
                    className: tp.fh,
                    children: [
                        !k &&
                            (0, l.jsx)(
                                E.$,
                                {
                                    fullWidth: !0,
                                    variant: "secondary",
                                    onClick: () => ec(!0),
                                    size: "md",
                                    text: ef.intl.string(ef.t.OAJQlP),
                                },
                                "toggleMessageMode",
                            ),
                        M,
                    ],
                }),
        ],
    });
}
let ty = (e) => {
    let { channel: t, onClickSuggestion: n } = e,
        [s, r] = i.useState(!1);
    i.useEffect(() => {
        r(!0);
    }, []);
    let a = !!m.Ay.keyboardModeEnabled && !s,
        o = (0, ev.Fj)(t?.guild_id)
            .slice(0, 5)
            .map((e) =>
                null == e.id
                    ? { emoji: e, url: e.url }
                    : { emoji: e, url: (0, e$._O)({ id: e.id, animated: e.animated, size: 58 }) },
            );
    return (0, l.jsx)(l.Fragment, {
        children: o.map((e) => {
            let { emoji: t, url: i } = e;
            return null != i
                ? (0, l.jsx)(
                      "div",
                      {
                          children: (0, l.jsx)(H.m, {
                              asContainer: !0,
                              text: ef.intl.formatToPlainString(ef.t.kilW3l, { emojiName: t.name }),
                              position: "top",
                              "aria-label": ef.intl.formatToPlainString(ef.t.kilW3l, { emojiName: t.name }),
                              shouldShow: !a && void 0,
                              children: (0, l.jsx)(eF, {
                                  emoji: t,
                                  isDisabled: !s,
                                  onClick: () => n({ emoji: t }),
                                  className: tp.Zg,
                              }),
                          }),
                      },
                      t.name,
                  )
                : null;
        }),
    });
};
function tS(e) {
    let { channel: t, userDescription: n, entry: i, disableGameProfileLinks: s, onUserPopoutClosed: r } = e,
        a = t?.guild_id,
        { displayParticipants: o, participant1: c, participant2: d, numOtherParticipants: h } = (0, e6.A)(i, 3),
        m = (0, u.bG)([g.default], () => g.default.getUser(i.author_id)),
        { streamPreviewUrl: f } = (0, e5.A)(i),
        p = [c, d];
    return (0, l.jsxs)("div", {
        className: tp.MH,
        children: [
            (0, l.jsxs)("div", {
                className: tp.WP,
                children: [
                    (0, l.jsx)(V.A, {
                        maxUsers: 3,
                        users: o,
                        guildId: a,
                        size: z._3.SIZE_24,
                        hideOverflowCount: !0,
                        disableUsernameTooltip: !0,
                        onUserPopoutRequestClose: r,
                    }),
                    (0, l.jsx)(Z.h, { size: 8, horizontal: !0 }),
                    (0, l.jsx)(Y.D, {
                        variant: "heading-sm/normal",
                        className: k()(tp.Xn, tp.zA),
                        children: ef.intl.format(n, {
                            user0: eX.Ay.getName(a, t?.id, p[0]),
                            user1: eX.Ay.getName(a, t?.id, p[1]),
                            countOthers: h,
                            countOthersHook: (e, t) =>
                                (0, l.jsx)(
                                    q.E,
                                    { variant: "text-sm/medium", className: k()(tp.Mj, tp.nk), children: e },
                                    t,
                                ),
                            name0Hook: (e, n) =>
                                (0, l.jsx)(
                                    e1.A,
                                    {
                                        textClassName: k()(tp.Mj, tp.nk),
                                        text: e,
                                        user: p[0],
                                        channel: t,
                                        onPopoutClosed: r,
                                        enableDisplayNameStyles: !0,
                                    },
                                    n,
                                ),
                            name1Hook: (e, n) =>
                                (0, l.jsx)(
                                    e1.A,
                                    {
                                        textClassName: k()(tp.Mj, tp.nk),
                                        text: e,
                                        user: p[1],
                                        channel: t,
                                        onPopoutClosed: r,
                                        enableDisplayNameStyles: !0,
                                    },
                                    n,
                                ),
                        }),
                    }),
                ],
            }),
            null != f && (0, l.jsx)(eI.Ay, { size: eI.Ay.Sizes.SMALL }),
            null != m && (0, l.jsx)(tl.A, { user: m, channel: t, guildId: a, entry: i, disableGameProfileLinks: s }),
        ],
    });
}
function tv(e) {
    let { children: t, onClick: n } = e;
    return null == n ? t : (0, l.jsx)(d.D, { className: tp.Zw, onClick: n, children: t });
}
function tN(e) {
    let {
            title: t,
            subtitle: n,
            badges: s,
            children: r,
            onClickThumbnail: a,
            onClickTitle: o,
            onClickSubtitle: c,
            headerIcons: d,
            disableGameProfileLinks: h = !1,
            showCoverImage: m = !0,
            onUserPopoutClosed: f,
            trackRankingItemInteraction: p,
            ...g
        } = e,
        { entry: x } = g,
        A = (0, e0.zD)(x),
        C = A ? x.extra?.application_id : void 0,
        E = (0, eL.W)();
    null != E && (C = E);
    let I = (0, e_.A)(
            {
                location: "ContentPopout",
                applicationId: h ? void 0 : C,
                source: eN.GameProfileSources.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: x.author_id,
            },
            { onOpened: () => p?.(th.PA.OPENED_GAME_PROFILE) },
        ),
        { largeImage: y, smallImage: S } = (0, eQ.nO)({
            entry: x,
            showCoverImage: m,
            trackingSource: "memberlist_content_popout",
        }),
        v = (0, u.bG)([eM.A], () => eM.A.getDetectableIdsToApplicationIds()),
        N = A ? I : void 0,
        _ = i.useContext(tx);
    return (0, l.jsxs)("div", {
        className: tp.au,
        children: [
            (0, l.jsx)(tS, { disableGameProfileLinks: h, ...g, onUserPopoutClosed: f }),
            (0, l.jsxs)(tC, {
                backgroundImgSrc: y?.src,
                children: [
                    (0, l.jsxs)("div", {
                        className: tp.CG,
                        children: [
                            (0, l.jsx)("div", {
                                className: tp.Fb,
                                children: (0, l.jsx)(e2.d, {
                                    image: y,
                                    smallImage: S,
                                    aspectRatio: m ? "none" : void 0,
                                    onClick: a ?? N,
                                    size: e2.w.SIZE_72,
                                }),
                            }),
                            (0, l.jsxs)("div", {
                                className: tp.iC,
                                children: [
                                    (0, l.jsx)(tv, {
                                        onClick: o ?? N,
                                        children: (0, l.jsx)(Y.D, {
                                            id: _,
                                            variant: "heading-md/medium",
                                            className: k()(tp.$2, { [tp.bC]: null != d }),
                                            lineClamp: 3,
                                            children: t,
                                        }),
                                    }),
                                    null != n
                                        ? (0, l.jsx)(tv, {
                                              onClick: c ?? N,
                                              children: (0, l.jsx)(q.E, {
                                                  variant: "text-sm/normal",
                                                  className: tp.LG,
                                                  children: n,
                                              }),
                                          })
                                        : null,
                                    (0, l.jsx)(Z.h, { size: 8 }),
                                    s,
                                ],
                            }),
                            (0, l.jsx)("div", { className: tp.hO, children: d }),
                        ],
                    }),
                    r,
                ],
            }),
            null != C && null != v[C]
                ? (0, l.jsx)(tg, {
                      className: tp.zu,
                      applicationId: C,
                      userIds: [x.author_id],
                      location: "content_popout",
                      guildId: g.channel?.guild_id,
                      channelId: g.channel?.id,
                      numWishlistItems: 3,
                      cardSpec: tf.Z.SIZE_90,
                  })
                : null,
        ],
    });
}
function t_(e) {
    let {
            title: t,
            subtitle: n,
            badges: s,
            children: r,
            stream: a,
            onClickThumbnail: o,
            onClickTitle: c,
            onClickSubtitle: d,
            onUserPopoutClosed: h,
            trackRankingItemInteraction: m,
            ...f
        } = e,
        { actionString: p, canWatch: g } = (0, ej.K)(a),
        { entry: x } = f,
        A = (0, e0.zD)(x),
        C = A ? x.extra?.application_id : void 0,
        E = (0, eL.W)();
    null != E && (C = E);
    let I = (0, e_.A)(
            {
                location: "ContentPopout",
                applicationId: C,
                source: eN.GameProfileSources.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: x.author_id,
            },
            { onOpened: () => m?.(th.PA.OPENED_GAME_PROFILE) },
        ),
        y = A ? I : void 0,
        { activity: S, activityApplication: v, fallbackApplication: N } = (0, e8.A)(x),
        { largeImage: _, smallImage: j } = (0, eQ.D8)(S, v ?? N),
        { largeImage: b } = (0, eQ.nO)({ entry: x, trackingSource: "memberlist_streaming_content_popout" }),
        T = (0, u.bG)([eM.A], () => eM.A.getDetectableIdsToApplicationIds()),
        R = i.useContext(tx);
    return (0, l.jsxs)("div", {
        className: tp.au,
        children: [
            (0, l.jsx)(tS, { ...f, onUserPopoutClosed: h }),
            (0, l.jsxs)(tC, {
                backgroundImgSrc: b?.src,
                className: tp.uR,
                children: [
                    (0, l.jsx)(tv, {
                        onClick: g
                            ? () => {
                                  (el.default.selectVoiceChannel(a.channelId), (0, ei.Nl)(a));
                              }
                            : void 0,
                        children: (0, l.jsxs)("div", {
                            className: tp.nh,
                            children: [
                                (0, l.jsx)(eb.A, { className: tp.j7, stream: a }),
                                g &&
                                    (0, l.jsx)("div", {
                                        className: tp.NE,
                                        children: (0, l.jsx)(q.E, {
                                            variant: "text-md/normal",
                                            color: "text-overlay-light",
                                            children: p,
                                        }),
                                    }),
                            ],
                        }),
                    }),
                    (0, l.jsxs)("div", {
                        className: tp.$6,
                        children: [
                            null != _ &&
                                (0, l.jsx)("div", {
                                    className: tp.Fb,
                                    children: (0, l.jsx)(e2.d, {
                                        image: _,
                                        smallImage: j,
                                        onClick: o ?? y,
                                        size: e2.w.SIZE_72,
                                    }),
                                }),
                            (0, l.jsxs)("div", {
                                className: tp.gv,
                                children: [
                                    (0, l.jsx)(tv, {
                                        onClick: c ?? y,
                                        children: (0, l.jsx)(Y.D, {
                                            id: R,
                                            variant: "heading-md/semibold",
                                            className: tp.nk,
                                            lineClamp: 3,
                                            children: t,
                                        }),
                                    }),
                                    null != n
                                        ? (0, l.jsx)(tv, {
                                              onClick: d ?? y,
                                              children: (0, l.jsx)(q.E, {
                                                  variant: "text-sm/normal",
                                                  className: tp.zA,
                                                  children: n,
                                              }),
                                          })
                                        : null,
                                    (0, l.jsx)(Z.h, { size: 8 }),
                                    s,
                                ],
                            }),
                        ],
                    }),
                    r,
                ],
            }),
            null != C && null != T[C]
                ? (0, l.jsx)(tg, {
                      className: tp.zu,
                      applicationId: C,
                      userIds: [x.author_id],
                      location: "content_popout",
                      guildId: f.channel?.guild_id,
                      channelId: f.channel?.id,
                      numWishlistItems: 3,
                      cardSpec: tf.Z.SIZE_90,
                  })
                : null,
        ],
    });
}
var tj = n(299846);
let tb = function (e) {
    let { channel: t, entry: n, onReaction: i, onVoiceChannelPreview: s, disableActivityProfileLinks: r } = e,
        { user: a, details: o, activity: u, embeddedActivity: c } = (0, tj.u)(n);
    function d() {
        (0, b.hg)(n.extra.application_id);
    }
    let { data: h } = (0, T.YY)(n.extra.application_id),
        m = (0, N.Ay)({ application: h, analyticsLocations: [j.A.MEMBER_LIST_ACTIVITY_CONTENT_POPOUT] });
    if (null == a) return null;
    let f = (0, l.jsx)(M.iT, { location: M.N5.POPOUT, entry: n }),
        p = (0, l.jsx)(tN, {
            channel: t,
            userDescription: (0, O.JM)(n) ? ef.t.vPg1JT : ef.t.rPqqts,
            title: n.extra.activity_name,
            subtitle: o,
            badges: f,
            entry: n,
            showCoverImage: !1,
            onClickTitle: r ? void 0 : d,
            onClickSubtitle: r ? void 0 : d,
            onClickThumbnail: r ? void 0 : d,
        }),
        g = (0, S.A)(u, em.jUm.JOIN) || (0, v.A)(u),
        x = g
            ? (0, l.jsx)(_.A, { embeddedActivity: c, activity: u, user: a, variant: "primary", size: "md", icon: C.I })
            : null,
        A =
            null == m
                ? null
                : (0, l.jsx)(E.$, {
                      variant: "primary",
                      size: "md",
                      fullWidth: !0,
                      onClick: m,
                      text: ef.intl.string(ef.t["jaYS/h"]),
                      icon: I.h,
                  }),
        L =
            null != A || r
                ? null
                : (0, l.jsx)(E.$, {
                      variant: "primary",
                      size: "md",
                      fullWidth: !0,
                      onClick: d,
                      text: ef.intl.string(ef.t.GDWYR8),
                      icon: y.k,
                  }),
        k = [A, g && !r ? x : L].filter(R.Vq);
    return (0, l.jsxs)(tA, {
        children: [
            p,
            (0, l.jsx)(tE, {
                children: (0, l.jsx)(tI, {
                    onReaction: i,
                    onVoiceChannelPreview: s,
                    user: a,
                    channel: t,
                    entry: n,
                    buttons: k,
                }),
            }),
        ],
    });
};
var tT = n(322789),
    tR = n(808380),
    tO = n(687966),
    tM = n(39623),
    tL = n(960076),
    tk = n(544441),
    tw = n(562708),
    tP = n(688810),
    tD = n(139286);
function tU(e) {
    let { application: t, analyticsLocation: n } = e,
        { analyticsLocations: i } = (0, tP.Ay)(n),
        s = (0, N.Ay)({ application: t, analyticsLocations: i });
    return (
        (0, tD.A)({
            name: tw.ImpressionNames.CLOUD_PLAY_CTA,
            type: tw.ImpressionTypes.VIEW,
            properties: { location_stack: i },
        }),
        (0, l.jsx)(
            E.$,
            {
                variant: "primary",
                size: "md",
                icon: I.h,
                text: ef.intl.string(ef.t["jaYS/h"]),
                onClick: function () {
                    s?.();
                },
                fullWidth: !0,
            },
            "cloud-play",
        )
    );
}
var tV = n(601007),
    tG = n(648246),
    tF = n(308335),
    tH = n(790381),
    tB = n(266080),
    tW = n(968309),
    tK = n(30370);
function tz(e) {
    let t = (0, u.bG)([tK.A], () => tK.A.getAccounts().some((t) => t.type === e)),
        n = i.useCallback(() => {
            if (null == e) return null;
            (0, tW.A)({ platformType: e, location: "Member List Content Popout" });
        }, [e]);
    if (null != e) return t ? void 0 : n;
}
var tZ = n(18282);
let tY = [...tT.n, M.Yq],
    tq = {
        [tR.Y.DESKTOP]: null,
        [tR.Y.LINUX]: null,
        [tR.Y.MACOS]: null,
        [tR.Y.NINTENDO]: null,
        [tR.Y.IOS]: null,
        [tR.Y.ANDROID]: null,
        [tR.Y.XBOX]: tB.A,
        [tR.Y.PLAYSTATION]: tH.A,
    },
    tJ = function (e) {
        let {
                channel: t,
                entry: n,
                disableGameProfileLinks: i,
                onReaction: s,
                onVoiceChannelPreview: r,
                onUserPopoutClosed: a,
                trackRankingItemInteraction: o,
            } = e,
            { user: u, details: c, appName: d, activity: h, embeddedActivity: m } = (0, tj.u)(n),
            { streamPreviewUrl: f, stream: p } = (0, e5.A)(n),
            g = n.extra.platform,
            x = n.extra.application_id,
            A = null != g ? tq[g] : null,
            C = tz(g === tR.Y.XBOX ? em.fg2.XBOX : g === tR.Y.PLAYSTATION ? em.fg2.PLAYSTATION : void 0),
            { data: E } = (0, T.YY)(x),
            I = (0, tk.A)(x),
            { analyticsLocations: y } = (0, tP.Ay)(j.A.MEMBER_LIST_GAMING_CONTENT_POPOUT),
            b = (0, N.JC)(E),
            L = (0, tF.o)(h?.application_id ?? m?.applicationId ?? E?.id);
        if (null == u) return null;
        let k = (0, l.jsx)(M.mG, {
                location: null == f ? M.N5.POPOUT : M.N5.STREAMING_POPOUT,
                children: tY.map((e, t) => (0, l.jsx)(e, { entry: n }, t)),
            }),
            w =
                null == p
                    ? (0, l.jsx)(tN, {
                          channel: t,
                          headerIcons:
                              null == A
                                  ? null
                                  : (0, l.jsx)(tZ.A, {
                                        onClick: C,
                                        Icon: A,
                                        "aria-label": ef.intl.string(ef.t.YR4cHH),
                                    }),
                          userDescription: (0, O.JM)(n) ? ef.t.vPg1JT : ef.t.rPqqts,
                          title: d,
                          subtitle: c,
                          badges: k,
                          entry: n,
                          disableGameProfileLinks: i,
                          onUserPopoutClosed: a,
                          trackRankingItemInteraction: o,
                          children:
                              I.length > 0
                                  ? (0, l.jsx)(tV.A, {
                                        distributorCTAConfigs: I,
                                        applicationId: x,
                                        analyticsLocations: y,
                                        buttonVariant: "overlay-primary",
                                    })
                                  : null,
                      })
                    : (0, l.jsx)(t_, {
                          channel: t,
                          title: n.extra.game_name,
                          subtitle: c,
                          badges: k,
                          userDescription: ef.t["6oWFUN"],
                          entry: n,
                          stream: p,
                          onUserPopoutClosed: a,
                          trackRankingItemInteraction: o,
                          children:
                              I.length > 0
                                  ? (0, l.jsx)(tV.A, {
                                        distributorCTAConfigs: I,
                                        applicationId: x,
                                        analyticsLocations: y,
                                        buttonVariant: "overlay-primary",
                                    })
                                  : null,
                      }),
            P =
                !L && b
                    ? (0, l.jsx)(
                          tU,
                          { application: E, analyticsLocation: j.A.MEMBER_LIST_GAMING_CONTENT_POPOUT },
                          "cloud-play",
                      )
                    : null,
            D = [
                null == P && ((0, S.A)(h, em.jUm.JOIN) || (0, v.A)(h))
                    ? (0, l.jsx)(
                          _.A,
                          { activity: h, user: u, variant: "primary", size: "md", icon: tO.GameControllerIcon },
                          "join",
                      )
                    : null,
                (0, tL.A)(h)
                    ? (0, l.jsx)(tG.A, { activity: h, size: "md", variant: "primary", icon: tM.EyeIcon }, "watch")
                    : null,
                P,
            ].filter(R.Vq);
        return (0, l.jsxs)(tA, {
            children: [
                w,
                (0, l.jsx)(tE, {
                    children: (0, l.jsx)(tI, {
                        onReaction: s,
                        onVoiceChannelPreview: r,
                        user: u,
                        channel: t,
                        entry: n,
                        buttons: D,
                    }),
                }),
            ],
        });
    },
    t$ = (0, n(196765).v)((e) => ({ activeEntryId: null, setActiveEntryId: (t) => e({ activeEntryId: t }) }));
function tX(e) {
    let { entry: t, isFirstApplicationOccurrence: n, targetElementRef: s } = e,
        { data: r } = (0, T.YY)(t.extra.application_id),
        { analyticsLocations: a } = (0, tP.Ay)(j.A.CLOUD_PLAY_POPOVER),
        o = (0, N.Ay)({ application: r, analyticsLocations: a }),
        u = (0, eS.HX)(D.M.CLOUD_PLAY_NEW_BADGE),
        c = null != o && !u && n,
        { activeEntryId: d, setActiveEntryId: h } = t$(),
        m = d === t.id,
        f = c && m ? [D.M.CLOUD_PLAY_POPOVER] : [],
        [p, g] = (0, e9.kn)(f),
        x = p === D.M.CLOUD_PLAY_POPOVER;
    (i.useEffect(() => {
        c && null === d && h(t.id);
    }, [d, c, t.id, h]),
        i.useEffect(
            () => () => {
                x && (g(te.i.USER_DISMISS), h(null));
            },
            [x, g, h],
        ));
    let [A, C] = i.useState(!1);
    return (
        x && !A && C(!0),
        (0, tD.A)(
            {
                name: tw.ImpressionNames.CLOUD_PLAY_CTA,
                type: tw.ImpressionTypes.VIEW,
                properties: { location_stack: a },
            },
            { disableTrack: !A },
            [A],
        ),
        (0, l.jsx)(e4.A, {
            title: ef.intl.string(ef.t["+WNDtV"]),
            body: ef.intl.string(ef.t["5QKxGI"]),
            targetElementRef: s,
            shouldShow: x,
            position: "left",
            caretConfig: { align: "center" },
            gradientColor: "pink",
            graphic: {
                type: "image",
                src: "https://cdn.discordapp.com/assets/content/912562ba9ec7f9f728ce5b336c9bed5f5195dcab1451d12b0e592b1a7389200c.svg",
            },
            actions: [
                {
                    icon: I.h,
                    text: ef.intl.string(ef.t["jaYS/h"]),
                    onClick: function () {
                        o?.();
                    },
                },
            ],
            onRequestClose: function () {
                (g(te.i.USER_DISMISS), h(null));
            },
        })
    );
}
let tQ = function (e) {
    let { entry: t, isFirstApplicationOccurrence: n, targetElementRef: i } = e;
    return (0, l.jsx)(tX, { entry: t, targetElementRef: i, isFirstApplicationOccurrence: n });
};
var t0 = n(363670);
n(321073);
var t1 = n(205327),
    t2 = n(52133),
    t3 = n(835723),
    t8 = n(172710),
    t6 = n(655116),
    t5 = n(763758),
    t7 = n(286617),
    t4 = n(533207),
    t9 = n(280450),
    ne = n(121090),
    nt = n(693879),
    nn = n(809854),
    nl = n(272984),
    ni = n(170699);
function ns(e) {
    let { activity: t } = e,
        n = t.timestamps,
        { now: s } = (0, nn.e)(),
        { durationTimestamp: r, seekBarStyles: a } = i.useMemo(() => {
            let { start: e, end: n } = t.timestamps ?? {};
            if (null == e || null == n) return {};
            let l = Math.min(n, s),
                i = n - e,
                r = Math.floor((Math.max(l - e, 0) / i) * 100);
            return { seekBarStyles: { width: `${r}%` }, durationTimestamp: (0, O.W6)({ start: 0 }, i) };
        }, [t, s]);
    return null == a
        ? null
        : (0, l.jsxs)("div", {
              className: ni.lu,
              children: [
                  (0, l.jsx)(nt.z, { entry: n }),
                  (0, l.jsx)("div", { className: ni.Lt, children: (0, l.jsx)("div", { className: ni.Vp, style: a }) }),
                  (0, l.jsx)(q.E, {
                      className: ni.vE,
                      variant: "text-xs/normal",
                      tabularNumbers: !0,
                      color: void 0,
                      children: r,
                  }),
              ],
          });
}
function nr(e) {
    let t,
        n,
        i,
        { channel: s, entry: r, closePopout: a, onReaction: o, onVoiceChannelPreview: c } = e,
        { activity: d, currentEntry: h, artist: m, title: f, user: p } = (0, t0.u7)(r),
        g = tz(em.fg2.SPOTIFY),
        x = (0, u.bG)(
            [t6.A, t9.default],
            () => (d?.type === em.$pd.LISTENING && null != p ? (0, t7.A)(t6.A, t9.default, p, d) : void 0),
            [d, p],
            t2.A,
        );
    if (null == d || null == h) return null;
    let A = m,
        C = [];
    h.media.provider === t1.X.SPOTIFY &&
        ((n = () => {
            (0, t8.Mp)(d);
        }),
        (i = () => {
            (0, t8.QX)(d, p.id);
        }),
        (t = () => {
            null != g ? g() : (0, t8.Mp)(d);
        }),
        (A = (0, l.jsx)(t5.A, {
            artists: m,
            canOpen: null != d.sync_id,
            linkClassName: tp.zA,
            onOpenSpotifyArtist: function (e) {
                null != d && null != p && (0, t8.mN)(d, p.id, e);
            },
        })),
        x?.syncDisabled === !1 &&
            C.push(
                (0, l.jsx)(
                    E.$,
                    {
                        variant: "primary",
                        size: "md",
                        fullWidth: !0,
                        text: ef.intl.string(ef.t.eU3inB),
                        icon: t3.J,
                        onClick: function () {
                            null != x && ((0, t4.A)(x, nl.Qp.USER_ACTIVITY_SYNC), a());
                        },
                    },
                    "listen-along",
                ),
            ));
    let I = (0, l.jsx)(tN, {
        onClickThumbnail: i,
        channel: s,
        entry: r,
        headerIcons:
            h.media.provider === t1.X.SPOTIFY
                ? (0, l.jsx)(tZ.A, { onClick: t, "aria-label": ef.intl.string(ef.t.rRffNz), Icon: ne.A })
                : null,
        userDescription: (0, O.JM)(r) ? ef.t.Tzx5D2 : ef.t.CcVI1T,
        title: f,
        onClickTitle: n,
        subtitle: A,
        badges: null,
        children: d.timestamps?.start != null && (0, l.jsx)(ns, { activity: d }),
    });
    return (0, l.jsxs)(tA, {
        children: [
            I,
            (0, l.jsx)(tE, {
                children: (0, l.jsx)(tI, {
                    onReaction: o,
                    onVoiceChannelPreview: c,
                    user: p,
                    channel: s,
                    entry: r,
                    buttons: C,
                }),
            }),
        ],
    });
}
var na = n(56121),
    no = n(263577),
    nu = n(868065),
    nc = n(804779);
let nd = [M.Y8],
    nh = [na.j.WEEK],
    nm = i.memo(function (e) {
        let { entry: t, channel: n, selected: i } = e,
            { largeImage: s } = (0, eQ.nO)({ entry: t, trackingSource: "memberlist_top_artist_content_row" }),
            r = (0, O.TQ)(t);
        return null != r && (0, R.S1)(r, nh)
            ? (0, l.jsxs)(nu.Zp, {
                  selected: i,
                  children: [
                      (0, l.jsxs)(nu.UA, {
                          children: [
                              (0, l.jsx)(nu.Hp, { entry: t, channelId: n.id, guildId: n.guild_id }),
                              (0, l.jsx)(nu.ZB, { children: t.extra.artist.name }),
                              (0, l.jsx)(M.mG, {
                                  location: M.N5.CARD,
                                  children: nd.map((e, n) => (0, l.jsx)(e, { entry: t }, n)),
                              }),
                          ],
                      }),
                      (0, l.jsx)(no.V, { src: s?.src, size: 48, className: nc.xn }),
                  ],
              })
            : null;
    });
var nf = n(210528);
let np = function (e) {
    let { channel: t, entry: n, onReaction: i, onVoiceChannelPreview: s } = e,
        { parent_title: r, provider: a } = n.extra.media,
        o = n.extra.artist.name,
        c = (0, u.bG)([g.default], () => g.default.getUser(n.author_id)),
        d = (0, O.TQ)(n),
        h = tz(em.fg2.SPOTIFY);
    if (null == c || !(0, R.S1)(d, nh)) return null;
    function m() {
        let e = nl.M0.ALBUM,
            t = nf.A.isProtocolRegistered()
                ? nl.RQ.PLAYER_OPEN(e, n.extra.media.external_parent_id)
                : nl.RQ.WEB_OPEN(e, n.extra.media.external_parent_id);
        window.open(t);
    }
    return (0, l.jsxs)(tA, {
        children: [
            (0, l.jsx)(tN, {
                onClickTitle: m,
                onClickSubtitle: function () {
                    let e = nl.M0.ARTIST,
                        t = nf.A.isProtocolRegistered()
                            ? nl.RQ.PLAYER_OPEN(e, n.extra.artist.external_id)
                            : nl.RQ.WEB_OPEN(e, n.extra.artist.external_id);
                    window.open(t);
                },
                onClickThumbnail: m,
                channel: t,
                entry: n,
                headerIcons:
                    a === t1.X.SPOTIFY
                        ? (0, l.jsx)(tZ.A, { onClick: h, Icon: ne.A, "aria-label": ef.intl.string(ef.t["0ZB/XE"]) })
                        : null,
                userDescription: ef.t.CcVI1T,
                title: r,
                subtitle: o,
                badges: (0, l.jsx)(M.mG, {
                    location: M.N5.POPOUT,
                    children: nd.map((e, t) => (0, l.jsx)(e, { entry: n }, t)),
                }),
            }),
            (0, l.jsx)(tE, {
                children: (0, l.jsx)(tI, { onReaction: i, onVoiceChannelPreview: s, user: c, channel: t, entry: n }),
            }),
        ],
    });
};
var ng = n(977001);
let nx = function (e) {
    let { channel: t, entry: n, disableGameProfileLinks: i, onReaction: s, onVoiceChannelPreview: r } = e,
        { user: a, details: o, appName: u } = (0, tj.u)(n),
        c = (0, O.ty)(n),
        d = (0, O.TQ)(n);
    if (null == a || null == c || null == d || !(0, ng._E)(d)) return null;
    let h = null != n.extra.platform ? tq[n.extra.platform] : null;
    return (0, l.jsxs)(tA, {
        children: [
            (0, l.jsx)(tN, {
                channel: t,
                headerIcons:
                    null == h ? null : (0, l.jsx)(tZ.A, { Icon: h, "aria-label": ef.intl.string(ef.t.YR4cHH) }),
                entry: n,
                userDescription: ef.t.rPqqts,
                title: u,
                subtitle: o,
                badges: (0, l.jsx)(M.mG, {
                    location: M.N5.POPOUT,
                    children: ng.ac.map((e, t) => (0, l.jsx)(e, { entry: n }, t)),
                }),
                disableGameProfileLinks: i,
            }),
            (0, l.jsx)(tE, {
                children: (0, l.jsx)(tI, { onReaction: s, onVoiceChannelPreview: r, user: a, channel: t, entry: n }),
            }),
        ],
    });
};
var nA = n(514243),
    nC = n(347306),
    nE = n(123917),
    nI = n(998218);
let ny = function (e) {
        let { channel: t, entry: n, onReaction: i, onVoiceChannelPreview: s } = e,
            r = (0, u.bG)([g.default], () => g.default.getUser(n.author_id)),
            a = tz(em.fg2.CRUNCHYROLL);
        function o() {
            if (null == n.extra.url) return;
            let e = nI.A.safeParseWithQuery(n.extra.url);
            null != e && null != e.protocol && null != e.hostname && (0, nE.h)({ href: nI.A.format(e), trusted: !1 });
        }
        return null == r
            ? null
            : (0, l.jsxs)(tA, {
                  children: [
                      (0, l.jsx)(tN, {
                          channel: t,
                          entry: n,
                          userDescription: (0, O.JM)(n) ? ef.t["LH+Z3y"] : ef.t.YuKgml,
                          title: n.extra.media_title,
                          subtitle: n.extra.media_subtitle,
                          headerIcons: (0, l.jsx)(tZ.A, {
                              onClick: a,
                              Icon: nC.k,
                              "aria-label": ef.intl.string(ef.t.jdJYXw),
                          }),
                          badges: (0, l.jsx)(M.mG, {
                              location: M.N5.POPOUT,
                              children: nA.R.map((e, t) => (0, l.jsx)(e, { entry: n }, t)),
                          }),
                          onClickTitle: o,
                          onClickThumbnail: o,
                      }),
                      (0, l.jsx)(tE, {
                          children: (0, l.jsx)(tI, {
                              onReaction: i,
                              onVoiceChannelPreview: s,
                              user: r,
                              channel: t,
                              entry: n,
                          }),
                      }),
                  ],
              });
    },
    nS = 72;
function nv(e) {
    return e?.type === p.S9.CONTENT_INVENTORY
        ? e.entry.content_type === o.ContentInventoryEntryType.PLAYED_GAME && null != e.entry.applicationWidgetPreview
            ? nS + 32
            : nS
        : 0;
}
function nN(e) {
    let { entry: t, ...n } = e;
    switch (t.content_type) {
        case o.ContentInventoryEntryType.PLAYED_GAME:
            return (0, l.jsx)(tT.A, { ...n, entry: t });
        case o.ContentInventoryEntryType.WATCHED_MEDIA:
            return (0, l.jsx)(nA.A, { ...n, entry: t });
        case o.ContentInventoryEntryType.TOP_GAME:
            return (0, l.jsx)(ng.Ay, { ...n, entry: t });
        case o.ContentInventoryEntryType.TOP_ARTIST:
            return (0, l.jsx)(nm, { ...n, entry: t });
        case o.ContentInventoryEntryType.LISTENED_SESSION:
            return (0, l.jsx)(t0.Ay, { ...n, entry: t });
        case o.ContentInventoryEntryType.LAUNCHED_ACTIVITY:
            return (0, l.jsx)(A.A, { ...n, entry: t });
        default:
            return null;
    }
}
function n_(e) {
    let { entry: t, targetElementRef: n, ...i } = e;
    return t.content_type === o.ContentInventoryEntryType.PLAYED_GAME
        ? (0, l.jsx)(tQ, {
              entry: t,
              targetElementRef: n,
              isFirstApplicationOccurrence: i.isFirstApplicationOccurrence ?? !1,
          })
        : null;
}
function nj(e) {
    let { closePopout: t, ...n } = e;
    return (0, l.jsx)(nb, {
        onReaction: (e, l) => {
            (n.trackRankingItemInteraction(e, { destinationChannelId: l.id, destinationGuildId: l.guild_id }), t());
        },
        closePopout: t,
        onVoiceChannelPreview: (e) => {
            n.trackRankingItemInteraction(th.PA.VOICE_CHANNEL_PREVIEWED, {
                destinationChannelId: e.id,
                destinationGuildId: e.guild_id,
            });
        },
        ...n,
    });
}
function nb(e) {
    let { entry: t, ...n } = e;
    switch (t.content_type) {
        case o.ContentInventoryEntryType.PLAYED_GAME:
            return (0, l.jsx)(tJ, { ...n, entry: t });
        case o.ContentInventoryEntryType.WATCHED_MEDIA:
            return (0, l.jsx)(ny, { ...n, entry: t });
        case o.ContentInventoryEntryType.TOP_GAME:
            return (0, l.jsx)(nx, { ...n, entry: t });
        case o.ContentInventoryEntryType.TOP_ARTIST:
            return (0, l.jsx)(np, { ...n, entry: t });
        case o.ContentInventoryEntryType.LISTENED_SESSION:
            return (0, l.jsx)(nr, { ...n, entry: t });
        case o.ContentInventoryEntryType.LAUNCHED_ACTIVITY:
            return (0, l.jsx)(tb, { ...n, entry: t });
        default:
            return null;
    }
}
let nT = i.createContext(void 0),
    nR = i.memo(function (e) {
        let { index: t, ref: s, ...o } = e,
            p = i.useRef(null),
            [A, C] = i.useState("default"),
            [E, I] = i.useState(!1),
            y = (0, a.rm)(`${t}`),
            S = g.default.getCurrentUser()?.isStaff(),
            { isRich: v, appName: N } = (0, tj.u)(o.entry);
        (0, f.T2)(o.entry.id);
        let _ = i.useMemo(
                () => ({
                    entry: o.entry,
                    channelId: o.channel.id,
                    guildId: o.channel.guild_id,
                    requestId: o.requestId,
                    richPresenceName: v ? N : void 0,
                }),
                [N, o.channel.guild_id, o.channel.id, o.entry, o.requestId, v],
            ),
            j = i.useRef(!1),
            [b, T] = i.useState(!1),
            [R, O] = i.useState(!1),
            M = (0, u.bG)([m.Ay], () => m.Ay.keyboardModeEnabled);
        (i.useEffect(() => {
            b && M && O(!0);
        }, [b, M]),
            i.useLayoutEffect(() => {
                null != p.current && I(!0);
            }, []));
        let L = i.useCallback(
                (e) => {
                    S &&
                        (0, h.L3)(e, async () => {
                            let { default: e } = await Promise.all([n.e("886456"), n.e("789346")]).then(
                                n.bind(n, 949881),
                            );
                            return () => (0, l.jsx)(e, { entry: o.entry, requestId: o.requestId });
                        });
                },
                [o, S],
            ),
            k = i.useCallback(() => {
                C(String(Date.now()));
            }, []),
            w = i.useCallback(
                function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    (0, x.I)(e, { ..._, ...t });
                },
                [_],
            ),
            P = i.useMemo(
                () =>
                    r().throttle(
                        (e) => {
                            (0, x.I)(th.PA.CARD_POPOUT_OPEN, e);
                        },
                        2e3,
                        { leading: !0, trailing: !1 },
                    ),
                [],
            );
        function D() {
            ((j.current = !1),
                setTimeout(() => {
                    j.current || (T(!1), O(M));
                }, 100));
        }
        return (0, l.jsxs)(l.Fragment, {
            children: [
                E && (0, l.jsx)(n_, { ...o, targetElementRef: p }),
                (0, l.jsx)("div", {
                    ref: s,
                    onMouseEnter: () => {
                        ((j.current = !0),
                            setTimeout(() => {
                                (j.current && T(!0), P(_));
                            }, 100));
                    },
                    onMouseLeave: D,
                    children: (0, l.jsx)(c.Y, {
                        targetElementRef: p,
                        renderPopout: (e) => {
                            let { closePopout: t } = e;
                            return (0, l.jsx)(nT.Provider, {
                                value: D,
                                children: (0, l.jsx)(nj, {
                                    closePopout: t,
                                    updatePopoutPosition: k,
                                    trackRankingItemInteraction: w,
                                    ...o,
                                }),
                            });
                        },
                        position: "left",
                        shouldShow: b,
                        positionKey: A,
                        onRequestOpen: () => P(_),
                        onRequestClose: () => {
                            R && D();
                        },
                        spacing: 8,
                        children: (e, t) => {
                            let { isShown: n } = t;
                            return (0, l.jsx)(d.D, {
                                ...e,
                                ...y,
                                role: "button",
                                innerRef: p,
                                focusProps: { offset: { top: 4, bottom: 4, left: 4, right: 4 } },
                                onClick: () => {
                                    b || T(!0);
                                },
                                onContextMenu: L,
                                children: (0, l.jsx)(nN, {
                                    ...o,
                                    selected: n,
                                    hovered: j.current,
                                    trackRankingItemInteraction: w,
                                }),
                            });
                        },
                    }),
                }),
            ],
        });
    });
