n.d(t, { T: () => C }), n(388685), n(415506);
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
    g = n(662097),
    E = n(921944),
    b = n(520118);
function y(e) {
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
            className: b.notice,
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
function O(e) {
    let { scrollerRef: t, panelKey: n, notice: a, children: o } = e,
        l = i.useRef(null);
    return (0, r.jsx)(y, {
        notice: a,
        children: (0, r.jsx)(
            s.w0Z,
            {
                "data-settings-panel-scroller": !0,
                className: b.scroller,
                ref: t,
                children: (0, r.jsx)("div", {
                    className: b.panel,
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
function v(e) {
    let { layout: t } = e;
    return (0, r.jsx)("div", {
        className: b.categories,
        children: t.map((e, n) =>
            (0, r.jsxs)(
                i.Fragment,
                {
                    children: [
                        (0, r.jsx)(_.Z, { node: e }),
                        n !== t.length - 1 && (0, r.jsx)(m.Z, { className: b.divider }),
                    ],
                },
                e.key,
            ),
        ),
    });
}
function S(e) {
    var t, n;
    let { panelKey: a, layout: o, notice: l } = e,
        c =
            null !=
            (t = p.Z.useState((e) => {
                let { currentTabKeys: t } = e;
                return t.get(a);
            }))
                ? t
                : o[0].key,
        { navigateWithValidation: u } = (0, d.Cu)();
    i.useEffect(() => {
        let e = p.Z.getField("currentTabKeys");
        if (o.some((t) => t.key === e.get(a))) return;
        let t = new Map(e);
        t.set(a, o[0].key), p.Z.setState({ currentTabKeys: t });
    }, [o, a]);
    let f = (e) => {
            u(() => {
                var t;
                if (e === c) return;
                let n = new Map(p.Z.getField("currentTabKeys"));
                n.set(a, e), p.Z.setState({ currentTabKeys: n });
                let r = o.find((t) => t.key === e);
                null == r || null == (t = r.onItemSelect) || t.call(r);
            });
        },
        _ = null != (n = o.find((e) => e.key === c)) ? n : o[0];
    return (0, r.jsxs)(O, {
        panelKey: a,
        notice: l,
        children: [
            (0, r.jsx)(s.njP, {
                className: b.tabBar,
                selectedItem: c,
                onItemSelect: f,
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
                    null != _.StronglyDiscouragedCustomComponent
                        ? (0, r.jsx)(_.StronglyDiscouragedCustomComponent, {})
                        : (0, r.jsx)(v, { layout: _.layout }),
            }),
        ],
    });
}
function I(e) {
    let { panelKey: t, notice: n, layout: a } = e,
        o = i.useRef(null);
    return (
        (0, h.i)(t, a, o),
        (0, r.jsx)(O, {
            scrollerRef: o,
            panelKey: t,
            notice: n,
            children: (0, r.jsx)(v, { layout: a }),
        })
    );
}
function T(e) {
    let { component: t, panelKey: n, notice: i } = e;
    return (0, r.jsx)(O, {
        panelKey: n,
        notice: i,
        children: (0, r.jsx)(t, {}),
    });
}
function C(e) {
    let { node: t } = e,
        { layout: n, initialize: o } = t;
    (0, g.D)(o);
    let s = (0, a.e7)([u.Z], () => u.Z.hidePersonalInformation);
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
                        dismissAction: E.L.AUTO,
                        forceTrack: !0,
                    });
                });
        }, [t]),
        s && t.hideInStreamerMode)
    )
        return (0, r.jsx)(l.Z, {});
    if (null != t.StronglyDiscouragedCustomComponent)
        return (0, r.jsx)(T, {
            component: t.StronglyDiscouragedCustomComponent,
            panelKey: t.key,
            notice: t.notice,
        });
    if ((0, f.sp)(n))
        return (0, r.jsx)(S, {
            panelKey: t.key,
            notice: t.notice,
            layout: n,
        });
    if ((0, f.iU)(n))
        return (0, r.jsx)(I, {
            panelKey: t.key,
            notice: t.notice,
            layout: n,
        });
    throw Error("Panels must have a list of categories or a list of tabs");
}
