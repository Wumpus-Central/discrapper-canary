n.d(t, { Z: () => c });
var r = n(255367),
    i = n(73800),
    l = n(770146),
    a = n(388032),
    o = n(716147);
class s extends i.PureComponent {
    render() {
        let { className: e, sku: t } = this.props;
        return null == t.legalNotice
            ? null
            : (0, r.jsxs)('div', {
                  className: e,
                  children: [
                      (0, r.jsx)(l.Z, { children: a.intl.string(a.t.m8OiMj) }),
                      (0, r.jsx)('div', {
                          className: o.content,
                          children: t.legalNotice
                      })
                  ]
              });
    }
}
let c = s;
