r.d(n, {
    $z: function () {
        return D;
    },
    BH: function () {
        return R;
    },
    BO: function () {
        return x;
    },
    D7: function () {
        return M;
    },
    Dd: function () {
        return O;
    },
    Ft: function () {
        return w;
    },
    X0: function () {
        return U;
    },
    XA: function () {
        return B;
    },
    Z8: function () {
        return y;
    },
    bD: function () {
        return L;
    },
    nG: function () {
        return C;
    },
    qJ: function () {
        return G;
    },
    t0: function () {
        return Z;
    },
    tI: function () {
        return k;
    }
});
var i = r(47120);
var a = r(653041);
var s = r(390547);
var o = r(724458);
var l = r(654861),
    u = r.n(l),
    c = r(512722),
    d = r.n(c),
    f = r(392711),
    _ = r.n(f),
    h = r(149765),
    p = r(911969),
    m = r(367907),
    g = r(399860);
r(131704);
var E = r(703558),
    v = r(895924),
    I = r(689079),
    T = r(981631),
    b = r(231338);
function y(e) {
    var n, r, i;
    let a,
        { rootCommand: s, command: o, applicationId: l, subCommandPath: u, useKeyedPermissions: c } = e;
    null != s.permissions &&
        s.permissions.length > 0 &&
        (c
            ? (a = (0, g.tk)(s.permissions))
            : ((a = {}),
              s.permissions.forEach((e) => {
                  a[e.id] = e;
              })));
    let d = (null != u ? u : []).map((e) => e.name),
        f = (null != u ? u : []).map((e) => e.displayName);
    return {
        version: s.version,
        guildId: s.guild_id,
        id: [s.id, ...d].join(I.oQ),
        untranslatedName: [s.name, ...d].join(' '),
        serverLocalizedName: o.name_localized,
        applicationId: l,
        type: null !== (n = s.type) && void 0 !== n ? n : p.yU.CHAT,
        inputType: v.iw.BOT,
        untranslatedDescription: o.description,
        options: S(o.options),
        rootCommand: s,
        subCommandPath: u,
        defaultMemberPermissions: null == s.default_member_permissions ? void 0 : h.vB(s.default_member_permissions),
        dmPermission: s.dm_permission,
        permissions: a,
        displayName: [null !== (r = s.name_localized) && void 0 !== r ? r : s.name, ...f].join(' '),
        displayDescription: null !== (i = o.description_localized) && void 0 !== i ? i : o.description,
        nsfw: s.nsfw,
        contexts: s.contexts,
        integration_types: s.integration_types,
        global_popularity_rank: s.global_popularity_rank,
        handler: s.handler
    };
}
function S(e) {
    return null == e
        ? void 0
        : e.map((e) => {
              var n, r;
              let i = {
                  ...e,
                  choices: A(e.choices),
                  options: S(e.options),
                  serverLocalizedName: e.name_localized,
                  displayName: null !== (n = e.name_localized) && void 0 !== n ? n : e.name,
                  displayDescription: null !== (r = e.description_localized) && void 0 !== r ? r : e.description
              };
              if (e.type === p.jw.CHANNEL && 'channel_types' in e)
                  return {
                      ...i,
                      channelTypes: e.channel_types
                  };
              if ((e.type === p.jw.NUMBER || e.type === p.jw.INTEGER) && ('min_value' in e || 'max_value' in e))
                  return {
                      ...i,
                      minValue: e.min_value,
                      maxValue: e.max_value
                  };
              if (e.type === p.jw.STRING && ('min_length' in e || 'max_length' in e))
                  return {
                      ...i,
                      minLength: e.min_length,
                      maxLength: e.max_length
                  };
              return i;
          });
}
function A(e) {
    return null == e
        ? void 0
        : e.map((e) => {
              var n;
              return {
                  ...e,
                  displayName: null !== (n = e.name_localized) && void 0 !== n ? n : e.name
              };
          });
}
function N(e) {
    var n, r;
    let { rootCommand: i, command: a, applicationId: s, subCommandPath: o, useKeyedPermissions: l } = e;
    if (a.hasOwnProperty('id')) {
        if (null == a.options || 0 === a.options.length)
            return [
                y({
                    rootCommand: i,
                    command: a,
                    applicationId: s,
                    subCommandPath: o,
                    useKeyedPermissions: l
                })
            ];
    } else if (a.type !== p.jw.SUB_COMMAND && a.type !== p.jw.SUB_COMMAND_GROUP && (null == a.options || 0 === a.options.length))
        return [
            y({
                rootCommand: i,
                command: a,
                applicationId: s,
                subCommandPath: o,
                useKeyedPermissions: l
            })
        ];
    let u = [];
    if (null == a.options) return u;
    let c = a.options.filter((e) => e.type === p.jw.SUB_COMMAND_GROUP);
    for (let e = 0; e < c.length; e++)
        u.push(
            ...N({
                rootCommand: i,
                command: c[e],
                applicationId: s,
                subCommandPath: (null != o ? o : []).concat([
                    {
                        name: c[e].name,
                        type: p.jw.SUB_COMMAND_GROUP,
                        displayName: null !== (n = c[e].name_localized) && void 0 !== n ? n : c[e].name
                    }
                ]),
                useKeyedPermissions: l
            })
        );
    let d = a.options.filter((e) => e.type === p.jw.SUB_COMMAND);
    for (let e = 0; e < d.length; e++)
        u.push(
            y({
                rootCommand: i,
                command: d[e],
                applicationId: s,
                subCommandPath: (null != o ? o : []).concat([
                    {
                        name: d[e].name,
                        type: p.jw.SUB_COMMAND,
                        displayName: null !== (r = d[e].name_localized) && void 0 !== r ? r : d[e].name
                    }
                ]),
                useKeyedPermissions: l
            })
        );
    return (
        0 === c.length &&
            0 === d.length &&
            u.push(
                y({
                    rootCommand: i,
                    command: a,
                    applicationId: s,
                    subCommandPath: o,
                    useKeyedPermissions: l
                })
            ),
        u
    );
}
function C(e, n) {
    return _().flatMap(
        e,
        (e) => (
            d()(null != e.id, 'Missing command id'),
            N({
                rootCommand: e,
                command: e,
                applicationId: e.application_id,
                subCommandPath: void 0,
                useKeyedPermissions: n
            })
        )
    );
}
function R(e) {
    return T.Xyh.test(e.trim());
}
function O(e, n, r, i) {
    let a = [];
    return (
        _()(e).forEach((e) => {
            n.test(e.displayName) && (null == e.predicate || e.predicate(r)) && a.push(e);
        }),
        a.slice(0, i)
    );
}
function D(e) {
    let n = e.type === p.jw.STRING,
        r = e.type === p.jw.CHANNEL,
        i = e.type === p.jw.USER || e.type === p.jw.MENTIONABLE,
        a = e.type === p.jw.ROLE || e.type === p.jw.MENTIONABLE;
    return {
        canMentionEveryone: n || a,
        canMentionHere: n,
        canMentionChannels: n || r,
        canMentionUsers: n || i,
        canMentionRoles: n || a,
        canMentionAnyGuildUser: i,
        canMentionNonMentionableRoles: a
    };
}
function L(e) {
    return u()(e).subtract(1).toString();
}
let x = h.vB(0);
function w(e) {
    let { PermissionStore: n, guild: r, selfMember: i, applicationLevelPermissions: a, commandLevelPermissions: s, defaultMemberPermissions: o } = e;
    if (r.ownerId === i.userId || n.can(b.Pl.ADMINISTRATOR, r)) return !0;
    let l = r.id;
    if (null != s) {
        let e = P(i, l, s);
        if ('boolean' == typeof e) return e;
    }
    let u = P(i, l, a);
    return ('boolean' != typeof u || !!u) && (null == o || (!h.fS(o, x) && n.can(o, r)));
}
function P(e, n, r) {
    let i = r[(0, g.rE)(e.userId, v.Kw.USER)];
    if (null != i) return i.permission;
    let a = !1;
    for (let n of e.roles) {
        let e = r[(0, g.rE)(n, v.Kw.ROLE)];
        if (null != e && ((a = !0), e.permission)) return !0;
    }
    if (a) return !1;
    let s = r[(0, g.rE)(n, v.Kw.ROLE)];
    return null != s ? s.permission : null;
}
function M(e) {
    switch (e) {
        case v.bB.CHAT:
        case v.bB.APPLICATION_LAUNCHER:
        case v.bB.APP_LAUNCHER_APPLICATION_VIEW:
        case v.bB.CONTEXT_MENU:
        case v.bB.VOICE_UI:
        case v.bB.VOICE_TILE_ACTIVITY_SUGGESTIONS:
        case v.bB.MINI_SHELF:
        case v.bB.USER_PROFILE:
        case v.bB.NOW_PLAYING:
        case v.bB.ACTIVITY_DETAILS:
        case v.bB.ACTIVITIES_HOME:
        case v.bB.ACTIVITY_INSTANCE_EMBED:
        case v.bB.ACTIVITY_BOOKMARK_EMBED:
        case v.bB.APP_DMS_ENTRY_POINT_COMMAND_BUTTON:
        case v.bB.IMAGE_RECS_MENU:
        case v.bB.IMAGE_RECS_SUBMENU:
            return E.d.SlashCommand;
    }
}
function k(e) {
    return null == e ? void 0 : e.id === I.bi.BUILT_IN ? v.ub.BUILT_IN : e.id === I.bi.FRECENCY ? v.ub.FRECENCY : v.ub.APP;
}
function U(e, n) {
    var r, i;
    return {
        type: v.Qi.APPLICATION,
        id: e.id,
        name: null !== (i = null == e ? void 0 : null === (r = e.bot) || void 0 === r ? void 0 : r.username) && void 0 !== i ? i : e.name,
        icon: e.icon,
        application: e,
        isUserApp: null != n && n
    };
}
function B(e) {
    let n = e.id,
        r = e.options,
        i = null == r ? void 0 : r.find((e) => e.type === p.jw.SUB_COMMAND_GROUP);
    null != i && ((n += ''.concat(I.oQ).concat(i.name)), (r = i.options));
    let a = null == r ? void 0 : r.find((e) => e.type === p.jw.SUB_COMMAND);
    return (
        null != a && ((n += ''.concat(I.oQ).concat(a.name)), (r = a.options)),
        {
            commandKey: n,
            interactionOptions: r
        }
    );
}
function G(e) {
    var n, r;
    let { command: i, location: a, triggerSection: s, queryLength: o, sectionName: l, query: u, searchResultsPosition: c, source: d } = e;
    (0, m.yw)(T.rMx.APPLICATION_COMMAND_SELECTED, {
        command_id: null !== (r = null === (n = i.rootCommand) || void 0 === n ? void 0 : n.id) && void 0 !== r ? r : i.id,
        application_id: i.applicationId,
        location: a,
        section: s,
        query_length: o,
        command_text_length: i.displayName.length,
        section_name: l,
        query: u,
        search_results_position: c,
        source: d
    });
}
function Z(e) {
    let n = e.interactionMetadata;
    return null == n ? null : 'triggering_interaction_metadata' in n ? n.triggering_interaction_metadata : n;
}
