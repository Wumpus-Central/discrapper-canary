n.d(l, { A: () => p });
var r = n(627968),
    s = n(64700),
    t = n(503698),
    i = n.n(t),
    a = n(939249),
    d = n(235986),
    c = n(147925),
    o = n(562573);
class u extends s.PureComponent {
    handleClick(e) {
        let { onBreadcrumbClick: l } = this.props;
        null != l && l(e);
    }
    renderBreadcrumb = (e, l) => {
        let {
                activeId: n,
                onBreadcrumbClick: s,
                breadcrumbs: t,
                renderCustomBreadcrumb: d,
                separatorClassName: u,
            } = this.props,
            p = e.id === n,
            m = () => this.handleClick(e),
            N = l === t.length - 1,
            A =
                null != d
                    ? d(e, p)
                    : (0, r.jsx)("span", { className: i()(o.QF, { [o.aj]: p, [o._j]: null != s }), children: e.label });
        return (0, r.jsxs)(
            "div",
            {
                className: i()(o.hj, { [o.jQ]: N }),
                children: [
                    null != s ? (0, r.jsx)(a.D, { tag: "span", onClick: m, className: o.$O, children: A }) : A,
                    N ? null : (0, r.jsx)(c.A, { className: i()(o.LJ, u), direction: c.A.Directions.RIGHT }),
                ],
            },
            e.id,
        );
    };
    render() {
        let { breadcrumbs: e, className: l } = this.props,
            n = e.map(this.renderBreadcrumb);
        return (0, r.jsx)(d.A, { justify: d.A.Justify.START, className: i()(o.jD, l), children: n });
    }
}
let p = u;
