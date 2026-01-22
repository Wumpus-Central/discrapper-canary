n.d(t, {
    Hv: () => p,
    Lc: () => h,
    o7: () => f,
    zs: () => _,
}),
    n(65821);
var r = n(214958),
    i = n.n(r),
    a = n(118356),
    s = n(396574);
let o = new a.Vy("LibDaveManager"),
    l = null,
    c = null,
    u = null,
    d = {
        onRuntimeInitialized: () => {
            o.info("DAVE loaded");
        },
    };

function f() {
    return (
        ("Firefox" !== i().name || !(s.It < 142)) &&
        s.PF &&
        "function" == typeof RTCRtpSender &&
        ("transform" in RTCRtpSender.prototype || "createEncodedStreams" in RTCRtpSender.prototype)
    );
}

function p() {
    return "object" == typeof WebAssembly;
}

function _() {
    return null != l
        ? l
        : (l = new Promise((e, t) => {
              Promise.all([n.e("23484"), n.e("42664"), n.e("20074")])
                  .then(n.bind(n, 590641))
                  .then((n) => {
                      let { DaveModuleFactory: r } = n;
                      r(d)
                          .then((t) => {
                              o.info("Successfully initialized DAVE"), (c = t), e(t);
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
    if (null == c) throw Error("DAVE module not loaded");
    return null == u && (u = new c.TransientKeys()), u;
}
