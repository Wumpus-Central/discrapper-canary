n.d(t, { Z: () => s });
var r = n(255367),
    a = n(73800),
    i = n(481060),
    o = n(454585),
    l = n(126694);
function s(e) {
    let {
            element: {
                data: { header: t, body: n, is_localized: s }
            }
        } = e,
        c = a.useRef(o.Z.reactParserFor(o.Z.defaultRules));
    return s && (null != t || null != n)
        ? (0, r.jsxs)('div', {
              className: l.container,
              children: [
                  null != t &&
                      (0, r.jsx)(i.X6q, {
                          variant: 'heading-sm/semibold',
                          color: 'header-secondary',
                          className: l.header,
                          children: t
                      }),
                  null != n &&
                      (0, r.jsx)(i.Text, {
                          variant: 'text-sm/normal',
                          className: l.bodyText,
                          children: c.current(n)
                      })
              ]
          })
        : null;
}
