n.d(t, {
    Bz: () => eC,
    Cb: () => Y,
    Fq: () => q,
    PB: () => J,
    VR: () => el,
    ZP: () => et,
    p2: () => X,
    wF: () => $,
    wZ: () => K,
    wd: () => Q,
    zR: () => eb,
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
    u = n(12498),
    c = n(430198),
    d = n(931261),
    h = n(924301),
    p = n(160404),
    g = n(798423),
    f = n(18036),
    v = n(798379),
    m = n(398758),
    C = n(22082),
    b = n(893908),
    y = n(953252),
    O = n(601070),
    S = n(569471),
    E = n(131704),
    _ = n(680089),
    I = n(592125),
    w = n(58468),
    j = n(430824),
    P = n(496675),
    N = n(306680),
    x = n(944486),
    T = n(9156),
    A = n(979651),
    L = n(938475),
    D = n(823379),
    Z = n(709054),
    R = n(968358),
    M = n(203818),
    G = n(295454),
    U = n(443063),
    B = n(981631),
    F = n(176505),
    k = n(231338);
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
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                V(e, t, n[t]);
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
let W = "placeholder-channel-id",
    Y = 2,
    q = 0,
    K = 1,
    X = 2,
    J = 3,
    Q = 4,
    $ = 5,
    ee = new Set([String(U.z.GUILD_DIRECTORY)]);
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
        if (null == t || !(0, G.K)("recents_channels_active_now_check")) return !1;
        let n = t.getCategoryFromSection(t.voiceChannelsSectionNumber),
            i = t.getCategoryFromSection(t.recentsSectionNumber);
        for (let e in i.channels) {
            let t = i.channels[e];
            if (
                2 === t.renderLevel &&
                t.record.isGuildVocal() &&
                null == n.channels[t.id] &&
                l().some(A.Z.getVoiceStatesForChannel(t.id)) &&
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
        let t = I.Z.getBasicChannel(e);
        return (
            null != t &&
            null != t.guild_id &&
            null != this.guilds[t.guild_id] &&
            (t instanceof E.Sf || null != (t = I.Z.getChannel(e))) &&
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
class en {
    get initializationData() {
        return {
            selectedChannel: I.Z.getChannel(x.Z.getChannelId()),
            selectedVoiceChannelId: x.Z.getVoiceChannelId(),
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
            case K:
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
        return r()(e > K, "Invalid section"), e !== this.recentsSectionNumber && this.getRows()[e][t] === W;
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
            let t = I.Z.getChannel(e);
            return (null == t ? void 0 : t.isDirectory()) ? U.z.GUILD_DIRECTORY : null;
        })(e);
        if (null != t)
            return [
                {
                    row: this.getGuildActionSection().getRows().indexOf(t),
                    section: K,
                },
            ];
        let n = [],
            i = I.Z.getChannel(e);
        if (null == i || null == e) return n;
        let r = i.isThread();
        if ((r && (i = I.Z.getChannel(i.parent_id)), null == i)) return n;
        let s = this.favoritesCategory.getShownChannelIds().indexOf(i.id);
        s >= 0 &&
            n.push({
                section: X,
                row: s,
            });
        let o = this.recentsCategory.getShownChannelIds().indexOf(i.id);
        if (
            (o >= 0 &&
                n.push({
                    section: this.recentsSectionNumber,
                    row: o,
                }),
            i.type === B.d4z.GUILD_CATEGORY)
        )
            return [
                {
                    section:
                        l().findIndex(this.getSortedNamedCategories(), (e) => e.id === (null == i ? void 0 : i.id)) + $,
                },
            ];
        let a = this.getCategory(i),
            u = a instanceof er ? Q : this.getSortedNamedCategories().indexOf(a) + $,
            c = a.getShownChannelIds().indexOf(i.id);
        if (u >= 0 && c >= 0) {
            let t = r ? a.channels[i.id].threadIds.indexOf(e) : 0;
            n.push({
                section: u,
                row: c,
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
                let u = e.channels[t];
                s && (u.id === n.id ? (s = !1) : r || o.push(u)),
                    l && !r && a.push(u),
                    s || l || u.id !== i.id || (l = !0);
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
            let n = I.Z.getChannel(e);
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
                        let n = I.Z.getChannel(t);
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
            (this.hideMutedChannels = T.ZP.isGuildCollapsed(this.id)),
            (this.mutedChannelIds = T.ZP.getMutedChannels(this.id)),
            (this.optedInChannels =
                null != (i = T.ZP.getOptedInChannelsWithPendingUpdates(this.id))
                    ? i
                    : T.ZP.getOptedInChannels(this.id)),
            (this.optInEnabled = (0, m.r1)(this.id)),
            (this.hideResourceChannels = (0, d.s)(this.id)),
            (this.favoriteChannelIds = new Set(null != (s = T.ZP.getGuildFavorites(this.id)) ? s : [])),
            (this.suggestedFavoriteChannelId = f.Z.getSuggestedChannelId(this.id)),
            (this.collapsedCategoryIds = _.Z.getCollapsedCategories());
        let o = I.Z.getMutableGuildChannelsForGuild(this.id),
            a = j.Z.getGuild(this.id);
        (this.moderatorReportChannelId = null != a ? (0, b.Z)(a) : null),
            (this.moderatorReportChannelEnabled = null != a && (0, y.Z)(a));
        let u = {},
            c = [],
            h = {};
        for (let e in o) {
            let t = o[e];
            t.type === B.d4z.GUILD_CATEGORY && ((u[t.id] = t), (h[t.id] = []));
        }
        let p = [],
            v = [],
            C = [],
            O = this.initializationData;
        for (let e in o) {
            let t = o[e];
            if (t.type !== B.d4z.GUILD_CATEGORY) {
                if (t.type === B.d4z.GUILD_DIRECTORY) {
                    null == a || a.features.has(B.oNc.HUB) || C.push(t);
                    continue;
                }
                eS(this, t, O)
                    ? p.push(t)
                    : (t.type === B.d4z.GUILD_VOICE || t.type === B.d4z.GUILD_STAGE_VOICE) &&
                      (null != t.parent_id && null != u[t.parent_id] && v.push(u[t.parent_id]), v.push(t)),
                    null != t.parent_id && t.parent_id in h ? h[t.parent_id].push(t) : c.push(t);
            }
        }
        for (let e in ((this.categories = {}), h)) this.categories[e] = new es(this, u[e], h[e], O);
        (this.recentsSectionNumber = J),
            (this.favoritesSectionNumber = X),
            (this.noParentCategory = new er(this, c, O)),
            (this.favoritesCategory = new el(this, O)),
            (this.recentsCategory = (0, g.Q)() ? new eo(this, o, O) : new ea(this, p, O)),
            (this.voiceChannelsCategory = new eu(this, v, u, O)),
            (this.guildActionSection = new ed(t, C.length > 0)),
            (this.channelNoticeSection = new ec(n)),
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
        return 0 === e.length && this.shouldShowEmptyCategory() ? [W] : e;
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
            (P.Z.can(k.Pl.MANAGE_CHANNELS, this.record) &&
                P.Z.can(k.Pl.VIEW_CHANNEL, this.record) &&
                l().isEmpty(this.channels) &&
                (!this.guild.optInEnabled || this.guild.optedInChannels.has(this.id)))
        );
    }
    constructor(e, t, n, i) {
        for (let r of (super(e),
        V(this, "id", void 0),
        V(this, "record", void 0),
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
            (t = z(H({}, t), {
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
            .map((e) => I.Z.getChannel(e))
            .filter(D.lm)
            .map((e) => new eg(this, e, t))
            .keyBy((e) => e.id)
            .value();
        let i = f.Z.getSuggestedChannelId(e.id),
            r = I.Z.getChannel(i);
        null != r &&
            null != i &&
            (this.channels[i] = new eg(
                this,
                r,
                z(H({}, t), {
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
        if ((0, E.Q5)(e.type)) {
            let t = this.channels[e.parent_id];
            return null != t && this.updateShownChannelIds(t);
        }
        if (!(0, E.vc)(e.type)) return !1;
        let n = super.updateChannel(e, t),
            i = this.channels[e.id];
        return null == i
            ? ((i = new ev(this, e, t)), (this.channels[e.id] = i), this.invalidate(), !0)
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
                          return -(t - (4 === n ? 0 : Z.DISCORD_EPOCH));
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
            V(this, "enabled", !1),
            (this.isCollapsed = v.Z.isCollapsed(e.id)),
            (this.enabled = !1),
            this.enabled)
        )
            for (let e of Object.values(t))
                (0, E.vc)(e.type) && !(0, E.Q5)(e.type) && (this.channels[e.id] = new ev(this, e, n));
    }
}
V(eo, "MIN_READABLE_CHANNELS", 7), V(eo, "MAX_RECENT_CHANNELS", 10), V(eo, "MAX_TIMESTAMP_DELTA", 604800000);
class ea extends ei {
    updateAllChannels(e) {
        let t = !1;
        return (
            Z.default.keys(this.channels).forEach((n) => {
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
class eu extends ei {
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
        return 0 === e.length && this.getHiddenChannelIds().length > 0 ? [W] : e;
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
                                if (e.record.type === B.d4z.GUILD_CATEGORY) return e.record.position;
                                if (null != e.record.parent_id) {
                                    var n, i;
                                    return null != (i = null == (n = t[e.record.parent_id]) ? void 0 : n.position)
                                        ? i
                                        : -1;
                                }
                                return -1;
                            })(e, this.categoriesById),
                        (e) => (e.record.type === B.d4z.GUILD_CATEGORY ? -1 : e.record.position),
                    ],
                    ["asc", "asc"],
                )
                .value();
            this.shownChannelIds = [];
            for (let n = 0; n < t.length; n++) {
                var e;
                let i = t[n];
                (n < t.length - 1 &&
                    i.record.type === B.d4z.GUILD_CATEGORY &&
                    (null == (e = t[n + 1]) ? void 0 : e.record.type) === B.d4z.GUILD_CATEGORY) ||
                    ((n !== t.length - 1 || i.record.type !== B.d4z.GUILD_CATEGORY) && this.shownChannelIds.push(i.id));
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
            V(this, "categoriesById", void 0),
            V(this, "hiddenChannelIds", void 0),
            (this.categoriesById = n),
            (this.hiddenChannelIds = null),
            !e.optInEnabled)
        )
            return;
        (this.isCollapsed = M.Z.isVoiceCategoryCollapsed(e.id)),
            (this.isMuted = !1),
            (this.categoriesById = n),
            (this.channels = l()(t)
                .map((e) => new em(this, e, i))
                .keyBy((e) => e.id)
                .value());
    }
}
class ec {
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
        V(this, "guildActionRows", void 0),
            (this.guildActionRows = e.map(String)),
            t && this.guildActionRows.push(String(U.z.GUILD_DIRECTORY));
    }
}
class eh {
    get isMuted() {
        return this.category.guild.mutedChannelIds.has(this.id);
    }
    get isCollapsed() {
        return w.Z.isCollapsed(this.id);
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
        return eC(this.record, this.isCollapsed || this.category.isCollapsed, this.category.guild.optInEnabled);
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
        if (!P.Z.can(k.Pl.VIEW_CHANNEL, this.record)) {
            if (this.id === i)
                return {
                    renderLevel: 4,
                    threadIds: [],
                };
            else if (!c.Z.isChannelGatedAndVisible(this.record.guild_id, this.record.id))
                return {
                    renderLevel: 1,
                    threadIds: [],
                };
        }
        let o = this.record.parent_id,
            a = this.category.guild;
        if (ey(a, this.record))
            return {
                renderLevel: 1,
                threadIds: [],
            };
        let u = (null == n ? void 0 : n.id) === this.id || i === this.id,
            d = null != n && n.isThread() && n.parent_id === this.id,
            h =
                null != (t = u || d || (!this.category.isCollapsed && !this.isMuted) ? r[this.id] : s[this.id])
                    ? t
                    : {},
            p = eb(this.record, h, n, i, a.hideMutedChannels);
        return this.id !== a.moderatorReportChannelId || a.moderatorReportChannelEnabled
            ? a.optInEnabled && a.hideResourceChannels && this.record.hasFlag(F.zZ.IS_GUILD_RESOURCE_CHANNEL)
                ? {
                      renderLevel: u ? 4 : 1,
                      threadIds: p,
                  }
                : !a.optInEnabled || a.optedInChannels.has(this.id) || (null != o && a.optedInChannels.has(o))
                  ? u || d || !l().isEmpty(p) || N.ZP.getMentionCount(this.id) > 0
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
                                this.record.type === B.d4z.GUILD_STORE ||
                                ((0, E.vc)(this.record.type) && !N.ZP.hasUnread(this.record.id)))
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
        return P.Z.can(k.Pl.VIEW_CHANNEL, this.record)
            ? {
                  renderLevel: 4,
                  threadIds: eb(this.record, null != (t = r[this.id]) ? t : {}, n, i, !1),
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
        return P.Z.can(k.Pl.VIEW_CHANNEL, this.record)
            ? eS(this.category.guild, this.record, e)
                ? {
                      renderLevel: eO(this, e) ? 4 : 3,
                      threadIds: eb(this.record, null != (t = r[this.id]) ? t : {}, n, i, !1),
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
class ev extends ep {
    computeState(e) {
        let { renderLevel: t, threadIds: n } = super.computeState(e);
        if (t > 1) {
            let i = this.record.parent_id,
                r = this.category.guild;
            r.mutedChannelIds.has(this.id) || (null != i && r.mutedChannelIds.has(i))
                ? (t = 2)
                : 4 === t
                  ? (t = 3)
                  : 2 === t && eS(this.category.guild, this.record, e) && (t = 3),
                3 === t && eO(this, e) && (t = 4),
                (n = l().sortBy(n, (e) => -N.ZP.lastMessageTimestamp(e)));
        }
        return {
            renderLevel: t,
            threadIds: n,
        };
    }
}
class em extends ep {
    getRenderLevel(e) {
        let t = this.category.guild;
        return !P.Z.can(k.Pl.VIEW_CHANNEL, this.record) || 4 === e || 3 === e || ey(t, this.record)
            ? 1
            : this.category.isCollapsed
              ? l().some(A.Z.getVoiceStatesForChannel(this.record.id))
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
            {
                threadIds: [],
                renderLevel: n,
            }
        );
    }
}
function eC(e, t, n) {
    switch (e.type) {
        case B.d4z.GUILD_VOICE: {
            let i = h.ZP.getActiveEventByChannel(e.id);
            if (null != i)
                return {
                    type: "event",
                    name: i.name,
                };
            let r = L.ZP.getVoiceStatesForChannel(e);
            if (n && t && (0, R.a)(r)) return { type: "go-live" };
            let s = u.Z.getChannelStatus(e);
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
        case B.d4z.GUILD_STAGE_VOICE: {
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
function eb(e, t, n, i, r) {
    let s = null != n && (n.id === e.id || i === e.id),
        o = null != n && n.isThread() && n.parent_id === e.id;
    if (E.uC.has(e.type)) {
        let e = l()
            .sortBy(Object.values(t), (e) => -e.joinTimestamp)
            .map((e) => e.channel.id);
        return s
            ? e
            : o
              ? (n.id in t || e.unshift(n.id), e)
              : r
                ? e.filter((e) => !S.Z.isMuted(e) || N.ZP.getMentionCount(e) > 0)
                : e;
    }
    return [];
}
function ey(e, t) {
    return e.favoriteChannelIds.has(t.id) && (e.optInEnabled || !1);
}
function eO(e, t) {
    let { selectedChannel: n, activeJoinedRelevantThreads: i } = t;
    if (N.ZP.getMentionCount(e.id) > 0) return !0;
    for (let t in i[e.id]) if (N.ZP.getMentionCount(t) > 0) return !0;
    if (null != n && (n.id === e.id || (n.isThread() && n.parent_id === e.id))) return !0;
    let r = C.Z.getNewChannelIds(e.category.guild.id);
    if (r.size > Y);
    else if (r.has(e.id)) return !0;
    return !1;
}
function eS(e, t, n) {
    let { selectedChannel: i, activeJoinedRelevantThreads: r } = n;
    if (
        t.type === B.d4z.GUILD_DIRECTORY ||
        !e.optInEnabled ||
        e.optedInChannels.has(t.id) ||
        t.isThread() ||
        (null != t.parent_id && e.optedInChannels.has(t.parent_id)) ||
        (e.hideResourceChannels && t.hasFlag(F.zZ.IS_GUILD_RESOURCE_CHANNEL))
    )
        return !1;
    if (t.isGuildVocal()) {
        if (!(0, G.K)("should_show_in_recents")) return !1;
        let n = M.Z.isVoiceCategoryCollapsed(e.id);
        if (!n) return !1;
        let i = l().some(A.Z.getVoiceStatesForChannel(t.id));
        if (n && i) return !1;
    }
    if ((null != i && (i.id === t.id || (i.isThread() && i.parent_id === t.id))) || N.ZP.getMentionCount(t.id) > 0)
        return !0;
    for (let e in r[t.id])
        if (N.ZP.getMentionCount(e) > 0 || N.ZP.hasUnread(e) || N.ZP.hasRecentlyVisitedAndRead(e)) return !0;
    if (e.mutedChannelIds.has(t.id) || (null != t.parent_id && e.mutedChannelIds.has(t.parent_id))) return !1;
    let s = C.Z.getNewChannelIds(e.id),
        o = Array.from(s).sort((e, t) => Z.default.compare(t, e));
    return !!((s.has(t.id) && o.indexOf(t.id) < Y) || N.ZP.hasRecentlyVisitedAndRead(t.id));
}
let eE = new Set(Object.values(U.z));
