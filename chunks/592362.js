"use strict";
n.d(t, { A: () => l, i: () => o });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(156312),
    s = n(835120);
let o = () => {
    let { selectedPlanNotification: e } = (0, a.P5)();
    return null == e ? null : e;
};
function l(e) {
    let { notificationBlockRef: t } = e,
        n = o();
    return null == n
        ? null
        : (0, r.jsxs)("div", {
              className: s.Ew,
              ref: t,
              children: [
                  (0, r.jsx)(i.yr3, { className: s.Kk, color: "currentColor" }),
                  (0, r.jsx)("div", { className: s.Qq, children: n }),
              ],
          });
}
