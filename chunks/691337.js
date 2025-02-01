n.d(t, { Z: () => _ }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    l = n(600164),
    u = n(259580),
    c = n(540642);
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
class f extends r.PureComponent {
    handleClick(e) {
        let { onBreadcrumbClick: t } = this.props;
        null != t && t(e);
    }
    render() {
        let { breadcrumbs: e, className: t } = this.props,
            n = e.map(this.renderBreadcrumb);
        return (0, i.jsx)(l.Z, {
            justify: l.Z.Justify.START,
            className: s()(c.breadcrumbs, t),
            children: n
        });
    }
    constructor(...e) {
        super(...e),
            d(this, 'renderBreadcrumb', (e, t) => {
                let { activeId: n, onBreadcrumbClick: r, breadcrumbs: a, renderCustomBreadcrumb: l, separatorClassName: d } = this.props,
                    f = e.id === n,
                    _ = () => this.handleClick(e),
                    p = t === a.length - 1,
                    h =
                        null != l
                            ? l(e, f)
                            : (0, i.jsx)('span', {
                                  className: s()(c.breadcrumb, {
                                      [c.activeBreadcrumb]: f,
                                      [c.interactiveBreadcrumb]: null != r
                                  }),
                                  children: e.label
                              });
                return (0, i.jsxs)(
                    'div',
                    {
                        className: s()(c.breadcrumbWrapper, { [c.breadcrumbFinalWrapper]: p }),
                        children: [
                            null != r
                                ? (0, i.jsx)(o.P3F, {
                                      tag: 'span',
                                      onClick: _,
                                      className: c.breadcrumbClickWrapper,
                                      children: h
                                  })
                                : h,
                            p
                                ? null
                                : (0, i.jsx)(u.Z, {
                                      className: s()(c.breadcrumbArrow, d),
                                      direction: u.Z.Directions.RIGHT
                                  })
                        ]
                    },
                    e.id
                );
            });
    }
}
let _ = f;
