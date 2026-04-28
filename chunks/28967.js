let r;
E.d(t, { n: () => _ });
var S = E(973117);
try {
    r = window.sessionStorage;
} catch (e) {}
try {
    delete window.sessionStorage;
} catch (e) {}
let _ = !(function () {
    let e = "test";
    try {
        return r.setItem(e, e), r.removeItem(e), !0;
    } catch (e) {
        return !1;
    }
})()
    ? new S.J()
    : new (class {
          get(e, t) {
              let E = r.getItem(e);
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
              r.setItem(e, JSON.stringify(t));
          }
          remove(e) {
              r.removeItem(e);
          }
          clear() {
              r.clear();
          }
      })();
