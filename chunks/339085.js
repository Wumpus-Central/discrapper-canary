n.d(t, {
    De: () => eh,
    ZP: () => eF,
}),
    n(388685),
    n(825670),
    n(413496),
    n(433524),
    n(35282),
    n(539854),
    n(642613),
    n(804061),
    n(704826);
var r,
    i = n(512722),
    a = n.n(i),
    o = n(392711),
    s = n.n(o),
    l = n(913527),
    c = n.n(l),
    u = n(135273),
    d = n(442837),
    f = n(570140),
    _ = n(704907),
    p = n(287328),
    h = n(86670),
    m = n(489033),
    g = n(188742),
    E = n(353926),
    b = n(973542),
    y = n(889564),
    O = n(687476),
    v = n(978519),
    I = n(706454),
    T = n(581883),
    S = n(271383),
    A = n(93093),
    C = n(485386),
    N = n(430824),
    R = n(771845),
    P = n(594174),
    w = n(70956),
    D = n(176354),
    L = n(823379),
    x = n(226951),
    M = n(709054),
    j = n(906411),
    k = n(714424),
    U = n(633302),
    G = n(396352),
    B = n(856985),
    Z = n(185923),
    F = n(981631),
    V = n(149203),
    H = n(526761);
function Y(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function W(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                Y(e, t, n[t]);
            });
    }
    return e;
}
function K(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function z(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : K(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let q = [
        V.UX.TOP_GUILD_EMOJI.toString(),
        V.UX.FAVORITES.toString(),
        V.UX.RECENT.toString(),
        V.UX.CUSTOM.toString(),
    ].concat(U.ZP.getCategories()),
    X = {
        pendingUsages: [],
        emojiReactionPendingUsages: [],
        expandedSectionsByGuildIds: new Set(),
    };
class Q {
    getEmoji(e) {
        return this._emojiMap[e];
    }
    getUsableEmoji(e) {
        let t = this.getEmoji(e);
        return null != t && this.isUsable(t) ? t : void 0;
    }
    isUsable(e) {
        if (0 === e.roles.length) return !0;
        let t = S.ZP.getMember(this.id, this._userId);
        return null != t && !!(t.roles.some((t) => e.roles.includes(t)) || (0, y.yH)(e));
    }
    emojiIds() {
        return M.default.keys(this._emojiMap);
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
    constructor(e, t, n, r = !1) {
        Y(this, "id", void 0),
            Y(this, "_userId", void 0),
            Y(this, "_emojis", null),
            Y(this, "_emojiMap", void 0),
            Y(this, "_emoticons", null),
            Y(this, "_usableEmojis", null),
            Y(this, "_canSeeServerSubIAP", !1),
            (this.id = e),
            (this._userId = t),
            (this._emojiMap = n),
            (this._canSeeServerSubIAP = r);
    }
}
let J = 42,
    $ = M.default.fromTimestamp(Date.now() - 60 * w.Z.Millis.DAY),
    ee = [],
    et = [],
    en = 3,
    er = [...q],
    ei = {},
    ea = {},
    eo = new Map();
function es(e) {
    var t, n;
    let r = ec()[e];
    return null != r && null != (n = null == (t = ei[r]) ? void 0 : t.getEmoji(e)) ? n : void 0;
}
function el(e) {
    var t, n;
    let r = ec()[e];
    return null != r && null != (n = null == (t = ei[r]) ? void 0 : t.getUsableEmoji(e)) ? n : void 0;
}
function ec() {
    if ((eu(), null == ea)) for (let e in ((ea = {}), ei)) for (let t of ei[e].emojiIds()) ea[t] = e;
    return ea;
}
async function eu() {
    if (0 !== en) return;
    let e = p.Z.database();
    if (null == e) return;
    en = 2;
    let t = await (0, h.gs)("EmojiStore.loadSavedEmojis", () =>
        u.Z.timeAsync("\uD83D\uDCBE", "loadSavedEmojis", () => m.Z.getAsync(e)),
    );
    (en = 3),
        null != t &&
            f.Z.dispatch({
                type: "CACHED_EMOJIS_LOADED",
                emojis: t,
            });
}
function ed(e) {
    let { emojis: t } = e;
    for (let [e] of t) !Object.hasOwn(ei, e) && A.Z.isMember(e) && eO(e);
    ey();
}
let ef = (e) => ({
    computeBonus: () => 100,
    lookupKey: (e) => {
        var t;
        return null != (t = U.ZP.getByName(e)) ? t : el(e);
    },
    afterCompute: () => {
        e(), (er = [...q]), s().some(ei, (e) => e.usableEmojis.length > 0) || er.splice(q.indexOf(V.UX.CUSTOM), 1);
    },
    numFrequentlyItems: J,
});
function e_(e) {
    return new _.Z(W({}, ef(e)));
}
function ep(e) {
    return new _.Z(
        z(W({}, ef(e)), {
            computeFrecency: (e, t, n) =>
                null == n.maxTotalUse ? 0 : Math.trunc(1000 * ((e / n.maxTotalUse) * 0.2 + (t / 1000) * 0.8)),
            calculateMaxTotalUse: !0,
        }),
    );
}
class eh {
    static get(e) {
        return (
            void 0 === e && (e = null),
            (null == eh._lastInstance || eh._lastInstance.guildId !== e) && (eh._lastInstance = new eh(e)),
            eh._lastInstance
        );
    }
    static reset() {
        eh._lastInstance = null;
    }
    static resetFrequentlyUsed() {
        null != eh._lastInstance && (eh._lastInstance.frequentlyUsed = null);
    }
    static resetFrequentlyUsedReactionEmojis() {
        null != eh._lastInstance &&
            ((eh._lastInstance.frequentlyUsedReactionEmojis = null),
            (eh._lastInstance.frequentlyUsedReactionNamesAndIds = null));
    }
    static clear(e) {
        null != eh._lastInstance && eh._lastInstance.guildId === e && (eh._lastInstance = null);
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
                (this.emoticonRegex = new RegExp("^\\b(".concat(this.escapedEmoticonNames, ")\\b"))),
            this.emoticonRegex
        );
    }
    getFrequentlyUsedEmojisWithoutFetchingLatest() {
        if (null != this.frequentlyUsed) return this.frequentlyUsed;
        let e = em.frequently.map((e) => (null != e.id ? this.getById(e.id) : U.ZP.getByName(e.name))).filter(L.lm),
            t = (0, B.Z)(e);
        return (this.frequentlyUsed = [...t.values()]), this.frequentlyUsed;
    }
    rebuildFrequentlyUsedReactionsEmojisWithoutFetchingLatest() {
        if (null != this.frequentlyUsedReactionEmojis && null != this.frequentlyUsedReactionNamesAndIds)
            return {
                frequentlyUsedReactionEmojis: this.frequentlyUsedReactionEmojis,
                frequentlyUsedReactionNamesAndIds: this.frequentlyUsedReactionNamesAndIds,
            };
        let e = eg.frequently.map((e) => (null != e.id ? this.getById(e.id) : U.ZP.getByName(e.name))).filter(L.lm),
            t = (0, B.Z)(e);
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
        var t;
        let { frequentlyUsedReactionNamesAndIds: n } = this.rebuildFrequentlyUsedReactionsEmojisWithoutFetchingLatest();
        if (null != e.id) return n.has(e.id);
        let r = null != (t = U.ZP.convertSurrogateToBase(e.surrogates)) ? t : e;
        return n.has(r.name);
    }
    rebuildFavoriteEmojisWithoutFetchingLatest() {
        var e, t;
        if (null != this.favorites && null != this.favoriteNamesAndIds)
            return {
                favorites: this.favorites,
                favoriteNamesAndIds: this.favoriteNamesAndIds,
            };
        let n = (
                null != (t = null == (e = T.Z.frecencyWithoutFetchingLatest.favoriteEmojis) ? void 0 : e.emojis)
                    ? t
                    : []
            )
                .map((e) => {
                    var t;
                    return null != (t = this.getById(e)) ? t : U.ZP.getByName(e);
                })
                .filter(L.lm),
            r = (0, B.Z)(n);
        return (
            (this.favorites = [...r.values()]),
            (this.favoriteNamesAndIds = new Set(r.keys())),
            {
                favorites: this.favorites,
                favoriteNamesAndIds: this.favoriteNamesAndIds,
            }
        );
    }
    get favoriteEmojisWithoutFetchingLatest() {
        return this.rebuildFavoriteEmojisWithoutFetchingLatest().favorites;
    }
    getEmojiInPriorityOrderWithoutFetchingLatest() {
        let e = this.getFrequentlyUsedReactionEmojisWithoutFetchingLatest(),
            t = new Set();
        return this.favoriteEmojisWithoutFetchingLatest.concat(e).filter((e) => !t.has(e) && (t.add(e), !0));
    }
    getTopEmojiWithoutFetchingLatest(e) {
        if (null == this.topEmojis) {
            var t;
            let n = eo.get(e),
                r = G.Z.getTopEmojiIdsByGuildId(e);
            if (null == n && null == r) return ee;
            let i = (null != (t = null == n ? void 0 : n.emojiIds) ? t : r).map((e) => {
                    var t;
                    return null != (t = this.getById(e)) ? t : U.ZP.getByName(U.ZP.convertSurrogateToName(e, !1));
                }),
                a = [];
            i.forEach((e) => {
                null != e && a.push(e);
            });
            let o = this.getNewlyAddedEmojiForGuild(e).map((e) => e.id);
            this.topEmojis = a.filter((e) => !o.includes(e.id));
        }
        return this.topEmojis;
    }
    getNewlyAddedEmojiForGuild(e) {
        if (null == this.newlyAddedEmoji) return ee;
        let t = this.newlyAddedEmoji[e];
        return null == t ? ee : t;
    }
    getEscapedCustomEmoticonNames() {
        return this.escapedEmoticonNames;
    }
    nameMatchesChain(e) {
        return s()(this.getDisambiguatedEmoji()).filter((t) => {
            let { names: n, name: r } = t,
                i = null != n && s().some(n, e),
                a = null != r && e(r),
                o = null != r && s().some(g.Z.getTermsForEmoji(r), e);
            return i || a || o;
        });
    }
    constructor(e) {
        Y(this, "favorites", null),
            Y(this, "favoriteNamesAndIds", null),
            Y(this, "topEmojis", null),
            Y(this, "guildId", void 0),
            Y(this, "escapedEmoticonNames", void 0),
            Y(this, "disambiguatedEmoji", []),
            Y(this, "emoticonRegex", null),
            Y(this, "frequentlyUsed", null),
            Y(this, "frequentlyUsedReactionEmojis", null),
            Y(this, "frequentlyUsedReactionNamesAndIds", null),
            Y(this, "unicodeAliases", {}),
            Y(this, "customEmojis", {}),
            Y(this, "groupedCustomEmojis", {}),
            Y(this, "emoticonsByName", {}),
            Y(this, "emojisByName", {}),
            Y(this, "emojisById", {}),
            Y(this, "newlyAddedEmoji", {}),
            Y(this, "isFavoriteEmojiWithoutFetchingLatest", (e) => {
                var t;
                if (null == e) return !1;
                let { favoriteNamesAndIds: n } = this.rebuildFavoriteEmojisWithoutFetchingLatest();
                if (null != e.id) return n.has(e.id);
                let r = null != (t = U.ZP.convertSurrogateToBase(e.surrogates)) ? t : e;
                return n.has(r.name);
            }),
            (this.guildId = e);
        let t = {},
            n = [],
            r = (e) => {
                var n;
                e.names.slice(1).forEach((t) => (this.unicodeAliases[t] = e.name));
                let r = null != (n = t[e.name]) ? n : 0;
                a()(0 === r, "Expected existing count to be 0"),
                    (t[e.name] = r + 1),
                    (this.emojisByName[e.name] = e),
                    this.disambiguatedEmoji.push(e);
            },
            i = (e) => {
                var n;
                let r,
                    i = e.name,
                    a = null != (n = t[i]) ? n : 0;
                if (((t[i] = a + 1), a > 0)) {
                    let t = "".concat(i, "~").concat(a);
                    r = z(W({}, e), {
                        name: t,
                        originalName: i,
                    });
                } else r = e;
                (this.emojisByName[r.name] = r), (this.emojisById[r.id] = r), (this.customEmojis[r.name] = r);
                let { guildId: o } = e;
                null != this.groupedCustomEmojis[o]
                    ? this.groupedCustomEmojis[o].push(r)
                    : (this.groupedCustomEmojis[o] = [r]),
                    M.default.compare(e.id, $) >= 0 &&
                        (null != this.newlyAddedEmoji[o]
                            ? this.newlyAddedEmoji[o].push(r)
                            : (this.newlyAddedEmoji[o] = [r])),
                    this.disambiguatedEmoji.push(r);
            },
            o = (e) => {
                Object.prototype.hasOwnProperty.call(this.emoticonsByName, e.name) ||
                    (n.push(x.Z.escape(e.name)), (this.emoticonsByName[e.name] = e));
            };
        U.ZP.forEach(r);
        let l = (e) => {
            let t = ei[null == e ? F.kod : e];
            null != t && (s().each(t.usableEmojis, i), s().each(t.emoticons, o));
        };
        for (let e in (l(this.guildId), this.newlyAddedEmoji))
            null != this.newlyAddedEmoji[e]
                ? (this.newlyAddedEmoji[e] = this.newlyAddedEmoji[e]
                      .sort((e, t) => M.default.compare(t.id, e.id))
                      .slice(0, 3))
                : (this.newlyAddedEmoji[e] = []);
        R.ZP.getFlattenedGuildIds().forEach((e) => {
            e !== this.guildId && l(e);
        }),
            (this.escapedEmoticonNames = n.join("|"));
    }
}
Y(eh, "_lastInstance", null);
let em = e_(eh.resetFrequentlyUsed),
    eg = ep(eh.resetFrequentlyUsedReactionEmojis);
function eE() {
    (ei = {}), (ea = {}), eh.reset(), eo.clear(), (en = 3);
}
function eb(e) {
    null != ei[e] && delete ei[e];
}
function ey() {
    (ea = null), eh.reset(), (3 === en || 1 === en) && (em.compute(), eg.compute());
}
function eO(e) {
    eb(e), eh.clear(e);
    let t = k.Z.getGuildEmojis(e);
    if (null == t) return;
    let n = P.default.getCurrentUser();
    if (null == n) return;
    let r = (0, v.r)(e);
    ei[e] = new Q(e, n.id, t, r);
}
function ev(e) {
    for (let t of (eE(), e.guilds)) eO(t.id);
    (en = +!!e.guilds.every((e) => null != e.emojis.items)), ey();
}
function eI(e) {
    for (let t in (eE(), e.emojis)) eO(t);
    (en = 1), ey();
}
function eT() {
    (X.pendingUsages = []), (X.emojiReactionPendingUsages = []);
}
function eS() {
    eE();
}
function eA(e) {
    1 === en && "update" === e.guild.emojis.op && null == e.guild.emojis.items && (en = 0), eO(e.guild.id), ey();
}
function eC(e) {
    eO(e.guild.id), ey();
}
function eN(e) {
    let { guildId: t } = e;
    eO(t), ey();
}
function eR(e) {
    let { guild: t } = e;
    eb(t.id), eo.delete(t.id), ey();
}
function eP(e) {
    var t;
    let { guildId: n, user: r } = e;
    r.id === (null == (t = P.default.getCurrentUser()) ? void 0 : t.id) && (eO(n), ey());
}
function ew(e) {
    if (!e.optimistic) return !1;
    let t =
        null != e.emoji.id && "0" !== e.emoji.id
            ? e.emoji
            : U.ZP.getByName(U.ZP.convertSurrogateToName(e.emoji.name, !1));
    if (null == t) return !1;
    ek([t]), ej([t]);
}
function eD(e, t) {
    if (s().isEmpty(e) && s().isEmpty(X.pendingUsages) && T.Z.hasLoaded(H.yP.FRECENCY_AND_FAVORITES_SETTINGS))
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
            em.track(e);
    if (
        s().isEmpty(t) &&
        s().isEmpty(X.emojiReactionPendingUsages) &&
        T.Z.hasLoaded(H.yP.FRECENCY_AND_FAVORITES_SETTINGS)
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
            eg.track(e);
}
function eL() {
    var e, t, n, r, i, a;
    let o = null == (t = T.Z.settings.textAndImages) || null == (e = t.diversitySurrogate) ? void 0 : e.value;
    null != o && U.ZP.setDefaultDiversitySurrogate(o), eh.reset();
    let l = T.Z.frecencyWithoutFetchingLatest,
        c = null != (i = null == (n = l.emojiFrecency) ? void 0 : n.emojis) ? i : {},
        u = null != (a = null == (r = l.emojiReactionFrecency) ? void 0 : r.emojis) ? a : {};
    em.overwriteHistory(
        s().mapValues(c, (e) => z(W({}, e), { recentUses: e.recentUses.map(Number).filter((e) => e > 0) })),
        X.pendingUsages,
    ),
        eg.overwriteHistory(
            s().mapValues(u, (e) => z(W({}, e), { recentUses: e.recentUses.map(Number).filter((e) => e > 0) })),
            X.emojiReactionPendingUsages,
        ),
        eD(c, u);
}
function ex(e) {
    let {
        settings: { type: t },
        wasSaved: n,
    } = e;
    if ((g.Z.setEmojiLocale(I.default.locale), t !== H.yP.FRECENCY_AND_FAVORITES_SETTINGS || !n)) return !1;
    (X.pendingUsages = []), (X.emojiReactionPendingUsages = []);
}
function eM(e) {
    let { emojiUsed: t } = e;
    ej(t);
}
function ej(e) {
    if (null == e) return !1;
    for (let r of e) {
        var t, n;
        let e = null != (n = null != (t = r.id) ? t : r.uniqueName) ? n : r.name;
        null != e &&
            (em.track(e),
            X.pendingUsages.push({
                key: e,
                timestamp: Date.now(),
            }));
    }
    let r = e.length > 0;
    return r && (3 === en || 1 === en) && em.compute(), r;
}
function ek(e) {
    if (null == e) return !1;
    for (let r of e) {
        var t, n;
        let e = null != (n = null != (t = r.id) ? t : r.uniqueName) ? n : r.name;
        null != e &&
            (eg.track(e),
            X.emojiReactionPendingUsages.push({
                key: e,
                timestamp: Date.now(),
            }));
    }
    let r = e.length > 0;
    return r && (3 === en || 1 === en) && eg.compute(), r;
}
function eU(e) {
    let {
            guildId: t,
            role: { id: n },
        } = e,
        r = C.Z.getRole(t, n);
    if (!(null != r && (0, b.Z)(r))) return !1;
    eO(t), ey();
}
function eG(e) {
    let { guildId: t } = e,
        n = new Set(X.expandedSectionsByGuildIds);
    X.expandedSectionsByGuildIds.has(t) ? n.delete(t) : n.add(t), (X = z(W({}, X), { expandedSectionsByGuildIds: n }));
}
function eB(e) {
    let { guildId: t, topEmojisMetadata: n } = e;
    eo.set(t, {
        emojiIds: n.map((e) => e.emojiId),
        topEmojisTTL: c()(c()()).add(1, "days").valueOf(),
    });
}
class eZ extends (r = d.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(p.Z, A.Z, S.ZP, N.Z, I.default, O.Z, G.Z, P.default, E.Z, C.Z, k.Z),
            null != e &&
                (null != e.pendingUsages && (X.pendingUsages = e.pendingUsages),
                null != e.emojiReactionPendingUsages && (X.emojiReactionPendingUsages = e.emojiReactionPendingUsages),
                null != e.expandedSectionsByGuildIds &&
                    (X.expandedSectionsByGuildIds = new Set(e.expandedSectionsByGuildIds))),
            this.syncWith([T.Z], eL);
    }
    getState() {
        return X;
    }
    get loadState() {
        return en;
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
        var e;
        return null != (e = U.ZP.getDefaultDiversitySurrogate()) ? e : "";
    }
    get emojiFrecencyWithoutFetchingLatest() {
        return em;
    }
    get emojiReactionFrecencyWithoutFetchingLatest() {
        return eg;
    }
    getGuildEmoji(e) {
        var t;
        eu();
        let n = null == e ? void 0 : ei[e];
        return null != (t = null == n ? void 0 : n.emojis) ? t : et;
    }
    getUsableGuildEmoji(e) {
        var t;
        eu();
        let n = ei[e];
        return null != (t = null == n ? void 0 : n.usableEmojis) ? t : et;
    }
    getGuilds() {
        return ei;
    }
    getDisambiguatedEmojiContext(e) {
        return eu(), eh.get(e);
    }
    getSearchResultsOrder(e, t, n, r) {
        let i = t.toLowerCase(),
            a = x.Z.escape(i);
        if (e.length > 0) {
            let t = RegExp("^".concat(a), "i"),
                n = new RegExp("(^|_|[A-Z])".concat(a, "s?([A-Z]|_|$)")),
                o = n.test.bind(n),
                l = t.test.bind(t),
                c = function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e;
                    if (null == e || null == t) return 0;
                    let n = e.toLowerCase(),
                        a = 1 + 4 * (n === i) + (o(n) || o(e) ? 2 : 0) + +!!l(e),
                        s = r === Z.Hz.REACTION ? eg.getScore(t) : em.getScore(t);
                    return null != s && (a *= s / 100), a;
                };
            e = s().orderBy(
                e,
                [
                    (e) => (null != e.names ? c(e.names[0]) : c(e.name, e.id)),
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
                intention: a,
                includeExternalGuilds: o = !0,
                matchComparator: s,
                showOnlyUnicode: l,
            } = e;
        eu();
        let c = r.toLowerCase().replaceAll(/[ _]/g, ""),
            u = x.Z.escape(c);
        if (null == s) {
            let e = RegExp("".concat(u), "i");
            t = (t) => e.test(t.replaceAll("_", ""));
        } else t = s;
        let d = null != n ? n.getGuildId() : null,
            f = eh
                .get(d)
                .nameMatchesChain(t)
                .reduce(
                    (e, t) => {
                        let r = D.ZP.getEmojiUnavailableReason({
                            emoji: t,
                            channel: n,
                            intention: a,
                            forceIncludeExternalGuilds: o,
                        });
                        return (
                            r !== Z.Z5.PREMIUM_LOCKED || l
                                ? null != r || (l && t.type !== j.B.UNICODE) || e.unlocked.push(t)
                                : e.locked.push(t),
                            e
                        );
                    },
                    {
                        unlocked: [],
                        locked: [],
                    },
                );
        return {
            unlocked: this.getSearchResultsOrder(f.unlocked, r, i, a),
            locked: this.getSearchResultsOrder(f.locked, r, 0, a),
        };
    }
    getUsableCustomEmojiById(e) {
        return eu(), el(e);
    }
    getCustomEmojiById(e) {
        return eu(), es(e);
    }
    getTopEmoji(e) {
        return null == e ? ee : (eu(), eh.get(e).getTopEmojiWithoutFetchingLatest(e));
    }
    getNewlyAddedEmoji(e) {
        return null == e ? ee : (eu(), eh.get(e).getNewlyAddedEmojiForGuild(e));
    }
    getTopEmojisMetadata(e) {
        return eo.get(e);
    }
    hasUsableEmojiInAnyGuild() {
        return eu(), M.default.keys(ei).some((e) => ei[e].usableEmojis.length > 0);
    }
    hasFavoriteEmojis(e) {
        let t = eh.get(e);
        return null != t && t.favoriteEmojisWithoutFetchingLatest.length > 0;
    }
}
Y(eZ, "displayName", "EmojiStore"), Y(eZ, "persistKey", "EmojiStoreV2"), Y(eZ, "migrations", [(e) => W({}, e)]);
let eF = new eZ(f.Z, {
    LOGOUT: eT,
    BACKGROUND_SYNC: eS,
    CONNECTION_OPEN: ev,
    OVERLAY_INITIALIZE: eI,
    CACHED_EMOJIS_LOADED: ed,
    GUILD_MEMBER_UPDATE: eP,
    GUILD_CREATE: eA,
    GUILD_UPDATE: eC,
    GUILD_EMOJIS_UPDATE: eN,
    GUILD_DELETE: eR,
    MESSAGE_REACTION_ADD: ew,
    EMOJI_TRACK_USAGE: eM,
    USER_SETTINGS_PROTO_UPDATE: ex,
    GUILD_ROLE_CREATE: eU,
    GUILD_ROLE_UPDATE: eU,
    TOP_EMOJIS_FETCH_SUCCESS: eB,
    TOGGLE_GUILD_EXPANDED_STATE: eG,
});
