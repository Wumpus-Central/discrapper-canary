n.d(t, {
    Z: function () {
        return g;
    }
}),
    n(757143);
var i,
    r,
    s,
    l,
    o = n(200651),
    a = n(192379),
    c = n(442837),
    d = n(388905),
    u = n(108427),
    h = n(559786);
c.ZP.initialize();
class g extends (i = a.PureComponent) {
    componentDidMount() {
        (0, u.e)('account_revert');
    }
    render() {
        let { token: e } = this.props.match.params;
        return (0, o.jsx)(d.ZP, {
            style: { padding: 0 },
            children: (0, o.jsx)(h.Z, {
                width: 464,
                token: e,
                ...this.props
            })
        });
    }
}
(r = g),
    (s = 'defaultProps'),
    (l = {
        transitionTo: (e) => n.g.location.assign(e),
        replaceWith: (e) => n.g.location.replace(e)
    }),
    s in r
        ? Object.defineProperty(r, s, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[s] = l);
