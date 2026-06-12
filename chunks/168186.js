"use strict";
n.d(t, {
    $S: () => O,
    Am: () => w,
    Ap: () => y,
    Cq: () => N,
    Ez: () => D,
    Lz: () => A,
    Oe: () => g,
    PV: () => T,
    Qr: () => R,
    XM: () => S,
    bq: () => b,
    gI: () => M,
    hT: () => I,
    my: () => L,
    zl: () => v,
}),
    n(321073);
var i = n(824120),
    r = n.n(i),
    s = n(284009),
    a = n.n(s),
    o = n(735438),
    l = n.n(o),
    u = n(136722),
    c = n(155718),
    d = n(95561),
    _ = n(200662);
n(95701);
var h = n(31717),
    f = n(392054),
    p = n(73510),
    E = n(652215),
    m = n(818348);
function g(e) {
    let t,
        { rootCommand: n, command: i, applicationId: r, subCommandPath: s, useKeyedPermissions: a } = e;
    null != n.permissions &&
        n.permissions.length > 0 &&
        (a
            ? (t = (0, _.UZ)(n.permissions))
            : ((t = {}),
              n.permissions.forEach((e) => {
                  t[e.id] = e;
              })));
    let o = (s ?? []).map((e) => e.name),
        l = (s ?? []).map((e) => e.displayName);
    return {
        version: n.version,
        guildId: n.guild_id,
        id: [n.id, ...o].join(p.v4),
        untranslatedName: [n.name, ...o].join(" "),
        serverLocalizedName: i.name_localized,
        applicationId: r,
        type: n.type ?? c.kc.CHAT,
        inputType: f.y$.BOT,
        untranslatedDescription: i.description,
        options: (function e(t) {
            return t?.map((t) => {
                var n;
                let i = {
                    ...t,
                    choices: ((n = t.choices), n?.map((e) => ({ ...e, displayName: e.name_localized ?? e.name }))),
                    options: e(t.options),
                    serverLocalizedName: t.name_localized,
                    displayName: t.name_localized ?? t.name,
                    displayDescription: t.description_localized ?? t.description,
                };
                return t.type === c.n4.CHANNEL && "channel_types" in t
                    ? { ...i, channelTypes: t.channel_types }
                    : (t.type === c.n4.NUMBER || t.type === c.n4.INTEGER) && ("min_value" in t || "max_value" in t)
                      ? { ...i, minValue: t.min_value, maxValue: t.max_value }
                      : t.type === c.n4.STRING && ("min_length" in t || "max_length" in t)
                        ? { ...i, minLength: t.min_length, maxLength: t.max_length }
                        : i;
            });
        })(i.options),
        rootCommand: n,
        subCommandPath: s,
        defaultMemberPermissions: null == n.default_member_permissions ? void 0 : u.iu(n.default_member_permissions),
        dmPermission: n.dm_permission,
        permissions: t,
        displayName: [n.name_localized ?? n.name, ...l].join(" "),
        displayDescription: i.description_localized ?? i.description,
        nsfw: n.nsfw,
        contexts: n.contexts,
        integration_types: n.integration_types,
        global_popularity_rank: n.global_popularity_rank,
        handler: n.handler,
    };
}
function A(e, t) {
    return l().flatMap(
        e,
        (e) => (
            a()(null != e.id, "Missing command id"),
            (function e(t) {
                let { rootCommand: n, command: i, applicationId: r, subCommandPath: s, useKeyedPermissions: a } = t;
                if (i.hasOwnProperty("id")) {
                    if (null == i.options || 0 === i.options.length)
                        return [
                            g({
                                rootCommand: n,
                                command: i,
                                applicationId: r,
                                subCommandPath: s,
                                useKeyedPermissions: a,
                            }),
                        ];
                } else if (
                    i.type !== c.n4.SUB_COMMAND &&
                    i.type !== c.n4.SUB_COMMAND_GROUP &&
                    (null == i.options || 0 === i.options.length)
                )
                    return [
                        g({ rootCommand: n, command: i, applicationId: r, subCommandPath: s, useKeyedPermissions: a }),
                    ];
                let o = [];
                if (null == i.options) return o;
                let l = i.options.filter((e) => e.type === c.n4.SUB_COMMAND_GROUP);
                for (let t = 0; t < l.length; t++)
                    o.push(
                        ...e({
                            rootCommand: n,
                            command: l[t],
                            applicationId: r,
                            subCommandPath: (s ?? []).concat([
                                {
                                    name: l[t].name,
                                    type: c.n4.SUB_COMMAND_GROUP,
                                    displayName: l[t].name_localized ?? l[t].name,
                                },
                            ]),
                            useKeyedPermissions: a,
                        }),
                    );
                let u = i.options.filter((e) => e.type === c.n4.SUB_COMMAND);
                for (let e = 0; e < u.length; e++)
                    o.push(
                        g({
                            rootCommand: n,
                            command: u[e],
                            applicationId: r,
                            subCommandPath: (s ?? []).concat([
                                {
                                    name: u[e].name,
                                    type: c.n4.SUB_COMMAND,
                                    displayName: u[e].name_localized ?? u[e].name,
                                },
                            ]),
                            useKeyedPermissions: a,
                        }),
                    );
                return (
                    0 === l.length &&
                        0 === u.length &&
                        o.push(
                            g({
                                rootCommand: n,
                                command: i,
                                applicationId: r,
                                subCommandPath: s,
                                useKeyedPermissions: a,
                            }),
                        ),
                    o
                );
            })({
                rootCommand: e,
                command: e,
                applicationId: e.application_id,
                subCommandPath: void 0,
                useKeyedPermissions: t,
            })
        ),
    );
}
function I(e) {
    return E.Ut1.test(e.trim());
}
function T(e, t, n, i) {
    let r = [];
    return (
        l()(e).forEach((e) => {
            t.test(e.displayName) && (null == e.predicate || e.predicate(n)) && r.push(e);
        }),
        r.slice(0, i)
    );
}
function S(e) {
    let t = e.type === c.n4.STRING,
        n = e.type === c.n4.CHANNEL,
        i = e.type === c.n4.USER || e.type === c.n4.MENTIONABLE,
        r = e.type === c.n4.ROLE || e.type === c.n4.MENTIONABLE;
    return {
        canMentionEveryone: t || r,
        canMentionHere: t,
        canMentionChannels: t || n,
        canMentionUsers: t || i,
        canMentionRoles: t || r,
        canMentionAnyGuildUser: i,
        canMentionNonMentionableRoles: r,
        canMentionOtherGlobals: t,
    };
}
function y(e) {
    return r()(e).subtract(1).toString();
}
let N = u.iu(0);
function v(e) {
    let {
        PermissionStore: t,
        guild: n,
        selfMember: i,
        applicationLevelPermissions: r,
        commandLevelPermissions: s,
        defaultMemberPermissions: a,
    } = e;
    if (n.ownerId === i.userId || t.can(m.xB.ADMINISTRATOR, n)) return !0;
    let o = n.id;
    if (null != s) {
        let e = C(i, o, s);
        if ("boolean" == typeof e) return e;
    }
    let l = C(i, o, r);
    return ("boolean" != typeof l || !!l) && (null == a || (!u.aI(a, N) && t.can(a, n)));
}
function C(e, t, n) {
    let i = n[(0, _.Eu)(e.userId, f.RA.USER)];
    if (null != i) return i.permission;
    let r = !1;
    for (let t of e.roles) {
        let e = n[(0, _.Eu)(t, f.RA.ROLE)];
        if (null != e && ((r = !0), e.permission)) return !0;
    }
    if (r) return !1;
    let s = n[(0, _.Eu)(t, f.RA.ROLE)];
    return null != s ? s.permission : null;
}
function R(e) {
    switch (e) {
        case f.iw.CHAT:
        case f.iw.APPLICATION_LAUNCHER:
        case f.iw.APP_LAUNCHER_APPLICATION_VIEW:
        case f.iw.CONTEXT_MENU:
        case f.iw.VOICE_UI:
        case f.iw.VOICE_TILE_ACTIVITY_SUGGESTIONS:
        case f.iw.MINI_SHELF:
        case f.iw.USER_PROFILE:
        case f.iw.NOW_PLAYING:
        case f.iw.ACTIVITY_DETAILS:
        case f.iw.ACTIVITIES_HOME:
        case f.iw.ACTIVITY_INSTANCE_EMBED:
        case f.iw.ACTIVITY_BOOKMARK_EMBED:
        case f.iw.APP_MESSAGE_EMBED:
        case f.iw.APP_DMS_ENTRY_POINT_COMMAND_BUTTON:
        case f.iw.IMAGE_RECS_MENU:
        case f.iw.IMAGE_RECS_SUBMENU:
            return h.C.SlashCommand;
    }
}
function O(e) {
    if (null != e)
        if (e.id === p.Ik.BUILT_IN) return f.gK.BUILT_IN;
        else if (e.id === p.Ik.FRECENCY) return f.gK.FRECENCY;
        else return f.gK.APP;
}
function b(e, t, n) {
    return {
        type: f.Hf.APPLICATION,
        id: e.id,
        name: n ?? e?.bot?.username ?? e.name,
        icon: e.icon,
        application: e,
        isUserApp: t ?? !1,
    };
}
function D(e) {
    let t = e.id,
        n = e.options,
        i = n?.find((e) => e.type === c.n4.SUB_COMMAND_GROUP);
    null != i && ((t += `${p.v4}${i.name}`), (n = i.options));
    let r = n?.find((e) => e.type === c.n4.SUB_COMMAND);
    return null != r && ((t += `${p.v4}${r.name}`), (n = r.options)), { commandKey: t, interactionOptions: n };
}
function L(e) {
    let {
        command: t,
        location: n,
        triggerSection: i,
        queryLength: r,
        sectionName: s,
        query: a,
        searchResultsPosition: o,
        source: l,
    } = e;
    (0, d.zV)(E.HAw.APPLICATION_COMMAND_SELECTED, {
        command_id: t.rootCommand?.id ?? t.id,
        application_id: t.applicationId,
        location: n,
        section: i,
        query_length: r,
        command_text_length: t.displayName.length,
        section_name: s,
        query: a,
        search_results_position: o,
        source: l,
    });
}
function w(e) {
    let t = e.interactionMetadata;
    return null == t ? null : "triggering_interaction_metadata" in t ? t.triggering_interaction_metadata : t;
}
function M(e, t) {
    let n = t.result?.sections;
    return null != n && e in n;
}
