r.d(n, {
    Z: function () {
        return u;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(481060),
    s = r(454585),
    l = r(992516);
function u(e) {
    let {
            element: {
                data: { header: n, body: r, is_localized: u }
            }
        } = e,
        c = a.useRef(s.Z.reactParserFor(s.Z.defaultRules));
    return u && (null != n || null != r)
        ? (0, i.jsxs)('div', {
              className: l.container,
              children: [
                  null != n &&
                      (0, i.jsx)(o.Heading, {
                          variant: 'heading-sm/semibold',
                          color: 'header-secondary',
                          className: l.header,
                          children: n
                      }),
                  null != r &&
                      (0, i.jsx)(o.Text, {
                          variant: 'text-sm/normal',
                          className: l.bodyText,
                          children: c.current(r)
                      })
              ]
          })
        : null;
}
