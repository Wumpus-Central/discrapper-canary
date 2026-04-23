"use strict";
i.d(t, { A: () => y });
var n = i(627968),
    r = i(64700),
    a = i(311907),
    o = i(477782),
    s = i(406810),
    l = i(848847),
    d = i(148810),
    u = i(521502),
    c = i(380610),
    p = i(390486),
    f = i(540999),
    v = i(985018),
    g = i(695779);
function y() {
    let e = (0, a.bG)([u.A], () => ((0, c.kK)() ? u.A.getCurrentBuildOverride().overrides?.discord_web : null)),
        t = (0, a.bG)([f.A], () => f.A.isDeveloper),
        i = r.useMemo(() => (t ? (0, p.H)() : []), [t]),
        [y, A] = r.useState(!1),
        m = async (t) => {
            if (null == t || t.id !== e?.id)
                try {
                    A(!0),
                        (null != t ? await (0, d.oA)(t.payload) : await (0, d.iD)()).ok && window.location.reload(!0);
                } finally {
                    A(!1);
                }
        };
    return (0, n.jsxs)(o.rX, {
        children: [
            t &&
                i.length > 0 &&
                (0, n.jsx)(
                    o.Dr,
                    {
                        label: "Recent Build Overrides",
                        id: "recent-build-overrides",
                        leadingAccessory: { type: "icon", icon: s.O },
                        children: i.map((t) =>
                            (0, n.jsx)(
                                o.iD,
                                {
                                    id: t.id,
                                    label: t.id,
                                    group: "recent-build-overrides",
                                    checked: t.id === e?.id,
                                    action: () => m(t),
                                },
                                t.id,
                            ),
                        ),
                    },
                    "recent-build-overrides",
                ),
            null != e &&
                (0, n.jsx)(
                    o.Dr,
                    {
                        id: "clear-build-override",
                        disabled: y,
                        leadingAccessory: { type: "icon", icon: l.H },
                        iconLeft: l.H,
                        label: v.intl.string(v.t["/Nz9rY"]),
                        subtext: (0, n.jsx)("div", {
                            className: g.Z,
                            children: (0, n.jsx)("div", { className: g.i, children: e.id }),
                        }),
                        action: () => m(null),
                        color: "danger",
                    },
                    "clear-build-override",
                ),
        ],
    });
}
