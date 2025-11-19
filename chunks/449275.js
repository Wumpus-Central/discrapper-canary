n.d(t, { Z: () => c });
var r = n(54381),
    i = n(473749),
    l = n(770146),
    a = n(388032),
    s = n(353516);
class o extends i.PureComponent {
    render() {
        let { className: e, sku: t } = this.props;
        return null == t.legalNotice
            ? null
            : (0, r.jsxs)("div", {
                  className: e,
                  children: [
                      (0, r.jsx)(l.Z, { children: a.intl.string(a.t.m8OiMv) }),
                      (0, r.jsx)("div", {
                          className: s.content,
                          children: t.legalNotice,
                      }),
                  ],
              });
    }
}
let c = o;
