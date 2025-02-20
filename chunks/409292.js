n.d(t, { Z: () => _ }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(512969),
    o = n(442837),
    a = n(493683),
    s = n(112724),
    c = n(108427),
    u = n(184107),
    d = n(410575),
    p = n(613311),
    h = n(601564),
    f = n(981631),
    g = n(479445);
function m(e, t, n) {
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
class b extends i.Component {
    componentDidMount() {
        this.fetchStoreListing(), (0, c.e)('channel_store_listing');
    }
    render() {
        return null != this.props.skuId
            ? (0, r.jsx)(d.Z, {
                  page: f.ZY5.CHANNEL_STORE_LISTING,
                  root: !0,
                  children: (0, r.jsx)('div', {
                      className: g.applicationStore,
                      children: (0, r.jsx)(l.AW, {
                          path: '*',
                          render: this.renderApplicationListing
                      })
                  })
              })
            : null;
    }
    constructor(...e) {
        super(...e),
            m(this, 'fetchStoreListing', (e) => {
                let { channel: t, inputSkuId: n } = this.props;
                return null != e ? a.Z.fetchChannelStoreListing(t.id, e) : null != n ? a.Z.fetchChannelStoreListing(t.id, n) : a.Z.fetchChannelStoreListing(t.id);
            }),
            m(this, 'renderApplicationListing', (e) => {
                let { location: t } = e,
                    { channel: n, skuId: i, width: l } = this.props;
                return (0, r.jsx)(p.Z, {
                    channel: n,
                    inputSkuId: i,
                    fetchStoreListing: this.fetchStoreListing,
                    location: t,
                    pageSize: (0, h.getPageSize)(l)
                });
            });
    }
}
let _ = (0, s.Z)(
    o.ZP.connectStores([u.Z], (e) => {
        let { channel: t, inputSkuId: n } = e;
        return { skuId: null != n ? n : u.Z.getSkuIdForChannel(t.id) };
    })(b)
);
