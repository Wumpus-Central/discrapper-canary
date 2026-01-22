n.d(t, {
    A: () => m,
}),
    n(321073),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(311907),
    a = n(397927),
    s = n(830382),
    o = n(707606),
    c = n(587895),
    u = n(742589),
    d = n(976860),
    p = n(67480),
    f = n(652215),
    h = n(190323);

function A(e, t, n) {
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
class g extends i.PureComponent {
    componentDidMount() {
        let { sku: e, primarySkuId: t, isFetchingPrimarySku: n } = this.props;
        null == t || n || null == e || (0, s.EX)(e.applicationId, t);
    }
    render() {
        let { sku: e, primarySku: t } = this.props,
            n = [],
            i = null;
        if (null != e) {
            let r = f.BVt.APPLICATION_STORE_LISTING_SKU(e.id, e.slug);
            (i = r),
                null != t &&
                    n.push({
                        id: f.BVt.APPLICATION_STORE_LISTING_SKU(t.id, t.slug),
                        label: t.name,
                    }),
                n.push({
                    id: r,
                    label: e.name,
                });
        }
        return (0, r.jsx)(a.BIu, {
            renderCustomBreadcrumb: this.renderCustomBreadcrumb,
            onBreadcrumbClick: this.handleClick,
            breadcrumbs: n,
            activeId: i,
        });
    }
    constructor(...e) {
        super(...e),
            A(this, "handleClick", (e) => {
                let { sku: t } = this.props;
                (0, d.pX)(e.id, {
                    state: {
                        analyticsSource: {
                            object: f.ZSU.NAVIGATION_LINK,
                            section: f.JJy.NAVIGATION,
                            page: null == t ? f.liQ.STORE_DIRECTORY_BROWSE : f.liQ.STORE_LISTING,
                        },
                    },
                });
            }),
            A(this, "renderCustomBreadcrumb", (e, t) =>
                (0, r.jsx)(u.A.Title, {
                    className: t ? null : h.Q,
                    muted: !t,
                    children: e.label,
                }),
            );
    }
}
let m = (0, o.A)(
    l.Ay.connectStores([c.A, p.A], (e) => {
        let { sku: t } = e,
            n = null != t ? c.A.getApplication(t.applicationId) : null,
            r = null != n && null != n.primarySkuId && n.primarySkuId !== t.id ? n.primarySkuId : null;
        return {
            primarySkuId: r,
            isFetchingPrimarySku: null != r && p.A.isFetching(r),
            primarySku: null != r ? p.A.get(r) : null,
        };
    })(g),
);
