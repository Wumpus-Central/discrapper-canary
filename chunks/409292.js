n.d(t, { Z: () => b }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(828700),
    a = n(442837),
    s = n(493683),
    o = n(112724),
    c = n(108427),
    u = n(184107),
    d = n(410575),
    p = n(613311),
    f = n(601564),
    g = n(981631),
    h = n(430355);
function m(e, t, n) {
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
class _ extends i.Component {
    componentDidMount() {
        this.fetchStoreListing(), (0, c.e)("channel_store_listing");
    }
    render() {
        return null != this.props.skuId
            ? (0, r.jsx)(d.Z, {
                  page: g.ZY5.CHANNEL_STORE_LISTING,
                  root: !0,
                  children: (0, r.jsx)("div", {
                      className: h.applicationStore,
                      children: (0, r.jsx)(l.AW, {
                          path: "*",
                          render: this.renderApplicationListing,
                      }),
                  }),
              })
            : null;
    }
    constructor(...e) {
        super(...e),
            m(this, "fetchStoreListing", (e) => {
                let { channel: t, inputSkuId: n } = this.props;
                return null != e
                    ? s.Z.fetchChannelStoreListing(t.id, e)
                    : null != n
                      ? s.Z.fetchChannelStoreListing(t.id, n)
                      : s.Z.fetchChannelStoreListing(t.id);
            }),
            m(this, "renderApplicationListing", (e) => {
                let { location: t } = e,
                    { channel: n, skuId: i, width: l } = this.props;
                return (0, r.jsx)(p.Z, {
                    channel: n,
                    inputSkuId: i,
                    fetchStoreListing: this.fetchStoreListing,
                    location: t,
                    pageSize: (0, f.getPageSize)(l),
                });
            });
    }
}
let b = (0, o.Z)(
    a.ZP.connectStores([u.Z], (e) => {
        let { channel: t, inputSkuId: n } = e;
        return { skuId: null != n ? n : u.Z.getSkuIdForChannel(t.id) };
    })(_),
);
