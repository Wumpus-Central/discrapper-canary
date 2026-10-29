n.d(t, { D: () => rc });
var l,
    r = n(477900),
    a = n(361158),
    s = n(174459),
    i = n(625494),
    c = n(582128),
    o = n(503698),
    u = n.n(o),
    d = n(17928),
    m = n(43990),
    h = n(789645),
    x = n(636537),
    g = n(73153),
    f = n(308528),
    j = n(148494),
    p = n(451909),
    v = n(446244),
    A = n(734057),
    C = n(403362);
let E = { voice: { totalVoiceMinutes: 54423, totalVoiceMinutesPercentile: 92 } },
    N = {
        voice: { totalVoiceMinutes: 0, totalVoiceMinutesPercentile: 0 },
        messages: { numMessagesSent: 0, numMessagesSentPercentile: 0 },
        guilds: { guilds: [] },
        emojis: { numEmojisSent: 0, numEmojisSentPercentile: 0, emojis: [] },
        games: {
            totalGamesPlayed: 0,
            totalGamesPlayedPercentile: 0,
            games: [],
            totalDaysPlayed: 0,
            totalDaysPlayedPercentile: 0,
        },
        sidekick: null,
        users: [],
        power: { powerLevel: 0, powerLevelPercentile: 0 },
    };
var S = n(889227),
    I = n(149790),
    b = n(935208),
    y = n(105292);
let T = { hour: "numeric", minute: "2-digit", numberingSystem: "latn" },
    R = /^[A-Za-z.\s]+$/,
    _ = /\s/g;
function O(e) {
    return null == e || e < 50 ? null : Math.max(1, Math.ceil(100 - e));
}
function M(e) {
    return new Intl.NumberFormat(y.intl.currentLocale, { notation: "compact", compactDisplay: "long" }).format(e);
}
function L(e) {
    return e?.sidekick != null;
}
function P(e) {
    return L(e) && (e?.users?.length ?? 0) > 0;
}
function k(e) {
    return Math.round(e?.voice?.totalVoiceMinutes ?? 0) > 0;
}
function w(e) {
    return Math.round(e?.messages?.numMessagesSent ?? 0) > 0;
}
function D(e) {
    return (e?.guilds?.guilds.length ?? 0) > 0;
}
function U(e) {
    return Math.round(e?.emojis?.numEmojisSent ?? 0) > 0 && (e?.emojis?.emojis.length ?? 0) > 0;
}
function G(e) {
    return Math.round(e?.games?.totalGamesPlayed ?? 0) > 0 && (e?.games?.games.length ?? 0) > 0;
}
function F(e) {
    let { voice: t, messages: n, guilds: l, emojis: r, games: a } = e;
    return {
        voice: { peakHourUtc: t.peak_hour_utc },
        messages: { numWordsSent: n.num_words_sent },
        guilds: {
            guildsByMembers: l.guilds_by_members.map((e) => {
                let { guild: t } = e;
                return (0, I.yF)(t);
            }),
        },
        emojis: {
            numEmojisSent: r.num_emojis_sent,
            numReactionsAdded: r.num_reactions_added,
            emojis: r.emojis.map((e) => {
                let { emoji: t } = e;
                return t;
            }),
        },
        games: {
            gamesByPlayers: a.games_by_players.map((e) => {
                let { game: t } = e;
                return H(t);
            }),
            newGamesByPlayers: a.new_games_by_players.map((e) => {
                let { game: t } = e;
                return H(t);
            }),
            indieGamesByPlayers: a.indie_games_by_players.map((e) => {
                let { game: t } = e;
                return H(t);
            }),
            gamesByStreamWatchMinutes: a.games_by_stream_watch_minutes.map((e) => {
                let { game: t } = e;
                return H(t);
            }),
            gamesByCoplayUsers: a.games_by_coplay_users.map((e) => {
                let { game: t } = e;
                return H(t);
            }),
            numUsersPlayedEveryDay: a.num_users_played_every_day,
        },
    };
}
function H(e) {
    return {
        id: b.default.cast(e.id),
        name: e.name,
        iconHash: e.icon_hash ?? void 0,
        bannerHash: e.banner_hash ?? void 0,
        coverImageHash: e.cover_image_hash ?? void 0,
    };
}
var z =
    (((l = {})[(l.INIT = 0)] = "INIT"),
    (l[(l.FETCHING = 1)] = "FETCHING"),
    (l[(l.SUCCESS = 2)] = "SUCCESS"),
    (l[(l.ERROR = 3)] = "ERROR"),
    l);
let K = { isMuted: !1 },
    B = {},
    V = { ...K },
    Y = null,
    W = null,
    q = null,
    X = 0,
    J = null,
    Q = !1;
class Z extends d.Ay.PersistedStore {
    static displayName = "Checkpoint2026Store";
    static persistKey = "Checkpoint2026Store";
    getState() {
        return V;
    }
    initialize(e) {
        null != e && (V = { ...V, ...e });
    }
    get isMuted() {
        return V.isMuted;
    }
    get stats() {
        return Y;
    }
    get globalStats() {
        return W;
    }
    get character() {
        return q;
    }
    get fetchState() {
        return X;
    }
    get isSaving() {
        return Q;
    }
    get selectedCharacterTraits() {
        return J ?? q ?? B;
    }
}
let $ = new Z(g.h, {
    CHECKPOINT_TOGGLE_MUTE: function () {
        V.isMuted = !V.isMuted;
    },
    CHECKPOINT_FETCH_START: function () {
        X = 1;
    },
    CHECKPOINT_FETCH_SUCCESS: function (e) {
        ((Y = e.stats), (W = e.globalStats), (q = e.character), (X = 2));
    },
    CHECKPOINT_FETCH_FAILED: function () {
        X = 3;
    },
    CHECKPOINT_COMPLETE_START: function () {
        Q = !0;
    },
    CHECKPOINT_COMPLETE_SUCCESS: function (e) {
        ((q = e.character), (J = null), (Q = !1));
    },
    CHECKPOINT_COMPLETE_FAILED: function () {
        Q = !1;
    },
    CHECKPOINT_RESET_SUCCESS: function () {
        ((q = null), (J = null));
    },
    CHECKPOINT_SELECT_CHARACTER_TRAIT: function (e) {
        J = { ...(J ?? q ?? B), [e.trait]: e.optionId };
    },
    CHECKPOINT_RESET_EDITED_CHARACTER: function () {
        J = null;
    },
    LOGOUT: function () {
        ((V = { ...K }), (Y = null), (W = null), (q = null), (X = 0), (J = null), (Q = !1));
    },
});
var ee = n(652215);
function et() {
    return g.h.dispatch({ type: "CHECKPOINT_TOGGLE_MUTE" });
}
function en(e, t) {
    return g.h.dispatch({ type: "CHECKPOINT_SELECT_CHARACTER_TRAIT", trait: e, optionId: t });
}
async function el(e) {
    ($.initializeIfNeeded(), g.h.dispatch({ type: "CHECKPOINT_FETCH_START" }));
    try {
        let { body: t } = await x.Bo.get({ url: ee.Rsh.CHECKPOINT, rejectWithError: !0 });
        if (null != e)
            return (
                g.h.dispatch({
                    type: "CHECKPOINT_FETCH_SUCCESS",
                    stats: (function (e) {
                        switch (e) {
                            case 0:
                                return E;
                            case 1:
                                return null;
                            case 2:
                                return N;
                        }
                    })(e),
                    globalStats: F(t.global_stats),
                    character: null,
                }),
                !0
            );
        return (
            g.h.dispatch({
                type: "CHECKPOINT_FETCH_SUCCESS",
                stats:
                    null != t.stats
                        ? (function (e) {
                              let {
                                  voice: t,
                                  messages: n,
                                  guilds: l,
                                  emojis: r,
                                  games: a,
                                  sidekick: s,
                                  users: i,
                                  power: c,
                              } = e;
                              return {
                                  voice: {
                                      totalVoiceMinutes: t.total_voice_minutes,
                                      totalVoiceMinutesPercentile: t.total_voice_minutes_percentile,
                                  },
                                  messages: {
                                      numMessagesSent: n.num_messages_sent,
                                      numMessagesSentPercentile: n.num_messages_sent_percentile,
                                  },
                                  guilds: {
                                      guilds: l.guilds.map((e) => ({
                                          guild: (0, I.yF)(e.guild),
                                          numMessagesSent: e.num_messages_sent,
                                          numVoiceMinutes: e.num_voice_minutes,
                                          numDaysInteracted: e.num_days_interacted,
                                          numDaysInteractedPercentile: e.num_days_interacted_percentile,
                                      })),
                                  },
                                  emojis: {
                                      numEmojisSent: r.num_emojis_sent,
                                      numEmojisSentPercentile: r.num_emojis_sent_percentile,
                                      emojis: r.emojis,
                                  },
                                  games: {
                                      totalGamesPlayed: a.total_games_played,
                                      totalGamesPlayedPercentile: a.total_games_played_percentile,
                                      games: a.games.map((e) => {
                                          let { game: t, num_sessions: n } = e;
                                          return { game: H(t), numSessions: n };
                                      }),
                                      totalDaysPlayed: a.total_days_played,
                                      totalDaysPlayedPercentile: a.total_days_played_percentile,
                                  },
                                  sidekick:
                                      null != s
                                          ? {
                                                user: new S.A(s.user),
                                                numMessagesSent: s.num_messages_sent,
                                                numVoiceMinutes: s.num_voice_minutes,
                                            }
                                          : null,
                                  users: i.map((e) => {
                                      let { user: t } = e;
                                      return new S.A(t);
                                  }),
                                  power: { powerLevel: c.power_level, powerLevelPercentile: c.power_level_percentile },
                              };
                          })(t.stats)
                        : null,
                globalStats: F(t.global_stats),
                character: t.character,
            }),
            !0
        );
    } catch {
        return (g.h.dispatch({ type: "CHECKPOINT_FETCH_FAILED" }), !1);
    }
}
async function er(e) {
    g.h.dispatch({ type: "CHECKPOINT_COMPLETE_START" });
    try {
        return (
            await x.Bo.post({ url: ee.Rsh.CHECKPOINT_COMPLETE, body: e, rejectWithError: !0 }),
            g.h.dispatch({ type: "CHECKPOINT_COMPLETE_SUCCESS", character: e }),
            !0
        );
    } catch {
        return (g.h.dispatch({ type: "CHECKPOINT_COMPLETE_FAILED" }), !1);
    }
}
async function ea(e, t) {
    let n = await f.A.getOrEnsurePrivateChannel(t),
        l = A.A.getChannel(n);
    if (null == l) throw Error("Failed to open private channel");
    s.default.track(ee.HAw.CHECKPOINT_SIDEKICK_MESSAGE_SENT, { other_user_id: t });
    let r = p.Ay.parse(l, e);
    return j.A.sendMessage(l.id, r, !1, { location: "checkpoint-sidekick" });
}
async function es(e, t, n) {
    let l = (await Promise.all(e.map(v.pk))).filter(C.Vq);
    for (let e of await Promise.allSettled(
        l.map((e) => {
            let l = A.A.getChannel(e);
            if (null != l)
                return j.A.sendMessage(l.id, p.Ay.parse(l, t), !1, { location: "checkpoint", checkpointCardType: n });
        }),
    ))
        if ("rejected" === e.status) throw e.reason;
}
var ei = n(627369),
    ec = n(503235),
    eo = n(201779);
let eu = [
        eo.gr.HOME,
        eo.gr.INTRODUCTION,
        eo.gr.VOICE_GENERAL,
        eo.gr.VOICE_FACE,
        eo.gr.MESSAGES_GENERAL,
        eo.gr.MESSAGES_OUTFIT,
        eo.gr.SERVERS_GENERAL,
        eo.gr.SERVERS_HEADWEAR,
        eo.gr.EMOJI_GENERAL,
        eo.gr.EMOJI_SHOES,
        eo.gr.GAMES_GENERAL,
        eo.gr.GAMES_WEARABLE,
        eo.gr.GAME_TIME_GENERAL,
        eo.gr.GAME_TIME_AURA,
        eo.gr.FINALIZE_CHARACTER,
        eo.gr.SUMMARY,
        eo.gr.SHARE,
    ],
    ed = [
        eo.gr.HOME,
        eo.gr.INTRODUCTION,
        eo.gr.VOICE_INTRO,
        eo.gr.VOICE_STATS,
        eo.gr.VOICE_FACE,
        eo.gr.MESSAGES_INTRO,
        eo.gr.MESSAGES_STATS,
        eo.gr.MESSAGES_OUTFIT,
        eo.gr.SERVERS_INTRO,
        eo.gr.SERVERS_STATS,
        eo.gr.TOP_SERVER_STATS,
        eo.gr.SERVERS_HEADWEAR,
        eo.gr.EMOJI_INTRO,
        eo.gr.EMOJI_STATS,
        eo.gr.EMOJI_SHOES,
        eo.gr.GAMES_INTRO,
        eo.gr.GAMES_STATS,
        eo.gr.GAMES_WEARABLE,
        eo.gr.GAME_TIME_STATS,
        eo.gr.GAME_TIME_AURA,
        eo.gr.SQUAD_TRANSITION,
        eo.gr.SQUAD,
        eo.gr.SIDEKICK,
        eo.gr.SIDEKICK_LEAVE,
        eo.gr.FINALIZE_CHARACTER,
        eo.gr.SUMMARY,
        eo.gr.SHARE,
    ],
    em = {
        [eo.gr.VOICE_INTRO]: (e) => !k(e),
        [eo.gr.MESSAGES_INTRO]: (e) => !w(e),
        [eo.gr.SERVERS_INTRO]: (e) => !D(e),
        [eo.gr.EMOJI_INTRO]: (e) => !U(e),
        [eo.gr.GAMES_INTRO]: (e) => !G(e),
    },
    eh = {
        [eo.gr.TOP_SERVER_STATS]: D,
        [eo.gr.SQUAD_TRANSITION]: P,
        [eo.gr.SQUAD]: P,
        [eo.gr.SIDEKICK]: L,
        [eo.gr.SIDEKICK_LEAVE]: L,
    };
function ex(e) {
    let { flow: t, stats: n } = e;
    return (t === eo.Np.SHARED_DATA ? ed : eu).filter((e) => {
        let t = em[e];
        if (null != t) return null != n && t(n);
        let l = eh[e];
        return null == l || void 0 === n || l(n);
    });
}
var eg = n(127639),
    ef = n(218546),
    ej = n(287809),
    ep = n(474090),
    ev = n(817379);
function eA() {
    let {
            selectedCharacterTraits: e,
            savedSelection: t,
            stats: n,
        } = (0, d.cf)([$], () => ({
            selectedCharacterTraits: $.selectedCharacterTraits,
            savedSelection: $.character,
            stats: $.stats,
        })),
        l = (0, d.bG)([ej.default], () => (0, ep.ki)(ej.default.getCurrentUser())),
        r = c.useMemo(
            () =>
                Object.values(eg.V).filter((r) => {
                    let a = e[r];
                    if (null == a || t?.[r] === a) return !1;
                    let s = (0, ev.$C)(r, a);
                    return null != s && (s === ef.K.NITRO ? !l : !(0, ev.mf)(r, n).has(s));
                }),
            [l, t, e, n],
        );
    return { selectedCharacterTraits: e, blockedTraits: r };
}
var eC = n(920495),
    eE = n(299619),
    eN = n(775602),
    eS = n(818348),
    eI = n(11435);
function eb(e) {
    let { isVisible: t } = e,
        n = c.useRef(null),
        l = (0, d.bG)([eN.Ay], () => eN.Ay.useReducedMotion),
        a = t && !l;
    return (
        c.useEffect(() => {
            let e = n.current;
            null != e && (a ? e.play().catch(eS.tE) : e.pause());
        }, [a]),
        c.useEffect(() => {
            l && null != n.current && (n.current.currentTime = 1);
        }, [l]),
        (0, r.jsxs)("div", {
            className: u()(eI.Tp, { [eI.R]: !t }),
            "aria-hidden": !0,
            children: [
                (0, r.jsx)(eE.A, {
                    ref: n,
                    className: eI.Ki,
                    src: "https://cdn.discordapp.com/assets/content/a7a4300630ed2733eca4a8bb584c3086a66063d78e2f829faf465d96ff388a93.webm",
                    loop: !0,
                    muted: !0,
                    playsInline: !0,
                }),
                (0, r.jsx)("div", { className: eI.D7 }),
            ],
        })
    );
}
var ey = n(885619);
function eT(e) {
    let { "aria-label": t, children: n, onClick: l, size: a, className: s, disabled: i = !1 } = e;
    return (0, r.jsx)("button", {
        type: "button",
        className: u()(ey.button, "custom" !== a && ey[a], s),
        onClick: l,
        "aria-label": t,
        disabled: i,
        children: n,
    });
}
function eR(e) {
    let { className: t, ...n } = e;
    return (0, r.jsx)(eT, { ...n, className: u()(ey.shadow, t) });
}
function e_(e) {
    let { animatedSrc: t, staticSrc: n, className: l } = e,
        a = (0, d.bG)([eN.Ay], () => eN.Ay.useReducedMotion);
    return (0, r.jsx)("img", { src: a ? n : t, alt: "", className: l });
}
var eO = n(740281),
    eM = n(766089),
    eL = n(767988);
let eP = { animatedSrc: eM.A, staticSrc: eL.A };
function ek(e) {
    let { activeRoute: t } = e,
        { animatedSrc: n, staticSrc: l } = (0, d.cf)(
            [$],
            () => {
                switch (t) {
                    case eo.gr.SUMMARY:
                    case eo.gr.SHARE:
                        let e = (0, ei.o)($.character),
                            { clydeLogoImage: n, clydeLogoStaticImage: l } = (0, ei.j)(e);
                        return { animatedSrc: n, staticSrc: l };
                    default:
                        return eP;
                }
            },
            [t],
        );
    return (0, r.jsx)(e_, { animatedSrc: n, staticSrc: l, className: eO.w });
}
var ew = n(756408),
    eD = n(834730),
    eU = n(504736);
function eG(e) {
    let { children: t, className: n, ...l } = e;
    return (0, r.jsx)(eD.E, { ...l, className: u()(eU.Q, n), color: "none", children: t });
}
var eF = n(271427);
function eH(e) {
    let { children: t, className: n, style: l } = e;
    return (0, r.jsx)(eG, {
        tag: "span",
        variant: "experimental/mono-md/bold",
        className: u()(eF.T, n),
        style: l,
        children: t,
    });
}
var ez = n(763166),
    eK = n(383931);
function eB(e) {
    let { percent: t } = e;
    return (0, r.jsx)(eH, { className: eK.t, children: y.intl.formatToPlainString(ez.default.fOGKA4, { percent: t }) });
}
var eV = n(646692);
function eY(e) {
    let { icon: t, value: n, topPercent: l, children: a } = e;
    return (0, r.jsxs)("div", {
        className: eV.dJ,
        children: [
            null != l && (0, r.jsx)(eB, { percent: l }),
            (0, r.jsxs)("div", {
                className: eV.p,
                children: [
                    (0, r.jsx)(eG, {
                        variant: "heading-xxl/normal",
                        className: eV.Uq,
                        children: n.toLocaleString(y.intl.currentLocale),
                    }),
                    (0, r.jsxs)("div", {
                        className: eV.Pf,
                        children: [
                            (0, r.jsx)(t, { size: "xs", color: "currentColor" }),
                            (0, r.jsx)(eG, { variant: "heading-sm/extrabold", className: eV.QK, children: a }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var eW = n(303453);
function eq(e) {
    let { earnedCount: t, totalCount: n } = e;
    return (0, r.jsx)(eD.E, {
        variant: "text-md/medium",
        color: "text-subtle",
        children: y.intl.format(ez.default.Vfq58K, {
            earnedCount: t,
            totalCount: n,
            countHook: (e, t) =>
                (0, r.jsx)(eG, { tag: "span", variant: "experimental/mono-md/bold", className: eW.U, children: e }, t),
        }),
    });
}
var eX = n(309913),
    eJ = n(647093);
let eQ = `linear-gradient(to right, ${eX.uz.join(", ")})`;
function eZ(e) {
    let { rarity: t } = e,
        n = c.useMemo(() => ({ "--custom-checkpoint-rarity-background": t === ef.K.NITRO ? eQ : eX.Zy[t] }), [t]);
    return (0, r.jsx)(eH, { className: eJ.q, style: n, children: y.intl.string(eX.iG[t]) });
}
var e$ = n(829870);
function e0(e) {
    let { asset: t, hideRarity: n } = e,
        l = (0, ec.hC)(t);
    return (0, r.jsxs)("div", {
        className: e$.z,
        children: [
            (0, r.jsxs)("div", {
                className: e$.D,
                children: [
                    (0, r.jsx)(eD.E, {
                        tag: "div",
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: t.getName(),
                    }),
                    !n && null != t.rarity && (0, r.jsx)(eZ, { rarity: t.rarity }),
                ],
            }),
            null != l && (0, r.jsx)(eD.E, { variant: "text-md/medium", color: "text-subtle", children: l }),
        ],
    });
}
var e1 = n(661531),
    e5 = n(403581),
    e2 = n(140735),
    e3 = n(835517),
    e4 = n(32623),
    e8 = n(559265);
function e7(e) {
    let { rarity: t } = e,
        n = c.useMemo(() => ({ "--custom-checkpoint-rarity-color": eX.Zy[t] }), [t]);
    return t === ef.K.NITRO
        ? (0, r.jsx)(e5.t, { size: "custom", color: e1.A.colors.ICON_SUBTLE, className: e8.d7 })
        : (0, r.jsx)("span", { className: e8.oG, style: n });
}
function e6(e) {
    let { traitOption: t, groupName: n, isSelected: l, hideRarity: a, onSelectOption: s, disabled: i = !1 } = e,
        { trait: o, optionId: d, rarity: m, asset: h, status: x } = t,
        g = x === e4.eP.LOCKED,
        f = c.useMemo(() => {
            if (null == h) return null;
            let e = Math.round(eX.VG * (0, e3.A)());
            return `${h}?width=${e}&height=${e}`;
        }, [h]);
    return (0, r.jsxs)("label", {
        className: u()(e8.uK, { [e8.wH]: l, [e8.dv]: (0, ec.C5)(t), [e8.xt]: g, [e8.Ns]: x === e4.eP.NITRO_LOCKED }),
        children: [
            (0, r.jsx)(e2.A, {
                children: (0, r.jsx)("input", {
                    type: "radio",
                    name: n,
                    checked: l,
                    disabled: i,
                    onChange: () => s(o, d),
                    "aria-label": (0, ec.v2)(t, a),
                }),
            }),
            null != f && (0, r.jsx)("img", { src: f, alt: "", draggable: !1, className: e8.Sl }),
            !a && null != m && (0, r.jsx)(e7, { rarity: m }),
        ],
    });
}
var e9 = n(509063);
function te(e) {
    let {
            customizationOption: t,
            traitOptions: n,
            selectedOption: l,
            onSelectOption: a,
            disabled: s = !1,
            children: i,
        } = e,
        o = c.useId(),
        u = !(0, ec.Ux)(t);
    return (0, r.jsxs)("div", {
        className: e9.Nz,
        children: [
            (0, r.jsxs)("div", {
                className: e9.fF,
                children: [
                    i,
                    (0, r.jsx)("div", {
                        role: "radiogroup",
                        "aria-label": (0, ec.cq)(t),
                        className: e9.Vg,
                        children: n.map((e) =>
                            (0, r.jsx)(
                                e6,
                                {
                                    traitOption: e,
                                    groupName: o,
                                    isSelected: e.optionId === l?.optionId,
                                    hideRarity: u,
                                    onSelectOption: a,
                                    disabled: s,
                                },
                                e.optionId,
                            ),
                        ),
                    }),
                ],
            }),
            null != l && (0, r.jsx)(e0, { asset: l, hideRarity: u }),
        ],
    });
}
n(321073);
var tt = n(51104),
    tn = n(67915);
function tl(e, t) {
    return e === ec.v7.OUTFIT ? (null != t ? (0, ev.FA)(t) : void 0) : t;
}
function tr(e) {
    let { customizationOption: t } = e,
        {
            optionIds: n,
            selectedOptionId: l,
            savedOptionId: r,
            onSelectOption: a,
        } = (function (e) {
            let { customizationOption: t, onSelectOption: n } = e,
                l = ec.hw[t],
                { selectedOptionId: r, savedOptionId: a } = (0, d.cf)([$], () => ({
                    selectedOptionId: tl(t, $.selectedCharacterTraits[l]),
                    savedOptionId: tl(t, $.character?.[l]),
                })),
                s = c.useCallback(
                    (e, t) => {
                        t !== r && n(e, t);
                    },
                    [n, r],
                );
            return {
                optionIds: (function (e, t) {
                    switch (e) {
                        case ec.v7.OUTFIT:
                            return ev.ps;
                        case ec.v7.OUTFIT_COLOR:
                            return (0, ev.wD)(t ?? tn.r.NONE);
                        default:
                            return;
                    }
                })(t, r),
                selectedOptionId: r,
                savedOptionId: a,
                onSelectOption: s,
            };
        })({ customizationOption: t, onSelectOption: en }),
        {
            traitOptions: s,
            availableTraitOptions: i,
            totalCount: o,
            earnedCount: u,
        } = (function (e) {
            let { customizationOption: t, savedOptionId: n, rarityOrder: l, optionIds: r } = e,
                a = (0, d.bG)([$], () => $.stats),
                s = (0, d.bG)([ej.default], () => (0, ep.ki)(ej.default.getCurrentUser())),
                i = c.useMemo(() => (0, ec.p8)(l), [l]);
            return c.useMemo(() => {
                let e = ec.hw[t],
                    l = t === ec.v7.OUTFIT_COLOR ? tt.x : tt.$[e],
                    c = (0, ev.mf)(e, a),
                    o = [],
                    u = 0,
                    d = 0;
                for (let t of r ?? ev.Rk[e]) {
                    let r = (0, ev.$C)(e, t),
                        a = e4.eP.UNLOCKED;
                    (null == r || c.has(r) || n === t
                        ? r !== ef.K.NITRO || s || (a = e4.eP.NITRO_LOCKED)
                        : (a = e4.eP.LOCKED),
                        null != r && u++,
                        null != r && a === e4.eP.UNLOCKED && d++,
                        o.push({
                            trait: e,
                            optionId: t,
                            asset: ev.qM[e][t]?.thumbnail,
                            rarity: r,
                            status: a,
                            getName: () => {
                                let e = l[t];
                                return null != e ? y.intl.string(e) : "";
                            },
                        }));
                }
                o.sort(i);
                let m = o.filter((e) => {
                    let { status: t } = e;
                    return t !== e4.eP.LOCKED;
                });
                return { traitOptions: o, availableTraitOptions: m, totalCount: u, earnedCount: d };
            }, [t, s, r, i, n, a]);
        })({ customizationOption: t, savedOptionId: r, rarityOrder: eX.FG, optionIds: n }),
        m = c.useMemo(
            () =>
                s.find((e) => {
                    let { optionId: t } = e;
                    return t === l;
                }) ?? i[0],
            [l, s, i],
        );
    return (
        !(function (e) {
            let { availableTraitOptions: t, selectedOptionId: n, onSelectOption: l, paused: r } = e,
                a = t[0],
                s = t.some((e) => e.optionId === n);
            c.useEffect(() => {
                r || null == a || s || l(a.trait, a.optionId);
            }, [a, s, l, r]);
        })({ availableTraitOptions: i, selectedOptionId: l, onSelectOption: a, paused: m?.status === e4.eP.LOCKED }),
        { traitOptions: s, selectedOption: m, totalCount: o, earnedCount: u, onSelectOption: a }
    );
}
function ta(e) {
    let { customizationOption: t } = e,
        {
            traitOptions: n,
            selectedOption: l,
            totalCount: a,
            earnedCount: s,
            onSelectOption: i,
        } = tr({ customizationOption: t });
    return (0, r.jsx)(te, {
        customizationOption: t,
        traitOptions: n,
        selectedOption: l,
        onSelectOption: i,
        children: (0, r.jsx)(eq, { earnedCount: s, totalCount: a }),
    });
}
var ts = n(71678);
function ti(e) {
    let { children: t, className: n } = e;
    return (0, r.jsx)("div", { className: u()(ts.n, n), children: t });
}
var tc = n(922704);
function to() {
    let e = (0, d.bG)([$], () => $.stats?.emojis);
    return (0, r.jsxs)(ti, {
        children: [
            (0, r.jsx)(eY, {
                icon: ew.o,
                value: Math.round(e?.numEmojisSent ?? 0),
                topPercent: O(e?.numEmojisSentPercentile),
                children: y.intl.string(tc.default.JwFMdL),
            }),
            (0, r.jsx)(ta, { customizationOption: ec.v7.SHOES }),
        ],
    });
}
var tu = n(297264),
    td = n(265872),
    tm = n(320448),
    th = n(315710),
    tx = n(444927);
let tg = {
    "--custom-checkpoint-primary": eX.Kr,
    "--custom-checkpoint-dark-cyan": eX.ow,
    "--custom-checkpoint-button-border": eX.ow,
    "--custom-checkpoint-button-shadow": eX.zj,
    "--custom-checkpoint-white": eX.Ve,
    "--custom-checkpoint-guild-card-background": eX.LM,
    "--custom-checkpoint-background-gradient-start": eX.bI,
};
var tf = n(580814);
function tj(e) {
    let { options: t, activeCustomizationOption: n, returnRef: l, onSelectOption: a, onClose: s } = e,
        i = c.useRef(null),
        o = c.useRef([]),
        u = (0, tx.A)(() => Math.max(t.indexOf(n), 0));
    function d(e) {
        o.current[(e + t.length) % t.length]?.focus();
    }
    return (
        (0, th.tj)(i, { returnRef: l }),
        c.useEffect(() => {
            o.current[u]?.focus();
        }, [u]),
        (0, r.jsx)("div", {
            ref: i,
            role: "menu",
            tabIndex: -1,
            "aria-label": y.intl.string(ez.default.Zl5vPW),
            className: tf.M,
            style: tg,
            onKeyDown: function (e) {
                e.stopPropagation();
                let n = o.current.indexOf(e.target);
                switch (e.key) {
                    case "ArrowDown":
                        (e.preventDefault(), d(n + 1));
                        break;
                    case "ArrowUp":
                        (e.preventDefault(), d(n - 1));
                        break;
                    case "Home":
                        (e.preventDefault(), d(0));
                        break;
                    case "End":
                        (e.preventDefault(), d(t.length - 1));
                        break;
                    case "Escape":
                    case "Tab":
                        (e.preventDefault(), s());
                }
            },
            children: t.map((e, t) =>
                (0, r.jsx)(
                    "button",
                    {
                        ref: (e) => {
                            o.current[t] = e;
                        },
                        type: "button",
                        role: "menuitemradio",
                        "aria-checked": e === n,
                        tabIndex: -1,
                        className: tf.A,
                        onClick: () => a(e),
                        onMouseEnter: (e) => e.currentTarget.focus(),
                        children: (0, r.jsx)(eD.E, {
                            tag: "span",
                            variant: "heading-md/extrabold",
                            color: "none",
                            children: (0, ec.cq)(e),
                        }),
                    },
                    e,
                ),
            ),
        })
    );
}
var tp = n(769909);
let tv = [ec.v7.BASE, ec.v7.OUTFIT_COLOR],
    tA = [ec.v7.AURA, ec.v7.WEARABLE, ec.v7.SHOES, ec.v7.HAT, ec.v7.OUTFIT, ec.v7.FACE];
function tC(e) {
    let { activeCustomizationOption: t, onSelectOption: n, disabled: l = !1 } = e,
        a = c.useRef(null),
        s = tA.includes(t);
    return (0, r.jsx)(td.Y, {
        targetElementRef: a,
        position: "right",
        align: "top",
        spacing: 8,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, r.jsx)(tj, {
                options: tA,
                activeCustomizationOption: t,
                returnRef: a,
                onSelectOption: (e) => {
                    (n(e), l());
                },
                onClose: l,
            });
        },
        children: (e, n) => {
            let { isShown: i } = n;
            return (0, r.jsxs)("button", {
                ...e,
                ref: a,
                type: "button",
                disabled: l,
                "aria-haspopup": "menu",
                onKeyDown: (t) => {
                    (e.onKeyDown(t), ("ArrowLeft" === t.key || "ArrowRight" === t.key) && t.stopPropagation());
                },
                className: u()(tp.Mf, tp.OS, { [tp.vu]: s || i }),
                children: [
                    (0, r.jsx)(eD.E, {
                        tag: "span",
                        variant: "heading-md/extrabold",
                        color: "none",
                        children: s ? (0, ec.cq)(t) : y.intl.string(ez.default["iXpQc+"]),
                    }),
                    (0, r.jsx)(tm._, { size: "refresh_sm", color: "currentColor" }),
                ],
            });
        },
    });
}
function tE(e) {
    let { activeCustomizationOption: t, onSelectOption: n, disabled: l = !1 } = e,
        a = c.useId();
    return (0, r.jsxs)("div", {
        className: tp.vR,
        children: [
            (0, r.jsx)("div", {
                role: "radiogroup",
                "aria-label": y.intl.string(ez.default.Zl5vPW),
                className: tp.vR,
                children: tv.map((e) => {
                    let s = e === t;
                    return (0, r.jsxs)(
                        "label",
                        {
                            className: u()(tp.Mf, { [tp.vu]: s }),
                            children: [
                                (0, r.jsx)(e2.A, {
                                    children: (0, r.jsx)("input", {
                                        type: "radio",
                                        name: a,
                                        checked: s,
                                        disabled: l,
                                        onChange: () => n(e),
                                    }),
                                }),
                                (0, r.jsx)(eD.E, {
                                    tag: "span",
                                    variant: "heading-md/extrabold",
                                    color: "none",
                                    children: (0, ec.cq)(e),
                                }),
                            ],
                        },
                        e,
                    );
                }),
            }),
            (0, r.jsx)(tC, { activeCustomizationOption: t, onSelectOption: n, disabled: l }),
        ],
    });
}
var tN = n(195464);
function tS() {
    let [e, t] = c.useState(ec.v7.BASE),
        { traitOptions: n, selectedOption: l, onSelectOption: a } = tr({ customizationOption: e }),
        { blockedTraits: s } = eA(),
        i = s.includes(ec.hw[e]),
        o = (0, d.bG)([$], () => $.isSaving);
    return (0, r.jsxs)(ti, {
        className: tN.n,
        children: [
            (0, r.jsx)(tu.D, {
                variant: "heading-xl/medium",
                color: "none",
                className: tN.D,
                children: y.intl.string(ez.default["q2nj/Z"]),
            }),
            (0, r.jsx)(tE, { activeCustomizationOption: e, onSelectOption: t, disabled: o || i }),
            (0, r.jsx)(te, {
                customizationOption: e,
                traitOptions: n,
                selectedOption: l,
                onSelectOption: a,
                disabled: o,
            }),
        ],
    });
}
var tI = n(81466);
function tb() {
    let e = (0, d.bG)([$], () => $.stats?.games);
    return (0, r.jsxs)(ti, {
        children: [
            (0, r.jsx)(eY, {
                icon: tI.CalendarIcon,
                value: Math.round(e?.totalDaysPlayed ?? 0),
                topPercent: O(e?.totalDaysPlayedPercentile),
                children: y.intl.string(ez.default.oAoYbN),
            }),
            (0, r.jsx)(ta, { customizationOption: ec.v7.AURA }),
        ],
    });
}
var ty = n(687966);
function tT() {
    let e = (0, d.bG)([$], () => $.stats?.games);
    return (0, r.jsxs)(ti, {
        children: [
            (0, r.jsx)(eY, {
                icon: ty.GameControllerIcon,
                value: Math.round(e?.totalGamesPlayed ?? 0),
                topPercent: O(e?.totalGamesPlayedPercentile),
                children: y.intl.string(ez.default.HM2fjf),
            }),
            (0, r.jsx)(ta, { customizationOption: ec.v7.WEARABLE }),
        ],
    });
}
var tR = n(534890);
function t_() {
    let e = (0, d.bG)([$], () => $.stats?.messages);
    return (0, r.jsxs)(ti, {
        children: [
            (0, r.jsx)(eY, {
                icon: tR.ChatIcon,
                value: Math.round(e?.numMessagesSent ?? 0),
                topPercent: O(e?.numMessagesSentPercentile),
                children: y.intl.string(tc.default.wWKySP),
            }),
            (0, r.jsx)(ta, { customizationOption: ec.v7.OUTFIT }),
        ],
    });
}
var tO = n(664121);
function tM() {
    let e = (0, d.bG)([$], () => $.stats?.guilds?.guilds[0]);
    return (0, r.jsxs)(ti, {
        children: [
            (0, r.jsx)(eY, {
                icon: tO.R,
                value: Math.round(e?.numDaysInteracted ?? 0),
                topPercent: O(e?.numDaysInteractedPercentile),
                children: y.intl.string(ez.default["M+a+t1"]),
            }),
            (0, r.jsx)(ta, { customizationOption: ec.v7.HAT }),
        ],
    });
}
var tL = n(831544);
function tP() {
    let e = (0, d.bG)([$], () => $.stats?.voice),
        t = Math.round(e?.totalVoiceMinutes ?? 0);
    return (0, r.jsxs)(ti, {
        children: [
            (0, r.jsx)(eY, {
                icon: tL.MicrophoneIcon,
                value: t,
                topPercent: O(e?.totalVoiceMinutesPercentile),
                children: y.intl.formatToPlainString(tc.default.UZbUtl, { numMinutes: t }),
            }),
            (0, r.jsx)(ta, { customizationOption: ec.v7.FACE }),
        ],
    });
}
function tk(e) {
    let { route: t } = e;
    switch (t) {
        case eo.gr.VOICE_FACE:
            return (0, r.jsx)(tP, {});
        case eo.gr.MESSAGES_OUTFIT:
            return (0, r.jsx)(t_, {});
        case eo.gr.SERVERS_HEADWEAR:
            return (0, r.jsx)(tM, {});
        case eo.gr.EMOJI_SHOES:
            return (0, r.jsx)(to, {});
        case eo.gr.GAMES_WEARABLE:
            return (0, r.jsx)(tT, {});
        case eo.gr.GAME_TIME_AURA:
            return (0, r.jsx)(tb, {});
        case eo.gr.FINALIZE_CHARACTER:
            return (0, r.jsx)(tS, {});
        default:
            return null;
    }
}
var tw = n(358618),
    tD = n(983851);
function tU() {
    let e = (0, d.bG)([$], () => $.isMuted),
        t = e ? tw._ : tD.H;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(eT, {
                size: "sm",
                "aria-label": y.intl.string(e ? y.t.YqAjXy : y.t.w4m945),
                onClick: et,
                children: (0, r.jsx)(t, { size: "xs", color: "currentColor" }),
            }),
            (0, r.jsx)("audio", {
                autoPlay: !0,
                loop: !0,
                muted: e,
                children: (0, r.jsx)("source", {
                    src: "https://cdn.discordapp.com/assets/content/c341757eb38a259a9413a30e414959cad8ce8ad272ece41f4d9e45a953c02c21.mp3",
                }),
            }),
        ],
    });
}
var tG = n(477155),
    tF = n(935286),
    tH = n(858899),
    tz = n(289873),
    tK = n(621466);
function tB(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    c.useEffect(() => {
        if (!n) return (window.addEventListener("keydown", l), () => window.removeEventListener("keydown", l));
        function l(n) {
            (0, tK.vq)(n.target, HTMLTextAreaElement) || (0, tK.vq)(n.target, HTMLInputElement) || (n.key === e && t());
        }
    }, [e, t, n]);
}
var tV = n(753875);
function tY(e) {
    let { onClick: t, disabled: n = !1 } = e;
    return (
        tB("ArrowLeft", t, n),
        (0, r.jsx)(eT, {
            size: "md",
            className: u()(tV.A4, tV.aX),
            onClick: t,
            disabled: n,
            "aria-label": y.intl.string(y.t["13/7kX"]),
            children: (0, r.jsx)(tG.r, { color: "currentColor" }),
        })
    );
}
function tW(e) {
    let { onClick: t, disabled: n = !1 } = e;
    return (
        tB("ArrowRight", t, n),
        (0, r.jsx)(eR, {
            size: "md",
            className: u()(tV.A4, tV.K2),
            onClick: t,
            disabled: n,
            "aria-label": y.intl.string(y.t.PDTjLN),
            children: (0, r.jsx)(tF.E, { color: "currentColor" }),
        })
    );
}
function tq(e) {
    let { onBack: t, isRouteBlocked: n } = e,
        l = (0, d.bG)([$], () => $.isSaving);
    return (0, r.jsx)(tY, {
        onClick: function () {
            l || t();
        },
        disabled: l || n,
    });
}
function tX(e) {
    let { onNext: t, isRouteBlocked: n } = e,
        l = (0, d.bG)([$], () => $.isSaving),
        a = l || n;
    async function s() {
        if (l) return;
        let e = (0, ev.XI)($.selectedCharacterTraits);
        (await er(e)) ? t() : (0, tH.P0)({ text: y.intl.string(y.t.fEptJP), variant: "critical" });
    }
    return (
        tB("ArrowRight", s, a),
        (0, r.jsxs)(eR, {
            size: "custom",
            className: u()(tV.A4, tV.K2, tV.UN),
            onClick: s,
            disabled: a,
            "aria-label": y.intl.string(y.t["R3BPH+"]),
            children: [
                (0, r.jsx)(eG, {
                    variant: "experimental/mono-md/normal",
                    className: tV.L8,
                    children: y.intl.string(y.t["R3BPH+"]),
                }),
                l
                    ? (0, r.jsx)(tz.y, { type: tz.t.SPINNING_CIRCLE_SIMPLE, className: tV.u1, itemClassName: tV.$N })
                    : (0, r.jsx)(tF.E, { size: "refresh_sm", color: "currentColor" }),
            ],
        })
    );
}
function tJ(e) {
    let { activeRoute: t, isRouteBlocked: n, onBack: l, onNext: a } = e;
    switch (t) {
        case eo.gr.HOME:
            return null;
        case eo.gr.FINALIZE_CHARACTER:
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(tq, { onBack: l, isRouteBlocked: n }),
                    (0, r.jsx)(tX, { onNext: a, isRouteBlocked: n }),
                ],
            });
        default:
            return (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(tY, { onClick: l, disabled: n }), (0, r.jsx)(tW, { onClick: a, disabled: n })],
            });
    }
}
function tQ(e) {
    let { className: t } = e;
    return (0, r.jsx)(e_, {
        animatedSrc:
            "https://cdn.discordapp.com/assets/content/02e9ae4cdbec0b2adef22c9a5659f5c7340e399cc8932e8af6d41e62a37644ae.png",
        staticSrc:
            "https://cdn.discordapp.com/assets/content/f08be0abd0d224b5f7e1e5d6c1ef8e4d24cddcb712e2c624dcc6ea3d136818d5.png",
        className: t,
    });
}
var tZ = n(771639);
function t$(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", { className: tZ.n, children: t });
}
var t0 = n(639331);
function t1() {
    let e = (0, d.bG)([$], () => $.fetchState !== z.SUCCESS || null != $.stats);
    return (0, r.jsx)(t$, {
        children: (0, r.jsxs)("div", {
            className: t0.Qs,
            children: [
                (0, r.jsxs)("div", {
                    className: t0.Ok,
                    children: ["2026", !e && (0, r.jsx)(tQ, { className: t0.gi })],
                }),
                (0, r.jsxs)("div", {
                    className: t0.eH,
                    children: [
                        (0, r.jsx)(eG, {
                            tag: "p",
                            variant: "heading-lg/medium",
                            children: y.intl.string(e ? ez.default["7YmUVu"] : ez.default["Fyr+NW"]),
                        }),
                        !e &&
                            (0, r.jsx)(eG, {
                                tag: "p",
                                variant: "heading-lg/medium",
                                children: y.intl.string(ez.default["2GRr6H"]),
                            }),
                    ],
                }),
            ],
        }),
    });
}
(n(134528), n(947204));
var t5 = n(675970),
    t2 = n(559106),
    t3 = n(366056),
    t4 = n(292801),
    t8 = n(155718),
    t7 = n(294454),
    t6 = n(489414),
    t9 = n(878358),
    ne = n(383233),
    nt = n(819648),
    nn = n(677059);
function nl(e) {
    let { children: t } = e;
    return (0, r.jsx)(eG, { variant: "heading-xxl/medium", className: nn.h, children: t });
}
var nr = n(100391);
function na(e) {
    let { icon: t, children: n } = e;
    return (0, r.jsxs)("div", {
        className: nr.D,
        children: [
            (0, r.jsx)(t, { size: "md", color: "currentColor" }),
            (0, r.jsx)(eG, { variant: "heading-lg/extrabold", className: nr.Q, children: n }),
        ],
    });
}
var ns = n(456410);
function ni(e) {
    let { name: t, label: n, checked: l, onSelect: a, children: s } = e;
    return (0, r.jsx)(t2.vN, {
        within: !0,
        children: (0, r.jsxs)("label", {
            className: u()(ns.uK, { [ns.KD]: l }),
            children: [
                (0, r.jsx)(e2.A, {
                    children: (0, r.jsx)("input", { type: "radio", name: t, checked: l, onChange: a, "aria-label": n }),
                }),
                l ? (0, r.jsx)("div", { className: ns.Gt, "aria-hidden": !0 }) : null,
                (0, r.jsx)("div", { className: ns.Nr, "aria-hidden": !0, children: s }),
            ],
        }),
    });
}
function nc() {
    let e = (0, d.bG)([$], () => $.character),
        t = (0, d.bG)([$], () => $.stats),
        n = c.useId(),
        l = c.useMemo(() => {
            var n, l;
            return ((n = e),
            (l = t),
            null != n && null != l
                ? [t5.Q.CHARACTER_ONLY, t5.Q.DEFAULT, t5.Q.STATS_ONLY]
                : null != n
                  ? [t5.Q.CHARACTER_ONLY]
                  : null != l
                    ? [t5.Q.STATS_ONLY]
                    : []).map((n) => ({ cardType: n, checkpointData: (0, nt.Go)(n, e, t) }));
        }, [e, t]),
        [a, s] = c.useState(l.at(0)?.cardType),
        i = l.find((e) => {
            let { cardType: t } = e;
            return t === a;
        });
    return null == i
        ? null
        : (0, r.jsx)(t$, {
              children: (0, r.jsxs)("div", {
                  className: ns.uM,
                  children: [
                      (0, r.jsxs)("div", {
                          className: ns.wx,
                          children: [
                              (0, r.jsxs)("div", {
                                  className: ns.R_,
                                  children: [
                                      (0, r.jsx)(na, { icon: t3.M, children: y.intl.string(tc.default.ir6nEQ) }),
                                      (0, r.jsx)(eG, {
                                          variant: "display-lg",
                                          className: ns.Vy,
                                          children: y.intl.string(tc.default["T7cl+Y"]),
                                      }),
                                  ],
                              }),
                              (0, r.jsx)("div", {
                                  className: ns.h_,
                                  children: (0, r.jsx)(nl, { children: y.intl.string(ez.default.KXDPot) }),
                              }),
                          ],
                      }),
                      (0, r.jsx)("div", {
                          role: "radiogroup",
                          "aria-label": y.intl.string(ez.default.KXDPot),
                          className: ns.kR,
                          children: l.map((e) => {
                              let { cardType: t, checkpointData: l } = e;
                              return (0, r.jsx)(
                                  ni,
                                  {
                                      name: n,
                                      label: (function (e) {
                                          switch (e) {
                                              case t5.Q.CHARACTER_ONLY:
                                                  return y.intl.string(ez.default.tUU3fe);
                                              case t5.Q.DEFAULT:
                                                  return y.intl.string(ez.default.DZQzJn);
                                              case t5.Q.STATS_ONLY:
                                                  return y.intl.string(ez.default.e2UHGT);
                                          }
                                      })(t),
                                      checked: t === i.cardType,
                                      onSelect: () => s(t),
                                      children: (0, r.jsx)(t9.A, { checkpointData: l }),
                                  },
                                  t,
                              );
                          }),
                      }),
                      (0, r.jsxs)(eR, {
                          size: "custom",
                          className: ns.sY,
                          "aria-label": y.intl.string(y.t.I3ltXO),
                          onClick: function () {
                              if (null == i) return;
                              let { cardType: e, checkpointData: t } = i;
                              (0, t7.fO)({
                                  message: new ne.Ay({
                                      content: "",
                                      components: [
                                          { type: t8.I5.CHECKPOINT_CARD, id: (0, t6.X1)("0"), checkpointData: t },
                                      ],
                                  }),
                                  source: "checkpoint",
                                  customSendHandler: async (t, n, l) => {
                                      let { withMessage: r } = n;
                                      l(!0);
                                      try {
                                          (await es(t, r ?? "", e),
                                              (0, t7.Be)(),
                                              (0, tH.P0)({ text: y.intl.string(y.t.kwmYkt), variant: "success" }));
                                      } catch {
                                          (0, tH.P0)({ text: y.intl.string(y.t.iufib1), variant: "critical" });
                                      } finally {
                                          l(!1);
                                      }
                                  },
                              });
                          },
                          children: [
                              (0, r.jsx)(eD.E, {
                                  variant: "experimental/mono-md/bold",
                                  color: "none",
                                  className: ns.RC,
                                  children: y.intl.string(y.t.I3ltXO),
                              }),
                              (0, r.jsx)(t4.t, { size: "refresh_sm", color: "currentColor" }),
                          ],
                      }),
                  ],
              }),
          });
}
var no = n(536426),
    nu = n(782134),
    nd = n(998304),
    nm = n(427262),
    nh = n(438389);
let nx = (0, nd.j5)(eX.Kr);
function ng(e) {
    let { onStart: t } = e,
        n = (0, d.bG)([ej.default], () => ej.default.getCurrentUser()),
        l = (0, nm.tx)(n),
        a = (0, d.bG)([eN.Ay], () => eN.Ay.useReducedMotion);
    return (
        tB("ArrowRight", t),
        (0, r.jsxs)(t$, {
            children: [
                (0, r.jsxs)("div", {
                    className: nh.Qs,
                    children: [
                        (0, r.jsxs)("div", {
                            className: nh.wx,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: nh.Qq,
                                    children: [
                                        (0, r.jsx)(eG, {
                                            variant: "display-lg",
                                            className: nh.DD,
                                            children: y.intl.string(tc.default["CdU/PF"]),
                                        }),
                                        (0, r.jsx)(eG, {
                                            variant: "heading-xxl/medium",
                                            children: y.intl.formatToPlainString(ez.default.xhZ23b, { username: l }),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)("div", {
                                    className: nh.CB,
                                    children: (0, r.jsx)(no.U, {
                                        artboard: "Entry",
                                        className: nh.lW,
                                        fit: "contain",
                                        withReducedMotion: "short-loop",
                                        dataBinding: { iconColor: nx, reducedMotion: a },
                                    }),
                                }),
                            ],
                        }),
                        (0, r.jsxs)(eR, {
                            size: "custom",
                            className: nh.ni,
                            "aria-label": y.intl.string(y.t.I0v0Qv),
                            onClick: t,
                            children: [
                                (0, r.jsx)(nu.PlayIcon, { size: "refresh_sm", color: "currentColor" }),
                                (0, r.jsx)(eG, {
                                    variant: "experimental/mono-md/normal",
                                    className: nh.qK,
                                    children: y.intl.string(y.t.I0v0Qv),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(eG, {
                    variant: "text-md/medium",
                    className: nh.al,
                    children: y.intl.format(tc.default.g476ZL, { name: "Exyl" }),
                }),
            ],
        })
    );
}
var nf = n(788026),
    nj = n(141881);
function np(e) {
    let { children: t } = e;
    return (0, r.jsx)(eH, { className: nj.l, children: t });
}
var nv = n(765671),
    nA = n(590642),
    nC = n(362263),
    nE = n(406956);
let nN = (0, nd.j5)(eX.Kr);
function nS(e) {
    let { value: t, alignment: n = "left" } = e,
        l = (0, d.bG)([eN.Ay], () => eN.Ay.useReducedMotion),
        [a, s] = c.useState(0),
        i = l ? t : a;
    c.useEffect(() => {
        if (l) return;
        let e = performance.now(),
            n = requestAnimationFrame(function l(r) {
                let a = Math.min((r - e) / 500, 1);
                (s(Math.round(t * a)), a < 1 && (n = requestAnimationFrame(l)));
            });
        return () => cancelAnimationFrame(n);
    }, [t, l]);
    let o = "center" === n ? nA.m : nC.w;
    return (0, r.jsxs)("div", {
        className: nE.lY,
        children: [
            (0, r.jsx)("div", { className: nE.VL, children: t }),
            (0, r.jsx)(o, {
                className: nE.lW,
                fit: "layout",
                withReducedMotion: "short-loop",
                dataBinding: { DisplayValue: i, TextColor: nN },
            }),
            (0, r.jsx)(e2.A, { children: t.toLocaleString(y.intl.currentLocale) }),
        ],
    });
}
var nI = n(434911);
function nb(e) {
    let { value: t } = e,
        { ref: n, width: l } = (0, nv.Ay)(),
        { ref: a, width: s } = (0, nv.Ay)(),
        i = null != l && null != s ? Math.min(1, l / s) : 1;
    return (0, r.jsxs)("div", {
        ref: n,
        className: nI.ai,
        style: { height: 200 * i },
        children: [
            (0, r.jsx)("span", { ref: a, className: u()(nI.Qq, nI.xP), children: t }),
            (0, r.jsx)(nS, { value: t }),
        ],
    });
}
function ny(e) {
    let { value: t } = e;
    return (0, r.jsxs)("div", {
        className: nI.dJ,
        children: [
            "number" == typeof t
                ? (0, r.jsx)(nb, { value: t })
                : (0, r.jsx)(eG, { variant: "heading-xxl/normal", className: nI.Qq, children: t }),
            (0, r.jsx)(tQ, { className: nI.gi }),
        ],
    });
}
(n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162));
var nT = n(445199),
    nR = n(205524),
    n_ = n(690521),
    nO = n(152321);
let nM = [0, 0, 2],
    nL = [0, 1, 0],
    nP = [0, 0, 0],
    nk = `
attribute vec4 a_position;
attribute vec2 a_texcoord;
uniform mat4 u_normalMatrix;
attribute vec3 a_vertexNormal;

uniform mat4 u_matrix;

varying vec2 v_texcoord;
varying highp vec3 v_lighting;

void main() {
  // Multiply the position by the matrix.
  gl_Position = u_matrix * a_position;

  // Pass the texcoord to the fragment shader.
  v_texcoord = a_texcoord;

  highp vec3 ambientLight = vec3(0.4, 0.4, 0.4);
  highp vec3 directionalLightColor = vec3(0.6, 0.6, 0.6);
  highp vec3 directionalVector = normalize(vec3(0.0, 0.0, 1.0));

  highp vec4 transformedNormal = u_normalMatrix * vec4(a_vertexNormal, 0.0);

  highp float directional = max(dot(transformedNormal.xyz, directionalVector), 0.0);
  v_lighting = ambientLight + (directionalLightColor * directional);
}
`,
    nw = `
precision mediump float;

varying vec2 v_texcoord;
varying highp vec3 v_lighting;

uniform sampler2D u_texture;

void main() {
  highp vec4 texelColor = texture2D(u_texture, v_texcoord);
  gl_FragColor = vec4(texelColor.rgb * v_lighting, texelColor.a);
}
`,
    nD = [
        -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5,
        -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5, 0.5, -0.5, 0.5, -0.5, -0.5,
        0.5, 0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, -0.5,
        -0.5, -0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5,
        -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, 0.5, 0.5,
        -0.5, 0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5,
    ],
    nU = [
        0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0,
        1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0,
    ],
    nG = [
        0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
        1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0,
        -1, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
        1, 0, 0,
    ];
function nF(e) {
    let t,
        { emoji: n } = e,
        [l, a] = c.useState(null),
        [s, i] = c.useState(null),
        o = c.useRef(new Image()),
        [u, m] = c.useState(null),
        [h, x] = c.useState(!1),
        g = c.useRef(0),
        f = c.useRef(0),
        j = c.useRef(45),
        p = c.useRef(45),
        v = (0, d.bG)([eN.Ay], () => eN.Ay.useReducedMotion),
        A = 70 * !v,
        C = 40 * !v,
        E = c.useRef(A),
        N = c.useRef(C),
        S = c.useRef(!1),
        I = c.useRef(0),
        b = c.useRef(0);
    ((t = c.useRef(null)),
        c.useEffect(() => {
            if (null == t.current || null == s) return;
            let e = t.current,
                n = e.createTexture();
            (e.bindTexture(e.TEXTURE_2D, n),
                e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, s),
                e.generateMipmap(e.TEXTURE_2D));
        }, [s, u]),
        c.useEffect(() => {
            let e,
                n = 0,
                r = l?.getContext("webgl");
            if (null == r || null == l || null == s) return;
            t.current = r;
            let a = r.createShader(r.VERTEX_SHADER),
                i = r.createShader(r.FRAGMENT_SHADER);
            if (null == a || null == i) return;
            if (
                (r.shaderSource(a, nk),
                r.shaderSource(i, nw),
                r.compileShader(a),
                !r.getShaderParameter(a, r.COMPILE_STATUS))
            )
                return void console.error("ERROR compiling vertex shader!", r.getShaderInfoLog(a));
            if ((r.compileShader(i), !r.getShaderParameter(i, r.COMPILE_STATUS)))
                return void console.error("ERROR compiling fragment shader!", r.getShaderInfoLog(i));
            let c = r.createProgram();
            if (
                (r.attachShader(c, a), r.attachShader(c, i), r.linkProgram(c), !r.getProgramParameter(c, r.LINK_STATUS))
            )
                return void console.error("ERROR linking program!", r.getProgramInfoLog(c));
            if ((r.validateProgram(c), !r.getProgramParameter(c, r.VALIDATE_STATUS)))
                return void console.error("ERROR validating program!", r.getProgramInfoLog(c));
            let o = r.getAttribLocation(c, "a_position"),
                u = r.getAttribLocation(c, "a_texcoord"),
                d = r.getUniformLocation(c, "u_matrix"),
                m = r.getUniformLocation(c, "u_texture"),
                h = r.getAttribLocation(c, "a_vertexNormal"),
                x = r.getUniformLocation(c, "u_normalMatrix"),
                g = r.createBuffer();
            (r.bindBuffer(r.ARRAY_BUFFER, g),
                r.bufferData(r.ARRAY_BUFFER, new Float32Array(nG), r.STATIC_DRAW),
                r.vertexAttribPointer(h, 3, r.FLOAT, !1, 0, 0),
                r.enableVertexAttribArray(h));
            let f = r.createBuffer();
            (r.bindBuffer(r.ARRAY_BUFFER, f),
                (e = new Float32Array(nD)),
                r.bufferData(r.ARRAY_BUFFER, e, r.STATIC_DRAW));
            let v = r.createBuffer();
            (r.bindBuffer(r.ARRAY_BUFFER, v), r.bufferData(r.ARRAY_BUFFER, new Float32Array(nU), r.STATIC_DRAW));
            let A = nT.DF(60);
            return (
                (n = requestAnimationFrame(function e() {
                    if (null == r || null == l) return;
                    (r.viewport(0, 0, r.canvas.width, r.canvas.height), r.enable(r.CULL_FACE), r.enable(r.DEPTH_TEST));
                    let t = nT.DF(j.current),
                        a = nT.DF(p.current);
                    (r.clear(r.COLOR_BUFFER_BIT | r.DEPTH_BUFFER_BIT),
                        r.useProgram(c),
                        r.enableVertexAttribArray(o),
                        r.bindBuffer(r.ARRAY_BUFFER, f),
                        r.vertexAttribPointer(o, 3, r.FLOAT, !1, 0, 0),
                        r.enableVertexAttribArray(u),
                        r.bindBuffer(r.ARRAY_BUFFER, v),
                        r.vertexAttribPointer(u, 2, r.FLOAT, !1, 0, 0));
                    let s = l.clientWidth / l.clientHeight,
                        i = nR.fN(nR.vt(), A, s, 1, 2e3),
                        h = nR.t5(nR.vt(), nM, nP, nL),
                        g = nR.lw(nR.vt(), i, h),
                        C = nR.vt();
                    (nR.eL(C, C, t), nR.Z8(C, C, a));
                    let E = nR.lw(nR.vt(), g, C),
                        N = nR.vt();
                    (nR.B8(N, C),
                        nR.mg(N, N),
                        r.uniformMatrix4fv(x, !1, N),
                        r.uniformMatrix4fv(d, !1, E),
                        r.uniform1i(m, 0),
                        r.drawArrays(r.TRIANGLES, 0, 36),
                        (n = requestAnimationFrame(e)));
                })),
                () => cancelAnimationFrame(n)
            );
        }, [j, p, l, s]));
    let y = c.useCallback(() => {
        let e = s?.getContext("2d");
        null != s &&
            null != e &&
            ((e.fillStyle = "black"),
            e.fillRect(0, 0, s.width, s.height),
            e.drawImage(o.current, 0, 0, s.width, s.height),
            (e.fillStyle = eX.qn),
            e.fillRect(0, 0, s.width, 1),
            e.fillRect(0, 0, 1, s.height),
            e.fillRect(0, s.height - 1, s.width, 1),
            e.fillRect(s.width - 1, 0, 1, s.height),
            m(n),
            x(!0));
    }, [n, o, s]);
    (c.useEffect(() => {
        null != s &&
            ((o.current.crossOrigin = "anonymous"), (o.current.src = (0, n_.Ez)(n, 256)), (o.current.onload = y));
    }, [n, y, o, s]),
        c.useEffect(
            () => (
                !(function e(t) {
                    let n = 0.001 * t,
                        l = Math.min(n - f.current, 0.1);
                    if (((p.current += -N.current * l), (j.current += -E.current * l), !S.current)) {
                        if (Math.abs(E.current) > A) {
                            let e = E.current > 0 ? 1 : -1;
                            E.current -= 2 * e * window.devicePixelRatio;
                        }
                        if (Math.abs(N.current) > C) {
                            let e = N.current > 0 ? 1 : -1;
                            N.current -= 2 * e * window.devicePixelRatio;
                        }
                    }
                    ((f.current = n), (g.current = requestAnimationFrame(e)));
                })(0),
                () => cancelAnimationFrame(g.current)
            ),
            [A, C],
        ));
    let T = c.useCallback((e) => {
            ((S.current = !0), (E.current = 0), (N.current = 0), (I.current = e.clientX), (b.current = e.clientY));
        }, []),
        R = c.useCallback((e) => {
            if (S.current) {
                let t = (e.clientX - I.current) / window.devicePixelRatio;
                ((E.current = -((e.clientY - b.current) / window.devicePixelRatio) * (100 / window.devicePixelRatio)),
                    (N.current = -t * (100 / window.devicePixelRatio)),
                    (I.current = e.clientX),
                    (b.current = e.clientY));
            }
        }, []),
        _ = c.useCallback(() => {
            S.current = !1;
        }, []);
    return (
        c.useEffect(
            () => (
                window.addEventListener("mouseup", _),
                window.addEventListener("mousemove", R),
                () => {
                    (window.removeEventListener("mouseup", _), window.removeEventListener("mousemove", R));
                }
            ),
            [R, _],
        ),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)("canvas", { className: h ? nO.n3 : nO.q4, ref: a, height: 512, width: 512, onMouseDown: T }),
                (0, r.jsx)("canvas", { className: nO.R, ref: i, height: 256, width: 256 }),
            ],
        })
    );
}
var nH = n(826820);
let nz = [];
function nK(e) {
    let { emojiStats: t } = e,
        n = Math.round(t?.numEmojisSent ?? 0),
        l = O(t?.numEmojisSentPercentile);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: nH.dJ,
                children: [
                    (0, r.jsx)(na, { icon: ew.o, children: y.intl.string(tc.default.JwFMdL) }),
                    (0, r.jsx)(nS, { value: n }),
                ],
            }),
            (0, r.jsx)(nl, {
                children:
                    null != l
                        ? y.intl.format(ez.default.heQSO4, {
                              numEmojis: n,
                              percent: l,
                              percentHook: (e, t) => (0, r.jsx)(np, { children: e }, t),
                          })
                        : y.intl.format(ez.default.Klji1b, { numEmojis: n }),
            }),
        ],
    });
}
function nB(e) {
    let { numEmojisSent: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: nH.dJ,
                children: [
                    (0, r.jsx)(na, { icon: ew.o, children: y.intl.string(tc.default.JwFMdL) }),
                    (0, r.jsx)(ny, { value: t }),
                ],
            }),
            (0, r.jsx)(nl, { children: y.intl.format(ez.default["660/Rr"], { numEmojis: M(t) }) }),
        ],
    });
}
function nV() {
    let e = (0, d.bG)([$], () => $.stats?.emojis),
        t = (0, d.bG)([$], () => U($.stats)),
        n = (0, d.bG)([$], () => $.globalStats?.emojis),
        l = !t && null != n,
        a = (l ? n.emojis : e?.emojis) ?? nz;
    return (0, r.jsx)(t$, {
        children: (0, r.jsxs)("div", {
            className: nH.kL,
            children: [
                (0, r.jsx)("div", { className: nH.KY, children: null != a[0] && (0, r.jsx)(nF, { emoji: a[0] }) }),
                (0, r.jsxs)("div", {
                    className: nH.C,
                    children: [
                        l ? (0, r.jsx)(nB, { numEmojisSent: n.numEmojisSent }) : (0, r.jsx)(nK, { emojiStats: e }),
                        (0, r.jsx)("div", {
                            className: nH.gm,
                            children: a.map((e, t) => (0, r.jsx)(nY, { emoji: e, rank: t + 1 }, e.id ?? e.name)),
                        }),
                    ],
                }),
            ],
        }),
    });
}
function nY(e) {
    let { emoji: t, rank: n } = e,
        l = !(0, d.bG)([eN.Ay], () => eN.Ay.useReducedMotion) && !0 === t.animated;
    return (0, r.jsxs)("div", {
        className: nH._X,
        children: [
            (0, r.jsx)(nf.A, { className: nH.Zg, emojiId: t.id, emojiName: t.name, animated: l }),
            (0, r.jsx)(eG, { variant: "experimental/mono-md/bold", className: nH.Tm, children: n }),
        ],
    });
}
var nW = n(236177),
    nq = n(214947),
    nX = n(939249),
    nJ = n(597770),
    nQ = n(559647),
    nZ = n(793574),
    n$ = n(95369),
    n0 = n(570287),
    n1 = n(486020),
    n5 = n(801305);
let n2 = [],
    n3 = (0, nd.j5)(eX.Kr),
    n4 = { r: 0, g: 0, b: 0, a: 1 },
    n8 = {
        "Avatar01/Stroke": n4,
        "Avatar01/Fill": n3,
        "Avatar02/Stroke": n4,
        "Avatar02/Fill": n3,
        "Avatar03/Stroke": n4,
        "Avatar03/Fill": n3,
        "Avatar04/Stroke": n4,
        "Avatar04/Fill": n3,
        "Avatar05/Stroke": n4,
        "Avatar05/Fill": n3,
        ConnectorColor: n3,
    };
function n7(e) {
    return null != e ? n1.Ay.getUserAvatarURL(e, !1, 160, "png") : void 0;
}
function n6(e) {
    let t,
        { route: n, onNextStep: l, onPreviousStep: a } = e,
        s = (0, d.bG)([$], () => $.stats?.users ?? n2),
        i = (0, d.bG)([$], () => $.stats?.sidekick),
        o = (0, d.bG)([ej.default], () => ej.default.getCurrentUser()),
        m = (0, d.bG)([eN.Ay], () => eN.Ay.useReducedMotion),
        h = c.useRef(null),
        x = c.useRef(void 0),
        g = (function (e, t) {
            let [n, l] = c.useState({ route: e, hasShownSquad: e === eo.gr.SQUAD, isTransitioning: !1 });
            switch (
                (n.route !== e &&
                    l({
                        route: e,
                        hasShownSquad: n.hasShownSquad || e === eo.gr.SQUAD,
                        isTransitioning: !t && n.route === eo.gr.SQUAD && e === eo.gr.SIDEKICK,
                    }),
                c.useEffect(() => {
                    if (!n.isTransitioning) return;
                    let e = setTimeout(() => l((e) => ({ ...e, isTransitioning: !1 })), 1500);
                    return () => clearTimeout(e);
                }, [n.isTransitioning]),
                e)
            ) {
                case eo.gr.SQUAD_TRANSITION:
                    return 5 * !!n.hasShownSquad;
                case eo.gr.SQUAD:
                    return 1;
                case eo.gr.SIDEKICK:
                    return n.isTransitioning ? 2 : 3;
                case eo.gr.SIDEKICK_LEAVE:
                    return t ? 3 : 4;
                default:
                    return 0;
            }
        })(n, m);
    ((t = c.useRef(!0)),
        c.useEffect(() => {
            if (n !== eo.gr.SIDEKICK_LEAVE) {
                t.current = !1;
                return;
            }
            if (t.current) return void a();
            if (m) return void l();
            let e = setTimeout(l, 1e3);
            return () => clearTimeout(e);
        }, [l, a, m, n]));
    let [f, j, p] = s,
        v = ((0, nm.tx)(f) ?? "").toLocaleUpperCase(),
        A = ((0, nm.tx)(j) ?? "").toLocaleUpperCase(),
        C = ((0, nm.tx)(p) ?? "").toLocaleUpperCase(),
        E = (0, nm.tx)(i?.user) ?? "",
        N = s.length < 3,
        S = n === eo.gr.SIDEKICK || n === eo.gr.SIDEKICK_LEAVE;
    c.useEffect(() => () => clearInterval(x.current), []);
    let I = c.useCallback(() => {
        (clearInterval(x.current),
            (x.current = setInterval(() => {
                let e = h.current?.getProperties();
                e?.twoFriends?.value === N &&
                    e?.reducedMotion?.value === m &&
                    e?.["Avatar01/Username"]?.value === v &&
                    (h.current?.play(), clearInterval(x.current));
            }, 50)));
    }, [v, m, N]);
    return (0, r.jsxs)(t$, {
        children: [
            (0, r.jsx)(nW.m, {
                ref: h,
                className: n5.lW,
                fit: "contain",
                autoplay: !1,
                onLoad: I,
                withReducedMotion: "play",
                dataBinding: {
                    ...n8,
                    AnimationState: g,
                    "Avatar01/img": n7(f),
                    "Avatar02/img": n7(p),
                    "Avatar03/img": n7(j),
                    "Avatar04/img": n7(i?.user),
                    "Avatar05/img": n7(o),
                    "Avatar01/Username": v,
                    "Avatar02/Username": C,
                    "Avatar03/Username": A,
                    "Avatar04/Username": E.toLocaleUpperCase(),
                    twoFriends: N,
                    reducedMotion: m,
                },
            }),
            n === eo.gr.SQUAD_TRANSITION &&
                (0, r.jsx)("div", {
                    className: u()(n5.Qs, n5.kY),
                    children: (0, r.jsx)(nl, { children: y.intl.string(ez.default["6RSp5q"]) }),
                }),
            n === eo.gr.SQUAD &&
                (0, r.jsx)("div", {
                    className: n5.Qs,
                    children: (0, r.jsx)(n9, {
                        title: y.intl.string(tc.default.OzY5Ns),
                        description: y.intl.string(ez.default.EqdLDd),
                    }),
                }),
            S &&
                null != i &&
                (0, r.jsxs)("div", {
                    className: u()(n5.Qs, n5.yG),
                    children: [
                        (0, r.jsxs)("div", {
                            className: n5.Cv,
                            children: [
                                (0, r.jsx)(n9, {
                                    title: y.intl.string(tc.default["+uwOHt"]),
                                    description: y.intl.string(ez.default["/ctmGw"]),
                                }),
                                (0, r.jsx)(le, { sidekick: i }),
                            ],
                        }),
                        (0, r.jsx)(lt, { user: i.user, username: E }),
                    ],
                }),
        ],
    });
}
function n9(e) {
    let { title: t, description: n } = e;
    return (0, r.jsxs)("div", {
        className: n5.wx,
        children: [
            (0, r.jsxs)("div", {
                className: n5.R_,
                children: [
                    (0, r.jsx)(na, { icon: nq.$, children: y.intl.string(tc.default.ZQakPR) }),
                    (0, r.jsx)(eG, { variant: "display-lg", className: n5.Vy, children: t }),
                ],
            }),
            (0, r.jsx)(nl, { children: n }),
        ],
    });
}
function le(e) {
    let { sidekick: t } = e;
    return (0, r.jsxs)("div", {
        className: n5.M1,
        children: [
            (0, r.jsxs)("div", {
                className: n5.dJ,
                children: [
                    (0, r.jsx)(tR.ChatIcon, { size: "md", color: "currentColor" }),
                    (0, r.jsx)(eG, {
                        variant: "heading-xxl/normal",
                        className: n5.wk,
                        children: Math.round(t.numMessagesSent),
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: n5.dJ,
                children: [
                    (0, r.jsx)(tL.MicrophoneIcon, { size: "md", color: "currentColor" }),
                    (0, r.jsx)(eG, {
                        variant: "heading-xxl/normal",
                        className: n5.wk,
                        children: Math.round(t.numVoiceMinutes),
                    }),
                ],
            }),
        ],
    });
}
function lt(e) {
    let { user: t, username: n } = e,
        [l, a] = c.useState(""),
        [s, i] = c.useState(!1),
        [o, d] = c.useState(!1),
        m = (0, n0.A)(t.id),
        h = l.length > 0 && l.length <= 250 && !s && !o,
        x = s ? y.intl.string(y.t.fjcCk5) : y.intl.formatToPlainString(y.t["0ZQw/X"], { name: n });
    async function g() {
        if (h) {
            d(!0);
            try {
                (await ea(l, t.id), a(""), i(!0));
            } catch {
                (0, tH.P0)({ text: y.intl.string(y.t.fEptJP), variant: "critical" });
            } finally {
                d(!1);
            }
        }
    }
    return m
        ? (0, r.jsxs)("div", {
              className: n5.OG,
              children: [
                  (0, r.jsx)("textarea", {
                      className: n5.yB,
                      value: l,
                      onChange: (e) => a(e.target.value),
                      disabled: s || o,
                      placeholder: x,
                      "aria-label": x,
                  }),
                  (0, r.jsxs)("div", {
                      className: n5.n,
                      children: [
                          (0, r.jsx)(nX.D, {
                              className: n5.KD,
                              onClick: function () {
                                  (0, n$.A)({ giftRecipient: t, analyticsLocations: [nZ.A.CHECKPOINT] });
                              },
                              "aria-label": y.intl.string(y.t.Ve9Ge6),
                              children: (0, r.jsx)(nJ.GiftIcon, { size: "refresh_sm", color: "currentColor" }),
                          }),
                          (0, r.jsx)(nX.D, {
                              className: u()(n5.KD, { [n5.r9]: !h }),
                              onClick: g,
                              "aria-disabled": !h,
                              "aria-label": y.intl.string(y.t.oeb1vg),
                              children: (0, r.jsx)(nQ.SendMessageIcon, { size: "refresh_sm", color: "currentColor" }),
                          }),
                      ],
                  }),
              ],
          })
        : null;
}
var ln = n(9767);
function ll(e) {
    let { games: t } = e,
        n = Math.round(t?.totalDaysPlayed ?? 0),
        l = O(t?.totalDaysPlayedPercentile);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: ln.dJ,
                children: [
                    (0, r.jsx)(na, { icon: tI.CalendarIcon, children: y.intl.string(ez.default.oAoYbN) }),
                    (0, r.jsx)(nS, { value: n }),
                ],
            }),
            (0, r.jsx)(nl, {
                children:
                    null != l
                        ? y.intl.format(ez.default["4FXB/m"], {
                              numDays: n,
                              percent: l,
                              percentHook: (e, t) => (0, r.jsx)(np, { children: e }, t),
                          })
                        : y.intl.format(ez.default.iCKjh6, { numDays: n }),
            }),
        ],
    });
}
function lr(e) {
    let { numUsersPlayedEveryDay: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: ln.dJ,
                children: [
                    (0, r.jsx)(na, { icon: tI.CalendarIcon, children: y.intl.string(ez.default["dx4+NI"]) }),
                    (0, r.jsx)(ny, { value: t }),
                ],
            }),
            (0, r.jsx)(nl, { children: y.intl.format(ez.default["N32w+2"], { numUsers: M(t) }) }),
        ],
    });
}
function la() {
    let e = (0, d.bG)([$], () => $.stats?.games),
        t = (0, d.bG)([$], () => {
            var e;
            return ((e = $.stats), Math.round(e?.games?.totalDaysPlayed ?? 0) > 0);
        }),
        n = (0, d.bG)([$], () => $.globalStats?.games?.numUsersPlayedEveryDay),
        l = !t && null != n;
    return (0, r.jsx)(t$, {
        children: (0, r.jsxs)("div", {
            className: ln.kL,
            children: [
                (0, r.jsx)(e_, {
                    animatedSrc:
                        "https://cdn.discordapp.com/assets/content/e3289e9a0a7faf4db23c3fefa390126fc64a09120fdb701f9dea833dddf671ef.png",
                    staticSrc:
                        "https://cdn.discordapp.com/assets/content/312abde9b19fcf85150d507de3f33096992506459b895ab3ea8d92c8f1e04a28.png",
                    className: ln.HW,
                }),
                (0, r.jsx)("div", {
                    className: ln.C,
                    children: l ? (0, r.jsx)(lr, { numUsersPlayedEveryDay: n }) : (0, r.jsx)(ll, { games: e }),
                }),
            ],
        }),
    });
}
var ls = n(828062);
function li(e) {
    let { children: t } = e;
    return (0, r.jsx)(eG, { variant: "display-lg", className: ls.V, children: t });
}
var lc = n(109112),
    lo = n(311043),
    lu = n(883053);
function ld(e) {
    let { rank: t, className: n } = e;
    return (0, r.jsxs)(eH, { className: u()(lu.T, n), children: ["#", t] });
}
var lm = n(497357);
let lh = "/assets/e74703a44e087adc.svg";
function lx(e) {
    let {
            game: { id: t, name: n, coverImageHash: l },
            rank: a,
            label: s,
            shellImage: i,
            className: c,
        } = e,
        o = (0, d.bG)(
            [lo.A],
            () =>
                lo.A.getGame(t)?.getCoverURL(300) ??
                n1.Ay.getApplicationIconURL({ id: t, icon: l, size: 300, fallbackAvatar: !1 }),
        );
    return (0, r.jsxs)("div", {
        className: u()(lm.LO, c),
        children: [
            (0, r.jsxs)("div", {
                className: lm.Tn,
                children: [
                    (0, r.jsx)("img", { src: i, alt: "", className: lm.vf }),
                    null != o
                        ? (0, r.jsx)("img", { src: o, alt: "", className: lm.Qw })
                        : (0, r.jsx)("div", {
                              className: u()(lm.Qw, lm.uj),
                              children: (0, r.jsx)(lc._, { size: "lg" }),
                          }),
                    null != a && (0, r.jsx)(ld, { rank: a, className: lm.Tm }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: lm.zH,
                children: [
                    (0, r.jsx)(eG, { variant: "heading-xl/medium", className: lm.UU, lineClamp: 1, children: n }),
                    (0, r.jsx)(eG, { variant: "experimental/mono-md/bold", className: lm.Pf, children: s }),
                ],
            }),
        ],
    });
}
function lg(e) {
    let { numSessions: t, ...n } = e;
    return (0, r.jsx)(lx, { ...n, label: Math.round(t), shellImage: lh });
}
function lf(e) {
    let { numSessions: t, ...n } = e;
    return (0, r.jsx)(lx, {
        ...n,
        rank: 1,
        label: Math.round(t),
        shellImage: "/assets/fbe1ab9677ed007a.svg",
        className: lm.Ms,
    });
}
function lj(e) {
    return (0, r.jsx)(lx, { ...e, shellImage: lh });
}
var lp = n(842807);
let lv = [];
function lA(e) {
    let { gameStats: t } = e,
        n = Math.round(t?.totalGamesPlayed ?? 0),
        l = t?.games ?? lv;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: lp.wx,
                children: [
                    (0, r.jsxs)("div", {
                        className: lp.dJ,
                        children: [
                            (0, r.jsx)(na, { icon: ty.GameControllerIcon, children: y.intl.string(ez.default.HM2fjf) }),
                            (0, r.jsx)(nS, { value: n }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: lp.h_,
                        children: (0, r.jsx)(nl, { children: y.intl.format(ez.default.aJMJ6b, { numGames: n }) }),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: lp.ag,
                children: l.map((e, t) => {
                    let { game: n, numSessions: l } = e;
                    return 0 === t
                        ? (0, r.jsx)(lf, { game: n, numSessions: l }, n.id)
                        : (0, r.jsx)(lg, { game: n, rank: t + 1, numSessions: l }, n.id);
                }),
            }),
        ],
    });
}
function lC(e) {
    let { gameStats: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: lp.wx,
                children: [
                    (0, r.jsxs)("div", {
                        className: lp.dJ,
                        children: [
                            (0, r.jsx)(tQ, { className: lp.gi }),
                            (0, r.jsx)(li, { children: y.intl.string(ez.default.qbCgI7) }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: lp.h_,
                        children: (0, r.jsx)(nl, { children: y.intl.string(ez.default["0oDeiM"]) }),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: u()(lp.ag, lp.Zs),
                children: eX.Jb.map((e) => {
                    let { list: n, label: l } = e,
                        a = t[n][0];
                    return null != a ? (0, r.jsx)(lj, { game: a, label: y.intl.string(l) }, n) : null;
                }),
            }),
        ],
    });
}
function lE() {
    let e = (0, d.bG)([$], () => $.stats?.games),
        t = (0, d.bG)([$], () => G($.stats)),
        n = (0, d.bG)([$], () => $.globalStats?.games),
        l = !t && null != n;
    return (0, r.jsx)(t$, {
        children: (0, r.jsx)("div", {
            className: lp.kL,
            children: l ? (0, r.jsx)(lC, { gameStats: n }) : (0, r.jsx)(lA, { gameStats: e }),
        }),
    });
}
var lN = n(167662);
function lS(e) {
    let { messages: t } = e,
        n = Math.round(t?.numMessagesSent ?? 0),
        l = O(t?.numMessagesSentPercentile);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: lN.dJ,
                children: [
                    (0, r.jsx)(na, { icon: tR.ChatIcon, children: y.intl.string(tc.default.wWKySP) }),
                    (0, r.jsx)(nS, { value: n }),
                ],
            }),
            (0, r.jsx)(nl, {
                children:
                    null != l
                        ? y.intl.format(ez.default.w2CanS, {
                              numMessages: n,
                              percent: l,
                              percentHook: (e, t) => (0, r.jsx)(np, { children: e }, t),
                          })
                        : y.intl.format(ez.default.cYCqz8, { numMessages: n }),
            }),
        ],
    });
}
function lI(e) {
    let { numWordsSent: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: lN.dJ,
                children: [
                    (0, r.jsx)(na, { icon: tR.ChatIcon, children: y.intl.string(ez.default["2BuyVC"]) }),
                    (0, r.jsx)(ny, { value: t }),
                ],
            }),
            (0, r.jsx)(nl, { children: y.intl.format(ez.default.bAxEs2, { numWords: M(t) }) }),
        ],
    });
}
function lb() {
    let e = (0, d.bG)([$], () => $.stats?.messages),
        t = (0, d.bG)([$], () => w($.stats)),
        n = (0, d.bG)([$], () => $.globalStats?.messages?.numWordsSent),
        l = !t && null != n;
    return (0, r.jsx)(t$, {
        children: (0, r.jsxs)("div", {
            className: lN.kL,
            children: [
                (0, r.jsx)(e_, {
                    animatedSrc:
                        "https://cdn.discordapp.com/assets/content/d2d8036bb6a32967893421f9956b9e8ed30abde474f68c1a34e824205549c5a1.png",
                    staticSrc:
                        "https://cdn.discordapp.com/assets/content/1dfd8684180df4216b23f0a61617250be8fcc12bc1970ac259892f34fbdb836d.png",
                    className: lN.HW,
                }),
                (0, r.jsx)("div", {
                    className: lN.C,
                    children: l ? (0, r.jsx)(lI, { numWordsSent: n }) : (0, r.jsx)(lS, { messages: e }),
                }),
            ],
        }),
    });
}
var ly = n(548118),
    lT = n(224865);
let lR = ly.iu[ly.Ay.Sizes.XLARGE];
function l_(e) {
    let { guild: t, size: n } = e;
    return (0, r.jsx)(ly.Ay, {
        guild: t,
        size: ly.Ay.Sizes.XLARGE,
        iconSize: n,
        textScale: n / lR,
        className: lT.K,
        style: { width: n, height: n, borderRadius: 0 },
    });
}
var lO = n(140645);
function lM(e) {
    let { numVoiceMinutes: t, numMessagesSent: n } = e;
    return (0, r.jsxs)("div", {
        className: lO.M1,
        children: [
            (0, r.jsxs)("div", {
                className: lO.dJ,
                children: [
                    (0, r.jsx)(tL.MicrophoneIcon, { size: "md", color: "currentColor" }),
                    (0, r.jsx)(eG, { variant: "experimental/mono-md/bold", className: lO.Qq, children: Math.round(t) }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: lO.dJ,
                children: [
                    (0, r.jsx)(tR.ChatIcon, { size: "md", color: "currentColor" }),
                    (0, r.jsx)(eG, { variant: "experimental/mono-md/bold", className: lO.Qq, children: Math.round(n) }),
                ],
            }),
        ],
    });
}
var lL = n(972106);
let lP = [];
function lk(e) {
    let { guild: t, rank: n, iconSize: l = 100, children: a } = e;
    return (0, r.jsxs)("div", {
        className: lL.w_,
        children: [
            (0, r.jsxs)("div", {
                className: lL.jj,
                children: [
                    (0, r.jsx)(ld, { rank: n }),
                    (0, r.jsxs)("div", {
                        className: lL.gI,
                        children: [
                            (0, r.jsx)(eG, {
                                variant: "heading-xxl/medium",
                                className: lL.J5,
                                lineClamp: 1,
                                children: t.name,
                            }),
                            a,
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(l_, { guild: t, size: l }),
        ],
    });
}
function lw(e) {
    let { guild: t, numVoiceMinutes: n, numMessagesSent: l } = e;
    return (0, r.jsx)(lk, {
        guild: t,
        rank: 1,
        iconSize: 140,
        children: (0, r.jsx)(lM, { numVoiceMinutes: n, numMessagesSent: l }),
    });
}
function lD(e) {
    let { guilds: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: lL.wx,
                children: [
                    (0, r.jsxs)("div", {
                        className: lL.R_,
                        children: [
                            (0, r.jsx)(na, { icon: tO.R, children: y.intl.string(ez.default.Mb5E6r) }),
                            (0, r.jsx)(li, { children: y.intl.string(tc.default.F0fkrh) }),
                        ],
                    }),
                    (0, r.jsx)(nl, { children: y.intl.string(ez.default.RL2mWA) }),
                ],
            }),
            (0, r.jsx)("div", {
                className: lL.Pl,
                children: t.map((e, t) => {
                    let { guild: n, numMessagesSent: l, numVoiceMinutes: a } = e;
                    return 0 === t
                        ? (0, r.jsx)(lw, { guild: n, numMessagesSent: l ?? 0, numVoiceMinutes: a ?? 0 }, n.id)
                        : (0, r.jsx)(lk, { guild: n, rank: t + 1 }, n.id);
                }),
            }),
        ],
    });
}
function lU(e) {
    let { guilds: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: lL.wx,
                children: [
                    (0, r.jsxs)("div", {
                        className: lL.R_,
                        children: [
                            (0, r.jsx)(tQ, { className: lL.gi }),
                            (0, r.jsx)(li, { children: y.intl.string(tc.default.F0fkrh) }),
                        ],
                    }),
                    (0, r.jsx)(nl, { children: y.intl.string(ez.default.bhnqop) }),
                ],
            }),
            (0, r.jsx)("div", {
                className: lL.Pl,
                children: t.map((e, t) => (0, r.jsx)(lk, { guild: e, rank: t + 1 }, e.id)),
            }),
        ],
    });
}
function lG() {
    let e = (0, d.bG)([$], () => $.stats?.guilds?.guilds ?? lP),
        t = (0, d.bG)([$], () => $.globalStats?.guilds?.guildsByMembers),
        n = 0 === e.length && null != t;
    return (0, r.jsx)(t$, {
        children: (0, r.jsx)("div", {
            className: lL.kL,
            children: n ? (0, r.jsx)(lU, { guilds: t }) : (0, r.jsx)(lD, { guilds: e }),
        }),
    });
}
var lF = n(155094);
function lH(e) {
    let { icon: t, title: n, description: l } = e;
    return (0, r.jsx)(t$, {
        children: (0, r.jsxs)("div", {
            className: lF.Q,
            children: [(0, r.jsx)(na, { icon: t, children: n }), (0, r.jsx)(nl, { children: l })],
        }),
    });
}
var lz = n(7584),
    lK = n(33293),
    lB = n(498137),
    lV = n(192339),
    lY = n(144103),
    lW = n(834109),
    lq = n(48763);
function lX(e) {
    let { character: t, power: n } = e,
        l = (0, ei.o)(t);
    return (0, r.jsxs)(lB.A, {
        cardColorPalette: l,
        size: lq.W.LG,
        children: [
            (0, r.jsx)(lV.A, {}),
            (0, r.jsx)(lW.A, { variant: "full" }),
            null != n
                ? (0, r.jsx)(lY.A, {
                      powerLevel: (0, nt.Le)(n.powerLevel),
                      powerLevelUnits: (0, nt.sX)(n.powerLevelPercentile),
                  })
                : null,
            (0, r.jsx)(lK.A, { character: t }),
        ],
    });
}
var lJ = n(58410);
function lQ() {
    let e = (0, d.bG)([$], () => $.stats),
        t = (0, d.bG)([$], () => $.character),
        n = e?.guilds?.guilds[0],
        l = e?.emojis?.emojis[0],
        a = e?.games?.games[0]?.game,
        s =
            null != a
                ? n1.Ay.getApplicationIconURL({ id: a.id, icon: a.iconHash, size: 40, fallbackAvatar: !1 })
                : void 0;
    return (0, r.jsx)(t$, {
        children: (0, r.jsxs)("div", {
            className: lJ.z,
            children: [
                null != t ? (0, r.jsx)(lX, { character: t, power: e?.power }) : null,
                (0, r.jsxs)("div", {
                    className: lJ.zH,
                    children: [
                        (0, r.jsxs)("div", {
                            className: lJ.R_,
                            children: [
                                (0, r.jsx)(na, { icon: t3.M, children: y.intl.string(tc.default.ir6nEQ) }),
                                (0, r.jsx)(eG, {
                                    variant: "display-lg",
                                    className: lJ.Vy,
                                    children: y.intl.string(tc.default.y4M1na),
                                }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: lJ.M1,
                            children: [
                                (0, r.jsx)(lZ, {
                                    label: y.intl.string(ez.default.MSrV9z),
                                    value: e?.voice?.totalVoiceMinutes,
                                }),
                                (0, r.jsx)(lZ, {
                                    label: y.intl.string(tc.default.wWKySP),
                                    value: e?.messages?.numMessagesSent,
                                }),
                                (0, r.jsx)(lZ, {
                                    label: y.intl.string(ez.default["f5S+pt"]),
                                    value: n?.numDaysInteracted,
                                }),
                                (0, r.jsx)(l$, {
                                    label: y.intl.string(tc.default["8XPMJj"]),
                                    icon: null != n ? (0, r.jsx)(l_, { guild: n.guild, size: 40 }) : (0, r.jsx)(l0, {}),
                                    name: null != n ? n.guild.name : y.intl.string(ez.default.GultYJ),
                                }),
                                (0, r.jsx)(lZ, {
                                    label: y.intl.string(ez.default.xVSlv3),
                                    value: e?.emojis?.numEmojisSent,
                                }),
                                (0, r.jsx)(l$, {
                                    label: y.intl.string(tc.default["3sARW7"]),
                                    icon:
                                        null != l
                                            ? (0, r.jsx)(nf.A, {
                                                  emojiId: l.id,
                                                  emojiName: null == l.id ? l.name : void 0,
                                                  animated: l.animated,
                                                  alt: "",
                                                  className: lJ.Kk,
                                              })
                                            : (0, r.jsx)(l0, {}),
                                    name:
                                        null == l
                                            ? y.intl.string(y.t.PoWNfe)
                                            : null == l.id
                                              ? lz.Ay.convertSurrogateToName(l.name)
                                              : `:${l.name}:`,
                                }),
                                (0, r.jsx)(lZ, {
                                    label: y.intl.string(ez.default.y2Y1DD),
                                    value: e?.games?.totalDaysPlayed,
                                }),
                                (0, r.jsx)(l$, {
                                    label: y.intl.string(tc.default.RbT4Zq),
                                    icon:
                                        null != s
                                            ? (0, r.jsx)("img", { src: s, alt: "", className: u()(lJ.Kk, lJ.Gt) })
                                            : (0, r.jsx)(l0, {}),
                                    name: null != a ? a.name : y.intl.string(y.t.PoWNfe),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
function lZ(e) {
    let { label: t, value: n } = e;
    return (0, r.jsxs)("div", {
        className: lJ.dJ,
        children: [
            (0, r.jsx)(eG, { variant: "experimental/heading-md/semibold", children: t }),
            (0, r.jsx)(eG, {
                variant: "heading-xxl/normal",
                className: lJ.wk,
                children: Math.round(n ?? 0).toLocaleString(y.intl.currentLocale),
            }),
        ],
    });
}
function l$(e) {
    let { label: t, icon: n, name: l } = e;
    return (0, r.jsxs)("div", {
        className: u()(lJ.dJ, lJ.u4),
        children: [
            (0, r.jsx)(eG, { variant: "experimental/heading-md/semibold", children: t }),
            (0, r.jsxs)("div", {
                className: lJ.AS,
                children: [
                    n,
                    (0, r.jsx)(eG, { variant: "heading-xl/medium", lineClamp: 1, className: lJ.TJ, children: l }),
                ],
            }),
        ],
    });
}
function l0() {
    return (0, r.jsx)("div", {
        className: u()(lJ.Kk, lJ.Gc),
        children: (0, r.jsx)(lc._, { size: "md", color: "currentColor" }),
    });
}
var l1 = n(651946);
function l5() {
    let e = (0, d.bG)([$], () => $.stats?.guilds?.guilds[0]),
        t = Math.round(e?.numDaysInteracted ?? 0),
        n = O(e?.numDaysInteractedPercentile);
    return (0, r.jsx)(t$, {
        children: (0, r.jsxs)("div", {
            className: l1.kL,
            children: [
                (0, r.jsxs)("div", {
                    className: l1.wx,
                    children: [
                        (0, r.jsxs)("div", {
                            className: l1.R_,
                            children: [
                                (0, r.jsx)(na, { icon: tO.R, children: y.intl.string(ez.default["M+a+t1"]) }),
                                (0, r.jsx)(nS, { value: t }),
                            ],
                        }),
                        (0, r.jsx)(nl, {
                            children:
                                null != n
                                    ? y.intl.format(ez.default.sIDTV1, {
                                          numDays: t,
                                          percent: n,
                                          percentHook: (e, t) => (0, r.jsx)(np, { children: e }, t),
                                      })
                                    : y.intl.format(ez.default.nLCUQ4, { numDays: t }),
                        }),
                    ],
                }),
                null != e &&
                    (0, r.jsx)("div", {
                        className: l1.bU,
                        children: (0, r.jsxs)("div", {
                            className: l1.Nr,
                            style: { width: 360 },
                            children: [
                                (0, r.jsx)(l_, { guild: e.guild, size: 360 }),
                                (0, r.jsxs)("div", {
                                    className: l1.zH,
                                    children: [
                                        (0, r.jsx)(eG, {
                                            variant: "heading-xxl/medium",
                                            className: l1.J5,
                                            lineClamp: 1,
                                            children: e.guild.name,
                                        }),
                                        (0, r.jsx)(lM, {
                                            numVoiceMinutes: e.numVoiceMinutes ?? 0,
                                            numMessagesSent: e.numMessagesSent ?? 0,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    }),
            ],
        }),
    });
}
var l2 = n(270704);
function l3(e) {
    let { voice: t } = e,
        n = Math.round(t?.totalVoiceMinutes ?? 0),
        l = O(t?.totalVoiceMinutesPercentile);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: l2.dJ,
                children: [
                    (0, r.jsx)(na, {
                        icon: tL.MicrophoneIcon,
                        children: y.intl.formatToPlainString(tc.default.UZbUtl, { numMinutes: n }),
                    }),
                    (0, r.jsx)(nS, { value: n, alignment: "center" }),
                ],
            }),
            (0, r.jsx)(nl, {
                children:
                    null != l
                        ? y.intl.format(ez.default["7gtpnV"], {
                              numMinutes: n,
                              percent: l,
                              percentHook: (e, t) => (0, r.jsx)(np, { children: e }, t),
                          })
                        : y.intl.format(ez.default.Y3poDW, { numMinutes: n }),
            }),
        ],
    });
}
function l4(e) {
    let { peakHour: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: l2.dJ,
                children: [
                    (0, r.jsx)(na, { icon: tL.MicrophoneIcon, children: y.intl.string(ez.default.ZCwB8J) }),
                    (0, r.jsx)(ny, { value: t }),
                ],
            }),
            (0, r.jsx)(nl, { children: y.intl.string(ez.default.huiTne) }),
        ],
    });
}
function l8() {
    let e = (0, d.bG)([$], () => $.stats?.voice),
        t = (0, d.bG)([$], () => k($.stats)),
        n = (0, d.bG)([$], () => $.globalStats?.voice?.peakHourUtc),
        l = (function (e) {
            if (null == e) return null;
            let t = new Date();
            t.setUTCHours(e, 0, 0, 0);
            let n = new Intl.DateTimeFormat(y.intl.currentLocale, T)
                    .formatToParts(t)
                    .find((e) => "dayPeriod" === e.type)?.value,
                l = null == n || R.test(n) ? T : { ...T, hourCycle: "h23" },
                r = new Intl.DateTimeFormat(y.intl.currentLocale, l).format(t);
            return { value: r.replace(_, ""), label: r };
        })(n)?.value,
        a = !t && null != l;
    return (0, r.jsxs)(t$, {
        children: [
            (0, r.jsx)(e_, {
                animatedSrc:
                    "https://cdn.discordapp.com/assets/content/04746dc04eab575d0168935af2b1b3f97e2e00439f84bd0f0474276e0c5a81dc.png",
                staticSrc:
                    "https://cdn.discordapp.com/assets/content/c4c2d6b631bff3da4e4bb9afffc8f89bc9fb6f76a2fcd824f8a7af83eb7f1e6b.png",
                className: l2.Tp,
            }),
            (0, r.jsx)("div", {
                className: l2.Qs,
                children: a ? (0, r.jsx)(l4, { peakHour: l }) : (0, r.jsx)(l3, { voice: e }),
            }),
        ],
    });
}
function l7(e) {
    let { route: t, onNextStep: n, onPreviousStep: l } = e;
    if (t === eo.gr.HOME) return (0, r.jsx)(ng, { onStart: n });
    if (t === eo.gr.INTRODUCTION) return (0, r.jsx)(t1, {});
    let { statsScreen: a } = (0, eo.UG)(t);
    switch (a) {
        case eo.oI.VOICE_INTRO:
            return (0, r.jsx)(lH, {
                icon: tL.MicrophoneIcon,
                title: y.intl.string(ez.default["/7XYsa"]),
                description: y.intl.string(ez.default["X8/G/o"]),
            });
        case eo.oI.VOICE:
            return (0, r.jsx)(l8, {});
        case eo.oI.MESSAGES_INTRO:
            return (0, r.jsx)(lH, {
                icon: tR.ChatIcon,
                title: y.intl.string(ez.default["2BuyVC"]),
                description: y.intl.string(ez.default["kF+Y3a"]),
            });
        case eo.oI.MESSAGES:
            return (0, r.jsx)(lb, {});
        case eo.oI.SERVERS_INTRO:
            return (0, r.jsx)(lH, {
                icon: tO.R,
                title: y.intl.string(tc.default.F0fkrh),
                description: y.intl.string(ez.default.Xg82Gy),
            });
        case eo.oI.SERVERS:
            return (0, r.jsx)(lG, {});
        case eo.oI.TOP_SERVER:
            return (0, r.jsx)(l5, {});
        case eo.oI.EMOJI_INTRO:
            return (0, r.jsx)(lH, {
                icon: ew.o,
                title: y.intl.string(ez.default.ZTDCIv),
                description: y.intl.string(ez.default.y8Sr8J),
            });
        case eo.oI.EMOJI:
            return (0, r.jsx)(nV, {});
        case eo.oI.GAMES_INTRO:
            return (0, r.jsx)(lH, {
                icon: ty.GameControllerIcon,
                title: y.intl.string(ez.default.HM2fjf),
                description: y.intl.string(ez.default.LQiFqJ),
            });
        case eo.oI.GAMES:
            return (0, r.jsx)(lE, {});
        case eo.oI.GAME_TIME:
            return (0, r.jsx)(la, {});
        case eo.oI.SQUAD:
        case eo.oI.SIDEKICK:
            return (0, r.jsx)(n6, { route: t, onNextStep: n, onPreviousStep: l });
        case eo.oI.SUMMARY:
            return (0, r.jsx)(lQ, {});
        case eo.oI.SHARE:
            return (0, r.jsx)(nc, {});
        default:
            return null;
    }
}
var l6 = n(650809),
    l9 = n(866665),
    re = n(428692);
let rt = {
    [eo.s9.FACE]: { icon: tL.MicrophoneIcon, label: y.t.K3lovD },
    [eo.s9.OUTFIT]: { icon: tR.ChatIcon, label: y.t.OIgYlQ },
    [eo.s9.HEADWEAR]: { icon: tO.R, label: y.t["7hB4kg"] },
    [eo.s9.SHOES]: { icon: ew.o, label: y.t.sMOuuS },
    [eo.s9.WEARABLE]: { icon: ty.GameControllerIcon, label: y.t.URyqtP },
    [eo.s9.AURA]: { icon: tI.CalendarIcon, label: ez.default.oAoYbN },
    [eo.s9.ASSEMBLED]: { icon: nq.$, label: y.t.TdEu5X },
    [eo.s9.FINALIZE]: { icon: l6.PaintPaletteIcon, label: ez.default.gmMD2I },
    [eo.s9.SUMMARY]: { icon: t3.M, label: tc.default.y4M1na },
};
function rn(e) {
    let {
            step: { icon: t, label: n, route: l },
            disabled: a,
            onRouteClick: s,
        } = e,
        i = y.intl.string(n);
    return (0, r.jsx)(l9.m, {
        text: i,
        ariaHidden: !0,
        children: (0, r.jsxs)(nX.D, {
            className: u()(re.PM, re.CD, { [re.vk]: !a }),
            onClick: () => s(l),
            "aria-label": i,
            "aria-disabled": a,
            children: [
                (0, r.jsx)("div", { className: u()(re.Om, re.hZ) }),
                (0, r.jsx)(t, { size: "xs", color: "currentColor", className: re.RQ }),
            ],
        }),
    });
}
function rl(e) {
    let { flow: t, stats: n, activeRoute: l, isRouteBlocked: a, onRouteClick: s } = e,
        i = (function (e, t) {
            let n = [];
            for (let l of ex({ flow: e, stats: t })) {
                let { characterStage: e } = (0, eo.UG)(l),
                    t = rt[e];
                null != t && n.at(-1)?.stage !== e && n.push({ ...t, stage: e, route: l });
            }
            return n;
        })(t, n),
        { characterStage: o } = (0, eo.UG)(l),
        u = i.findIndex((e) => {
            let { stage: t } = e;
            return t === o;
        }),
        [m, h] = c.useState(u);
    u > m && h(u);
    let x = (0, d.bG)([$], () => $.isSaving);
    return -1 === u
        ? null
        : (0, r.jsx)("div", {
              className: re.qB,
              role: "group",
              "aria-label": y.intl.formatToPlainString(ez.default.iyTfFt, { stepNumber: u + 1, stepCount: i.length }),
              children: i.map((e, t) => {
                  let { icon: n } = e;
                  return t === u
                      ? (0, r.jsx)(
                            l9.m,
                            {
                                text: y.intl.string(e.label),
                                children: (0, r.jsx)("div", {
                                    className: re.PM,
                                    children: (0, r.jsx)(n, { size: "xs", color: "currentColor" }),
                                }),
                            },
                            e.stage,
                        )
                      : t <= m
                        ? (0, r.jsx)(rn, { step: e, disabled: x || a, onRouteClick: s }, e.stage)
                        : (0, r.jsx)(
                              "div",
                              { className: re.PM, children: (0, r.jsx)("div", { className: re.Om }) },
                              e.stage,
                          );
              }),
          });
}
function rr(e) {
    let { stage: t } = e;
    return (0, r.jsxs)(t$, {
        children: [
            (0, r.jsx)(eD.E, { color: "text-muted", variant: "text-md/medium", children: "Character Stage" }),
            (0, r.jsx)(eD.E, { color: "text-muted", variant: "text-md/medium", children: t }),
        ],
    });
}
var ra = n(517782);
function rs(e) {
    var t;
    let n,
        l,
        a,
        s,
        { didPlayerShareDataWithDiscord: i, onClose: o } = e;
    ((0, d.bG)([$], () => $.fetchState),
        (n = (0, d.bG)([$], () => $.stats?.games?.games)),
        (l = (0, c.useMemo)(
            () =>
                n?.map((e) => {
                    let { game: t } = e;
                    return t.id;
                }) ?? [],
            [n],
        )),
        (0, c.useEffect)(() => {
            let { fetchState: e } = $;
            (e === z.INIT || e === z.ERROR) && el();
        }, []),
        (0, c.useEffect)(() => {
            (0, eC.E)(l);
        }, [l]),
        c.useEffect(() => {
            g.h.dispatch({ type: "CHECKPOINT_RESET_EDITED_CHARACTER" });
        }, []));
    let x = i ? eo.Np.SHARED_DATA : eo.Np.NO_SHARED_DATA,
        [f, j] = c.useState(eo.gr.HOME),
        { characterStage: p, statsScreen: v } = (0, eo.UG)(f),
        A = f === eo.gr.HOME || null != v,
        C = A || f === eo.gr.INTRODUCTION,
        E = (0, d.bG)([$], () => ($.fetchState === z.SUCCESS ? $.stats : void 0)),
        N = (0, d.bG)([$], () => $.character),
        S = c.useMemo(
            () =>
                (function (e, t) {
                    switch (e) {
                        case eo.gr.SUMMARY:
                        case eo.gr.SHARE:
                            let n = (0, ei.o)(t),
                                { primaryBackgroundColor: l, shadowColor: r } = (0, ei.j)(n);
                            return {
                                ...tg,
                                "--custom-checkpoint-primary": l,
                                "--custom-checkpoint-button-border": l,
                                "--custom-checkpoint-button-shadow": r,
                                "--custom-checkpoint-background-gradient-start": l,
                            };
                        default:
                            return tg;
                    }
                })(f, N),
            [f, N],
        ),
        I =
            ((t =
                "https://cdn.discordapp.com/assets/content/ca0ec81d050b27537618a0563ff926476bc53f331bae7af46595969995dea5fb.mp3"),
            (a = (0, d.bG)([$], () => $.isMuted)),
            (s = c.useRef(null)),
            c.useEffect(() => {
                let e = new Audio(t);
                return ((s.current = e), () => e.pause());
            }, [t]),
            c.useCallback(() => {
                let e = s.current;
                a || null == e || ((e.currentTime = 0), e.play());
            }, [a])),
        { blockedTraits: b } = eA(),
        T = (0, ec._K)(f, b),
        R = c.useCallback(
            (e) => {
                let t = (function (e) {
                    let { flow: t, stats: n, currentRoute: l, direction: r } = e,
                        a = ex({ flow: t, stats: n }),
                        s = a.indexOf(l);
                    return -1 === s ? eo.gr.INTRODUCTION : (a[s + r] ?? null);
                })({ flow: x, stats: E, currentRoute: f, direction: e });
                if (null == t) {
                    1 === e && o();
                    return;
                }
                (eo.cy.has(f) || I(), j(t));
            },
            [f, x, o, I, E],
        ),
        _ = c.useCallback(() => R(-1), [R]),
        O = c.useCallback(() => R(1), [R]),
        M = c.useCallback(
            (e) => {
                $.isSaving || T || (I(), j(e));
            },
            [T, I],
        );
    return (0, r.jsx)(m.N, {
        theme: eS.NJ.DARK,
        children: (e) =>
            (0, r.jsxs)("div", {
                className: u()(e, ra.kL),
                style: S,
                "aria-label": y.intl.string(tc.default["CdU/PF"]),
                children: [
                    (0, r.jsx)(eb, { isVisible: A }),
                    (0, r.jsx)("div", { className: u()(ra.qd, { [ra.R]: A }), children: (0, r.jsx)(rr, { stage: p }) }),
                    (0, eo.Rq)(f) && (0, r.jsx)("div", { className: ra.qd, children: (0, r.jsx)(tk, { route: f }) }),
                    C &&
                        (0, r.jsx)("div", {
                            className: ra.qd,
                            children: (0, r.jsx)(l7, { route: f, onNextStep: O, onPreviousStep: _ }),
                        }),
                    (0, r.jsx)(ek, { activeRoute: f }),
                    (0, r.jsxs)("div", {
                        className: ra.$s,
                        children: [
                            (0, r.jsx)(tU, {}),
                            (0, r.jsx)(eT, {
                                size: "sm",
                                "aria-label": y.intl.string(y.t.cpT0Cq),
                                onClick: o,
                                children: (0, r.jsx)(h.P, { size: "xs", color: "currentColor" }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(rl, { flow: x, stats: E, activeRoute: f, isRouteBlocked: T, onRouteClick: M }),
                    (0, r.jsx)(tJ, { activeRoute: f, isRouteBlocked: T, onBack: _, onNext: O }),
                ],
            }),
    });
}
function ri() {
    return !!i._.hasSubscribers(ee.jej.MODAL_CLOSE) && (i._.dispatch(ee.jej.MODAL_CLOSE), !0);
}
function rc(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    (s.default.track(ee.HAw.CHECKPOINT_STARTED, { source: e }),
        (0, a.B8)(
            (e) => {
                let { closeLayer: n } = e;
                return (0, r.jsx)(rs, { didPlayerShareDataWithDiscord: t, onClose: n });
            },
            { onEscape: ri },
        ));
}
