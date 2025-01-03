var i = n(200651),
    r = n(192379),
    l = n(770146),
    a = n(388032),
    s = n(238939);
class o extends r.PureComponent {
    render() {
        let { className: e, sku: t } = this.props;
        return null == t.legalNotice
            ? null
            : (0, i.jsxs)('div', {
                  className: e,
                  children: [
                      (0, i.jsx)(l.Z, { children: a.intl.string(a.t.m8OiMj) }),
                      (0, i.jsx)('div', {
                          className: s.content,
                          children: t.legalNotice
                      })
                  ]
              });
    }
}
t.Z = o;
