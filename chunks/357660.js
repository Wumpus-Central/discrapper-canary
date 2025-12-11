n.d(t, { T: () => T }), n(388685), n(415506);
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(215569),
    s = n(481060),
    l = n(497321),
    c = n(266454),
    u = n(246946),
    d = n(924052),
    f = n(28682),
    p = n(996435),
    _ = n(36361),
    m = n(111161),
    h = n(700425),
    g = n(921944),
    E = n(520118);
function b(e) {
    let { notice: t, children: n } = e,
        { showNotice: l, handleStoreUpdate: c } = (0, d.Cu)(),
        u = null == t ? void 0 : t.stores;
    i.useEffect(() => {
        if (null != u) {
            let e = new a.Fh(u, () => {
                c(u);
            });
            return (
                e.attach("SettingPanelNotice"),
                c(u),
                () => {
                    e.detach();
                }
            );
        }
    }, [u, c]);
    let f = i.useMemo(() => {
        if (null == t || !l) return null;
        let { element: e } = t;
        return (0, r.jsx)(s.oXn, {
            className: E.notice,
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
function y(e) {
    let { scrollerRef: t, panelKey: n, notice: a, children: o } = e,
        l = i.useRef(null);
    return (0, r.jsx)(b, {
        notice: a,
        children: (0, r.jsx)(
            s.w0Z,
            {
                "data-settings-panel-scroller": !0,
                className: E.scroller,
                ref: t,
                children: (0, r.jsx)("div", {
                    className: E.panel,
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
function O(e) {
    let { layout: t } = e;
    return (0, r.jsx)("div", {
        className: E.categories,
        children: t.map((e, n) =>
            (0, r.jsxs)(
                i.Fragment,
                {
                    children: [
                        (0, r.jsx)(_.Z, { node: e }),
                        n !== t.length - 1 && (0, r.jsx)(m.Z, { className: E.divider }),
                    ],
                },
                e.key,
            ),
        ),
    });
}
function v(e) {
    var t, n;
    let { panelKey: a, layout: o, notice: l } = e,
        c =
            null !=
            (t = p.Z.useState((e) => {
                let { currentTabKeys: t } = e;
                return t.get(a);
            }))
                ? t
                : o[0].key;
    i.useEffect(() => {
        let e = p.Z.getField("currentTabKeys");
        if (o.some((t) => t.key === e.get(a))) return;
        let t = new Map(e);
        t.set(a, o[0].key), p.Z.setState({ currentTabKeys: t });
    }, [o, a]);
    let u = (e) => {
            let t = new Map(p.Z.getField("currentTabKeys"));
            t.set(a, e), p.Z.setState({ currentTabKeys: t });
        },
        d = null != (n = o.find((e) => e.key === c)) ? n : o[0];
    return (0, r.jsxs)(y, {
        panelKey: a,
        notice: l,
        children: [
            (0, r.jsx)(s.njP, {
                className: E.tabBar,
                selectedItem: c,
                onItemSelect: u,
                orientation: "horizontal",
                type: "top",
                look: "brand",
                children: o.map((e) => {
                    let { key: t, getTitle: n } = e;
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
                    null != d.StronglyDiscouragedCustomComponent
                        ? (0, r.jsx)(d.StronglyDiscouragedCustomComponent, {})
                        : (0, r.jsx)(O, { layout: d.layout }),
            }),
        ],
    });
}
function S(e) {
    let { panelKey: t, notice: n, layout: a } = e,
        o = i.useRef(null);
    return (
        (0, h.i)(t, a, o),
        (0, r.jsx)(y, {
            scrollerRef: o,
            panelKey: t,
            notice: n,
            children: (0, r.jsx)(O, { layout: a }),
        })
    );
}
function I(e) {
    let { component: t, panelKey: n, notice: i } = e;
    return (0, r.jsx)(y, {
        panelKey: n,
        notice: i,
        children: (0, r.jsx)(t, {}),
    });
}
function T(e) {
    let { node: t } = e,
        { layout: n } = t,
        o = (0, a.e7)([u.Z], () => u.Z.hidePersonalInformation);
    if (
        (i.useEffect(() => {
            var e, n;
            if ((null == (e = t.parent) ? void 0 : e.type) !== f.Jq.SIDEBAR_ITEM || null == t.parent.trailing) return;
            let { trailing: r } = t.parent,
                i =
                    "getDismissibleContentTypes" in r
                        ? null == (n = r.getDismissibleContentTypes)
                            ? void 0
                            : n.call(r)
                        : null;
            null != i &&
                i.forEach((e) => {
                    (0, c.Q3)(e, {
                        dismissAction: g.L.AUTO,
                        forceTrack: !0,
                    });
                });
        }, [t]),
        o && t.hideInStreamerMode)
    )
        return (0, r.jsx)(l.Z, {});
    if (null != t.StronglyDiscouragedCustomComponent)
        return (0, r.jsx)(I, {
            component: t.StronglyDiscouragedCustomComponent,
            panelKey: t.key,
            notice: t.notice,
        });
    if ((0, f.sp)(n))
        return (0, r.jsx)(v, {
            panelKey: t.key,
            notice: t.notice,
            layout: n,
        });
    if ((0, f.iU)(n))
        return (0, r.jsx)(S, {
            panelKey: t.key,
            notice: t.notice,
            layout: n,
        });
    throw Error("Panels must have a list of categories or a list of tabs");
}
