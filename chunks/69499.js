n.d(t, {
    E: () => b,
    Z: () => O,
}),
    n(388685),
    n(642613);
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(481060),
    s = n(239091),
    l = n(585237),
    c = n(812206),
    u = n(55563),
    d = n(73346),
    f = n(388032);
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
function p(e) {
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
        i = E(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let b = {
    DropdownSizes: l.Z.DropdownSizes,
    Sizes: l.Z.Sizes,
    Colors: l.Z.Colors,
    Looks: l.Z.Looks,
};
class y extends i.PureComponent {
    render() {
        let e = this.props,
            { skus: t, children: n, applicationId: i, primarySKU: a, onSKUSelect: o } = e,
            s = g(e, ["skus", "children", "applicationId", "primarySKU", "onSKUSelect"]);
        return (0, r.jsx)(
            l.Z,
            m(
                p(
                    {
                        onClick: this.handleClick,
                        onDropdownClick: t.length > 0 ? this.handleContextMenu : null,
                        onContextMenu: t.length > 0 ? this.handleContextMenu : void 0,
                    },
                    s,
                ),
                { children: n },
            ),
        );
    }
    constructor(...e) {
        super(...e),
            _(this, "renderContextMenu", () => {
                let { skus: e, onSKUSelect: t, onMenuSelect: n } = this.props;
                return (0, r.jsx)(o.v2r, {
                    onSelect: n,
                    navId: "test-skus",
                    "aria-label": f.intl.string(f.t.ogxXGq),
                    onClose: s.Zy,
                    children: e.map((e) =>
                        (0, r.jsx)(
                            o.sNh,
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
                e.stopPropagation(), s.vq(e, this.renderContextMenu);
            }),
            _(this, "handleClick", () => {
                let { onSKUSelect: e, primarySKU: t } = this.props;
                null != t && (null == e || e(t));
            });
    }
}
let O = a.ZP.connectStores([u.Z, c.Z], (e) => {
    var t;
    let { applicationId: n } = e,
        r = (0, d.uF)(n, c.Z, u.Z);
    return {
        skus: (null != (t = u.Z.getForApplication(n)) ? t : []).sort((e, t) =>
            null != r && e.id === r.id ? -1 : null != r && t.id === r.id ? 1 : e.name >= t.name ? -1 : 1,
        ),
        primarySKU: r,
    };
})(y);
