n.d(t, {
    H: () => s,
    Z: () => c,
});
var r = n(255367);
n(73800);
var i = n(318713),
    o = n(388032),
    a = n(724913),
    s = (function (e) {
        return (e[(e.WITH_CONTENT = 0)] = "WITH_CONTENT"), (e[(e.AFTER_ACCESSORIES = 1)] = "AFTER_ACCESSORIES"), e;
    })({});
function l(e, t) {
    return t || (null != e.content && 0 !== e.content.length) ? 0 : 1;
}
function c(e) {
    let { message: t, compact: n, location: s } = e;
    return t.isEdited() && null != t.editedTimestamp && s === l(t, n)
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  " ",
                  (0, r.jsx)(i.Z, {
                      timestamp: t.editedTimestamp,
                      isEdited: !0,
                      isInline: !1,
                      children: (0, r.jsxs)("span", {
                          className: a.edited,
                          children: ["(", o.intl.string(o.t.C8sXIC), ")"],
                      }),
                  }),
              ],
          })
        : null;
}
