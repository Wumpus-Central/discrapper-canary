var n,
    s = l(477900),
    i = l(582128),
    a = l(503698),
    r = l.n(a),
    o = l(165862),
    c = l(477782),
    d = l(628284),
    u = l(265872),
    m = l(834730),
    h = l(900797),
    p = l(646514),
    g = l(847374),
    x = l(773669),
    v = l(619189);
function j(e) {
    let { items: t, onClose: l, onSelect: n, selected: i, ...a } = e;
    return (0, s.jsx)(o.W, {
        "data-menu-migrated-auto": !0,
        className: v.MK,
        navId: "global-discovery-search-filter-options",
        "aria-label": a["aria-label"],
        hideScroller: !0,
        onClose: l,
        onSelect: l,
        children: (0, s.jsx)(
            c.rX,
            {
                children: t.map((e) => {
                    let { id: t, name: l, count: a } = e;
                    return (0, s.jsx)(
                        c.Dr,
                        {
                            id: t,
                            label: l,
                            subtext: a.toLocaleString(x.default.locale),
                            icon: t === i ? d.CircleCheckIcon : void 0,
                            leadingAccessory: t === i ? { type: "icon", icon: d.CircleCheckIcon } : void 0,
                            action: () => n(t),
                        },
                        t,
                    );
                }),
            },
            "overflow-tabs",
        ),
    });
}
var C = (((n = {}).FILLED = "FILLED"), (n.TRANSPARENT = "TRANSPARENT"), n);
l.d(
    t,
    {},
    {
        A: function (e) {
            let { items: t, title: l, onSelect: n, selected: a, variant: o = "TRANSPARENT", ...c } = e,
                d = i.useRef(null),
                x = i.useMemo(
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
            return (0, s.jsx)(u.Y, {
                targetElementRef: d,
                renderPopout: (e) => {
                    let { closePopout: l } = e;
                    return (0, s.jsx)(j, {
                        selected: a,
                        onClose: l,
                        items: t,
                        onSelect: n,
                        "aria-label": c["aria-label"],
                    });
                },
                position: "bottom",
                align: "left",
                children: (e, t) => {
                    let { isShown: n } = t;
                    return (0, s.jsxs)("div", {
                        ...e,
                        ref: d,
                        className: r()(v.pb, x),
                        children: [
                            (0, s.jsx)(m.E, {
                                variant: "body-sm/medium",
                                color: "interactive-text-default",
                                children: l,
                            }),
                            n
                                ? (0, s.jsx)(h.ChevronSmallUpIcon, {
                                      size: "xs",
                                      color: p.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                  })
                                : (0, s.jsx)(g.ChevronSmallDownIcon, {
                                      size: "xs",
                                      color: p.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                  }),
                        ],
                    });
                },
            });
        },
        H: C,
    },
);
