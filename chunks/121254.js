n.d(t, {
    H3: () => P,
    TI: () => B,
    XD: () => D,
    fq: () => M,
    un: () => x,
}),
    n(896048),
    n(321073),
    n(65821);
var r = n(284009),
    i = n.n(r),
    a = n(735438),
    s = n.n(a),
    o = n(723176),
    l = n(766034),
    c = n(324827),
    u = n(531743),
    d = n(989950),
    f = n(937724),
    p = n(626584),
    _ = n(608960),
    h = n(679382),
    m = n(95701),
    g = n(317525),
    E = n(71393),
    b = n(860689),
    y = n(7864);
function O(e, t, n) {
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
function A(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                O(e, t, n[t]);
            });
    }
    return e;
}
function v(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : v(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function I(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = T(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function T(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let C = new p.A("ReadyPayloadUtils"),
    N = {},
    R = null,
    w = {};
function P(e, t) {
    var n;
    let [r, ...i] = [e, t],
        { guilds: a, merged_members: s, merged_presences: o } = r,
        l = I(r, ["guilds", "merged_members", "merged_presences"]),
        [c] = i,
        u = k(w, null == o ? void 0 : o.friends),
        d =
            null !=
            (n =
                null == a
                    ? void 0
                    : a.map((e, t) => {
                          let n = k(w, null == o ? void 0 : o.guilds[t]),
                              r = k(w, null == s ? void 0 : s[t]);
                          return S(A({}, e), {
                              unavailable: void 0 === e.voice_states,
                              presences: n,
                              members: r,
                          });
                      }))
                ? n
                : [],
        f = L(c, a, (e) => ({
            id: e.id,
            members: e.members,
            presences: e.presences,
            activity_instances: e.activity_instances,
            voice_states: e.voice_states,
            unavailable: !1,
        }));
    return (
        null != f && d.push(f),
        (w = {}),
        S(A({}, l), {
            presences: u,
            guilds: d,
        })
    );
}
function D() {
    let e = o.A.database();
    return Promise.all([
        (0, f.O)() ? l.A.getCommittedVersions() : Promise.resolve({}),
        (0, f.O)() ? u.A.getGuildIds() : Promise.resolve(new Set()),
        null != e ? c.A.okAsync(e) : Promise.resolve(!1),
    ]).then((e) => {
        let [t, n, r] = e;
        return {
            guildVersions: t,
            guildChannels: n,
            databaseOk: r,
        };
    });
}
function x(e, t, n) {
    var r;
    let [a, ...o] = [e, t, n],
        { users: l, relationships: c, private_channels: u, merged_members: d, guilds: f } = a,
        p = I(a, ["users", "relationships", "private_channels", "merged_members", "guilds"]),
        [_, ...h] = o,
        [m] = h;
    G(m);
    let g = k((w = s().keyBy(l, (e) => e.id)), c);
    null == u ||
        u.forEach((e) => {
            let t = e.recipient_ids;
            null != t &&
                (e.recipients = t.map((e) => (i()(null != w[e], "Missing user in compressed ready payload"), w[e]))),
                delete e.recipient_ids;
        });
    let E =
            null !=
            (r =
                null == f
                    ? void 0
                    : f.map((e, t) =>
                          !0 === e.unavailable ? e : ((e.members = k(w, null == d ? void 0 : d[t])), F(e)),
                      ))
                ? r
                : [],
        b = L(_, f, (e) => F(e));
    return (
        null != b && E.push(b),
        S(A({}, p), {
            users: l,
            presences: [],
            relationships: g,
            guilds: E,
            private_channels: null != u ? u : [],
        })
    );
}
function L(e, t, n) {
    return null == R || R.identifyTime !== e || (null != t && t.some((e) => e.id === R.guild.id)) ? null : n(R.guild);
}
function j(e) {
    let t = _.A.getGuildEmojis(e);
    return null != t ? Object.values(t) : null;
}
function M(e, t) {
    var n;
    let r = E.A.getGuild(e.id),
        i = B(
            e,
            null == r
                ? void 0
                : {
                      properties: b.yN(r),
                      roles: g.A.getRolesSnapshot(r.id),
                      emojis: j(r.id),
                      stickers: null != (n = h.A.getRawStickersByGuild().get(r.id)) ? n : null,
                  },
        );
    return (
        (R = {
            guild: e,
            identifyTime: t,
        }),
        i
    );
}
function k(e, t) {
    let n = [];
    return (
        null == t ||
            t.forEach((t) => {
                if (null == t) return;
                let r = t.user_id;
                null != r &&
                    (i()(null != e[r], "Missing user[".concat(r, "] in compressed ready payload")), (t.user = e[r])),
                    delete t.user_id,
                    n.push(t);
            }),
        n
    );
}
function U(e) {
    let t = N[e];
    return delete N[e], t;
}
function G(e) {
    null != o.A.database() &&
        !1 === e.databaseOk &&
        d.A.replaceDisableAllDatabases("ReadyPayloadUtils: database was not ok"),
        (N = {});
    let t = E.A.getGuildsArray(),
        n = h.A.getRawStickersByGuild();
    for (let i of t) {
        var r;
        i.id in e.guildVersions &&
            e.guildChannels.has(i.id) &&
            (N[i.id] = {
                properties: b.yN(i),
                roles: g.A.getRolesSnapshot(i.id),
                emojis: j(i.id),
                stickers: null != (r = n.get(i.id)) ? r : null,
            });
    }
}
function V(e, t, n) {
    null != t || (t = []), null != n || (n = []);
    let r = new Set(n);
    for (let { id: e } of t) r.add(e);
    let i = null;
    return (
        null != e && (i = e.filter((e) => !r.has(e.id))).push(...t),
        {
            op: "update",
            writes: t,
            deletes: n,
            items: i,
        }
    );
}
function F(e) {
    var t, n, r, i, a, s, o, l;
    let c = U(e.id);
    if ("partial" !== e.data_mode)
        return {
            id: e.id,
            dataMode: e.data_mode,
            emojis: {
                op: "full_sync",
                items: e.emojis,
            },
            guild_scheduled_events: e.guild_scheduled_events,
            joined_at: e.joined_at,
            lastMessages: e.last_messages,
            member_count: e.member_count,
            members: e.members,
            premium_subscription_count: e.premium_subscription_count,
            properties: e.properties,
            roles: e.roles,
            stage_instances: e.stage_instances,
            stickers: {
                op: "full_sync",
                items: e.stickers,
            },
            threads: null != (o = null == (l = e.threads) ? void 0 : l.map((t) => (0, m.UE)(t, e.id))) ? o : [],
            threadMessages: H(e.threads),
            channels: {
                op: "full_sync",
                items: e.channels.map((t) => ((t.guild_id = e.id), (0, m.UE)(t, e.id))),
            },
            version: e.version,
            hasThreadsSubscription: e.has_threads_subscription,
        };
    if (null == c)
        throw (
            (C.log("no cache entry for partial guild (guild: ".concat(e.id, ", type: ready)")),
            Error("Guild data was missing from store, but hash was still available."))
        );
    return {
        id: e.id,
        dataMode: e.data_mode,
        channels: {
            op: "update",
            writes:
                null != (t = null == (a = e.partial_updates.channels) ? void 0 : a.map((t) => (0, m.UE)(t, e.id)))
                    ? t
                    : [],
            deletes: null != (n = e.partial_updates.deleted_channel_ids) ? n : [],
        },
        channelTimestampUpdates: e.channel_updates,
        emojis: V(c.emojis, e.partial_updates.emojis, e.partial_updates.deleted_emoji_ids),
        guild_scheduled_events: e.guild_scheduled_events,
        joined_at: e.joined_at,
        lastMessages: e.last_messages,
        member_count: e.member_count,
        members: e.members,
        premium_subscription_count: e.premium_subscription_count,
        properties: null != (r = e.properties) ? r : null,
        roles: (0, y.ly)(e.id, c.roles, e.partial_updates.roles, e.partial_updates.deleted_role_ids),
        stage_instances: e.stage_instances,
        stickers: V(c.stickers, e.partial_updates.stickers, e.partial_updates.deleted_sticker_ids),
        unableToSyncDeletes: e.unable_to_sync_deletes,
        threads: null != (i = null == (s = e.threads) ? void 0 : s.map((t) => (0, m.UE)(t, e.id))) ? i : [],
        threadMessages: H(e.threads),
        version: e.version,
        hasThreadsSubscription: e.has_threads_subscription,
    };
}
function B(e, t) {
    var n, r, i, a, s, o, l, c;
    if ((null == t && (t = U(e.id)), "partial" !== e.data_mode))
        return {
            id: e.id,
            guild_scheduled_events: e.guild_scheduled_events,
            joined_at: e.joined_at,
            lastMessages: e.last_messages,
            member_count: e.member_count,
            members: e.members,
            premium_subscription_count: e.premium_subscription_count,
            properties: e.properties,
            roles: e.roles,
            stage_instances: e.stage_instances,
            threads: null != (l = null == (c = e.threads) ? void 0 : c.map((t) => (0, m.UE)(t, e.id))) ? l : [],
            threadMessages: H(e.threads),
            presences: e.presences,
            activity_instances: e.activity_instances,
            voice_states: e.voice_states,
            version: e.version,
            hasThreadsSubscription: e.has_threads_subscription,
            emojis: {
                op: "full_sync",
                items: e.emojis,
            },
            stickers: {
                op: "full_sync",
                items: e.stickers,
            },
            channels: {
                op: "full_sync",
                items: e.channels.map((t) => ((t.guild_id = e.id), (0, m.UE)(t, e.id))),
            },
        };
    if (null == t)
        throw (
            (C.log("no cache entry for partial guild (guild: ".concat(e.id, ", type: post_ready)")),
            Error("Guild data was missing from store, but hash was still available."))
        );
    return {
        id: e.id,
        channels: {
            op: "update",
            writes:
                null != (n = null == (s = e.partial_updates.channels) ? void 0 : s.map((t) => (0, m.UE)(t, e.id)))
                    ? n
                    : [],
            deletes: null != (r = e.partial_updates.deleted_channel_ids) ? r : [],
        },
        channelTimestampUpdates: e.channel_updates,
        activity_instances: e.activity_instances,
        emojis: V(t.emojis, e.partial_updates.emojis, e.partial_updates.deleted_emoji_ids),
        guild_scheduled_events: e.guild_scheduled_events,
        joined_at: e.joined_at,
        lastMessages: e.last_messages,
        member_count: e.member_count,
        members: e.members,
        premium_subscription_count: e.premium_subscription_count,
        presences: e.presences,
        properties: null != (i = e.properties) ? i : t.properties,
        roles: (0, y.ly)(e.id, t.roles, e.partial_updates.roles, e.partial_updates.deleted_role_ids),
        stage_instances: e.stage_instances,
        stickers: V(t.stickers, e.partial_updates.stickers, e.partial_updates.deleted_sticker_ids),
        unableToSyncDeletes: e.unable_to_sync_deletes,
        threads: null != (a = null == (o = e.threads) ? void 0 : o.map((t) => (0, m.UE)(t, e.id))) ? a : [],
        threadMessages: H(e.threads),
        voice_states: e.voice_states,
        version: e.version,
        hasThreadsSubscription: e.has_threads_subscription,
    };
}
function H(e) {
    let t = [];
    if (null != e) for (let n of e) null != n.most_recent_message && t.push(n.most_recent_message);
    return t;
}
