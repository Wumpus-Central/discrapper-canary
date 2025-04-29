n.d(t, { Z: () => f });
var r,
    i = n(200651),
    o = n(192379),
    a = n(772848),
    s = n(626135),
    l = n(251625),
    c = n(981631);
function u(e, t, n) {
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
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                u(e, t, n[t]);
            });
    }
    return e;
}
class f extends (r = o.Component) {
    renderProvider(e) {
        var t, n;
        let { section: r, page: o, object: a, objectType: l, children: c } = this.props,
            u = this.mergeLocation(e.location, this.getLocation(o, r, a, l)),
            d = this.getContext(u, null != (t = this._loadDate) ? t : e.loadDate, null != (n = this._loadId) ? n : e.loadId);
        return (0, i.jsx)(s.AnalyticsContext.Provider, {
            value: d,
            children: c
        });
    }
    render() {
        let { context: e } = this.props;
        return null != e ? this.renderProvider(e) : (0, i.jsx)(s.AnalyticsContext.Consumer, { children: (e) => this.renderProvider(e) });
    }
    constructor(e) {
        super(e),
            u(this, '_loadId', null),
            u(this, '_loadDate', this.props.root ? Date.now() : null),
            u(
                this,
                'getLocation',
                (0, l.oH)((e, t, n, r) => {
                    let i = {};
                    return null != e && (i.page = e), null != t && (i.section = t), null != n && (i.object = n), null != r && (i.objectType = r), i;
                })
            ),
            u(
                this,
                'mergeLocation',
                (0, l.oH)((e, t) => d({}, e, t))
            ),
            u(
                this,
                'getContext',
                (0, l.oH)((e, t, n) => ({
                    location: e,
                    loadDate: t,
                    loadId: n
                }))
            ),
            null != e.loadId ? (this._loadId = e.loadId) : e.root && (this._loadId = (0, a.Z)());
    }
}
u(f, 'Pages', c.ZY5), u(f, 'Sections', c.jXE), u(f, 'Objects', c.qAy), u(f, 'ObjectTypes', c.Qqv), u(f, 'defaultProps', { root: !1 });
