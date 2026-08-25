"use strict";
n.d(t, { o2: () => eu, Ay: () => eS }), n(321073);
var i,
    r,
    a = n(284009),
    s = n.n(a),
    l = n(435558),
    o = n.n(l),
    d = n(536637),
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
    O = n(384684);
n(582128), n(702841);
var R = n(71393),
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
    V = n(935208),
    B = n(770335),
    H = n(608960),
    j = n(7584),
    W = n(354430),
    Y = n(635222),
    K = n(307731),
    $ = n(732139),
    z = n(355097);
let Z = [
        $.R2.TOP_GUILD_EMOJI.toString(),
        $.R2.FAVORITES.toString(),
        $.R2.RECENT.toString(),
        $.R2.CUSTOM.toString(),
    ].concat(j.Ay.getCategories()),
    q = { pendingUsages: [], emojiReactionPendingUsages: [], expandedSectionsByGuildIds: new Set() };
class X {
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
let Q = V.default.fromTimestamp(Date.now() - 60 * G.A.Millis.DAY),
    J = [],
    ee = [],
    et = new Set(),
    en = 2,
    ei = [...Z],
    er = {},
    ea = {},
    es = new Map();
function el(e) {
    let t = eo()[e];
    return null != t ? (er[t]?.getUsableEmoji(e) ?? void 0) : void 0;
}
function eo() {
    if ((ed(), null == ea)) for (let e in ((ea = {}), er)) for (let t of er[e].emojiIds()) ea[t] = e;
    return ea;
}
async function ed() {
    if (0 !== en) return;
    let e = h.A.database();
    if (null == e) return;
    en = 1;
    let t = await (0, I.ES)("EmojiStore.loadSavedEmojis", () =>
        u.A.timeAsync("\uD83D\uDCBE", "loadSavedEmojis", () => p.getAsync(e)),
    );
    (en = 2), null != t && E.h.dispatch({ type: "CACHED_EMOJIS_LOADED", emojis: t });
}
function ec(e) {
    return {
        computeBonus: () => 100,
        lookupKey: (e) => j.Ay.getByName(e) ?? el(e),
        afterCompute: () => {
            e(), (ei = [...Z]), o().some(er, (e) => e.usableEmojis.length > 0) || ei.splice(Z.indexOf($.R2.CUSTOM), 1);
        },
        numFrequentlyItems: 42,
    };
}
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
            i = (e) => {
                let n = e.name;
                e.names.slice(1).forEach((e) => this.unicodeAliases.set(e, n));
                let i = t.get(n) ?? 0;
                s()(0 === i, "Expected existing count to be 0"),
                    e.uniqueName !== n ? t.set(e.uniqueName, 1) : t.set(n, i + 1),
                    this.emojisByName.set(n, e),
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
                    V.default.compare(e.id, Q) >= 0 &&
                        (this.newlyAddedEmoji.has(a)
                            ? this.newlyAddedEmoji.get(a)?.push(n)
                            : this.newlyAddedEmoji.set(a, [n])),
                    this.disambiguatedEmoji.push(n);
            },
            a = (e) => {
                this.emoticonsByName.has(e.name) || (n.push(F.A.escape(e.name)), this.emoticonsByName.set(e.name, e));
            };
        function l(e) {
            let t = er[null == e ? y.eGj : e];
            null != t && (o().each(t.usableEmojis, r), o().each(t.emoticons, a));
        }
        for (const e of (j.Ay.forEach(i), l(this.guildId), this.newlyAddedEmoji.keys())) {
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
        let e = e_.frequently.map((e) => (null != e.id ? this.getById(e.id) : j.Ay.getByName(e.name))).filter(k.Vq),
            t = (0, Y.A)(e);
        return (this.frequentlyUsed = [...t.values()]), this.frequentlyUsed;
    }
    rebuildFrequentlyUsedReactionsEmojisWithoutFetchingLatest() {
        if (null != this.frequentlyUsedReactionEmojis && null != this.frequentlyUsedReactionNamesAndIds)
            return {
                frequentlyUsedReactionEmojis: this.frequentlyUsedReactionEmojis,
                frequentlyUsedReactionNamesAndIds: this.frequentlyUsedReactionNamesAndIds,
            };
        let e = eE.frequently.map((e) => (null != e.id ? this.getById(e.id) : j.Ay.getByName(e.name))).filter(k.Vq),
            t = (0, Y.A)(e);
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
        let n = j.Ay.convertSurrogateToBase(e.surrogates) ?? e;
        return t.has(n.name);
    }
    rebuildFavoriteEmojisWithoutFetchingLatest() {
        if (null != this.favorites && null != this.favoriteNamesAndIds)
            return { favorites: this.favorites, favoriteNamesAndIds: this.favoriteNamesAndIds };
        let e = (v.A.frecencyWithoutFetchingLatest.favoriteEmojis?.emojis ?? [])
                .map((e) => this.getById(e) ?? j.Ay.getByName(e))
                .filter(k.Vq),
            t = (0, Y.A)(e);
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
        let n = j.Ay.convertSurrogateToBase(e.surrogates) ?? e;
        return t.has(n.name);
    };
    getEmojiInPriorityOrderWithoutFetchingLatest() {
        let e = this.getFrequentlyUsedReactionEmojisWithoutFetchingLatest(),
            t = new Set();
        return this.favoriteEmojisWithoutFetchingLatest.concat(e).filter((e) => !t.has(e) && (t.add(e), !0));
    }
    getTopEmojiWithoutFetchingLatest(e) {
        if (null == this.topEmojis) {
            let t = es.get(e),
                n = W.A.getTopEmojiIdsByGuildId(e);
            if (null == t && null == n) return J;
            let i = (t?.emojiIds ?? n).map(
                    (e) => this.getById(e) ?? j.Ay.getByName(j.Ay.convertSurrogateToName(e, !1)),
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
        if (null == this.newlyAddedEmoji) return J;
        let t = this.newlyAddedEmoji.get(e);
        return null == t ? J : t;
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
let e_ = ((i = eu.resetFrequentlyUsed), new A.A({ ...ec(i) })),
    eE =
        ((r = eu.resetFrequentlyUsedReactionEmojis),
        new A.A({
            ...ec(r),
            computeFrecency: (e, t, n) =>
                null == n.maxTotalUse ? 0 : Math.trunc(1e3 * ((e / n.maxTotalUse) * 0.2 + (t / 1e3) * 0.8)),
            calculateMaxTotalUse: !0,
        }));
function eA() {
    (er = {}), (ea = {}), eu.reset(), es.clear(), (en = 2);
}
function eh(e) {
    null != er[e] && delete er[e];
}
function eI() {
    (ea = null), eu.reset(), 2 === en && (e_.compute(), eE.compute());
}
function ef(e) {
    eh(e), eu.clear(e);
    let t = H.A.getGuildEmojis(e);
    if (null == t) return;
    let n = w.default.getCurrentUser();
    if (null == n) return;
    let i = !!(0, L.isIOS)() && !1;
    er[e] = new X(e, n.id, t, i);
}
function ep() {
    let e = v.A.settings,
        t = e.textAndImages?.diversitySurrogate?.value;
    null != t && j.Ay.setDefaultDiversitySurrogate(t), eu.reset();
    let n = v.A.frecencyWithoutFetchingLatest,
        i = n.emojiFrecency?.emojis ?? {},
        r = n.emojiReactionFrecency?.emojis ?? {};
    e_.overwriteHistory(
        o().mapValues(i, (e) => ({ ...e, recentUses: e.recentUses.map(Number).filter((e) => e > 0) })),
        q.pendingUsages,
    ),
        eE.overwriteHistory(
            o().mapValues(r, (e) => ({ ...e, recentUses: e.recentUses.map(Number).filter((e) => e > 0) })),
            q.emojiReactionPendingUsages,
        );
    if (o().isEmpty(i) && o().isEmpty(q.pendingUsages) && v.A.hasLoaded(z.oD.FRECENCY_AND_FAVORITES_SETTINGS))
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
        o().isEmpty(r) &&
        o().isEmpty(q.emojiReactionPendingUsages) &&
        v.A.hasLoaded(z.oD.FRECENCY_AND_FAVORITES_SETTINGS)
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
            eE.track(e);
}
function eT(e) {
    if (null == e) return !1;
    for (let t of e) {
        let e = t.id ?? t.uniqueName ?? t.name;
        null != e && (e_.track(e), q.pendingUsages.push({ key: e, timestamp: Date.now() }));
    }
    let t = e.length > 0;
    return t && 2 === en && e_.compute(), t;
}
function em(e) {
    let {
            guildId: t,
            role: { id: n },
        } = e,
        i = P.A.getRole(t, n);
    if (!(null != i && (0, N.U)(i))) return !1;
    ef(t), eI();
}
class eg extends _.Ay.PersistedStore {
    static displayName = "EmojiStore";
    static persistKey = "EmojiStoreV2";
    initialize(e) {
        this.waitFor(S.A, b.Ay, M.A, P.A, R.A, D.default, H.A, U.Ay, O.A, W.A, v.A, w.default),
            null != e &&
                (null != e.pendingUsages && (q.pendingUsages = e.pendingUsages),
                null != e.emojiReactionPendingUsages && (q.emojiReactionPendingUsages = e.emojiReactionPendingUsages),
                null != e.expandedSectionsByGuildIds &&
                    (q.expandedSectionsByGuildIds = new Set(e.expandedSectionsByGuildIds))),
            this.syncWith([v.A], ep);
    }
    getState() {
        return q;
    }
    static migrations = [(e) => ({ ...e })];
    get loadState() {
        return en;
    }
    hasPendingUsage() {
        return q.pendingUsages.length > 0 || q.emojiReactionPendingUsages.length > 0;
    }
    get expandedSectionsByGuildIds() {
        return q.expandedSectionsByGuildIds;
    }
    get categories() {
        return ei;
    }
    get diversitySurrogate() {
        return j.Ay.getDefaultDiversitySurrogate() ?? "";
    }
    get emojiFrecencyWithoutFetchingLatest() {
        return e_;
    }
    get emojiReactionFrecencyWithoutFetchingLatest() {
        return eE;
    }
    getGuildEmoji(e) {
        ed();
        let t = null == e ? void 0 : er[e];
        return t?.emojis ?? ee;
    }
    getHiddenEmojiIds(e) {
        ed();
        let t = null == e ? void 0 : er[e];
        return t?.hiddenEmojiIds ?? et;
    }
    getUsableGuildEmoji(e) {
        ed();
        let t = er[e];
        return t?.usableEmojis ?? ee;
    }
    getGuilds() {
        return er;
    }
    getDisambiguatedEmojiContext(e) {
        return ed(), eu.get(e);
    }
    getSearchResultsOrder(e, t, n, i) {
        let r = t.toLowerCase(),
            a = F.A.escape(r);
        if (e.length > 0) {
            let t = RegExp(`^${a}`, "i"),
                n = RegExp(`(^|_|[A-Z])${a}s?([A-Z]|_|$)`),
                s = n.test.bind(n),
                l = t.test.bind(t);
            e = o().orderBy(
                e,
                [
                    (e) =>
                        (function (e) {
                            let t = null != e.uniqueName,
                                n = t ? e.names[0] : e.name,
                                a = t ? n : e.id;
                            if (null == n || null == a) return 0;
                            let o = n.toLowerCase(),
                                d = 1 + 4 * (o === r) + (s(o) || s(n) ? 2 : 0) + +!!l(n),
                                c = i === K.EmojiIntention.REACTION ? eE.getScore(a) : e_.getScore(a);
                            return null != c && (d *= c / 100), d;
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
                bypassPremiumEmojiEntitlement: d,
            } = e;
        ed();
        let c = i.toLowerCase().replaceAll(/[ _]/g, ""),
            u = F.A.escape(c);
        if (null == l) {
            let e = RegExp(`${u}`, "i");
            t = (t) => e.test(t.replaceAll("_", ""));
        } else t = l;
        let _ = null != n ? n.getGuildId() : null,
            E = eu
                .get(_)
                .nameMatchesChain(t)
                .reduce(
                    (e, t) => {
                        let i = x.Ay.getEmojiUnavailableReason({
                            emoji: t,
                            channel: n,
                            intention: a,
                            forceIncludeExternalGuilds: s,
                            bypassPremiumEmojiEntitlement: d,
                        });
                        return (
                            i !== K.EmojiDisabledReasons.PREMIUM_LOCKED || o
                                ? null != i || (o && t.type !== B.i.UNICODE) || e.unlocked.push(t)
                                : e.locked.push(t),
                            e
                        );
                    },
                    { unlocked: [], locked: [] },
                );
        return {
            unlocked: this.getSearchResultsOrder(E.unlocked, i, r, a),
            locked: this.getSearchResultsOrder(E.locked, i, 0, a),
        };
    }
    getUsableCustomEmojiById(e) {
        return ed(), el(e);
    }
    getCustomEmojiById(e) {
        let t;
        return ed(), null != (t = eo()[e]) ? (er[t]?.getEmoji(e) ?? void 0) : void 0;
    }
    getTopEmoji(e) {
        return null == e ? J : (ed(), eu.get(e).getTopEmojiWithoutFetchingLatest(e));
    }
    getNewlyAddedEmoji(e) {
        return null == e ? J : (ed(), eu.get(e).getNewlyAddedEmojiForGuild(e));
    }
    getTopEmojisMetadata(e) {
        return es.get(e);
    }
    hasUsableEmojiInAnyGuild() {
        return ed(), V.default.keys(er).some((e) => er[e].usableEmojis.length > 0);
    }
    hasFavoriteEmojis(e) {
        let t = eu.get(e);
        return null != t && t.favoriteEmojisWithoutFetchingLatest.length > 0;
    }
}
let eS = new eg(E.h, {
    LOGOUT: function () {
        (q.pendingUsages = []), (q.emojiReactionPendingUsages = []);
    },
    BACKGROUND_SYNC: function () {
        eA();
    },
    CONNECTION_OPEN: function (e) {
        for (let t of (eA(), e.guilds)) ef(t.id);
        (en = 0 === e.unavailableGuilds.length && e.guilds.every((e) => "full_sync" === e.emojis.op) ? 2 : 0), eI();
    },
    OVERLAY_INITIALIZE: function (e) {
        for (let t in (eA(), e.emojis)) ef(t);
        (en = 2), eI();
    },
    CACHED_EMOJIS_LOADED: function (e) {
        let { emojis: t } = e;
        for (let [e] of t) M.A.isMember(e) && ef(e);
        eI();
    },
    GUILD_MEMBER_UPDATE: function (e) {
        let { guildId: t, user: n } = e;
        n.id === w.default.getCurrentUser()?.id && (ef(t), eI());
    },
    GUILD_CREATE: function (e) {
        ef(e.guild.id), eI();
    },
    GUILD_UPDATE: function (e) {
        ef(e.guild.id), eI();
    },
    GUILD_EMOJIS_UPDATE: function (e) {
        let { guildId: t } = e;
        ef(t), eI();
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        eh(t.id), es.delete(t.id), eI();
    },
    MESSAGE_REACTION_ADD: function (e) {
        if (!e.optimistic) return !1;
        let t =
            null != e.emoji.id && "0" !== e.emoji.id
                ? e.emoji
                : j.Ay.getByName(j.Ay.convertSurrogateToName(e.emoji.name, !1));
        if (null == t) return !1;
        (function (e) {
            if (null != e) {
                for (let t of e) {
                    let e = t.id ?? t.uniqueName ?? t.name;
                    null != e && (eE.track(e), q.emojiReactionPendingUsages.push({ key: e, timestamp: Date.now() }));
                }
                e.length > 0 && 2 === en && eE.compute();
            }
        })([t]),
            eT([t]);
    },
    EMOJI_TRACK_USAGE: function (e) {
        let { emojiUsed: t } = e;
        eT(t);
    },
    USER_SETTINGS_PROTO_UPDATE: function (e) {
        let {
            settings: { type: t },
            wasSaved: n,
        } = e;
        if ((m(D.default.locale), t !== z.oD.FRECENCY_AND_FAVORITES_SETTINGS || !n)) return !1;
        (q.pendingUsages = []), (q.emojiReactionPendingUsages = []);
    },
    GUILD_ROLE_CREATE: em,
    GUILD_ROLE_UPDATE: em,
    TOP_EMOJIS_FETCH_SUCCESS: function (e) {
        let { guildId: t, topEmojisMetadata: n } = e;
        es.set(t, { emojiIds: n.map((e) => e.emojiId), topEmojisTTL: c()(c()()).add(1, "days").valueOf() });
    },
    TOGGLE_GUILD_EXPANDED_STATE: function (e) {
        let { guildId: t } = e,
            n = new Set(q.expandedSectionsByGuildIds);
        q.expandedSectionsByGuildIds.has(t) ? n.delete(t) : n.add(t), (q = { ...q, expandedSectionsByGuildIds: n });
    },
});
