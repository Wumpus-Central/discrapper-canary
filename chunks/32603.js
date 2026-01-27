n.d(t, {
    Ay: () => ee,
    HP: () => X,
    PU: () => q,
    TF: () => Z,
    Xt: () => K,
    bK: () => Q,
    go: () => ev,
    rR: () => z,
    wF: () => ey,
    xu: () => er,
    yO: () => J,
}),
    n(896048),
    n(65821),
    n(321073),
    n(114821),
    n(339614),
    n(667532),
    n(638769);
var i = n(284009),
    s = n.n(i),
    r = n(735438),
    l = n.n(r),
    o = n(933958),
    a = n(587895),
    d = n(309698),
    u = n(717125),
    c = n(473529),
    h = n(698441),
    g = n(164956),
    p = n(99712),
    f = n(240935),
    C = n(50827),
    v = n(395504),
    y = n(454058),
    b = n(272720),
    S = n(56595),
    m = n(863005),
    A = n(152007),
    E = n(95701),
    I = n(924985),
    O = n(734057),
    _ = n(945886),
    w = n(71393),
    N = n(576705),
    R = n(222823),
    j = n(309010),
    x = n(543465),
    T = n(977997),
    P = n(607567),
    L = n(403362),
    D = n(661191),
    G = n(669715),
    U = n(551851),
    M = n(281405),
    F = n(652215),
    B = n(746080),
    V = n(818348);

function H(e, t, n) {
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

function k(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                H(e, t, n[t]);
            });
    }
    return e;
}

function W(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let Y = "placeholder-channel-id",
    z = 2,
    K = 0,
    q = 1,
    X = 2,
    J = 3,
    Q = 4,
    Z = 5,
    $ = new Set([String(M.n.GUILD_DIRECTORY)]);
class ee {
    _areGuildActionRowsUpdated(e, t) {
        var n;
        return !l().isEqual(
            null == (n = this.guilds[e])
                ? void 0
                : n
                      .getGuildActionSection()
                      .getRows()
                      .filter((e) => !$.has(e)),
            t,
        );
    }
    _areChannelNoticeRowsUpdated(e, t) {
        var n;
        return !l().isEqual(null == (n = this.guilds[e]) ? void 0 : n.getChannelNoticeSection().getRows(), t);
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
                l().some(T.A.getVoiceStatesForChannel(t.id)) &&
                R.Ay.getMentionCount(t.id) > 0
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
                (this.guilds[e] = new et(e, t, n)),
            this.guilds[e]
        );
    }
    getGuildChannelRowsOnly(e) {
        return e in this.guilds || (this.guilds[e] = new et(e, [], [])), this.guilds[e];
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
            null != (t = null == (n = this.guilds[e]) ? void 0 : n.updateRecentsCategory()) &&
            t
        );
    }
    nonPositionalChannelIdUpdate(e) {
        let t = O.A.getBasicChannel(e);
        return (
            null != t &&
            null != t.guild_id &&
            null != this.guilds[t.guild_id] &&
            (t instanceof E.YB || null != (t = O.A.getChannel(e))) &&
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
        H(this, "guilds", {});
    }
}
class et {
    get initializationData() {
        return {
            selectedChannel: O.A.getChannel(j.A.getChannelId()),
            selectedVoiceChannelId: j.A.getVoiceChannelId(),
            activeJoinedRelevantThreads: m.A.getActiveJoinedRelevantThreadsForGuild(this.id),
            activeJoinedUnreadThreads: m.A.getActiveJoinedUnreadThreadsForGuild(this.id),
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
            case K:
                throw Error("Invalid section. Use getChannelNoticeSection instead");
            case q:
                throw Error("Invalid section. Use getGuildActionSection instead");
            case X:
                return this.favoritesCategory;
            case Q:
                return this.noParentCategory;
            case this.recentsSectionNumber:
                return this.recentsCategory;
            case this.voiceChannelsSectionNumber:
                return this.voiceChannelsCategory;
            default:
                return this.getSortedNamedCategories()[e - Z];
        }
    }
    getNamedCategoryFromSection(e) {
        return (
            (e -= Z),
            s()(e >= 0 && e < this.getSortedNamedCategories().length, "invalid section index ".concat(e)),
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
        return null == i
            ? null
            : {
                  category: n,
                  channel: i,
              };
    }
    isPlaceholderRow(e, t) {
        return s()(e > q, "Invalid section"), e !== this.recentsSectionNumber && this.getRows()[e][t] === Y;
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
            if (eA.has(e)) return e;
            let t = O.A.getChannel(e);
            return (null == t ? void 0 : t.isDirectory()) ? M.n.GUILD_DIRECTORY : null;
        })(e);
        if (null != t)
            return [
                {
                    row: this.getGuildActionSection().getRows().indexOf(t),
                    section: q,
                },
            ];
        let n = [],
            i = O.A.getChannel(e);
        if (null == i || null == e) return n;
        let s = i.isThread();
        if ((s && (i = O.A.getChannel(i.parent_id)), null == i)) return n;
        let r = this.favoritesCategory.getShownChannelIds().indexOf(i.id);
        r >= 0 &&
            n.push({
                section: X,
                row: r,
            });
        let o = this.recentsCategory.getShownChannelIds().indexOf(i.id);
        if (
            (o >= 0 &&
                n.push({
                    section: this.recentsSectionNumber,
                    row: o,
                }),
            i.type === F.rbe.GUILD_CATEGORY)
        )
            return [
                {
                    section:
                        l().findIndex(this.getSortedNamedCategories(), (e) => e.id === (null == i ? void 0 : i.id)) + Z,
                },
            ];
        let a = this.getCategory(i),
            d = a instanceof ei ? Q : this.getSortedNamedCategories().indexOf(a) + Z,
            u = a.getShownChannelIds().indexOf(i.id);
        if (d >= 0 && u >= 0) {
            let t = s ? a.channels[i.id].threadIds.indexOf(e) : 0;
            n.push({
                section: d,
                row: u,
                threadOffset: t,
            });
        }
        let c = this.voiceChannelsCategory.getShownChannelIds().indexOf(i.id);
        return (
            c >= 0 &&
                n.push({
                    section: this.voiceChannelsSectionNumber,
                    row: c,
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
        s()(e.length > 0, "must have at least one channel in the slice");
        let n = e[0],
            i = e[e.length - 1],
            r = !0,
            l = !1,
            o = [],
            a = [];
        for (let e of this.getSortedCategories()) {
            let s = (null == t ? void 0 : t.ignoreRecents) && e === this.recentsCategory;
            for (let t of e.getShownChannelIds()) {
                let d = e.channels[t];
                r && (d.id === n.id ? (r = !1) : s || o.push(d)),
                    l && !s && a.push(d),
                    r || l || d.id !== i.id || (l = !0);
            }
        }
        return [o, e, a];
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
        var t;
        return null != (t = this._initializeAllChannelsById()[e]) ? t : null;
    }
    updateSubtitles(e) {
        let t = [];
        if (null != e) {
            let n = O.A.getChannel(e);
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
            if (null == t || !t.ignoreRecents || n !== this.recentsCategory)
                for (let t of n.getShownChannelIds()) {
                    let i = n.channels[t];
                    for (let t of (e(i.record), i.threadIds)) {
                        let n = O.A.getChannel(t);
                        null != n && e(n);
                    }
                }
    }
    forEachChannel(e, t) {
        for (let n of this.getSortedCategories())
            if (null == t || !t.ignoreRecents || n !== this.recentsCategory) for (let t of n.getChannelRecords()) e(t);
    }
    constructor(e, t, n) {
        var i, r;
        H(this, "id", void 0),
            H(this, "hideMutedChannels", void 0),
            H(this, "favoritesSectionNumber", void 0),
            H(this, "recentsSectionNumber", void 0),
            H(this, "voiceChannelsSectionNumber", void 0),
            H(this, "mutedChannelIds", void 0),
            H(this, "optedInChannels", void 0),
            H(this, "optInEnabled", void 0),
            H(this, "hideResourceChannels", void 0),
            H(this, "favoriteChannelIds", void 0),
            H(this, "suggestedFavoriteChannelId", void 0),
            H(this, "collapsedCategoryIds", void 0),
            H(this, "moderatorReportChannelId", void 0),
            H(this, "moderatorReportChannelEnabled", void 0),
            H(this, "categories", void 0),
            H(this, "noParentCategory", void 0),
            H(this, "favoritesCategory", void 0),
            H(this, "recentsCategory", void 0),
            H(this, "voiceChannelsCategory", void 0),
            H(this, "guildActionSection", void 0),
            H(this, "channelNoticeSection", void 0),
            H(this, "sortedNamedCategories", void 0),
            H(this, "sections", void 0),
            H(this, "rows", void 0),
            H(this, "firstVoiceChannel", void 0),
            H(this, "allChannelsById", void 0),
            H(this, "version", void 0),
            (this.id = e),
            (this.sortedNamedCategories = null),
            (this.sections = null),
            (this.rows = null),
            (this.firstVoiceChannel = void 0),
            (this.allChannelsById = null),
            (this.version = 0),
            (this.hideMutedChannels = x.Ay.isGuildCollapsed(this.id)),
            (this.mutedChannelIds = x.Ay.getMutedChannels(this.id)),
            (this.optedInChannels =
                null != (i = x.Ay.getOptedInChannelsWithPendingUpdates(this.id))
                    ? i
                    : x.Ay.getOptedInChannels(this.id)),
            (this.optInEnabled = (0, v.WW)(this.id)),
            (this.hideResourceChannels = (0, c.K)(this.id)),
            (this.favoriteChannelIds = new Set(null != (r = x.Ay.getGuildFavorites(this.id)) ? r : [])),
            (this.suggestedFavoriteChannelId = f.A.getSuggestedChannelId(this.id)),
            (this.collapsedCategoryIds = I.A.getCollapsedCategories());
        const o = O.A.getMutableGuildChannelsForGuild(this.id),
            a = w.A.getGuild(this.id);
        (this.moderatorReportChannelId = null != a ? (0, b.A)(a) : null),
            (this.moderatorReportChannelEnabled = null != a && (0, S.A)(a));
        const d = {},
            u = [],
            h = {};
        for (const e in o) {
            const t = o[e];
            t.type === F.rbe.GUILD_CATEGORY && ((d[t.id] = t), (h[t.id] = []));
        }
        const g = [],
            C = [],
            y = [],
            m = this.initializationData;
        for (const e in o) {
            const t = o[e];
            if (t.type !== F.rbe.GUILD_CATEGORY) {
                if (t.type === F.rbe.GUILD_DIRECTORY) {
                    null == a || a.features.has(F.GuildFeatures.HUB) || y.push(t);
                    continue;
                }
                em(this, t, m)
                    ? g.push(t)
                    : (t.type === F.rbe.GUILD_VOICE || t.type === F.rbe.GUILD_STAGE_VOICE) &&
                      (null != t.parent_id && null != d[t.parent_id] && C.push(d[t.parent_id]), C.push(t)),
                    null != t.parent_id && t.parent_id in h ? h[t.parent_id].push(t) : u.push(t);
            }
        }
        for (const e in ((this.categories = {}), h)) this.categories[e] = new es(this, d[e], h[e], m);
        (this.recentsSectionNumber = J),
            (this.favoritesSectionNumber = X),
            (this.noParentCategory = new ei(this, u, m)),
            (this.favoritesCategory = new er(this, m)),
            (this.recentsCategory = (0, p.i)() ? new el(this, o, m) : new eo(this, g, m)),
            (this.voiceChannelsCategory = new ea(this, C, d, m)),
            (this.guildActionSection = new eu(t, y.length > 0)),
            (this.channelNoticeSection = new ed(n)),
            s()(!("null" in this.categories), "somehow a null got into categories"),
            (this.voiceChannelsSectionNumber = Z + l().size(this.categories));
    }
}
class en {
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
    constructor(e) {
        H(this, "guild", void 0),
            H(this, "isMuted", void 0),
            H(this, "isCollapsed", void 0),
            H(this, "position", void 0),
            H(this, "channels", void 0),
            H(this, "shownChannelIds", void 0),
            (this.guild = e),
            (this.isMuted = !1),
            (this.isCollapsed = !1),
            (this.position = -1),
            (this.channels = {}),
            (this.shownChannelIds = null);
    }
}
class ei extends en {
    constructor(e, t, n) {
        super(e),
            (this.channels = l()(t)
                .map((e) => new eh(this, e, n))
                .keyBy((e) => e.id)
                .value());
    }
}
class es extends en {
    shouldShowEmptyCategory() {
        return !!(
            super.shouldShowEmptyCategory() ||
            (N.A.can(V.xB.MANAGE_CHANNELS, this.record) &&
                N.A.can(V.xB.VIEW_CHANNEL, this.record) &&
                l().isEmpty(this.channels) &&
                (!this.guild.optInEnabled || this.guild.optedInChannels.has(this.id)))
        );
    }
    constructor(e, t, n, i) {
        for (const s of (super(e),
        H(this, "id", void 0),
        H(this, "record", void 0),
        (this.record = t),
        (this.id = t.id),
        (this.isCollapsed = !0 === e.collapsedCategoryIds[t.id]),
        (this.isMuted = e.mutedChannelIds.has(t.id)),
        (this.channels = {}),
        n))
            this.channels[s.id] = new eh(this, s, i);
    }
}
class er extends en {
    updateChannel(e, t) {
        let n = e.id in this.channels && x.Ay.isFavorite(e.guild_id, e.id),
            i = f.A.getSuggestedChannelId(e.guild_id);
        return (e.id !== i ||
            n ||
            (t = W(k({}, t), {
                activeJoinedRelevantThreads: {},
                activeJoinedUnreadThreads: {},
            })),
        e.id in this.channels && this.channels[e.id].updateChannel(e, t))
            ? (this.invalidate(), !0)
            : e.id in this.channels && e.id !== i && !n && (delete this.channels[e.id], this.invalidate(), !0);
    }
    getFirstVoiceChannel(e) {
        return null;
    }
    constructor(e, t) {
        var n;
        if ((super(e), !e.optInEnabled)) return;
        this.channels = l()(null != (n = x.Ay.getGuildFavorites(e.id)) ? n : [])
            .map((e) => O.A.getChannel(e))
            .filter(L.Vq)
            .map((e) => new eg(this, e, t))
            .keyBy((e) => e.id)
            .value();
        const i = f.A.getSuggestedChannelId(e.id),
            s = O.A.getChannel(i);
        null != s &&
            null != i &&
            (this.channels[i] = new eg(
                this,
                s,
                W(k({}, t), {
                    activeJoinedRelevantThreads: {},
                    activeJoinedUnreadThreads: {},
                }),
            ));
    }
}
class el extends en {
    shouldShowEmptyCategory() {
        return this.enabled && this.isCollapsed && super.shouldShowEmptyCategory();
    }
    updateAllChannels(e) {
        return Object.values(this.channels).reduce((t, n) => this.updateChannel(n.record, e) || t, !1);
    }
    updateChannel(e, t) {
        if (!this.enabled) return !1;
        if ((0, E.fT)(e.type)) {
            let t = this.channels[e.parent_id];
            return null != t && this.updateShownChannelIds(t);
        }
        if (!(0, E.ig)(e.type)) return !1;
        let n = super.updateChannel(e, t),
            i = this.channels[e.id];
        return null == i
            ? ((i = new ef(this, e, t)), (this.channels[e.id] = i), this.invalidate(), !0)
            : this.updateShownChannelIds(i) || n;
    }
    getFirstVoiceChannel(e) {
        return null;
    }
    getShownChannelIds() {
        if (null == this.shownChannelIds) {
            let e = this.isCollapsed ? 4 : 3;
            this.shownChannelIds = this.enabled
                ? l()(this.channels)
                      .filter((t) => t.renderLevel >= e)
                      .map((e) => [e.id, e.lastMessageTimestamp, e.renderLevel])
                      .filter((e) => {
                          let [, t, n] = e;
                          return 4 === n || (t > 0 && Date.now() - t < el.MAX_TIMESTAMP_DELTA);
                      })
                      .sortBy((e) => {
                          let [, t, n] = e;
                          return -(t - (4 === n ? 0 : D.DISCORD_EPOCH));
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
            H(this, "enabled", !1),
            (this.isCollapsed = C.A.isCollapsed(e.id)),
            (this.enabled = !1),
            this.enabled)
        )
            for (const e of Object.values(t))
                (0, E.ig)(e.type) && !(0, E.fT)(e.type) && (this.channels[e.id] = new ef(this, e, n));
    }
}
H(el, "MIN_READABLE_CHANNELS", 7), H(el, "MAX_RECENT_CHANNELS", 10), H(el, "MAX_TIMESTAMP_DELTA", 6048e5);
class eo extends en {
    updateAllChannels(e) {
        let t = !1;
        return (
            D.default.keys(this.channels).forEach((n) => {
                this.updateChannel(this.channels[n].record, e) && (t = !0);
            }),
            t
        );
    }
    updateChannel(e, t) {
        let n = super.updateChannel(e, t);
        if (this.guild.optInEnabled) {
            let n = this.channels[e.id];
            if (em(this.guild, e, t) && null == n)
                return (this.channels[e.id] = new ep(this, e, t)), this.invalidate(), !0;
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
    constructor(e, t, n) {
        if ((super(e), !e.optInEnabled || g.A.isFullServerPreview(e.id))) return;
        (this.isCollapsed = !1),
            (this.isMuted = !1),
            (this.channels = l()(t)
                .map((e) => new ep(this, e, n))
                .keyBy((e) => e.id)
                .value());
    }
}
class ea extends en {
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
            let t = l()(this.channels)
                .filter((e) => 4 === e.renderLevel)
                .orderBy(
                    [
                        (e) =>
                            (function (e, t) {
                                if (e.record.type === F.rbe.GUILD_CATEGORY) return e.record.position;
                                if (null != e.record.parent_id) {
                                    var n, i;
                                    return null != (n = null == (i = t[e.record.parent_id]) ? void 0 : i.position)
                                        ? n
                                        : -1;
                                }
                                return -1;
                            })(e, this.categoriesById),
                        (e) => (e.record.type === F.rbe.GUILD_CATEGORY ? -1 : e.record.position),
                    ],
                    ["asc", "asc"],
                )
                .value();
            this.shownChannelIds = [];
            for (let n = 0; n < t.length; n++) {
                var e;
                let i = t[n];
                (n < t.length - 1 &&
                    i.record.type === F.rbe.GUILD_CATEGORY &&
                    (null == (e = t[n + 1]) ? void 0 : e.record.type) === F.rbe.GUILD_CATEGORY) ||
                    ((n !== t.length - 1 || i.record.type !== F.rbe.GUILD_CATEGORY) && this.shownChannelIds.push(i.id));
            }
        }
        return this.shownChannelIds;
    }
    getFirstVoiceChannel(e) {
        return null;
    }
    constructor(e, t, n, i) {
        if (
            (super(e),
            H(this, "categoriesById", void 0),
            H(this, "hiddenChannelIds", void 0),
            (this.categoriesById = n),
            (this.hiddenChannelIds = null),
            !e.optInEnabled)
        )
            return;
        (this.isCollapsed = U.A.isVoiceCategoryCollapsed(e.id)),
            (this.isMuted = !1),
            (this.categoriesById = n),
            (this.channels = l()(t)
                .map((e) => new eC(this, e, i))
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
        H(this, "rows", void 0), (this.rows = e);
    }
}
class eu {
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
        H(this, "guildActionRows", void 0),
            (this.guildActionRows = e.map(String)),
            t && this.guildActionRows.push(String(M.n.GUILD_DIRECTORY));
    }
}
class ec {
    get isMuted() {
        return this.category.guild.mutedChannelIds.has(this.id);
    }
    get isCollapsed() {
        return _.A.isCollapsed(this.id);
    }
    get isFirstVoiceChannel() {
        return this.category.getFirstVoiceChannel() === this;
    }
    get lastMessageTimestamp() {
        return Math.max(R.Ay.lastMessageTimestamp(this.id), ...this.threadIds.map(R.Ay.lastMessageTimestamp));
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
        return ev(this.record, this.isCollapsed || this.category.isCollapsed, this.category.guild.optInEnabled);
    }
    constructor(e, t, n) {
        H(this, "category", void 0),
            H(this, "record", void 0),
            H(this, "id", void 0),
            H(this, "position", void 0),
            H(this, "threadIds", void 0),
            H(this, "threadCount", void 0),
            H(this, "subtitle", void 0),
            H(this, "renderLevel", void 0),
            (this.category = e),
            (this.record = t),
            (this.position = -1),
            (this.threadIds = []),
            (this.threadCount = 0),
            (this.subtitle = null),
            (this.renderLevel = 1),
            (this.id = t.id);
        const { renderLevel: i, threadIds: s } = this.computeState(n);
        (this.renderLevel = i),
            (this.threadCount = l().size(s)),
            (this.threadIds = s),
            4 === i && (this.subtitle = this.computeSubtitle());
    }
}
class eh extends ec {
    computeState(e) {
        var t;
        let {
            selectedChannel: n,
            selectedVoiceChannelId: i,
            activeJoinedRelevantThreads: s,
            activeJoinedUnreadThreads: r,
        } = e;
        if (!N.A.can(V.xB.VIEW_CHANNEL, this.record)) {
            if (this.id === i)
                return {
                    renderLevel: 4,
                    threadIds: [],
                };
            else if (!u.A.isChannelGatedAndVisible(this.record.guild_id, this.record.id))
                return {
                    renderLevel: 1,
                    threadIds: [],
                };
        }
        let o = this.record.parent_id,
            a = this.category.guild;
        if (eb(a, this.record))
            return {
                renderLevel: 1,
                threadIds: [],
            };
        let d = (null == n ? void 0 : n.id) === this.id || i === this.id,
            c = null != n && n.isThread() && n.parent_id === this.id,
            h =
                null != (t = d || c || (!this.category.isCollapsed && !this.isMuted) ? s[this.id] : r[this.id])
                    ? t
                    : {},
            g = ey(this.record, h, n, i, a.hideMutedChannels);
        return this.id !== a.moderatorReportChannelId || a.moderatorReportChannelEnabled
            ? a.optInEnabled && a.hideResourceChannels && this.record.hasFlag(B.lx.IS_GUILD_RESOURCE_CHANNEL)
                ? {
                      renderLevel: d ? 4 : 1,
                      threadIds: g,
                  }
                : !a.optInEnabled || a.optedInChannels.has(this.id) || (null != o && a.optedInChannels.has(o))
                  ? d || c || !l().isEmpty(g) || R.Ay.getMentionCount(this.id) > 0
                      ? {
                            renderLevel: 4,
                            threadIds: g,
                        }
                      : a.hideMutedChannels && a.mutedChannelIds.has(this.id)
                        ? {
                              renderLevel: 2,
                              threadIds: g,
                          }
                        : this.category.isCollapsed &&
                            (a.mutedChannelIds.has(this.id) ||
                                (null != o && a.mutedChannelIds.has(o)) ||
                                this.record.isGuildVocal() ||
                                this.record.type === F.rbe.GUILD_STORE ||
                                ((0, E.ig)(this.record.type) && !R.Ay.hasUnread(this.record.id)))
                          ? {
                                renderLevel: 3,
                                threadIds: g,
                            }
                          : {
                                renderLevel: 4,
                                threadIds: g,
                            }
                  : {
                        renderLevel: 2,
                        threadIds: g,
                    }
            : {
                  renderLevel: 2,
                  threadIds: g,
              };
    }
}
class eg extends ec {
    computeState(e) {
        var t;
        let { selectedChannel: n, selectedVoiceChannelId: i, activeJoinedRelevantThreads: s } = e;
        return N.A.can(V.xB.VIEW_CHANNEL, this.record)
            ? {
                  renderLevel: 4,
                  threadIds: ey(this.record, null != (t = s[this.id]) ? t : {}, n, i, !1),
              }
            : {
                  renderLevel: 1,
                  threadIds: [],
              };
    }
}
class ep extends ec {
    computeState(e) {
        var t;
        let { selectedChannel: n, selectedVoiceChannelId: i, activeJoinedRelevantThreads: s } = e;
        return N.A.can(V.xB.VIEW_CHANNEL, this.record)
            ? em(this.category.guild, this.record, e)
                ? {
                      renderLevel: eS(this, e) ? 4 : 3,
                      threadIds: ey(this.record, null != (t = s[this.id]) ? t : {}, n, i, !1),
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
class ef extends eh {
    computeState(e) {
        let { renderLevel: t, threadIds: n } = super.computeState(e);
        if (t > 1) {
            let i = this.record.parent_id,
                s = this.category.guild;
            s.mutedChannelIds.has(this.id) || (null != i && s.mutedChannelIds.has(i))
                ? (t = 2)
                : 4 === t
                  ? (t = 3)
                  : 2 === t && em(this.category.guild, this.record, e) && (t = 3),
                3 === t && eS(this, e) && (t = 4),
                (n = l().sortBy(n, (e) => -R.Ay.lastMessageTimestamp(e)));
        }
        return {
            renderLevel: t,
            threadIds: n,
        };
    }
}
class eC extends eh {
    getRenderLevel(e) {
        let t = this.category.guild;
        return !N.A.can(V.xB.VIEW_CHANNEL, this.record) || 4 === e || 3 === e || eb(t, this.record)
            ? 1
            : this.category.isCollapsed
              ? l().some(T.A.getVoiceStatesForChannel(this.record.id))
                  ? 4
                  : 3
              : 4;
    }
    computeState(e) {
        let t = super.computeState(e),
            n = this.getRenderLevel(t.renderLevel);
        return (
            4 === n &&
                (this.subtitle = ev(
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

function ev(e, t, n) {
    switch (e.type) {
        case F.rbe.GUILD_VOICE: {
            let i = h.Ay.getActiveEventByChannel(e.id);
            if (null != i)
                return {
                    type: "event",
                    name: i.name,
                };
            let s = P.Ay.getVoiceStatesForChannel(e);
            if (n && t && (0, G.t)(s))
                return {
                    type: "go-live",
                };
            let r = d.A.getChannelStatus(e);
            if (null != r && r.length > 0)
                return {
                    type: "voice",
                    text: r,
                };
            let l = o.Ay.getEmbeddedActivitiesForChannel(e.id)
                .map((e) => {
                    var t;
                    return null == (t = a.A.getApplication(e.applicationId)) ? void 0 : t.name;
                })
                .filter(L.Vq);
            if (l.length > 0)
                return {
                    type: "embedded-activities",
                    name: l.join(", "),
                };
            return null;
        }
        case F.rbe.GUILD_STAGE_VOICE: {
            let t = h.Ay.getActiveEventByChannel(e.id);
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

function ey(e, t, n, i, s) {
    let r = null != n && (n.id === e.id || i === e.id),
        o = null != n && n.isThread() && n.parent_id === e.id;
    if (E.wE.has(e.type)) {
        let e = l()
            .sortBy(Object.values(t), (e) => -e.joinTimestamp)
            .map((e) => e.channel.id);
        return r
            ? e
            : o
              ? (n.id in t || e.unshift(n.id), e)
              : s
                ? e.filter((e) => !A.A.isMuted(e) || R.Ay.getMentionCount(e) > 0)
                : e;
    }
    return [];
}

function eb(e, t) {
    return e.favoriteChannelIds.has(t.id) && (e.optInEnabled || !1);
}

function eS(e, t) {
    let { selectedChannel: n, activeJoinedRelevantThreads: i } = t;
    if (R.Ay.getMentionCount(e.id) > 0) return !0;
    for (let t in i[e.id]) if (R.Ay.getMentionCount(t) > 0) return !0;
    if (null != n && (n.id === e.id || (n.isThread() && n.parent_id === e.id))) return !0;
    let s = y.A.getNewChannelIds(e.category.guild.id);
    if (s.size > z);
    else if (s.has(e.id)) return !0;
    return !1;
}

function em(e, t, n) {
    let { selectedChannel: i, activeJoinedRelevantThreads: s } = n;
    if (
        t.type === F.rbe.GUILD_DIRECTORY ||
        !e.optInEnabled ||
        e.optedInChannels.has(t.id) ||
        t.isThread() ||
        (null != t.parent_id && e.optedInChannels.has(t.parent_id)) ||
        (e.hideResourceChannels && t.hasFlag(B.lx.IS_GUILD_RESOURCE_CHANNEL))
    )
        return !1;
    if (t.isGuildVocal()) {
        let n = U.A.isVoiceCategoryCollapsed(e.id);
        if (!n) return !1;
        let i = l().some(T.A.getVoiceStatesForChannel(t.id));
        if (n && i) return !1;
    }
    if ((null != i && (i.id === t.id || (i.isThread() && i.parent_id === t.id))) || R.Ay.getMentionCount(t.id) > 0)
        return !0;
    for (let e in s[t.id])
        if (R.Ay.getMentionCount(e) > 0 || R.Ay.hasUnread(e) || R.Ay.hasRecentlyVisitedAndRead(e)) return !0;
    if (e.mutedChannelIds.has(t.id) || (null != t.parent_id && e.mutedChannelIds.has(t.parent_id))) return !1;
    let r = y.A.getNewChannelIds(e.id),
        o = Array.from(r).sort((e, t) => D.default.compare(t, e));
    return !!((r.has(t.id) && o.indexOf(t.id) < z) || R.Ay.hasRecentlyVisitedAndRead(t.id));
}
let eA = new Set(Object.values(M.n));
