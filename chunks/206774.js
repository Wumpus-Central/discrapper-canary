n.d(t, { A: () => S });
var i = n(627968),
    l = n(64700),
    s = n(284009),
    r = n.n(s),
    a = n(311907),
    o = n(187322),
    d = n(58149),
    c = n(495273),
    u = n(619006),
    m = n(576705),
    g = n(954571),
    h = n(403362),
    x = n(642133),
    _ = n(555337),
    p = n(396816),
    A = n(856644),
    E = n(614164),
    f = n(28495),
    j = n(647187),
    N = n(541285),
    I = n(728713),
    C = n(927573),
    b = n(652215),
    v = n(230997);
function S(e) {
    let t,
        { editRoleId: n, setEditRoleId: s, selectedSection: S, setSelectedSection: T } = e,
        y = (0, a.bG)([p.A], () => p.A.guild, []);
    r()(null != y, "guildId cannot be null here");
    let { role: R, permissionSearchQuery: L } = (0, a.cf)(
        [p.A],
        () => ({ role: p.A.getRole(n), permissionSearchQuery: p.A.getPermissionSearchQuery() }),
        [n],
    );
    l.useEffect(() => {
        null == R && s(null);
    }, [R, s]);
    let D = (0, a.bG)([m.A], () => m.A.getHighestRole(y), [y]),
        O = (0, a.bG)([m.A], () => !m.A.isRoleHigher(y, D, R)),
        G = l.useRef(null),
        M = (0, a.bG)([_.A], () => _.A.getProps().integrations),
        k = { role: R, editRoleId: n },
        U = l.useRef(k);
    if (
        (l.useEffect(() => {
            U.current = k;
        }),
        l.useEffect(() => {
            let { role: e, editRoleId: t } = U.current,
                n = (0, A.L9)(S),
                i = x.A.getRoleMemberCount(y.id)?.[t] ?? 0;
            g.default.track(b.HAw.ROLE_PAGE_VIEWED, {
                tab_opened: n,
                is_everyone: (0, c.N8)(y.id, t),
                role_id: t,
                role_mentionable: e?.mentionable,
                role_hoist: e?.hoist,
                role_permissions: e?.permissions.toString(),
                role_num_members: i,
                ...(0, d.H$)(y.id),
            });
        }, [S, y.id, R?.id]),
        l.useEffect(() => {
            R?.id != null && (0, u.os)(y.id, R.id);
        }, [y.id, R?.id]),
        null == R)
    )
        return null;
    switch (S) {
        case C.T$.DISPLAY:
            t = (0, i.jsx)(f.Ay, { guild: y, role: R, locked: O, highestRole: D, setSelectedSection: T });
            break;
        case C.T$.PERMISSIONS:
            t = (0, i.jsx)(N.Ay, { guild: y, role: R, locked: O, setSelectedSection: T, initialSearchQuery: L });
            break;
        case C.T$.VERIFICATIONS:
            t = (0, i.jsx)(E.A, { guild: y, role: R, locked: O, setSelectedSection: T, integrations: M ?? void 0 });
            break;
        case C.T$.MEMBERS:
            t = (0, i.jsx)(j.Ay, { guild: y, role: R, locked: O, setSelectedSection: T });
            break;
        default:
            (0, h.xb)(S);
    }
    return (0, i.jsxs)("div", {
        className: v.MY,
        children: [
            (0, i.jsx)(I.A, { guild: y, currentRoleId: n, setCurrentRoleId: s, setSelectedSection: T }),
            (0, i.jsx)("div", {
                className: v.hQ,
                ref: G,
                children: (0, i.jsx)(o.xp, { containerRef: G, children: t }),
            }),
        ],
    });
}
