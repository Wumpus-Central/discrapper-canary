n.d(t, { Z: () => s }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(558381),
    a = n(613311);
class o extends i.Component {
    componentDidMount() {
        this.fetchStoreListing();
    }
    render() {
        let { skuId: e, applicationId: t, slug: n, storeListingId: i, pageSize: l, location: o } = this.props;
        return (0, r.jsx)(a.Z, {
            inputSkuId: e,
            applicationId: t,
            fetchStoreListing: this.fetchStoreListing,
            slug: n,
            storeListingId: i,
            location: o,
            pageSize: l,
        });
    }
    constructor(...e) {
        super(...e),
            (function (e, t, n) {
                t in e
                    ? Object.defineProperty(e, t, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (e[t] = n);
            })(this, "fetchStoreListing", (e) => {
                let { storeListingId: t, skuId: n, applicationId: r } = this.props,
                    i = null != e ? e : n;
                return null != t ? (0, l.rV)(t) : null != i ? (0, l.km)(i) : null != r ? (0, l.Hq)(r) : void 0;
            });
    }
}
let s = o;
