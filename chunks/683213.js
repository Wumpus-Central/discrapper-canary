"use strict";
n.d(t, { A: () => L }), n(321073);
var r = n(439372),
    i = n(571694),
    a = n(47167),
    s = n(734057),
    o = n(71393),
    l = n(576705),
    u = n(994500),
    c = n(309010),
    d = n(287809),
    _ = n(486020),
    f = n(403362),
    p = n(427262),
    h = n(473903),
    m = n(765239),
    g = n(652215);
function E() {
    return m.A.getCurrentConfig(
        { location: "NativeIntentsManager" },
        { autoTrackExposure: !0, disable: !h.A.hasSearch() },
    ).searchEnabled;
}
function A() {
    return m.A.getCurrentConfig(
        { location: "NativeIntentsManager" },
        { autoTrackExposure: !0, disable: !h.A.hasSearch() },
    ).clearEnabled;
}
function I() {
    return m.A.getCurrentConfig(
        { location: "NativeIntentsManager" },
        { autoTrackExposure: !0, disable: !h.A.hasUserActivity() },
    ).activityEnabled;
}
function T(e) {
    return e?.startsWith?.("/") ? location.origin + e : (e ?? void 0);
}
function y(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = (0, a.m1)(e, d.default, u.A, !0),
        o = (0, a.m1)(e, d.default, u.A, !1),
        l = [],
        c = [r, o],
        _ = [];
    e.isGuildVocal() && c.push(`!${o}`);
    let f = s.A.getChannel(e.parent_id);
    if (null != f) {
        let e = (0, a.m1)(f, d.default, u.A, !0),
            t = (0, a.m1)(f, d.default, u.A, !1);
        _.push(e), _.push(t), l.push(e);
    }
    null != t && (_.push(t.name), l.push(t.name));
    let p = r + (l.length > 0 ? ` (${l.join(", ")})` : ""),
        h = g.BVt.CHANNEL(t?.id ?? g.ME, e.id);
    return {
        id: h,
        relatedUniqueIdentifier: h,
        type: "url",
        title: p,
        displayName: p,
        thumbnailURL: T((0, i.Y)(e, 128, !1)),
        rankingHint: e.type === g.rbe.DM ? 75 : 50,
        keywords: _,
        alternateNames: c,
        isUpdate: n,
    };
}
function S(e) {
    return null != e ? T(_.Ay.getGuildIconURL({ id: e.id, icon: e.icon, size: 128 })) : void 0;
}
function v(e) {
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
                alternateNames: [`*${e.name}`],
                rankingHint: 100,
            },
        ],
        a = s.A.getMutableGuildChannelsForGuild(e.id);
    for (let n in a) {
        let r = a[n];
        l.A.can(g.xBc.VIEW_CHANNEL, r) && i.push(y(r, e, t));
    }
    for (let n of s.A.getAllThreadsForGuild(e.id)) l.A.can(g.xBc.VIEW_CHANNEL, n) && i.push(y(n, e, t));
    return { id: e.id, items: i, defaultThumbnailURL: n, isUpdate: t };
}
function C(e) {
    let t = [];
    if (("" !== e.name && t.push(e.name), null != e.nicks && t.push(...Object.values(e.nicks)), e.type === g.rbe.DM)) {
        let [n] = e.recipients.map(d.default.getUser).filter(f.Vq);
        if (null != n) {
            let e = p.Ay.getGlobalName(n);
            null != e && t.push(e), t.push(n.username), t.push("@" + n.username);
            let r = u.A.getNickname(n.id);
            null != r && t.push(r);
            let i = p.Ay.getName(n);
            null != i && t.push(i);
        }
    }
    return t;
}
function b(e) {
    if (!I()) return;
    let t = null != e ? s.A.getChannel(e) : void 0;
    if (null == t) return void h.A.resignActivity();
    let n = o.A.getGuild(t.guild_id),
        r = (0, a.m1)(t, d.default, u.A, !0),
        i = r + (null != n ? ` (${n.name})` : ""),
        l = [...new Set([r, ...C(t)])],
        c = g.BVt.CHANNEL(t.guild_id, t.id),
        _ = {
            webpageURL: `${g.qF7.BASE_URL}${c}`,
            relatedUniqueIdentifier: c,
            eligibleForHandoff: !0,
            eligibleForSearch: !0,
            title: i,
            keywords: l,
            displayName: i,
            type: "com.discord.view-channel",
        };
    h.A.setActivity(_);
}
function N() {
    if (!E()) return;
    let e = o.A.getGuildsArray().map((e) => v(e)),
        t = [],
        n = s.A.getMutablePrivateChannels();
    for (let e in n) {
        let r = n[e];
        t.push(y(r));
    }
    e.push({ id: g.ME, items: t }), h.A.indexDomains(e);
}
function R(e) {
    let t = s.A.getDMChannelFromUserId(e);
    null != t && O([t]);
}
function O(e) {
    if (!E()) return;
    let t = [],
        n = [],
        r = {};
    for (let i of e)
        if (l.A.can(g.xBc.VIEW_CHANNEL, i)) {
            let e = o.A.getGuild(i.guild_id),
                n = e?.id ?? g.ME,
                a = y(i, e, !0),
                s = r[n];
            if (null != s) s.push(a);
            else {
                let i = S(e),
                    s = [a];
                t.push({ id: n, items: s, defaultThumbnailURL: i }), (r[n] = s);
            }
        } else n.push(i.id);
    t.length > 0 && h.A.indexDomains(t), n.length > 0 && h.A.deleteSearchItems(n);
}
class D extends r.A {
    actions = {
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
    };
    handleInit() {
        b(c.A.getCurrentlySelectedChannelId()), A() && h.A.clearSearchIndex(), E() && N();
    }
    handleLogout() {
        A() && h.A.clearSearchIndex();
    }
    handleChannelSelect(e) {
        let { channelId: t } = e;
        b(t);
    }
    handleChannelCreate(e) {
        let { channel: t } = e;
        if (!E() || !l.A.can(g.xBc.VIEW_CHANNEL, t)) return;
        let n = o.A.getGuild(t.guild_id);
        if (null == n && null != t.guild_id) return;
        let r = S(n);
        h.A.indexDomains([{ id: n?.id ?? g.ME, items: [y(t, n)], defaultThumbnailURL: r }]);
    }
    handleChannelDelete(e) {
        let { channel: t } = e;
        E() && h.A.deleteSearchItems([t.id]);
    }
    handleChannelUpdates(e) {
        let { channels: t } = e;
        O(t);
    }
    handleGuildCreateOrUpdate(e) {
        let { guild: t, type: n } = e;
        if (E()) {
            let e = o.A.getGuild(t.id);
            null != e ? h.A.indexDomains([v(e, "GUILD_UPDATE" === n)]) : h.A.deleteSearchDomains([t.id]);
        }
    }
    handleGuildDelete(e) {
        let { guild: t } = e;
        E() && h.A.deleteSearchDomains([t.id]);
    }
    handleThreadUpdate(e) {
        let { channel: t } = e;
        O([t]);
    }
    handleUserUpdate(e) {
        let { user: t } = e;
        R(t.id);
    }
    handleRelationshipChange(e) {
        let { relationship: t } = e;
        R(t.id);
    }
}
let L = new D();
