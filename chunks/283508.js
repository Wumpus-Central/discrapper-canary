n.d(t, { A: () => c });
var r = n(627968),
    i = n(64700),
    l = n(481859),
    a = n(985018),
    s = n(732574);
class o extends i.PureComponent {
    render() {
        let { className: e, sku: t } = this.props;
        return null == t.legalNotice
            ? null
            : (0, r.jsxs)("div", {
                  className: e,
                  children: [
                      (0, r.jsx)(l.A, { children: a.intl.string(a.t.m8OiMv) }),
                      (0, r.jsx)("div", {
                          className: s.Q,
                          children: t.legalNotice,
                      }),
                  ],
              });
    }
}
let c = o;
