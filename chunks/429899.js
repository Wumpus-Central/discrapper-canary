n(47120);
var i = n(200651),
    r = n(192379),
    l = n(558381),
    a = n(613311);
class s extends r.Component {
    componentDidMount() {
        this.fetchStoreListing();
    }
    render() {
        let { skuId: e, applicationId: t, slug: n, storeListingId: r, pageSize: l, location: s } = this.props;
        return (0, i.jsx)(a.Z, {
            inputSkuId: e,
            applicationId: t,
            fetchStoreListing: this.fetchStoreListing,
            slug: n,
            storeListingId: r,
            location: s,
            pageSize: l
        });
    }
    constructor(...e) {
        var t, n, i;
        super(...e),
            (t = this),
            (n = 'fetchStoreListing'),
            (i = (e) => {
                let { storeListingId: t, skuId: n, applicationId: i } = this.props,
                    r = null != e ? e : n;
                if (null != t) return (0, l.rV)(t);
                if (null != r) return (0, l.km)(r);
                if (null != i) return (0, l.Hq)(i);
            }),
            n in t
                ? Object.defineProperty(t, n, {
                      value: i,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[n] = i);
    }
}
t.Z = s;
