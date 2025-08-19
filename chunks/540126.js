n.d(t, {
    Bz: () => ev,
    Cb: () => Y,
    Fq: () => q,
    PB: () => J,
    VR: () => el,
    ZP: () => et,
    p2: () => K,
    wF: () => $,
    wZ: () => X,
    wd: () => Q,
    zR: () => eC,
}),
    n(388685),
    n(415506),
    n(539854),
    n(361932),
    n(187205),
    n(290780),
    n(642613);
var i = n(512722),
    r = n.n(i),
    s = n(392711),
    l = n.n(s),
    o = n(317381),
    a = n(812206),
    c = n(12498),
    u = n(430198),
    d = n(931261),
    h = n(924301),
    p = n(160404),
    g = n(798423),
    f = n(18036),
    m = n(798379),
    b = n(398758),
    v = n(22082),
    C = n(893908),
    _ = n(953252),
    y = n(601070),
    O = n(569471),
    S = n(131704),
    E = n(680089),
    w = n(592125),
    I = n(58468),
    j = n(430824),
    P = n(496675),
    N = n(306680),
    x = n(944486),
    T = n(9156),
    R = n(979651),
    A = n(938475),
    D = n(823379),
    L = n(709054),
    Z = n(968358),
    B = n(203818),
    M = n(295454),
    k = n(443063),
    G = n(981631),
    U = n(176505),
    H = n(231338);
function F(e, t, n) {
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
function W(e) {
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
                F(e, t, n[t]);
            });
    }
    return e;
}
function z(e, t) {
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
let V = "placeholder-channel-id",
    Y = 2,
    q = 0,
    X = 1,
    K = 2,
    J = 3,
    Q = 4,
    $ = 5,
    ee = new Set([String(k.z.GUILD_DIRECTORY)]);
class et {
    _areGuildActionRowsUpdated(e, t) {
        var n;
        return !l().isEqual(
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
        return !l().isEqual(null == (n = this.guilds[e]) ? void 0 : n.getChannelNoticeSection().getRows(), t);
    }
    _areGuildVocalChannelsInRecentsInNeedOfAppearingInActiveNow(e) {
        let t = this.guilds[e];
        if (null == t || !(0, M.K)("recents_channels_active_now_check")) return !1;
        let n = t.getCategoryFromSection(t.voiceChannelsSectionNumber),
            i = t.getCategoryFromSection(t.recentsSectionNumber);
        for (let e in i.channels) {
            let t = i.channels[e];
            if (
                2 === t.renderLevel &&
                t.record.isGuildVocal() &&
                null == n.channels[t.id] &&
                l().some(R.Z.getVoiceStatesForChannel(t.id)) &&
                N.ZP.getMentionCount(t.id) > 0
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
        let t = w.Z.getBasicChannel(e);
        return (
            null != t &&
            null != t.guild_id &&
            null != this.guilds[t.guild_id] &&
            (t instanceof S.Sf || null != (t = w.Z.getChannel(e))) &&
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
        F(this, "guilds", {});
    }
}
class en {
    get initializationData() {
        return {
            selectedChannel: w.Z.getChannel(x.Z.getChannelId()),
            selectedVoiceChannelId: x.Z.getVoiceChannelId(),
            activeJoinedRelevantThreads: y.Z.getActiveJoinedRelevantThreadsForGuild(this.id),
            activeJoinedUnreadThreads: y.Z.getActiveJoinedUnreadThreadsForGuild(this.id),
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
            case q:
                throw Error("Invalid section. Use getChannelNoticeSection instead");
            case X:
                throw Error("Invalid section. Use getGuildActionSection instead");
            case K:
                return this.favoritesCategory;
            case Q:
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
            r()(e >= 0 && e < this.getSortedNamedCategories().length, "invalid section index ".concat(e)),
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
        return r()(e > X, "Invalid section"), e !== this.recentsSectionNumber && this.getRows()[e][t] === V;
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
            let t = w.Z.getChannel(e);
            return (null == t ? void 0 : t.isDirectory()) ? k.z.GUILD_DIRECTORY : null;
        })(e);
        if (null != t)
            return [
                {
                    row: this.getGuildActionSection().getRows().indexOf(t),
                    section: X,
                },
            ];
        let n = [],
            i = w.Z.getChannel(e);
        if (null == i || null == e) return n;
        let r = i.isThread();
        if ((r && (i = w.Z.getChannel(i.parent_id)), null == i)) return n;
        let s = this.favoritesCategory.getShownChannelIds().indexOf(i.id);
        s >= 0 &&
            n.push({
                section: K,
                row: s,
            });
        let o = this.recentsCategory.getShownChannelIds().indexOf(i.id);
        if (
            (o >= 0 &&
                n.push({
                    section: this.recentsSectionNumber,
                    row: o,
                }),
            i.type === G.d4z.GUILD_CATEGORY)
        )
            return [
                {
                    section:
                        l().findIndex(this.getSortedNamedCategories(), (e) => e.id === (null == i ? void 0 : i.id)) + $,
                },
            ];
        let a = this.getCategory(i),
            c = a instanceof er ? Q : this.getSortedNamedCategories().indexOf(a) + $,
            u = a.getShownChannelIds().indexOf(i.id);
        if (c >= 0 && u >= 0) {
            let t = r ? a.channels[i.id].threadIds.indexOf(e) : 0;
            n.push({
                section: c,
                row: u,
                threadOffset: t,
            });
        }
        let d = this.voiceChannelsCategory.getShownChannelIds().indexOf(i.id);
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
        r()(e.length > 0, "must have at least one channel in the slice");
        let n = e[0],
            i = e[e.length - 1],
            s = !0,
            l = !1,
            o = [],
            a = [];
        for (let e of this.getSortedCategories()) {
            let r = (null == t ? void 0 : t.ignoreRecents) && e === this.recentsCategory;
            for (let t of e.getShownChannelIds()) {
                let c = e.channels[t];
                s && (c.id === n.id ? (s = !1) : r || o.push(c)),
                    l && !r && a.push(c),
                    s || l || c.id !== i.id || (l = !0);
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
            let n = w.Z.getChannel(e);
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
                        let n = w.Z.getChannel(t);
                        null != n && e(n);
                    }
                }
    }
    forEachChannel(e, t) {
        for (let n of this.getSortedCategories())
            if (null == t || !t.ignoreRecents || n !== this.recentsCategory) for (let t of n.getChannelRecords()) e(t);
    }
    constructor(e, t, n) {
        var i, s;
        F(this, "id", void 0),
            F(this, "hideMutedChannels", void 0),
            F(this, "favoritesSectionNumber", void 0),
            F(this, "recentsSectionNumber", void 0),
            F(this, "voiceChannelsSectionNumber", void 0),
            F(this, "mutedChannelIds", void 0),
            F(this, "optedInChannels", void 0),
            F(this, "optInEnabled", void 0),
            F(this, "hideResourceChannels", void 0),
            F(this, "favoriteChannelIds", void 0),
            F(this, "suggestedFavoriteChannelId", void 0),
            F(this, "collapsedCategoryIds", void 0),
            F(this, "moderatorReportChannelId", void 0),
            F(this, "moderatorReportChannelEnabled", void 0),
            F(this, "categories", void 0),
            F(this, "noParentCategory", void 0),
            F(this, "favoritesCategory", void 0),
            F(this, "recentsCategory", void 0),
            F(this, "voiceChannelsCategory", void 0),
            F(this, "guildActionSection", void 0),
            F(this, "channelNoticeSection", void 0),
            F(this, "sortedNamedCategories", void 0),
            F(this, "sections", void 0),
            F(this, "rows", void 0),
            F(this, "firstVoiceChannel", void 0),
            F(this, "allChannelsById", void 0),
            F(this, "version", void 0),
            (this.id = e),
            (this.sortedNamedCategories = null),
            (this.sections = null),
            (this.rows = null),
            (this.firstVoiceChannel = void 0),
            (this.allChannelsById = null),
            (this.version = 0),
            (this.hideMutedChannels = T.ZP.isGuildCollapsed(this.id)),
            (this.mutedChannelIds = T.ZP.getMutedChannels(this.id)),
            (this.optedInChannels =
                null != (i = T.ZP.getOptedInChannelsWithPendingUpdates(this.id))
                    ? i
                    : T.ZP.getOptedInChannels(this.id)),
            (this.optInEnabled = (0, b.r1)(this.id)),
            (this.hideResourceChannels = (0, d.s)(this.id)),
            (this.favoriteChannelIds = new Set(null != (s = T.ZP.getGuildFavorites(this.id)) ? s : [])),
            (this.suggestedFavoriteChannelId = f.Z.getSuggestedChannelId(this.id)),
            (this.collapsedCategoryIds = E.Z.getCollapsedCategories());
        let o = w.Z.getMutableGuildChannelsForGuild(this.id),
            a = j.Z.getGuild(this.id);
        (this.moderatorReportChannelId = null != a ? (0, C.Z)(a) : null),
            (this.moderatorReportChannelEnabled = null != a && (0, _.Z)(a));
        let c = {},
            u = [],
            h = {};
        for (let e in o) {
            let t = o[e];
            t.type === G.d4z.GUILD_CATEGORY && ((c[t.id] = t), (h[t.id] = []));
        }
        let p = [],
            m = [],
            v = [],
            y = this.initializationData;
        for (let e in o) {
            let t = o[e];
            if (t.type !== G.d4z.GUILD_CATEGORY) {
                if (t.type === G.d4z.GUILD_DIRECTORY) {
                    null == a || a.features.has(G.oNc.HUB) || v.push(t);
                    continue;
                }
                eO(this, t, y)
                    ? p.push(t)
                    : (t.type === G.d4z.GUILD_VOICE || t.type === G.d4z.GUILD_STAGE_VOICE) &&
                      (null != t.parent_id && null != c[t.parent_id] && m.push(c[t.parent_id]), m.push(t)),
                    null != t.parent_id && t.parent_id in h ? h[t.parent_id].push(t) : u.push(t);
            }
        }
        for (let e in ((this.categories = {}), h)) this.categories[e] = new es(this, c[e], h[e], y);
        (this.recentsSectionNumber = J),
            (this.favoritesSectionNumber = K),
            (this.noParentCategory = new er(this, u, y)),
            (this.favoritesCategory = new el(this, y)),
            (this.recentsCategory = (0, g.Q)() ? new eo(this, o, y) : new ea(this, p, y)),
            (this.voiceChannelsCategory = new ec(this, m, c, y)),
            (this.guildActionSection = new ed(t, v.length > 0)),
            (this.channelNoticeSection = new eu(n)),
            r()(!("null" in this.categories), "somehow a null got into categories"),
            (this.voiceChannelsSectionNumber = $ + l().size(this.categories));
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
        return 0 === e.length && this.shouldShowEmptyCategory() ? [V] : e;
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
                        return t.isGuildVocal() ? t.position + 10000 : t.position;
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
        F(this, "guild", void 0),
            F(this, "isMuted", void 0),
            F(this, "isCollapsed", void 0),
            F(this, "position", void 0),
            F(this, "channels", void 0),
            F(this, "shownChannelIds", void 0),
            (this.guild = e),
            (this.isMuted = !1),
            (this.isCollapsed = !1),
            (this.position = -1),
            (this.channels = {}),
            (this.shownChannelIds = null);
    }
}
class er extends ei {
    constructor(e, t, n) {
        super(e),
            (this.channels = l()(t)
                .map((e) => new ep(this, e, n))
                .keyBy((e) => e.id)
                .value());
    }
}
class es extends ei {
    shouldShowEmptyCategory() {
        return !!(
            super.shouldShowEmptyCategory() ||
            (P.Z.can(H.Pl.MANAGE_CHANNELS, this.record) &&
                P.Z.can(H.Pl.VIEW_CHANNEL, this.record) &&
                l().isEmpty(this.channels) &&
                (!this.guild.optInEnabled || this.guild.optedInChannels.has(this.id)))
        );
    }
    constructor(e, t, n, i) {
        for (let r of (super(e),
        F(this, "id", void 0),
        F(this, "record", void 0),
        (this.record = t),
        (this.id = t.id),
        (this.isCollapsed = !0 === e.collapsedCategoryIds[t.id]),
        (this.isMuted = e.mutedChannelIds.has(t.id)),
        (this.channels = {}),
        n))
            this.channels[r.id] = new ep(this, r, i);
    }
}
class el extends ei {
    updateChannel(e, t) {
        let n = e.id in this.channels && T.ZP.isFavorite(e.guild_id, e.id),
            i = f.Z.getSuggestedChannelId(e.guild_id);
        return (e.id !== i ||
            n ||
            (t = z(W({}, t), {
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
        this.channels = l()(null != (n = T.ZP.getGuildFavorites(e.id)) ? n : [])
            .map((e) => w.Z.getChannel(e))
            .filter(D.lm)
            .map((e) => new eg(this, e, t))
            .keyBy((e) => e.id)
            .value();
        let i = f.Z.getSuggestedChannelId(e.id),
            r = w.Z.getChannel(i);
        null != r &&
            null != i &&
            (this.channels[i] = new eg(
                this,
                r,
                z(W({}, t), {
                    activeJoinedRelevantThreads: {},
                    activeJoinedUnreadThreads: {},
                }),
            ));
    }
}
class eo extends ei {
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
            i = this.channels[e.id];
        return null == i
            ? ((i = new em(this, e, t)), (this.channels[e.id] = i), this.invalidate(), !0)
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
                          return 4 === n || (t > 0 && Date.now() - t < eo.MAX_TIMESTAMP_DELTA);
                      })
                      .sortBy((e) => {
                          let [, t, n] = e;
                          return -(t - (4 === n ? 0 : L.DISCORD_EPOCH));
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
            F(this, "enabled", !1),
            (this.isCollapsed = m.Z.isCollapsed(e.id)),
            (this.enabled = !1),
            this.enabled)
        )
            for (let e of Object.values(t))
                (0, S.vc)(e.type) && !(0, S.Q5)(e.type) && (this.channels[e.id] = new em(this, e, n));
    }
}
F(eo, "MIN_READABLE_CHANNELS", 7), F(eo, "MAX_RECENT_CHANNELS", 10), F(eo, "MAX_TIMESTAMP_DELTA", 604800000);
class ea extends ei {
    updateAllChannels(e) {
        let t = !1;
        return (
            L.default.keys(this.channels).forEach((n) => {
                this.updateChannel(this.channels[n].record, e) && (t = !0);
            }),
            t
        );
    }
    updateChannel(e, t) {
        let n = super.updateChannel(e, t);
        if (this.guild.optInEnabled) {
            let n = this.channels[e.id];
            if (eO(this.guild, e, t) && null == n)
                return (this.channels[e.id] = new ef(this, e, t)), this.invalidate(), !0;
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
        if ((super(e), !e.optInEnabled || p.Z.isFullServerPreview(e.id))) return;
        (this.isCollapsed = !1),
            (this.isMuted = !1),
            (this.channels = l()(t)
                .map((e) => new ef(this, e, n))
                .keyBy((e) => e.id)
                .value());
    }
}
class ec extends ei {
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
        return 0 === e.length && this.getHiddenChannelIds().length > 0 ? [V] : e;
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
                                if (e.record.type === G.d4z.GUILD_CATEGORY) return e.record.position;
                                if (null != e.record.parent_id) {
                                    var n, i;
                                    return null != (i = null == (n = t[e.record.parent_id]) ? void 0 : n.position)
                                        ? i
                                        : -1;
                                }
                                return -1;
                            })(e, this.categoriesById),
                        (e) => (e.record.type === G.d4z.GUILD_CATEGORY ? -1 : e.record.position),
                    ],
                    ["asc", "asc"],
                )
                .value();
            this.shownChannelIds = [];
            for (let n = 0; n < t.length; n++) {
                var e;
                let i = t[n];
                (n < t.length - 1 &&
                    i.record.type === G.d4z.GUILD_CATEGORY &&
                    (null == (e = t[n + 1]) ? void 0 : e.record.type) === G.d4z.GUILD_CATEGORY) ||
                    ((n !== t.length - 1 || i.record.type !== G.d4z.GUILD_CATEGORY) && this.shownChannelIds.push(i.id));
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
            F(this, "categoriesById", void 0),
            F(this, "hiddenChannelIds", void 0),
            (this.categoriesById = n),
            (this.hiddenChannelIds = null),
            !e.optInEnabled)
        )
            return;
        (this.isCollapsed = B.Z.isVoiceCategoryCollapsed(e.id)),
            (this.isMuted = !1),
            (this.categoriesById = n),
            (this.channels = l()(t)
                .map((e) => new eb(this, e, i))
                .keyBy((e) => e.id)
                .value());
    }
}
class eu {
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
        F(this, "rows", void 0), (this.rows = e);
    }
}
class ed {
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
        F(this, "guildActionRows", void 0),
            (this.guildActionRows = e.map(String)),
            t && this.guildActionRows.push(String(k.z.GUILD_DIRECTORY));
    }
}
class eh {
    get isMuted() {
        return this.category.guild.mutedChannelIds.has(this.id);
    }
    get isCollapsed() {
        return I.Z.isCollapsed(this.id);
    }
    get isFirstVoiceChannel() {
        return this.category.getFirstVoiceChannel() === this;
    }
    get lastMessageTimestamp() {
        return Math.max(N.ZP.lastMessageTimestamp(this.id), ...this.threadIds.map(N.ZP.lastMessageTimestamp));
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
        F(this, "category", void 0),
            F(this, "record", void 0),
            F(this, "id", void 0),
            F(this, "position", void 0),
            F(this, "threadIds", void 0),
            F(this, "threadCount", void 0),
            F(this, "subtitle", void 0),
            F(this, "renderLevel", void 0),
            (this.category = e),
            (this.record = t),
            (this.position = -1),
            (this.threadIds = []),
            (this.threadCount = 0),
            (this.subtitle = null),
            (this.renderLevel = 1),
            (this.id = t.id);
        let { renderLevel: i, threadIds: r } = this.computeState(n);
        (this.renderLevel = i),
            (this.threadCount = l().size(r)),
            (this.threadIds = r),
            4 === i && (this.subtitle = this.computeSubtitle());
    }
}
class ep extends eh {
    computeState(e) {
        var t;
        let {
            selectedChannel: n,
            selectedVoiceChannelId: i,
            activeJoinedRelevantThreads: r,
            activeJoinedUnreadThreads: s,
        } = e;
        if (!P.Z.can(H.Pl.VIEW_CHANNEL, this.record)) {
            if (this.id === i)
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
        let o = this.record.parent_id,
            a = this.category.guild;
        if (e_(a, this.record))
            return {
                renderLevel: 1,
                threadIds: [],
            };
        let c = (null == n ? void 0 : n.id) === this.id || i === this.id,
            d = null != n && n.isThread() && n.parent_id === this.id,
            h =
                null != (t = c || d || (!this.category.isCollapsed && !this.isMuted) ? r[this.id] : s[this.id])
                    ? t
                    : {},
            p = eC(this.record, h, n, i, a.hideMutedChannels);
        return this.id !== a.moderatorReportChannelId || a.moderatorReportChannelEnabled
            ? a.optInEnabled && a.hideResourceChannels && this.record.hasFlag(U.zZ.IS_GUILD_RESOURCE_CHANNEL)
                ? {
                      renderLevel: c ? 4 : 1,
                      threadIds: p,
                  }
                : !a.optInEnabled || a.optedInChannels.has(this.id) || (null != o && a.optedInChannels.has(o))
                  ? c || d || !l().isEmpty(p) || N.ZP.getMentionCount(this.id) > 0
                      ? {
                            renderLevel: 4,
                            threadIds: p,
                        }
                      : a.hideMutedChannels && a.mutedChannelIds.has(this.id)
                        ? {
                              renderLevel: 2,
                              threadIds: p,
                          }
                        : this.category.isCollapsed &&
                            (a.mutedChannelIds.has(this.id) ||
                                (null != o && a.mutedChannelIds.has(o)) ||
                                this.record.isGuildVocal() ||
                                this.record.type === G.d4z.GUILD_STORE ||
                                ((0, S.vc)(this.record.type) && !N.ZP.hasUnread(this.record.id)))
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
class eg extends eh {
    computeState(e) {
        var t;
        let { selectedChannel: n, selectedVoiceChannelId: i, activeJoinedRelevantThreads: r } = e;
        return P.Z.can(H.Pl.VIEW_CHANNEL, this.record)
            ? {
                  renderLevel: 4,
                  threadIds: eC(this.record, null != (t = r[this.id]) ? t : {}, n, i, !1),
              }
            : {
                  renderLevel: 1,
                  threadIds: [],
              };
    }
}
class ef extends eh {
    computeState(e) {
        var t;
        let { selectedChannel: n, selectedVoiceChannelId: i, activeJoinedRelevantThreads: r } = e;
        return P.Z.can(H.Pl.VIEW_CHANNEL, this.record)
            ? eO(this.category.guild, this.record, e)
                ? {
                      renderLevel: ey(this, e) ? 4 : 3,
                      threadIds: eC(this.record, null != (t = r[this.id]) ? t : {}, n, i, !1),
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
class em extends ep {
    computeState(e) {
        let { renderLevel: t, threadIds: n } = super.computeState(e);
        if (t > 1) {
            let i = this.record.parent_id,
                r = this.category.guild;
            r.mutedChannelIds.has(this.id) || (null != i && r.mutedChannelIds.has(i))
                ? (t = 2)
                : 4 === t
                  ? (t = 3)
                  : 2 === t && eO(this.category.guild, this.record, e) && (t = 3),
                3 === t && ey(this, e) && (t = 4),
                (n = l().sortBy(n, (e) => -N.ZP.lastMessageTimestamp(e)));
        }
        return {
            renderLevel: t,
            threadIds: n,
        };
    }
}
class eb extends ep {
    getRenderLevel(e) {
        let t = this.category.guild;
        return !P.Z.can(H.Pl.VIEW_CHANNEL, this.record) || 4 === e || 3 === e || e_(t, this.record)
            ? 1
            : this.category.isCollapsed
              ? l().some(R.Z.getVoiceStatesForChannel(this.record.id))
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
        case G.d4z.GUILD_VOICE: {
            let i = h.ZP.getActiveEventByChannel(e.id);
            if (null != i)
                return {
                    type: "event",
                    name: i.name,
                };
            let r = A.ZP.getVoiceStatesForChannel(e);
            if (n && t && (0, Z.a)(r)) return { type: "go-live" };
            let s = c.Z.getChannelStatus(e);
            if (null != s && s.length > 0)
                return {
                    type: "voice",
                    text: s,
                };
            let l = o.ZP.getEmbeddedActivitiesForChannel(e.id)
                .map((e) => {
                    var t;
                    return null == (t = a.Z.getApplication(e.applicationId)) ? void 0 : t.name;
                })
                .filter(D.lm);
            if (l.length > 0)
                return {
                    type: "embedded-activities",
                    name: l.join(", "),
                };
            return null;
        }
        case G.d4z.GUILD_STAGE_VOICE: {
            let t = h.ZP.getActiveEventByChannel(e.id);
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
function eC(e, t, n, i, r) {
    let s = null != n && (n.id === e.id || i === e.id),
        o = null != n && n.isThread() && n.parent_id === e.id;
    if (S.uC.has(e.type)) {
        let e = l()
            .sortBy(Object.values(t), (e) => -e.joinTimestamp)
            .map((e) => e.channel.id);
        return s
            ? e
            : o
              ? (n.id in t || e.unshift(n.id), e)
              : r
                ? e.filter((e) => !O.Z.isMuted(e) || N.ZP.getMentionCount(e) > 0)
                : e;
    }
    return [];
}
function e_(e, t) {
    return e.favoriteChannelIds.has(t.id) && (e.optInEnabled || !1);
}
function ey(e, t) {
    let { selectedChannel: n, activeJoinedRelevantThreads: i } = t;
    if (N.ZP.getMentionCount(e.id) > 0) return !0;
    for (let t in i[e.id]) if (N.ZP.getMentionCount(t) > 0) return !0;
    if (null != n && (n.id === e.id || (n.isThread() && n.parent_id === e.id))) return !0;
    let r = v.Z.getNewChannelIds(e.category.guild.id);
    if (r.size > Y);
    else if (r.has(e.id)) return !0;
    return !1;
}
function eO(e, t, n) {
    let { selectedChannel: i, activeJoinedRelevantThreads: r } = n;
    if (
        t.type === G.d4z.GUILD_DIRECTORY ||
        !e.optInEnabled ||
        e.optedInChannels.has(t.id) ||
        t.isThread() ||
        (null != t.parent_id && e.optedInChannels.has(t.parent_id)) ||
        (e.hideResourceChannels && t.hasFlag(U.zZ.IS_GUILD_RESOURCE_CHANNEL))
    )
        return !1;
    if (t.isGuildVocal()) {
        if (!(0, M.K)("should_show_in_recents")) return !1;
        let n = B.Z.isVoiceCategoryCollapsed(e.id);
        if (!n) return !1;
        let i = l().some(R.Z.getVoiceStatesForChannel(t.id));
        if (n && i) return !1;
    }
    if ((null != i && (i.id === t.id || (i.isThread() && i.parent_id === t.id))) || N.ZP.getMentionCount(t.id) > 0)
        return !0;
    for (let e in r[t.id])
        if (N.ZP.getMentionCount(e) > 0 || N.ZP.hasUnread(e) || N.ZP.hasRecentlyVisitedAndRead(e)) return !0;
    if (e.mutedChannelIds.has(t.id) || (null != t.parent_id && e.mutedChannelIds.has(t.parent_id))) return !1;
    let s = v.Z.getNewChannelIds(e.id),
        o = Array.from(s).sort((e, t) => L.default.compare(t, e));
    return !!((s.has(t.id) && o.indexOf(t.id) < Y) || N.ZP.hasRecentlyVisitedAndRead(t.id));
}
let eS = new Set(Object.values(k.z));
