n.d(t, { A: () => p, C: () => d });
var l = n(73153),
    r = n(587895),
    s = n(998979),
    i = n(276983),
    u = n(477900);
n(582128);
var a = n(192308),
    o = n(673953);
let c = new Set();
function d(e, t) {
    return (0, i.yG)(t)
        ? { permission: t, state: s.A.getDecision(e, t) ?? "prompt" }
        : { permission: t, state: "unsupported" };
}
async function p(e) {
    let { applicationId: t, appName: s = r.A.getApplication(t)?.name, iframeId: i, permissions: p } = e;
    function f() {
        return p.map((e) => d(t, e));
    }
    let S = p.filter((e) => "prompt" === d(t, e).state);
    if (0 === S.length || null == s || c.has(t)) return f();
    c.add(t);
    try {
        let e = await ((e) => {
            let { appName: t, iframeId: l, permissions: r } = e,
                s = null != l ? (0, o.C6)(l) : void 0;
            return null === s
                ? Promise.resolve(null)
                : new Promise((e) => {
                      let l = null;
                      (0, a.openModalLazy)(
                          async () => {
                              let { default: e } = await Promise.all([
                                  n.e("159244"),
                                  n.e("621624"),
                                  n.e("499941"),
                                  n.e("959310"),
                              ]).then(n.bind(n, 462365));
                              return (n) =>
                                  (0, u.jsx)(e, {
                                      ...n,
                                      appName: t,
                                      permissions: r,
                                      onDecide: (e) => {
                                          l = e;
                                      },
                                  });
                          },
                          { contextKey: s, dismissable: !1, onCloseCallback: () => e(l) },
                      ).catch(() => e(null));
                  });
        })({ appName: s, iframeId: i, permissions: S });
        null != e &&
            l.h.dispatch({ type: "CONJURE_DEVICE_PERMISSIONS_DECIDE", applicationId: t, permissions: S, allowed: e });
    } finally {
        c.delete(t);
    }
    return f();
}
