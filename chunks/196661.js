n.d(t, { A: () => o });
var i = n(627968),
    r = n(64700),
    a = n(800342),
    l = n(341338);
class s extends r.Component {
    componentDidMount() {
        this.fetchStoreListing();
    }
    fetchStoreListing = (e) => {
        let { storeListingId: t, skuId: n, applicationId: i } = this.props,
            r = null != e ? e : n;
        return null != t ? (0, a.W6)(t) : null != r ? (0, a.QB)(r) : null != i ? (0, a.b)(i) : void 0;
    };
    render() {
        let { skuId: e, applicationId: t, slug: n, storeListingId: r, pageSize: a, location: s } = this.props;
        return (0, i.jsx)(l.A, {
            inputSkuId: e,
            applicationId: t,
            fetchStoreListing: this.fetchStoreListing,
            slug: n,
            storeListingId: r,
            location: s,
            pageSize: a,
        });
    }
}
let o = s;
