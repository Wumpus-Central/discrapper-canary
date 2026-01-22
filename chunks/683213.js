n.d(t, {
    A: () => D,
}),
    n(321073),
    n(896048);
var r = n(439372),
    i = n(571694),
    a = n(47167),
    s = n(734057),
    o = n(71393),
    l = n(576705),
    c = n(994500),
    u = n(309010),
    d = n(287809),
    f = n(486020),
    p = n(403362),
    _ = n(427262),
    h = n(473903),
    m = n(765239),
    g = n(652215);

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
    return m.A.getCurrentConfig(
        {
            location: "NativeIntentsManager",
        },
        {
            autoTrackExposure: !0,
            disable: !h.A.hasSearch(),
        },
    ).searchEnabled;
}

function y() {
    return m.A.getCurrentConfig(
        {
            location: "NativeIntentsManager",
        },
        {
            autoTrackExposure: !0,
            disable: !h.A.hasSearch(),
        },
    ).clearEnabled;
}

function O() {
    return m.A.getCurrentConfig(
        {
            location: "NativeIntentsManager",
        },
        {
            autoTrackExposure: !0,
            disable: !h.A.hasUserActivity(),
        },
    ).activityEnabled;
}

function A(e) {
    var t;
    return (null == e || null == (t = e.startsWith) ? void 0 : t.call(e, "/"))
        ? location.origin + e
        : null != e
          ? e
          : void 0;
}

function v(e, t) {
    var n;
    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        o = (0, a.m1)(e, d.default, c.A, !0),
        l = (0, a.m1)(e, d.default, c.A, !1),
        u = [],
        f = [o, l],
        p = [];
    e.isGuildVocal() && f.push("!".concat(l));
    let _ = s.A.getChannel(e.parent_id);
    if (null != _) {
        let e = (0, a.m1)(_, d.default, c.A, !0),
            t = (0, a.m1)(_, d.default, c.A, !1);
        p.push(e), p.push(t), u.push(e);
    }
    null != t && (p.push(t.name), u.push(t.name));
    let h = o + (u.length > 0 ? " (".concat(u.join(", "), ")") : ""),
        m = g.BVt.CHANNEL(null != (n = null == t ? void 0 : t.id) ? n : g.ME, e.id);
    return {
        id: m,
        relatedUniqueIdentifier: m,
        type: "url",
        title: h,
        displayName: h,
        thumbnailURL: A((0, i.Y)(e, 128, !1)),
        rankingHint: e.type === g.rbe.DM ? 75 : 50,
        keywords: p,
        alternateNames: f,
        isUpdate: r,
    };
}

function S(e) {
    return null != e
        ? A(
              f.Ay.getGuildIconURL({
                  id: e.id,
                  icon: e.icon,
                  size: 128,
              }),
          )
        : void 0;
}

function I(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = S(e),
        r = g.BVt.CHANNEL(e.id),
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
        a = s.A.getMutableGuildChannelsForGuild(e.id);
    for (let n in a) {
        let r = a[n];
        l.A.can(g.xBc.VIEW_CHANNEL, r) && i.push(v(r, e, t));
    }
    for (let n of s.A.getAllThreadsForGuild(e.id)) l.A.can(g.xBc.VIEW_CHANNEL, n) && i.push(v(n, e, t));
    return {
        id: e.id,
        items: i,
        defaultThumbnailURL: n,
        isUpdate: t,
    };
}

function T(e) {
    let t = [];
    if (("" !== e.name && t.push(e.name), null != e.nicks && t.push(...Object.values(e.nicks)), e.type === g.rbe.DM)) {
        let [n] = e.recipients.map(d.default.getUser).filter(p.Vq);
        if (null != n) {
            let e = _.Ay.getGlobalName(n);
            null != e && t.push(e), t.push(n.username), t.push("@" + n.username);
            let r = c.A.getNickname(n.id);
            null != r && t.push(r);
            let i = _.Ay.getName(n);
            null != i && t.push(i);
        }
    }
    return t;
}

function C(e) {
    if (!O()) return;
    let t = null != e ? s.A.getChannel(e) : void 0;
    if (null == t) return void h.A.resignActivity();
    let n = o.A.getGuild(t.guild_id),
        r = (0, a.m1)(t, d.default, c.A, !0),
        i = r + (null != n ? " (".concat(n.name, ")") : ""),
        l = [...new Set([r, ...T(t)])],
        u = g.BVt.CHANNEL(t.guild_id, t.id),
        f = {
            webpageURL: "".concat(g.qF7.BASE_URL).concat(u),
            relatedUniqueIdentifier: u,
            eligibleForHandoff: !0,
            eligibleForSearch: !0,
            title: i,
            keywords: l,
            displayName: i,
            type: "com.discord.view-channel",
        };
    h.A.setActivity(f);
}

function N() {
    if (!b()) return;
    let e = o.A.getGuildsArray().map((e) => I(e)),
        t = [],
        n = s.A.getMutablePrivateChannels();
    for (let e in n) {
        let r = n[e];
        t.push(v(r));
    }
    e.push({
        id: g.ME,
        items: t,
    }),
        h.A.indexDomains(e);
}

function R(e) {
    let t = s.A.getDMChannelFromUserId(e);
    null != t && w([t]);
}

function w(e) {
    if (!b()) return;
    let t = [],
        n = [],
        r = {};
    for (let a of e)
        if (l.A.can(g.xBc.VIEW_CHANNEL, a)) {
            var i;
            let e = o.A.getGuild(a.guild_id),
                n = null != (i = null == e ? void 0 : e.id) ? i : g.ME,
                s = v(a, e, !0),
                l = r[n];
            if (null != l) l.push(s);
            else {
                let i = S(e),
                    a = [s];
                t.push({
                    id: n,
                    items: a,
                    defaultThumbnailURL: i,
                }),
                    (r[n] = a);
            }
        } else n.push(a.id);
    t.length > 0 && h.A.indexDomains(t), n.length > 0 && h.A.deleteSearchItems(n);
}
class P extends r.A {
    handleInit() {
        C(u.A.getCurrentlySelectedChannelId()), y() && h.A.clearSearchIndex(), b() && N();
    }
    handleLogout() {
        y() && h.A.clearSearchIndex();
    }
    handleChannelSelect(e) {
        let { channelId: t } = e;
        C(t);
    }
    handleChannelCreate(e) {
        var t;
        let { channel: n } = e;
        if (!b() || !l.A.can(g.xBc.VIEW_CHANNEL, n)) return;
        let r = o.A.getGuild(n.guild_id);
        if (null == r && null != n.guild_id) return;
        let i = S(r);
        h.A.indexDomains([
            {
                id: null != (t = null == r ? void 0 : r.id) ? t : g.ME,
                items: [v(n, r)],
                defaultThumbnailURL: i,
            },
        ]);
    }
    handleChannelDelete(e) {
        let { channel: t } = e;
        b() && h.A.deleteSearchItems([t.id]);
    }
    handleChannelUpdates(e) {
        let { channels: t } = e;
        w(t);
    }
    handleGuildCreateOrUpdate(e) {
        let { guild: t, type: n } = e;
        if (b()) {
            let e = o.A.getGuild(t.id);
            null != e ? h.A.indexDomains([I(e, "GUILD_UPDATE" === n)]) : h.A.deleteSearchDomains([t.id]);
        }
    }
    handleGuildDelete(e) {
        let { guild: t } = e;
        b() && h.A.deleteSearchDomains([t.id]);
    }
    handleThreadUpdate(e) {
        let { channel: t } = e;
        w([t]);
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
let D = new P();
