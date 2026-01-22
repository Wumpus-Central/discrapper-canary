n.d(t, {
    A: () => b,
    l: () => g,
});
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(397927),
    o = n(442433),
    l = n(485947),
    c = n(708197),
    u = n(435738),
    d = n(38055),
    f = n(495744),
    p = n(652215),
    _ = n(985018),
    h = n(792039),
    m = n(701939);

function g(e) {
    return (null == e ? void 0 : e.id) === f.C;
}

function E(e) {
    let { title: t, onToggleExpand: f, expanded: g, expandedCount: E } = e,
        b = (0, a.bG)([u.A], () => u.A.hidden),
        y = i.useCallback((e) => {
            (0, o.L3)(e, async () => {
                let { MemberListContentSettingsMenu: e } = await Promise.resolve().then(n.bind(n, 38055));
                return () =>
                    (0, r.jsx)(e, {
                        closePopout: o.Z_,
                    });
            });
        }, []),
        O = () => {
            let e;
            return E <= 3 && !b
                ? null
                : ((e = b
                      ? (0, r.jsx)(s.tN5, {
                            className: h.wT,
                        })
                      : g
                        ? (0, r.jsx)(s.abt, {
                              className: h.wT,
                          })
                        : (0, r.jsx)(s._BQ, {
                              className: h.wT,
                          })),
                  (0, r.jsx)(s.vN3, {
                      children: (0, r.jsx)("div", {
                          tabIndex: 0,
                          className: h.wT,
                          children: e,
                      }),
                  }));
        };
    return (0, r.jsxs)(l.A, {
        className: m.lL,
        children: [
            (0, r.jsx)(s.AC4, {
                children: _.intl.format(_.t.Uaqbke, {
                    title: t,
                    count: E,
                }),
            }),
            (0, r.jsxs)(s.DUT, {
                onClick: (e) => {
                    if (e.currentTarget === e.target || e.currentTarget.contains(e.target))
                        return b ? (0, c.Il)() : E > 3 ? f() : (0, p.tEg)();
                },
                onContextMenu: y,
                tag: "span",
                "aria-hidden": !0,
                className: h.N1,
                children: [
                    (0, r.jsxs)("div", {
                        className: h.wx,
                        children: [
                            (0, r.jsxs)("span", {
                                children: [t, " — ", E],
                            }),
                            (0, r.jsx)(d.A, {}),
                        ],
                    }),
                    O(),
                ],
            }),
        ],
    });
}
let b = i.memo(E);
