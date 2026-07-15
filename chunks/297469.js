n.d(t, {
    HP: () => ei,
    rR: () => ee,
    yO: () => es,
    Xt: () => et,
    xu: () => eg,
    PU: () => en,
    bK: () => el,
    go: () => e_,
    TF: () => er,
    wF: () => em,
    Ay: () => ed,
}),
    n(321073),
    n(667532);
var i = n(284009),
    s = n.n(i),
    l = n(435558),
    r = n.n(l),
    a = n(933958),
    d = n(587895),
    o = n(309698),
    h = n(717125),
    u = n(473529),
    c = n(698441),
    g = n(164956),
    C = n(17928),
    p = n(228366);
let I = {
        enable_recently_active: "Enable recently active channels",
        theme_setting_in_account_sheet: "Show theme settings in the Account action sheet",
        nav_experiment_server_drawer_enabled: "[NavI] Enable expandable server drawer",
        show_icymi_debug_scores: "Show ICYMI debug scores",
        channel_list_scrim: "Dim the channel list when chat appears",
        mana_radio_large_variant: "Larger Radio",
        mana_checkbox_large_variant: "Larger Checkbox",
        mana_switch_large_variant: "Larger Switch",
        show_header_debug_info: "Show header component debug overlays",
    },
    y = {};
class A extends C.Ay.DeviceSettingsStore {
    static displayName = "DevToolsDesignTogglesStore";
    static persistKey = "DevToolsDesignTogglesStore";
    getUserAgnosticState() {
        return { toggleStates: y };
    }
    initialize(e) {
        for (var t in I) {
            let n = e?.toggleStates?.[t] ?? !1;
            y[t] = n;
        }
    }
    get(e) {
        return y[e] ?? !1;
    }
    set(e, t) {
        return (y[e] = t), t;
    }
    all() {
        return y;
    }
    allWithDescriptions() {
        return Object.entries(y).map((e) => {
            let [t, n] = e;
            return [t, n, I[t]];
        });
    }
}
let f = new A(p.h, {
    DEV_TOOLS_DESIGN_TOGGLE_SET: function (e) {
        y[e.toggle] = e.value;
    },
});
var S = n(734057),
    v = n(309010),
    E = n(543465);
let _ = {},
    m = {},
    w = {};
function N() {
    let e = v.A.getChannelId();
    if (null == e) return;
    let t = S.A.getChannel(e);
    if (null == t || null == t.guild_id) return;
    let n = t.guild_id;
    if (
        (null == w[e] && (w[e] = 0),
        t.isThread() || (E.Ay.isOptInEnabled(n) && !E.Ay.isChannelOrParentOptedIn(n, t.id)))
    ) {
        delete w[e], null != _[n] && _[n].delete(e);
        return;
    }
    return (w[e]++, null == _[n] && (_[n] = new Set()), E.Ay.isFavorite(n, e))
        ? void _[n].delete(e)
        : (null == m[n] || !m[n].has(e)) && w[e] > 50
          ? (_[n].add(e), !0)
          : void 0;
}
class R extends C.Ay.PersistedStore {
    static displayName = "FavoritesSuggestionStore";
    static persistKey = "FavoritesSuggestionStore";
    initialize(e) {
        if ((this.waitFor(S.A, v.A, E.Ay), this.syncWith([v.A], N), null == e)) return;
        let { suggestedChannels: t, dismissedSuggestions: n, channelOpensByChannelId: i } = e;
        if (null != t) for (let e in t) _[e] = new Set(t[e]) ?? new Set();
        if (null != n) for (let e in n) m[e] = new Set(n[e]) ?? new Set();
        w = i ?? {};
    }
    getSuggestedChannelId(e) {
        return null;
    }
    getState() {
        return { suggestedChannels: {}, dismissedSuggestions: {}, channelOpensByChannelId: {} };
    }
}
let L = new R(p.h, {
        DISMISS_FAVORITE_SUGGESTION: function (e) {
            let { guildId: t, channelId: n } = e;
            return null == m[t] && (m[t] = new Set()), m[t].add(n), _[t].delete(n), !0;
        },
    }),
    b = new Set();
class O extends C.Ay.PersistedStore {
    static displayName = "RecentlyActiveCollapseStore";
    static persistKey = "RecentlyActiveCollapseStore";
    initialize(e) {
        b.clear(), e?.guilds.forEach((e) => b.add(e));
    }
    isCollapsed(e) {
        return b.has(e);
    }
    getState() {
        return { guilds: b };
    }
}
new O(p.h, {
    SET_RECENTLY_ACTIVE_COLLAPSED: function (e) {
        let { guildId: t, collapsed: n } = e;
        n ? b.add(t) : b.delete(t);
    },
});
var G = n(395504),
    T = n(454058),
    D = n(272720),
    V = n(56595),
    x = n(695633),
    U = n(152007),
    F = n(95701),
    M = n(924985),
    P = n(945886),
    B = n(71393),
    H = n(576705),
    j = n(568548),
    k = n(977997),
    Y = n(607567),
    W = n(403362),
    z = n(935208),
    K = n(669715),
    J = n(551851),
    q = n(281405),
    X = n(652215),
    Z = n(746080),
    $ = n(818348);
let Q = "placeholder-channel-id",
    ee = 2,
    et = 0,
    en = 1,
    ei = 2,
    es = 3,
    el = 4,
    er = 5,
    ea = new Set([String(q.n.GUILD_DIRECTORY)]);
class ed {
    guilds = {};
    _areGuildActionRowsUpdated(e, t) {
        return !r().isEqual(
            this.guilds[e]
                ?.getGuildActionSection()
                .getRows()
                .filter((e) => !ea.has(e)),
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
                r().some(k.A.getVoiceStatesForChannel(t.id)) &&
                j.Ay.getMentionCount(t.id) > 0
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
                (this.guilds[e] = new eo(e, t, n)),
            this.guilds[e]
        );
    }
    getGuildChannelRowsOnly(e) {
        return e in this.guilds || (this.guilds[e] = new eo(e, [], [])), this.guilds[e];
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
        let t = S.A.getBasicChannel(e);
        return (
            null != t &&
            null != t.guild_id &&
            null != this.guilds[t.guild_id] &&
            (t instanceof F.YB || null != (t = S.A.getChannel(e))) &&
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
class eo {
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
            (this.hideMutedChannels = E.Ay.isGuildCollapsed(this.id)),
            (this.mutedChannelIds = E.Ay.getMutedChannels(this.id)),
            (this.optedInChannels =
                E.Ay.getOptedInChannelsWithPendingUpdates(this.id) ?? E.Ay.getOptedInChannels(this.id)),
            (this.optInEnabled = (0, G.WW)(this.id)),
            (this.hideResourceChannels = (0, u.K)(this.id)),
            (this.favoriteChannelIds = new Set(E.Ay.getGuildFavorites(this.id) ?? [])),
            (this.suggestedFavoriteChannelId = L.getSuggestedChannelId(this.id)),
            (this.collapsedCategoryIds = M.A.getCollapsedCategories());
        const i = S.A.getMutableGuildChannelsForGuild(this.id),
            l = B.A.getGuild(this.id);
        (this.moderatorReportChannelId = null != l ? (0, D.A)(l) : null),
            (this.moderatorReportChannelEnabled = null != l && (0, V.A)(l));
        const a = {},
            d = [],
            o = {};
        for (const e in i) {
            const t = i[e];
            t.type === X.rbe.GUILD_CATEGORY && ((a[t.id] = t), (o[t.id] = []));
        }
        const h = [],
            c = [],
            g = [],
            C = this.initializationData;
        for (const e in i) {
            const t = i[e];
            if (t.type !== X.rbe.GUILD_CATEGORY) {
                if (t.type === X.rbe.GUILD_DIRECTORY) {
                    null == l || l.features.has(X.GuildFeatures.HUB) || g.push(t);
                    continue;
                }
                eR(this, t, C)
                    ? h.push(t)
                    : (t.type === X.rbe.GUILD_VOICE || t.type === X.rbe.GUILD_STAGE_VOICE) &&
                      (null != t.parent_id && null != a[t.parent_id] && c.push(a[t.parent_id]), c.push(t)),
                    null != t.parent_id && t.parent_id in o ? o[t.parent_id].push(t) : d.push(t);
            }
        }
        for (const e in ((this.categories = {}), o)) this.categories[e] = new ec(this, a[e], o[e], C);
        (this.recentsSectionNumber = es),
            (this.favoritesSectionNumber = ei),
            (this.noParentCategory = new eu(this, d, C)),
            (this.favoritesCategory = new eg(this, C)),
            (this.recentsCategory = f.get("enable_recently_active")
                ? new ChannelListRecentlyActiveCategory(this, i, C)
                : new eC(this, h, C)),
            (this.voiceChannelsCategory = new ep(this, c, a, C)),
            (this.guildActionSection = new ey(t, g.length > 0)),
            (this.channelNoticeSection = new eI(n)),
            s()(!("null" in this.categories), "somehow a null got into categories"),
            (this.voiceChannelsSectionNumber = er + r().size(this.categories));
    }
    get initializationData() {
        return {
            selectedChannel: S.A.getChannel(v.A.getChannelId()),
            selectedVoiceChannelId: v.A.getVoiceChannelId(),
            activeJoinedRelevantThreads: x.A.getActiveJoinedRelevantThreadsForGuild(this.id),
            activeJoinedUnreadThreads: x.A.getActiveJoinedUnreadThreadsForGuild(this.id),
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
            case et:
                throw Error("Invalid section. Use getChannelNoticeSection instead");
            case en:
                throw Error("Invalid section. Use getGuildActionSection instead");
            case ei:
                return this.favoritesCategory;
            case el:
                return this.noParentCategory;
            case this.recentsSectionNumber:
                return this.recentsCategory;
            case this.voiceChannelsSectionNumber:
                return this.voiceChannelsCategory;
            default:
                return this.getSortedNamedCategories()[e - er];
        }
    }
    getNamedCategoryFromSection(e) {
        return (
            (e -= er),
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
        return s()(e > en, "Invalid section"), e !== this.recentsSectionNumber && this.getRows()[e][t] === Q;
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
            if (eL.has(e)) return e;
            let t = S.A.getChannel(e);
            return t?.isDirectory() ? q.n.GUILD_DIRECTORY : null;
        })(e);
        if (null != t) return [{ row: this.getGuildActionSection().getRows().indexOf(t), section: en }];
        let n = [],
            i = S.A.getChannel(e);
        if (null == i || null == e) return n;
        let s = i.isThread();
        if ((s && (i = S.A.getChannel(i.parent_id)), null == i)) return n;
        let l = this.favoritesCategory.getShownChannelIds().indexOf(i.id);
        l >= 0 && n.push({ section: ei, row: l });
        let a = this.recentsCategory.getShownChannelIds().indexOf(i.id);
        if ((a >= 0 && n.push({ section: this.recentsSectionNumber, row: a }), i.type === X.rbe.GUILD_CATEGORY))
            return [{ section: r().findIndex(this.getSortedNamedCategories(), (e) => e.id === i?.id) + er }];
        let d = this.getCategory(i),
            o = d instanceof eu ? el : this.getSortedNamedCategories().indexOf(d) + er,
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
            l = !0,
            r = !1,
            a = [],
            d = [];
        for (let e of this.getSortedCategories()) {
            let s = t?.ignoreRecents && e === this.recentsCategory;
            for (let t of e.getShownChannelIds()) {
                let o = e.channels[t];
                l && (o.id === n.id ? (l = !1) : s || a.push(o)),
                    r && !s && d.push(o),
                    l || r || o.id !== i.id || (r = !0);
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
            let n = S.A.getChannel(e);
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
                        let n = S.A.getChannel(t);
                        null != n && e(n);
                    }
                }
    }
    forEachChannel(e, t) {
        for (let n of this.getSortedCategories())
            if (!t?.ignoreRecents || n !== this.recentsCategory) for (let t of n.getChannelRecords()) e(t);
    }
}
class eh {
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
        return 0 === e.length && this.shouldShowEmptyCategory() ? [Q] : e;
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
class eu extends eh {
    constructor(e, t, n) {
        super(e),
            (this.channels = r()(t)
                .map((e) => new ef(this, e, n))
                .keyBy((e) => e.id)
                .value());
    }
}
class ec extends eh {
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
            this.channels[s.id] = new ef(this, s, i);
    }
    shouldShowEmptyCategory() {
        return !!(
            super.shouldShowEmptyCategory() ||
            (H.A.can($.xB.MANAGE_CHANNELS, this.record) &&
                H.A.can($.xB.VIEW_CHANNEL, this.record) &&
                r().isEmpty(this.channels) &&
                (!this.guild.optInEnabled || this.guild.optedInChannels.has(this.id)))
        );
    }
}
class eg extends eh {
    constructor(e, t) {
        super(e),
            (this.channels = r()(E.Ay.getGuildFavorites(e.id) ?? [])
                .map((e) => S.A.getChannel(e))
                .filter(W.Vq)
                .map((e) => new eS(this, e, t))
                .keyBy((e) => e.id)
                .value());
        const n = L.getSuggestedChannelId(e.id),
            i = S.A.getChannel(n);
        null != i &&
            null != n &&
            (this.channels[n] = new eS(this, i, {
                ...t,
                activeJoinedRelevantThreads: {},
                activeJoinedUnreadThreads: {},
            }));
    }
    updateChannel(e, t) {
        let n = e.id in this.channels && E.Ay.isFavorite(e.guild_id, e.id),
            i = L.getSuggestedChannelId(e.guild_id);
        return (e.id !== i || n || (t = { ...t, activeJoinedRelevantThreads: {}, activeJoinedUnreadThreads: {} }),
        e.id in this.channels && this.channels[e.id].updateChannel(e, t))
            ? (this.invalidate(), !0)
            : e.id in this.channels && e.id !== i && !n && (delete this.channels[e.id], this.invalidate(), !0);
    }
    getFirstVoiceChannel(e) {
        return null;
    }
}
class eC extends eh {
    constructor(e, t, n) {
        if ((super(e), !e.optInEnabled || g.A.isFullServerPreview(e.id))) return;
        (this.isCollapsed = !1),
            (this.isMuted = !1),
            (this.channels = r()(t)
                .map((e) => new ev(this, e, n))
                .keyBy((e) => e.id)
                .value());
    }
    updateAllChannels(e) {
        let t = !1;
        return (
            z.default.keys(this.channels).forEach((n) => {
                this.updateChannel(this.channels[n].record, e) && (t = !0);
            }),
            t
        );
    }
    updateChannel(e, t) {
        let n = super.updateChannel(e, t);
        if (this.guild.optInEnabled) {
            let n = this.channels[e.id];
            if (eR(this.guild, e, t) && null == n)
                return (this.channels[e.id] = new ev(this, e, t)), this.invalidate(), !0;
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
class ep extends eh {
    categoriesById;
    hiddenChannelIds = null;
    constructor(e, t, n, i) {
        if ((super(e), (this.categoriesById = n), !e.optInEnabled)) return;
        (this.isCollapsed = J.A.isVoiceCategoryCollapsed(e.id)),
            (this.isMuted = !1),
            (this.categoriesById = n),
            (this.channels = r()(t)
                .map((e) => new eE(this, e, i))
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
        return 0 === e.length && this.getHiddenChannelIds().length > 0 ? [Q] : e;
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
                                e.record.type === X.rbe.GUILD_CATEGORY
                                    ? e.record.position
                                    : null != e.record.parent_id
                                      ? (t[e.record.parent_id]?.position ?? -1)
                                      : -1
                            );
                        },
                        (e) => (e.record.type === X.rbe.GUILD_CATEGORY ? -1 : e.record.position),
                    ],
                    ["asc", "asc"],
                )
                .value();
            this.shownChannelIds = [];
            for (let t = 0; t < e.length; t++) {
                let n = e[t];
                (t < e.length - 1 &&
                    n.record.type === X.rbe.GUILD_CATEGORY &&
                    e[t + 1]?.record.type === X.rbe.GUILD_CATEGORY) ||
                    ((t !== e.length - 1 || n.record.type !== X.rbe.GUILD_CATEGORY) && this.shownChannelIds.push(n.id));
            }
        }
        return this.shownChannelIds;
    }
    getFirstVoiceChannel(e) {
        return null;
    }
}
class eI {
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
class ey {
    guildActionRows;
    constructor(e, t) {
        (this.guildActionRows = e.map(String)), t && this.guildActionRows.push(String(q.n.GUILD_DIRECTORY));
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
class eA {
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
        return P.A.isCollapsed(this.id);
    }
    get isFirstVoiceChannel() {
        return this.category.getFirstVoiceChannel() === this;
    }
    get lastMessageTimestamp() {
        return Math.max(j.Ay.lastMessageTimestamp(this.id), ...this.threadIds.map(j.Ay.lastMessageTimestamp));
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
        return e_(this.record, this.isCollapsed || this.category.isCollapsed, this.category.guild.optInEnabled);
    }
}
class ef extends eA {
    computeState(e) {
        let {
            selectedChannel: t,
            selectedVoiceChannelId: n,
            activeJoinedRelevantThreads: i,
            activeJoinedUnreadThreads: s,
        } = e;
        if (!H.A.can($.xB.VIEW_CHANNEL, this.record)) {
            if (this.id === n) return { renderLevel: 4, threadIds: [] };
            else if (!h.A.isChannelGatedAndVisible(this.record.guild_id, this.record.id))
                return { renderLevel: 1, threadIds: [] };
        }
        let l = this.record.parent_id,
            a = this.category.guild;
        if (ew(a, this.record)) return { renderLevel: 1, threadIds: [] };
        let d = t?.id === this.id || n === this.id,
            o = null != t && t.isThread() && t.parent_id === this.id,
            u = (d || o || (!this.category.isCollapsed && !this.isMuted) ? i[this.id] : s[this.id]) ?? {},
            c = em(this.record, u, t, n, a.hideMutedChannels);
        return this.id !== a.moderatorReportChannelId || a.moderatorReportChannelEnabled
            ? a.optInEnabled && a.hideResourceChannels && this.record.hasFlag(Z.lx.IS_GUILD_RESOURCE_CHANNEL)
                ? { renderLevel: d ? 4 : 1, threadIds: c }
                : !a.optInEnabled || a.optedInChannels.has(this.id) || (null != l && a.optedInChannels.has(l))
                  ? d || o || !r().isEmpty(c) || j.Ay.getMentionCount(this.id) > 0
                      ? { renderLevel: 4, threadIds: c }
                      : a.hideMutedChannels && a.mutedChannelIds.has(this.id)
                        ? { renderLevel: 2, threadIds: c }
                        : this.category.isCollapsed &&
                            (a.mutedChannelIds.has(this.id) ||
                                (null != l && a.mutedChannelIds.has(l)) ||
                                this.record.isGuildVocal() ||
                                this.record.type === X.rbe.GUILD_STORE ||
                                ((0, F.ig)(this.record.type) && !j.Ay.hasUnread(this.record.id)))
                          ? { renderLevel: 3, threadIds: c }
                          : { renderLevel: 4, threadIds: c }
                  : { renderLevel: 2, threadIds: c }
            : { renderLevel: 2, threadIds: c };
    }
}
class eS extends eA {
    computeState(e) {
        let { selectedChannel: t, selectedVoiceChannelId: n, activeJoinedRelevantThreads: i } = e;
        return H.A.can($.xB.VIEW_CHANNEL, this.record)
            ? { renderLevel: 4, threadIds: em(this.record, i[this.id] ?? {}, t, n, !1) }
            : { renderLevel: 1, threadIds: [] };
    }
}
class ev extends eA {
    computeState(e) {
        let { selectedChannel: t, selectedVoiceChannelId: n, activeJoinedRelevantThreads: i } = e;
        return H.A.can($.xB.VIEW_CHANNEL, this.record)
            ? eR(this.category.guild, this.record, e)
                ? { renderLevel: eN(this, e) ? 4 : 3, threadIds: em(this.record, i[this.id] ?? {}, t, n, !1) }
                : { renderLevel: 2, threadIds: [] }
            : { renderLevel: 1, threadIds: [] };
    }
}
class eE extends ef {
    getRenderLevel(e) {
        let t = this.category.guild;
        return !H.A.can($.xB.VIEW_CHANNEL, this.record) || 4 === e || 3 === e || ew(t, this.record)
            ? 1
            : this.category.isCollapsed
              ? r().some(k.A.getVoiceStatesForChannel(this.record.id))
                  ? 4
                  : 3
              : 4;
    }
    computeState(e) {
        let t = super.computeState(e),
            n = this.getRenderLevel(t.renderLevel);
        return (
            4 === n &&
                (this.subtitle = e_(
                    this.record,
                    this.isCollapsed || this.category.isCollapsed,
                    this.category.guild.optInEnabled,
                )),
            { threadIds: [], renderLevel: n }
        );
    }
}
function e_(e, t, n) {
    switch (e.type) {
        case X.rbe.GUILD_VOICE: {
            let i = c.Ay.getActiveEventByChannel(e.id);
            if (null != i) return { type: "event", name: i.name };
            let s = Y.Ay.getVoiceStatesForChannel(e);
            if (n && t && (0, K.t)(s)) return { type: "go-live" };
            let l = o.A.getChannelStatus(e);
            if (null != l && l.length > 0) return { type: "voice", text: l };
            let r = a.Ay.getEmbeddedActivitiesForChannel(e.id)
                .map((e) => d.A.getApplication(e.applicationId)?.name)
                .filter(W.Vq);
            if (r.length > 0) return { type: "embedded-activities", name: r.join(", ") };
            return null;
        }
        case X.rbe.GUILD_STAGE_VOICE: {
            let t = c.Ay.getActiveEventByChannel(e.id);
            if (null != t) return { type: "event", name: t.name };
            return null;
        }
        default:
            return null;
    }
}
function em(e, t, n, i, s) {
    let l = null != n && (n.id === e.id || i === e.id),
        a = null != n && n.isThread() && n.parent_id === e.id;
    if (F.wE.has(e.type)) {
        let e = r()
            .sortBy(Object.values(t), (e) => -e.joinTimestamp)
            .map((e) => e.channel.id);
        return l
            ? e
            : a
              ? (n.id in t || e.unshift(n.id), e)
              : s
                ? e.filter((e) => !U.A.isMuted(e) || j.Ay.getMentionCount(e) > 0)
                : e;
    }
    return [];
}
function ew(e, t) {
    return e.favoriteChannelIds.has(t.id);
}
function eN(e, t) {
    let { selectedChannel: n, activeJoinedRelevantThreads: i } = t;
    if (j.Ay.getMentionCount(e.id) > 0) return !0;
    for (let t in i[e.id]) if (j.Ay.getMentionCount(t) > 0) return !0;
    if (null != n && (n.id === e.id || (n.isThread() && n.parent_id === e.id))) return !0;
    let s = T.A.getNewChannelIds(e.category.guild.id);
    if (s.size > ee);
    else if (s.has(e.id)) return !0;
    return !1;
}
function eR(e, t, n) {
    let { selectedChannel: i, activeJoinedRelevantThreads: s } = n;
    if (
        t.type === X.rbe.GUILD_DIRECTORY ||
        !e.optInEnabled ||
        e.optedInChannels.has(t.id) ||
        t.isThread() ||
        (null != t.parent_id && e.optedInChannels.has(t.parent_id)) ||
        (e.hideResourceChannels && t.hasFlag(Z.lx.IS_GUILD_RESOURCE_CHANNEL)) ||
        (t.isGuildVocal() && (!J.A.isVoiceCategoryCollapsed(e.id) || r().some(k.A.getVoiceStatesForChannel(t.id))))
    )
        return !1;
    if ((null != i && (i.id === t.id || (i.isThread() && i.parent_id === t.id))) || j.Ay.getMentionCount(t.id) > 0)
        return !0;
    for (let e in s[t.id])
        if (j.Ay.getMentionCount(e) > 0 || j.Ay.hasUnread(e) || j.Ay.hasRecentlyVisitedAndRead(e)) return !0;
    if (e.mutedChannelIds.has(t.id) || (null != t.parent_id && e.mutedChannelIds.has(t.parent_id))) return !1;
    let l = T.A.getNewChannelIds(e.id),
        a = Array.from(l).sort((e, t) => z.default.compare(t, e));
    return !!((l.has(t.id) && a.indexOf(t.id) < ee) || j.Ay.hasRecentlyVisitedAndRead(t.id));
}
let eL = new Set(Object.values(q.n));
