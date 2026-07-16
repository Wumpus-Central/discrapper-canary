"use strict";
n.d(t, { o2: () => e_, Ay: () => eN }), n(321073);
var i,
    r,
    a = n(284009),
    s = n.n(a),
    l = n(435558),
    o = n.n(l),
    d = n(989349),
    c = n.n(d),
    u = n(61090),
    _ = n(17928),
    E = n(228366),
    A = n(283047),
    h = n(723176),
    I = n(154049);
let f = new (n(626584).A)("GuildEmojis"),
    p = new (class {
        async getAsync(e) {
            let t = performance.now(),
                n = await h.A.emojis(e).getMapEntries(),
                i = performance.now();
            return f.log(`asynchronously loaded in ${i - t}ms (guilds: ${n.length})`), n;
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
            for (let i of (h.A.emojisTransaction(t).deleteAllExcept(n), e.guilds)) this.handleOneGuildCreate(i, t);
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
                            ? (f.verbose(`Replacing ${e.entities.length} emojis for ${e.guildId}`),
                              this.replace(e.guildId, e.entities, t))
                            : (e.updatedEntities.length > 0 || e.deletedEntityIds.length > 0) &&
                              (f.verbose(
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
            h.A.emojisTransaction(n).replaceAll(e, t);
        }
        delete(e, t) {
            h.A.emojisTransaction(t).delete(e);
        }
        update(e, t, n, i) {
            let r = h.A.emojisTransaction(i);
            for (let i of (r.putAll(e, t), n)) r.delete(e, i);
        }
    })(),
    T = new (class {
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
    m = function (e) {
        T.setParams(e);
    },
    g = function (e) {
        let t = T.get();
        return void 0 !== t ? t[e] : [];
    };
var S = n(736056),
    N = n(98318),
    C = n(492494),
    R = n(384684);
n(64700), n(702841);
var O = n(71393),
    L = n(723702),
    y = n(652215);
y.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE;
var D = n(773669),
    v = n(617617),
    b = n(696451),
    M = n(184989),
    P = n(317525),
    U = n(711014),
    w = n(287809),
    G = n(927813),
    x = n(690521),
    k = n(403362),
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
    W = n(7584),
    Y = n(354430),
    K = n(635222),
    $ = n(307731),
    z = n(732139),
    q = n(355097);
let Z = [
        z.R2.TOP_GUILD_EMOJI.toString(),
        z.R2.FAVORITES.toString(),
        z.R2.RECENT.toString(),
        z.R2.CUSTOM.toString(),
    ].concat(W.Ay.getCategories()),
    X = { pendingUsages: [], emojiReactionPendingUsages: [], expandedSectionsByGuildIds: new Set() };
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
        let t = b.Ay.getMember(this.id, this._userId);
        return null != t && !!(t.roles.some((t) => e.roles.includes(t)) || (0, C.kT)(e));
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
        (this._usableEmojis = o().sortBy(e, (e) => e.name)), (this._hiddenEmojiIds = t);
    }
    get usableEmojis() {
        return this._computeEmojiUsability(), this._usableEmojis;
    }
    get hiddenEmojiIds() {
        return this._computeEmojiUsability(), this._hiddenEmojiIds;
    }
}
let J = V.default.fromTimestamp(Date.now() - 60 * G.A.Millis.DAY),
    ee = [],
    et = [],
    en = new Set(),
    ei = 2,
    er = [...Z],
    ea = {},
    es = {},
    el = new Map();
function eo(e) {
    let t = ed()[e];
    return null != t ? (ea[t]?.getUsableEmoji(e) ?? void 0) : void 0;
}
function ed() {
    if ((ec(), null == es)) for (let e in ((es = {}), ea)) for (let t of ea[e].emojiIds()) es[t] = e;
    return es;
}
async function ec() {
    if (0 !== ei) return;
    let e = h.A.database();
    if (null == e) return;
    ei = 1;
    let t = await (0, I.ES)("EmojiStore.loadSavedEmojis", () =>
        u.A.timeAsync("\uD83D\uDCBE", "loadSavedEmojis", () => p.getAsync(e)),
    );
    (ei = 2), null != t && E.h.dispatch({ type: "CACHED_EMOJIS_LOADED", emojis: t });
}
function eu(e) {
    return {
        computeBonus: () => 100,
        lookupKey: (e) => W.Ay.getByName(e) ?? eo(e),
        afterCompute: () => {
            e(), (er = [...Z]), o().some(ea, (e) => e.usableEmojis.length > 0) || er.splice(Z.indexOf(z.R2.CUSTOM), 1);
        },
        numFrequentlyItems: 42,
    };
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
            i = (e) => {
                e.names.slice(1).forEach((t) => this.unicodeAliases.set(t, e.name));
                let n = t.get(e.name) ?? 0;
                s()(0 === n, "Expected existing count to be 0"),
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
                let a = e.guildId;
                this.customEmojisByGroup.has(a)
                    ? this.customEmojisByGroup.get(a)?.push(n)
                    : this.customEmojisByGroup.set(a, [n]),
                    V.default.compare(e.id, J) >= 0 &&
                        (this.newlyAddedEmoji.has(a)
                            ? this.newlyAddedEmoji.get(a)?.push(n)
                            : this.newlyAddedEmoji.set(a, [n])),
                    this.disambiguatedEmoji.push(n);
            },
            a = (e) => {
                this.emoticonsByName.has(e.name) || (n.push(F.A.escape(e.name)), this.emoticonsByName.set(e.name, e));
            };
        function l(e) {
            let t = ea[null == e ? y.eGj : e];
            null != t && (o().each(t.usableEmojis, r), o().each(t.emoticons, a));
        }
        for (const e of (W.Ay.forEach(i), l(this.guildId), this.newlyAddedEmoji.keys())) {
            const t = this.newlyAddedEmoji.get(e);
            if (null == t) {
                this.newlyAddedEmoji.set(e, []);
                continue;
            }
            this.newlyAddedEmoji.set(e, t.sort((e, t) => V.default.compare(t.id, e.id)).slice(0, 3));
        }
        U.Ay.getFlattenedGuildIds().forEach((e) => {
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
        let e = eE.frequently.map((e) => (null != e.id ? this.getById(e.id) : W.Ay.getByName(e.name))).filter(k.Vq),
            t = (0, K.A)(e);
        return (this.frequentlyUsed = [...t.values()]), this.frequentlyUsed;
    }
    rebuildFrequentlyUsedReactionsEmojisWithoutFetchingLatest() {
        if (null != this.frequentlyUsedReactionEmojis && null != this.frequentlyUsedReactionNamesAndIds)
            return {
                frequentlyUsedReactionEmojis: this.frequentlyUsedReactionEmojis,
                frequentlyUsedReactionNamesAndIds: this.frequentlyUsedReactionNamesAndIds,
            };
        let e = eA.frequently.map((e) => (null != e.id ? this.getById(e.id) : W.Ay.getByName(e.name))).filter(k.Vq),
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
        let n = W.Ay.convertSurrogateToBase(e.surrogates) ?? e;
        return t.has(n.name);
    }
    rebuildFavoriteEmojisWithoutFetchingLatest() {
        if (null != this.favorites && null != this.favoriteNamesAndIds)
            return { favorites: this.favorites, favoriteNamesAndIds: this.favoriteNamesAndIds };
        let e = (v.A.frecencyWithoutFetchingLatest.favoriteEmojis?.emojis ?? [])
                .map((e) => this.getById(e) ?? W.Ay.getByName(e))
                .filter(k.Vq),
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
        let n = W.Ay.convertSurrogateToBase(e.surrogates) ?? e;
        return t.has(n.name);
    };
    getEmojiInPriorityOrderWithoutFetchingLatest() {
        let e = this.getFrequentlyUsedReactionEmojisWithoutFetchingLatest(),
            t = new Set();
        return this.favoriteEmojisWithoutFetchingLatest.concat(e).filter((e) => !t.has(e) && (t.add(e), !0));
    }
    getTopEmojiWithoutFetchingLatest(e) {
        if (null == this.topEmojis) {
            let t = el.get(e),
                n = Y.A.getTopEmojiIdsByGuildId(e);
            if (null == t && null == n) return ee;
            let i = (t?.emojiIds ?? n).map(
                    (e) => this.getById(e) ?? W.Ay.getByName(W.Ay.convertSurrogateToName(e, !1)),
                ),
                r = [];
            i.forEach((e) => {
                null != e && r.push(e);
            });
            let a = this.getNewlyAddedEmojiForGuild(e).map((e) => e.id);
            this.topEmojis = r.filter((e) => !a.includes(e.id));
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
        return o()(this.getDisambiguatedEmoji()).filter((t) => {
            let { names: n, name: i } = t,
                r = null != n && o().some(n, e),
                a = null != i && e(i),
                s = null != i && o().some(g(i), e);
            return r || a || s;
        });
    }
}
let eE = ((i = e_.resetFrequentlyUsed), new A.A({ ...eu(i) })),
    eA =
        ((r = e_.resetFrequentlyUsedReactionEmojis),
        new A.A({
            ...eu(r),
            computeFrecency: (e, t, n) =>
                null == n.maxTotalUse ? 0 : Math.trunc(1e3 * ((e / n.maxTotalUse) * 0.2 + (t / 1e3) * 0.8)),
            calculateMaxTotalUse: !0,
        }));
function eh() {
    (ea = {}), (es = {}), e_.reset(), el.clear(), (ei = 2);
}
function eI(e) {
    null != ea[e] && delete ea[e];
}
function ef() {
    (es = null), e_.reset(), 2 === ei && (eE.compute(), eA.compute());
}
function ep(e) {
    eI(e), e_.clear(e);
    let t = j.A.getGuildEmojis(e);
    if (null == t) return;
    let n = w.default.getCurrentUser();
    if (null == n) return;
    let i = !!(0, L.isIOS)() && !1;
    ea[e] = new Q(e, n.id, t, i);
}
function eT() {
    let e = v.A.settings,
        t = e.textAndImages?.diversitySurrogate?.value;
    null != t && W.Ay.setDefaultDiversitySurrogate(t), e_.reset();
    let n = v.A.frecencyWithoutFetchingLatest,
        i = n.emojiFrecency?.emojis ?? {},
        r = n.emojiReactionFrecency?.emojis ?? {};
    eE.overwriteHistory(
        o().mapValues(i, (e) => ({ ...e, recentUses: e.recentUses.map(Number).filter((e) => e > 0) })),
        X.pendingUsages,
    ),
        eA.overwriteHistory(
            o().mapValues(r, (e) => ({ ...e, recentUses: e.recentUses.map(Number).filter((e) => e > 0) })),
            X.emojiReactionPendingUsages,
        );
    if (o().isEmpty(i) && o().isEmpty(X.pendingUsages) && v.A.hasLoaded(q.oD.FRECENCY_AND_FAVORITES_SETTINGS))
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
            eE.track(e);
    if (
        o().isEmpty(r) &&
        o().isEmpty(X.emojiReactionPendingUsages) &&
        v.A.hasLoaded(q.oD.FRECENCY_AND_FAVORITES_SETTINGS)
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
            eA.track(e);
}
function em(e) {
    if (null == e) return !1;
    for (let t of e) {
        let e = t.id ?? t.uniqueName ?? t.name;
        null != e && (eE.track(e), X.pendingUsages.push({ key: e, timestamp: Date.now() }));
    }
    let t = e.length > 0;
    return t && 2 === ei && eE.compute(), t;
}
function eg(e) {
    let {
            guildId: t,
            role: { id: n },
        } = e,
        i = P.A.getRole(t, n);
    if (!(null != i && (0, N.U)(i))) return !1;
    ep(t), ef();
}
class eS extends _.Ay.PersistedStore {
    static displayName = "EmojiStore";
    static persistKey = "EmojiStoreV2";
    initialize(e) {
        this.waitFor(S.A, b.Ay, M.A, P.A, O.A, D.default, j.A, U.Ay, R.A, Y.A, v.A, w.default),
            null != e &&
                (null != e.pendingUsages && (X.pendingUsages = e.pendingUsages),
                null != e.emojiReactionPendingUsages && (X.emojiReactionPendingUsages = e.emojiReactionPendingUsages),
                null != e.expandedSectionsByGuildIds &&
                    (X.expandedSectionsByGuildIds = new Set(e.expandedSectionsByGuildIds))),
            this.syncWith([v.A], eT);
    }
    getState() {
        return X;
    }
    static migrations = [(e) => ({ ...e })];
    get loadState() {
        return ei;
    }
    hasPendingUsage() {
        return X.pendingUsages.length > 0 || X.emojiReactionPendingUsages.length > 0;
    }
    get expandedSectionsByGuildIds() {
        return X.expandedSectionsByGuildIds;
    }
    get categories() {
        return er;
    }
    get diversitySurrogate() {
        return W.Ay.getDefaultDiversitySurrogate() ?? "";
    }
    get emojiFrecencyWithoutFetchingLatest() {
        return eE;
    }
    get emojiReactionFrecencyWithoutFetchingLatest() {
        return eA;
    }
    getGuildEmoji(e) {
        ec();
        let t = null == e ? void 0 : ea[e];
        return t?.emojis ?? et;
    }
    getHiddenEmojiIds(e) {
        ec();
        let t = null == e ? void 0 : ea[e];
        return t?.hiddenEmojiIds ?? en;
    }
    getUsableGuildEmoji(e) {
        ec();
        let t = ea[e];
        return t?.usableEmojis ?? et;
    }
    getGuilds() {
        return ea;
    }
    getDisambiguatedEmojiContext(e) {
        return ec(), e_.get(e);
    }
    getSearchResultsOrder(e, t, n, i, r) {
        let a = t.toLowerCase(),
            s = F.A.escape(a),
            l = a.slice(0, 1).toUpperCase() + a.slice(1),
            d = F.A.escape(l);
        if (e.length > 0) {
            let {
                    boostFavorites: t,
                    boostCapitalizedWords: n,
                    boostAtEnd: l,
                    boostsIgnoreDisambiguators: c,
                } = B.getConfig({ location: "getSearchResultsOrder" }),
                u = RegExp(`^${s}`, "i"),
                _ = RegExp(`${s}$`, "i"),
                E = RegExp(`(^|_|[A-Z])${s}s?([A-Z]|_|$)`),
                A = RegExp(`(^|_|[A-Z])${s}s?([A-Z]|_|$)|(^|_|[a-z])${d}s?([A-Z]|_|$)`),
                h = n ? A : E,
                I = h.test.bind(h),
                f = u.test.bind(u),
                p = _.test.bind(_);
            e = o().orderBy(
                e,
                [
                    (e) =>
                        (function (e) {
                            let n = null != e.uniqueName,
                                s = n ? e.names[0] : c ? e.name.split("~")[0] : e.name,
                                o = n ? s : e.id;
                            if (null == s || null == o) return 0;
                            let d = s.toLowerCase(),
                                u =
                                    1 +
                                    4 * (d === a) +
                                    (I(d) || I(s) ? 2 : 0) +
                                    (f(s) ? 1 : l && p(s) ? 0.75 : 0) +
                                    (t && r.isFavoriteEmojiWithoutFetchingLatest(e) ? 0.5 : 0),
                                _ = i === $.EmojiIntention.REACTION ? eA.getScore(o) : eE.getScore(o);
                            return null != _ && (u *= _ / 100), u;
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
                intention: a,
                includeExternalGuilds: s = !0,
                matchComparator: l,
                showOnlyUnicode: o,
            } = e;
        ec();
        let d = i.toLowerCase().replaceAll(/[ _]/g, ""),
            c = F.A.escape(d);
        if (null == l) {
            let e = RegExp(`${c}`, "i");
            t = (t) => e.test(t.replaceAll("_", ""));
        } else t = l;
        let u = null != n ? n.getGuildId() : null,
            _ = e_.get(u),
            E = _.nameMatchesChain(t).reduce(
                (e, t) => {
                    let i = x.Ay.getEmojiUnavailableReason({
                        emoji: t,
                        channel: n,
                        intention: a,
                        forceIncludeExternalGuilds: s,
                    });
                    return (
                        i !== $.EmojiDisabledReasons.PREMIUM_LOCKED || o
                            ? null != i || (o && t.type !== H.i.UNICODE) || e.unlocked.push(t)
                            : e.locked.push(t),
                        e
                    );
                },
                { unlocked: [], locked: [] },
            );
        return {
            unlocked: this.getSearchResultsOrder(E.unlocked, i, r, a, _),
            locked: this.getSearchResultsOrder(E.locked, i, 0, a, _),
        };
    }
    getUsableCustomEmojiById(e) {
        return ec(), eo(e);
    }
    getCustomEmojiById(e) {
        let t;
        return ec(), null != (t = ed()[e]) ? (ea[t]?.getEmoji(e) ?? void 0) : void 0;
    }
    getTopEmoji(e) {
        return null == e ? ee : (ec(), e_.get(e).getTopEmojiWithoutFetchingLatest(e));
    }
    getNewlyAddedEmoji(e) {
        return null == e ? ee : (ec(), e_.get(e).getNewlyAddedEmojiForGuild(e));
    }
    getTopEmojisMetadata(e) {
        return el.get(e);
    }
    hasUsableEmojiInAnyGuild() {
        return ec(), V.default.keys(ea).some((e) => ea[e].usableEmojis.length > 0);
    }
    hasFavoriteEmojis(e) {
        let t = e_.get(e);
        return null != t && t.favoriteEmojisWithoutFetchingLatest.length > 0;
    }
}
let eN = new eS(E.h, {
    LOGOUT: function () {
        (X.pendingUsages = []), (X.emojiReactionPendingUsages = []);
    },
    BACKGROUND_SYNC: function () {
        eh();
    },
    CONNECTION_OPEN: function (e) {
        for (let t of (eh(), e.guilds)) ep(t.id);
        (ei = 0 === e.unavailableGuilds.length && e.guilds.every((e) => "full_sync" === e.emojis.op) ? 2 : 0), ef();
    },
    OVERLAY_INITIALIZE: function (e) {
        for (let t in (eh(), e.emojis)) ep(t);
        (ei = 2), ef();
    },
    CACHED_EMOJIS_LOADED: function (e) {
        let { emojis: t } = e;
        for (let [e] of t) M.A.isMember(e) && ep(e);
        ef();
    },
    GUILD_MEMBER_UPDATE: function (e) {
        let { guildId: t, user: n } = e;
        n.id === w.default.getCurrentUser()?.id && (ep(t), ef());
    },
    GUILD_CREATE: function (e) {
        ep(e.guild.id), ef();
    },
    GUILD_UPDATE: function (e) {
        ep(e.guild.id), ef();
    },
    GUILD_EMOJIS_UPDATE: function (e) {
        let { guildId: t } = e;
        ep(t), ef();
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        eI(t.id), el.delete(t.id), ef();
    },
    MESSAGE_REACTION_ADD: function (e) {
        if (!e.optimistic) return !1;
        let t =
            null != e.emoji.id && "0" !== e.emoji.id
                ? e.emoji
                : W.Ay.getByName(W.Ay.convertSurrogateToName(e.emoji.name, !1));
        if (null == t) return !1;
        (function (e) {
            if (null != e) {
                for (let t of e) {
                    let e = t.id ?? t.uniqueName ?? t.name;
                    null != e && (eA.track(e), X.emojiReactionPendingUsages.push({ key: e, timestamp: Date.now() }));
                }
                e.length > 0 && 2 === ei && eA.compute();
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
        if ((m(D.default.locale), t !== q.oD.FRECENCY_AND_FAVORITES_SETTINGS || !n)) return !1;
        (X.pendingUsages = []), (X.emojiReactionPendingUsages = []);
    },
    GUILD_ROLE_CREATE: eg,
    GUILD_ROLE_UPDATE: eg,
    TOP_EMOJIS_FETCH_SUCCESS: function (e) {
        let { guildId: t, topEmojisMetadata: n } = e;
        el.set(t, { emojiIds: n.map((e) => e.emojiId), topEmojisTTL: c()(c()()).add(1, "days").valueOf() });
    },
    TOGGLE_GUILD_EXPANDED_STATE: function (e) {
        let { guildId: t } = e,
            n = new Set(X.expandedSectionsByGuildIds);
        X.expandedSectionsByGuildIds.has(t) ? n.delete(t) : n.add(t), (X = { ...X, expandedSectionsByGuildIds: n });
    },
});
