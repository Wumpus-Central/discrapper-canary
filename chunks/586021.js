n.d(t, {
    D5: () => p,
    Ft: () => _,
    IT: () => f,
    Yk: () => h,
}),
    n(415506);
var r = n(264344),
    i = n.n(r),
    a = n(579092),
    o = n(436620);
let s = new a.Yd("LibDaveManager"),
    l = null,
    c = null,
    u = null,
    d = {
        onRuntimeInitialized: () => {
            s.info("DAVE loaded");
        },
    };
function f() {
    return (
        ("Firefox" !== i().name || !(o.Zb < 142)) &&
        o.WS &&
        "function" == typeof RTCRtpSender &&
        ("transform" in RTCRtpSender.prototype || "createEncodedStreams" in RTCRtpSender.prototype)
    );
}
function _() {
    return "object" == typeof WebAssembly;
}
function p() {
    return null != l
        ? l
        : (l = new Promise((e, t) => {
              Promise.all([n.e("69418"), n.e("13263")])
                  .then(n.bind(n, 129487))
                  .then((n) => {
                      let { DaveModuleFactory: r } = n;
                      r(d)
                          .then((t) => {
                              s.info("Successfully initialized DAVE"), (c = t), e(t);
                          })
                          .catch((e) => {
                              s.error("Failed to initialize DAVE", e), t(e);
                          });
                  })
                  .catch((e) => {
                      s.error("Failed to load DAVE module", e), t(e);
                  });
          }));
}
function h() {
    if (null == c) throw Error("DAVE module not loaded");
    return null == u && (u = new c.TransientKeys()), u;
}
