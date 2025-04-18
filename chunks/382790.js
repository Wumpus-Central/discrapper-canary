n.d(t, { Z: () => x }), n(388685);
var i,
    r = n(200651),
    s = n(192379),
    o = n(120356),
    a = n.n(o),
    l = n(442837),
    c = n(552062),
    d = n(416568),
    u = n(914010),
    h = n(518084),
    p = n(178528),
    f = n(669083),
    g = n(483962),
    m = n(711553),
    y = n(388032),
    v = n(372660);
function _(e, t, n) {
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
function O(e) {
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
                          renderSettings: O,
                          onDragStart: this.onDragStart,
                          children: (0, r.jsx)(g.Z, {})
                      }),
            o = n ? 'div' : h.ZP;
        return (0, r.jsxs)(o, {
            className: a()(v.base, { [v.widget]: !n }, i),
            children: [
                (0, r.jsx)(d.Z, {
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
            _(this, 'onDragStart', (e) => {
                let { dragStart: t } = this.props;
                t(c.B.MOVE, e.clientX, e.clientY);
            });
    }
}
_(b, 'defaultProps', { contained: !1 });
let x = l.ZP.connectStores([u.Z], () => ({ selectedGuildId: u.Z.getGuildId() }))(b);
