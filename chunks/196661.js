n.d(t, { A: () => o }), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(800342),
    a = n(341338);
class s extends i.Component {
    componentDidMount() {
        this.fetchStoreListing();
    }
    render() {
        let { skuId: e, applicationId: t, slug: n, storeListingId: i, pageSize: l, location: s } = this.props;
        return (0, r.jsx)(a.A, {
            inputSkuId: e,
            applicationId: t,
            fetchStoreListing: this.fetchStoreListing,
            slug: n,
            storeListingId: i,
            location: s,
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
                return null != t ? (0, l.W6)(t) : null != i ? (0, l.QB)(i) : null != r ? (0, l.b)(r) : void 0;
            });
    }
}
let o = s;
