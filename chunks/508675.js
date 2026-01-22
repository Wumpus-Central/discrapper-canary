n.d(t, {
    Ay: () => eH,
    o2: () => em,
}),
    n(896048),
    n(205816),
    n(591487),
    n(727858),
    n(747238),
    n(321073),
    n(638769),
    n(812715),
    n(866193);
var r,
    i = n(284009),
    a = n.n(i),
    s = n(735438),
    o = n.n(s),
    l = n(989349),
    c = n.n(l),
    u = n(61090),
    d = n(311907),
    f = n(73153),
    p = n(283047),
    _ = n(723176),
    h = n(154049),
    m = n(995604),
    g = n(710026),
    E = n(49463),
    b = n(98318),
    y = n(492494),
    O = n(384684),
    A = n(46467),
    v = n(773669),
    S = n(617617),
    I = n(696451),
    T = n(184989),
    C = n(317525),
    N = n(71393),
    R = n(711014),
    w = n(287809),
    P = n(927813),
    D = n(690521),
    x = n(403362),
    L = n(257120),
    j = n(661191),
    M = n(84144),
    k = n(770335),
    U = n(608960),
    G = n(7584),
    V = n(354430),
    F = n(635222),
    B = n(307731),
    H = n(652215),
    Y = n(732139),
    W = n(355097);
function K(e, t, n) {
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
function z(e) {
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
                K(e, t, n[t]);
            });
    }
    return e;
}
function q(e, t) {
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
function X(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : q(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let Z = [
        Y.R2.TOP_GUILD_EMOJI.toString(),
        Y.R2.FAVORITES.toString(),
        Y.R2.RECENT.toString(),
        Y.R2.CUSTOM.toString(),
    ].concat(G.Ay.getCategories()),
    Q = {
        pendingUsages: [],
        emojiReactionPendingUsages: [],
        expandedSectionsByGuildIds: new Set(),
    };
class $ {
    getEmoji(e) {
        return this._emojiMap[e];
    }
    getUsableEmoji(e) {
        let t = this.getEmoji(e);
        return null != t && this.isUsable(t) ? t : void 0;
    }
    isUsable(e) {
        if (0 === e.roles.length) return !0;
        let t = I.Ay.getMember(this.id, this._userId);
        return null != t && !!(t.roles.some((t) => e.roles.includes(t)) || (0, y.kT)(e));
    }
    emojiIds() {
        return j.default.keys(this._emojiMap);
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
                (this._usableEmojis = o().sortBy(
                    this.emojis.filter((e) => this.isUsable(e)),
                    (e) => e.name,
                )),
            this._usableEmojis
        );
    }
    constructor(e, t, n, r = !1) {
        K(this, "id", void 0),
            K(this, "_userId", void 0),
            K(this, "_emojis", null),
            K(this, "_emojiMap", void 0),
            K(this, "_emoticons", null),
            K(this, "_usableEmojis", null),
            K(this, "_canSeeServerSubIAP", !1),
            (this.id = e),
            (this._userId = t),
            (this._emojiMap = n),
            (this._canSeeServerSubIAP = r);
    }
}
let J = 42,
    ee = j.default.fromTimestamp(Date.now() - 60 * P.A.Millis.DAY),
    et = [],
    en = [],
    er = 3,
    ei = [...Z],
    ea = {},
    es = {},
    eo = new Map();
function el(e) {
    var t, n;
    let r = eu()[e];
    return null != r && null != (t = null == (n = ea[r]) ? void 0 : n.getEmoji(e)) ? t : void 0;
}
function ec(e) {
    var t, n;
    let r = eu()[e];
    return null != r && null != (t = null == (n = ea[r]) ? void 0 : n.getUsableEmoji(e)) ? t : void 0;
}
function eu() {
    if ((ed(), null == es)) for (let e in ((es = {}), ea)) for (let t of ea[e].emojiIds()) es[t] = e;
    return es;
}
async function ed() {
    if (0 !== er) return;
    let e = _.A.database();
    if (null == e) return;
    er = 2;
    let t = await (0, h.ES)("EmojiStore.loadSavedEmojis", () =>
        u.A.timeAsync("\uD83D\uDCBE", "loadSavedEmojis", () => m.A.getAsync(e)),
    );
    (er = 3),
        null != t &&
            f.h.dispatch({
                type: "CACHED_EMOJIS_LOADED",
                emojis: t,
            });
}
function ef(e) {
    let { emojis: t } = e;
    for (let [e] of t) !Object.hasOwn(ea, e) && T.A.isMember(e) && eA(e);
    eO();
}
let ep = (e) => ({
    computeBonus: () => 100,
    lookupKey: (e) => {
        var t;
        return null != (t = G.Ay.getByName(e)) ? t : ec(e);
    },
    afterCompute: () => {
        e(), (ei = [...Z]), o().some(ea, (e) => e.usableEmojis.length > 0) || ei.splice(Z.indexOf(Y.R2.CUSTOM), 1);
    },
    numFrequentlyItems: J,
});
function e_(e) {
    return new p.A(z({}, ep(e)));
}
function eh(e) {
    return new p.A(
        X(z({}, ep(e)), {
            computeFrecency: (e, t, n) =>
                null == n.maxTotalUse ? 0 : Math.trunc(1000 * ((e / n.maxTotalUse) * 0.2 + (t / 1000) * 0.8)),
            calculateMaxTotalUse: !0,
        }),
    );
}
class em {
    static get(e) {
        return (
            void 0 === e && (e = null),
            (null == em._lastInstance || em._lastInstance.guildId !== e) && (em._lastInstance = new em(e)),
            em._lastInstance
        );
    }
    static reset() {
        em._lastInstance = null;
    }
    static resetFrequentlyUsed() {
        null != em._lastInstance && (em._lastInstance.frequentlyUsed = null);
    }
    static resetFrequentlyUsedReactionEmojis() {
        null != em._lastInstance &&
            ((em._lastInstance.frequentlyUsedReactionEmojis = null),
            (em._lastInstance.frequentlyUsedReactionNamesAndIds = null));
    }
    static clear(e) {
        null != em._lastInstance && em._lastInstance.guildId === e && (em._lastInstance = null);
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
        let e = eg.frequently.map((e) => (null != e.id ? this.getById(e.id) : G.Ay.getByName(e.name))).filter(x.Vq),
            t = (0, F.A)(e);
        return (this.frequentlyUsed = [...t.values()]), this.frequentlyUsed;
    }
    rebuildFrequentlyUsedReactionsEmojisWithoutFetchingLatest() {
        if (null != this.frequentlyUsedReactionEmojis && null != this.frequentlyUsedReactionNamesAndIds)
            return {
                frequentlyUsedReactionEmojis: this.frequentlyUsedReactionEmojis,
                frequentlyUsedReactionNamesAndIds: this.frequentlyUsedReactionNamesAndIds,
            };
        let e = eE.frequently.map((e) => (null != e.id ? this.getById(e.id) : G.Ay.getByName(e.name))).filter(x.Vq),
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
        var t;
        let { frequentlyUsedReactionNamesAndIds: n } = this.rebuildFrequentlyUsedReactionsEmojisWithoutFetchingLatest();
        if (null != e.id) return n.has(e.id);
        let r = null != (t = G.Ay.convertSurrogateToBase(e.surrogates)) ? t : e;
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
                null != (e = null == (t = S.A.frecencyWithoutFetchingLatest.favoriteEmojis) ? void 0 : t.emojis)
                    ? e
                    : []
            )
                .map((e) => {
                    var t;
                    return null != (t = this.getById(e)) ? t : G.Ay.getByName(e);
                })
                .filter(x.Vq),
            r = (0, F.A)(n);
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
                r = V.A.getTopEmojiIdsByGuildId(e);
            if (null == n && null == r) return et;
            let i = (null != (t = null == n ? void 0 : n.emojiIds) ? t : r).map((e) => {
                    var t;
                    return null != (t = this.getById(e)) ? t : G.Ay.getByName(G.Ay.convertSurrogateToName(e, !1));
                }),
                a = [];
            i.forEach((e) => {
                null != e && a.push(e);
            });
            let s = this.getNewlyAddedEmojiForGuild(e).map((e) => e.id);
            this.topEmojis = a.filter((e) => !s.includes(e.id));
        }
        return this.topEmojis;
    }
    getNewlyAddedEmojiForGuild(e) {
        if (null == this.newlyAddedEmoji) return et;
        let t = this.newlyAddedEmoji[e];
        return null == t ? et : t;
    }
    getEscapedCustomEmoticonNames() {
        return this.escapedEmoticonNames;
    }
    nameMatchesChain(e) {
        return o()(this.getDisambiguatedEmoji()).filter((t) => {
            let { names: n, name: r } = t,
                i = null != n && o().some(n, e),
                a = null != r && e(r),
                s = null != r && o().some(g.A.getTermsForEmoji(r), e);
            return i || a || s;
        });
    }
    constructor(e) {
        K(this, "favorites", null),
            K(this, "favoriteNamesAndIds", null),
            K(this, "topEmojis", null),
            K(this, "guildId", void 0),
            K(this, "escapedEmoticonNames", void 0),
            K(this, "disambiguatedEmoji", []),
            K(this, "emoticonRegex", null),
            K(this, "frequentlyUsed", null),
            K(this, "frequentlyUsedReactionEmojis", null),
            K(this, "frequentlyUsedReactionNamesAndIds", null),
            K(this, "unicodeAliases", {}),
            K(this, "customEmojis", {}),
            K(this, "groupedCustomEmojis", {}),
            K(this, "emoticonsByName", {}),
            K(this, "emojisByName", {}),
            K(this, "emojisById", {}),
            K(this, "newlyAddedEmoji", {}),
            K(this, "isFavoriteEmojiWithoutFetchingLatest", (e) => {
                var t;
                if (null == e) return !1;
                let { favoriteNamesAndIds: n } = this.rebuildFavoriteEmojisWithoutFetchingLatest();
                if (null != e.id) return n.has(e.id);
                let r = null != (t = G.Ay.convertSurrogateToBase(e.surrogates)) ? t : e;
                return n.has(r.name);
            }),
            (this.guildId = e);
        const t = {},
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
                    r = X(z({}, e), {
                        name: t,
                        originalName: i,
                    });
                } else r = e;
                (this.emojisByName[r.name] = r), (this.emojisById[r.id] = r), (this.customEmojis[r.name] = r);
                let { guildId: s } = e;
                null != this.groupedCustomEmojis[s]
                    ? this.groupedCustomEmojis[s].push(r)
                    : (this.groupedCustomEmojis[s] = [r]),
                    j.default.compare(e.id, ee) >= 0 &&
                        (null != this.newlyAddedEmoji[s]
                            ? this.newlyAddedEmoji[s].push(r)
                            : (this.newlyAddedEmoji[s] = [r])),
                    this.disambiguatedEmoji.push(r);
            },
            s = (e) => {
                Object.prototype.hasOwnProperty.call(this.emoticonsByName, e.name) ||
                    (n.push(L.A.escape(e.name)), (this.emoticonsByName[e.name] = e));
            };
        G.Ay.forEach(r);
        const l = (e) => {
            let t = ea[null == e ? H.eGj : e];
            null != t && (o().each(t.usableEmojis, i), o().each(t.emoticons, s));
        };
        for (const e in (l(this.guildId), this.newlyAddedEmoji))
            null != this.newlyAddedEmoji[e]
                ? (this.newlyAddedEmoji[e] = this.newlyAddedEmoji[e]
                      .sort((e, t) => j.default.compare(t.id, e.id))
                      .slice(0, 3))
                : (this.newlyAddedEmoji[e] = []);
        R.Ay.getFlattenedGuildIds().forEach((e) => {
            e !== this.guildId && l(e);
        }),
            (this.escapedEmoticonNames = n.join("|"));
    }
}
K(em, "_lastInstance", null);
let eg = e_(em.resetFrequentlyUsed),
    eE = eh(em.resetFrequentlyUsedReactionEmojis);
function eb() {
    (ea = {}), (es = {}), em.reset(), eo.clear(), (er = 3);
}
function ey(e) {
    null != ea[e] && delete ea[e];
}
function eO() {
    (es = null), em.reset(), (3 === er || 1 === er) && (eg.compute(), eE.compute());
}
function eA(e) {
    ey(e), em.clear(e);
    let t = U.A.getGuildEmojis(e);
    if (null == t) return;
    let n = w.default.getCurrentUser();
    if (null == n) return;
    let r = (0, A.p)(e);
    ea[e] = new $(e, n.id, t, r);
}
function ev(e) {
    for (let t of (eb(), e.guilds)) eA(t.id);
    (er = +!!e.guilds.every((e) => null != e.emojis.items)), eO();
}
function eS(e) {
    for (let t in (eb(), e.emojis)) eA(t);
    (er = 1), eO();
}
function eI() {
    (Q.pendingUsages = []), (Q.emojiReactionPendingUsages = []);
}
function eT() {
    eb();
}
function eC(e) {
    1 === er && "update" === e.guild.emojis.op && null == e.guild.emojis.items && (er = 0), eA(e.guild.id), eO();
}
function eN(e) {
    eA(e.guild.id), eO();
}
function eR(e) {
    let { guildId: t } = e;
    eA(t), eO();
}
function ew(e) {
    let { guild: t } = e;
    ey(t.id), eo.delete(t.id), eO();
}
function eP(e) {
    var t;
    let { guildId: n, user: r } = e;
    r.id === (null == (t = w.default.getCurrentUser()) ? void 0 : t.id) && (eA(n), eO());
}
function eD(e) {
    if (!e.optimistic) return !1;
    let t =
        null != e.emoji.id && "0" !== e.emoji.id
            ? e.emoji
            : G.Ay.getByName(G.Ay.convertSurrogateToName(e.emoji.name, !1));
    if (null == t) return !1;
    eU([t]), ek([t]);
}
function ex(e, t) {
    if (o().isEmpty(e) && o().isEmpty(Q.pendingUsages) && S.A.hasLoaded(W.oD.FRECENCY_AND_FAVORITES_SETTINGS))
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
            eg.track(e);
    if (
        o().isEmpty(t) &&
        o().isEmpty(Q.emojiReactionPendingUsages) &&
        S.A.hasLoaded(W.oD.FRECENCY_AND_FAVORITES_SETTINGS)
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
function eL() {
    var e, t, n, r, i, a;
    let s = null == (r = S.A.settings.textAndImages) || null == (n = r.diversitySurrogate) ? void 0 : n.value;
    null != s && G.Ay.setDefaultDiversitySurrogate(s), em.reset();
    let l = S.A.frecencyWithoutFetchingLatest,
        c = null != (e = null == (i = l.emojiFrecency) ? void 0 : i.emojis) ? e : {},
        u = null != (t = null == (a = l.emojiReactionFrecency) ? void 0 : a.emojis) ? t : {};
    eg.overwriteHistory(
        o().mapValues(c, (e) => X(z({}, e), { recentUses: e.recentUses.map(Number).filter((e) => e > 0) })),
        Q.pendingUsages,
    ),
        eE.overwriteHistory(
            o().mapValues(u, (e) => X(z({}, e), { recentUses: e.recentUses.map(Number).filter((e) => e > 0) })),
            Q.emojiReactionPendingUsages,
        ),
        ex(c, u);
}
function ej(e) {
    let {
        settings: { type: t },
        wasSaved: n,
    } = e;
    if ((g.A.setEmojiLocale(v.default.locale), t !== W.oD.FRECENCY_AND_FAVORITES_SETTINGS || !n)) return !1;
    (Q.pendingUsages = []), (Q.emojiReactionPendingUsages = []);
}
function eM(e) {
    let { emojiUsed: t } = e;
    ek(t);
}
function ek(e) {
    if (null == e) return !1;
    for (let r of e) {
        var t, n;
        let e = null != (t = null != (n = r.id) ? n : r.uniqueName) ? t : r.name;
        null != e &&
            (eg.track(e),
            Q.pendingUsages.push({
                key: e,
                timestamp: Date.now(),
            }));
    }
    let r = e.length > 0;
    return r && (3 === er || 1 === er) && eg.compute(), r;
}
function eU(e) {
    if (null == e) return !1;
    for (let r of e) {
        var t, n;
        let e = null != (t = null != (n = r.id) ? n : r.uniqueName) ? t : r.name;
        null != e &&
            (eE.track(e),
            Q.emojiReactionPendingUsages.push({
                key: e,
                timestamp: Date.now(),
            }));
    }
    let r = e.length > 0;
    return r && (3 === er || 1 === er) && eE.compute(), r;
}
function eG(e) {
    let {
            guildId: t,
            role: { id: n },
        } = e,
        r = C.A.getRole(t, n);
    if (!(null != r && (0, b.U)(r))) return !1;
    eA(t), eO();
}
function eV(e) {
    let { guildId: t } = e,
        n = new Set(Q.expandedSectionsByGuildIds);
    Q.expandedSectionsByGuildIds.has(t) ? n.delete(t) : n.add(t), (Q = X(z({}, Q), { expandedSectionsByGuildIds: n }));
}
function eF(e) {
    let { guildId: t, topEmojisMetadata: n } = e;
    eo.set(t, {
        emojiIds: n.map((e) => e.emojiId),
        topEmojisTTL: c()(c()()).add(1, "days").valueOf(),
    });
}
class eB extends (r = d.Ay.PersistedStore) {
    initialize(e) {
        this.waitFor(E.A, I.Ay, T.A, C.A, N.A, v.default, U.A, R.Ay, O.A, V.A, S.A, w.default),
            null != e &&
                (null != e.pendingUsages && (Q.pendingUsages = e.pendingUsages),
                null != e.emojiReactionPendingUsages && (Q.emojiReactionPendingUsages = e.emojiReactionPendingUsages),
                null != e.expandedSectionsByGuildIds &&
                    (Q.expandedSectionsByGuildIds = new Set(e.expandedSectionsByGuildIds))),
            this.syncWith([S.A], eL);
    }
    getState() {
        return Q;
    }
    get loadState() {
        return er;
    }
    hasPendingUsage() {
        return Q.pendingUsages.length > 0 || Q.emojiReactionPendingUsages.length > 0;
    }
    get expandedSectionsByGuildIds() {
        return Q.expandedSectionsByGuildIds;
    }
    get categories() {
        return ei;
    }
    get diversitySurrogate() {
        var e;
        return null != (e = G.Ay.getDefaultDiversitySurrogate()) ? e : "";
    }
    get emojiFrecencyWithoutFetchingLatest() {
        return eg;
    }
    get emojiReactionFrecencyWithoutFetchingLatest() {
        return eE;
    }
    getGuildEmoji(e) {
        var t;
        ed();
        let n = null == e ? void 0 : ea[e];
        return null != (t = null == n ? void 0 : n.emojis) ? t : en;
    }
    getUsableGuildEmoji(e) {
        var t;
        ed();
        let n = ea[e];
        return null != (t = null == n ? void 0 : n.usableEmojis) ? t : en;
    }
    getGuilds() {
        return ea;
    }
    getDisambiguatedEmojiContext(e) {
        return ed(), em.get(e);
    }
    getSearchResultsOrder(e, t, n, r, i) {
        let a = t.toLowerCase(),
            s = L.A.escape(a),
            l = a.slice(0, 1).toUpperCase() + a.slice(1),
            c = L.A.escape(l);
        if (e.length > 0) {
            let {
                    boostFavorites: t,
                    boostCapitalizedWords: n,
                    boostAtEnd: l,
                    boostsIgnoreDisambiguators: u,
                } = M.A.getConfig({ location: "getSearchResultsOrder" }),
                d = RegExp("^".concat(s), "i"),
                f = RegExp("".concat(s, "$"), "i"),
                p = new RegExp("(^|_|[A-Z])".concat(s, "s?([A-Z]|_|$)")),
                _ = new RegExp("(^|_|[A-Z])".concat(s, "s?([A-Z]|_|$)|(^|_|[a-z])").concat(c, "s?([A-Z]|_|$)")),
                h = n ? _ : p,
                m = h.test.bind(h),
                g = d.test.bind(d),
                E = f.test.bind(f),
                b = (e) => {
                    let n = null != e.uniqueName,
                        s = n ? e.names[0] : u ? e.name.split("~")[0] : e.name,
                        o = n ? s : e.id;
                    if (null == s || null == o) return 0;
                    let c = s.toLowerCase(),
                        d =
                            1 +
                            4 * (c === a) +
                            (m(c) || m(s) ? 2 : 0) +
                            (g(s) ? 1 : l && E(s) ? 0.75 : 0) +
                            (t && i.isFavoriteEmojiWithoutFetchingLatest(e) ? 0.5 : 0),
                        f = r === B.b_.REACTION ? eE.getScore(o) : eg.getScore(o);
                    return null != f && (d *= f / 100), d;
                };
            e = o().orderBy(e, [(e) => b(e), (e) => (null != e.names ? e.names[0] : e.name)], ["desc", "asc"]);
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
        ed();
        let c = r.toLowerCase().replaceAll(/[ _]/g, ""),
            u = L.A.escape(c);
        if (null == o) {
            let e = RegExp("".concat(u), "i");
            t = (t) => e.test(t.replaceAll("_", ""));
        } else t = o;
        let d = null != n ? n.getGuildId() : null,
            f = em.get(d),
            p = f.nameMatchesChain(t).reduce(
                (e, t) => {
                    let r = D.Ay.getEmojiUnavailableReason({
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
                {
                    unlocked: [],
                    locked: [],
                },
            );
        return {
            unlocked: this.getSearchResultsOrder(p.unlocked, r, i, a, f),
            locked: this.getSearchResultsOrder(p.locked, r, 0, a, f),
        };
    }
    getUsableCustomEmojiById(e) {
        return ed(), ec(e);
    }
    getCustomEmojiById(e) {
        return ed(), el(e);
    }
    getTopEmoji(e) {
        return null == e ? et : (ed(), em.get(e).getTopEmojiWithoutFetchingLatest(e));
    }
    getNewlyAddedEmoji(e) {
        return null == e ? et : (ed(), em.get(e).getNewlyAddedEmojiForGuild(e));
    }
    getTopEmojisMetadata(e) {
        return eo.get(e);
    }
    hasUsableEmojiInAnyGuild() {
        return ed(), j.default.keys(ea).some((e) => ea[e].usableEmojis.length > 0);
    }
    hasFavoriteEmojis(e) {
        let t = em.get(e);
        return null != t && t.favoriteEmojisWithoutFetchingLatest.length > 0;
    }
}
K(eB, "displayName", "EmojiStore"), K(eB, "persistKey", "EmojiStoreV2"), K(eB, "migrations", [(e) => z({}, e)]);
let eH = new eB(f.h, {
    LOGOUT: eI,
    BACKGROUND_SYNC: eT,
    CONNECTION_OPEN: ev,
    OVERLAY_INITIALIZE: eS,
    CACHED_EMOJIS_LOADED: ef,
    GUILD_MEMBER_UPDATE: eP,
    GUILD_CREATE: eC,
    GUILD_UPDATE: eN,
    GUILD_EMOJIS_UPDATE: eR,
    GUILD_DELETE: ew,
    MESSAGE_REACTION_ADD: eD,
    EMOJI_TRACK_USAGE: eM,
    USER_SETTINGS_PROTO_UPDATE: ej,
    GUILD_ROLE_CREATE: eG,
    GUILD_ROLE_UPDATE: eG,
    TOP_EMOJIS_FETCH_SUCCESS: eF,
    TOGGLE_GUILD_EXPANDED_STATE: eV,
});
