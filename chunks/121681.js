(n.d(t, { o2: () => e_, Ay: () => eC }), n(321073));
var i,
    r,
    a = n(284009),
    s = n.n(a),
    l = n(435558),
    o = n.n(l),
    d = n(536637),
    c = n.n(d),
    u = n(61090),
    _ = n(855986),
    E = n(73153),
    A = n(283047),
    h = n(723176),
    f = n(154049);
let I = new (n(626584).A)("GuildEmojis"),
    p = new (class {
        async getAsync(e) {
            let t = performance.now(),
                n = await h.A.emojis(e).getMapEntries(),
                i = performance.now();
            return (I.log(`asynchronously loaded in ${i - t}ms (guilds: ${n.length})`), n);
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
                            ? (I.verbose(`Replacing ${e.entities.length} emojis for ${e.guildId}`),
                              this.replace(e.guildId, e.entities, t))
                            : (e.updatedEntities.length > 0 || e.deletedEntityIds.length > 0) &&
                              (I.verbose(
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
    m = new (class {
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
            return (this.ensureLoaded(), this.val);
        }
        ensureLoaded() {
            if (this.loaded || this.loading || void 0 === this.param) return;
            let e = this.param;
            ((this.loading = !0),
                this.loader(e).then((t) => {
                    e === this.param && ((this.val = t), (this.loading = !1), (this.loaded = !0));
                }));
        }
    })(function (e) {
        {
            let t = n(14206).S[e];
            return void 0 !== t ? t().then((e) => e.default) : Promise.resolve({});
        }
    }),
    g = function (e) {
        m.setParams(e);
    },
    T = function (e) {
        let t = m.get();
        return void 0 !== t ? t[e] : [];
    };
var S = n(343446),
    N = n(98318),
    C = n(492494),
    O = n(384684);
(n(582128), n(164636));
var R = n(71393),
    L = n(723702);
n(652215).GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE;
var y = n(773669),
    D = n(617617),
    b = n(696451),
    v = n(184989),
    P = n(317525),
    M = n(711014),
    U = n(287809),
    w = n(927813),
    G = n(690521),
    x = n(403362),
    k = n(257120),
    F = n(811091),
    B = n(770335),
    V = n(608960),
    H = n(7584),
    j = n(956396),
    W = n(354430),
    Y = n(635222),
    K = n(307731),
    $ = n(732139),
    X = n(355097);
let z = [
        $.R2.TOP_GUILD_EMOJI.toString(),
        $.R2.FAVORITES.toString(),
        $.R2.RECENT.toString(),
        $.R2.CUSTOM.toString(),
    ].concat(H.Ay.getCategories()),
    q = { pendingUsages: [], emojiReactionPendingUsages: [], expandedSectionsByGuildIds: new Set() },
    Z = null;
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
        ((this.id = e), (this._userId = t), (this._emojiMap = n), (this._canSeeServerSubIAP = i));
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
        return F.default.keys(this._emojiMap);
    }
    get emojis() {
        return (null == this._emojis && (this._emojis = Object.values(this._emojiMap)), this._emojis);
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
        ((this._usableEmojis = o().sortBy(e, (e) => e.name)), (this._hiddenEmojiIds = t));
    }
    get usableEmojis() {
        return (this._computeEmojiUsability(), this._usableEmojis);
    }
    hasUsableEmoji() {
        return null != this._usableEmojis ? this._usableEmojis.length > 0 : this.emojis.some((e) => this.isUsable(e));
    }
    get hiddenEmojiIds() {
        return (this._computeEmojiUsability(), this._hiddenEmojiIds);
    }
}
let J = F.default.fromTimestamp(Date.now() - 60 * w.A.Millis.DAY),
    ee = [],
    et = [],
    en = new Set(),
    ei = 2,
    er = [...z],
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
    let t = await (0, f.ES)("EmojiStore.loadSavedEmojis", () =>
        u.A.timeAsync("\uD83D\uDCBE", "loadSavedEmojis", () => p.getAsync(e)),
    );
    ((ei = 2), null != t && E.h.dispatch({ type: "CACHED_EMOJIS_LOADED", emojis: t }));
}
function eu(e) {
    return {
        computeBonus: () => 100,
        lookupKey: (e) => {
            let t = H.Ay.getByName(e) ?? eo(e);
            if (null != t) return t;
            let n = j.A.getEmoji(e);
            return null != n && j.A.isPackEmojiUsable(n) ? n : void 0;
        },
        afterCompute: () => {
            (e(), (er = [...z]), o().some(ea, (e) => e.hasUsableEmoji()) || er.splice(z.indexOf($.R2.CUSTOM), 1));
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
        let t = new Map(),
            n = [],
            i = (e) => {
                let n = e.name;
                e.names.slice(1).forEach((e) => this.unicodeAliases.set(e, n));
                let i = t.get(n) ?? 0;
                (s()(0 === i, "Expected existing count to be 0"),
                    e.uniqueName !== n ? t.set(e.uniqueName, 1) : t.set(n, i + 1),
                    this.emojisByName.set(n, e),
                    this.disambiguatedEmoji.push(e));
            },
            r = (e) => {
                let n,
                    i = e.name,
                    r = t.get(i) ?? 0;
                if ((t.set(i, r + 1), r > 0)) {
                    let t = `${i}~${r}`;
                    n = { ...e, name: t, originalName: i };
                } else n = e;
                (this.emojisByName.set(n.name, n), this.emojisById.set(n.id, n), this.customEmojis.set(n.name, n));
                let a = e.guildId;
                (this.customEmojisByGroup.has(a)
                    ? this.customEmojisByGroup.get(a)?.push(n)
                    : this.customEmojisByGroup.set(a, [n]),
                    F.default.compare(e.id, J) >= 0 &&
                        (this.newlyAddedEmoji.has(a)
                            ? this.newlyAddedEmoji.get(a)?.push(n)
                            : this.newlyAddedEmoji.set(a, [n])),
                    this.disambiguatedEmoji.push(n));
            },
            a = (e) => {
                this.emoticonsByName.has(e.name) || (n.push(k.A.escape(e.name)), this.emoticonsByName.set(e.name, e));
            };
        function l(e) {
            let t = ea[null == e ? "null" : e];
            null != t && (o().each(t.usableEmojis, r), o().each(t.emoticons, a));
        }
        for (let e of (H.Ay.forEach(i), l(this.guildId), this.newlyAddedEmoji.keys())) {
            let t = this.newlyAddedEmoji.get(e);
            if (null == t) {
                this.newlyAddedEmoji.set(e, []);
                continue;
            }
            this.newlyAddedEmoji.set(e, t.sort((e, t) => F.default.compare(t.id, e.id)).slice(0, 3));
        }
        (M.Ay.getFlattenedGuildIds().forEach((e) => {
            e !== this.guildId && l(e);
        }),
            j.A.getIndexablePackEmojis().forEach((e) => {
                let n = t.get(e.name) ?? 0;
                t.set(e.name, n + 1);
                let i = n > 0 ? { ...e, name: `${e.name}~${n}`, originalName: e.name } : e;
                (this.emojisByName.set(i.name, i), this.emojisById.set(i.id, i), this.disambiguatedEmoji.push(i));
            }),
            (this.escapedEmoticonNames = n.join("|")));
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
        let e = eA.frequently.map((e) => (null != e.id ? this.getById(e.id) : H.Ay.getByName(e.name))).filter(x.Vq),
            t = (0, Y.A)(e);
        return ((this.frequentlyUsed = [...t.values()]), this.frequentlyUsed);
    }
    rebuildFrequentlyUsedReactionsEmojisWithoutFetchingLatest() {
        if (null != this.frequentlyUsedReactionEmojis && null != this.frequentlyUsedReactionNamesAndIds)
            return {
                frequentlyUsedReactionEmojis: this.frequentlyUsedReactionEmojis,
                frequentlyUsedReactionNamesAndIds: this.frequentlyUsedReactionNamesAndIds,
            };
        let e = eh.frequently.map((e) => (null != e.id ? this.getById(e.id) : H.Ay.getByName(e.name))).filter(x.Vq),
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
        let n = H.Ay.convertSurrogateToBase(e.surrogates) ?? e;
        return t.has(n.name);
    }
    rebuildFavoriteEmojisWithoutFetchingLatest() {
        if (null != this.favorites && null != this.favoriteNamesAndIds)
            return { favorites: this.favorites, favoriteNamesAndIds: this.favoriteNamesAndIds };
        let e = (D.A.frecencyWithoutFetchingLatest.favoriteEmojis?.emojis ?? [])
                .map((e) => this.getById(e) ?? H.Ay.getByName(e))
                .filter(x.Vq),
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
        let n = H.Ay.convertSurrogateToBase(e.surrogates) ?? e;
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
                n = W.A.getTopEmojiIdsByGuildId(e);
            if (null == t && null == n) return ee;
            let i = (t?.emojiIds ?? n).map(
                    (e) => this.getById(e) ?? H.Ay.getByName(H.Ay.convertSurrogateToName(e, !1)),
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
                s = null != i && o().some(T(i), e);
            return r || a || s;
        });
    }
}
function eE() {
    let e = j.A.getIndexablePackEmojis();
    return e !== Z && ((Z = e), e_.reset(), eA.markDirty(), eh.markDirty(), !0);
}
let eA = ((i = e_.resetFrequentlyUsed), new A.A({ ...eu(i) })),
    eh =
        ((r = e_.resetFrequentlyUsedReactionEmojis),
        new A.A({
            ...eu(r),
            computeFrecency: (e, t, n) =>
                null == n.maxTotalUse ? 0 : Math.trunc(1e3 * ((e / n.maxTotalUse) * 0.2 + (t / 1e3) * 0.8)),
            calculateMaxTotalUse: !0,
        }));
function ef() {
    ((ea = {}), (es = {}), e_.reset(), el.clear(), (ei = 2));
}
function eI(e) {
    null != ea[e] && delete ea[e];
}
function ep() {
    ((es = null), e_.reset(), 2 === ei && (eA.compute(), eh.compute()));
}
function em(e) {
    (eI(e), e_.clear(e));
    let t = V.A.getGuildEmojis(e);
    if (null == t) return;
    let n = U.default.getCurrentUser();
    if (null == n) return;
    let i = !!(0, L.un)() && !1;
    ea[e] = new Q(e, n.id, t, i);
}
function eg() {
    let e = D.A.settings,
        t = e.textAndImages?.diversitySurrogate?.value;
    (null != t && H.Ay.setDefaultDiversitySurrogate(t), e_.reset());
    let n = D.A.frecencyWithoutFetchingLatest,
        i = n.emojiFrecency?.emojis ?? {},
        r = n.emojiReactionFrecency?.emojis ?? {};
    (eA.overwriteHistory(
        o().mapValues(i, (e) => ({ ...e, recentUses: e.recentUses.map(Number).filter((e) => e > 0) })),
        q.pendingUsages,
    ),
        eh.overwriteHistory(
            o().mapValues(r, (e) => ({ ...e, recentUses: e.recentUses.map(Number).filter((e) => e > 0) })),
            q.emojiReactionPendingUsages,
        ));
    if (o().isEmpty(i) && o().isEmpty(q.pendingUsages) && D.A.hasLoaded(X.oD.FRECENCY_AND_FAVORITES_SETTINGS))
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
            eA.track(e);
    if (
        o().isEmpty(r) &&
        o().isEmpty(q.emojiReactionPendingUsages) &&
        D.A.hasLoaded(X.oD.FRECENCY_AND_FAVORITES_SETTINGS)
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
            eh.track(e);
}
function eT(e) {
    if (null == e) return !1;
    for (let t of e) {
        let e = t.id ?? t.uniqueName ?? t.name;
        null != e && (eA.track(e), q.pendingUsages.push({ key: e, timestamp: Date.now() }));
    }
    let t = e.length > 0;
    return (t && 2 === ei && eA.compute(), t);
}
function eS(e) {
    let {
            guildId: t,
            role: { id: n },
        } = e,
        i = P.A.getRole(t, n);
    if (!(null != i && (0, N.U)(i))) return !1;
    (em(t), ep());
}
class eN extends _.Ay.PersistedStore {
    static displayName = "EmojiStore";
    static persistKey = "EmojiStoreV2";
    initialize(e) {
        (this.waitFor(j.A, S.A, b.Ay, v.A, P.A, R.A, y.default, V.A, M.Ay, O.A, W.A, D.A, U.default),
            null != e &&
                (null != e.pendingUsages && (q.pendingUsages = e.pendingUsages),
                null != e.emojiReactionPendingUsages && (q.emojiReactionPendingUsages = e.emojiReactionPendingUsages),
                null != e.expandedSectionsByGuildIds &&
                    (q.expandedSectionsByGuildIds = new Set(e.expandedSectionsByGuildIds))),
            (Z = j.A.getIndexablePackEmojis()),
            this.syncWith([D.A], eg),
            this.syncWith([j.A], eE));
    }
    getState() {
        return q;
    }
    static migrations = [(e) => ({ ...e })];
    get loadState() {
        return ei;
    }
    hasPendingUsage() {
        return q.pendingUsages.length > 0 || q.emojiReactionPendingUsages.length > 0;
    }
    get expandedSectionsByGuildIds() {
        return q.expandedSectionsByGuildIds;
    }
    get categories() {
        return er;
    }
    get diversitySurrogate() {
        return H.Ay.getDefaultDiversitySurrogate() ?? "";
    }
    get emojiFrecencyWithoutFetchingLatest() {
        return eA;
    }
    get emojiReactionFrecencyWithoutFetchingLatest() {
        return eh;
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
        return (ec(), e_.get(e));
    }
    getSearchResultsOrder(e, t, n, i) {
        let r = t.toLowerCase(),
            a = k.A.escape(r);
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
                                c = i === K.EmojiIntention.REACTION ? eh.getScore(a) : eA.getScore(a);
                            return (null != c && (d *= Math.max(1, c / 100)), d);
                        })(e),
                    (e) => (null != e.names ? e.names[0] : e.name),
                ],
                ["desc", "asc"],
            );
        }
        return (n > 0 && (e = e.slice(0, n)), e);
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
        ec();
        let c = i.toLowerCase().replaceAll(/[ _]/g, ""),
            u = k.A.escape(c);
        if (null == l) {
            let e = RegExp(`${u}`, "i");
            t = (t) => e.test(t.replaceAll("_", ""));
        } else t = l;
        let _ = null != n ? n.getGuildId() : null,
            E = e_
                .get(_)
                .nameMatchesChain(t)
                .reduce(
                    (e, t) => {
                        let i = G.Ay.getEmojiUnavailableReason({
                            emoji: t,
                            channel: n,
                            intention: a,
                            forceIncludeExternalGuilds: s,
                            bypassPremiumEmojiEntitlement: d,
                        });
                        return (
                            i !== K.Am.PREMIUM_LOCKED || o
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
        return (ec(), eo(e));
    }
    getCustomEmojiById(e) {
        let t;
        return (ec(), null != (t = ed()[e]) ? (ea[t]?.getEmoji(e) ?? void 0) : void 0);
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
        return (ec(), F.default.keys(ea).some((e) => ea[e].hasUsableEmoji()));
    }
    hasFavoriteEmojis(e) {
        let t = e_.get(e);
        return null != t && t.favoriteEmojisWithoutFetchingLatest.length > 0;
    }
}
let eC = new eN(E.h, {
    LOGOUT: function () {
        ((q.pendingUsages = []), (q.emojiReactionPendingUsages = []));
    },
    BACKGROUND_SYNC: function () {
        ef();
    },
    CONNECTION_OPEN: function (e) {
        for (let t of (ef(), e.guilds)) em(t.id);
        ((ei = 0 === e.unavailableGuilds.length && e.guilds.every((e) => "full_sync" === e.emojis.op) ? 2 : 0), ep());
    },
    OVERLAY_INITIALIZE: function (e) {
        for (let t in (ef(), e.emojis)) em(t);
        ((ei = 2), ep());
    },
    CACHED_EMOJIS_LOADED: function (e) {
        let { emojis: t } = e;
        for (let [e] of t) v.A.isMember(e) && em(e);
        ep();
    },
    GUILD_MEMBER_UPDATE: function (e) {
        let { guildId: t, user: n } = e;
        n.id === U.default.getCurrentUser()?.id && (em(t), ep());
    },
    GUILD_CREATE: function (e) {
        (em(e.guild.id), ep());
    },
    GUILD_UPDATE: function (e) {
        (em(e.guild.id), ep());
    },
    GUILD_EMOJIS_UPDATE: function (e) {
        let { guildId: t } = e;
        (em(t), ep());
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        (eI(t.id), el.delete(t.id), ep());
    },
    MESSAGE_REACTION_ADD: function (e) {
        if (!e.optimistic) return !1;
        let t =
            null != e.emoji.id && "0" !== e.emoji.id
                ? e.emoji
                : H.Ay.getByName(H.Ay.convertSurrogateToName(e.emoji.name, !1));
        if (null == t) return !1;
        ((function (e) {
            if (null != e) {
                for (let t of e) {
                    let e = t.id ?? t.uniqueName ?? t.name;
                    null != e && (eh.track(e), q.emojiReactionPendingUsages.push({ key: e, timestamp: Date.now() }));
                }
                e.length > 0 && 2 === ei && eh.compute();
            }
        })([t]),
            eT([t]));
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
        if ((g(y.default.locale), t !== X.oD.FRECENCY_AND_FAVORITES_SETTINGS || !n)) return !1;
        ((q.pendingUsages = []), (q.emojiReactionPendingUsages = []));
    },
    GUILD_ROLE_CREATE: eS,
    GUILD_ROLE_UPDATE: eS,
    TOP_EMOJIS_FETCH_SUCCESS: function (e) {
        let { guildId: t, topEmojisMetadata: n } = e;
        el.set(t, { emojiIds: n.map((e) => e.emojiId), topEmojisTTL: c()(c()()).add(1, "days").valueOf() });
    },
    TOGGLE_GUILD_EXPANDED_STATE: function (e) {
        let { guildId: t } = e,
            n = new Set(q.expandedSectionsByGuildIds);
        (q.expandedSectionsByGuildIds.has(t) ? n.delete(t) : n.add(t), (q = { ...q, expandedSectionsByGuildIds: n }));
    },
});
