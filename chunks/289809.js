n.d(t, { Z: () => l });
var i = n(200651),
    r = n(192379),
    a = n(481060),
    s = n(454585),
    o = n(992516);
function l(e) {
    let {
            element: {
                data: { header: t, body: n, is_localized: l }
            }
        } = e,
        u = r.useRef(s.Z.reactParserFor(s.Z.defaultRules));
    return l && (null != t || null != n)
        ? (0, i.jsxs)('div', {
              className: o.container,
              children: [
                  null != t &&
                      (0, i.jsx)(a.X6q, {
                          variant: 'heading-sm/semibold',
                          color: 'header-secondary',
                          className: o.header,
                          children: t
                      }),
                  null != n &&
                      (0, i.jsx)(a.Text, {
                          variant: 'text-sm/normal',
                          className: o.bodyText,
                          children: u.current(n)
                      })
              ]
          })
        : null;
}
