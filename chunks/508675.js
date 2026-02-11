"use strict";
n.d(t, { Ay: () => eV, o2: () => ef }), n(321073), n(205816);
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
    h = n(154049),
    p = n(995604),
    g = n(710026),
    E = n(49463),
    A = n(98318),
    I = n(492494),
    T = n(384684),
    y = n(46467),
    S = n(773669),
    v = n(617617),
    C = n(696451),
    b = n(184989),
    N = n(317525),
    R = n(71393),
    O = n(711014),
    D = n(287809),
    L = n(927813),
    w = n(690521),
    x = n(403362),
    P = n(257120),
    M = n(661191),
    k = n(84144),
    U = n(770335),
    G = n(608960),
    F = n(7584),
    V = n(354430),
    B = n(635222),
    j = n(307731),
    H = n(652215),
    Y = n(732139),
    W = n(355097);
let K = [
        Y.R2.TOP_GUILD_EMOJI.toString(),
        Y.R2.FAVORITES.toString(),
        Y.R2.RECENT.toString(),
        Y.R2.CUSTOM.toString(),
    ].concat(F.Ay.getCategories()),
    $ = { pendingUsages: [], emojiReactionPendingUsages: [], expandedSectionsByGuildIds: new Set() };
class z {
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
        return null != t && !!(t.roles.some((t) => e.roles.includes(t)) || (0, I.kT)(e));
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
    _computeEmojiUsability() {
        if (null != this._usableEmojis && null != this._hiddenEmojiIds) return;
        let e = [],
            t = new Set();
        for (let n of this.emojis) this.isUsable(n) ? e.push(n) : t.add(n.id);
        (this._usableEmojis = s().sortBy(e, (e) => e.name)), (this._hiddenEmojiIds = t);
    }
    get usableEmojis() {
        return this._computeEmojiUsability(), this._usableEmojis;
    }
    get hiddenEmojiIds() {
        return this._computeEmojiUsability(), this._hiddenEmojiIds;
    }
}
let q = 42,
    X = M.default.fromTimestamp(Date.now() - 60 * L.A.Millis.DAY),
    Z = [],
    Q = [],
    J = new Set(),
    ee = 3,
    et = [...K],
    en = {},
    er = {},
    ei = new Map();
function ea(e) {
    let t = eo()[e];
    return null != t ? (en[t]?.getEmoji(e) ?? void 0) : void 0;
}
function es(e) {
    let t = eo()[e];
    return null != t ? (en[t]?.getUsableEmoji(e) ?? void 0) : void 0;
}
function eo() {
    if ((el(), null == er)) for (let e in ((er = {}), en)) for (let t of en[e].emojiIds()) er[t] = e;
    return er;
}
async function el() {
    if (0 !== ee) return;
    let e = f.A.database();
    if (null == e) return;
    ee = 2;
    let t = await (0, h.ES)("EmojiStore.loadSavedEmojis", () =>
        u.A.timeAsync("\uD83D\uDCBE", "loadSavedEmojis", () => p.A.getAsync(e)),
    );
    (ee = 3), null != t && d.h.dispatch({ type: "CACHED_EMOJIS_LOADED", emojis: t });
}
function eu(e) {
    let { emojis: t } = e;
    for (let [e] of t) !Object.hasOwn(en, e) && b.A.isMember(e) && eA(e);
    eE();
}
let ec = (e) => ({
    computeBonus: () => 100,
    lookupKey: (e) => F.Ay.getByName(e) ?? es(e),
    afterCompute: () => {
        e(), (et = [...K]), s().some(en, (e) => e.usableEmojis.length > 0) || et.splice(K.indexOf(Y.R2.CUSTOM), 1);
    },
    numFrequentlyItems: q,
});
function ed(e) {
    return new _.A({ ...ec(e) });
}
function e_(e) {
    return new _.A({
        ...ec(e),
        computeFrecency: (e, t, n) =>
            null == n.maxTotalUse ? 0 : Math.trunc(1e3 * ((e / n.maxTotalUse) * 0.2 + (t / 1e3) * 0.8)),
        calculateMaxTotalUse: !0,
    });
}
class ef {
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
                    M.default.compare(e.id, X) >= 0 &&
                        (null != this.newlyAddedEmoji[a]
                            ? this.newlyAddedEmoji[a].push(n)
                            : (this.newlyAddedEmoji[a] = [n])),
                    this.disambiguatedEmoji.push(n);
            },
            o = (e) => {
                Object.prototype.hasOwnProperty.call(this.emoticonsByName, e.name) ||
                    (n.push(P.A.escape(e.name)), (this.emoticonsByName[e.name] = e));
            };
        F.Ay.forEach(r);
        const l = (e) => {
            let t = en[null == e ? H.eGj : e];
            null != t && (s().each(t.usableEmojis, a), s().each(t.emoticons, o));
        };
        for (const e in (l(this.guildId), this.newlyAddedEmoji))
            null != this.newlyAddedEmoji[e]
                ? (this.newlyAddedEmoji[e] = this.newlyAddedEmoji[e]
                      .sort((e, t) => M.default.compare(t.id, e.id))
                      .slice(0, 3))
                : (this.newlyAddedEmoji[e] = []);
        O.Ay.getFlattenedGuildIds().forEach((e) => {
            e !== this.guildId && l(e);
        }),
            (this.escapedEmoticonNames = n.join("|"));
    }
    static get(e) {
        return (
            void 0 === e && (e = null),
            (null == ef._lastInstance || ef._lastInstance.guildId !== e) && (ef._lastInstance = new ef(e)),
            ef._lastInstance
        );
    }
    static reset() {
        ef._lastInstance = null;
    }
    static resetFrequentlyUsed() {
        null != ef._lastInstance && (ef._lastInstance.frequentlyUsed = null);
    }
    static resetFrequentlyUsedReactionEmojis() {
        null != ef._lastInstance &&
            ((ef._lastInstance.frequentlyUsedReactionEmojis = null),
            (ef._lastInstance.frequentlyUsedReactionNamesAndIds = null));
    }
    static clear(e) {
        null != ef._lastInstance && ef._lastInstance.guildId === e && (ef._lastInstance = null);
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
        let e = eh.frequently.map((e) => (null != e.id ? this.getById(e.id) : F.Ay.getByName(e.name))).filter(x.Vq),
            t = (0, B.A)(e);
        return (this.frequentlyUsed = [...t.values()]), this.frequentlyUsed;
    }
    rebuildFrequentlyUsedReactionsEmojisWithoutFetchingLatest() {
        if (null != this.frequentlyUsedReactionEmojis && null != this.frequentlyUsedReactionNamesAndIds)
            return {
                frequentlyUsedReactionEmojis: this.frequentlyUsedReactionEmojis,
                frequentlyUsedReactionNamesAndIds: this.frequentlyUsedReactionNamesAndIds,
            };
        let e = ep.frequently.map((e) => (null != e.id ? this.getById(e.id) : F.Ay.getByName(e.name))).filter(x.Vq),
            t = (0, B.A)(e);
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
        let n = F.Ay.convertSurrogateToBase(e.surrogates) ?? e;
        return t.has(n.name);
    }
    rebuildFavoriteEmojisWithoutFetchingLatest() {
        if (null != this.favorites && null != this.favoriteNamesAndIds)
            return { favorites: this.favorites, favoriteNamesAndIds: this.favoriteNamesAndIds };
        let e = (v.A.frecencyWithoutFetchingLatest.favoriteEmojis?.emojis ?? [])
                .map((e) => this.getById(e) ?? F.Ay.getByName(e))
                .filter(x.Vq),
            t = (0, B.A)(e);
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
        let n = F.Ay.convertSurrogateToBase(e.surrogates) ?? e;
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
                n = V.A.getTopEmojiIdsByGuildId(e);
            if (null == t && null == n) return Z;
            let r = (t?.emojiIds ?? n).map(
                    (e) => this.getById(e) ?? F.Ay.getByName(F.Ay.convertSurrogateToName(e, !1)),
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
                o = null != r && s().some(g.A.getTermsForEmoji(r), e);
            return i || a || o;
        });
    }
}
let eh = ed(ef.resetFrequentlyUsed),
    ep = e_(ef.resetFrequentlyUsedReactionEmojis);
function em() {
    (en = {}), (er = {}), ef.reset(), ei.clear(), (ee = 3);
}
function eg(e) {
    null != en[e] && delete en[e];
}
function eE() {
    (er = null), ef.reset(), (3 === ee || 1 === ee) && (eh.compute(), ep.compute());
}
function eA(e) {
    eg(e), ef.clear(e);
    let t = G.A.getGuildEmojis(e);
    if (null == t) return;
    let n = D.default.getCurrentUser();
    if (null == n) return;
    let r = (0, y.p)(e);
    en[e] = new z(e, n.id, t, r);
}
function eI(e) {
    for (let t of (em(), e.guilds)) eA(t.id);
    (ee = +!!e.guilds.every((e) => null != e.emojis.items)), eE();
}
function eT(e) {
    for (let t in (em(), e.emojis)) eA(t);
    (ee = 1), eE();
}
function ey() {
    ($.pendingUsages = []), ($.emojiReactionPendingUsages = []);
}
function eS() {
    em();
}
function ev(e) {
    1 === ee && "update" === e.guild.emojis.op && null == e.guild.emojis.items && (ee = 0), eA(e.guild.id), eE();
}
function eC(e) {
    eA(e.guild.id), eE();
}
function eb(e) {
    let { guildId: t } = e;
    eA(t), eE();
}
function eN(e) {
    let { guild: t } = e;
    eg(t.id), ei.delete(t.id), eE();
}
function eR(e) {
    let { guildId: t, user: n } = e;
    n.id === D.default.getCurrentUser()?.id && (eA(t), eE());
}
function eO(e) {
    if (!e.optimistic) return !1;
    let t =
        null != e.emoji.id && "0" !== e.emoji.id
            ? e.emoji
            : F.Ay.getByName(F.Ay.convertSurrogateToName(e.emoji.name, !1));
    if (null == t) return !1;
    eM([t]), eP([t]);
}
function eD(e, t) {
    if (s().isEmpty(e) && s().isEmpty($.pendingUsages) && v.A.hasLoaded(W.oD.FRECENCY_AND_FAVORITES_SETTINGS))
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
        s().isEmpty(t) &&
        s().isEmpty($.emojiReactionPendingUsages) &&
        v.A.hasLoaded(W.oD.FRECENCY_AND_FAVORITES_SETTINGS)
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
function eL() {
    let e = v.A.settings,
        t = e.textAndImages?.diversitySurrogate?.value;
    null != t && F.Ay.setDefaultDiversitySurrogate(t), ef.reset();
    let n = v.A.frecencyWithoutFetchingLatest,
        r = n.emojiFrecency?.emojis ?? {},
        i = n.emojiReactionFrecency?.emojis ?? {};
    eh.overwriteHistory(
        s().mapValues(r, (e) => ({ ...e, recentUses: e.recentUses.map(Number).filter((e) => e > 0) })),
        $.pendingUsages,
    ),
        ep.overwriteHistory(
            s().mapValues(i, (e) => ({ ...e, recentUses: e.recentUses.map(Number).filter((e) => e > 0) })),
            $.emojiReactionPendingUsages,
        ),
        eD(r, i);
}
function ew(e) {
    let {
        settings: { type: t },
        wasSaved: n,
    } = e;
    if ((g.A.setEmojiLocale(S.default.locale), t !== W.oD.FRECENCY_AND_FAVORITES_SETTINGS || !n)) return !1;
    ($.pendingUsages = []), ($.emojiReactionPendingUsages = []);
}
function ex(e) {
    let { emojiUsed: t } = e;
    eP(t);
}
function eP(e) {
    if (null == e) return !1;
    for (let t of e) {
        let e = t.id ?? t.uniqueName ?? t.name;
        null != e && (eh.track(e), $.pendingUsages.push({ key: e, timestamp: Date.now() }));
    }
    let t = e.length > 0;
    return t && (3 === ee || 1 === ee) && eh.compute(), t;
}
function eM(e) {
    if (null == e) return !1;
    for (let t of e) {
        let e = t.id ?? t.uniqueName ?? t.name;
        null != e && (ep.track(e), $.emojiReactionPendingUsages.push({ key: e, timestamp: Date.now() }));
    }
    let t = e.length > 0;
    return t && (3 === ee || 1 === ee) && ep.compute(), t;
}
function ek(e) {
    let {
            guildId: t,
            role: { id: n },
        } = e,
        r = N.A.getRole(t, n);
    if (!(null != r && (0, A.U)(r))) return !1;
    eA(t), eE();
}
function eU(e) {
    let { guildId: t } = e,
        n = new Set($.expandedSectionsByGuildIds);
    $.expandedSectionsByGuildIds.has(t) ? n.delete(t) : n.add(t), ($ = { ...$, expandedSectionsByGuildIds: n });
}
function eG(e) {
    let { guildId: t, topEmojisMetadata: n } = e;
    ei.set(t, { emojiIds: n.map((e) => e.emojiId), topEmojisTTL: l()(l()()).add(1, "days").valueOf() });
}
class eF extends c.Ay.PersistedStore {
    static displayName = "EmojiStore";
    static persistKey = "EmojiStoreV2";
    initialize(e) {
        this.waitFor(E.A, C.Ay, b.A, N.A, R.A, S.default, G.A, O.Ay, T.A, V.A, v.A, D.default),
            null != e &&
                (null != e.pendingUsages && ($.pendingUsages = e.pendingUsages),
                null != e.emojiReactionPendingUsages && ($.emojiReactionPendingUsages = e.emojiReactionPendingUsages),
                null != e.expandedSectionsByGuildIds &&
                    ($.expandedSectionsByGuildIds = new Set(e.expandedSectionsByGuildIds))),
            this.syncWith([v.A], eL);
    }
    getState() {
        return $;
    }
    static migrations = [(e) => ({ ...e })];
    get loadState() {
        return ee;
    }
    hasPendingUsage() {
        return $.pendingUsages.length > 0 || $.emojiReactionPendingUsages.length > 0;
    }
    get expandedSectionsByGuildIds() {
        return $.expandedSectionsByGuildIds;
    }
    get categories() {
        return et;
    }
    get diversitySurrogate() {
        return F.Ay.getDefaultDiversitySurrogate() ?? "";
    }
    get emojiFrecencyWithoutFetchingLatest() {
        return eh;
    }
    get emojiReactionFrecencyWithoutFetchingLatest() {
        return ep;
    }
    getGuildEmoji(e) {
        el();
        let t = null == e ? void 0 : en[e];
        return t?.emojis ?? Q;
    }
    getHiddenEmojiIds(e) {
        el();
        let t = null == e ? void 0 : en[e];
        return t?.hiddenEmojiIds ?? J;
    }
    getUsableGuildEmoji(e) {
        el();
        let t = en[e];
        return t?.usableEmojis ?? Q;
    }
    getGuilds() {
        return en;
    }
    getDisambiguatedEmojiContext(e) {
        return el(), ef.get(e);
    }
    getSearchResultsOrder(e, t, n, r, i) {
        let a = t.toLowerCase(),
            o = P.A.escape(a),
            l = a.slice(0, 1).toUpperCase() + a.slice(1),
            u = P.A.escape(l);
        if (e.length > 0) {
            let {
                    boostFavorites: t,
                    boostCapitalizedWords: n,
                    boostAtEnd: l,
                    boostsIgnoreDisambiguators: c,
                } = k.A.getConfig({ location: "getSearchResultsOrder" }),
                d = RegExp(`^${o}`, "i"),
                _ = RegExp(`${o}$`, "i"),
                f = RegExp(`(^|_|[A-Z])${o}s?([A-Z]|_|$)`),
                h = RegExp(`(^|_|[A-Z])${o}s?([A-Z]|_|$)|(^|_|[a-z])${u}s?([A-Z]|_|$)`),
                p = n ? h : f,
                g = p.test.bind(p),
                E = d.test.bind(d),
                A = _.test.bind(_),
                I = (e) => {
                    let n = null != e.uniqueName,
                        s = n ? e.names[0] : c ? e.name.split("~")[0] : e.name,
                        o = n ? s : e.id;
                    if (null == s || null == o) return 0;
                    let u = s.toLowerCase(),
                        d =
                            1 +
                            4 * (u === a) +
                            (g(u) || g(s) ? 2 : 0) +
                            (E(s) ? 1 : l && A(s) ? 0.75 : 0) +
                            (t && i.isFavoriteEmojiWithoutFetchingLatest(e) ? 0.5 : 0),
                        _ = r === j.b_.REACTION ? ep.getScore(o) : eh.getScore(o);
                    return null != _ && (d *= _ / 100), d;
                };
            e = s().orderBy(e, [(e) => I(e), (e) => (null != e.names ? e.names[0] : e.name)], ["desc", "asc"]);
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
        el();
        let u = r.toLowerCase().replaceAll(/[ _]/g, ""),
            c = P.A.escape(u);
        if (null == o) {
            let e = RegExp(`${c}`, "i");
            t = (t) => e.test(t.replaceAll("_", ""));
        } else t = o;
        let d = null != n ? n.getGuildId() : null,
            _ = ef.get(d),
            f = _.nameMatchesChain(t).reduce(
                (e, t) => {
                    let r = w.Ay.getEmojiUnavailableReason({
                        emoji: t,
                        channel: n,
                        intention: a,
                        forceIncludeExternalGuilds: s,
                    });
                    return (
                        r !== j.Am.PREMIUM_LOCKED || l
                            ? null != r || (l && t.type !== U.i.UNICODE) || e.unlocked.push(t)
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
        return el(), es(e);
    }
    getCustomEmojiById(e) {
        return el(), ea(e);
    }
    getTopEmoji(e) {
        return null == e ? Z : (el(), ef.get(e).getTopEmojiWithoutFetchingLatest(e));
    }
    getNewlyAddedEmoji(e) {
        return null == e ? Z : (el(), ef.get(e).getNewlyAddedEmojiForGuild(e));
    }
    getTopEmojisMetadata(e) {
        return ei.get(e);
    }
    hasUsableEmojiInAnyGuild() {
        return el(), M.default.keys(en).some((e) => en[e].usableEmojis.length > 0);
    }
    hasFavoriteEmojis(e) {
        let t = ef.get(e);
        return null != t && t.favoriteEmojisWithoutFetchingLatest.length > 0;
    }
}
let eV = new eF(d.h, {
    LOGOUT: ey,
    BACKGROUND_SYNC: eS,
    CONNECTION_OPEN: eI,
    OVERLAY_INITIALIZE: eT,
    CACHED_EMOJIS_LOADED: eu,
    GUILD_MEMBER_UPDATE: eR,
    GUILD_CREATE: ev,
    GUILD_UPDATE: eC,
    GUILD_EMOJIS_UPDATE: eb,
    GUILD_DELETE: eN,
    MESSAGE_REACTION_ADD: eO,
    EMOJI_TRACK_USAGE: ex,
    USER_SETTINGS_PROTO_UPDATE: ew,
    GUILD_ROLE_CREATE: ek,
    GUILD_ROLE_UPDATE: ek,
    TOP_EMOJIS_FETCH_SUCCESS: eG,
    TOGGLE_GUILD_EXPANDED_STATE: eU,
});
