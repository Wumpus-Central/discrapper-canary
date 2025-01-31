n.d(t, { Z: () => o }), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(558381),
    a = n(613311);
class s extends l.Component {
    componentDidMount() {
        this.fetchStoreListing();
    }
    render() {
        let { skuId: e, applicationId: t, slug: n, storeListingId: l, pageSize: r, location: s } = this.props;
        return (0, i.jsx)(a.Z, {
            inputSkuId: e,
            applicationId: t,
            fetchStoreListing: this.fetchStoreListing,
            slug: n,
            storeListingId: l,
            location: s,
            pageSize: r
        });
    }
    constructor(...e) {
        var t, n;
        super(...e),
            (t = 'fetchStoreListing'),
            (n = (e) => {
                let { storeListingId: t, skuId: n, applicationId: i } = this.props,
                    l = null != e ? e : n;
                return null != t ? (0, r.rV)(t) : null != l ? (0, r.km)(l) : null != i ? (0, r.Hq)(i) : void 0;
            }),
            t in this
                ? Object.defineProperty(this, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (this[t] = n);
    }
}
let o = s;
