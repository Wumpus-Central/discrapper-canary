n.d(t, {
    Bz: () => eb,
    Cb: () => K,
    Fq: () => z,
    PB: () => X,
    VR: () => eo,
    ZP: () => et,
    p2: () => Q,
    wF: () => $,
    wZ: () => q,
    wd: () => J,
    zR: () => ey,
}),
    n(388685),
    n(415506),
    n(539854),
    n(361932),
    n(187205),
    n(290780),
    n(642613);
var r = n(512722),
    i = n.n(r),
    a = n(392711),
    o = n.n(a),
    s = n(317381),
    l = n(812206),
    c = n(12498),
    u = n(430198),
    d = n(931261),
    f = n(924301),
    p = n(160404),
    _ = n(798423),
    m = n(18036),
    h = n(798379),
    g = n(398758),
    E = n(22082),
    b = n(893908),
    y = n(953252),
    O = n(601070),
    v = n(569471),
    S = n(131704),
    I = n(680089),
    T = n(592125),
    C = n(58468),
    A = n(430824),
    N = n(496675),
    P = n(306680),
    R = n(944486),
    w = n(9156),
    D = n(979651),
    x = n(938475),
    L = n(823379),
    j = n(709054),
    M = n(968358),
    k = n(203818),
    U = n(443063),
    G = n(981631),
    Z = n(176505),
    F = n(231338);
function B(e, t, n) {
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
function V(e) {
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
                B(e, t, n[t]);
            });
    }
    return e;
}
function H(e, t) {
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
            : H(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let W = "placeholder-channel-id",
    K = 2,
    z = 0,
    q = 1,
    Q = 2,
    X = 3,
    J = 4,
    $ = 5,
    ee = new Set([String(U.z.GUILD_DIRECTORY)]);
class et {
    _areGuildActionRowsUpdated(e, t) {
        var n;
        return !o().isEqual(
            null == (n = this.guilds[e])
                ? void 0
                : n
                      .getGuildActionSection()
                      .getRows()
                      .filter((e) => !ee.has(e)),
            t,
        );
    }
    _areChannelNoticeRowsUpdated(e, t) {
        var n;
        return !o().isEqual(null == (n = this.guilds[e]) ? void 0 : n.getChannelNoticeSection().getRows(), t);
    }
    _areGuildVocalChannelsInRecentsInNeedOfAppearingInActiveNow(e) {
        let t = this.guilds[e];
        if (null == t) return !1;
        let n = t.getCategoryFromSection(t.voiceChannelsSectionNumber),
            r = t.getCategoryFromSection(t.recentsSectionNumber);
        for (let e in r.channels) {
            let t = r.channels[e];
            if (
                2 === t.renderLevel &&
                t.record.isGuildVocal() &&
                null == n.channels[t.id] &&
                o().some(D.Z.getVoiceStatesForChannel(t.id)) &&
                P.ZP.getMentionCount(t.id) > 0
            )
                return !0;
        }
        return !1;
    }
    getGuild(e, t, n) {
        return (
            (!(e in this.guilds) ||
                this._areGuildActionRowsUpdated(e, t) ||
                this._areChannelNoticeRowsUpdated(e, n) ||
                this._areGuildVocalChannelsInRecentsInNeedOfAppearingInActiveNow(e)) &&
                (this.guilds[e] = new en(e, t, n)),
            this.guilds[e]
        );
    }
    getGuildChannelRowsOnly(e) {
        return e in this.guilds || (this.guilds[e] = new en(e, [], [])), this.guilds[e];
    }
    clear() {
        this.guilds = {};
    }
    clearGuildId(e) {
        return null != e && e in this.guilds && (delete this.guilds[e], !0);
    }
    updateRecentsCategory(e) {
        var t, n;
        return (
            null != e &&
            e in this.guilds &&
            null != (n = null == (t = this.guilds[e]) ? void 0 : t.updateRecentsCategory()) &&
            n
        );
    }
    nonPositionalChannelIdUpdate(e) {
        let t = T.Z.getBasicChannel(e);
        return (
            null != t &&
            null != t.guild_id &&
            null != this.guilds[t.guild_id] &&
            (t instanceof S.Sf || null != (t = T.Z.getChannel(e))) &&
            this.nonPositionalChannelUpdate(t)
        );
    }
    nonPositionalChannelUpdate(e) {
        if (null == e.guild_id) return !1;
        let t = this.guilds[e.guild_id];
        if (null == t) return !1;
        let n = !1;
        return (
            e.isThread() && (n = this.nonPositionalChannelIdUpdate(e.parent_id)), t.nonPositionalChannelUpdate(e) || n
        );
    }
    updateSubtitles(e, t) {
        (null == e ? Object.values(this.guilds) : e in this.guilds ? [this.guilds[e]] : []).forEach((e) =>
            e.updateSubtitles(t),
        );
    }
    constructor() {
        B(this, "guilds", {});
    }
}
class en {
    get initializationData() {
        return {
            selectedChannel: T.Z.getChannel(R.Z.getChannelId()),
            selectedVoiceChannelId: R.Z.getVoiceChannelId(),
            activeJoinedRelevantThreads: O.Z.getActiveJoinedRelevantThreadsForGuild(this.id),
            activeJoinedUnreadThreads: O.Z.getActiveJoinedUnreadThreadsForGuild(this.id),
        };
    }
    invalidate() {
        (this.sections = null),
            (this.rows = null),
            (this.sortedNamedCategories = null),
            (this.firstVoiceChannel = void 0),
            this.version++;
    }
    getSortedNamedCategories() {
        return null == this.sortedNamedCategories && this.getRows(), this.sortedNamedCategories;
    }
    getSortedCategories() {
        return [
            this.favoritesCategory,
            this.recentsCategory,
            this.noParentCategory,
            ...this.getSortedNamedCategories(),
            this.voiceChannelsCategory,
        ];
    }
    getSections() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return (null == this.sections && (this.sections = this.getRows().map((e) => e.length)), e)
            ? [...this.sections]
            : this.sections;
    }
    getRows() {
        if (null == this.rows) {
            (this.sortedNamedCategories = o().sortBy(Object.values(this.categories), (e) => e.record.position)),
                (this.rows = [
                    this.channelNoticeSection,
                    this.guildActionSection,
                    this.favoritesCategory,
                    this.recentsCategory,
                    this.noParentCategory,
                    ...this.sortedNamedCategories,
                    this.voiceChannelsCategory,
                ].map((e) => e.getRows()));
            let e = 0;
            for (let t of [this.noParentCategory, ...this.sortedNamedCategories])
                for (let n of ((t.position = ++e), t.getShownChannelIds())) t.channels[n].position = ++e;
        }
        return this.rows;
    }
    getCategoryFromSection(e) {
        switch (e) {
            case z:
                throw Error("Invalid section. Use getChannelNoticeSection instead");
            case q:
                throw Error("Invalid section. Use getGuildActionSection instead");
            case Q:
                return this.favoritesCategory;
            case J:
                return this.noParentCategory;
            case this.recentsSectionNumber:
                return this.recentsCategory;
            case this.voiceChannelsSectionNumber:
                return this.voiceChannelsCategory;
            default:
                return this.getSortedNamedCategories()[e - $];
        }
    }
    getNamedCategoryFromSection(e) {
        return (
            (e -= $),
            i()(e >= 0 && e < this.getSortedNamedCategories().length, "invalid section index ".concat(e)),
            this.getSortedNamedCategories()[e]
        );
    }
    getGuildActionSection() {
        return this.guildActionSection;
    }
    getChannelNoticeSection() {
        return this.channelNoticeSection;
    }
    getChannelFromSectionRow(e, t) {
        let n = this.getCategoryFromSection(e);
        if (null == n) return null;
        let r = n.channels[n.getShownChannelIds()[t]];
        return null == r
            ? null
            : {
                  category: n,
                  channel: r,
              };
    }
    isPlaceholderRow(e, t) {
        return i()(e > q, "Invalid section"), e !== this.recentsSectionNumber && this.getRows()[e][t] === W;
    }
    getFirstVoiceChannel(e) {
        if (void 0 === this.firstVoiceChannel) {
            if (
                ((this.firstVoiceChannel = this.favoritesCategory.getFirstVoiceChannel(e)),
                null != this.firstVoiceChannel ||
                    ((this.firstVoiceChannel = this.noParentCategory.getFirstVoiceChannel(e)),
                    null != this.firstVoiceChannel))
            )
                return this.firstVoiceChannel;
            for (let t of this.getSortedNamedCategories())
                if (null != t.getFirstVoiceChannel(e)) {
                    this.firstVoiceChannel = t.getFirstVoiceChannel(e);
                    break;
                }
        }
        return this.firstVoiceChannel;
    }
    getSectionRowsFromChannel(e) {
        let t = eC(e);
        if (null != t)
            return [
                {
                    row: this.getGuildActionSection().getRows().indexOf(t),
                    section: q,
                },
            ];
        let n = [],
            r = T.Z.getChannel(e);
        if (null == r || null == e) return n;
        let i = r.isThread();
        if ((i && (r = T.Z.getChannel(r.parent_id)), null == r)) return n;
        let a = this.favoritesCategory.getShownChannelIds().indexOf(r.id);
        a >= 0 &&
            n.push({
                section: Q,
                row: a,
            });
        let s = this.recentsCategory.getShownChannelIds().indexOf(r.id);
        if (
            (s >= 0 &&
                n.push({
                    section: this.recentsSectionNumber,
                    row: s,
                }),
            r.type === G.d4z.GUILD_CATEGORY)
        )
            return [
                {
                    section:
                        o().findIndex(this.getSortedNamedCategories(), (e) => e.id === (null == r ? void 0 : r.id)) + $,
                },
            ];
        let l = this.getCategory(r),
            c = l instanceof ei ? J : this.getSortedNamedCategories().indexOf(l) + $,
            u = l.getShownChannelIds().indexOf(r.id);
        if (c >= 0 && u >= 0) {
            let t = i ? l.channels[r.id].threadIds.indexOf(e) : 0;
            n.push({
                section: c,
                row: u,
                threadOffset: t,
            });
        }
        let d = this.voiceChannelsCategory.getShownChannelIds().indexOf(r.id);
        return (
            d >= 0 &&
                n.push({
                    section: this.voiceChannelsSectionNumber,
                    row: d,
                }),
            n
        );
    }
    getCategory(e) {
        return null != e.parent_id && e.parent_id in this.categories
            ? this.categories[e.parent_id]
            : this.noParentCategory;
    }
    updateRecentsCategory() {
        let e = this.recentsCategory.updateAllChannels(this.initializationData);
        return e && this.invalidate(), e;
    }
    nonPositionalChannelUpdate(e) {
        let t = this.initializationData,
            n = this.getCategory(e).updateChannel(e, t);
        return (
            this.favoritesCategory.updateChannel(e, t) && (n = !0),
            this.recentsCategory.updateChannel(e, t) && (n = !0),
            this.voiceChannelsCategory.updateChannel(e, t) && (n = !0),
            n && this.invalidate(),
            n
        );
    }
    getSlicedChannels(e, t) {
        i()(e.length > 0, "must have at least one channel in the slice");
        let n = e[0],
            r = e[e.length - 1],
            a = !0,
            o = !1,
            s = [],
            l = [];
        for (let e of this.getSortedCategories()) {
            let i = (null == t ? void 0 : t.ignoreRecents) && e === this.recentsCategory;
            for (let t of e.getShownChannelIds()) {
                let c = e.channels[t];
                a && (c.id === n.id ? (a = !1) : i || s.push(c)),
                    o && !i && l.push(c),
                    a || o || c.id !== r.id || (o = !0);
            }
        }
        return [s, e, l];
    }
    _initializeAllChannelsById() {
        if (null == this.allChannelsById)
            for (let e of ((this.allChannelsById = {}), this.getSortedCategories()))
                for (let t in e.channels) this.allChannelsById[t] = e.channels[t];
        return this.allChannelsById;
    }
    getChannels(e) {
        let t = [],
            n = this._initializeAllChannelsById();
        for (let r of e) null != n[r] && t.push(n[r]);
        return t;
    }
    getChannel(e) {
        var t;
        return null != (t = this._initializeAllChannelsById()[e]) ? t : null;
    }
    updateSubtitles(e) {
        let t = [];
        if (null != e) {
            let n = T.Z.getChannel(e);
            if (null != n)
                if (n.id in this.favoritesCategory.channels) t = [this.favoritesCategory.channels[n.id]];
                else if (n.id in this.recentsCategory.channels) t = [this.recentsCategory.channels[n.id]];
                else {
                    let r = this.getCategory(n);
                    null != r && null != r.channels[e] && (t = [r.channels[e]]);
                }
        } else
            t = o()(this.getSortedCategories())
                .map((e) => Object.values(e.channels))
                .flatten()
                .value();
        let n = !1;
        return (
            t.forEach((e) => {
                e.updateSubtitle() && (n = !0);
            }),
            n && this.version++,
            n
        );
    }
    forEachShownChannel(e, t) {
        for (let n of this.getSortedCategories())
            if (null == t || !t.ignoreRecents || n !== this.recentsCategory)
                for (let t of n.getShownChannelIds()) {
                    let r = n.channels[t];
                    for (let t of (e(r.record), r.threadIds)) {
                        let n = T.Z.getChannel(t);
                        null != n && e(n);
                    }
                }
    }
    forEachChannel(e, t) {
        for (let n of this.getSortedCategories())
            if (null == t || !t.ignoreRecents || n !== this.recentsCategory) for (let t of n.getChannelRecords()) e(t);
    }
    constructor(e, t, n) {
        var r, a;
        B(this, "id", void 0),
            B(this, "hideMutedChannels", void 0),
            B(this, "favoritesSectionNumber", void 0),
            B(this, "recentsSectionNumber", void 0),
            B(this, "voiceChannelsSectionNumber", void 0),
            B(this, "mutedChannelIds", void 0),
            B(this, "optedInChannels", void 0),
            B(this, "optInEnabled", void 0),
            B(this, "hideResourceChannels", void 0),
            B(this, "favoriteChannelIds", void 0),
            B(this, "suggestedFavoriteChannelId", void 0),
            B(this, "collapsedCategoryIds", void 0),
            B(this, "moderatorReportChannelId", void 0),
            B(this, "moderatorReportChannelEnabled", void 0),
            B(this, "categories", void 0),
            B(this, "noParentCategory", void 0),
            B(this, "favoritesCategory", void 0),
            B(this, "recentsCategory", void 0),
            B(this, "voiceChannelsCategory", void 0),
            B(this, "guildActionSection", void 0),
            B(this, "channelNoticeSection", void 0),
            B(this, "sortedNamedCategories", void 0),
            B(this, "sections", void 0),
            B(this, "rows", void 0),
            B(this, "firstVoiceChannel", void 0),
            B(this, "allChannelsById", void 0),
            B(this, "version", void 0),
            (this.id = e),
            (this.sortedNamedCategories = null),
            (this.sections = null),
            (this.rows = null),
            (this.firstVoiceChannel = void 0),
            (this.allChannelsById = null),
            (this.version = 0),
            (this.hideMutedChannels = w.ZP.isGuildCollapsed(this.id)),
            (this.mutedChannelIds = w.ZP.getMutedChannels(this.id)),
            (this.optedInChannels =
                null != (r = w.ZP.getOptedInChannelsWithPendingUpdates(this.id))
                    ? r
                    : w.ZP.getOptedInChannels(this.id)),
            (this.optInEnabled = (0, g.r1)(this.id)),
            (this.hideResourceChannels = (0, d.s)(this.id)),
            (this.favoriteChannelIds = new Set(null != (a = w.ZP.getGuildFavorites(this.id)) ? a : [])),
            (this.suggestedFavoriteChannelId = m.Z.getSuggestedChannelId(this.id)),
            (this.collapsedCategoryIds = I.Z.getCollapsedCategories());
        let s = T.Z.getMutableGuildChannelsForGuild(this.id),
            l = A.Z.getGuild(this.id);
        (this.moderatorReportChannelId = null != l ? (0, b.Z)(l) : null),
            (this.moderatorReportChannelEnabled = null != l && (0, y.Z)(l));
        let c = {},
            u = [],
            f = {};
        for (let e in s) {
            let t = s[e];
            t.type === G.d4z.GUILD_CATEGORY && ((c[t.id] = t), (f[t.id] = []));
        }
        let p = [],
            h = [],
            E = [],
            O = this.initializationData;
        for (let e in s) {
            let t = s[e];
            if (t.type !== G.d4z.GUILD_CATEGORY) {
                if (t.type === G.d4z.GUILD_DIRECTORY) {
                    null == l || l.features.has(G.GuildFeatures.HUB) || E.push(t);
                    continue;
                }
                eI(this, t, O)
                    ? p.push(t)
                    : (t.type === G.d4z.GUILD_VOICE || t.type === G.d4z.GUILD_STAGE_VOICE) &&
                      (null != t.parent_id && null != c[t.parent_id] && h.push(c[t.parent_id]), h.push(t)),
                    null != t.parent_id && t.parent_id in f ? f[t.parent_id].push(t) : u.push(t);
            }
        }
        for (let e in ((this.categories = {}), f)) this.categories[e] = new ea(this, c[e], f[e], O);
        (this.recentsSectionNumber = X),
            (this.favoritesSectionNumber = Q),
            (this.noParentCategory = new ei(this, u, O)),
            (this.favoritesCategory = new eo(this, O)),
            (this.recentsCategory = (0, _.Q)() ? new es(this, s, O) : new el(this, p, O)),
            (this.voiceChannelsCategory = new eu(this, h, c, O)),
            (this.guildActionSection = new ef(t, E.length > 0)),
            (this.channelNoticeSection = new ed(n)),
            i()(!("null" in this.categories), "somehow a null got into categories"),
            (this.voiceChannelsSectionNumber = $ + o().size(this.categories));
    }
}
class er {
    updateChannel(e, t) {
        return !!(e.id in this.channels && this.channels[e.id].updateChannel(e, t)) && (this.invalidate(), !0);
    }
    invalidate() {
        this.shownChannelIds = null;
    }
    getRows() {
        let e = this.getShownChannelIds();
        return 0 === e.length && this.shouldShowEmptyCategory() ? [W] : e;
    }
    shouldShowEmptyCategory() {
        return o().some(this.channels, (e) => e.renderLevel >= 3);
    }
    getShownChannelIds() {
        return (
            null == this.shownChannelIds &&
                (this.shownChannelIds = o()(this.channels)
                    .values()
                    .filter((e) => 4 === e.renderLevel)
                    .sortBy((e) => {
                        let { record: t } = e;
                        return t.isGuildVocal() ? t.position + 10000 : t.position;
                    })
                    .map((e) => e.id)
                    .value()),
            this.shownChannelIds
        );
    }
    getShownChannelAndThreadIds() {
        let e = o()(this.channels)
            .values()
            .flatMap((e) => e.threadIds)
            .value();
        return this.getShownChannelIds().concat(e);
    }
    isEmpty() {
        return 0 === this.getShownChannelIds().length;
    }
    getChannelRecords() {
        return o()(this.channels)
            .values()
            .filter((e) => e.renderLevel > 1)
            .map((e) => e.record)
            .value();
    }
    getFirstVoiceChannel(e) {
        for (let t of this.getShownChannelIds())
            if (e && this.channels[t].record.isGuildStageVoice()) return this.channels[t];
            else if (!e && this.channels[t].record.isGuildVocal()) return this.channels[t];
        return null;
    }
    constructor(e) {
        B(this, "guild", void 0),
            B(this, "isMuted", void 0),
            B(this, "isCollapsed", void 0),
            B(this, "position", void 0),
            B(this, "channels", void 0),
            B(this, "shownChannelIds", void 0),
            (this.guild = e),
            (this.isMuted = !1),
            (this.isCollapsed = !1),
            (this.position = -1),
            (this.channels = {}),
            (this.shownChannelIds = null);
    }
}
class ei extends er {
    constructor(e, t, n) {
        super(e),
            (this.channels = o()(t)
                .map((e) => new e_(this, e, n))
                .keyBy((e) => e.id)
                .value());
    }
}
class ea extends er {
    shouldShowEmptyCategory() {
        return !!(
            super.shouldShowEmptyCategory() ||
            (N.Z.can(F.Pl.MANAGE_CHANNELS, this.record) &&
                N.Z.can(F.Pl.VIEW_CHANNEL, this.record) &&
                o().isEmpty(this.channels) &&
                (!this.guild.optInEnabled || this.guild.optedInChannels.has(this.id)))
        );
    }
    constructor(e, t, n, r) {
        for (let i of (super(e),
        B(this, "id", void 0),
        B(this, "record", void 0),
        (this.record = t),
        (this.id = t.id),
        (this.isCollapsed = !0 === e.collapsedCategoryIds[t.id]),
        (this.isMuted = e.mutedChannelIds.has(t.id)),
        (this.channels = {}),
        n))
            this.channels[i.id] = new e_(this, i, r);
    }
}
class eo extends er {
    updateChannel(e, t) {
        let n = e.id in this.channels && w.ZP.isFavorite(e.guild_id, e.id),
            r = m.Z.getSuggestedChannelId(e.guild_id);
        return (e.id !== r ||
            n ||
            (t = Y(V({}, t), {
                activeJoinedRelevantThreads: {},
                activeJoinedUnreadThreads: {},
            })),
        e.id in this.channels && this.channels[e.id].updateChannel(e, t))
            ? (this.invalidate(), !0)
            : e.id in this.channels && e.id !== r && !n && (delete this.channels[e.id], this.invalidate(), !0);
    }
    getFirstVoiceChannel(e) {
        return null;
    }
    constructor(e, t) {
        var n;
        if ((super(e), !e.optInEnabled && !eO())) return;
        this.channels = o()(null != (n = w.ZP.getGuildFavorites(e.id)) ? n : [])
            .map((e) => T.Z.getChannel(e))
            .filter(L.lm)
            .map((e) => new em(this, e, t))
            .keyBy((e) => e.id)
            .value();
        let r = m.Z.getSuggestedChannelId(e.id),
            i = T.Z.getChannel(r);
        null != i &&
            null != r &&
            (this.channels[r] = new em(
                this,
                i,
                Y(V({}, t), {
                    activeJoinedRelevantThreads: {},
                    activeJoinedUnreadThreads: {},
                }),
            ));
    }
}
class es extends er {
    shouldShowEmptyCategory() {
        return this.enabled && this.isCollapsed && super.shouldShowEmptyCategory();
    }
    updateAllChannels(e) {
        return Object.values(this.channels).reduce((t, n) => this.updateChannel(n.record, e) || t, !1);
    }
    updateChannel(e, t) {
        if (!this.enabled) return !1;
        if ((0, S.Q5)(e.type)) {
            let t = this.channels[e.parent_id];
            return null != t && this.updateShownChannelIds(t);
        }
        if (!(0, S.vc)(e.type)) return !1;
        let n = super.updateChannel(e, t),
            r = this.channels[e.id];
        return null == r
            ? ((r = new eg(this, e, t)), (this.channels[e.id] = r), this.invalidate(), !0)
            : this.updateShownChannelIds(r) || n;
    }
    getFirstVoiceChannel(e) {
        return null;
    }
    getShownChannelIds() {
        if (null == this.shownChannelIds) {
            let e = this.isCollapsed ? 4 : 3;
            this.shownChannelIds = this.enabled
                ? o()(this.channels)
                      .filter((t) => t.renderLevel >= e)
                      .map((e) => [e.id, e.lastMessageTimestamp, e.renderLevel])
                      .filter((e) => {
                          let [, t, n] = e;
                          return 4 === n || (t > 0 && Date.now() - t < es.MAX_TIMESTAMP_DELTA);
                      })
                      .sortBy((e) => {
                          let [, t, n] = e;
                          return -(t - (4 === n ? 0 : j.DISCORD_EPOCH));
                      })
                      .take(es.MAX_RECENT_CHANNELS)
                      .sortBy((e) => {
                          let [, t] = e;
                          return -t;
                      })
                      .map((e) => {
                          let [t] = e;
                          return t;
                      })
                      .value()
                : [];
        }
        return this.shownChannelIds;
    }
    updateShownChannelIds(e) {
        var t;
        let n = this.isCollapsed ? 4 : 3;
        if (null == this.shownChannelIds || e.renderLevel < n) return !1;
        if (
            e.lastMessageTimestamp >
            (null == (t = this.channels[this.shownChannelIds[0]]) ? void 0 : t.lastMessageTimestamp)
        ) {
            let t = this.shownChannelIds.indexOf(e.id);
            return (
                t > -1 && this.shownChannelIds.splice(t, 1),
                this.shownChannelIds.splice(0, 0, e.id),
                this.shownChannelIds.length > es.MAX_RECENT_CHANNELS &&
                    (this.shownChannelIds = this.shownChannelIds.slice(0, es.MAX_RECENT_CHANNELS)),
                !0
            );
        }
        return !1;
    }
    constructor(e, t, n) {
        if (
            (super(e),
            B(this, "enabled", !1),
            (this.isCollapsed = h.Z.isCollapsed(e.id)),
            (this.enabled = eO() && Object.keys(t).length >= es.MIN_READABLE_CHANNELS),
            this.enabled)
        )
            for (let e of Object.values(t))
                (0, S.vc)(e.type) && !(0, S.Q5)(e.type) && (this.channels[e.id] = new eg(this, e, n));
    }
}
B(es, "MIN_READABLE_CHANNELS", 7), B(es, "MAX_RECENT_CHANNELS", 10), B(es, "MAX_TIMESTAMP_DELTA", 604800000);
class el extends er {
    updateAllChannels(e) {
        let t = !1;
        return (
            j.default.keys(this.channels).forEach((n) => {
                this.updateChannel(this.channels[n].record, e) && (t = !0);
            }),
            t
        );
    }
    updateChannel(e, t) {
        let n = super.updateChannel(e, t);
        if (this.guild.optInEnabled) {
            let n = this.channels[e.id];
            if (eI(this.guild, e, t) && null == n)
                return (this.channels[e.id] = new eh(this, e, t)), this.invalidate(), !0;
        }
        return n;
    }
    getFirstVoiceChannel(e) {
        return null;
    }
    getShownChannelIds() {
        if (null == this.shownChannelIds) {
            let e = o()(this.channels)
                    .values()
                    .filter((e) => 4 === e.renderLevel || 3 === e.renderLevel),
                t = e
                    .sortBy((e) => {
                        let { record: t } = e;
                        return t.position;
                    })
                    .take(5)
                    .value(),
                n = new Set([...e.filter((e) => 4 === e.renderLevel).value(), ...t]);
            this.shownChannelIds = o()([...n])
                .sortBy((e) => {
                    let { record: t } = e;
                    return t.position;
                })
                .map((e) => e.id)
                .value();
        }
        return this.shownChannelIds;
    }
    constructor(e, t, n) {
        if ((super(e), !e.optInEnabled || p.Z.isFullServerPreview(e.id))) return;
        (this.isCollapsed = !1),
            (this.isMuted = !1),
            (this.channels = o()(t)
                .map((e) => new eh(this, e, n))
                .keyBy((e) => e.id)
                .value());
    }
}
function ec(e, t) {
    if (e.record.type === G.d4z.GUILD_CATEGORY) return e.record.position;
    if (null != e.record.parent_id) {
        var n, r;
        return null != (r = null == (n = t[e.record.parent_id]) ? void 0 : n.position) ? r : -1;
    }
    return -1;
}
class eu extends er {
    invalidate() {
        super.invalidate(), (this.hiddenChannelIds = null);
    }
    getHiddenChannelIds() {
        if (!this.guild.optInEnabled) return [];
        if (null == this.hiddenChannelIds) {
            let e = o()(this.channels)
                .filter((e) => 3 === e.renderLevel)
                .value();
            if (e.every((e) => e.record.isCategory())) return (this.hiddenChannelIds = []), this.hiddenChannelIds;
            this.hiddenChannelIds = e.map((e) => e.id);
        }
        return this.hiddenChannelIds;
    }
    getRows() {
        if (!this.guild.optInEnabled) return [];
        let e = this.getShownChannelIds();
        return 0 === e.length && this.getHiddenChannelIds().length > 0 ? [W] : e;
    }
    getShownChannelIds() {
        if (!this.guild.optInEnabled) return [];
        if (null == this.shownChannelIds) {
            let t = o()(this.channels)
                .filter((e) => 4 === e.renderLevel)
                .orderBy(
                    [
                        (e) => ec(e, this.categoriesById),
                        (e) => (e.record.type === G.d4z.GUILD_CATEGORY ? -1 : e.record.position),
                    ],
                    ["asc", "asc"],
                )
                .value();
            this.shownChannelIds = [];
            for (let n = 0; n < t.length; n++) {
                var e;
                let r = t[n];
                (n < t.length - 1 &&
                    r.record.type === G.d4z.GUILD_CATEGORY &&
                    (null == (e = t[n + 1]) ? void 0 : e.record.type) === G.d4z.GUILD_CATEGORY) ||
                    ((n !== t.length - 1 || r.record.type !== G.d4z.GUILD_CATEGORY) && this.shownChannelIds.push(r.id));
            }
        }
        return this.shownChannelIds;
    }
    getFirstVoiceChannel(e) {
        return null;
    }
    constructor(e, t, n, r) {
        if (
            (super(e),
            B(this, "categoriesById", void 0),
            B(this, "hiddenChannelIds", void 0),
            (this.categoriesById = n),
            (this.hiddenChannelIds = null),
            !e.optInEnabled)
        )
            return;
        (this.isCollapsed = k.Z.isVoiceCategoryCollapsed(e.id)),
            (this.isMuted = !1),
            (this.categoriesById = n),
            (this.channels = o()(t)
                .map((e) => new eE(this, e, r))
                .keyBy((e) => e.id)
                .value());
    }
}
class ed {
    isEmpty() {
        return 0 === this.rows.length;
    }
    getRows() {
        return this.rows;
    }
    getRow(e) {
        return this.rows[e];
    }
    constructor(e) {
        B(this, "rows", void 0), (this.rows = e);
    }
}
class ef {
    isEmpty() {
        return 0 === this.guildActionRows.length;
    }
    getRows() {
        return this.guildActionRows;
    }
    getRow(e) {
        return this.guildActionRows[e];
    }
    constructor(e, t) {
        B(this, "guildActionRows", void 0),
            (this.guildActionRows = e.map(String)),
            t && this.guildActionRows.push(String(U.z.GUILD_DIRECTORY));
    }
}
class ep {
    get isMuted() {
        return this.category.guild.mutedChannelIds.has(this.id);
    }
    get isCollapsed() {
        return C.Z.isCollapsed(this.id);
    }
    get isFirstVoiceChannel() {
        return this.category.getFirstVoiceChannel() === this;
    }
    get lastMessageTimestamp() {
        return Math.max(P.ZP.lastMessageTimestamp(this.id), ...this.threadIds.map(P.ZP.lastMessageTimestamp));
    }
    updateChannel(e, t) {
        let n = !1;
        null != e && e !== this.record && ((this.record = e), (n = !0));
        let r = this.computeState(t);
        return (
            (r.renderLevel === this.renderLevel && o().isEqual(r.threadIds, this.threadIds)) ||
                ((this.renderLevel = r.renderLevel),
                (this.threadIds = r.threadIds),
                (this.threadCount = o().size(r.threadIds)),
                (n = !0)),
            4 === this.renderLevel && this.updateSubtitle() && (n = !0),
            n
        );
    }
    updateSubtitle() {
        let e = this.computeSubtitle();
        return !o().isEqual(this.subtitle, e) && ((this.subtitle = e), !0);
    }
    computeSubtitle() {
        return eb(this.record, this.isCollapsed || this.category.isCollapsed, this.category.guild.optInEnabled);
    }
    constructor(e, t, n) {
        B(this, "category", void 0),
            B(this, "record", void 0),
            B(this, "id", void 0),
            B(this, "position", void 0),
            B(this, "threadIds", void 0),
            B(this, "threadCount", void 0),
            B(this, "subtitle", void 0),
            B(this, "renderLevel", void 0),
            (this.category = e),
            (this.record = t),
            (this.position = -1),
            (this.threadIds = []),
            (this.threadCount = 0),
            (this.subtitle = null),
            (this.renderLevel = 1),
            (this.id = t.id);
        let { renderLevel: r, threadIds: i } = this.computeState(n);
        (this.renderLevel = r),
            (this.threadCount = o().size(i)),
            (this.threadIds = i),
            4 === r && (this.subtitle = this.computeSubtitle());
    }
}
class e_ extends ep {
    computeState(e) {
        var t;
        let {
            selectedChannel: n,
            selectedVoiceChannelId: r,
            activeJoinedRelevantThreads: i,
            activeJoinedUnreadThreads: a,
        } = e;
        if (!N.Z.can(F.Pl.VIEW_CHANNEL, this.record)) {
            if (this.id === r)
                return {
                    renderLevel: 4,
                    threadIds: [],
                };
            else if (!u.Z.isChannelGatedAndVisible(this.record.guild_id, this.record.id))
                return {
                    renderLevel: 1,
                    threadIds: [],
                };
        }
        let s = this.record.parent_id,
            l = this.category.guild;
        if (ev(l, this.record))
            return {
                renderLevel: 1,
                threadIds: [],
            };
        let c = (null == n ? void 0 : n.id) === this.id || r === this.id,
            d = null != n && n.isThread() && n.parent_id === this.id,
            f =
                null != (t = c || d || (!this.category.isCollapsed && !this.isMuted) ? i[this.id] : a[this.id])
                    ? t
                    : {},
            p = ey(this.record, f, n, r, l.hideMutedChannels);
        return this.id !== l.moderatorReportChannelId || l.moderatorReportChannelEnabled
            ? l.optInEnabled && l.hideResourceChannels && this.record.hasFlag(Z.zZ.IS_GUILD_RESOURCE_CHANNEL)
                ? {
                      renderLevel: c ? 4 : 1,
                      threadIds: p,
                  }
                : !l.optInEnabled || l.optedInChannels.has(this.id) || (null != s && l.optedInChannels.has(s))
                  ? c || d || !o().isEmpty(p) || P.ZP.getMentionCount(this.id) > 0
                      ? {
                            renderLevel: 4,
                            threadIds: p,
                        }
                      : l.hideMutedChannels && l.mutedChannelIds.has(this.id)
                        ? {
                              renderLevel: 2,
                              threadIds: p,
                          }
                        : this.category.isCollapsed &&
                            (l.mutedChannelIds.has(this.id) ||
                                (null != s && l.mutedChannelIds.has(s)) ||
                                this.record.isGuildVocal() ||
                                this.record.type === G.d4z.GUILD_STORE ||
                                ((0, S.vc)(this.record.type) && !P.ZP.hasUnread(this.record.id)))
                          ? {
                                renderLevel: 3,
                                threadIds: p,
                            }
                          : {
                                renderLevel: 4,
                                threadIds: p,
                            }
                  : {
                        renderLevel: 2,
                        threadIds: p,
                    }
            : {
                  renderLevel: 2,
                  threadIds: p,
              };
    }
}
class em extends ep {
    computeState(e) {
        var t;
        let { selectedChannel: n, selectedVoiceChannelId: r, activeJoinedRelevantThreads: i } = e;
        return N.Z.can(F.Pl.VIEW_CHANNEL, this.record)
            ? {
                  renderLevel: 4,
                  threadIds: ey(this.record, null != (t = i[this.id]) ? t : {}, n, r, !1),
              }
            : {
                  renderLevel: 1,
                  threadIds: [],
              };
    }
}
class eh extends ep {
    computeState(e) {
        var t;
        let { selectedChannel: n, selectedVoiceChannelId: r, activeJoinedRelevantThreads: i } = e;
        return N.Z.can(F.Pl.VIEW_CHANNEL, this.record)
            ? eI(this.category.guild, this.record, e)
                ? {
                      renderLevel: eS(this, e) ? 4 : 3,
                      threadIds: ey(this.record, null != (t = i[this.id]) ? t : {}, n, r, !1),
                  }
                : {
                      renderLevel: 2,
                      threadIds: [],
                  }
            : {
                  renderLevel: 1,
                  threadIds: [],
              };
    }
}
class eg extends e_ {
    computeState(e) {
        let { renderLevel: t, threadIds: n } = super.computeState(e);
        if (t > 1) {
            let r = this.record.parent_id,
                i = this.category.guild;
            i.mutedChannelIds.has(this.id) || (null != r && i.mutedChannelIds.has(r))
                ? (t = 2)
                : 4 === t
                  ? (t = 3)
                  : 2 === t && eI(this.category.guild, this.record, e) && (t = 3),
                3 === t && eS(this, e) && (t = 4),
                (n = o().sortBy(n, (e) => -P.ZP.lastMessageTimestamp(e)));
        }
        return {
            renderLevel: t,
            threadIds: n,
        };
    }
}
class eE extends e_ {
    getRenderLevel(e) {
        let t = this.category.guild;
        return !N.Z.can(F.Pl.VIEW_CHANNEL, this.record) || 4 === e || 3 === e || ev(t, this.record)
            ? 1
            : this.category.isCollapsed
              ? o().some(D.Z.getVoiceStatesForChannel(this.record.id))
                  ? 4
                  : 3
              : 4;
    }
    computeState(e) {
        let t = super.computeState(e),
            n = this.getRenderLevel(t.renderLevel);
        return (
            4 === n &&
                (this.subtitle = eb(
                    this.record,
                    this.isCollapsed || this.category.isCollapsed,
                    this.category.guild.optInEnabled,
                )),
            {
                threadIds: [],
                renderLevel: n,
            }
        );
    }
}
function eb(e, t, n) {
    switch (e.type) {
        case G.d4z.GUILD_VOICE: {
            let r = f.ZP.getActiveEventByChannel(e.id);
            if (null != r)
                return {
                    type: "event",
                    name: r.name,
                };
            let i = x.ZP.getVoiceStatesForChannel(e);
            if (n && t && (0, M.a)(i)) return { type: "go-live" };
            let a = c.Z.getChannelStatus(e);
            if (null != a && a.length > 0)
                return {
                    type: "voice",
                    text: a,
                };
            let o = s.ZP.getEmbeddedActivitiesForChannel(e.id)
                .map((e) => {
                    var t;
                    return null == (t = l.Z.getApplication(e.applicationId)) ? void 0 : t.name;
                })
                .filter(L.lm);
            if (o.length > 0)
                return {
                    type: "embedded-activities",
                    name: o.join(", "),
                };
            return null;
        }
        case G.d4z.GUILD_STAGE_VOICE: {
            let t = f.ZP.getActiveEventByChannel(e.id);
            if (null != t)
                return {
                    type: "event",
                    name: t.name,
                };
            return null;
        }
        default:
            return null;
    }
}
function ey(e, t, n, r, i) {
    let a = null != n && (n.id === e.id || r === e.id),
        s = null != n && n.isThread() && n.parent_id === e.id;
    if (S.uC.has(e.type)) {
        let e = o()
            .sortBy(Object.values(t), (e) => -e.joinTimestamp)
            .map((e) => e.channel.id);
        return a
            ? e
            : s
              ? (n.id in t || e.unshift(n.id), e)
              : i
                ? e.filter((e) => !v.Z.isMuted(e) || P.ZP.getMentionCount(e) > 0)
                : e;
    }
    return [];
}
function eO() {
    return !1;
}
function ev(e, t) {
    return e.favoriteChannelIds.has(t.id) && (e.optInEnabled || eO());
}
function eS(e, t) {
    let { selectedChannel: n, activeJoinedRelevantThreads: r } = t;
    if (P.ZP.getMentionCount(e.id) > 0) return !0;
    for (let t in r[e.id]) if (P.ZP.getMentionCount(t) > 0) return !0;
    if (null != n && (n.id === e.id || (n.isThread() && n.parent_id === e.id))) return !eO();
    let i = E.Z.getNewChannelIds(e.category.guild.id);
    if (i.size > K);
    else if (i.has(e.id)) return !0;
    return !1;
}
function eI(e, t, n) {
    let { selectedChannel: r, activeJoinedRelevantThreads: i } = n;
    if (
        t.type === G.d4z.GUILD_DIRECTORY ||
        !e.optInEnabled ||
        e.optedInChannels.has(t.id) ||
        t.isThread() ||
        (null != t.parent_id && e.optedInChannels.has(t.parent_id)) ||
        (e.hideResourceChannels && t.hasFlag(Z.zZ.IS_GUILD_RESOURCE_CHANNEL))
    )
        return !1;
    if (t.isGuildVocal()) {
        let n = k.Z.isVoiceCategoryCollapsed(e.id);
        if (!n) return !1;
        let r = o().some(D.Z.getVoiceStatesForChannel(t.id));
        if (n && r) return !1;
    }
    if ((null != r && (r.id === t.id || (r.isThread() && r.parent_id === t.id))) || P.ZP.getMentionCount(t.id) > 0)
        return !0;
    for (let e in i[t.id])
        if (P.ZP.getMentionCount(e) > 0 || P.ZP.hasUnread(e) || P.ZP.hasRecentlyVisitedAndRead(e)) return !0;
    if (e.mutedChannelIds.has(t.id) || (null != t.parent_id && e.mutedChannelIds.has(t.parent_id))) return !1;
    let a = E.Z.getNewChannelIds(e.id),
        s = Array.from(a).sort((e, t) => j.default.compare(t, e));
    return !!((a.has(t.id) && s.indexOf(t.id) < K) || P.ZP.hasRecentlyVisitedAndRead(t.id));
}
let eT = new Set(Object.values(U.z));
function eC(e) {
    if (null == e) return null;
    if (eT.has(e)) return e;
    let t = T.Z.getChannel(e);
    return (null == t ? void 0 : t.isDirectory()) ? U.z.GUILD_DIRECTORY : null;
}
