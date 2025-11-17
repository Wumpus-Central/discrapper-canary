n.d(t, { Z: () => s });
var r = n(54381);
n(473749);
var i = n(481060),
    l = n(388032),
    a = n(107461);
let s = (e) => {
    let { errorMessage: t, onClose: n } = e;
    return null == t || "" === t
        ? null
        : (0, r.jsxs)("div", {
              className: a.errorContainer,
              children: [
                  (0, r.jsx)(i.Mgn, {
                      size: "custom",
                      color: "currentColor",
                      width: 20,
                      height: 20,
                      className: a.errorIcon,
                  }),
                  (0, r.jsx)(i.Text, {
                      className: a.errorText,
                      variant: "text-sm/normal",
                      children: t,
                  }),
                  (0, r.jsx)(i.P3F, {
                      onClick: () => {
                          n();
                      },
                      "aria-label": l.intl.string(l.t.WAI6xu),
                      className: a.closeIcon,
                  }),
              ],
          });
};
