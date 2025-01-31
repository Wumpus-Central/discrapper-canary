n.d(t, { ZP: () => g });
var i,
    l,
    a = n(200651),
    r = n(192379),
    s = n(120356),
    o = n.n(s),
    d = n(481060),
    c = n(600164),
    u = n(651512);
function m(e, t, n) {
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
class h extends (i = r.PureComponent) {
    render() {
        let { scrollable: e, ...t } = this.props;
        return e
            ? (0, a.jsx)('aside', {
                  className: u.sidebarScrollable,
                  children: (0, a.jsx)(d.Ttm, {
                      fade: !0,
                      className: u.scroller,
                      children: (0, a.jsx)(c.Z.Child, {
                          ...t,
                          wrap: !0
                      })
                  })
              })
            : (0, a.jsx)(c.Z.Child, {
                  ...t,
                  wrap: !0
              });
    }
}
m(h, 'defaultProps', {
    basis: 232,
    grow: 0,
    shrink: 0,
    className: u.sidebar
});
class x extends r.PureComponent {
    render() {
        let { className: e, ...t } = this.props;
        return (0, a.jsx)(c.Z.Child, {
            className: o()(u.content, e),
            wrap: !0,
            ...t
        });
    }
}
class p extends (l = r.PureComponent) {
    render() {
        return (0, a.jsx)(c.Z, { ...this.props });
    }
}
m(p, 'defaultProps', {
    className: u.layout,
    direction: c.Z.Direction.HORIZONTAL,
    justify: c.Z.Justify.START,
    align: c.Z.Align.START,
    wrap: c.Z.Wrap.NO_WRAP,
    shrink: 1,
    grow: 1,
    basis: 'auto'
}),
    m(p, 'Direction', c.Z.Direction),
    m(p, 'Justify', c.Z.Justify),
    m(p, 'Align', c.Z.Align),
    m(p, 'Wrap', c.Z.Wrap),
    m(p, 'Sidebar', h),
    m(p, 'Content', x);
let g = p;
