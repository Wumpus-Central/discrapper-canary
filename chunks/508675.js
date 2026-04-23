"use strict";
n.d(t, { Ay: () => eI, o2: () => eu }), n(321073);
var r,
    i,
    s = n(284009),
    a = n.n(s),
    o = n(735438),
    l = n.n(o),
    u = n(989349),
    c = n.n(u),
    d = n(61090),
    _ = n(311907),
    f = n(73153),
    p = n(283047),
    h = n(723176),
    E = n(154049),
    m = n(995604),
    g = n(710026),
    A = n(49463),
    I = n(98318),
    T = n(492494),
    S = n(384684),
    y = n(46467),
    N = n(773669),
    v = n(617617),
    C = n(696451),
    O = n(184989),
    R = n(317525),
    b = n(71393),
    D = n(711014),
    L = n(287809),
    w = n(927813),
    M = n(690521),
    P = n(403362),
    x = n(257120),
    k = n(661191),
    U = n(84144),
    G = n(770335),
    F = n(608960),
    V = n(7584),
    B = n(354430),
    H = n(635222),
    j = n(307731),
    Y = n(652215),
    W = n(732139),
    K = n(355097);
let $ = [
        W.R2.TOP_GUILD_EMOJI.toString(),
        W.R2.FAVORITES.toString(),
        W.R2.RECENT.toString(),
        W.R2.CUSTOM.toString(),
    ].concat(V.Ay.getCategories()),
    z = { pendingUsages: [], emojiReactionPendingUsages: [], expandedSectionsByGuildIds: new Set() };
class q {
    id;
    _userId;
    _emojis = null;
    _emojiMap;
    _emoticons = null;
    _usableEmojis = null;
    _hiddenEmojiIds = null;
    _canSeeServerSubIAP = !1;
    constructor(e, t, n, r = !1) {
        (this.id = e), (this._userId = t), (this._emojiMap = n), (this._canSeeServerSubIAP = r);
    }
    getEmoji(e) {
        return this._emojiMap[e];
    }
    getUsableEmoji(e) {
        let t = this.getEmoji(e);
        return null != t && this.isUsable(t) ? t : void 0;
    }
    isUsable(e) {
        if (0 === e.roles.length) return !0;
        let t = C.Ay.getMember(this.id, this._userId);
        return null != t && !!(t.roles.some((t) => e.roles.includes(t)) || (0, T.kT)(e));
    }
    emojiIds() {
        return k.default.keys(this._emojiMap);
    }
    get emojis() {
        return null == this._emojis && (this._emojis = Object.values(this._emojiMap)), this._emojis;
    }
    get emoticons() {
        return (
            null == this._emoticons && (this._emoticons = this.usableEmojis.filter((e) => !e.require_colons)),
            this._emoticons
        );
    }
    _computeEmojiUsability() {
        if (null != this._usableEmojis && null != this._hiddenEmojiIds) return;
        let e = [],
            t = new Set();
        for (let n of this.emojis) this.isUsable(n) ? e.push(n) : t.add(n.id);
        (this._usableEmojis = l().sortBy(e, (e) => e.name)), (this._hiddenEmojiIds = t);
    }
    get usableEmojis() {
        return this._computeEmojiUsability(), this._usableEmojis;
    }
    get hiddenEmojiIds() {
        return this._computeEmojiUsability(), this._hiddenEmojiIds;
    }
}
let X = k.default.fromTimestamp(Date.now() - 60 * w.A.Millis.DAY),
    Q = [],
    Z = [],
    J = new Set(),
    ee = 2,
    et = [...$],
    en = {},
    er = {},
    ei = new Map();
function es(e) {
    let t = ea()[e];
    return null != t ? (en[t]?.getUsableEmoji(e) ?? void 0) : void 0;
}
function ea() {
    if ((eo(), null == er)) for (let e in ((er = {}), en)) for (let t of en[e].emojiIds()) er[t] = e;
    return er;
}
async function eo() {
    if (0 !== ee) return;
    let e = h.A.database();
    if (null == e) return;
    ee = 1;
    let t = await (0, E.ES)("EmojiStore.loadSavedEmojis", () =>
        d.A.timeAsync("\uD83D\uDCBE", "loadSavedEmojis", () => m.A.getAsync(e)),
    );
    (ee = 2), null != t && f.h.dispatch({ type: "CACHED_EMOJIS_LOADED", emojis: t });
}
let el = (e) => ({
    computeBonus: () => 100,
    lookupKey: (e) => V.Ay.getByName(e) ?? es(e),
    afterCompute: () => {
        e(), (et = [...$]), l().some(en, (e) => e.usableEmojis.length > 0) || et.splice($.indexOf(W.R2.CUSTOM), 1);
    },
    numFrequentlyItems: 42,
});
class eu {
    static _lastInstance = null;
    favorites = null;
    favoriteNamesAndIds = null;
    topEmojis = null;
    guildId;
    escapedEmoticonNames;
    disambiguatedEmoji = [];
    emoticonRegex = null;
    frequentlyUsed = null;
    frequentlyUsedReactionEmojis = null;
    frequentlyUsedReactionNamesAndIds = null;
    unicodeAliases = new Map();
    customEmojis = new Map();
    customEmojisByGroup = new Map();
    emoticonsByName = new Map();
    emojisByName = new Map();
    emojisById = new Map();
    newlyAddedEmoji = new Map();
    constructor(e) {
        this.guildId = e;
        const t = new Map(),
            n = [],
            r = (e) => {
                e.names.slice(1).forEach((t) => this.unicodeAliases.set(t, e.name));
                let n = t.get(e.name) ?? 0;
                a()(0 === n, "Expected existing count to be 0"),
                    t.set(e.name, n + 1),
                    this.emojisByName.set(e.name, e),
                    this.disambiguatedEmoji.push(e);
            },
            i = (e) => {
                let n,
                    r = e.name,
                    i = t.get(r) ?? 0;
                if ((t.set(r, i + 1), i > 0)) {
                    let t = `${r}~${i}`;
                    n = { ...e, name: t, originalName: r };
                } else n = e;
                this.emojisByName.set(n.name, n), this.emojisById.set(n.id, n), this.customEmojis.set(n.name, n);
                let s = e.guildId;
                this.customEmojisByGroup.has(s)
                    ? this.customEmojisByGroup.get(s)?.push(n)
                    : this.customEmojisByGroup.set(s, [n]),
                    k.default.compare(e.id, X) >= 0 &&
                        (this.newlyAddedEmoji.has(s)
                            ? this.newlyAddedEmoji.get(s)?.push(n)
                            : this.newlyAddedEmoji.set(s, [n])),
                    this.disambiguatedEmoji.push(n);
            },
            s = (e) => {
                this.emoticonsByName.has(e.name) || (n.push(x.A.escape(e.name)), this.emoticonsByName.set(e.name, e));
            };
        V.Ay.forEach(r);
        const o = (e) => {
            let t = en[null == e ? Y.eGj : e];
            null != t && (l().each(t.usableEmojis, i), l().each(t.emoticons, s));
        };
        for (const e of (o(this.guildId), this.newlyAddedEmoji.keys())) {
            const t = this.newlyAddedEmoji.get(e);
            if (null == t) {
                this.newlyAddedEmoji.set(e, []);
                continue;
            }
            this.newlyAddedEmoji.set(e, t.sort((e, t) => k.default.compare(t.id, e.id)).slice(0, 3));
        }
        D.Ay.getFlattenedGuildIds().forEach((e) => {
            e !== this.guildId && o(e);
        }),
            (this.escapedEmoticonNames = n.join("|"));
    }
    static get(e) {
        return (
            void 0 === e && (e = null),
            (null == eu._lastInstance || eu._lastInstance.guildId !== e) && (eu._lastInstance = new eu(e)),
            eu._lastInstance
        );
    }
    static reset() {
        eu._lastInstance = null;
    }
    static resetFrequentlyUsed() {
        null != eu._lastInstance && (eu._lastInstance.frequentlyUsed = null);
    }
    static resetFrequentlyUsedReactionEmojis() {
        null != eu._lastInstance &&
            ((eu._lastInstance.frequentlyUsedReactionEmojis = null),
            (eu._lastInstance.frequentlyUsedReactionNamesAndIds = null));
    }
    static clear(e) {
        null != eu._lastInstance && eu._lastInstance.guildId === e && (eu._lastInstance = null);
    }
    getDisambiguatedEmoji() {
        return this.disambiguatedEmoji;
    }
    getCustomEmoji() {
        return this.customEmojis;
    }
    getGroupedCustomEmoji() {
        return this.customEmojisByGroup;
    }
    getByName(e) {
        let t = this.emojisByName.get(e);
        if (null != t) return t;
        let n = this.unicodeAliases.get(e);
        if (null != n) return this.emojisByName.get(n);
    }
    getEmoticonByName(e) {
        return this.emoticonsByName.get(e);
    }
    getById(e) {
        return this.emojisById.get(e);
    }
    getCustomEmoticonRegex() {
        return (
            null == this.emoticonRegex &&
                null != this.escapedEmoticonNames &&
                "" !== this.escapedEmoticonNames &&
                (this.emoticonRegex = RegExp(`^\\b(${this.escapedEmoticonNames})\\b`)),
            this.emoticonRegex
        );
    }
    getFrequentlyUsedEmojisWithoutFetchingLatest() {
        if (null != this.frequentlyUsed) return this.frequentlyUsed;
        let e = ec.frequently.map((e) => (null != e.id ? this.getById(e.id) : V.Ay.getByName(e.name))).filter(P.Vq),
            t = (0, H.A)(e);
        return (this.frequentlyUsed = [...t.values()]), this.frequentlyUsed;
    }
    rebuildFrequentlyUsedReactionsEmojisWithoutFetchingLatest() {
        if (null != this.frequentlyUsedReactionEmojis && null != this.frequentlyUsedReactionNamesAndIds)
            return {
                frequentlyUsedReactionEmojis: this.frequentlyUsedReactionEmojis,
                frequentlyUsedReactionNamesAndIds: this.frequentlyUsedReactionNamesAndIds,
            };
        let e = ed.frequently.map((e) => (null != e.id ? this.getById(e.id) : V.Ay.getByName(e.name))).filter(P.Vq),
            t = (0, H.A)(e);
        return (
            (this.frequentlyUsedReactionEmojis = [...t.values()]),
            (this.frequentlyUsedReactionNamesAndIds = new Set(t.keys())),
            {
                frequentlyUsedReactionEmojis: this.frequentlyUsedReactionEmojis,
                frequentlyUsedReactionNamesAndIds: this.frequentlyUsedReactionNamesAndIds,
            }
        );
    }
    getFrequentlyUsedReactionEmojisWithoutFetchingLatest() {
        return this.rebuildFrequentlyUsedReactionsEmojisWithoutFetchingLatest().frequentlyUsedReactionEmojis;
    }
    isFrequentlyUsedReactionEmojiWithoutFetchingLatest(e) {
        let { frequentlyUsedReactionNamesAndIds: t } = this.rebuildFrequentlyUsedReactionsEmojisWithoutFetchingLatest();
        if (null != e.id) return t.has(e.id);
        let n = V.Ay.convertSurrogateToBase(e.surrogates) ?? e;
        return t.has(n.name);
    }
    rebuildFavoriteEmojisWithoutFetchingLatest() {
        if (null != this.favorites && null != this.favoriteNamesAndIds)
            return { favorites: this.favorites, favoriteNamesAndIds: this.favoriteNamesAndIds };
        let e = (v.A.frecencyWithoutFetchingLatest.favoriteEmojis?.emojis ?? [])
                .map((e) => this.getById(e) ?? V.Ay.getByName(e))
                .filter(P.Vq),
            t = (0, H.A)(e);
        return (
            (this.favorites = [...t.values()]),
            (this.favoriteNamesAndIds = new Set(t.keys())),
            { favorites: this.favorites, favoriteNamesAndIds: this.favoriteNamesAndIds }
        );
    }
    get favoriteEmojisWithoutFetchingLatest() {
        return this.rebuildFavoriteEmojisWithoutFetchingLatest().favorites;
    }
    isFavoriteEmojiWithoutFetchingLatest = (e) => {
        if (null == e) return !1;
        let { favoriteNamesAndIds: t } = this.rebuildFavoriteEmojisWithoutFetchingLatest();
        if (null != e.id) return t.has(e.id);
        let n = V.Ay.convertSurrogateToBase(e.surrogates) ?? e;
        return t.has(n.name);
    };
    getEmojiInPriorityOrderWithoutFetchingLatest() {
        let e = this.getFrequentlyUsedReactionEmojisWithoutFetchingLatest(),
            t = new Set();
        return this.favoriteEmojisWithoutFetchingLatest.concat(e).filter((e) => !t.has(e) && (t.add(e), !0));
    }
    getTopEmojiWithoutFetchingLatest(e) {
        if (null == this.topEmojis) {
            let t = ei.get(e),
                n = B.A.getTopEmojiIdsByGuildId(e);
            if (null == t && null == n) return Q;
            let r = (t?.emojiIds ?? n).map(
                    (e) => this.getById(e) ?? V.Ay.getByName(V.Ay.convertSurrogateToName(e, !1)),
                ),
                i = [];
            r.forEach((e) => {
                null != e && i.push(e);
            });
            let s = this.getNewlyAddedEmojiForGuild(e).map((e) => e.id);
            this.topEmojis = i.filter((e) => !s.includes(e.id));
        }
        return this.topEmojis;
    }
    getNewlyAddedEmojiForGuild(e) {
        if (null == this.newlyAddedEmoji) return Q;
        let t = this.newlyAddedEmoji.get(e);
        return null == t ? Q : t;
    }
    getEscapedCustomEmoticonNames() {
        return this.escapedEmoticonNames;
    }
    nameMatchesChain(e) {
        return l()(this.getDisambiguatedEmoji()).filter((t) => {
            let { names: n, name: r } = t,
                i = null != n && l().some(n, e),
                s = null != r && e(r),
                a = null != r && l().some(g.A.getTermsForEmoji(r), e);
            return i || s || a;
        });
    }
}
let ec = ((r = eu.resetFrequentlyUsed), new p.A({ ...el(r) })),
    ed =
        ((i = eu.resetFrequentlyUsedReactionEmojis),
        new p.A({
            ...el(i),
            computeFrecency: (e, t, n) =>
                null == n.maxTotalUse ? 0 : Math.trunc(1e3 * ((e / n.maxTotalUse) * 0.2 + (t / 1e3) * 0.8)),
            calculateMaxTotalUse: !0,
        }));
function e_() {
    (en = {}), (er = {}), eu.reset(), ei.clear(), (ee = 2);
}
function ef(e) {
    null != en[e] && delete en[e];
}
function ep() {
    (er = null), eu.reset(), 2 === ee && (ec.compute(), ed.compute());
}
function eh(e) {
    ef(e), eu.clear(e);
    let t = F.A.getGuildEmojis(e);
    if (null == t) return;
    let n = L.default.getCurrentUser();
    if (null == n) return;
    let r = (0, y.p)(e);
    en[e] = new q(e, n.id, t, r);
}
function eE() {
    let e = v.A.settings,
        t = e.textAndImages?.diversitySurrogate?.value;
    null != t && V.Ay.setDefaultDiversitySurrogate(t), eu.reset();
    let n = v.A.frecencyWithoutFetchingLatest,
        r = n.emojiFrecency?.emojis ?? {},
        i = n.emojiReactionFrecency?.emojis ?? {};
    ec.overwriteHistory(
        l().mapValues(r, (e) => ({ ...e, recentUses: e.recentUses.map(Number).filter((e) => e > 0) })),
        z.pendingUsages,
    ),
        ed.overwriteHistory(
            l().mapValues(i, (e) => ({ ...e, recentUses: e.recentUses.map(Number).filter((e) => e > 0) })),
            z.emojiReactionPendingUsages,
        );
    if (l().isEmpty(r) && l().isEmpty(z.pendingUsages) && v.A.hasLoaded(K.oD.FRECENCY_AND_FAVORITES_SETTINGS))
        for (let e of [
            "thumbsup",
            "eyes",
            "laughing",
            "watermelon",
            "fork_and_knife",
            "yum",
            "weary",
            "tired_face",
            "poop",
            "100",
        ])
            ec.track(e);
    if (
        l().isEmpty(i) &&
        l().isEmpty(z.emojiReactionPendingUsages) &&
        v.A.hasLoaded(K.oD.FRECENCY_AND_FAVORITES_SETTINGS)
    )
        for (let e of [
            "100",
            "100",
            "thumbsup",
            "thumbsup",
            "thumbsdown",
            "thumbsdown",
            "heart",
            "point_up",
            "eyes",
            "weary",
            "laughing",
            "white_check_mark",
            "x",
        ])
            ed.track(e);
}
function em(e) {
    if (null == e) return !1;
    for (let t of e) {
        let e = t.id ?? t.uniqueName ?? t.name;
        null != e && (ec.track(e), z.pendingUsages.push({ key: e, timestamp: Date.now() }));
    }
    let t = e.length > 0;
    return t && 2 === ee && ec.compute(), t;
}
function eg(e) {
    let {
            guildId: t,
            role: { id: n },
        } = e,
        r = R.A.getRole(t, n);
    if (!(null != r && (0, I.U)(r))) return !1;
    eh(t), ep();
}
class eA extends _.Ay.PersistedStore {
    static displayName = "EmojiStore";
    static persistKey = "EmojiStoreV2";
    initialize(e) {
        this.waitFor(A.A, C.Ay, O.A, R.A, b.A, N.default, F.A, D.Ay, S.A, B.A, v.A, L.default),
            null != e &&
                (null != e.pendingUsages && (z.pendingUsages = e.pendingUsages),
                null != e.emojiReactionPendingUsages && (z.emojiReactionPendingUsages = e.emojiReactionPendingUsages),
                null != e.expandedSectionsByGuildIds &&
                    (z.expandedSectionsByGuildIds = new Set(e.expandedSectionsByGuildIds))),
            this.syncWith([v.A], eE);
    }
    getState() {
        return z;
    }
    static migrations = [(e) => ({ ...e })];
    get loadState() {
        return ee;
    }
    hasPendingUsage() {
        return z.pendingUsages.length > 0 || z.emojiReactionPendingUsages.length > 0;
    }
    get expandedSectionsByGuildIds() {
        return z.expandedSectionsByGuildIds;
    }
    get categories() {
        return et;
    }
    get diversitySurrogate() {
        return V.Ay.getDefaultDiversitySurrogate() ?? "";
    }
    get emojiFrecencyWithoutFetchingLatest() {
        return ec;
    }
    get emojiReactionFrecencyWithoutFetchingLatest() {
        return ed;
    }
    getGuildEmoji(e) {
        eo();
        let t = null == e ? void 0 : en[e];
        return t?.emojis ?? Z;
    }
    getHiddenEmojiIds(e) {
        eo();
        let t = null == e ? void 0 : en[e];
        return t?.hiddenEmojiIds ?? J;
    }
    getUsableGuildEmoji(e) {
        eo();
        let t = en[e];
        return t?.usableEmojis ?? Z;
    }
    getGuilds() {
        return en;
    }
    getDisambiguatedEmojiContext(e) {
        return eo(), eu.get(e);
    }
    getSearchResultsOrder(e, t, n, r, i) {
        let s = t.toLowerCase(),
            a = x.A.escape(s),
            o = s.slice(0, 1).toUpperCase() + s.slice(1),
            u = x.A.escape(o);
        if (e.length > 0) {
            let {
                    boostFavorites: t,
                    boostCapitalizedWords: n,
                    boostAtEnd: o,
                    boostsIgnoreDisambiguators: c,
                } = U.A.getConfig({ location: "getSearchResultsOrder" }),
                d = RegExp(`^${a}`, "i"),
                _ = RegExp(`${a}$`, "i"),
                f = RegExp(`(^|_|[A-Z])${a}s?([A-Z]|_|$)`),
                p = RegExp(`(^|_|[A-Z])${a}s?([A-Z]|_|$)|(^|_|[a-z])${u}s?([A-Z]|_|$)`),
                h = n ? p : f,
                E = h.test.bind(h),
                m = d.test.bind(d),
                g = _.test.bind(_);
            e = l().orderBy(
                e,
                [
                    (e) =>
                        ((e) => {
                            let n = null != e.uniqueName,
                                a = n ? e.names[0] : c ? e.name.split("~")[0] : e.name,
                                l = n ? a : e.id;
                            if (null == a || null == l) return 0;
                            let u = a.toLowerCase(),
                                d =
                                    1 +
                                    4 * (u === s) +
                                    (E(u) || E(a) ? 2 : 0) +
                                    (m(a) ? 1 : o && g(a) ? 0.75 : 0) +
                                    (t && i.isFavoriteEmojiWithoutFetchingLatest(e) ? 0.5 : 0),
                                _ = r === j.EmojiIntention.REACTION ? ed.getScore(l) : ec.getScore(l);
                            return null != _ && (d *= _ / 100), d;
                        })(e),
                    (e) => (null != e.names ? e.names[0] : e.name),
                ],
                ["desc", "asc"],
            );
        }
        return n > 0 && (e = e.slice(0, n)), e;
    }
    searchWithoutFetchingLatest(e) {
        let t,
            {
                channel: n,
                query: r,
                count: i = 0,
                intention: s,
                includeExternalGuilds: a = !0,
                matchComparator: o,
                showOnlyUnicode: l,
            } = e;
        eo();
        let u = r.toLowerCase().replaceAll(/[ _]/g, ""),
            c = x.A.escape(u);
        if (null == o) {
            let e = RegExp(`${c}`, "i");
            t = (t) => e.test(t.replaceAll("_", ""));
        } else t = o;
        let d = null != n ? n.getGuildId() : null,
            _ = eu.get(d),
            f = _.nameMatchesChain(t).reduce(
                (e, t) => {
                    let r = M.Ay.getEmojiUnavailableReason({
                        emoji: t,
                        channel: n,
                        intention: s,
                        forceIncludeExternalGuilds: a,
                    });
                    return (
                        r !== j.EmojiDisabledReasons.PREMIUM_LOCKED || l
                            ? null != r || (l && t.type !== G.i.UNICODE) || e.unlocked.push(t)
                            : e.locked.push(t),
                        e
                    );
                },
                { unlocked: [], locked: [] },
            );
        return {
            unlocked: this.getSearchResultsOrder(f.unlocked, r, i, s, _),
            locked: this.getSearchResultsOrder(f.locked, r, 0, s, _),
        };
    }
    getUsableCustomEmojiById(e) {
        return eo(), es(e);
    }
    getCustomEmojiById(e) {
        let t;
        return eo(), null != (t = ea()[e]) ? (en[t]?.getEmoji(e) ?? void 0) : void 0;
    }
    getTopEmoji(e) {
        return null == e ? Q : (eo(), eu.get(e).getTopEmojiWithoutFetchingLatest(e));
    }
    getNewlyAddedEmoji(e) {
        return null == e ? Q : (eo(), eu.get(e).getNewlyAddedEmojiForGuild(e));
    }
    getTopEmojisMetadata(e) {
        return ei.get(e);
    }
    hasUsableEmojiInAnyGuild() {
        return eo(), k.default.keys(en).some((e) => en[e].usableEmojis.length > 0);
    }
    hasFavoriteEmojis(e) {
        let t = eu.get(e);
        return null != t && t.favoriteEmojisWithoutFetchingLatest.length > 0;
    }
}
let eI = new eA(f.h, {
    LOGOUT: function () {
        (z.pendingUsages = []), (z.emojiReactionPendingUsages = []);
    },
    BACKGROUND_SYNC: function () {
        e_();
    },
    CONNECTION_OPEN: function (e) {
        for (let t of (e_(), e.guilds)) eh(t.id);
        (ee = 0 === e.unavailableGuilds.length && e.guilds.every((e) => "full_sync" === e.emojis.op) ? 2 : 0), ep();
    },
    OVERLAY_INITIALIZE: function (e) {
        for (let t in (e_(), e.emojis)) eh(t);
        (ee = 2), ep();
    },
    CACHED_EMOJIS_LOADED: function (e) {
        let { emojis: t } = e;
        for (let [e] of t) O.A.isMember(e) && eh(e);
        ep();
    },
    GUILD_MEMBER_UPDATE: function (e) {
        let { guildId: t, user: n } = e;
        n.id === L.default.getCurrentUser()?.id && (eh(t), ep());
    },
    GUILD_CREATE: function (e) {
        eh(e.guild.id), ep();
    },
    GUILD_UPDATE: function (e) {
        eh(e.guild.id), ep();
    },
    GUILD_EMOJIS_UPDATE: function (e) {
        let { guildId: t } = e;
        eh(t), ep();
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        ef(t.id), ei.delete(t.id), ep();
    },
    MESSAGE_REACTION_ADD: function (e) {
        if (!e.optimistic) return !1;
        let t =
            null != e.emoji.id && "0" !== e.emoji.id
                ? e.emoji
                : V.Ay.getByName(V.Ay.convertSurrogateToName(e.emoji.name, !1));
        if (null == t) return !1;
        (function (e) {
            if (null != e) {
                for (let t of e) {
                    let e = t.id ?? t.uniqueName ?? t.name;
                    null != e && (ed.track(e), z.emojiReactionPendingUsages.push({ key: e, timestamp: Date.now() }));
                }
                e.length > 0 && 2 === ee && ed.compute();
            }
        })([t]),
            em([t]);
    },
    EMOJI_TRACK_USAGE: function (e) {
        let { emojiUsed: t } = e;
        em(t);
    },
    USER_SETTINGS_PROTO_UPDATE: function (e) {
        let {
            settings: { type: t },
            wasSaved: n,
        } = e;
        if ((g.A.setEmojiLocale(N.default.locale), t !== K.oD.FRECENCY_AND_FAVORITES_SETTINGS || !n)) return !1;
        (z.pendingUsages = []), (z.emojiReactionPendingUsages = []);
    },
    GUILD_ROLE_CREATE: eg,
    GUILD_ROLE_UPDATE: eg,
    TOP_EMOJIS_FETCH_SUCCESS: function (e) {
        let { guildId: t, topEmojisMetadata: n } = e;
        ei.set(t, { emojiIds: n.map((e) => e.emojiId), topEmojisTTL: c()(c()()).add(1, "days").valueOf() });
    },
    TOGGLE_GUILD_EXPANDED_STATE: function (e) {
        let { guildId: t } = e,
            n = new Set(z.expandedSectionsByGuildIds);
        z.expandedSectionsByGuildIds.has(t) ? n.delete(t) : n.add(t), (z = { ...z, expandedSectionsByGuildIds: n });
    },
});
