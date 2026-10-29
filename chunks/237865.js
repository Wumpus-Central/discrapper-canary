n.d(t, { D: () => rd });
var l,
    r = n(477900),
    a = n(361158),
    s = n(174459),
    i = n(625494),
    c = n(582128),
    o = n(503698),
    u = n.n(o);
let d =
    "https://cdn.discordapp.com/assets/content/ca0ec81d050b27537618a0563ff926476bc53f331bae7af46595969995dea5fb.mp3";
var m = n(17928),
    h = n(43990),
    x = n(789645),
    g = n(636537),
    f = n(73153),
    j = n(308528),
    p = n(148494),
    v = n(451909),
    C = n(446244),
    A = n(734057),
    E = n(403362);
let N = { voice: { totalVoiceMinutes: 54423, totalVoiceMinutesPercentile: 92 } },
    S = {
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
var I = n(889227),
    b = n(149790),
    y = n(935208),
    T = n(105292);
let R = { hour: "numeric", minute: "2-digit", numberingSystem: "latn" },
    _ = /^[A-Za-z.\s]+$/,
    O = /\s/g;
function M(e) {
    return null == e || e < 50 ? null : Math.max(1, Math.ceil(100 - e));
}
function L(e) {
    return new Intl.NumberFormat(T.intl.currentLocale, { notation: "compact", compactDisplay: "long" }).format(e);
}
function P(e) {
    return e?.sidekick != null;
}
function k(e) {
    return P(e) && (e?.users?.length ?? 0) > 0;
}
function w(e) {
    return Math.round(e?.voice?.totalVoiceMinutes ?? 0) > 0;
}
function D(e) {
    return Math.round(e?.messages?.numMessagesSent ?? 0) > 0;
}
function U(e) {
    return (e?.guilds?.guilds.length ?? 0) > 0;
}
function G(e) {
    return Math.round(e?.emojis?.numEmojisSent ?? 0) > 0 && (e?.emojis?.emojis.length ?? 0) > 0;
}
function F(e) {
    return Math.round(e?.games?.totalGamesPlayed ?? 0) > 0 && (e?.games?.games.length ?? 0) > 0;
}
function H(e) {
    let { voice: t, messages: n, guilds: l, emojis: r, games: a } = e;
    return {
        voice: { peakHourUtc: t.peak_hour_utc },
        messages: { numWordsSent: n.num_words_sent },
        guilds: {
            guildsByMembers: l.guilds_by_members.map((e) => {
                let { guild: t } = e;
                return (0, b.yF)(t);
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
                return z(t);
            }),
            newGamesByPlayers: a.new_games_by_players.map((e) => {
                let { game: t } = e;
                return z(t);
            }),
            indieGamesByPlayers: a.indie_games_by_players.map((e) => {
                let { game: t } = e;
                return z(t);
            }),
            gamesByStreamWatchMinutes: a.games_by_stream_watch_minutes.map((e) => {
                let { game: t } = e;
                return z(t);
            }),
            gamesByCoplayUsers: a.games_by_coplay_users.map((e) => {
                let { game: t } = e;
                return z(t);
            }),
            numUsersPlayedEveryDay: a.num_users_played_every_day,
        },
    };
}
function z(e) {
    return {
        id: y.default.cast(e.id),
        name: e.name,
        iconHash: e.icon_hash ?? void 0,
        bannerHash: e.banner_hash ?? void 0,
        coverImageHash: e.cover_image_hash ?? void 0,
    };
}
var K =
    (((l = {})[(l.INIT = 0)] = "INIT"),
    (l[(l.FETCHING = 1)] = "FETCHING"),
    (l[(l.SUCCESS = 2)] = "SUCCESS"),
    (l[(l.ERROR = 3)] = "ERROR"),
    l);
let B = { isMuted: !1 },
    V = {},
    Y = { ...B },
    W = null,
    q = null,
    X = null,
    J = 0,
    Q = null,
    Z = !1;
class $ extends m.Ay.PersistedStore {
    static displayName = "Checkpoint2026Store";
    static persistKey = "Checkpoint2026Store";
    getState() {
        return Y;
    }
    initialize(e) {
        null != e && (Y = { ...Y, ...e });
    }
    get isMuted() {
        return Y.isMuted;
    }
    get stats() {
        return W;
    }
    get globalStats() {
        return q;
    }
    get character() {
        return X;
    }
    get fetchState() {
        return J;
    }
    get isSaving() {
        return Z;
    }
    get selectedCharacterTraits() {
        return Q ?? X ?? V;
    }
}
let ee = new $(f.h, {
    CHECKPOINT_TOGGLE_MUTE: function () {
        Y.isMuted = !Y.isMuted;
    },
    CHECKPOINT_FETCH_START: function () {
        J = 1;
    },
    CHECKPOINT_FETCH_SUCCESS: function (e) {
        ((W = e.stats), (q = e.globalStats), (X = e.character), (J = 2));
    },
    CHECKPOINT_FETCH_FAILED: function () {
        J = 3;
    },
    CHECKPOINT_COMPLETE_START: function () {
        Z = !0;
    },
    CHECKPOINT_COMPLETE_SUCCESS: function (e) {
        ((X = e.character), (Q = null), (Z = !1));
    },
    CHECKPOINT_COMPLETE_FAILED: function () {
        Z = !1;
    },
    CHECKPOINT_RESET_SUCCESS: function () {
        ((X = null), (Q = null));
    },
    CHECKPOINT_SELECT_CHARACTER_TRAIT: function (e) {
        Q = { ...(Q ?? X ?? V), [e.trait]: e.optionId };
    },
    CHECKPOINT_RESET_EDITED_CHARACTER: function () {
        Q = null;
    },
    LOGOUT: function () {
        ((Y = { ...B }), (W = null), (q = null), (X = null), (J = 0), (Q = null), (Z = !1));
    },
});
var et = n(652215);
function en() {
    return f.h.dispatch({ type: "CHECKPOINT_TOGGLE_MUTE" });
}
function el(e, t) {
    return f.h.dispatch({ type: "CHECKPOINT_SELECT_CHARACTER_TRAIT", trait: e, optionId: t });
}
async function er(e) {
    (ee.initializeIfNeeded(), f.h.dispatch({ type: "CHECKPOINT_FETCH_START" }));
    try {
        let { body: t } = await g.Bo.get({ url: et.Rsh.CHECKPOINT, rejectWithError: !0 });
        if (null != e)
            return (
                f.h.dispatch({
                    type: "CHECKPOINT_FETCH_SUCCESS",
                    stats: (function (e) {
                        switch (e) {
                            case 0:
                                return N;
                            case 1:
                                return null;
                            case 2:
                                return S;
                        }
                    })(e),
                    globalStats: H(t.global_stats),
                    character: null,
                }),
                !0
            );
        return (
            f.h.dispatch({
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
                                          guild: (0, b.yF)(e.guild),
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
                                          return { game: z(t), numSessions: n };
                                      }),
                                      totalDaysPlayed: a.total_days_played,
                                      totalDaysPlayedPercentile: a.total_days_played_percentile,
                                  },
                                  sidekick:
                                      null != s
                                          ? {
                                                user: new I.A(s.user),
                                                numMessagesSent: s.num_messages_sent,
                                                numVoiceMinutes: s.num_voice_minutes,
                                            }
                                          : null,
                                  users: i.map((e) => {
                                      let { user: t } = e;
                                      return new I.A(t);
                                  }),
                                  power: { powerLevel: c.power_level, powerLevelPercentile: c.power_level_percentile },
                              };
                          })(t.stats)
                        : null,
                globalStats: H(t.global_stats),
                character: t.character,
            }),
            !0
        );
    } catch {
        return (f.h.dispatch({ type: "CHECKPOINT_FETCH_FAILED" }), !1);
    }
}
async function ea(e) {
    f.h.dispatch({ type: "CHECKPOINT_COMPLETE_START" });
    try {
        return (
            await g.Bo.post({ url: et.Rsh.CHECKPOINT_COMPLETE, body: e, rejectWithError: !0 }),
            f.h.dispatch({ type: "CHECKPOINT_COMPLETE_SUCCESS", character: e }),
            !0
        );
    } catch {
        return (f.h.dispatch({ type: "CHECKPOINT_COMPLETE_FAILED" }), !1);
    }
}
async function es(e, t) {
    let n = await j.A.getOrEnsurePrivateChannel(t),
        l = A.A.getChannel(n);
    if (null == l) throw Error("Failed to open private channel");
    s.default.track(et.HAw.CHECKPOINT_SIDEKICK_MESSAGE_SENT, { other_user_id: t });
    let r = v.Ay.parse(l, e);
    return p.A.sendMessage(l.id, r, !1, { location: "checkpoint-sidekick" });
}
async function ei(e, t, n) {
    let l = (await Promise.all(e.map(C.pk))).filter(E.Vq);
    for (let e of await Promise.allSettled(
        l.map((e) => {
            let l = A.A.getChannel(e);
            if (null != l)
                return p.A.sendMessage(l.id, v.Ay.parse(l, t), !1, { location: "checkpoint", checkpointCardType: n });
        }),
    ))
        if ("rejected" === e.status) throw e.reason;
}
var ec = n(627369),
    eo = n(503235),
    eu = n(201779);
let ed = [
        eu.gr.HOME,
        eu.gr.INTRODUCTION,
        eu.gr.VOICE_GENERAL,
        eu.gr.VOICE_FACE,
        eu.gr.MESSAGES_GENERAL,
        eu.gr.MESSAGES_OUTFIT,
        eu.gr.SERVERS_GENERAL,
        eu.gr.SERVERS_HEADWEAR,
        eu.gr.EMOJI_GENERAL,
        eu.gr.EMOJI_SHOES,
        eu.gr.GAMES_GENERAL,
        eu.gr.GAMES_WEARABLE,
        eu.gr.GAME_TIME_GENERAL,
        eu.gr.GAME_TIME_AURA,
        eu.gr.FINALIZE_CHARACTER,
        eu.gr.SUMMARY,
        eu.gr.SHARE,
    ],
    em = [
        eu.gr.HOME,
        eu.gr.INTRODUCTION,
        eu.gr.VOICE_INTRO,
        eu.gr.VOICE_STATS,
        eu.gr.VOICE_FACE,
        eu.gr.MESSAGES_INTRO,
        eu.gr.MESSAGES_STATS,
        eu.gr.MESSAGES_OUTFIT,
        eu.gr.SERVERS_INTRO,
        eu.gr.SERVERS_STATS,
        eu.gr.TOP_SERVER_STATS,
        eu.gr.SERVERS_HEADWEAR,
        eu.gr.EMOJI_INTRO,
        eu.gr.EMOJI_STATS,
        eu.gr.EMOJI_SHOES,
        eu.gr.GAMES_INTRO,
        eu.gr.GAMES_STATS,
        eu.gr.GAMES_WEARABLE,
        eu.gr.GAME_TIME_STATS,
        eu.gr.GAME_TIME_AURA,
        eu.gr.SQUAD_TRANSITION,
        eu.gr.SQUAD,
        eu.gr.SIDEKICK,
        eu.gr.SIDEKICK_LEAVE,
        eu.gr.FINALIZE_CHARACTER,
        eu.gr.SUMMARY,
        eu.gr.SHARE,
    ],
    eh = {
        [eu.gr.VOICE_INTRO]: (e) => !w(e),
        [eu.gr.MESSAGES_INTRO]: (e) => !D(e),
        [eu.gr.SERVERS_INTRO]: (e) => !U(e),
        [eu.gr.EMOJI_INTRO]: (e) => !G(e),
        [eu.gr.GAMES_INTRO]: (e) => !F(e),
    },
    ex = {
        [eu.gr.TOP_SERVER_STATS]: U,
        [eu.gr.SQUAD_TRANSITION]: k,
        [eu.gr.SQUAD]: k,
        [eu.gr.SIDEKICK]: P,
        [eu.gr.SIDEKICK_LEAVE]: P,
    };
function eg(e) {
    let { flow: t, stats: n } = e;
    return (t === eu.Np.SHARED_DATA ? em : ed).filter((e) => {
        let t = eh[e];
        if (null != t) return null != n && t(n);
        let l = ex[e];
        return null == l || void 0 === n || l(n);
    });
}
var ef = n(127639),
    ej = n(218546),
    ep = n(287809),
    ev = n(474090),
    eC = n(817379);
function eA() {
    let {
            selectedCharacterTraits: e,
            savedSelection: t,
            stats: n,
        } = (0, m.cf)([ee], () => ({
            selectedCharacterTraits: ee.selectedCharacterTraits,
            savedSelection: ee.character,
            stats: ee.stats,
        })),
        l = (0, m.bG)([ep.default], () => (0, ev.ki)(ep.default.getCurrentUser())),
        r = c.useMemo(
            () =>
                Object.values(ef.V).filter((r) => {
                    let a = e[r];
                    if (null == a || t?.[r] === a) return !1;
                    let s = (0, eC.$C)(r, a);
                    return null != s && (s === ej.K.NITRO ? !l : !(0, eC.mf)(r, n).has(s));
                }),
            [l, t, e, n],
        );
    return { selectedCharacterTraits: e, blockedTraits: r };
}
var eE = n(920495);
function eN(e) {
    let t = (0, m.bG)([ee], () => ee.isMuted),
        n = c.useRef(null);
    return (
        c.useEffect(() => {
            let t = new Audio(e);
            return ((n.current = t), () => t.pause());
        }, [e]),
        c.useCallback(() => {
            let e = n.current;
            t || null == e || ((e.currentTime = 0), e.play());
        }, [t])
    );
}
var eS = n(299619),
    eI = n(775602),
    eb = n(818348),
    ey = n(11435);
function eT(e) {
    let { isVisible: t } = e,
        n = c.useRef(null),
        l = (0, m.bG)([eI.Ay], () => eI.Ay.useReducedMotion),
        a = t && !l;
    return (
        c.useEffect(() => {
            let e = n.current;
            null != e && (a ? e.play().catch(eb.tE) : e.pause());
        }, [a]),
        c.useEffect(() => {
            l && null != n.current && (n.current.currentTime = 1);
        }, [l]),
        (0, r.jsxs)("div", {
            className: u()(ey.Tp, { [ey.R]: !t }),
            "aria-hidden": !0,
            children: [
                (0, r.jsx)(eS.A, {
                    ref: n,
                    className: ey.Ki,
                    src: "https://cdn.discordapp.com/assets/content/a7a4300630ed2733eca4a8bb584c3086a66063d78e2f829faf465d96ff388a93.webm",
                    loop: !0,
                    muted: !0,
                    playsInline: !0,
                }),
                (0, r.jsx)("div", { className: ey.D7 }),
            ],
        })
    );
}
var eR = n(885619);
function e_(e) {
    let { "aria-label": t, "aria-pressed": n, children: l, onClick: a, size: s, className: i, disabled: c = !1 } = e;
    return (0, r.jsx)("button", {
        type: "button",
        className: u()(eR.button, "custom" !== s && eR[s], i),
        onClick: a,
        "aria-label": t,
        "aria-pressed": n,
        disabled: c,
        children: l,
    });
}
function eO(e) {
    let { className: t, ...n } = e;
    return (0, r.jsx)(e_, { ...n, className: u()(eR.shadow, t) });
}
function eM(e) {
    let { animatedSrc: t, staticSrc: n, className: l } = e,
        a = (0, m.bG)([eI.Ay], () => eI.Ay.useReducedMotion);
    return (0, r.jsx)("img", { src: a ? n : t, alt: "", className: l });
}
var eL = n(740281),
    eP = n(766089),
    ek = n(767988);
let ew = { animatedSrc: eP.A, staticSrc: ek.A };
function eD(e) {
    let { activeRoute: t } = e,
        { animatedSrc: n, staticSrc: l } = (0, m.cf)(
            [ee],
            () => {
                switch (t) {
                    case eu.gr.SUMMARY:
                    case eu.gr.SHARE:
                        let e = (0, ec.o)(ee.character),
                            { clydeLogoImage: n, clydeLogoStaticImage: l } = (0, ec.j)(e);
                        return { animatedSrc: n, staticSrc: l };
                    default:
                        return ew;
                }
            },
            [t],
        );
    return (0, r.jsx)(eM, { animatedSrc: n, staticSrc: l, className: eL.w });
}
var eU = n(756408),
    eG = n(834730),
    eF = n(504736);
function eH(e) {
    let { children: t, className: n, ...l } = e;
    return (0, r.jsx)(eG.E, { ...l, className: u()(eF.Q, n), color: "none", children: t });
}
var ez = n(271427);
function eK(e) {
    let { children: t, className: n, style: l } = e;
    return (0, r.jsx)(eH, {
        tag: "span",
        variant: "experimental/mono-md/bold",
        className: u()(ez.T, n),
        style: l,
        children: t,
    });
}
var eB = n(763166),
    eV = n(383931);
function eY(e) {
    let { percent: t } = e;
    return (0, r.jsx)(eK, { className: eV.t, children: T.intl.formatToPlainString(eB.default.fOGKA4, { percent: t }) });
}
var eW = n(646692);
function eq(e) {
    let { icon: t, value: n, topPercent: l, children: a } = e;
    return (0, r.jsxs)("div", {
        className: eW.dJ,
        children: [
            null != l && (0, r.jsx)(eY, { percent: l }),
            (0, r.jsxs)("div", {
                className: eW.p,
                children: [
                    (0, r.jsx)(eH, {
                        variant: "heading-xxl/normal",
                        className: eW.Uq,
                        children: n.toLocaleString(T.intl.currentLocale),
                    }),
                    (0, r.jsxs)("div", {
                        className: eW.Pf,
                        children: [
                            (0, r.jsx)(t, { size: "xs", color: "currentColor" }),
                            (0, r.jsx)(eH, { variant: "heading-sm/extrabold", className: eW.QK, children: a }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var eX = n(303453);
function eJ(e) {
    let { earnedCount: t, totalCount: n } = e;
    return (0, r.jsx)(eG.E, {
        variant: "text-md/medium",
        color: "text-subtle",
        children: T.intl.format(eB.default.Vfq58K, {
            earnedCount: t,
            totalCount: n,
            countHook: (e, t) =>
                (0, r.jsx)(eH, { tag: "span", variant: "experimental/mono-md/bold", className: eX.U, children: e }, t),
        }),
    });
}
var eQ = n(309913),
    eZ = n(647093);
let e$ = `linear-gradient(to right, ${eQ.uz.join(", ")})`;
function e0(e) {
    let { rarity: t } = e,
        n = c.useMemo(() => ({ "--custom-checkpoint-rarity-background": t === ej.K.NITRO ? e$ : eQ.Zy[t] }), [t]);
    return (0, r.jsx)(eK, { className: eZ.q, style: n, children: T.intl.string(eQ.iG[t]) });
}
var e1 = n(829870);
function e5(e) {
    let { asset: t, hideRarity: n } = e,
        l = (0, eo.hC)(t);
    return (0, r.jsxs)("div", {
        className: e1.z,
        children: [
            (0, r.jsxs)("div", {
                className: e1.D,
                children: [
                    (0, r.jsx)(eG.E, {
                        tag: "div",
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: t.getName(),
                    }),
                    !n && null != t.rarity && (0, r.jsx)(e0, { rarity: t.rarity }),
                ],
            }),
            null != l && (0, r.jsx)(eG.E, { variant: "text-md/medium", color: "text-subtle", children: l }),
        ],
    });
}
var e2 = n(661531),
    e3 = n(403581),
    e4 = n(140735),
    e8 = n(835517),
    e7 = n(32623),
    e6 = n(559265);
function e9(e) {
    let { rarity: t } = e,
        n = c.useMemo(() => ({ "--custom-checkpoint-rarity-color": eQ.Zy[t] }), [t]);
    return t === ej.K.NITRO
        ? (0, r.jsx)(e3.t, { size: "custom", color: e2.A.colors.ICON_SUBTLE, className: e6.d7 })
        : (0, r.jsx)("span", { className: e6.oG, style: n });
}
function te(e) {
    let { traitOption: t, groupName: n, isSelected: l, hideRarity: a, onSelectOption: s, disabled: i = !1 } = e,
        { trait: o, optionId: d, rarity: m, asset: h, status: x } = t,
        g = x === e7.eP.LOCKED,
        f = c.useMemo(() => {
            if (null == h) return null;
            let e = Math.round(eQ.VG * (0, e8.A)());
            return `${h}?width=${e}&height=${e}`;
        }, [h]);
    return (0, r.jsxs)("label", {
        className: u()(e6.uK, { [e6.wH]: l, [e6.dv]: (0, eo.C5)(t), [e6.xt]: g, [e6.Ns]: x === e7.eP.NITRO_LOCKED }),
        children: [
            (0, r.jsx)(e4.A, {
                children: (0, r.jsx)("input", {
                    type: "radio",
                    name: n,
                    checked: l,
                    disabled: i,
                    onChange: () => s(o, d),
                    "aria-label": (0, eo.v2)(t, a),
                }),
            }),
            null != f && (0, r.jsx)("img", { src: f, alt: "", draggable: !1, className: e6.Sl }),
            !a && null != m && (0, r.jsx)(e9, { rarity: m }),
        ],
    });
}
var tt = n(509063);
function tn(e) {
    let {
            customizationOption: t,
            traitOptions: n,
            selectedOption: l,
            onSelectOption: a,
            disabled: s = !1,
            children: i,
        } = e,
        o = c.useId(),
        u = !(0, eo.Ux)(t);
    return (0, r.jsxs)("div", {
        className: tt.Nz,
        children: [
            (0, r.jsxs)("div", {
                className: tt.fF,
                children: [
                    i,
                    (0, r.jsx)("div", {
                        role: "radiogroup",
                        "aria-label": (0, eo.cq)(t),
                        className: tt.Vg,
                        children: n.map((e) =>
                            (0, r.jsx)(
                                te,
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
            null != l && (0, r.jsx)(e5, { asset: l, hideRarity: u }),
        ],
    });
}
n(321073);
var tl = n(51104),
    tr = n(67915);
function ta(e, t) {
    return e === eo.v7.OUTFIT ? (null != t ? (0, eC.FA)(t) : void 0) : t;
}
function ts(e) {
    let { customizationOption: t } = e,
        {
            optionIds: n,
            selectedOptionId: l,
            savedOptionId: r,
            onSelectOption: a,
        } = (function (e) {
            let { customizationOption: t, onSelectOption: n } = e,
                l = eo.hw[t],
                { selectedOptionId: r, savedOptionId: a } = (0, m.cf)([ee], () => ({
                    selectedOptionId: ta(t, ee.selectedCharacterTraits[l]),
                    savedOptionId: ta(t, ee.character?.[l]),
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
                        case eo.v7.OUTFIT:
                            return eC.ps;
                        case eo.v7.OUTFIT_COLOR:
                            return (0, eC.wD)(t ?? tr.r.NONE);
                        default:
                            return;
                    }
                })(t, r),
                selectedOptionId: r,
                savedOptionId: a,
                onSelectOption: s,
            };
        })({ customizationOption: t, onSelectOption: el }),
        {
            traitOptions: s,
            availableTraitOptions: i,
            totalCount: o,
            earnedCount: u,
        } = (function (e) {
            let { customizationOption: t, savedOptionId: n, rarityOrder: l, optionIds: r } = e,
                a = (0, m.bG)([ee], () => ee.stats),
                s = (0, m.bG)([ep.default], () => (0, ev.ki)(ep.default.getCurrentUser())),
                i = c.useMemo(() => (0, eo.p8)(l), [l]);
            return c.useMemo(() => {
                let e = eo.hw[t],
                    l = t === eo.v7.OUTFIT_COLOR ? tl.x : tl.$[e],
                    c = (0, eC.mf)(e, a),
                    o = [],
                    u = 0,
                    d = 0;
                for (let t of r ?? eC.Rk[e]) {
                    let r = (0, eC.$C)(e, t),
                        a = e7.eP.UNLOCKED;
                    (null == r || c.has(r) || n === t
                        ? r !== ej.K.NITRO || s || (a = e7.eP.NITRO_LOCKED)
                        : (a = e7.eP.LOCKED),
                        null != r && u++,
                        null != r && a === e7.eP.UNLOCKED && d++,
                        o.push({
                            trait: e,
                            optionId: t,
                            asset: eC.qM[e][t]?.thumbnail,
                            rarity: r,
                            status: a,
                            getName: () => {
                                let e = l[t];
                                return null != e ? T.intl.string(e) : "";
                            },
                        }));
                }
                o.sort(i);
                let m = o.filter((e) => {
                    let { status: t } = e;
                    return t !== e7.eP.LOCKED;
                });
                return { traitOptions: o, availableTraitOptions: m, totalCount: u, earnedCount: d };
            }, [t, s, r, i, n, a]);
        })({ customizationOption: t, savedOptionId: r, rarityOrder: eQ.FG, optionIds: n }),
        d = c.useMemo(
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
        })({ availableTraitOptions: i, selectedOptionId: l, onSelectOption: a, paused: d?.status === e7.eP.LOCKED }),
        { traitOptions: s, selectedOption: d, totalCount: o, earnedCount: u, onSelectOption: a }
    );
}
function ti(e) {
    let { customizationOption: t } = e,
        {
            traitOptions: n,
            selectedOption: l,
            totalCount: a,
            earnedCount: s,
            onSelectOption: i,
        } = ts({ customizationOption: t });
    return (0, r.jsx)(tn, {
        customizationOption: t,
        traitOptions: n,
        selectedOption: l,
        onSelectOption: i,
        children: (0, r.jsx)(eJ, { earnedCount: s, totalCount: a }),
    });
}
var tc = n(71678);
function to(e) {
    let { children: t, className: n } = e;
    return (0, r.jsx)("div", { className: u()(tc.n, n), children: t });
}
var tu = n(922704);
function td() {
    let e = (0, m.bG)([ee], () => ee.stats?.emojis);
    return (0, r.jsxs)(to, {
        children: [
            (0, r.jsx)(eq, {
                icon: eU.o,
                value: Math.round(e?.numEmojisSent ?? 0),
                topPercent: M(e?.numEmojisSentPercentile),
                children: T.intl.string(tu.default.JwFMdL),
            }),
            (0, r.jsx)(ti, { customizationOption: eo.v7.SHOES }),
        ],
    });
}
var tm = n(297264),
    th = n(265872),
    tx = n(320448),
    tg = n(315710),
    tf = n(444927);
let tj = {
    "--custom-checkpoint-primary": eQ.Kr,
    "--custom-checkpoint-dark-cyan": eQ.ow,
    "--custom-checkpoint-button-border": eQ.ow,
    "--custom-checkpoint-button-shadow": eQ.zj,
    "--custom-checkpoint-white": eQ.Ve,
    "--custom-checkpoint-guild-card-background": eQ.LM,
    "--custom-checkpoint-background-gradient-start": eQ.bI,
};
var tp = n(580814);
function tv(e) {
    let { options: t, activeCustomizationOption: n, returnRef: l, onSelectOption: a, onClose: s } = e,
        i = c.useRef(null),
        o = c.useRef([]),
        u = (0, tf.A)(() => Math.max(t.indexOf(n), 0));
    function d(e) {
        o.current[(e + t.length) % t.length]?.focus();
    }
    return (
        (0, tg.tj)(i, { returnRef: l }),
        c.useEffect(() => {
            o.current[u]?.focus();
        }, [u]),
        (0, r.jsx)("div", {
            ref: i,
            role: "menu",
            tabIndex: -1,
            "aria-label": T.intl.string(eB.default.Zl5vPW),
            className: tp.M,
            style: tj,
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
                        className: tp.A,
                        onClick: () => a(e),
                        onMouseEnter: (e) => e.currentTarget.focus(),
                        children: (0, r.jsx)(eG.E, {
                            tag: "span",
                            variant: "heading-md/extrabold",
                            color: "none",
                            children: (0, eo.cq)(e),
                        }),
                    },
                    e,
                ),
            ),
        })
    );
}
var tC = n(769909);
let tA = [eo.v7.BASE, eo.v7.OUTFIT_COLOR],
    tE = [eo.v7.AURA, eo.v7.WEARABLE, eo.v7.SHOES, eo.v7.HAT, eo.v7.OUTFIT, eo.v7.FACE];
function tN(e) {
    let { activeCustomizationOption: t, onSelectOption: n, disabled: l = !1 } = e,
        a = c.useRef(null),
        s = tE.includes(t);
    return (0, r.jsx)(th.Y, {
        targetElementRef: a,
        position: "right",
        align: "top",
        spacing: 8,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, r.jsx)(tv, {
                options: tE,
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
                className: u()(tC.Mf, tC.OS, { [tC.vu]: s || i }),
                children: [
                    (0, r.jsx)(eG.E, {
                        tag: "span",
                        variant: "heading-md/extrabold",
                        color: "none",
                        children: s ? (0, eo.cq)(t) : T.intl.string(eB.default["iXpQc+"]),
                    }),
                    (0, r.jsx)(tx._, { size: "refresh_sm", color: "currentColor" }),
                ],
            });
        },
    });
}
function tS(e) {
    let { activeCustomizationOption: t, onSelectOption: n, disabled: l = !1 } = e,
        a = c.useId();
    return (0, r.jsxs)("div", {
        className: tC.vR,
        children: [
            (0, r.jsx)("div", {
                role: "radiogroup",
                "aria-label": T.intl.string(eB.default.Zl5vPW),
                className: tC.vR,
                children: tA.map((e) => {
                    let s = e === t;
                    return (0, r.jsxs)(
                        "label",
                        {
                            className: u()(tC.Mf, { [tC.vu]: s }),
                            children: [
                                (0, r.jsx)(e4.A, {
                                    children: (0, r.jsx)("input", {
                                        type: "radio",
                                        name: a,
                                        checked: s,
                                        disabled: l,
                                        onChange: () => n(e),
                                    }),
                                }),
                                (0, r.jsx)(eG.E, {
                                    tag: "span",
                                    variant: "heading-md/extrabold",
                                    color: "none",
                                    children: (0, eo.cq)(e),
                                }),
                            ],
                        },
                        e,
                    );
                }),
            }),
            (0, r.jsx)(tN, { activeCustomizationOption: t, onSelectOption: n, disabled: l }),
        ],
    });
}
var tI = n(195464);
function tb() {
    let [e, t] = c.useState(eo.v7.BASE),
        { traitOptions: n, selectedOption: l, onSelectOption: a } = ts({ customizationOption: e }),
        { blockedTraits: s } = eA(),
        i = s.includes(eo.hw[e]),
        o = (0, m.bG)([ee], () => ee.isSaving);
    return (0, r.jsxs)(to, {
        className: tI.n,
        children: [
            (0, r.jsx)(tm.D, {
                variant: "heading-xl/medium",
                color: "none",
                className: tI.D,
                children: T.intl.string(eB.default["q2nj/Z"]),
            }),
            (0, r.jsx)(tS, { activeCustomizationOption: e, onSelectOption: t, disabled: o || i }),
            (0, r.jsx)(tn, {
                customizationOption: e,
                traitOptions: n,
                selectedOption: l,
                onSelectOption: a,
                disabled: o,
            }),
        ],
    });
}
var ty = n(81466);
function tT() {
    let e = (0, m.bG)([ee], () => ee.stats?.games);
    return (0, r.jsxs)(to, {
        children: [
            (0, r.jsx)(eq, {
                icon: ty.CalendarIcon,
                value: Math.round(e?.totalDaysPlayed ?? 0),
                topPercent: M(e?.totalDaysPlayedPercentile),
                children: T.intl.string(eB.default.oAoYbN),
            }),
            (0, r.jsx)(ti, { customizationOption: eo.v7.AURA }),
        ],
    });
}
var tR = n(687966);
function t_() {
    let e = (0, m.bG)([ee], () => ee.stats?.games);
    return (0, r.jsxs)(to, {
        children: [
            (0, r.jsx)(eq, {
                icon: tR.GameControllerIcon,
                value: Math.round(e?.totalGamesPlayed ?? 0),
                topPercent: M(e?.totalGamesPlayedPercentile),
                children: T.intl.string(eB.default.HM2fjf),
            }),
            (0, r.jsx)(ti, { customizationOption: eo.v7.WEARABLE }),
        ],
    });
}
var tO = n(534890);
function tM() {
    let e = (0, m.bG)([ee], () => ee.stats?.messages);
    return (0, r.jsxs)(to, {
        children: [
            (0, r.jsx)(eq, {
                icon: tO.ChatIcon,
                value: Math.round(e?.numMessagesSent ?? 0),
                topPercent: M(e?.numMessagesSentPercentile),
                children: T.intl.string(tu.default.wWKySP),
            }),
            (0, r.jsx)(ti, { customizationOption: eo.v7.OUTFIT }),
        ],
    });
}
var tL = n(664121);
function tP() {
    let e = (0, m.bG)([ee], () => ee.stats?.guilds?.guilds[0]);
    return (0, r.jsxs)(to, {
        children: [
            (0, r.jsx)(eq, {
                icon: tL.R,
                value: Math.round(e?.numDaysInteracted ?? 0),
                topPercent: M(e?.numDaysInteractedPercentile),
                children: T.intl.string(eB.default["M+a+t1"]),
            }),
            (0, r.jsx)(ti, { customizationOption: eo.v7.HAT }),
        ],
    });
}
var tk = n(831544);
function tw() {
    let e = (0, m.bG)([ee], () => ee.stats?.voice),
        t = Math.round(e?.totalVoiceMinutes ?? 0);
    return (0, r.jsxs)(to, {
        children: [
            (0, r.jsx)(eq, {
                icon: tk.MicrophoneIcon,
                value: t,
                topPercent: M(e?.totalVoiceMinutesPercentile),
                children: T.intl.formatToPlainString(tu.default.UZbUtl, { numMinutes: t }),
            }),
            (0, r.jsx)(ti, { customizationOption: eo.v7.FACE }),
        ],
    });
}
function tD(e) {
    let { route: t } = e;
    switch (t) {
        case eu.gr.VOICE_FACE:
            return (0, r.jsx)(tw, {});
        case eu.gr.MESSAGES_OUTFIT:
            return (0, r.jsx)(tM, {});
        case eu.gr.SERVERS_HEADWEAR:
            return (0, r.jsx)(tP, {});
        case eu.gr.EMOJI_SHOES:
            return (0, r.jsx)(td, {});
        case eu.gr.GAMES_WEARABLE:
            return (0, r.jsx)(t_, {});
        case eu.gr.GAME_TIME_AURA:
            return (0, r.jsx)(tT, {});
        case eu.gr.FINALIZE_CHARACTER:
            return (0, r.jsx)(tb, {});
        default:
            return null;
    }
}
var tU = n(358618),
    tG = n(983851);
function tF() {
    let e = (0, m.bG)([ee], () => ee.isMuted),
        t = e ? tU._ : tG.H;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(e_, {
                size: "sm",
                "aria-label": T.intl.string(e ? T.t.YqAjXy : T.t.w4m945),
                onClick: en,
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
var tH = n(435558),
    tz = n(477155),
    tK = n(935286),
    tB = n(858899),
    tV = n(289873),
    tY = n(621466);
function tW(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    c.useEffect(() => {
        if (!n) return (window.addEventListener("keydown", l), () => window.removeEventListener("keydown", l));
        function l(n) {
            (0, tY.vq)(n.target, HTMLTextAreaElement) || (0, tY.vq)(n.target, HTMLInputElement) || (n.key === e && t());
        }
    }, [e, t, n]);
}
var tq = n(753875);
function tX(e) {
    let { onClick: t, disabled: n = !1 } = e;
    return (
        tW("ArrowLeft", t, n),
        (0, r.jsx)(e_, {
            size: "md",
            className: u()(tq.A4, tq.aX),
            onClick: t,
            disabled: n,
            "aria-label": T.intl.string(T.t["13/7kX"]),
            children: (0, r.jsx)(tz.r, { color: "currentColor" }),
        })
    );
}
function tJ(e) {
    let { onClick: t, disabled: n = !1 } = e;
    return (
        tW("ArrowRight", t, n),
        (0, r.jsx)(eO, {
            size: "md",
            className: u()(tq.A4, tq.K2),
            onClick: t,
            disabled: n,
            "aria-label": T.intl.string(T.t.PDTjLN),
            children: (0, r.jsx)(tK.E, { color: "currentColor" }),
        })
    );
}
function tQ(e) {
    let { onBack: t, isRouteBlocked: n } = e,
        l = (0, m.bG)([ee], () => ee.isSaving);
    return (0, r.jsx)(tX, {
        onClick: function () {
            l || t();
        },
        disabled: l || n,
    });
}
function tZ(e) {
    let { onNext: t, throttledNavigate: n, isRouteBlocked: l } = e,
        a = (0, m.bG)([ee], () => ee.isSaving),
        s = a || l;
    function i() {
        n(c);
    }
    async function c() {
        if (a) return;
        let e = (0, eC.XI)(ee.selectedCharacterTraits);
        (await ea(e)) ? t() : (0, tB.P0)({ text: T.intl.string(T.t.fEptJP), variant: "critical" });
    }
    return (
        tW("ArrowRight", i, s),
        (0, r.jsxs)(eO, {
            size: "custom",
            className: u()(tq.A4, tq.K2, tq.UN),
            onClick: i,
            disabled: s,
            "aria-label": T.intl.string(T.t["R3BPH+"]),
            children: [
                (0, r.jsx)(eH, {
                    variant: "experimental/mono-md/normal",
                    className: tq.L8,
                    children: T.intl.string(T.t["R3BPH+"]),
                }),
                a
                    ? (0, r.jsx)(tV.y, { type: tV.t.SPINNING_CIRCLE_SIMPLE, className: tq.u1, itemClassName: tq.$N })
                    : (0, r.jsx)(tK.E, { size: "refresh_sm", color: "currentColor" }),
            ],
        })
    );
}
function t$(e) {
    let { activeRoute: t, isRouteBlocked: n, onBack: l, onNext: a } = e,
        s = c.useMemo(() => (0, tH.throttle)((e) => e(), 500, { trailing: !1 }), []);
    switch (t) {
        case eu.gr.HOME:
            return null;
        case eu.gr.FINALIZE_CHARACTER:
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(tQ, { onBack: () => s(l), isRouteBlocked: n }),
                    (0, r.jsx)(tZ, { onNext: a, throttledNavigate: s, isRouteBlocked: n }),
                ],
            });
        default:
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(tX, { onClick: () => s(l), disabled: n }),
                    (0, r.jsx)(tJ, { onClick: () => s(a), disabled: n }),
                ],
            });
    }
}
function t0(e) {
    let { className: t } = e;
    return (0, r.jsx)(eM, {
        animatedSrc:
            "https://cdn.discordapp.com/assets/content/02e9ae4cdbec0b2adef22c9a5659f5c7340e399cc8932e8af6d41e62a37644ae.png",
        staticSrc:
            "https://cdn.discordapp.com/assets/content/f08be0abd0d224b5f7e1e5d6c1ef8e4d24cddcb712e2c624dcc6ea3d136818d5.png",
        className: t,
    });
}
var t1 = n(771639);
function t5(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", { className: t1.n, children: t });
}
var t2 = n(639331);
function t3() {
    let e = (0, m.bG)([ee], () => ee.fetchState !== K.SUCCESS || null != ee.stats);
    return (0, r.jsx)(t5, {
        children: (0, r.jsxs)("div", {
            className: t2.Qs,
            children: [
                (0, r.jsxs)("div", {
                    className: t2.Ok,
                    children: ["2026", !e && (0, r.jsx)(t0, { className: t2.gi })],
                }),
                (0, r.jsxs)("div", {
                    className: t2.eH,
                    children: [
                        (0, r.jsx)(eH, {
                            tag: "p",
                            variant: "heading-lg/medium",
                            children: T.intl.string(e ? eB.default["7YmUVu"] : eB.default["Fyr+NW"]),
                        }),
                        !e &&
                            (0, r.jsx)(eH, {
                                tag: "p",
                                variant: "heading-lg/medium",
                                children: T.intl.string(eB.default["2GRr6H"]),
                            }),
                    ],
                }),
            ],
        }),
    });
}
(n(134528), n(947204));
var t4 = n(675970),
    t8 = n(559106),
    t7 = n(366056),
    t6 = n(292801),
    t9 = n(155718),
    ne = n(294454),
    nt = n(489414),
    nn = n(878358),
    nl = n(383233),
    nr = n(819648),
    na = n(677059);
function ns(e) {
    let { children: t } = e;
    return (0, r.jsx)(eH, { variant: "heading-xxl/medium", className: na.h, children: t });
}
var ni = n(100391);
function nc(e) {
    let { icon: t, children: n } = e;
    return (0, r.jsxs)("div", {
        className: ni.D,
        children: [
            (0, r.jsx)(t, { size: "md", color: "currentColor" }),
            (0, r.jsx)(eH, { variant: "heading-lg/extrabold", className: ni.Q, children: n }),
        ],
    });
}
var no = n(456410);
function nu(e) {
    let { name: t, label: n, checked: l, onSelect: a, children: s } = e;
    return (0, r.jsx)(t8.vN, {
        within: !0,
        children: (0, r.jsxs)("label", {
            className: u()(no.uK, { [no.KD]: l }),
            children: [
                (0, r.jsx)(e4.A, {
                    children: (0, r.jsx)("input", { type: "radio", name: t, checked: l, onChange: a, "aria-label": n }),
                }),
                l ? (0, r.jsx)("div", { className: no.Gt, "aria-hidden": !0 }) : null,
                (0, r.jsx)("div", { className: no.Nr, "aria-hidden": !0, children: s }),
            ],
        }),
    });
}
function nd() {
    let e = (0, m.bG)([ee], () => ee.character),
        t = (0, m.bG)([ee], () => ee.stats),
        n = c.useId(),
        l = c.useMemo(() => {
            var n, l;
            return ((n = e),
            (l = t),
            null != n && null != l
                ? [t4.Q.CHARACTER_ONLY, t4.Q.DEFAULT, t4.Q.STATS_ONLY]
                : null != n
                  ? [t4.Q.CHARACTER_ONLY]
                  : null != l
                    ? [t4.Q.STATS_ONLY]
                    : []).map((n) => ({ cardType: n, checkpointData: (0, nr.Go)(n, e, t) }));
        }, [e, t]),
        [a, s] = c.useState(l.at(0)?.cardType),
        i = l.find((e) => {
            let { cardType: t } = e;
            return t === a;
        });
    return null == i
        ? null
        : (0, r.jsx)(t5, {
              children: (0, r.jsxs)("div", {
                  className: no.uM,
                  children: [
                      (0, r.jsxs)("div", {
                          className: no.wx,
                          children: [
                              (0, r.jsxs)("div", {
                                  className: no.R_,
                                  children: [
                                      (0, r.jsx)(nc, { icon: t7.M, children: T.intl.string(tu.default.ir6nEQ) }),
                                      (0, r.jsx)(eH, {
                                          variant: "display-lg",
                                          className: no.Vy,
                                          children: T.intl.string(tu.default["T7cl+Y"]),
                                      }),
                                  ],
                              }),
                              (0, r.jsx)("div", {
                                  className: no.h_,
                                  children: (0, r.jsx)(ns, { children: T.intl.string(eB.default.KXDPot) }),
                              }),
                          ],
                      }),
                      (0, r.jsx)("div", {
                          role: "radiogroup",
                          "aria-label": T.intl.string(eB.default.KXDPot),
                          className: no.kR,
                          children: l.map((e) => {
                              let { cardType: t, checkpointData: l } = e;
                              return (0, r.jsx)(
                                  nu,
                                  {
                                      name: n,
                                      label: (function (e) {
                                          switch (e) {
                                              case t4.Q.CHARACTER_ONLY:
                                                  return T.intl.string(eB.default.tUU3fe);
                                              case t4.Q.DEFAULT:
                                                  return T.intl.string(eB.default.DZQzJn);
                                              case t4.Q.STATS_ONLY:
                                                  return T.intl.string(eB.default.e2UHGT);
                                          }
                                      })(t),
                                      checked: t === i.cardType,
                                      onSelect: () => s(t),
                                      children: (0, r.jsx)(nn.A, { checkpointData: l }),
                                  },
                                  t,
                              );
                          }),
                      }),
                      (0, r.jsxs)(eO, {
                          size: "custom",
                          className: no.sY,
                          "aria-label": T.intl.string(T.t.I3ltXO),
                          onClick: function () {
                              if (null == i) return;
                              let { cardType: e, checkpointData: t } = i;
                              (0, ne.fO)({
                                  message: new nl.Ay({
                                      content: "",
                                      components: [
                                          { type: t9.I5.CHECKPOINT_CARD, id: (0, nt.X1)("0"), checkpointData: t },
                                      ],
                                  }),
                                  source: "checkpoint",
                                  customSendHandler: async (t, n, l) => {
                                      let { withMessage: r } = n;
                                      l(!0);
                                      try {
                                          (await ei(t, r ?? "", e),
                                              (0, ne.Be)(),
                                              (0, tB.P0)({ text: T.intl.string(T.t.kwmYkt), variant: "success" }));
                                      } catch {
                                          (0, tB.P0)({ text: T.intl.string(T.t.iufib1), variant: "critical" });
                                      } finally {
                                          l(!1);
                                      }
                                  },
                              });
                          },
                          children: [
                              (0, r.jsx)(eG.E, {
                                  variant: "experimental/mono-md/bold",
                                  color: "none",
                                  className: no.RC,
                                  children: T.intl.string(T.t.I3ltXO),
                              }),
                              (0, r.jsx)(t6.t, { size: "refresh_sm", color: "currentColor" }),
                          ],
                      }),
                  ],
              }),
          });
}
var nm = n(536426),
    nh = n(782134),
    nx = n(998304),
    ng = n(427262),
    nf = n(438389);
let nj = (0, nx.j5)(eQ.Kr);
function np(e) {
    let { onStart: t } = e,
        n = (0, m.bG)([ep.default], () => ep.default.getCurrentUser()),
        l = (0, ng.tx)(n),
        a = (0, m.bG)([eI.Ay], () => eI.Ay.useReducedMotion);
    return (
        tW("ArrowRight", t),
        (0, r.jsxs)(t5, {
            children: [
                (0, r.jsxs)("div", {
                    className: nf.Qs,
                    children: [
                        (0, r.jsxs)("div", {
                            className: nf.wx,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: nf.Qq,
                                    children: [
                                        (0, r.jsx)(eH, {
                                            variant: "display-lg",
                                            className: nf.DD,
                                            children: T.intl.string(tu.default["CdU/PF"]),
                                        }),
                                        (0, r.jsx)(eH, {
                                            variant: "heading-xxl/medium",
                                            children: T.intl.formatToPlainString(eB.default.xhZ23b, { username: l }),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)("div", {
                                    className: nf.CB,
                                    children: (0, r.jsx)(nm.U, {
                                        artboard: "Entry",
                                        className: nf.lW,
                                        fit: "contain",
                                        withReducedMotion: "short-loop",
                                        dataBinding: { iconColor: nj, reducedMotion: a },
                                    }),
                                }),
                            ],
                        }),
                        (0, r.jsxs)(eO, {
                            size: "custom",
                            className: nf.ni,
                            "aria-label": T.intl.string(T.t.I0v0Qv),
                            onClick: t,
                            children: [
                                (0, r.jsx)(nh.PlayIcon, { size: "refresh_sm", color: "currentColor" }),
                                (0, r.jsx)(eH, {
                                    variant: "experimental/mono-md/normal",
                                    className: nf.qK,
                                    children: T.intl.string(T.t.I0v0Qv),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(eH, {
                    variant: "text-md/medium",
                    className: nf.al,
                    children: T.intl.format(tu.default.g476ZL, { name: "Exyl" }),
                }),
            ],
        })
    );
}
var nv = n(788026),
    nC = n(141881);
function nA(e) {
    let { children: t } = e;
    return (0, r.jsx)(eK, { className: nC.l, children: t });
}
var nE = n(765671),
    nN = n(590642),
    nS = n(362263),
    nI = n(406956);
let nb = (0, nx.j5)(eQ.Kr);
function ny(e) {
    let { value: t, alignment: n = "left" } = e,
        l = (0, m.bG)([eI.Ay], () => eI.Ay.useReducedMotion),
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
    let o = "center" === n ? nN.m : nS.w;
    return (0, r.jsxs)("div", {
        className: nI.lY,
        children: [
            (0, r.jsx)("div", { className: nI.VL, children: t }),
            (0, r.jsx)(o, {
                className: nI.lW,
                fit: "layout",
                withReducedMotion: "short-loop",
                dataBinding: { DisplayValue: i, TextColor: nb },
            }),
            (0, r.jsx)(e4.A, { children: t.toLocaleString(T.intl.currentLocale) }),
        ],
    });
}
var nT = n(434911);
function nR(e) {
    let { value: t } = e,
        { ref: n, width: l } = (0, nE.Ay)(),
        { ref: a, width: s } = (0, nE.Ay)(),
        i = null != l && null != s ? Math.min(1, l / s) : 1;
    return (0, r.jsxs)("div", {
        ref: n,
        className: nT.ai,
        style: { height: 200 * i },
        children: [
            (0, r.jsx)("span", { ref: a, className: u()(nT.Qq, nT.xP), children: t }),
            (0, r.jsx)(ny, { value: t }),
        ],
    });
}
function n_(e) {
    let { value: t } = e;
    return (0, r.jsxs)("div", {
        className: nT.dJ,
        children: [
            "number" == typeof t
                ? (0, r.jsx)(nR, { value: t })
                : (0, r.jsx)(eH, { variant: "heading-xxl/normal", className: nT.Qq, children: t }),
            (0, r.jsx)(t0, { className: nT.gi }),
        ],
    });
}
(n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162));
var nO = n(445199),
    nM = n(205524),
    nL = n(690521),
    nP = n(152321);
let nk = [0, 0, 2],
    nw = [0, 1, 0],
    nD = [0, 0, 0],
    nU = `
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
    nG = `
precision mediump float;

varying vec2 v_texcoord;
varying highp vec3 v_lighting;

uniform sampler2D u_texture;

void main() {
  highp vec4 texelColor = texture2D(u_texture, v_texcoord);
  gl_FragColor = vec4(texelColor.rgb * v_lighting, texelColor.a);
}
`,
    nF = [
        -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5,
        -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5, 0.5, -0.5, 0.5, -0.5, -0.5,
        0.5, 0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, -0.5,
        -0.5, -0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5,
        -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, 0.5, 0.5,
        -0.5, 0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5,
    ],
    nH = [
        0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0,
        1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0,
    ],
    nz = [
        0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
        1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0,
        -1, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
        1, 0, 0,
    ];
function nK(e) {
    let t,
        { emoji: n } = e,
        [l, a] = c.useState(null),
        [s, i] = c.useState(null),
        o = c.useRef(new Image()),
        [u, d] = c.useState(null),
        [h, x] = c.useState(!1),
        g = c.useRef(0),
        f = c.useRef(0),
        j = c.useRef(45),
        p = c.useRef(45),
        v = (0, m.bG)([eI.Ay], () => eI.Ay.useReducedMotion),
        C = 70 * !v,
        A = 40 * !v,
        E = c.useRef(C),
        N = c.useRef(A),
        S = c.useRef(!1),
        I = c.useRef(0),
        b = c.useRef(0);
    ((t = c.useRef(null)),
        c.useEffect(() => {
            if (null == t.current || null == s) return;
            let e = t.current,
                n = e.createTexture();
            return (
                e.bindTexture(e.TEXTURE_2D, n),
                e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, s),
                e.generateMipmap(e.TEXTURE_2D),
                () => e.deleteTexture(n)
            );
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
                (r.shaderSource(a, nU),
                r.shaderSource(i, nG),
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
                r.bufferData(r.ARRAY_BUFFER, new Float32Array(nz), r.STATIC_DRAW),
                r.vertexAttribPointer(h, 3, r.FLOAT, !1, 0, 0),
                r.enableVertexAttribArray(h));
            let f = r.createBuffer();
            (r.bindBuffer(r.ARRAY_BUFFER, f),
                (e = new Float32Array(nF)),
                r.bufferData(r.ARRAY_BUFFER, e, r.STATIC_DRAW));
            let v = r.createBuffer();
            (r.bindBuffer(r.ARRAY_BUFFER, v), r.bufferData(r.ARRAY_BUFFER, new Float32Array(nH), r.STATIC_DRAW));
            let C = nO.DF(60);
            return (
                (n = requestAnimationFrame(function e() {
                    if (null == r || null == l) return;
                    (r.viewport(0, 0, r.canvas.width, r.canvas.height), r.enable(r.CULL_FACE), r.enable(r.DEPTH_TEST));
                    let t = nO.DF(j.current),
                        a = nO.DF(p.current);
                    (r.clear(r.COLOR_BUFFER_BIT | r.DEPTH_BUFFER_BIT),
                        r.useProgram(c),
                        r.enableVertexAttribArray(o),
                        r.bindBuffer(r.ARRAY_BUFFER, f),
                        r.vertexAttribPointer(o, 3, r.FLOAT, !1, 0, 0),
                        r.enableVertexAttribArray(u),
                        r.bindBuffer(r.ARRAY_BUFFER, v),
                        r.vertexAttribPointer(u, 2, r.FLOAT, !1, 0, 0));
                    let s = l.clientWidth / l.clientHeight,
                        i = nM.fN(nM.vt(), C, s, 1, 2e3),
                        h = nM.t5(nM.vt(), nk, nD, nw),
                        g = nM.lw(nM.vt(), i, h),
                        A = nM.vt();
                    (nM.eL(A, A, t), nM.Z8(A, A, a));
                    let E = nM.lw(nM.vt(), g, A),
                        N = nM.vt();
                    (nM.B8(N, A),
                        nM.mg(N, N),
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
            (e.fillStyle = eQ.qn),
            e.fillRect(0, 0, s.width, 1),
            e.fillRect(0, 0, 1, s.height),
            e.fillRect(0, s.height - 1, s.width, 1),
            e.fillRect(s.width - 1, 0, 1, s.height),
            d(n),
            x(!0));
    }, [n, o, s]);
    (c.useEffect(() => {
        null != s &&
            ((o.current.crossOrigin = "anonymous"), (o.current.src = (0, nL.Ez)(n, 256)), (o.current.onload = y));
    }, [n, y, o, s]),
        c.useEffect(
            () => (
                !(function e(t) {
                    let n = 0.001 * t,
                        l = Math.min(n - f.current, 0.1);
                    if (((p.current += -N.current * l), (j.current += -E.current * l), !S.current)) {
                        if (Math.abs(E.current) > C) {
                            let e = E.current > 0 ? 1 : -1;
                            E.current -= 2 * e * window.devicePixelRatio;
                        }
                        if (Math.abs(N.current) > A) {
                            let e = N.current > 0 ? 1 : -1;
                            N.current -= 2 * e * window.devicePixelRatio;
                        }
                    }
                    ((f.current = n), (g.current = requestAnimationFrame(e)));
                })(0),
                () => cancelAnimationFrame(g.current)
            ),
            [C, A],
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
                (0, r.jsx)("canvas", { className: h ? nP.n3 : nP.q4, ref: a, height: 512, width: 512, onMouseDown: T }),
                (0, r.jsx)("canvas", { className: nP.R, ref: i, height: 256, width: 256 }),
            ],
        })
    );
}
var nB = n(826820);
let nV = [];
function nY(e) {
    let { emojiStats: t } = e,
        n = Math.round(t?.numEmojisSent ?? 0),
        l = M(t?.numEmojisSentPercentile);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: nB.dJ,
                children: [
                    (0, r.jsx)(nc, { icon: eU.o, children: T.intl.string(tu.default.JwFMdL) }),
                    (0, r.jsx)(ny, { value: n }),
                ],
            }),
            (0, r.jsx)(ns, {
                children:
                    null != l
                        ? T.intl.format(eB.default.heQSO4, {
                              numEmojis: n,
                              percent: l,
                              percentHook: (e, t) => (0, r.jsx)(nA, { children: e }, t),
                          })
                        : T.intl.format(eB.default.Klji1b, { numEmojis: n }),
            }),
        ],
    });
}
function nW(e) {
    let { numEmojisSent: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: nB.dJ,
                children: [
                    (0, r.jsx)(nc, { icon: eU.o, children: T.intl.string(tu.default.JwFMdL) }),
                    (0, r.jsx)(n_, { value: t }),
                ],
            }),
            (0, r.jsx)(ns, { children: T.intl.format(eB.default["660/Rr"], { numEmojis: L(t) }) }),
        ],
    });
}
function nq() {
    let e = (0, m.bG)([ee], () => ee.stats?.emojis),
        t = (0, m.bG)([ee], () => G(ee.stats)),
        n = (0, m.bG)([ee], () => ee.globalStats?.emojis),
        l = !t && null != n,
        a = (l ? n.emojis : e?.emojis) ?? nV,
        [s, i] = c.useState(0),
        o = a[s],
        u = eN(d);
    return (0, r.jsx)(t5, {
        children: (0, r.jsxs)("div", {
            className: nB.kL,
            children: [
                (0, r.jsx)("div", { className: nB.KY, children: null != o && (0, r.jsx)(nK, { emoji: o }) }),
                (0, r.jsxs)("div", {
                    className: nB.C,
                    children: [
                        l ? (0, r.jsx)(nW, { numEmojisSent: n.numEmojisSent }) : (0, r.jsx)(nY, { emojiStats: e }),
                        (0, r.jsx)("div", {
                            className: nB.gm,
                            children: a.map((e, t) =>
                                (0, r.jsx)(
                                    nX,
                                    {
                                        emoji: e,
                                        rank: t + 1,
                                        isActive: t === s,
                                        onClick: () => {
                                            (u(), i(t));
                                        },
                                    },
                                    e.id ?? e.name,
                                ),
                            ),
                        }),
                    ],
                }),
            ],
        }),
    });
}
function nX(e) {
    let { emoji: t, rank: n, isActive: l, onClick: a } = e,
        s = !(0, m.bG)([eI.Ay], () => eI.Ay.useReducedMotion) && !0 === t.animated;
    return (0, r.jsxs)(e_, {
        size: "custom",
        className: nB._X,
        onClick: a,
        "aria-label": T.intl.formatToPlainString(eB.default["S5+pRg"], { emojiName: t.name, rank: n }),
        "aria-pressed": l,
        children: [
            (0, r.jsx)(nv.A, { className: nB.Zg, emojiId: t.id, emojiName: t.name, animated: s }),
            (0, r.jsx)(eH, { variant: "experimental/mono-md/bold", className: nB.Tm, children: n }),
        ],
    });
}
var nJ = n(236177),
    nQ = n(214947),
    nZ = n(939249),
    n$ = n(597770),
    n0 = n(559647),
    n1 = n(793574),
    n5 = n(95369),
    n2 = n(570287),
    n3 = n(486020),
    n4 = n(801305);
let n8 = [],
    n7 = (0, nx.j5)(eQ.Kr),
    n6 = { r: 0, g: 0, b: 0, a: 1 },
    n9 = {
        "Avatar01/Stroke": n6,
        "Avatar01/Fill": n7,
        "Avatar02/Stroke": n6,
        "Avatar02/Fill": n7,
        "Avatar03/Stroke": n6,
        "Avatar03/Fill": n7,
        "Avatar04/Stroke": n6,
        "Avatar04/Fill": n7,
        "Avatar05/Stroke": n6,
        "Avatar05/Fill": n7,
        ConnectorColor: n7,
    };
function le(e) {
    return null != e ? n3.Ay.getUserAvatarURL(e, !1, 160, "png") : void 0;
}
function lt(e) {
    let t,
        { route: n, onNextStep: l, onPreviousStep: a } = e,
        s = (0, m.bG)([ee], () => ee.stats?.users ?? n8),
        i = (0, m.bG)([ee], () => ee.stats?.sidekick),
        o = (0, m.bG)([ep.default], () => ep.default.getCurrentUser()),
        d = (0, m.bG)([eI.Ay], () => eI.Ay.useReducedMotion),
        h = c.useRef(null),
        x = c.useRef(void 0),
        g = (function (e, t) {
            let [n, l] = c.useState({ route: e, hasShownSquad: e === eu.gr.SQUAD, isTransitioning: !1 });
            switch (
                (n.route !== e &&
                    l({
                        route: e,
                        hasShownSquad: n.hasShownSquad || e === eu.gr.SQUAD,
                        isTransitioning: !t && n.route === eu.gr.SQUAD && e === eu.gr.SIDEKICK,
                    }),
                c.useEffect(() => {
                    if (!n.isTransitioning) return;
                    let e = setTimeout(() => l((e) => ({ ...e, isTransitioning: !1 })), 1500);
                    return () => clearTimeout(e);
                }, [n.isTransitioning]),
                e)
            ) {
                case eu.gr.SQUAD_TRANSITION:
                    return 5 * !!n.hasShownSquad;
                case eu.gr.SQUAD:
                    return 1;
                case eu.gr.SIDEKICK:
                    return n.isTransitioning ? 2 : 3;
                case eu.gr.SIDEKICK_LEAVE:
                    return t ? 3 : 4;
                default:
                    return 0;
            }
        })(n, d);
    ((t = c.useRef(!0)),
        c.useEffect(() => {
            if (n !== eu.gr.SIDEKICK_LEAVE) {
                t.current = !1;
                return;
            }
            if (t.current) return void a();
            if (d) return void l();
            let e = setTimeout(l, 1e3);
            return () => clearTimeout(e);
        }, [l, a, d, n]));
    let [f, j] = s,
        p = ((0, ng.tx)(f) ?? "").toLocaleUpperCase(),
        v = ((0, ng.tx)(j) ?? "").toLocaleUpperCase(),
        C = (0, ng.tx)(i?.user) ?? "",
        A = s.length < 2,
        E = n === eu.gr.SIDEKICK || n === eu.gr.SIDEKICK_LEAVE;
    c.useEffect(() => () => clearInterval(x.current), []);
    let N = c.useCallback(() => {
        (clearInterval(x.current),
            (x.current = setInterval(() => {
                let e = h.current?.getProperties();
                e?.twoFriends?.value === A &&
                    e?.reducedMotion?.value === d &&
                    e?.["Avatar01/Username"]?.value === C.toLocaleUpperCase() &&
                    (h.current?.play(), clearInterval(x.current));
            }, 50)));
    }, [d, C, A]);
    return (0, r.jsxs)(t5, {
        children: [
            (0, r.jsx)(nJ.m, {
                ref: h,
                className: n4.lW,
                fit: "contain",
                autoplay: !1,
                onLoad: N,
                withReducedMotion: "play",
                dataBinding: {
                    ...n9,
                    AnimationState: g,
                    "Avatar01/img": le(i?.user),
                    "Avatar02/img": le(j),
                    "Avatar03/img": le(f),
                    "Avatar04/img": le(i?.user),
                    "Avatar05/img": le(o),
                    "Avatar01/Username": C.toLocaleUpperCase(),
                    "Avatar02/Username": v,
                    "Avatar03/Username": p,
                    "Avatar04/Username": C.toLocaleUpperCase(),
                    twoFriends: A,
                    reducedMotion: d,
                },
            }),
            n === eu.gr.SQUAD_TRANSITION &&
                (0, r.jsx)("div", {
                    className: u()(n4.Qs, n4.kY),
                    children: (0, r.jsx)(ns, { children: T.intl.string(eB.default["6RSp5q"]) }),
                }),
            n === eu.gr.SQUAD &&
                (0, r.jsx)("div", {
                    className: n4.Qs,
                    children: (0, r.jsx)(ln, {
                        title: T.intl.string(tu.default.OzY5Ns),
                        description: T.intl.string(eB.default.EqdLDd),
                    }),
                }),
            E &&
                null != i &&
                (0, r.jsxs)("div", {
                    className: u()(n4.Qs, n4.yG),
                    children: [
                        (0, r.jsxs)("div", {
                            className: n4.Cv,
                            children: [
                                (0, r.jsx)(ln, {
                                    title: T.intl.string(tu.default["+uwOHt"]),
                                    description: T.intl.string(eB.default["/ctmGw"]),
                                }),
                                (0, r.jsx)(ll, { sidekick: i }),
                            ],
                        }),
                        (0, r.jsx)(lr, { user: i.user, username: C }),
                    ],
                }),
        ],
    });
}
function ln(e) {
    let { title: t, description: n } = e;
    return (0, r.jsxs)("div", {
        className: n4.wx,
        children: [
            (0, r.jsxs)("div", {
                className: n4.R_,
                children: [
                    (0, r.jsx)(nc, { icon: nQ.$, children: T.intl.string(tu.default.ZQakPR) }),
                    (0, r.jsx)(eH, { variant: "display-lg", className: n4.Vy, children: t }),
                ],
            }),
            (0, r.jsx)(ns, { children: n }),
        ],
    });
}
function ll(e) {
    let { sidekick: t } = e;
    return (0, r.jsxs)("div", {
        className: n4.M1,
        children: [
            (0, r.jsxs)("div", {
                className: n4.dJ,
                children: [
                    (0, r.jsx)(tO.ChatIcon, { size: "md", color: "currentColor" }),
                    (0, r.jsx)(eH, {
                        variant: "heading-xxl/normal",
                        className: n4.wk,
                        children: Math.round(t.numMessagesSent),
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: n4.dJ,
                children: [
                    (0, r.jsx)(tk.MicrophoneIcon, { size: "md", color: "currentColor" }),
                    (0, r.jsx)(eH, {
                        variant: "heading-xxl/normal",
                        className: n4.wk,
                        children: Math.round(t.numVoiceMinutes),
                    }),
                ],
            }),
        ],
    });
}
function lr(e) {
    let { user: t, username: n } = e,
        [l, a] = c.useState(""),
        [s, i] = c.useState(!1),
        [o, d] = c.useState(!1),
        m = (0, n2.A)(t.id),
        h = l.length > 0 && l.length <= 250 && !s && !o,
        x = s ? T.intl.string(T.t.fjcCk5) : T.intl.formatToPlainString(T.t["0ZQw/X"], { name: n });
    async function g() {
        if (h) {
            d(!0);
            try {
                (await es(l, t.id), a(""), i(!0));
            } catch {
                (0, tB.P0)({ text: T.intl.string(T.t.fEptJP), variant: "critical" });
            } finally {
                d(!1);
            }
        }
    }
    return m
        ? (0, r.jsxs)("div", {
              className: n4.OG,
              children: [
                  (0, r.jsx)("textarea", {
                      className: n4.yB,
                      value: l,
                      onChange: (e) => a(e.target.value),
                      disabled: s || o,
                      placeholder: x,
                      "aria-label": x,
                  }),
                  (0, r.jsxs)("div", {
                      className: n4.n,
                      children: [
                          (0, r.jsx)(nZ.D, {
                              className: n4.KD,
                              onClick: function () {
                                  (0, n5.A)({ giftRecipient: t, analyticsLocations: [n1.A.CHECKPOINT] });
                              },
                              "aria-label": T.intl.string(T.t.Ve9Ge6),
                              children: (0, r.jsx)(n$.GiftIcon, { size: "refresh_sm", color: "currentColor" }),
                          }),
                          (0, r.jsx)(nZ.D, {
                              className: u()(n4.KD, { [n4.r9]: !h }),
                              onClick: g,
                              "aria-disabled": !h,
                              "aria-label": T.intl.string(T.t.oeb1vg),
                              children: (0, r.jsx)(n0.SendMessageIcon, { size: "refresh_sm", color: "currentColor" }),
                          }),
                      ],
                  }),
              ],
          })
        : null;
}
var la = n(9767);
function ls(e) {
    let { games: t } = e,
        n = Math.round(t?.totalDaysPlayed ?? 0),
        l = M(t?.totalDaysPlayedPercentile);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: la.dJ,
                children: [
                    (0, r.jsx)(nc, { icon: ty.CalendarIcon, children: T.intl.string(eB.default.oAoYbN) }),
                    (0, r.jsx)(ny, { value: n }),
                ],
            }),
            (0, r.jsx)(ns, {
                children:
                    null != l
                        ? T.intl.format(eB.default["4FXB/m"], {
                              numDays: n,
                              percent: l,
                              percentHook: (e, t) => (0, r.jsx)(nA, { children: e }, t),
                          })
                        : T.intl.format(eB.default.iCKjh6, { numDays: n }),
            }),
        ],
    });
}
function li(e) {
    let { numUsersPlayedEveryDay: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: la.dJ,
                children: [
                    (0, r.jsx)(nc, { icon: ty.CalendarIcon, children: T.intl.string(eB.default["dx4+NI"]) }),
                    (0, r.jsx)(n_, { value: t }),
                ],
            }),
            (0, r.jsx)(ns, { children: T.intl.format(eB.default["N32w+2"], { numUsers: L(t) }) }),
        ],
    });
}
function lc() {
    let e = (0, m.bG)([ee], () => ee.stats?.games),
        t = (0, m.bG)([ee], () => {
            var e;
            return ((e = ee.stats), Math.round(e?.games?.totalDaysPlayed ?? 0) > 0);
        }),
        n = (0, m.bG)([ee], () => ee.globalStats?.games?.numUsersPlayedEveryDay),
        l = !t && null != n;
    return (0, r.jsx)(t5, {
        children: (0, r.jsxs)("div", {
            className: la.kL,
            children: [
                (0, r.jsx)(eM, {
                    animatedSrc:
                        "https://cdn.discordapp.com/assets/content/e3289e9a0a7faf4db23c3fefa390126fc64a09120fdb701f9dea833dddf671ef.png",
                    staticSrc:
                        "https://cdn.discordapp.com/assets/content/312abde9b19fcf85150d507de3f33096992506459b895ab3ea8d92c8f1e04a28.png",
                    className: la.HW,
                }),
                (0, r.jsx)("div", {
                    className: la.C,
                    children: l ? (0, r.jsx)(li, { numUsersPlayedEveryDay: n }) : (0, r.jsx)(ls, { games: e }),
                }),
            ],
        }),
    });
}
var lo = n(828062);
function lu(e) {
    let { children: t } = e;
    return (0, r.jsx)(eH, { variant: "display-lg", className: lo.V, children: t });
}
var ld = n(109112),
    lm = n(311043),
    lh = n(883053);
function lx(e) {
    let { rank: t, className: n } = e;
    return (0, r.jsxs)(eK, { className: u()(lh.T, n), children: ["#", t] });
}
var lg = n(497357);
let lf = "/assets/e74703a44e087adc.svg";
function lj(e) {
    let {
            game: { id: t, name: n, coverImageHash: l },
            rank: a,
            label: s,
            shellImage: i,
            className: c,
        } = e,
        o = (0, m.bG)(
            [lm.A],
            () =>
                lm.A.getGame(t)?.getCoverURL(300) ??
                n3.Ay.getApplicationIconURL({ id: t, icon: l, size: 300, fallbackAvatar: !1 }),
        );
    return (0, r.jsxs)("div", {
        className: u()(lg.LO, c),
        children: [
            (0, r.jsxs)("div", {
                className: lg.Tn,
                children: [
                    (0, r.jsx)("img", { src: i, alt: "", className: lg.vf }),
                    null != o
                        ? (0, r.jsx)("img", { src: o, alt: "", className: lg.Qw })
                        : (0, r.jsx)("div", {
                              className: u()(lg.Qw, lg.uj),
                              children: (0, r.jsx)(ld._, { size: "lg" }),
                          }),
                    null != a && (0, r.jsx)(lx, { rank: a, className: lg.Tm }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: lg.zH,
                children: [
                    (0, r.jsx)(eH, { variant: "heading-xl/medium", className: lg.UU, lineClamp: 1, children: n }),
                    (0, r.jsx)(eH, { variant: "experimental/mono-md/bold", className: lg.Pf, children: s }),
                ],
            }),
        ],
    });
}
function lp(e) {
    let { numSessions: t, ...n } = e;
    return (0, r.jsx)(lj, { ...n, label: Math.round(t), shellImage: lf });
}
function lv(e) {
    let { numSessions: t, ...n } = e;
    return (0, r.jsx)(lj, {
        ...n,
        rank: 1,
        label: Math.round(t),
        shellImage: "/assets/fbe1ab9677ed007a.svg",
        className: lg.Ms,
    });
}
function lC(e) {
    return (0, r.jsx)(lj, { ...e, shellImage: lf });
}
var lA = n(842807);
let lE = [];
function lN(e) {
    let { gameStats: t } = e,
        n = Math.round(t?.totalGamesPlayed ?? 0),
        l = t?.games ?? lE;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: lA.wx,
                children: [
                    (0, r.jsxs)("div", {
                        className: lA.dJ,
                        children: [
                            (0, r.jsx)(nc, { icon: tR.GameControllerIcon, children: T.intl.string(eB.default.HM2fjf) }),
                            (0, r.jsx)(ny, { value: n }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: lA.h_,
                        children: (0, r.jsx)(ns, { children: T.intl.format(eB.default.aJMJ6b, { numGames: n }) }),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: lA.ag,
                children: l.map((e, t) => {
                    let { game: n, numSessions: l } = e;
                    return 0 === t
                        ? (0, r.jsx)(lv, { game: n, numSessions: l }, n.id)
                        : (0, r.jsx)(lp, { game: n, rank: t + 1, numSessions: l }, n.id);
                }),
            }),
        ],
    });
}
function lS(e) {
    let { gameStats: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: lA.wx,
                children: [
                    (0, r.jsxs)("div", {
                        className: lA.dJ,
                        children: [
                            (0, r.jsx)(t0, { className: lA.gi }),
                            (0, r.jsx)(lu, { children: T.intl.string(eB.default.qbCgI7) }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: lA.h_,
                        children: (0, r.jsx)(ns, { children: T.intl.string(eB.default["0oDeiM"]) }),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: u()(lA.ag, lA.Zs),
                children: eQ.Jb.map((e) => {
                    let { list: n, label: l } = e,
                        a = t[n][0];
                    return null != a ? (0, r.jsx)(lC, { game: a, label: T.intl.string(l) }, n) : null;
                }),
            }),
        ],
    });
}
function lI() {
    let e = (0, m.bG)([ee], () => ee.stats?.games),
        t = (0, m.bG)([ee], () => F(ee.stats)),
        n = (0, m.bG)([ee], () => ee.globalStats?.games),
        l = !t && null != n;
    return (0, r.jsx)(t5, {
        children: (0, r.jsx)("div", {
            className: lA.kL,
            children: l ? (0, r.jsx)(lS, { gameStats: n }) : (0, r.jsx)(lN, { gameStats: e }),
        }),
    });
}
var lb = n(167662);
function ly(e) {
    let { messages: t } = e,
        n = Math.round(t?.numMessagesSent ?? 0),
        l = M(t?.numMessagesSentPercentile);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: lb.dJ,
                children: [
                    (0, r.jsx)(nc, { icon: tO.ChatIcon, children: T.intl.string(tu.default.wWKySP) }),
                    (0, r.jsx)(ny, { value: n }),
                ],
            }),
            (0, r.jsx)(ns, {
                children:
                    null != l
                        ? T.intl.format(eB.default.w2CanS, {
                              numMessages: n,
                              percent: l,
                              percentHook: (e, t) => (0, r.jsx)(nA, { children: e }, t),
                          })
                        : T.intl.format(eB.default.cYCqz8, { numMessages: n }),
            }),
        ],
    });
}
function lT(e) {
    let { numWordsSent: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: lb.dJ,
                children: [
                    (0, r.jsx)(nc, { icon: tO.ChatIcon, children: T.intl.string(eB.default["2BuyVC"]) }),
                    (0, r.jsx)(n_, { value: t }),
                ],
            }),
            (0, r.jsx)(ns, { children: T.intl.format(eB.default.bAxEs2, { numWords: L(t) }) }),
        ],
    });
}
function lR() {
    let e = (0, m.bG)([ee], () => ee.stats?.messages),
        t = (0, m.bG)([ee], () => D(ee.stats)),
        n = (0, m.bG)([ee], () => ee.globalStats?.messages?.numWordsSent),
        l = !t && null != n;
    return (0, r.jsx)(t5, {
        children: (0, r.jsxs)("div", {
            className: lb.kL,
            children: [
                (0, r.jsx)(eM, {
                    animatedSrc:
                        "https://cdn.discordapp.com/assets/content/d2d8036bb6a32967893421f9956b9e8ed30abde474f68c1a34e824205549c5a1.png",
                    staticSrc:
                        "https://cdn.discordapp.com/assets/content/1dfd8684180df4216b23f0a61617250be8fcc12bc1970ac259892f34fbdb836d.png",
                    className: lb.HW,
                }),
                (0, r.jsx)("div", {
                    className: lb.C,
                    children: l ? (0, r.jsx)(lT, { numWordsSent: n }) : (0, r.jsx)(ly, { messages: e }),
                }),
            ],
        }),
    });
}
var l_ = n(548118),
    lO = n(224865);
let lM = l_.iu[l_.Ay.Sizes.XLARGE];
function lL(e) {
    let { guild: t, size: n } = e;
    return (0, r.jsx)(l_.Ay, {
        guild: t,
        size: l_.Ay.Sizes.XLARGE,
        iconSize: n,
        textScale: n / lM,
        className: lO.K,
        style: { width: n, height: n, borderRadius: 0 },
    });
}
var lP = n(140645);
function lk(e) {
    let { numVoiceMinutes: t, numMessagesSent: n } = e;
    return (0, r.jsxs)("div", {
        className: lP.M1,
        children: [
            (0, r.jsxs)("div", {
                className: lP.dJ,
                children: [
                    (0, r.jsx)(tk.MicrophoneIcon, { size: "md", color: "currentColor" }),
                    (0, r.jsx)(eH, { variant: "experimental/mono-md/bold", className: lP.Qq, children: Math.round(t) }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: lP.dJ,
                children: [
                    (0, r.jsx)(tO.ChatIcon, { size: "md", color: "currentColor" }),
                    (0, r.jsx)(eH, { variant: "experimental/mono-md/bold", className: lP.Qq, children: Math.round(n) }),
                ],
            }),
        ],
    });
}
var lw = n(972106);
let lD = [];
function lU(e) {
    let { guild: t, rank: n, iconSize: l = 100, children: a } = e;
    return (0, r.jsxs)("div", {
        className: lw.w_,
        children: [
            (0, r.jsxs)("div", {
                className: lw.jj,
                children: [
                    (0, r.jsx)(lx, { rank: n }),
                    (0, r.jsxs)("div", {
                        className: lw.gI,
                        children: [
                            (0, r.jsx)(eH, {
                                variant: "heading-xxl/medium",
                                className: lw.J5,
                                lineClamp: 1,
                                children: t.name,
                            }),
                            a,
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(lL, { guild: t, size: l }),
        ],
    });
}
function lG(e) {
    let { guild: t, numVoiceMinutes: n, numMessagesSent: l } = e;
    return (0, r.jsx)(lU, {
        guild: t,
        rank: 1,
        iconSize: 140,
        children: (0, r.jsx)(lk, { numVoiceMinutes: n, numMessagesSent: l }),
    });
}
function lF(e) {
    let { guilds: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: lw.wx,
                children: [
                    (0, r.jsxs)("div", {
                        className: lw.R_,
                        children: [
                            (0, r.jsx)(nc, { icon: tL.R, children: T.intl.string(eB.default.Mb5E6r) }),
                            (0, r.jsx)(lu, { children: T.intl.string(tu.default.F0fkrh) }),
                        ],
                    }),
                    (0, r.jsx)(ns, { children: T.intl.string(eB.default.RL2mWA) }),
                ],
            }),
            (0, r.jsx)("div", {
                className: lw.Pl,
                children: t.map((e, t) => {
                    let { guild: n, numMessagesSent: l, numVoiceMinutes: a } = e;
                    return 0 === t
                        ? (0, r.jsx)(lG, { guild: n, numMessagesSent: l ?? 0, numVoiceMinutes: a ?? 0 }, n.id)
                        : (0, r.jsx)(lU, { guild: n, rank: t + 1 }, n.id);
                }),
            }),
        ],
    });
}
function lH(e) {
    let { guilds: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: lw.wx,
                children: [
                    (0, r.jsxs)("div", {
                        className: lw.R_,
                        children: [
                            (0, r.jsx)(t0, { className: lw.gi }),
                            (0, r.jsx)(lu, { children: T.intl.string(tu.default.F0fkrh) }),
                        ],
                    }),
                    (0, r.jsx)(ns, { children: T.intl.string(eB.default.bhnqop) }),
                ],
            }),
            (0, r.jsx)("div", {
                className: lw.Pl,
                children: t.map((e, t) => (0, r.jsx)(lU, { guild: e, rank: t + 1 }, e.id)),
            }),
        ],
    });
}
function lz() {
    let e = (0, m.bG)([ee], () => ee.stats?.guilds?.guilds ?? lD),
        t = (0, m.bG)([ee], () => ee.globalStats?.guilds?.guildsByMembers),
        n = 0 === e.length && null != t;
    return (0, r.jsx)(t5, {
        children: (0, r.jsx)("div", {
            className: lw.kL,
            children: n ? (0, r.jsx)(lH, { guilds: t }) : (0, r.jsx)(lF, { guilds: e }),
        }),
    });
}
var lK = n(155094);
function lB(e) {
    let { icon: t, title: n, description: l } = e;
    return (0, r.jsx)(t5, {
        children: (0, r.jsxs)("div", {
            className: lK.Q,
            children: [(0, r.jsx)(nc, { icon: t, children: n }), (0, r.jsx)(ns, { children: l })],
        }),
    });
}
var lV = n(7584),
    lY = n(33293),
    lW = n(498137),
    lq = n(192339),
    lX = n(144103),
    lJ = n(834109),
    lQ = n(48763);
function lZ(e) {
    let { character: t, power: n } = e,
        l = (0, ec.o)(t);
    return (0, r.jsxs)(lW.A, {
        cardColorPalette: l,
        size: lQ.W.LG,
        children: [
            (0, r.jsx)(lq.A, {}),
            (0, r.jsx)(lJ.A, { variant: "full" }),
            null != n
                ? (0, r.jsx)(lX.A, {
                      powerLevel: (0, nr.Le)(n.powerLevel),
                      powerLevelUnits: (0, nr.sX)(n.powerLevelPercentile),
                  })
                : null,
            (0, r.jsx)(lY.A, { character: t }),
        ],
    });
}
var l$ = n(58410);
function l0() {
    let e = (0, m.bG)([ee], () => ee.stats),
        t = (0, m.bG)([ee], () => ee.character),
        n = e?.guilds?.guilds[0],
        l = e?.emojis?.emojis[0],
        a = e?.games?.games[0]?.game,
        s =
            null != a
                ? n3.Ay.getApplicationIconURL({ id: a.id, icon: a.iconHash, size: 40, fallbackAvatar: !1 })
                : void 0;
    return (0, r.jsx)(t5, {
        children: (0, r.jsxs)("div", {
            className: l$.z,
            children: [
                null != t ? (0, r.jsx)(lZ, { character: t, power: e?.power }) : null,
                (0, r.jsxs)("div", {
                    className: l$.zH,
                    children: [
                        (0, r.jsxs)("div", {
                            className: l$.R_,
                            children: [
                                (0, r.jsx)(nc, { icon: t7.M, children: T.intl.string(tu.default.ir6nEQ) }),
                                (0, r.jsx)(eH, {
                                    variant: "display-lg",
                                    className: l$.Vy,
                                    children: T.intl.string(tu.default.y4M1na),
                                }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: l$.M1,
                            children: [
                                (0, r.jsx)(l1, {
                                    label: T.intl.string(eB.default.MSrV9z),
                                    value: e?.voice?.totalVoiceMinutes,
                                }),
                                (0, r.jsx)(l1, {
                                    label: T.intl.string(tu.default.wWKySP),
                                    value: e?.messages?.numMessagesSent,
                                }),
                                (0, r.jsx)(l1, {
                                    label: T.intl.string(eB.default["f5S+pt"]),
                                    value: n?.numDaysInteracted,
                                }),
                                (0, r.jsx)(l5, {
                                    label: T.intl.string(tu.default["8XPMJj"]),
                                    icon: null != n ? (0, r.jsx)(lL, { guild: n.guild, size: 40 }) : (0, r.jsx)(l2, {}),
                                    name: null != n ? n.guild.name : T.intl.string(eB.default.GultYJ),
                                }),
                                (0, r.jsx)(l1, {
                                    label: T.intl.string(eB.default.xVSlv3),
                                    value: e?.emojis?.numEmojisSent,
                                }),
                                (0, r.jsx)(l5, {
                                    label: T.intl.string(tu.default["3sARW7"]),
                                    icon:
                                        null != l
                                            ? (0, r.jsx)(nv.A, {
                                                  emojiId: l.id,
                                                  emojiName: null == l.id ? l.name : void 0,
                                                  animated: l.animated,
                                                  alt: "",
                                                  className: l$.Kk,
                                              })
                                            : (0, r.jsx)(l2, {}),
                                    name:
                                        null == l
                                            ? T.intl.string(T.t.PoWNfe)
                                            : null == l.id
                                              ? lV.Ay.convertSurrogateToName(l.name)
                                              : `:${l.name}:`,
                                }),
                                (0, r.jsx)(l1, {
                                    label: T.intl.string(eB.default.y2Y1DD),
                                    value: e?.games?.totalDaysPlayed,
                                }),
                                (0, r.jsx)(l5, {
                                    label: T.intl.string(tu.default.RbT4Zq),
                                    icon:
                                        null != s
                                            ? (0, r.jsx)("img", { src: s, alt: "", className: u()(l$.Kk, l$.Gt) })
                                            : (0, r.jsx)(l2, {}),
                                    name: null != a ? a.name : T.intl.string(T.t.PoWNfe),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
function l1(e) {
    let { label: t, value: n } = e;
    return (0, r.jsxs)("div", {
        className: l$.dJ,
        children: [
            (0, r.jsx)(eH, { variant: "experimental/heading-md/semibold", children: t }),
            (0, r.jsx)(eH, {
                variant: "heading-xxl/normal",
                className: l$.wk,
                children: Math.round(n ?? 0).toLocaleString(T.intl.currentLocale),
            }),
        ],
    });
}
function l5(e) {
    let { label: t, icon: n, name: l } = e;
    return (0, r.jsxs)("div", {
        className: u()(l$.dJ, l$.u4),
        children: [
            (0, r.jsx)(eH, { variant: "experimental/heading-md/semibold", children: t }),
            (0, r.jsxs)("div", {
                className: l$.AS,
                children: [
                    n,
                    (0, r.jsx)(eH, { variant: "heading-xl/medium", lineClamp: 1, className: l$.TJ, children: l }),
                ],
            }),
        ],
    });
}
function l2() {
    return (0, r.jsx)("div", {
        className: u()(l$.Kk, l$.Gc),
        children: (0, r.jsx)(ld._, { size: "md", color: "currentColor" }),
    });
}
var l3 = n(651946);
function l4() {
    let e = (0, m.bG)([ee], () => ee.stats?.guilds?.guilds[0]),
        t = Math.round(e?.numDaysInteracted ?? 0),
        n = M(e?.numDaysInteractedPercentile);
    return (0, r.jsx)(t5, {
        children: (0, r.jsxs)("div", {
            className: l3.kL,
            children: [
                (0, r.jsxs)("div", {
                    className: l3.wx,
                    children: [
                        (0, r.jsxs)("div", {
                            className: l3.R_,
                            children: [
                                (0, r.jsx)(nc, { icon: tL.R, children: T.intl.string(eB.default["M+a+t1"]) }),
                                (0, r.jsx)(ny, { value: t }),
                            ],
                        }),
                        (0, r.jsx)(ns, {
                            children:
                                null != n
                                    ? T.intl.format(eB.default.sIDTV1, {
                                          numDays: t,
                                          percent: n,
                                          percentHook: (e, t) => (0, r.jsx)(nA, { children: e }, t),
                                      })
                                    : T.intl.format(eB.default.nLCUQ4, { numDays: t }),
                        }),
                    ],
                }),
                null != e &&
                    (0, r.jsx)("div", {
                        className: l3.bU,
                        children: (0, r.jsxs)("div", {
                            className: l3.Nr,
                            style: { width: 360 },
                            children: [
                                (0, r.jsx)(lL, { guild: e.guild, size: 360 }),
                                (0, r.jsxs)("div", {
                                    className: l3.zH,
                                    children: [
                                        (0, r.jsx)(eH, {
                                            variant: "heading-xxl/medium",
                                            className: l3.J5,
                                            lineClamp: 1,
                                            children: e.guild.name,
                                        }),
                                        (0, r.jsx)(lk, {
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
var l8 = n(270704);
function l7(e) {
    let { voice: t } = e,
        n = Math.round(t?.totalVoiceMinutes ?? 0),
        l = M(t?.totalVoiceMinutesPercentile);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: l8.dJ,
                children: [
                    (0, r.jsx)(nc, {
                        icon: tk.MicrophoneIcon,
                        children: T.intl.formatToPlainString(tu.default.UZbUtl, { numMinutes: n }),
                    }),
                    (0, r.jsx)(ny, { value: n, alignment: "center" }),
                ],
            }),
            (0, r.jsx)(ns, {
                children:
                    null != l
                        ? T.intl.format(eB.default["7gtpnV"], {
                              numMinutes: n,
                              percent: l,
                              percentHook: (e, t) => (0, r.jsx)(nA, { children: e }, t),
                          })
                        : T.intl.format(eB.default.Y3poDW, { numMinutes: n }),
            }),
        ],
    });
}
function l6(e) {
    let { peakHour: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: l8.dJ,
                children: [
                    (0, r.jsx)(nc, { icon: tk.MicrophoneIcon, children: T.intl.string(eB.default.ZCwB8J) }),
                    (0, r.jsx)(n_, { value: t }),
                ],
            }),
            (0, r.jsx)(ns, { children: T.intl.string(eB.default.huiTne) }),
        ],
    });
}
function l9() {
    let e = (0, m.bG)([ee], () => ee.stats?.voice),
        t = (0, m.bG)([ee], () => w(ee.stats)),
        n = (0, m.bG)([ee], () => ee.globalStats?.voice?.peakHourUtc),
        l = (function (e) {
            if (null == e) return null;
            let t = new Date();
            t.setUTCHours(e, 0, 0, 0);
            let n = new Intl.DateTimeFormat(T.intl.currentLocale, R)
                    .formatToParts(t)
                    .find((e) => "dayPeriod" === e.type)?.value,
                l = null == n || _.test(n) ? R : { ...R, hourCycle: "h23" },
                r = new Intl.DateTimeFormat(T.intl.currentLocale, l).format(t);
            return { value: r.replace(O, ""), label: r };
        })(n)?.value,
        a = !t && null != l;
    return (0, r.jsxs)(t5, {
        children: [
            (0, r.jsx)(eM, {
                animatedSrc:
                    "https://cdn.discordapp.com/assets/content/04746dc04eab575d0168935af2b1b3f97e2e00439f84bd0f0474276e0c5a81dc.png",
                staticSrc:
                    "https://cdn.discordapp.com/assets/content/c4c2d6b631bff3da4e4bb9afffc8f89bc9fb6f76a2fcd824f8a7af83eb7f1e6b.png",
                className: l8.Tp,
            }),
            (0, r.jsx)("div", {
                className: l8.Qs,
                children: a ? (0, r.jsx)(l6, { peakHour: l }) : (0, r.jsx)(l7, { voice: e }),
            }),
        ],
    });
}
function re(e) {
    let { route: t, onNextStep: n, onPreviousStep: l } = e;
    if (t === eu.gr.HOME) return (0, r.jsx)(np, { onStart: n });
    if (t === eu.gr.INTRODUCTION) return (0, r.jsx)(t3, {});
    let { statsScreen: a } = (0, eu.UG)(t);
    switch (a) {
        case eu.oI.VOICE_INTRO:
            return (0, r.jsx)(lB, {
                icon: tk.MicrophoneIcon,
                title: T.intl.string(eB.default["/7XYsa"]),
                description: T.intl.string(eB.default["X8/G/o"]),
            });
        case eu.oI.VOICE:
            return (0, r.jsx)(l9, {});
        case eu.oI.MESSAGES_INTRO:
            return (0, r.jsx)(lB, {
                icon: tO.ChatIcon,
                title: T.intl.string(eB.default["2BuyVC"]),
                description: T.intl.string(eB.default["kF+Y3a"]),
            });
        case eu.oI.MESSAGES:
            return (0, r.jsx)(lR, {});
        case eu.oI.SERVERS_INTRO:
            return (0, r.jsx)(lB, {
                icon: tL.R,
                title: T.intl.string(tu.default.F0fkrh),
                description: T.intl.string(eB.default.Xg82Gy),
            });
        case eu.oI.SERVERS:
            return (0, r.jsx)(lz, {});
        case eu.oI.TOP_SERVER:
            return (0, r.jsx)(l4, {});
        case eu.oI.EMOJI_INTRO:
            return (0, r.jsx)(lB, {
                icon: eU.o,
                title: T.intl.string(eB.default.ZTDCIv),
                description: T.intl.string(eB.default.y8Sr8J),
            });
        case eu.oI.EMOJI:
            return (0, r.jsx)(nq, {});
        case eu.oI.GAMES_INTRO:
            return (0, r.jsx)(lB, {
                icon: tR.GameControllerIcon,
                title: T.intl.string(eB.default.HM2fjf),
                description: T.intl.string(eB.default.LQiFqJ),
            });
        case eu.oI.GAMES:
            return (0, r.jsx)(lI, {});
        case eu.oI.GAME_TIME:
            return (0, r.jsx)(lc, {});
        case eu.oI.SQUAD:
        case eu.oI.SIDEKICK:
            return (0, r.jsx)(lt, { route: t, onNextStep: n, onPreviousStep: l });
        case eu.oI.SUMMARY:
            return (0, r.jsx)(l0, {});
        case eu.oI.SHARE:
            return (0, r.jsx)(nd, {});
        default:
            return null;
    }
}
var rt = n(650809),
    rn = n(866665),
    rl = n(428692);
let rr = {
    [eu.s9.FACE]: { icon: tk.MicrophoneIcon, label: T.t.K3lovD },
    [eu.s9.OUTFIT]: { icon: tO.ChatIcon, label: T.t.OIgYlQ },
    [eu.s9.HEADWEAR]: { icon: tL.R, label: T.t["7hB4kg"] },
    [eu.s9.SHOES]: { icon: eU.o, label: T.t.sMOuuS },
    [eu.s9.WEARABLE]: { icon: tR.GameControllerIcon, label: T.t.URyqtP },
    [eu.s9.AURA]: { icon: ty.CalendarIcon, label: eB.default.oAoYbN },
    [eu.s9.ASSEMBLED]: { icon: nQ.$, label: T.t.TdEu5X },
    [eu.s9.FINALIZE]: { icon: rt.PaintPaletteIcon, label: eB.default.gmMD2I },
    [eu.s9.SUMMARY]: { icon: t7.M, label: tu.default.y4M1na },
};
function ra(e) {
    let {
            step: { icon: t, label: n, route: l },
            disabled: a,
            onRouteClick: s,
        } = e,
        i = T.intl.string(n);
    return (0, r.jsx)(rn.m, {
        text: i,
        ariaHidden: !0,
        children: (0, r.jsxs)(nZ.D, {
            className: u()(rl.PM, rl.CD, { [rl.vk]: !a }),
            onClick: () => s(l),
            "aria-label": i,
            "aria-disabled": a,
            children: [
                (0, r.jsx)("div", { className: u()(rl.Om, rl.hZ) }),
                (0, r.jsx)(t, { size: "xs", color: "currentColor", className: rl.RQ }),
            ],
        }),
    });
}
function rs(e) {
    let { flow: t, stats: n, activeRoute: l, isRouteBlocked: a, onRouteClick: s } = e,
        i = (function (e, t) {
            let n = [];
            for (let l of eg({ flow: e, stats: t })) {
                let { characterStage: e } = (0, eu.UG)(l),
                    t = rr[e];
                null != t && n.at(-1)?.stage !== e && n.push({ ...t, stage: e, route: l });
            }
            return n;
        })(t, n),
        { characterStage: o } = (0, eu.UG)(l),
        u = i.findIndex((e) => {
            let { stage: t } = e;
            return t === o;
        }),
        [d, h] = c.useState(u);
    u > d && h(u);
    let x = (0, m.bG)([ee], () => ee.isSaving);
    return -1 === u
        ? null
        : (0, r.jsx)("div", {
              className: rl.qB,
              role: "group",
              "aria-label": T.intl.formatToPlainString(eB.default.iyTfFt, { stepNumber: u + 1, stepCount: i.length }),
              children: i.map((e, t) => {
                  let { icon: n } = e;
                  return t === u
                      ? (0, r.jsx)(
                            rn.m,
                            {
                                text: T.intl.string(e.label),
                                children: (0, r.jsx)("div", {
                                    className: rl.PM,
                                    children: (0, r.jsx)(n, { size: "xs", color: "currentColor" }),
                                }),
                            },
                            e.stage,
                        )
                      : t <= d
                        ? (0, r.jsx)(ra, { step: e, disabled: x || a, onRouteClick: s }, e.stage)
                        : (0, r.jsx)(
                              "div",
                              { className: rl.PM, children: (0, r.jsx)("div", { className: rl.Om }) },
                              e.stage,
                          );
              }),
          });
}
function ri(e) {
    let { stage: t } = e;
    return (0, r.jsxs)(t5, {
        children: [
            (0, r.jsx)(eG.E, { color: "text-muted", variant: "text-md/medium", children: "Character Stage" }),
            (0, r.jsx)(eG.E, { color: "text-muted", variant: "text-md/medium", children: t }),
        ],
    });
}
var rc = n(517782);
function ro(e) {
    let t,
        n,
        { didPlayerShareDataWithDiscord: l, onClose: a } = e;
    ((0, m.bG)([ee], () => ee.fetchState),
        (t = (0, m.bG)([ee], () => ee.stats?.games?.games)),
        (n = (0, c.useMemo)(
            () =>
                t?.map((e) => {
                    let { game: t } = e;
                    return t.id;
                }) ?? [],
            [t],
        )),
        (0, c.useEffect)(() => {
            let { fetchState: e } = ee;
            (e === K.INIT || e === K.ERROR) && er();
        }, []),
        (0, c.useEffect)(() => {
            (0, eE.E)(n);
        }, [n]),
        c.useEffect(() => {
            f.h.dispatch({ type: "CHECKPOINT_RESET_EDITED_CHARACTER" });
        }, []));
    let s = l ? eu.Np.SHARED_DATA : eu.Np.NO_SHARED_DATA,
        [i, o] = c.useState(eu.gr.HOME),
        { characterStage: g, statsScreen: j } = (0, eu.UG)(i),
        p = i === eu.gr.HOME || null != j,
        v = p || i === eu.gr.INTRODUCTION,
        C = (0, m.bG)([ee], () => (ee.fetchState === K.SUCCESS ? ee.stats : void 0)),
        A = (0, m.bG)([ee], () => ee.character),
        E = c.useMemo(
            () =>
                (function (e, t) {
                    switch (e) {
                        case eu.gr.SUMMARY:
                        case eu.gr.SHARE:
                            let n = (0, ec.o)(t),
                                { primaryBackgroundColor: l, shadowColor: r } = (0, ec.j)(n);
                            return {
                                ...tj,
                                "--custom-checkpoint-primary": l,
                                "--custom-checkpoint-button-border": l,
                                "--custom-checkpoint-button-shadow": r,
                                "--custom-checkpoint-background-gradient-start": l,
                            };
                        default:
                            return tj;
                    }
                })(i, A),
            [i, A],
        ),
        N = eN(d),
        { blockedTraits: S } = eA(),
        I = (0, eo._K)(i, S),
        b = c.useCallback(
            (e) => {
                let t = (function (e) {
                    let { flow: t, stats: n, currentRoute: l, direction: r } = e,
                        a = eg({ flow: t, stats: n }),
                        s = a.indexOf(l);
                    return -1 === s ? eu.gr.INTRODUCTION : (a[s + r] ?? null);
                })({ flow: s, stats: C, currentRoute: i, direction: e });
                if (null == t) {
                    1 === e && a();
                    return;
                }
                (eu.cy.has(i) || N(), o(t));
            },
            [i, s, a, N, C],
        ),
        y = c.useCallback(() => b(-1), [b]),
        R = c.useCallback(() => b(1), [b]),
        _ = c.useCallback(
            (e) => {
                ee.isSaving || I || (N(), o(e));
            },
            [I, N],
        );
    return (0, r.jsx)(h.N, {
        theme: eb.NJ.DARK,
        children: (e) =>
            (0, r.jsxs)("div", {
                className: u()(e, rc.kL),
                style: E,
                "aria-label": T.intl.string(tu.default["CdU/PF"]),
                children: [
                    (0, r.jsx)(eT, { isVisible: p }),
                    (0, r.jsx)("div", { className: u()(rc.qd, { [rc.R]: p }), children: (0, r.jsx)(ri, { stage: g }) }),
                    (0, eu.Rq)(i) && (0, r.jsx)("div", { className: rc.qd, children: (0, r.jsx)(tD, { route: i }) }),
                    v &&
                        (0, r.jsx)("div", {
                            className: rc.qd,
                            children: (0, r.jsx)(re, { route: i, onNextStep: R, onPreviousStep: y }),
                        }),
                    (0, r.jsx)(eD, { activeRoute: i }),
                    (0, r.jsxs)("div", {
                        className: rc.$s,
                        children: [
                            (0, r.jsx)(tF, {}),
                            (0, r.jsx)(e_, {
                                size: "sm",
                                "aria-label": T.intl.string(T.t.cpT0Cq),
                                onClick: a,
                                children: (0, r.jsx)(x.P, { size: "xs", color: "currentColor" }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(rs, { flow: s, stats: C, activeRoute: i, isRouteBlocked: I, onRouteClick: _ }),
                    (0, r.jsx)(t$, { activeRoute: i, isRouteBlocked: I, onBack: y, onNext: R }),
                ],
            }),
    });
}
function ru() {
    return !!i._.hasSubscribers(et.jej.MODAL_CLOSE) && (i._.dispatch(et.jej.MODAL_CLOSE), !0);
}
function rd(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    (s.default.track(et.HAw.CHECKPOINT_STARTED, { source: e }),
        (0, a.B8)(
            (e) => {
                let { closeLayer: n } = e;
                return (0, r.jsx)(ro, { didPlayerShareDataWithDiscord: t, onClose: n });
            },
            { onEscape: ru },
        ));
}
