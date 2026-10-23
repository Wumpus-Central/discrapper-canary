n.d(t, { Cp: () => g, Ay: () => y });
var l = n(499979),
    r = n(73153),
    i = n(587895),
    s = n(91242),
    u = n(927813),
    a = n(998979),
    o = n(276983),
    d = n(477900);
n(582128);
var c = n(192308),
    p = n(673953),
    f = n(165610);
let S = new Set(),
    m = u.A.Millis.SECOND;
function g(e, t) {
    return (0, o.yG)(t)
        ? { permission: t, state: a.A.getDecision(e, t) ?? "prompt" }
        : { permission: t, state: "unsupported" };
}
async function y(e) {
    let { applicationId: t, appName: u = i.A.getApplication(t)?.name, iframeId: a, permissions: o } = e;
    function y() {
        return o.map((e) => g(t, e));
    }
    async function E() {
        return (
            y().some((e) => {
                let { state: t } = e;
                return "granted" !== t;
            }) && (await (0, l.yy)(m)),
            y()
        );
    }
    let I = o.filter((e) => "prompt" === g(t, e).state);
    if (
        0 === I.length ||
        null == u ||
        S.has(t) ||
        !(function (e) {
            if (null == e) return !0;
            let t = s.A.getFrameByIframeId(e);
            return null != t && s.A.isFrameVisible(t.id) && t.data.layoutMode !== f.y0.PIP;
        })(a)
    )
        return E();
    S.add(t);
    try {
        let e = await ((e) => {
            let { appName: t, iframeId: l, permissions: r } = e,
                i = null != l ? (0, p.C6)(l) : void 0;
            return null === i
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
                          { contextKey: i, dismissable: !1, onCloseCallback: () => e(l) },
                      ).catch(() => e(null));
                  });
        })({ appName: u, iframeId: a, permissions: I });
        null != e &&
            r.h.dispatch({ type: "CONJURE_DEVICE_PERMISSIONS_DECIDE", applicationId: t, permissions: I, allowed: e });
    } finally {
        S.delete(t);
    }
    return y();
}
