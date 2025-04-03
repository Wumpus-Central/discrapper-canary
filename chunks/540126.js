n.d(t, {
    Bz: () => ep,
    Cb: () => H,
    Fq: () => k,
    PB: () => J,
    VR: () => ei,
    ZP: () => Q,
    p2: () => W,
    wF: () => X,
    wZ: () => Y,
    wd: () => K,
    zR: () => ef
}),
    n(47120),
    n(411104),
    n(653041),
    n(13667),
    n(390547),
    n(733860),
    n(230036);
var i = n(512722),
    s = n.n(i),
    l = n(392711),
    r = n.n(l),
    a = n(317381),
    d = n(812206),
    o = n(12498),
    h = n(430198),
    u = n(931261),
    c = n(924301),
    g = n(160404),
    C = n(798423),
    p = n(18036),
    f = n(798379),
    v = n(398758),
    I = n(22082),
    S = n(601070),
    y = n(569471),
    w = n(131704),
    E = n(680089),
    _ = n(592125),
    m = n(58468),
    b = n(430824),
    O = n(496675),
    N = n(306680),
    L = n(944486),
    P = n(9156),
    Z = n(979651),
    R = n(938475),
    A = n(823379),
    T = n(709054),
    D = n(968358),
    G = n(203818),
    U = n(443063),
    V = n(981631),
    M = n(176505),
    B = n(231338);
function F(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function z(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                F(e, t, n[t]);
            });
    }
    return e;
}
function j(e, t) {
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
let x = 'placeholder-channel-id',
    H = 2,
    k = 0,
    Y = 1,
    W = 2,
    J = 3,
    K = 4,
    X = 5,
    q = new Set([String(U.z.GUILD_DIRECTORY)]);
class Q {
    _areGuildActionRowsUpdated(e, t) {
        var n;
        return !r().isEqual(
            null == (n = this.guilds[e])
                ? void 0
                : n
                      .getGuildActionSection()
                      .getRows()
                      .filter((e) => !q.has(e)),
            t
        );
    }
    _areChannelNoticeRowsUpdated(e, t) {
        var n;
        return !r().isEqual(null == (n = this.guilds[e]) ? void 0 : n.getChannelNoticeSection().getRows(), t);
    }
    getGuild(e, t, n) {
        return (!(e in this.guilds) || this._areGuildActionRowsUpdated(e, t) || this._areChannelNoticeRowsUpdated(e, n)) && (this.guilds[e] = new $(e, t, n)), this.guilds[e];
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
        var t, n;
        return null != e && e in this.guilds && null != (n = null == (t = this.guilds[e]) ? void 0 : t.updateRecentsCategory()) && n;
    }
    nonPositionalChannelIdUpdate(e) {
        let t = _.Z.getBasicChannel(e);
        return null != t && null != t.guild_id && null != this.guilds[t.guild_id] && (t instanceof w.Sf || null != (t = _.Z.getChannel(e))) && this.nonPositionalChannelUpdate(t);
    }
    nonPositionalChannelUpdate(e) {
        if (null == e.guild_id) return !1;
        let t = this.guilds[e.guild_id];
        if (null == t) return !1;
        let n = !1;
        return e.isThread() && (n = this.nonPositionalChannelIdUpdate(e.parent_id)), t.nonPositionalChannelUpdate(e) || n;
    }
    updateSubtitles(e, t) {
        (null == e ? Object.values(this.guilds) : e in this.guilds ? [this.guilds[e]] : []).forEach((e) => e.updateSubtitles(t));
    }
    constructor() {
        F(this, 'guilds', {});
    }
}
class $ {
    get initializationData() {
        return {
            selectedChannel: _.Z.getChannel(L.Z.getChannelId()),
            selectedVoiceChannelId: L.Z.getVoiceChannelId(),
            activeJoinedRelevantThreads: S.Z.getActiveJoinedRelevantThreadsForGuild(this.id),
            activeJoinedUnreadThreads: S.Z.getActiveJoinedUnreadThreadsForGuild(this.id)
        };
    }
    invalidate() {
        (this.sections = null), (this.rows = null), (this.sortedNamedCategories = null), (this.firstVoiceChannel = void 0), this.version++;
    }
    getSortedNamedCategories() {
        return null == this.sortedNamedCategories && this.getRows(), this.sortedNamedCategories;
    }
    getSortedCategories() {
        return [this.favoritesCategory, this.recentsCategory, this.noParentCategory, ...this.getSortedNamedCategories(), this.voiceChannelsCategory];
    }
    getSections() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return (null == this.sections && (this.sections = this.getRows().map((e) => e.length)), e) ? [...this.sections] : this.sections;
    }
    getRows() {
        if (null == this.rows) {
            (this.sortedNamedCategories = r().sortBy(Object.values(this.categories), (e) => e.record.position)), (this.rows = [this.channelNoticeSection, this.guildActionSection, this.favoritesCategory, this.recentsCategory, this.noParentCategory, ...this.sortedNamedCategories, this.voiceChannelsCategory].map((e) => e.getRows()));
            let e = 0;
            for (let t of [this.noParentCategory, ...this.sortedNamedCategories]) for (let n of ((t.position = ++e), t.getShownChannelIds())) t.channels[n].position = ++e;
        }
        return this.rows;
    }
    getCategoryFromSection(e) {
        switch (e) {
            case k:
                throw Error('Invalid section. Use getChannelNoticeSection instead');
            case Y:
                throw Error('Invalid section. Use getGuildActionSection instead');
            case W:
                return this.favoritesCategory;
            case K:
                return this.noParentCategory;
            case this.recentsSectionNumber:
                return this.recentsCategory;
            case this.voiceChannelsSectionNumber:
                return this.voiceChannelsCategory;
            default:
                return this.getSortedNamedCategories()[e - X];
        }
    }
    getNamedCategoryFromSection(e) {
        return (e -= X), s()(e >= 0 && e < this.getSortedNamedCategories().length, 'invalid section index '.concat(e)), this.getSortedNamedCategories()[e];
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
                  channel: i
              };
    }
    isPlaceholderRow(e, t) {
        return s()(e > Y, 'Invalid section'), e !== this.recentsSectionNumber && this.getRows()[e][t] === x;
    }
    getFirstVoiceChannel(e) {
        if (void 0 === this.firstVoiceChannel) {
            if (((this.firstVoiceChannel = this.favoritesCategory.getFirstVoiceChannel(e)), null != this.firstVoiceChannel || ((this.firstVoiceChannel = this.noParentCategory.getFirstVoiceChannel(e)), null != this.firstVoiceChannel))) return this.firstVoiceChannel;
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
            let t = _.Z.getChannel(e);
            return (null == t ? void 0 : t.isDirectory()) ? U.z.GUILD_DIRECTORY : null;
        })(e);
        if (null != t)
            return [
                {
                    row: this.getGuildActionSection().getRows().indexOf(t),
                    section: Y
                }
            ];
        let n = [],
            i = _.Z.getChannel(e);
        if (null == i || null == e) return n;
        let s = i.isThread();
        if ((s && (i = _.Z.getChannel(i.parent_id)), null == i)) return n;
        let l = this.favoritesCategory.getShownChannelIds().indexOf(i.id);
        l >= 0 &&
            n.push({
                section: W,
                row: l
            });
        let a = this.recentsCategory.getShownChannelIds().indexOf(i.id);
        if (
            (a >= 0 &&
                n.push({
                    section: this.recentsSectionNumber,
                    row: a
                }),
            i.type === V.d4z.GUILD_CATEGORY)
        )
            return [{ section: r().findIndex(this.getSortedNamedCategories(), (e) => e.id === (null == i ? void 0 : i.id)) + X }];
        let d = this.getCategory(i),
            o = d instanceof et ? K : this.getSortedNamedCategories().indexOf(d) + X,
            h = d.getShownChannelIds().indexOf(i.id);
        if (o >= 0 && h >= 0) {
            let t = s ? d.channels[i.id].threadIds.indexOf(e) : 0;
            n.push({
                section: o,
                row: h,
                threadOffset: t
            });
        }
        let u = this.voiceChannelsCategory.getShownChannelIds().indexOf(i.id);
        return (
            u >= 0 &&
                n.push({
                    section: this.voiceChannelsSectionNumber,
                    row: u
                }),
            n
        );
    }
    getCategory(e) {
        return null != e.parent_id && e.parent_id in this.categories ? this.categories[e.parent_id] : this.noParentCategory;
    }
    updateRecentsCategory() {
        let e = this.recentsCategory.updateAllChannels(this.initializationData);
        return e && this.invalidate(), e;
    }
    nonPositionalChannelUpdate(e) {
        let t = this.initializationData,
            n = this.getCategory(e).updateChannel(e, t);
        return this.favoritesCategory.updateChannel(e, t) && (n = !0), this.recentsCategory.updateChannel(e, t) && (n = !0), this.voiceChannelsCategory.updateChannel(e, t) && (n = !0), n && this.invalidate(), n;
    }
    getSlicedChannels(e, t) {
        s()(e.length > 0, 'must have at least one channel in the slice');
        let n = e[0],
            i = e[e.length - 1],
            l = !0,
            r = !1,
            a = [],
            d = [];
        for (let e of this.getSortedCategories()) {
            let s = (null == t ? void 0 : t.ignoreRecents) && e === this.recentsCategory;
            for (let t of e.getShownChannelIds()) {
                let o = e.channels[t];
                l && (o.id === n.id ? (l = !1) : s || a.push(o)), r && !s && d.push(o), l || r || o.id !== i.id || (r = !0);
            }
        }
        return [a, e, d];
    }
    getChannels(e) {
        let t = [];
        if (null == this.allChannelsById) for (let e of ((this.allChannelsById = {}), this.getSortedCategories())) for (let t in e.channels) this.allChannelsById[t] = e.channels[t];
        for (let n of e) null != this.allChannelsById[n] && t.push(this.allChannelsById[n]);
        return t;
    }
    updateSubtitles(e) {
        let t = [];
        if (null != e) {
            let n = _.Z.getChannel(e);
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
            if (null == t || !t.ignoreRecents || n !== this.recentsCategory)
                for (let t of n.getShownChannelIds()) {
                    let i = n.channels[t];
                    for (let t of (e(i.record), i.threadIds)) {
                        let n = _.Z.getChannel(t);
                        null != n && e(n);
                    }
                }
    }
    forEachChannel(e, t) {
        for (let n of this.getSortedCategories()) if (null == t || !t.ignoreRecents || n !== this.recentsCategory) for (let t of n.getChannelRecords()) e(t);
    }
    constructor(e, t, n) {
        var i, l;
        F(this, 'id', void 0), F(this, 'hideMutedChannels', void 0), F(this, 'favoritesSectionNumber', void 0), F(this, 'recentsSectionNumber', void 0), F(this, 'voiceChannelsSectionNumber', void 0), F(this, 'mutedChannelIds', void 0), F(this, 'optedInChannels', void 0), F(this, 'optInEnabled', void 0), F(this, 'hideResourceChannels', void 0), F(this, 'favoriteChannelIds', void 0), F(this, 'suggestedFavoriteChannelId', void 0), F(this, 'collapsedCategoryIds', void 0), F(this, 'categories', void 0), F(this, 'noParentCategory', void 0), F(this, 'favoritesCategory', void 0), F(this, 'recentsCategory', void 0), F(this, 'voiceChannelsCategory', void 0), F(this, 'guildActionSection', void 0), F(this, 'channelNoticeSection', void 0), F(this, 'sortedNamedCategories', void 0), F(this, 'sections', void 0), F(this, 'rows', void 0), F(this, 'firstVoiceChannel', void 0), F(this, 'allChannelsById', void 0), F(this, 'version', void 0), (this.id = e), (this.sortedNamedCategories = null), (this.sections = null), (this.rows = null), (this.firstVoiceChannel = void 0), (this.allChannelsById = null), (this.version = 0), (this.hideMutedChannels = P.ZP.isGuildCollapsed(this.id)), (this.mutedChannelIds = P.ZP.getMutedChannels(this.id)), (this.optedInChannels = null != (i = P.ZP.getOptedInChannelsWithPendingUpdates(this.id)) ? i : P.ZP.getOptedInChannels(this.id)), (this.optInEnabled = (0, v.r1)(this.id)), (this.hideResourceChannels = (0, u.s)(this.id)), (this.favoriteChannelIds = new Set(null != (l = P.ZP.getGuildFavorites(this.id)) ? l : [])), (this.suggestedFavoriteChannelId = p.Z.getSuggestedChannelId(this.id)), (this.collapsedCategoryIds = E.Z.getCollapsedCategories());
        let a = _.Z.getMutableGuildChannelsForGuild(this.id),
            d = b.Z.getGuild(this.id),
            o = {},
            h = [],
            c = {};
        for (let e in a) {
            let t = a[e];
            t.type === V.d4z.GUILD_CATEGORY && ((o[t.id] = t), (c[t.id] = []));
        }
        let g = [],
            f = [],
            I = [],
            S = this.initializationData;
        for (let e in a) {
            let t = a[e];
            if (t.type !== V.d4z.GUILD_CATEGORY) {
                if (t.type === V.d4z.GUILD_DIRECTORY) {
                    null == d || d.hasFeature(V.oNc.HUB) || I.push(t);
                    continue;
                }
                eS(this, t, S) ? g.push(t) : (t.type === V.d4z.GUILD_VOICE || t.type === V.d4z.GUILD_STAGE_VOICE) && (null != t.parent_id && null != o[t.parent_id] && f.push(o[t.parent_id]), f.push(t)), null != t.parent_id && t.parent_id in c ? c[t.parent_id].push(t) : h.push(t);
            }
        }
        for (let e in ((this.categories = {}), c)) this.categories[e] = new en(this, o[e], c[e], S);
        (this.recentsSectionNumber = J), (this.favoritesSectionNumber = W), (this.noParentCategory = new et(this, h, S)), (this.favoritesCategory = new ei(this, S)), (this.recentsCategory = (0, C.Q)() ? new es(this, a, S) : new el(this, g, S)), (this.voiceChannelsCategory = new er(this, f, o, S)), (this.guildActionSection = new ed(t, I.length > 0)), (this.channelNoticeSection = new ea(n)), s()(!('null' in this.categories), 'somehow a null got into categories'), (this.voiceChannelsSectionNumber = X + r().size(this.categories));
    }
}
class ee {
    updateChannel(e, t) {
        return !!(e.id in this.channels && this.channels[e.id].updateChannel(e, t)) && (this.invalidate(), !0);
    }
    invalidate() {
        this.shownChannelIds = null;
    }
    getRows() {
        let e = this.getShownChannelIds();
        return 0 === e.length && this.shouldShowEmptyCategory() ? [x] : e;
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
                        return t.isGuildVocal() ? t.position + 10000 : t.position;
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
    constructor(e) {
        F(this, 'guild', void 0), F(this, 'isMuted', void 0), F(this, 'isCollapsed', void 0), F(this, 'position', void 0), F(this, 'channels', void 0), F(this, 'shownChannelIds', void 0), (this.guild = e), (this.isMuted = !1), (this.isCollapsed = !1), (this.position = -1), (this.channels = {}), (this.shownChannelIds = null);
    }
}
class et extends ee {
    constructor(e, t, n) {
        super(e),
            (this.channels = r()(t)
                .map((e) => new eh(this, e, n))
                .keyBy((e) => e.id)
                .value());
    }
}
class en extends ee {
    shouldShowEmptyCategory() {
        return !!(super.shouldShowEmptyCategory() || (O.Z.can(B.Pl.MANAGE_CHANNELS, this.record) && O.Z.can(B.Pl.VIEW_CHANNEL, this.record) && r().isEmpty(this.channels) && (!this.guild.optInEnabled || this.guild.optedInChannels.has(this.id))));
    }
    constructor(e, t, n, i) {
        for (let s of (super(e), F(this, 'id', void 0), F(this, 'record', void 0), (this.record = t), (this.id = t.id), (this.isCollapsed = !0 === e.collapsedCategoryIds[t.id]), (this.isMuted = e.mutedChannelIds.has(t.id)), (this.channels = {}), n)) this.channels[s.id] = new eh(this, s, i);
    }
}
class ei extends ee {
    updateChannel(e, t) {
        let n = e.id in this.channels && P.ZP.isFavorite(e.guild_id, e.id),
            i = p.Z.getSuggestedChannelId(e.guild_id);
        return (e.id !== i ||
            n ||
            (t = j(z({}, t), {
                activeJoinedRelevantThreads: {},
                activeJoinedUnreadThreads: {}
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
        this.channels = r()(null != (n = P.ZP.getGuildFavorites(e.id)) ? n : [])
            .map((e) => _.Z.getChannel(e))
            .filter(A.lm)
            .map((e) => new eu(this, e, t))
            .keyBy((e) => e.id)
            .value();
        let i = p.Z.getSuggestedChannelId(e.id),
            s = _.Z.getChannel(i);
        null != s &&
            null != i &&
            (this.channels[i] = new eu(
                this,
                s,
                j(z({}, t), {
                    activeJoinedRelevantThreads: {},
                    activeJoinedUnreadThreads: {}
                })
            ));
    }
}
class es extends ee {
    shouldShowEmptyCategory() {
        return this.enabled && this.isCollapsed && super.shouldShowEmptyCategory();
    }
    updateAllChannels(e) {
        return Object.values(this.channels).reduce((t, n) => this.updateChannel(n.record, e) || t, !1);
    }
    updateChannel(e, t) {
        if (!this.enabled) return !1;
        if ((0, w.Q5)(e.type)) {
            let t = this.channels[e.parent_id];
            return null != t && this.updateShownChannelIds(t);
        }
        if (!(0, w.vc)(e.type)) return !1;
        let n = super.updateChannel(e, t),
            i = this.channels[e.id];
        return null == i ? ((i = new eg(this, e, t)), (this.channels[e.id] = i), this.invalidate(), !0) : this.updateShownChannelIds(i) || n;
    }
    getFirstVoiceChannel(e) {
        return null;
    }
    getShownChannelIds() {
        if (null == this.shownChannelIds) {
            let e = this.isCollapsed ? 4 : 3;
            this.shownChannelIds = this.enabled
                ? r()(this.channels)
                      .filter((t) => t.renderLevel >= e)
                      .map((e) => [e.id, e.lastMessageTimestamp, e.renderLevel])
                      .filter((e) => {
                          let [, t, n] = e;
                          return 4 === n || (t > 0 && Date.now() - t < es.MAX_TIMESTAMP_DELTA);
                      })
                      .sortBy((e) => {
                          let [, t, n] = e;
                          return -(t - (4 === n ? 0 : T.DISCORD_EPOCH));
                      })
                      .take(es.MAX_RECENT_CHANNELS)
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
        if (e.lastMessageTimestamp > (null == (t = this.channels[this.shownChannelIds[0]]) ? void 0 : t.lastMessageTimestamp)) {
            let t = this.shownChannelIds.indexOf(e.id);
            return t > -1 && this.shownChannelIds.splice(t, 1), this.shownChannelIds.splice(0, 0, e.id), this.shownChannelIds.length > es.MAX_RECENT_CHANNELS && (this.shownChannelIds = this.shownChannelIds.slice(0, es.MAX_RECENT_CHANNELS)), !0;
        }
        return !1;
    }
    constructor(e, t, n) {
        if ((super(e), F(this, 'enabled', !1), (this.isCollapsed = f.Z.isCollapsed(e.id)), (this.enabled = !1), this.enabled)) for (let e of Object.values(t)) (0, w.vc)(e.type) && !(0, w.Q5)(e.type) && (this.channels[e.id] = new eg(this, e, n));
    }
}
F(es, 'MIN_READABLE_CHANNELS', 7), F(es, 'MAX_RECENT_CHANNELS', 10), F(es, 'MAX_TIMESTAMP_DELTA', 604800000);
class el extends ee {
    updateAllChannels(e) {
        let t = !1;
        return (
            T.default.keys(this.channels).forEach((n) => {
                this.updateChannel(this.channels[n].record, e) && (t = !0);
            }),
            t
        );
    }
    updateChannel(e, t) {
        let n = super.updateChannel(e, t);
        if (this.guild.optInEnabled) {
            let n = this.channels[e.id],
                i = eS(this.guild, e, t);
            if (i && null == n) return (this.channels[e.id] = new ec(this, e, t)), this.invalidate(), !0;
            if (!i && null != n) return delete this.channels[e.id], this.invalidate(), !0;
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
                    .filter((e) => 4 === e.renderLevel || 3 === e.renderLevel)
                    .filter((e) => !e.record.isGuildVocal()),
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
    constructor(e, t, n) {
        if ((super(e), !e.optInEnabled || g.Z.isFullServerPreview(e.id))) return;
        (this.isCollapsed = !1),
            (this.isMuted = !1),
            (this.channels = r()(t)
                .map((e) => new ec(this, e, n))
                .keyBy((e) => e.id)
                .value());
    }
}
class er extends ee {
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
        return 0 === e.length && this.getHiddenChannelIds().length > 0 ? [x] : e;
    }
    getShownChannelIds() {
        if (!this.guild.optInEnabled) return [];
        if (null == this.shownChannelIds) {
            let t = r()(this.channels)
                .filter((e) => 4 === e.renderLevel)
                .orderBy(
                    [
                        (e) =>
                            (function (e, t) {
                                if (e.record.type === V.d4z.GUILD_CATEGORY) return e.record.position;
                                if (null != e.record.parent_id) {
                                    var n, i;
                                    return null != (i = null == (n = t[e.record.parent_id]) ? void 0 : n.position) ? i : -1;
                                }
                                return -1;
                            })(e, this.categoriesById),
                        (e) => (e.record.type === V.d4z.GUILD_CATEGORY ? -1 : e.record.position)
                    ],
                    ['asc', 'asc']
                )
                .value();
            this.shownChannelIds = [];
            for (let n = 0; n < t.length; n++) {
                var e;
                let i = t[n];
                (n < t.length - 1 && i.record.type === V.d4z.GUILD_CATEGORY && (null == (e = t[n + 1]) ? void 0 : e.record.type) === V.d4z.GUILD_CATEGORY) || ((n !== t.length - 1 || i.record.type !== V.d4z.GUILD_CATEGORY) && this.shownChannelIds.push(i.id));
            }
        }
        return this.shownChannelIds;
    }
    getFirstVoiceChannel(e) {
        return null;
    }
    constructor(e, t, n, i) {
        if ((super(e), F(this, 'categoriesById', void 0), F(this, 'hiddenChannelIds', void 0), (this.categoriesById = n), (this.hiddenChannelIds = null), !e.optInEnabled)) return;
        (this.isCollapsed = G.Z.isVoiceCategoryCollapsed(e.id)),
            (this.isMuted = !1),
            (this.categoriesById = n),
            (this.channels = r()(t)
                .map((e) => new eC(this, e, i))
                .keyBy((e) => e.id)
                .value());
    }
}
class ea {
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
        F(this, 'rows', void 0), (this.rows = e);
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
        F(this, 'guildActionRows', void 0), (this.guildActionRows = e.map(String)), t && this.guildActionRows.push(String(U.z.GUILD_DIRECTORY));
    }
}
class eo {
    get isMuted() {
        return this.category.guild.mutedChannelIds.has(this.id);
    }
    get isCollapsed() {
        return m.Z.isCollapsed(this.id);
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
        return (i.renderLevel === this.renderLevel && r().isEqual(i.threadIds, this.threadIds)) || ((this.renderLevel = i.renderLevel), (this.threadIds = i.threadIds), (this.threadCount = r().size(i.threadIds)), (n = !0)), 4 === this.renderLevel && this.updateSubtitle() && (n = !0), n;
    }
    updateSubtitle() {
        let e = this.computeSubtitle();
        return !r().isEqual(this.subtitle, e) && ((this.subtitle = e), !0);
    }
    computeSubtitle() {
        return ep(this.record, this.isCollapsed || this.category.isCollapsed, this.category.guild.optInEnabled);
    }
    constructor(e, t, n) {
        F(this, 'category', void 0), F(this, 'record', void 0), F(this, 'id', void 0), F(this, 'position', void 0), F(this, 'threadIds', void 0), F(this, 'threadCount', void 0), F(this, 'subtitle', void 0), F(this, 'renderLevel', void 0), (this.category = e), (this.record = t), (this.position = -1), (this.threadIds = []), (this.threadCount = 0), (this.subtitle = null), (this.renderLevel = 1), (this.id = t.id);
        let { renderLevel: i, threadIds: s } = this.computeState(n);
        (this.renderLevel = i), (this.threadCount = r().size(s)), (this.threadIds = s), 4 === i && (this.subtitle = this.computeSubtitle());
    }
}
class eh extends eo {
    computeState(e) {
        var t;
        let { selectedChannel: n, selectedVoiceChannelId: i, activeJoinedRelevantThreads: s, activeJoinedUnreadThreads: l } = e;
        if (!O.Z.can(B.Pl.VIEW_CHANNEL, this.record)) {
            if (this.id === i)
                return {
                    renderLevel: 4,
                    threadIds: []
                };
            else if (!h.Z.isChannelGatedAndVisible(this.record.guild_id, this.record.id))
                return {
                    renderLevel: 1,
                    threadIds: []
                };
        }
        let a = this.record.parent_id,
            d = this.category.guild;
        if (ev(d, this.record))
            return {
                renderLevel: 1,
                threadIds: []
            };
        let o = (null == n ? void 0 : n.id) === this.id || i === this.id,
            u = null != n && n.isThread() && n.parent_id === this.id,
            c = null != (t = o || u || (!this.category.isCollapsed && !this.isMuted) ? s[this.id] : l[this.id]) ? t : {},
            g = ef(this.record, c, n, i, d.hideMutedChannels);
        return d.optInEnabled && d.hideResourceChannels && this.record.hasFlag(M.zZ.IS_GUILD_RESOURCE_CHANNEL)
            ? {
                  renderLevel: o ? 4 : 1,
                  threadIds: g
              }
            : !d.optInEnabled || d.optedInChannels.has(this.id) || (null != a && d.optedInChannels.has(a))
              ? o || u || !r().isEmpty(g) || N.ZP.getMentionCount(this.id) > 0
                  ? {
                        renderLevel: 4,
                        threadIds: g
                    }
                  : d.hideMutedChannels && d.mutedChannelIds.has(this.id)
                    ? {
                          renderLevel: 2,
                          threadIds: g
                      }
                    : this.category.isCollapsed && (d.mutedChannelIds.has(this.id) || (null != a && d.mutedChannelIds.has(a)) || this.record.isGuildVocal() || this.record.type === V.d4z.GUILD_STORE || ((0, w.vc)(this.record.type) && !N.ZP.hasUnread(this.record.id)))
                      ? {
                            renderLevel: 3,
                            threadIds: g
                        }
                      : {
                            renderLevel: 4,
                            threadIds: g
                        }
              : {
                    renderLevel: 2,
                    threadIds: g
                };
    }
}
class eu extends eo {
    computeState(e) {
        var t;
        let { selectedChannel: n, selectedVoiceChannelId: i, activeJoinedRelevantThreads: s } = e;
        return O.Z.can(B.Pl.VIEW_CHANNEL, this.record)
            ? {
                  renderLevel: 4,
                  threadIds: ef(this.record, null != (t = s[this.id]) ? t : {}, n, i, !1)
              }
            : {
                  renderLevel: 1,
                  threadIds: []
              };
    }
}
class ec extends eo {
    computeState(e) {
        var t;
        let { selectedChannel: n, selectedVoiceChannelId: i, activeJoinedRelevantThreads: s } = e;
        return O.Z.can(B.Pl.VIEW_CHANNEL, this.record)
            ? {
                  renderLevel: eI(this, e) ? 4 : 3,
                  threadIds: ef(this.record, null != (t = s[this.id]) ? t : {}, n, i, !1)
              }
            : {
                  renderLevel: 1,
                  threadIds: []
              };
    }
}
class eg extends eh {
    computeState(e) {
        let { renderLevel: t, threadIds: n } = super.computeState(e);
        if (t > 1) {
            let i = this.record.parent_id,
                s = this.category.guild;
            s.mutedChannelIds.has(this.id) || (null != i && s.mutedChannelIds.has(i)) ? (t = 2) : 4 === t ? (t = 3) : 2 === t && eS(this.category.guild, this.record, e) && (t = 3), 3 === t && eI(this, e) && (t = 4), (n = r().sortBy(n, (e) => -N.ZP.lastMessageTimestamp(e)));
        }
        return {
            renderLevel: t,
            threadIds: n
        };
    }
}
class eC extends eh {
    getRenderLevel(e) {
        let t = this.category.guild;
        return !O.Z.can(B.Pl.VIEW_CHANNEL, this.record) || 4 === e || 3 === e || ev(t, this.record) ? 1 : this.category.isCollapsed ? (r().some(Z.Z.getVoiceStatesForChannel(this.record.id)) ? 4 : 3) : 4;
    }
    computeState(e) {
        let t = super.computeState(e),
            n = this.getRenderLevel(t.renderLevel);
        return (
            4 === n && (this.subtitle = ep(this.record, this.isCollapsed || this.category.isCollapsed, this.category.guild.optInEnabled)),
            {
                threadIds: [],
                renderLevel: n
            }
        );
    }
}
function ep(e, t, n) {
    switch (e.type) {
        case V.d4z.GUILD_VOICE: {
            let i = c.ZP.getActiveEventByChannel(e.id);
            if (null != i)
                return {
                    type: 'event',
                    name: i.name
                };
            let s = R.ZP.getVoiceStatesForChannel(e);
            if (n && t && (0, D.a)(s)) return { type: 'go-live' };
            let l = o.Z.getChannelStatus(e);
            if (null != l && l.length > 0)
                return {
                    type: 'voice',
                    text: l
                };
            let r = a.ZP.getEmbeddedActivitiesForChannel(e.id)
                .concat(a.ZP.getEmbeddedActivitiesForStartingChannel(e.id))
                .map((e) => {
                    var t;
                    return null == (t = d.Z.getApplication(e.applicationId)) ? void 0 : t.name;
                })
                .filter(A.lm);
            if (r.length > 0)
                return {
                    type: 'embedded-activities',
                    name: r.join(', ')
                };
            return null;
        }
        case V.d4z.GUILD_STAGE_VOICE: {
            let t = c.ZP.getActiveEventByChannel(e.id);
            if (null != t)
                return {
                    type: 'event',
                    name: t.name
                };
            return null;
        }
        default:
            return null;
    }
}
function ef(e, t, n, i, s) {
    let l = null != n && (n.id === e.id || i === e.id),
        a = null != n && n.isThread() && n.parent_id === e.id;
    if (w.uC.has(e.type)) {
        let e = r()
            .sortBy(Object.values(t), (e) => -e.joinTimestamp)
            .map((e) => e.channel.id);
        return l ? e : a ? (n.id in t || e.unshift(n.id), e) : s ? e.filter((e) => !y.Z.isMuted(e) || N.ZP.getMentionCount(e) > 0) : e;
    }
    return [];
}
function ev(e, t) {
    return e.favoriteChannelIds.has(t.id) && (e.optInEnabled || !1);
}
function eI(e, t) {
    let { selectedChannel: n, activeJoinedRelevantThreads: i } = t;
    if (N.ZP.getMentionCount(e.id) > 0) return !0;
    for (let t in i[e.id]) if (N.ZP.getMentionCount(t) > 0) return !0;
    if (null != n && (n.id === e.id || (n.isThread() && n.parent_id === e.id))) return !0;
    let s = I.Z.getNewChannelIds(e.category.guild.id);
    if (s.size > H);
    else if (s.has(e.id)) return !0;
    return !1;
}
function eS(e, t, n) {
    let { selectedChannel: i, activeJoinedRelevantThreads: s } = n;
    if (t.type === V.d4z.GUILD_DIRECTORY || !e.optInEnabled || t.isGuildVocal() || e.optedInChannels.has(t.id) || t.isThread() || (null != t.parent_id && e.optedInChannels.has(t.parent_id)) || (e.hideResourceChannels && t.hasFlag(M.zZ.IS_GUILD_RESOURCE_CHANNEL))) return !1;
    if ((null != i && (i.id === t.id || (i.isThread() && i.parent_id === t.id))) || N.ZP.getMentionCount(t.id) > 0) return !0;
    let l = I.Z.getNewChannelIds(e.id),
        r = Array.from(l).sort((e, t) => T.default.compare(t, e));
    if (l.has(t.id) && r.indexOf(t.id) < H) return !0;
    for (let e in s[t.id]) if (N.ZP.getMentionCount(e) > 0 || N.ZP.hasUnread(e) || N.ZP.hasRecentlyVisitedAndRead(e)) return !0;
    return !(e.mutedChannelIds.has(t.id) || (null != t.parent_id && e.mutedChannelIds.has(t.parent_id))) && !!N.ZP.hasRecentlyVisitedAndRead(t.id);
}
let ey = new Set(Object.values(U.z));
