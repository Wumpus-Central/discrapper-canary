"use strict";
i.d(t, { A: () => v });
var n = i(627968),
    s = i(64700),
    a = i(503698),
    l = i.n(a),
    r = i(311907),
    o = i(685603),
    d = i(467627),
    c = i(967198),
    u = i(855790),
    h = i(335022),
    _ = i(714977),
    p = i(266244),
    f = i(439817),
    m = i(985018),
    g = i(156052);
function A(e) {
    let { closePopout: t } = e;
    return (0, n.jsx)(_.A, { onClose: t });
}
class x extends s.PureComponent {
    static defaultProps = { contained: !1 };
    onDragStart = (e) => {
        let { dragStart: t } = this.props;
        t(o.P.MOVE, e.clientX, e.clientY);
    };
    render() {
        let { selectedGuildId: e, locked: t, contained: i, className: s } = this.props,
            a =
                null != e
                    ? (0, n.jsx)(h.A, { guildId: e, onDragStart: this.onDragStart }, e)
                    : (0, n.jsx)(f.A, {
                          title: m.intl.string(m.t.YUU0RF),
                          renderSettings: A,
                          onDragStart: this.onDragStart,
                          children: (0, n.jsx)(p.A, {}),
                      }),
            r = i ? "div" : u.Ay;
        return (0, n.jsxs)(r, {
            className: l()(g.E, { [g.H]: !i }, s),
            children: [(0, n.jsx)(d.A, { isOverlay: !0, disableAppDownload: !0, isVisible: !t }), a],
        });
    }
}
let v = r.Ay.connectStores([c.A], () => ({ selectedGuildId: c.A.getGuildId() }))(x);
