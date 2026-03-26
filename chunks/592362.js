"use strict";
n.d(t, { A: () => l, i: () => o });
var r = n(627968);
n(64700);
var i = n(397927),
    s = n(156312),
    a = n(97395);
let o = () => {
    let { selectedPlanNotification: e } = (0, s.P5)();
    return null == e ? null : e;
};
function l(e) {
    let { notificationBlockRef: t } = e,
        n = o();
    return null == n
        ? null
        : (0, r.jsxs)("div", {
              className: a.Ew,
              ref: t,
              children: [
                  (0, r.jsx)(i.yr3, { className: a.Kk, color: "currentColor" }),
                  (0, r.jsx)("div", { className: a.Qq, children: n }),
              ],
          });
}
