n.d(t, { T: () => S }), n(388685), n(415506);
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(215569),
    s = n(481060),
    l = n(266454),
    c = n(924052),
    u = n(28682),
    d = n(996435),
    f = n(36361),
    p = n(111161),
    _ = n(700425),
    m = n(921944),
    h = n(764516);
function g(e) {
    let { notice: t, children: n } = e,
        { showNotice: l, handleStoreUpdate: u } = (0, c.Cu)(),
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
        if (null == t || !l) return null;
        let { element: e } = t;
        return (0, r.jsx)(s.oXn, {
            className: h.notice,
            children: (0, r.jsx)(e, {}),
        });
    }, [t, l]);
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
function E(e) {
    let { scrollerRef: t, panelKey: n, notice: a, children: o } = e,
        l = i.useRef(null);
    return (0, r.jsx)(g, {
        notice: a,
        children: (0, r.jsx)(
            s.w0Z,
            {
                "data-settings-panel-scroller": !0,
                className: h.scroller,
                ref: t,
                children: (0, r.jsx)("div", {
                    className: h.panel,
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
function b(e) {
    let { layout: t } = e;
    return (0, r.jsx)("div", {
        className: h.categories,
        children: t.map((e, n) =>
            (0, r.jsxs)(
                i.Fragment,
                {
                    children: [
                        (0, r.jsx)(f.Z, { node: e }),
                        n !== t.length - 1 && (0, r.jsx)(p.Z, { className: h.divider }),
                    ],
                },
                e.key,
            ),
        ),
    });
}
function y(e) {
    var t, n;
    let { panelKey: a, layout: o, notice: l } = e,
        c =
            null !=
            (t = d.Z.useState((e) => {
                let { currentTabKeys: t } = e;
                return t.get(a);
            }))
                ? t
                : o[0].key;
    i.useEffect(() => {
        let e = d.Z.getField("currentTabKeys");
        if (o.some((t) => t.key === e.get(a))) return;
        let t = new Map(e);
        t.set(a, o[0].key), d.Z.setState({ currentTabKeys: t });
    }, [o, a]);
    let u = (e) => {
            let t = new Map(d.Z.getField("currentTabKeys"));
            t.set(a, e), d.Z.setState({ currentTabKeys: t });
        },
        f = null != (n = o.find((e) => e.key === c)) ? n : o[0];
    return (0, r.jsxs)(E, {
        panelKey: a,
        notice: l,
        children: [
            (0, r.jsx)(s.njP, {
                className: h.tabBar,
                selectedItem: c,
                onItemSelect: u,
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
                        : (0, r.jsx)(b, { layout: f.layout }),
            }),
        ],
    });
}
function O(e) {
    let { panelKey: t, notice: n, layout: a } = e,
        o = i.useRef(null);
    return (
        (0, _.i)(t, a, o),
        (0, r.jsx)(E, {
            scrollerRef: o,
            panelKey: t,
            notice: n,
            children: (0, r.jsx)(b, { layout: a }),
        })
    );
}
function v(e) {
    let { component: t, panelKey: n, notice: i } = e;
    return (0, r.jsx)(E, {
        panelKey: n,
        notice: i,
        children: (0, r.jsx)(t, {}),
    });
}
function S(e) {
    let { node: t } = e,
        { layout: n } = t;
    if (
        (i.useEffect(() => {
            var e, n;
            if ((null == (e = t.parent) ? void 0 : e.type) !== u.Jq.SIDEBAR_ITEM || null == t.parent.trailing) return;
            let { trailing: r } = t.parent,
                i =
                    "getDismissibleContentTypes" in r
                        ? null == (n = r.getDismissibleContentTypes)
                            ? void 0
                            : n.call(r)
                        : null;
            null != i &&
                i.forEach((e) => {
                    (0, l.Q3)(e, {
                        dismissAction: m.L.AUTO,
                        forceTrack: !0,
                    });
                });
        }, [t]),
        null != t.StronglyDiscouragedCustomComponent)
    )
        return (0, r.jsx)(v, {
            component: t.StronglyDiscouragedCustomComponent,
            panelKey: t.key,
            notice: t.notice,
        });
    if ((0, u.sp)(n))
        return (0, r.jsx)(y, {
            panelKey: t.key,
            notice: t.notice,
            layout: n,
        });
    if ((0, u.iU)(n))
        return (0, r.jsx)(O, {
            panelKey: t.key,
            notice: t.notice,
            layout: n,
        });
    throw Error("Panels must have a list of categories or a list of tabs");
}
