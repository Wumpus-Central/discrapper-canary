n.d(t, { Z: () => S }), n(47120);
var i,
    r = n(200651),
    s = n(192379),
    o = n(120356),
    l = n.n(o),
    a = n(442837),
    c = n(552062),
    u = n(416568),
    d = n(914010),
    h = n(518084),
    p = n(178528),
    f = n(669083),
    g = n(483962),
    m = n(711553),
    y = n(388032),
    O = n(708132);
function v(e, t, n) {
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
function x(e) {
    let { closePopout: t } = e;
    return (0, r.jsx)(f.Z, { onClose: t });
}
class b extends (i = s.PureComponent) {
    render() {
        let { selectedGuildId: e, locked: t, contained: n, className: i } = this.props,
            s =
                null != e
                    ? (0, r.jsx)(
                          p.Z,
                          {
                              guildId: e,
                              onDragStart: this.onDragStart
                          },
                          e
                      )
                    : (0, r.jsx)(m.Z, {
                          title: y.NW.string(y.t.YUU0RE),
                          renderSettings: x,
                          onDragStart: this.onDragStart,
                          children: (0, r.jsx)(g.Z, {})
                      }),
            o = n ? 'div' : h.ZP;
        return (0, r.jsxs)(o, {
            className: l()(O.base, { [O.widget]: !n }, i),
            children: [
                (0, r.jsx)(u.Z, {
                    isOverlay: !0,
                    disableAppDownload: !0,
                    isVisible: !t
                }),
                s
            ]
        });
    }
    constructor(...e) {
        super(...e),
            v(this, 'onDragStart', (e) => {
                let { dragStart: t } = this.props;
                t(c.B.MOVE, e.clientX, e.clientY);
            });
    }
}
v(b, 'defaultProps', { contained: !1 });
let S = a.ZP.connectStores([d.Z], () => ({ selectedGuildId: d.Z.getGuildId() }))(b);
