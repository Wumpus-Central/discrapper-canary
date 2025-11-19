n.d(t, {
    Bz: () => ey,
    Cb: () => z,
    Fq: () => q,
    PB: () => J,
    VR: () => es,
    ZP: () => en,
    p2: () => Q,
    wF: () => ee,
    wZ: () => X,
    wd: () => $,
    zR: () => eO,
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
    _ = n(160404),
    p = n(798423),
    h = n(18036),
    m = n(798379),
    g = n(398758),
    E = n(22082),
    b = n(893908),
    y = n(953252),
    O = n(601070),
    v = n(569471),
    I = n(131704),
    T = n(680089),
    S = n(592125),
    A = n(58468),
    C = n(430824),
    N = n(496675),
    R = n(306680),
    P = n(944486),
    D = n(9156),
    w = n(979651),
    L = n(938475),
    x = n(823379),
    M = n(709054),
    k = n(968358),
    j = n(203818),
    U = n(295454),
    G = n(443063),
    B = n(981631),
    Z = n(176505),
    F = n(231338);
function V(e, t, n) {
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
function H(e) {
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
                V(e, t, n[t]);
            });
    }
    return e;
}
function Y(e, t) {
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
function W(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : Y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let K = "placeholder-channel-id",
    z = 2,
    q = 0,
    X = 1,
    Q = 2,
    J = 3,
    $ = 4,
    ee = 5,
    et = new Set([String(G.z.GUILD_DIRECTORY)]);
class en {
    _areGuildActionRowsUpdated(e, t) {
        var n;
        return !o().isEqual(
            null == (n = this.guilds[e])
                ? void 0
                : n
                      .getGuildActionSection()
                      .getRows()
                      .filter((e) => !et.has(e)),
            t,
        );
    }
    _areChannelNoticeRowsUpdated(e, t) {
        var n;
        return !o().isEqual(null == (n = this.guilds[e]) ? void 0 : n.getChannelNoticeSection().getRows(), t);
    }
    _areGuildVocalChannelsInRecentsInNeedOfAppearingInActiveNow(e) {
        let t = this.guilds[e];
        if (null == t || !(0, U.K)("recents_channels_active_now_check")) return !1;
        let n = t.getCategoryFromSection(t.voiceChannelsSectionNumber),
            r = t.getCategoryFromSection(t.recentsSectionNumber);
        for (let e in r.channels) {
            let t = r.channels[e];
            if (
                2 === t.renderLevel &&
                t.record.isGuildVocal() &&
                null == n.channels[t.id] &&
                o().some(w.Z.getVoiceStatesForChannel(t.id)) &&
                R.ZP.getMentionCount(t.id) > 0
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
                (this.guilds[e] = new er(e, t, n)),
            this.guilds[e]
        );
    }
    getGuildChannelRowsOnly(e) {
        return e in this.guilds || (this.guilds[e] = new er(e, [], [])), this.guilds[e];
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
        let t = S.Z.getBasicChannel(e);
        return (
            null != t &&
            null != t.guild_id &&
            null != this.guilds[t.guild_id] &&
            (t instanceof I.Sf || null != (t = S.Z.getChannel(e))) &&
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
        V(this, "guilds", {});
    }
}
class er {
    get initializationData() {
        return {
            selectedChannel: S.Z.getChannel(P.Z.getChannelId()),
            selectedVoiceChannelId: P.Z.getVoiceChannelId(),
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
            case q:
                throw Error("Invalid section. Use getChannelNoticeSection instead");
            case X:
                throw Error("Invalid section. Use getGuildActionSection instead");
            case Q:
                return this.favoritesCategory;
            case $:
                return this.noParentCategory;
            case this.recentsSectionNumber:
                return this.recentsCategory;
            case this.voiceChannelsSectionNumber:
                return this.voiceChannelsCategory;
            default:
                return this.getSortedNamedCategories()[e - ee];
        }
    }
    getNamedCategoryFromSection(e) {
        return (
            (e -= ee),
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
        return i()(e > X, "Invalid section"), e !== this.recentsSectionNumber && this.getRows()[e][t] === K;
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
                    section: X,
                },
            ];
        let n = [],
            r = S.Z.getChannel(e);
        if (null == r || null == e) return n;
        let i = r.isThread();
        if ((i && (r = S.Z.getChannel(r.parent_id)), null == r)) return n;
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
            r.type === B.d4z.GUILD_CATEGORY)
        )
            return [
                {
                    section:
                        o().findIndex(this.getSortedNamedCategories(), (e) => e.id === (null == r ? void 0 : r.id)) +
                        ee,
                },
            ];
        let l = this.getCategory(r),
            c = l instanceof ea ? $ : this.getSortedNamedCategories().indexOf(l) + ee,
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
            let n = S.Z.getChannel(e);
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
                        let n = S.Z.getChannel(t);
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
        V(this, "id", void 0),
            V(this, "hideMutedChannels", void 0),
            V(this, "favoritesSectionNumber", void 0),
            V(this, "recentsSectionNumber", void 0),
            V(this, "voiceChannelsSectionNumber", void 0),
            V(this, "mutedChannelIds", void 0),
            V(this, "optedInChannels", void 0),
            V(this, "optInEnabled", void 0),
            V(this, "hideResourceChannels", void 0),
            V(this, "favoriteChannelIds", void 0),
            V(this, "suggestedFavoriteChannelId", void 0),
            V(this, "collapsedCategoryIds", void 0),
            V(this, "moderatorReportChannelId", void 0),
            V(this, "moderatorReportChannelEnabled", void 0),
            V(this, "categories", void 0),
            V(this, "noParentCategory", void 0),
            V(this, "favoritesCategory", void 0),
            V(this, "recentsCategory", void 0),
            V(this, "voiceChannelsCategory", void 0),
            V(this, "guildActionSection", void 0),
            V(this, "channelNoticeSection", void 0),
            V(this, "sortedNamedCategories", void 0),
            V(this, "sections", void 0),
            V(this, "rows", void 0),
            V(this, "firstVoiceChannel", void 0),
            V(this, "allChannelsById", void 0),
            V(this, "version", void 0),
            (this.id = e),
            (this.sortedNamedCategories = null),
            (this.sections = null),
            (this.rows = null),
            (this.firstVoiceChannel = void 0),
            (this.allChannelsById = null),
            (this.version = 0),
            (this.hideMutedChannels = D.ZP.isGuildCollapsed(this.id)),
            (this.mutedChannelIds = D.ZP.getMutedChannels(this.id)),
            (this.optedInChannels =
                null != (r = D.ZP.getOptedInChannelsWithPendingUpdates(this.id))
                    ? r
                    : D.ZP.getOptedInChannels(this.id)),
            (this.optInEnabled = (0, g.r1)(this.id)),
            (this.hideResourceChannels = (0, d.s)(this.id)),
            (this.favoriteChannelIds = new Set(null != (a = D.ZP.getGuildFavorites(this.id)) ? a : [])),
            (this.suggestedFavoriteChannelId = h.Z.getSuggestedChannelId(this.id)),
            (this.collapsedCategoryIds = T.Z.getCollapsedCategories());
        let s = S.Z.getMutableGuildChannelsForGuild(this.id),
            l = C.Z.getGuild(this.id);
        (this.moderatorReportChannelId = null != l ? (0, b.Z)(l) : null),
            (this.moderatorReportChannelEnabled = null != l && (0, y.Z)(l));
        let c = {},
            u = [],
            f = {};
        for (let e in s) {
            let t = s[e];
            t.type === B.d4z.GUILD_CATEGORY && ((c[t.id] = t), (f[t.id] = []));
        }
        let _ = [],
            m = [],
            E = [],
            O = this.initializationData;
        for (let e in s) {
            let t = s[e];
            if (t.type !== B.d4z.GUILD_CATEGORY) {
                if (t.type === B.d4z.GUILD_DIRECTORY) {
                    null == l || l.features.has(B.GuildFeatures.HUB) || E.push(t);
                    continue;
                }
                eS(this, t, O)
                    ? _.push(t)
                    : (t.type === B.d4z.GUILD_VOICE || t.type === B.d4z.GUILD_STAGE_VOICE) &&
                      (null != t.parent_id && null != c[t.parent_id] && m.push(c[t.parent_id]), m.push(t)),
                    null != t.parent_id && t.parent_id in f ? f[t.parent_id].push(t) : u.push(t);
            }
        }
        for (let e in ((this.categories = {}), f)) this.categories[e] = new eo(this, c[e], f[e], O);
        (this.recentsSectionNumber = J),
            (this.favoritesSectionNumber = Q),
            (this.noParentCategory = new ea(this, u, O)),
            (this.favoritesCategory = new es(this, O)),
            (this.recentsCategory = (0, p.Q)() ? new el(this, s, O) : new ec(this, _, O)),
            (this.voiceChannelsCategory = new ed(this, m, c, O)),
            (this.guildActionSection = new e_(t, E.length > 0)),
            (this.channelNoticeSection = new ef(n)),
            i()(!("null" in this.categories), "somehow a null got into categories"),
            (this.voiceChannelsSectionNumber = ee + o().size(this.categories));
    }
}
class ei {
    updateChannel(e, t) {
        return !!(e.id in this.channels && this.channels[e.id].updateChannel(e, t)) && (this.invalidate(), !0);
    }
    invalidate() {
        this.shownChannelIds = null;
    }
    getRows() {
        let e = this.getShownChannelIds();
        return 0 === e.length && this.shouldShowEmptyCategory() ? [K] : e;
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
        V(this, "guild", void 0),
            V(this, "isMuted", void 0),
            V(this, "isCollapsed", void 0),
            V(this, "position", void 0),
            V(this, "channels", void 0),
            V(this, "shownChannelIds", void 0),
            (this.guild = e),
            (this.isMuted = !1),
            (this.isCollapsed = !1),
            (this.position = -1),
            (this.channels = {}),
            (this.shownChannelIds = null);
    }
}
class ea extends ei {
    constructor(e, t, n) {
        super(e),
            (this.channels = o()(t)
                .map((e) => new eh(this, e, n))
                .keyBy((e) => e.id)
                .value());
    }
}
class eo extends ei {
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
        V(this, "id", void 0),
        V(this, "record", void 0),
        (this.record = t),
        (this.id = t.id),
        (this.isCollapsed = !0 === e.collapsedCategoryIds[t.id]),
        (this.isMuted = e.mutedChannelIds.has(t.id)),
        (this.channels = {}),
        n))
            this.channels[i.id] = new eh(this, i, r);
    }
}
class es extends ei {
    updateChannel(e, t) {
        let n = e.id in this.channels && D.ZP.isFavorite(e.guild_id, e.id),
            r = h.Z.getSuggestedChannelId(e.guild_id);
        return (e.id !== r ||
            n ||
            (t = W(H({}, t), {
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
        if ((super(e), !e.optInEnabled && !ev())) return;
        this.channels = o()(null != (n = D.ZP.getGuildFavorites(e.id)) ? n : [])
            .map((e) => S.Z.getChannel(e))
            .filter(x.lm)
            .map((e) => new em(this, e, t))
            .keyBy((e) => e.id)
            .value();
        let r = h.Z.getSuggestedChannelId(e.id),
            i = S.Z.getChannel(r);
        null != i &&
            null != r &&
            (this.channels[r] = new em(
                this,
                i,
                W(H({}, t), {
                    activeJoinedRelevantThreads: {},
                    activeJoinedUnreadThreads: {},
                }),
            ));
    }
}
class el extends ei {
    shouldShowEmptyCategory() {
        return this.enabled && this.isCollapsed && super.shouldShowEmptyCategory();
    }
    updateAllChannels(e) {
        return Object.values(this.channels).reduce((t, n) => this.updateChannel(n.record, e) || t, !1);
    }
    updateChannel(e, t) {
        if (!this.enabled) return !1;
        if ((0, I.Q5)(e.type)) {
            let t = this.channels[e.parent_id];
            return null != t && this.updateShownChannelIds(t);
        }
        if (!(0, I.vc)(e.type)) return !1;
        let n = super.updateChannel(e, t),
            r = this.channels[e.id];
        return null == r
            ? ((r = new eE(this, e, t)), (this.channels[e.id] = r), this.invalidate(), !0)
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
                          return 4 === n || (t > 0 && Date.now() - t < el.MAX_TIMESTAMP_DELTA);
                      })
                      .sortBy((e) => {
                          let [, t, n] = e;
                          return -(t - (4 === n ? 0 : M.DISCORD_EPOCH));
                      })
                      .take(el.MAX_RECENT_CHANNELS)
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
                this.shownChannelIds.length > el.MAX_RECENT_CHANNELS &&
                    (this.shownChannelIds = this.shownChannelIds.slice(0, el.MAX_RECENT_CHANNELS)),
                !0
            );
        }
        return !1;
    }
    constructor(e, t, n) {
        if (
            (super(e),
            V(this, "enabled", !1),
            (this.isCollapsed = m.Z.isCollapsed(e.id)),
            (this.enabled = ev() && Object.keys(t).length >= el.MIN_READABLE_CHANNELS),
            this.enabled)
        )
            for (let e of Object.values(t))
                (0, I.vc)(e.type) && !(0, I.Q5)(e.type) && (this.channels[e.id] = new eE(this, e, n));
    }
}
V(el, "MIN_READABLE_CHANNELS", 7), V(el, "MAX_RECENT_CHANNELS", 10), V(el, "MAX_TIMESTAMP_DELTA", 604800000);
class ec extends ei {
    updateAllChannels(e) {
        let t = !1;
        return (
            M.default.keys(this.channels).forEach((n) => {
                this.updateChannel(this.channels[n].record, e) && (t = !0);
            }),
            t
        );
    }
    updateChannel(e, t) {
        let n = super.updateChannel(e, t);
        if (this.guild.optInEnabled) {
            let n = this.channels[e.id];
            if (eS(this.guild, e, t) && null == n)
                return (this.channels[e.id] = new eg(this, e, t)), this.invalidate(), !0;
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
        if ((super(e), !e.optInEnabled || _.Z.isFullServerPreview(e.id))) return;
        (this.isCollapsed = !1),
            (this.isMuted = !1),
            (this.channels = o()(t)
                .map((e) => new eg(this, e, n))
                .keyBy((e) => e.id)
                .value());
    }
}
function eu(e, t) {
    if (e.record.type === B.d4z.GUILD_CATEGORY) return e.record.position;
    if (null != e.record.parent_id) {
        var n, r;
        return null != (r = null == (n = t[e.record.parent_id]) ? void 0 : n.position) ? r : -1;
    }
    return -1;
}
class ed extends ei {
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
        return 0 === e.length && this.getHiddenChannelIds().length > 0 ? [K] : e;
    }
    getShownChannelIds() {
        if (!this.guild.optInEnabled) return [];
        if (null == this.shownChannelIds) {
            let t = o()(this.channels)
                .filter((e) => 4 === e.renderLevel)
                .orderBy(
                    [
                        (e) => eu(e, this.categoriesById),
                        (e) => (e.record.type === B.d4z.GUILD_CATEGORY ? -1 : e.record.position),
                    ],
                    ["asc", "asc"],
                )
                .value();
            this.shownChannelIds = [];
            for (let n = 0; n < t.length; n++) {
                var e;
                let r = t[n];
                (n < t.length - 1 &&
                    r.record.type === B.d4z.GUILD_CATEGORY &&
                    (null == (e = t[n + 1]) ? void 0 : e.record.type) === B.d4z.GUILD_CATEGORY) ||
                    ((n !== t.length - 1 || r.record.type !== B.d4z.GUILD_CATEGORY) && this.shownChannelIds.push(r.id));
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
            V(this, "categoriesById", void 0),
            V(this, "hiddenChannelIds", void 0),
            (this.categoriesById = n),
            (this.hiddenChannelIds = null),
            !e.optInEnabled)
        )
            return;
        (this.isCollapsed = j.Z.isVoiceCategoryCollapsed(e.id)),
            (this.isMuted = !1),
            (this.categoriesById = n),
            (this.channels = o()(t)
                .map((e) => new eb(this, e, r))
                .keyBy((e) => e.id)
                .value());
    }
}
class ef {
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
        V(this, "rows", void 0), (this.rows = e);
    }
}
class e_ {
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
        V(this, "guildActionRows", void 0),
            (this.guildActionRows = e.map(String)),
            t && this.guildActionRows.push(String(G.z.GUILD_DIRECTORY));
    }
}
class ep {
    get isMuted() {
        return this.category.guild.mutedChannelIds.has(this.id);
    }
    get isCollapsed() {
        return A.Z.isCollapsed(this.id);
    }
    get isFirstVoiceChannel() {
        return this.category.getFirstVoiceChannel() === this;
    }
    get lastMessageTimestamp() {
        return Math.max(R.ZP.lastMessageTimestamp(this.id), ...this.threadIds.map(R.ZP.lastMessageTimestamp));
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
        return ey(this.record, this.isCollapsed || this.category.isCollapsed, this.category.guild.optInEnabled);
    }
    constructor(e, t, n) {
        V(this, "category", void 0),
            V(this, "record", void 0),
            V(this, "id", void 0),
            V(this, "position", void 0),
            V(this, "threadIds", void 0),
            V(this, "threadCount", void 0),
            V(this, "subtitle", void 0),
            V(this, "renderLevel", void 0),
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
class eh extends ep {
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
        if (eI(l, this.record))
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
            _ = eO(this.record, f, n, r, l.hideMutedChannels);
        return this.id !== l.moderatorReportChannelId || l.moderatorReportChannelEnabled
            ? l.optInEnabled && l.hideResourceChannels && this.record.hasFlag(Z.zZ.IS_GUILD_RESOURCE_CHANNEL)
                ? {
                      renderLevel: c ? 4 : 1,
                      threadIds: _,
                  }
                : !l.optInEnabled || l.optedInChannels.has(this.id) || (null != s && l.optedInChannels.has(s))
                  ? c || d || !o().isEmpty(_) || R.ZP.getMentionCount(this.id) > 0
                      ? {
                            renderLevel: 4,
                            threadIds: _,
                        }
                      : l.hideMutedChannels && l.mutedChannelIds.has(this.id)
                        ? {
                              renderLevel: 2,
                              threadIds: _,
                          }
                        : this.category.isCollapsed &&
                            (l.mutedChannelIds.has(this.id) ||
                                (null != s && l.mutedChannelIds.has(s)) ||
                                this.record.isGuildVocal() ||
                                this.record.type === B.d4z.GUILD_STORE ||
                                ((0, I.vc)(this.record.type) && !R.ZP.hasUnread(this.record.id)))
                          ? {
                                renderLevel: 3,
                                threadIds: _,
                            }
                          : {
                                renderLevel: 4,
                                threadIds: _,
                            }
                  : {
                        renderLevel: 2,
                        threadIds: _,
                    }
            : {
                  renderLevel: 2,
                  threadIds: _,
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
                  threadIds: eO(this.record, null != (t = i[this.id]) ? t : {}, n, r, !1),
              }
            : {
                  renderLevel: 1,
                  threadIds: [],
              };
    }
}
class eg extends ep {
    computeState(e) {
        var t;
        let { selectedChannel: n, selectedVoiceChannelId: r, activeJoinedRelevantThreads: i } = e;
        return N.Z.can(F.Pl.VIEW_CHANNEL, this.record)
            ? eS(this.category.guild, this.record, e)
                ? {
                      renderLevel: eT(this, e) ? 4 : 3,
                      threadIds: eO(this.record, null != (t = i[this.id]) ? t : {}, n, r, !1),
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
class eE extends eh {
    computeState(e) {
        let { renderLevel: t, threadIds: n } = super.computeState(e);
        if (t > 1) {
            let r = this.record.parent_id,
                i = this.category.guild;
            i.mutedChannelIds.has(this.id) || (null != r && i.mutedChannelIds.has(r))
                ? (t = 2)
                : 4 === t
                  ? (t = 3)
                  : 2 === t && eS(this.category.guild, this.record, e) && (t = 3),
                3 === t && eT(this, e) && (t = 4),
                (n = o().sortBy(n, (e) => -R.ZP.lastMessageTimestamp(e)));
        }
        return {
            renderLevel: t,
            threadIds: n,
        };
    }
}
class eb extends eh {
    getRenderLevel(e) {
        let t = this.category.guild;
        return !N.Z.can(F.Pl.VIEW_CHANNEL, this.record) || 4 === e || 3 === e || eI(t, this.record)
            ? 1
            : this.category.isCollapsed
              ? o().some(w.Z.getVoiceStatesForChannel(this.record.id))
                  ? 4
                  : 3
              : 4;
    }
    computeState(e) {
        let t = super.computeState(e),
            n = this.getRenderLevel(t.renderLevel);
        return (
            4 === n &&
                (this.subtitle = ey(
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
function ey(e, t, n) {
    switch (e.type) {
        case B.d4z.GUILD_VOICE: {
            let r = f.ZP.getActiveEventByChannel(e.id);
            if (null != r)
                return {
                    type: "event",
                    name: r.name,
                };
            let i = L.ZP.getVoiceStatesForChannel(e);
            if (n && t && (0, k.a)(i)) return { type: "go-live" };
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
                .filter(x.lm);
            if (o.length > 0)
                return {
                    type: "embedded-activities",
                    name: o.join(", "),
                };
            return null;
        }
        case B.d4z.GUILD_STAGE_VOICE: {
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
function eO(e, t, n, r, i) {
    let a = null != n && (n.id === e.id || r === e.id),
        s = null != n && n.isThread() && n.parent_id === e.id;
    if (I.uC.has(e.type)) {
        let e = o()
            .sortBy(Object.values(t), (e) => -e.joinTimestamp)
            .map((e) => e.channel.id);
        return a
            ? e
            : s
              ? (n.id in t || e.unshift(n.id), e)
              : i
                ? e.filter((e) => !v.Z.isMuted(e) || R.ZP.getMentionCount(e) > 0)
                : e;
    }
    return [];
}
function ev() {
    return !1;
}
function eI(e, t) {
    return e.favoriteChannelIds.has(t.id) && (e.optInEnabled || ev());
}
function eT(e, t) {
    let { selectedChannel: n, activeJoinedRelevantThreads: r } = t;
    if (R.ZP.getMentionCount(e.id) > 0) return !0;
    for (let t in r[e.id]) if (R.ZP.getMentionCount(t) > 0) return !0;
    if (null != n && (n.id === e.id || (n.isThread() && n.parent_id === e.id))) return !ev();
    let i = E.Z.getNewChannelIds(e.category.guild.id);
    if (i.size > z);
    else if (i.has(e.id)) return !0;
    return !1;
}
function eS(e, t, n) {
    let { selectedChannel: r, activeJoinedRelevantThreads: i } = n;
    if (
        t.type === B.d4z.GUILD_DIRECTORY ||
        !e.optInEnabled ||
        e.optedInChannels.has(t.id) ||
        t.isThread() ||
        (null != t.parent_id && e.optedInChannels.has(t.parent_id)) ||
        (e.hideResourceChannels && t.hasFlag(Z.zZ.IS_GUILD_RESOURCE_CHANNEL))
    )
        return !1;
    if (t.isGuildVocal()) {
        if (!(0, U.K)("should_show_in_recents")) return !1;
        let n = j.Z.isVoiceCategoryCollapsed(e.id);
        if (!n) return !1;
        let r = o().some(w.Z.getVoiceStatesForChannel(t.id));
        if (n && r) return !1;
    }
    if ((null != r && (r.id === t.id || (r.isThread() && r.parent_id === t.id))) || R.ZP.getMentionCount(t.id) > 0)
        return !0;
    for (let e in i[t.id])
        if (R.ZP.getMentionCount(e) > 0 || R.ZP.hasUnread(e) || R.ZP.hasRecentlyVisitedAndRead(e)) return !0;
    if (e.mutedChannelIds.has(t.id) || (null != t.parent_id && e.mutedChannelIds.has(t.parent_id))) return !1;
    let a = E.Z.getNewChannelIds(e.id),
        s = Array.from(a).sort((e, t) => M.default.compare(t, e));
    return !!((a.has(t.id) && s.indexOf(t.id) < z) || R.ZP.hasRecentlyVisitedAndRead(t.id));
}
let eA = new Set(Object.values(G.z));
function eC(e) {
    if (null == e) return null;
    if (eA.has(e)) return e;
    let t = S.Z.getChannel(e);
    return (null == t ? void 0 : t.isDirectory()) ? G.z.GUILD_DIRECTORY : null;
}
