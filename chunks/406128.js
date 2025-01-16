var i = r(200651),
    a = r(192379),
    s = r(120356),
    o = r.n(s),
    l = r(481060),
    u = r(600164),
    c = r(186133);
class d extends a.PureComponent {
    render() {
        let { note: e, title: n, action: r, className: a } = this.props;
        return (0, i.jsx)('div', {
            className: o()(c.wrapper, a),
            children: (0, i.jsxs)(u.Z, {
                className: c.flexWrapper,
                direction: u.Z.Direction.VERTICAL,
                align: u.Z.Align.CENTER,
                justify: u.Z.Justify.CENTER,
                children: [
                    (0, i.jsx)(u.Z.Child, {
                        grow: 0,
                        className: c.image
                    }),
                    (0, i.jsxs)(u.Z.Child, {
                        grow: 0,
                        className: c.text,
                        children: [
                            (0, i.jsx)(l.H, {
                                className: c.title,
                                children: n
                            }),
                            null != e
                                ? (0, i.jsx)('div', {
                                      className: c.note,
                                      children: e
                                  })
                                : null
                        ]
                    }),
                    r
                ]
            })
        });
    }
}
n.Z = d;
