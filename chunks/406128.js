n.d(t, { Z: () => d });
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    l = n(600164),
    u = n(636233);
class c extends r.PureComponent {
    render() {
        let { note: e, title: t, action: n, className: r } = this.props;
        return (0, i.jsx)('div', {
            className: s()(u.wrapper, r),
            children: (0, i.jsxs)(l.Z, {
                className: u.flexWrapper,
                direction: l.Z.Direction.VERTICAL,
                align: l.Z.Align.CENTER,
                justify: l.Z.Justify.CENTER,
                children: [
                    (0, i.jsx)(l.Z.Child, {
                        grow: 0,
                        className: u.image
                    }),
                    (0, i.jsxs)(l.Z.Child, {
                        grow: 0,
                        className: u.text,
                        children: [
                            (0, i.jsx)(o.H, {
                                className: u.title,
                                children: t
                            }),
                            null != e
                                ? (0, i.jsx)('div', {
                                      className: u.note,
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
let d = c;
