n.d(t, {
    D5: () => f,
    Ft: () => d,
    IT: () => u,
    Yk: () => _,
}),
    n(415506);
var r = n(579092),
    i = n(436620);
let o = new r.Yd("LibDaveManager"),
    a = null,
    s = null,
    l = null,
    c = {
        onRuntimeInitialized: () => {
            o.info("DAVE loaded");
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
    return null != a
        ? a
        : (a = new Promise((e, t) => {
              Promise.all([n.e("69418"), n.e("13263")])
                  .then(n.bind(n, 129487))
                  .then((n) => {
                      let { DaveModuleFactory: r } = n;
                      r(c)
                          .then((t) => {
                              o.info("Successfully initialized DAVE"), (s = t), e(t);
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
function _() {
    if (null == s) throw Error("DAVE module not loaded");
    return null == l && (l = new s.TransientKeys()), l;
}
