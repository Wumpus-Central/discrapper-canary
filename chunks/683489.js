"use strict";
n.d(t, { w: () => i }), n(64700);
var r = n(348275);
function i(e, t, n, i, a, s, o) {
    if (!e) return null;
    let l = s
        ? n
        : {
              ...n,
              onFocus: (0, r.cy)(n.onFocus, (e) => {
                  let t = e.target;
                  if (null != t) {
                      let e = (0, r.iO)(t.getAttribute("aria-describedby") ?? void 0, a);
                      t.setAttribute("aria-describedby", e);
                  }
              }),
              onBlur: (0, r.cy)(n.onBlur, (e) => {
                  let t = e.target;
                  if (null != t) {
                      let e = t.getAttribute("aria-describedby");
                      if (null != e) {
                          let n = e.split(" ").filter((e) => e !== a);
                          n.length > 0
                              ? t.setAttribute("aria-describedby", n.join(" "))
                              : t.removeAttribute("aria-describedby");
                      }
                  }
              }),
          };
    return (0, r.EE)({ tag: o, children: t, triggerHandlers: l, triggerRef: i });
}
