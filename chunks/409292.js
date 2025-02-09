n.d(t, { Z: () => E }), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(512969),
    a = n(442837),
    s = n(493683),
    o = n(112724),
    c = n(108427),
    d = n(184107),
    u = n(410575),
    h = n(613311),
    m = n(601564),
    p = n(981631),
    g = n(912960);
function _(e, t, n) {
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
class f extends l.Component {
    componentDidMount() {
        this.fetchStoreListing(), (0, c.e)('channel_store_listing');
    }
    render() {
        return null != this.props.skuId
            ? (0, i.jsx)(u.Z, {
                  page: p.ZY5.CHANNEL_STORE_LISTING,
                  root: !0,
                  children: (0, i.jsx)('div', {
                      className: g.applicationStore,
                      children: (0, i.jsx)(r.AW, {
                          path: '*',
                          render: this.renderApplicationListing
                      })
                  })
              })
            : null;
    }
    constructor(...e) {
        super(...e),
            _(this, 'fetchStoreListing', (e) => {
                let { channel: t, inputSkuId: n } = this.props;
                return null != e ? s.Z.fetchChannelStoreListing(t.id, e) : null != n ? s.Z.fetchChannelStoreListing(t.id, n) : s.Z.fetchChannelStoreListing(t.id);
            }),
            _(this, 'renderApplicationListing', (e) => {
                let { location: t } = e,
                    { channel: n, skuId: l, width: r } = this.props;
                return (0, i.jsx)(h.Z, {
                    channel: n,
                    inputSkuId: l,
                    fetchStoreListing: this.fetchStoreListing,
                    location: t,
                    pageSize: (0, m.getPageSize)(r)
                });
            });
    }
}
let E = (0, o.Z)(
    a.ZP.connectStores([d.Z], (e) => {
        let { channel: t, inputSkuId: n } = e;
        return { skuId: null != n ? n : d.Z.getSkuIdForChannel(t.id) };
    })(f)
);
