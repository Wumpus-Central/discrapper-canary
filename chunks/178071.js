n.d(t, {
    y: function () {
        return h;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(481060),
    s = n(239091),
    o = n(585237),
    c = n(551428),
    d = n(388032);
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
class m extends r.PureComponent {
    render() {
        let { storeListings: e, primaryStoreListing: t, skuId: n, onStoreListingSelect: r, currentStoreListingId: l, ...a } = this.props,
            s = null != t ? 1 : 0;
        return (s += e.length) < 2
            ? null
            : (0, i.jsx)(o.Z, {
                  onClick: this.handleContextMenu,
                  onDropdownClick: this.handleContextMenu,
                  onContextMenu: this.handleContextMenu,
                  ...a,
                  children: d.intl.string(d.t.hElye3)
              });
    }
    constructor(...e) {
        super(...e),
            u(this, 'renderContextMenu', () => {
                let { storeListings: e, onStoreListingSelect: t, currentStoreListingId: n, onMenuSelect: r } = this.props,
                    l = e.map((e) =>
                        e.id !== n
                            ? (0, i.jsx)(a.MenuItem, {
                                  id: ''.concat(e.id),
                                  label: e.id,
                                  action: () => {
                                      s.Zy(), null == t || t(e);
                                  }
                              })
                            : null
                    );
                return (0, i.jsx)(a.Menu, {
                    onSelect: r,
                    navId: 'test-store-listing',
                    'aria-label': d.intl.string(d.t.ogxXGh),
                    onClose: s.Zy,
                    children: l
                });
            }),
            u(this, 'handleContextMenu', (e) => {
                e.stopPropagation(), s.vq(e, this.renderContextMenu);
            });
    }
}
t.Z = l.ZP.connectStores([c.Z], (e) => {
    let { skuId: t } = e;
    return {
        storeListings: c.Z.getUnpublishedForSKU(t),
        primaryStoreListing: c.Z.getForSKU(t)
    };
})(m);
