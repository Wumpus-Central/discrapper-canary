n.d(t, { Z: () => C }), n(47120);
var i,
    s = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    o = n(442837),
    d = n(552062),
    c = n(416568),
    u = n(914010),
    h = n(518084),
    p = n(178528),
    g = n(669083),
    m = n(483962),
    f = n(711553),
    v = n(388032),
    Z = n(230466);
function x(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function S(e) {
    let { closePopout: t } = e;
    return (0, s.jsx)(g.Z, { onClose: t });
}
class E extends (i = l.PureComponent) {
    render() {
        let { selectedGuildId: e, locked: t, contained: n, className: i } = this.props,
            l =
                null != e
                    ? (0, s.jsx)(
                          p.Z,
                          {
                              guildId: e,
                              onDragStart: this.onDragStart
                          },
                          e
                      )
                    : (0, s.jsx)(f.Z, {
                          title: v.intl.string(v.t.YUU0RE),
                          renderSettings: S,
                          onDragStart: this.onDragStart,
                          children: (0, s.jsx)(m.Z, {})
                      }),
            a = n ? 'div' : h.ZP;
        return (0, s.jsxs)(a, {
            className: r()(Z.base, { [Z.widget]: !n }, i),
            children: [
                (0, s.jsx)(c.Z, {
                    isOverlay: !0,
                    disableAppDownload: !0,
                    isVisible: !t
                }),
                l
            ]
        });
    }
    constructor(...e) {
        super(...e),
            x(this, 'onDragStart', (e) => {
                let { dragStart: t } = this.props;
                t(d.B.MOVE, e.clientX, e.clientY);
            });
    }
}
x(E, 'defaultProps', { contained: !1 });
let C = o.ZP.connectStores([u.Z], () => ({ selectedGuildId: u.Z.getGuildId() }))(E);
