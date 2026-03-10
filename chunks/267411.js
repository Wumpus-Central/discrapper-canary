t.d(r, { zs: () => l }), t(214958);
var n = t(118356);
t(396574);
let a = new n.Vy("LibDaveManager"),
    o = null,
    i = {
        onRuntimeInitialized: () => {
            a.info("DAVE loaded");
        },
    };
function l() {
    return null != o
        ? o
        : (o = new Promise((e, r) => {
              t.e("20074")
                  .then(t.bind(t, 590641))
                  .then((t) => {
                      let { DaveModuleFactory: n } = t;
                      n(i)
                          .then((r) => {
                              a.info("Successfully initialized DAVE"), e(r);
                          })
                          .catch((e) => {
                              a.error("Failed to initialize DAVE", e), r(e);
                          });
                  })
                  .catch((e) => {
                      a.error("Failed to load DAVE module", e), r(e);
                  });
          }));
}
