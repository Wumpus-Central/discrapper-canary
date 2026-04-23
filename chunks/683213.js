"use strict";
n.d(t, { A: () => R }), n(321073);
var r = n(439372),
    i = n(571694),
    s = n(47167),
    a = n(734057),
    o = n(71393),
    l = n(576705),
    u = n(994500),
    c = n(309010),
    d = n(287809),
    _ = n(486020),
    f = n(403362),
    p = n(427262),
    h = n(473903),
    E = n(765239),
    m = n(652215);
function g() {
    return E.A.getCurrentConfig(
        { location: "NativeIntentsManager" },
        { autoTrackExposure: !0, disable: !h.A.hasSearch() },
    ).searchEnabled;
}
function A() {
    return E.A.getCurrentConfig(
        { location: "NativeIntentsManager" },
        { autoTrackExposure: !0, disable: !h.A.hasSearch() },
    ).clearEnabled;
}
function I(e) {
    return e?.startsWith?.("/") ? location.origin + e : (e ?? void 0);
}
function T(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = (0, s.m1)(e, d.default, u.A, !0),
        o = (0, s.m1)(e, d.default, u.A, !1),
        l = [],
        c = [r, o],
        _ = [];
    e.isGuildVocal() && c.push(`!${o}`);
    let f = a.A.getChannel(e.parent_id);
    if (null != f) {
        let e = (0, s.m1)(f, d.default, u.A, !0),
            t = (0, s.m1)(f, d.default, u.A, !1);
        _.push(e), _.push(t), l.push(e);
    }
    null != t && (_.push(t.name), l.push(t.name));
    let p = r + (l.length > 0 ? ` (${l.join(", ")})` : ""),
        h = m.BVt.CHANNEL(t?.id ?? m.ME, e.id);
    return {
        id: h,
        relatedUniqueIdentifier: h,
        type: "url",
        title: p,
        displayName: p,
        thumbnailURL: I((0, i.Y)(e, 128, !1)),
        rankingHint: e.type === m.rbe.DM ? 75 : 50,
        keywords: _,
        alternateNames: c,
        isUpdate: n,
    };
}
function S(e) {
    return null != e ? I(_.Ay.getGuildIconURL({ id: e.id, icon: e.icon, size: 128 })) : void 0;
}
function y(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = S(e),
        r = m.BVt.CHANNEL(e.id),
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
        s = a.A.getMutableGuildChannelsForGuild(e.id);
    for (let n in s) {
        let r = s[n];
        l.A.can(m.xBc.VIEW_CHANNEL, r) && i.push(T(r, e, t));
    }
    for (let n of a.A.getAllThreadsForGuild(e.id)) l.A.can(m.xBc.VIEW_CHANNEL, n) && i.push(T(n, e, t));
    return { id: e.id, items: i, defaultThumbnailURL: n, isUpdate: t };
}
function N(e) {
    if (
        !E.A.getCurrentConfig(
            { location: "NativeIntentsManager" },
            { autoTrackExposure: !0, disable: !h.A.hasUserActivity() },
        ).activityEnabled
    )
        return;
    let t = null != e ? a.A.getChannel(e) : void 0;
    if (null == t) return void h.A.resignActivity();
    let n = o.A.getGuild(t.guild_id),
        r = (0, s.m1)(t, d.default, u.A, !0),
        i = r + (null != n ? ` (${n.name})` : ""),
        l = [
            ...new Set([
                r,
                ...(function (e) {
                    let t = [];
                    if (
                        ("" !== e.name && t.push(e.name),
                        null != e.nicks && t.push(...Object.values(e.nicks)),
                        e.type === m.rbe.DM)
                    ) {
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
                })(t),
            ]),
        ],
        c = m.BVt.CHANNEL(t.guild_id, t.id),
        _ = {
            webpageURL: `${m.qF7.BASE_URL}${c}`,
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
function v(e) {
    let t = a.A.getDMChannelFromUserId(e);
    null != t && C([t]);
}
function C(e) {
    if (!g()) return;
    let t = [],
        n = [],
        r = {};
    for (let i of e)
        if (l.A.can(m.xBc.VIEW_CHANNEL, i)) {
            let e = o.A.getGuild(i.guild_id),
                n = e?.id ?? m.ME,
                s = T(i, e, !0),
                a = r[n];
            if (null != a) a.push(s);
            else {
                let i = S(e),
                    a = [s];
                t.push({ id: n, items: a, defaultThumbnailURL: i }), (r[n] = a);
            }
        } else n.push(i.id);
    t.length > 0 && h.A.indexDomains(t), n.length > 0 && h.A.deleteSearchItems(n);
}
class O extends r.A {
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
        N(c.A.getCurrentlySelectedChannelId()),
            A() && h.A.clearSearchIndex(),
            g() &&
                (function () {
                    if (!g()) return;
                    let e = o.A.getGuildsArray().map((e) => y(e)),
                        t = [],
                        n = a.A.getMutablePrivateChannels();
                    for (let e in n) {
                        let r = n[e];
                        t.push(T(r));
                    }
                    e.push({ id: m.ME, items: t }), h.A.indexDomains(e);
                })();
    }
    handleLogout() {
        A() && h.A.clearSearchIndex();
    }
    handleChannelSelect(e) {
        let { channelId: t } = e;
        N(t);
    }
    handleChannelCreate(e) {
        let { channel: t } = e;
        if (!g() || !l.A.can(m.xBc.VIEW_CHANNEL, t)) return;
        let n = o.A.getGuild(t.guild_id);
        if (null == n && null != t.guild_id) return;
        let r = S(n);
        h.A.indexDomains([{ id: n?.id ?? m.ME, items: [T(t, n)], defaultThumbnailURL: r }]);
    }
    handleChannelDelete(e) {
        let { channel: t } = e;
        g() && h.A.deleteSearchItems([t.id]);
    }
    handleChannelUpdates(e) {
        let { channels: t } = e;
        C(t);
    }
    handleGuildCreateOrUpdate(e) {
        let { guild: t, type: n } = e;
        if (g()) {
            let e = o.A.getGuild(t.id);
            null != e ? h.A.indexDomains([y(e, "GUILD_UPDATE" === n)]) : h.A.deleteSearchDomains([t.id]);
        }
    }
    handleGuildDelete(e) {
        let { guild: t } = e;
        g() && h.A.deleteSearchDomains([t.id]);
    }
    handleThreadUpdate(e) {
        let { channel: t } = e;
        C([t]);
    }
    handleUserUpdate(e) {
        let { user: t } = e;
        v(t.id);
    }
    handleRelationshipChange(e) {
        let { relationship: t } = e;
        v(t.id);
    }
}
let R = new O();
