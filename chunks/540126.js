n.d(t, {
    Bz: () => eg,
    Cb: () => H,
    Fq: () => z,
    PB: () => K,
    VR: () => er,
    ZP: () => J,
    p2: () => Y,
    wF: () => Q,
    wZ: () => W,
    wd: () => q,
    zR: () => em
}),
    n(388685),
    n(415506),
    n(539854),
    n(361932),
    n(187205),
    n(290780),
    n(642613);
var r = n(512722),
    i = n.n(r),
    l = n(392711),
    o = n.n(l),
    s = n(317381),
    a = n(812206),
    c = n(12498),
    u = n(430198),
    d = n(931261),
    h = n(924301),
    p = n(160404),
    f = n(798423),
    g = n(18036),
    m = n(798379),
    b = n(398758),
    y = n(22082),
    _ = n(601070),
    O = n(569471),
    v = n(131704),
    C = n(680089),
    j = n(592125),
    x = n(58468),
    S = n(430824),
    E = n(496675),
    P = n(306680),
    I = n(944486),
    w = n(9156),
    N = n(979651),
    Z = n(938475),
    T = n(823379),
    A = n(709054),
    R = n(968358),
    D = n(203818),
    L = n(443063),
    k = n(981631),
    M = n(176505),
    U = n(231338);
function G(e, t, n) {
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
function B(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                G(e, t, n[t]);
            });
    }
    return e;
}
function V(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let F = 'placeholder-channel-id',
    H = 2,
    z = 0,
    W = 1,
    Y = 2,
    K = 3,
    q = 4,
    Q = 5,
    X = new Set([String(L.z.GUILD_DIRECTORY)]);
class J {
    _areGuildActionRowsUpdated(e, t) {
        var n;
        return !o().isEqual(
            null == (n = this.guilds[e])
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
        return !o().isEqual(null == (n = this.guilds[e]) ? void 0 : n.getChannelNoticeSection().getRows(), t);
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
        let t = j.Z.getBasicChannel(e);
        return null != t && null != t.guild_id && null != this.guilds[t.guild_id] && (t instanceof v.Sf || null != (t = j.Z.getChannel(e))) && this.nonPositionalChannelUpdate(t);
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
        G(this, 'guilds', {});
    }
}
class $ {
    get initializationData() {
        return {
            selectedChannel: j.Z.getChannel(I.Z.getChannelId()),
            selectedVoiceChannelId: I.Z.getVoiceChannelId(),
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
            (this.sortedNamedCategories = o().sortBy(Object.values(this.categories), (e) => e.record.position)), (this.rows = [this.channelNoticeSection, this.guildActionSection, this.favoritesCategory, this.recentsCategory, this.noParentCategory, ...this.sortedNamedCategories, this.voiceChannelsCategory].map((e) => e.getRows()));
            let e = 0;
            for (let t of [this.noParentCategory, ...this.sortedNamedCategories]) for (let n of ((t.position = ++e), t.getShownChannelIds())) t.channels[n].position = ++e;
        }
        return this.rows;
    }
    getCategoryFromSection(e) {
        switch (e) {
            case z:
                throw Error('Invalid section. Use getChannelNoticeSection instead');
            case W:
                throw Error('Invalid section. Use getGuildActionSection instead');
            case Y:
                return this.favoritesCategory;
            case q:
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
        return (e -= Q), i()(e >= 0 && e < this.getSortedNamedCategories().length, 'invalid section index '.concat(e)), this.getSortedNamedCategories()[e];
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
                  channel: r
              };
    }
    isPlaceholderRow(e, t) {
        return i()(e > W, 'Invalid section'), e !== this.recentsSectionNumber && this.getRows()[e][t] === F;
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
            if (eO.has(e)) return e;
            let t = j.Z.getChannel(e);
            return (null == t ? void 0 : t.isDirectory()) ? L.z.GUILD_DIRECTORY : null;
        })(e);
        if (null != t)
            return [
                {
                    row: this.getGuildActionSection().getRows().indexOf(t),
                    section: W
                }
            ];
        let n = [],
            r = j.Z.getChannel(e);
        if (null == r || null == e) return n;
        let i = r.isThread();
        if ((i && (r = j.Z.getChannel(r.parent_id)), null == r)) return n;
        let l = this.favoritesCategory.getShownChannelIds().indexOf(r.id);
        l >= 0 &&
            n.push({
                section: Y,
                row: l
            });
        let s = this.recentsCategory.getShownChannelIds().indexOf(r.id);
        if (
            (s >= 0 &&
                n.push({
                    section: this.recentsSectionNumber,
                    row: s
                }),
            r.type === k.d4z.GUILD_CATEGORY)
        )
            return [{ section: o().findIndex(this.getSortedNamedCategories(), (e) => e.id === (null == r ? void 0 : r.id)) + Q }];
        let a = this.getCategory(r),
            c = a instanceof et ? q : this.getSortedNamedCategories().indexOf(a) + Q,
            u = a.getShownChannelIds().indexOf(r.id);
        if (c >= 0 && u >= 0) {
            let t = i ? a.channels[r.id].threadIds.indexOf(e) : 0;
            n.push({
                section: c,
                row: u,
                threadOffset: t
            });
        }
        let d = this.voiceChannelsCategory.getShownChannelIds().indexOf(r.id);
        return (
            d >= 0 &&
                n.push({
                    section: this.voiceChannelsSectionNumber,
                    row: d
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
        i()(e.length > 0, 'must have at least one channel in the slice');
        let n = e[0],
            r = e[e.length - 1],
            l = !0,
            o = !1,
            s = [],
            a = [];
        for (let e of this.getSortedCategories()) {
            let i = (null == t ? void 0 : t.ignoreRecents) && e === this.recentsCategory;
            for (let t of e.getShownChannelIds()) {
                let c = e.channels[t];
                l && (c.id === n.id ? (l = !1) : i || s.push(c)), o && !i && a.push(c), l || o || c.id !== r.id || (o = !0);
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
            let n = j.Z.getChannel(e);
            if (null != n)
                if (n.id in this.favoritesCategory.channels) t = [this.favoritesCategory.channels[n.id]];
                else if (n.id in this.recentsCategory.channels) t = [this.recentsCategory.channels[n.id]];
                else {
                    let r = this.getCategory(n);
                    null != r && null != r.channels[e] && (t = [r.channels[e]]);
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
                    let r = n.channels[t];
                    for (let t of (e(r.record), r.threadIds)) {
                        let n = j.Z.getChannel(t);
                        null != n && e(n);
                    }
                }
    }
    forEachChannel(e, t) {
        for (let n of this.getSortedCategories()) if (null == t || !t.ignoreRecents || n !== this.recentsCategory) for (let t of n.getChannelRecords()) e(t);
    }
    constructor(e, t, n) {
        var r, l;
        G(this, 'id', void 0), G(this, 'hideMutedChannels', void 0), G(this, 'favoritesSectionNumber', void 0), G(this, 'recentsSectionNumber', void 0), G(this, 'voiceChannelsSectionNumber', void 0), G(this, 'mutedChannelIds', void 0), G(this, 'optedInChannels', void 0), G(this, 'optInEnabled', void 0), G(this, 'hideResourceChannels', void 0), G(this, 'favoriteChannelIds', void 0), G(this, 'suggestedFavoriteChannelId', void 0), G(this, 'collapsedCategoryIds', void 0), G(this, 'categories', void 0), G(this, 'noParentCategory', void 0), G(this, 'favoritesCategory', void 0), G(this, 'recentsCategory', void 0), G(this, 'voiceChannelsCategory', void 0), G(this, 'guildActionSection', void 0), G(this, 'channelNoticeSection', void 0), G(this, 'sortedNamedCategories', void 0), G(this, 'sections', void 0), G(this, 'rows', void 0), G(this, 'firstVoiceChannel', void 0), G(this, 'allChannelsById', void 0), G(this, 'version', void 0), (this.id = e), (this.sortedNamedCategories = null), (this.sections = null), (this.rows = null), (this.firstVoiceChannel = void 0), (this.allChannelsById = null), (this.version = 0), (this.hideMutedChannels = w.ZP.isGuildCollapsed(this.id)), (this.mutedChannelIds = w.ZP.getMutedChannels(this.id)), (this.optedInChannels = null != (r = w.ZP.getOptedInChannelsWithPendingUpdates(this.id)) ? r : w.ZP.getOptedInChannels(this.id)), (this.optInEnabled = (0, b.r1)(this.id)), (this.hideResourceChannels = (0, d.s)(this.id)), (this.favoriteChannelIds = new Set(null != (l = w.ZP.getGuildFavorites(this.id)) ? l : [])), (this.suggestedFavoriteChannelId = g.Z.getSuggestedChannelId(this.id)), (this.collapsedCategoryIds = C.Z.getCollapsedCategories());
        let s = j.Z.getMutableGuildChannelsForGuild(this.id),
            a = S.Z.getGuild(this.id),
            c = {},
            u = [],
            h = {};
        for (let e in s) {
            let t = s[e];
            t.type === k.d4z.GUILD_CATEGORY && ((c[t.id] = t), (h[t.id] = []));
        }
        let p = [],
            m = [],
            y = [],
            _ = this.initializationData;
        for (let e in s) {
            let t = s[e];
            if (t.type !== k.d4z.GUILD_CATEGORY) {
                if (t.type === k.d4z.GUILD_DIRECTORY) {
                    null == a || a.hasFeature(k.oNc.HUB) || y.push(t);
                    continue;
                }
                e_(this, t, _) ? p.push(t) : (t.type === k.d4z.GUILD_VOICE || t.type === k.d4z.GUILD_STAGE_VOICE) && (null != t.parent_id && null != c[t.parent_id] && m.push(c[t.parent_id]), m.push(t)), null != t.parent_id && t.parent_id in h ? h[t.parent_id].push(t) : u.push(t);
            }
        }
        for (let e in ((this.categories = {}), h)) this.categories[e] = new en(this, c[e], h[e], _);
        (this.recentsSectionNumber = K), (this.favoritesSectionNumber = Y), (this.noParentCategory = new et(this, u, _)), (this.favoritesCategory = new er(this, _)), (this.recentsCategory = (0, f.Q)() ? new ei(this, s, _) : new el(this, p, _)), (this.voiceChannelsCategory = new eo(this, m, c, _)), (this.guildActionSection = new ea(t, y.length > 0)), (this.channelNoticeSection = new es(n)), i()(!('null' in this.categories), 'somehow a null got into categories'), (this.voiceChannelsSectionNumber = Q + o().size(this.categories));
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
        return 0 === e.length && this.shouldShowEmptyCategory() ? [F] : e;
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
        for (let t of this.getShownChannelIds())
            if (e && this.channels[t].record.isGuildStageVoice()) return this.channels[t];
            else if (!e && this.channels[t].record.isGuildVocal()) return this.channels[t];
        return null;
    }
    constructor(e) {
        G(this, 'guild', void 0), G(this, 'isMuted', void 0), G(this, 'isCollapsed', void 0), G(this, 'position', void 0), G(this, 'channels', void 0), G(this, 'shownChannelIds', void 0), (this.guild = e), (this.isMuted = !1), (this.isCollapsed = !1), (this.position = -1), (this.channels = {}), (this.shownChannelIds = null);
    }
}
class et extends ee {
    constructor(e, t, n) {
        super(e),
            (this.channels = o()(t)
                .map((e) => new eu(this, e, n))
                .keyBy((e) => e.id)
                .value());
    }
}
class en extends ee {
    shouldShowEmptyCategory() {
        return !!(super.shouldShowEmptyCategory() || (E.Z.can(U.Pl.MANAGE_CHANNELS, this.record) && E.Z.can(U.Pl.VIEW_CHANNEL, this.record) && o().isEmpty(this.channels) && (!this.guild.optInEnabled || this.guild.optedInChannels.has(this.id))));
    }
    constructor(e, t, n, r) {
        for (let i of (super(e), G(this, 'id', void 0), G(this, 'record', void 0), (this.record = t), (this.id = t.id), (this.isCollapsed = !0 === e.collapsedCategoryIds[t.id]), (this.isMuted = e.mutedChannelIds.has(t.id)), (this.channels = {}), n)) this.channels[i.id] = new eu(this, i, r);
    }
}
class er extends ee {
    updateChannel(e, t) {
        let n = e.id in this.channels && w.ZP.isFavorite(e.guild_id, e.id),
            r = g.Z.getSuggestedChannelId(e.guild_id);
        return (e.id !== r ||
            n ||
            (t = V(B({}, t), {
                activeJoinedRelevantThreads: {},
                activeJoinedUnreadThreads: {}
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
        if ((super(e), !e.optInEnabled)) return;
        this.channels = o()(null != (n = w.ZP.getGuildFavorites(e.id)) ? n : [])
            .map((e) => j.Z.getChannel(e))
            .filter(T.lm)
            .map((e) => new ed(this, e, t))
            .keyBy((e) => e.id)
            .value();
        let r = g.Z.getSuggestedChannelId(e.id),
            i = j.Z.getChannel(r);
        null != i &&
            null != r &&
            (this.channels[r] = new ed(
                this,
                i,
                V(B({}, t), {
                    activeJoinedRelevantThreads: {},
                    activeJoinedUnreadThreads: {}
                })
            ));
    }
}
class ei extends ee {
    shouldShowEmptyCategory() {
        return this.enabled && this.isCollapsed && super.shouldShowEmptyCategory();
    }
    updateAllChannels(e) {
        return Object.values(this.channels).reduce((t, n) => this.updateChannel(n.record, e) || t, !1);
    }
    updateChannel(e, t) {
        if (!this.enabled) return !1;
        if ((0, v.Q5)(e.type)) {
            let t = this.channels[e.parent_id];
            return null != t && this.updateShownChannelIds(t);
        }
        if (!(0, v.vc)(e.type)) return !1;
        let n = super.updateChannel(e, t),
            r = this.channels[e.id];
        return null == r ? ((r = new ep(this, e, t)), (this.channels[e.id] = r), this.invalidate(), !0) : this.updateShownChannelIds(r) || n;
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
                          return 4 === n || (t > 0 && Date.now() - t < ei.MAX_TIMESTAMP_DELTA);
                      })
                      .sortBy((e) => {
                          let [, t, n] = e;
                          return -(t - (4 === n ? 0 : A.DISCORD_EPOCH));
                      })
                      .take(ei.MAX_RECENT_CHANNELS)
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
            return t > -1 && this.shownChannelIds.splice(t, 1), this.shownChannelIds.splice(0, 0, e.id), this.shownChannelIds.length > ei.MAX_RECENT_CHANNELS && (this.shownChannelIds = this.shownChannelIds.slice(0, ei.MAX_RECENT_CHANNELS)), !0;
        }
        return !1;
    }
    constructor(e, t, n) {
        if ((super(e), G(this, 'enabled', !1), (this.isCollapsed = m.Z.isCollapsed(e.id)), (this.enabled = !1), this.enabled)) for (let e of Object.values(t)) (0, v.vc)(e.type) && !(0, v.Q5)(e.type) && (this.channels[e.id] = new ep(this, e, n));
    }
}
G(ei, 'MIN_READABLE_CHANNELS', 7), G(ei, 'MAX_RECENT_CHANNELS', 10), G(ei, 'MAX_TIMESTAMP_DELTA', 604800000);
class el extends ee {
    updateAllChannels(e) {
        let t = !1;
        return (
            A.default.keys(this.channels).forEach((n) => {
                this.updateChannel(this.channels[n].record, e) && (t = !0);
            }),
            t
        );
    }
    updateChannel(e, t) {
        let n = super.updateChannel(e, t);
        if (this.guild.optInEnabled) {
            let n = this.channels[e.id],
                r = e_(this.guild, e, t);
            if (r && null == n) return (this.channels[e.id] = new eh(this, e, t)), this.invalidate(), !0;
            if (!r && null != n) return delete this.channels[e.id], this.invalidate(), !0;
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
        if ((super(e), !e.optInEnabled || p.Z.isFullServerPreview(e.id))) return;
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
        return 0 === e.length && this.getHiddenChannelIds().length > 0 ? [F] : e;
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
                                if (e.record.type === k.d4z.GUILD_CATEGORY) return e.record.position;
                                if (null != e.record.parent_id) {
                                    var n, r;
                                    return null != (r = null == (n = t[e.record.parent_id]) ? void 0 : n.position) ? r : -1;
                                }
                                return -1;
                            })(e, this.categoriesById),
                        (e) => (e.record.type === k.d4z.GUILD_CATEGORY ? -1 : e.record.position)
                    ],
                    ['asc', 'asc']
                )
                .value();
            this.shownChannelIds = [];
            for (let n = 0; n < t.length; n++) {
                var e;
                let r = t[n];
                (n < t.length - 1 && r.record.type === k.d4z.GUILD_CATEGORY && (null == (e = t[n + 1]) ? void 0 : e.record.type) === k.d4z.GUILD_CATEGORY) || ((n !== t.length - 1 || r.record.type !== k.d4z.GUILD_CATEGORY) && this.shownChannelIds.push(r.id));
            }
        }
        return this.shownChannelIds;
    }
    getFirstVoiceChannel(e) {
        return null;
    }
    constructor(e, t, n, r) {
        if ((super(e), G(this, 'categoriesById', void 0), G(this, 'hiddenChannelIds', void 0), (this.categoriesById = n), (this.hiddenChannelIds = null), !e.optInEnabled)) return;
        (this.isCollapsed = D.Z.isVoiceCategoryCollapsed(e.id)),
            (this.isMuted = !1),
            (this.categoriesById = n),
            (this.channels = o()(t)
                .map((e) => new ef(this, e, r))
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
        G(this, 'rows', void 0), (this.rows = e);
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
        G(this, 'guildActionRows', void 0), (this.guildActionRows = e.map(String)), t && this.guildActionRows.push(String(L.z.GUILD_DIRECTORY));
    }
}
class ec {
    get isMuted() {
        return this.category.guild.mutedChannelIds.has(this.id);
    }
    get isCollapsed() {
        return x.Z.isCollapsed(this.id);
    }
    get isFirstVoiceChannel() {
        return this.category.getFirstVoiceChannel() === this;
    }
    get lastMessageTimestamp() {
        return Math.max(P.ZP.lastMessageTimestamp(this.id), ...this.threadIds.map(P.ZP.lastMessageTimestamp));
    }
    updateChannel(e, t) {
        let n = !1;
        null != e && e !== this.record && ((this.record = e), (n = !0));
        let r = this.computeState(t);
        return (r.renderLevel === this.renderLevel && o().isEqual(r.threadIds, this.threadIds)) || ((this.renderLevel = r.renderLevel), (this.threadIds = r.threadIds), (this.threadCount = o().size(r.threadIds)), (n = !0)), 4 === this.renderLevel && this.updateSubtitle() && (n = !0), n;
    }
    updateSubtitle() {
        let e = this.computeSubtitle();
        return !o().isEqual(this.subtitle, e) && ((this.subtitle = e), !0);
    }
    computeSubtitle() {
        return eg(this.record, this.isCollapsed || this.category.isCollapsed, this.category.guild.optInEnabled);
    }
    constructor(e, t, n) {
        G(this, 'category', void 0), G(this, 'record', void 0), G(this, 'id', void 0), G(this, 'position', void 0), G(this, 'threadIds', void 0), G(this, 'threadCount', void 0), G(this, 'subtitle', void 0), G(this, 'renderLevel', void 0), (this.category = e), (this.record = t), (this.position = -1), (this.threadIds = []), (this.threadCount = 0), (this.subtitle = null), (this.renderLevel = 1), (this.id = t.id);
        let { renderLevel: r, threadIds: i } = this.computeState(n);
        (this.renderLevel = r), (this.threadCount = o().size(i)), (this.threadIds = i), 4 === r && (this.subtitle = this.computeSubtitle());
    }
}
class eu extends ec {
    computeState(e) {
        var t;
        let { selectedChannel: n, selectedVoiceChannelId: r, activeJoinedRelevantThreads: i, activeJoinedUnreadThreads: l } = e;
        if (!E.Z.can(U.Pl.VIEW_CHANNEL, this.record)) {
            if (this.id === r)
                return {
                    renderLevel: 4,
                    threadIds: []
                };
            else if (!u.Z.isChannelGatedAndVisible(this.record.guild_id, this.record.id))
                return {
                    renderLevel: 1,
                    threadIds: []
                };
        }
        let s = this.record.parent_id,
            a = this.category.guild;
        if (eb(a, this.record))
            return {
                renderLevel: 1,
                threadIds: []
            };
        let c = (null == n ? void 0 : n.id) === this.id || r === this.id,
            d = null != n && n.isThread() && n.parent_id === this.id,
            h = null != (t = c || d || (!this.category.isCollapsed && !this.isMuted) ? i[this.id] : l[this.id]) ? t : {},
            p = em(this.record, h, n, r, a.hideMutedChannels);
        return a.optInEnabled && a.hideResourceChannels && this.record.hasFlag(M.zZ.IS_GUILD_RESOURCE_CHANNEL)
            ? {
                  renderLevel: c ? 4 : 1,
                  threadIds: p
              }
            : !a.optInEnabled || a.optedInChannels.has(this.id) || (null != s && a.optedInChannels.has(s))
              ? c || d || !o().isEmpty(p) || P.ZP.getMentionCount(this.id) > 0
                  ? {
                        renderLevel: 4,
                        threadIds: p
                    }
                  : a.hideMutedChannels && a.mutedChannelIds.has(this.id)
                    ? {
                          renderLevel: 2,
                          threadIds: p
                      }
                    : this.category.isCollapsed && (a.mutedChannelIds.has(this.id) || (null != s && a.mutedChannelIds.has(s)) || this.record.isGuildVocal() || this.record.type === k.d4z.GUILD_STORE || ((0, v.vc)(this.record.type) && !P.ZP.hasUnread(this.record.id)))
                      ? {
                            renderLevel: 3,
                            threadIds: p
                        }
                      : {
                            renderLevel: 4,
                            threadIds: p
                        }
              : {
                    renderLevel: 2,
                    threadIds: p
                };
    }
}
class ed extends ec {
    computeState(e) {
        var t;
        let { selectedChannel: n, selectedVoiceChannelId: r, activeJoinedRelevantThreads: i } = e;
        return E.Z.can(U.Pl.VIEW_CHANNEL, this.record)
            ? {
                  renderLevel: 4,
                  threadIds: em(this.record, null != (t = i[this.id]) ? t : {}, n, r, !1)
              }
            : {
                  renderLevel: 1,
                  threadIds: []
              };
    }
}
class eh extends ec {
    computeState(e) {
        var t;
        let { selectedChannel: n, selectedVoiceChannelId: r, activeJoinedRelevantThreads: i } = e;
        return E.Z.can(U.Pl.VIEW_CHANNEL, this.record)
            ? {
                  renderLevel: ey(this, e) ? 4 : 3,
                  threadIds: em(this.record, null != (t = i[this.id]) ? t : {}, n, r, !1)
              }
            : {
                  renderLevel: 1,
                  threadIds: []
              };
    }
}
class ep extends eu {
    computeState(e) {
        let { renderLevel: t, threadIds: n } = super.computeState(e);
        if (t > 1) {
            let r = this.record.parent_id,
                i = this.category.guild;
            i.mutedChannelIds.has(this.id) || (null != r && i.mutedChannelIds.has(r)) ? (t = 2) : 4 === t ? (t = 3) : 2 === t && e_(this.category.guild, this.record, e) && (t = 3), 3 === t && ey(this, e) && (t = 4), (n = o().sortBy(n, (e) => -P.ZP.lastMessageTimestamp(e)));
        }
        return {
            renderLevel: t,
            threadIds: n
        };
    }
}
class ef extends eu {
    getRenderLevel(e) {
        let t = this.category.guild;
        return !E.Z.can(U.Pl.VIEW_CHANNEL, this.record) || 4 === e || 3 === e || eb(t, this.record) ? 1 : this.category.isCollapsed ? (o().some(N.Z.getVoiceStatesForChannel(this.record.id)) ? 4 : 3) : 4;
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
        case k.d4z.GUILD_VOICE: {
            let r = h.ZP.getActiveEventByChannel(e.id);
            if (null != r)
                return {
                    type: 'event',
                    name: r.name
                };
            let i = Z.ZP.getVoiceStatesForChannel(e);
            if (n && t && (0, R.a)(i)) return { type: 'go-live' };
            let l = c.Z.getChannelStatus(e);
            if (null != l && l.length > 0)
                return {
                    type: 'voice',
                    text: l
                };
            let o = s.ZP.getEmbeddedActivitiesForChannel(e.id)
                .map((e) => {
                    var t;
                    return null == (t = a.Z.getApplication(e.applicationId)) ? void 0 : t.name;
                })
                .filter(T.lm);
            if (o.length > 0)
                return {
                    type: 'embedded-activities',
                    name: o.join(', ')
                };
            return null;
        }
        case k.d4z.GUILD_STAGE_VOICE: {
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
function em(e, t, n, r, i) {
    let l = null != n && (n.id === e.id || r === e.id),
        s = null != n && n.isThread() && n.parent_id === e.id;
    if (v.uC.has(e.type)) {
        let e = o()
            .sortBy(Object.values(t), (e) => -e.joinTimestamp)
            .map((e) => e.channel.id);
        return l ? e : s ? (n.id in t || e.unshift(n.id), e) : i ? e.filter((e) => !O.Z.isMuted(e) || P.ZP.getMentionCount(e) > 0) : e;
    }
    return [];
}
function eb(e, t) {
    return e.favoriteChannelIds.has(t.id) && (e.optInEnabled || !1);
}
function ey(e, t) {
    let { selectedChannel: n, activeJoinedRelevantThreads: r } = t;
    if (P.ZP.getMentionCount(e.id) > 0) return !0;
    for (let t in r[e.id]) if (P.ZP.getMentionCount(t) > 0) return !0;
    if (null != n && (n.id === e.id || (n.isThread() && n.parent_id === e.id))) return !0;
    let i = y.Z.getNewChannelIds(e.category.guild.id);
    if (i.size > H);
    else if (i.has(e.id)) return !0;
    return !1;
}
function e_(e, t, n) {
    let { selectedChannel: r, activeJoinedRelevantThreads: i } = n;
    if (t.type === k.d4z.GUILD_DIRECTORY || !e.optInEnabled || t.isGuildVocal() || e.optedInChannels.has(t.id) || t.isThread() || (null != t.parent_id && e.optedInChannels.has(t.parent_id)) || (e.hideResourceChannels && t.hasFlag(M.zZ.IS_GUILD_RESOURCE_CHANNEL))) return !1;
    if ((null != r && (r.id === t.id || (r.isThread() && r.parent_id === t.id))) || P.ZP.getMentionCount(t.id) > 0) return !0;
    let l = y.Z.getNewChannelIds(e.id),
        o = Array.from(l).sort((e, t) => A.default.compare(t, e));
    if (l.has(t.id) && o.indexOf(t.id) < H) return !0;
    for (let e in i[t.id]) if (P.ZP.getMentionCount(e) > 0 || P.ZP.hasUnread(e) || P.ZP.hasRecentlyVisitedAndRead(e)) return !0;
    return !(e.mutedChannelIds.has(t.id) || (null != t.parent_id && e.mutedChannelIds.has(t.parent_id))) && !!P.ZP.hasRecentlyVisitedAndRead(t.id);
}
let eO = new Set(Object.values(L.z));
