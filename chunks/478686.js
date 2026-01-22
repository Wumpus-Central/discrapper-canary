n.d(t, {
    A: () => l,
});
var r = n(963935);

function i(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function a(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                i(e, t, n[t]);
            });
    }
    return e;
}

function s(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function o(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : s(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function l(e, t, n) {
    var i, s, c, u, d, f, p, _;
    let h = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (!t.has(e.key)) return null;
    if (!(0, r.nW)(e))
        return (
            n.register({
                node: e,
                parentPanelKey: null == (d = h.panel) ? void 0 : d.key,
                parentTabKey: null == (f = h.tab) ? void 0 : f.key,
                parentCategoryKey: null == (p = h.category) ? void 0 : p.key,
                parentAccordionKey: null == (_ = h.accordion) ? void 0 : _.key,
            }),
            e
        );
    let m = h;
    e.type === r.Z6.SIDEBAR_ITEM &&
        (m = o(a({}, h), {
            panel: e.layout[0],
        })),
        e.type === r.Z6.PANEL &&
            (m = o(a({}, h), {
                panel: e,
            })),
        e.type === r.Z6.CATEGORY &&
            (m = o(a({}, h), {
                category: e,
            })),
        e.type === r.Z6.ACCORDION &&
            (m = o(a({}, h), {
                accordion: e,
            })),
        e.type === r.Z6.TAB_ITEM &&
            (m = o(a({}, h), {
                tab: e,
            }));
    let g = e.layout.map((e) => l(e, t, n, m)).filter((e) => null != e);
    if (
        0 === g.length &&
        !("StronglyDiscouragedCustomComponent" in e || (e.type === r.Z6.SIDEBAR_ITEM && "onClick" in e))
    )
        return null;
    let E = o(a({}, e), {
        layout: g,
    });
    return (
        n.register({
            node: E,
            parentPanelKey: null == (i = m.panel) ? void 0 : i.key,
            parentTabKey: null == (s = m.tab) ? void 0 : s.key,
            parentCategoryKey: null == (c = m.category) ? void 0 : c.key,
            parentAccordionKey: null == (u = m.accordion) ? void 0 : u.key,
        }),
        E
    );
}
