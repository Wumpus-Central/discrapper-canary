n(47120);
var i,
    s = n(200651),
    r = n(192379),
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
    v = n(388032),
    x = n(433217);
function S(e, t, n) {
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
function Z(e) {
    let { closePopout: t } = e;
    return (0, s.jsx)(f.Z, { onClose: t });
}
class _ extends (i = r.PureComponent) {
    render() {
        let { selectedGuildId: e, locked: t, contained: n, className: i } = this.props,
            r =
                null != e
                    ? (0, s.jsx)(
                          p.Z,
                          {
                              guildId: e,
                              onDragStart: this.onDragStart
                          },
                          e
                      )
                    : (0, s.jsx)(m.Z, {
                          title: v.intl.string(v.t.YUU0RE),
                          renderSettings: Z,
                          onDragStart: this.onDragStart,
                          children: (0, s.jsx)(g.Z, {})
                      }),
            o = n ? 'div' : h.ZP;
        return (0, s.jsxs)(o, {
            className: a()(x.base, { [x.widget]: !n }, i),
            children: [
                (0, s.jsx)(d.Z, {
                    isOverlay: !0,
                    disableAppDownload: !0,
                    isVisible: !t
                }),
                r
            ]
        });
    }
    constructor(...e) {
        super(...e),
            S(this, 'onDragStart', (e) => {
                let { dragStart: t } = this.props;
                t(c.B.MOVE, e.clientX, e.clientY);
            });
    }
}
S(_, 'defaultProps', { contained: !1 }), (t.Z = l.ZP.connectStores([u.Z], () => ({ selectedGuildId: u.Z.getGuildId() }))(_));
