"use strict";
let r;
n.d(t, { n: () => s });
var i = n(973117);
try {
    r = window.sessionStorage;
} catch (e) {}
try {
    delete window.sessionStorage;
} catch (e) {}
let s = !(function () {
    let e = "test";
    try {
        return r.setItem(e, e), r.removeItem(e), !0;
    } catch (e) {
        return !1;
    }
})()
    ? new i.J()
    : new (class {
          get(e, t) {
              let n = r.getItem(e);
              if (null != n)
                  try {
                      n = JSON.parse(n);
                  } catch (e) {
                      n = t;
                  }
              else n = t;
              return n;
          }
          set(e, t) {
              r.setItem(e, JSON.stringify(t));
          }
          remove(e) {
              r.removeItem(e);
          }
          clear() {
              r.clear();
          }
      })();
