var i,
    l,
    r = n(200651),
    a = n(192379),
    o = n(120356),
    s = n.n(o),
    d = n(481060),
    c = n(600164),
    u = n(606922);
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
class h extends (i = a.PureComponent) {
    render() {
        let { scrollable: e, ...t } = this.props;
        return e
            ? (0, r.jsx)('aside', {
                  className: u.sidebarScrollable,
                  children: (0, r.jsx)(d.Scroller, {
                      fade: !0,
                      className: u.scroller,
                      children: (0, r.jsx)(c.Z.Child, {
                          ...t,
                          wrap: !0
                      })
                  })
              })
            : (0, r.jsx)(c.Z.Child, {
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
class p extends a.PureComponent {
    render() {
        let { className: e, ...t } = this.props;
        return (0, r.jsx)(c.Z.Child, {
            className: s()(u.content, e),
            wrap: !0,
            ...t
        });
    }
}
class g extends (l = a.PureComponent) {
    render() {
        return (0, r.jsx)(c.Z, { ...this.props });
    }
}
m(g, 'defaultProps', {
    className: u.layout,
    direction: c.Z.Direction.HORIZONTAL,
    justify: c.Z.Justify.START,
    align: c.Z.Align.START,
    wrap: c.Z.Wrap.NO_WRAP,
    shrink: 1,
    grow: 1,
    basis: 'auto'
}),
    m(g, 'Direction', c.Z.Direction),
    m(g, 'Justify', c.Z.Justify),
    m(g, 'Align', c.Z.Align),
    m(g, 'Wrap', c.Z.Wrap),
    m(g, 'Sidebar', h),
    m(g, 'Content', p),
    (t.ZP = g);
