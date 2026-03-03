n.d(i, { A: () => v });
var l = n(627968),
    r = n(64700),
    t = n(311907),
    d = n(397927),
    o = n(148810),
    a = n(521502),
    s = n(380610),
    c = n(390486),
    u = n(540999),
    p = n(985018),
    y = n(908036);
function v() {
    let e = (0, t.bG)([a.A], () => ((0, s.kK)() ? a.A.getCurrentBuildOverride().overrides?.discord_web : null)),
        i = (0, t.bG)([u.A], () => u.A.isDeveloper),
        n = r.useMemo(() => (i ? (0, c.H)() : []), [i]),
        [v, g] = r.useState(!1),
        A = async (i) => {
            if (null == i || i.id !== e?.id)
                try {
                    g(!0),
                        (null != i ? await (0, o.oA)(i.payload) : await (0, o.iD)()).ok && window.location.reload(!0);
                } finally {
                    g(!1);
                }
        };
    return (0, l.jsxs)(d.rXV, {
        children: [
            i &&
                n.length > 0 &&
                (0, l.jsx)(
                    d.Drp,
                    {
                        label: "Recent Build Overrides",
                        id: "recent-build-overrides",
                        leadingAccessory: { type: "icon", icon: d.O4 },
                        children: n.map((i) =>
                            (0, l.jsx)(
                                d.iDA,
                                {
                                    id: i.id,
                                    label: i.id,
                                    group: "recent-build-overrides",
                                    checked: i.id === e?.id,
                                    action: () => A(i),
                                },
                                i.id,
                            ),
                        ),
                    },
                    "recent-build-overrides",
                ),
            null != e &&
                (0, l.jsx)(
                    d.Drp,
                    {
                        id: "clear-build-override",
                        disabled: v,
                        leadingAccessory: { type: "icon", icon: d.Hnu },
                        iconLeft: d.Hnu,
                        label: p.intl.string(p.t["/Nz9rY"]),
                        subtext: (0, l.jsx)("div", {
                            className: y.Z,
                            children: (0, l.jsx)("div", { className: y.i, children: e.id }),
                        }),
                        action: () => A(null),
                        color: "danger",
                    },
                    "clear-build-override",
                ),
        ],
    });
}
