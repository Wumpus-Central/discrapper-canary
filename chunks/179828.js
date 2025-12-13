t.d(n, { Z: () => E }), t(642613), t(388685);
var l = t(54381),
    i = t(473749),
    o = t(772848),
    r = t(924826),
    a = t(91192),
    c = t(442837),
    s = t(749210),
    d = t(434404),
    u = t(271383),
    f = t(485386),
    m = t(430824),
    p = t(496675),
    x = t(700785),
    h = t(785717),
    v = t(635042),
    b = t(256226),
    j = t(678738),
    g = t(314172),
    I = t(228168),
    y = t(981631),
    Z = t(388032),
    O = t(854458);
function T(e) {
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
function N(e, n) {
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
function A(e, n) {
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
function P(e) {
    let {
            user: n,
            currentUser: t,
            guild: c,
            guildMember: s,
            roles: d,
            highestRole: u,
            canManageRoles: f,
            onAddRole: m,
            onRemoveRole: p,
        } = e,
        h = f && null != s,
        v = i.useRef(null),
        j = i.useMemo(() => "roles-".concat((0, o.Z)()), []),
        I = (0, r.ZP)({
            id: j,
            isEnabled: !0,
            scrollToStart: y.Cyb,
            scrollToEnd: y.Cyb,
            wrap: !0,
        }),
        P = d.length,
        E = 0 === P ? Z.intl.string(Z.t["vR7M+y"]) : Z.intl.formatToPlainString(Z.t.PCs0oo, { numRoles: P }),
        _ = d.map((e) => {
            var i;
            return (0, l.jsx)(
                b.Z,
                {
                    role: e,
                    guildId: c.id,
                    disableBorderColor: !0,
                    onRemove: () => p(e),
                    canRemove:
                        (null == (i = e.tags) ? void 0 : i.guild_connections) === null
                            ? n.id === t.id
                            : f && x.r6(c, t.id, u, e),
                },
                e.id,
            );
        });
    return (0, l.jsx)(a.bG, {
        navigator: I,
        children: (0, l.jsx)(a.SJ, {
            children: (e) => {
                var { ref: n } = e,
                    t = A(e, ["ref"]);
                return (0, l.jsxs)(
                    "div",
                    N(
                        T(
                            {
                                className: O.root,
                                "aria-label": E,
                                ref: n,
                            },
                            t,
                        ),
                        {
                            children: [
                                _,
                                h &&
                                    (0, l.jsx)(g.Z, {
                                        buttonRef: v,
                                        guild: c,
                                        guildMember: s,
                                        numRoles: P,
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
function E(e) {
    var { user: n, currentUser: t, guildId: o } = e,
        r = A(e, ["user", "currentUser", "guildId"]);
    let { trackUserProfileAction: a } = (0, h.KZ)(),
        b = (0, c.e7)([m.Z], () => m.Z.getGuild(o)),
        g = (0, c.e7)([u.ZP], () => u.ZP.getMember(o, n.id)),
        O = null == g ? void 0 : g.roles,
        E = (0, c.Wu)([f.Z], () => f.Z.getManyRoles(o, null != O ? O : []).sort(v.Z), [O, o]),
        [_] = (0, c.Wu)([p.Z], () => [p.Z.can(y.Plq.MANAGE_ROLES, b), p.Z.getGuildVersion(o)]),
        C = i.useCallback(
            (e) => {
                var t, l;
                a({ action: "REMOVE_ROLE" });
                let i = null != (l = null == O ? void 0 : O.filter((n) => n !== e.id)) ? l : [];
                (null == (t = e.tags) ? void 0 : t.guild_connections) === null
                    ? s.Z.unassignGuildRoleConnection(o, e.id)
                    : d.Z.updateMemberRoles(o, n.id, i, [], [e.id]);
            },
            [O, o, n.id, a],
        ),
        S = i.useCallback(
            (e) => {
                a({ action: "ADD_ROLE" });
                let t = null != O ? O : [];
                t.includes(e) || (t = [...t, e]), d.Z.updateMemberRoles(o, n.id, t, [e], []);
            },
            [O, o, n.id, a],
        );
    if (null == b) return null;
    let w = _ && null != g;
    return 0 !== E.length || w
        ? (0, l.jsx)(
              j.Z,
              N(
                  T(
                      {
                          heading: Z.intl.string(Z.t["LPJmL/"]),
                          scrollTargetId: I.Tb.ROLES,
                      },
                      r,
                  ),
                  {
                      children: (0, l.jsx)(P, {
                          user: n,
                          currentUser: t,
                          guild: b,
                          guildMember: g,
                          roles: E,
                          highestRole: x.e9(b, t.id),
                          canManageRoles: _,
                          onAddRole: S,
                          onRemoveRole: C,
                      }),
                  },
              ),
          )
        : null;
}
