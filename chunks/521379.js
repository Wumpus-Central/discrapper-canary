n.d(t, { Z: () => h }), n(757143);
var i,
    r,
    a,
    l = n(200651),
    o = n(192379),
    s = n(442837),
    c = n(388905),
    d = n(108427),
    u = n(559786);
s.ZP.initialize();
class h extends (i = o.PureComponent) {
    componentDidMount() {
        (0, d.e)('account_revert');
    }
    render() {
        let { token: e } = this.props.match.params;
        return (0, l.jsx)(c.ZP, {
            style: { padding: 0 },
            children: (0, l.jsx)(u.Z, {
                width: 464,
                token: e,
                ...this.props
            })
        });
    }
}
(r = 'defaultProps'),
    (a = {
        transitionTo: (e) => n.g.location.assign(e),
        replaceWith: (e) => n.g.location.replace(e)
    }),
    r in h
        ? Object.defineProperty(h, r, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (h[r] = a);
