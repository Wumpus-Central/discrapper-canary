n.d(t, { ZP: () => eG }), n(47120), n(51350), n(653041), n(627494), n(757143), n(724458);
var i,
    r = n(392711),
    a = n.n(r),
    s = n(913527),
    o = n.n(s),
    l = n(956067),
    u = n(442837),
    c = n(570140),
    d = n(704907),
    f = n(287328),
    _ = n(86670),
    p = n(489033),
    h = n(188742),
    m = n(353926),
    g = n(973542),
    E = n(889564),
    v = n(687476),
    y = n(978519),
    I = n(706454),
    b = n(581883),
    T = n(271383),
    S = n(93093),
    A = n(430824),
    N = n(771845),
    C = n(594174),
    R = n(70956),
    O = n(176354),
    D = n(823379),
    x = n(226951),
    L = n(709054),
    P = n(906411),
    w = n(689789),
    M = n(407477),
    k = n(633302),
    U = n(396352),
    G = n(856985),
    B = n(185923),
    Z = n(981631),
    F = n(149203),
    V = n(526761);
function j(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let H = 'original',
    Y = [F.UX.TOP_GUILD_EMOJI.toString(), F.UX.FAVORITES.toString(), F.UX.RECENT.toString(), F.UX.CUSTOM.toString()].concat(k.ZP.getCategories()),
    W = {
        pendingUsages: [],
        emojiReactionPendingUsages: [],
        expandedSectionsByGuildIds: new Set()
    };
class K {
    getEmoji(e) {
        return this.build(), this._emojiMap[e];
    }
    getUsableEmoji(e) {
        let t = this.getEmoji(e);
        return null != t && this.isUsable(t) ? t : null;
    }
    isUsable(e) {
        if (0 === e.roles.length) return !0;
        let t = T.ZP.getMember(this.id, this._userId);
        return null != t && !!(t.roles.some((t) => e.roles.includes(t)) || (0, E.yH)(e));
    }
    get rawEmojis() {
        return this._emojis;
    }
    get emojis() {
        return this.build(), this._emojis;
    }
    get emoticons() {
        return this.build(), this._emoticons;
    }
    get usableEmojis() {
        return this.build(), this._usableEmojis;
    }
    build() {
        this._dirty &&
            ((this._dirty = !1),
            this._emojis.forEach((e) => {
                (e.allNamesString = ':'.concat(e.name, ':')), (e.guildId = this.id), (e.type = P.B.GUILD), (this._emojiMap[e.id] = e);
            }),
            (this._usableEmojis = a().sortBy(
                this._emojis.filter((e) => this.isUsable(e)),
                (e) => e.name
            )),
            (this._emoticons = this._usableEmojis.filter((e) => !e.require_colons)));
    }
    constructor(e, t, n, i = !1) {
        j(this, 'id', void 0), j(this, '_userId', void 0), j(this, '_dirty', !0), j(this, '_emojis', void 0), j(this, '_emojiMap', {}), j(this, '_emoticons', []), j(this, '_usableEmojis', []), j(this, '_canSeeServerSubIAP', !1), j(this, '_totalUsable', 0), (this.id = e), (this._userId = t), (this._emojis = n), (this._canSeeServerSubIAP = i);
    }
}
let z = 42,
    q = L.default.fromTimestamp(Date.now() - 60 * R.Z.Millis.DAY),
    Q = [],
    X = 3,
    J = Y.slice(0),
    $ = {},
    ee = {},
    et = null,
    en = new Map();
function ei(e) {
    var t, n;
    let i = ea()[e];
    return null != i && null !== (n = null === (t = $[i]) || void 0 === t ? void 0 : t.getEmoji(e)) && void 0 !== n ? n : void 0;
}
function er(e) {
    var t, n;
    let i = ea()[e];
    return null != i && null !== (n = null === (t = $[i]) || void 0 === t ? void 0 : t.getUsableEmoji(e)) && void 0 !== n ? n : void 0;
}
function ea() {
    if ((es(), null == ee)) for (let e in ((ee = {}), $)) for (let t of $[e].rawEmojis) ee[t.id] = e;
    return ee;
}
async function es() {
    if (0 !== X) return;
    let e = f.Z.database();
    if (null == e) return;
    X = 2;
    let t = await (0, _.gs)('EmojiStore.loadSavedEmojis', () => l.Z.timeAsync('\uD83D\uDCBE', 'loadSavedEmojis', () => p.Z.getAsync(e)));
    (X = 3),
        null != t &&
            c.Z.dispatch({
                type: 'CACHED_EMOJIS_LOADED',
                emojis: t
            });
}
function eo(e) {
    let { emojis: t } = e;
    for (let [e, n] of t) !Object.hasOwn($, e) && S.Z.isMember(e) && eh(e, n);
    ep();
}
function el(e) {
    return new d.ZP({
        computeBonus: () => 100,
        computeWeight: (e) => {
            let t = 1;
            return e <= 3 ? (t = 100) : e <= 15 ? (t = 70) : e <= 30 ? (t = 50) : e <= 45 ? (t = 30) : e <= 80 && (t = 10), t;
        },
        lookupKey: (e) => {
            var t;
            return null !== (t = k.ZP.getByName(e)) && void 0 !== t ? t : er(e);
        },
        afterCompute: () => {
            e(), (J = Y.slice(0)), a().some($, (e) => e.usableEmojis.length > 0) || J.splice(Y.indexOf(F.UX.CUSTOM), 1);
        },
        numFrequentlyItems: z
    });
}
class eu {
    static get(e) {
        return void 0 === e && (e = null), (null == eu._lastInstance || eu._lastInstance.guildId !== e) && (eu._lastInstance = new eu(e)), eu._lastInstance;
    }
    static reset() {
        eu._lastInstance = null;
    }
    static resetFrequentlyUsed() {
        null != eu._lastInstance && (eu._lastInstance.frequentlyUsed = null);
    }
    static resetFrequentlyUsedReactionEmojis() {
        null != eu._lastInstance && (eu._lastInstance.frequentlyUsedReactionEmojis = null);
    }
    static resetFavorites() {
        null != eu._lastInstance && ((eu._lastInstance.favorites = null), (eu._lastInstance.favoriteNamesAndIds = null));
    }
    static clear(e) {
        null != eu._lastInstance && eu._lastInstance.guildId === e && (eu._lastInstance = null);
    }
    ensureDisambiguated() {
        null == this.disambiguatedEmoji && this._buildDisambiguatedCustomEmoji();
    }
    getDisambiguatedEmoji() {
        return null == this.disambiguatedEmoji && this._buildDisambiguatedCustomEmoji(), this.disambiguatedEmoji;
    }
    getCustomEmoji() {
        return null == this.customEmojis && this._buildDisambiguatedCustomEmoji(), this.customEmojis;
    }
    getGroupedCustomEmoji() {
        return null == this.groupedCustomEmojis && this._buildDisambiguatedCustomEmoji(), this.groupedCustomEmojis;
    }
    getByName(e) {
        if (((null == this.emojisByName || null == this.unicodeAliases) && this._buildDisambiguatedCustomEmoji(), Object.prototype.hasOwnProperty.call(this.emojisByName, e))) return this.emojisByName[e];
        if (Object.prototype.hasOwnProperty.call(this.unicodeAliases, e)) {
            let t = this.unicodeAliases[e];
            if (Object.prototype.hasOwnProperty.call(this.emojisByName, t)) return this.emojisByName[t];
        }
    }
    getEmoticonByName(e) {
        if ((null == this.emoticonsByName && this._buildDisambiguatedCustomEmoji(), Object.prototype.hasOwnProperty.call(this.emoticonsByName, e))) return this.emoticonsByName[e];
    }
    getById(e) {
        if ((null == this.emojisById && this._buildDisambiguatedCustomEmoji(), Object.prototype.hasOwnProperty.call(this.emojisById, e))) return this.emojisById[e];
    }
    getCustomEmoticonRegex() {
        return null == this.escapedEmoticonNames && this._buildDisambiguatedCustomEmoji(), null == this.emoticonRegex && null != this.escapedEmoticonNames && '' !== this.escapedEmoticonNames && (this.emoticonRegex = new RegExp('^\\b('.concat(this.escapedEmoticonNames, ')\\b'))), this.emoticonRegex;
    }
    getFrequentlyUsedEmojisWithoutFetchingLatest() {
        if ((this.ensureDisambiguated(), null != this.frequentlyUsed)) return this.frequentlyUsed;
        let e = ec.frequently.map((e) => (null != e.id ? this.getById(e.id) : k.ZP.getByName(e.name))).filter(D.lm),
            t = (0, G.Z)(e);
        return (this.frequentlyUsed = [...t.values()]), this.frequentlyUsed;
    }
    getFrequentlyUsedReactionEmojisWithoutFetchingLatest() {
        if ((this.ensureDisambiguated(), null != this.frequentlyUsedReactionEmojis)) return this.frequentlyUsedReactionEmojis;
        let e = ed.frequently.map((e) => (null != e.id ? this.getById(e.id) : k.ZP.getByName(e.name))).filter(D.lm),
            t = (0, G.Z)(e);
        return (this.frequentlyUsedReactionEmojis = [...t.values()]), this.frequentlyUsedReactionEmojis;
    }
    rebuildFavoriteEmojisWithoutFetchingLatest() {
        var e, t;
        if ((this.ensureDisambiguated(), null != this.favorites && null != this.favoriteNamesAndIds))
            return {
                favorites: this.favorites,
                favoriteNamesAndIds: this.favoriteNamesAndIds
            };
        let n = (null !== (t = null === (e = b.Z.frecencyWithoutFetchingLatest.favoriteEmojis) || void 0 === e ? void 0 : e.emojis) && void 0 !== t ? t : [])
                .map((e) => {
                    var t;
                    return null !== (t = this.getById(e)) && void 0 !== t ? t : k.ZP.getByName(e);
                })
                .filter(D.lm),
            i = (0, G.Z)(n);
        return (
            (this.favorites = [...i.values()]),
            (this.favoriteNamesAndIds = new Set(i.keys())),
            {
                favorites: this.favorites,
                favoriteNamesAndIds: this.favoriteNamesAndIds
            }
        );
    }
    get favoriteEmojisWithoutFetchingLatest() {
        return this.rebuildFavoriteEmojisWithoutFetchingLatest().favorites;
    }
    getEmojiInPriorityOrderWithoutFetchingLatest() {
        let e = (0, M.E2)({
            location: 'getEmojiInPriorityOrderWithoutFetchingLatest',
            autoTrackExposure: !0
        });
        M.Xb.trackExposure({ location: 'getEmojiInPriorityOrderWithoutFetchingLatest' });
        let t = e ? this.getFrequentlyUsedReactionEmojisWithoutFetchingLatest() : this.getFrequentlyUsedEmojisWithoutFetchingLatest(),
            n = new Set();
        return this.favoriteEmojisWithoutFetchingLatest.concat(t).filter((e) => !n.has(e) && (n.add(e), !0));
    }
    getTopEmojiWithoutFetchingLatest(e) {
        if ((this.ensureDisambiguated(), null == this.topEmojis)) {
            var t;
            let n = en.get(e),
                i = U.Z.getTopEmojiIdsByGuildId(e);
            if (null == n && null == i) return Q;
            let r = (null !== (t = null == n ? void 0 : n.emojiIds) && void 0 !== t ? t : i).map((e) => {
                    var t;
                    return null !== (t = this.getById(e)) && void 0 !== t ? t : k.ZP.getByName(k.ZP.convertSurrogateToName(e, !1));
                }),
                a = [];
            r.forEach((e) => {
                null != e && a.push(e);
            });
            let s = this.getNewlyAddedEmojiForGuild(e).map((e) => e.id);
            this.topEmojis = a.filter((e) => !s.includes(e.id));
        }
        return this.topEmojis;
    }
    getNewlyAddedEmojiForGuild(e) {
        if ((this.ensureDisambiguated(), null == this.newlyAddedEmoji)) return Q;
        let t = this.newlyAddedEmoji[e];
        return null == t ? Q : t;
    }
    getEscapedCustomEmoticonNames() {
        return null == this.escapedEmoticonNames && this._buildDisambiguatedCustomEmoji(), this.escapedEmoticonNames;
    }
    nameMatchesChain(e) {
        return a()(this.getDisambiguatedEmoji()).filter((t) => {
            let { names: n, name: i } = t,
                r = null != n && a().some(n, e),
                s = null != i && e(i),
                o = null != i && a().some(h.Z.getTermsForEmoji(i), e);
            return r || s || o;
        });
    }
    _buildDisambiguatedCustomEmoji() {
        let e = {},
            t = [];
        (this.emoticonRegex = null), (this.frequentlyUsed = null), (this.frequentlyUsedReactionEmojis = null), (this.disambiguatedEmoji = []), (this.unicodeAliases = Object.create(null)), (this.customEmojis = Object.create(null)), (this.groupedCustomEmojis = Object.create(null)), (this.emoticonsByName = Object.create(null)), (this.emojisByName = Object.create(null)), (this.emojisById = Object.create(null)), (this.newlyAddedEmoji = Object.create(null));
        let n = (t) => {
                var n, i;
                let r = t.name,
                    a = null !== (n = e[r]) && void 0 !== n ? n : 0;
                if (((e[r] = a + 1), a > 0)) {
                    let e = ''.concat(r, '~').concat(a);
                    t = {
                        ...t,
                        name: e,
                        originalName: r,
                        allNamesString: ':'.concat(e, ':')
                    };
                }
                if (((this.emojisByName[t.name] = t), 'names' in t && (null === (i = t.names) || void 0 === i || i.slice(1).forEach((e) => (this.unicodeAliases[e] = t.name))), null != t.id)) {
                    let e, n;
                    (this.emojisById[t.id] = t), (this.customEmojis[t.name] = t), t.type === P.B.GUILD && ((e = t.guildId), (n = !0)), null != e && (null != this.groupedCustomEmojis[e] ? this.groupedCustomEmojis[e].push(t) : (this.groupedCustomEmojis[e] = [t]), n && L.default.compare(t.id, q) >= 0 && (null != this.newlyAddedEmoji[e] ? this.newlyAddedEmoji[e].push(t) : (this.newlyAddedEmoji[e] = [t])));
                }
                null == this.disambiguatedEmoji && (this.disambiguatedEmoji = []), this.disambiguatedEmoji.push(t);
            },
            i = (e) => {
                !Object.prototype.hasOwnProperty.call(this.emoticonsByName, e.name) && (t.push(x.Z.escape(e.name)), (this.emoticonsByName[e.name] = e));
            };
        k.ZP.forEach(n);
        let r = (e) => {
            let t = $[null == e ? Z.kod : e];
            null != t && (a().each(t.usableEmojis, n), a().each(t.emoticons, i));
        };
        for (let e in (r(this.guildId), this.newlyAddedEmoji)) null != this.newlyAddedEmoji[e] ? (this.newlyAddedEmoji[e] = this.newlyAddedEmoji[e].sort((e, t) => L.default.compare(t.id, e.id)).slice(0, 3)) : (this.newlyAddedEmoji[e] = []);
        N.ZP.getFlattenedGuildIds().forEach((e) => {
            e !== this.guildId && r(e);
        }),
            (this.escapedEmoticonNames = t.join('|'));
    }
    constructor(e) {
        j(this, 'guildId', void 0),
            j(this, 'emoticonRegex', null),
            j(this, 'frequentlyUsed', null),
            j(this, 'favorites', null),
            j(this, 'favoriteNamesAndIds', null),
            j(this, 'topEmojis', null),
            j(this, 'escapedEmoticonNames', null),
            j(this, 'disambiguatedEmoji', null),
            j(this, 'customEmojis', void 0),
            j(this, 'groupedCustomEmojis', void 0),
            j(this, 'emoticonsByName', void 0),
            j(this, 'emojisByName', void 0),
            j(this, 'emojisById', void 0),
            j(this, 'unicodeAliases', void 0),
            j(this, 'newlyAddedEmoji', null),
            j(this, 'frequentlyUsedReactionEmojis', null),
            j(this, 'isFavoriteEmojiWithoutFetchingLatest', (e) => {
                var t;
                if (null == e) return !1;
                let { favoriteNamesAndIds: n } = this.rebuildFavoriteEmojisWithoutFetchingLatest();
                if (null != e.id) return n.has(e.id);
                let i = null !== (t = k.ZP.convertSurrogateToBase(e.surrogates)) && void 0 !== t ? t : e;
                return n.has(i.name);
            }),
            (this.guildId = e);
    }
}
j(eu, '_lastInstance', null);
let ec = el(eu.resetFrequentlyUsed),
    ed = el(eu.resetFrequentlyUsedReactionEmojis);
function ef() {
    ($ = {}), (ee = {}), eu.reset(), en.clear(), (X = 3);
}
function e_(e) {
    null != $[e] && delete $[e];
}
function ep() {
    (ee = null), eu.reset(), (3 === X || 1 === X) && (ec.compute(), ed.compute());
}
function eh(e, t) {
    if ((e_(e), eu.clear(e), null == t)) return;
    let n = C.default.getCurrentUser();
    if (null == n) return;
    let i = (0, y.r)(e);
    $[e] = new K(e, n.id, t, i);
}
function em(e) {
    for (let t of (ef(), e.guilds)) eh(t.id, t.emojis);
    (X = e.guilds.every((e) => null != e.emojis) ? 1 : 0), ep();
}
function eg(e) {
    for (let t in (ef(), e.emojis)) eh(t, e.emojis[t]);
    (X = 1), ep();
}
function eE() {
    (W.pendingUsages = []), (W.emojiReactionPendingUsages = []);
}
function ev() {
    ef();
}
function ey(e) {
    1 === X && null == e.guild.emojis && null != e.guild.emojiUpdates && (X = 0), eh(e.guild.id, e.guild.emojis), ep();
}
function eI(e) {
    eh(e.guild.id, e.guild.emojis), ep();
}
function eb(e) {
    let { guildId: t, emojis: n } = e;
    eh(t, n), ep();
}
function eT(e) {
    let { guild: t } = e;
    e_(t.id), en.delete(t.id), ep();
}
function eS(e) {
    var t;
    let { guildId: n, user: i } = e;
    if (i.id !== (null === (t = C.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)) return;
    let r = $[n];
    eh(n, null == r ? void 0 : r.usableEmojis), ep();
}
function eA(e) {
    if (!e.optimistic) return !1;
    let t = null != e.emoji.id && '0' !== e.emoji.id ? e.emoji : k.ZP.getByName(k.ZP.convertSurrogateToName(e.emoji.name, !1));
    if (null == t) return !1;
    eL([t]), ex([t]);
}
function eN(e, t) {
    let { canSplitFrecencyList: n } = w.Z.getCurrentConfig({ location: 'populateInitialFrecencyData' }, { autoTrackExposure: !0 }),
        i = (0, M.E2)({
            location: 'populateInitialFrecencyData',
            autoTrackExposure: !0
        });
    if ((M.Xb.trackExposure({ location: 'populateInitialFrecencyData' }), a().isEmpty(e) && a().isEmpty(W.pendingUsages) && b.Z.hasLoaded(V.yP.FRECENCY_AND_FAVORITES_SETTINGS))) for (let e of ['thumbsup', 'thumbsup', 'eyes', 'eyes', 'laughing', 'laughing', 'watermelon', 'fork_and_knife', 'yum', 'weary', 'tired_face', 'poop', '100']) ec.track(e);
    if ((n || i) && a().isEmpty(t) && a().isEmpty(W.emojiReactionPendingUsages) && b.Z.hasLoaded(V.yP.FRECENCY_AND_FAVORITES_SETTINGS)) for (let e of ['100', '100', 'thumbsup', 'thumbsup', 'thumbsdown', 'thumbsdown', 'heart', 'point_up', 'eyes', 'weary', 'laughing', 'white_check_mark', 'x']) ed.track(e);
}
function eC() {
    var e, t, n, i, r, s;
    let o = null === (t = b.Z.settings.textAndImages) || void 0 === t ? void 0 : null === (e = t.diversitySurrogate) || void 0 === e ? void 0 : e.value;
    null != o && k.ZP.setDefaultDiversitySurrogate(o), eu.reset();
    let l = b.Z.frecencyWithoutFetchingLatest,
        u = null !== (r = null === (n = l.emojiFrecency) || void 0 === n ? void 0 : n.emojis) && void 0 !== r ? r : {},
        c = null !== (s = null === (i = l.emojiReactionFrecency) || void 0 === i ? void 0 : i.emojis) && void 0 !== s ? s : {};
    ec.overwriteHistory(
        a().mapValues(u, (e) => ({
            ...e,
            recentUses: e.recentUses.map(Number).filter((e) => e > 0)
        })),
        W.pendingUsages
    ),
        ed.overwriteHistory(
            a().mapValues(c, (e) => ({
                ...e,
                recentUses: e.recentUses.map(Number).filter((e) => e > 0)
            })),
            W.emojiReactionPendingUsages
        ),
        eN(u, c);
}
function eR(e) {
    let {
        settings: { type: t },
        wasSaved: n
    } = e;
    if ((h.Z.setEmojiLocale(I.default.locale), t !== V.yP.FRECENCY_AND_FAVORITES_SETTINGS || !n)) return !1;
    (W.pendingUsages = []), (W.emojiReactionPendingUsages = []);
}
function eO() {
    if (!m.Z.hasLoadedExperiments) return;
    let { frecencyAlgorithm: e } = M.ZP.getCurrentConfig({ location: 'handleExperimentsChange' }, { autoTrackExposure: !0 }),
        t = d.M$[e],
        n = d.KX[e],
        i = 'original' !== e;
    e !== H && ed.replaceEntryComputeFunctions(t, n, i), (H = e);
}
function eD(e) {
    let { emojiUsed: t } = e;
    ex(t);
}
function ex(e) {
    if (null == e) return !1;
    for (let i of e) {
        var t, n;
        let e = null !== (n = null !== (t = i.id) && void 0 !== t ? t : i.uniqueName) && void 0 !== n ? n : i.name;
        null != e &&
            (ec.track(e),
            W.pendingUsages.push({
                key: e,
                timestamp: Date.now()
            }));
    }
    let i = e.length > 0;
    return i && (3 === X || 1 === X) && ec.compute(), i;
}
function eL(e) {
    if (null == e) return !1;
    for (let i of e) {
        var t, n;
        let e = null !== (n = null !== (t = i.id) && void 0 !== t ? t : i.uniqueName) && void 0 !== n ? n : i.name;
        null != e &&
            (ed.track(e),
            W.emojiReactionPendingUsages.push({
                key: e,
                timestamp: Date.now()
            }));
    }
    let i = e.length > 0;
    return i && (3 === X || 1 === X) && ed.compute(), i;
}
function eP(e) {
    let { guildId: t, role: n } = e;
    if (!(0, g.Z)(n)) return !1;
    {
        let e = $[t];
        eh(t, null == e ? void 0 : e.emojis), ep();
    }
}
function ew(e) {
    let { guildId: t } = e,
        n = new Set(W.expandedSectionsByGuildIds);
    W.expandedSectionsByGuildIds.has(t) ? n.delete(t) : n.add(t),
        (W = {
            ...W,
            expandedSectionsByGuildIds: n
        });
}
function eM(e) {
    let { guildId: t, topEmojisMetadata: n } = e;
    en.set(t, {
        emojiIds: n.map((e) => e.emojiId),
        topEmojisTTL: o()(o()()).add(1, 'days').valueOf()
    });
}
function ek(e) {
    let { text: t } = e;
    et = t;
}
class eU extends (i = u.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(f.Z, S.Z, T.ZP, A.Z, I.default, v.Z, U.Z, C.default, m.Z), null != e && (null != e.pendingUsages && (W.pendingUsages = e.pendingUsages), null != e.emojiReactionPendingUsages && (W.emojiReactionPendingUsages = e.emojiReactionPendingUsages), null != e.expandedSectionsByGuildIds && (W.expandedSectionsByGuildIds = new Set(e.expandedSectionsByGuildIds))), this.syncWith([b.Z], eC), this.syncWith([m.Z], eO);
    }
    getState() {
        return W;
    }
    get loadState() {
        return X;
    }
    hasPendingUsage() {
        return W.pendingUsages.length > 0 || W.emojiReactionPendingUsages.length > 0;
    }
    get expandedSectionsByGuildIds() {
        return W.expandedSectionsByGuildIds;
    }
    get categories() {
        return J;
    }
    get diversitySurrogate() {
        var e;
        return null !== (e = k.ZP.getDefaultDiversitySurrogate()) && void 0 !== e ? e : '';
    }
    get emojiFrecencyWithoutFetchingLatest() {
        return ec;
    }
    get emojiReactionFrecencyWithoutFetchingLatest() {
        return ed;
    }
    getGuildEmoji(e) {
        var t;
        es();
        let n = $[e];
        return null !== (t = null == n ? void 0 : n.emojis) && void 0 !== t ? t : [];
    }
    getUsableGuildEmoji(e) {
        var t;
        es();
        let n = $[e];
        return null !== (t = null == n ? void 0 : n.usableEmojis) && void 0 !== t ? t : [];
    }
    getGuilds() {
        return $;
    }
    getDisambiguatedEmojiContext(e) {
        return es(), eu.get(e);
    }
    getSearchResultsOrder(e, t, n, i) {
        let r = t.toLowerCase(),
            s = x.Z.escape(r),
            { canSplitFrecencyList: o } = w.Z.getCurrentConfig({ location: 'getSearchResultsOrder' }, { autoTrackExposure: !0 }),
            l = (0, M.E2)({
                location: 'getSearchResultsOrder',
                autoTrackExposure: !0
            });
        if ((M.Xb.trackExposure({ location: 'getSearchResultsOrder' }), e.length > 0)) {
            let t = RegExp('^'.concat(s), 'i'),
                n = new RegExp('(^|_|[A-Z])'.concat(s, 's?([A-Z]|_|$)')),
                u = n.test.bind(n),
                c = t.test.bind(t),
                d = function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e;
                    if (null == e || null == t) return 0;
                    let n = e.toLowerCase(),
                        a = 1 + (n === r ? 4 : 0) + (u(n) || u(e) ? 2 : 0) + (c(e) ? 1 : 0),
                        s = i === B.Hz.REACTION && (o || l) ? ed.getScore(t) : ec.getScore(t);
                    return null != s && (a *= s / 100), a;
                };
            e = a().orderBy(e, [(e) => (null != e.names ? d(e.names[0]) : d(e.name, e.id)), (e) => (null != e.names ? e.names[0] : e.name)], ['desc', 'asc']);
        }
        return n > 0 && (e = e.slice(0, n)), e;
    }
    searchWithoutFetchingLatest(e) {
        let t,
            { channel: n, query: i, count: r = 0, intention: a, includeExternalGuilds: s = !0, matchComparator: o } = e;
        es();
        let l = i.toLowerCase().replaceAll(/[ _]/g, ''),
            u = x.Z.escape(l);
        if (null == o) {
            let e = RegExp(''.concat(u), 'i');
            t = (t) => e.test(t.replaceAll('_', ''));
        } else t = o;
        let c = null != n ? n.getGuildId() : null,
            d = eu
                .get(c)
                .nameMatchesChain(t)
                .reduce(
                    (e, t) => {
                        let i = O.ZP.getEmojiUnavailableReason({
                            emoji: t,
                            channel: n,
                            intention: a,
                            forceIncludeExternalGuilds: s
                        });
                        return i === B.Z5.PREMIUM_LOCKED ? e.locked.push(t) : null == i && e.unlocked.push(t), e;
                    },
                    {
                        unlocked: [],
                        locked: []
                    }
                );
        return {
            unlocked: this.getSearchResultsOrder(d.unlocked, i, r, a),
            locked: this.getSearchResultsOrder(d.locked, i, 0, a)
        };
    }
    getUsableCustomEmojiById(e) {
        return es(), er(e);
    }
    getCustomEmojiById(e) {
        return es(), ei(e);
    }
    getTopEmoji(e) {
        return null == e ? Q : (es(), eu.get(e).getTopEmojiWithoutFetchingLatest(e));
    }
    getNewlyAddedEmoji(e) {
        return null == e ? Q : (es(), eu.get(e).getNewlyAddedEmojiForGuild(e));
    }
    getTopEmojisMetadata(e) {
        return en.get(e);
    }
    getEmojiAutosuggestion(e) {
        if (null != et && et.length > 0) {
            let { locked: t, unlocked: n } = this.searchWithoutFetchingLatest({
                channel: e,
                count: 10,
                query: et,
                intention: B.Hz.CHAT
            });
            return [...n.slice(0, 5), ...t.slice(0, 5)].slice(0, 5);
        }
        return [];
    }
    hasUsableEmojiInAnyGuild() {
        return es(), L.default.keys($).some((e) => $[e].usableEmojis.length > 0);
    }
    hasFavoriteEmojis(e) {
        let t = eu.get(e);
        return null != t && t.favoriteEmojisWithoutFetchingLatest.length > 0;
    }
}
j(eU, 'displayName', 'EmojiStore'), j(eU, 'persistKey', 'EmojiStoreV2'), j(eU, 'migrations', [(e) => ({ ...e })]);
let eG = new eU(c.Z, {
    LOGOUT: eE,
    BACKGROUND_SYNC: ev,
    CONNECTION_OPEN: em,
    OVERLAY_INITIALIZE: eg,
    CACHED_EMOJIS_LOADED: eo,
    GUILD_MEMBER_UPDATE: eS,
    GUILD_CREATE: ey,
    GUILD_UPDATE: eI,
    GUILD_EMOJIS_UPDATE: eb,
    GUILD_DELETE: eT,
    MESSAGE_REACTION_ADD: eA,
    EMOJI_TRACK_USAGE: eD,
    USER_SETTINGS_PROTO_UPDATE: eR,
    GUILD_ROLE_CREATE: eP,
    GUILD_ROLE_UPDATE: eP,
    TOP_EMOJIS_FETCH_SUCCESS: eM,
    EMOJI_AUTOSUGGESTION_UPDATE: ek,
    TOGGLE_GUILD_EXPANDED_STATE: ew
});
