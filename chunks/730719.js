n.d(t, { Z: () => l });
var r = n(255367);
n(73800);
var a = n(481060),
    i = n(388032),
    o = n(570467);
let l = (e) => {
    let { errorMessage: t, onClose: n } = e;
    return null == t || '' === t
        ? null
        : (0, r.jsxs)('div', {
              className: o.errorContainer,
              children: [
                  (0, r.jsx)(a.P4T, {
                      size: 'custom',
                      color: 'currentColor',
                      width: 20,
                      height: 20,
                      className: o.errorIcon
                  }),
                  (0, r.jsx)(a.Text, {
                      className: o.errorText,
                      variant: 'text-sm/normal',
                      children: t
                  }),
                  (0, r.jsx)(a.P3F, {
                      onClick: () => {
                          n();
                      },
                      'aria-label': i.intl.string(i.t.WAI6xs),
                      className: o.closeIcon
                  })
              ]
          });
};
