"use strict";
n.d(t, {
    $S: () => L,
    Am: () => M,
    Ap: () => b,
    Cq: () => N,
    Ez: () => x,
    Lz: () => y,
    Oe: () => E,
    PV: () => v,
    Qr: () => D,
    XM: () => C,
    bq: () => w,
    gI: () => k,
    hT: () => S,
    my: () => P,
    zl: () => R,
}),
    n(321073);
var r = n(824120),
    i = n.n(r),
    a = n(284009),
    s = n.n(a),
    o = n(735438),
    l = n.n(o),
    u = n(136722),
    c = n(155718),
    d = n(58149),
    _ = n(200662);
n(95701);
var f = n(31717),
    p = n(392054),
    h = n(73510),
    m = n(652215),
    g = n(818348);
function E(e) {
    let t,
        { rootCommand: n, command: r, applicationId: i, subCommandPath: a, useKeyedPermissions: s } = e;
    null != n.permissions &&
        n.permissions.length > 0 &&
        (s
            ? (t = (0, _.UZ)(n.permissions))
            : ((t = {}),
              n.permissions.forEach((e) => {
                  t[e.id] = e;
              })));
    let o = (a ?? []).map((e) => e.name),
        l = (a ?? []).map((e) => e.displayName);
    return {
        version: n.version,
        guildId: n.guild_id,
        id: [n.id, ...o].join(h.v4),
        untranslatedName: [n.name, ...o].join(" "),
        serverLocalizedName: r.name_localized,
        applicationId: i,
        type: n.type ?? c.kc.CHAT,
        inputType: p.y$.BOT,
        untranslatedDescription: r.description,
        options: A(r.options),
        rootCommand: n,
        subCommandPath: a,
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
function A(e) {
    return e?.map((e) => {
        let t = {
            ...e,
            choices: I(e.choices),
            options: A(e.options),
            serverLocalizedName: e.name_localized,
            displayName: e.name_localized ?? e.name,
            displayDescription: e.description_localized ?? e.description,
        };
        return e.type === c.n4.CHANNEL && "channel_types" in e
            ? { ...t, channelTypes: e.channel_types }
            : (e.type === c.n4.NUMBER || e.type === c.n4.INTEGER) && ("min_value" in e || "max_value" in e)
              ? { ...t, minValue: e.min_value, maxValue: e.max_value }
              : e.type === c.n4.STRING && ("min_length" in e || "max_length" in e)
                ? { ...t, minLength: e.min_length, maxLength: e.max_length }
                : t;
    });
}
function I(e) {
    return e?.map((e) => ({ ...e, displayName: e.name_localized ?? e.name }));
}
function T(e) {
    let { rootCommand: t, command: n, applicationId: r, subCommandPath: i, useKeyedPermissions: a } = e;
    if (n.hasOwnProperty("id")) {
        if (null == n.options || 0 === n.options.length)
            return [E({ rootCommand: t, command: n, applicationId: r, subCommandPath: i, useKeyedPermissions: a })];
    } else if (
        n.type !== c.n4.SUB_COMMAND &&
        n.type !== c.n4.SUB_COMMAND_GROUP &&
        (null == n.options || 0 === n.options.length)
    )
        return [E({ rootCommand: t, command: n, applicationId: r, subCommandPath: i, useKeyedPermissions: a })];
    let s = [];
    if (null == n.options) return s;
    let o = n.options.filter((e) => e.type === c.n4.SUB_COMMAND_GROUP);
    for (let e = 0; e < o.length; e++)
        s.push(
            ...T({
                rootCommand: t,
                command: o[e],
                applicationId: r,
                subCommandPath: (i ?? []).concat([
                    { name: o[e].name, type: c.n4.SUB_COMMAND_GROUP, displayName: o[e].name_localized ?? o[e].name },
                ]),
                useKeyedPermissions: a,
            }),
        );
    let l = n.options.filter((e) => e.type === c.n4.SUB_COMMAND);
    for (let e = 0; e < l.length; e++)
        s.push(
            E({
                rootCommand: t,
                command: l[e],
                applicationId: r,
                subCommandPath: (i ?? []).concat([
                    { name: l[e].name, type: c.n4.SUB_COMMAND, displayName: l[e].name_localized ?? l[e].name },
                ]),
                useKeyedPermissions: a,
            }),
        );
    return (
        0 === o.length &&
            0 === l.length &&
            s.push(E({ rootCommand: t, command: n, applicationId: r, subCommandPath: i, useKeyedPermissions: a })),
        s
    );
}
function y(e, t) {
    return l().flatMap(
        e,
        (e) => (
            s()(null != e.id, "Missing command id"),
            T({
                rootCommand: e,
                command: e,
                applicationId: e.application_id,
                subCommandPath: void 0,
                useKeyedPermissions: t,
            })
        ),
    );
}
function S(e) {
    return m.Ut1.test(e.trim());
}
function v(e, t, n, r) {
    let i = [];
    return (
        l()(e).forEach((e) => {
            t.test(e.displayName) && (null == e.predicate || e.predicate(n)) && i.push(e);
        }),
        i.slice(0, r)
    );
}
function C(e) {
    let t = e.type === c.n4.STRING,
        n = e.type === c.n4.CHANNEL,
        r = e.type === c.n4.USER || e.type === c.n4.MENTIONABLE,
        i = e.type === c.n4.ROLE || e.type === c.n4.MENTIONABLE;
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
function b(e) {
    return i()(e).subtract(1).toString();
}
let N = u.iu(0);
function R(e) {
    let {
        PermissionStore: t,
        guild: n,
        selfMember: r,
        applicationLevelPermissions: i,
        commandLevelPermissions: a,
        defaultMemberPermissions: s,
    } = e;
    if (n.ownerId === r.userId || t.can(g.xB.ADMINISTRATOR, n)) return !0;
    let o = n.id;
    if (null != a) {
        let e = O(r, o, a);
        if ("boolean" == typeof e) return e;
    }
    let l = O(r, o, i);
    return ("boolean" != typeof l || !!l) && (null == s || (!u.aI(s, N) && t.can(s, n)));
}
function O(e, t, n) {
    let r = n[(0, _.Eu)(e.userId, p.RA.USER)];
    if (null != r) return r.permission;
    let i = !1;
    for (let t of e.roles) {
        let e = n[(0, _.Eu)(t, p.RA.ROLE)];
        if (null != e && ((i = !0), e.permission)) return !0;
    }
    if (i) return !1;
    let a = n[(0, _.Eu)(t, p.RA.ROLE)];
    return null != a ? a.permission : null;
}
function D(e) {
    switch (e) {
        case p.iw.CHAT:
        case p.iw.APPLICATION_LAUNCHER:
        case p.iw.APP_LAUNCHER_APPLICATION_VIEW:
        case p.iw.CONTEXT_MENU:
        case p.iw.VOICE_UI:
        case p.iw.VOICE_TILE_ACTIVITY_SUGGESTIONS:
        case p.iw.MINI_SHELF:
        case p.iw.USER_PROFILE:
        case p.iw.NOW_PLAYING:
        case p.iw.ACTIVITY_DETAILS:
        case p.iw.ACTIVITIES_HOME:
        case p.iw.ACTIVITY_INSTANCE_EMBED:
        case p.iw.ACTIVITY_BOOKMARK_EMBED:
        case p.iw.APP_MESSAGE_EMBED:
        case p.iw.APP_DMS_ENTRY_POINT_COMMAND_BUTTON:
        case p.iw.IMAGE_RECS_MENU:
        case p.iw.IMAGE_RECS_SUBMENU:
            return f.C.SlashCommand;
    }
}
function L(e) {
    if (null != e)
        if (e.id === h.Ik.BUILT_IN) return p.gK.BUILT_IN;
        else if (e.id === h.Ik.FRECENCY) return p.gK.FRECENCY;
        else return p.gK.APP;
}
function w(e, t, n) {
    return {
        type: p.Hf.APPLICATION,
        id: e.id,
        name: n ?? e?.bot?.username ?? e.name,
        icon: e.icon,
        application: e,
        isUserApp: t ?? !1,
    };
}
function x(e) {
    let t = e.id,
        n = e.options,
        r = n?.find((e) => e.type === c.n4.SUB_COMMAND_GROUP);
    null != r && ((t += `${h.v4}${r.name}`), (n = r.options));
    let i = n?.find((e) => e.type === c.n4.SUB_COMMAND);
    return null != i && ((t += `${h.v4}${i.name}`), (n = i.options)), { commandKey: t, interactionOptions: n };
}
function P(e) {
    let {
        command: t,
        location: n,
        triggerSection: r,
        queryLength: i,
        sectionName: a,
        query: s,
        searchResultsPosition: o,
        source: l,
    } = e;
    (0, d.zV)(m.HAw.APPLICATION_COMMAND_SELECTED, {
        command_id: t.rootCommand?.id ?? t.id,
        application_id: t.applicationId,
        location: n,
        section: r,
        query_length: i,
        command_text_length: t.displayName.length,
        section_name: a,
        query: s,
        search_results_position: o,
        source: l,
    });
}
function M(e) {
    let t = e.interactionMetadata;
    return null == t ? null : "triggering_interaction_metadata" in t ? t.triggering_interaction_metadata : t;
}
function k(e, t) {
    let n = t.result?.sections;
    return null != n && e in n;
}
