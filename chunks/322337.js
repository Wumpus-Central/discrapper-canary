n.d(t, {
    A: () => I,
    p: () => T,
}),
    n(896048),
    n(638769);
var r = n(627968),
    i = n(64700),
    l = n(311907),
    o = n(397927),
    a = n(442433),
    s = n(543594),
    c = n(587895),
    u = n(67480),
    E = n(371794),
    d = n(985018);

function _(e, t, n) {
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
let T = {
    DropdownSizes: s.A.DropdownSizes,
    Sizes: s.A.Sizes,
    Colors: s.A.Colors,
    Looks: s.A.Looks,
};
class A extends i.PureComponent {
    render() {
        var e, t;
        let n = this.props,
            { skus: i, children: l, applicationId: o, primarySKU: a, onSKUSelect: c } = n,
            u = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    i,
                    l = {};
                if ("u" > typeof Reflect && Reflect.ownKeys) {
                    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
                        (r = n[i]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                    return l;
                }
                if (
                    ((l = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = {},
                            l = Object.getOwnPropertyNames(e);
                        for (r = 0; r < l.length; r++)
                            (n = l[r]),
                                !(t.indexOf(n) >= 0) &&
                                    Object.prototype.propertyIsEnumerable.call(e, n) &&
                                    (i[n] = e[n]);
                        return i;
                    })(e, t)),
                    Object.getOwnPropertySymbols)
                )
                    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                        (r = n[i]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                return l;
            })(n, ["skus", "children", "applicationId", "primarySKU", "onSKUSelect"]);
        return (0, r.jsx)(
            s.A,
            ((e = (function (e) {
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
                            _(e, t, n[t]);
                        });
                }
                return e;
            })(
                {
                    onClick: this.handleClick,
                    onDropdownClick: i.length > 0 ? this.handleContextMenu : null,
                    onContextMenu: i.length > 0 ? this.handleContextMenu : void 0,
                },
                u,
            )),
            (t = t =
                {
                    children: l,
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(t)).forEach(function (n) {
                      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                  }),
            e),
        );
    }
    constructor(...e) {
        super(...e),
            _(this, "renderContextMenu", () => {
                let { skus: e, onSKUSelect: t, onMenuSelect: n } = this.props;
                return (0, r.jsx)(o.W1t, {
                    "data-menu-migrated": !0,
                    onSelect: n,
                    navId: "test-skus",
                    "aria-label": d.intl.string(d.t.ogxXGq),
                    onClose: a.Z_,
                    children: e.map((e) =>
                        (0, r.jsx)(
                            o.Drp,
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
            _(this, "handleContextMenu", (e) => {
                e.stopPropagation(), a.jA(e, this.renderContextMenu);
            }),
            _(this, "handleClick", () => {
                let { onSKUSelect: e, primarySKU: t } = this.props;
                null != t && (null == e || e(t));
            });
    }
}
let I = l.Ay.connectStores([u.A, c.A], (e) => {
    var t;
    let { applicationId: n } = e,
        r = (0, E.VH)(n, c.A, u.A);
    return {
        skus: (null != (t = u.A.getForApplication(n)) ? t : []).sort((e, t) =>
            null != r && e.id === r.id ? -1 : null != r && t.id === r.id ? 1 : e.name >= t.name ? -1 : 1,
        ),
        primarySKU: r,
    };
})(A);
