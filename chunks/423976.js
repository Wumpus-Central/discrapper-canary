n.d(t, { Cp: () => f, Ay: () => E });
var l = n(499979),
    a = n(73153),
    r = n(587895),
    s = n(91242),
    i = n(927813),
    u = n(998979),
    o = n(276983),
    d = n(477900);
n(582128);
var c = n(192308),
    p = n(673953),
    m = n(165610);
let y = new Set(),
    S = i.A.Millis.SECOND;
function f(e, t) {
    return (0, o.yG)(t)
        ? { permission: t, state: u.A.getDecision(e, t) ?? "prompt" }
        : { permission: t, state: "unsupported" };
}
async function E(e) {
    let {
        applicationId: t,
        appName: i = r.A.getApplication(t)?.name,
        iframeId: u,
        modalContextKey: o,
        permissions: E,
    } = e;
    function g() {
        return E.map((e) => f(t, e));
    }
    async function C() {
        return (
            g().some((e) => {
                let { state: t } = e;
                return "granted" !== t;
            }) && (await (0, l.yy)(S)),
            g()
        );
    }
    let h = E.filter((e) => "prompt" === f(t, e).state);
    if (
        0 === h.length ||
        null == i ||
        y.has(t) ||
        !(function (e) {
            if (null == e) return !0;
            let t = s.A.getFrameByIframeId(e);
            return null != t && s.A.isFrameVisible(t.id) && t.data.layoutMode !== m.y0.PIP;
        })(u)
    )
        return C();
    y.add(t);
    try {
        let e = await ((e) => {
            let { appName: t, iframeId: l, modalContextKey: a, permissions: r } = e,
                s = null != l ? (0, p.C6)(l) : a;
            return null === s
                ? Promise.resolve(null)
                : new Promise((e) => {
                      let l = null;
                      (0, c.openModalLazy)(
                          async () => {
                              let { default: e } = await Promise.all([
                                  n.e("159244"),
                                  n.e("621624"),
                                  n.e("499941"),
                                  n.e("959310"),
                              ]).then(n.bind(n, 462365));
                              return (n) =>
                                  (0, d.jsx)(e, {
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
        })({ appName: i, iframeId: u, modalContextKey: o, permissions: h });
        null != e &&
            a.h.dispatch({ type: "CONJURE_DEVICE_PERMISSIONS_DECIDE", applicationId: t, permissions: h, allowed: e });
    } finally {
        y.delete(t);
    }
    return g();
}
