n.d(t, { Z: () => Z }), n(642613), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(772848),
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
    j = n(635042),
    y = n(256226),
    O = n(678738),
    x = n(314172),
    h = n(981631),
    v = n(388032),
    _ = n(798925);
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
        i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = {},
                l = Object.keys(e);
            for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++)
            (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function T(e) {
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
        j = i.useRef(null),
        O = i.useMemo(() => "roles-".concat((0, l.Z)()), []),
        T = (0, o.ZP)({
            id: O,
            isEnabled: !0,
            scrollToStart: h.Cyb,
            scrollToEnd: h.Cyb,
            wrap: !0,
        }),
        Z = d.length,
        N = 0 === Z ? v.intl.string(v.t["vR7M+/"]) : v.intl.formatToPlainString(v.t.PCs0oq, { numRoles: Z }),
        S = d.map((e) => {
            var i;
            return (0, r.jsx)(
                y.Z,
                {
                    role: e,
                    guildId: c.id,
                    disableBorderColor: !0,
                    onRemove: () => m(e),
                    canRemove:
                        (null == (i = e.tags) ? void 0 : i.guild_connections) === null
                            ? t.id === n.id
                            : f && g.r6(c, n.id, u, e),
                },
                e.id,
            );
        });
    return (0, r.jsx)(a.bG, {
        navigator: T,
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
                                "aria-label": N,
                                ref: t,
                            },
                            n,
                        ),
                        {
                            children: [
                                S,
                                b &&
                                    (0, r.jsx)(x.Z, {
                                        buttonRef: j,
                                        guild: c,
                                        guildMember: s,
                                        numRoles: Z,
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
function Z(e) {
    var { user: t, currentUser: n, guildId: l } = e,
        o = E(e, ["user", "currentUser", "guildId"]);
    let { trackUserProfileAction: a } = (0, b.KZ)(),
        y = (0, c.e7)([p.Z], () => p.Z.getGuild(l)),
        x = (0, c.e7)([u.ZP], () => u.ZP.getMember(l, t.id)),
        _ = null == x ? void 0 : x.roles,
        Z = (0, c.Wu)([f.Z], () => f.Z.getManyRoles(l, null != _ ? _ : []).sort(j.Z), [_, l]),
        [N] = (0, c.Wu)([m.Z], () => [m.Z.can(h.Plq.MANAGE_ROLES, y), m.Z.getGuildVersion(l)]),
        S = i.useCallback(
            (e) => {
                var n, r;
                a({ action: "REMOVE_ROLE" });
                let i = null != (r = null == _ ? void 0 : _.filter((t) => t !== e.id)) ? r : [];
                (null == (n = e.tags) ? void 0 : n.guild_connections) === null
                    ? s.Z.unassignGuildRoleConnection(l, e.id)
                    : d.Z.updateMemberRoles(l, t.id, i, [], [e.id]);
            },
            [_, l, t.id, a],
        ),
        w = i.useCallback(
            (e) => {
                a({ action: "ADD_ROLE" });
                let n = null != _ ? _ : [];
                n.includes(e) || (n = [...n, e]), d.Z.updateMemberRoles(l, t.id, n, [e], []);
            },
            [_, l, t.id, a],
        );
    if (null == y) return null;
    let A = N && null != x;
    return 0 !== Z.length || A
        ? (0, r.jsx)(
              O.Z,
              P(I({ heading: v.intl.string(v.t.LPJmLy) }, o), {
                  children: (0, r.jsx)(T, {
                      user: t,
                      currentUser: n,
                      guild: y,
                      guildMember: x,
                      roles: Z,
                      highestRole: g.e9(y, n.id),
                      canManageRoles: N,
                      onAddRole: w,
                      onRemoveRole: S,
                  }),
              }),
          )
        : null;
}
