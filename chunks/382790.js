n.d(t, { Z: () => x }), n(388685);
var i,
    r = n(54381),
    a = n(473749),
    s = n(120356),
    o = n.n(s),
    l = n(442837),
    c = n(552062),
    d = n(416568),
    u = n(914010),
    f = n(518084),
    h = n(178528),
    p = n(312186),
    g = n(483962),
    b = n(711553),
    m = n(388032),
    y = n(546753);
function v(e, t, n) {
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
    return (0, r.jsx)(p.Z, { onClose: t });
}
class E extends (i = a.PureComponent) {
    render() {
        let { selectedGuildId: e, locked: t, contained: n, className: i } = this.props,
            a =
                null != e
                    ? (0, r.jsx)(
                          h.Z,
                          {
                              guildId: e,
                              onDragStart: this.onDragStart,
                          },
                          e,
                      )
                    : (0, r.jsx)(b.Z, {
                          title: m.intl.string(m.t.YUU0RF),
                          renderSettings: O,
                          onDragStart: this.onDragStart,
                          children: (0, r.jsx)(g.Z, {}),
                      }),
            s = n ? "div" : f.ZP;
        return (0, r.jsxs)(s, {
            className: o()(y.base, { [y.widget]: !n }, i),
            children: [
                (0, r.jsx)(d.Z, {
                    isOverlay: !0,
                    disableAppDownload: !0,
                    isVisible: !t,
                }),
                a,
            ],
        });
    }
    constructor(...e) {
        super(...e),
            v(this, "onDragStart", (e) => {
                let { dragStart: t } = this.props;
                t(c.B.MOVE, e.clientX, e.clientY);
            });
    }
}
v(E, "defaultProps", { contained: !1 });
let x = l.ZP.connectStores([u.Z], () => ({ selectedGuildId: u.Z.getGuildId() }))(E);
