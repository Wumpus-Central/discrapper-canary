"use strict";
n.d(t, { A: () => _, u: () => h });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(397927),
    a = n(442433),
    o = n(665013),
    d = n(34457),
    c = n(642133),
    u = n(458334),
    m = n(927573),
    g = n(985018),
    x = n(146583);
function h() {
    let [e, t] = s.useState(!0);
    return {
        scrolledToTop: e,
        handleScroll: function (e) {
            t(0 === e.currentTarget.scrollTop);
        },
    };
}
function _(e) {
    let { guild: t, role: h, selectedSection: _, setSelectedSection: p } = e,
        A = s.useCallback(
            (e) => {
                p(e);
            },
            [p],
        ),
        f = (0, l.bG)([c.A], () => c.A.getRoleMemberCount(t.id)?.[h.id], [h.id, t.id]),
        j = (0, d.Oy)(h),
        N = (0, u.A)(t.id, h);
    s.useEffect(() => {
        j && p(m.T$.PERMISSIONS);
    }, [j, p]);
    let E = (0, o.x)(t, h);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: x.gn,
                children: [
                    (0, i.jsx)(r.Text, {
                        className: x.Qw,
                        color: "text-strong",
                        variant: "text-md/semibold",
                        children: g.intl.format(g.t.BUdGkE, { roleName: h.name }),
                    }),
                    E
                        ? (0, i.jsx)(r.DUT, {
                              className: x.MK,
                              onClick: function (e) {
                                  (0, a.L3)(e, async () => {
                                      let { default: e } = await Promise.resolve().then(n.bind(n, 665013));
                                      return (n) => (0, i.jsx)(e, { ...n, guild: t, role: h });
                                  });
                              },
                              "aria-label": g.intl.string(g.t.PdRCRg),
                              children: (0, i.jsx)(r.jNK, { size: "md", color: "currentColor" }),
                          })
                        : null,
                ],
            }),
            null != N ? (0, i.jsx)(r.po8, { messageType: r.YCn.WARNING, children: N }) : null,
            (0, i.jsx)(r.hKd, { size: 6 }),
            (0, i.jsxs)(r.VQ0, {
                className: x.$H,
                "aria-label": g.intl.string(g.t["+1H47t"]),
                selectedItem: _,
                type: "top",
                look: "brand",
                onItemSelect: A,
                children: [
                    (0, i.jsx)(r.VQ0.Item, {
                        className: x.YU,
                        id: m.T$.DISPLAY,
                        disabled: j,
                        children: g.intl.string(g.t.hmdomw),
                    }),
                    (0, i.jsx)(r.VQ0.Item, {
                        className: x.YU,
                        id: m.T$.PERMISSIONS,
                        children: g.intl.string(g.t.WIDE1L),
                    }),
                    (0, i.jsx)(r.VQ0.Item, {
                        className: x.YU,
                        id: m.T$.VERIFICATIONS,
                        disabled: j,
                        children: g.intl.string(g.t["5//Muu"]),
                    }),
                    (0, i.jsx)(r.VQ0.Item, {
                        className: x.YU,
                        id: m.T$.MEMBERS,
                        disabled: j,
                        children: j
                            ? g.intl.string(g.t["kg//+7"])
                            : g.intl.formatToPlainString(g.t.bHnZWW, { numMembers: String(f) }),
                    }),
                ],
            }),
        ],
    });
}
