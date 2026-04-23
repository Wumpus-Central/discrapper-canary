"use strict";
i.d(t, { default: () => h });
var n = i(627968),
    r = i(64700),
    a = i(550079),
    o = i(477782),
    s = i(358367),
    l = i(793574),
    d = i(581298),
    u = i(858897),
    c = i(533163),
    p = i(17928),
    f = i(406810),
    v = i(848847),
    g = i(148810),
    y = i(521502),
    m = i(380610),
    A = i(390486),
    E = i(540999),
    S = i(985018),
    N = i(484003),
    b = i(616621);
let h = (0, s.A)(
    function (e) {
        let t = (function () {
                let e = (0, p.bG)([y.A], () =>
                        (0, m.kK)() ? y.A.getCurrentBuildOverride().overrides?.discord_web : null,
                    ),
                    t = (0, p.bG)([E.A], () => E.A.isDeveloper),
                    i = r.useMemo(() => (t ? (0, A.H)() : []), [t]),
                    [a, s] = r.useState(!1),
                    l = async (t) => {
                        if (null == t || t.id !== e?.id)
                            try {
                                s(!0),
                                    (null != t ? await (0, g.oA)(t.payload) : await (0, g.iD)()).ok &&
                                        window.location.reload(!0);
                            } finally {
                                s(!1);
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
                                    leadingAccessory: { type: "icon", icon: f.O },
                                    children: i.map((t) =>
                                        (0, n.jsx)(
                                            o.iD,
                                            {
                                                id: t.id,
                                                label: t.id,
                                                group: "recent-build-overrides",
                                                checked: t.id === e?.id,
                                                action: () => l(t),
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
                                    disabled: a,
                                    leadingAccessory: { type: "icon", icon: v.H },
                                    iconLeft: v.H,
                                    label: S.intl.string(S.t["/Nz9rY"]),
                                    subtext: (0, n.jsx)("div", {
                                        className: N.Z,
                                        children: (0, n.jsx)("div", { className: N.i, children: e.id }),
                                    }),
                                    action: () => l(null),
                                    color: "danger",
                                },
                                "clear-build-override",
                            ),
                    ],
                });
            })(),
            i = (0, b.A)(!0),
            s = (function (e, t) {
                let { node: i } = (0, d.Ay)(e, ""),
                    [a, s] = r.useState(i);
                return a.layout.map((e) => {
                    var i, r;
                    let a;
                    return (
                        (i = e),
                        (r = t),
                        (a = i.useTitle?.()),
                        (0, n.jsx)(
                            o.rX,
                            {
                                label: a,
                                children: i.layout.map((e) => {
                                    var t, i;
                                    let a, s, l, d;
                                    return (
                                        (t = e),
                                        (i = r),
                                        (a = t.useTitle?.()),
                                        (s = t.useMenu?.()),
                                        (l = "destructive" === t.variant ? "danger" : void 0),
                                        (d = t.onClick ?? (() => i(t.key))),
                                        (0, n.jsx)(
                                            o.Dr,
                                            {
                                                label: a,
                                                id: t.key,
                                                leadingAccessory: { type: "icon", icon: t.icon },
                                                iconLeft: t.icon,
                                                color: l,
                                                action: d,
                                                children: s,
                                            },
                                            t.key,
                                        )
                                    );
                                }),
                            },
                            i.key,
                        )
                    );
                });
            })(c.D, (e) => (0, u.openUserSettings)(e));
        return (0, n.jsxs)(a.W, {
            navId: "settings-menu",
            "aria-label": S.intl.string(S.t.opYYHn),
            onSelect: void 0,
            ...e,
            children: [s, null != i && (0, n.jsx)(o.rX, { children: i }), t],
        });
    },
    [l.A.CONTEXT_MENU, l.A.USER_SETTINGS_MENU],
);
