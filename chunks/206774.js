n.d(t, { A: () => S });
var r = n(627968),
    i = n(64700),
    l = n(284009),
    s = n.n(l),
    a = n(311907),
    c = n(397927),
    o = n(58149),
    d = n(495273),
    u = n(619006),
    f = n(576705),
    g = n(954571),
    b = n(403362),
    m = n(642133),
    p = n(555337),
    x = n(396816),
    h = n(856644),
    j = n(614164),
    O = n(28495),
    y = n(869568),
    v = n(541285),
    A = n(728713),
    E = n(927573),
    N = n(652215),
    _ = n(326028);
function S(e) {
    let t,
        { editRoleId: n, setEditRoleId: l, selectedSection: S, setSelectedSection: T } = e,
        I = (0, a.bG)([x.A], () => x.A.guild, []);
    s()(null != I, "guildId cannot be null here");
    let { role: C, permissionSearchQuery: P } = (0, a.cf)(
        [x.A],
        () => ({
            role: x.A.getRole(n),
            permissionSearchQuery: x.A.getPermissionSearchQuery(),
        }),
        [n],
    );
    i.useEffect(() => {
        null == C && l(null);
    }, [C, l]);
    let w = (0, a.bG)([f.A], () => f.A.getHighestRole(I), [I]),
        R = (0, a.bG)([f.A], () => !f.A.isRoleHigher(I, w, C)),
        D = i.useRef(null),
        G = (0, a.bG)([p.A], () => p.A.getProps().integrations),
        L = {
            role: C,
            editRoleId: n,
        },
        k = i.useRef(L);
    if (
        (i.useEffect(() => {
            k.current = L;
        }),
        i.useEffect(() => {
            var e, t;
            let { role: n, editRoleId: r } = k.current,
                i = (0, h.L9)(S),
                l = null != (e = null == (t = m.A.getRoleMemberCount(I.id)) ? void 0 : t[r]) ? e : 0;
            g.default.track(
                N.HAw.ROLE_PAGE_VIEWED,
                (function (e) {
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
                })(
                    {
                        tab_opened: i,
                        is_everyone: (0, d.N8)(I.id, r),
                        role_id: r,
                        role_mentionable: null == n ? void 0 : n.mentionable,
                        role_hoist: null == n ? void 0 : n.hoist,
                        role_permissions: null == n ? void 0 : n.permissions.toString(),
                        role_num_members: l,
                    },
                    (0, o.H$)(I.id),
                ),
            );
        }, [S, I.id, null == C ? void 0 : C.id]),
        i.useEffect(() => {
            (null == C ? void 0 : C.id) != null && (0, u.os)(I.id, C.id);
        }, [I.id, null == C ? void 0 : C.id]),
        null == C)
    )
        return null;
    switch (S) {
        case E.T$.DISPLAY:
            t = (0, r.jsx)(O.Ay, {
                guild: I,
                role: C,
                locked: R,
                highestRole: w,
                setSelectedSection: T,
            });
            break;
        case E.T$.PERMISSIONS:
            t = (0, r.jsx)(v.Ay, {
                guild: I,
                role: C,
                locked: R,
                setSelectedSection: T,
                initialSearchQuery: P,
            });
            break;
        case E.T$.VERIFICATIONS:
            t = (0, r.jsx)(j.A, {
                guild: I,
                role: C,
                locked: R,
                setSelectedSection: T,
                integrations: null != G ? G : void 0,
            });
            break;
        case E.T$.MEMBERS:
            t = (0, r.jsx)(y.Ay, {
                guild: I,
                role: C,
                locked: R,
                setSelectedSection: T,
            });
            break;
        default:
            (0, b.xb)(S);
    }
    return (0, r.jsxs)("div", {
        className: _.MY,
        children: [
            (0, r.jsx)(A.A, {
                guild: I,
                currentRoleId: n,
                setCurrentRoleId: l,
                setSelectedSection: T,
            }),
            (0, r.jsx)("div", {
                className: _.hQ,
                ref: D,
                children: (0, r.jsx)(c.xpW, {
                    containerRef: D,
                    children: t,
                }),
            }),
        ],
    });
}
