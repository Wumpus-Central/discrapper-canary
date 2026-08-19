"use strict";
n.d(t, {
    $S: () => y,
    Am: () => M,
    Ap: () => N,
    Cq: () => C,
    Ez: () => v,
    Lz: () => T,
    Oe: () => p,
    PV: () => g,
    Qr: () => L,
    XM: () => S,
    bq: () => D,
    gI: () => P,
    hT: () => m,
    my: () => b,
    zl: () => O,
}),
    n(321073);
var i = n(824120),
    r = n.n(i),
    a = n(284009),
    s = n.n(a),
    l = n(435558),
    o = n.n(l),
    d = n(136722),
    c = n(155718),
    u = n(95561),
    _ = n(200662);
n(95701);
var E = n(31717),
    A = n(392054),
    h = n(73510),
    I = n(652215),
    f = n(818348);
function p(e) {
    let t,
        { rootCommand: n, command: i, applicationId: r, subCommandPath: a, useKeyedPermissions: s } = e;
    null != n.permissions &&
        n.permissions.length > 0 &&
        (s
            ? (t = (0, _.UZ)(n.permissions))
            : ((t = {}),
              n.permissions.forEach((e) => {
                  t[e.id] = e;
              })));
    let l = (a ?? []).map((e) => e.name),
        o = (a ?? []).map((e) => e.displayName);
    return {
        version: n.version,
        guildId: n.guild_id,
        id: [n.id, ...l].join(h.v4),
        untranslatedName: [n.name, ...l].join(" "),
        serverLocalizedName: i.name_localized,
        applicationId: r,
        type: n.type ?? c.kc.CHAT,
        inputType: A.y$.BOT,
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
                        : t.type === c.n4.ATTACHMENT && "file_types" in t
                          ? { ...i, fileTypes: t.file_types }
                          : i;
            });
        })(i.options),
        rootCommand: n,
        subCommandPath: a,
        defaultMemberPermissions: null == n.default_member_permissions ? void 0 : d.iu(n.default_member_permissions),
        dmPermission: n.dm_permission,
        permissions: t,
        displayName: [n.name_localized ?? n.name, ...o].join(" "),
        displayDescription: i.description_localized ?? i.description,
        nsfw: n.nsfw,
        contexts: n.contexts,
        integration_types: n.integration_types,
        global_popularity_rank: n.global_popularity_rank,
        handler: n.handler,
    };
}
function T(e, t) {
    return o().flatMap(
        e,
        (e) => (
            s()(null != e.id, "Missing command id"),
            (function e(t) {
                let { rootCommand: n, command: i, applicationId: r, subCommandPath: a, useKeyedPermissions: s } = t;
                if (i.hasOwnProperty("id")) {
                    if (null == i.options || 0 === i.options.length)
                        return [
                            p({
                                rootCommand: n,
                                command: i,
                                applicationId: r,
                                subCommandPath: a,
                                useKeyedPermissions: s,
                            }),
                        ];
                } else if (
                    i.type !== c.n4.SUB_COMMAND &&
                    i.type !== c.n4.SUB_COMMAND_GROUP &&
                    (null == i.options || 0 === i.options.length)
                )
                    return [
                        p({ rootCommand: n, command: i, applicationId: r, subCommandPath: a, useKeyedPermissions: s }),
                    ];
                let l = [];
                if (null == i.options) return l;
                let o = i.options.filter((e) => e.type === c.n4.SUB_COMMAND_GROUP);
                for (let t = 0; t < o.length; t++)
                    l.push(
                        ...e({
                            rootCommand: n,
                            command: o[t],
                            applicationId: r,
                            subCommandPath: (a ?? []).concat([
                                {
                                    name: o[t].name,
                                    type: c.n4.SUB_COMMAND_GROUP,
                                    displayName: o[t].name_localized ?? o[t].name,
                                },
                            ]),
                            useKeyedPermissions: s,
                        }),
                    );
                let d = i.options.filter((e) => e.type === c.n4.SUB_COMMAND);
                for (let e = 0; e < d.length; e++)
                    l.push(
                        p({
                            rootCommand: n,
                            command: d[e],
                            applicationId: r,
                            subCommandPath: (a ?? []).concat([
                                {
                                    name: d[e].name,
                                    type: c.n4.SUB_COMMAND,
                                    displayName: d[e].name_localized ?? d[e].name,
                                },
                            ]),
                            useKeyedPermissions: s,
                        }),
                    );
                return (
                    0 === o.length &&
                        0 === d.length &&
                        l.push(
                            p({
                                rootCommand: n,
                                command: i,
                                applicationId: r,
                                subCommandPath: a,
                                useKeyedPermissions: s,
                            }),
                        ),
                    l
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
function m(e) {
    return I.Ut1.test(e.trim());
}
function g(e, t, n, i) {
    let r = [];
    return (
        o()(e).forEach((e) => {
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
function N(e) {
    return r()(e).subtract(1).toString();
}
let C = d.iu(0);
function O(e) {
    let {
        PermissionStore: t,
        guild: n,
        selfMember: i,
        applicationLevelPermissions: r,
        commandLevelPermissions: a,
        defaultMemberPermissions: s,
    } = e;
    if (n.ownerId === i.userId || t.can(f.xB.ADMINISTRATOR, n)) return !0;
    let l = n.id;
    if (null != a) {
        let e = R(i, l, a);
        if ("boolean" == typeof e) return e;
    }
    let o = R(i, l, r);
    return ("boolean" != typeof o || !!o) && (null == s || (!d.aI(s, C) && t.can(s, n)));
}
function R(e, t, n) {
    let i = n[(0, _.Eu)(e.userId, A.RA.USER)];
    if (null != i) return i.permission;
    let r = !1;
    for (let t of e.roles) {
        let e = n[(0, _.Eu)(t, A.RA.ROLE)];
        if (null != e && ((r = !0), e.permission)) return !0;
    }
    if (r) return !1;
    let a = n[(0, _.Eu)(t, A.RA.ROLE)];
    return null != a ? a.permission : null;
}
function L(e) {
    switch (e) {
        case A.iw.CHAT:
        case A.iw.APPLICATION_LAUNCHER:
        case A.iw.APP_LAUNCHER_APPLICATION_VIEW:
        case A.iw.CONTEXT_MENU:
        case A.iw.VOICE_UI:
        case A.iw.VOICE_TILE_ACTIVITY_SUGGESTIONS:
        case A.iw.MINI_SHELF:
        case A.iw.USER_PROFILE:
        case A.iw.NOW_PLAYING:
        case A.iw.ACTIVITY_DETAILS:
        case A.iw.ACTIVITIES_HOME:
        case A.iw.ACTIVITY_INSTANCE_EMBED:
        case A.iw.ACTIVITY_BOOKMARK_EMBED:
        case A.iw.APP_MESSAGE_EMBED:
        case A.iw.APP_DMS_ENTRY_POINT_COMMAND_BUTTON:
        case A.iw.IMAGE_RECS_MENU:
        case A.iw.IMAGE_RECS_SUBMENU:
            return E.C.SlashCommand;
    }
}
function y(e) {
    if (null != e)
        if (e.id === h.Ik.BUILT_IN) return A.gK.BUILT_IN;
        else if (e.id === h.Ik.FRECENCY) return A.gK.FRECENCY;
        else return A.gK.APP;
}
function D(e, t, n) {
    return {
        type: A.Hf.APPLICATION,
        id: e.id,
        name: n ?? e?.bot?.username ?? e.name,
        icon: e.icon,
        application: e,
        isUserApp: t ?? !1,
    };
}
function v(e) {
    let t = e.id,
        n = e.options,
        i = n?.find((e) => e.type === c.n4.SUB_COMMAND_GROUP);
    null != i && ((t += `${h.v4}${i.name}`), (n = i.options));
    let r = n?.find((e) => e.type === c.n4.SUB_COMMAND);
    return null != r && ((t += `${h.v4}${r.name}`), (n = r.options)), { commandKey: t, interactionOptions: n };
}
function b(e) {
    let {
        command: t,
        location: n,
        triggerSection: i,
        queryLength: r,
        sectionName: a,
        query: s,
        searchResultsPosition: l,
        source: o,
    } = e;
    (0, u.zV)(I.HAw.APPLICATION_COMMAND_SELECTED, {
        command_id: t.rootCommand?.id ?? t.id,
        application_id: t.applicationId,
        location: n,
        section: i,
        query_length: r,
        command_text_length: t.displayName.length,
        section_name: a,
        query: s,
        search_results_position: l,
        source: o,
    });
}
function M(e) {
    let t = e.interactionMetadata;
    return null == t ? null : "triggering_interaction_metadata" in t ? t.triggering_interaction_metadata : t;
}
function P(e, t) {
    let n = t.result?.sections;
    return null != n && e in n;
}
