n.d(t, { T: () => O }), n(388685), n(415506);
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(215569),
    s = n(481060),
    l = n(924052),
    c = n(28682),
    u = n(996435),
    d = n(36361),
    f = n(111161),
    p = n(700425),
    _ = n(764516);
function m(e) {
    let { notice: t, children: n } = e,
        { showNotice: c, handleStoreUpdate: u } = (0, l.Cu)(),
        d = null == t ? void 0 : t.stores;
    i.useEffect(() => {
        if (null != d) {
            let e = new a.Fh(d, () => {
                u(d);
            });
            return (
                e.attach("SettingPanelNotice"),
                u(d),
                () => {
                    e.detach();
                }
            );
        }
    }, [d, u]);
    let f = i.useMemo(() => {
        if (null == t || !c) return null;
        let { element: e } = t;
        return (0, r.jsx)(s.oXn, {
            className: _.notice,
            children: (0, r.jsx)(e, {}),
        });
    }, [t, c]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            n,
            (0, r.jsx)(o.W, {
                component: "div",
                children: f,
            }),
        ],
    });
}
function h(e) {
    let { scrollerRef: t, panelKey: n, notice: a, children: o } = e,
        l = i.useRef(null);
    return (0, r.jsx)(m, {
        notice: a,
        children: (0, r.jsx)(
            s.w0Z,
            {
                "data-settings-panel-scroller": !0,
                className: _.scroller,
                ref: t,
                children: (0, r.jsx)("div", {
                    className: _.panel,
                    ref: l,
                    children: (0, r.jsx)(s.JcV, {
                        containerRef: l,
                        children: o,
                    }),
                }),
            },
            n,
        ),
    });
}
function g(e) {
    let { layout: t } = e;
    return (0, r.jsx)("div", {
        className: _.categories,
        children: t.map((e, n) =>
            (0, r.jsxs)(
                i.Fragment,
                {
                    children: [
                        (0, r.jsx)(d.Z, { node: e }),
                        n !== t.length - 1 && (0, r.jsx)(f.Z, { className: _.divider }),
                    ],
                },
                e.key,
            ),
        ),
    });
}
function E(e) {
    var t, n;
    let { panelKey: a, layout: o, notice: l } = e,
        c =
            null !=
            (t = u.Z.useState((e) => {
                let { currentTabKeys: t } = e;
                return t.get(a);
            }))
                ? t
                : o[0].key;
    i.useEffect(() => {
        let e = u.Z.getField("currentTabKeys");
        if (o.some((t) => t.key === e.get(a))) return;
        let t = new Map(e);
        t.set(a, o[0].key), u.Z.setState({ currentTabKeys: t });
    }, [o, a]);
    let d = (e) => {
            let t = new Map(u.Z.getField("currentTabKeys"));
            t.set(a, e), u.Z.setState({ currentTabKeys: t });
        },
        f = null != (n = o.find((e) => e.key === c)) ? n : o[0];
    return (0, r.jsxs)(h, {
        panelKey: a,
        notice: l,
        children: [
            (0, r.jsx)(s.njP, {
                className: _.tabBar,
                selectedItem: c,
                onItemSelect: d,
                orientation: "horizontal",
                type: "top",
                look: "brand",
                children: o.map((e) => {
                    let { key: t, useTitle: n } = e;
                    return (0, r.jsx)(
                        s.njP.Item,
                        {
                            id: t,
                            children: n(),
                        },
                        t,
                    );
                }),
            }),
            (0, r.jsx)(s.njP.Panel, {
                id: c,
                children:
                    null != f.StronglyDiscouragedCustomComponent
                        ? (0, r.jsx)(f.StronglyDiscouragedCustomComponent, {})
                        : (0, r.jsx)(g, { layout: f.layout }),
            }),
        ],
    });
}
function b(e) {
    let { panelKey: t, notice: n, layout: a } = e,
        o = i.useRef(null);
    return (
        (0, p.i)(t, a, o),
        (0, r.jsx)(h, {
            scrollerRef: o,
            panelKey: t,
            notice: n,
            children: (0, r.jsx)(g, { layout: a }),
        })
    );
}
function y(e) {
    let { component: t, panelKey: n, notice: i } = e;
    return (0, r.jsx)(h, {
        panelKey: n,
        notice: i,
        children: (0, r.jsx)(t, {}),
    });
}
function O(e) {
    let { node: t } = e,
        { layout: n } = t;
    if (null != t.StronglyDiscouragedCustomComponent)
        return (0, r.jsx)(y, {
            component: t.StronglyDiscouragedCustomComponent,
            panelKey: t.key,
            notice: t.notice,
        });
    if ((0, c.sp)(n))
        return (0, r.jsx)(E, {
            panelKey: t.key,
            notice: t.notice,
            layout: n,
        });
    if ((0, c.iU)(n))
        return (0, r.jsx)(b, {
            panelKey: t.key,
            notice: t.notice,
            layout: n,
        });
    throw Error("Panels must have a list of categories or a list of tabs");
}
