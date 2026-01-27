n.d(t, {
    j: () => S,
}),
    n(896048),
    n(65821);
var r = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(73939),
    a = n(397927),
    o = n(974544),
    c = n(826673),
    d = n(351906),
    u = n(823092),
    _ = n(963935),
    p = n(894858),
    m = n(641324),
    g = n(46373),
    A = n(890690),
    f = n(112715),
    h = n(49999),
    b = n(872175);

function E(e) {
    let { notice: t, children: n } = e,
        { showNotice: o, handleStoreUpdate: c } = (0, u.L_)(),
        d = null == t ? void 0 : t.stores;
    i.useEffect(() => {
        if (null != d) {
            let e = new l.ru(d, () => {
                c(d);
            });
            return (
                e.attach("SettingPanelNotice"),
                c(d),
                () => {
                    e.detach();
                }
            );
        }
    }, [d, c]);
    let _ = i.useMemo(() => {
        if (null == t || !o) return null;
        let { element: e } = t;
        return (0, r.jsx)(a.FQk, {
            className: b.lm,
            children: (0, r.jsx)(e, {}),
        });
    }, [t, o]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            n,
            (0, r.jsx)(s.F, {
                component: "div",
                children: _,
            }),
        ],
    });
}

function x(e) {
    let { scrollerRef: t, panelKey: n, notice: l, children: s } = e,
        o = i.useRef(null);
    return (0, r.jsx)(E, {
        notice: l,
        children: (0, r.jsx)(
            a.ArX,
            {
                "data-settings-panel-scroller": !0,
                className: b.XG,
                ref: t,
                children: (0, r.jsx)("div", {
                    className: b.nd,
                    ref: o,
                    children: (0, r.jsx)(a.xpW, {
                        containerRef: o,
                        children: s,
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
        className: b.LZ,
        children: t.map((e, n) =>
            (0, r.jsxs)(
                i.Fragment,
                {
                    children: [
                        (0, r.jsx)(m.A, {
                            node: e,
                        }),
                        n !== t.length - 1 &&
                            (0, r.jsx)(g.A, {
                                className: b.yF,
                            }),
                    ],
                },
                e.key,
            ),
        ),
    });
}

function C(e) {
    var t, n;
    let { panelKey: l, layout: s, notice: o } = e,
        c =
            null !=
            (t = p.A.useState((e) => {
                let { currentTabKeys: t } = e;
                return t.get(l);
            }))
                ? t
                : s[0].key,
        { navigateWithValidation: d } = (0, u.L_)();
    i.useEffect(() => {
        let e = p.A.getField("currentTabKeys");
        if (s.some((t) => t.key === e.get(l))) return;
        let t = new Map(e);
        t.set(l, s[0].key),
            p.A.setState({
                currentTabKeys: t,
            });
    }, [s, l]);
    let _ = null != (n = s.find((e) => e.key === c)) ? n : s[0];
    return (0, r.jsxs)(x, {
        panelKey: l,
        notice: o,
        children: [
            (0, r.jsx)(a.VQ0, {
                className: b.$H,
                selectedItem: c,
                onItemSelect: (e) => {
                    d(() => {
                        var t;
                        if (e === c) return;
                        let n = new Map(p.A.getField("currentTabKeys"));
                        n.set(l, e),
                            p.A.setState({
                                currentTabKeys: n,
                            });
                        let r = s.find((t) => t.key === e);
                        null == r || null == (t = r.onItemSelect) || t.call(r);
                    });
                },
                orientation: "horizontal",
                type: "top",
                look: "brand",
                children: s.map((e) => {
                    let { key: t, getTitle: n } = e;
                    return (0, r.jsx)(
                        a.VQ0.Item,
                        {
                            id: t,
                            children: n(),
                        },
                        t,
                    );
                }),
            }),
            (0, r.jsx)(a.VQ0.Panel, {
                id: c,
                children:
                    null != _.StronglyDiscouragedCustomComponent
                        ? (0, r.jsx)(_.StronglyDiscouragedCustomComponent, {})
                        : (0, r.jsx)(O, {
                              layout: _.layout,
                          }),
            }),
        ],
    });
}

function I(e) {
    let { panelKey: t, notice: n, layout: l } = e,
        s = i.useRef(null);
    return (
        (0, A.u)(t, l, s),
        (0, r.jsx)(x, {
            scrollerRef: s,
            panelKey: t,
            notice: n,
            children: (0, r.jsx)(O, {
                layout: l,
            }),
        })
    );
}

function T(e) {
    let { component: t, panelKey: n, notice: i } = e;
    return (0, r.jsx)(x, {
        panelKey: n,
        notice: i,
        children: (0, r.jsx)(t, {}),
    });
}

function S(e) {
    let { node: t } = e,
        { layout: n, initialize: s } = t;
    (0, f.Z)(s);
    let a = (0, l.bG)([d.A], () => d.A.hidePersonalInformation);
    if (
        (i.useEffect(() => {
            var e, n;
            if ((null == (e = t.parent) ? void 0 : e.type) !== _.Z6.SIDEBAR_ITEM || null == t.parent.trailing) return;
            let { trailing: r } = t.parent,
                i =
                    "getDismissibleContentTypes" in r
                        ? null == (n = r.getDismissibleContentTypes)
                            ? void 0
                            : n.call(r)
                        : null;
            null != i &&
                i.forEach((e) => {
                    (0, c.Dr)(e, {
                        dismissAction: h.i.AUTO,
                        forceTrack: !0,
                    });
                });
        }, [t]),
        a && t.hideInStreamerMode)
    )
        return (0, r.jsx)(o.A, {});
    if (null != t.StronglyDiscouragedCustomComponent)
        return (0, r.jsx)(T, {
            component: t.StronglyDiscouragedCustomComponent,
            panelKey: t.key,
            notice: t.notice,
        });
    if ((0, _.zY)(n))
        return (0, r.jsx)(C, {
            panelKey: t.key,
            notice: t.notice,
            layout: n,
        });
    if ((0, _.Iu)(n))
        return (0, r.jsx)(I, {
            panelKey: t.key,
            notice: t.notice,
            layout: n,
        });
    throw Error("Panels must have a list of categories or a list of tabs");
}
