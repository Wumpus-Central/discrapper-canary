var i,
    a,
    s = r(47120);
var o = r(51350);
var l = r(653041);
var u = r(627494);
var c = r(757143);
var d = r(724458);
var f = r(392711),
    _ = r.n(f),
    h = r(913527),
    p = r.n(h),
    m = r(956067),
    g = r(442837),
    E = r(570140),
    v = r(704907),
    I = r(287328),
    T = r(86670),
    b = r(489033),
    y = r(188742),
    S = r(353926),
    A = r(973542),
    N = r(889564),
    C = r(687476),
    R = r(978519),
    O = r(706454),
    D = r(581883),
    L = r(271383),
    x = r(93093),
    w = r(430824),
    P = r(771845),
    M = r(594174),
    k = r(70956),
    U = r(176354),
    B = r(823379),
    G = r(226951),
    Z = r(709054),
    F = r(906411),
    V = r(689789),
    j = r(407477),
    H = r(633302),
    Y = r(396352),
    W = r(856985),
    K = r(185923),
    z = r(981631),
    q = r(149203),
    Q = r(526761);
function X(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let J = 'original',
    $ = [q.UX.TOP_GUILD_EMOJI.toString(), q.UX.FAVORITES.toString(), q.UX.RECENT.toString(), q.UX.CUSTOM.toString()].concat(H.ZP.getCategories()),
    ee = {
        pendingUsages: [],
        emojiReactionPendingUsages: [],
        expandedSectionsByGuildIds: new Set()
    };
class et {
    getEmoji(e) {
        return this.build(), this._emojiMap[e];
    }
    getUsableEmoji(e) {
        let n = this.getEmoji(e);
        return null != n && this.isUsable(n) ? n : null;
    }
    isUsable(e) {
        if (0 === e.roles.length) return !0;
        let n = L.ZP.getMember(this.id, this._userId);
        return null != n && (!!(n.roles.some((n) => e.roles.includes(n)) || (0, N.yH)(e)) || !1);
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
        if (!!this._dirty)
            (this._dirty = !1),
                this._emojis.forEach((e) => {
                    (e.allNamesString = ':'.concat(e.name, ':')), (e.guildId = this.id), (e.type = F.B.GUILD), (this._emojiMap[e.id] = e);
                }),
                (this._usableEmojis = _().sortBy(
                    this._emojis.filter((e) => this.isUsable(e)),
                    (e) => e.name
                )),
                (this._emoticons = this._usableEmojis.filter((e) => !e.require_colons));
    }
    constructor(e, n, r, i = !1) {
        X(this, 'id', void 0), X(this, '_userId', void 0), X(this, '_dirty', !0), X(this, '_emojis', void 0), X(this, '_emojiMap', {}), X(this, '_emoticons', []), X(this, '_usableEmojis', []), X(this, '_canSeeServerSubIAP', !1), X(this, '_totalUsable', 0), (this.id = e), (this._userId = n), (this._emojis = r), (this._canSeeServerSubIAP = i);
    }
}
let en = 42,
    er = Z.default.fromTimestamp(Date.now() - 60 * k.Z.Millis.DAY),
    ei = [];
!(function (e) {
    (e[(e.Unloaded = 0)] = 'Unloaded'), (e[(e.MaybeLoaded = 1)] = 'MaybeLoaded'), (e[(e.Loading = 2)] = 'Loading'), (e[(e.Loaded = 3)] = 'Loaded');
})(i || (i = {}));
let ea = 3,
    es = $.slice(0),
    eo = {},
    el = {},
    eu = null,
    ec = new Map();
function ed(e) {
    var n, r;
    let i = e_()[e];
    return null != i && null !== (r = null === (n = eo[i]) || void 0 === n ? void 0 : n.getEmoji(e)) && void 0 !== r ? r : void 0;
}
function ef(e) {
    var n, r;
    let i = e_()[e];
    return null != i && null !== (r = null === (n = eo[i]) || void 0 === n ? void 0 : n.getUsableEmoji(e)) && void 0 !== r ? r : void 0;
}
function e_() {
    if ((eh(), null == el)) for (let e in ((el = {}), eo)) for (let n of eo[e].rawEmojis) el[n.id] = e;
    return el;
}
async function eh() {
    if (0 !== ea) return;
    let e = I.Z.database();
    if (null == e) return;
    ea = 2;
    let n = await (0, T.gs)('EmojiStore.loadSavedEmojis', () => m.Z.timeAsync('\uD83D\uDCBE', 'loadSavedEmojis', () => b.Z.getAsync(e)));
    if (((ea = 3), null != n))
        E.Z.dispatch({
            type: 'CACHED_EMOJIS_LOADED',
            emojis: n
        });
}
function ep(e) {
    let { emojis: n } = e;
    for (let [e, r] of n) !Object.hasOwn(eo, e) && x.Z.isMember(e) && ey(e, r);
    eb();
}
function em(e) {
    return new v.ZP({
        computeBonus: () => 100,
        computeWeight: (e) => {
            let n = 1;
            return e <= 3 ? (n = 100) : e <= 15 ? (n = 70) : e <= 30 ? (n = 50) : e <= 45 ? (n = 30) : e <= 80 && (n = 10), n;
        },
        lookupKey: (e) => {
            var n;
            return null !== (n = H.ZP.getByName(e)) && void 0 !== n ? n : ef(e);
        },
        afterCompute: () => {
            e(), (es = $.slice(0)), !_().some(eo, (e) => e.usableEmojis.length > 0) && es.splice($.indexOf(q.UX.CUSTOM), 1);
        },
        numFrequentlyItems: en
    });
}
class eg {
    static get(e) {
        return void 0 === e && (e = null), (null == eg._lastInstance || eg._lastInstance.guildId !== e) && (eg._lastInstance = new eg(e)), eg._lastInstance;
    }
    static reset() {
        eg._lastInstance = null;
    }
    static resetFrequentlyUsed() {
        null != eg._lastInstance && (eg._lastInstance.frequentlyUsed = null);
    }
    static resetFrequentlyUsedReactionEmojis() {
        null != eg._lastInstance && (eg._lastInstance.frequentlyUsedReactionEmojis = null);
    }
    static resetFavorites() {
        null != eg._lastInstance && ((eg._lastInstance.favorites = null), (eg._lastInstance.favoriteNamesAndIds = null));
    }
    static clear(e) {
        null != eg._lastInstance && eg._lastInstance.guildId === e && (eg._lastInstance = null);
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
            let n = this.unicodeAliases[e];
            if (Object.prototype.hasOwnProperty.call(this.emojisByName, n)) return this.emojisByName[n];
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
        let e = eE.frequently.map((e) => (null != e.id ? this.getById(e.id) : H.ZP.getByName(e.name))).filter(B.lm),
            n = (0, W.Z)(e);
        return (this.frequentlyUsed = [...n.values()]), this.frequentlyUsed;
    }
    getFrequentlyUsedReactionEmojisWithoutFetchingLatest() {
        if ((this.ensureDisambiguated(), null != this.frequentlyUsedReactionEmojis)) return this.frequentlyUsedReactionEmojis;
        let e = ev.frequently.map((e) => (null != e.id ? this.getById(e.id) : H.ZP.getByName(e.name))).filter(B.lm),
            n = (0, W.Z)(e);
        return (this.frequentlyUsedReactionEmojis = [...n.values()]), this.frequentlyUsedReactionEmojis;
    }
    rebuildFavoriteEmojisWithoutFetchingLatest() {
        var e, n;
        if ((this.ensureDisambiguated(), null != this.favorites && null != this.favoriteNamesAndIds))
            return {
                favorites: this.favorites,
                favoriteNamesAndIds: this.favoriteNamesAndIds
            };
        let r = (null !== (n = null === (e = D.Z.frecencyWithoutFetchingLatest.favoriteEmojis) || void 0 === e ? void 0 : e.emojis) && void 0 !== n ? n : [])
                .map((e) => {
                    var n;
                    return null !== (n = this.getById(e)) && void 0 !== n ? n : H.ZP.getByName(e);
                })
                .filter(B.lm),
            i = (0, W.Z)(r);
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
        let e = (0, j.E2)({
            location: 'getEmojiInPriorityOrderWithoutFetchingLatest',
            autoTrackExposure: !0
        });
        j.Xb.trackExposure({ location: 'getEmojiInPriorityOrderWithoutFetchingLatest' });
        let n = e ? this.getFrequentlyUsedReactionEmojisWithoutFetchingLatest() : this.getFrequentlyUsedEmojisWithoutFetchingLatest(),
            r = new Set();
        return this.favoriteEmojisWithoutFetchingLatest.concat(n).filter((e) => !r.has(e) && (r.add(e), !0));
    }
    getTopEmojiWithoutFetchingLatest(e) {
        if ((this.ensureDisambiguated(), null == this.topEmojis)) {
            var n;
            let r = ec.get(e),
                i = Y.Z.getTopEmojiIdsByGuildId(e);
            if (null == r && null == i) return ei;
            let a = (null !== (n = null == r ? void 0 : r.emojiIds) && void 0 !== n ? n : i).map((e) => {
                    var n;
                    return null !== (n = this.getById(e)) && void 0 !== n ? n : H.ZP.getByName(H.ZP.convertSurrogateToName(e, !1));
                }),
                s = [];
            a.forEach((e) => {
                null != e && s.push(e);
            });
            let o = this.getNewlyAddedEmojiForGuild(e).map((e) => e.id);
            this.topEmojis = s.filter((e) => !o.includes(e.id));
        }
        return this.topEmojis;
    }
    getNewlyAddedEmojiForGuild(e) {
        if ((this.ensureDisambiguated(), null == this.newlyAddedEmoji)) return ei;
        let n = this.newlyAddedEmoji[e];
        return null == n ? ei : n;
    }
    getEscapedCustomEmoticonNames() {
        return null == this.escapedEmoticonNames && this._buildDisambiguatedCustomEmoji(), this.escapedEmoticonNames;
    }
    nameMatchesChain(e) {
        return _()(this.getDisambiguatedEmoji()).filter((n) => {
            let { names: r, name: i } = n,
                a = null != r && _().some(r, e),
                s = null != i && e(i),
                o = null != i && _().some(y.Z.getTermsForEmoji(i), e);
            return a || s || o;
        });
    }
    _buildDisambiguatedCustomEmoji() {
        let e = {},
            n = [];
        (this.emoticonRegex = null), (this.frequentlyUsed = null), (this.frequentlyUsedReactionEmojis = null), (this.disambiguatedEmoji = []), (this.unicodeAliases = Object.create(null)), (this.customEmojis = Object.create(null)), (this.groupedCustomEmojis = Object.create(null)), (this.emoticonsByName = Object.create(null)), (this.emojisByName = Object.create(null)), (this.emojisById = Object.create(null)), (this.newlyAddedEmoji = Object.create(null));
        let r = (n) => {
                var r, i;
                let a = n.name,
                    s = null !== (r = e[a]) && void 0 !== r ? r : 0;
                if (((e[a] = s + 1), s > 0)) {
                    let e = ''.concat(a, '~').concat(s);
                    n = {
                        ...n,
                        name: e,
                        originalName: a,
                        allNamesString: ':'.concat(e, ':')
                    };
                }
                if (((this.emojisByName[n.name] = n), 'names' in n && (null === (i = n.names) || void 0 === i || i.slice(1).forEach((e) => (this.unicodeAliases[e] = n.name))), null != n.id)) {
                    let e, r;
                    if (((this.emojisById[n.id] = n), (this.customEmojis[n.name] = n), n.type === F.B.GUILD)) (e = n.guildId), (r = !0);
                    null != e && (null != this.groupedCustomEmojis[e] ? this.groupedCustomEmojis[e].push(n) : (this.groupedCustomEmojis[e] = [n]), r && Z.default.compare(n.id, er) >= 0 && (null != this.newlyAddedEmoji[e] ? this.newlyAddedEmoji[e].push(n) : (this.newlyAddedEmoji[e] = [n])));
                }
                null == this.disambiguatedEmoji && (this.disambiguatedEmoji = []), this.disambiguatedEmoji.push(n);
            },
            i = (e) => {
                if (!Object.prototype.hasOwnProperty.call(this.emoticonsByName, e.name)) n.push(G.Z.escape(e.name)), (this.emoticonsByName[e.name] = e);
            };
        H.ZP.forEach(r);
        let a = (e) => {
            let n = eo[null == e ? z.kod : e];
            null != n && (_().each(n.usableEmojis, r), _().each(n.emoticons, i));
        };
        for (let e in (a(this.guildId), this.newlyAddedEmoji)) null != this.newlyAddedEmoji[e] ? (this.newlyAddedEmoji[e] = this.newlyAddedEmoji[e].sort((e, n) => Z.default.compare(n.id, e.id)).slice(0, 3)) : (this.newlyAddedEmoji[e] = []);
        P.ZP.getFlattenedGuildIds().forEach((e) => {
            e !== this.guildId && a(e);
        }),
            (this.escapedEmoticonNames = n.join('|'));
    }
    constructor(e) {
        X(this, 'guildId', void 0),
            X(this, 'emoticonRegex', null),
            X(this, 'frequentlyUsed', null),
            X(this, 'favorites', null),
            X(this, 'favoriteNamesAndIds', null),
            X(this, 'topEmojis', null),
            X(this, 'escapedEmoticonNames', null),
            X(this, 'disambiguatedEmoji', null),
            X(this, 'customEmojis', void 0),
            X(this, 'groupedCustomEmojis', void 0),
            X(this, 'emoticonsByName', void 0),
            X(this, 'emojisByName', void 0),
            X(this, 'emojisById', void 0),
            X(this, 'unicodeAliases', void 0),
            X(this, 'newlyAddedEmoji', null),
            X(this, 'frequentlyUsedReactionEmojis', null),
            X(this, 'isFavoriteEmojiWithoutFetchingLatest', (e) => {
                var n;
                if (null == e) return !1;
                let { favoriteNamesAndIds: r } = this.rebuildFavoriteEmojisWithoutFetchingLatest();
                if (null != e.id) return r.has(e.id);
                let i = null !== (n = H.ZP.convertSurrogateToBase(e.surrogates)) && void 0 !== n ? n : e;
                return r.has(i.name);
            }),
            (this.guildId = e);
    }
}
X(eg, '_lastInstance', null);
let eE = em(eg.resetFrequentlyUsed),
    ev = em(eg.resetFrequentlyUsedReactionEmojis);
function eI() {
    (eo = {}), (el = {}), eg.reset(), ec.clear(), (ea = 3);
}
function eT(e) {
    if (null != eo[e]) delete eo[e];
}
function eb() {
    (el = null), eg.reset(), (3 === ea || 1 === ea) && (eE.compute(), ev.compute());
}
function ey(e, n) {
    if ((eT(e), eg.clear(e), null == n)) return;
    let r = M.default.getCurrentUser();
    if (null == r) return;
    let i = (0, R.r)(e);
    eo[e] = new et(e, r.id, n, i);
}
function eS(e) {
    for (let n of (eI(), e.guilds)) ey(n.id, n.emojis);
    (ea = e.guilds.every((e) => null != e.emojis) ? 1 : 0), eb();
}
function eA(e) {
    for (let n in (eI(), e.emojis)) ey(n, e.emojis[n]);
    (ea = 1), eb();
}
function eN() {
    (ee.pendingUsages = []), (ee.emojiReactionPendingUsages = []);
}
function eC() {
    eI();
}
function eR(e) {
    1 === ea && null == e.guild.emojis && null != e.guild.emojiUpdates && (ea = 0), ey(e.guild.id, e.guild.emojis), eb();
}
function eO(e) {
    ey(e.guild.id, e.guild.emojis), eb();
}
function eD(e) {
    let { guildId: n, emojis: r } = e;
    ey(n, r), eb();
}
function eL(e) {
    let { guild: n } = e;
    eT(n.id), ec.delete(n.id), eb();
}
function ex(e) {
    var n;
    let { guildId: r, user: i } = e;
    if (i.id !== (null === (n = M.default.getCurrentUser()) || void 0 === n ? void 0 : n.id)) return;
    let a = eo[r];
    ey(r, null == a ? void 0 : a.usableEmojis), eb();
}
function ew(e) {
    if (!e.optimistic) return !1;
    let n = null != e.emoji.id && '0' !== e.emoji.id ? e.emoji : H.ZP.getByName(H.ZP.convertSurrogateToName(e.emoji.name, !1));
    if (null == n) return !1;
    eZ([n]), eG([n]);
}
function eP(e, n) {
    let { canSplitFrecencyList: r } = V.Z.getCurrentConfig({ location: 'populateInitialFrecencyData' }, { autoTrackExposure: !0 }),
        i = (0, j.E2)({
            location: 'populateInitialFrecencyData',
            autoTrackExposure: !0
        });
    if ((j.Xb.trackExposure({ location: 'populateInitialFrecencyData' }), _().isEmpty(e) && _().isEmpty(ee.pendingUsages) && D.Z.hasLoaded(Q.yP.FRECENCY_AND_FAVORITES_SETTINGS))) for (let e of ['thumbsup', 'thumbsup', 'eyes', 'eyes', 'laughing', 'laughing', 'watermelon', 'fork_and_knife', 'yum', 'weary', 'tired_face', 'poop', '100']) eE.track(e);
    if ((r || i) && _().isEmpty(n) && _().isEmpty(ee.emojiReactionPendingUsages) && D.Z.hasLoaded(Q.yP.FRECENCY_AND_FAVORITES_SETTINGS)) for (let e of ['100', '100', 'thumbsup', 'thumbsup', 'thumbsdown', 'thumbsdown', 'heart', 'point_up', 'eyes', 'weary', 'laughing', 'white_check_mark', 'x']) ev.track(e);
}
function eM() {
    var e, n, r, i, a, s;
    let o = null === (n = D.Z.settings.textAndImages) || void 0 === n ? void 0 : null === (e = n.diversitySurrogate) || void 0 === e ? void 0 : e.value;
    null != o && H.ZP.setDefaultDiversitySurrogate(o), eg.reset();
    let l = D.Z.frecencyWithoutFetchingLatest,
        u = null !== (a = null === (r = l.emojiFrecency) || void 0 === r ? void 0 : r.emojis) && void 0 !== a ? a : {},
        c = null !== (s = null === (i = l.emojiReactionFrecency) || void 0 === i ? void 0 : i.emojis) && void 0 !== s ? s : {};
    eE.overwriteHistory(
        _().mapValues(u, (e) => ({
            ...e,
            recentUses: e.recentUses.map(Number).filter((e) => e > 0)
        })),
        ee.pendingUsages
    ),
        ev.overwriteHistory(
            _().mapValues(c, (e) => ({
                ...e,
                recentUses: e.recentUses.map(Number).filter((e) => e > 0)
            })),
            ee.emojiReactionPendingUsages
        ),
        eP(u, c);
}
function ek(e) {
    let {
        settings: { type: n },
        wasSaved: r
    } = e;
    if ((y.Z.setEmojiLocale(O.default.locale), n !== Q.yP.FRECENCY_AND_FAVORITES_SETTINGS || !r)) return !1;
    (ee.pendingUsages = []), (ee.emojiReactionPendingUsages = []);
}
function eU() {
    if (!S.Z.hasLoadedExperiments) return;
    let { frecencyAlgorithm: e } = j.ZP.getCurrentConfig({ location: 'handleExperimentsChange' }, { autoTrackExposure: !0 }),
        n = v.M$[e],
        r = v.KX[e],
        i = 'original' !== e;
    e !== J && ev.replaceEntryComputeFunctions(n, r, i), (J = e);
}
function eB(e) {
    let { emojiUsed: n } = e;
    eG(n);
}
function eG(e) {
    if (null == e) return !1;
    for (let i of e) {
        var n, r;
        let e = null !== (r = null !== (n = i.id) && void 0 !== n ? n : i.uniqueName) && void 0 !== r ? r : i.name;
        null != e &&
            (eE.track(e),
            ee.pendingUsages.push({
                key: e,
                timestamp: Date.now()
            }));
    }
    let i = e.length > 0;
    return i && (3 === ea || 1 === ea) && eE.compute(), i;
}
function eZ(e) {
    if (null == e) return !1;
    for (let i of e) {
        var n, r;
        let e = null !== (r = null !== (n = i.id) && void 0 !== n ? n : i.uniqueName) && void 0 !== r ? r : i.name;
        null != e &&
            (ev.track(e),
            ee.emojiReactionPendingUsages.push({
                key: e,
                timestamp: Date.now()
            }));
    }
    let i = e.length > 0;
    return i && (3 === ea || 1 === ea) && ev.compute(), i;
}
function eF(e) {
    let { guildId: n, role: r } = e;
    if (!(0, A.Z)(r)) return !1;
    {
        let e = eo[n];
        ey(n, null == e ? void 0 : e.emojis), eb();
    }
}
function eV(e) {
    let { guildId: n } = e,
        r = new Set(ee.expandedSectionsByGuildIds);
    ee.expandedSectionsByGuildIds.has(n) ? r.delete(n) : r.add(n),
        (ee = {
            ...ee,
            expandedSectionsByGuildIds: r
        });
}
function ej(e) {
    let { guildId: n, topEmojisMetadata: r } = e;
    ec.set(n, {
        emojiIds: r.map((e) => e.emojiId),
        topEmojisTTL: p()(p()()).add(1, 'days').valueOf()
    });
}
function eH(e) {
    let { text: n } = e;
    eu = n;
}
class eY extends (a = g.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(I.Z, x.Z, L.ZP, w.Z, O.default, C.Z, Y.Z, M.default, S.Z), null != e && (null != e.pendingUsages && (ee.pendingUsages = e.pendingUsages), null != e.emojiReactionPendingUsages && (ee.emojiReactionPendingUsages = e.emojiReactionPendingUsages), null != e.expandedSectionsByGuildIds && (ee.expandedSectionsByGuildIds = new Set(e.expandedSectionsByGuildIds))), this.syncWith([D.Z], eM), this.syncWith([S.Z], eU);
    }
    getState() {
        return ee;
    }
    get loadState() {
        return ea;
    }
    hasPendingUsage() {
        return ee.pendingUsages.length > 0 || ee.emojiReactionPendingUsages.length > 0;
    }
    get expandedSectionsByGuildIds() {
        return ee.expandedSectionsByGuildIds;
    }
    get categories() {
        return es;
    }
    get diversitySurrogate() {
        var e;
        return null !== (e = H.ZP.getDefaultDiversitySurrogate()) && void 0 !== e ? e : '';
    }
    get emojiFrecencyWithoutFetchingLatest() {
        return eE;
    }
    get emojiReactionFrecencyWithoutFetchingLatest() {
        return ev;
    }
    getGuildEmoji(e) {
        var n;
        eh();
        let r = eo[e];
        return null !== (n = null == r ? void 0 : r.emojis) && void 0 !== n ? n : [];
    }
    getUsableGuildEmoji(e) {
        var n;
        eh();
        let r = eo[e];
        return null !== (n = null == r ? void 0 : r.usableEmojis) && void 0 !== n ? n : [];
    }
    getGuilds() {
        return eo;
    }
    getDisambiguatedEmojiContext(e) {
        return eh(), eg.get(e);
    }
    getSearchResultsOrder(e, n, r, i) {
        let a = n.toLowerCase(),
            s = G.Z.escape(a),
            { canSplitFrecencyList: o } = V.Z.getCurrentConfig({ location: 'getSearchResultsOrder' }, { autoTrackExposure: !0 }),
            l = (0, j.E2)({
                location: 'getSearchResultsOrder',
                autoTrackExposure: !0
            });
        if ((j.Xb.trackExposure({ location: 'getSearchResultsOrder' }), e.length > 0)) {
            let n = RegExp('^'.concat(s), 'i'),
                r = new RegExp('(^|_|[A-Z])'.concat(s, 's?([A-Z]|_|$)')),
                u = r.test.bind(r),
                c = n.test.bind(n),
                d = function (e) {
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e;
                    if (null == e || null == n) return 0;
                    let r = e.toLowerCase(),
                        s = 1 + (r === a ? 4 : 0) + (u(r) || u(e) ? 2 : 0) + (c(e) ? 1 : 0),
                        d = i === K.Hz.REACTION && (o || l) ? ev.getScore(n) : eE.getScore(n);
                    return null != d && (s *= d / 100), s;
                };
            e = _().orderBy(e, [(e) => (null != e.names ? d(e.names[0]) : d(e.name, e.id)), (e) => (null != e.names ? e.names[0] : e.name)], ['desc', 'asc']);
        }
        return r > 0 && (e = e.slice(0, r)), e;
    }
    searchWithoutFetchingLatest(e) {
        let n,
            { channel: r, query: i, count: a = 0, intention: s, includeExternalGuilds: o = !0, matchComparator: l } = e;
        eh();
        let u = i.toLowerCase().replaceAll(/[ _]/g, ''),
            c = G.Z.escape(u);
        if (null == l) {
            let e = RegExp(''.concat(c), 'i');
            n = (n) => e.test(n.replaceAll('_', ''));
        } else n = l;
        let d = null != r ? r.getGuildId() : null,
            f = eg
                .get(d)
                .nameMatchesChain(n)
                .reduce(
                    (e, n) => {
                        let i = U.ZP.getEmojiUnavailableReason({
                            emoji: n,
                            channel: r,
                            intention: s,
                            forceIncludeExternalGuilds: o
                        });
                        return i === K.Z5.PREMIUM_LOCKED ? e.locked.push(n) : null == i && e.unlocked.push(n), e;
                    },
                    {
                        unlocked: [],
                        locked: []
                    }
                );
        return {
            unlocked: this.getSearchResultsOrder(f.unlocked, i, a, s),
            locked: this.getSearchResultsOrder(f.locked, i, 0, s)
        };
    }
    getUsableCustomEmojiById(e) {
        return eh(), ef(e);
    }
    getCustomEmojiById(e) {
        return eh(), ed(e);
    }
    getTopEmoji(e) {
        return null == e ? ei : (eh(), eg.get(e).getTopEmojiWithoutFetchingLatest(e));
    }
    getNewlyAddedEmoji(e) {
        return null == e ? ei : (eh(), eg.get(e).getNewlyAddedEmojiForGuild(e));
    }
    getTopEmojisMetadata(e) {
        return ec.get(e);
    }
    getEmojiAutosuggestion(e) {
        if (null != eu && eu.length > 0) {
            let { locked: n, unlocked: r } = this.searchWithoutFetchingLatest({
                channel: e,
                count: 10,
                query: eu,
                intention: K.Hz.CHAT
            });
            return [...r.slice(0, 5), ...n.slice(0, 5)].slice(0, 5);
        }
        return [];
    }
    hasUsableEmojiInAnyGuild() {
        return eh(), Z.default.keys(eo).some((e) => eo[e].usableEmojis.length > 0);
    }
    hasFavoriteEmojis(e) {
        let n = eg.get(e);
        return null != n && n.favoriteEmojisWithoutFetchingLatest.length > 0;
    }
}
X(eY, 'displayName', 'EmojiStore'),
    X(eY, 'persistKey', 'EmojiStoreV2'),
    X(eY, 'migrations', [(e) => ({ ...e })]),
    (n.ZP = new eY(E.Z, {
        LOGOUT: eN,
        BACKGROUND_SYNC: eC,
        CONNECTION_OPEN: eS,
        OVERLAY_INITIALIZE: eA,
        CACHED_EMOJIS_LOADED: ep,
        GUILD_MEMBER_UPDATE: ex,
        GUILD_CREATE: eR,
        GUILD_UPDATE: eO,
        GUILD_EMOJIS_UPDATE: eD,
        GUILD_DELETE: eL,
        MESSAGE_REACTION_ADD: ew,
        EMOJI_TRACK_USAGE: eB,
        USER_SETTINGS_PROTO_UPDATE: ek,
        GUILD_ROLE_CREATE: eF,
        GUILD_ROLE_UPDATE: eF,
        TOP_EMOJIS_FETCH_SUCCESS: ej,
        EMOJI_AUTOSUGGESTION_UPDATE: eH,
        TOGGLE_GUILD_EXPANDED_STATE: eV
    }));
