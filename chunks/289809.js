n.d(t, { Z: () => o });
var r = n(255367),
    l = n(73800),
    i = n(481060),
    a = n(454585),
    s = n(126694);
function o(e) {
    let {
            element: {
                data: { header: t, body: n, is_localized: o }
            }
        } = e,
        c = l.useRef(a.Z.reactParserFor(a.Z.defaultRules));
    return o && (null != t || null != n)
        ? (0, r.jsxs)('div', {
              className: s.container,
              children: [
                  null != t &&
                      (0, r.jsx)(i.X6q, {
                          variant: 'heading-sm/semibold',
                          color: 'header-secondary',
                          className: s.header,
                          children: t
                      }),
                  null != n &&
                      (0, r.jsx)(i.Text, {
                          variant: 'text-sm/normal',
                          className: s.bodyText,
                          children: c.current(n)
                      })
              ]
          })
        : null;
}
