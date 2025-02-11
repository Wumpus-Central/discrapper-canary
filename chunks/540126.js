n.d(t, {
    Bz: () => eg,
    Cb: () => B,
    Fq: () => k,
    PB: () => Y,
    VR: () => et,
    ZP: () => q,
    p2: () => z,
    wF: () => K,
    wZ: () => V,
    wd: () => W,
    zR: () => ef
}),
    n(47120),
    n(411104),
    n(653041),
    n(390547),
    n(724458),
    n(733860);
var i = n(512722),
    l = n.n(i),
    r = n(392711),
    s = n.n(r),
    a = n(317381),
    o = n(812206),
    d = n(12498),
    u = n(430198),
    c = n(931261),
    h = n(924301),
    g = n(160404),
    f = n(798423),
    p = n(18036),
    C = n(798379),
    v = n(398758),
    E = n(22082),
    _ = n(601070),
    m = n(569471),
    I = n(131704),
    S = n(680089),
    T = n(592125),
    N = n(58468),
    y = n(430824),
    O = n(496675),
    A = n(306680),
    b = n(944486),
    P = n(9156),
    L = n(979651),
    R = n(938475),
    Z = n(823379),
    D = n(709054),
    w = n(968358),
    M = n(203818),
    x = n(443063),
    U = n(981631),
    F = n(176505),
    G = n(231338);
function j(e, t, n) {
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
let H = 'placeholder-channel-id',
    B = 2,
    k = 0,
    V = 1,
    z = 2,
    Y = 3,
    W = 4,
    K = 5,
    X = new Set([String(x.z.GUILD_DIRECTORY)]);
class q {
    _areGuildActionRowsUpdated(e, t) {
        var n;
        return !s().isEqual(
            null === (n = this.guilds[e]) || void 0 === n
                ? void 0
                : n
                      .getGuildActionSection()
                      .getRows()
                      .filter((e) => !X.has(e)),
            t
        );
    }
    _areChannelNoticeRowsUpdated(e, t) {
        var n;
        return !s().isEqual(null === (n = this.guilds[e]) || void 0 === n ? void 0 : n.getChannelNoticeSection().getRows(), t);
    }
    getGuild(e, t, n) {
        return (!(e in this.guilds) || this._areGuildActionRowsUpdated(e, t) || this._areChannelNoticeRowsUpdated(e, n)) && (this.guilds[e] = new Q(e, t, n)), this.guilds[e];
    }
    getGuildChannelRowsOnly(e) {
        return e in this.guilds || (this.guilds[e] = new Q(e, [], [])), this.guilds[e];
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
        let t = T.Z.getBasicChannel(e);
        return null != t && null != t.guild_id && null != this.guilds[t.guild_id] && (t instanceof I.Sf || null != (t = T.Z.getChannel(e))) && this.nonPositionalChannelUpdate(t);
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
        j(this, 'guilds', {});
    }
}
class Q {
    get initializationData() {
        return {
            selectedChannel: T.Z.getChannel(b.Z.getChannelId()),
            selectedVoiceChannelId: b.Z.getVoiceChannelId(),
            activeJoinedRelevantThreads: _.Z.getActiveJoinedRelevantThreadsForGuild(this.id),
            activeJoinedUnreadThreads: _.Z.getActiveJoinedUnreadThreadsForGuild(this.id)
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
            (this.sortedNamedCategories = s().sortBy(Object.values(this.categories), (e) => e.record.position)), (this.rows = [this.channelNoticeSection, this.guildActionSection, this.favoritesCategory, this.recentsCategory, this.noParentCategory, ...this.sortedNamedCategories, this.voiceChannelsCategory].map((e) => e.getRows()));
            let e = 0;
            for (let t of [this.noParentCategory, ...this.sortedNamedCategories]) for (let n of ((t.position = ++e), t.getShownChannelIds())) t.channels[n].position = ++e;
        }
        return this.rows;
    }
    getCategoryFromSection(e) {
        switch (e) {
            case k:
                throw Error('Invalid section. Use getChannelNoticeSection instead');
            case V:
                throw Error('Invalid section. Use getGuildActionSection instead');
            case z:
                return this.favoritesCategory;
            case W:
                return this.noParentCategory;
            case this.recentsSectionNumber:
                return this.recentsCategory;
            case this.voiceChannelsSectionNumber:
                return this.voiceChannelsCategory;
            default:
                return this.getSortedNamedCategories()[e - K];
        }
    }
    getNamedCategoryFromSection(e) {
        return (e -= K), l()(e >= 0 && e < this.getSortedNamedCategories().length, 'invalid section index '.concat(e)), this.getSortedNamedCategories()[e];
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
        return l()(e > V, 'Invalid section'), e !== this.recentsSectionNumber && this.getRows()[e][t] === H;
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
            if (eE.has(e)) return e;
            let t = T.Z.getChannel(e);
            return (null == t ? void 0 : t.isDirectory()) ? x.z.GUILD_DIRECTORY : null;
        })(e);
        if (null != t)
            return [
                {
                    row: this.getGuildActionSection().getRows().indexOf(t),
                    section: V
                }
            ];
        let n = [],
            i = T.Z.getChannel(e);
        if (null == i || null == e) return n;
        let l = i.isThread();
        if ((l && (i = T.Z.getChannel(i.parent_id)), null == i)) return n;
        let r = this.favoritesCategory.getShownChannelIds().indexOf(i.id);
        r >= 0 &&
            n.push({
                section: z,
                row: r
            });
        let a = this.recentsCategory.getShownChannelIds().indexOf(i.id);
        if (
            (a >= 0 &&
                n.push({
                    section: this.recentsSectionNumber,
                    row: a
                }),
            i.type === U.d4z.GUILD_CATEGORY)
        )
            return [{ section: s().findIndex(this.getSortedNamedCategories(), (e) => e.id === (null == i ? void 0 : i.id)) + K }];
        let o = this.getCategory(i),
            d = o instanceof $ ? W : this.getSortedNamedCategories().indexOf(o) + K,
            u = o.getShownChannelIds().indexOf(i.id);
        if (d >= 0 && u >= 0) {
            let t = l ? o.channels[i.id].threadIds.indexOf(e) : 0;
            n.push({
                section: d,
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
        l()(e.length > 0, 'must have at least one channel in the slice');
        let n = e[0],
            i = e[e.length - 1],
            r = !0,
            s = !1,
            a = [],
            o = [];
        for (let e of this.getSortedCategories()) {
            let l = (null == t ? void 0 : t.ignoreRecents) && e === this.recentsCategory;
            for (let t of e.getShownChannelIds()) {
                let d = e.channels[t];
                r && (d.id === n.id ? (r = !1) : l || a.push(d)), s && !l && o.push(d), r || s || d.id !== i.id || (s = !0);
            }
        }
        return [a, e, o];
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
            let n = T.Z.getChannel(e);
            if (null != n) {
                if (n.id in this.favoritesCategory.channels) t = [this.favoritesCategory.channels[n.id]];
                else if (n.id in this.recentsCategory.channels) t = [this.recentsCategory.channels[n.id]];
                else {
                    let i = this.getCategory(n);
                    null != i && null != i.channels[e] && (t = [i.channels[e]]);
                }
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
                    let i = n.channels[t];
                    for (let t of (e(i.record), i.threadIds)) {
                        let n = T.Z.getChannel(t);
                        null != n && e(n);
                    }
                }
    }
    forEachChannel(e, t) {
        for (let n of this.getSortedCategories()) if (null == t || !t.ignoreRecents || n !== this.recentsCategory) for (let t of n.getChannelRecords()) e(t);
    }
    constructor(e, t, n) {
        var i, r;
        j(this, 'id', void 0), j(this, 'hideMutedChannels', void 0), j(this, 'favoritesSectionNumber', void 0), j(this, 'recentsSectionNumber', void 0), j(this, 'voiceChannelsSectionNumber', void 0), j(this, 'mutedChannelIds', void 0), j(this, 'optedInChannels', void 0), j(this, 'optInEnabled', void 0), j(this, 'hideResourceChannels', void 0), j(this, 'favoriteChannelIds', void 0), j(this, 'suggestedFavoriteChannelId', void 0), j(this, 'collapsedCategoryIds', void 0), j(this, 'categories', void 0), j(this, 'noParentCategory', void 0), j(this, 'favoritesCategory', void 0), j(this, 'recentsCategory', void 0), j(this, 'voiceChannelsCategory', void 0), j(this, 'guildActionSection', void 0), j(this, 'channelNoticeSection', void 0), j(this, 'sortedNamedCategories', void 0), j(this, 'sections', void 0), j(this, 'rows', void 0), j(this, 'firstVoiceChannel', void 0), j(this, 'allChannelsById', void 0), j(this, 'version', void 0), (this.id = e), (this.sortedNamedCategories = null), (this.sections = null), (this.rows = null), (this.firstVoiceChannel = void 0), (this.allChannelsById = null), (this.version = 0), (this.hideMutedChannels = P.ZP.isGuildCollapsed(this.id)), (this.mutedChannelIds = P.ZP.getMutedChannels(this.id)), (this.optedInChannels = null !== (i = P.ZP.getOptedInChannelsWithPendingUpdates(this.id)) && void 0 !== i ? i : P.ZP.getOptedInChannels(this.id)), (this.optInEnabled = (0, v.r1)(this.id)), (this.hideResourceChannels = (0, c.s)(this.id)), (this.favoriteChannelIds = new Set(null !== (r = P.ZP.getGuildFavorites(this.id)) && void 0 !== r ? r : [])), (this.suggestedFavoriteChannelId = p.Z.getSuggestedChannelId(this.id)), (this.collapsedCategoryIds = S.Z.getCollapsedCategories());
        let a = T.Z.getMutableGuildChannelsForGuild(this.id),
            o = y.Z.getGuild(this.id),
            d = {},
            u = [],
            h = {};
        for (let e in a) {
            let t = a[e];
            t.type === U.d4z.GUILD_CATEGORY && ((d[t.id] = t), (h[t.id] = []));
        }
        let g = [],
            C = [],
            E = [],
            _ = this.initializationData;
        for (let e in a) {
            let t = a[e];
            if (t.type !== U.d4z.GUILD_CATEGORY) {
                if (t.type === U.d4z.GUILD_DIRECTORY) {
                    null == o || o.hasFeature(U.oNc.HUB) || E.push(t);
                    continue;
                }
                ev(this, t, _) ? g.push(t) : (t.type === U.d4z.GUILD_VOICE || t.type === U.d4z.GUILD_STAGE_VOICE) && (null != t.parent_id && null != d[t.parent_id] && C.push(d[t.parent_id]), C.push(t)), null != t.parent_id && t.parent_id in h ? h[t.parent_id].push(t) : u.push(t);
            }
        }
        for (let e in ((this.categories = {}), h)) this.categories[e] = new ee(this, d[e], h[e], _);
        (this.recentsSectionNumber = Y), (this.favoritesSectionNumber = z), (this.noParentCategory = new $(this, u, _)), (this.favoritesCategory = new et(this, _)), (this.recentsCategory = (0, f.Q)() ? new en(this, a, _) : new ei(this, g, _)), (this.voiceChannelsCategory = new el(this, C, d, _)), (this.guildActionSection = new es(t, E.length > 0)), (this.channelNoticeSection = new er(n)), l()(!('null' in this.categories), 'somehow a null got into categories'), (this.voiceChannelsSectionNumber = K + s().size(this.categories));
    }
}
class J {
    updateChannel(e, t) {
        return !!(e.id in this.channels && this.channels[e.id].updateChannel(e, t)) && (this.invalidate(), !0);
    }
    invalidate() {
        this.shownChannelIds = null;
    }
    getRows() {
        let e = this.getShownChannelIds();
        return 0 === e.length && this.shouldShowEmptyCategory() ? [H] : e;
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
        for (let t of this.getShownChannelIds()) if ((e && this.channels[t].record.isGuildStageVoice()) || (!e && this.channels[t].record.isGuildVocal())) return this.channels[t];
        return null;
    }
    constructor(e) {
        j(this, 'guild', void 0), j(this, 'isMuted', void 0), j(this, 'isCollapsed', void 0), j(this, 'position', void 0), j(this, 'channels', void 0), j(this, 'shownChannelIds', void 0), (this.guild = e), (this.isMuted = !1), (this.isCollapsed = !1), (this.position = -1), (this.channels = {}), (this.shownChannelIds = null);
    }
}
class $ extends J {
    constructor(e, t, n) {
        super(e),
            (this.channels = s()(t)
                .map((e) => new eo(this, e, n))
                .keyBy((e) => e.id)
                .value());
    }
}
class ee extends J {
    shouldShowEmptyCategory() {
        return !!(super.shouldShowEmptyCategory() || (O.Z.can(G.Pl.MANAGE_CHANNELS, this.record) && O.Z.can(G.Pl.VIEW_CHANNEL, this.record) && s().isEmpty(this.channels) && (!this.guild.optInEnabled || this.guild.optedInChannels.has(this.id))));
    }
    constructor(e, t, n, i) {
        for (let l of (super(e), j(this, 'id', void 0), j(this, 'record', void 0), (this.record = t), (this.id = t.id), (this.isCollapsed = !0 === e.collapsedCategoryIds[t.id]), (this.isMuted = e.mutedChannelIds.has(t.id)), (this.channels = {}), n)) this.channels[l.id] = new eo(this, l, i);
    }
}
class et extends J {
    updateChannel(e, t) {
        let n = e.id in this.channels && P.ZP.isFavorite(e.guild_id, e.id),
            i = p.Z.getSuggestedChannelId(e.guild_id);
        return (e.id !== i ||
            n ||
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
        if ((super(e), !e.optInEnabled)) return;
        this.channels = s()(null !== (n = P.ZP.getGuildFavorites(e.id)) && void 0 !== n ? n : [])
            .map((e) => T.Z.getChannel(e))
            .filter(Z.lm)
            .map((e) => new ed(this, e, t))
            .keyBy((e) => e.id)
            .value();
        let i = p.Z.getSuggestedChannelId(e.id),
            l = T.Z.getChannel(i);
        null != l &&
            null != i &&
            (this.channels[i] = new ed(this, l, {
                ...t,
                activeJoinedRelevantThreads: {},
                activeJoinedUnreadThreads: {}
            }));
    }
}
class en extends J {
    shouldShowEmptyCategory() {
        return this.enabled && this.isCollapsed && super.shouldShowEmptyCategory();
    }
    updateAllChannels(e) {
        return Object.values(this.channels).reduce((t, n) => this.updateChannel(n.record, e) || t, !1);
    }
    updateChannel(e, t) {
        if (!this.enabled) return !1;
        if ((0, I.Q5)(e.type)) {
            let t = this.channels[e.parent_id];
            return null != t && this.updateShownChannelIds(t);
        }
        if (!(0, I.vc)(e.type)) return !1;
        let n = super.updateChannel(e, t),
            i = this.channels[e.id];
        return null == i ? ((i = new ec(this, e, t)), (this.channels[e.id] = i), this.invalidate(), !0) : this.updateShownChannelIds(i) || n;
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
                          return 4 === n || (t > 0 && Date.now() - t < en.MAX_TIMESTAMP_DELTA);
                      })
                      .sortBy((e) => {
                          let [, t, n] = e;
                          return -(t - (4 === n ? 0 : D.DISCORD_EPOCH));
                      })
                      .take(en.MAX_RECENT_CHANNELS)
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
            return t > -1 && this.shownChannelIds.splice(t, 1), this.shownChannelIds.splice(0, 0, e.id), this.shownChannelIds.length > en.MAX_RECENT_CHANNELS && (this.shownChannelIds = this.shownChannelIds.slice(0, en.MAX_RECENT_CHANNELS)), !0;
        }
        return !1;
    }
    constructor(e, t, n) {
        if ((super(e), j(this, 'enabled', !1), (this.isCollapsed = C.Z.isCollapsed(e.id)), (this.enabled = !1), this.enabled)) for (let e of Object.values(t)) (0, I.vc)(e.type) && !(0, I.Q5)(e.type) && (this.channels[e.id] = new ec(this, e, n));
    }
}
j(en, 'MIN_READABLE_CHANNELS', 7), j(en, 'MAX_RECENT_CHANNELS', 10), j(en, 'MAX_TIMESTAMP_DELTA', 604800000);
class ei extends J {
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
                i = ev(this.guild, e, t);
            if (i && null == n) return (this.channels[e.id] = new eu(this, e, t)), this.invalidate(), !0;
            if (!i && null != n) return delete this.channels[e.id], this.invalidate(), !0;
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
        if ((super(e), !e.optInEnabled || g.Z.isFullServerPreview(e.id))) return;
        (this.isCollapsed = !1),
            (this.isMuted = !1),
            (this.channels = s()(t)
                .map((e) => new eu(this, e, n))
                .keyBy((e) => e.id)
                .value());
    }
}
class el extends J {
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
        return 0 === e.length && this.getHiddenChannelIds().length > 0 ? [H] : e;
    }
    getShownChannelIds() {
        if (!this.guild.optInEnabled) return [];
        if (null == this.shownChannelIds) {
            let t = s()(this.channels)
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
        if ((super(e), j(this, 'categoriesById', void 0), j(this, 'hiddenChannelIds', void 0), (this.categoriesById = n), (this.hiddenChannelIds = null), !e.optInEnabled)) return;
        (this.isCollapsed = M.Z.isVoiceCategoryCollapsed(e.id)),
            (this.isMuted = !1),
            (this.categoriesById = n),
            (this.channels = s()(t)
                .map((e) => new eh(this, e, i))
                .keyBy((e) => e.id)
                .value());
    }
}
class er {
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
        j(this, 'rows', void 0), (this.rows = e);
    }
}
class es {
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
        j(this, 'guildActionRows', void 0), (this.guildActionRows = e.map(String)), t && this.guildActionRows.push(String(x.z.GUILD_DIRECTORY));
    }
}
class ea {
    get isMuted() {
        return this.category.guild.mutedChannelIds.has(this.id);
    }
    get isCollapsed() {
        return N.Z.isCollapsed(this.id);
    }
    get isFirstVoiceChannel() {
        return this.category.getFirstVoiceChannel() === this;
    }
    get lastMessageTimestamp() {
        return Math.max(A.ZP.lastMessageTimestamp(this.id), ...this.threadIds.map(A.ZP.lastMessageTimestamp));
    }
    updateChannel(e, t) {
        let n = !1;
        null != e && e !== this.record && ((this.record = e), (n = !0));
        let i = this.computeState(t);
        return (i.renderLevel === this.renderLevel && s().isEqual(i.threadIds, this.threadIds)) || ((this.renderLevel = i.renderLevel), (this.threadIds = i.threadIds), (this.threadCount = s().size(i.threadIds)), (n = !0)), 4 === this.renderLevel && this.updateSubtitle() && (n = !0), n;
    }
    updateSubtitle() {
        let e = this.computeSubtitle();
        return !s().isEqual(this.subtitle, e) && ((this.subtitle = e), !0);
    }
    computeSubtitle() {
        return eg(this.record, this.isCollapsed || this.category.isCollapsed, this.category.guild.optInEnabled);
    }
    constructor(e, t, n) {
        j(this, 'category', void 0), j(this, 'record', void 0), j(this, 'id', void 0), j(this, 'position', void 0), j(this, 'threadIds', void 0), j(this, 'threadCount', void 0), j(this, 'subtitle', void 0), j(this, 'renderLevel', void 0), (this.category = e), (this.record = t), (this.position = -1), (this.threadIds = []), (this.threadCount = 0), (this.subtitle = null), (this.renderLevel = 1), (this.id = t.id);
        let { renderLevel: i, threadIds: l } = this.computeState(n);
        (this.renderLevel = i), (this.threadCount = s().size(l)), (this.threadIds = l), 4 === i && (this.subtitle = this.computeSubtitle());
    }
}
class eo extends ea {
    computeState(e) {
        var t;
        let { selectedChannel: n, selectedVoiceChannelId: i, activeJoinedRelevantThreads: l, activeJoinedUnreadThreads: r } = e;
        if (!O.Z.can(G.Pl.VIEW_CHANNEL, this.record)) {
            if (this.id === i)
                return {
                    renderLevel: 4,
                    threadIds: []
                };
            if (!u.Z.isChannelGatedAndVisible(this.record.guild_id, this.record.id))
                return {
                    renderLevel: 1,
                    threadIds: []
                };
        }
        let a = this.record.parent_id,
            o = this.category.guild;
        if (ep(o, this.record))
            return {
                renderLevel: 1,
                threadIds: []
            };
        let d = (null == n ? void 0 : n.id) === this.id || i === this.id,
            c = null != n && n.isThread() && n.parent_id === this.id,
            h = null !== (t = d || c || (!this.category.isCollapsed && !this.isMuted) ? l[this.id] : r[this.id]) && void 0 !== t ? t : {},
            g = ef(this.record, h, n, i, o.hideMutedChannels);
        return o.optInEnabled && o.hideResourceChannels && this.record.hasFlag(F.zZ.IS_GUILD_RESOURCE_CHANNEL)
            ? {
                  renderLevel: d ? 4 : 1,
                  threadIds: g
              }
            : !o.optInEnabled || o.optedInChannels.has(this.id) || (null != a && o.optedInChannels.has(a))
              ? d || c || !s().isEmpty(g) || A.ZP.getMentionCount(this.id) > 0
                  ? {
                        renderLevel: 4,
                        threadIds: g
                    }
                  : o.hideMutedChannels && o.mutedChannelIds.has(this.id)
                    ? {
                          renderLevel: 2,
                          threadIds: g
                      }
                    : this.category.isCollapsed && (o.mutedChannelIds.has(this.id) || (null != a && o.mutedChannelIds.has(a)) || this.record.isGuildVocal() || this.record.type === U.d4z.GUILD_STORE || ((0, I.vc)(this.record.type) && !A.ZP.hasUnread(this.record.id)))
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
class ed extends ea {
    computeState(e) {
        var t;
        let { selectedChannel: n, selectedVoiceChannelId: i, activeJoinedRelevantThreads: l } = e;
        return O.Z.can(G.Pl.VIEW_CHANNEL, this.record)
            ? {
                  renderLevel: 4,
                  threadIds: ef(this.record, null !== (t = l[this.id]) && void 0 !== t ? t : {}, n, i, !1)
              }
            : {
                  renderLevel: 1,
                  threadIds: []
              };
    }
}
class eu extends ea {
    computeState(e) {
        var t;
        let { selectedChannel: n, selectedVoiceChannelId: i, activeJoinedRelevantThreads: l } = e;
        return O.Z.can(G.Pl.VIEW_CHANNEL, this.record)
            ? {
                  renderLevel: eC(this, e) ? 4 : 3,
                  threadIds: ef(this.record, null !== (t = l[this.id]) && void 0 !== t ? t : {}, n, i, !1)
              }
            : {
                  renderLevel: 1,
                  threadIds: []
              };
    }
}
class ec extends eo {
    computeState(e) {
        let { renderLevel: t, threadIds: n } = super.computeState(e);
        if (t > 1) {
            let i = this.record.parent_id,
                l = this.category.guild;
            l.mutedChannelIds.has(this.id) || (null != i && l.mutedChannelIds.has(i)) ? (t = 2) : 4 === t ? (t = 3) : 2 === t && ev(this.category.guild, this.record, e) && (t = 3), 3 === t && eC(this, e) && (t = 4), (n = s().sortBy(n, (e) => -A.ZP.lastMessageTimestamp(e)));
        }
        return {
            renderLevel: t,
            threadIds: n
        };
    }
}
class eh extends eo {
    getRenderLevel(e) {
        let t = this.category.guild;
        return !O.Z.can(G.Pl.VIEW_CHANNEL, this.record) || 4 === e || 3 === e || ep(t, this.record) ? 1 : this.category.isCollapsed ? (s().some(L.Z.getVoiceStatesForChannel(this.record.id)) ? 4 : 3) : 4;
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
            let l = R.ZP.getVoiceStatesForChannel(e);
            if (n && t && (0, w.a)(l)) return { type: 'go-live' };
            let r = d.Z.getChannelStatus(e);
            if (null != r && r.length > 0)
                return {
                    type: 'voice',
                    text: r
                };
            let s = a.ZP.getEmbeddedActivitiesForChannel(e.id)
                .concat(a.ZP.getEmbeddedActivitiesForStartingChannel(e.id))
                .map((e) => {
                    var t;
                    return null === (t = o.Z.getApplication(e.applicationId)) || void 0 === t ? void 0 : t.name;
                })
                .filter(Z.lm);
            if (s.length > 0)
                return {
                    type: 'embedded-activities',
                    name: s.join(', ')
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
function ef(e, t, n, i, l) {
    let r = null != n && (n.id === e.id || i === e.id),
        a = null != n && n.isThread() && n.parent_id === e.id;
    if (I.uC.has(e.type)) {
        let e = s()
            .sortBy(Object.values(t), (e) => -e.joinTimestamp)
            .map((e) => e.channel.id);
        return r ? e : a ? (n.id in t || e.unshift(n.id), e) : l ? e.filter((e) => !m.Z.isMuted(e) || A.ZP.getMentionCount(e) > 0) : e;
    }
    return [];
}
function ep(e, t) {
    return e.favoriteChannelIds.has(t.id) && (e.optInEnabled || !1);
}
function eC(e, t) {
    let { selectedChannel: n, activeJoinedRelevantThreads: i } = t;
    if (A.ZP.getMentionCount(e.id) > 0) return !0;
    for (let t in i[e.id]) if (A.ZP.getMentionCount(t) > 0) return !0;
    if (null != n && (n.id === e.id || (n.isThread() && n.parent_id === e.id))) return !0;
    let l = E.Z.getNewChannelIds(e.category.guild.id);
    if (l.size > B);
    else if (l.has(e.id)) return !0;
    return !1;
}
function ev(e, t, n) {
    let { selectedChannel: i, activeJoinedRelevantThreads: l } = n;
    if (t.type === U.d4z.GUILD_DIRECTORY || !e.optInEnabled || t.isGuildVocal() || e.optedInChannels.has(t.id) || t.isThread() || (null != t.parent_id && e.optedInChannels.has(t.parent_id)) || (e.hideResourceChannels && t.hasFlag(F.zZ.IS_GUILD_RESOURCE_CHANNEL))) return !1;
    if ((null != i && (i.id === t.id || (i.isThread() && i.parent_id === t.id))) || A.ZP.getMentionCount(t.id) > 0) return !0;
    let r = E.Z.getNewChannelIds(e.id),
        s = Array.from(r).sort((e, t) => D.default.compare(t, e));
    if (r.has(t.id) && s.indexOf(t.id) < B) return !0;
    for (let e in l[t.id]) if (A.ZP.getMentionCount(e) > 0 || A.ZP.hasUnread(e) || A.ZP.hasRecentlyVisitedAndRead(e)) return !0;
    return !(e.mutedChannelIds.has(t.id) || (null != t.parent_id && e.mutedChannelIds.has(t.parent_id))) && !!A.ZP.hasRecentlyVisitedAndRead(t.id);
}
let eE = new Set(Object.values(x.z));
