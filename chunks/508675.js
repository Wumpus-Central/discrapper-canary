"use strict";
n.d(t, { Ay: () => eG, o2: () => ed }), n(205816), n(321073);
var r = n(284009),
    i = n.n(r),
    a = n(735438),
    s = n.n(a),
    o = n(989349),
    l = n.n(o),
    u = n(61090),
    c = n(311907),
    d = n(73153),
    _ = n(283047),
    f = n(723176),
    p = n(154049),
    h = n(995604),
    m = n(710026),
    g = n(49463),
    E = n(98318),
    A = n(492494),
    I = n(384684),
    T = n(46467),
    y = n(773669),
    S = n(617617),
    v = n(696451),
    C = n(184989),
    b = n(317525),
    N = n(71393),
    R = n(711014),
    O = n(287809),
    D = n(927813),
    L = n(690521),
    w = n(403362),
    x = n(257120),
    P = n(661191),
    M = n(84144),
    k = n(770335),
    U = n(608960),
    G = n(7584),
    V = n(354430),
    F = n(635222),
    B = n(307731),
    j = n(652215),
    H = n(732139),
    Y = n(355097);
let W = [
        H.R2.TOP_GUILD_EMOJI.toString(),
        H.R2.FAVORITES.toString(),
        H.R2.RECENT.toString(),
        H.R2.CUSTOM.toString(),
    ].concat(G.Ay.getCategories()),
    K = { pendingUsages: [], emojiReactionPendingUsages: [], expandedSectionsByGuildIds: new Set() };
class z {
    id;
    _userId;
    _emojis = null;
    _emojiMap;
    _emoticons = null;
    _usableEmojis = null;
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
        let t = v.Ay.getMember(this.id, this._userId);
        return null != t && !!(t.roles.some((t) => e.roles.includes(t)) || (0, A.kT)(e));
    }
    emojiIds() {
        return P.default.keys(this._emojiMap);
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
    get usableEmojis() {
        return (
            null == this._usableEmojis &&
                (this._usableEmojis = s().sortBy(
                    this.emojis.filter((e) => this.isUsable(e)),
                    (e) => e.name,
                )),
            this._usableEmojis
        );
    }
}
let $ = 42,
    q = P.default.fromTimestamp(Date.now() - 60 * D.A.Millis.DAY),
    Z = [],
    Q = [],
    X = 3,
    J = [...W],
    ee = {},
    et = {},
    en = new Map();
function er(e) {
    let t = ea()[e];
    return null != t ? (ee[t]?.getEmoji(e) ?? void 0) : void 0;
}
function ei(e) {
    let t = ea()[e];
    return null != t ? (ee[t]?.getUsableEmoji(e) ?? void 0) : void 0;
}
function ea() {
    if ((es(), null == et)) for (let e in ((et = {}), ee)) for (let t of ee[e].emojiIds()) et[t] = e;
    return et;
}
async function es() {
    if (0 !== X) return;
    let e = f.A.database();
    if (null == e) return;
    X = 2;
    let t = await (0, p.ES)("EmojiStore.loadSavedEmojis", () =>
        u.A.timeAsync("\uD83D\uDCBE", "loadSavedEmojis", () => h.A.getAsync(e)),
    );
    (X = 3), null != t && d.h.dispatch({ type: "CACHED_EMOJIS_LOADED", emojis: t });
}
function eo(e) {
    let { emojis: t } = e;
    for (let [e] of t) !Object.hasOwn(ee, e) && C.A.isMember(e) && eg(e);
    em();
}
let el = (e) => ({
    computeBonus: () => 100,
    lookupKey: (e) => G.Ay.getByName(e) ?? ei(e),
    afterCompute: () => {
        e(), (J = [...W]), s().some(ee, (e) => e.usableEmojis.length > 0) || J.splice(W.indexOf(H.R2.CUSTOM), 1);
    },
    numFrequentlyItems: $,
});
function eu(e) {
    return new _.A({ ...el(e) });
}
function ec(e) {
    return new _.A({
        ...el(e),
        computeFrecency: (e, t, n) =>
            null == n.maxTotalUse ? 0 : Math.trunc(1e3 * ((e / n.maxTotalUse) * 0.2 + (t / 1e3) * 0.8)),
        calculateMaxTotalUse: !0,
    });
}
class ed {
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
    unicodeAliases = {};
    customEmojis = {};
    groupedCustomEmojis = {};
    emoticonsByName = {};
    emojisByName = {};
    emojisById = {};
    newlyAddedEmoji = {};
    constructor(e) {
        this.guildId = e;
        const t = {},
            n = [],
            r = (e) => {
                e.names.slice(1).forEach((t) => (this.unicodeAliases[t] = e.name));
                let n = t[e.name] ?? 0;
                i()(0 === n, "Expected existing count to be 0"),
                    (t[e.name] = n + 1),
                    (this.emojisByName[e.name] = e),
                    this.disambiguatedEmoji.push(e);
            },
            a = (e) => {
                let n,
                    r = e.name,
                    i = t[r] ?? 0;
                if (((t[r] = i + 1), i > 0)) {
                    let t = `${r}~${i}`;
                    n = { ...e, name: t, originalName: r };
                } else n = e;
                (this.emojisByName[n.name] = n), (this.emojisById[n.id] = n), (this.customEmojis[n.name] = n);
                let { guildId: a } = e;
                null != this.groupedCustomEmojis[a]
                    ? this.groupedCustomEmojis[a].push(n)
                    : (this.groupedCustomEmojis[a] = [n]),
                    P.default.compare(e.id, q) >= 0 &&
                        (null != this.newlyAddedEmoji[a]
                            ? this.newlyAddedEmoji[a].push(n)
                            : (this.newlyAddedEmoji[a] = [n])),
                    this.disambiguatedEmoji.push(n);
            },
            o = (e) => {
                Object.prototype.hasOwnProperty.call(this.emoticonsByName, e.name) ||
                    (n.push(x.A.escape(e.name)), (this.emoticonsByName[e.name] = e));
            };
        G.Ay.forEach(r);
        const l = (e) => {
            let t = ee[null == e ? j.eGj : e];
            null != t && (s().each(t.usableEmojis, a), s().each(t.emoticons, o));
        };
        for (const e in (l(this.guildId), this.newlyAddedEmoji))
            null != this.newlyAddedEmoji[e]
                ? (this.newlyAddedEmoji[e] = this.newlyAddedEmoji[e]
                      .sort((e, t) => P.default.compare(t.id, e.id))
                      .slice(0, 3))
                : (this.newlyAddedEmoji[e] = []);
        R.Ay.getFlattenedGuildIds().forEach((e) => {
            e !== this.guildId && l(e);
        }),
            (this.escapedEmoticonNames = n.join("|"));
    }
    static get(e) {
        return (
            void 0 === e && (e = null),
            (null == ed._lastInstance || ed._lastInstance.guildId !== e) && (ed._lastInstance = new ed(e)),
            ed._lastInstance
        );
    }
    static reset() {
        ed._lastInstance = null;
    }
    static resetFrequentlyUsed() {
        null != ed._lastInstance && (ed._lastInstance.frequentlyUsed = null);
    }
    static resetFrequentlyUsedReactionEmojis() {
        null != ed._lastInstance &&
            ((ed._lastInstance.frequentlyUsedReactionEmojis = null),
            (ed._lastInstance.frequentlyUsedReactionNamesAndIds = null));
    }
    static clear(e) {
        null != ed._lastInstance && ed._lastInstance.guildId === e && (ed._lastInstance = null);
    }
    getDisambiguatedEmoji() {
        return this.disambiguatedEmoji;
    }
    getCustomEmoji() {
        return this.customEmojis;
    }
    getGroupedCustomEmoji() {
        return this.groupedCustomEmojis;
    }
    getByName(e) {
        if (Object.prototype.hasOwnProperty.call(this.emojisByName, e)) return this.emojisByName[e];
        if (Object.prototype.hasOwnProperty.call(this.unicodeAliases, e)) {
            let t = this.unicodeAliases[e];
            if (Object.prototype.hasOwnProperty.call(this.emojisByName, t)) return this.emojisByName[t];
        }
    }
    getEmoticonByName(e) {
        if (Object.prototype.hasOwnProperty.call(this.emoticonsByName, e)) return this.emoticonsByName[e];
    }
    getById(e) {
        if (Object.prototype.hasOwnProperty.call(this.emojisById, e)) return this.emojisById[e];
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
        let e = e_.frequently.map((e) => (null != e.id ? this.getById(e.id) : G.Ay.getByName(e.name))).filter(w.Vq),
            t = (0, F.A)(e);
        return (this.frequentlyUsed = [...t.values()]), this.frequentlyUsed;
    }
    rebuildFrequentlyUsedReactionsEmojisWithoutFetchingLatest() {
        if (null != this.frequentlyUsedReactionEmojis && null != this.frequentlyUsedReactionNamesAndIds)
            return {
                frequentlyUsedReactionEmojis: this.frequentlyUsedReactionEmojis,
                frequentlyUsedReactionNamesAndIds: this.frequentlyUsedReactionNamesAndIds,
            };
        let e = ef.frequently.map((e) => (null != e.id ? this.getById(e.id) : G.Ay.getByName(e.name))).filter(w.Vq),
            t = (0, F.A)(e);
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
        let n = G.Ay.convertSurrogateToBase(e.surrogates) ?? e;
        return t.has(n.name);
    }
    rebuildFavoriteEmojisWithoutFetchingLatest() {
        if (null != this.favorites && null != this.favoriteNamesAndIds)
            return { favorites: this.favorites, favoriteNamesAndIds: this.favoriteNamesAndIds };
        let e = (S.A.frecencyWithoutFetchingLatest.favoriteEmojis?.emojis ?? [])
                .map((e) => this.getById(e) ?? G.Ay.getByName(e))
                .filter(w.Vq),
            t = (0, F.A)(e);
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
        let n = G.Ay.convertSurrogateToBase(e.surrogates) ?? e;
        return t.has(n.name);
    };
    getEmojiInPriorityOrderWithoutFetchingLatest() {
        let e = this.getFrequentlyUsedReactionEmojisWithoutFetchingLatest(),
            t = new Set();
        return this.favoriteEmojisWithoutFetchingLatest.concat(e).filter((e) => !t.has(e) && (t.add(e), !0));
    }
    getTopEmojiWithoutFetchingLatest(e) {
        if (null == this.topEmojis) {
            let t = en.get(e),
                n = V.A.getTopEmojiIdsByGuildId(e);
            if (null == t && null == n) return Z;
            let r = (t?.emojiIds ?? n).map(
                    (e) => this.getById(e) ?? G.Ay.getByName(G.Ay.convertSurrogateToName(e, !1)),
                ),
                i = [];
            r.forEach((e) => {
                null != e && i.push(e);
            });
            let a = this.getNewlyAddedEmojiForGuild(e).map((e) => e.id);
            this.topEmojis = i.filter((e) => !a.includes(e.id));
        }
        return this.topEmojis;
    }
    getNewlyAddedEmojiForGuild(e) {
        if (null == this.newlyAddedEmoji) return Z;
        let t = this.newlyAddedEmoji[e];
        return null == t ? Z : t;
    }
    getEscapedCustomEmoticonNames() {
        return this.escapedEmoticonNames;
    }
    nameMatchesChain(e) {
        return s()(this.getDisambiguatedEmoji()).filter((t) => {
            let { names: n, name: r } = t,
                i = null != n && s().some(n, e),
                a = null != r && e(r),
                o = null != r && s().some(m.A.getTermsForEmoji(r), e);
            return i || a || o;
        });
    }
}
let e_ = eu(ed.resetFrequentlyUsed),
    ef = ec(ed.resetFrequentlyUsedReactionEmojis);
function ep() {
    (ee = {}), (et = {}), ed.reset(), en.clear(), (X = 3);
}
function eh(e) {
    null != ee[e] && delete ee[e];
}
function em() {
    (et = null), ed.reset(), (3 === X || 1 === X) && (e_.compute(), ef.compute());
}
function eg(e) {
    eh(e), ed.clear(e);
    let t = U.A.getGuildEmojis(e);
    if (null == t) return;
    let n = O.default.getCurrentUser();
    if (null == n) return;
    let r = (0, T.p)(e);
    ee[e] = new z(e, n.id, t, r);
}
function eE(e) {
    for (let t of (ep(), e.guilds)) eg(t.id);
    (X = +!!e.guilds.every((e) => null != e.emojis.items)), em();
}
function eA(e) {
    for (let t in (ep(), e.emojis)) eg(t);
    (X = 1), em();
}
function eI() {
    (K.pendingUsages = []), (K.emojiReactionPendingUsages = []);
}
function eT() {
    ep();
}
function ey(e) {
    1 === X && "update" === e.guild.emojis.op && null == e.guild.emojis.items && (X = 0), eg(e.guild.id), em();
}
function eS(e) {
    eg(e.guild.id), em();
}
function ev(e) {
    let { guildId: t } = e;
    eg(t), em();
}
function eC(e) {
    let { guild: t } = e;
    eh(t.id), en.delete(t.id), em();
}
function eb(e) {
    let { guildId: t, user: n } = e;
    n.id === O.default.getCurrentUser()?.id && (eg(t), em());
}
function eN(e) {
    if (!e.optimistic) return !1;
    let t =
        null != e.emoji.id && "0" !== e.emoji.id
            ? e.emoji
            : G.Ay.getByName(G.Ay.convertSurrogateToName(e.emoji.name, !1));
    if (null == t) return !1;
    ex([t]), ew([t]);
}
function eR(e, t) {
    if (s().isEmpty(e) && s().isEmpty(K.pendingUsages) && S.A.hasLoaded(Y.oD.FRECENCY_AND_FAVORITES_SETTINGS))
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
            e_.track(e);
    if (
        s().isEmpty(t) &&
        s().isEmpty(K.emojiReactionPendingUsages) &&
        S.A.hasLoaded(Y.oD.FRECENCY_AND_FAVORITES_SETTINGS)
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
            ef.track(e);
}
function eO() {
    let e = S.A.settings,
        t = e.textAndImages?.diversitySurrogate?.value;
    null != t && G.Ay.setDefaultDiversitySurrogate(t), ed.reset();
    let n = S.A.frecencyWithoutFetchingLatest,
        r = n.emojiFrecency?.emojis ?? {},
        i = n.emojiReactionFrecency?.emojis ?? {};
    e_.overwriteHistory(
        s().mapValues(r, (e) => ({ ...e, recentUses: e.recentUses.map(Number).filter((e) => e > 0) })),
        K.pendingUsages,
    ),
        ef.overwriteHistory(
            s().mapValues(i, (e) => ({ ...e, recentUses: e.recentUses.map(Number).filter((e) => e > 0) })),
            K.emojiReactionPendingUsages,
        ),
        eR(r, i);
}
function eD(e) {
    let {
        settings: { type: t },
        wasSaved: n,
    } = e;
    if ((m.A.setEmojiLocale(y.default.locale), t !== Y.oD.FRECENCY_AND_FAVORITES_SETTINGS || !n)) return !1;
    (K.pendingUsages = []), (K.emojiReactionPendingUsages = []);
}
function eL(e) {
    let { emojiUsed: t } = e;
    ew(t);
}
function ew(e) {
    if (null == e) return !1;
    for (let t of e) {
        let e = t.id ?? t.uniqueName ?? t.name;
        null != e && (e_.track(e), K.pendingUsages.push({ key: e, timestamp: Date.now() }));
    }
    let t = e.length > 0;
    return t && (3 === X || 1 === X) && e_.compute(), t;
}
function ex(e) {
    if (null == e) return !1;
    for (let t of e) {
        let e = t.id ?? t.uniqueName ?? t.name;
        null != e && (ef.track(e), K.emojiReactionPendingUsages.push({ key: e, timestamp: Date.now() }));
    }
    let t = e.length > 0;
    return t && (3 === X || 1 === X) && ef.compute(), t;
}
function eP(e) {
    let {
            guildId: t,
            role: { id: n },
        } = e,
        r = b.A.getRole(t, n);
    if (!(null != r && (0, E.U)(r))) return !1;
    eg(t), em();
}
function eM(e) {
    let { guildId: t } = e,
        n = new Set(K.expandedSectionsByGuildIds);
    K.expandedSectionsByGuildIds.has(t) ? n.delete(t) : n.add(t), (K = { ...K, expandedSectionsByGuildIds: n });
}
function ek(e) {
    let { guildId: t, topEmojisMetadata: n } = e;
    en.set(t, { emojiIds: n.map((e) => e.emojiId), topEmojisTTL: l()(l()()).add(1, "days").valueOf() });
}
class eU extends c.Ay.PersistedStore {
    static displayName = "EmojiStore";
    static persistKey = "EmojiStoreV2";
    initialize(e) {
        this.waitFor(g.A, v.Ay, C.A, b.A, N.A, y.default, U.A, R.Ay, I.A, V.A, S.A, O.default),
            null != e &&
                (null != e.pendingUsages && (K.pendingUsages = e.pendingUsages),
                null != e.emojiReactionPendingUsages && (K.emojiReactionPendingUsages = e.emojiReactionPendingUsages),
                null != e.expandedSectionsByGuildIds &&
                    (K.expandedSectionsByGuildIds = new Set(e.expandedSectionsByGuildIds))),
            this.syncWith([S.A], eO);
    }
    getState() {
        return K;
    }
    static migrations = [(e) => ({ ...e })];
    get loadState() {
        return X;
    }
    hasPendingUsage() {
        return K.pendingUsages.length > 0 || K.emojiReactionPendingUsages.length > 0;
    }
    get expandedSectionsByGuildIds() {
        return K.expandedSectionsByGuildIds;
    }
    get categories() {
        return J;
    }
    get diversitySurrogate() {
        return G.Ay.getDefaultDiversitySurrogate() ?? "";
    }
    get emojiFrecencyWithoutFetchingLatest() {
        return e_;
    }
    get emojiReactionFrecencyWithoutFetchingLatest() {
        return ef;
    }
    getGuildEmoji(e) {
        es();
        let t = null == e ? void 0 : ee[e];
        return t?.emojis ?? Q;
    }
    getUsableGuildEmoji(e) {
        es();
        let t = ee[e];
        return t?.usableEmojis ?? Q;
    }
    getGuilds() {
        return ee;
    }
    getDisambiguatedEmojiContext(e) {
        return es(), ed.get(e);
    }
    getSearchResultsOrder(e, t, n, r, i) {
        let a = t.toLowerCase(),
            o = x.A.escape(a),
            l = a.slice(0, 1).toUpperCase() + a.slice(1),
            u = x.A.escape(l);
        if (e.length > 0) {
            let {
                    boostFavorites: t,
                    boostCapitalizedWords: n,
                    boostAtEnd: l,
                    boostsIgnoreDisambiguators: c,
                } = M.A.getConfig({ location: "getSearchResultsOrder" }),
                d = RegExp(`^${o}`, "i"),
                _ = RegExp(`${o}$`, "i"),
                f = RegExp(`(^|_|[A-Z])${o}s?([A-Z]|_|$)`),
                p = RegExp(`(^|_|[A-Z])${o}s?([A-Z]|_|$)|(^|_|[a-z])${u}s?([A-Z]|_|$)`),
                h = n ? p : f,
                m = h.test.bind(h),
                g = d.test.bind(d),
                E = _.test.bind(_),
                A = (e) => {
                    let n = null != e.uniqueName,
                        s = n ? e.names[0] : c ? e.name.split("~")[0] : e.name,
                        o = n ? s : e.id;
                    if (null == s || null == o) return 0;
                    let u = s.toLowerCase(),
                        d =
                            1 +
                            4 * (u === a) +
                            (m(u) || m(s) ? 2 : 0) +
                            (g(s) ? 1 : l && E(s) ? 0.75 : 0) +
                            (t && i.isFavoriteEmojiWithoutFetchingLatest(e) ? 0.5 : 0),
                        _ = r === B.b_.REACTION ? ef.getScore(o) : e_.getScore(o);
                    return null != _ && (d *= _ / 100), d;
                };
            e = s().orderBy(e, [(e) => A(e), (e) => (null != e.names ? e.names[0] : e.name)], ["desc", "asc"]);
        }
        return n > 0 && (e = e.slice(0, n)), e;
    }
    searchWithoutFetchingLatest(e) {
        let t,
            {
                channel: n,
                query: r,
                count: i = 0,
                intention: a,
                includeExternalGuilds: s = !0,
                matchComparator: o,
                showOnlyUnicode: l,
            } = e;
        es();
        let u = r.toLowerCase().replaceAll(/[ _]/g, ""),
            c = x.A.escape(u);
        if (null == o) {
            let e = RegExp(`${c}`, "i");
            t = (t) => e.test(t.replaceAll("_", ""));
        } else t = o;
        let d = null != n ? n.getGuildId() : null,
            _ = ed.get(d),
            f = _.nameMatchesChain(t).reduce(
                (e, t) => {
                    let r = L.Ay.getEmojiUnavailableReason({
                        emoji: t,
                        channel: n,
                        intention: a,
                        forceIncludeExternalGuilds: s,
                    });
                    return (
                        r !== B.Am.PREMIUM_LOCKED || l
                            ? null != r || (l && t.type !== k.i.UNICODE) || e.unlocked.push(t)
                            : e.locked.push(t),
                        e
                    );
                },
                { unlocked: [], locked: [] },
            );
        return {
            unlocked: this.getSearchResultsOrder(f.unlocked, r, i, a, _),
            locked: this.getSearchResultsOrder(f.locked, r, 0, a, _),
        };
    }
    getUsableCustomEmojiById(e) {
        return es(), ei(e);
    }
    getCustomEmojiById(e) {
        return es(), er(e);
    }
    getTopEmoji(e) {
        return null == e ? Z : (es(), ed.get(e).getTopEmojiWithoutFetchingLatest(e));
    }
    getNewlyAddedEmoji(e) {
        return null == e ? Z : (es(), ed.get(e).getNewlyAddedEmojiForGuild(e));
    }
    getTopEmojisMetadata(e) {
        return en.get(e);
    }
    hasUsableEmojiInAnyGuild() {
        return es(), P.default.keys(ee).some((e) => ee[e].usableEmojis.length > 0);
    }
    hasFavoriteEmojis(e) {
        let t = ed.get(e);
        return null != t && t.favoriteEmojisWithoutFetchingLatest.length > 0;
    }
}
let eG = new eU(d.h, {
    LOGOUT: eI,
    BACKGROUND_SYNC: eT,
    CONNECTION_OPEN: eE,
    OVERLAY_INITIALIZE: eA,
    CACHED_EMOJIS_LOADED: eo,
    GUILD_MEMBER_UPDATE: eb,
    GUILD_CREATE: ey,
    GUILD_UPDATE: eS,
    GUILD_EMOJIS_UPDATE: ev,
    GUILD_DELETE: eC,
    MESSAGE_REACTION_ADD: eN,
    EMOJI_TRACK_USAGE: eL,
    USER_SETTINGS_PROTO_UPDATE: eD,
    GUILD_ROLE_CREATE: eP,
    GUILD_ROLE_UPDATE: eP,
    TOP_EMOJIS_FETCH_SUCCESS: ek,
    TOGGLE_GUILD_EXPANDED_STATE: eM,
});
