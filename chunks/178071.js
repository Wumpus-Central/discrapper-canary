n.d(t, {
    Z: () => h,
    y: () => p,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(481060),
    s = n(239091),
    o = n(585237),
    c = n(551428),
    u = n(388032);
function d(e, t, n) {
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
let p = {
    DropdownSizes: o.Z.DropdownSizes,
    Sizes: o.Z.Sizes,
    Colors: o.Z.Colors,
    Looks: o.Z.Looks,
};
class f extends i.PureComponent {
    render() {
        var e, t;
        let n = this.props,
            {
                storeListings: i,
                primaryStoreListing: l,
                skuId: a,
                onStoreListingSelect: s,
                currentStoreListingId: c,
            } = n,
            p = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    i = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = {},
                            l = Object.keys(e);
                        for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                        return i;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < l.length; r++)
                        (n = l[r]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                }
                return i;
            })(n, ["storeListings", "primaryStoreListing", "skuId", "onStoreListingSelect", "currentStoreListingId"]),
            f = +(null != l);
        return (f += i.length) < 2
            ? null
            : (0, r.jsx)(
                  o.Z,
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
                                  d(e, t, n[t]);
                              });
                      }
                      return e;
                  })(
                      {
                          onClick: this.handleContextMenu,
                          onDropdownClick: this.handleContextMenu,
                          onContextMenu: this.handleContextMenu,
                      },
                      p,
                  )),
                  (t = t = { children: u.intl.string(u.t.hElye1) }),
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
            d(this, "renderContextMenu", () => {
                let {
                        storeListings: e,
                        onStoreListingSelect: t,
                        currentStoreListingId: n,
                        onMenuSelect: i,
                    } = this.props,
                    l = e.map((e) =>
                        e.id !== n
                            ? (0, r.jsx)(a.sNh, {
                                  id: "".concat(e.id),
                                  label: e.id,
                                  action: () => {
                                      s.Zy(), null == t || t(e);
                                  },
                              })
                            : null,
                    );
                return (0, r.jsx)(a.v2r, {
                    onSelect: i,
                    navId: "test-store-listing",
                    "aria-label": u.intl.string(u.t.ogxXGq),
                    onClose: s.Zy,
                    children: l,
                });
            }),
            d(this, "handleContextMenu", (e) => {
                e.stopPropagation(), s.vq(e, this.renderContextMenu);
            });
    }
}
let h = l.ZP.connectStores([c.Z], (e) => {
    let { skuId: t } = e;
    return {
        storeListings: c.Z.getUnpublishedForSKU(t),
        primaryStoreListing: c.Z.getForSKU(t),
    };
})(f);
