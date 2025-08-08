n.d(t, { Z: () => N }), n(642613), n(388685);
var r = n(255367),
    l = n(73800),
    i = n(772848),
    o = n(924826),
    a = n(91192),
    c = n(442837),
    s = n(749210),
    d = n(434404),
    u = n(271383),
    f = n(485386),
    p = n(430824),
    m = n(496675),
    g = n(700785),
    b = n(785717),
    h = n(635042),
    j = n(256226),
    y = n(678738),
    x = n(314172),
    v = n(981631),
    O = n(388032),
    _ = n(217919);
function I(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function P(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        l = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = {},
                i = Object.keys(e);
            for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
            return l;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (r = 0; r < i.length; r++)
            (n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
    }
    return l;
}
function Z(e) {
    let {
            user: t,
            currentUser: n,
            guild: c,
            guildMember: s,
            roles: d,
            highestRole: u,
            canManageRoles: f,
            onAddRole: p,
            onRemoveRole: m,
        } = e,
        b = f && null != s,
        h = l.useRef(null),
        y = l.useMemo(() => "roles-".concat((0, i.Z)()), []),
        Z = (0, o.ZP)({
            id: y,
            isEnabled: !0,
            scrollToStart: v.Cyb,
            scrollToEnd: v.Cyb,
            wrap: !0,
        }),
        N = d.length,
        S = 0 === N ? O.intl.string(O.t["vR7M+/"]) : O.intl.formatToPlainString(O.t.PCs0oq, { numRoles: N }),
        T = d.map((e) => {
            var l;
            return (0, r.jsx)(
                j.Z,
                {
                    role: e,
                    guildId: c.id,
                    disableBorderColor: !0,
                    onRemove: () => m(e),
                    canRemove:
                        (null == (l = e.tags) ? void 0 : l.guild_connections) === null
                            ? t.id === n.id
                            : f && g.r6(c, n.id, u, e),
                },
                e.id,
            );
        });
    return (0, r.jsx)(a.bG, {
        navigator: Z,
        children: (0, r.jsx)(a.SJ, {
            children: (e) => {
                var { ref: t } = e,
                    n = E(e, ["ref"]);
                return (0, r.jsxs)(
                    "div",
                    P(
                        I(
                            {
                                className: _.root,
                                "aria-label": S,
                                ref: t,
                            },
                            n,
                        ),
                        {
                            children: [
                                T,
                                b &&
                                    (0, r.jsx)(x.Z, {
                                        buttonRef: h,
                                        guild: c,
                                        guildMember: s,
                                        numRoles: N,
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
function N(e) {
    var { user: t, currentUser: n, guildId: i } = e,
        o = E(e, ["user", "currentUser", "guildId"]);
    let { trackUserProfileAction: a } = (0, b.KZ)(),
        j = (0, c.e7)([p.Z], () => p.Z.getGuild(i)),
        x = (0, c.e7)([u.ZP], () => u.ZP.getMember(i, t.id)),
        _ = null == x ? void 0 : x.roles,
        N = (0, c.Wu)([f.Z], () => f.Z.getManyRoles(i, null != _ ? _ : []).sort(h.Z), [_, i]),
        [S] = (0, c.Wu)([m.Z], () => [m.Z.can(v.Plq.MANAGE_ROLES, j), m.Z.getGuildVersion(i)]),
        T = l.useCallback(
            (e) => {
                var n, r;
                a({ action: "REMOVE_ROLE" });
                let l = null != (r = null == _ ? void 0 : _.filter((t) => t !== e.id)) ? r : [];
                (null == (n = e.tags) ? void 0 : n.guild_connections) === null
                    ? s.Z.unassignGuildRoleConnection(i, e.id)
                    : d.Z.updateMemberRoles(i, t.id, l, [], [e.id]);
            },
            [_, i, t.id, a],
        ),
        A = l.useCallback(
            (e) => {
                a({ action: "ADD_ROLE" });
                let n = null != _ ? _ : [];
                n.includes(e) || (n = [...n, e]), d.Z.updateMemberRoles(i, t.id, n, [e], []);
            },
            [_, i, t.id, a],
        );
    if (null == j) return null;
    let w = S && null != x;
    return 0 !== N.length || w
        ? (0, r.jsx)(
              y.Z,
              P(I({ heading: O.intl.string(O.t.LPJmLy) }, o), {
                  children: (0, r.jsx)(Z, {
                      user: t,
                      currentUser: n,
                      guild: j,
                      guildMember: x,
                      roles: N,
                      highestRole: g.e9(j, n.id),
                      canManageRoles: S,
                      onAddRole: A,
                      onRemoveRole: T,
                  }),
              }),
          )
        : null;
}
