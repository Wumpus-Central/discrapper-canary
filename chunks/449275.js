n.d(t, { Z: () => c });
var r = n(200651),
    i = n(192379),
    l = n(770146),
    o = n(388032),
    a = n(416121);
class s extends i.PureComponent {
    render() {
        let { className: e, sku: t } = this.props;
        return null == t.legalNotice
            ? null
            : (0, r.jsxs)('div', {
                  className: e,
                  children: [
                      (0, r.jsx)(l.Z, { children: o.NW.string(o.t.m8OiMj) }),
                      (0, r.jsx)('div', {
                          className: a.content,
                          children: t.legalNotice
                      })
                  ]
              });
    }
}
let c = s;
