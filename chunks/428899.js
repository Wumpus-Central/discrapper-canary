n.d(t, { A: () => p }), n(321073);
var i = n(627968),
    r = n(64700),
    a = n(311907),
    l = n(397927),
    s = n(830382),
    o = n(707606),
    d = n(587895),
    c = n(742589),
    u = n(976860),
    A = n(67480),
    h = n(652215),
    _ = n(190323);
class m extends r.PureComponent {
    componentDidMount() {
        let { sku: e, primarySkuId: t, isFetchingPrimarySku: n } = this.props;
        null == t || n || null == e || (0, s.EX)(e.applicationId, t);
    }
    handleClick = (e) => {
        let { sku: t } = this.props;
        (0, u.pX)(e.id, {
            state: {
                analyticsSource: {
                    object: h.ZSU.NAVIGATION_LINK,
                    section: h.JJy.NAVIGATION,
                    page: null == t ? h.liQ.STORE_DIRECTORY_BROWSE : h.liQ.STORE_LISTING,
                },
            },
        });
    };
    renderCustomBreadcrumb = (e, t) =>
        (0, i.jsx)(c.A.Title, { className: t ? null : _.Q, muted: !t, children: e.label });
    render() {
        let { sku: e, primarySku: t } = this.props,
            n = [],
            r = null;
        if (null != e) {
            let i = h.BVt.APPLICATION_STORE_LISTING_SKU(e.id, e.slug);
            (r = i),
                null != t && n.push({ id: h.BVt.APPLICATION_STORE_LISTING_SKU(t.id, t.slug), label: t.name }),
                n.push({ id: i, label: e.name });
        }
        return (0, i.jsx)(l.BIu, {
            renderCustomBreadcrumb: this.renderCustomBreadcrumb,
            onBreadcrumbClick: this.handleClick,
            breadcrumbs: n,
            activeId: r,
        });
    }
}
let p = (0, o.A)(
    a.Ay.connectStores([d.A, A.A], (e) => {
        let { sku: t } = e,
            n = null != t ? d.A.getApplication(t.applicationId) : null,
            i = null != n && null != n.primarySkuId && n.primarySkuId !== t.id ? n.primarySkuId : null;
        return {
            primarySkuId: i,
            isFetchingPrimarySku: null != i && A.A.isFetching(i),
            primarySku: null != i ? A.A.get(i) : null,
        };
    })(m),
);
