var i,
    n = l(477900),
    s = l(582128),
    a = l(503698),
    r = l.n(a),
    o = l(165862),
    c = l(477782),
    d = l(628284),
    u = l(265872),
    h = l(834730),
    m = l(900797),
    p = l(646514),
    g = l(847374),
    x = l(773669),
    v = l(619189);
function j(e) {
    let { items: t, onClose: l, onSelect: i, selected: s, ...a } = e;
    return (0, n.jsx)(o.W, {
        "data-menu-migrated-auto": !0,
        className: v.MK,
        navId: "global-discovery-search-filter-options",
        "aria-label": a["aria-label"],
        hideScroller: !0,
        onClose: l,
        onSelect: l,
        children: (0, n.jsx)(
            c.rX,
            {
                children: t.map((e) => {
                    let { id: t, name: l, count: a } = e;
                    return (0, n.jsx)(
                        c.Dr,
                        {
                            id: t,
                            label: l,
                            subtext: a.toLocaleString(x.default.locale),
                            icon: t === s ? d.CircleCheckIcon : void 0,
                            leadingAccessory: t === s ? { type: "icon", icon: d.CircleCheckIcon } : void 0,
                            action: () => i(t),
                        },
                        t,
                    );
                }),
            },
            "overflow-tabs",
        ),
    });
}
var A = (((i = {}).FILLED = "FILLED"), (i.TRANSPARENT = "TRANSPARENT"), i);
l.d(
    t,
    {},
    {
        A: function (e) {
            let { items: t, title: l, onSelect: i, selected: a, variant: o = "TRANSPARENT", ...c } = e,
                d = s.useRef(null),
                x = s.useMemo(
                    () =>
                        (function (e) {
                            switch (e) {
                                case "FILLED":
                                    return v.PC;
                                case "TRANSPARENT":
                                    return;
                            }
                        })(o),
                    [o],
                );
            return (0, n.jsx)(u.Y, {
                targetElementRef: d,
                renderPopout: (e) => {
                    let { closePopout: l } = e;
                    return (0, n.jsx)(j, {
                        selected: a,
                        onClose: l,
                        items: t,
                        onSelect: i,
                        "aria-label": c["aria-label"],
                    });
                },
                position: "bottom",
                align: "left",
                children: (e, t) => {
                    let { isShown: i } = t;
                    return (0, n.jsxs)("div", {
                        ...e,
                        ref: d,
                        className: r()(v.pb, x),
                        children: [
                            (0, n.jsx)(h.E, {
                                variant: "body-sm/medium",
                                color: "interactive-text-default",
                                children: l,
                            }),
                            i
                                ? (0, n.jsx)(m.ChevronSmallUpIcon, {
                                      size: "xs",
                                      color: p.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                  })
                                : (0, n.jsx)(g.ChevronSmallDownIcon, {
                                      size: "xs",
                                      color: p.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                  }),
                        ],
                    });
                },
            });
        },
        H: A,
    },
);
