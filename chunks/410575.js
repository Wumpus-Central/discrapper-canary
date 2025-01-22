r.d(n, {
    Z: function () {
        return f;
    }
});
var i,
    a = r(200651),
    o = r(192379),
    s = r(772848),
    l = r(626135),
    u = r(251625),
    c = r(981631);
function d(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
class f extends (i = o.Component) {
    renderProvider(e) {
        var n, r;
        let { section: i, page: o, object: s, objectType: u, children: c } = this.props,
            d = this.mergeLocation(e.location, this.getLocation(o, i, s, u)),
            f = this.getContext(d, null !== (n = this._loadDate) && void 0 !== n ? n : e.loadDate, null !== (r = this._loadId) && void 0 !== r ? r : e.loadId);
        return (0, a.jsx)(l.AnalyticsContext.Provider, {
            value: f,
            children: c
        });
    }
    render() {
        let { context: e } = this.props;
        return null != e ? this.renderProvider(e) : (0, a.jsx)(l.AnalyticsContext.Consumer, { children: (e) => this.renderProvider(e) });
    }
    constructor(e) {
        super(e),
            d(this, '_loadId', null),
            d(this, '_loadDate', this.props.root ? Date.now() : null),
            d(
                this,
                'getLocation',
                (0, u.oH)((e, n, r, i) => {
                    let a = {};
                    return null != e && (a.page = e), null != n && (a.section = n), null != r && (a.object = r), null != i && (a.objectType = i), a;
                })
            ),
            d(
                this,
                'mergeLocation',
                (0, u.oH)((e, n) => ({
                    ...e,
                    ...n
                }))
            ),
            d(
                this,
                'getContext',
                (0, u.oH)((e, n, r) => ({
                    location: e,
                    loadDate: n,
                    loadId: r
                }))
            ),
            null != e.loadId ? (this._loadId = e.loadId) : e.root && (this._loadId = (0, s.Z)());
    }
}
d(f, 'Pages', c.ZY5), d(f, 'Sections', c.jXE), d(f, 'Objects', c.qAy), d(f, 'ObjectTypes', c.Qqv), d(f, 'defaultProps', { root: !1 });
