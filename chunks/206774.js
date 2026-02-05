"use strict";
n.d(t, { A: () => v });
var i = n(627968),
    s = n(64700),
    l = n(284009),
    r = n.n(l),
    a = n(311907),
    o = n(397927),
    d = n(58149),
    c = n(495273),
    u = n(619006),
    m = n(576705),
    g = n(954571),
    x = n(403362),
    h = n(642133),
    _ = n(555337),
    A = n(396816),
    p = n(856644),
    f = n(614164),
    j = n(28495),
    N = n(869568),
    E = n(541285),
    b = n(728713),
    T = n(927573),
    C = n(652215),
    I = n(326028);
function v(e) {
    let t,
        { editRoleId: n, setEditRoleId: l, selectedSection: v, setSelectedSection: S } = e,
        y = (0, a.bG)([A.A], () => A.A.guild, []);
    r()(null != y, "guildId cannot be null here");
    let { role: R, permissionSearchQuery: O } = (0, a.cf)(
        [A.A],
        () => ({ role: A.A.getRole(n), permissionSearchQuery: A.A.getPermissionSearchQuery() }),
        [n],
    );
    s.useEffect(() => {
        null == R && l(null);
    }, [R, l]);
    let G = (0, a.bG)([m.A], () => m.A.getHighestRole(y), [y]),
        L = (0, a.bG)([m.A], () => !m.A.isRoleHigher(y, G, R)),
        D = s.useRef(null),
        M = (0, a.bG)([_.A], () => _.A.getProps().integrations),
        k = { role: R, editRoleId: n },
        U = s.useRef(k);
    if (
        (s.useEffect(() => {
            U.current = k;
        }),
        s.useEffect(() => {
            let { role: e, editRoleId: t } = U.current,
                n = (0, p.L9)(v),
                i = h.A.getRoleMemberCount(y.id)?.[t] ?? 0;
            g.default.track(C.HAw.ROLE_PAGE_VIEWED, {
                tab_opened: n,
                is_everyone: (0, c.N8)(y.id, t),
                role_id: t,
                role_mentionable: e?.mentionable,
                role_hoist: e?.hoist,
                role_permissions: e?.permissions.toString(),
                role_num_members: i,
                ...(0, d.H$)(y.id),
            });
        }, [v, y.id, R?.id]),
        s.useEffect(() => {
            R?.id != null && (0, u.os)(y.id, R.id);
        }, [y.id, R?.id]),
        null == R)
    )
        return null;
    switch (v) {
        case T.T$.DISPLAY:
            t = (0, i.jsx)(j.Ay, { guild: y, role: R, locked: L, highestRole: G, setSelectedSection: S });
            break;
        case T.T$.PERMISSIONS:
            t = (0, i.jsx)(E.Ay, { guild: y, role: R, locked: L, setSelectedSection: S, initialSearchQuery: O });
            break;
        case T.T$.VERIFICATIONS:
            t = (0, i.jsx)(f.A, { guild: y, role: R, locked: L, setSelectedSection: S, integrations: M ?? void 0 });
            break;
        case T.T$.MEMBERS:
            t = (0, i.jsx)(N.Ay, { guild: y, role: R, locked: L, setSelectedSection: S });
            break;
        default:
            (0, x.xb)(v);
    }
    return (0, i.jsxs)("div", {
        className: I.MY,
        children: [
            (0, i.jsx)(b.A, { guild: y, currentRoleId: n, setCurrentRoleId: l, setSelectedSection: S }),
            (0, i.jsx)("div", {
                className: I.hQ,
                ref: D,
                children: (0, i.jsx)(o.xpW, { containerRef: D, children: t }),
            }),
        ],
    });
}
