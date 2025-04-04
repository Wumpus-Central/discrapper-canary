n.d(t, {
    De: () => ef,
    ZP: () => eF
}),
    n(47120),
    n(51350),
    n(474991),
    n(398202),
    n(301563),
    n(653041),
    n(230036),
    n(627494),
    n(757143);
var r,
    i = n(392711),
    o = n.n(i),
    a = n(913527),
    s = n.n(a),
    l = n(956067),
    c = n(442837),
    u = n(570140),
    d = n(704907),
    f = n(287328),
    _ = n(86670),
    p = n(489033),
    h = n(188742),
    m = n(353926),
    g = n(973542),
    E = n(889564),
    b = n(687476),
    y = n(978519),
    v = n(706454),
    O = n(581883),
    I = n(271383),
    S = n(93093),
    T = n(430824),
    N = n(771845),
    A = n(594174),
    C = n(70956),
    R = n(176354),
    P = n(823379),
    w = n(226951),
    D = n(709054),
    L = n(906411),
    x = n(689789),
    M = n(407477),
    k = n(633302),
    j = n(396352),
    U = n(856985),
    G = n(185923),
    B = n(981631),
    F = n(149203),
    V = n(526761);
function Z(e, t, n) {
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
function H(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                Z(e, t, n[t]);
            });
    }
    return e;
}
function W(e, t) {
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
function Y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : W(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let K = 'original',
    z = [F.UX.TOP_GUILD_EMOJI.toString(), F.UX.FAVORITES.toString(), F.UX.RECENT.toString(), F.UX.CUSTOM.toString()].concat(k.ZP.getCategories()),
    q = {
        pendingUsages: [],
        emojiReactionPendingUsages: [],
        expandedSectionsByGuildIds: new Set()
    };
class Q {
    getEmoji(e) {
        return this.build(), this._emojiMap[e];
    }
    getUsableEmoji(e) {
        let t = this.getEmoji(e);
        return null != t && this.isUsable(t) ? t : null;
    }
    isUsable(e) {
        if (0 === e.roles.length) return !0;
        let t = I.ZP.getMember(this.id, this._userId);
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
                (e.allNamesString = ':'.concat(e.name, ':')), (e.guildId = this.id), (e.type = L.B.GUILD), (this._emojiMap[e.id] = e);
            }),
            (this._usableEmojis = o().sortBy(
                this._emojis.filter((e) => this.isUsable(e)),
                (e) => e.name
            )),
            (this._emoticons = this._usableEmojis.filter((e) => !e.require_colons)));
    }
    constructor(e, t, n, r = !1) {
        Z(this, 'id', void 0), Z(this, '_userId', void 0), Z(this, '_dirty', !0), Z(this, '_emojis', void 0), Z(this, '_emojiMap', {}), Z(this, '_emoticons', []), Z(this, '_usableEmojis', []), Z(this, '_canSeeServerSubIAP', !1), Z(this, '_totalUsable', 0), (this.id = e), (this._userId = t), (this._emojis = n), (this._canSeeServerSubIAP = r);
    }
}
let X = 42,
    J = D.default.fromTimestamp(Date.now() - 60 * C.Z.Millis.DAY),
    $ = [],
    ee = 3,
    et = z.slice(0),
    en = {},
    er = {},
    ei = null,
    eo = new Map();
function ea(e) {
    var t, n;
    let r = el()[e];
    return null != r && null != (n = null == (t = en[r]) ? void 0 : t.getEmoji(e)) ? n : void 0;
}
function es(e) {
    var t, n;
    let r = el()[e];
    return null != r && null != (n = null == (t = en[r]) ? void 0 : t.getUsableEmoji(e)) ? n : void 0;
}
function el() {
    if ((ec(), null == er)) for (let e in ((er = {}), en)) for (let t of en[e].rawEmojis) er[t.id] = e;
    return er;
}
async function ec() {
    if (0 !== ee) return;
    let e = f.Z.database();
    if (null == e) return;
    ee = 2;
    let t = await (0, _.gs)('EmojiStore.loadSavedEmojis', () => l.Z.timeAsync('\uD83D\uDCBE', 'loadSavedEmojis', () => p.Z.getAsync(e)));
    (ee = 3),
        null != t &&
            u.Z.dispatch({
                type: 'CACHED_EMOJIS_LOADED',
                emojis: t
            });
}
function eu(e) {
    let { emojis: t } = e;
    for (let [e, n] of t) !Object.hasOwn(en, e) && S.Z.isMember(e) && eE(e, n);
    eg();
}
function ed(e) {
    return new d.ZP({
        computeBonus: () => 100,
        computeWeight: (e) => {
            let t = 1;
            return e <= 3 ? (t = 100) : e <= 15 ? (t = 70) : e <= 30 ? (t = 50) : e <= 45 ? (t = 30) : e <= 80 && (t = 10), t;
        },
        lookupKey: (e) => {
            var t;
            return null != (t = k.ZP.getByName(e)) ? t : es(e);
        },
        afterCompute: () => {
            e(), (et = z.slice(0)), o().some(en, (e) => e.usableEmojis.length > 0) || et.splice(z.indexOf(F.UX.CUSTOM), 1);
        },
        numFrequentlyItems: X
    });
}
class ef {
    static get(e) {
        return void 0 === e && (e = null), (null == ef._lastInstance || ef._lastInstance.guildId !== e) && (ef._lastInstance = new ef(e)), ef._lastInstance;
    }
    static reset() {
        ef._lastInstance = null;
    }
    static resetFrequentlyUsed() {
        null != ef._lastInstance && (ef._lastInstance.frequentlyUsed = null);
    }
    static resetFrequentlyUsedReactionEmojis() {
        null != ef._lastInstance && (ef._lastInstance.frequentlyUsedReactionEmojis = null);
    }
    static resetFavorites() {
        null != ef._lastInstance && ((ef._lastInstance.favorites = null), (ef._lastInstance.favoriteNamesAndIds = null));
    }
    static clear(e) {
        null != ef._lastInstance && ef._lastInstance.guildId === e && (ef._lastInstance = null);
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
        let e = e_.frequently.map((e) => (null != e.id ? this.getById(e.id) : k.ZP.getByName(e.name))).filter(P.lm),
            t = (0, U.Z)(e);
        return (this.frequentlyUsed = [...t.values()]), this.frequentlyUsed;
    }
    getFrequentlyUsedReactionEmojisWithoutFetchingLatest() {
        if ((this.ensureDisambiguated(), null != this.frequentlyUsedReactionEmojis)) return this.frequentlyUsedReactionEmojis;
        let e = ep.frequently.map((e) => (null != e.id ? this.getById(e.id) : k.ZP.getByName(e.name))).filter(P.lm),
            t = (0, U.Z)(e);
        return (this.frequentlyUsedReactionEmojis = [...t.values()]), this.frequentlyUsedReactionEmojis;
    }
    rebuildFavoriteEmojisWithoutFetchingLatest() {
        var e, t;
        if ((this.ensureDisambiguated(), null != this.favorites && null != this.favoriteNamesAndIds))
            return {
                favorites: this.favorites,
                favoriteNamesAndIds: this.favoriteNamesAndIds
            };
        let n = (null != (t = null == (e = O.Z.frecencyWithoutFetchingLatest.favoriteEmojis) ? void 0 : e.emojis) ? t : [])
                .map((e) => {
                    var t;
                    return null != (t = this.getById(e)) ? t : k.ZP.getByName(e);
                })
                .filter(P.lm),
            r = (0, U.Z)(n);
        return (
            (this.favorites = [...r.values()]),
            (this.favoriteNamesAndIds = new Set(r.keys())),
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
            let n = eo.get(e),
                r = j.Z.getTopEmojiIdsByGuildId(e);
            if (null == n && null == r) return $;
            let i = (null != (t = null == n ? void 0 : n.emojiIds) ? t : r).map((e) => {
                    var t;
                    return null != (t = this.getById(e)) ? t : k.ZP.getByName(k.ZP.convertSurrogateToName(e, !1));
                }),
                o = [];
            i.forEach((e) => {
                null != e && o.push(e);
            });
            let a = this.getNewlyAddedEmojiForGuild(e).map((e) => e.id);
            this.topEmojis = o.filter((e) => !a.includes(e.id));
        }
        return this.topEmojis;
    }
    getNewlyAddedEmojiForGuild(e) {
        if ((this.ensureDisambiguated(), null == this.newlyAddedEmoji)) return $;
        let t = this.newlyAddedEmoji[e];
        return null == t ? $ : t;
    }
    getEscapedCustomEmoticonNames() {
        return null == this.escapedEmoticonNames && this._buildDisambiguatedCustomEmoji(), this.escapedEmoticonNames;
    }
    nameMatchesChain(e) {
        return o()(this.getDisambiguatedEmoji()).filter((t) => {
            let { names: n, name: r } = t,
                i = null != n && o().some(n, e),
                a = null != r && e(r),
                s = null != r && o().some(h.Z.getTermsForEmoji(r), e);
            return i || a || s;
        });
    }
    _buildDisambiguatedCustomEmoji() {
        let e = {},
            t = [];
        (this.emoticonRegex = null), (this.frequentlyUsed = null), (this.frequentlyUsedReactionEmojis = null), (this.disambiguatedEmoji = []), (this.unicodeAliases = Object.create(null)), (this.customEmojis = Object.create(null)), (this.groupedCustomEmojis = Object.create(null)), (this.emoticonsByName = Object.create(null)), (this.emojisByName = Object.create(null)), (this.emojisById = Object.create(null)), (this.newlyAddedEmoji = Object.create(null));
        let n = (t) => {
                var n, r;
                let i = t.name,
                    o = null != (n = e[i]) ? n : 0;
                if (((e[i] = o + 1), o > 0)) {
                    let e = ''.concat(i, '~').concat(o);
                    t = Y(H({}, t), {
                        name: e,
                        originalName: i,
                        allNamesString: ':'.concat(e, ':')
                    });
                }
                if (((this.emojisByName[t.name] = t), 'names' in t && (null == (r = t.names) || r.slice(1).forEach((e) => (this.unicodeAliases[e] = t.name))), null != t.id)) {
                    let e, n;
                    (this.emojisById[t.id] = t), (this.customEmojis[t.name] = t), t.type === L.B.GUILD && ((e = t.guildId), (n = !0)), null != e && (null != this.groupedCustomEmojis[e] ? this.groupedCustomEmojis[e].push(t) : (this.groupedCustomEmojis[e] = [t]), n && D.default.compare(t.id, J) >= 0 && (null != this.newlyAddedEmoji[e] ? this.newlyAddedEmoji[e].push(t) : (this.newlyAddedEmoji[e] = [t])));
                }
                null == this.disambiguatedEmoji && (this.disambiguatedEmoji = []), this.disambiguatedEmoji.push(t);
            },
            r = (e) => {
                Object.prototype.hasOwnProperty.call(this.emoticonsByName, e.name) || (t.push(w.Z.escape(e.name)), (this.emoticonsByName[e.name] = e));
            };
        k.ZP.forEach(n);
        let i = (e) => {
            let t = en[null == e ? B.kod : e];
            null != t && (o().each(t.usableEmojis, n), o().each(t.emoticons, r));
        };
        for (let e in (i(this.guildId), this.newlyAddedEmoji)) null != this.newlyAddedEmoji[e] ? (this.newlyAddedEmoji[e] = this.newlyAddedEmoji[e].sort((e, t) => D.default.compare(t.id, e.id)).slice(0, 3)) : (this.newlyAddedEmoji[e] = []);
        N.ZP.getFlattenedGuildIds().forEach((e) => {
            e !== this.guildId && i(e);
        }),
            (this.escapedEmoticonNames = t.join('|'));
    }
    constructor(e) {
        Z(this, 'guildId', void 0),
            Z(this, 'emoticonRegex', null),
            Z(this, 'frequentlyUsed', null),
            Z(this, 'favorites', null),
            Z(this, 'favoriteNamesAndIds', null),
            Z(this, 'topEmojis', null),
            Z(this, 'escapedEmoticonNames', null),
            Z(this, 'disambiguatedEmoji', null),
            Z(this, 'customEmojis', void 0),
            Z(this, 'groupedCustomEmojis', void 0),
            Z(this, 'emoticonsByName', void 0),
            Z(this, 'emojisByName', void 0),
            Z(this, 'emojisById', void 0),
            Z(this, 'unicodeAliases', void 0),
            Z(this, 'newlyAddedEmoji', null),
            Z(this, 'frequentlyUsedReactionEmojis', null),
            Z(this, 'isFavoriteEmojiWithoutFetchingLatest', (e) => {
                var t;
                if (null == e) return !1;
                let { favoriteNamesAndIds: n } = this.rebuildFavoriteEmojisWithoutFetchingLatest();
                if (null != e.id) return n.has(e.id);
                let r = null != (t = k.ZP.convertSurrogateToBase(e.surrogates)) ? t : e;
                return n.has(r.name);
            }),
            (this.guildId = e);
    }
}
Z(ef, '_lastInstance', null);
let e_ = ed(ef.resetFrequentlyUsed),
    ep = ed(ef.resetFrequentlyUsedReactionEmojis);
function eh() {
    (en = {}), (er = {}), ef.reset(), eo.clear(), (ee = 3);
}
function em(e) {
    null != en[e] && delete en[e];
}
function eg() {
    (er = null), ef.reset(), (3 === ee || 1 === ee) && (e_.compute(), ep.compute());
}
function eE(e, t) {
    if ((em(e), ef.clear(e), null == t)) return;
    let n = A.default.getCurrentUser();
    if (null == n) return;
    let r = (0, y.r)(e);
    en[e] = new Q(e, n.id, t, r);
}
function eb(e) {
    for (let t of (eh(), e.guilds)) eE(t.id, t.emojis);
    (ee = +!!e.guilds.every((e) => null != e.emojis)), eg();
}
function ey(e) {
    for (let t in (eh(), e.emojis)) eE(t, e.emojis[t]);
    (ee = 1), eg();
}
function ev() {
    (q.pendingUsages = []), (q.emojiReactionPendingUsages = []);
}
function eO() {
    eh();
}
function eI(e) {
    1 === ee && null == e.guild.emojis && null != e.guild.emojiUpdates && (ee = 0), eE(e.guild.id, e.guild.emojis), eg();
}
function eS(e) {
    eE(e.guild.id, e.guild.emojis), eg();
}
function eT(e) {
    let { guildId: t, emojis: n } = e;
    eE(t, n), eg();
}
function eN(e) {
    let { guild: t } = e;
    em(t.id), eo.delete(t.id), eg();
}
function eA(e) {
    var t;
    let { guildId: n, user: r } = e;
    if (r.id !== (null == (t = A.default.getCurrentUser()) ? void 0 : t.id)) return;
    let i = en[n];
    eE(n, null == i ? void 0 : i.usableEmojis), eg();
}
function eC(e) {
    if (!e.optimistic) return !1;
    let t = null != e.emoji.id && '0' !== e.emoji.id ? e.emoji : k.ZP.getByName(k.ZP.convertSurrogateToName(e.emoji.name, !1));
    if (null == t) return !1;
    eM([t]), ex([t]);
}
function eR(e, t) {
    let { canSplitFrecencyList: n } = x.Z.getCurrentConfig({ location: 'populateInitialFrecencyData' }, { autoTrackExposure: !0 }),
        r = (0, M.E2)({
            location: 'populateInitialFrecencyData',
            autoTrackExposure: !0
        });
    if ((M.Xb.trackExposure({ location: 'populateInitialFrecencyData' }), o().isEmpty(e) && o().isEmpty(q.pendingUsages) && O.Z.hasLoaded(V.yP.FRECENCY_AND_FAVORITES_SETTINGS))) for (let e of ['thumbsup', 'thumbsup', 'eyes', 'eyes', 'laughing', 'laughing', 'watermelon', 'fork_and_knife', 'yum', 'weary', 'tired_face', 'poop', '100']) e_.track(e);
    if ((n || r) && o().isEmpty(t) && o().isEmpty(q.emojiReactionPendingUsages) && O.Z.hasLoaded(V.yP.FRECENCY_AND_FAVORITES_SETTINGS)) for (let e of ['100', '100', 'thumbsup', 'thumbsup', 'thumbsdown', 'thumbsdown', 'heart', 'point_up', 'eyes', 'weary', 'laughing', 'white_check_mark', 'x']) ep.track(e);
}
function eP() {
    var e, t, n, r, i, a;
    let s = null == (t = O.Z.settings.textAndImages) || null == (e = t.diversitySurrogate) ? void 0 : e.value;
    null != s && k.ZP.setDefaultDiversitySurrogate(s), ef.reset();
    let l = O.Z.frecencyWithoutFetchingLatest,
        c = null != (i = null == (n = l.emojiFrecency) ? void 0 : n.emojis) ? i : {},
        u = null != (a = null == (r = l.emojiReactionFrecency) ? void 0 : r.emojis) ? a : {};
    e_.overwriteHistory(
        o().mapValues(c, (e) => Y(H({}, e), { recentUses: e.recentUses.map(Number).filter((e) => e > 0) })),
        q.pendingUsages
    ),
        ep.overwriteHistory(
            o().mapValues(u, (e) => Y(H({}, e), { recentUses: e.recentUses.map(Number).filter((e) => e > 0) })),
            q.emojiReactionPendingUsages
        ),
        eR(c, u);
}
function ew(e) {
    let {
        settings: { type: t },
        wasSaved: n
    } = e;
    if ((h.Z.setEmojiLocale(v.default.locale), t !== V.yP.FRECENCY_AND_FAVORITES_SETTINGS || !n)) return !1;
    (q.pendingUsages = []), (q.emojiReactionPendingUsages = []);
}
function eD() {
    if (!m.Z.hasLoadedExperiments) return;
    let { frecencyAlgorithm: e } = M.ZP.getCurrentConfig({ location: 'handleExperimentsChange' }, { autoTrackExposure: !0 }),
        t = d.M$[e],
        n = d.KX[e],
        r = 'original' !== e;
    e !== K && ep.replaceEntryComputeFunctions(t, n, r), (K = e);
}
function eL(e) {
    let { emojiUsed: t } = e;
    ex(t);
}
function ex(e) {
    if (null == e) return !1;
    for (let r of e) {
        var t, n;
        let e = null != (n = null != (t = r.id) ? t : r.uniqueName) ? n : r.name;
        null != e &&
            (e_.track(e),
            q.pendingUsages.push({
                key: e,
                timestamp: Date.now()
            }));
    }
    let r = e.length > 0;
    return r && (3 === ee || 1 === ee) && e_.compute(), r;
}
function eM(e) {
    if (null == e) return !1;
    for (let r of e) {
        var t, n;
        let e = null != (n = null != (t = r.id) ? t : r.uniqueName) ? n : r.name;
        null != e &&
            (ep.track(e),
            q.emojiReactionPendingUsages.push({
                key: e,
                timestamp: Date.now()
            }));
    }
    let r = e.length > 0;
    return r && (3 === ee || 1 === ee) && ep.compute(), r;
}
function ek(e) {
    let { guildId: t, role: n } = e;
    if (!(0, g.Z)(n)) return !1;
    {
        let e = en[t];
        eE(t, null == e ? void 0 : e.emojis), eg();
    }
}
function ej(e) {
    let { guildId: t } = e,
        n = new Set(q.expandedSectionsByGuildIds);
    q.expandedSectionsByGuildIds.has(t) ? n.delete(t) : n.add(t), (q = Y(H({}, q), { expandedSectionsByGuildIds: n }));
}
function eU(e) {
    let { guildId: t, topEmojisMetadata: n } = e;
    eo.set(t, {
        emojiIds: n.map((e) => e.emojiId),
        topEmojisTTL: s()(s()()).add(1, 'days').valueOf()
    });
}
function eG(e) {
    let { text: t } = e;
    ei = t;
}
class eB extends (r = c.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(f.Z, S.Z, I.ZP, T.Z, v.default, b.Z, j.Z, A.default, m.Z), null != e && (null != e.pendingUsages && (q.pendingUsages = e.pendingUsages), null != e.emojiReactionPendingUsages && (q.emojiReactionPendingUsages = e.emojiReactionPendingUsages), null != e.expandedSectionsByGuildIds && (q.expandedSectionsByGuildIds = new Set(e.expandedSectionsByGuildIds))), this.syncWith([O.Z], eP), this.syncWith([m.Z], eD);
    }
    getState() {
        return q;
    }
    get loadState() {
        return ee;
    }
    hasPendingUsage() {
        return q.pendingUsages.length > 0 || q.emojiReactionPendingUsages.length > 0;
    }
    get expandedSectionsByGuildIds() {
        return q.expandedSectionsByGuildIds;
    }
    get categories() {
        return et;
    }
    get diversitySurrogate() {
        var e;
        return null != (e = k.ZP.getDefaultDiversitySurrogate()) ? e : '';
    }
    get emojiFrecencyWithoutFetchingLatest() {
        return e_;
    }
    get emojiReactionFrecencyWithoutFetchingLatest() {
        return ep;
    }
    getGuildEmoji(e) {
        var t;
        ec();
        let n = en[e];
        return null != (t = null == n ? void 0 : n.emojis) ? t : [];
    }
    getUsableGuildEmoji(e) {
        var t;
        ec();
        let n = en[e];
        return null != (t = null == n ? void 0 : n.usableEmojis) ? t : [];
    }
    getGuilds() {
        return en;
    }
    getDisambiguatedEmojiContext(e) {
        return ec(), ef.get(e);
    }
    getSearchResultsOrder(e, t, n, r) {
        let i = t.toLowerCase(),
            a = w.Z.escape(i),
            { canSplitFrecencyList: s } = x.Z.getCurrentConfig({ location: 'getSearchResultsOrder' }, { autoTrackExposure: !0 }),
            l = (0, M.E2)({
                location: 'getSearchResultsOrder',
                autoTrackExposure: !0
            });
        if ((M.Xb.trackExposure({ location: 'getSearchResultsOrder' }), e.length > 0)) {
            let t = RegExp('^'.concat(a), 'i'),
                n = new RegExp('(^|_|[A-Z])'.concat(a, 's?([A-Z]|_|$)')),
                c = n.test.bind(n),
                u = t.test.bind(t),
                d = function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e;
                    if (null == e || null == t) return 0;
                    let n = e.toLowerCase(),
                        o = 1 + 4 * (n === i) + (c(n) || c(e) ? 2 : 0) + +!!u(e),
                        a = r === G.Hz.REACTION && (s || l) ? ep.getScore(t) : e_.getScore(t);
                    return null != a && (o *= a / 100), o;
                };
            e = o().orderBy(e, [(e) => (null != e.names ? d(e.names[0]) : d(e.name, e.id)), (e) => (null != e.names ? e.names[0] : e.name)], ['desc', 'asc']);
        }
        return n > 0 && (e = e.slice(0, n)), e;
    }
    searchWithoutFetchingLatest(e) {
        let t,
            { channel: n, query: r, count: i = 0, intention: o, includeExternalGuilds: a = !0, matchComparator: s } = e;
        ec();
        let l = r.toLowerCase().replaceAll(/[ _]/g, ''),
            c = w.Z.escape(l);
        if (null == s) {
            let e = RegExp(''.concat(c), 'i');
            t = (t) => e.test(t.replaceAll('_', ''));
        } else t = s;
        let u = null != n ? n.getGuildId() : null,
            d = ef
                .get(u)
                .nameMatchesChain(t)
                .reduce(
                    (e, t) => {
                        let r = R.ZP.getEmojiUnavailableReason({
                            emoji: t,
                            channel: n,
                            intention: o,
                            forceIncludeExternalGuilds: a
                        });
                        return r === G.Z5.PREMIUM_LOCKED ? e.locked.push(t) : null == r && e.unlocked.push(t), e;
                    },
                    {
                        unlocked: [],
                        locked: []
                    }
                );
        return {
            unlocked: this.getSearchResultsOrder(d.unlocked, r, i, o),
            locked: this.getSearchResultsOrder(d.locked, r, 0, o)
        };
    }
    getUsableCustomEmojiById(e) {
        return ec(), es(e);
    }
    getCustomEmojiById(e) {
        return ec(), ea(e);
    }
    getTopEmoji(e) {
        return null == e ? $ : (ec(), ef.get(e).getTopEmojiWithoutFetchingLatest(e));
    }
    getNewlyAddedEmoji(e) {
        return null == e ? $ : (ec(), ef.get(e).getNewlyAddedEmojiForGuild(e));
    }
    getTopEmojisMetadata(e) {
        return eo.get(e);
    }
    getEmojiAutosuggestion(e) {
        if (null != ei && ei.length > 0) {
            let { locked: t, unlocked: n } = this.searchWithoutFetchingLatest({
                channel: e,
                count: 10,
                query: ei,
                intention: G.Hz.CHAT
            });
            return [...n.slice(0, 5), ...t.slice(0, 5)].slice(0, 5);
        }
        return [];
    }
    hasUsableEmojiInAnyGuild() {
        return ec(), D.default.keys(en).some((e) => en[e].usableEmojis.length > 0);
    }
    hasFavoriteEmojis(e) {
        let t = ef.get(e);
        return null != t && t.favoriteEmojisWithoutFetchingLatest.length > 0;
    }
}
Z(eB, 'displayName', 'EmojiStore'), Z(eB, 'persistKey', 'EmojiStoreV2'), Z(eB, 'migrations', [(e) => H({}, e)]);
let eF = new eB(u.Z, {
    LOGOUT: ev,
    BACKGROUND_SYNC: eO,
    CONNECTION_OPEN: eb,
    OVERLAY_INITIALIZE: ey,
    CACHED_EMOJIS_LOADED: eu,
    GUILD_MEMBER_UPDATE: eA,
    GUILD_CREATE: eI,
    GUILD_UPDATE: eS,
    GUILD_EMOJIS_UPDATE: eT,
    GUILD_DELETE: eN,
    MESSAGE_REACTION_ADD: eC,
    EMOJI_TRACK_USAGE: eL,
    USER_SETTINGS_PROTO_UPDATE: ew,
    GUILD_ROLE_CREATE: ek,
    GUILD_ROLE_UPDATE: ek,
    TOP_EMOJIS_FETCH_SUCCESS: eU,
    EMOJI_AUTOSUGGESTION_UPDATE: eG,
    TOGGLE_GUILD_EXPANDED_STATE: ej
});
