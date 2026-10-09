t.d(e, { A: () => v });
var n = t(477900);
t(582128);
var r = t(17928),
    i = t(545442),
    o = t(858899),
    c = t(477782),
    s = t(775602),
    d = t(504049),
    a = t(468689),
    u = t(676608),
    g = t(34457),
    A = t(696451),
    h = t(317525),
    p = t(71393),
    f = t(576705),
    b = t(403362),
    y = t(652215),
    R = t(660183),
    m = t(798819);
function _(l, e, t) {
    return {
        type: "roleDot",
        variant: "dot" === e ? "dot" : "circle",
        color: l.colorString ?? y.TpD,
        colors: t ? l.colorStrings : null,
    };
}
function j(l, e, t) {
    let r = l.colorString ?? y.TpD,
        o = t ? l.colorStrings : null;
    return (0, n.jsx)("div", {
        className: m.roleDotAccessory,
        children:
            "dot" === e
                ? (0, n.jsx)(i.W, { color: r, colors: o, background: !1, tooltip: !1 })
                : (0, n.jsx)(i.R, { color: r, colors: o ?? null }),
    });
}
function v(l, e) {
    let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        m = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        v = (0, r.bG)([p.A], () => p.A.getGuild(e)),
        x = (0, r.bG)([h.A], () => h.A.getSortedRoles(e)),
        D = (0, r.bG)([s.Ay], () => s.Ay.roleStyle),
        E = (0, d.$9)(e, { location: i, targetUserId: l }),
        {
            userRoles: S,
            isGuildMember: M,
            canManageRoles: O,
        } = (0, r.cf)(
            [A.Ay, f.A],
            () => {
                let t = A.Ay.getMember(e, l);
                return {
                    userRoles: null != t ? t.roles : [],
                    isGuildMember: null != t,
                    canManageRoles: null != v && f.A.can(y.xBc.MANAGE_ROLES, v),
                };
            },
            [l, e, v],
        ),
        k = (0, u.Ay)(e, l);
    if (__OVERLAY__ || null == S || null == v || !M) return null;
    async function G(t) {
        let n = S.includes(t.id);
        try {
            (n
                ? await a.default.updateMemberRoles(
                      e,
                      l,
                      S.filter((l) => l !== t.id),
                      [],
                      [t.id],
                  )
                : await a.default.updateMemberRoles(e, l, S.concat([t.id]), [t.id], []),
                E(n ? d.Nj.REMOVE_ROLE : d.Nj.ADD_ROLE));
        } catch {
            (0, o.P0)({ text: R.intl.string(R.t.fEptJP), variant: "critical" });
        }
    }
    let L = f.A.getHighestRole(v),
        w =
            O && !m
                ? x.map((l) => {
                      if ((0, g.Oy)(l)) return null;
                      let e = l.managed || !f.A.isRoleHigher(v, L, l),
                          t = S.includes(l.id);
                      return e && !t
                          ? null
                          : (0, n.jsx)(
                                c.sL,
                                {
                                    id: l.id,
                                    leadingAccessory: _(l, D, k),
                                    leftIcon: j(l, D, k),
                                    label: l.name,
                                    disabled: e,
                                    action: () => G(l),
                                    checked: t,
                                },
                                l.id,
                            );
                  })
                : x.map((l) =>
                      (0, g.Oy)(l) || !S.includes(l.id)
                          ? null
                          : (0, n.jsx)(
                                c.Dr,
                                { id: l.id, leadingAccessory: _(l, D, k), iconLeft: j(l, D, k), label: l.name },
                                l.id,
                            ),
                  );
    return 0 === (w = w.filter(b.Vq)).length
        ? null
        : t
          ? w
          : (0, n.jsx)(c.Dr, {
                id: "roles",
                label: R.intl.formatToPlainString(R.t.PCs0oo, { numRoles: w.length }),
                children: w,
            });
}
