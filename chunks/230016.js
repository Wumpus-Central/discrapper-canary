t.d(i, { default: () => v });
var n = t(477900),
    l = t(582128),
    r = t(165862),
    a = t(477782),
    s = t(358367),
    c = t(793574),
    o = t(122088),
    d = t(766075),
    u = t(960111),
    p = t(949091),
    h = t(792996);
let v = (0, s.A)(
    function (e) {
        let i = (0, p.A)(!0),
            t = (function (e, i) {
                let { node: t } = (0, o.Ay)(e, ""),
                    [r, s] = l.useState(t);
                return r.layout.map((e) => {
                    var t, l;
                    let r;
                    return (
                        (t = e),
                        (l = i),
                        (r = t.useTitle?.()),
                        (0, n.jsx)(
                            a.rX,
                            {
                                label: t.hideTitle ? void 0 : r,
                                "aria-label": t.hideTitle ? r : void 0,
                                children: t.layout.map((e) => {
                                    var i, t;
                                    let r, s, c, o;
                                    return (
                                        (i = e),
                                        (t = l),
                                        (r = i.useTitle?.()),
                                        (s = i.useMenu?.()),
                                        (c = "destructive" === i.variant ? "danger" : void 0),
                                        (o = i.onClick ?? (() => t(i.key))),
                                        (0, n.jsx)(
                                            a.Dr,
                                            {
                                                label: r,
                                                id: i.key,
                                                leadingAccessory: { type: "icon", icon: i.icon },
                                                iconLeft: i.icon,
                                                color: c,
                                                action: o,
                                                children: s,
                                            },
                                            i.key,
                                        )
                                    );
                                }),
                            },
                            t.key,
                        )
                    );
                });
            })(u.D, (e) => (0, d.openUserSettings)(e));
        return (0, n.jsxs)(r.W, {
            navId: "settings-menu",
            "aria-label": h.intl.string(h.t.opYYHn),
            onSelect: void 0,
            ...e,
            children: [t, null != i && (0, n.jsx)(a.rX, { children: i })],
        });
    },
    [c.A.CONTEXT_MENU, c.A.USER_SETTINGS_MENU],
);
