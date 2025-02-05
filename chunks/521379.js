n.d(t, { Z: () => _ }), n(757143);
var i,
    r,
    l,
    a = n(200651),
    o = n(192379),
    s = n(442837),
    c = n(388905),
    d = n(108427),
    u = n(559786);
s.ZP.initialize();
class _ extends (i = o.PureComponent) {
    componentDidMount() {
        (0, d.e)('account_revert');
    }
    render() {
        let { token: e } = this.props.match.params;
        return (0, a.jsx)(c.ZP, {
            style: { padding: 0 },
            children: (0, a.jsx)(u.Z, {
                width: 464,
                token: e,
                ...this.props
            })
        });
    }
}
(r = 'defaultProps'),
    (l = {
        transitionTo: (e) => n.g.location.assign(e),
        replaceWith: (e) => n.g.location.replace(e)
    }),
    r in _
        ? Object.defineProperty(_, r, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (_[r] = l);
