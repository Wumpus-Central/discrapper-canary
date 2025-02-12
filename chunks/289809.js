n.d(t, { Z: () => o });
var l = n(200651),
    i = n(192379),
    r = n(481060),
    a = n(454585),
    s = n(826750);
function o(e) {
    let {
            element: {
                data: { header: t, body: n, is_localized: o }
            }
        } = e,
        d = i.useRef(a.Z.reactParserFor(a.Z.defaultRules));
    return o && (null != t || null != n)
        ? (0, l.jsxs)('div', {
              className: s.container,
              children: [
                  null != t &&
                      (0, l.jsx)(r.X6q, {
                          variant: 'heading-sm/semibold',
                          color: 'header-secondary',
                          className: s.header,
                          children: t
                      }),
                  null != n &&
                      (0, l.jsx)(r.Text, {
                          variant: 'text-sm/normal',
                          className: s.bodyText,
                          children: d.current(n)
                      })
              ]
          })
        : null;
}
