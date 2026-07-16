"use strict";
n.d(t, {
    HP: () => ei,
    rR: () => ee,
    yO: () => er,
    Xt: () => et,
    xu: () => eE,
    PU: () => en,
    bK: () => ea,
    go: () => eN,
    TF: () => es,
    wF: () => eC,
    Ay: () => eo,
}),
    n(321073),
    n(667532);
var i = n(284009),
    r = n.n(i),
    a = n(435558),
    s = n.n(a),
    l = n(933958),
    o = n(587895),
    d = n(309698),
    c = n(717125),
    u = n(473529),
    _ = n(698441),
    E = n(164956),
    A = n(17928),
    h = n(228366);
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
    f = {};
class p extends A.Ay.DeviceSettingsStore {
    static displayName = "DevToolsDesignTogglesStore";
    static persistKey = "DevToolsDesignTogglesStore";
    getUserAgnosticState() {
        return { toggleStates: f };
    }
    initialize(e) {
        for (var t in I) {
            let n = e?.toggleStates?.[t] ?? !1;
            f[t] = n;
        }
    }
    get(e) {
        return f[e] ?? !1;
    }
    set(e, t) {
        return (f[e] = t), t;
    }
    all() {
        return f;
    }
    allWithDescriptions() {
        return Object.entries(f).map((e) => {
            let [t, n] = e;
            return [t, n, I[t]];
        });
    }
}
let T = new p(h.h, {
    DEV_TOOLS_DESIGN_TOGGLE_SET: function (e) {
        f[e.toggle] = e.value;
    },
});
var m = n(734057),
    g = n(309010),
    S = n(543465);
let N = {},
    C = {},
    R = {};
function O() {
    let e = g.Ay.getChannelId();
    if (null == e) return;
    let t = m.A.getChannel(e);
    if (null == t || null == t.guild_id) return;
    let n = t.guild_id;
    if (
        (null == R[e] && (R[e] = 0),
        t.isThread() || (S.Ay.isOptInEnabled(n) && !S.Ay.isChannelOrParentOptedIn(n, t.id)))
    ) {
        delete R[e], null != N[n] && N[n].delete(e);
        return;
    }
    return (R[e]++, null == N[n] && (N[n] = new Set()), S.Ay.isFavorite(n, e))
        ? void N[n].delete(e)
        : (null == C[n] || !C[n].has(e)) && R[e] > 50
          ? (N[n].add(e), !0)
          : void 0;
}
class L extends A.Ay.PersistedStore {
    static displayName = "FavoritesSuggestionStore";
    static persistKey = "FavoritesSuggestionStore";
    initialize(e) {
        if ((this.waitFor(m.A, g.Ay, S.Ay), this.syncWith([g.Ay], O), null == e)) return;
        let { suggestedChannels: t, dismissedSuggestions: n, channelOpensByChannelId: i } = e;
        if (null != t) for (let e in t) N[e] = new Set(t[e]) ?? new Set();
        if (null != n) for (let e in n) C[e] = new Set(n[e]) ?? new Set();
        R = i ?? {};
    }
    getSuggestedChannelId(e) {
        return null;
    }
    getState() {
        return { suggestedChannels: {}, dismissedSuggestions: {}, channelOpensByChannelId: {} };
    }
}
let y = new L(h.h, {
        DISMISS_FAVORITE_SUGGESTION: function (e) {
            let { guildId: t, channelId: n } = e;
            return null == C[t] && (C[t] = new Set()), C[t].add(n), N[t].delete(n), !0;
        },
    }),
    D = new Set();
class v extends A.Ay.PersistedStore {
    static displayName = "RecentlyActiveCollapseStore";
    static persistKey = "RecentlyActiveCollapseStore";
    initialize(e) {
        D.clear(), e?.guilds.forEach((e) => D.add(e));
    }
    isCollapsed(e) {
        return D.has(e);
    }
    getState() {
        return { guilds: D };
    }
}
new v(h.h, {
    SET_RECENTLY_ACTIVE_COLLAPSED: function (e) {
        let { guildId: t, collapsed: n } = e;
        n ? D.add(t) : D.delete(t);
    },
});
var b = n(395504),
    M = n(454058),
    P = n(272720),
    U = n(56595),
    w = n(695633),
    G = n(152007),
    x = n(95701),
    k = n(924985),
    F = n(945886),
    V = n(71393),
    B = n(576705),
    H = n(568548),
    j = n(977997),
    W = n(607567),
    Y = n(403362),
    K = n(935208),
    $ = n(669715),
    z = n(551851),
    q = n(281405),
    Z = n(652215),
    X = n(746080),
    Q = n(818348);
let J = "placeholder-channel-id",
    ee = 2,
    et = 0,
    en = 1,
    ei = 2,
    er = 3,
    ea = 4,
    es = 5,
    el = new Set([String(q.n.GUILD_DIRECTORY)]);
class eo {
    guilds = {};
    _areGuildActionRowsUpdated(e, t) {
        return !s().isEqual(
            this.guilds[e]
                ?.getGuildActionSection()
                .getRows()
                .filter((e) => !el.has(e)),
            t,
        );
    }
    _areChannelNoticeRowsUpdated(e, t) {
        return !s().isEqual(this.guilds[e]?.getChannelNoticeSection().getRows(), t);
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
                s().some(j.A.getVoiceStatesForChannel(t.id)) &&
                H.Ay.getMentionCount(t.id) > 0
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
                (this.guilds[e] = new ed(e, t, n)),
            this.guilds[e]
        );
    }
    getGuildChannelRowsOnly(e) {
        return e in this.guilds || (this.guilds[e] = new ed(e, [], [])), this.guilds[e];
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
            (t instanceof x.YB || null != (t = m.A.getChannel(e))) &&
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
class ed {
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
            (this.hideMutedChannels = S.Ay.isGuildCollapsed(this.id)),
            (this.mutedChannelIds = S.Ay.getMutedChannels(this.id)),
            (this.optedInChannels =
                S.Ay.getOptedInChannelsWithPendingUpdates(this.id) ?? S.Ay.getOptedInChannels(this.id)),
            (this.optInEnabled = (0, b.WW)(this.id)),
            (this.hideResourceChannels = (0, u.K)(this.id)),
            (this.favoriteChannelIds = new Set(S.Ay.getGuildFavorites(this.id) ?? [])),
            (this.suggestedFavoriteChannelId = y.getSuggestedChannelId(this.id)),
            (this.collapsedCategoryIds = k.A.getCollapsedCategories());
        const i = m.A.getMutableGuildChannelsForGuild(this.id),
            a = V.A.getGuild(this.id);
        (this.moderatorReportChannelId = null != a ? (0, P.A)(a) : null),
            (this.moderatorReportChannelEnabled = null != a && (0, U.A)(a));
        const l = {},
            o = [],
            d = {};
        for (const e in i) {
            const t = i[e];
            t.type === Z.rbe.GUILD_CATEGORY && ((l[t.id] = t), (d[t.id] = []));
        }
        const c = [],
            _ = [],
            E = [],
            A = this.initializationData;
        for (const e in i) {
            const t = i[e];
            if (t.type !== Z.rbe.GUILD_CATEGORY) {
                if (t.type === Z.rbe.GUILD_DIRECTORY) {
                    null == a || a.features.has(Z.GuildFeatures.HUB) || E.push(t);
                    continue;
                }
                eL(this, t, A)
                    ? c.push(t)
                    : (t.type === Z.rbe.GUILD_VOICE || t.type === Z.rbe.GUILD_STAGE_VOICE) &&
                      (null != t.parent_id && null != l[t.parent_id] && _.push(l[t.parent_id]), _.push(t)),
                    null != t.parent_id && t.parent_id in d ? d[t.parent_id].push(t) : o.push(t);
            }
        }
        for (const e in ((this.categories = {}), d)) this.categories[e] = new e_(this, l[e], d[e], A);
        (this.recentsSectionNumber = er),
            (this.favoritesSectionNumber = ei),
            (this.noParentCategory = new eu(this, o, A)),
            (this.favoritesCategory = new eE(this, A)),
            (this.recentsCategory = T.get("enable_recently_active")
                ? new ChannelListRecentlyActiveCategory(this, i, A)
                : new eA(this, c, A)),
            (this.voiceChannelsCategory = new eh(this, _, l, A)),
            (this.guildActionSection = new ef(t, E.length > 0)),
            (this.channelNoticeSection = new eI(n)),
            r()(!("null" in this.categories), "somehow a null got into categories"),
            (this.voiceChannelsSectionNumber = es + s().size(this.categories));
    }
    get initializationData() {
        return {
            selectedChannel: m.A.getChannel(g.Ay.getChannelId()),
            selectedVoiceChannelId: g.Ay.getVoiceChannelId(),
            activeJoinedRelevantThreads: w.A.getActiveJoinedRelevantThreadsForGuild(this.id),
            activeJoinedUnreadThreads: w.A.getActiveJoinedUnreadThreadsForGuild(this.id),
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
            (this.sortedNamedCategories = s().sortBy(Object.values(this.categories), (e) => e.record.position)),
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
            case ea:
                return this.noParentCategory;
            case this.recentsSectionNumber:
                return this.recentsCategory;
            case this.voiceChannelsSectionNumber:
                return this.voiceChannelsCategory;
            default:
                return this.getSortedNamedCategories()[e - es];
        }
    }
    getNamedCategoryFromSection(e) {
        return (
            (e -= es),
            r()(e >= 0 && e < this.getSortedNamedCategories().length, `invalid section index ${e}`),
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
        return r()(e > en, "Invalid section"), e !== this.recentsSectionNumber && this.getRows()[e][t] === J;
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
            return t?.isDirectory() ? q.n.GUILD_DIRECTORY : null;
        })(e);
        if (null != t) return [{ row: this.getGuildActionSection().getRows().indexOf(t), section: en }];
        let n = [],
            i = m.A.getChannel(e);
        if (null == i || null == e) return n;
        let r = i.isThread();
        if ((r && (i = m.A.getChannel(i.parent_id)), null == i)) return n;
        let a = this.favoritesCategory.getShownChannelIds().indexOf(i.id);
        a >= 0 && n.push({ section: ei, row: a });
        let l = this.recentsCategory.getShownChannelIds().indexOf(i.id);
        if ((l >= 0 && n.push({ section: this.recentsSectionNumber, row: l }), i.type === Z.rbe.GUILD_CATEGORY))
            return [{ section: s().findIndex(this.getSortedNamedCategories(), (e) => e.id === i?.id) + es }];
        let o = this.getCategory(i),
            d = o instanceof eu ? ea : this.getSortedNamedCategories().indexOf(o) + es,
            c = o.getShownChannelIds().indexOf(i.id);
        if (d >= 0 && c >= 0) {
            let t = r ? o.channels[i.id].threadIds.indexOf(e) : 0;
            n.push({ section: d, row: c, threadOffset: t });
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
        r()(e.length > 0, "must have at least one channel in the slice");
        let n = e[0],
            i = e[e.length - 1],
            a = !0,
            s = !1,
            l = [],
            o = [];
        for (let e of this.getSortedCategories()) {
            let r = t?.ignoreRecents && e === this.recentsCategory;
            for (let t of e.getShownChannelIds()) {
                let d = e.channels[t];
                a && (d.id === n.id ? (a = !1) : r || l.push(d)),
                    s && !r && o.push(d),
                    a || s || d.id !== i.id || (s = !0);
            }
        }
        return [l, e, o];
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
            t = s()(this.getSortedCategories())
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
class ec {
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
        return 0 === e.length && this.shouldShowEmptyCategory() ? [J] : e;
    }
    shouldShowEmptyCategory() {
        return s().some(this.channels, (e) => e.renderLevel >= 3);
    }
    getShownChannelIds() {
        return (
            null == this.shownChannelIds &&
                (this.shownChannelIds = s()(this.channels)
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
        let e = s()(this.channels)
            .values()
            .flatMap((e) => e.threadIds)
            .value();
        return this.getShownChannelIds().concat(e);
    }
    isEmpty() {
        return 0 === this.getShownChannelIds().length;
    }
    getChannelRecords() {
        return s()(this.channels)
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
class eu extends ec {
    constructor(e, t, n) {
        super(e),
            (this.channels = s()(t)
                .map((e) => new eT(this, e, n))
                .keyBy((e) => e.id)
                .value());
    }
}
class e_ extends ec {
    id;
    record;
    constructor(e, t, n, i) {
        for (const r of (super(e),
        (this.record = t),
        (this.id = t.id),
        (this.isCollapsed = !0 === e.collapsedCategoryIds[t.id]),
        (this.isMuted = e.mutedChannelIds.has(t.id)),
        (this.channels = {}),
        n))
            this.channels[r.id] = new eT(this, r, i);
    }
    shouldShowEmptyCategory() {
        return !!(
            super.shouldShowEmptyCategory() ||
            (B.A.can(Q.xB.MANAGE_CHANNELS, this.record) &&
                B.A.can(Q.xB.VIEW_CHANNEL, this.record) &&
                s().isEmpty(this.channels) &&
                (!this.guild.optInEnabled || this.guild.optedInChannels.has(this.id)))
        );
    }
}
class eE extends ec {
    constructor(e, t) {
        super(e),
            (this.channels = s()(S.Ay.getGuildFavorites(e.id) ?? [])
                .map((e) => m.A.getChannel(e))
                .filter(Y.Vq)
                .map((e) => new em(this, e, t))
                .keyBy((e) => e.id)
                .value());
        const n = y.getSuggestedChannelId(e.id),
            i = m.A.getChannel(n);
        null != i &&
            null != n &&
            (this.channels[n] = new em(this, i, {
                ...t,
                activeJoinedRelevantThreads: {},
                activeJoinedUnreadThreads: {},
            }));
    }
    updateChannel(e, t) {
        let n = e.id in this.channels && S.Ay.isFavorite(e.guild_id, e.id),
            i = y.getSuggestedChannelId(e.guild_id);
        return (e.id !== i || n || (t = { ...t, activeJoinedRelevantThreads: {}, activeJoinedUnreadThreads: {} }),
        e.id in this.channels && this.channels[e.id].updateChannel(e, t))
            ? (this.invalidate(), !0)
            : e.id in this.channels && e.id !== i && !n && (delete this.channels[e.id], this.invalidate(), !0);
    }
    getFirstVoiceChannel(e) {
        return null;
    }
}
class eA extends ec {
    constructor(e, t, n) {
        if ((super(e), !e.optInEnabled || E.A.isFullServerPreview(e.id))) return;
        (this.isCollapsed = !1),
            (this.isMuted = !1),
            (this.channels = s()(t)
                .map((e) => new eg(this, e, n))
                .keyBy((e) => e.id)
                .value());
    }
    updateAllChannels(e) {
        let t = !1;
        return (
            K.default.keys(this.channels).forEach((n) => {
                this.updateChannel(this.channels[n].record, e) && (t = !0);
            }),
            t
        );
    }
    updateChannel(e, t) {
        let n = super.updateChannel(e, t);
        if (this.guild.optInEnabled) {
            let n = this.channels[e.id];
            if (eL(this.guild, e, t) && null == n)
                return (this.channels[e.id] = new eg(this, e, t)), this.invalidate(), !0;
        }
        return n;
    }
    getFirstVoiceChannel(e) {
        return null;
    }
    getShownChannelIds() {
        if (null == this.shownChannelIds) {
            let e = s()(this.channels)
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
            this.shownChannelIds = s()([...n])
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
class eh extends ec {
    categoriesById;
    hiddenChannelIds = null;
    constructor(e, t, n, i) {
        if ((super(e), (this.categoriesById = n), !e.optInEnabled)) return;
        (this.isCollapsed = z.A.isVoiceCategoryCollapsed(e.id)),
            (this.isMuted = !1),
            (this.categoriesById = n),
            (this.channels = s()(t)
                .map((e) => new eS(this, e, i))
                .keyBy((e) => e.id)
                .value());
    }
    invalidate() {
        super.invalidate(), (this.hiddenChannelIds = null);
    }
    getHiddenChannelIds() {
        if (!this.guild.optInEnabled) return [];
        if (null == this.hiddenChannelIds) {
            let e = s()(this.channels)
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
        return 0 === e.length && this.getHiddenChannelIds().length > 0 ? [J] : e;
    }
    getShownChannelIds() {
        if (!this.guild.optInEnabled) return [];
        if (null == this.shownChannelIds) {
            let e = s()(this.channels)
                .filter((e) => 4 === e.renderLevel)
                .orderBy(
                    [
                        (e) => {
                            var t;
                            return (
                                (t = this.categoriesById),
                                e.record.type === Z.rbe.GUILD_CATEGORY
                                    ? e.record.position
                                    : null != e.record.parent_id
                                      ? (t[e.record.parent_id]?.position ?? -1)
                                      : -1
                            );
                        },
                        (e) => (e.record.type === Z.rbe.GUILD_CATEGORY ? -1 : e.record.position),
                    ],
                    ["asc", "asc"],
                )
                .value();
            this.shownChannelIds = [];
            for (let t = 0; t < e.length; t++) {
                let n = e[t];
                (t < e.length - 1 &&
                    n.record.type === Z.rbe.GUILD_CATEGORY &&
                    e[t + 1]?.record.type === Z.rbe.GUILD_CATEGORY) ||
                    ((t !== e.length - 1 || n.record.type !== Z.rbe.GUILD_CATEGORY) && this.shownChannelIds.push(n.id));
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
class ef {
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
class ep {
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
        const { renderLevel: i, threadIds: r } = this.computeState(n);
        (this.renderLevel = i),
            (this.threadCount = s().size(r)),
            (this.threadIds = r),
            4 === i && (this.subtitle = this.computeSubtitle());
    }
    get isMuted() {
        return this.category.guild.mutedChannelIds.has(this.id);
    }
    get isCollapsed() {
        return F.A.isCollapsed(this.id);
    }
    get isFirstVoiceChannel() {
        return this.category.getFirstVoiceChannel() === this;
    }
    get lastMessageTimestamp() {
        return Math.max(H.Ay.lastMessageTimestamp(this.id), ...this.threadIds.map(H.Ay.lastMessageTimestamp));
    }
    updateChannel(e, t) {
        let n = !1;
        null != e && e !== this.record && ((this.record = e), (n = !0));
        let i = this.computeState(t);
        return (
            (i.renderLevel === this.renderLevel && s().isEqual(i.threadIds, this.threadIds)) ||
                ((this.renderLevel = i.renderLevel),
                (this.threadIds = i.threadIds),
                (this.threadCount = s().size(i.threadIds)),
                (n = !0)),
            4 === this.renderLevel && this.updateSubtitle() && (n = !0),
            n
        );
    }
    updateSubtitle() {
        let e = this.computeSubtitle();
        return !s().isEqual(this.subtitle, e) && ((this.subtitle = e), !0);
    }
    computeSubtitle() {
        return eN(this.record, this.isCollapsed || this.category.isCollapsed, this.category.guild.optInEnabled);
    }
}
class eT extends ep {
    computeState(e) {
        let {
            selectedChannel: t,
            selectedVoiceChannelId: n,
            activeJoinedRelevantThreads: i,
            activeJoinedUnreadThreads: r,
        } = e;
        if (!B.A.can(Q.xB.VIEW_CHANNEL, this.record)) {
            if (this.id === n) return { renderLevel: 4, threadIds: [] };
            else if (!c.A.isChannelGatedAndVisible(this.record.guild_id, this.record.id))
                return { renderLevel: 1, threadIds: [] };
        }
        let a = this.record.parent_id,
            l = this.category.guild;
        if (eR(l, this.record)) return { renderLevel: 1, threadIds: [] };
        let o = t?.id === this.id || n === this.id,
            d = null != t && t.isThread() && t.parent_id === this.id,
            u = (o || d || (!this.category.isCollapsed && !this.isMuted) ? i[this.id] : r[this.id]) ?? {},
            _ = eC(this.record, u, t, n, l.hideMutedChannels);
        return this.id !== l.moderatorReportChannelId || l.moderatorReportChannelEnabled
            ? l.optInEnabled && l.hideResourceChannels && this.record.hasFlag(X.lx.IS_GUILD_RESOURCE_CHANNEL)
                ? { renderLevel: o ? 4 : 1, threadIds: _ }
                : !l.optInEnabled || l.optedInChannels.has(this.id) || (null != a && l.optedInChannels.has(a))
                  ? o || d || !s().isEmpty(_) || H.Ay.getMentionCount(this.id) > 0
                      ? { renderLevel: 4, threadIds: _ }
                      : l.hideMutedChannels && l.mutedChannelIds.has(this.id)
                        ? { renderLevel: 2, threadIds: _ }
                        : this.category.isCollapsed &&
                            (l.mutedChannelIds.has(this.id) ||
                                (null != a && l.mutedChannelIds.has(a)) ||
                                this.record.isGuildVocal() ||
                                this.record.type === Z.rbe.GUILD_STORE ||
                                ((0, x.ig)(this.record.type) && !H.Ay.hasUnread(this.record.id)))
                          ? { renderLevel: 3, threadIds: _ }
                          : { renderLevel: 4, threadIds: _ }
                  : { renderLevel: 2, threadIds: _ }
            : { renderLevel: 2, threadIds: _ };
    }
}
class em extends ep {
    computeState(e) {
        let { selectedChannel: t, selectedVoiceChannelId: n, activeJoinedRelevantThreads: i } = e;
        return B.A.can(Q.xB.VIEW_CHANNEL, this.record)
            ? { renderLevel: 4, threadIds: eC(this.record, i[this.id] ?? {}, t, n, !1) }
            : { renderLevel: 1, threadIds: [] };
    }
}
class eg extends ep {
    computeState(e) {
        let { selectedChannel: t, selectedVoiceChannelId: n, activeJoinedRelevantThreads: i } = e;
        return B.A.can(Q.xB.VIEW_CHANNEL, this.record)
            ? eL(this.category.guild, this.record, e)
                ? { renderLevel: eO(this, e) ? 4 : 3, threadIds: eC(this.record, i[this.id] ?? {}, t, n, !1) }
                : { renderLevel: 2, threadIds: [] }
            : { renderLevel: 1, threadIds: [] };
    }
}
class eS extends eT {
    getRenderLevel(e) {
        let t = this.category.guild;
        return !B.A.can(Q.xB.VIEW_CHANNEL, this.record) || 4 === e || 3 === e || eR(t, this.record)
            ? 1
            : this.category.isCollapsed
              ? s().some(j.A.getVoiceStatesForChannel(this.record.id))
                  ? 4
                  : 3
              : 4;
    }
    computeState(e) {
        let t = super.computeState(e),
            n = this.getRenderLevel(t.renderLevel);
        return (
            4 === n &&
                (this.subtitle = eN(
                    this.record,
                    this.isCollapsed || this.category.isCollapsed,
                    this.category.guild.optInEnabled,
                )),
            { threadIds: [], renderLevel: n }
        );
    }
}
function eN(e, t, n) {
    switch (e.type) {
        case Z.rbe.GUILD_VOICE: {
            let i = _.Ay.getActiveEventByChannel(e.id);
            if (null != i) return { type: "event", name: i.name };
            let r = W.Ay.getVoiceStatesForChannel(e);
            if (n && t && (0, $.t)(r)) return { type: "go-live" };
            let a = d.A.getChannelStatus(e);
            if (null != a && a.length > 0) return { type: "voice", text: a };
            let s = l.Ay.getEmbeddedActivitiesForChannel(e.id)
                .map((e) => o.A.getApplication(e.applicationId)?.name)
                .filter(Y.Vq);
            if (s.length > 0) return { type: "embedded-activities", name: s.join(", ") };
            return null;
        }
        case Z.rbe.GUILD_STAGE_VOICE: {
            let t = _.Ay.getActiveEventByChannel(e.id);
            if (null != t) return { type: "event", name: t.name };
            return null;
        }
        default:
            return null;
    }
}
function eC(e, t, n, i, r) {
    let a = null != n && (n.id === e.id || i === e.id),
        l = null != n && n.isThread() && n.parent_id === e.id;
    if (x.wE.has(e.type)) {
        let e = s()
            .sortBy(Object.values(t), (e) => -e.joinTimestamp)
            .map((e) => e.channel.id);
        return a
            ? e
            : l
              ? (n.id in t || e.unshift(n.id), e)
              : r
                ? e.filter((e) => !G.A.isMuted(e) || H.Ay.getMentionCount(e) > 0)
                : e;
    }
    return [];
}
function eR(e, t) {
    return e.favoriteChannelIds.has(t.id);
}
function eO(e, t) {
    let { selectedChannel: n, activeJoinedRelevantThreads: i } = t;
    if (H.Ay.getMentionCount(e.id) > 0) return !0;
    for (let t in i[e.id]) if (H.Ay.getMentionCount(t) > 0) return !0;
    if (null != n && (n.id === e.id || (n.isThread() && n.parent_id === e.id))) return !0;
    let r = M.A.getNewChannelIds(e.category.guild.id);
    if (r.size > ee);
    else if (r.has(e.id)) return !0;
    return !1;
}
function eL(e, t, n) {
    let { selectedChannel: i, activeJoinedRelevantThreads: r } = n;
    if (
        t.type === Z.rbe.GUILD_DIRECTORY ||
        !e.optInEnabled ||
        e.optedInChannels.has(t.id) ||
        t.isThread() ||
        (null != t.parent_id && e.optedInChannels.has(t.parent_id)) ||
        (e.hideResourceChannels && t.hasFlag(X.lx.IS_GUILD_RESOURCE_CHANNEL)) ||
        (t.isGuildVocal() && (!z.A.isVoiceCategoryCollapsed(e.id) || s().some(j.A.getVoiceStatesForChannel(t.id))))
    )
        return !1;
    if ((null != i && (i.id === t.id || (i.isThread() && i.parent_id === t.id))) || H.Ay.getMentionCount(t.id) > 0)
        return !0;
    for (let e in r[t.id])
        if (H.Ay.getMentionCount(e) > 0 || H.Ay.hasUnread(e) || H.Ay.hasRecentlyVisitedAndRead(e)) return !0;
    if (e.mutedChannelIds.has(t.id) || (null != t.parent_id && e.mutedChannelIds.has(t.parent_id))) return !1;
    let a = M.A.getNewChannelIds(e.id),
        l = Array.from(a).sort((e, t) => K.default.compare(t, e));
    return !!((a.has(t.id) && l.indexOf(t.id) < ee) || H.Ay.hasRecentlyVisitedAndRead(t.id));
}
let ey = new Set(Object.values(q.n));
