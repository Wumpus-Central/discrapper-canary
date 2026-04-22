"use strict";
n.d(t, {
    $S: () => C,
    Am: () => w,
    Ap: () => y,
    Cq: () => N,
    Ez: () => D,
    Lz: () => A,
    Oe: () => g,
    PV: () => T,
    Qr: () => v,
    XM: () => S,
    bq: () => b,
    gI: () => M,
    hT: () => I,
    my: () => L,
    zl: () => O,
}),
    n(321073);
var r = n(824120),
    i = n.n(r),
    s = n(284009),
    a = n.n(s),
    o = n(735438),
    l = n.n(o),
    u = n(136722),
    d = n(155718),
    c = n(58149),
    _ = n(200662);
n(95701);
var f = n(31717),
    E = n(392054),
    h = n(73510),
    p = n(652215),
    m = n(818348);
function g(e) {
    let t,
        { rootCommand: n, command: r, applicationId: i, subCommandPath: s, useKeyedPermissions: a } = e;
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
        id: [n.id, ...o].join(h.v4),
        untranslatedName: [n.name, ...o].join(" "),
        serverLocalizedName: r.name_localized,
        applicationId: i,
        type: n.type ?? d.kc.CHAT,
        inputType: E.y$.BOT,
        untranslatedDescription: r.description,
        options: (function e(t) {
            return t?.map((t) => {
                var n;
                let r = {
                    ...t,
                    choices: ((n = t.choices), n?.map((e) => ({ ...e, displayName: e.name_localized ?? e.name }))),
                    options: e(t.options),
                    serverLocalizedName: t.name_localized,
                    displayName: t.name_localized ?? t.name,
                    displayDescription: t.description_localized ?? t.description,
                };
                return t.type === d.n4.CHANNEL && "channel_types" in t
                    ? { ...r, channelTypes: t.channel_types }
                    : (t.type === d.n4.NUMBER || t.type === d.n4.INTEGER) && ("min_value" in t || "max_value" in t)
                      ? { ...r, minValue: t.min_value, maxValue: t.max_value }
                      : t.type === d.n4.STRING && ("min_length" in t || "max_length" in t)
                        ? { ...r, minLength: t.min_length, maxLength: t.max_length }
                        : r;
            });
        })(r.options),
        rootCommand: n,
        subCommandPath: s,
        defaultMemberPermissions: null == n.default_member_permissions ? void 0 : u.iu(n.default_member_permissions),
        dmPermission: n.dm_permission,
        permissions: t,
        displayName: [n.name_localized ?? n.name, ...l].join(" "),
        displayDescription: r.description_localized ?? r.description,
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
                let { rootCommand: n, command: r, applicationId: i, subCommandPath: s, useKeyedPermissions: a } = t;
                if (r.hasOwnProperty("id")) {
                    if (null == r.options || 0 === r.options.length)
                        return [
                            g({
                                rootCommand: n,
                                command: r,
                                applicationId: i,
                                subCommandPath: s,
                                useKeyedPermissions: a,
                            }),
                        ];
                } else if (
                    r.type !== d.n4.SUB_COMMAND &&
                    r.type !== d.n4.SUB_COMMAND_GROUP &&
                    (null == r.options || 0 === r.options.length)
                )
                    return [
                        g({ rootCommand: n, command: r, applicationId: i, subCommandPath: s, useKeyedPermissions: a }),
                    ];
                let o = [];
                if (null == r.options) return o;
                let l = r.options.filter((e) => e.type === d.n4.SUB_COMMAND_GROUP);
                for (let t = 0; t < l.length; t++)
                    o.push(
                        ...e({
                            rootCommand: n,
                            command: l[t],
                            applicationId: i,
                            subCommandPath: (s ?? []).concat([
                                {
                                    name: l[t].name,
                                    type: d.n4.SUB_COMMAND_GROUP,
                                    displayName: l[t].name_localized ?? l[t].name,
                                },
                            ]),
                            useKeyedPermissions: a,
                        }),
                    );
                let u = r.options.filter((e) => e.type === d.n4.SUB_COMMAND);
                for (let e = 0; e < u.length; e++)
                    o.push(
                        g({
                            rootCommand: n,
                            command: u[e],
                            applicationId: i,
                            subCommandPath: (s ?? []).concat([
                                {
                                    name: u[e].name,
                                    type: d.n4.SUB_COMMAND,
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
                                command: r,
                                applicationId: i,
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
    return p.Ut1.test(e.trim());
}
function T(e, t, n, r) {
    let i = [];
    return (
        l()(e).forEach((e) => {
            t.test(e.displayName) && (null == e.predicate || e.predicate(n)) && i.push(e);
        }),
        i.slice(0, r)
    );
}
function S(e) {
    let t = e.type === d.n4.STRING,
        n = e.type === d.n4.CHANNEL,
        r = e.type === d.n4.USER || e.type === d.n4.MENTIONABLE,
        i = e.type === d.n4.ROLE || e.type === d.n4.MENTIONABLE;
    return {
        canMentionEveryone: t || i,
        canMentionHere: t,
        canMentionChannels: t || n,
        canMentionUsers: t || r,
        canMentionRoles: t || i,
        canMentionAnyGuildUser: r,
        canMentionNonMentionableRoles: i,
        canMentionOtherGlobals: t,
    };
}
function y(e) {
    return i()(e).subtract(1).toString();
}
let N = u.iu(0);
function O(e) {
    let {
        PermissionStore: t,
        guild: n,
        selfMember: r,
        applicationLevelPermissions: i,
        commandLevelPermissions: s,
        defaultMemberPermissions: a,
    } = e;
    if (n.ownerId === r.userId || t.can(m.xB.ADMINISTRATOR, n)) return !0;
    let o = n.id;
    if (null != s) {
        let e = R(r, o, s);
        if ("boolean" == typeof e) return e;
    }
    let l = R(r, o, i);
    return ("boolean" != typeof l || !!l) && (null == a || (!u.aI(a, N) && t.can(a, n)));
}
function R(e, t, n) {
    let r = n[(0, _.Eu)(e.userId, E.RA.USER)];
    if (null != r) return r.permission;
    let i = !1;
    for (let t of e.roles) {
        let e = n[(0, _.Eu)(t, E.RA.ROLE)];
        if (null != e && ((i = !0), e.permission)) return !0;
    }
    if (i) return !1;
    let s = n[(0, _.Eu)(t, E.RA.ROLE)];
    return null != s ? s.permission : null;
}
function v(e) {
    switch (e) {
        case E.iw.CHAT:
        case E.iw.APPLICATION_LAUNCHER:
        case E.iw.APP_LAUNCHER_APPLICATION_VIEW:
        case E.iw.CONTEXT_MENU:
        case E.iw.VOICE_UI:
        case E.iw.VOICE_TILE_ACTIVITY_SUGGESTIONS:
        case E.iw.MINI_SHELF:
        case E.iw.USER_PROFILE:
        case E.iw.NOW_PLAYING:
        case E.iw.ACTIVITY_DETAILS:
        case E.iw.ACTIVITIES_HOME:
        case E.iw.ACTIVITY_INSTANCE_EMBED:
        case E.iw.ACTIVITY_BOOKMARK_EMBED:
        case E.iw.APP_MESSAGE_EMBED:
        case E.iw.APP_DMS_ENTRY_POINT_COMMAND_BUTTON:
        case E.iw.IMAGE_RECS_MENU:
        case E.iw.IMAGE_RECS_SUBMENU:
            return f.C.SlashCommand;
    }
}
function C(e) {
    if (null != e)
        if (e.id === h.Ik.BUILT_IN) return E.gK.BUILT_IN;
        else if (e.id === h.Ik.FRECENCY) return E.gK.FRECENCY;
        else return E.gK.APP;
}
function b(e, t, n) {
    return {
        type: E.Hf.APPLICATION,
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
        r = n?.find((e) => e.type === d.n4.SUB_COMMAND_GROUP);
    null != r && ((t += `${h.v4}${r.name}`), (n = r.options));
    let i = n?.find((e) => e.type === d.n4.SUB_COMMAND);
    return null != i && ((t += `${h.v4}${i.name}`), (n = i.options)), { commandKey: t, interactionOptions: n };
}
function L(e) {
    let {
        command: t,
        location: n,
        triggerSection: r,
        queryLength: i,
        sectionName: s,
        query: a,
        searchResultsPosition: o,
        source: l,
    } = e;
    (0, c.zV)(p.HAw.APPLICATION_COMMAND_SELECTED, {
        command_id: t.rootCommand?.id ?? t.id,
        application_id: t.applicationId,
        location: n,
        section: r,
        query_length: i,
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
