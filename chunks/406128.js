n.d(t, { Z: () => d });
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(481060),
    l = n(600164),
    c = n(42656);
class u extends i.PureComponent {
    render() {
        let { note: e, title: t, action: n, className: i } = this.props;
        return (0, r.jsx)('div', {
            className: a()(c.wrapper, i),
            children: (0, r.jsxs)(l.Z, {
                className: c.flexWrapper,
                direction: l.Z.Direction.VERTICAL,
                align: l.Z.Align.CENTER,
                justify: l.Z.Justify.CENTER,
                children: [
                    (0, r.jsx)(l.Z.Child, {
                        grow: 0,
                        className: c.image
                    }),
                    (0, r.jsxs)(l.Z.Child, {
                        grow: 0,
                        className: c.text,
                        children: [
                            (0, r.jsx)(s.H, {
                                className: c.title,
                                children: t
                            }),
                            null != e
                                ? (0, r.jsx)('div', {
                                      className: c.note,
                                      children: e
                                  })
                                : null
                        ]
                    }),
                    n
                ]
            })
        });
    }
}
let d = u;
