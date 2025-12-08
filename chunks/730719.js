n.d(t, { Z: () => s });
var r = n(54381);
n(473749);
var l = n(481060),
    i = n(388032),
    a = n(107461);
let s = (e) => {
    let { errorMessage: t, onClose: n } = e;
    return null == t || "" === t
        ? null
        : (0, r.jsxs)("div", {
              className: a.errorContainer,
              children: [
                  (0, r.jsx)(l.Mgn, {
                      size: "custom",
                      color: "currentColor",
                      width: 20,
                      height: 20,
                      className: a.errorIcon,
                  }),
                  (0, r.jsx)(l.Text, {
                      className: a.errorText,
                      variant: "text-sm/normal",
                      children: t,
                  }),
                  (0, r.jsx)(l.P3F, {
                      onClick: () => {
                          n();
                      },
                      "aria-label": i.intl.string(i.t.WAI6xu),
                      className: a.closeIcon,
                  }),
              ],
          });
};
