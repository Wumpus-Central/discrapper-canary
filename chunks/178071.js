n.d(t, {
    Z: () => p,
    y: () => h
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(442837),
    a = n(481060),
    s = n(239091),
    o = n(585237),
    d = n(551428),
    c = n(388032);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let h = {
    DropdownSizes: o.Z.DropdownSizes,
    Sizes: o.Z.Sizes,
    Colors: o.Z.Colors,
    Looks: o.Z.Looks
};
class m extends l.PureComponent {
    render() {
        let { storeListings: e, primaryStoreListing: t, skuId: n, onStoreListingSelect: l, currentStoreListingId: r, ...a } = this.props,
            s = null != t ? 1 : 0;
        return (s += e.length) < 2
            ? null
            : (0, i.jsx)(o.Z, {
                  onClick: this.handleContextMenu,
                  onDropdownClick: this.handleContextMenu,
                  onContextMenu: this.handleContextMenu,
                  ...a,
                  children: c.intl.string(c.t.hElye3)
              });
    }
    constructor(...e) {
        super(...e),
            u(this, 'renderContextMenu', () => {
                let { storeListings: e, onStoreListingSelect: t, currentStoreListingId: n, onMenuSelect: l } = this.props,
                    r = e.map((e) =>
                        e.id !== n
                            ? (0, i.jsx)(a.sNh, {
                                  id: ''.concat(e.id),
                                  label: e.id,
                                  action: () => {
                                      s.Zy(), null == t || t(e);
                                  }
                              })
                            : null
                    );
                return (0, i.jsx)(a.v2r, {
                    onSelect: l,
                    navId: 'test-store-listing',
                    'aria-label': c.intl.string(c.t.ogxXGh),
                    onClose: s.Zy,
                    children: r
                });
            }),
            u(this, 'handleContextMenu', (e) => {
                e.stopPropagation(), s.vq(e, this.renderContextMenu);
            });
    }
}
let p = r.ZP.connectStores([d.Z], (e) => {
    let { skuId: t } = e;
    return {
        storeListings: d.Z.getUnpublishedForSKU(t),
        primaryStoreListing: d.Z.getForSKU(t)
    };
})(m);
