t.d(n, { Z: () => N }), t(642613), t(388685);
var r = t(951288),
    l = t(647438),
    o = t(772848),
    i = t(924826),
    c = t(91192),
    s = t(442837),
    a = t(749210),
    d = t(434404),
    u = t(271383),
    f = t(485386),
    m = t(430824),
    p = t(496675),
    h = t(700785),
    x = t(785717),
    b = t(635042),
    j = t(256226),
    g = t(678738),
    v = t(314172),
    y = t(981631),
    O = t(388032),
    I = t(798925);
function _(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            r = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            r.forEach(function (n) {
                var r;
                (r = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[n] = r);
            });
    }
    return e;
}
function Z(e, n) {
    return (
        (n = null != n ? n : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : (function (e, n) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, r);
                  }
                  return t;
              })(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              }),
        e
    );
}
function P(e, n) {
    if (null == e) return {};
    var t,
        r,
        l = (function (e, n) {
            if (null == e) return {};
            var t,
                r,
                l = {},
                o = Object.keys(e);
            for (r = 0; r < o.length; r++) (t = o[r]), n.indexOf(t) >= 0 || (l[t] = e[t]);
            return l;
        })(e, n);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++)
            (t = o[r]), !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (l[t] = e[t]);
    }
    return l;
}
function T(e) {
    let {
            user: n,
            currentUser: t,
            guild: s,
            guildMember: a,
            roles: d,
            highestRole: u,
            canManageRoles: f,
            onAddRole: m,
            onRemoveRole: p,
        } = e,
        x = f && null != a,
        b = l.useRef(null),
        g = l.useMemo(() => "roles-".concat((0, o.Z)()), []),
        T = (0, i.ZP)({
            id: g,
            isEnabled: !0,
            scrollToStart: y.Cyb,
            scrollToEnd: y.Cyb,
            wrap: !0,
        }),
        N = d.length,
        A = 0 === N ? O.intl.string(O.t["vR7M+/"]) : O.intl.formatToPlainString(O.t.PCs0oq, { numRoles: N }),
        E = d.map((e) => {
            var l;
            return (0, r.jsx)(
                j.Z,
                {
                    role: e,
                    guildId: s.id,
                    disableBorderColor: !0,
                    onRemove: () => p(e),
                    canRemove:
                        (null == (l = e.tags) ? void 0 : l.guild_connections) === null
                            ? n.id === t.id
                            : f && h.r6(s, t.id, u, e),
                },
                e.id,
            );
        });
    return (0, r.jsx)(c.bG, {
        navigator: T,
        children: (0, r.jsx)(c.SJ, {
            children: (e) => {
                var { ref: n } = e,
                    t = P(e, ["ref"]);
                return (0, r.jsxs)(
                    "div",
                    Z(
                        _(
                            {
                                className: I.root,
                                "aria-label": A,
                                ref: n,
                            },
                            t,
                        ),
                        {
                            children: [
                                E,
                                x &&
                                    (0, r.jsx)(v.Z, {
                                        buttonRef: b,
                                        guild: s,
                                        guildMember: a,
                                        numRoles: N,
                                        highestRole: u,
                                        onAddRole: m,
                                    }),
                            ],
                        },
                    ),
                );
            },
        }),
    });
}
function N(e) {
    var { user: n, currentUser: t, guildId: o } = e,
        i = P(e, ["user", "currentUser", "guildId"]);
    let { trackUserProfileAction: c } = (0, x.KZ)(),
        j = (0, s.e7)([m.Z], () => m.Z.getGuild(o)),
        v = (0, s.e7)([u.ZP], () => u.ZP.getMember(o, n.id)),
        I = null == v ? void 0 : v.roles,
        N = (0, s.Wu)([f.Z], () => f.Z.getManyRoles(o, null != I ? I : []).sort(b.Z), [I, o]),
        [A] = (0, s.Wu)([p.Z], () => [p.Z.can(y.Plq.MANAGE_ROLES, j), p.Z.getGuildVersion(o)]),
        E = l.useCallback(
            (e) => {
                var t, r;
                c({ action: "REMOVE_ROLE" });
                let l = null != (r = null == I ? void 0 : I.filter((n) => n !== e.id)) ? r : [];
                (null == (t = e.tags) ? void 0 : t.guild_connections) === null
                    ? a.Z.unassignGuildRoleConnection(o, e.id)
                    : d.Z.updateMemberRoles(o, n.id, l, [], [e.id]);
            },
            [I, o, n.id, c],
        ),
        C = l.useCallback(
            (e) => {
                c({ action: "ADD_ROLE" });
                let t = null != I ? I : [];
                t.includes(e) || (t = [...t, e]), d.Z.updateMemberRoles(o, n.id, t, [e], []);
            },
            [I, o, n.id, c],
        );
    if (null == j) return null;
    let S = A && null != v;
    return 0 !== N.length || S
        ? (0, r.jsx)(
              g.Z,
              Z(_({ heading: O.intl.string(O.t.LPJmLy) }, i), {
                  children: (0, r.jsx)(T, {
                      user: n,
                      currentUser: t,
                      guild: j,
                      guildMember: v,
                      roles: N,
                      highestRole: h.e9(j, t.id),
                      canManageRoles: A,
                      onAddRole: C,
                      onRemoveRole: E,
                  }),
              }),
          )
        : null;
}
