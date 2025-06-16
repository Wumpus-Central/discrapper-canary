n.d(t, { Z: () => _ }), n(388685);
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(600164),
    c = n(259580),
    u = n(92675);
function d(e, t, n) {
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
class f extends i.PureComponent {
    handleClick(e) {
        let { onBreadcrumbClick: t } = this.props;
        null != t && t(e);
    }
    render() {
        let { breadcrumbs: e, className: t } = this.props,
            n = e.map(this.renderBreadcrumb);
        return (0, r.jsx)(l.Z, {
            justify: l.Z.Justify.START,
            className: o()(u.breadcrumbs, t),
            children: n
        });
    }
    constructor(...e) {
        super(...e),
            d(this, 'renderBreadcrumb', (e, t) => {
                let { activeId: n, onBreadcrumbClick: i, breadcrumbs: a, renderCustomBreadcrumb: l, separatorClassName: d } = this.props,
                    f = e.id === n,
                    _ = () => this.handleClick(e),
                    p = t === a.length - 1,
                    h =
                        null != l
                            ? l(e, f)
                            : (0, r.jsx)('span', {
                                  className: o()(u.breadcrumb, {
                                      [u.activeBreadcrumb]: f,
                                      [u.interactiveBreadcrumb]: null != i
                                  }),
                                  children: e.label
                              });
                return (0, r.jsxs)(
                    'div',
                    {
                        className: o()(u.breadcrumbWrapper, { [u.breadcrumbFinalWrapper]: p }),
                        children: [
                            null != i
                                ? (0, r.jsx)(s.P3F, {
                                      tag: 'span',
                                      onClick: _,
                                      className: u.breadcrumbClickWrapper,
                                      children: h
                                  })
                                : h,
                            p
                                ? null
                                : (0, r.jsx)(c.Z, {
                                      className: o()(u.breadcrumbArrow, d),
                                      direction: c.Z.Directions.RIGHT
                                  })
                        ]
                    },
                    e.id
                );
            });
    }
}
let _ = f;
