n.d(i, { A: () => A });
var l = n(627968),
    r = n(64700),
    t = n(311907),
    d = n(477782),
    o = n(406810),
    a = n(848847),
    s = n(148810),
    c = n(521502),
    u = n(380610),
    y = n(390486),
    v = n(540999),
    p = n(985018),
    g = n(484003);
function A() {
    let e = (0, t.bG)([c.A], () => ((0, u.kK)() ? c.A.getCurrentBuildOverride().overrides?.discord_web : null)),
        i = (0, t.bG)([v.A], () => v.A.isDeveloper),
        n = r.useMemo(() => (i ? (0, y.H)() : []), [i]),
        [A, b] = r.useState(!1),
        h = async (i) => {
            if (null == i || i.id !== e?.id)
                try {
                    b(!0),
                        (null != i ? await (0, s.oA)(i.payload) : await (0, s.iD)()).ok && window.location.reload(!0);
                } finally {
                    b(!1);
                }
        };
    return (0, l.jsxs)(d.rX, {
        children: [
            i &&
                n.length > 0 &&
                (0, l.jsx)(
                    d.Dr,
                    {
                        label: "Recent Build Overrides",
                        id: "recent-build-overrides",
                        leadingAccessory: { type: "icon", icon: o.O },
                        children: n.map((i) =>
                            (0, l.jsx)(
                                d.iD,
                                {
                                    id: i.id,
                                    label: i.id,
                                    group: "recent-build-overrides",
                                    checked: i.id === e?.id,
                                    action: () => h(i),
                                },
                                i.id,
                            ),
                        ),
                    },
                    "recent-build-overrides",
                ),
            null != e &&
                (0, l.jsx)(
                    d.Dr,
                    {
                        id: "clear-build-override",
                        disabled: A,
                        leadingAccessory: { type: "icon", icon: a.H },
                        iconLeft: a.H,
                        label: p.intl.string(p.t["/Nz9rY"]),
                        subtext: (0, l.jsx)("div", {
                            className: g.Z,
                            children: (0, l.jsx)("div", { className: g.i, children: e.id }),
                        }),
                        action: () => h(null),
                        color: "danger",
                    },
                    "clear-build-override",
                ),
        ],
    });
}
