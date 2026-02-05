n.d(t, { A: () => d });
var i = n(627968),
    r = n(64700),
    a = n(481859),
    l = n(985018),
    s = n(732574);
class o extends r.PureComponent {
    render() {
        let { className: e, sku: t } = this.props;
        return null == t.legalNotice
            ? null
            : (0, i.jsxs)("div", {
                  className: e,
                  children: [
                      (0, i.jsx)(a.A, { children: l.intl.string(l.t.m8OiMv) }),
                      (0, i.jsx)("div", { className: s.Q, children: t.legalNotice }),
                  ],
              });
    }
}
let d = o;
