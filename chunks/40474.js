var n = l(477900),
    r = l(582128),
    a = l(503698),
    i = l.n(a),
    c = l(939249),
    t = l(235986),
    d = l(147925),
    h = l(390758);
class p extends r.PureComponent {
    handleClick(s) {
        let { onBreadcrumbClick: e } = this.props;
        null != e && e(s);
    }
    renderBreadcrumb = (s, e) => {
        let {
                activeId: l,
                onBreadcrumbClick: r,
                breadcrumbs: a,
                renderCustomBreadcrumb: t,
                separatorClassName: p,
            } = this.props,
            u = s.id === l,
            j = () => this.handleClick(s),
            o = e === a.length - 1,
            m =
                null != t
                    ? t(s, u)
                    : (0, n.jsx)("span", { className: i()(h.QF, { [h.aj]: u, [h._j]: null != r }), children: s.label });
        return (0, n.jsxs)(
            "div",
            {
                className: i()(h.hj, { [h.jQ]: o }),
                children: [
                    null != r ? (0, n.jsx)(c.D, { tag: "span", onClick: j, className: h.$O, children: m }) : m,
                    o ? null : (0, n.jsx)(d.A, { className: i()(h.LJ, p), direction: d.A.Directions.RIGHT }),
                ],
            },
            s.id,
        );
    };
    render() {
        let { breadcrumbs: s, className: e } = this.props,
            l = s.map(this.renderBreadcrumb);
        return (0, n.jsx)(t.A, { justify: t.A.Justify.START, className: i()(h.jD, e), children: l });
    }
}
l.d(e, {}, { A: p });
