n.d(t, {
    D5: () => f,
    Ft: () => d,
    IT: () => u,
    Yk: () => _,
}),
    n(415506);
var r = n(579092),
    i = n(436620);
let a = new r.Yd("LibDaveManager"),
    o = null,
    s = null,
    l = null,
    c = {
        onRuntimeInitialized: () => {
            a.info("DAVE loaded");
        },
    };
function u() {
    return (
        "Firefox" !== platform.name &&
        i.WS &&
        "function" == typeof RTCRtpSender &&
        ("transform" in RTCRtpSender.prototype || "createEncodedStreams" in RTCRtpSender.prototype)
    );
}
function d() {
    return "object" == typeof WebAssembly;
}
function f() {
    return null != o
        ? o
        : (o = new Promise((e, t) => {
              Promise.all([n.e("69418"), n.e("13263")])
                  .then(n.bind(n, 129487))
                  .then((n) => {
                      let { DaveModuleFactory: r } = n;
                      r(c)
                          .then((t) => {
                              a.info("Successfully initialized DAVE"), (s = t), e(t);
                          })
                          .catch((e) => {
                              a.error("Failed to initialize DAVE", e), t(e);
                          });
                  })
                  .catch((e) => {
                      a.error("Failed to load DAVE module", e), t(e);
                  });
          }));
}
function _() {
    if (null == s) throw Error("DAVE module not loaded");
    return null == l && (l = new s.TransientKeys()), l;
}
