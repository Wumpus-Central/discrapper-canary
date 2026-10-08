t.d(e, { A: () => j });
var n = t(477900);
t(582128);
var o = t(17928),
    r = t(545442),
    i = t(376357),
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
    R = t(403362),
    b = t(652215),
    y = t(660183),
    m = t(798819);
function E(l, e, t) {
    return {
        type: "roleDot",
        variant: "dot" === e ? "dot" : "circle",
        color: l.colorString ?? b.TpD,
        colors: t ? l.colorStrings : null,
    };
}
function _(l, e, t) {
    let o = l.colorString ?? b.TpD,
        i = t ? l.colorStrings : null;
    return (0, n.jsx)("div", {
        className: m.roleDotAccessory,
        children:
            "dot" === e
                ? (0, n.jsx)(r.W, { color: o, colors: i, background: !1, tooltip: !1 })
                : (0, n.jsx)(r.R, { color: o, colors: i ?? null }),
    });
}
function j(l, e) {
    let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        m = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        j = (0, o.bG)([p.A], () => p.A.getGuild(e)),
        x = (0, o.bG)([h.A], () => h.A.getSortedRoles(e)),
        D = (0, o.bG)([s.Ay], () => s.Ay.roleStyle),
        S = (0, d.$9)(e, { location: r, targetUserId: l }),
        {
            userRoles: k,
            isGuildMember: v,
            canManageRoles: L,
        } = (0, o.cf)(
            [A.Ay, f.A],
            () => {
                let t = A.Ay.getMember(e, l);
                return {
                    userRoles: null != t ? t.roles : [],
                    isGuildMember: null != t,
                    canManageRoles: null != j && f.A.can(b.xBc.MANAGE_ROLES, j),
                };
            },
            [l, e, j],
        ),
        M = (0, u.Ay)(e, l);
    if (__OVERLAY__ || null == k || null == j || !v) return null;
    async function O(t) {
        let n = k.includes(t.id);
        try {
            (n
                ? await a.default.updateMemberRoles(
                      e,
                      l,
                      k.filter((l) => l !== t.id),
                      [],
                      [t.id],
                  )
                : await a.default.updateMemberRoles(e, l, k.concat([t.id]), [t.id], []),
                S(n ? d.Nj.REMOVE_ROLE : d.Nj.ADD_ROLE));
        } catch {
            (0, i.P0)((0, i.ox)(y.intl.string(y.t.fEptJP), i.Ck.FAILURE));
        }
    }
    let G = f.A.getHighestRole(j),
        w =
            L && !m
                ? x.map((l) => {
                      if ((0, g.Oy)(l)) return null;
                      let e = l.managed || !f.A.isRoleHigher(j, G, l),
                          t = k.includes(l.id);
                      return e && !t
                          ? null
                          : (0, n.jsx)(
                                c.sL,
                                {
                                    id: l.id,
                                    leadingAccessory: E(l, D, M),
                                    leftIcon: _(l, D, M),
                                    label: l.name,
                                    disabled: e,
                                    action: () => O(l),
                                    checked: t,
                                },
                                l.id,
                            );
                  })
                : x.map((l) =>
                      (0, g.Oy)(l) || !k.includes(l.id)
                          ? null
                          : (0, n.jsx)(
                                c.Dr,
                                { id: l.id, leadingAccessory: E(l, D, M), iconLeft: _(l, D, M), label: l.name },
                                l.id,
                            ),
                  );
    return 0 === (w = w.filter(R.Vq)).length
        ? null
        : t
          ? w
          : (0, n.jsx)(c.Dr, {
                id: "roles",
                label: y.intl.formatToPlainString(y.t.PCs0oo, { numRoles: w.length }),
                children: w,
            });
}
