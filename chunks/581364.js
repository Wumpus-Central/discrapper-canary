n.d(t, {
    $z: () => A,
    BH: () => T,
    BO: () => C,
    D7: () => D,
    Dd: () => S,
    Ft: () => R,
    X0: () => L,
    XA: () => P,
    Z8: () => E,
    bD: () => N,
    nG: () => b,
    qJ: () => w,
    t0: () => M,
    tI: () => x
}),
    n(47120),
    n(653041),
    n(390547),
    n(724458);
var i = n(654861),
    r = n.n(i),
    a = n(512722),
    s = n.n(a),
    o = n(392711),
    l = n.n(o),
    u = n(149765),
    c = n(911969),
    d = n(367907),
    f = n(399860);
n(131704);
var _ = n(703558),
    p = n(895924),
    h = n(689079),
    m = n(981631),
    g = n(231338);
function E(e) {
    var t, n, i;
    let r,
        { rootCommand: a, command: s, applicationId: o, subCommandPath: l, useKeyedPermissions: d } = e;
    null != a.permissions &&
        a.permissions.length > 0 &&
        (d
            ? (r = (0, f.tk)(a.permissions))
            : ((r = {}),
              a.permissions.forEach((e) => {
                  r[e.id] = e;
              })));
    let _ = (null != l ? l : []).map((e) => e.name),
        m = (null != l ? l : []).map((e) => e.displayName);
    return {
        version: a.version,
        guildId: a.guild_id,
        id: [a.id, ..._].join(h.oQ),
        untranslatedName: [a.name, ..._].join(' '),
        serverLocalizedName: s.name_localized,
        applicationId: o,
        type: null !== (t = a.type) && void 0 !== t ? t : c.yU.CHAT,
        inputType: p.iw.BOT,
        untranslatedDescription: s.description,
        options: v(s.options),
        rootCommand: a,
        subCommandPath: l,
        defaultMemberPermissions: null == a.default_member_permissions ? void 0 : u.vB(a.default_member_permissions),
        dmPermission: a.dm_permission,
        permissions: r,
        displayName: [null !== (n = a.name_localized) && void 0 !== n ? n : a.name, ...m].join(' '),
        displayDescription: null !== (i = s.description_localized) && void 0 !== i ? i : s.description,
        nsfw: a.nsfw,
        contexts: a.contexts,
        integration_types: a.integration_types,
        global_popularity_rank: a.global_popularity_rank,
        handler: a.handler
    };
}
function v(e) {
    return null == e
        ? void 0
        : e.map((e) => {
              var t, n;
              let i = {
                  ...e,
                  choices: y(e.choices),
                  options: v(e.options),
                  serverLocalizedName: e.name_localized,
                  displayName: null !== (t = e.name_localized) && void 0 !== t ? t : e.name,
                  displayDescription: null !== (n = e.description_localized) && void 0 !== n ? n : e.description
              };
              return e.type === c.jw.CHANNEL && 'channel_types' in e
                  ? {
                        ...i,
                        channelTypes: e.channel_types
                    }
                  : (e.type === c.jw.NUMBER || e.type === c.jw.INTEGER) && ('min_value' in e || 'max_value' in e)
                    ? {
                          ...i,
                          minValue: e.min_value,
                          maxValue: e.max_value
                      }
                    : e.type === c.jw.STRING && ('min_length' in e || 'max_length' in e)
                      ? {
                            ...i,
                            minLength: e.min_length,
                            maxLength: e.max_length
                        }
                      : i;
          });
}
function y(e) {
    return null == e
        ? void 0
        : e.map((e) => {
              var t;
              return {
                  ...e,
                  displayName: null !== (t = e.name_localized) && void 0 !== t ? t : e.name
              };
          });
}
function I(e) {
    var t, n;
    let { rootCommand: i, command: r, applicationId: a, subCommandPath: s, useKeyedPermissions: o } = e;
    if (r.hasOwnProperty('id')) {
        if (null == r.options || 0 === r.options.length)
            return [
                E({
                    rootCommand: i,
                    command: r,
                    applicationId: a,
                    subCommandPath: s,
                    useKeyedPermissions: o
                })
            ];
    } else if (r.type !== c.jw.SUB_COMMAND && r.type !== c.jw.SUB_COMMAND_GROUP && (null == r.options || 0 === r.options.length))
        return [
            E({
                rootCommand: i,
                command: r,
                applicationId: a,
                subCommandPath: s,
                useKeyedPermissions: o
            })
        ];
    let l = [];
    if (null == r.options) return l;
    let u = r.options.filter((e) => e.type === c.jw.SUB_COMMAND_GROUP);
    for (let e = 0; e < u.length; e++)
        l.push(
            ...I({
                rootCommand: i,
                command: u[e],
                applicationId: a,
                subCommandPath: (null != s ? s : []).concat([
                    {
                        name: u[e].name,
                        type: c.jw.SUB_COMMAND_GROUP,
                        displayName: null !== (t = u[e].name_localized) && void 0 !== t ? t : u[e].name
                    }
                ]),
                useKeyedPermissions: o
            })
        );
    let d = r.options.filter((e) => e.type === c.jw.SUB_COMMAND);
    for (let e = 0; e < d.length; e++)
        l.push(
            E({
                rootCommand: i,
                command: d[e],
                applicationId: a,
                subCommandPath: (null != s ? s : []).concat([
                    {
                        name: d[e].name,
                        type: c.jw.SUB_COMMAND,
                        displayName: null !== (n = d[e].name_localized) && void 0 !== n ? n : d[e].name
                    }
                ]),
                useKeyedPermissions: o
            })
        );
    return (
        0 === u.length &&
            0 === d.length &&
            l.push(
                E({
                    rootCommand: i,
                    command: r,
                    applicationId: a,
                    subCommandPath: s,
                    useKeyedPermissions: o
                })
            ),
        l
    );
}
function b(e, t) {
    return l().flatMap(
        e,
        (e) => (
            s()(null != e.id, 'Missing command id'),
            I({
                rootCommand: e,
                command: e,
                applicationId: e.application_id,
                subCommandPath: void 0,
                useKeyedPermissions: t
            })
        )
    );
}
function T(e) {
    return m.Xyh.test(e.trim());
}
function S(e, t, n, i) {
    let r = [];
    return (
        l()(e).forEach((e) => {
            t.test(e.displayName) && (null == e.predicate || e.predicate(n)) && r.push(e);
        }),
        r.slice(0, i)
    );
}
function A(e) {
    let t = e.type === c.jw.STRING,
        n = e.type === c.jw.CHANNEL,
        i = e.type === c.jw.USER || e.type === c.jw.MENTIONABLE,
        r = e.type === c.jw.ROLE || e.type === c.jw.MENTIONABLE;
    return {
        canMentionEveryone: t || r,
        canMentionHere: t,
        canMentionChannels: t || n,
        canMentionUsers: t || i,
        canMentionRoles: t || r,
        canMentionAnyGuildUser: i,
        canMentionNonMentionableRoles: r
    };
}
function N(e) {
    return r()(e).subtract(1).toString();
}
let C = u.vB(0);
function R(e) {
    let { PermissionStore: t, guild: n, selfMember: i, applicationLevelPermissions: r, commandLevelPermissions: a, defaultMemberPermissions: s } = e;
    if (n.ownerId === i.userId || t.can(g.Pl.ADMINISTRATOR, n)) return !0;
    let o = n.id;
    if (null != a) {
        let e = O(i, o, a);
        if ('boolean' == typeof e) return e;
    }
    let l = O(i, o, r);
    return ('boolean' != typeof l || !!l) && (null == s || (!u.fS(s, C) && t.can(s, n)));
}
function O(e, t, n) {
    let i = n[(0, f.rE)(e.userId, p.Kw.USER)];
    if (null != i) return i.permission;
    let r = !1;
    for (let t of e.roles) {
        let e = n[(0, f.rE)(t, p.Kw.ROLE)];
        if (null != e && ((r = !0), e.permission)) return !0;
    }
    if (r) return !1;
    let a = n[(0, f.rE)(t, p.Kw.ROLE)];
    return null != a ? a.permission : null;
}
function D(e) {
    switch (e) {
        case p.bB.CHAT:
        case p.bB.APPLICATION_LAUNCHER:
        case p.bB.APP_LAUNCHER_APPLICATION_VIEW:
        case p.bB.CONTEXT_MENU:
        case p.bB.VOICE_UI:
        case p.bB.VOICE_TILE_ACTIVITY_SUGGESTIONS:
        case p.bB.MINI_SHELF:
        case p.bB.USER_PROFILE:
        case p.bB.NOW_PLAYING:
        case p.bB.ACTIVITY_DETAILS:
        case p.bB.ACTIVITIES_HOME:
        case p.bB.ACTIVITY_INSTANCE_EMBED:
        case p.bB.ACTIVITY_BOOKMARK_EMBED:
        case p.bB.APP_DMS_ENTRY_POINT_COMMAND_BUTTON:
        case p.bB.IMAGE_RECS_MENU:
        case p.bB.IMAGE_RECS_SUBMENU:
            return _.d.SlashCommand;
    }
}
function x(e) {
    return null == e ? void 0 : e.id === h.bi.BUILT_IN ? p.ub.BUILT_IN : e.id === h.bi.FRECENCY ? p.ub.FRECENCY : p.ub.APP;
}
function L(e, t) {
    var n, i;
    return {
        type: p.Qi.APPLICATION,
        id: e.id,
        name: null !== (i = null == e ? void 0 : null === (n = e.bot) || void 0 === n ? void 0 : n.username) && void 0 !== i ? i : e.name,
        icon: e.icon,
        application: e,
        isUserApp: null != t && t
    };
}
function P(e) {
    let t = e.id,
        n = e.options,
        i = null == n ? void 0 : n.find((e) => e.type === c.jw.SUB_COMMAND_GROUP);
    null != i && ((t += ''.concat(h.oQ).concat(i.name)), (n = i.options));
    let r = null == n ? void 0 : n.find((e) => e.type === c.jw.SUB_COMMAND);
    return (
        null != r && ((t += ''.concat(h.oQ).concat(r.name)), (n = r.options)),
        {
            commandKey: t,
            interactionOptions: n
        }
    );
}
function w(e) {
    var t, n;
    let { command: i, location: r, triggerSection: a, queryLength: s, sectionName: o, query: l, searchResultsPosition: u, source: c } = e;
    (0, d.yw)(m.rMx.APPLICATION_COMMAND_SELECTED, {
        command_id: null !== (n = null === (t = i.rootCommand) || void 0 === t ? void 0 : t.id) && void 0 !== n ? n : i.id,
        application_id: i.applicationId,
        location: r,
        section: a,
        query_length: s,
        command_text_length: i.displayName.length,
        section_name: o,
        query: l,
        search_results_position: u,
        source: c
    });
}
function M(e) {
    let t = e.interactionMetadata;
    return null == t ? null : 'triggering_interaction_metadata' in t ? t.triggering_interaction_metadata : t;
}
