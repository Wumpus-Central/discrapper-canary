n.d(t, { A: () => E }), n(896048);
var i,
    r = n(627968),
    s = n(64700),
    l = n(503698),
    o = n.n(l),
    a = n(311907),
    c = n(685603),
    d = n(467627),
    u = n(967198),
    h = n(855790),
    p = n(335022),
    f = n(714977),
    b = n(266244),
    g = n(439817),
    y = n(985018),
    A = n(90901);
function m(e, t, n) {
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
function O(e) {
    let { closePopout: t } = e;
    return (0, r.jsx)(f.A, { onClose: t });
}
class v extends (i = s.PureComponent) {
    render() {
        let { selectedGuildId: e, locked: t, contained: n, className: i } = this.props,
            s =
                null != e
                    ? (0, r.jsx)(
                          p.A,
                          {
                              guildId: e,
                              onDragStart: this.onDragStart,
                          },
                          e,
                      )
                    : (0, r.jsx)(g.A, {
                          title: y.intl.string(y.t.YUU0RF),
                          renderSettings: O,
                          onDragStart: this.onDragStart,
                          children: (0, r.jsx)(b.A, {}),
                      }),
            l = n ? "div" : h.Ay;
        return (0, r.jsxs)(l, {
            className: o()(A.E, { [A.H]: !n }, i),
            children: [
                (0, r.jsx)(d.A, {
                    isOverlay: !0,
                    disableAppDownload: !0,
                    isVisible: !t,
                }),
                s,
            ],
        });
    }
    constructor(...e) {
        super(...e),
            m(this, "onDragStart", (e) => {
                let { dragStart: t } = this.props;
                t(c.P.MOVE, e.clientX, e.clientY);
            });
    }
}
m(v, "defaultProps", { contained: !1 });
let E = a.Ay.connectStores([u.A], () => ({ selectedGuildId: u.A.getGuildId() }))(v);
