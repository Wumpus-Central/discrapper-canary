t.d(n, { Z: () => A }), t(642613), t(388685);
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
    b = t(700785),
    x = t(785717),
    g = t(635042),
    h = t(256226),
    j = t(678738),
    v = t(314172),
    _ = t(981631),
    y = t(388032),
    I = t(798925);
function O(e) {
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
function P(e, n) {
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
function Z(e, n) {
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
        x = f && null != s,
        g = o.useRef(null),
        j = o.useMemo(() => "roles-".concat((0, l.Z)()), []),
        T = (0, i.ZP)({
            id: j,
            isEnabled: !0,
            scrollToStart: _.Cyb,
            scrollToEnd: _.Cyb,
            wrap: !0,
        }),
        A = d.length,
        N = 0 === A ? y.intl.string(y.t["vR7M+/"]) : y.intl.formatToPlainString(y.t.PCs0oq, { numRoles: A }),
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
                            : f && b.r6(a, t.id, u, e),
                },
                e.id,
            );
        });
    return (0, r.jsx)(c.bG, {
        navigator: T,
        children: (0, r.jsx)(c.SJ, {
            children: (e) => {
                var { ref: n } = e,
                    t = Z(e, ["ref"]);
                return (0, r.jsxs)(
                    "div",
                    P(
                        O(
                            {
                                className: I.root,
                                "aria-label": N,
                                ref: n,
                            },
                            t,
                        ),
                        {
                            children: [
                                C,
                                x &&
                                    (0, r.jsx)(v.Z, {
                                        buttonRef: g,
                                        guild: a,
                                        guildMember: s,
                                        numRoles: A,
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
function A(e) {
    var { user: n, currentUser: t, guildId: l } = e,
        i = Z(e, ["user", "currentUser", "guildId"]);
    let { trackUserProfileAction: c } = (0, x.KZ)(),
        h = (0, a.e7)([m.Z], () => m.Z.getGuild(l)),
        v = (0, a.e7)([u.ZP], () => u.ZP.getMember(l, n.id)),
        I = null == v ? void 0 : v.roles,
        A = (0, a.Wu)([f.Z], () => f.Z.getManyRoles(l, null != I ? I : []).sort(g.Z), [I, l]),
        [N] = (0, a.Wu)([p.Z], () => [p.Z.can(_.Plq.MANAGE_ROLES, h), p.Z.getGuildVersion(l)]),
        C = o.useCallback(
            (e) => {
                var t, r;
                c({ action: "REMOVE_ROLE" });
                let o = null != (r = null == I ? void 0 : I.filter((n) => n !== e.id)) ? r : [];
                (null == (t = e.tags) ? void 0 : t.guild_connections) === null
                    ? s.Z.unassignGuildRoleConnection(l, e.id)
                    : d.Z.updateMemberRoles(l, n.id, o, [], [e.id]);
            },
            [I, l, n.id, c],
        ),
        E = o.useCallback(
            (e) => {
                c({ action: "ADD_ROLE" });
                let t = null != I ? I : [];
                t.includes(e) || (t = [...t, e]), d.Z.updateMemberRoles(l, n.id, t, [e], []);
            },
            [I, l, n.id, c],
        );
    if (null == h) return null;
    let S = N && null != v;
    return 0 !== A.length || S
        ? (0, r.jsx)(
              j.Z,
              P(O({ heading: y.intl.string(y.t.LPJmLy) }, i), {
                  children: (0, r.jsx)(T, {
                      user: n,
                      currentUser: t,
                      guild: h,
                      guildMember: v,
                      roles: A,
                      highestRole: b.e9(h, t.id),
                      canManageRoles: N,
                      onAddRole: E,
                      onRemoveRole: C,
                  }),
              }),
          )
        : null;
}
