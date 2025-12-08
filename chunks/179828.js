t.d(n, { Z: () => A }), t(642613), t(388685);
var l = t(54381),
    i = t(473749),
    o = t(772848),
    r = t(924826),
    s = t(91192),
    a = t(442837),
    c = t(749210),
    d = t(434404),
    u = t(271383),
    m = t(485386),
    p = t(430824),
    f = t(496675),
    x = t(700785),
    h = t(785717),
    v = t(635042),
    j = t(256226),
    g = t(678738),
    b = t(314172),
    I = t(981631),
    y = t(388032),
    Z = t(798925);
function _(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            l = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            l.forEach(function (n) {
                var l;
                (l = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[n] = l);
            });
    }
    return e;
}
function O(e, n) {
    return (
        (n = null != n ? n : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : (function (e, n) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, l);
                  }
                  return t;
              })(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              }),
        e
    );
}
function N(e, n) {
    if (null == e) return {};
    var t,
        l,
        i = (function (e, n) {
            if (null == e) return {};
            var t,
                l,
                i = {},
                o = Object.keys(e);
            for (l = 0; l < o.length; l++) (t = o[l]), n.indexOf(t) >= 0 || (i[t] = e[t]);
            return i;
        })(e, n);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (l = 0; l < o.length; l++)
            (t = o[l]), !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t]);
    }
    return i;
}
function T(e) {
    let {
            user: n,
            currentUser: t,
            guild: a,
            guildMember: c,
            roles: d,
            highestRole: u,
            canManageRoles: m,
            onAddRole: p,
            onRemoveRole: f,
        } = e,
        h = m && null != c,
        v = i.useRef(null),
        g = i.useMemo(() => "roles-".concat((0, o.Z)()), []),
        T = (0, r.ZP)({
            id: g,
            isEnabled: !0,
            scrollToStart: I.Cyb,
            scrollToEnd: I.Cyb,
            wrap: !0,
        }),
        A = d.length,
        P = 0 === A ? y.intl.string(y.t["vR7M+y"]) : y.intl.formatToPlainString(y.t.PCs0oo, { numRoles: A }),
        E = d.map((e) => {
            var i;
            return (0, l.jsx)(
                j.Z,
                {
                    role: e,
                    guildId: a.id,
                    disableBorderColor: !0,
                    onRemove: () => f(e),
                    canRemove:
                        (null == (i = e.tags) ? void 0 : i.guild_connections) === null
                            ? n.id === t.id
                            : m && x.r6(a, t.id, u, e),
                },
                e.id,
            );
        });
    return (0, l.jsx)(s.bG, {
        navigator: T,
        children: (0, l.jsx)(s.SJ, {
            children: (e) => {
                var { ref: n } = e,
                    t = N(e, ["ref"]);
                return (0, l.jsxs)(
                    "div",
                    O(
                        _(
                            {
                                className: Z.root,
                                "aria-label": P,
                                ref: n,
                            },
                            t,
                        ),
                        {
                            children: [
                                E,
                                h &&
                                    (0, l.jsx)(b.Z, {
                                        buttonRef: v,
                                        guild: a,
                                        guildMember: c,
                                        numRoles: A,
                                        highestRole: u,
                                        onAddRole: p,
                                    }),
                            ],
                        },
                    ),
                );
            },
        }),
    });
}
function A(e) {
    var { user: n, currentUser: t, guildId: o } = e,
        r = N(e, ["user", "currentUser", "guildId"]);
    let { trackUserProfileAction: s } = (0, h.KZ)(),
        j = (0, a.e7)([p.Z], () => p.Z.getGuild(o)),
        b = (0, a.e7)([u.ZP], () => u.ZP.getMember(o, n.id)),
        Z = null == b ? void 0 : b.roles,
        A = (0, a.Wu)([m.Z], () => m.Z.getManyRoles(o, null != Z ? Z : []).sort(v.Z), [Z, o]),
        [P] = (0, a.Wu)([f.Z], () => [f.Z.can(I.Plq.MANAGE_ROLES, j), f.Z.getGuildVersion(o)]),
        E = i.useCallback(
            (e) => {
                var t, l;
                s({ action: "REMOVE_ROLE" });
                let i = null != (l = null == Z ? void 0 : Z.filter((n) => n !== e.id)) ? l : [];
                (null == (t = e.tags) ? void 0 : t.guild_connections) === null
                    ? c.Z.unassignGuildRoleConnection(o, e.id)
                    : d.Z.updateMemberRoles(o, n.id, i, [], [e.id]);
            },
            [Z, o, n.id, s],
        ),
        C = i.useCallback(
            (e) => {
                s({ action: "ADD_ROLE" });
                let t = null != Z ? Z : [];
                t.includes(e) || (t = [...t, e]), d.Z.updateMemberRoles(o, n.id, t, [e], []);
            },
            [Z, o, n.id, s],
        );
    if (null == j) return null;
    let S = P && null != b;
    return 0 !== A.length || S
        ? (0, l.jsx)(
              g.Z,
              O(_({ heading: y.intl.string(y.t["LPJmL/"]) }, r), {
                  children: (0, l.jsx)(T, {
                      user: n,
                      currentUser: t,
                      guild: j,
                      guildMember: b,
                      roles: A,
                      highestRole: x.e9(j, t.id),
                      canManageRoles: P,
                      onAddRole: C,
                      onRemoveRole: E,
                  }),
              }),
          )
        : null;
}
