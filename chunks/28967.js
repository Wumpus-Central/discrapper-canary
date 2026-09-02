let n;
E.d(t, { n: () => i });
var r = E(973117);
try {
    n = window.sessionStorage;
} catch (e) {}
try {
    delete window.sessionStorage;
} catch (e) {}
let i = !(function () {
    let e = "test";
    try {
        return n.setItem(e, e), n.removeItem(e), !0;
    } catch (e) {
        return !1;
    }
})()
    ? new r.J()
    : new (class {
          get(e, t) {
              let E = n.getItem(e);
              if (null != E)
                  try {
                      E = JSON.parse(E);
                  } catch (e) {
                      E = t;
                  }
              else E = t;
              return E;
          }
          set(e, t) {
              n.setItem(e, JSON.stringify(t));
          }
          remove(e) {
              n.removeItem(e);
          }
          clear() {
              n.clear();
          }
      })();
