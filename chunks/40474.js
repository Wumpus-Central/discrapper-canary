"use strict";
n.d(t, { A: () => _ });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927),
    l = n(235986),
    u = n(147925),
    c = n(317128);
class d extends i.PureComponent {
    handleClick(e) {
        let { onBreadcrumbClick: t } = this.props;
        null != t && t(e);
    }
    renderBreadcrumb = (e, t) => {
        let {
                activeId: n,
                onBreadcrumbClick: i,
                breadcrumbs: a,
                renderCustomBreadcrumb: l,
                separatorClassName: d,
            } = this.props,
            _ = e.id === n,
            f = () => this.handleClick(e),
            p = t === a.length - 1,
            h =
                null != l
                    ? l(e, _)
                    : (0, r.jsx)("span", { className: s()(c.QF, { [c.aj]: _, [c._j]: null != i }), children: e.label });
        return (0, r.jsxs)(
            "div",
            {
                className: s()(c.hj, { [c.jQ]: p }),
                children: [
                    null != i ? (0, r.jsx)(o.DUT, { tag: "span", onClick: f, className: c.$O, children: h }) : h,
                    p ? null : (0, r.jsx)(u.A, { className: s()(c.LJ, d), direction: u.A.Directions.RIGHT }),
                ],
            },
            e.id,
        );
    };
    render() {
        let { breadcrumbs: e, className: t } = this.props,
            n = e.map(this.renderBreadcrumb);
        return (0, r.jsx)(l.A, { justify: l.A.Justify.START, className: s()(c.jD, t), children: n });
    }
}
let _ = d;
