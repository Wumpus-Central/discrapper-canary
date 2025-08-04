(n.d(t, {
    De: () => ep,
    ZP: () => eZ
}),
    n(388685),
    n(825670),
    n(413496),
    n(433524),
    n(35282),
    n(539854),
    n(642613),
    n(804061),
    n(704826));
var r,
    i = n(392711),
    a = n.n(i),
    o = n(913527),
    s = n.n(o),
    l = n(135273),
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
    O = n(706454),
    v = n(581883),
    I = n(271383),
    T = n(93093),
    S = n(485386),
    A = n(430824),
    N = n(771845),
    C = n(594174),
    R = n(70956),
    P = n(176354),
    w = n(823379),
    D = n(226951),
    L = n(709054),
    x = n(906411),
    k = n(689789),
    M = n(407477),
    j = n(633302),
    U = n(396352),
    G = n(856985),
    B = n(185923),
    V = n(981631),
    F = n(149203),
    Z = n(526761);
function H(e, t, n) {
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
function Y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                H(e, t, n[t]);
            }));
    }
    return e;
}
function W(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function K(e, t) {
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
let z = 'original',
    q = [F.UX.TOP_GUILD_EMOJI.toString(), F.UX.FAVORITES.toString(), F.UX.RECENT.toString(), F.UX.CUSTOM.toString()].concat(j.ZP.getCategories()),
    X = {
        pendingUsages: [],
        emojiReactionPendingUsages: [],
        expandedSectionsByGuildIds: new Set()
    };
class Q {
    getEmoji(e) {
        return (this.build(), this._emojiMap[e]);
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
        return (this.build(), this._emojis);
    }
    get emoticons() {
        return (this.build(), this._emoticons);
    }
    get usableEmojis() {
        return (this.build(), this._usableEmojis);
    }
    build() {
        this._dirty &&
            ((this._dirty = !1),
            this._emojis.forEach((e) => {
                ((e.allNamesString = ':'.concat(e.name, ':')), (e.guildId = this.id), (e.type = x.B.GUILD), (this._emojiMap[e.id] = e));
            }),
            (this._usableEmojis = a().sortBy(
                this._emojis.filter((e) => this.isUsable(e)),
                (e) => e.name
            )),
            (this._emoticons = this._usableEmojis.filter((e) => !e.require_colons)));
    }
    constructor(e, t, n, r = !1) {
        (H(this, 'id', void 0), H(this, '_userId', void 0), H(this, '_dirty', !0), H(this, '_emojis', void 0), H(this, '_emojiMap', {}), H(this, '_emoticons', []), H(this, '_usableEmojis', []), H(this, '_canSeeServerSubIAP', !1), H(this, '_totalUsable', 0), (this.id = e), (this._userId = t), (this._emojis = n), (this._canSeeServerSubIAP = r));
    }
}
let J = 42,
    $ = L.default.fromTimestamp(Date.now() - 60 * R.Z.Millis.DAY),
    ee = [],
    et = [],
    en = 3,
    er = [...q],
    ei = {},
    ea = {},
    eo = null,
    es = new Map();
function el(e) {
    var t, n;
    let r = eu()[e];
    return null != r && null != (n = null == (t = ei[r]) ? void 0 : t.getEmoji(e)) ? n : void 0;
}
function ec(e) {
    var t, n;
    let r = eu()[e];
    return null != r && null != (n = null == (t = ei[r]) ? void 0 : t.getUsableEmoji(e)) ? n : void 0;
}
function eu() {
    if ((ed(), null == ea)) for (let e in ((ea = {}), ei)) for (let t of ei[e].rawEmojis) ea[t.id] = e;
    return ea;
}
async function ed() {
    if (0 !== en) return;
    let e = f.Z.database();
    if (null == e) return;
    en = 2;
    let t = await (0, _.gs)('EmojiStore.loadSavedEmojis', () => l.Z.timeAsync('\uD83D\uDCBE', 'loadSavedEmojis', () => p.Z.getAsync(e)));
    ((en = 3),
        null != t &&
            u.Z.dispatch({
                type: 'CACHED_EMOJIS_LOADED',
                emojis: t
            }));
}
function ef(e) {
    let { emojis: t } = e;
    for (let [e, n] of t) !Object.hasOwn(ei, e) && T.Z.isMember(e) && ey(e, n);
    eb();
}
function e_(e) {
    return new d.ZP({
        computeBonus: () => 100,
        computeWeight: (e) => {
            let t = 1;
            return (e <= 3 ? (t = 100) : e <= 15 ? (t = 70) : e <= 30 ? (t = 50) : e <= 45 ? (t = 30) : e <= 80 && (t = 10), t);
        },
        lookupKey: (e) => {
            var t;
            return null != (t = j.ZP.getByName(e)) ? t : ec(e);
        },
        afterCompute: () => {
            (e(), (er = [...q]), a().some(ei, (e) => e.usableEmojis.length > 0) || er.splice(q.indexOf(F.UX.CUSTOM), 1));
        },
        numFrequentlyItems: J
    });
}
class ep {
    static get(e) {
        return (void 0 === e && (e = null), (null == ep._lastInstance || ep._lastInstance.guildId !== e) && (ep._lastInstance = new ep(e)), ep._lastInstance);
    }
    static reset() {
        ep._lastInstance = null;
    }
    static resetFrequentlyUsed() {
        null != ep._lastInstance && (ep._lastInstance.frequentlyUsed = null);
    }
    static resetFrequentlyUsedReactionEmojis() {
        null != ep._lastInstance && (ep._lastInstance.frequentlyUsedReactionEmojis = null);
    }
    static resetFavorites() {
        null != ep._lastInstance && ((ep._lastInstance.favorites = null), (ep._lastInstance.favoriteNamesAndIds = null));
    }
    static clear(e) {
        null != ep._lastInstance && ep._lastInstance.guildId === e && (ep._lastInstance = null);
    }
    ensureDisambiguated() {
        null == this.disambiguatedEmoji && this._buildDisambiguatedCustomEmoji();
    }
    getDisambiguatedEmoji() {
        return (null == this.disambiguatedEmoji && this._buildDisambiguatedCustomEmoji(), this.disambiguatedEmoji);
    }
    getCustomEmoji() {
        return (null == this.customEmojis && this._buildDisambiguatedCustomEmoji(), this.customEmojis);
    }
    getGroupedCustomEmoji() {
        return (null == this.groupedCustomEmojis && this._buildDisambiguatedCustomEmoji(), this.groupedCustomEmojis);
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
        return (null == this.escapedEmoticonNames && this._buildDisambiguatedCustomEmoji(), null == this.emoticonRegex && null != this.escapedEmoticonNames && '' !== this.escapedEmoticonNames && (this.emoticonRegex = new RegExp('^\\b('.concat(this.escapedEmoticonNames, ')\\b'))), this.emoticonRegex);
    }
    getFrequentlyUsedEmojisWithoutFetchingLatest() {
        if ((this.ensureDisambiguated(), null != this.frequentlyUsed)) return this.frequentlyUsed;
        let e = eh.frequently.map((e) => (null != e.id ? this.getById(e.id) : j.ZP.getByName(e.name))).filter(w.lm),
            t = (0, G.Z)(e);
        return ((this.frequentlyUsed = [...t.values()]), this.frequentlyUsed);
    }
    getFrequentlyUsedReactionEmojisWithoutFetchingLatest() {
        if ((this.ensureDisambiguated(), null != this.frequentlyUsedReactionEmojis)) return this.frequentlyUsedReactionEmojis;
        let e = em.frequently.map((e) => (null != e.id ? this.getById(e.id) : j.ZP.getByName(e.name))).filter(w.lm),
            t = (0, G.Z)(e);
        return ((this.frequentlyUsedReactionEmojis = [...t.values()]), this.frequentlyUsedReactionEmojis);
    }
    rebuildFavoriteEmojisWithoutFetchingLatest() {
        var e, t;
        if ((this.ensureDisambiguated(), null != this.favorites && null != this.favoriteNamesAndIds))
            return {
                favorites: this.favorites,
                favoriteNamesAndIds: this.favoriteNamesAndIds
            };
        let n = (null != (t = null == (e = v.Z.frecencyWithoutFetchingLatest.favoriteEmojis) ? void 0 : e.emojis) ? t : [])
                .map((e) => {
                    var t;
                    return null != (t = this.getById(e)) ? t : j.ZP.getByName(e);
                })
                .filter(w.lm),
            r = (0, G.Z)(n);
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
            let n = es.get(e),
                r = U.Z.getTopEmojiIdsByGuildId(e);
            if (null == n && null == r) return ee;
            let i = (null != (t = null == n ? void 0 : n.emojiIds) ? t : r).map((e) => {
                    var t;
                    return null != (t = this.getById(e)) ? t : j.ZP.getByName(j.ZP.convertSurrogateToName(e, !1));
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
        if ((this.ensureDisambiguated(), null == this.newlyAddedEmoji)) return ee;
        let t = this.newlyAddedEmoji[e];
        return null == t ? ee : t;
    }
    getEscapedCustomEmoticonNames() {
        return (null == this.escapedEmoticonNames && this._buildDisambiguatedCustomEmoji(), this.escapedEmoticonNames);
    }
    nameMatchesChain(e) {
        return a()(this.getDisambiguatedEmoji()).filter((t) => {
            let { names: n, name: r } = t,
                i = null != n && a().some(n, e),
                o = null != r && e(r),
                s = null != r && a().some(h.Z.getTermsForEmoji(r), e);
            return i || o || s;
        });
    }
    _buildDisambiguatedCustomEmoji() {
        let e = {},
            t = [];
        ((this.emoticonRegex = null), (this.frequentlyUsed = null), (this.frequentlyUsedReactionEmojis = null), (this.disambiguatedEmoji = []), (this.unicodeAliases = Object.create(null)), (this.customEmojis = Object.create(null)), (this.groupedCustomEmojis = Object.create(null)), (this.emoticonsByName = Object.create(null)), (this.emojisByName = Object.create(null)), (this.emojisById = Object.create(null)), (this.newlyAddedEmoji = Object.create(null)));
        let n = (t) => {
                var n, r;
                let i = t.name,
                    a = null != (n = e[i]) ? n : 0;
                if (((e[i] = a + 1), a > 0)) {
                    let e = ''.concat(i, '~').concat(a);
                    t = K(Y({}, t), {
                        name: e,
                        originalName: i,
                        allNamesString: ':'.concat(e, ':')
                    });
                }
                if (((this.emojisByName[t.name] = t), 'names' in t && (null == (r = t.names) || r.slice(1).forEach((e) => (this.unicodeAliases[e] = t.name))), null != t.id)) {
                    let e, n;
                    ((this.emojisById[t.id] = t), (this.customEmojis[t.name] = t), t.type === x.B.GUILD && ((e = t.guildId), (n = !0)), null != e && (null != this.groupedCustomEmojis[e] ? this.groupedCustomEmojis[e].push(t) : (this.groupedCustomEmojis[e] = [t]), n && L.default.compare(t.id, $) >= 0 && (null != this.newlyAddedEmoji[e] ? this.newlyAddedEmoji[e].push(t) : (this.newlyAddedEmoji[e] = [t]))));
                }
                (null == this.disambiguatedEmoji && (this.disambiguatedEmoji = []), this.disambiguatedEmoji.push(t));
            },
            r = (e) => {
                Object.prototype.hasOwnProperty.call(this.emoticonsByName, e.name) || (t.push(D.Z.escape(e.name)), (this.emoticonsByName[e.name] = e));
            };
        j.ZP.forEach(n);
        let i = (e) => {
            let t = ei[null == e ? V.kod : e];
            null != t && (a().each(t.usableEmojis, n), a().each(t.emoticons, r));
        };
        for (let e in (i(this.guildId), this.newlyAddedEmoji)) null != this.newlyAddedEmoji[e] ? (this.newlyAddedEmoji[e] = this.newlyAddedEmoji[e].sort((e, t) => L.default.compare(t.id, e.id)).slice(0, 3)) : (this.newlyAddedEmoji[e] = []);
        (N.ZP.getFlattenedGuildIds().forEach((e) => {
            e !== this.guildId && i(e);
        }),
            (this.escapedEmoticonNames = t.join('|')));
    }
    constructor(e) {
        (H(this, 'guildId', void 0),
            H(this, 'emoticonRegex', null),
            H(this, 'frequentlyUsed', null),
            H(this, 'favorites', null),
            H(this, 'favoriteNamesAndIds', null),
            H(this, 'topEmojis', null),
            H(this, 'escapedEmoticonNames', null),
            H(this, 'disambiguatedEmoji', null),
            H(this, 'customEmojis', void 0),
            H(this, 'groupedCustomEmojis', void 0),
            H(this, 'emoticonsByName', void 0),
            H(this, 'emojisByName', void 0),
            H(this, 'emojisById', void 0),
            H(this, 'unicodeAliases', void 0),
            H(this, 'newlyAddedEmoji', null),
            H(this, 'frequentlyUsedReactionEmojis', null),
            H(this, 'isFavoriteEmojiWithoutFetchingLatest', (e) => {
                var t;
                if (null == e) return !1;
                let { favoriteNamesAndIds: n } = this.rebuildFavoriteEmojisWithoutFetchingLatest();
                if (null != e.id) return n.has(e.id);
                let r = null != (t = j.ZP.convertSurrogateToBase(e.surrogates)) ? t : e;
                return n.has(r.name);
            }),
            (this.guildId = e));
    }
}
H(ep, '_lastInstance', null);
let eh = e_(ep.resetFrequentlyUsed),
    em = e_(ep.resetFrequentlyUsedReactionEmojis);
function eg() {
    ((ei = {}), (ea = {}), ep.reset(), es.clear(), (en = 3));
}
function eE(e) {
    null != ei[e] && delete ei[e];
}
function eb() {
    ((ea = null), ep.reset(), (3 === en || 1 === en) && (eh.compute(), em.compute()));
}
function ey(e, t) {
    if ((eE(e), ep.clear(e), null == t)) return;
    let n = C.default.getCurrentUser();
    if (null == n) return;
    let r = (0, y.r)(e);
    ei[e] = new Q(e, n.id, t, r);
}
function eO(e) {
    for (let t of (eg(), e.guilds)) ey(t.id, t.emojis.items);
    ((en = +!!e.guilds.every((e) => null != e.emojis.items)), eb());
}
function ev(e) {
    for (let t in (eg(), e.emojis)) ey(t, e.emojis[t]);
    ((en = 1), eb());
}
function eI() {
    ((X.pendingUsages = []), (X.emojiReactionPendingUsages = []));
}
function eT() {
    eg();
}
function eS(e) {
    (1 === en && 'update' === e.guild.emojis.op && null == e.guild.emojis.items && (en = 0), ey(e.guild.id, e.guild.emojis.items), eb());
}
function eA(e) {
    (ey(e.guild.id, e.guild.emojis), eb());
}
function eN(e) {
    let { guildId: t, emojis: n } = e;
    (ey(t, n), eb());
}
function eC(e) {
    let { guild: t } = e;
    (eE(t.id), es.delete(t.id), eb());
}
function eR(e) {
    var t;
    let { guildId: n, user: r } = e;
    if (r.id !== (null == (t = C.default.getCurrentUser()) ? void 0 : t.id)) return;
    let i = ei[n];
    (ey(n, null == i ? void 0 : i.usableEmojis), eb());
}
function eP(e) {
    if (!e.optimistic) return !1;
    let t = null != e.emoji.id && '0' !== e.emoji.id ? e.emoji : j.ZP.getByName(j.ZP.convertSurrogateToName(e.emoji.name, !1));
    if (null == t) return !1;
    (ej([t]), eM([t]));
}
function ew(e, t) {
    let { canSplitFrecencyList: n } = k.Z.getCurrentConfig({ location: 'populateInitialFrecencyData' }, { autoTrackExposure: !0 }),
        r = (0, M.E2)({
            location: 'populateInitialFrecencyData',
            autoTrackExposure: !0
        });
    if ((M.Xb.trackExposure({ location: 'populateInitialFrecencyData' }), a().isEmpty(e) && a().isEmpty(X.pendingUsages) && v.Z.hasLoaded(Z.yP.FRECENCY_AND_FAVORITES_SETTINGS))) for (let e of ['thumbsup', 'thumbsup', 'eyes', 'eyes', 'laughing', 'laughing', 'watermelon', 'fork_and_knife', 'yum', 'weary', 'tired_face', 'poop', '100']) eh.track(e);
    if ((n || r) && a().isEmpty(t) && a().isEmpty(X.emojiReactionPendingUsages) && v.Z.hasLoaded(Z.yP.FRECENCY_AND_FAVORITES_SETTINGS)) for (let e of ['100', '100', 'thumbsup', 'thumbsup', 'thumbsdown', 'thumbsdown', 'heart', 'point_up', 'eyes', 'weary', 'laughing', 'white_check_mark', 'x']) em.track(e);
}
function eD() {
    var e, t, n, r, i, o;
    let s = null == (t = v.Z.settings.textAndImages) || null == (e = t.diversitySurrogate) ? void 0 : e.value;
    (null != s && j.ZP.setDefaultDiversitySurrogate(s), ep.reset());
    let l = v.Z.frecencyWithoutFetchingLatest,
        c = null != (i = null == (n = l.emojiFrecency) ? void 0 : n.emojis) ? i : {},
        u = null != (o = null == (r = l.emojiReactionFrecency) ? void 0 : r.emojis) ? o : {};
    (eh.overwriteHistory(
        a().mapValues(c, (e) => K(Y({}, e), { recentUses: e.recentUses.map(Number).filter((e) => e > 0) })),
        X.pendingUsages
    ),
        em.overwriteHistory(
            a().mapValues(u, (e) => K(Y({}, e), { recentUses: e.recentUses.map(Number).filter((e) => e > 0) })),
            X.emojiReactionPendingUsages
        ),
        ew(c, u));
}
function eL(e) {
    let {
        settings: { type: t },
        wasSaved: n
    } = e;
    if ((h.Z.setEmojiLocale(O.default.locale), t !== Z.yP.FRECENCY_AND_FAVORITES_SETTINGS || !n)) return !1;
    ((X.pendingUsages = []), (X.emojiReactionPendingUsages = []));
}
function ex() {
    if (!m.Z.hasLoadedExperiments) return;
    let { frecencyAlgorithm: e } = M.ZP.getCurrentConfig({ location: 'handleExperimentsChange' }, { autoTrackExposure: !0 }),
        t = d.M$[e],
        n = d.KX[e],
        r = 'original' !== e;
    (e !== z && em.replaceEntryComputeFunctions(t, n, r), (z = e));
}
function ek(e) {
    let { emojiUsed: t } = e;
    eM(t);
}
function eM(e) {
    if (null == e) return !1;
    for (let r of e) {
        var t, n;
        let e = null != (n = null != (t = r.id) ? t : r.uniqueName) ? n : r.name;
        null != e &&
            (eh.track(e),
            X.pendingUsages.push({
                key: e,
                timestamp: Date.now()
            }));
    }
    let r = e.length > 0;
    return (r && (3 === en || 1 === en) && eh.compute(), r);
}
function ej(e) {
    if (null == e) return !1;
    for (let r of e) {
        var t, n;
        let e = null != (n = null != (t = r.id) ? t : r.uniqueName) ? n : r.name;
        null != e &&
            (em.track(e),
            X.emojiReactionPendingUsages.push({
                key: e,
                timestamp: Date.now()
            }));
    }
    let r = e.length > 0;
    return (r && (3 === en || 1 === en) && em.compute(), r);
}
function eU(e) {
    let {
            guildId: t,
            role: { id: n }
        } = e,
        r = S.Z.getRole(t, n);
    if (!(null != r && (0, g.Z)(r))) return !1;
    {
        let e = ei[t];
        (ey(t, null == e ? void 0 : e.emojis), eb());
    }
}
function eG(e) {
    let { guildId: t } = e,
        n = new Set(X.expandedSectionsByGuildIds);
    (X.expandedSectionsByGuildIds.has(t) ? n.delete(t) : n.add(t), (X = K(Y({}, X), { expandedSectionsByGuildIds: n })));
}
function eB(e) {
    let { guildId: t, topEmojisMetadata: n } = e;
    es.set(t, {
        emojiIds: n.map((e) => e.emojiId),
        topEmojisTTL: s()(s()()).add(1, 'days').valueOf()
    });
}
function eV(e) {
    let { text: t } = e;
    eo = t;
}
class eF extends (r = c.ZP.PersistedStore) {
    initialize(e) {
        (this.waitFor(f.Z, T.Z, I.ZP, A.Z, O.default, b.Z, U.Z, C.default, m.Z, S.Z), null != e && (null != e.pendingUsages && (X.pendingUsages = e.pendingUsages), null != e.emojiReactionPendingUsages && (X.emojiReactionPendingUsages = e.emojiReactionPendingUsages), null != e.expandedSectionsByGuildIds && (X.expandedSectionsByGuildIds = new Set(e.expandedSectionsByGuildIds))), this.syncWith([v.Z], eD), this.syncWith([m.Z], ex));
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
        return null != (e = j.ZP.getDefaultDiversitySurrogate()) ? e : '';
    }
    get emojiFrecencyWithoutFetchingLatest() {
        return eh;
    }
    get emojiReactionFrecencyWithoutFetchingLatest() {
        return em;
    }
    getGuildEmoji(e) {
        var t;
        ed();
        let n = null == e ? void 0 : ei[e];
        return null != (t = null == n ? void 0 : n.emojis) ? t : et;
    }
    getUsableGuildEmoji(e) {
        var t;
        ed();
        let n = ei[e];
        return null != (t = null == n ? void 0 : n.usableEmojis) ? t : et;
    }
    getGuilds() {
        return ei;
    }
    getDisambiguatedEmojiContext(e) {
        return (ed(), ep.get(e));
    }
    getSearchResultsOrder(e, t, n, r) {
        let i = t.toLowerCase(),
            o = D.Z.escape(i),
            { canSplitFrecencyList: s } = k.Z.getCurrentConfig({ location: 'getSearchResultsOrder' }, { autoTrackExposure: !0 }),
            l = (0, M.E2)({
                location: 'getSearchResultsOrder',
                autoTrackExposure: !0
            });
        if ((M.Xb.trackExposure({ location: 'getSearchResultsOrder' }), e.length > 0)) {
            let t = RegExp('^'.concat(o), 'i'),
                n = new RegExp('(^|_|[A-Z])'.concat(o, 's?([A-Z]|_|$)')),
                c = n.test.bind(n),
                u = t.test.bind(t),
                d = function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e;
                    if (null == e || null == t) return 0;
                    let n = e.toLowerCase(),
                        a = 1 + 4 * (n === i) + (c(n) || c(e) ? 2 : 0) + +!!u(e),
                        o = r === B.Hz.REACTION && (s || l) ? em.getScore(t) : eh.getScore(t);
                    return (null != o && (a *= o / 100), a);
                };
            e = a().orderBy(e, [(e) => (null != e.names ? d(e.names[0]) : d(e.name, e.id)), (e) => (null != e.names ? e.names[0] : e.name)], ['desc', 'asc']);
        }
        return (n > 0 && (e = e.slice(0, n)), e);
    }
    searchWithoutFetchingLatest(e) {
        let t,
            { channel: n, query: r, count: i = 0, intention: a, includeExternalGuilds: o = !0, matchComparator: s, showOnlyUnicode: l } = e;
        ed();
        let c = r.toLowerCase().replaceAll(/[ _]/g, ''),
            u = D.Z.escape(c);
        if (null == s) {
            let e = RegExp(''.concat(u), 'i');
            t = (t) => e.test(t.replaceAll('_', ''));
        } else t = s;
        let d = null != n ? n.getGuildId() : null,
            f = ep
                .get(d)
                .nameMatchesChain(t)
                .reduce(
                    (e, t) => {
                        let r = P.ZP.getEmojiUnavailableReason({
                            emoji: t,
                            channel: n,
                            intention: a,
                            forceIncludeExternalGuilds: o
                        });
                        return (r !== B.Z5.PREMIUM_LOCKED || l ? null != r || (l && t.type !== x.B.UNICODE) || e.unlocked.push(t) : e.locked.push(t), e);
                    },
                    {
                        unlocked: [],
                        locked: []
                    }
                );
        return {
            unlocked: this.getSearchResultsOrder(f.unlocked, r, i, a),
            locked: this.getSearchResultsOrder(f.locked, r, 0, a)
        };
    }
    getUsableCustomEmojiById(e) {
        return (ed(), ec(e));
    }
    getCustomEmojiById(e) {
        return (ed(), el(e));
    }
    getTopEmoji(e) {
        return null == e ? ee : (ed(), ep.get(e).getTopEmojiWithoutFetchingLatest(e));
    }
    getNewlyAddedEmoji(e) {
        return null == e ? ee : (ed(), ep.get(e).getNewlyAddedEmojiForGuild(e));
    }
    getTopEmojisMetadata(e) {
        return es.get(e);
    }
    getEmojiAutosuggestion(e) {
        if (null != eo && eo.length > 0) {
            let { locked: t, unlocked: n } = this.searchWithoutFetchingLatest({
                channel: e,
                count: 10,
                query: eo,
                intention: B.Hz.CHAT
            });
            return [...n.slice(0, 5), ...t.slice(0, 5)].slice(0, 5);
        }
        return [];
    }
    hasUsableEmojiInAnyGuild() {
        return (ed(), L.default.keys(ei).some((e) => ei[e].usableEmojis.length > 0));
    }
    hasFavoriteEmojis(e) {
        let t = ep.get(e);
        return null != t && t.favoriteEmojisWithoutFetchingLatest.length > 0;
    }
}
(H(eF, 'displayName', 'EmojiStore'), H(eF, 'persistKey', 'EmojiStoreV2'), H(eF, 'migrations', [(e) => Y({}, e)]));
let eZ = new eF(u.Z, {
    LOGOUT: eI,
    BACKGROUND_SYNC: eT,
    CONNECTION_OPEN: eO,
    OVERLAY_INITIALIZE: ev,
    CACHED_EMOJIS_LOADED: ef,
    GUILD_MEMBER_UPDATE: eR,
    GUILD_CREATE: eS,
    GUILD_UPDATE: eA,
    GUILD_EMOJIS_UPDATE: eN,
    GUILD_DELETE: eC,
    MESSAGE_REACTION_ADD: eP,
    EMOJI_TRACK_USAGE: ek,
    USER_SETTINGS_PROTO_UPDATE: eL,
    GUILD_ROLE_CREATE: eU,
    GUILD_ROLE_UPDATE: eU,
    TOP_EMOJIS_FETCH_SUCCESS: eB,
    EMOJI_AUTOSUGGESTION_UPDATE: eV,
    TOGGLE_GUILD_EXPANDED_STATE: eG
});
