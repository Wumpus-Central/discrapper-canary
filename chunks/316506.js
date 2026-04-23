n.d(t, { A: () => C, u: () => I });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    r = n(834730),
    a = n(939249),
    o = n(365199),
    d = n(512950),
    c = n(696986),
    u = n(761508),
    m = n(442433),
    g = n(145643),
    h = n(665013),
    x = n(34457),
    _ = n(642133),
    p = n(458334),
    A = n(927573),
    E = n(652215),
    f = n(985018),
    j = n(452832),
    N = n(602535);
function I() {
    let [e, t] = l.useState(!0);
    return {
        scrolledToTop: e,
        handleScroll: function (e) {
            t(0 === e.currentTarget.scrollTop);
        },
    };
}
function C(e) {
    let { guild: t, role: I, selectedSection: C, setSelectedSection: b } = e,
        v = l.useCallback(
            (e) => {
                b(e);
            },
            [b],
        ),
        S = (0, s.bG)([_.A], () => _.A.getRoleMemberCount(t.id)?.[I.id], [I.id, t.id]),
        T = (0, x.Oy)(I),
        y = (0, p.A)(t.id, I),
        R = (0, s.bG)([g.A], () => {
            let e = g.A.getGuildRoleConnectionsConfiguration(I.id);
            return (
                null != e &&
                e.some((e) =>
                    e.some(
                        (e) => e.connectionType === E.fg2.RIOT_GAMES || e.connectionType === E.fg2.LEAGUE_OF_LEGENDS,
                    ),
                )
            );
        });
    l.useEffect(() => {
        T && b(A.T$.PERMISSIONS);
    }, [T, b]);
    let L = (0, h.x)(t, I);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: N.gn,
                children: [
                    (0, i.jsx)(r.E, {
                        className: N.Qw,
                        color: "text-strong",
                        variant: "text-md/semibold",
                        children: f.intl.format(f.t.BUdGkE, { roleName: I.name }),
                    }),
                    L
                        ? (0, i.jsx)(a.D, {
                              className: N.MK,
                              onClick: function (e) {
                                  (0, m.L3)(e, async () => {
                                      let { default: e } = await Promise.resolve().then(n.bind(n, 665013));
                                      return (n) => (0, i.jsx)(e, { ...n, guild: t, role: I });
                                  });
                              },
                              "aria-label": f.intl.string(f.t.PdRCRg),
                              children: (0, i.jsx)(o.j, { size: "md", color: "currentColor" }),
                          })
                        : null,
                ],
            }),
            (0, i.jsxs)("div", {
                className: N.QR,
                children: [
                    null != y ? (0, i.jsx)(d.p, { messageType: d.Y.WARNING, children: y }) : null,
                    R
                        ? (0, i.jsx)(d.p, { messageType: d.Y.WARNING, children: f.intl.format(j.default.sbMMtk, {}) })
                        : null,
                ],
            }),
            (0, i.jsx)(c.h, { size: 6 }),
            (0, i.jsxs)(u.V, {
                className: N.$H,
                "aria-label": f.intl.string(f.t["+1H47t"]),
                selectedItem: C,
                type: "top",
                look: "brand",
                onItemSelect: v,
                children: [
                    (0, i.jsx)(u.V.Item, {
                        className: N.YU,
                        id: A.T$.DISPLAY,
                        disabled: T,
                        children: f.intl.string(f.t.hmdomw),
                    }),
                    (0, i.jsx)(u.V.Item, {
                        className: N.YU,
                        id: A.T$.PERMISSIONS,
                        children: f.intl.string(f.t.WIDE1L),
                    }),
                    (0, i.jsx)(u.V.Item, {
                        className: N.YU,
                        id: A.T$.VERIFICATIONS,
                        disabled: T,
                        children: f.intl.string(f.t["5//Muu"]),
                    }),
                    (0, i.jsx)(u.V.Item, {
                        className: N.YU,
                        id: A.T$.MEMBERS,
                        disabled: T,
                        children: T
                            ? f.intl.string(f.t["kg//+7"])
                            : f.intl.formatToPlainString(f.t.bHnZWW, { numMembers: String(S) }),
                    }),
                ],
            }),
        ],
    });
}
