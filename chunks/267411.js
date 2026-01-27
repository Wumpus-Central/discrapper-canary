n.d(r, {
    zs: () => l,
}),
    n(65821),
    n(214958);
var t = n(118356);
n(396574);
let a = new t.Vy("LibDaveManager"),
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
              Promise.all([n.e("23484"), n.e("42664"), n.e("20074")])
                  .then(n.bind(n, 590641))
                  .then((n) => {
                      let { DaveModuleFactory: t } = n;
                      t(i)
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
