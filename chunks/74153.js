n.d(t, { Z: () => _ }), n(539854), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(481060),
    s = n(16084),
    o = n(730749),
    c = n(812206),
    u = n(984370),
    d = n(703656),
    p = n(55563),
    f = n(981631),
    h = n(455241);
function g(e, t, n) {
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
class m extends i.PureComponent {
    componentDidMount() {
        let { sku: e, primarySkuId: t, isFetchingPrimarySku: n } = this.props;
        null == t || n || null == e || (0, s.$N)(e.applicationId, t);
    }
    render() {
        let { sku: e, primarySku: t } = this.props,
            n = [],
            i = null;
        if (null != e) {
            let r = f.Z5c.APPLICATION_STORE_LISTING_SKU(e.id, e.slug);
            (i = r),
                null != t &&
                    n.push({
                        id: f.Z5c.APPLICATION_STORE_LISTING_SKU(t.id, t.slug),
                        label: t.name,
                    }),
                n.push({
                    id: r,
                    label: e.name,
                });
        }
        return (0, r.jsx)(a.OoM, {
            renderCustomBreadcrumb: this.renderCustomBreadcrumb,
            onBreadcrumbClick: this.handleClick,
            breadcrumbs: n,
            activeId: i,
        });
    }
    constructor(...e) {
        super(...e),
            g(this, "handleClick", (e) => {
                let { sku: t } = this.props;
                (0, d.uL)(e.id, {
                    state: {
                        analyticsSource: {
                            object: f.qAy.NAVIGATION_LINK,
                            section: f.jXE.NAVIGATION,
                            page: null == t ? f.ZY5.STORE_DIRECTORY_BROWSE : f.ZY5.STORE_LISTING,
                        },
                    },
                });
            }),
            g(this, "renderCustomBreadcrumb", (e, t) =>
                (0, r.jsx)(u.Z.Title, {
                    className: t ? null : h.breadcrumb,
                    muted: !t,
                    children: e.label,
                }),
            );
    }
}
let _ = (0, o.Z)(
    l.ZP.connectStores([c.Z, p.Z], (e) => {
        let { sku: t } = e,
            n = null != t ? c.Z.getApplication(t.applicationId) : null,
            r = null != n && null != n.primarySkuId && n.primarySkuId !== t.id ? n.primarySkuId : null;
        return {
            primarySkuId: r,
            isFetchingPrimarySku: null != r && p.Z.isFetching(r),
            primarySku: null != r ? p.Z.get(r) : null,
        };
    })(m),
);
