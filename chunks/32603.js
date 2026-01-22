n.d(t, {
    Ay: () => et,
    HP: () => Z,
    PU: () => X,
    TF: () => J,
    Xt: () => q,
    bK: () => $,
    go: () => eb,
    rR: () => z,
    wF: () => ey,
    xu: () => es,
    yO: () => Q,
}),
    n(896048),
    n(65821),
    n(321073),
    n(114821),
    n(339614),
    n(667532),
    n(638769);
var r = n(284009),
    i = n.n(r),
    a = n(735438),
    s = n.n(a),
    o = n(933958),
    l = n(587895),
    c = n(309698),
    u = n(717125),
    d = n(473529),
    f = n(698441),
    p = n(164956),
    _ = n(99712),
    h = n(240935),
    m = n(50827),
    g = n(395504),
    E = n(454058),
    b = n(272720),
    y = n(56595),
    O = n(863005),
    A = n(152007),
    v = n(95701),
    S = n(924985),
    I = n(734057),
    T = n(945886),
    C = n(71393),
    N = n(576705),
    R = n(222823),
    w = n(309010),
    P = n(543465),
    D = n(977997),
    x = n(607567),
    L = n(403362),
    j = n(661191),
    M = n(669715),
    k = n(551851),
    U = n(281405),
    G = n(652215),
    V = n(746080),
    F = n(818348);
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
                B(e, t, n[t]);
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
    Z = 2,
    Q = 3,
    $ = 4,
    J = 5,
    ee = new Set([String(U.n.GUILD_DIRECTORY)]);
class et {
    _areGuildActionRowsUpdated(e, t) {
        var n;
        return !s().isEqual(
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
        return !s().isEqual(null == (n = this.guilds[e]) ? void 0 : n.getChannelNoticeSection().getRows(), t);
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
                s().some(D.A.getVoiceStatesForChannel(t.id)) &&
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
            null != (t = null == (n = this.guilds[e]) ? void 0 : n.updateRecentsCategory()) &&
            t
        );
    }
    nonPositionalChannelIdUpdate(e) {
        let t = I.A.getBasicChannel(e);
        return (
            null != t &&
            null != t.guild_id &&
            null != this.guilds[t.guild_id] &&
            (t instanceof v.YB || null != (t = I.A.getChannel(e))) &&
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
            selectedChannel: I.A.getChannel(w.A.getChannelId()),
            selectedVoiceChannelId: w.A.getVoiceChannelId(),
            activeJoinedRelevantThreads: O.A.getActiveJoinedRelevantThreadsForGuild(this.id),
            activeJoinedUnreadThreads: O.A.getActiveJoinedUnreadThreadsForGuild(this.id),
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
            case q:
                throw Error("Invalid section. Use getChannelNoticeSection instead");
            case X:
                throw Error("Invalid section. Use getGuildActionSection instead");
            case Z:
                return this.favoritesCategory;
            case $:
                return this.noParentCategory;
            case this.recentsSectionNumber:
                return this.recentsCategory;
            case this.voiceChannelsSectionNumber:
                return this.voiceChannelsCategory;
            default:
                return this.getSortedNamedCategories()[e - J];
        }
    }
    getNamedCategoryFromSection(e) {
        return (
            (e -= J),
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
        let t = eT(e);
        if (null != t)
            return [
                {
                    row: this.getGuildActionSection().getRows().indexOf(t),
                    section: X,
                },
            ];
        let n = [],
            r = I.A.getChannel(e);
        if (null == r || null == e) return n;
        let i = r.isThread();
        if ((i && (r = I.A.getChannel(r.parent_id)), null == r)) return n;
        let a = this.favoritesCategory.getShownChannelIds().indexOf(r.id);
        a >= 0 &&
            n.push({
                section: Z,
                row: a,
            });
        let o = this.recentsCategory.getShownChannelIds().indexOf(r.id);
        if (
            (o >= 0 &&
                n.push({
                    section: this.recentsSectionNumber,
                    row: o,
                }),
            r.type === G.rbe.GUILD_CATEGORY)
        )
            return [
                {
                    section:
                        s().findIndex(this.getSortedNamedCategories(), (e) => e.id === (null == r ? void 0 : r.id)) + J,
                },
            ];
        let l = this.getCategory(r),
            c = l instanceof ei ? $ : this.getSortedNamedCategories().indexOf(l) + J,
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
            s = !1,
            o = [],
            l = [];
        for (let e of this.getSortedCategories()) {
            let i = (null == t ? void 0 : t.ignoreRecents) && e === this.recentsCategory;
            for (let t of e.getShownChannelIds()) {
                let c = e.channels[t];
                a && (c.id === n.id ? (a = !1) : i || o.push(c)),
                    s && !i && l.push(c),
                    a || s || c.id !== r.id || (s = !0);
            }
        }
        return [o, e, l];
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
            let n = I.A.getChannel(e);
            if (null != n)
                if (n.id in this.favoritesCategory.channels) t = [this.favoritesCategory.channels[n.id]];
                else if (n.id in this.recentsCategory.channels) t = [this.recentsCategory.channels[n.id]];
                else {
                    let r = this.getCategory(n);
                    null != r && null != r.channels[e] && (t = [r.channels[e]]);
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
            if (null == t || !t.ignoreRecents || n !== this.recentsCategory)
                for (let t of n.getShownChannelIds()) {
                    let r = n.channels[t];
                    for (let t of (e(r.record), r.threadIds)) {
                        let n = I.A.getChannel(t);
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
            (this.hideMutedChannels = P.Ay.isGuildCollapsed(this.id)),
            (this.mutedChannelIds = P.Ay.getMutedChannels(this.id)),
            (this.optedInChannels =
                null != (r = P.Ay.getOptedInChannelsWithPendingUpdates(this.id))
                    ? r
                    : P.Ay.getOptedInChannels(this.id)),
            (this.optInEnabled = (0, g.WW)(this.id)),
            (this.hideResourceChannels = (0, d.K)(this.id)),
            (this.favoriteChannelIds = new Set(null != (a = P.Ay.getGuildFavorites(this.id)) ? a : [])),
            (this.suggestedFavoriteChannelId = h.A.getSuggestedChannelId(this.id)),
            (this.collapsedCategoryIds = S.A.getCollapsedCategories());
        const o = I.A.getMutableGuildChannelsForGuild(this.id),
            l = C.A.getGuild(this.id);
        (this.moderatorReportChannelId = null != l ? (0, b.A)(l) : null),
            (this.moderatorReportChannelEnabled = null != l && (0, y.A)(l));
        const c = {},
            u = [],
            f = {};
        for (const e in o) {
            const t = o[e];
            t.type === G.rbe.GUILD_CATEGORY && ((c[t.id] = t), (f[t.id] = []));
        }
        const p = [],
            m = [],
            E = [],
            O = this.initializationData;
        for (const e in o) {
            const t = o[e];
            if (t.type !== G.rbe.GUILD_CATEGORY) {
                if (t.type === G.rbe.GUILD_DIRECTORY) {
                    null == l || l.features.has(G.GuildFeatures.HUB) || E.push(t);
                    continue;
                }
                eS(this, t, O)
                    ? p.push(t)
                    : (t.type === G.rbe.GUILD_VOICE || t.type === G.rbe.GUILD_STAGE_VOICE) &&
                      (null != t.parent_id && null != c[t.parent_id] && m.push(c[t.parent_id]), m.push(t)),
                    null != t.parent_id && t.parent_id in f ? f[t.parent_id].push(t) : u.push(t);
            }
        }
        for (const e in ((this.categories = {}), f)) this.categories[e] = new ea(this, c[e], f[e], O);
        (this.recentsSectionNumber = Q),
            (this.favoritesSectionNumber = Z),
            (this.noParentCategory = new ei(this, u, O)),
            (this.favoritesCategory = new es(this, O)),
            (this.recentsCategory = (0, _.i)() ? new eo(this, o, O) : new el(this, p, O)),
            (this.voiceChannelsCategory = new eu(this, m, c, O)),
            (this.guildActionSection = new ef(t, E.length > 0)),
            (this.channelNoticeSection = new ed(n)),
            i()(!("null" in this.categories), "somehow a null got into categories"),
            (this.voiceChannelsSectionNumber = J + s().size(this.categories));
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
        return 0 === e.length && this.shouldShowEmptyCategory() ? [K] : e;
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
                        return t.isGuildVocal() ? t.position + 10000 : t.position;
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
            (this.channels = s()(t)
                .map((e) => new e_(this, e, n))
                .keyBy((e) => e.id)
                .value());
    }
}
class ea extends er {
    shouldShowEmptyCategory() {
        return !!(
            super.shouldShowEmptyCategory() ||
            (N.A.can(F.xB.MANAGE_CHANNELS, this.record) &&
                N.A.can(F.xB.VIEW_CHANNEL, this.record) &&
                s().isEmpty(this.channels) &&
                (!this.guild.optInEnabled || this.guild.optedInChannels.has(this.id)))
        );
    }
    constructor(e, t, n, r) {
        for (const i of (super(e),
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
class es extends er {
    updateChannel(e, t) {
        let n = e.id in this.channels && P.Ay.isFavorite(e.guild_id, e.id),
            r = h.A.getSuggestedChannelId(e.guild_id);
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
        if ((super(e), !e.optInEnabled && !eO())) return;
        this.channels = s()(null != (n = P.Ay.getGuildFavorites(e.id)) ? n : [])
            .map((e) => I.A.getChannel(e))
            .filter(L.Vq)
            .map((e) => new eh(this, e, t))
            .keyBy((e) => e.id)
            .value();
        const r = h.A.getSuggestedChannelId(e.id),
            i = I.A.getChannel(r);
        null != i &&
            null != r &&
            (this.channels[r] = new eh(
                this,
                i,
                W(H({}, t), {
                    activeJoinedRelevantThreads: {},
                    activeJoinedUnreadThreads: {},
                }),
            ));
    }
}
class eo extends er {
    shouldShowEmptyCategory() {
        return this.enabled && this.isCollapsed && super.shouldShowEmptyCategory();
    }
    updateAllChannels(e) {
        return Object.values(this.channels).reduce((t, n) => this.updateChannel(n.record, e) || t, !1);
    }
    updateChannel(e, t) {
        if (!this.enabled) return !1;
        if ((0, v.fT)(e.type)) {
            let t = this.channels[e.parent_id];
            return null != t && this.updateShownChannelIds(t);
        }
        if (!(0, v.ig)(e.type)) return !1;
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
                ? s()(this.channels)
                      .filter((t) => t.renderLevel >= e)
                      .map((e) => [e.id, e.lastMessageTimestamp, e.renderLevel])
                      .filter((e) => {
                          let [, t, n] = e;
                          return 4 === n || (t > 0 && Date.now() - t < eo.MAX_TIMESTAMP_DELTA);
                      })
                      .sortBy((e) => {
                          let [, t, n] = e;
                          return -(t - (4 === n ? 0 : j.DISCORD_EPOCH));
                      })
                      .take(eo.MAX_RECENT_CHANNELS)
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
                this.shownChannelIds.length > eo.MAX_RECENT_CHANNELS &&
                    (this.shownChannelIds = this.shownChannelIds.slice(0, eo.MAX_RECENT_CHANNELS)),
                !0
            );
        }
        return !1;
    }
    constructor(e, t, n) {
        if (
            (super(e),
            B(this, "enabled", !1),
            (this.isCollapsed = m.A.isCollapsed(e.id)),
            (this.enabled = eO() && Object.keys(t).length >= eo.MIN_READABLE_CHANNELS),
            this.enabled)
        )
            for (const e of Object.values(t))
                (0, v.ig)(e.type) && !(0, v.fT)(e.type) && (this.channels[e.id] = new eg(this, e, n));
    }
}
B(eo, "MIN_READABLE_CHANNELS", 7), B(eo, "MAX_RECENT_CHANNELS", 10), B(eo, "MAX_TIMESTAMP_DELTA", 604800000);
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
            if (eS(this.guild, e, t) && null == n)
                return (this.channels[e.id] = new em(this, e, t)), this.invalidate(), !0;
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
    constructor(e, t, n) {
        if ((super(e), !e.optInEnabled || p.A.isFullServerPreview(e.id))) return;
        (this.isCollapsed = !1),
            (this.isMuted = !1),
            (this.channels = s()(t)
                .map((e) => new em(this, e, n))
                .keyBy((e) => e.id)
                .value());
    }
}
function ec(e, t) {
    if (e.record.type === G.rbe.GUILD_CATEGORY) return e.record.position;
    if (null != e.record.parent_id) {
        var n, r;
        return null != (n = null == (r = t[e.record.parent_id]) ? void 0 : r.position) ? n : -1;
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
        return 0 === e.length && this.getHiddenChannelIds().length > 0 ? [K] : e;
    }
    getShownChannelIds() {
        if (!this.guild.optInEnabled) return [];
        if (null == this.shownChannelIds) {
            let t = s()(this.channels)
                .filter((e) => 4 === e.renderLevel)
                .orderBy(
                    [
                        (e) => ec(e, this.categoriesById),
                        (e) => (e.record.type === G.rbe.GUILD_CATEGORY ? -1 : e.record.position),
                    ],
                    ["asc", "asc"],
                )
                .value();
            this.shownChannelIds = [];
            for (let n = 0; n < t.length; n++) {
                var e;
                let r = t[n];
                (n < t.length - 1 &&
                    r.record.type === G.rbe.GUILD_CATEGORY &&
                    (null == (e = t[n + 1]) ? void 0 : e.record.type) === G.rbe.GUILD_CATEGORY) ||
                    ((n !== t.length - 1 || r.record.type !== G.rbe.GUILD_CATEGORY) && this.shownChannelIds.push(r.id));
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
        (this.isCollapsed = k.A.isVoiceCategoryCollapsed(e.id)),
            (this.isMuted = !1),
            (this.categoriesById = n),
            (this.channels = s()(t)
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
            t && this.guildActionRows.push(String(U.n.GUILD_DIRECTORY));
    }
}
class ep {
    get isMuted() {
        return this.category.guild.mutedChannelIds.has(this.id);
    }
    get isCollapsed() {
        return T.A.isCollapsed(this.id);
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
        let r = this.computeState(t);
        return (
            (r.renderLevel === this.renderLevel && s().isEqual(r.threadIds, this.threadIds)) ||
                ((this.renderLevel = r.renderLevel),
                (this.threadIds = r.threadIds),
                (this.threadCount = s().size(r.threadIds)),
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
        const { renderLevel: r, threadIds: i } = this.computeState(n);
        (this.renderLevel = r),
            (this.threadCount = s().size(i)),
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
        if (!N.A.can(F.xB.VIEW_CHANNEL, this.record)) {
            if (this.id === r)
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
            l = this.category.guild;
        if (eA(l, this.record))
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
            ? l.optInEnabled && l.hideResourceChannels && this.record.hasFlag(V.lx.IS_GUILD_RESOURCE_CHANNEL)
                ? {
                      renderLevel: c ? 4 : 1,
                      threadIds: p,
                  }
                : !l.optInEnabled || l.optedInChannels.has(this.id) || (null != o && l.optedInChannels.has(o))
                  ? c || d || !s().isEmpty(p) || R.Ay.getMentionCount(this.id) > 0
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
                                (null != o && l.mutedChannelIds.has(o)) ||
                                this.record.isGuildVocal() ||
                                this.record.type === G.rbe.GUILD_STORE ||
                                ((0, v.ig)(this.record.type) && !R.Ay.hasUnread(this.record.id)))
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
class eh extends ep {
    computeState(e) {
        var t;
        let { selectedChannel: n, selectedVoiceChannelId: r, activeJoinedRelevantThreads: i } = e;
        return N.A.can(F.xB.VIEW_CHANNEL, this.record)
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
class em extends ep {
    computeState(e) {
        var t;
        let { selectedChannel: n, selectedVoiceChannelId: r, activeJoinedRelevantThreads: i } = e;
        return N.A.can(F.xB.VIEW_CHANNEL, this.record)
            ? eS(this.category.guild, this.record, e)
                ? {
                      renderLevel: ev(this, e) ? 4 : 3,
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
                  : 2 === t && eS(this.category.guild, this.record, e) && (t = 3),
                3 === t && ev(this, e) && (t = 4),
                (n = s().sortBy(n, (e) => -R.Ay.lastMessageTimestamp(e)));
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
        return !N.A.can(F.xB.VIEW_CHANNEL, this.record) || 4 === e || 3 === e || eA(t, this.record)
            ? 1
            : this.category.isCollapsed
              ? s().some(D.A.getVoiceStatesForChannel(this.record.id))
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
        case G.rbe.GUILD_VOICE: {
            let r = f.Ay.getActiveEventByChannel(e.id);
            if (null != r)
                return {
                    type: "event",
                    name: r.name,
                };
            let i = x.Ay.getVoiceStatesForChannel(e);
            if (n && t && (0, M.t)(i)) return { type: "go-live" };
            let a = c.A.getChannelStatus(e);
            if (null != a && a.length > 0)
                return {
                    type: "voice",
                    text: a,
                };
            let s = o.Ay.getEmbeddedActivitiesForChannel(e.id)
                .map((e) => {
                    var t;
                    return null == (t = l.A.getApplication(e.applicationId)) ? void 0 : t.name;
                })
                .filter(L.Vq);
            if (s.length > 0)
                return {
                    type: "embedded-activities",
                    name: s.join(", "),
                };
            return null;
        }
        case G.rbe.GUILD_STAGE_VOICE: {
            let t = f.Ay.getActiveEventByChannel(e.id);
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
        o = null != n && n.isThread() && n.parent_id === e.id;
    if (v.wE.has(e.type)) {
        let e = s()
            .sortBy(Object.values(t), (e) => -e.joinTimestamp)
            .map((e) => e.channel.id);
        return a
            ? e
            : o
              ? (n.id in t || e.unshift(n.id), e)
              : i
                ? e.filter((e) => !A.A.isMuted(e) || R.Ay.getMentionCount(e) > 0)
                : e;
    }
    return [];
}
function eO() {
    return !1;
}
function eA(e, t) {
    return e.favoriteChannelIds.has(t.id) && (e.optInEnabled || eO());
}
function ev(e, t) {
    let { selectedChannel: n, activeJoinedRelevantThreads: r } = t;
    if (R.Ay.getMentionCount(e.id) > 0) return !0;
    for (let t in r[e.id]) if (R.Ay.getMentionCount(t) > 0) return !0;
    if (null != n && (n.id === e.id || (n.isThread() && n.parent_id === e.id))) return !eO();
    let i = E.A.getNewChannelIds(e.category.guild.id);
    if (i.size > z);
    else if (i.has(e.id)) return !0;
    return !1;
}
function eS(e, t, n) {
    let { selectedChannel: r, activeJoinedRelevantThreads: i } = n;
    if (
        t.type === G.rbe.GUILD_DIRECTORY ||
        !e.optInEnabled ||
        e.optedInChannels.has(t.id) ||
        t.isThread() ||
        (null != t.parent_id && e.optedInChannels.has(t.parent_id)) ||
        (e.hideResourceChannels && t.hasFlag(V.lx.IS_GUILD_RESOURCE_CHANNEL))
    )
        return !1;
    if (t.isGuildVocal()) {
        let n = k.A.isVoiceCategoryCollapsed(e.id);
        if (!n) return !1;
        let r = s().some(D.A.getVoiceStatesForChannel(t.id));
        if (n && r) return !1;
    }
    if ((null != r && (r.id === t.id || (r.isThread() && r.parent_id === t.id))) || R.Ay.getMentionCount(t.id) > 0)
        return !0;
    for (let e in i[t.id])
        if (R.Ay.getMentionCount(e) > 0 || R.Ay.hasUnread(e) || R.Ay.hasRecentlyVisitedAndRead(e)) return !0;
    if (e.mutedChannelIds.has(t.id) || (null != t.parent_id && e.mutedChannelIds.has(t.parent_id))) return !1;
    let a = E.A.getNewChannelIds(e.id),
        o = Array.from(a).sort((e, t) => j.default.compare(t, e));
    return !!((a.has(t.id) && o.indexOf(t.id) < z) || R.Ay.hasRecentlyVisitedAndRead(t.id));
}
let eI = new Set(Object.values(U.n));
function eT(e) {
    if (null == e) return null;
    if (eI.has(e)) return e;
    let t = I.A.getChannel(e);
    return (null == t ? void 0 : t.isDirectory()) ? U.n.GUILD_DIRECTORY : null;
}
