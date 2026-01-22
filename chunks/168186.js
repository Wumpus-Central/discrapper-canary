n.d(t, {
    $S: () => j,
    Am: () => G,
    Ap: () => w,
    Cq: () => P,
    Ez: () => k,
    Lz: () => T,
    Oe: () => A,
    PV: () => N,
    Qr: () => L,
    XM: () => R,
    bq: () => M,
    gI: () => V,
    hT: () => C,
    my: () => U,
    zl: () => D,
}),
    n(896048),
    n(228524),
    n(321073),
    n(114821),
    n(339614),
    n(747238),
    n(733351);
var r = n(824120),
    i = n.n(r),
    a = n(284009),
    s = n.n(a),
    o = n(735438),
    l = n.n(o),
    c = n(136722),
    u = n(155718),
    d = n(58149),
    f = n(200662);
n(95701);
var p = n(31717),
    _ = n(392054),
    h = n(73510),
    m = n(652215),
    g = n(818348);

function E(e, t, n) {
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

function b(e) {
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

function A(e) {
    var t, n, r;
    let i,
        { rootCommand: a, command: s, applicationId: o, subCommandPath: l, useKeyedPermissions: d } = e;
    null != a.permissions &&
        a.permissions.length > 0 &&
        (d
            ? (i = (0, f.UZ)(a.permissions))
            : ((i = {}),
              a.permissions.forEach((e) => {
                  i[e.id] = e;
              })));
    let p = (null != l ? l : []).map((e) => e.name),
        m = (null != l ? l : []).map((e) => e.displayName);
    return {
        version: a.version,
        guildId: a.guild_id,
        id: [a.id, ...p].join(h.v4),
        untranslatedName: [a.name, ...p].join(" "),
        serverLocalizedName: s.name_localized,
        applicationId: o,
        type: null != (t = a.type) ? t : u.kc.CHAT,
        inputType: _.y$.BOT,
        untranslatedDescription: s.description,
        options: v(s.options),
        rootCommand: a,
        subCommandPath: l,
        defaultMemberPermissions: null == a.default_member_permissions ? void 0 : c.iu(a.default_member_permissions),
        dmPermission: a.dm_permission,
        permissions: i,
        displayName: [null != (n = a.name_localized) ? n : a.name, ...m].join(" "),
        displayDescription: null != (r = s.description_localized) ? r : s.description,
        nsfw: a.nsfw,
        contexts: a.contexts,
        integration_types: a.integration_types,
        global_popularity_rank: a.global_popularity_rank,
        handler: a.handler,
    };
}

function v(e) {
    return null == e
        ? void 0
        : e.map((e) => {
              var t, n;
              let r = O(b({}, e), {
                  choices: S(e.choices),
                  options: v(e.options),
                  serverLocalizedName: e.name_localized,
                  displayName: null != (t = e.name_localized) ? t : e.name,
                  displayDescription: null != (n = e.description_localized) ? n : e.description,
              });
              return e.type === u.n4.CHANNEL && "channel_types" in e
                  ? O(b({}, r), {
                        channelTypes: e.channel_types,
                    })
                  : (e.type === u.n4.NUMBER || e.type === u.n4.INTEGER) && ("min_value" in e || "max_value" in e)
                    ? O(b({}, r), {
                          minValue: e.min_value,
                          maxValue: e.max_value,
                      })
                    : e.type === u.n4.STRING && ("min_length" in e || "max_length" in e)
                      ? O(b({}, r), {
                            minLength: e.min_length,
                            maxLength: e.max_length,
                        })
                      : r;
          });
}

function S(e) {
    return null == e
        ? void 0
        : e.map((e) => {
              var t;
              return O(b({}, e), {
                  displayName: null != (t = e.name_localized) ? t : e.name,
              });
          });
}

function I(e) {
    var t, n;
    let { rootCommand: r, command: i, applicationId: a, subCommandPath: s, useKeyedPermissions: o } = e;
    if (i.hasOwnProperty("id")) {
        if (null == i.options || 0 === i.options.length)
            return [
                A({
                    rootCommand: r,
                    command: i,
                    applicationId: a,
                    subCommandPath: s,
                    useKeyedPermissions: o,
                }),
            ];
    } else if (
        i.type !== u.n4.SUB_COMMAND &&
        i.type !== u.n4.SUB_COMMAND_GROUP &&
        (null == i.options || 0 === i.options.length)
    )
        return [
            A({
                rootCommand: r,
                command: i,
                applicationId: a,
                subCommandPath: s,
                useKeyedPermissions: o,
            }),
        ];
    let l = [];
    if (null == i.options) return l;
    let c = i.options.filter((e) => e.type === u.n4.SUB_COMMAND_GROUP);
    for (let e = 0; e < c.length; e++)
        l.push(
            ...I({
                rootCommand: r,
                command: c[e],
                applicationId: a,
                subCommandPath: (null != s ? s : []).concat([
                    {
                        name: c[e].name,
                        type: u.n4.SUB_COMMAND_GROUP,
                        displayName: null != (t = c[e].name_localized) ? t : c[e].name,
                    },
                ]),
                useKeyedPermissions: o,
            }),
        );
    let d = i.options.filter((e) => e.type === u.n4.SUB_COMMAND);
    for (let e = 0; e < d.length; e++)
        l.push(
            A({
                rootCommand: r,
                command: d[e],
                applicationId: a,
                subCommandPath: (null != s ? s : []).concat([
                    {
                        name: d[e].name,
                        type: u.n4.SUB_COMMAND,
                        displayName: null != (n = d[e].name_localized) ? n : d[e].name,
                    },
                ]),
                useKeyedPermissions: o,
            }),
        );
    return (
        0 === c.length &&
            0 === d.length &&
            l.push(
                A({
                    rootCommand: r,
                    command: i,
                    applicationId: a,
                    subCommandPath: s,
                    useKeyedPermissions: o,
                }),
            ),
        l
    );
}

function T(e, t) {
    return l().flatMap(
        e,
        (e) => (
            s()(null != e.id, "Missing command id"),
            I({
                rootCommand: e,
                command: e,
                applicationId: e.application_id,
                subCommandPath: void 0,
                useKeyedPermissions: t,
            })
        ),
    );
}

function C(e) {
    return m.Ut1.test(e.trim());
}

function N(e, t, n, r) {
    let i = [];
    return (
        l()(e).forEach((e) => {
            t.test(e.displayName) && (null == e.predicate || e.predicate(n)) && i.push(e);
        }),
        i.slice(0, r)
    );
}

function R(e) {
    let t = e.type === u.n4.STRING,
        n = e.type === u.n4.CHANNEL,
        r = e.type === u.n4.USER || e.type === u.n4.MENTIONABLE,
        i = e.type === u.n4.ROLE || e.type === u.n4.MENTIONABLE;
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

function w(e) {
    return i()(e).subtract(1).toString();
}
let P = c.iu(0);

function D(e) {
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
        let e = x(r, o, a);
        if ("boolean" == typeof e) return e;
    }
    let l = x(r, o, i);
    return ("boolean" != typeof l || !!l) && (null == s || (!c.aI(s, P) && t.can(s, n)));
}

function x(e, t, n) {
    let r = n[(0, f.Eu)(e.userId, _.RA.USER)];
    if (null != r) return r.permission;
    let i = !1;
    for (let t of e.roles) {
        let e = n[(0, f.Eu)(t, _.RA.ROLE)];
        if (null != e && ((i = !0), e.permission)) return !0;
    }
    if (i) return !1;
    let a = n[(0, f.Eu)(t, _.RA.ROLE)];
    return null != a ? a.permission : null;
}

function L(e) {
    switch (e) {
        case _.iw.CHAT:
        case _.iw.APPLICATION_LAUNCHER:
        case _.iw.APP_LAUNCHER_APPLICATION_VIEW:
        case _.iw.CONTEXT_MENU:
        case _.iw.VOICE_UI:
        case _.iw.VOICE_TILE_ACTIVITY_SUGGESTIONS:
        case _.iw.MINI_SHELF:
        case _.iw.USER_PROFILE:
        case _.iw.NOW_PLAYING:
        case _.iw.ACTIVITY_DETAILS:
        case _.iw.ACTIVITIES_HOME:
        case _.iw.ACTIVITY_INSTANCE_EMBED:
        case _.iw.ACTIVITY_BOOKMARK_EMBED:
        case _.iw.APP_MESSAGE_EMBED:
        case _.iw.APP_DMS_ENTRY_POINT_COMMAND_BUTTON:
        case _.iw.IMAGE_RECS_MENU:
        case _.iw.IMAGE_RECS_SUBMENU:
            return p.C.SlashCommand;
    }
}

function j(e) {
    if (null != e)
        if (e.id === h.Ik.BUILT_IN) return _.gK.BUILT_IN;
        else if (e.id === h.Ik.FRECENCY) return _.gK.FRECENCY;
        else return _.gK.APP;
}

function M(e, t, n) {
    var r, i;
    return {
        type: _.Hf.APPLICATION,
        id: e.id,
        name: null != (r = null != n ? n : null == e || null == (i = e.bot) ? void 0 : i.username) ? r : e.name,
        icon: e.icon,
        application: e,
        isUserApp: null != t && t,
    };
}

function k(e) {
    let t = e.id,
        n = e.options,
        r = null == n ? void 0 : n.find((e) => e.type === u.n4.SUB_COMMAND_GROUP);
    null != r && ((t += "".concat(h.v4).concat(r.name)), (n = r.options));
    let i = null == n ? void 0 : n.find((e) => e.type === u.n4.SUB_COMMAND);
    return (
        null != i && ((t += "".concat(h.v4).concat(i.name)), (n = i.options)),
        {
            commandKey: t,
            interactionOptions: n,
        }
    );
}

function U(e) {
    var t, n;
    let {
        command: r,
        location: i,
        triggerSection: a,
        queryLength: s,
        sectionName: o,
        query: l,
        searchResultsPosition: c,
        source: u,
    } = e;
    (0, d.zV)(m.HAw.APPLICATION_COMMAND_SELECTED, {
        command_id: null != (t = null == (n = r.rootCommand) ? void 0 : n.id) ? t : r.id,
        application_id: r.applicationId,
        location: i,
        section: a,
        query_length: s,
        command_text_length: r.displayName.length,
        section_name: o,
        query: l,
        search_results_position: c,
        source: u,
    });
}

function G(e) {
    let t = e.interactionMetadata;
    return null == t ? null : "triggering_interaction_metadata" in t ? t.triggering_interaction_metadata : t;
}

function V(e, t) {
    var n;
    let r = null == (n = t.result) ? void 0 : n.sections;
    return null != r && e in r;
}
