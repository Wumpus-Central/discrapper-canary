n.d(t, { Z: () => s });
var l = n(200651);
n(192379);
var i = n(481060),
    r = n(388032),
    a = n(895280);
let s = (e) => {
    let { errorMessage: t, onClose: n } = e;
    return null == t || '' === t
        ? null
        : (0, l.jsxs)('div', {
              className: a.errorContainer,
              children: [
                  (0, l.jsx)(i.P4T, {
                      size: 'custom',
                      color: 'currentColor',
                      width: 20,
                      height: 20,
                      className: a.errorIcon
                  }),
                  (0, l.jsx)(i.Text, {
                      className: a.errorText,
                      variant: 'text-sm/normal',
                      children: t
                  }),
                  (0, l.jsx)(i.P3F, {
                      onClick: () => {
                          n();
                      },
                      'aria-label': r.intl.string(r.t.WAI6xs),
                      className: a.closeIcon
                  })
              ]
          });
};
