t.d(n, { Z: () => N }), t(642613), t(388685);
var r = t(951288),
    o = t(647438),
    l = t(772848),
    i = t(924826),
    c = t(91192),
    a = t(442837),
    s = t(749210),
    d = t(434404),
    u = t(271383),
    f = t(485386),
    m = t(430824),
    p = t(496675),
    x = t(700785),
    b = t(785717),
    g = t(635042),
    h = t(256226),
    j = t(678738),
    v = t(314172),
    _ = t(981631),
    y = t(388032),
    O = t(798925);
function I(e) {
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
        o = (function (e, n) {
            if (null == e) return {};
            var t,
                r,
                o = {},
                l = Object.keys(e);
            for (r = 0; r < l.length; r++) (t = l[r]), n.indexOf(t) >= 0 || (o[t] = e[t]);
            return o;
        })(e, n);
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++)
            (t = l[r]), !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t]);
    }
    return o;
}
function T(e) {
    let {
            user: n,
            currentUser: t,
            guild: a,
            guildMember: s,
            roles: d,
            highestRole: u,
            canManageRoles: f,
            onAddRole: m,
            onRemoveRole: p,
        } = e,
        b = f && null != s,
        g = o.useRef(null),
        j = o.useMemo(() => "roles-".concat((0, l.Z)()), []),
        T = (0, i.ZP)({
            id: j,
            isEnabled: !0,
            scrollToStart: _.Cyb,
            scrollToEnd: _.Cyb,
            wrap: !0,
        }),
        N = d.length,
        A = 0 === N ? y.intl.string(y.t["vR7M+/"]) : y.intl.formatToPlainString(y.t.PCs0oq, { numRoles: N }),
        C = d.map((e) => {
            var o;
            return (0, r.jsx)(
                h.Z,
                {
                    role: e,
                    guildId: a.id,
                    disableBorderColor: !0,
                    onRemove: () => p(e),
                    canRemove:
                        (null == (o = e.tags) ? void 0 : o.guild_connections) === null
                            ? n.id === t.id
                            : f && x.r6(a, t.id, u, e),
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
                        I(
                            {
                                className: O.root,
                                "aria-label": A,
                                ref: n,
                            },
                            t,
                        ),
                        {
                            children: [
                                C,
                                b &&
                                    (0, r.jsx)(v.Z, {
                                        buttonRef: g,
                                        guild: a,
                                        guildMember: s,
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
    var { user: n, currentUser: t, guildId: l } = e,
        i = P(e, ["user", "currentUser", "guildId"]);
    let { trackUserProfileAction: c } = (0, b.KZ)(),
        h = (0, a.e7)([m.Z], () => m.Z.getGuild(l)),
        v = (0, a.e7)([u.ZP], () => u.ZP.getMember(l, n.id)),
        O = null == v ? void 0 : v.roles,
        N = (0, a.Wu)([f.Z], () => f.Z.getManyRoles(l, null != O ? O : []).sort(g.Z), [O, l]),
        [A] = (0, a.Wu)([p.Z], () => [p.Z.can(_.Plq.MANAGE_ROLES, h), p.Z.getGuildVersion(l)]),
        C = o.useCallback(
            (e) => {
                var t, r;
                c({ action: "REMOVE_ROLE" });
                let o = null != (r = null == O ? void 0 : O.filter((n) => n !== e.id)) ? r : [];
                (null == (t = e.tags) ? void 0 : t.guild_connections) === null
                    ? s.Z.unassignGuildRoleConnection(l, e.id)
                    : d.Z.updateMemberRoles(l, n.id, o, [], [e.id]);
            },
            [O, l, n.id, c],
        ),
        E = o.useCallback(
            (e) => {
                c({ action: "ADD_ROLE" });
                let t = null != O ? O : [];
                t.includes(e) || (t = [...t, e]), d.Z.updateMemberRoles(l, n.id, t, [e], []);
            },
            [O, l, n.id, c],
        );
    if (null == h) return null;
    let S = A && null != v;
    return 0 !== N.length || S
        ? (0, r.jsx)(
              j.Z,
              Z(I({ heading: y.intl.string(y.t.LPJmLy) }, i), {
                  children: (0, r.jsx)(T, {
                      user: n,
                      currentUser: t,
                      guild: h,
                      guildMember: v,
                      roles: N,
                      highestRole: x.e9(h, t.id),
                      canManageRoles: A,
                      onAddRole: E,
                      onRemoveRole: C,
                  }),
              }),
          )
        : null;
}
