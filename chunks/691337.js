var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(481060),
    c = r(600164),
    d = r(259580),
    f = r(540642);
function p(e, n, r) {
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
class h extends o.PureComponent {
    handleClick(e) {
        let { onBreadcrumbClick: n } = this.props;
        null != n && n(e);
    }
    render() {
        let { breadcrumbs: e, className: n } = this.props,
            r = e.map(this.renderBreadcrumb);
        return (0, a.jsx)(c.Z, {
            justify: c.Z.Justify.START,
            className: l()(f.breadcrumbs, n),
            children: r
        });
    }
    constructor(...e) {
        super(...e),
            p(this, 'renderBreadcrumb', (e, n) => {
                let { activeId: r, onBreadcrumbClick: i, breadcrumbs: o, renderCustomBreadcrumb: s, separatorClassName: c } = this.props,
                    p = e.id === r,
                    h = () => this.handleClick(e),
                    _ = n === o.length - 1,
                    m =
                        null != s
                            ? s(e, p)
                            : (0, a.jsx)('span', {
                                  className: l()(f.breadcrumb, {
                                      [f.activeBreadcrumb]: p,
                                      [f.interactiveBreadcrumb]: null != i
                                  }),
                                  children: e.label
                              });
                return (0, a.jsxs)(
                    'div',
                    {
                        className: l()(f.breadcrumbWrapper, { [f.breadcrumbFinalWrapper]: _ }),
                        children: [
                            null != i
                                ? (0, a.jsx)(u.Clickable, {
                                      tag: 'span',
                                      onClick: h,
                                      className: f.breadcrumbClickWrapper,
                                      children: m
                                  })
                                : m,
                            _
                                ? null
                                : (0, a.jsx)(d.Z, {
                                      className: l()(f.breadcrumbArrow, c),
                                      direction: d.Z.Directions.RIGHT
                                  })
                        ]
                    },
                    e.id
                );
            });
    }
}
n.Z = h;
