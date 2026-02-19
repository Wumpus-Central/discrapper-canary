n.d(t, {
    Ay: () => Z,
    HP: () => j,
    PU: () => z,
    TF: () => q,
    Xt: () => W,
    bK: () => J,
    go: () => ec,
    rR: () => k,
    wF: () => eg,
    xu: () => en,
    yO: () => K,
}),
    n(321073),
    n(667532);
var i = n(284009),
    s = n.n(i),
    l = n(735438),
    r = n.n(l),
    a = n(933958),
    d = n(587895),
    h = n(309698),
    o = n(717125),
    u = n(473529),
    c = n(698441),
    g = n(164956),
    C = n(99712),
    p = n(240935),
    I = n(50827),
    y = n(395504),
    A = n(454058),
    f = n(272720),
    S = n(56595),
    E = n(863005),
    v = n(152007),
    _ = n(95701),
    w = n(924985),
    m = n(734057),
    R = n(945886),
    N = n(71393),
    L = n(576705),
    b = n(222823),
    O = n(309010),
    G = n(543465),
    T = n(977997),
    D = n(607567),
    V = n(403362),
    U = n(661191),
    M = n(669715),
    F = n(551851),
    B = n(281405),
    x = n(652215),
    P = n(746080),
    H = n(818348);
let Y = "placeholder-channel-id",
    k = 2,
    W = 0,
    z = 1,
    j = 2,
    K = 3,
    J = 4,
    q = 5,
    X = new Set([String(B.n.GUILD_DIRECTORY)]);
class Z {
    guilds = {};
    _areGuildActionRowsUpdated(e, t) {
        return !r().isEqual(
            this.guilds[e]
                ?.getGuildActionSection()
                .getRows()
                .filter((e) => !X.has(e)),
            t,
        );
    }
    _areChannelNoticeRowsUpdated(e, t) {
        return !r().isEqual(this.guilds[e]?.getChannelNoticeSection().getRows(), t);
    }
    _areGuildVocalChannelsInRecentsInNeedOfAppearingInActiveNow(e) {
        let t = this.guilds[e];
        if (null == t) return !1;
        let n = t.getCategoryFromSection(t.voiceChannelsSectionNumber),
            i = t.getCategoryFromSection(t.recentsSectionNumber);
        for (let e in i.channels) {
            let t = i.channels[e];
            if (
                2 === t.renderLevel &&
                t.record.isGuildVocal() &&
                null == n.channels[t.id] &&
                r().some(T.A.getVoiceStatesForChannel(t.id)) &&
                b.Ay.getMentionCount(t.id) > 0
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
                (this.guilds[e] = new $(e, t, n)),
            this.guilds[e]
        );
    }
    getGuildChannelRowsOnly(e) {
        return e in this.guilds || (this.guilds[e] = new $(e, [], [])), this.guilds[e];
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
        let t = m.A.getBasicChannel(e);
        return (
            null != t &&
            null != t.guild_id &&
            null != this.guilds[t.guild_id] &&
            (t instanceof _.YB || null != (t = m.A.getChannel(e))) &&
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
class $ {
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
            (this.hideMutedChannels = G.Ay.isGuildCollapsed(this.id)),
            (this.mutedChannelIds = G.Ay.getMutedChannels(this.id)),
            (this.optedInChannels =
                G.Ay.getOptedInChannelsWithPendingUpdates(this.id) ?? G.Ay.getOptedInChannels(this.id)),
            (this.optInEnabled = (0, y.WW)(this.id)),
            (this.hideResourceChannels = (0, u.K)(this.id)),
            (this.favoriteChannelIds = new Set(G.Ay.getGuildFavorites(this.id) ?? [])),
            (this.suggestedFavoriteChannelId = p.A.getSuggestedChannelId(this.id)),
            (this.collapsedCategoryIds = w.A.getCollapsedCategories());
        const i = m.A.getMutableGuildChannelsForGuild(this.id),
            l = N.A.getGuild(this.id);
        (this.moderatorReportChannelId = null != l ? (0, f.A)(l) : null),
            (this.moderatorReportChannelEnabled = null != l && (0, S.A)(l));
        const a = {},
            d = [],
            h = {};
        for (const e in i) {
            const t = i[e];
            t.type === x.rbe.GUILD_CATEGORY && ((a[t.id] = t), (h[t.id] = []));
        }
        const o = [],
            c = [],
            g = [],
            I = this.initializationData;
        for (const e in i) {
            const t = i[e];
            if (t.type !== x.rbe.GUILD_CATEGORY) {
                if (t.type === x.rbe.GUILD_DIRECTORY) {
                    null == l || l.features.has(x.GuildFeatures.HUB) || g.push(t);
                    continue;
                }
                eI(this, t, I)
                    ? o.push(t)
                    : (t.type === x.rbe.GUILD_VOICE || t.type === x.rbe.GUILD_STAGE_VOICE) &&
                      (null != t.parent_id && null != a[t.parent_id] && c.push(a[t.parent_id]), c.push(t)),
                    null != t.parent_id && t.parent_id in h ? h[t.parent_id].push(t) : d.push(t);
            }
        }
        for (const e in ((this.categories = {}), h)) this.categories[e] = new et(this, a[e], h[e], I);
        (this.recentsSectionNumber = K),
            (this.favoritesSectionNumber = j),
            (this.noParentCategory = new ee(this, d, I)),
            (this.favoritesCategory = new en(this, I)),
            (this.recentsCategory = (0, C.i)()
                ? new ChannelListRecentlyActiveCategory(this, i, I)
                : new ei(this, o, I)),
            (this.voiceChannelsCategory = new es(this, c, a, I)),
            (this.guildActionSection = new er(t, g.length > 0)),
            (this.channelNoticeSection = new el(n)),
            s()(!("null" in this.categories), "somehow a null got into categories"),
            (this.voiceChannelsSectionNumber = q + r().size(this.categories));
    }
    get initializationData() {
        return {
            selectedChannel: m.A.getChannel(O.A.getChannelId()),
            selectedVoiceChannelId: O.A.getVoiceChannelId(),
            activeJoinedRelevantThreads: E.A.getActiveJoinedRelevantThreadsForGuild(this.id),
            activeJoinedUnreadThreads: E.A.getActiveJoinedUnreadThreadsForGuild(this.id),
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
            (this.sortedNamedCategories = r().sortBy(Object.values(this.categories), (e) => e.record.position)),
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
            case W:
                throw Error("Invalid section. Use getChannelNoticeSection instead");
            case z:
                throw Error("Invalid section. Use getGuildActionSection instead");
            case j:
                return this.favoritesCategory;
            case J:
                return this.noParentCategory;
            case this.recentsSectionNumber:
                return this.recentsCategory;
            case this.voiceChannelsSectionNumber:
                return this.voiceChannelsCategory;
            default:
                return this.getSortedNamedCategories()[e - q];
        }
    }
    getNamedCategoryFromSection(e) {
        return (
            (e -= q),
            s()(e >= 0 && e < this.getSortedNamedCategories().length, `invalid section index ${e}`),
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
        let i = n.channels[n.getShownChannelIds()[t]];
        return null == i ? null : { category: n, channel: i };
    }
    isPlaceholderRow(e, t) {
        return s()(e > z, "Invalid section"), e !== this.recentsSectionNumber && this.getRows()[e][t] === Y;
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
            if (ey.has(e)) return e;
            let t = m.A.getChannel(e);
            return t?.isDirectory() ? B.n.GUILD_DIRECTORY : null;
        })(e);
        if (null != t) return [{ row: this.getGuildActionSection().getRows().indexOf(t), section: z }];
        let n = [],
            i = m.A.getChannel(e);
        if (null == i || null == e) return n;
        let s = i.isThread();
        if ((s && (i = m.A.getChannel(i.parent_id)), null == i)) return n;
        let l = this.favoritesCategory.getShownChannelIds().indexOf(i.id);
        l >= 0 && n.push({ section: j, row: l });
        let a = this.recentsCategory.getShownChannelIds().indexOf(i.id);
        if ((a >= 0 && n.push({ section: this.recentsSectionNumber, row: a }), i.type === x.rbe.GUILD_CATEGORY))
            return [{ section: r().findIndex(this.getSortedNamedCategories(), (e) => e.id === i?.id) + q }];
        let d = this.getCategory(i),
            h = d instanceof ee ? J : this.getSortedNamedCategories().indexOf(d) + q,
            o = d.getShownChannelIds().indexOf(i.id);
        if (h >= 0 && o >= 0) {
            let t = s ? d.channels[i.id].threadIds.indexOf(e) : 0;
            n.push({ section: h, row: o, threadOffset: t });
        }
        let u = this.voiceChannelsCategory.getShownChannelIds().indexOf(i.id);
        return u >= 0 && n.push({ section: this.voiceChannelsSectionNumber, row: u }), n;
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
        s()(e.length > 0, "must have at least one channel in the slice");
        let n = e[0],
            i = e[e.length - 1],
            l = !0,
            r = !1,
            a = [],
            d = [];
        for (let e of this.getSortedCategories()) {
            let s = t?.ignoreRecents && e === this.recentsCategory;
            for (let t of e.getShownChannelIds()) {
                let h = e.channels[t];
                l && (h.id === n.id ? (l = !1) : s || a.push(h)),
                    r && !s && d.push(h),
                    l || r || h.id !== i.id || (r = !0);
            }
        }
        return [a, e, d];
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
        for (let i of e) null != n[i] && t.push(n[i]);
        return t;
    }
    getChannel(e) {
        return this._initializeAllChannelsById()[e] ?? null;
    }
    updateSubtitles(e) {
        let t = [];
        if (null != e) {
            let n = m.A.getChannel(e);
            if (null != n)
                if (n.id in this.favoritesCategory.channels) t = [this.favoritesCategory.channels[n.id]];
                else if (n.id in this.recentsCategory.channels) t = [this.recentsCategory.channels[n.id]];
                else {
                    let i = this.getCategory(n);
                    null != i && null != i.channels[e] && (t = [i.channels[e]]);
                }
        } else
            t = r()(this.getSortedCategories())
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
                    let i = n.channels[t];
                    for (let t of (e(i.record), i.threadIds)) {
                        let n = m.A.getChannel(t);
                        null != n && e(n);
                    }
                }
    }
    forEachChannel(e, t) {
        for (let n of this.getSortedCategories())
            if (!t?.ignoreRecents || n !== this.recentsCategory) for (let t of n.getChannelRecords()) e(t);
    }
}
class Q {
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
        return 0 === e.length && this.shouldShowEmptyCategory() ? [Y] : e;
    }
    shouldShowEmptyCategory() {
        return r().some(this.channels, (e) => e.renderLevel >= 3);
    }
    getShownChannelIds() {
        return (
            null == this.shownChannelIds &&
                (this.shownChannelIds = r()(this.channels)
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
        let e = r()(this.channels)
            .values()
            .flatMap((e) => e.threadIds)
            .value();
        return this.getShownChannelIds().concat(e);
    }
    isEmpty() {
        return 0 === this.getShownChannelIds().length;
    }
    getChannelRecords() {
        return r()(this.channels)
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
class ee extends Q {
    constructor(e, t, n) {
        super(e),
            (this.channels = r()(t)
                .map((e) => new ed(this, e, n))
                .keyBy((e) => e.id)
                .value());
    }
}
class et extends Q {
    id;
    record;
    constructor(e, t, n, i) {
        for (const s of (super(e),
        (this.record = t),
        (this.id = t.id),
        (this.isCollapsed = !0 === e.collapsedCategoryIds[t.id]),
        (this.isMuted = e.mutedChannelIds.has(t.id)),
        (this.channels = {}),
        n))
            this.channels[s.id] = new ed(this, s, i);
    }
    shouldShowEmptyCategory() {
        return !!(
            super.shouldShowEmptyCategory() ||
            (L.A.can(H.xB.MANAGE_CHANNELS, this.record) &&
                L.A.can(H.xB.VIEW_CHANNEL, this.record) &&
                r().isEmpty(this.channels) &&
                (!this.guild.optInEnabled || this.guild.optedInChannels.has(this.id)))
        );
    }
}
class en extends Q {
    constructor(e, t) {
        if ((super(e), !e.optInEnabled)) return;
        this.channels = r()(G.Ay.getGuildFavorites(e.id) ?? [])
            .map((e) => m.A.getChannel(e))
            .filter(V.Vq)
            .map((e) => new eh(this, e, t))
            .keyBy((e) => e.id)
            .value();
        const n = p.A.getSuggestedChannelId(e.id),
            i = m.A.getChannel(n);
        null != i &&
            null != n &&
            (this.channels[n] = new eh(this, i, {
                ...t,
                activeJoinedRelevantThreads: {},
                activeJoinedUnreadThreads: {},
            }));
    }
    updateChannel(e, t) {
        let n = e.id in this.channels && G.Ay.isFavorite(e.guild_id, e.id),
            i = p.A.getSuggestedChannelId(e.guild_id);
        return (e.id !== i || n || (t = { ...t, activeJoinedRelevantThreads: {}, activeJoinedUnreadThreads: {} }),
        e.id in this.channels && this.channels[e.id].updateChannel(e, t))
            ? (this.invalidate(), !0)
            : e.id in this.channels && e.id !== i && !n && (delete this.channels[e.id], this.invalidate(), !0);
    }
    getFirstVoiceChannel(e) {
        return null;
    }
}
class ei extends Q {
    constructor(e, t, n) {
        if ((super(e), !e.optInEnabled || g.A.isFullServerPreview(e.id))) return;
        (this.isCollapsed = !1),
            (this.isMuted = !1),
            (this.channels = r()(t)
                .map((e) => new eo(this, e, n))
                .keyBy((e) => e.id)
                .value());
    }
    updateAllChannels(e) {
        let t = !1;
        return (
            U.default.keys(this.channels).forEach((n) => {
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
                return (this.channels[e.id] = new eo(this, e, t)), this.invalidate(), !0;
        }
        return n;
    }
    getFirstVoiceChannel(e) {
        return null;
    }
    getShownChannelIds() {
        if (null == this.shownChannelIds) {
            let e = r()(this.channels)
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
            this.shownChannelIds = r()([...n])
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
class es extends Q {
    categoriesById;
    hiddenChannelIds = null;
    constructor(e, t, n, i) {
        if ((super(e), (this.categoriesById = n), !e.optInEnabled)) return;
        (this.isCollapsed = F.A.isVoiceCategoryCollapsed(e.id)),
            (this.isMuted = !1),
            (this.categoriesById = n),
            (this.channels = r()(t)
                .map((e) => new eu(this, e, i))
                .keyBy((e) => e.id)
                .value());
    }
    invalidate() {
        super.invalidate(), (this.hiddenChannelIds = null);
    }
    getHiddenChannelIds() {
        if (!this.guild.optInEnabled) return [];
        if (null == this.hiddenChannelIds) {
            let e = r()(this.channels)
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
        return 0 === e.length && this.getHiddenChannelIds().length > 0 ? [Y] : e;
    }
    getShownChannelIds() {
        if (!this.guild.optInEnabled) return [];
        if (null == this.shownChannelIds) {
            let e = r()(this.channels)
                .filter((e) => 4 === e.renderLevel)
                .orderBy(
                    [
                        (e) => {
                            var t;
                            return (
                                (t = this.categoriesById),
                                e.record.type === x.rbe.GUILD_CATEGORY
                                    ? e.record.position
                                    : null != e.record.parent_id
                                      ? (t[e.record.parent_id]?.position ?? -1)
                                      : -1
                            );
                        },
                        (e) => (e.record.type === x.rbe.GUILD_CATEGORY ? -1 : e.record.position),
                    ],
                    ["asc", "asc"],
                )
                .value();
            this.shownChannelIds = [];
            for (let t = 0; t < e.length; t++) {
                let n = e[t];
                (t < e.length - 1 &&
                    n.record.type === x.rbe.GUILD_CATEGORY &&
                    e[t + 1]?.record.type === x.rbe.GUILD_CATEGORY) ||
                    ((t !== e.length - 1 || n.record.type !== x.rbe.GUILD_CATEGORY) && this.shownChannelIds.push(n.id));
            }
        }
        return this.shownChannelIds;
    }
    getFirstVoiceChannel(e) {
        return null;
    }
}
class el {
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
class er {
    guildActionRows;
    constructor(e, t) {
        (this.guildActionRows = e.map(String)), t && this.guildActionRows.push(String(B.n.GUILD_DIRECTORY));
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
        const { renderLevel: i, threadIds: s } = this.computeState(n);
        (this.renderLevel = i),
            (this.threadCount = r().size(s)),
            (this.threadIds = s),
            4 === i && (this.subtitle = this.computeSubtitle());
    }
    get isMuted() {
        return this.category.guild.mutedChannelIds.has(this.id);
    }
    get isCollapsed() {
        return R.A.isCollapsed(this.id);
    }
    get isFirstVoiceChannel() {
        return this.category.getFirstVoiceChannel() === this;
    }
    get lastMessageTimestamp() {
        return Math.max(b.Ay.lastMessageTimestamp(this.id), ...this.threadIds.map(b.Ay.lastMessageTimestamp));
    }
    updateChannel(e, t) {
        let n = !1;
        null != e && e !== this.record && ((this.record = e), (n = !0));
        let i = this.computeState(t);
        return (
            (i.renderLevel === this.renderLevel && r().isEqual(i.threadIds, this.threadIds)) ||
                ((this.renderLevel = i.renderLevel),
                (this.threadIds = i.threadIds),
                (this.threadCount = r().size(i.threadIds)),
                (n = !0)),
            4 === this.renderLevel && this.updateSubtitle() && (n = !0),
            n
        );
    }
    updateSubtitle() {
        let e = this.computeSubtitle();
        return !r().isEqual(this.subtitle, e) && ((this.subtitle = e), !0);
    }
    computeSubtitle() {
        return ec(this.record, this.isCollapsed || this.category.isCollapsed, this.category.guild.optInEnabled);
    }
}
class ed extends ea {
    computeState(e) {
        let {
            selectedChannel: t,
            selectedVoiceChannelId: n,
            activeJoinedRelevantThreads: i,
            activeJoinedUnreadThreads: s,
        } = e;
        if (!L.A.can(H.xB.VIEW_CHANNEL, this.record)) {
            if (this.id === n) return { renderLevel: 4, threadIds: [] };
            else if (!o.A.isChannelGatedAndVisible(this.record.guild_id, this.record.id))
                return { renderLevel: 1, threadIds: [] };
        }
        let l = this.record.parent_id,
            a = this.category.guild;
        if (eC(a, this.record)) return { renderLevel: 1, threadIds: [] };
        let d = t?.id === this.id || n === this.id,
            h = null != t && t.isThread() && t.parent_id === this.id,
            u = (d || h || (!this.category.isCollapsed && !this.isMuted) ? i[this.id] : s[this.id]) ?? {},
            c = eg(this.record, u, t, n, a.hideMutedChannels);
        return this.id !== a.moderatorReportChannelId || a.moderatorReportChannelEnabled
            ? a.optInEnabled && a.hideResourceChannels && this.record.hasFlag(P.lx.IS_GUILD_RESOURCE_CHANNEL)
                ? { renderLevel: d ? 4 : 1, threadIds: c }
                : !a.optInEnabled || a.optedInChannels.has(this.id) || (null != l && a.optedInChannels.has(l))
                  ? d || h || !r().isEmpty(c) || b.Ay.getMentionCount(this.id) > 0
                      ? { renderLevel: 4, threadIds: c }
                      : a.hideMutedChannels && a.mutedChannelIds.has(this.id)
                        ? { renderLevel: 2, threadIds: c }
                        : this.category.isCollapsed &&
                            (a.mutedChannelIds.has(this.id) ||
                                (null != l && a.mutedChannelIds.has(l)) ||
                                this.record.isGuildVocal() ||
                                this.record.type === x.rbe.GUILD_STORE ||
                                ((0, _.ig)(this.record.type) && !b.Ay.hasUnread(this.record.id)))
                          ? { renderLevel: 3, threadIds: c }
                          : { renderLevel: 4, threadIds: c }
                  : { renderLevel: 2, threadIds: c }
            : { renderLevel: 2, threadIds: c };
    }
}
class eh extends ea {
    computeState(e) {
        let { selectedChannel: t, selectedVoiceChannelId: n, activeJoinedRelevantThreads: i } = e;
        return L.A.can(H.xB.VIEW_CHANNEL, this.record)
            ? { renderLevel: 4, threadIds: eg(this.record, i[this.id] ?? {}, t, n, !1) }
            : { renderLevel: 1, threadIds: [] };
    }
}
class eo extends ea {
    computeState(e) {
        let { selectedChannel: t, selectedVoiceChannelId: n, activeJoinedRelevantThreads: i } = e;
        return L.A.can(H.xB.VIEW_CHANNEL, this.record)
            ? eI(this.category.guild, this.record, e)
                ? { renderLevel: ep(this, e) ? 4 : 3, threadIds: eg(this.record, i[this.id] ?? {}, t, n, !1) }
                : { renderLevel: 2, threadIds: [] }
            : { renderLevel: 1, threadIds: [] };
    }
}
class eu extends ed {
    getRenderLevel(e) {
        let t = this.category.guild;
        return !L.A.can(H.xB.VIEW_CHANNEL, this.record) || 4 === e || 3 === e || eC(t, this.record)
            ? 1
            : this.category.isCollapsed
              ? r().some(T.A.getVoiceStatesForChannel(this.record.id))
                  ? 4
                  : 3
              : 4;
    }
    computeState(e) {
        let t = super.computeState(e),
            n = this.getRenderLevel(t.renderLevel);
        return (
            4 === n &&
                (this.subtitle = ec(
                    this.record,
                    this.isCollapsed || this.category.isCollapsed,
                    this.category.guild.optInEnabled,
                )),
            { threadIds: [], renderLevel: n }
        );
    }
}
function ec(e, t, n) {
    switch (e.type) {
        case x.rbe.GUILD_VOICE: {
            let i = c.Ay.getActiveEventByChannel(e.id);
            if (null != i) return { type: "event", name: i.name };
            let s = D.Ay.getVoiceStatesForChannel(e);
            if (n && t && (0, M.t)(s)) return { type: "go-live" };
            let l = h.A.getChannelStatus(e);
            if (null != l && l.length > 0) return { type: "voice", text: l };
            let r = a.Ay.getEmbeddedActivitiesForChannel(e.id)
                .map((e) => d.A.getApplication(e.applicationId)?.name)
                .filter(V.Vq);
            if (r.length > 0) return { type: "embedded-activities", name: r.join(", ") };
            return null;
        }
        case x.rbe.GUILD_STAGE_VOICE: {
            let t = c.Ay.getActiveEventByChannel(e.id);
            if (null != t) return { type: "event", name: t.name };
            return null;
        }
        default:
            return null;
    }
}
function eg(e, t, n, i, s) {
    let l = null != n && (n.id === e.id || i === e.id),
        a = null != n && n.isThread() && n.parent_id === e.id;
    if (_.wE.has(e.type)) {
        let e = r()
            .sortBy(Object.values(t), (e) => -e.joinTimestamp)
            .map((e) => e.channel.id);
        return l
            ? e
            : a
              ? (n.id in t || e.unshift(n.id), e)
              : s
                ? e.filter((e) => !v.A.isMuted(e) || b.Ay.getMentionCount(e) > 0)
                : e;
    }
    return [];
}
function eC(e, t) {
    return e.favoriteChannelIds.has(t.id) && (e.optInEnabled || !1);
}
function ep(e, t) {
    let { selectedChannel: n, activeJoinedRelevantThreads: i } = t;
    if (b.Ay.getMentionCount(e.id) > 0) return !0;
    for (let t in i[e.id]) if (b.Ay.getMentionCount(t) > 0) return !0;
    if (null != n && (n.id === e.id || (n.isThread() && n.parent_id === e.id))) return !0;
    let s = A.A.getNewChannelIds(e.category.guild.id);
    if (s.size > k);
    else if (s.has(e.id)) return !0;
    return !1;
}
function eI(e, t, n) {
    let { selectedChannel: i, activeJoinedRelevantThreads: s } = n;
    if (
        t.type === x.rbe.GUILD_DIRECTORY ||
        !e.optInEnabled ||
        e.optedInChannels.has(t.id) ||
        t.isThread() ||
        (null != t.parent_id && e.optedInChannels.has(t.parent_id)) ||
        (e.hideResourceChannels && t.hasFlag(P.lx.IS_GUILD_RESOURCE_CHANNEL))
    )
        return !1;
    if (t.isGuildVocal()) {
        let n = F.A.isVoiceCategoryCollapsed(e.id);
        if (!n) return !1;
        let i = r().some(T.A.getVoiceStatesForChannel(t.id));
        if (n && i) return !1;
    }
    if ((null != i && (i.id === t.id || (i.isThread() && i.parent_id === t.id))) || b.Ay.getMentionCount(t.id) > 0)
        return !0;
    for (let e in s[t.id])
        if (b.Ay.getMentionCount(e) > 0 || b.Ay.hasUnread(e) || b.Ay.hasRecentlyVisitedAndRead(e)) return !0;
    if (e.mutedChannelIds.has(t.id) || (null != t.parent_id && e.mutedChannelIds.has(t.parent_id))) return !1;
    let l = A.A.getNewChannelIds(e.id),
        a = Array.from(l).sort((e, t) => U.default.compare(t, e));
    return !!((l.has(t.id) && a.indexOf(t.id) < k) || b.Ay.hasRecentlyVisitedAndRead(t.id));
}
let ey = new Set(Object.values(B.n));
