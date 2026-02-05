"use strict";
n.d(t, {
    Ay: () => X,
    HP: () => z,
    PU: () => Y,
    TF: () => $,
    Xt: () => k,
    bK: () => K,
    go: () => eu,
    rR: () => W,
    wF: () => eg,
    xu: () => en,
    yO: () => q,
}),
    n(321073),
    n(667532);
var s = n(284009),
    i = n.n(s),
    r = n(735438),
    l = n.n(r),
    a = n(933958),
    o = n(587895),
    d = n(309698),
    h = n(717125),
    c = n(473529),
    u = n(698441),
    g = n(164956),
    p = n(99712),
    C = n(240935),
    f = n(50827),
    S = n(395504),
    A = n(454058),
    m = n(272720),
    E = n(56595),
    I = n(863005),
    v = n(152007),
    y = n(95701),
    _ = n(924985),
    b = n(734057),
    N = n(945886),
    x = n(71393),
    R = n(576705),
    w = n(222823),
    O = n(309010),
    T = n(543465),
    L = n(977997),
    D = n(607567),
    U = n(403362),
    j = n(661191),
    G = n(669715),
    P = n(551851),
    F = n(281405),
    M = n(652215),
    B = n(746080),
    V = n(818348);
let H = "placeholder-channel-id",
    W = 2,
    k = 0,
    Y = 1,
    z = 2,
    q = 3,
    K = 4,
    $ = 5,
    J = new Set([String(F.n.GUILD_DIRECTORY)]);
class X {
    guilds = {};
    _areGuildActionRowsUpdated(e, t) {
        return !l().isEqual(
            this.guilds[e]
                ?.getGuildActionSection()
                .getRows()
                .filter((e) => !J.has(e)),
            t,
        );
    }
    _areChannelNoticeRowsUpdated(e, t) {
        return !l().isEqual(this.guilds[e]?.getChannelNoticeSection().getRows(), t);
    }
    _areGuildVocalChannelsInRecentsInNeedOfAppearingInActiveNow(e) {
        let t = this.guilds[e];
        if (null == t) return !1;
        let n = t.getCategoryFromSection(t.voiceChannelsSectionNumber),
            s = t.getCategoryFromSection(t.recentsSectionNumber);
        for (let e in s.channels) {
            let t = s.channels[e];
            if (
                2 === t.renderLevel &&
                t.record.isGuildVocal() &&
                null == n.channels[t.id] &&
                l().some(L.A.getVoiceStatesForChannel(t.id)) &&
                w.Ay.getMentionCount(t.id) > 0
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
                (this.guilds[e] = new Q(e, t, n)),
            this.guilds[e]
        );
    }
    getGuildChannelRowsOnly(e) {
        return e in this.guilds || (this.guilds[e] = new Q(e, [], [])), this.guilds[e];
    }
    clear() {
        this.guilds = {};
    }
    clearGuildId(e) {
        return null != e && e in this.guilds && (delete this.guilds[e], !0);
    }
    updateRecentsCategory(e) {
        return null != e && e in this.guilds && (this.guilds[e]?.updateRecentsCategory() ?? !1);
    }
    nonPositionalChannelIdUpdate(e) {
        let t = b.A.getBasicChannel(e);
        return (
            null != t &&
            null != t.guild_id &&
            null != this.guilds[t.guild_id] &&
            (t instanceof y.YB || null != (t = b.A.getChannel(e))) &&
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
}
class Q {
    id;
    hideMutedChannels;
    favoritesSectionNumber;
    recentsSectionNumber;
    voiceChannelsSectionNumber;
    mutedChannelIds;
    optedInChannels;
    optInEnabled;
    hideResourceChannels;
    favoriteChannelIds;
    suggestedFavoriteChannelId;
    collapsedCategoryIds;
    moderatorReportChannelId;
    moderatorReportChannelEnabled;
    categories;
    noParentCategory;
    favoritesCategory;
    recentsCategory;
    voiceChannelsCategory;
    guildActionSection;
    channelNoticeSection;
    sortedNamedCategories = null;
    sections = null;
    rows = null;
    firstVoiceChannel = void 0;
    allChannelsById = null;
    version = 0;
    constructor(e, t, n) {
        (this.id = e),
            (this.hideMutedChannels = T.Ay.isGuildCollapsed(this.id)),
            (this.mutedChannelIds = T.Ay.getMutedChannels(this.id)),
            (this.optedInChannels =
                T.Ay.getOptedInChannelsWithPendingUpdates(this.id) ?? T.Ay.getOptedInChannels(this.id)),
            (this.optInEnabled = (0, S.WW)(this.id)),
            (this.hideResourceChannels = (0, c.K)(this.id)),
            (this.favoriteChannelIds = new Set(T.Ay.getGuildFavorites(this.id) ?? [])),
            (this.suggestedFavoriteChannelId = C.A.getSuggestedChannelId(this.id)),
            (this.collapsedCategoryIds = _.A.getCollapsedCategories());
        const s = b.A.getMutableGuildChannelsForGuild(this.id),
            r = x.A.getGuild(this.id);
        (this.moderatorReportChannelId = null != r ? (0, m.A)(r) : null),
            (this.moderatorReportChannelEnabled = null != r && (0, E.A)(r));
        const a = {},
            o = [],
            d = {};
        for (const e in s) {
            const t = s[e];
            t.type === M.rbe.GUILD_CATEGORY && ((a[t.id] = t), (d[t.id] = []));
        }
        const h = [],
            u = [],
            g = [],
            f = this.initializationData;
        for (const e in s) {
            const t = s[e];
            if (t.type !== M.rbe.GUILD_CATEGORY) {
                if (t.type === M.rbe.GUILD_DIRECTORY) {
                    null == r || r.features.has(M.GuildFeatures.HUB) || g.push(t);
                    continue;
                }
                ef(this, t, f)
                    ? h.push(t)
                    : (t.type === M.rbe.GUILD_VOICE || t.type === M.rbe.GUILD_STAGE_VOICE) &&
                      (null != t.parent_id && null != a[t.parent_id] && u.push(a[t.parent_id]), u.push(t)),
                    null != t.parent_id && t.parent_id in d ? d[t.parent_id].push(t) : o.push(t);
            }
        }
        for (const e in ((this.categories = {}), d)) this.categories[e] = new et(this, a[e], d[e], f);
        (this.recentsSectionNumber = q),
            (this.favoritesSectionNumber = z),
            (this.noParentCategory = new ee(this, o, f)),
            (this.favoritesCategory = new en(this, f)),
            (this.recentsCategory = (0, p.i)()
                ? new ChannelListRecentlyActiveCategory(this, s, f)
                : new es(this, h, f)),
            (this.voiceChannelsCategory = new ei(this, u, a, f)),
            (this.guildActionSection = new el(t, g.length > 0)),
            (this.channelNoticeSection = new er(n)),
            i()(!("null" in this.categories), "somehow a null got into categories"),
            (this.voiceChannelsSectionNumber = $ + l().size(this.categories));
    }
    get initializationData() {
        return {
            selectedChannel: b.A.getChannel(O.A.getChannelId()),
            selectedVoiceChannelId: O.A.getVoiceChannelId(),
            activeJoinedRelevantThreads: I.A.getActiveJoinedRelevantThreadsForGuild(this.id),
            activeJoinedUnreadThreads: I.A.getActiveJoinedUnreadThreadsForGuild(this.id),
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
            (this.sortedNamedCategories = l().sortBy(Object.values(this.categories), (e) => e.record.position)),
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
            case k:
                throw Error("Invalid section. Use getChannelNoticeSection instead");
            case Y:
                throw Error("Invalid section. Use getGuildActionSection instead");
            case z:
                return this.favoritesCategory;
            case K:
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
            i()(e >= 0 && e < this.getSortedNamedCategories().length, `invalid section index ${e}`),
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
        let s = n.channels[n.getShownChannelIds()[t]];
        return null == s ? null : { category: n, channel: s };
    }
    isPlaceholderRow(e, t) {
        return i()(e > Y, "Invalid section"), e !== this.recentsSectionNumber && this.getRows()[e][t] === H;
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
        let t = (function (e) {
            if (null == e) return null;
            if (eS.has(e)) return e;
            let t = b.A.getChannel(e);
            return t?.isDirectory() ? F.n.GUILD_DIRECTORY : null;
        })(e);
        if (null != t) return [{ row: this.getGuildActionSection().getRows().indexOf(t), section: Y }];
        let n = [],
            s = b.A.getChannel(e);
        if (null == s || null == e) return n;
        let i = s.isThread();
        if ((i && (s = b.A.getChannel(s.parent_id)), null == s)) return n;
        let r = this.favoritesCategory.getShownChannelIds().indexOf(s.id);
        r >= 0 && n.push({ section: z, row: r });
        let a = this.recentsCategory.getShownChannelIds().indexOf(s.id);
        if ((a >= 0 && n.push({ section: this.recentsSectionNumber, row: a }), s.type === M.rbe.GUILD_CATEGORY))
            return [{ section: l().findIndex(this.getSortedNamedCategories(), (e) => e.id === s?.id) + $ }];
        let o = this.getCategory(s),
            d = o instanceof ee ? K : this.getSortedNamedCategories().indexOf(o) + $,
            h = o.getShownChannelIds().indexOf(s.id);
        if (d >= 0 && h >= 0) {
            let t = i ? o.channels[s.id].threadIds.indexOf(e) : 0;
            n.push({ section: d, row: h, threadOffset: t });
        }
        let c = this.voiceChannelsCategory.getShownChannelIds().indexOf(s.id);
        return c >= 0 && n.push({ section: this.voiceChannelsSectionNumber, row: c }), n;
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
            s = e[e.length - 1],
            r = !0,
            l = !1,
            a = [],
            o = [];
        for (let e of this.getSortedCategories()) {
            let i = t?.ignoreRecents && e === this.recentsCategory;
            for (let t of e.getShownChannelIds()) {
                let d = e.channels[t];
                r && (d.id === n.id ? (r = !1) : i || a.push(d)),
                    l && !i && o.push(d),
                    r || l || d.id !== s.id || (l = !0);
            }
        }
        return [a, e, o];
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
        for (let s of e) null != n[s] && t.push(n[s]);
        return t;
    }
    getChannel(e) {
        return this._initializeAllChannelsById()[e] ?? null;
    }
    updateSubtitles(e) {
        let t = [];
        if (null != e) {
            let n = b.A.getChannel(e);
            if (null != n)
                if (n.id in this.favoritesCategory.channels) t = [this.favoritesCategory.channels[n.id]];
                else if (n.id in this.recentsCategory.channels) t = [this.recentsCategory.channels[n.id]];
                else {
                    let s = this.getCategory(n);
                    null != s && null != s.channels[e] && (t = [s.channels[e]]);
                }
        } else
            t = l()(this.getSortedCategories())
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
            if (!t?.ignoreRecents || n !== this.recentsCategory)
                for (let t of n.getShownChannelIds()) {
                    let s = n.channels[t];
                    for (let t of (e(s.record), s.threadIds)) {
                        let n = b.A.getChannel(t);
                        null != n && e(n);
                    }
                }
    }
    forEachChannel(e, t) {
        for (let n of this.getSortedCategories())
            if (!t?.ignoreRecents || n !== this.recentsCategory) for (let t of n.getChannelRecords()) e(t);
    }
}
class Z {
    guild;
    isMuted = !1;
    isCollapsed = !1;
    position = -1;
    channels = {};
    shownChannelIds = null;
    constructor(e) {
        this.guild = e;
    }
    updateChannel(e, t) {
        return !!(e.id in this.channels && this.channels[e.id].updateChannel(e, t)) && (this.invalidate(), !0);
    }
    invalidate() {
        this.shownChannelIds = null;
    }
    getRows() {
        let e = this.getShownChannelIds();
        return 0 === e.length && this.shouldShowEmptyCategory() ? [H] : e;
    }
    shouldShowEmptyCategory() {
        return l().some(this.channels, (e) => e.renderLevel >= 3);
    }
    getShownChannelIds() {
        return (
            null == this.shownChannelIds &&
                (this.shownChannelIds = l()(this.channels)
                    .values()
                    .filter((e) => 4 === e.renderLevel)
                    .sortBy((e) => {
                        let { record: t } = e;
                        return t.isGuildVocal() ? t.position + 1e4 : t.position;
                    })
                    .map((e) => e.id)
                    .value()),
            this.shownChannelIds
        );
    }
    getShownChannelAndThreadIds() {
        let e = l()(this.channels)
            .values()
            .flatMap((e) => e.threadIds)
            .value();
        return this.getShownChannelIds().concat(e);
    }
    isEmpty() {
        return 0 === this.getShownChannelIds().length;
    }
    getChannelRecords() {
        return l()(this.channels)
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
}
class ee extends Z {
    constructor(e, t, n) {
        super(e),
            (this.channels = l()(t)
                .map((e) => new eo(this, e, n))
                .keyBy((e) => e.id)
                .value());
    }
}
class et extends Z {
    id;
    record;
    constructor(e, t, n, s) {
        for (const i of (super(e),
        (this.record = t),
        (this.id = t.id),
        (this.isCollapsed = !0 === e.collapsedCategoryIds[t.id]),
        (this.isMuted = e.mutedChannelIds.has(t.id)),
        (this.channels = {}),
        n))
            this.channels[i.id] = new eo(this, i, s);
    }
    shouldShowEmptyCategory() {
        return !!(
            super.shouldShowEmptyCategory() ||
            (R.A.can(V.xB.MANAGE_CHANNELS, this.record) &&
                R.A.can(V.xB.VIEW_CHANNEL, this.record) &&
                l().isEmpty(this.channels) &&
                (!this.guild.optInEnabled || this.guild.optedInChannels.has(this.id)))
        );
    }
}
class en extends Z {
    constructor(e, t) {
        if ((super(e), !e.optInEnabled)) return;
        this.channels = l()(T.Ay.getGuildFavorites(e.id) ?? [])
            .map((e) => b.A.getChannel(e))
            .filter(U.Vq)
            .map((e) => new ed(this, e, t))
            .keyBy((e) => e.id)
            .value();
        const n = C.A.getSuggestedChannelId(e.id),
            s = b.A.getChannel(n);
        null != s &&
            null != n &&
            (this.channels[n] = new ed(this, s, {
                ...t,
                activeJoinedRelevantThreads: {},
                activeJoinedUnreadThreads: {},
            }));
    }
    updateChannel(e, t) {
        let n = e.id in this.channels && T.Ay.isFavorite(e.guild_id, e.id),
            s = C.A.getSuggestedChannelId(e.guild_id);
        return (e.id !== s || n || (t = { ...t, activeJoinedRelevantThreads: {}, activeJoinedUnreadThreads: {} }),
        e.id in this.channels && this.channels[e.id].updateChannel(e, t))
            ? (this.invalidate(), !0)
            : e.id in this.channels && e.id !== s && !n && (delete this.channels[e.id], this.invalidate(), !0);
    }
    getFirstVoiceChannel(e) {
        return null;
    }
}
class es extends Z {
    constructor(e, t, n) {
        if ((super(e), !e.optInEnabled || g.A.isFullServerPreview(e.id))) return;
        (this.isCollapsed = !1),
            (this.isMuted = !1),
            (this.channels = l()(t)
                .map((e) => new eh(this, e, n))
                .keyBy((e) => e.id)
                .value());
    }
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
            if (ef(this.guild, e, t) && null == n)
                return (this.channels[e.id] = new eh(this, e, t)), this.invalidate(), !0;
        }
        return n;
    }
    getFirstVoiceChannel(e) {
        return null;
    }
    getShownChannelIds() {
        if (null == this.shownChannelIds) {
            let e = l()(this.channels)
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
            this.shownChannelIds = l()([...n])
                .sortBy((e) => {
                    let { record: t } = e;
                    return t.position;
                })
                .map((e) => e.id)
                .value();
        }
        return this.shownChannelIds;
    }
}
class ei extends Z {
    categoriesById;
    hiddenChannelIds = null;
    constructor(e, t, n, s) {
        if ((super(e), (this.categoriesById = n), !e.optInEnabled)) return;
        (this.isCollapsed = P.A.isVoiceCategoryCollapsed(e.id)),
            (this.isMuted = !1),
            (this.categoriesById = n),
            (this.channels = l()(t)
                .map((e) => new ec(this, e, s))
                .keyBy((e) => e.id)
                .value());
    }
    invalidate() {
        super.invalidate(), (this.hiddenChannelIds = null);
    }
    getHiddenChannelIds() {
        if (!this.guild.optInEnabled) return [];
        if (null == this.hiddenChannelIds) {
            let e = l()(this.channels)
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
        return 0 === e.length && this.getHiddenChannelIds().length > 0 ? [H] : e;
    }
    getShownChannelIds() {
        if (!this.guild.optInEnabled) return [];
        if (null == this.shownChannelIds) {
            let e = l()(this.channels)
                .filter((e) => 4 === e.renderLevel)
                .orderBy(
                    [
                        (e) => {
                            var t;
                            return (
                                (t = this.categoriesById),
                                e.record.type === M.rbe.GUILD_CATEGORY
                                    ? e.record.position
                                    : null != e.record.parent_id
                                      ? (t[e.record.parent_id]?.position ?? -1)
                                      : -1
                            );
                        },
                        (e) => (e.record.type === M.rbe.GUILD_CATEGORY ? -1 : e.record.position),
                    ],
                    ["asc", "asc"],
                )
                .value();
            this.shownChannelIds = [];
            for (let t = 0; t < e.length; t++) {
                let n = e[t];
                (t < e.length - 1 &&
                    n.record.type === M.rbe.GUILD_CATEGORY &&
                    e[t + 1]?.record.type === M.rbe.GUILD_CATEGORY) ||
                    ((t !== e.length - 1 || n.record.type !== M.rbe.GUILD_CATEGORY) && this.shownChannelIds.push(n.id));
            }
        }
        return this.shownChannelIds;
    }
    getFirstVoiceChannel(e) {
        return null;
    }
}
class er {
    rows;
    constructor(e) {
        this.rows = e;
    }
    isEmpty() {
        return 0 === this.rows.length;
    }
    getRows() {
        return this.rows;
    }
    getRow(e) {
        return this.rows[e];
    }
}
class el {
    guildActionRows;
    constructor(e, t) {
        (this.guildActionRows = e.map(String)), t && this.guildActionRows.push(String(F.n.GUILD_DIRECTORY));
    }
    isEmpty() {
        return 0 === this.guildActionRows.length;
    }
    getRows() {
        return this.guildActionRows;
    }
    getRow(e) {
        return this.guildActionRows[e];
    }
}
class ea {
    category;
    record;
    id;
    position = -1;
    threadIds = [];
    threadCount = 0;
    subtitle = null;
    renderLevel = 1;
    constructor(e, t, n) {
        (this.category = e), (this.record = t), (this.id = t.id);
        const { renderLevel: s, threadIds: i } = this.computeState(n);
        (this.renderLevel = s),
            (this.threadCount = l().size(i)),
            (this.threadIds = i),
            4 === s && (this.subtitle = this.computeSubtitle());
    }
    get isMuted() {
        return this.category.guild.mutedChannelIds.has(this.id);
    }
    get isCollapsed() {
        return N.A.isCollapsed(this.id);
    }
    get isFirstVoiceChannel() {
        return this.category.getFirstVoiceChannel() === this;
    }
    get lastMessageTimestamp() {
        return Math.max(w.Ay.lastMessageTimestamp(this.id), ...this.threadIds.map(w.Ay.lastMessageTimestamp));
    }
    updateChannel(e, t) {
        let n = !1;
        null != e && e !== this.record && ((this.record = e), (n = !0));
        let s = this.computeState(t);
        return (
            (s.renderLevel === this.renderLevel && l().isEqual(s.threadIds, this.threadIds)) ||
                ((this.renderLevel = s.renderLevel),
                (this.threadIds = s.threadIds),
                (this.threadCount = l().size(s.threadIds)),
                (n = !0)),
            4 === this.renderLevel && this.updateSubtitle() && (n = !0),
            n
        );
    }
    updateSubtitle() {
        let e = this.computeSubtitle();
        return !l().isEqual(this.subtitle, e) && ((this.subtitle = e), !0);
    }
    computeSubtitle() {
        return eu(this.record, this.isCollapsed || this.category.isCollapsed, this.category.guild.optInEnabled);
    }
}
class eo extends ea {
    computeState(e) {
        let {
            selectedChannel: t,
            selectedVoiceChannelId: n,
            activeJoinedRelevantThreads: s,
            activeJoinedUnreadThreads: i,
        } = e;
        if (!R.A.can(V.xB.VIEW_CHANNEL, this.record)) {
            if (this.id === n) return { renderLevel: 4, threadIds: [] };
            else if (!h.A.isChannelGatedAndVisible(this.record.guild_id, this.record.id))
                return { renderLevel: 1, threadIds: [] };
        }
        let r = this.record.parent_id,
            a = this.category.guild;
        if (ep(a, this.record)) return { renderLevel: 1, threadIds: [] };
        let o = t?.id === this.id || n === this.id,
            d = null != t && t.isThread() && t.parent_id === this.id,
            c = (o || d || (!this.category.isCollapsed && !this.isMuted) ? s[this.id] : i[this.id]) ?? {},
            u = eg(this.record, c, t, n, a.hideMutedChannels);
        return this.id !== a.moderatorReportChannelId || a.moderatorReportChannelEnabled
            ? a.optInEnabled && a.hideResourceChannels && this.record.hasFlag(B.lx.IS_GUILD_RESOURCE_CHANNEL)
                ? { renderLevel: o ? 4 : 1, threadIds: u }
                : !a.optInEnabled || a.optedInChannels.has(this.id) || (null != r && a.optedInChannels.has(r))
                  ? o || d || !l().isEmpty(u) || w.Ay.getMentionCount(this.id) > 0
                      ? { renderLevel: 4, threadIds: u }
                      : a.hideMutedChannels && a.mutedChannelIds.has(this.id)
                        ? { renderLevel: 2, threadIds: u }
                        : this.category.isCollapsed &&
                            (a.mutedChannelIds.has(this.id) ||
                                (null != r && a.mutedChannelIds.has(r)) ||
                                this.record.isGuildVocal() ||
                                this.record.type === M.rbe.GUILD_STORE ||
                                ((0, y.ig)(this.record.type) && !w.Ay.hasUnread(this.record.id)))
                          ? { renderLevel: 3, threadIds: u }
                          : { renderLevel: 4, threadIds: u }
                  : { renderLevel: 2, threadIds: u }
            : { renderLevel: 2, threadIds: u };
    }
}
class ed extends ea {
    computeState(e) {
        let { selectedChannel: t, selectedVoiceChannelId: n, activeJoinedRelevantThreads: s } = e;
        return R.A.can(V.xB.VIEW_CHANNEL, this.record)
            ? { renderLevel: 4, threadIds: eg(this.record, s[this.id] ?? {}, t, n, !1) }
            : { renderLevel: 1, threadIds: [] };
    }
}
class eh extends ea {
    computeState(e) {
        let { selectedChannel: t, selectedVoiceChannelId: n, activeJoinedRelevantThreads: s } = e;
        return R.A.can(V.xB.VIEW_CHANNEL, this.record)
            ? ef(this.category.guild, this.record, e)
                ? { renderLevel: eC(this, e) ? 4 : 3, threadIds: eg(this.record, s[this.id] ?? {}, t, n, !1) }
                : { renderLevel: 2, threadIds: [] }
            : { renderLevel: 1, threadIds: [] };
    }
}
class ec extends eo {
    getRenderLevel(e) {
        let t = this.category.guild;
        return !R.A.can(V.xB.VIEW_CHANNEL, this.record) || 4 === e || 3 === e || ep(t, this.record)
            ? 1
            : this.category.isCollapsed
              ? l().some(L.A.getVoiceStatesForChannel(this.record.id))
                  ? 4
                  : 3
              : 4;
    }
    computeState(e) {
        let t = super.computeState(e),
            n = this.getRenderLevel(t.renderLevel);
        return (
            4 === n &&
                (this.subtitle = eu(
                    this.record,
                    this.isCollapsed || this.category.isCollapsed,
                    this.category.guild.optInEnabled,
                )),
            { threadIds: [], renderLevel: n }
        );
    }
}
function eu(e, t, n) {
    switch (e.type) {
        case M.rbe.GUILD_VOICE: {
            let s = u.Ay.getActiveEventByChannel(e.id);
            if (null != s) return { type: "event", name: s.name };
            let i = D.Ay.getVoiceStatesForChannel(e);
            if (n && t && (0, G.t)(i)) return { type: "go-live" };
            let r = d.A.getChannelStatus(e);
            if (null != r && r.length > 0) return { type: "voice", text: r };
            let l = a.Ay.getEmbeddedActivitiesForChannel(e.id)
                .map((e) => o.A.getApplication(e.applicationId)?.name)
                .filter(U.Vq);
            if (l.length > 0) return { type: "embedded-activities", name: l.join(", ") };
            return null;
        }
        case M.rbe.GUILD_STAGE_VOICE: {
            let t = u.Ay.getActiveEventByChannel(e.id);
            if (null != t) return { type: "event", name: t.name };
            return null;
        }
        default:
            return null;
    }
}
function eg(e, t, n, s, i) {
    let r = null != n && (n.id === e.id || s === e.id),
        a = null != n && n.isThread() && n.parent_id === e.id;
    if (y.wE.has(e.type)) {
        let e = l()
            .sortBy(Object.values(t), (e) => -e.joinTimestamp)
            .map((e) => e.channel.id);
        return r
            ? e
            : a
              ? (n.id in t || e.unshift(n.id), e)
              : i
                ? e.filter((e) => !v.A.isMuted(e) || w.Ay.getMentionCount(e) > 0)
                : e;
    }
    return [];
}
function ep(e, t) {
    return e.favoriteChannelIds.has(t.id) && (e.optInEnabled || !1);
}
function eC(e, t) {
    let { selectedChannel: n, activeJoinedRelevantThreads: s } = t;
    if (w.Ay.getMentionCount(e.id) > 0) return !0;
    for (let t in s[e.id]) if (w.Ay.getMentionCount(t) > 0) return !0;
    if (null != n && (n.id === e.id || (n.isThread() && n.parent_id === e.id))) return !0;
    let i = A.A.getNewChannelIds(e.category.guild.id);
    if (i.size > W);
    else if (i.has(e.id)) return !0;
    return !1;
}
function ef(e, t, n) {
    let { selectedChannel: s, activeJoinedRelevantThreads: i } = n;
    if (
        t.type === M.rbe.GUILD_DIRECTORY ||
        !e.optInEnabled ||
        e.optedInChannels.has(t.id) ||
        t.isThread() ||
        (null != t.parent_id && e.optedInChannels.has(t.parent_id)) ||
        (e.hideResourceChannels && t.hasFlag(B.lx.IS_GUILD_RESOURCE_CHANNEL))
    )
        return !1;
    if (t.isGuildVocal()) {
        let n = P.A.isVoiceCategoryCollapsed(e.id);
        if (!n) return !1;
        let s = l().some(L.A.getVoiceStatesForChannel(t.id));
        if (n && s) return !1;
    }
    if ((null != s && (s.id === t.id || (s.isThread() && s.parent_id === t.id))) || w.Ay.getMentionCount(t.id) > 0)
        return !0;
    for (let e in i[t.id])
        if (w.Ay.getMentionCount(e) > 0 || w.Ay.hasUnread(e) || w.Ay.hasRecentlyVisitedAndRead(e)) return !0;
    if (e.mutedChannelIds.has(t.id) || (null != t.parent_id && e.mutedChannelIds.has(t.parent_id))) return !1;
    let r = A.A.getNewChannelIds(e.id),
        a = Array.from(r).sort((e, t) => j.default.compare(t, e));
    return !!((r.has(t.id) && a.indexOf(t.id) < W) || w.Ay.hasRecentlyVisitedAndRead(t.id));
}
let eS = new Set(Object.values(F.n));
