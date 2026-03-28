n.d(t, {
    Ay: () => X,
    HP: () => J,
    PU: () => K,
    TF: () => $,
    Xt: () => z,
    bK: () => q,
    go: () => eC,
    rR: () => j,
    wF: () => eA,
    xu: () => es,
    yO: () => Z,
}),
    n(321073),
    n(667532);
var i = n(284009),
    s = n.n(i),
    r = n(735438),
    l = n.n(r),
    a = n(933958),
    d = n(587895),
    o = n(309698),
    h = n(717125),
    u = n(473529),
    c = n(698441),
    g = n(581007),
    C = n(522435),
    A = n(164956),
    I = n(99712),
    _ = n(240935),
    p = n(50827),
    E = n(395504),
    S = n(454058),
    y = n(272720),
    f = n(56595),
    v = n(863005),
    L = n(152007),
    m = n(95701),
    N = n(924985),
    w = n(734057),
    G = n(945886),
    T = n(71393),
    b = n(576705),
    O = n(222823),
    R = n(309010),
    D = n(543465),
    F = n(977997),
    P = n(607567),
    U = n(403362),
    V = n(661191),
    W = n(669715),
    x = n(551851),
    k = n(281405),
    B = n(652215),
    M = n(746080),
    H = n(818348);
let Y = "placeholder-channel-id",
    j = 2,
    z = 0,
    K = 1,
    J = 2,
    Z = 3,
    q = 4,
    $ = 5,
    Q = new Set([String(k.n.GUILD_DIRECTORY)]);
class X {
    guilds = {};
    _areGuildActionRowsUpdated(e, t) {
        return !l().isEqual(
            this.guilds[e]
                ?.getGuildActionSection()
                .getRows()
                .filter((e) => !Q.has(e)),
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
            i = t.getCategoryFromSection(t.recentsSectionNumber);
        for (let e in i.channels) {
            let t = i.channels[e];
            if (
                2 === t.renderLevel &&
                t.record.isGuildVocal() &&
                null == n.channels[t.id] &&
                l().some(F.A.getVoiceStatesForChannel(t.id)) &&
                O.Ay.getMentionCount(t.id) > 0
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
                (this.guilds[e] = new ee(e, t, n)),
            this.guilds[e]
        );
    }
    getGuildChannelRowsOnly(e) {
        return e in this.guilds || (this.guilds[e] = new ee(e, [], [])), this.guilds[e];
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
        let t = w.A.getBasicChannel(e);
        return (
            null != t &&
            null != t.guild_id &&
            null != this.guilds[t.guild_id] &&
            (t instanceof m.YB || null != (t = w.A.getChannel(e))) &&
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
class ee {
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
            (this.hideMutedChannels = D.Ay.isGuildCollapsed(this.id)),
            (this.mutedChannelIds = D.Ay.getMutedChannels(this.id)),
            (this.optedInChannels =
                D.Ay.getOptedInChannelsWithPendingUpdates(this.id) ?? D.Ay.getOptedInChannels(this.id)),
            (this.optInEnabled = (0, E.WW)(this.id)),
            (this.hideResourceChannels = (0, u.K)(this.id)),
            (this.favoriteChannelIds = new Set(D.Ay.getGuildFavorites(this.id) ?? [])),
            (this.suggestedFavoriteChannelId = _.A.getSuggestedChannelId(this.id)),
            (this.collapsedCategoryIds = N.A.getCollapsedCategories());
        const i = w.A.getMutableGuildChannelsForGuild(this.id),
            r = T.A.getGuild(this.id);
        (this.moderatorReportChannelId = null != r ? (0, y.A)(r) : null),
            (this.moderatorReportChannelEnabled = null != r && (0, f.A)(r));
        const a = {},
            d = [],
            o = {};
        for (const e in i) {
            const t = i[e];
            t.type === B.rbe.GUILD_CATEGORY && ((a[t.id] = t), (o[t.id] = []));
        }
        const h = [],
            c = [],
            g = [],
            C = this.initializationData;
        for (const e in i) {
            const t = i[e];
            if (t.type !== B.rbe.GUILD_CATEGORY) {
                if (t.type === B.rbe.GUILD_DIRECTORY) {
                    null == r || r.features.has(B.GuildFeatures.HUB) || g.push(t);
                    continue;
                }
                ep(this, t, C)
                    ? h.push(t)
                    : (t.type === B.rbe.GUILD_VOICE || t.type === B.rbe.GUILD_STAGE_VOICE) &&
                      (null != t.parent_id && null != a[t.parent_id] && c.push(a[t.parent_id]), c.push(t)),
                    null != t.parent_id && t.parent_id in o ? o[t.parent_id].push(t) : d.push(t);
            }
        }
        for (const e in ((this.categories = {}), o)) this.categories[e] = new ei(this, a[e], o[e], C);
        (this.recentsSectionNumber = Z),
            (this.favoritesSectionNumber = J),
            (this.noParentCategory = new en(this, d, C)),
            (this.favoritesCategory = new es(this, C)),
            (this.recentsCategory = (0, I.i)()
                ? new ChannelListRecentlyActiveCategory(this, i, C)
                : new er(this, h, C)),
            (this.voiceChannelsCategory = new el(this, c, a, C)),
            (this.guildActionSection = new ed(t, g.length > 0)),
            (this.channelNoticeSection = new ea(n)),
            s()(!("null" in this.categories), "somehow a null got into categories"),
            (this.voiceChannelsSectionNumber = $ + l().size(this.categories));
    }
    get initializationData() {
        return {
            selectedChannel: w.A.getChannel(R.A.getChannelId()),
            selectedVoiceChannelId: R.A.getVoiceChannelId(),
            activeJoinedRelevantThreads: v.A.getActiveJoinedRelevantThreadsForGuild(this.id),
            activeJoinedUnreadThreads: v.A.getActiveJoinedUnreadThreadsForGuild(this.id),
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
            case z:
                throw Error("Invalid section. Use getChannelNoticeSection instead");
            case K:
                throw Error("Invalid section. Use getGuildActionSection instead");
            case J:
                return this.favoritesCategory;
            case q:
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
        return s()(e > K, "Invalid section"), e !== this.recentsSectionNumber && this.getRows()[e][t] === Y;
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
            if (eE.has(e)) return e;
            let t = w.A.getChannel(e);
            return t?.isDirectory() ? k.n.GUILD_DIRECTORY : null;
        })(e);
        if (null != t) return [{ row: this.getGuildActionSection().getRows().indexOf(t), section: K }];
        let n = [],
            i = w.A.getChannel(e);
        if (null == i || null == e) return n;
        let s = i.isThread();
        if ((s && (i = w.A.getChannel(i.parent_id)), null == i)) return n;
        let r = this.favoritesCategory.getShownChannelIds().indexOf(i.id);
        r >= 0 && n.push({ section: J, row: r });
        let a = this.recentsCategory.getShownChannelIds().indexOf(i.id);
        if ((a >= 0 && n.push({ section: this.recentsSectionNumber, row: a }), i.type === B.rbe.GUILD_CATEGORY))
            return [{ section: l().findIndex(this.getSortedNamedCategories(), (e) => e.id === i?.id) + $ }];
        let d = this.getCategory(i),
            o = d instanceof en ? q : this.getSortedNamedCategories().indexOf(d) + $,
            h = d.getShownChannelIds().indexOf(i.id);
        if (o >= 0 && h >= 0) {
            let t = s ? d.channels[i.id].threadIds.indexOf(e) : 0;
            n.push({ section: o, row: h, threadOffset: t });
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
            r = !0,
            l = !1,
            a = [],
            d = [];
        for (let e of this.getSortedCategories()) {
            let s = t?.ignoreRecents && e === this.recentsCategory;
            for (let t of e.getShownChannelIds()) {
                let o = e.channels[t];
                r && (o.id === n.id ? (r = !1) : s || a.push(o)),
                    l && !s && d.push(o),
                    r || l || o.id !== i.id || (l = !0);
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
            let n = w.A.getChannel(e);
            if (null != n)
                if (n.id in this.favoritesCategory.channels) t = [this.favoritesCategory.channels[n.id]];
                else if (n.id in this.recentsCategory.channels) t = [this.recentsCategory.channels[n.id]];
                else {
                    let i = this.getCategory(n);
                    null != i && null != i.channels[e] && (t = [i.channels[e]]);
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
                    let i = n.channels[t];
                    for (let t of (e(i.record), i.threadIds)) {
                        let n = w.A.getChannel(t);
                        null != n && e(n);
                    }
                }
    }
    forEachChannel(e, t) {
        for (let n of this.getSortedCategories())
            if (!t?.ignoreRecents || n !== this.recentsCategory) for (let t of n.getChannelRecords()) e(t);
    }
}
class et {
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
class en extends et {
    constructor(e, t, n) {
        super(e),
            (this.channels = l()(t)
                .map((e) => new eh(this, e, n))
                .keyBy((e) => e.id)
                .value());
    }
}
class ei extends et {
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
            this.channels[s.id] = new eh(this, s, i);
    }
    shouldShowEmptyCategory() {
        return !!(
            super.shouldShowEmptyCategory() ||
            (b.A.can(H.xB.MANAGE_CHANNELS, this.record) &&
                b.A.can(H.xB.VIEW_CHANNEL, this.record) &&
                l().isEmpty(this.channels) &&
                (!this.guild.optInEnabled || this.guild.optedInChannels.has(this.id)))
        );
    }
}
class es extends et {
    constructor(e, t) {
        if ((super(e), !e.optInEnabled)) return;
        this.channels = l()(D.Ay.getGuildFavorites(e.id) ?? [])
            .map((e) => w.A.getChannel(e))
            .filter(U.Vq)
            .map((e) => new eu(this, e, t))
            .keyBy((e) => e.id)
            .value();
        const n = _.A.getSuggestedChannelId(e.id),
            i = w.A.getChannel(n);
        null != i &&
            null != n &&
            (this.channels[n] = new eu(this, i, {
                ...t,
                activeJoinedRelevantThreads: {},
                activeJoinedUnreadThreads: {},
            }));
    }
    updateChannel(e, t) {
        let n = e.id in this.channels && D.Ay.isFavorite(e.guild_id, e.id),
            i = _.A.getSuggestedChannelId(e.guild_id);
        return (e.id !== i || n || (t = { ...t, activeJoinedRelevantThreads: {}, activeJoinedUnreadThreads: {} }),
        e.id in this.channels && this.channels[e.id].updateChannel(e, t))
            ? (this.invalidate(), !0)
            : e.id in this.channels && e.id !== i && !n && (delete this.channels[e.id], this.invalidate(), !0);
    }
    getFirstVoiceChannel(e) {
        return null;
    }
}
class er extends et {
    constructor(e, t, n) {
        if ((super(e), !e.optInEnabled || A.A.isFullServerPreview(e.id))) return;
        (this.isCollapsed = !1),
            (this.isMuted = !1),
            (this.channels = l()(t)
                .map((e) => new ec(this, e, n))
                .keyBy((e) => e.id)
                .value());
    }
    updateAllChannels(e) {
        let t = !1;
        return (
            V.default.keys(this.channels).forEach((n) => {
                this.updateChannel(this.channels[n].record, e) && (t = !0);
            }),
            t
        );
    }
    updateChannel(e, t) {
        let n = super.updateChannel(e, t);
        if (this.guild.optInEnabled) {
            let n = this.channels[e.id];
            if (ep(this.guild, e, t) && null == n)
                return (this.channels[e.id] = new ec(this, e, t)), this.invalidate(), !0;
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
class el extends et {
    categoriesById;
    hiddenChannelIds = null;
    constructor(e, t, n, i) {
        if ((super(e), (this.categoriesById = n), !e.optInEnabled)) return;
        (this.isCollapsed = x.A.isVoiceCategoryCollapsed(e.id)),
            (this.isMuted = !1),
            (this.categoriesById = n),
            (this.channels = l()(t)
                .map((e) => new eg(this, e, i))
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
        return 0 === e.length && this.getHiddenChannelIds().length > 0 ? [Y] : e;
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
                                e.record.type === B.rbe.GUILD_CATEGORY
                                    ? e.record.position
                                    : null != e.record.parent_id
                                      ? (t[e.record.parent_id]?.position ?? -1)
                                      : -1
                            );
                        },
                        (e) => (e.record.type === B.rbe.GUILD_CATEGORY ? -1 : e.record.position),
                    ],
                    ["asc", "asc"],
                )
                .value();
            this.shownChannelIds = [];
            for (let t = 0; t < e.length; t++) {
                let n = e[t];
                (t < e.length - 1 &&
                    n.record.type === B.rbe.GUILD_CATEGORY &&
                    e[t + 1]?.record.type === B.rbe.GUILD_CATEGORY) ||
                    ((t !== e.length - 1 || n.record.type !== B.rbe.GUILD_CATEGORY) && this.shownChannelIds.push(n.id));
            }
        }
        return this.shownChannelIds;
    }
    getFirstVoiceChannel(e) {
        return null;
    }
}
class ea {
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
class ed {
    guildActionRows;
    constructor(e, t) {
        (this.guildActionRows = e.map(String)), t && this.guildActionRows.push(String(k.n.GUILD_DIRECTORY));
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
class eo {
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
            (this.threadCount = l().size(s)),
            (this.threadIds = s),
            4 === i && (this.subtitle = this.computeSubtitle());
    }
    get isMuted() {
        return this.category.guild.mutedChannelIds.has(this.id);
    }
    get isCollapsed() {
        return G.A.isCollapsed(this.id);
    }
    get isFirstVoiceChannel() {
        return this.category.getFirstVoiceChannel() === this;
    }
    get lastMessageTimestamp() {
        return Math.max(O.Ay.lastMessageTimestamp(this.id), ...this.threadIds.map(O.Ay.lastMessageTimestamp));
    }
    updateChannel(e, t) {
        let n = !1;
        null != e && e !== this.record && ((this.record = e), (n = !0));
        let i = this.computeState(t);
        return (
            (i.renderLevel === this.renderLevel && l().isEqual(i.threadIds, this.threadIds)) ||
                ((this.renderLevel = i.renderLevel),
                (this.threadIds = i.threadIds),
                (this.threadCount = l().size(i.threadIds)),
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
        return eC(this.record, this.isCollapsed || this.category.isCollapsed, this.category.guild.optInEnabled);
    }
}
class eh extends eo {
    computeState(e) {
        let {
            selectedChannel: t,
            selectedVoiceChannelId: n,
            activeJoinedRelevantThreads: i,
            activeJoinedUnreadThreads: s,
        } = e;
        if (!b.A.can(H.xB.VIEW_CHANNEL, this.record)) {
            if (this.id === n) return { renderLevel: 4, threadIds: [] };
            else if (!h.A.isChannelGatedAndVisible(this.record.guild_id, this.record.id))
                return { renderLevel: 1, threadIds: [] };
        }
        let r = this.record.parent_id,
            a = this.category.guild;
        if (eI(a, this.record)) return { renderLevel: 1, threadIds: [] };
        let d = t?.id === this.id || n === this.id,
            o = null != t && t.isThread() && t.parent_id === this.id,
            u = (d || o || (!this.category.isCollapsed && !this.isMuted) ? i[this.id] : s[this.id]) ?? {},
            c = eA(this.record, u, t, n, a.hideMutedChannels);
        return this.id !== a.moderatorReportChannelId || a.moderatorReportChannelEnabled
            ? a.optInEnabled && a.hideResourceChannels && this.record.hasFlag(M.lx.IS_GUILD_RESOURCE_CHANNEL)
                ? { renderLevel: d ? 4 : 1, threadIds: c }
                : !a.optInEnabled || a.optedInChannels.has(this.id) || (null != r && a.optedInChannels.has(r))
                  ? d || o || !l().isEmpty(c) || O.Ay.getMentionCount(this.id) > 0
                      ? { renderLevel: 4, threadIds: c }
                      : a.hideMutedChannels && a.mutedChannelIds.has(this.id)
                        ? { renderLevel: 2, threadIds: c }
                        : this.category.isCollapsed &&
                            (a.mutedChannelIds.has(this.id) ||
                                (null != r && a.mutedChannelIds.has(r)) ||
                                this.record.isGuildVocal() ||
                                this.record.type === B.rbe.GUILD_STORE ||
                                ((0, m.ig)(this.record.type) && !O.Ay.hasUnread(this.record.id)))
                          ? { renderLevel: 3, threadIds: c }
                          : { renderLevel: 4, threadIds: c }
                  : { renderLevel: 2, threadIds: c }
            : { renderLevel: 2, threadIds: c };
    }
}
class eu extends eo {
    computeState(e) {
        let { selectedChannel: t, selectedVoiceChannelId: n, activeJoinedRelevantThreads: i } = e;
        return b.A.can(H.xB.VIEW_CHANNEL, this.record)
            ? { renderLevel: 4, threadIds: eA(this.record, i[this.id] ?? {}, t, n, !1) }
            : { renderLevel: 1, threadIds: [] };
    }
}
class ec extends eo {
    computeState(e) {
        let { selectedChannel: t, selectedVoiceChannelId: n, activeJoinedRelevantThreads: i } = e;
        return b.A.can(H.xB.VIEW_CHANNEL, this.record)
            ? ep(this.category.guild, this.record, e)
                ? { renderLevel: e_(this, e) ? 4 : 3, threadIds: eA(this.record, i[this.id] ?? {}, t, n, !1) }
                : { renderLevel: 2, threadIds: [] }
            : { renderLevel: 1, threadIds: [] };
    }
}
class eg extends eh {
    getRenderLevel(e) {
        let t = this.category.guild;
        return !b.A.can(H.xB.VIEW_CHANNEL, this.record) || 4 === e || 3 === e || eI(t, this.record)
            ? 1
            : this.category.isCollapsed
              ? l().some(F.A.getVoiceStatesForChannel(this.record.id))
                  ? 4
                  : 3
              : 4;
    }
    computeState(e) {
        let t = super.computeState(e),
            n = this.getRenderLevel(t.renderLevel);
        return (
            4 === n &&
                (this.subtitle = eC(
                    this.record,
                    this.isCollapsed || this.category.isCollapsed,
                    this.category.guild.optInEnabled,
                )),
            { threadIds: [], renderLevel: n }
        );
    }
}
function eC(e, t, n) {
    switch (e.type) {
        case B.rbe.GUILD_VOICE: {
            let i = c.Ay.getActiveEventByChannel(e.id);
            if (null != i) return { type: "event", name: i.name };
            let s = P.Ay.getVoiceStatesForChannel(e);
            if (n && t && (0, W.t)(s)) return { type: "go-live" };
            let r = o.A.getChannelStatus(e),
                { enableHangoutWindow: l } = (0, g.kY)({ guildId: e.guild_id, location: "ChannelListState" });
            if (null != r && r.length > 0 && !(l && (0, C.TP)(r))) return { type: "voice", text: r };
            let h = a.Ay.getEmbeddedActivitiesForChannel(e.id)
                .map((e) => d.A.getApplication(e.applicationId)?.name)
                .filter(U.Vq);
            if (h.length > 0) return { type: "embedded-activities", name: h.join(", ") };
            return null;
        }
        case B.rbe.GUILD_STAGE_VOICE: {
            let t = c.Ay.getActiveEventByChannel(e.id);
            if (null != t) return { type: "event", name: t.name };
            return null;
        }
        default:
            return null;
    }
}
function eA(e, t, n, i, s) {
    let r = null != n && (n.id === e.id || i === e.id),
        a = null != n && n.isThread() && n.parent_id === e.id;
    if (m.wE.has(e.type)) {
        let e = l()
            .sortBy(Object.values(t), (e) => -e.joinTimestamp)
            .map((e) => e.channel.id);
        return r
            ? e
            : a
              ? (n.id in t || e.unshift(n.id), e)
              : s
                ? e.filter((e) => !L.A.isMuted(e) || O.Ay.getMentionCount(e) > 0)
                : e;
    }
    return [];
}
function eI(e, t) {
    return e.favoriteChannelIds.has(t.id) && (e.optInEnabled || !1);
}
function e_(e, t) {
    let { selectedChannel: n, activeJoinedRelevantThreads: i } = t;
    if (O.Ay.getMentionCount(e.id) > 0) return !0;
    for (let t in i[e.id]) if (O.Ay.getMentionCount(t) > 0) return !0;
    if (null != n && (n.id === e.id || (n.isThread() && n.parent_id === e.id))) return !0;
    let s = S.A.getNewChannelIds(e.category.guild.id);
    if (s.size > j);
    else if (s.has(e.id)) return !0;
    return !1;
}
function ep(e, t, n) {
    let { selectedChannel: i, activeJoinedRelevantThreads: s } = n;
    if (
        t.type === B.rbe.GUILD_DIRECTORY ||
        !e.optInEnabled ||
        e.optedInChannels.has(t.id) ||
        t.isThread() ||
        (null != t.parent_id && e.optedInChannels.has(t.parent_id)) ||
        (e.hideResourceChannels && t.hasFlag(M.lx.IS_GUILD_RESOURCE_CHANNEL)) ||
        (t.isGuildVocal() && (!x.A.isVoiceCategoryCollapsed(e.id) || l().some(F.A.getVoiceStatesForChannel(t.id))))
    )
        return !1;
    if ((null != i && (i.id === t.id || (i.isThread() && i.parent_id === t.id))) || O.Ay.getMentionCount(t.id) > 0)
        return !0;
    for (let e in s[t.id])
        if (O.Ay.getMentionCount(e) > 0 || O.Ay.hasUnread(e) || O.Ay.hasRecentlyVisitedAndRead(e)) return !0;
    if (e.mutedChannelIds.has(t.id) || (null != t.parent_id && e.mutedChannelIds.has(t.parent_id))) return !1;
    let r = S.A.getNewChannelIds(e.id),
        a = Array.from(r).sort((e, t) => V.default.compare(t, e));
    return !!((r.has(t.id) && a.indexOf(t.id) < j) || O.Ay.hasRecentlyVisitedAndRead(t.id));
}
let eE = new Set(Object.values(k.n));
