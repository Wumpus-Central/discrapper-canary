"use strict";
n.d(t, { o2: () => e_, Ay: () => ey }), n(321073);
var i,
    r,
    s = n(284009),
    a = n.n(s),
    o = n(735438),
    l = n.n(o),
    u = n(989349),
    c = n.n(u),
    d = n(61090),
    _ = n(17928),
    h = n(228366),
    f = n(283047),
    p = n(723176),
    E = n(154049);
let m = new (n(626584).A)("GuildEmojis"),
    g = new (class {
        async getAsync(e) {
            let t = performance.now(),
                n = await p.A.emojis(e).getMapEntries(),
                i = performance.now();
            return m.log(`asynchronously loaded in ${i - t}ms (guilds: ${n.length})`), n;
        }
        actions = {
            BACKGROUND_SYNC: (e, t) => this.handleBackgroundSync(e, t),
            CONNECTION_OPEN: (e, t) => this.handleConnectionOpen(e, t),
            GUILD_CREATE: (e, t) => this.handleGuildCreate(e, t),
            GUILD_DELETE: (e, t) => this.handleGuildDelete(e, t),
            GUILD_EMOJIS_UPDATE: (e, t) => this.handleGuildEmojisUpdate(e, t),
            GUILD_UPDATE: (e, t) => this.handleGuildUpdate(e, t),
        };
        handleConnectionOpen(e, t) {
            let n = [...e.guilds.map((e) => e.id), ...e.unavailableGuilds];
            for (let i of (p.A.emojisTransaction(t).deleteAllExcept(n), e.guilds)) this.handleOneGuildCreate(i, t);
        }
        handleGuildCreate(e, t) {
            this.handleOneGuildCreate(e.guild, t);
        }
        handleGuildUpdate(e, t) {
            this.replace(e.guild.id, e.guild.emojis, t);
        }
        handleGuildDelete(e, t) {
            this.delete(e.guild.id, t);
        }
        handleGuildEmojisUpdate(e, t) {
            this.replace(e.guildId, e.emojis, t);
        }
        handleBackgroundSync(e, t) {
            e.promisesForBackgroundSyncToWaitOn.push(
                Promise.all(
                    e.emojis.map((e) => {
                        if ("unavailable" === e.dataMode) return Promise.resolve();
                        "full" === e.dataMode
                            ? (m.verbose(`Replacing ${e.entities.length} emojis for ${e.guildId}`),
                              this.replace(e.guildId, e.entities, t))
                            : (e.updatedEntities.length > 0 || e.deletedEntityIds.length > 0) &&
                              (m.verbose(
                                  `Updating ${e.updatedEntities.length} and deleting ${e.deletedEntityIds.length} emojis for ${e.guildId}`,
                              ),
                              this.update(e.guildId, e.updatedEntities, e.deletedEntityIds, t));
                    }),
                ),
            );
        }
        handleOneGuildCreate(e, t) {
            switch (e.emojis.op) {
                case "full_sync":
                    this.replace(e.id, e.emojis.items, t);
                    break;
                case "update":
                    this.update(e.id, e.emojis.writes, e.emojis.deletes, t);
                    break;
                default:
                    e.emojis;
                    return;
            }
        }
        resetInMemoryState() {}
        replace(e, t, n) {
            p.A.emojisTransaction(n).replaceAll(e, t);
        }
        delete(e, t) {
            p.A.emojisTransaction(t).delete(e);
        }
        update(e, t, n, i) {
            let r = p.A.emojisTransaction(i);
            for (let i of (r.putAll(e, t), n)) r.delete(e, i);
        }
    })(),
    A = new (class {
        val;
        loading = !1;
        loaded = !1;
        param;
        loader;
        constructor(e) {
            this.loader = e;
        }
        setParams(e) {
            this.param !== e && ((this.param = e), (this.loading = !1), (this.loaded = !1));
        }
        get() {
            return this.ensureLoaded(), this.val;
        }
        ensureLoaded() {
            if (this.loaded || this.loading || void 0 === this.param) return;
            let e = this.param;
            (this.loading = !0),
                this.loader(e).then((t) => {
                    e === this.param && ((this.val = t), (this.loading = !1), (this.loaded = !0));
                });
        }
    })(function (e) {
        {
            let t = n(14206).S[e];
            return void 0 !== t ? t().then((e) => e.default) : Promise.resolve({});
        }
    }),
    I = function (e) {
        A.setParams(e);
    },
    T = function (e) {
        let t = A.get();
        return void 0 !== t ? t[e] : [];
    };
var S = n(736056),
    y = n(98318),
    N = n(492494),
    v = n(384684);
n(64700), n(702841);
var C = n(71393),
    R = n(723702),
    O = n(652215);
O.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE;
var b = n(773669),
    D = n(617617),
    L = n(696451),
    w = n(184989),
    M = n(317525),
    P = n(711014),
    x = n(287809),
    k = n(927813),
    U = n(690521),
    G = n(403362),
    F = n(257120),
    V = n(935208);
let B = (0, n(945810).mj)({
    name: "2025-10-emoji-search-ranking-tweaks",
    kind: "user",
    defaultConfig: { boostFavorites: !1, boostCapitalizedWords: !1, boostAtEnd: !1, boostsIgnoreDisambiguators: !1 },
    variations: {
        1: { boostFavorites: !0, boostCapitalizedWords: !0, boostAtEnd: !0, boostsIgnoreDisambiguators: !0 },
    },
});
var H = n(770335),
    j = n(608960),
    Y = n(7584),
    W = n(354430),
    K = n(635222),
    $ = n(307731),
    z = n(732139),
    q = n(355097);
let X = [
        z.R2.TOP_GUILD_EMOJI.toString(),
        z.R2.FAVORITES.toString(),
        z.R2.RECENT.toString(),
        z.R2.CUSTOM.toString(),
    ].concat(Y.Ay.getCategories()),
    Z = { pendingUsages: [], emojiReactionPendingUsages: [], expandedSectionsByGuildIds: new Set() };
class Q {
    id;
    _userId;
    _emojis = null;
    _emojiMap;
    _emoticons = null;
    _usableEmojis = null;
    _hiddenEmojiIds = null;
    _canSeeServerSubIAP = !1;
    constructor(e, t, n, i = !1) {
        (this.id = e), (this._userId = t), (this._emojiMap = n), (this._canSeeServerSubIAP = i);
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
        let t = L.Ay.getMember(this.id, this._userId);
        return null != t && !!(t.roles.some((t) => e.roles.includes(t)) || (0, N.kT)(e));
    }
    emojiIds() {
        return V.default.keys(this._emojiMap);
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
let J = V.default.fromTimestamp(Date.now() - 60 * k.A.Millis.DAY),
    ee = [],
    et = [],
    en = new Set(),
    ei = 2,
    er = [...X],
    es = {},
    ea = {},
    eo = new Map();
function el(e) {
    let t = eu()[e];
    return null != t ? (es[t]?.getUsableEmoji(e) ?? void 0) : void 0;
}
function eu() {
    if ((ec(), null == ea)) for (let e in ((ea = {}), es)) for (let t of es[e].emojiIds()) ea[t] = e;
    return ea;
}
async function ec() {
    if (0 !== ei) return;
    let e = p.A.database();
    if (null == e) return;
    ei = 1;
    let t = await (0, E.ES)("EmojiStore.loadSavedEmojis", () =>
        d.A.timeAsync("\uD83D\uDCBE", "loadSavedEmojis", () => g.getAsync(e)),
    );
    (ei = 2), null != t && h.h.dispatch({ type: "CACHED_EMOJIS_LOADED", emojis: t });
}
let ed = (e) => ({
    computeBonus: () => 100,
    lookupKey: (e) => Y.Ay.getByName(e) ?? el(e),
    afterCompute: () => {
        e(), (er = [...X]), l().some(es, (e) => e.usableEmojis.length > 0) || er.splice(X.indexOf(z.R2.CUSTOM), 1);
    },
    numFrequentlyItems: 42,
});
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
            i = (e) => {
                e.names.slice(1).forEach((t) => this.unicodeAliases.set(t, e.name));
                let n = t.get(e.name) ?? 0;
                a()(0 === n, "Expected existing count to be 0"),
                    t.set(e.name, n + 1),
                    this.emojisByName.set(e.name, e),
                    this.disambiguatedEmoji.push(e);
            },
            r = (e) => {
                let n,
                    i = e.name,
                    r = t.get(i) ?? 0;
                if ((t.set(i, r + 1), r > 0)) {
                    let t = `${i}~${r}`;
                    n = { ...e, name: t, originalName: i };
                } else n = e;
                this.emojisByName.set(n.name, n), this.emojisById.set(n.id, n), this.customEmojis.set(n.name, n);
                let s = e.guildId;
                this.customEmojisByGroup.has(s)
                    ? this.customEmojisByGroup.get(s)?.push(n)
                    : this.customEmojisByGroup.set(s, [n]),
                    V.default.compare(e.id, J) >= 0 &&
                        (this.newlyAddedEmoji.has(s)
                            ? this.newlyAddedEmoji.get(s)?.push(n)
                            : this.newlyAddedEmoji.set(s, [n])),
                    this.disambiguatedEmoji.push(n);
            },
            s = (e) => {
                this.emoticonsByName.has(e.name) || (n.push(F.A.escape(e.name)), this.emoticonsByName.set(e.name, e));
            };
        Y.Ay.forEach(i);
        const o = (e) => {
            let t = es[null == e ? O.eGj : e];
            null != t && (l().each(t.usableEmojis, r), l().each(t.emoticons, s));
        };
        for (const e of (o(this.guildId), this.newlyAddedEmoji.keys())) {
            const t = this.newlyAddedEmoji.get(e);
            if (null == t) {
                this.newlyAddedEmoji.set(e, []);
                continue;
            }
            this.newlyAddedEmoji.set(e, t.sort((e, t) => V.default.compare(t.id, e.id)).slice(0, 3));
        }
        P.Ay.getFlattenedGuildIds().forEach((e) => {
            e !== this.guildId && o(e);
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
        let e = eh.frequently.map((e) => (null != e.id ? this.getById(e.id) : Y.Ay.getByName(e.name))).filter(G.Vq),
            t = (0, K.A)(e);
        return (this.frequentlyUsed = [...t.values()]), this.frequentlyUsed;
    }
    rebuildFrequentlyUsedReactionsEmojisWithoutFetchingLatest() {
        if (null != this.frequentlyUsedReactionEmojis && null != this.frequentlyUsedReactionNamesAndIds)
            return {
                frequentlyUsedReactionEmojis: this.frequentlyUsedReactionEmojis,
                frequentlyUsedReactionNamesAndIds: this.frequentlyUsedReactionNamesAndIds,
            };
        let e = ef.frequently.map((e) => (null != e.id ? this.getById(e.id) : Y.Ay.getByName(e.name))).filter(G.Vq),
            t = (0, K.A)(e);
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
        let n = Y.Ay.convertSurrogateToBase(e.surrogates) ?? e;
        return t.has(n.name);
    }
    rebuildFavoriteEmojisWithoutFetchingLatest() {
        if (null != this.favorites && null != this.favoriteNamesAndIds)
            return { favorites: this.favorites, favoriteNamesAndIds: this.favoriteNamesAndIds };
        let e = (D.A.frecencyWithoutFetchingLatest.favoriteEmojis?.emojis ?? [])
                .map((e) => this.getById(e) ?? Y.Ay.getByName(e))
                .filter(G.Vq),
            t = (0, K.A)(e);
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
        let n = Y.Ay.convertSurrogateToBase(e.surrogates) ?? e;
        return t.has(n.name);
    };
    getEmojiInPriorityOrderWithoutFetchingLatest() {
        let e = this.getFrequentlyUsedReactionEmojisWithoutFetchingLatest(),
            t = new Set();
        return this.favoriteEmojisWithoutFetchingLatest.concat(e).filter((e) => !t.has(e) && (t.add(e), !0));
    }
    getTopEmojiWithoutFetchingLatest(e) {
        if (null == this.topEmojis) {
            let t = eo.get(e),
                n = W.A.getTopEmojiIdsByGuildId(e);
            if (null == t && null == n) return ee;
            let i = (t?.emojiIds ?? n).map(
                    (e) => this.getById(e) ?? Y.Ay.getByName(Y.Ay.convertSurrogateToName(e, !1)),
                ),
                r = [];
            i.forEach((e) => {
                null != e && r.push(e);
            });
            let s = this.getNewlyAddedEmojiForGuild(e).map((e) => e.id);
            this.topEmojis = r.filter((e) => !s.includes(e.id));
        }
        return this.topEmojis;
    }
    getNewlyAddedEmojiForGuild(e) {
        if (null == this.newlyAddedEmoji) return ee;
        let t = this.newlyAddedEmoji.get(e);
        return null == t ? ee : t;
    }
    getEscapedCustomEmoticonNames() {
        return this.escapedEmoticonNames;
    }
    nameMatchesChain(e) {
        return l()(this.getDisambiguatedEmoji()).filter((t) => {
            let { names: n, name: i } = t,
                r = null != n && l().some(n, e),
                s = null != i && e(i),
                a = null != i && l().some(T(i), e);
            return r || s || a;
        });
    }
}
let eh = ((i = e_.resetFrequentlyUsed), new f.A({ ...ed(i) })),
    ef =
        ((r = e_.resetFrequentlyUsedReactionEmojis),
        new f.A({
            ...ed(r),
            computeFrecency: (e, t, n) =>
                null == n.maxTotalUse ? 0 : Math.trunc(1e3 * ((e / n.maxTotalUse) * 0.2 + (t / 1e3) * 0.8)),
            calculateMaxTotalUse: !0,
        }));
function ep() {
    (es = {}), (ea = {}), e_.reset(), eo.clear(), (ei = 2);
}
function eE(e) {
    null != es[e] && delete es[e];
}
function em() {
    (ea = null), e_.reset(), 2 === ei && (eh.compute(), ef.compute());
}
function eg(e) {
    eE(e), e_.clear(e);
    let t = j.A.getGuildEmojis(e);
    if (null == t) return;
    let n = x.default.getCurrentUser();
    if (null == n) return;
    let i = !!(0, R.isIOS)() && !1;
    es[e] = new Q(e, n.id, t, i);
}
function eA() {
    let e = D.A.settings,
        t = e.textAndImages?.diversitySurrogate?.value;
    null != t && Y.Ay.setDefaultDiversitySurrogate(t), e_.reset();
    let n = D.A.frecencyWithoutFetchingLatest,
        i = n.emojiFrecency?.emojis ?? {},
        r = n.emojiReactionFrecency?.emojis ?? {};
    eh.overwriteHistory(
        l().mapValues(i, (e) => ({ ...e, recentUses: e.recentUses.map(Number).filter((e) => e > 0) })),
        Z.pendingUsages,
    ),
        ef.overwriteHistory(
            l().mapValues(r, (e) => ({ ...e, recentUses: e.recentUses.map(Number).filter((e) => e > 0) })),
            Z.emojiReactionPendingUsages,
        );
    if (l().isEmpty(i) && l().isEmpty(Z.pendingUsages) && D.A.hasLoaded(q.oD.FRECENCY_AND_FAVORITES_SETTINGS))
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
            eh.track(e);
    if (
        l().isEmpty(r) &&
        l().isEmpty(Z.emojiReactionPendingUsages) &&
        D.A.hasLoaded(q.oD.FRECENCY_AND_FAVORITES_SETTINGS)
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
function eI(e) {
    if (null == e) return !1;
    for (let t of e) {
        let e = t.id ?? t.uniqueName ?? t.name;
        null != e && (eh.track(e), Z.pendingUsages.push({ key: e, timestamp: Date.now() }));
    }
    let t = e.length > 0;
    return t && 2 === ei && eh.compute(), t;
}
function eT(e) {
    let {
            guildId: t,
            role: { id: n },
        } = e,
        i = M.A.getRole(t, n);
    if (!(null != i && (0, y.U)(i))) return !1;
    eg(t), em();
}
class eS extends _.Ay.PersistedStore {
    static displayName = "EmojiStore";
    static persistKey = "EmojiStoreV2";
    initialize(e) {
        this.waitFor(S.A, L.Ay, w.A, M.A, C.A, b.default, j.A, P.Ay, v.A, W.A, D.A, x.default),
            null != e &&
                (null != e.pendingUsages && (Z.pendingUsages = e.pendingUsages),
                null != e.emojiReactionPendingUsages && (Z.emojiReactionPendingUsages = e.emojiReactionPendingUsages),
                null != e.expandedSectionsByGuildIds &&
                    (Z.expandedSectionsByGuildIds = new Set(e.expandedSectionsByGuildIds))),
            this.syncWith([D.A], eA);
    }
    getState() {
        return Z;
    }
    static migrations = [(e) => ({ ...e })];
    get loadState() {
        return ei;
    }
    hasPendingUsage() {
        return Z.pendingUsages.length > 0 || Z.emojiReactionPendingUsages.length > 0;
    }
    get expandedSectionsByGuildIds() {
        return Z.expandedSectionsByGuildIds;
    }
    get categories() {
        return er;
    }
    get diversitySurrogate() {
        return Y.Ay.getDefaultDiversitySurrogate() ?? "";
    }
    get emojiFrecencyWithoutFetchingLatest() {
        return eh;
    }
    get emojiReactionFrecencyWithoutFetchingLatest() {
        return ef;
    }
    getGuildEmoji(e) {
        ec();
        let t = null == e ? void 0 : es[e];
        return t?.emojis ?? et;
    }
    getHiddenEmojiIds(e) {
        ec();
        let t = null == e ? void 0 : es[e];
        return t?.hiddenEmojiIds ?? en;
    }
    getUsableGuildEmoji(e) {
        ec();
        let t = es[e];
        return t?.usableEmojis ?? et;
    }
    getGuilds() {
        return es;
    }
    getDisambiguatedEmojiContext(e) {
        return ec(), e_.get(e);
    }
    getSearchResultsOrder(e, t, n, i, r) {
        let s = t.toLowerCase(),
            a = F.A.escape(s),
            o = s.slice(0, 1).toUpperCase() + s.slice(1),
            u = F.A.escape(o);
        if (e.length > 0) {
            let {
                    boostFavorites: t,
                    boostCapitalizedWords: n,
                    boostAtEnd: o,
                    boostsIgnoreDisambiguators: c,
                } = B.getConfig({ location: "getSearchResultsOrder" }),
                d = RegExp(`^${a}`, "i"),
                _ = RegExp(`${a}$`, "i"),
                h = RegExp(`(^|_|[A-Z])${a}s?([A-Z]|_|$)`),
                f = RegExp(`(^|_|[A-Z])${a}s?([A-Z]|_|$)|(^|_|[a-z])${u}s?([A-Z]|_|$)`),
                p = n ? f : h,
                E = p.test.bind(p),
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
                                    (t && r.isFavoriteEmojiWithoutFetchingLatest(e) ? 0.5 : 0),
                                _ = i === $.EmojiIntention.REACTION ? ef.getScore(l) : eh.getScore(l);
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
                query: i,
                count: r = 0,
                intention: s,
                includeExternalGuilds: a = !0,
                matchComparator: o,
                showOnlyUnicode: l,
            } = e;
        ec();
        let u = i.toLowerCase().replaceAll(/[ _]/g, ""),
            c = F.A.escape(u);
        if (null == o) {
            let e = RegExp(`${c}`, "i");
            t = (t) => e.test(t.replaceAll("_", ""));
        } else t = o;
        let d = null != n ? n.getGuildId() : null,
            _ = e_.get(d),
            h = _.nameMatchesChain(t).reduce(
                (e, t) => {
                    let i = U.Ay.getEmojiUnavailableReason({
                        emoji: t,
                        channel: n,
                        intention: s,
                        forceIncludeExternalGuilds: a,
                    });
                    return (
                        i !== $.EmojiDisabledReasons.PREMIUM_LOCKED || l
                            ? null != i || (l && t.type !== H.i.UNICODE) || e.unlocked.push(t)
                            : e.locked.push(t),
                        e
                    );
                },
                { unlocked: [], locked: [] },
            );
        return {
            unlocked: this.getSearchResultsOrder(h.unlocked, i, r, s, _),
            locked: this.getSearchResultsOrder(h.locked, i, 0, s, _),
        };
    }
    getUsableCustomEmojiById(e) {
        return ec(), el(e);
    }
    getCustomEmojiById(e) {
        let t;
        return ec(), null != (t = eu()[e]) ? (es[t]?.getEmoji(e) ?? void 0) : void 0;
    }
    getTopEmoji(e) {
        return null == e ? ee : (ec(), e_.get(e).getTopEmojiWithoutFetchingLatest(e));
    }
    getNewlyAddedEmoji(e) {
        return null == e ? ee : (ec(), e_.get(e).getNewlyAddedEmojiForGuild(e));
    }
    getTopEmojisMetadata(e) {
        return eo.get(e);
    }
    hasUsableEmojiInAnyGuild() {
        return ec(), V.default.keys(es).some((e) => es[e].usableEmojis.length > 0);
    }
    hasFavoriteEmojis(e) {
        let t = e_.get(e);
        return null != t && t.favoriteEmojisWithoutFetchingLatest.length > 0;
    }
}
let ey = new eS(h.h, {
    LOGOUT: function () {
        (Z.pendingUsages = []), (Z.emojiReactionPendingUsages = []);
    },
    BACKGROUND_SYNC: function () {
        ep();
    },
    CONNECTION_OPEN: function (e) {
        for (let t of (ep(), e.guilds)) eg(t.id);
        (ei = 0 === e.unavailableGuilds.length && e.guilds.every((e) => "full_sync" === e.emojis.op) ? 2 : 0), em();
    },
    OVERLAY_INITIALIZE: function (e) {
        for (let t in (ep(), e.emojis)) eg(t);
        (ei = 2), em();
    },
    CACHED_EMOJIS_LOADED: function (e) {
        let { emojis: t } = e;
        for (let [e] of t) w.A.isMember(e) && eg(e);
        em();
    },
    GUILD_MEMBER_UPDATE: function (e) {
        let { guildId: t, user: n } = e;
        n.id === x.default.getCurrentUser()?.id && (eg(t), em());
    },
    GUILD_CREATE: function (e) {
        eg(e.guild.id), em();
    },
    GUILD_UPDATE: function (e) {
        eg(e.guild.id), em();
    },
    GUILD_EMOJIS_UPDATE: function (e) {
        let { guildId: t } = e;
        eg(t), em();
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        eE(t.id), eo.delete(t.id), em();
    },
    MESSAGE_REACTION_ADD: function (e) {
        if (!e.optimistic) return !1;
        let t =
            null != e.emoji.id && "0" !== e.emoji.id
                ? e.emoji
                : Y.Ay.getByName(Y.Ay.convertSurrogateToName(e.emoji.name, !1));
        if (null == t) return !1;
        (function (e) {
            if (null != e) {
                for (let t of e) {
                    let e = t.id ?? t.uniqueName ?? t.name;
                    null != e && (ef.track(e), Z.emojiReactionPendingUsages.push({ key: e, timestamp: Date.now() }));
                }
                e.length > 0 && 2 === ei && ef.compute();
            }
        })([t]),
            eI([t]);
    },
    EMOJI_TRACK_USAGE: function (e) {
        let { emojiUsed: t } = e;
        eI(t);
    },
    USER_SETTINGS_PROTO_UPDATE: function (e) {
        let {
            settings: { type: t },
            wasSaved: n,
        } = e;
        if ((I(b.default.locale), t !== q.oD.FRECENCY_AND_FAVORITES_SETTINGS || !n)) return !1;
        (Z.pendingUsages = []), (Z.emojiReactionPendingUsages = []);
    },
    GUILD_ROLE_CREATE: eT,
    GUILD_ROLE_UPDATE: eT,
    TOP_EMOJIS_FETCH_SUCCESS: function (e) {
        let { guildId: t, topEmojisMetadata: n } = e;
        eo.set(t, { emojiIds: n.map((e) => e.emojiId), topEmojisTTL: c()(c()()).add(1, "days").valueOf() });
    },
    TOGGLE_GUILD_EXPANDED_STATE: function (e) {
        let { guildId: t } = e,
            n = new Set(Z.expandedSectionsByGuildIds);
        Z.expandedSectionsByGuildIds.has(t) ? n.delete(t) : n.add(t), (Z = { ...Z, expandedSectionsByGuildIds: n });
    },
});
