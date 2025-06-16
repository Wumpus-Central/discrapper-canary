n.d(t, { Z: () => R }), n(539854), n(388685);
var r = n(147913),
    i = n(43267),
    a = n(933557),
    o = n(592125),
    s = n(430824),
    l = n(496675),
    c = n(699516),
    u = n(944486),
    d = n(594174),
    _ = n(768581),
    f = n(495527),
    p = n(403011),
    h = n(981631);
function m(e, t, n) {
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
function g() {
    return p.Z.getCurrentConfig(
        { location: 'NativeIntentsManager' },
        {
            autoTrackExposure: !0,
            disable: !f.Z.hasSearch()
        }
    ).searchEnabled;
}
function E() {
    return p.Z.getCurrentConfig(
        { location: 'NativeIntentsManager' },
        {
            autoTrackExposure: !0,
            disable: !f.Z.hasSearch()
        }
    ).clearEnabled;
}
function b() {
    return p.Z.getCurrentConfig(
        { location: 'NativeIntentsManager' },
        {
            autoTrackExposure: !0,
            disable: !f.Z.hasUserActivity()
        }
    ).activityEnabled;
}
function y(e) {
    var t;
    return (null == e || null == (t = e.startsWith) ? void 0 : t.call(e, '/')) ? location.origin + e : null != e ? e : void 0;
}
function O(e, t) {
    var n;
    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        s = (0, a.F6)(e, d.default, c.Z, !0),
        l = (0, a.F6)(e, d.default, c.Z, !1),
        u = [],
        _ = [s, l],
        f = [];
    e.isGuildVocal() && _.push('!'.concat(l));
    let p = o.Z.getChannel(e.parent_id);
    if (null != p) {
        let e = (0, a.F6)(p, d.default, c.Z, !0),
            t = (0, a.F6)(p, d.default, c.Z, !1);
        f.push(e), f.push(t), u.push(e);
    }
    null != t && (f.push(t.name), u.push(t.name));
    let m = s + (u.length > 0 ? ' ('.concat(u.join(', '), ')') : ''),
        g = h.Z5c.CHANNEL(null != (n = null == t ? void 0 : t.id) ? n : h.ME, e.id);
    return {
        id: g,
        relatedUniqueIdentifier: g,
        type: 'url',
        title: m,
        displayName: m,
        thumbnailURL: y((0, i.x)(e, 128, !1)),
        rankingHint: e.type === h.d4z.DM ? 75 : 50,
        keywords: f,
        alternateNames: _,
        isUpdate: r
    };
}
function v(e) {
    return null != e
        ? y(
              _.ZP.getGuildIconURL({
                  id: e.id,
                  icon: e.icon,
                  size: 128
              })
          )
        : void 0;
}
function I(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = v(e),
        r = h.Z5c.CHANNEL(e.id),
        i = [
            {
                id: r,
                relatedUniqueIdentifier: r,
                type: 'url',
                title: e.name,
                displayName: e.name,
                alternateNames: ['*'.concat(e.name)],
                rankingHint: 100
            }
        ],
        a = o.Z.getMutableGuildChannelsForGuild(e.id);
    for (let n in a) {
        let r = a[n];
        l.Z.can(h.Plq.VIEW_CHANNEL, r) && i.push(O(r, e, t));
    }
    for (let n of o.Z.getAllThreadsForGuild(e.id)) l.Z.can(h.Plq.VIEW_CHANNEL, n) && i.push(O(n, e, t));
    return {
        id: e.id,
        items: i,
        defaultThumbnailURL: n,
        isUpdate: t
    };
}
function T(e) {
    if (!b()) return;
    let t = null != e ? o.Z.getChannel(e) : void 0;
    if (null == t) return void f.Z.resignActivity();
    let n = s.Z.getGuild(t.guild_id),
        r = (0, a.F6)(t, d.default, c.Z, !0) + (null != n ? ' ('.concat(n.name, ')') : ''),
        i = h.Z5c.CHANNEL(t.guild_id, t.id),
        l = {
            webpageURL: ''.concat(h.yXt.BASE_URL).concat(i),
            relatedUniqueIdentifier: i,
            eligibleForHandoff: !0,
            eligibleForSearch: !0,
            title: r,
            displayName: r,
            type: 'com.discord.view-channel'
        };
    f.Z.setActivity(l);
}
function S() {
    if (!g()) return;
    let e = [],
        t = s.Z.getGuilds();
    for (let n in t) e.push(I(t[n]));
    let n = [],
        r = o.Z.getMutablePrivateChannels();
    for (let e in r) {
        let t = r[e];
        n.push(O(t));
    }
    e.push({
        id: h.ME,
        items: n
    }),
        f.Z.indexDomains(e);
}
function A(e) {
    let t = o.Z.getDMChannelFromUserId(e);
    null != t && N([t]);
}
function N(e) {
    if (!g()) return;
    let t = [],
        n = [],
        r = {};
    for (let a of e)
        if (l.Z.can(h.Plq.VIEW_CHANNEL, a)) {
            var i;
            let e = s.Z.getGuild(a.guild_id),
                n = null != (i = null == e ? void 0 : e.id) ? i : h.ME,
                o = O(a, e, !0),
                l = r[n];
            if (null != l) l.push(o);
            else {
                let i = v(e),
                    a = [o];
                t.push({
                    id: n,
                    items: a,
                    defaultThumbnailURL: i
                }),
                    (r[n] = a);
            }
        } else n.push(a.id);
    t.length > 0 && f.Z.indexDomains(t), n.length > 0 && f.Z.deleteSearchItems(n);
}
class C extends r.Z {
    handleInit() {
        T(u.Z.getCurrentlySelectedChannelId()), E() && f.Z.clearSearchIndex(), g() && S();
    }
    handleLogout() {
        E() && f.Z.clearSearchIndex();
    }
    handleChannelSelect(e) {
        let { channelId: t } = e;
        T(t);
    }
    handleChannelCreate(e) {
        var t;
        let { channel: n } = e;
        if (!g() || !l.Z.can(h.Plq.VIEW_CHANNEL, n)) return;
        let r = s.Z.getGuild(n.guild_id);
        if (null == r && null != n.guild_id) return;
        let i = v(r);
        f.Z.indexDomains([
            {
                id: null != (t = null == r ? void 0 : r.id) ? t : h.ME,
                items: [O(n, r)],
                defaultThumbnailURL: i
            }
        ]);
    }
    handleChannelDelete(e) {
        let { channel: t } = e;
        g() && f.Z.deleteSearchItems([t.id]);
    }
    handleChannelUpdates(e) {
        let { channels: t } = e;
        N(t);
    }
    handleGuildCreateOrUpdate(e) {
        let { guild: t, type: n } = e;
        if (g()) {
            let e = s.Z.getGuild(t.id);
            null != e ? f.Z.indexDomains([I(e, 'GUILD_UPDATE' === n)]) : f.Z.deleteSearchDomains([t.id]);
        }
    }
    handleGuildDelete(e) {
        let { guild: t } = e;
        g() && f.Z.deleteSearchDomains([t.id]);
    }
    handleThreadUpdate(e) {
        let { channel: t } = e;
        N([t]);
    }
    handleUserUpdate(e) {
        let { user: t } = e;
        A(t.id);
    }
    handleRelationshipChange(e) {
        let { relationship: t } = e;
        A(t.id);
    }
    constructor(...e) {
        super(...e),
            m(this, 'actions', {
                POST_CONNECTION_OPEN: this.handleInit,
                LOGOUT: this.handleLogout,
                CHANNEL_SELECT: this.handleChannelSelect,
                CHANNEL_CREATE: this.handleChannelCreate,
                CHANNEL_DELETE: this.handleChannelDelete,
                CHANNEL_UPDATES: this.handleChannelUpdates,
                GUILD_CREATE: this.handleGuildCreateOrUpdate,
                GUILD_UPDATE: this.handleGuildCreateOrUpdate,
                GUILD_DELETE: this.handleGuildDelete,
                RELATIONSHIP_ADD: this.handleRelationshipChange,
                RELATIONSHIP_REMOVE: this.handleRelationshipChange,
                RELATIONSHIP_UPDATE: this.handleRelationshipChange,
                THREAD_CREATE: this.handleChannelCreate,
                THREAD_DELETE: this.handleChannelDelete,
                THREAD_UPDATE: this.handleThreadUpdate,
                USER_UPDATE: this.handleUserUpdate
            });
    }
}
let R = new C();
