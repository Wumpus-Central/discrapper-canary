r.d(n, {
    Z: function () {
        return u;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(481060),
    o = r(454585),
    l = r(992516);
function u(e) {
    let {
            element: {
                data: { header: n, body: r, is_localized: u }
            }
        } = e,
        c = a.useRef(o.Z.reactParserFor(o.Z.defaultRules));
    return u && (null != n || null != r)
        ? (0, i.jsxs)('div', {
              className: l.container,
              children: [
                  null != n &&
                      (0, i.jsx)(s.Heading, {
                          variant: 'heading-sm/semibold',
                          color: 'header-secondary',
                          className: l.header,
                          children: n
                      }),
                  null != r &&
                      (0, i.jsx)(s.Text, {
                          variant: 'text-sm/normal',
                          className: l.bodyText,
                          children: c.current(r)
                      })
              ]
          })
        : null;
}
