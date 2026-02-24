"use strict";
n.d(t, { H3: () => m, TI: () => y, XD: () => E, fq: () => I, un: () => g }), n(321073);
var r = n(284009),
    i = n.n(r),
    s = n(735438),
    a = n.n(s),
    o = n(723176),
    l = n(766034),
    u = n(324827),
    c = n(531743),
    d = n(989950),
    _ = n(937724),
    f = n(95701);
let p = null,
    h = {};
function m(e, t) {
    let { guilds: n, merged_members: r, merged_presences: i, ...s } = e,
        a = T(h, i?.friends),
        o =
            n?.map((e, t) => {
                let n = T(h, i?.guilds[t]),
                    s = T(h, r?.[t]);
                return { ...e, unavailable: void 0 === e.voice_states, presences: n, members: s };
            }) ?? [],
        l = A(t, n, (e) => ({
            id: e.id,
            members: e.members,
            presences: e.presences,
            activity_instances: e.activity_instances,
            voice_states: e.voice_states,
            unavailable: !1,
        }));
    return null != l && o.push(l), (h = {}), { ...s, presences: a, guilds: o };
}
function E() {
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
function g(e, t, n) {
    let { users: r, private_channels: s, merged_members: l, guilds: u, ...c } = e;
    null != o.A.database() &&
        !1 === n.databaseOk &&
        d.A.replaceDisableAllDatabases("ReadyPayloadUtils: database was not ok"),
        (h = a().keyBy(r, (e) => e.id)),
        s?.forEach((e) => {
            let t = e.recipient_ids;
            null != t &&
                (e.recipients = t.map((e) => (i()(null != h[e], "Missing user in compressed ready payload"), h[e]))),
                delete e.recipient_ids;
        });
    let _ = u?.map((e, t) => (!0 === e.unavailable ? e : ((e.members = T(h, l?.[t])), S(e)))) ?? [],
        f = A(t, u, (e) => S(e));
    return null != f && _.push(f), { ...c, users: r, presences: [], guilds: _, private_channels: s ?? [] };
}
function A(e, t, n) {
    return null == p || p.identifyTime !== e || (null != t && t.some((e) => e.id === p.guild.id)) ? null : n(p.guild);
}
function I(e, t) {
    let n = y(e);
    return (p = { guild: e, identifyTime: t }), n;
}
function T(e, t) {
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
function S(e) {
    return "partial" !== e.data_mode
        ? {
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
              roles: { op: "full_sync", items: e.roles },
              stage_instances: e.stage_instances,
              stickers: { op: "full_sync", items: e.stickers },
              threads: e.threads?.map((t) => (0, f.UE)(t, e.id)) ?? [],
              threadMessages: v(e.threads),
              channels: { op: "full_sync", items: e.channels.map((t) => ((t.guild_id = e.id), (0, f.UE)(t, e.id))) },
              version: e.version,
              hasThreadsSubscription: e.has_threads_subscription,
          }
        : {
              id: e.id,
              dataMode: e.data_mode,
              channels: {
                  op: "update",
                  writes: e.partial_updates.channels?.map((t) => (0, f.UE)(t, e.id)) ?? [],
                  deletes: e.partial_updates.deleted_channel_ids ?? [],
              },
              channelTimestampUpdates: e.channel_updates,
              emojis: {
                  op: "update",
                  writes: e.partial_updates.emojis ?? [],
                  deletes: e.partial_updates.deleted_emoji_ids ?? [],
              },
              guild_scheduled_events: e.guild_scheduled_events,
              joined_at: e.joined_at,
              lastMessages: e.last_messages,
              member_count: e.member_count,
              members: e.members,
              premium_subscription_count: e.premium_subscription_count,
              properties: e.properties ?? null,
              roles: {
                  op: "update",
                  writes: e.partial_updates.roles ?? [],
                  deletes: e.partial_updates.deleted_role_ids ?? [],
              },
              stage_instances: e.stage_instances,
              stickers: {
                  op: "update",
                  writes: e.partial_updates.stickers ?? [],
                  deletes: e.partial_updates.deleted_sticker_ids ?? [],
              },
              unableToSyncDeletes: e.unable_to_sync_deletes,
              threads: e.threads?.map((t) => (0, f.UE)(t, e.id)) ?? [],
              threadMessages: v(e.threads),
              version: e.version,
              hasThreadsSubscription: e.has_threads_subscription,
          };
}
function y(e) {
    return "partial" !== e.data_mode
        ? {
              id: e.id,
              guild_scheduled_events: e.guild_scheduled_events,
              joined_at: e.joined_at,
              lastMessages: e.last_messages,
              member_count: e.member_count,
              members: e.members,
              premium_subscription_count: e.premium_subscription_count,
              properties: e.properties,
              roles: { op: "full_sync", items: e.roles },
              stage_instances: e.stage_instances,
              threads: e.threads?.map((t) => (0, f.UE)(t, e.id)) ?? [],
              threadMessages: v(e.threads),
              presences: e.presences,
              activity_instances: e.activity_instances,
              voice_states: e.voice_states,
              version: e.version,
              hasThreadsSubscription: e.has_threads_subscription,
              emojis: { op: "full_sync", items: e.emojis },
              stickers: { op: "full_sync", items: e.stickers },
              channels: { op: "full_sync", items: e.channels.map((t) => ((t.guild_id = e.id), (0, f.UE)(t, e.id))) },
          }
        : {
              id: e.id,
              channels: {
                  op: "update",
                  writes: e.partial_updates.channels?.map((t) => (0, f.UE)(t, e.id)) ?? [],
                  deletes: e.partial_updates.deleted_channel_ids ?? [],
              },
              channelTimestampUpdates: e.channel_updates,
              activity_instances: e.activity_instances,
              emojis: {
                  op: "update",
                  writes: e.partial_updates.emojis ?? [],
                  deletes: e.partial_updates.deleted_emoji_ids ?? [],
              },
              guild_scheduled_events: e.guild_scheduled_events,
              joined_at: e.joined_at,
              lastMessages: e.last_messages,
              member_count: e.member_count,
              members: e.members,
              premium_subscription_count: e.premium_subscription_count,
              presences: e.presences,
              properties: e.properties ?? null,
              roles: {
                  op: "update",
                  writes: e.partial_updates.roles ?? [],
                  deletes: e.partial_updates.deleted_role_ids ?? [],
              },
              stage_instances: e.stage_instances,
              stickers: {
                  op: "update",
                  writes: e.partial_updates.stickers ?? [],
                  deletes: e.partial_updates.deleted_sticker_ids ?? [],
              },
              unableToSyncDeletes: e.unable_to_sync_deletes,
              threads: e.threads?.map((t) => (0, f.UE)(t, e.id)) ?? [],
              threadMessages: v(e.threads),
              voice_states: e.voice_states,
              version: e.version,
              hasThreadsSubscription: e.has_threads_subscription,
          };
}
function v(e) {
    let t = [];
    if (null != e) for (let n of e) null != n.most_recent_message && t.push(n.most_recent_message);
    return t;
}
