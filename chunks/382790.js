n.d(t, { Z: () => E }), n(388685);
var i,
    r = n(54381),
    s = n(473749),
    o = n(120356),
    l = n.n(o),
    a = n(442837),
    c = n(552062),
    d = n(416568),
    u = n(914010),
    h = n(518084),
    p = n(178528),
    f = n(312186),
    g = n(483962),
    m = n(711553),
    _ = n(388032),
    y = n(585816);
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
function b(e) {
    let { closePopout: t } = e;
    return (0, r.jsx)(f.Z, { onClose: t });
}
class O extends (i = s.PureComponent) {
    render() {
        let { selectedGuildId: e, locked: t, contained: n, className: i } = this.props,
            s =
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
                          title: _.intl.string(_.t.YUU0RF),
                          renderSettings: b,
                          onDragStart: this.onDragStart,
                          children: (0, r.jsx)(g.Z, {}),
                      }),
            o = n ? "div" : h.ZP;
        return (0, r.jsxs)(o, {
            className: l()(y.base, { [y.widget]: !n }, i),
            children: [
                (0, r.jsx)(d.Z, {
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
            v(this, "onDragStart", (e) => {
                let { dragStart: t } = this.props;
                t(c.B.MOVE, e.clientX, e.clientY);
            });
    }
}
v(O, "defaultProps", { contained: !1 });
let E = a.ZP.connectStores([u.Z], () => ({ selectedGuildId: u.Z.getGuildId() }))(O);
