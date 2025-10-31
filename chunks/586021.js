n.d(r, { D5: () => l }), n(415506), n(264344);
var t = n(579092);
n(436620);
let a = new t.Yd("LibDaveManager"),
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
              Promise.all([n.e("69418"), n.e("13263")])
                  .then(n.bind(n, 129487))
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
