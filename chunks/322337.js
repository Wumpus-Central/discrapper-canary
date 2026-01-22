n.d(t, {
    A: () => O,
    p: () => b,
}),
    n(896048),
    n(638769);
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(397927),
    o = n(442433),
    l = n(543594),
    c = n(587895),
    u = n(67480),
    d = n(371794),
    f = n(985018);
function p(e, t, n) {
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
function _(e) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
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
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = E(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let b = {
    DropdownSizes: l.A.DropdownSizes,
    Sizes: l.A.Sizes,
    Colors: l.A.Colors,
    Looks: l.A.Looks,
};
class y extends i.PureComponent {
    render() {
        let e = this.props,
            { skus: t, children: n, applicationId: i, primarySKU: a, onSKUSelect: s } = e,
            o = g(e, ["skus", "children", "applicationId", "primarySKU", "onSKUSelect"]);
        return (0, r.jsx)(
            l.A,
            m(
                _(
                    {
                        onClick: this.handleClick,
                        onDropdownClick: t.length > 0 ? this.handleContextMenu : null,
                        onContextMenu: t.length > 0 ? this.handleContextMenu : void 0,
                    },
                    o,
                ),
                { children: n },
            ),
        );
    }
    constructor(...e) {
        super(...e),
            p(this, "renderContextMenu", () => {
                let { skus: e, onSKUSelect: t, onMenuSelect: n } = this.props;
                return (0, r.jsx)(s.W1t, {
                    onSelect: n,
                    navId: "test-skus",
                    "aria-label": f.intl.string(f.t.ogxXGq),
                    onClose: o.Z_,
                    children: e.map((e) =>
                        (0, r.jsx)(
                            s.Drp,
                            {
                                id: "".concat(e.id),
                                label: e.name,
                                action: () => {
                                    null == t || t(e);
                                },
                            },
                            "".concat(e.id),
                        ),
                    ),
                });
            }),
            p(this, "handleContextMenu", (e) => {
                e.stopPropagation(), o.jA(e, this.renderContextMenu);
            }),
            p(this, "handleClick", () => {
                let { onSKUSelect: e, primarySKU: t } = this.props;
                null != t && (null == e || e(t));
            });
    }
}
let O = a.Ay.connectStores([u.A, c.A], (e) => {
    var t;
    let { applicationId: n } = e,
        r = (0, d.VH)(n, c.A, u.A);
    return {
        skus: (null != (t = u.A.getForApplication(n)) ? t : []).sort((e, t) =>
            null != r && e.id === r.id ? -1 : null != r && t.id === r.id ? 1 : e.name >= t.name ? -1 : 1,
        ),
        primarySKU: r,
    };
})(y);
