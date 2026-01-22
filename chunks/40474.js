n.d(t, { A: () => p }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927),
    l = n(235986),
    c = n(147925),
    u = n(317128);
function d(e, t, n) {
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
class f extends i.PureComponent {
    handleClick(e) {
        let { onBreadcrumbClick: t } = this.props;
        null != t && t(e);
    }
    render() {
        let { breadcrumbs: e, className: t } = this.props,
            n = e.map(this.renderBreadcrumb);
        return (0, r.jsx)(l.A, {
            justify: l.A.Justify.START,
            className: s()(u.jD, t),
            children: n,
        });
    }
    constructor(...e) {
        super(...e),
            d(this, "renderBreadcrumb", (e, t) => {
                let {
                        activeId: n,
                        onBreadcrumbClick: i,
                        breadcrumbs: a,
                        renderCustomBreadcrumb: l,
                        separatorClassName: d,
                    } = this.props,
                    f = e.id === n,
                    p = () => this.handleClick(e),
                    _ = t === a.length - 1,
                    h =
                        null != l
                            ? l(e, f)
                            : (0, r.jsx)("span", {
                                  className: s()(u.QF, {
                                      [u.aj]: f,
                                      [u._j]: null != i,
                                  }),
                                  children: e.label,
                              });
                return (0, r.jsxs)(
                    "div",
                    {
                        className: s()(u.hj, { [u.jQ]: _ }),
                        children: [
                            null != i
                                ? (0, r.jsx)(o.DUT, {
                                      tag: "span",
                                      onClick: p,
                                      className: u.$O,
                                      children: h,
                                  })
                                : h,
                            _
                                ? null
                                : (0, r.jsx)(c.A, {
                                      className: s()(u.LJ, d),
                                      direction: c.A.Directions.RIGHT,
                                  }),
                        ],
                    },
                    e.id,
                );
            });
    }
}
let p = f;
