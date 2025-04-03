n.d(t, { Z: () => s });
var r = n(200651),
    l = n(192379),
    i = n(481060),
    a = n(454585),
    o = n(126694);
function s(e) {
    let {
            element: {
                data: { header: t, body: n, is_localized: s }
            }
        } = e,
        c = l.useRef(a.Z.reactParserFor(a.Z.defaultRules));
    return s && (null != t || null != n)
        ? (0, r.jsxs)('div', {
              className: o.container,
              children: [
                  null != t &&
                      (0, r.jsx)(i.X6q, {
                          variant: 'heading-sm/semibold',
                          color: 'header-secondary',
                          className: o.header,
                          children: t
                      }),
                  null != n &&
                      (0, r.jsx)(i.Text, {
                          variant: 'text-sm/normal',
                          className: o.bodyText,
                          children: c.current(n)
                      })
              ]
          })
        : null;
}
