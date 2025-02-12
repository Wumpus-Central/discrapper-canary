n.d(t, { Z: () => c });
var i = n(200651),
    l = n(192379),
    r = n(770146),
    a = n(388032),
    s = n(677294);
class o extends l.PureComponent {
    render() {
        let { className: e, sku: t } = this.props;
        return null == t.legalNotice
            ? null
            : (0, i.jsxs)('div', {
                  className: e,
                  children: [
                      (0, i.jsx)(r.Z, { children: a.intl.string(a.t.m8OiMj) }),
                      (0, i.jsx)('div', {
                          className: s.content,
                          children: t.legalNotice
                      })
                  ]
              });
    }
}
let c = o;
