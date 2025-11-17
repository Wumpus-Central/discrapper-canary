n.d(t, { Z: () => E }), n(388685);
var i,
    r = n(54381),
    o = n(473749),
    l = n(120356),
    s = n.n(l),
    a = n(442837),
    c = n(552062),
    d = n(416568),
    u = n(914010),
    h = n(518084),
    p = n(178528),
    f = n(312186),
    g = n(483962),
    m = n(711553),
    y = n(388032),
    b = n(585816);
function _(e, t, n) {
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
function v(e) {
    let { closePopout: t } = e;
    return (0, r.jsx)(f.Z, { onClose: t });
}
class O extends (i = o.PureComponent) {
    render() {
        let { selectedGuildId: e, locked: t, contained: n, className: i } = this.props,
            o =
                null != e
                    ? (0, r.jsx)(
                          p.Z,
                          {
                              guildId: e,
                              onDragStart: this.onDragStart,
                          },
                          e,
                      )
                    : (0, r.jsx)(m.Z, {
                          title: y.intl.string(y.t.YUU0RF),
                          renderSettings: v,
                          onDragStart: this.onDragStart,
                          children: (0, r.jsx)(g.Z, {}),
                      }),
            l = n ? "div" : h.ZP;
        return (0, r.jsxs)(l, {
            className: s()(b.base, { [b.widget]: !n }, i),
            children: [
                (0, r.jsx)(d.Z, {
                    isOverlay: !0,
                    disableAppDownload: !0,
                    isVisible: !t,
                }),
                o,
            ],
        });
    }
    constructor(...e) {
        super(...e),
            _(this, "onDragStart", (e) => {
                let { dragStart: t } = this.props;
                t(c.B.MOVE, e.clientX, e.clientY);
            });
    }
}
_(O, "defaultProps", { contained: !1 });
let E = a.ZP.connectStores([u.Z], () => ({ selectedGuildId: u.Z.getGuildId() }))(O);
