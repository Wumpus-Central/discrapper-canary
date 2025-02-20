n.d(t, {
    Bz: () => eg,
    Cb: () => V,
    Fq: () => W,
    PB: () => K,
    VR: () => ei,
    ZP: () => Q,
    p2: () => z,
    wF: () => q,
    wZ: () => Y,
    wd: () => X,
    zR: () => ev
}),
    n(47120),
    n(411104),
    n(653041),
    n(13667),
    n(390547),
    n(733860),
    n(230036);
var i = n(512722),
    r = n.n(i),
    l = n(392711),
    o = n.n(l),
    s = n(317381),
    a = n(812206),
    u = n(12498),
    d = n(430198),
    c = n(931261),
    h = n(924301),
    f = n(160404),
    p = n(798423),
    g = n(18036),
    v = n(798379),
    C = n(398758),
    E = n(22082),
    O = n(601070),
    m = n(569471),
    S = n(131704),
    _ = n(680089),
    b = n(592125),
    I = n(58468),
    y = n(430824),
    N = n(496675),
    T = n(306680),
    P = n(944486),
    w = n(9156),
    A = n(979651),
    j = n(938475),
    L = n(823379),
    D = n(709054),
    R = n(968358),
    Z = n(203818),
    M = n(443063),
    U = n(981631),
    x = n(176505),
    G = n(231338);
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
function H(e) {
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
function B(e, t) {
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
let k = 'placeholder-channel-id',
    V = 2,
    W = 0,
    Y = 1,
    z = 2,
    K = 3,
    X = 4,
    q = 5,
    J = new Set([String(M.z.GUILD_DIRECTORY)]);
class Q {
    _areGuildActionRowsUpdated(e, t) {
        var n;
        return !o().isEqual(
            null === (n = this.guilds[e]) || void 0 === n
                ? void 0
                : n
                      .getGuildActionSection()
                      .getRows()
                      .filter((e) => !J.has(e)),
            t
        );
    }
    _areChannelNoticeRowsUpdated(e, t) {
        var n;
        return !o().isEqual(null === (n = this.guilds[e]) || void 0 === n ? void 0 : n.getChannelNoticeSection().getRows(), t);
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
        return null != e && e in this.guilds && null !== (n = null === (t = this.guilds[e]) || void 0 === t ? void 0 : t.updateRecentsCategory()) && void 0 !== n && n;
    }
    nonPositionalChannelIdUpdate(e) {
        let t = b.Z.getBasicChannel(e);
        return null != t && null != t.guild_id && null != this.guilds[t.guild_id] && (t instanceof S.Sf || null != (t = b.Z.getChannel(e))) && this.nonPositionalChannelUpdate(t);
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
            selectedChannel: b.Z.getChannel(P.Z.getChannelId()),
            selectedVoiceChannelId: P.Z.getVoiceChannelId(),
            activeJoinedRelevantThreads: O.Z.getActiveJoinedRelevantThreadsForGuild(this.id),
            activeJoinedUnreadThreads: O.Z.getActiveJoinedUnreadThreadsForGuild(this.id)
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
            (this.sortedNamedCategories = o().sortBy(Object.values(this.categories), (e) => e.record.position)), (this.rows = [this.channelNoticeSection, this.guildActionSection, this.favoritesCategory, this.recentsCategory, this.noParentCategory, ...this.sortedNamedCategories, this.voiceChannelsCategory].map((e) => e.getRows()));
            let e = 0;
            for (let t of [this.noParentCategory, ...this.sortedNamedCategories]) for (let n of ((t.position = ++e), t.getShownChannelIds())) t.channels[n].position = ++e;
        }
        return this.rows;
    }
    getCategoryFromSection(e) {
        switch (e) {
            case W:
                throw Error('Invalid section. Use getChannelNoticeSection instead');
            case Y:
                throw Error('Invalid section. Use getGuildActionSection instead');
            case z:
                return this.favoritesCategory;
            case X:
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
        return (e -= q), r()(e >= 0 && e < this.getSortedNamedCategories().length, 'invalid section index '.concat(e)), this.getSortedNamedCategories()[e];
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
        return r()(e > Y, 'Invalid section'), e !== this.recentsSectionNumber && this.getRows()[e][t] === k;
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
            if (em.has(e)) return e;
            let t = b.Z.getChannel(e);
            return (null == t ? void 0 : t.isDirectory()) ? M.z.GUILD_DIRECTORY : null;
        })(e);
        if (null != t)
            return [
                {
                    row: this.getGuildActionSection().getRows().indexOf(t),
                    section: Y
                }
            ];
        let n = [],
            i = b.Z.getChannel(e);
        if (null == i || null == e) return n;
        let r = i.isThread();
        if ((r && (i = b.Z.getChannel(i.parent_id)), null == i)) return n;
        let l = this.favoritesCategory.getShownChannelIds().indexOf(i.id);
        l >= 0 &&
            n.push({
                section: z,
                row: l
            });
        let s = this.recentsCategory.getShownChannelIds().indexOf(i.id);
        if (
            (s >= 0 &&
                n.push({
                    section: this.recentsSectionNumber,
                    row: s
                }),
            i.type === U.d4z.GUILD_CATEGORY)
        )
            return [{ section: o().findIndex(this.getSortedNamedCategories(), (e) => e.id === (null == i ? void 0 : i.id)) + q }];
        let a = this.getCategory(i),
            u = a instanceof et ? X : this.getSortedNamedCategories().indexOf(a) + q,
            d = a.getShownChannelIds().indexOf(i.id);
        if (u >= 0 && d >= 0) {
            let t = r ? a.channels[i.id].threadIds.indexOf(e) : 0;
            n.push({
                section: u,
                row: d,
                threadOffset: t
            });
        }
        let c = this.voiceChannelsCategory.getShownChannelIds().indexOf(i.id);
        return (
            c >= 0 &&
                n.push({
                    section: this.voiceChannelsSectionNumber,
                    row: c
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
        r()(e.length > 0, 'must have at least one channel in the slice');
        let n = e[0],
            i = e[e.length - 1],
            l = !0,
            o = !1,
            s = [],
            a = [];
        for (let e of this.getSortedCategories()) {
            let r = (null == t ? void 0 : t.ignoreRecents) && e === this.recentsCategory;
            for (let t of e.getShownChannelIds()) {
                let u = e.channels[t];
                l && (u.id === n.id ? (l = !1) : r || s.push(u)), o && !r && a.push(u), l || o || u.id !== i.id || (o = !0);
            }
        }
        return [s, e, a];
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
            let n = b.Z.getChannel(e);
            if (null != n) {
                if (n.id in this.favoritesCategory.channels) t = [this.favoritesCategory.channels[n.id]];
                else if (n.id in this.recentsCategory.channels) t = [this.recentsCategory.channels[n.id]];
                else {
                    let i = this.getCategory(n);
                    null != i && null != i.channels[e] && (t = [i.channels[e]]);
                }
            }
        } else
            t = o()(this.getSortedCategories())
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
                        let n = b.Z.getChannel(t);
                        null != n && e(n);
                    }
                }
    }
    forEachChannel(e, t) {
        for (let n of this.getSortedCategories()) if (null == t || !t.ignoreRecents || n !== this.recentsCategory) for (let t of n.getChannelRecords()) e(t);
    }
    constructor(e, t, n) {
        var i, l;
        F(this, 'id', void 0), F(this, 'hideMutedChannels', void 0), F(this, 'favoritesSectionNumber', void 0), F(this, 'recentsSectionNumber', void 0), F(this, 'voiceChannelsSectionNumber', void 0), F(this, 'mutedChannelIds', void 0), F(this, 'optedInChannels', void 0), F(this, 'optInEnabled', void 0), F(this, 'hideResourceChannels', void 0), F(this, 'favoriteChannelIds', void 0), F(this, 'suggestedFavoriteChannelId', void 0), F(this, 'collapsedCategoryIds', void 0), F(this, 'categories', void 0), F(this, 'noParentCategory', void 0), F(this, 'favoritesCategory', void 0), F(this, 'recentsCategory', void 0), F(this, 'voiceChannelsCategory', void 0), F(this, 'guildActionSection', void 0), F(this, 'channelNoticeSection', void 0), F(this, 'sortedNamedCategories', void 0), F(this, 'sections', void 0), F(this, 'rows', void 0), F(this, 'firstVoiceChannel', void 0), F(this, 'allChannelsById', void 0), F(this, 'version', void 0), (this.id = e), (this.sortedNamedCategories = null), (this.sections = null), (this.rows = null), (this.firstVoiceChannel = void 0), (this.allChannelsById = null), (this.version = 0), (this.hideMutedChannels = w.ZP.isGuildCollapsed(this.id)), (this.mutedChannelIds = w.ZP.getMutedChannels(this.id)), (this.optedInChannels = null !== (i = w.ZP.getOptedInChannelsWithPendingUpdates(this.id)) && void 0 !== i ? i : w.ZP.getOptedInChannels(this.id)), (this.optInEnabled = (0, C.r1)(this.id)), (this.hideResourceChannels = (0, c.s)(this.id)), (this.favoriteChannelIds = new Set(null !== (l = w.ZP.getGuildFavorites(this.id)) && void 0 !== l ? l : [])), (this.suggestedFavoriteChannelId = g.Z.getSuggestedChannelId(this.id)), (this.collapsedCategoryIds = _.Z.getCollapsedCategories());
        let s = b.Z.getMutableGuildChannelsForGuild(this.id),
            a = y.Z.getGuild(this.id),
            u = {},
            d = [],
            h = {};
        for (let e in s) {
            let t = s[e];
            t.type === U.d4z.GUILD_CATEGORY && ((u[t.id] = t), (h[t.id] = []));
        }
        let f = [],
            v = [],
            E = [],
            O = this.initializationData;
        for (let e in s) {
            let t = s[e];
            if (t.type !== U.d4z.GUILD_CATEGORY) {
                if (t.type === U.d4z.GUILD_DIRECTORY) {
                    null == a || a.hasFeature(U.oNc.HUB) || E.push(t);
                    continue;
                }
                eO(this, t, O) ? f.push(t) : (t.type === U.d4z.GUILD_VOICE || t.type === U.d4z.GUILD_STAGE_VOICE) && (null != t.parent_id && null != u[t.parent_id] && v.push(u[t.parent_id]), v.push(t)), null != t.parent_id && t.parent_id in h ? h[t.parent_id].push(t) : d.push(t);
            }
        }
        for (let e in ((this.categories = {}), h)) this.categories[e] = new en(this, u[e], h[e], O);
        (this.recentsSectionNumber = K), (this.favoritesSectionNumber = z), (this.noParentCategory = new et(this, d, O)), (this.favoritesCategory = new ei(this, O)), (this.recentsCategory = (0, p.Q)() ? new er(this, s, O) : new el(this, f, O)), (this.voiceChannelsCategory = new eo(this, v, u, O)), (this.guildActionSection = new ea(t, E.length > 0)), (this.channelNoticeSection = new es(n)), r()(!('null' in this.categories), 'somehow a null got into categories'), (this.voiceChannelsSectionNumber = q + o().size(this.categories));
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
        return 0 === e.length && this.shouldShowEmptyCategory() ? [k] : e;
    }
    shouldShowEmptyCategory() {
        return o().some(this.channels, (e) => e.renderLevel >= 3);
    }
    getShownChannelIds() {
        return (
            null == this.shownChannelIds &&
                (this.shownChannelIds = o()(this.channels)
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
        let e = o()(this.channels)
            .values()
            .flatMap((e) => e.threadIds)
            .value();
        return this.getShownChannelIds().concat(e);
    }
    isEmpty() {
        return 0 === this.getShownChannelIds().length;
    }
    getChannelRecords() {
        return o()(this.channels)
            .values()
            .filter((e) => e.renderLevel > 1)
            .map((e) => e.record)
            .value();
    }
    getFirstVoiceChannel(e) {
        for (let t of this.getShownChannelIds()) if ((e && this.channels[t].record.isGuildStageVoice()) || (!e && this.channels[t].record.isGuildVocal())) return this.channels[t];
        return null;
    }
    constructor(e) {
        F(this, 'guild', void 0), F(this, 'isMuted', void 0), F(this, 'isCollapsed', void 0), F(this, 'position', void 0), F(this, 'channels', void 0), F(this, 'shownChannelIds', void 0), (this.guild = e), (this.isMuted = !1), (this.isCollapsed = !1), (this.position = -1), (this.channels = {}), (this.shownChannelIds = null);
    }
}
class et extends ee {
    constructor(e, t, n) {
        super(e),
            (this.channels = o()(t)
                .map((e) => new ed(this, e, n))
                .keyBy((e) => e.id)
                .value());
    }
}
class en extends ee {
    shouldShowEmptyCategory() {
        return !!(super.shouldShowEmptyCategory() || (N.Z.can(G.Pl.MANAGE_CHANNELS, this.record) && N.Z.can(G.Pl.VIEW_CHANNEL, this.record) && o().isEmpty(this.channels) && (!this.guild.optInEnabled || this.guild.optedInChannels.has(this.id))));
    }
    constructor(e, t, n, i) {
        for (let r of (super(e), F(this, 'id', void 0), F(this, 'record', void 0), (this.record = t), (this.id = t.id), (this.isCollapsed = !0 === e.collapsedCategoryIds[t.id]), (this.isMuted = e.mutedChannelIds.has(t.id)), (this.channels = {}), n)) this.channels[r.id] = new ed(this, r, i);
    }
}
class ei extends ee {
    updateChannel(e, t) {
        let n = e.id in this.channels && w.ZP.isFavorite(e.guild_id, e.id),
            i = g.Z.getSuggestedChannelId(e.guild_id);
        return (e.id !== i ||
            n ||
            (t = B(H({}, t), {
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
        this.channels = o()(null !== (n = w.ZP.getGuildFavorites(e.id)) && void 0 !== n ? n : [])
            .map((e) => b.Z.getChannel(e))
            .filter(L.lm)
            .map((e) => new ec(this, e, t))
            .keyBy((e) => e.id)
            .value();
        let i = g.Z.getSuggestedChannelId(e.id),
            r = b.Z.getChannel(i);
        null != r &&
            null != i &&
            (this.channels[i] = new ec(
                this,
                r,
                B(H({}, t), {
                    activeJoinedRelevantThreads: {},
                    activeJoinedUnreadThreads: {}
                })
            ));
    }
}
class er extends ee {
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
        return null == i ? ((i = new ef(this, e, t)), (this.channels[e.id] = i), this.invalidate(), !0) : this.updateShownChannelIds(i) || n;
    }
    getFirstVoiceChannel(e) {
        return null;
    }
    getShownChannelIds() {
        if (null == this.shownChannelIds) {
            let e = this.isCollapsed ? 4 : 3;
            this.shownChannelIds = this.enabled
                ? o()(this.channels)
                      .filter((t) => t.renderLevel >= e)
                      .map((e) => [e.id, e.lastMessageTimestamp, e.renderLevel])
                      .filter((e) => {
                          let [, t, n] = e;
                          return 4 === n || (t > 0 && Date.now() - t < er.MAX_TIMESTAMP_DELTA);
                      })
                      .sortBy((e) => {
                          let [, t, n] = e;
                          return -(t - (4 === n ? 0 : D.DISCORD_EPOCH));
                      })
                      .take(er.MAX_RECENT_CHANNELS)
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
        if (e.lastMessageTimestamp > (null === (t = this.channels[this.shownChannelIds[0]]) || void 0 === t ? void 0 : t.lastMessageTimestamp)) {
            let t = this.shownChannelIds.indexOf(e.id);
            return t > -1 && this.shownChannelIds.splice(t, 1), this.shownChannelIds.splice(0, 0, e.id), this.shownChannelIds.length > er.MAX_RECENT_CHANNELS && (this.shownChannelIds = this.shownChannelIds.slice(0, er.MAX_RECENT_CHANNELS)), !0;
        }
        return !1;
    }
    constructor(e, t, n) {
        if ((super(e), F(this, 'enabled', !1), (this.isCollapsed = v.Z.isCollapsed(e.id)), (this.enabled = !1), this.enabled)) for (let e of Object.values(t)) (0, S.vc)(e.type) && !(0, S.Q5)(e.type) && (this.channels[e.id] = new ef(this, e, n));
    }
}
F(er, 'MIN_READABLE_CHANNELS', 7), F(er, 'MAX_RECENT_CHANNELS', 10), F(er, 'MAX_TIMESTAMP_DELTA', 604800000);
class el extends ee {
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
            let n = this.channels[e.id],
                i = eO(this.guild, e, t);
            if (i && null == n) return (this.channels[e.id] = new eh(this, e, t)), this.invalidate(), !0;
            if (!i && null != n) return delete this.channels[e.id], this.invalidate(), !0;
        }
        return n;
    }
    getFirstVoiceChannel(e) {
        return null;
    }
    getShownChannelIds() {
        if (null == this.shownChannelIds) {
            let e = o()(this.channels)
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
            this.shownChannelIds = o()([...n])
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
        if ((super(e), !e.optInEnabled || f.Z.isFullServerPreview(e.id))) return;
        (this.isCollapsed = !1),
            (this.isMuted = !1),
            (this.channels = o()(t)
                .map((e) => new eh(this, e, n))
                .keyBy((e) => e.id)
                .value());
    }
}
class eo extends ee {
    invalidate() {
        super.invalidate(), (this.hiddenChannelIds = null);
    }
    getHiddenChannelIds() {
        if (!this.guild.optInEnabled) return [];
        if (null == this.hiddenChannelIds) {
            let e = o()(this.channels)
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
        return 0 === e.length && this.getHiddenChannelIds().length > 0 ? [k] : e;
    }
    getShownChannelIds() {
        if (!this.guild.optInEnabled) return [];
        if (null == this.shownChannelIds) {
            let t = o()(this.channels)
                .filter((e) => 4 === e.renderLevel)
                .orderBy(
                    [
                        (e) =>
                            (function (e, t) {
                                if (e.record.type === U.d4z.GUILD_CATEGORY) return e.record.position;
                                if (null != e.record.parent_id) {
                                    var n, i;
                                    return null !== (i = null === (n = t[e.record.parent_id]) || void 0 === n ? void 0 : n.position) && void 0 !== i ? i : -1;
                                }
                                return -1;
                            })(e, this.categoriesById),
                        (e) => (e.record.type === U.d4z.GUILD_CATEGORY ? -1 : e.record.position)
                    ],
                    ['asc', 'asc']
                )
                .value();
            this.shownChannelIds = [];
            for (let n = 0; n < t.length; n++) {
                var e;
                let i = t[n];
                (!(n < t.length - 1) || i.record.type !== U.d4z.GUILD_CATEGORY || (null === (e = t[n + 1]) || void 0 === e ? void 0 : e.record.type) !== U.d4z.GUILD_CATEGORY) && (n !== t.length - 1 || i.record.type !== U.d4z.GUILD_CATEGORY) && this.shownChannelIds.push(i.id);
            }
        }
        return this.shownChannelIds;
    }
    getFirstVoiceChannel(e) {
        return null;
    }
    constructor(e, t, n, i) {
        if ((super(e), F(this, 'categoriesById', void 0), F(this, 'hiddenChannelIds', void 0), (this.categoriesById = n), (this.hiddenChannelIds = null), !e.optInEnabled)) return;
        (this.isCollapsed = Z.Z.isVoiceCategoryCollapsed(e.id)),
            (this.isMuted = !1),
            (this.categoriesById = n),
            (this.channels = o()(t)
                .map((e) => new ep(this, e, i))
                .keyBy((e) => e.id)
                .value());
    }
}
class es {
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
class ea {
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
        F(this, 'guildActionRows', void 0), (this.guildActionRows = e.map(String)), t && this.guildActionRows.push(String(M.z.GUILD_DIRECTORY));
    }
}
class eu {
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
        return Math.max(T.ZP.lastMessageTimestamp(this.id), ...this.threadIds.map(T.ZP.lastMessageTimestamp));
    }
    updateChannel(e, t) {
        let n = !1;
        null != e && e !== this.record && ((this.record = e), (n = !0));
        let i = this.computeState(t);
        return (i.renderLevel === this.renderLevel && o().isEqual(i.threadIds, this.threadIds)) || ((this.renderLevel = i.renderLevel), (this.threadIds = i.threadIds), (this.threadCount = o().size(i.threadIds)), (n = !0)), 4 === this.renderLevel && this.updateSubtitle() && (n = !0), n;
    }
    updateSubtitle() {
        let e = this.computeSubtitle();
        return !o().isEqual(this.subtitle, e) && ((this.subtitle = e), !0);
    }
    computeSubtitle() {
        return eg(this.record, this.isCollapsed || this.category.isCollapsed, this.category.guild.optInEnabled);
    }
    constructor(e, t, n) {
        F(this, 'category', void 0), F(this, 'record', void 0), F(this, 'id', void 0), F(this, 'position', void 0), F(this, 'threadIds', void 0), F(this, 'threadCount', void 0), F(this, 'subtitle', void 0), F(this, 'renderLevel', void 0), (this.category = e), (this.record = t), (this.position = -1), (this.threadIds = []), (this.threadCount = 0), (this.subtitle = null), (this.renderLevel = 1), (this.id = t.id);
        let { renderLevel: i, threadIds: r } = this.computeState(n);
        (this.renderLevel = i), (this.threadCount = o().size(r)), (this.threadIds = r), 4 === i && (this.subtitle = this.computeSubtitle());
    }
}
class ed extends eu {
    computeState(e) {
        var t;
        let { selectedChannel: n, selectedVoiceChannelId: i, activeJoinedRelevantThreads: r, activeJoinedUnreadThreads: l } = e;
        if (!N.Z.can(G.Pl.VIEW_CHANNEL, this.record)) {
            if (this.id === i)
                return {
                    renderLevel: 4,
                    threadIds: []
                };
            if (!d.Z.isChannelGatedAndVisible(this.record.guild_id, this.record.id))
                return {
                    renderLevel: 1,
                    threadIds: []
                };
        }
        let s = this.record.parent_id,
            a = this.category.guild;
        if (eC(a, this.record))
            return {
                renderLevel: 1,
                threadIds: []
            };
        let u = (null == n ? void 0 : n.id) === this.id || i === this.id,
            c = null != n && n.isThread() && n.parent_id === this.id,
            h = null !== (t = u || c || (!this.category.isCollapsed && !this.isMuted) ? r[this.id] : l[this.id]) && void 0 !== t ? t : {},
            f = ev(this.record, h, n, i, a.hideMutedChannels);
        return a.optInEnabled && a.hideResourceChannels && this.record.hasFlag(x.zZ.IS_GUILD_RESOURCE_CHANNEL)
            ? {
                  renderLevel: u ? 4 : 1,
                  threadIds: f
              }
            : !a.optInEnabled || a.optedInChannels.has(this.id) || (null != s && a.optedInChannels.has(s))
              ? u || c || !o().isEmpty(f) || T.ZP.getMentionCount(this.id) > 0
                  ? {
                        renderLevel: 4,
                        threadIds: f
                    }
                  : a.hideMutedChannels && a.mutedChannelIds.has(this.id)
                    ? {
                          renderLevel: 2,
                          threadIds: f
                      }
                    : this.category.isCollapsed && (a.mutedChannelIds.has(this.id) || (null != s && a.mutedChannelIds.has(s)) || this.record.isGuildVocal() || this.record.type === U.d4z.GUILD_STORE || ((0, S.vc)(this.record.type) && !T.ZP.hasUnread(this.record.id)))
                      ? {
                            renderLevel: 3,
                            threadIds: f
                        }
                      : {
                            renderLevel: 4,
                            threadIds: f
                        }
              : {
                    renderLevel: 2,
                    threadIds: f
                };
    }
}
class ec extends eu {
    computeState(e) {
        var t;
        let { selectedChannel: n, selectedVoiceChannelId: i, activeJoinedRelevantThreads: r } = e;
        return N.Z.can(G.Pl.VIEW_CHANNEL, this.record)
            ? {
                  renderLevel: 4,
                  threadIds: ev(this.record, null !== (t = r[this.id]) && void 0 !== t ? t : {}, n, i, !1)
              }
            : {
                  renderLevel: 1,
                  threadIds: []
              };
    }
}
class eh extends eu {
    computeState(e) {
        var t;
        let { selectedChannel: n, selectedVoiceChannelId: i, activeJoinedRelevantThreads: r } = e;
        return N.Z.can(G.Pl.VIEW_CHANNEL, this.record)
            ? {
                  renderLevel: eE(this, e) ? 4 : 3,
                  threadIds: ev(this.record, null !== (t = r[this.id]) && void 0 !== t ? t : {}, n, i, !1)
              }
            : {
                  renderLevel: 1,
                  threadIds: []
              };
    }
}
class ef extends ed {
    computeState(e) {
        let { renderLevel: t, threadIds: n } = super.computeState(e);
        if (t > 1) {
            let i = this.record.parent_id,
                r = this.category.guild;
            r.mutedChannelIds.has(this.id) || (null != i && r.mutedChannelIds.has(i)) ? (t = 2) : 4 === t ? (t = 3) : 2 === t && eO(this.category.guild, this.record, e) && (t = 3), 3 === t && eE(this, e) && (t = 4), (n = o().sortBy(n, (e) => -T.ZP.lastMessageTimestamp(e)));
        }
        return {
            renderLevel: t,
            threadIds: n
        };
    }
}
class ep extends ed {
    getRenderLevel(e) {
        let t = this.category.guild;
        return !N.Z.can(G.Pl.VIEW_CHANNEL, this.record) || 4 === e || 3 === e || eC(t, this.record) ? 1 : this.category.isCollapsed ? (o().some(A.Z.getVoiceStatesForChannel(this.record.id)) ? 4 : 3) : 4;
    }
    computeState(e) {
        let t = super.computeState(e),
            n = this.getRenderLevel(t.renderLevel);
        return (
            4 === n && (this.subtitle = eg(this.record, this.isCollapsed || this.category.isCollapsed, this.category.guild.optInEnabled)),
            {
                threadIds: [],
                renderLevel: n
            }
        );
    }
}
function eg(e, t, n) {
    switch (e.type) {
        case U.d4z.GUILD_VOICE: {
            let i = h.ZP.getActiveEventByChannel(e.id);
            if (null != i)
                return {
                    type: 'event',
                    name: i.name
                };
            let r = j.ZP.getVoiceStatesForChannel(e);
            if (n && t && (0, R.a)(r)) return { type: 'go-live' };
            let l = u.Z.getChannelStatus(e);
            if (null != l && l.length > 0)
                return {
                    type: 'voice',
                    text: l
                };
            let o = s.ZP.getEmbeddedActivitiesForChannel(e.id)
                .concat(s.ZP.getEmbeddedActivitiesForStartingChannel(e.id))
                .map((e) => {
                    var t;
                    return null === (t = a.Z.getApplication(e.applicationId)) || void 0 === t ? void 0 : t.name;
                })
                .filter(L.lm);
            if (o.length > 0)
                return {
                    type: 'embedded-activities',
                    name: o.join(', ')
                };
            return null;
        }
        case U.d4z.GUILD_STAGE_VOICE: {
            let t = h.ZP.getActiveEventByChannel(e.id);
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
function ev(e, t, n, i, r) {
    let l = null != n && (n.id === e.id || i === e.id),
        s = null != n && n.isThread() && n.parent_id === e.id;
    if (S.uC.has(e.type)) {
        let e = o()
            .sortBy(Object.values(t), (e) => -e.joinTimestamp)
            .map((e) => e.channel.id);
        return l ? e : s ? (n.id in t || e.unshift(n.id), e) : r ? e.filter((e) => !m.Z.isMuted(e) || T.ZP.getMentionCount(e) > 0) : e;
    }
    return [];
}
function eC(e, t) {
    return e.favoriteChannelIds.has(t.id) && (e.optInEnabled || !1);
}
function eE(e, t) {
    let { selectedChannel: n, activeJoinedRelevantThreads: i } = t;
    if (T.ZP.getMentionCount(e.id) > 0) return !0;
    for (let t in i[e.id]) if (T.ZP.getMentionCount(t) > 0) return !0;
    if (null != n && (n.id === e.id || (n.isThread() && n.parent_id === e.id))) return !0;
    let r = E.Z.getNewChannelIds(e.category.guild.id);
    if (r.size > V);
    else if (r.has(e.id)) return !0;
    return !1;
}
function eO(e, t, n) {
    let { selectedChannel: i, activeJoinedRelevantThreads: r } = n;
    if (t.type === U.d4z.GUILD_DIRECTORY || !e.optInEnabled || t.isGuildVocal() || e.optedInChannels.has(t.id) || t.isThread() || (null != t.parent_id && e.optedInChannels.has(t.parent_id)) || (e.hideResourceChannels && t.hasFlag(x.zZ.IS_GUILD_RESOURCE_CHANNEL))) return !1;
    if ((null != i && (i.id === t.id || (i.isThread() && i.parent_id === t.id))) || T.ZP.getMentionCount(t.id) > 0) return !0;
    let l = E.Z.getNewChannelIds(e.id),
        o = Array.from(l).sort((e, t) => D.default.compare(t, e));
    if (l.has(t.id) && o.indexOf(t.id) < V) return !0;
    for (let e in r[t.id]) if (T.ZP.getMentionCount(e) > 0 || T.ZP.hasUnread(e) || T.ZP.hasRecentlyVisitedAndRead(e)) return !0;
    return !(e.mutedChannelIds.has(t.id) || (null != t.parent_id && e.mutedChannelIds.has(t.parent_id))) && !!T.ZP.hasRecentlyVisitedAndRead(t.id);
}
let em = new Set(Object.values(M.z));
