n.d(t, { Z: () => w }), n(539854), n(388685);
var r = n(147913),
    i = n(43267),
    a = n(933557),
    o = n(592125),
    s = n(430824),
    l = n(496675),
    c = n(699516),
    u = n(944486),
    d = n(594174),
    f = n(768581),
    _ = n(823379),
    p = n(51144),
    h = n(495527),
    m = n(403011),
    g = n(981631);
function E(e, t, n) {
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
function b() {
    return m.Z.getCurrentConfig(
        { location: "NativeIntentsManager" },
        {
            autoTrackExposure: !0,
            disable: !h.Z.hasSearch(),
        },
    ).searchEnabled;
}
function y() {
    return m.Z.getCurrentConfig(
        { location: "NativeIntentsManager" },
        {
            autoTrackExposure: !0,
            disable: !h.Z.hasSearch(),
        },
    ).clearEnabled;
}
function O() {
    return m.Z.getCurrentConfig(
        { location: "NativeIntentsManager" },
        {
            autoTrackExposure: !0,
            disable: !h.Z.hasUserActivity(),
        },
    ).activityEnabled;
}
function v(e) {
    var t;
    return (null == e || null == (t = e.startsWith) ? void 0 : t.call(e, "/"))
        ? location.origin + e
        : null != e
          ? e
          : void 0;
}
function I(e, t) {
    var n;
    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        s = (0, a.F6)(e, d.default, c.Z, !0),
        l = (0, a.F6)(e, d.default, c.Z, !1),
        u = [],
        f = [s, l],
        _ = [];
    e.isGuildVocal() && f.push("!".concat(l));
    let p = o.Z.getChannel(e.parent_id);
    if (null != p) {
        let e = (0, a.F6)(p, d.default, c.Z, !0),
            t = (0, a.F6)(p, d.default, c.Z, !1);
        _.push(e), _.push(t), u.push(e);
    }
    null != t && (_.push(t.name), u.push(t.name));
    let h = s + (u.length > 0 ? " (".concat(u.join(", "), ")") : ""),
        m = g.Z5c.CHANNEL(null != (n = null == t ? void 0 : t.id) ? n : g.ME, e.id);
    return {
        id: m,
        relatedUniqueIdentifier: m,
        type: "url",
        title: h,
        displayName: h,
        thumbnailURL: v((0, i.x)(e, 128, !1)),
        rankingHint: e.type === g.d4z.DM ? 75 : 50,
        keywords: _,
        alternateNames: f,
        isUpdate: r,
    };
}
function T(e) {
    return null != e
        ? v(
              f.ZP.getGuildIconURL({
                  id: e.id,
                  icon: e.icon,
                  size: 128,
              }),
          )
        : void 0;
}
function S(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = T(e),
        r = g.Z5c.CHANNEL(e.id),
        i = [
            {
                id: r,
                relatedUniqueIdentifier: r,
                type: "url",
                title: e.name,
                displayName: e.name,
                alternateNames: ["*".concat(e.name)],
                rankingHint: 100,
            },
        ],
        a = o.Z.getMutableGuildChannelsForGuild(e.id);
    for (let n in a) {
        let r = a[n];
        l.Z.can(g.Plq.VIEW_CHANNEL, r) && i.push(I(r, e, t));
    }
    for (let n of o.Z.getAllThreadsForGuild(e.id)) l.Z.can(g.Plq.VIEW_CHANNEL, n) && i.push(I(n, e, t));
    return {
        id: e.id,
        items: i,
        defaultThumbnailURL: n,
        isUpdate: t,
    };
}
function A(e) {
    let t = [];
    if (("" !== e.name && t.push(e.name), null != e.nicks && t.push(...Object.values(e.nicks)), e.type === g.d4z.DM)) {
        let [n] = e.recipients.map(d.default.getUser).filter(_.lm);
        if (null != n) {
            let e = p.ZP.getGlobalName(n);
            null != e && t.push(e), t.push(n.username), t.push("@" + n.username);
            let r = c.Z.getNickname(n.id);
            null != r && t.push(r);
            let i = p.ZP.getName(n);
            null != i && t.push(i);
        }
    }
    return t;
}
function C(e) {
    if (!O()) return;
    let t = null != e ? o.Z.getChannel(e) : void 0;
    if (null == t) return void h.Z.resignActivity();
    let n = s.Z.getGuild(t.guild_id),
        r = (0, a.F6)(t, d.default, c.Z, !0),
        i = r + (null != n ? " (".concat(n.name, ")") : ""),
        l = [...new Set([r, ...A(t)])],
        u = g.Z5c.CHANNEL(t.guild_id, t.id),
        f = {
            webpageURL: "".concat(g.yXt.BASE_URL).concat(u),
            relatedUniqueIdentifier: u,
            eligibleForHandoff: !0,
            eligibleForSearch: !0,
            title: i,
            keywords: l,
            displayName: i,
            type: "com.discord.view-channel",
        };
    h.Z.setActivity(f);
}
function N() {
    if (!b()) return;
    let e = s.Z.getGuildsArray().map((e) => S(e)),
        t = [],
        n = o.Z.getMutablePrivateChannels();
    for (let e in n) {
        let r = n[e];
        t.push(I(r));
    }
    e.push({
        id: g.ME,
        items: t,
    }),
        h.Z.indexDomains(e);
}
function R(e) {
    let t = o.Z.getDMChannelFromUserId(e);
    null != t && P([t]);
}
function P(e) {
    if (!b()) return;
    let t = [],
        n = [],
        r = {};
    for (let a of e)
        if (l.Z.can(g.Plq.VIEW_CHANNEL, a)) {
            var i;
            let e = s.Z.getGuild(a.guild_id),
                n = null != (i = null == e ? void 0 : e.id) ? i : g.ME,
                o = I(a, e, !0),
                l = r[n];
            if (null != l) l.push(o);
            else {
                let i = T(e),
                    a = [o];
                t.push({
                    id: n,
                    items: a,
                    defaultThumbnailURL: i,
                }),
                    (r[n] = a);
            }
        } else n.push(a.id);
    t.length > 0 && h.Z.indexDomains(t), n.length > 0 && h.Z.deleteSearchItems(n);
}
class D extends r.Z {
    handleInit() {
        C(u.Z.getCurrentlySelectedChannelId()), y() && h.Z.clearSearchIndex(), b() && N();
    }
    handleLogout() {
        y() && h.Z.clearSearchIndex();
    }
    handleChannelSelect(e) {
        let { channelId: t } = e;
        C(t);
    }
    handleChannelCreate(e) {
        var t;
        let { channel: n } = e;
        if (!b() || !l.Z.can(g.Plq.VIEW_CHANNEL, n)) return;
        let r = s.Z.getGuild(n.guild_id);
        if (null == r && null != n.guild_id) return;
        let i = T(r);
        h.Z.indexDomains([
            {
                id: null != (t = null == r ? void 0 : r.id) ? t : g.ME,
                items: [I(n, r)],
                defaultThumbnailURL: i,
            },
        ]);
    }
    handleChannelDelete(e) {
        let { channel: t } = e;
        b() && h.Z.deleteSearchItems([t.id]);
    }
    handleChannelUpdates(e) {
        let { channels: t } = e;
        P(t);
    }
    handleGuildCreateOrUpdate(e) {
        let { guild: t, type: n } = e;
        if (b()) {
            let e = s.Z.getGuild(t.id);
            null != e ? h.Z.indexDomains([S(e, "GUILD_UPDATE" === n)]) : h.Z.deleteSearchDomains([t.id]);
        }
    }
    handleGuildDelete(e) {
        let { guild: t } = e;
        b() && h.Z.deleteSearchDomains([t.id]);
    }
    handleThreadUpdate(e) {
        let { channel: t } = e;
        P([t]);
    }
    handleUserUpdate(e) {
        let { user: t } = e;
        R(t.id);
    }
    handleRelationshipChange(e) {
        let { relationship: t } = e;
        R(t.id);
    }
    constructor(...e) {
        super(...e),
            E(this, "actions", {
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
                USER_UPDATE: this.handleUserUpdate,
            });
    }
}
let w = new D();
