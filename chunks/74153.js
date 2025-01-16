n(653041), n(47120);
var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(481060),
    s = n(16084),
    o = n(730749),
    c = n(812206),
    d = n(984370),
    u = n(703656),
    h = n(55563),
    m = n(981631),
    p = n(95702);
function g(e, t, n) {
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
class f extends r.PureComponent {
    componentDidMount() {
        let { sku: e, primarySkuId: t, isFetchingPrimarySku: n } = this.props;
        null != t && !n && null != e && (0, s.$N)(e.applicationId, t);
    }
    render() {
        let { sku: e, primarySku: t } = this.props,
            n = [],
            r = null;
        if (null != e) {
            let i = m.Z5c.APPLICATION_STORE_LISTING_SKU(e.id, e.slug);
            (r = i),
                null != t &&
                    n.push({
                        id: m.Z5c.APPLICATION_STORE_LISTING_SKU(t.id, t.slug),
                        label: t.name
                    }),
                n.push({
                    id: i,
                    label: e.name
                });
        }
        return (0, i.jsx)(a.Breadcrumbs, {
            renderCustomBreadcrumb: this.renderCustomBreadcrumb,
            onBreadcrumbClick: this.handleClick,
            breadcrumbs: n,
            activeId: r
        });
    }
    constructor(...e) {
        super(...e),
            g(this, 'handleClick', (e) => {
                let { sku: t } = this.props;
                (0, u.uL)(e.id, {
                    state: {
                        analyticsSource: {
                            object: m.qAy.NAVIGATION_LINK,
                            section: m.jXE.NAVIGATION,
                            page: null == t ? m.ZY5.STORE_DIRECTORY_BROWSE : m.ZY5.STORE_LISTING
                        }
                    }
                });
            }),
            g(this, 'renderCustomBreadcrumb', (e, t) =>
                (0, i.jsx)(d.Z.Title, {
                    className: t ? null : p.breadcrumb,
                    muted: !t,
                    children: e.label
                })
            );
    }
}
t.Z = (0, o.Z)(
    l.ZP.connectStores([c.Z, h.Z], (e) => {
        let { sku: t } = e,
            n = null != t ? c.Z.getApplication(t.applicationId) : null,
            i = null != n && null != n.primarySkuId && n.primarySkuId !== t.id ? n.primarySkuId : null;
        return {
            primarySkuId: i,
            isFetchingPrimarySku: null != i && h.Z.isFetching(i),
            primarySku: null != i ? h.Z.get(i) : null
        };
    })(f)
);
