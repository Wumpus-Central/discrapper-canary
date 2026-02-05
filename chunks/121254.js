"use strict";
n.d(t, { H3: () => C, TI: () => k, XD: () => b, fq: () => D, un: () => N }), n(321073);
var r = n(284009),
    i = n.n(r),
    a = n(735438),
    s = n.n(a),
    o = n(723176),
    l = n(766034),
    u = n(324827),
    c = n(531743),
    d = n(989950),
    _ = n(937724),
    f = n(626584),
    p = n(608960),
    h = n(679382),
    m = n(95701),
    g = n(317525),
    E = n(71393),
    A = n(860689),
    I = n(7864);
let T = new f.A("ReadyPayloadUtils"),
    y = {},
    S = null,
    v = {};
function C(e, t) {
    let { guilds: n, merged_members: r, merged_presences: i, ...a } = e,
        s = L(v, i?.friends),
        o =
            n?.map((e, t) => {
                let n = L(v, i?.guilds[t]),
                    a = L(v, r?.[t]);
                return { ...e, unavailable: void 0 === e.voice_states, presences: n, members: a };
            }) ?? [],
        l = R(t, n, (e) => ({
            id: e.id,
            members: e.members,
            presences: e.presences,
            activity_instances: e.activity_instances,
            voice_states: e.voice_states,
            unavailable: !1,
        }));
    return null != l && o.push(l), (v = {}), { ...a, presences: s, guilds: o };
}
function b() {
    let e = o.A.database();
    return Promise.all([
        (0, _.O)() ? l.A.getCommittedVersions() : Promise.resolve({}),
        (0, _.O)() ? c.A.getGuildIds() : Promise.resolve(new Set()),
        null != e ? u.A.okAsync(e) : Promise.resolve(!1),
    ]).then((e) => {
        let [t, n, r] = e;
        return { guildVersions: t, guildChannels: n, databaseOk: r };
    });
}
function N(e, t, n) {
    let { users: r, relationships: a, private_channels: o, merged_members: l, guilds: u, ...c } = e;
    x(n);
    let d = L((v = s().keyBy(r, (e) => e.id)), a);
    o?.forEach((e) => {
        let t = e.recipient_ids;
        null != t &&
            (e.recipients = t.map((e) => (i()(null != v[e], "Missing user in compressed ready payload"), v[e]))),
            delete e.recipient_ids;
    });
    let _ = u?.map((e, t) => (!0 === e.unavailable ? e : ((e.members = L(v, l?.[t])), M(e)))) ?? [],
        f = R(t, u, (e) => M(e));
    return (
        null != f && _.push(f),
        { ...c, users: r, presences: [], relationships: d, guilds: _, private_channels: o ?? [] }
    );
}
function R(e, t, n) {
    return null == S || S.identifyTime !== e || (null != t && t.some((e) => e.id === S.guild.id)) ? null : n(S.guild);
}
function O(e) {
    let t = p.A.getGuildEmojis(e);
    return null != t ? Object.values(t) : null;
}
function D(e, t) {
    let n = E.A.getGuild(e.id),
        r = k(
            e,
            null == n
                ? void 0
                : {
                      properties: A.yN(n),
                      roles: g.A.getRolesSnapshot(n.id),
                      emojis: O(n.id),
                      stickers: h.A.getRawStickersByGuild().get(n.id) ?? null,
                  },
        );
    return (S = { guild: e, identifyTime: t }), r;
}
function L(e, t) {
    let n = [];
    return (
        t?.forEach((t) => {
            if (null == t) return;
            let r = t.user_id;
            null != r && (i()(null != e[r], `Missing user[${r}] in compressed ready payload`), (t.user = e[r])),
                delete t.user_id,
                n.push(t);
        }),
        n
    );
}
function w(e) {
    let t = y[e];
    return delete y[e], t;
}
function x(e) {
    null != o.A.database() &&
        !1 === e.databaseOk &&
        d.A.replaceDisableAllDatabases("ReadyPayloadUtils: database was not ok"),
        (y = {});
    let t = E.A.getGuildsArray(),
        n = h.A.getRawStickersByGuild();
    for (let r of t)
        r.id in e.guildVersions &&
            e.guildChannels.has(r.id) &&
            (y[r.id] = {
                properties: A.yN(r),
                roles: g.A.getRolesSnapshot(r.id),
                emojis: O(r.id),
                stickers: n.get(r.id) ?? null,
            });
}
function P(e, t, n) {
    t ??= [];
    let r = new Set((n ??= []));
    for (let { id: e } of t) r.add(e);
    let i = null;
    return (
        null != e && (i = e.filter((e) => !r.has(e.id))).push(...t), { op: "update", writes: t, deletes: n, items: i }
    );
}
function M(e) {
    let t = w(e.id);
    if ("partial" !== e.data_mode)
        return {
            id: e.id,
            dataMode: e.data_mode,
            emojis: { op: "full_sync", items: e.emojis },
            guild_scheduled_events: e.guild_scheduled_events,
            joined_at: e.joined_at,
            lastMessages: e.last_messages,
            member_count: e.member_count,
            members: e.members,
            premium_subscription_count: e.premium_subscription_count,
            properties: e.properties,
            roles: e.roles,
            stage_instances: e.stage_instances,
            stickers: { op: "full_sync", items: e.stickers },
            threads: e.threads?.map((t) => (0, m.UE)(t, e.id)) ?? [],
            threadMessages: U(e.threads),
            channels: { op: "full_sync", items: e.channels.map((t) => ((t.guild_id = e.id), (0, m.UE)(t, e.id))) },
            version: e.version,
            hasThreadsSubscription: e.has_threads_subscription,
        };
    if (null == t)
        throw (
            (T.log(`no cache entry for partial guild (guild: ${e.id}, type: ready)`),
            Error("Guild data was missing from store, but hash was still available."))
        );
    return {
        id: e.id,
        dataMode: e.data_mode,
        channels: {
            op: "update",
            writes: e.partial_updates.channels?.map((t) => (0, m.UE)(t, e.id)) ?? [],
            deletes: e.partial_updates.deleted_channel_ids ?? [],
        },
        channelTimestampUpdates: e.channel_updates,
        emojis: P(t.emojis, e.partial_updates.emojis, e.partial_updates.deleted_emoji_ids),
        guild_scheduled_events: e.guild_scheduled_events,
        joined_at: e.joined_at,
        lastMessages: e.last_messages,
        member_count: e.member_count,
        members: e.members,
        premium_subscription_count: e.premium_subscription_count,
        properties: e.properties ?? null,
        roles: (0, I.ly)(e.id, t.roles, e.partial_updates.roles, e.partial_updates.deleted_role_ids),
        stage_instances: e.stage_instances,
        stickers: P(t.stickers, e.partial_updates.stickers, e.partial_updates.deleted_sticker_ids),
        unableToSyncDeletes: e.unable_to_sync_deletes,
        threads: e.threads?.map((t) => (0, m.UE)(t, e.id)) ?? [],
        threadMessages: U(e.threads),
        version: e.version,
        hasThreadsSubscription: e.has_threads_subscription,
    };
}
function k(e, t) {
    if ((null == t && (t = w(e.id)), "partial" !== e.data_mode))
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
            threads: e.threads?.map((t) => (0, m.UE)(t, e.id)) ?? [],
            threadMessages: U(e.threads),
            presences: e.presences,
            activity_instances: e.activity_instances,
            voice_states: e.voice_states,
            version: e.version,
            hasThreadsSubscription: e.has_threads_subscription,
            emojis: { op: "full_sync", items: e.emojis },
            stickers: { op: "full_sync", items: e.stickers },
            channels: { op: "full_sync", items: e.channels.map((t) => ((t.guild_id = e.id), (0, m.UE)(t, e.id))) },
        };
    if (null == t)
        throw (
            (T.log(`no cache entry for partial guild (guild: ${e.id}, type: post_ready)`),
            Error("Guild data was missing from store, but hash was still available."))
        );
    return {
        id: e.id,
        channels: {
            op: "update",
            writes: e.partial_updates.channels?.map((t) => (0, m.UE)(t, e.id)) ?? [],
            deletes: e.partial_updates.deleted_channel_ids ?? [],
        },
        channelTimestampUpdates: e.channel_updates,
        activity_instances: e.activity_instances,
        emojis: P(t.emojis, e.partial_updates.emojis, e.partial_updates.deleted_emoji_ids),
        guild_scheduled_events: e.guild_scheduled_events,
        joined_at: e.joined_at,
        lastMessages: e.last_messages,
        member_count: e.member_count,
        members: e.members,
        premium_subscription_count: e.premium_subscription_count,
        presences: e.presences,
        properties: e.properties ?? t.properties,
        roles: (0, I.ly)(e.id, t.roles, e.partial_updates.roles, e.partial_updates.deleted_role_ids),
        stage_instances: e.stage_instances,
        stickers: P(t.stickers, e.partial_updates.stickers, e.partial_updates.deleted_sticker_ids),
        unableToSyncDeletes: e.unable_to_sync_deletes,
        threads: e.threads?.map((t) => (0, m.UE)(t, e.id)) ?? [],
        threadMessages: U(e.threads),
        voice_states: e.voice_states,
        version: e.version,
        hasThreadsSubscription: e.has_threads_subscription,
    };
}
function U(e) {
    let t = [];
    if (null != e) for (let n of e) null != n.most_recent_message && t.push(n.most_recent_message);
    return t;
}
