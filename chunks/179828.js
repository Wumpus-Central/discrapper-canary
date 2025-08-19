n.d(t, { Z: () => C }), n(642613), n(388685);
var r = n(951288),
    o = n(647438),
    i = n(772848),
    l = n(924826),
    a = n(91192),
    c = n(442837),
    s = n(749210),
    d = n(434404),
    u = n(271383),
    f = n(485386),
    p = n(430824),
    m = n(496675),
    b = n(700785),
    g = n(785717),
    h = n(635042),
    x = n(256226),
    _ = n(678738),
    j = n(314172),
    v = n(981631),
    y = n(388032),
    I = n(798925);
function O(e) {
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
function Z(e, t) {
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
function P(e, t) {
    if (null == e) return {};
    var n,
        r,
        o = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                o = {},
                i = Object.keys(e);
            for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (r = 0; r < i.length; r++)
            (n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
    }
    return o;
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
        g = f && null != s,
        h = o.useRef(null),
        _ = o.useMemo(() => "roles-".concat((0, i.Z)()), []),
        T = (0, l.ZP)({
            id: _,
            isEnabled: !0,
            scrollToStart: v.Cyb,
            scrollToEnd: v.Cyb,
            wrap: !0,
        }),
        C = d.length,
        A = 0 === C ? y.intl.string(y.t["vR7M+/"]) : y.intl.formatToPlainString(y.t.PCs0oq, { numRoles: C }),
        N = d.map((e) => {
            var o;
            return (0, r.jsx)(
                x.Z,
                {
                    role: e,
                    guildId: c.id,
                    disableBorderColor: !0,
                    onRemove: () => m(e),
                    canRemove:
                        (null == (o = e.tags) ? void 0 : o.guild_connections) === null
                            ? t.id === n.id
                            : f && b.r6(c, n.id, u, e),
                },
                e.id,
            );
        });
    return (0, r.jsx)(a.bG, {
        navigator: T,
        children: (0, r.jsx)(a.SJ, {
            children: (e) => {
                var { ref: t } = e,
                    n = P(e, ["ref"]);
                return (0, r.jsxs)(
                    "div",
                    Z(
                        O(
                            {
                                className: I.root,
                                "aria-label": A,
                                ref: t,
                            },
                            n,
                        ),
                        {
                            children: [
                                N,
                                g &&
                                    (0, r.jsx)(j.Z, {
                                        buttonRef: h,
                                        guild: c,
                                        guildMember: s,
                                        numRoles: C,
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
function C(e) {
    var { user: t, currentUser: n, guildId: i } = e,
        l = P(e, ["user", "currentUser", "guildId"]);
    let { trackUserProfileAction: a } = (0, g.KZ)(),
        x = (0, c.e7)([p.Z], () => p.Z.getGuild(i)),
        j = (0, c.e7)([u.ZP], () => u.ZP.getMember(i, t.id)),
        I = null == j ? void 0 : j.roles,
        C = (0, c.Wu)([f.Z], () => f.Z.getManyRoles(i, null != I ? I : []).sort(h.Z), [I, i]),
        [A] = (0, c.Wu)([m.Z], () => [m.Z.can(v.Plq.MANAGE_ROLES, x), m.Z.getGuildVersion(i)]),
        N = o.useCallback(
            (e) => {
                var n, r;
                a({ action: "REMOVE_ROLE" });
                let o = null != (r = null == I ? void 0 : I.filter((t) => t !== e.id)) ? r : [];
                (null == (n = e.tags) ? void 0 : n.guild_connections) === null
                    ? s.Z.unassignGuildRoleConnection(i, e.id)
                    : d.Z.updateMemberRoles(i, t.id, o, [], [e.id]);
            },
            [I, i, t.id, a],
        ),
        E = o.useCallback(
            (e) => {
                a({ action: "ADD_ROLE" });
                let n = null != I ? I : [];
                n.includes(e) || (n = [...n, e]), d.Z.updateMemberRoles(i, t.id, n, [e], []);
            },
            [I, i, t.id, a],
        );
    if (null == x) return null;
    let S = A && null != j;
    return 0 !== C.length || S
        ? (0, r.jsx)(
              _.Z,
              Z(O({ heading: y.intl.string(y.t.LPJmLy) }, l), {
                  children: (0, r.jsx)(T, {
                      user: t,
                      currentUser: n,
                      guild: x,
                      guildMember: j,
                      roles: C,
                      highestRole: b.e9(x, n.id),
                      canManageRoles: A,
                      onAddRole: E,
                      onRemoveRole: N,
                  }),
              }),
          )
        : null;
}
