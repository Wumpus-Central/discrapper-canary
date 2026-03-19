"use strict";
n.d(t, { A: () => E });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(685603),
    d = n(467627),
    c = n(967198),
    u = n(855790),
    h = n(335022),
    p = n(714977),
    A = n(266244),
    f = n(439817),
    g = n(985018),
    _ = n(176767);
function m(e) {
    let { closePopout: t } = e;
    return (0, i.jsx)(p.A, { onClose: t });
}
class x extends s.PureComponent {
    static defaultProps = { contained: !1 };
    onDragStart = (e) => {
        let { dragStart: t } = this.props;
        t(o.P.MOVE, e.clientX, e.clientY);
    };
    render() {
        let { selectedGuildId: e, locked: t, contained: n, className: s } = this.props,
            l =
                null != e
                    ? (0, i.jsx)(h.A, { guildId: e, onDragStart: this.onDragStart }, e)
                    : (0, i.jsx)(f.A, {
                          title: g.intl.string(g.t.YUU0RF),
                          renderSettings: m,
                          onDragStart: this.onDragStart,
                          children: (0, i.jsx)(A.A, {}),
                      }),
            r = n ? "div" : u.Ay;
        return (0, i.jsxs)(r, {
            className: a()(_.E, { [_.H]: !n }, s),
            children: [(0, i.jsx)(d.A, { isOverlay: !0, disableAppDownload: !0, isVisible: !t }), l],
        });
    }
}
let E = r.Ay.connectStores([c.A], () => ({ selectedGuildId: c.A.getGuildId() }))(x);
