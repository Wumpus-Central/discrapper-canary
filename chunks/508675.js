"use strict";
n.d(t, { Ay: () => eF, o2: () => e_ }), n(321073);
var r = n(284009),
    i = n.n(r),
    s = n(735438),
    a = n.n(s),
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
    E = n(49463),
    g = n(98318),
    A = n(492494),
    I = n(384684),
    T = n(46467),
    S = n(773669),
    y = n(617617),
    v = n(696451),
    N = n(184989),
    C = n(317525),
    R = n(71393),
    O = n(711014),
    b = n(287809),
    D = n(927813),
    L = n(690521),
    w = n(403362),
    M = n(257120),
    x = n(661191),
    P = n(84144),
    k = n(770335),
    U = n(608960),
    G = n(7584),
    F = n(354430),
    V = n(635222),
    B = n(307731),
    H = n(652215),
    j = n(732139),
    Y = n(355097);
let W = [
        j.R2.TOP_GUILD_EMOJI.toString(),
        j.R2.FAVORITES.toString(),
        j.R2.RECENT.toString(),
        j.R2.CUSTOM.toString(),
    ].concat(G.Ay.getCategories()),
    K = { pendingUsages: [], emojiReactionPendingUsages: [], expandedSectionsByGuildIds: new Set() };
class $ {
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
        let t = v.Ay.getMember(this.id, this._userId);
        return null != t && !!(t.roles.some((t) => e.roles.includes(t)) || (0, A.kT)(e));
    }
    emojiIds() {
        return x.default.keys(this._emojiMap);
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
        (this._usableEmojis = a().sortBy(e, (e) => e.name)), (this._hiddenEmojiIds = t);
    }
    get usableEmojis() {
        return this._computeEmojiUsability(), this._usableEmojis;
    }
    get hiddenEmojiIds() {
        return this._computeEmojiUsability(), this._hiddenEmojiIds;
    }
}
let z = 42,
    q = x.default.fromTimestamp(Date.now() - 60 * D.A.Millis.DAY),
    Z = [],
    X = [],
    Q = new Set(),
    J = 2,
    ee = [...W],
    et = {},
    en = {},
    er = new Map();
function ei(e) {
    let t = ea()[e];
    return null != t ? (et[t]?.getEmoji(e) ?? void 0) : void 0;
}
function es(e) {
    let t = ea()[e];
    return null != t ? (et[t]?.getUsableEmoji(e) ?? void 0) : void 0;
}
function ea() {
    if ((eo(), null == en)) for (let e in ((en = {}), et)) for (let t of et[e].emojiIds()) en[t] = e;
    return en;
}
async function eo() {
    if (0 !== J) return;
    let e = f.A.database();
    if (null == e) return;
    J = 1;
    let t = await (0, p.ES)("EmojiStore.loadSavedEmojis", () =>
        u.A.timeAsync("\uD83D\uDCBE", "loadSavedEmojis", () => h.A.getAsync(e)),
    );
    (J = 2), null != t && d.h.dispatch({ type: "CACHED_EMOJIS_LOADED", emojis: t });
}
function el(e) {
    let { emojis: t } = e;
    for (let [e] of t) N.A.isMember(e) && eg(e);
    eE();
}
let eu = (e) => ({
    computeBonus: () => 100,
    lookupKey: (e) => G.Ay.getByName(e) ?? es(e),
    afterCompute: () => {
        e(), (ee = [...W]), a().some(et, (e) => e.usableEmojis.length > 0) || ee.splice(W.indexOf(j.R2.CUSTOM), 1);
    },
    numFrequentlyItems: z,
});
function ec(e) {
    return new _.A({ ...eu(e) });
}
function ed(e) {
    return new _.A({
        ...eu(e),
        computeFrecency: (e, t, n) =>
            null == n.maxTotalUse ? 0 : Math.trunc(1e3 * ((e / n.maxTotalUse) * 0.2 + (t / 1e3) * 0.8)),
        calculateMaxTotalUse: !0,
    });
}
class e_ {
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
                i()(0 === n, "Expected existing count to be 0"),
                    t.set(e.name, n + 1),
                    this.emojisByName.set(e.name, e),
                    this.disambiguatedEmoji.push(e);
            },
            s = (e) => {
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
                    x.default.compare(e.id, q) >= 0 &&
                        (this.newlyAddedEmoji.has(s)
                            ? this.newlyAddedEmoji.get(s)?.push(n)
                            : this.newlyAddedEmoji.set(s, [n])),
                    this.disambiguatedEmoji.push(n);
            },
            o = (e) => {
                this.emoticonsByName.has(e.name) || (n.push(M.A.escape(e.name)), this.emoticonsByName.set(e.name, e));
            };
        G.Ay.forEach(r);
        const l = (e) => {
            let t = et[null == e ? H.eGj : e];
            null != t && (a().each(t.usableEmojis, s), a().each(t.emoticons, o));
        };
        for (const e of (l(this.guildId), this.newlyAddedEmoji.keys())) {
            const t = this.newlyAddedEmoji.get(e);
            if (null == t) {
                this.newlyAddedEmoji.set(e, []);
                continue;
            }
            this.newlyAddedEmoji.set(e, t.sort((e, t) => x.default.compare(t.id, e.id)).slice(0, 3));
        }
        O.Ay.getFlattenedGuildIds().forEach((e) => {
            e !== this.guildId && l(e);
        }),
            (this.escapedEmoticonNames = n.join("|"));
    }
    static get(e) {
        return (
            void 0 === e && (e = null),
            (null == e_._lastInstance || e_._lastInstance.guildId !== e) && (e_._lastInstance = new e_(e)),
            e_._lastInstance
        );
    }
    static reset() {
        e_._lastInstance = null;
    }
    static resetFrequentlyUsed() {
        null != e_._lastInstance && (e_._lastInstance.frequentlyUsed = null);
    }
    static resetFrequentlyUsedReactionEmojis() {
        null != e_._lastInstance &&
            ((e_._lastInstance.frequentlyUsedReactionEmojis = null),
            (e_._lastInstance.frequentlyUsedReactionNamesAndIds = null));
    }
    static clear(e) {
        null != e_._lastInstance && e_._lastInstance.guildId === e && (e_._lastInstance = null);
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
        let e = ef.frequently.map((e) => (null != e.id ? this.getById(e.id) : G.Ay.getByName(e.name))).filter(w.Vq),
            t = (0, V.A)(e);
        return (this.frequentlyUsed = [...t.values()]), this.frequentlyUsed;
    }
    rebuildFrequentlyUsedReactionsEmojisWithoutFetchingLatest() {
        if (null != this.frequentlyUsedReactionEmojis && null != this.frequentlyUsedReactionNamesAndIds)
            return {
                frequentlyUsedReactionEmojis: this.frequentlyUsedReactionEmojis,
                frequentlyUsedReactionNamesAndIds: this.frequentlyUsedReactionNamesAndIds,
            };
        let e = ep.frequently.map((e) => (null != e.id ? this.getById(e.id) : G.Ay.getByName(e.name))).filter(w.Vq),
            t = (0, V.A)(e);
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
        let e = (y.A.frecencyWithoutFetchingLatest.favoriteEmojis?.emojis ?? [])
                .map((e) => this.getById(e) ?? G.Ay.getByName(e))
                .filter(w.Vq),
            t = (0, V.A)(e);
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
            let t = er.get(e),
                n = F.A.getTopEmojiIdsByGuildId(e);
            if (null == t && null == n) return Z;
            let r = (t?.emojiIds ?? n).map(
                    (e) => this.getById(e) ?? G.Ay.getByName(G.Ay.convertSurrogateToName(e, !1)),
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
        if (null == this.newlyAddedEmoji) return Z;
        let t = this.newlyAddedEmoji.get(e);
        return null == t ? Z : t;
    }
    getEscapedCustomEmoticonNames() {
        return this.escapedEmoticonNames;
    }
    nameMatchesChain(e) {
        return a()(this.getDisambiguatedEmoji()).filter((t) => {
            let { names: n, name: r } = t,
                i = null != n && a().some(n, e),
                s = null != r && e(r),
                o = null != r && a().some(m.A.getTermsForEmoji(r), e);
            return i || s || o;
        });
    }
}
let ef = ec(e_.resetFrequentlyUsed),
    ep = ed(e_.resetFrequentlyUsedReactionEmojis);
function eh() {
    (et = {}), (en = {}), e_.reset(), er.clear(), (J = 2);
}
function em(e) {
    null != et[e] && delete et[e];
}
function eE() {
    (en = null), e_.reset(), 2 === J && (ef.compute(), ep.compute());
}
function eg(e) {
    em(e), e_.clear(e);
    let t = U.A.getGuildEmojis(e);
    if (null == t) return;
    let n = b.default.getCurrentUser();
    if (null == n) return;
    let r = (0, T.p)(e);
    et[e] = new $(e, n.id, t, r);
}
function eA(e) {
    for (let t of (eh(), e.guilds)) eg(t.id);
    (J = 0 === e.unavailableGuilds.length && e.guilds.every((e) => "full_sync" === e.emojis.op) ? 2 : 0), eE();
}
function eI(e) {
    for (let t in (eh(), e.emojis)) eg(t);
    (J = 2), eE();
}
function eT() {
    (K.pendingUsages = []), (K.emojiReactionPendingUsages = []);
}
function eS() {
    eh();
}
function ey(e) {
    eg(e.guild.id), eE();
}
function ev(e) {
    eg(e.guild.id), eE();
}
function eN(e) {
    let { guildId: t } = e;
    eg(t), eE();
}
function eC(e) {
    let { guild: t } = e;
    em(t.id), er.delete(t.id), eE();
}
function eR(e) {
    let { guildId: t, user: n } = e;
    n.id === b.default.getCurrentUser()?.id && (eg(t), eE());
}
function eO(e) {
    if (!e.optimistic) return !1;
    let t =
        null != e.emoji.id && "0" !== e.emoji.id
            ? e.emoji
            : G.Ay.getByName(G.Ay.convertSurrogateToName(e.emoji.name, !1));
    if (null == t) return !1;
    ex([t]), eM([t]);
}
function eb(e, t) {
    if (a().isEmpty(e) && a().isEmpty(K.pendingUsages) && y.A.hasLoaded(Y.oD.FRECENCY_AND_FAVORITES_SETTINGS))
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
            ef.track(e);
    if (
        a().isEmpty(t) &&
        a().isEmpty(K.emojiReactionPendingUsages) &&
        y.A.hasLoaded(Y.oD.FRECENCY_AND_FAVORITES_SETTINGS)
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
            ep.track(e);
}
function eD() {
    let e = y.A.settings,
        t = e.textAndImages?.diversitySurrogate?.value;
    null != t && G.Ay.setDefaultDiversitySurrogate(t), e_.reset();
    let n = y.A.frecencyWithoutFetchingLatest,
        r = n.emojiFrecency?.emojis ?? {},
        i = n.emojiReactionFrecency?.emojis ?? {};
    ef.overwriteHistory(
        a().mapValues(r, (e) => ({ ...e, recentUses: e.recentUses.map(Number).filter((e) => e > 0) })),
        K.pendingUsages,
    ),
        ep.overwriteHistory(
            a().mapValues(i, (e) => ({ ...e, recentUses: e.recentUses.map(Number).filter((e) => e > 0) })),
            K.emojiReactionPendingUsages,
        ),
        eb(r, i);
}
function eL(e) {
    let {
        settings: { type: t },
        wasSaved: n,
    } = e;
    if ((m.A.setEmojiLocale(S.default.locale), t !== Y.oD.FRECENCY_AND_FAVORITES_SETTINGS || !n)) return !1;
    (K.pendingUsages = []), (K.emojiReactionPendingUsages = []);
}
function ew(e) {
    let { emojiUsed: t } = e;
    eM(t);
}
function eM(e) {
    if (null == e) return !1;
    for (let t of e) {
        let e = t.id ?? t.uniqueName ?? t.name;
        null != e && (ef.track(e), K.pendingUsages.push({ key: e, timestamp: Date.now() }));
    }
    let t = e.length > 0;
    return t && 2 === J && ef.compute(), t;
}
function ex(e) {
    if (null == e) return !1;
    for (let t of e) {
        let e = t.id ?? t.uniqueName ?? t.name;
        null != e && (ep.track(e), K.emojiReactionPendingUsages.push({ key: e, timestamp: Date.now() }));
    }
    let t = e.length > 0;
    return t && 2 === J && ep.compute(), t;
}
function eP(e) {
    let {
            guildId: t,
            role: { id: n },
        } = e,
        r = C.A.getRole(t, n);
    if (!(null != r && (0, g.U)(r))) return !1;
    eg(t), eE();
}
function ek(e) {
    let { guildId: t } = e,
        n = new Set(K.expandedSectionsByGuildIds);
    K.expandedSectionsByGuildIds.has(t) ? n.delete(t) : n.add(t), (K = { ...K, expandedSectionsByGuildIds: n });
}
function eU(e) {
    let { guildId: t, topEmojisMetadata: n } = e;
    er.set(t, { emojiIds: n.map((e) => e.emojiId), topEmojisTTL: l()(l()()).add(1, "days").valueOf() });
}
class eG extends c.Ay.PersistedStore {
    static displayName = "EmojiStore";
    static persistKey = "EmojiStoreV2";
    initialize(e) {
        this.waitFor(E.A, v.Ay, N.A, C.A, R.A, S.default, U.A, O.Ay, I.A, F.A, y.A, b.default),
            null != e &&
                (null != e.pendingUsages && (K.pendingUsages = e.pendingUsages),
                null != e.emojiReactionPendingUsages && (K.emojiReactionPendingUsages = e.emojiReactionPendingUsages),
                null != e.expandedSectionsByGuildIds &&
                    (K.expandedSectionsByGuildIds = new Set(e.expandedSectionsByGuildIds))),
            this.syncWith([y.A], eD);
    }
    getState() {
        return K;
    }
    static migrations = [(e) => ({ ...e })];
    get loadState() {
        return J;
    }
    hasPendingUsage() {
        return K.pendingUsages.length > 0 || K.emojiReactionPendingUsages.length > 0;
    }
    get expandedSectionsByGuildIds() {
        return K.expandedSectionsByGuildIds;
    }
    get categories() {
        return ee;
    }
    get diversitySurrogate() {
        return G.Ay.getDefaultDiversitySurrogate() ?? "";
    }
    get emojiFrecencyWithoutFetchingLatest() {
        return ef;
    }
    get emojiReactionFrecencyWithoutFetchingLatest() {
        return ep;
    }
    getGuildEmoji(e) {
        eo();
        let t = null == e ? void 0 : et[e];
        return t?.emojis ?? X;
    }
    getHiddenEmojiIds(e) {
        eo();
        let t = null == e ? void 0 : et[e];
        return t?.hiddenEmojiIds ?? Q;
    }
    getUsableGuildEmoji(e) {
        eo();
        let t = et[e];
        return t?.usableEmojis ?? X;
    }
    getGuilds() {
        return et;
    }
    getDisambiguatedEmojiContext(e) {
        return eo(), e_.get(e);
    }
    getSearchResultsOrder(e, t, n, r, i) {
        let s = t.toLowerCase(),
            o = M.A.escape(s),
            l = s.slice(0, 1).toUpperCase() + s.slice(1),
            u = M.A.escape(l);
        if (e.length > 0) {
            let {
                    boostFavorites: t,
                    boostCapitalizedWords: n,
                    boostAtEnd: l,
                    boostsIgnoreDisambiguators: c,
                } = P.A.getConfig({ location: "getSearchResultsOrder" }),
                d = RegExp(`^${o}`, "i"),
                _ = RegExp(`${o}$`, "i"),
                f = RegExp(`(^|_|[A-Z])${o}s?([A-Z]|_|$)`),
                p = RegExp(`(^|_|[A-Z])${o}s?([A-Z]|_|$)|(^|_|[a-z])${u}s?([A-Z]|_|$)`),
                h = n ? p : f,
                m = h.test.bind(h),
                E = d.test.bind(d),
                g = _.test.bind(_),
                A = (e) => {
                    let n = null != e.uniqueName,
                        a = n ? e.names[0] : c ? e.name.split("~")[0] : e.name,
                        o = n ? a : e.id;
                    if (null == a || null == o) return 0;
                    let u = a.toLowerCase(),
                        d =
                            1 +
                            4 * (u === s) +
                            (m(u) || m(a) ? 2 : 0) +
                            (E(a) ? 1 : l && g(a) ? 0.75 : 0) +
                            (t && i.isFavoriteEmojiWithoutFetchingLatest(e) ? 0.5 : 0),
                        _ = r === B.b_.REACTION ? ep.getScore(o) : ef.getScore(o);
                    return null != _ && (d *= _ / 100), d;
                };
            e = a().orderBy(e, [(e) => A(e), (e) => (null != e.names ? e.names[0] : e.name)], ["desc", "asc"]);
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
            c = M.A.escape(u);
        if (null == o) {
            let e = RegExp(`${c}`, "i");
            t = (t) => e.test(t.replaceAll("_", ""));
        } else t = o;
        let d = null != n ? n.getGuildId() : null,
            _ = e_.get(d),
            f = _.nameMatchesChain(t).reduce(
                (e, t) => {
                    let r = L.Ay.getEmojiUnavailableReason({
                        emoji: t,
                        channel: n,
                        intention: s,
                        forceIncludeExternalGuilds: a,
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
            unlocked: this.getSearchResultsOrder(f.unlocked, r, i, s, _),
            locked: this.getSearchResultsOrder(f.locked, r, 0, s, _),
        };
    }
    getUsableCustomEmojiById(e) {
        return eo(), es(e);
    }
    getCustomEmojiById(e) {
        return eo(), ei(e);
    }
    getTopEmoji(e) {
        return null == e ? Z : (eo(), e_.get(e).getTopEmojiWithoutFetchingLatest(e));
    }
    getNewlyAddedEmoji(e) {
        return null == e ? Z : (eo(), e_.get(e).getNewlyAddedEmojiForGuild(e));
    }
    getTopEmojisMetadata(e) {
        return er.get(e);
    }
    hasUsableEmojiInAnyGuild() {
        return eo(), x.default.keys(et).some((e) => et[e].usableEmojis.length > 0);
    }
    hasFavoriteEmojis(e) {
        let t = e_.get(e);
        return null != t && t.favoriteEmojisWithoutFetchingLatest.length > 0;
    }
}
let eF = new eG(d.h, {
    LOGOUT: eT,
    BACKGROUND_SYNC: eS,
    CONNECTION_OPEN: eA,
    OVERLAY_INITIALIZE: eI,
    CACHED_EMOJIS_LOADED: el,
    GUILD_MEMBER_UPDATE: eR,
    GUILD_CREATE: ey,
    GUILD_UPDATE: ev,
    GUILD_EMOJIS_UPDATE: eN,
    GUILD_DELETE: eC,
    MESSAGE_REACTION_ADD: eO,
    EMOJI_TRACK_USAGE: ew,
    USER_SETTINGS_PROTO_UPDATE: eL,
    GUILD_ROLE_CREATE: eP,
    GUILD_ROLE_UPDATE: eP,
    TOP_EMOJIS_FETCH_SUCCESS: eU,
    TOGGLE_GUILD_EXPANDED_STATE: ek,
});
