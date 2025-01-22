n.d(t, {
    Bz: function () {
        return eE;
    },
    Cb: function () {
        return W;
    },
    Fq: function () {
        return Y;
    },
    PB: function () {
        return X;
    },
    VR: function () {
        return el;
    },
    ZP: function () {
        return ee;
    },
    p2: function () {
        return q;
    },
    wF: function () {
        return Q;
    },
    wZ: function () {
        return K;
    },
    wd: function () {
        return J;
    },
    zR: function () {
        return e_;
    }
}),
    n(47120),
    n(411104),
    n(653041),
    n(390547),
    n(724458),
    n(733860);
var i,
    r,
    l,
    o,
    s = n(512722),
    a = n.n(s),
    u = n(392711),
    d = n.n(u),
    c = n(317381),
    h = n(812206),
    f = n(12498),
    g = n(430198),
    C = n(931261),
    p = n(924301),
    E = n(160404),
    _ = n(798423),
    I = n(18036),
    S = n(798379),
    v = n(398758),
    m = n(22082),
    T = n(601070),
    N = n(569471),
    A = n(131704),
    y = n(680089),
    O = n(592125),
    L = n(58468),
    P = n(430824),
    b = n(496675),
    R = n(306680),
    Z = n(944486),
    w = n(9156),
    M = n(979651),
    D = n(938475),
    U = n(823379),
    G = n(709054),
    F = n(968358),
    x = n(203818),
    j = n(443063),
    H = n(981631),
    B = n(176505),
    V = n(231338);
function k(e, t, n) {
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
let z = 'placeholder-channel-id',
    W = 2;
((l = i || (i = {}))[(l.CannotShow = 1)] = 'CannotShow'), (l[(l.DoNotShow = 2)] = 'DoNotShow'), (l[(l.WouldShowIfUncollapsed = 3)] = 'WouldShowIfUncollapsed'), (l[(l.Show = 4)] = 'Show'), ((o = r || (r = {}))[(o.CHANNEL_NOTICES = 0)] = 'CHANNEL_NOTICES'), (o[(o.GUILD_ACTIONS = 1)] = 'GUILD_ACTIONS'), (o[(o.FAVORITES = 2)] = 'FAVORITES'), (o[(o.RECENTS = 3)] = 'RECENTS'), (o[(o.UNCATEGORIZED_CHANNELS = 4)] = 'UNCATEGORIZED_CHANNELS'), (o[(o.FIRST_NAMED_CATEGORY = 5)] = 'FIRST_NAMED_CATEGORY');
let Y = 0,
    K = 1,
    q = 2,
    X = 3,
    J = 4,
    Q = 5,
    $ = new Set([String(j.z.GUILD_DIRECTORY)]);
class ee {
    _areGuildActionRowsUpdated(e, t) {
        var n;
        return !d().isEqual(
            null === (n = this.guilds[e]) || void 0 === n
                ? void 0
                : n
                      .getGuildActionSection()
                      .getRows()
                      .filter((e) => !$.has(e)),
            t
        );
    }
    _areChannelNoticeRowsUpdated(e, t) {
        var n;
        return !d().isEqual(null === (n = this.guilds[e]) || void 0 === n ? void 0 : n.getChannelNoticeSection().getRows(), t);
    }
    getGuild(e, t, n) {
        return (!(e in this.guilds) || this._areGuildActionRowsUpdated(e, t) || this._areChannelNoticeRowsUpdated(e, n)) && (this.guilds[e] = new et(e, t, n)), this.guilds[e];
    }
    getGuildChannelRowsOnly(e) {
        return !(e in this.guilds) && (this.guilds[e] = new et(e, [], [])), this.guilds[e];
    }
    clear() {
        this.guilds = {};
    }
    clearGuildId(e) {
        return null != e && e in this.guilds && (delete this.guilds[e], !0);
    }
    updateRecentsCategory(e) {
        var t, n;
        if (null == e || !(e in this.guilds)) return !1;
        return null !== (n = null === (t = this.guilds[e]) || void 0 === t ? void 0 : t.updateRecentsCategory()) && void 0 !== n && n;
    }
    nonPositionalChannelIdUpdate(e) {
        let t = O.Z.getBasicChannel(e);
        return null != t && null != t.guild_id && null != this.guilds[t.guild_id] && (t instanceof A.Sf || null != (t = O.Z.getChannel(e))) && this.nonPositionalChannelUpdate(t);
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
        k(this, 'guilds', {});
    }
}
class et {
    get initializationData() {
        return {
            selectedChannel: O.Z.getChannel(Z.Z.getChannelId()),
            selectedVoiceChannelId: Z.Z.getVoiceChannelId(),
            activeJoinedRelevantThreads: T.Z.getActiveJoinedRelevantThreadsForGuild(this.id),
            activeJoinedUnreadThreads: T.Z.getActiveJoinedUnreadThreadsForGuild(this.id)
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
            (this.sortedNamedCategories = d().sortBy(Object.values(this.categories), (e) => e.record.position)), (this.rows = [this.channelNoticeSection, this.guildActionSection, this.favoritesCategory, this.recentsCategory, this.noParentCategory, ...this.sortedNamedCategories, this.voiceChannelsCategory].map((e) => e.getRows()));
            let e = 0;
            for (let t of [this.noParentCategory, ...this.sortedNamedCategories]) for (let n of ((t.position = ++e), t.getShownChannelIds())) t.channels[n].position = ++e;
        }
        return this.rows;
    }
    getCategoryFromSection(e) {
        switch (e) {
            case Y:
                throw Error('Invalid section. Use getChannelNoticeSection instead');
            case K:
                throw Error('Invalid section. Use getGuildActionSection instead');
            case q:
                return this.favoritesCategory;
            case J:
                return this.noParentCategory;
            case this.recentsSectionNumber:
                return this.recentsCategory;
            case this.voiceChannelsSectionNumber:
                return this.voiceChannelsCategory;
            default:
                return this.getSortedNamedCategories()[e - Q];
        }
    }
    getNamedCategoryFromSection(e) {
        return (e -= Q), a()(e >= 0 && e < this.getSortedNamedCategories().length, 'invalid section index '.concat(e)), this.getSortedNamedCategories()[e];
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
        return a()(e > K, 'Invalid section'), e !== this.recentsSectionNumber && this.getRows()[e][t] === z;
    }
    getFirstVoiceChannel(e) {
        if (void 0 === this.firstVoiceChannel) {
            if (((this.firstVoiceChannel = this.favoritesCategory.getFirstVoiceChannel(e)), null != this.firstVoiceChannel)) return this.firstVoiceChannel;
            if (((this.firstVoiceChannel = this.noParentCategory.getFirstVoiceChannel(e)), null != this.firstVoiceChannel)) return this.firstVoiceChannel;
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
            if (eT.has(e)) return e;
            let t = O.Z.getChannel(e);
            return (null == t ? void 0 : t.isDirectory()) ? j.z.GUILD_DIRECTORY : null;
        })(e);
        if (null != t)
            return [
                {
                    row: this.getGuildActionSection().getRows().indexOf(t),
                    section: K
                }
            ];
        let n = [],
            i = O.Z.getChannel(e);
        if (null == i || null == e) return n;
        let r = i.isThread();
        if ((r && (i = O.Z.getChannel(i.parent_id)), null == i)) return n;
        let l = this.favoritesCategory.getShownChannelIds().indexOf(i.id);
        l >= 0 &&
            n.push({
                section: q,
                row: l
            });
        let o = this.recentsCategory.getShownChannelIds().indexOf(i.id);
        if (
            (o >= 0 &&
                n.push({
                    section: this.recentsSectionNumber,
                    row: o
                }),
            i.type === H.d4z.GUILD_CATEGORY)
        )
            return [{ section: d().findIndex(this.getSortedNamedCategories(), (e) => e.id === (null == i ? void 0 : i.id)) + Q }];
        let s = this.getCategory(i),
            a = s instanceof ei ? J : this.getSortedNamedCategories().indexOf(s) + Q,
            u = s.getShownChannelIds().indexOf(i.id);
        if (a >= 0 && u >= 0) {
            let t = r ? s.channels[i.id].threadIds.indexOf(e) : 0;
            n.push({
                section: a,
                row: u,
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
        a()(e.length > 0, 'must have at least one channel in the slice');
        let n = e[0],
            i = e[e.length - 1],
            r = !0,
            l = !1,
            o = [],
            s = [];
        for (let e of this.getSortedCategories()) {
            let a = (null == t ? void 0 : t.ignoreRecents) && e === this.recentsCategory;
            for (let t of e.getShownChannelIds()) {
                let u = e.channels[t];
                r && (u.id === n.id ? (r = !1) : !a && o.push(u)), l && !a && s.push(u), !r && !l && u.id === i.id && (l = !0);
            }
        }
        return [o, e, s];
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
            let n = O.Z.getChannel(e);
            if (null != n) {
                if (n.id in this.favoritesCategory.channels) t = [this.favoritesCategory.channels[n.id]];
                else if (n.id in this.recentsCategory.channels) t = [this.recentsCategory.channels[n.id]];
                else {
                    let i = this.getCategory(n);
                    null != i && null != i.channels[e] && (t = [i.channels[e]]);
                }
            }
        } else
            t = d()(this.getSortedCategories())
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
        for (let n of this.getSortedCategories()) {
            if ((null == t ? !void 0 : !t.ignoreRecents) || n !== this.recentsCategory)
                for (let t of n.getShownChannelIds()) {
                    let i = n.channels[t];
                    for (let t of (e(i.record), i.threadIds)) {
                        let n = O.Z.getChannel(t);
                        null != n && e(n);
                    }
                }
        }
    }
    forEachChannel(e, t) {
        for (let n of this.getSortedCategories()) {
            if ((null == t ? !void 0 : !t.ignoreRecents) || n !== this.recentsCategory) for (let t of n.getChannelRecords()) e(t);
        }
    }
    constructor(e, t, n) {
        var i, r;
        k(this, 'id', void 0), k(this, 'hideMutedChannels', void 0), k(this, 'favoritesSectionNumber', void 0), k(this, 'recentsSectionNumber', void 0), k(this, 'voiceChannelsSectionNumber', void 0), k(this, 'mutedChannelIds', void 0), k(this, 'optedInChannels', void 0), k(this, 'optInEnabled', void 0), k(this, 'hideResourceChannels', void 0), k(this, 'favoriteChannelIds', void 0), k(this, 'suggestedFavoriteChannelId', void 0), k(this, 'collapsedCategoryIds', void 0), k(this, 'categories', void 0), k(this, 'noParentCategory', void 0), k(this, 'favoritesCategory', void 0), k(this, 'recentsCategory', void 0), k(this, 'voiceChannelsCategory', void 0), k(this, 'guildActionSection', void 0), k(this, 'channelNoticeSection', void 0), k(this, 'sortedNamedCategories', void 0), k(this, 'sections', void 0), k(this, 'rows', void 0), k(this, 'firstVoiceChannel', void 0), k(this, 'allChannelsById', void 0), k(this, 'version', void 0), (this.id = e), (this.sortedNamedCategories = null), (this.sections = null), (this.rows = null), (this.firstVoiceChannel = void 0), (this.allChannelsById = null), (this.version = 0), (this.hideMutedChannels = w.ZP.isGuildCollapsed(this.id)), (this.mutedChannelIds = w.ZP.getMutedChannels(this.id)), (this.optedInChannels = null !== (i = w.ZP.getOptedInChannelsWithPendingUpdates(this.id)) && void 0 !== i ? i : w.ZP.getOptedInChannels(this.id)), (this.optInEnabled = (0, v.r1)(this.id)), (this.hideResourceChannels = (0, C.s)(this.id)), (this.favoriteChannelIds = new Set(null !== (r = w.ZP.getGuildFavorites(this.id)) && void 0 !== r ? r : [])), (this.suggestedFavoriteChannelId = I.Z.getSuggestedChannelId(this.id)), (this.collapsedCategoryIds = y.Z.getCollapsedCategories());
        let l = O.Z.getMutableGuildChannelsForGuild(this.id),
            o = P.Z.getGuild(this.id),
            s = {},
            u = [],
            c = {};
        for (let e in l) {
            let t = l[e];
            t.type === H.d4z.GUILD_CATEGORY && ((s[t.id] = t), (c[t.id] = []));
        }
        let h = [],
            f = [],
            g = [],
            p = this.initializationData;
        for (let e in l) {
            let t = l[e];
            if (t.type !== H.d4z.GUILD_CATEGORY) {
                if (t.type === H.d4z.GUILD_DIRECTORY) {
                    null != o && !o.hasFeature(H.oNc.HUB) && g.push(t);
                    continue;
                }
                em(this, t, p) ? h.push(t) : (t.type === H.d4z.GUILD_VOICE || t.type === H.d4z.GUILD_STAGE_VOICE) && (null != t.parent_id && null != s[t.parent_id] && f.push(s[t.parent_id]), f.push(t)), null != t.parent_id && t.parent_id in c ? c[t.parent_id].push(t) : u.push(t);
            }
        }
        for (let e in ((this.categories = {}), c)) this.categories[e] = new er(this, s[e], c[e], p);
        (this.recentsSectionNumber = X), (this.favoritesSectionNumber = q), (this.noParentCategory = new ei(this, u, p)), (this.favoritesCategory = new el(this, p)), (this.recentsCategory = (0, _.Q)() ? new eo(this, l, p) : new es(this, h, p)), (this.voiceChannelsCategory = new ea(this, f, s, p)), (this.guildActionSection = new ed(t, g.length > 0)), (this.channelNoticeSection = new eu(n)), a()(!('null' in this.categories), 'somehow a null got into categories'), (this.voiceChannelsSectionNumber = Q + d().size(this.categories));
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
        return 0 === e.length && this.shouldShowEmptyCategory() ? [z] : e;
    }
    shouldShowEmptyCategory() {
        return d().some(this.channels, (e) => e.renderLevel >= 3);
    }
    getShownChannelIds() {
        return (
            null == this.shownChannelIds &&
                (this.shownChannelIds = d()(this.channels)
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
        let e = d()(this.channels)
            .values()
            .flatMap((e) => e.threadIds)
            .value();
        return this.getShownChannelIds().concat(e);
    }
    isEmpty() {
        return 0 === this.getShownChannelIds().length;
    }
    getChannelRecords() {
        return d()(this.channels)
            .values()
            .filter((e) => e.renderLevel > 1)
            .map((e) => e.record)
            .value();
    }
    getFirstVoiceChannel(e) {
        for (let t of this.getShownChannelIds()) {
            if (e && this.channels[t].record.isGuildStageVoice()) return this.channels[t];
            if (!e && this.channels[t].record.isGuildVocal()) return this.channels[t];
        }
        return null;
    }
    constructor(e) {
        k(this, 'guild', void 0), k(this, 'isMuted', void 0), k(this, 'isCollapsed', void 0), k(this, 'position', void 0), k(this, 'channels', void 0), k(this, 'shownChannelIds', void 0), (this.guild = e), (this.isMuted = !1), (this.isCollapsed = !1), (this.position = -1), (this.channels = {}), (this.shownChannelIds = null);
    }
}
class ei extends en {
    constructor(e, t, n) {
        super(e),
            (this.channels = d()(t)
                .map((e) => new eh(this, e, n))
                .keyBy((e) => e.id)
                .value());
    }
}
class er extends en {
    shouldShowEmptyCategory() {
        return !!(super.shouldShowEmptyCategory() || (b.Z.can(V.Pl.MANAGE_CHANNELS, this.record) && b.Z.can(V.Pl.VIEW_CHANNEL, this.record) && d().isEmpty(this.channels) && (!this.guild.optInEnabled || this.guild.optedInChannels.has(this.id)))) || !1;
    }
    constructor(e, t, n, i) {
        for (let r of (super(e), k(this, 'id', void 0), k(this, 'record', void 0), (this.record = t), (this.id = t.id), (this.isCollapsed = !0 === e.collapsedCategoryIds[t.id]), (this.isMuted = e.mutedChannelIds.has(t.id)), (this.channels = {}), n)) this.channels[r.id] = new eh(this, r, i);
    }
}
class el extends en {
    updateChannel(e, t) {
        let n = e.id in this.channels && w.ZP.isFavorite(e.guild_id, e.id),
            i = I.Z.getSuggestedChannelId(e.guild_id);
        return (e.id === i &&
            !n &&
            (t = {
                ...t,
                activeJoinedRelevantThreads: {},
                activeJoinedUnreadThreads: {}
            }),
        e.id in this.channels && this.channels[e.id].updateChannel(e, t))
            ? (this.invalidate(), !0)
            : e.id in this.channels && e.id !== i && !n && (delete this.channels[e.id], this.invalidate(), !0);
    }
    getFirstVoiceChannel(e) {
        return null;
    }
    constructor(e, t) {
        var n;
        if (
            (super(e),
            !e.optInEnabled &&
                !(function () {
                    return !1;
                })())
        )
            return;
        this.channels = d()(null !== (n = w.ZP.getGuildFavorites(e.id)) && void 0 !== n ? n : [])
            .map((e) => O.Z.getChannel(e))
            .filter(U.lm)
            .map((e) => new ef(this, e, t))
            .keyBy((e) => e.id)
            .value();
        let i = I.Z.getSuggestedChannelId(e.id),
            r = O.Z.getChannel(i);
        null != r &&
            null != i &&
            (this.channels[i] = new ef(this, r, {
                ...t,
                activeJoinedRelevantThreads: {},
                activeJoinedUnreadThreads: {}
            }));
    }
}
class eo extends en {
    shouldShowEmptyCategory() {
        return this.enabled && this.isCollapsed && super.shouldShowEmptyCategory();
    }
    updateAllChannels(e) {
        return Object.values(this.channels).reduce((t, n) => this.updateChannel(n.record, e) || t, !1);
    }
    updateChannel(e, t) {
        if (!this.enabled) return !1;
        if ((0, A.Q5)(e.type)) {
            let t = this.channels[e.parent_id];
            return null != t && this.updateShownChannelIds(t);
        }
        if (!(0, A.vc)(e.type)) return !1;
        let n = super.updateChannel(e, t),
            i = this.channels[e.id];
        return null == i ? ((i = new eC(this, e, t)), (this.channels[e.id] = i), this.invalidate(), !0) : this.updateShownChannelIds(i) || n;
    }
    getFirstVoiceChannel(e) {
        return null;
    }
    getShownChannelIds() {
        if (null == this.shownChannelIds) {
            let e = this.isCollapsed ? 4 : 3;
            this.shownChannelIds = this.enabled
                ? d()(this.channels)
                      .filter((t) => t.renderLevel >= e)
                      .map((e) => [e.id, e.lastMessageTimestamp, e.renderLevel])
                      .filter((e) => {
                          let [, t, n] = e;
                          return 4 === n || (t > 0 && Date.now() - t < eo.MAX_TIMESTAMP_DELTA);
                      })
                      .sortBy((e) => {
                          let [, t, n] = e;
                          return -(t - (4 === n ? 0 : G.DISCORD_EPOCH));
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
        if (e.lastMessageTimestamp > (null === (t = this.channels[this.shownChannelIds[0]]) || void 0 === t ? void 0 : t.lastMessageTimestamp)) {
            let t = this.shownChannelIds.indexOf(e.id);
            return t > -1 && this.shownChannelIds.splice(t, 1), this.shownChannelIds.splice(0, 0, e.id), this.shownChannelIds.length > eo.MAX_RECENT_CHANNELS && (this.shownChannelIds = this.shownChannelIds.slice(0, eo.MAX_RECENT_CHANNELS)), !0;
        }
        return !1;
    }
    constructor(e, t, n) {
        if (
            (super(e),
            k(this, 'enabled', !1),
            (this.isCollapsed = S.Z.isCollapsed(e.id)),
            (this.enabled =
                (function () {
                    return !1;
                })() && Object.keys(t).length >= eo.MIN_READABLE_CHANNELS),
            this.enabled)
        )
            for (let e of Object.values(t)) (0, A.vc)(e.type) && !(0, A.Q5)(e.type) && (this.channels[e.id] = new eC(this, e, n));
    }
}
k(eo, 'MIN_READABLE_CHANNELS', 7), k(eo, 'MAX_RECENT_CHANNELS', 10), k(eo, 'MAX_TIMESTAMP_DELTA', 604800000);
class es extends en {
    updateAllChannels(e) {
        let t = !1;
        return (
            G.default.keys(this.channels).forEach((n) => {
                this.updateChannel(this.channels[n].record, e) && (t = !0);
            }),
            t
        );
    }
    updateChannel(e, t) {
        let n = super.updateChannel(e, t);
        if (this.guild.optInEnabled) {
            let n = this.channels[e.id],
                i = em(this.guild, e, t);
            if (i && null == n) return (this.channels[e.id] = new eg(this, e, t)), this.invalidate(), !0;
            if (!i && null != n) return delete this.channels[e.id], this.invalidate(), !0;
        }
        return n;
    }
    getFirstVoiceChannel(e) {
        return null;
    }
    getShownChannelIds() {
        if (null == this.shownChannelIds) {
            let e = d()(this.channels)
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
            this.shownChannelIds = d()([...n])
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
        if ((super(e), !e.optInEnabled || E.Z.isFullServerPreview(e.id))) return;
        (this.isCollapsed = !1),
            (this.isMuted = !1),
            (this.channels = d()(t)
                .map((e) => new eg(this, e, n))
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
            let e = d()(this.channels)
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
        return 0 === e.length && this.getHiddenChannelIds().length > 0 ? [z] : e;
    }
    getShownChannelIds() {
        if (!this.guild.optInEnabled) return [];
        if (null == this.shownChannelIds) {
            let t = d()(this.channels)
                .filter((e) => 4 === e.renderLevel)
                .orderBy(
                    [
                        (e) =>
                            (function (e, t) {
                                if (e.record.type === H.d4z.GUILD_CATEGORY) return e.record.position;
                                if (null != e.record.parent_id) {
                                    var n, i;
                                    return null !== (i = null === (n = t[e.record.parent_id]) || void 0 === n ? void 0 : n.position) && void 0 !== i ? i : -1;
                                }
                                return -1;
                            })(e, this.categoriesById),
                        (e) => (e.record.type === H.d4z.GUILD_CATEGORY ? -1 : e.record.position)
                    ],
                    ['asc', 'asc']
                )
                .value();
            this.shownChannelIds = [];
            for (let n = 0; n < t.length; n++) {
                var e;
                let i = t[n];
                if ((!(n < t.length - 1) || i.record.type !== H.d4z.GUILD_CATEGORY || (null === (e = t[n + 1]) || void 0 === e ? void 0 : e.record.type) !== H.d4z.GUILD_CATEGORY) && (n !== t.length - 1 || i.record.type !== H.d4z.GUILD_CATEGORY)) this.shownChannelIds.push(i.id);
            }
        }
        return this.shownChannelIds;
    }
    getFirstVoiceChannel(e) {
        return null;
    }
    constructor(e, t, n, i) {
        if ((super(e), k(this, 'categoriesById', void 0), k(this, 'hiddenChannelIds', void 0), (this.categoriesById = n), (this.hiddenChannelIds = null), !e.optInEnabled)) return;
        (this.isCollapsed = x.Z.isVoiceCategoryCollapsed(e.id)),
            (this.isMuted = !1),
            (this.categoriesById = n),
            (this.channels = d()(t)
                .map((e) => new ep(this, e, i))
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
        k(this, 'rows', void 0), (this.rows = e);
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
        k(this, 'guildActionRows', void 0), (this.guildActionRows = e.map(String)), t && this.guildActionRows.push(String(j.z.GUILD_DIRECTORY));
    }
}
class ec {
    get isMuted() {
        return this.category.guild.mutedChannelIds.has(this.id);
    }
    get isCollapsed() {
        return L.Z.isCollapsed(this.id);
    }
    get isFirstVoiceChannel() {
        return this.category.getFirstVoiceChannel() === this;
    }
    get lastMessageTimestamp() {
        return Math.max(R.ZP.lastMessageTimestamp(this.id), ...this.threadIds.map(R.ZP.lastMessageTimestamp));
    }
    updateChannel(e, t) {
        let n = !1;
        null != e && e !== this.record && ((this.record = e), (n = !0));
        let i = this.computeState(t);
        return (i.renderLevel !== this.renderLevel || !d().isEqual(i.threadIds, this.threadIds)) && ((this.renderLevel = i.renderLevel), (this.threadIds = i.threadIds), (this.threadCount = d().size(i.threadIds)), (n = !0)), 4 === this.renderLevel && this.updateSubtitle() && (n = !0), n;
    }
    updateSubtitle() {
        let e = this.computeSubtitle();
        return !d().isEqual(this.subtitle, e) && ((this.subtitle = e), !0);
    }
    computeSubtitle() {
        return eE(this.record, this.isCollapsed || this.category.isCollapsed, this.category.guild.optInEnabled);
    }
    constructor(e, t, n) {
        k(this, 'category', void 0), k(this, 'record', void 0), k(this, 'id', void 0), k(this, 'position', void 0), k(this, 'threadIds', void 0), k(this, 'threadCount', void 0), k(this, 'subtitle', void 0), k(this, 'renderLevel', void 0), (this.category = e), (this.record = t), (this.position = -1), (this.threadIds = []), (this.threadCount = 0), (this.subtitle = null), (this.renderLevel = 1), (this.id = t.id);
        let { renderLevel: i, threadIds: r } = this.computeState(n);
        (this.renderLevel = i), (this.threadCount = d().size(r)), (this.threadIds = r), 4 === i && (this.subtitle = this.computeSubtitle());
    }
}
class eh extends ec {
    computeState(e) {
        var t;
        let { selectedChannel: n, selectedVoiceChannelId: i, activeJoinedRelevantThreads: r, activeJoinedUnreadThreads: l } = e;
        if (!b.Z.can(V.Pl.VIEW_CHANNEL, this.record)) {
            if (this.id === i)
                return {
                    renderLevel: 4,
                    threadIds: []
                };
            if (!g.Z.isChannelGatedAndVisible(this.record.guild_id, this.record.id))
                return {
                    renderLevel: 1,
                    threadIds: []
                };
        }
        let o = this.record.parent_id,
            s = this.category.guild;
        if (eS(s, this.record))
            return {
                renderLevel: 1,
                threadIds: []
            };
        let a = (null == n ? void 0 : n.id) === this.id || i === this.id,
            u = null != n && n.isThread() && n.parent_id === this.id,
            c = null !== (t = a || u || (!this.category.isCollapsed && !this.isMuted) ? r[this.id] : l[this.id]) && void 0 !== t ? t : {},
            h = e_(this.record, c, n, i, s.hideMutedChannels);
        return s.optInEnabled && s.hideResourceChannels && this.record.hasFlag(B.zZ.IS_GUILD_RESOURCE_CHANNEL)
            ? {
                  renderLevel: a ? 4 : 1,
                  threadIds: h
              }
            : !s.optInEnabled || s.optedInChannels.has(this.id) || (null != o && s.optedInChannels.has(o))
              ? a || u || !d().isEmpty(h) || R.ZP.getMentionCount(this.id) > 0
                  ? {
                        renderLevel: 4,
                        threadIds: h
                    }
                  : s.hideMutedChannels && s.mutedChannelIds.has(this.id)
                    ? {
                          renderLevel: 2,
                          threadIds: h
                      }
                    : this.category.isCollapsed && (s.mutedChannelIds.has(this.id) || (null != o && s.mutedChannelIds.has(o)) || this.record.isGuildVocal() || this.record.type === H.d4z.GUILD_STORE || ((0, A.vc)(this.record.type) && !R.ZP.hasUnread(this.record.id)))
                      ? {
                            renderLevel: 3,
                            threadIds: h
                        }
                      : {
                            renderLevel: 4,
                            threadIds: h
                        }
              : {
                    renderLevel: 2,
                    threadIds: h
                };
    }
}
class ef extends ec {
    computeState(e) {
        var t;
        let { selectedChannel: n, selectedVoiceChannelId: i, activeJoinedRelevantThreads: r } = e;
        return b.Z.can(V.Pl.VIEW_CHANNEL, this.record)
            ? {
                  renderLevel: 4,
                  threadIds: e_(this.record, null !== (t = r[this.id]) && void 0 !== t ? t : {}, n, i, !1)
              }
            : {
                  renderLevel: 1,
                  threadIds: []
              };
    }
}
class eg extends ec {
    computeState(e) {
        var t;
        let { selectedChannel: n, selectedVoiceChannelId: i, activeJoinedRelevantThreads: r } = e;
        return b.Z.can(V.Pl.VIEW_CHANNEL, this.record)
            ? {
                  renderLevel: ev(this, e) ? 4 : 3,
                  threadIds: e_(this.record, null !== (t = r[this.id]) && void 0 !== t ? t : {}, n, i, !1)
              }
            : {
                  renderLevel: 1,
                  threadIds: []
              };
    }
}
class eC extends eh {
    computeState(e) {
        let { renderLevel: t, threadIds: n } = super.computeState(e);
        if (t > 1) {
            let i = this.record.parent_id,
                r = this.category.guild;
            r.mutedChannelIds.has(this.id) || (null != i && r.mutedChannelIds.has(i)) ? (t = 2) : 4 === t ? (t = 3) : 2 === t && em(this.category.guild, this.record, e) && (t = 3), 3 === t && ev(this, e) && (t = 4), (n = d().sortBy(n, (e) => -R.ZP.lastMessageTimestamp(e)));
        }
        return {
            renderLevel: t,
            threadIds: n
        };
    }
}
class ep extends eh {
    getRenderLevel(e) {
        let t = this.category.guild;
        return !b.Z.can(V.Pl.VIEW_CHANNEL, this.record) || 4 === e || 3 === e || eS(t, this.record) ? 1 : this.category.isCollapsed ? (d().some(M.Z.getVoiceStatesForChannel(this.record.id)) ? 4 : 3) : 4;
    }
    computeState(e) {
        let t = super.computeState(e),
            n = this.getRenderLevel(t.renderLevel);
        return (
            4 === n && (this.subtitle = eE(this.record, this.isCollapsed || this.category.isCollapsed, this.category.guild.optInEnabled)),
            {
                threadIds: [],
                renderLevel: n
            }
        );
    }
}
function eE(e, t, n) {
    switch (e.type) {
        case H.d4z.GUILD_VOICE: {
            let i = p.ZP.getActiveEventByChannel(e.id);
            if (null != i)
                return {
                    type: 'event',
                    name: i.name
                };
            let r = D.ZP.getVoiceStatesForChannel(e);
            if (n && t && (0, F.a)(r)) return { type: 'go-live' };
            let l = f.Z.getChannelStatus(e);
            if (null != l && l.length > 0)
                return {
                    type: 'voice',
                    text: l
                };
            let o = c.ZP.getEmbeddedActivitiesForChannel(e.id),
                s = (null != o ? o : [])
                    .map((e) => {
                        var t;
                        return null === (t = h.Z.getApplication(e.applicationId)) || void 0 === t ? void 0 : t.name;
                    })
                    .filter(U.lm);
            if (s.length > 0)
                return {
                    type: 'embedded-activities',
                    name: s.join(', ')
                };
            return null;
        }
        case H.d4z.GUILD_STAGE_VOICE: {
            let t = p.ZP.getActiveEventByChannel(e.id);
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
function e_(e, t, n, i, r) {
    let l = null != n && (n.id === e.id || i === e.id),
        o = null != n && n.isThread() && n.parent_id === e.id;
    if (A.uC.has(e.type)) {
        let e = d()
            .sortBy(Object.values(t), (e) => -e.joinTimestamp)
            .map((e) => e.channel.id);
        if (l) return e;
        if (o) return !(n.id in t) && e.unshift(n.id), e;
        else if (r) return e.filter((e) => !N.Z.isMuted(e) || R.ZP.getMentionCount(e) > 0);
        else return e;
    }
    return [];
}
function eI() {
    return !1;
}
function eS(e, t) {
    return e.favoriteChannelIds.has(t.id) && (e.optInEnabled || !1);
}
function ev(e, t) {
    let { selectedChannel: n, activeJoinedRelevantThreads: i } = t;
    if (R.ZP.getMentionCount(e.id) > 0) return !0;
    for (let t in i[e.id]) if (R.ZP.getMentionCount(t) > 0) return !0;
    if (null != n && (n.id === e.id || (n.isThread() && n.parent_id === e.id))) return true;
    let r = m.Z.getNewChannelIds(e.category.guild.id);
    if (r.size > W);
    else if (r.has(e.id)) return !0;
    return !1;
}
function em(e, t, n) {
    let { selectedChannel: i, activeJoinedRelevantThreads: r } = n;
    if (t.type === H.d4z.GUILD_DIRECTORY || !e.optInEnabled || t.isGuildVocal() || e.optedInChannels.has(t.id) || t.isThread() || (null != t.parent_id && e.optedInChannels.has(t.parent_id)) || (e.hideResourceChannels && t.hasFlag(B.zZ.IS_GUILD_RESOURCE_CHANNEL))) return !1;
    if ((null != i && (i.id === t.id || (i.isThread() && i.parent_id === t.id))) || R.ZP.getMentionCount(t.id) > 0) return !0;
    let l = m.Z.getNewChannelIds(e.id),
        o = Array.from(l).sort((e, t) => G.default.compare(t, e));
    if (l.has(t.id) && o.indexOf(t.id) < W) return !0;
    for (let e in r[t.id]) if (R.ZP.getMentionCount(e) > 0 || R.ZP.hasUnread(e) || R.ZP.hasRecentlyVisitedAndRead(e)) return !0;
    return !(e.mutedChannelIds.has(t.id) || (null != t.parent_id && e.mutedChannelIds.has(t.parent_id))) && (!!R.ZP.hasRecentlyVisitedAndRead(t.id) || !1);
}
let eT = new Set(Object.values(j.z));
