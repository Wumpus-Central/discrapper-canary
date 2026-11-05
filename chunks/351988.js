n.d(i, { default: () => S });
var l = n(477900),
    r = n(582128),
    t = n(165862),
    d = n(477782),
    c = n(358367),
    o = n(793574),
    s = n(122088),
    a = n(766075),
    u = n(158935),
    v = n(855986),
    b = n(406810),
    h = n(848847),
    p = n(148810),
    y = n(521502),
    g = n(380610),
    k = n(390486),
    A = n(540999),
    f = n(792996),
    x = n(650956),
    j = n(949091);
let S = (0, c.A)(
    function (e) {
        let i = (function () {
                let e = (0, v.bG)([y.A], () =>
                        (0, g.kK)() ? y.A.getCurrentBuildOverride().overrides?.discord_web : null,
                    ),
                    i = (0, v.bG)([A.A], () => A.A.isDeveloper),
                    n = r.useMemo(() => (i ? (0, k.HP)() : []), [i]),
                    [t, c] = r.useState(!1);
                async function o(i) {
                    if (null == i || i.id !== e?.id)
                        try {
                            (c(!0),
                                (null != i ? await (0, k.mk)(i) : (await (0, p.iD)()).ok) &&
                                    window.location.reload(!0));
                        } finally {
                            c(!1);
                        }
                }
                return (0, l.jsxs)(d.rX, {
                    children: [
                        i &&
                            n.length > 0 &&
                            (0, l.jsx)(
                                d.Dr,
                                {
                                    label: "Recent Build Overrides",
                                    id: "recent-build-overrides",
                                    leadingAccessory: { type: "icon", icon: b.ClockIcon },
                                    children: n.map((i) =>
                                        (0, l.jsx)(
                                            d.iD,
                                            {
                                                id: i.id,
                                                label: i.id,
                                                group: "recent-build-overrides",
                                                checked: i.id === e?.id,
                                                action: () => o(i),
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
                                    disabled: t,
                                    leadingAccessory: { type: "icon", icon: h.SettingsInfoIcon },
                                    iconLeft: h.SettingsInfoIcon,
                                    label: f.intl.string(f.t["/Nz9rY"]),
                                    subtext: (0, l.jsx)("div", {
                                        className: x.Z,
                                        children: (0, l.jsx)("div", { className: x.i, children: e.id }),
                                    }),
                                    action: () => o(null),
                                    color: "danger",
                                },
                                "clear-build-override",
                            ),
                    ],
                });
            })(),
            n = (0, j.A)(!0),
            c = (function (e, i) {
                let { node: n } = (0, s.Ay)(e, ""),
                    [t, c] = r.useState(n);
                return t.layout.map((e) => {
                    var n, r;
                    let t;
                    return (
                        (n = e),
                        (r = i),
                        (t = n.useTitle?.()),
                        (0, l.jsx)(
                            d.rX,
                            {
                                label: n.hideTitle ? void 0 : t,
                                "aria-label": n.hideTitle ? t : void 0,
                                children: n.layout.map((e) => {
                                    var i, n;
                                    let t, c, o, s;
                                    return (
                                        (i = e),
                                        (n = r),
                                        (t = i.useTitle?.()),
                                        (c = i.useMenu?.()),
                                        (o = "destructive" === i.variant ? "danger" : void 0),
                                        (s = i.onClick ?? (() => n(i.key))),
                                        (0, l.jsx)(
                                            d.Dr,
                                            {
                                                label: t,
                                                id: i.key,
                                                leadingAccessory: { type: "icon", icon: i.icon },
                                                iconLeft: i.icon,
                                                color: o,
                                                action: s,
                                                children: c,
                                            },
                                            i.key,
                                        )
                                    );
                                }),
                            },
                            n.key,
                        )
                    );
                });
            })(u.D, (e) => (0, a.openUserSettings)(e));
        return (0, l.jsxs)(t.W, {
            navId: "settings-menu",
            "aria-label": f.intl.string(f.t.opYYHn),
            onSelect: void 0,
            ...e,
            children: [c, null != n && (0, l.jsx)(d.rX, { children: n }), i],
        });
    },
    [o.A.CONTEXT_MENU, o.A.USER_SETTINGS_MENU],
);
