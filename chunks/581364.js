n.d(t, {
    $z: () => R,
    BH: () => N,
    BO: () => w,
    D7: () => x,
    Dd: () => C,
    Ft: () => D,
    TK: () => B,
    X0: () => k,
    XA: () => j,
    Z8: () => v,
    bD: () => P,
    nG: () => A,
    qJ: () => U,
    t0: () => G,
    tI: () => M
}),
    n(388685),
    n(953529),
    n(539854),
    n(361932),
    n(187205),
    n(35282),
    n(781311);
var r = n(654861),
    i = n.n(r),
    a = n(512722),
    o = n.n(a),
    s = n(392711),
    l = n.n(s),
    c = n(149765),
    u = n(911969),
    d = n(367907),
    f = n(399860);
n(131704);
var _ = n(703558),
    p = n(895924),
    h = n(689079),
    m = n(981631),
    g = n(231338);
function E(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                E(e, t, n[t]);
            });
    }
    return e;
}
function y(e, t) {
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
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function v(e) {
    var t, n, r;
    let i,
        { rootCommand: a, command: o, applicationId: s, subCommandPath: l, useKeyedPermissions: d } = e;
    null != a.permissions &&
        a.permissions.length > 0 &&
        (d
            ? (i = (0, f.tk)(a.permissions))
            : ((i = {}),
              a.permissions.forEach((e) => {
                  i[e.id] = e;
              })));
    let _ = (null != l ? l : []).map((e) => e.name),
        m = (null != l ? l : []).map((e) => e.displayName);
    return {
        version: a.version,
        guildId: a.guild_id,
        id: [a.id, ..._].join(h.oQ),
        untranslatedName: [a.name, ..._].join(' '),
        serverLocalizedName: o.name_localized,
        applicationId: s,
        type: null != (t = a.type) ? t : u.yU.CHAT,
        inputType: p.iw.BOT,
        untranslatedDescription: o.description,
        options: I(o.options),
        rootCommand: a,
        subCommandPath: l,
        defaultMemberPermissions: null == a.default_member_permissions ? void 0 : c.vB(a.default_member_permissions),
        dmPermission: a.dm_permission,
        permissions: i,
        displayName: [null != (n = a.name_localized) ? n : a.name, ...m].join(' '),
        displayDescription: null != (r = o.description_localized) ? r : o.description,
        nsfw: a.nsfw,
        contexts: a.contexts,
        integration_types: a.integration_types,
        global_popularity_rank: a.global_popularity_rank,
        handler: a.handler
    };
}
function I(e) {
    return null == e
        ? void 0
        : e.map((e) => {
              var t, n;
              let r = O(b({}, e), {
                  choices: S(e.choices),
                  options: I(e.options),
                  serverLocalizedName: e.name_localized,
                  displayName: null != (t = e.name_localized) ? t : e.name,
                  displayDescription: null != (n = e.description_localized) ? n : e.description
              });
              return e.type === u.jw.CHANNEL && 'channel_types' in e
                  ? O(b({}, r), { channelTypes: e.channel_types })
                  : (e.type === u.jw.NUMBER || e.type === u.jw.INTEGER) && ('min_value' in e || 'max_value' in e)
                    ? O(b({}, r), {
                          minValue: e.min_value,
                          maxValue: e.max_value
                      })
                    : e.type === u.jw.STRING && ('min_length' in e || 'max_length' in e)
                      ? O(b({}, r), {
                            minLength: e.min_length,
                            maxLength: e.max_length
                        })
                      : r;
          });
}
function S(e) {
    return null == e
        ? void 0
        : e.map((e) => {
              var t;
              return O(b({}, e), { displayName: null != (t = e.name_localized) ? t : e.name });
          });
}
function T(e) {
    var t, n;
    let { rootCommand: r, command: i, applicationId: a, subCommandPath: o, useKeyedPermissions: s } = e;
    if (i.hasOwnProperty('id')) {
        if (null == i.options || 0 === i.options.length)
            return [
                v({
                    rootCommand: r,
                    command: i,
                    applicationId: a,
                    subCommandPath: o,
                    useKeyedPermissions: s
                })
            ];
    } else if (i.type !== u.jw.SUB_COMMAND && i.type !== u.jw.SUB_COMMAND_GROUP && (null == i.options || 0 === i.options.length))
        return [
            v({
                rootCommand: r,
                command: i,
                applicationId: a,
                subCommandPath: o,
                useKeyedPermissions: s
            })
        ];
    let l = [];
    if (null == i.options) return l;
    let c = i.options.filter((e) => e.type === u.jw.SUB_COMMAND_GROUP);
    for (let e = 0; e < c.length; e++)
        l.push(
            ...T({
                rootCommand: r,
                command: c[e],
                applicationId: a,
                subCommandPath: (null != o ? o : []).concat([
                    {
                        name: c[e].name,
                        type: u.jw.SUB_COMMAND_GROUP,
                        displayName: null != (t = c[e].name_localized) ? t : c[e].name
                    }
                ]),
                useKeyedPermissions: s
            })
        );
    let d = i.options.filter((e) => e.type === u.jw.SUB_COMMAND);
    for (let e = 0; e < d.length; e++)
        l.push(
            v({
                rootCommand: r,
                command: d[e],
                applicationId: a,
                subCommandPath: (null != o ? o : []).concat([
                    {
                        name: d[e].name,
                        type: u.jw.SUB_COMMAND,
                        displayName: null != (n = d[e].name_localized) ? n : d[e].name
                    }
                ]),
                useKeyedPermissions: s
            })
        );
    return (
        0 === c.length &&
            0 === d.length &&
            l.push(
                v({
                    rootCommand: r,
                    command: i,
                    applicationId: a,
                    subCommandPath: o,
                    useKeyedPermissions: s
                })
            ),
        l
    );
}
function A(e, t) {
    return l().flatMap(
        e,
        (e) => (
            o()(null != e.id, 'Missing command id'),
            T({
                rootCommand: e,
                command: e,
                applicationId: e.application_id,
                subCommandPath: void 0,
                useKeyedPermissions: t
            })
        )
    );
}
function N(e) {
    return m.Xyh.test(e.trim());
}
function C(e, t, n, r) {
    let i = [];
    return (
        l()(e).forEach((e) => {
            t.test(e.displayName) && (null == e.predicate || e.predicate(n)) && i.push(e);
        }),
        i.slice(0, r)
    );
}
function R(e) {
    let t = e.type === u.jw.STRING,
        n = e.type === u.jw.CHANNEL,
        r = e.type === u.jw.USER || e.type === u.jw.MENTIONABLE,
        i = e.type === u.jw.ROLE || e.type === u.jw.MENTIONABLE;
    return {
        canMentionEveryone: t || i,
        canMentionHere: t,
        canMentionChannels: t || n,
        canMentionUsers: t || r,
        canMentionRoles: t || i,
        canMentionAnyGuildUser: r,
        canMentionNonMentionableRoles: i
    };
}
function P(e) {
    return i()(e).subtract(1).toString();
}
let w = c.vB(0);
function D(e) {
    let { PermissionStore: t, guild: n, selfMember: r, applicationLevelPermissions: i, commandLevelPermissions: a, defaultMemberPermissions: o } = e;
    if (n.ownerId === r.userId || t.can(g.Pl.ADMINISTRATOR, n)) return !0;
    let s = n.id;
    if (null != a) {
        let e = L(r, s, a);
        if ('boolean' == typeof e) return e;
    }
    let l = L(r, s, i);
    return ('boolean' != typeof l || !!l) && (null == o || (!c.fS(o, w) && t.can(o, n)));
}
function L(e, t, n) {
    let r = n[(0, f.rE)(e.userId, p.Kw.USER)];
    if (null != r) return r.permission;
    let i = !1;
    for (let t of e.roles) {
        let e = n[(0, f.rE)(t, p.Kw.ROLE)];
        if (null != e && ((i = !0), e.permission)) return !0;
    }
    if (i) return !1;
    let a = n[(0, f.rE)(t, p.Kw.ROLE)];
    return null != a ? a.permission : null;
}
function x(e) {
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
        case p.bB.APP_MESSAGE_EMBED:
        case p.bB.APP_DMS_ENTRY_POINT_COMMAND_BUTTON:
        case p.bB.IMAGE_RECS_MENU:
        case p.bB.IMAGE_RECS_SUBMENU:
            return _.d.SlashCommand;
    }
}
function M(e) {
    if (null != e)
        if (e.id === h.bi.BUILT_IN) return p.ub.BUILT_IN;
        else if (e.id === h.bi.FRECENCY) return p.ub.FRECENCY;
        else return p.ub.APP;
}
function k(e, t) {
    var n, r;
    return {
        type: p.Qi.APPLICATION,
        id: e.id,
        name: null != (r = null == e || null == (n = e.bot) ? void 0 : n.username) ? r : e.name,
        icon: e.icon,
        application: e,
        isUserApp: null != t && t
    };
}
function j(e) {
    let t = e.id,
        n = e.options,
        r = null == n ? void 0 : n.find((e) => e.type === u.jw.SUB_COMMAND_GROUP);
    null != r && ((t += ''.concat(h.oQ).concat(r.name)), (n = r.options));
    let i = null == n ? void 0 : n.find((e) => e.type === u.jw.SUB_COMMAND);
    return (
        null != i && ((t += ''.concat(h.oQ).concat(i.name)), (n = i.options)),
        {
            commandKey: t,
            interactionOptions: n
        }
    );
}
function U(e) {
    var t, n;
    let { command: r, location: i, triggerSection: a, queryLength: o, sectionName: s, query: l, searchResultsPosition: c, source: u } = e;
    (0, d.yw)(m.rMx.APPLICATION_COMMAND_SELECTED, {
        command_id: null != (n = null == (t = r.rootCommand) ? void 0 : t.id) ? n : r.id,
        application_id: r.applicationId,
        location: i,
        section: a,
        query_length: o,
        command_text_length: r.displayName.length,
        section_name: s,
        query: l,
        search_results_position: c,
        source: u
    });
}
function G(e) {
    let t = e.interactionMetadata;
    return null == t ? null : 'triggering_interaction_metadata' in t ? t.triggering_interaction_metadata : t;
}
function B(e, t) {
    var n;
    let r = null == (n = t.result) ? void 0 : n.sections;
    return null != r && e in r;
}
