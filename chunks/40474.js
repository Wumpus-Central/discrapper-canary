"use strict";
n.d(t, { A: () => _ });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(939249),
    l = n(235986),
    u = n(147925),
    c = n(562573);
class d extends i.PureComponent {
    handleClick(e) {
        let { onBreadcrumbClick: t } = this.props;
        null != t && t(e);
    }
    renderBreadcrumb = (e, t) => {
        let {
                activeId: n,
                onBreadcrumbClick: i,
                breadcrumbs: s,
                renderCustomBreadcrumb: l,
                separatorClassName: d,
            } = this.props,
            _ = e.id === n,
            f = () => this.handleClick(e),
            p = t === s.length - 1,
            h =
                null != l
                    ? l(e, _)
                    : (0, r.jsx)("span", { className: a()(c.QF, { [c.aj]: _, [c._j]: null != i }), children: e.label });
        return (0, r.jsxs)(
            "div",
            {
                className: a()(c.hj, { [c.jQ]: p }),
                children: [
                    null != i ? (0, r.jsx)(o.D, { tag: "span", onClick: f, className: c.$O, children: h }) : h,
                    p ? null : (0, r.jsx)(u.A, { className: a()(c.LJ, d), direction: u.A.Directions.RIGHT }),
                ],
            },
            e.id,
        );
    };
    render() {
        let { breadcrumbs: e, className: t } = this.props,
            n = e.map(this.renderBreadcrumb);
        return (0, r.jsx)(l.A, { justify: l.A.Justify.START, className: a()(c.jD, t), children: n });
    }
}
let _ = d;
