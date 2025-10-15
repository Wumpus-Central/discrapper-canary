t.d(n, { Z: () => A }), t(642613), t(388685);
var l = t(951288),
    i = t(647438),
    r = t(772848),
    o = t(924826),
    s = t(91192),
    a = t(442837),
    c = t(749210),
    d = t(434404),
    u = t(271383),
    m = t(485386),
    p = t(430824),
    f = t(496675),
    h = t(700785),
    x = t(785717),
    j = t(635042),
    v = t(256226),
    g = t(678738),
    b = t(314172),
    I = t(981631),
    y = t(388032),
    Z = t(798925);
function O(e) {
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
function P(e, n) {
    if (null == e) return {};
    var t,
        l,
        i = (function (e, n) {
            if (null == e) return {};
            var t,
                l,
                i = {},
                r = Object.keys(e);
            for (l = 0; l < r.length; l++) (t = r[l]), n.indexOf(t) >= 0 || (i[t] = e[t]);
            return i;
        })(e, n);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        for (l = 0; l < r.length; l++)
            (t = r[l]), !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t]);
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
        x = m && null != c,
        j = i.useRef(null),
        g = i.useMemo(() => "roles-".concat((0, r.Z)()), []),
        T = (0, o.ZP)({
            id: g,
            isEnabled: !0,
            scrollToStart: I.Cyb,
            scrollToEnd: I.Cyb,
            wrap: !0,
        }),
        A = d.length,
        E = 0 === A ? y.intl.string(y.t["vR7M+/"]) : y.intl.formatToPlainString(y.t.PCs0oq, { numRoles: A }),
        S = d.map((e) => {
            var i;
            return (0, l.jsx)(
                v.Z,
                {
                    role: e,
                    guildId: a.id,
                    disableBorderColor: !0,
                    onRemove: () => f(e),
                    canRemove:
                        (null == (i = e.tags) ? void 0 : i.guild_connections) === null
                            ? n.id === t.id
                            : m && h.r6(a, t.id, u, e),
                },
                e.id,
            );
        });
    return (0, l.jsx)(s.bG, {
        navigator: T,
        children: (0, l.jsx)(s.SJ, {
            children: (e) => {
                var { ref: n } = e,
                    t = P(e, ["ref"]);
                return (0, l.jsxs)(
                    "div",
                    N(
                        O(
                            {
                                className: Z.root,
                                "aria-label": E,
                                ref: n,
                            },
                            t,
                        ),
                        {
                            children: [
                                S,
                                x &&
                                    (0, l.jsx)(b.Z, {
                                        buttonRef: j,
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
    var { user: n, currentUser: t, guildId: r } = e,
        o = P(e, ["user", "currentUser", "guildId"]);
    let { trackUserProfileAction: s } = (0, x.KZ)(),
        v = (0, a.e7)([p.Z], () => p.Z.getGuild(r)),
        b = (0, a.e7)([u.ZP], () => u.ZP.getMember(r, n.id)),
        Z = null == b ? void 0 : b.roles,
        A = (0, a.Wu)([m.Z], () => m.Z.getManyRoles(r, null != Z ? Z : []).sort(j.Z), [Z, r]),
        [E] = (0, a.Wu)([f.Z], () => [f.Z.can(I.Plq.MANAGE_ROLES, v), f.Z.getGuildVersion(r)]),
        S = i.useCallback(
            (e) => {
                var t, l;
                s({ action: "REMOVE_ROLE" });
                let i = null != (l = null == Z ? void 0 : Z.filter((n) => n !== e.id)) ? l : [];
                (null == (t = e.tags) ? void 0 : t.guild_connections) === null
                    ? c.Z.unassignGuildRoleConnection(r, e.id)
                    : d.Z.updateMemberRoles(r, n.id, i, [], [e.id]);
            },
            [Z, r, n.id, s],
        ),
        C = i.useCallback(
            (e) => {
                s({ action: "ADD_ROLE" });
                let t = null != Z ? Z : [];
                t.includes(e) || (t = [...t, e]), d.Z.updateMemberRoles(r, n.id, t, [e], []);
            },
            [Z, r, n.id, s],
        );
    if (null == v) return null;
    let _ = E && null != b;
    return 0 !== A.length || _
        ? (0, l.jsx)(
              g.Z,
              N(O({ heading: y.intl.string(y.t.LPJmLy) }, o), {
                  children: (0, l.jsx)(T, {
                      user: n,
                      currentUser: t,
                      guild: v,
                      guildMember: b,
                      roles: A,
                      highestRole: h.e9(v, t.id),
                      canManageRoles: E,
                      onAddRole: C,
                      onRemoveRole: S,
                  }),
              }),
          )
        : null;
}
