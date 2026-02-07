"use strict";
n.d(t, { Hv: () => f, Lc: () => h, o7: () => _, zs: () => p });
var r = n(214958),
    i = n.n(r),
    a = n(118356),
    s = n(396574);
let o = new a.Vy("LibDaveManager"),
    l = null,
    u = null,
    c = null,
    d = {
        onRuntimeInitialized: () => {
            o.info("DAVE loaded");
        },
    };
function _() {
    return ("Firefox" !== i().name || !(s.It < 142)) && s.PF && s.zU;
}
function f() {
    return "object" == typeof WebAssembly;
}
function p() {
    return null != l
        ? l
        : (l = new Promise((e, t) => {
              n.e("20074")
                  .then(n.bind(n, 590641))
                  .then((n) => {
                      let { DaveModuleFactory: r } = n;
                      r(d)
                          .then((t) => {
                              o.info("Successfully initialized DAVE"), (u = t), e(t);
                          })
                          .catch((e) => {
                              o.error("Failed to initialize DAVE", e), t(e);
                          });
                  })
                  .catch((e) => {
                      o.error("Failed to load DAVE module", e), t(e);
                  });
          }));
}
function h() {
    if (null == u) throw Error("DAVE module not loaded");
    return null == c && (c = new u.TransientKeys()), c;
}
