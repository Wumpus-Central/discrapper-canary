n.d(t, { Cp: () => E, Ay: () => m });
var l = n(499979),
    r = n(73153),
    s = n(587895),
    i = n(91242),
    u = n(927813),
    a = n(998979),
    o = n(276983),
    d = n(477900);
n(582128);
var c = n(192308),
    p = n(673953),
    f = n(165610);
let S = new Set(),
    g = u.A.Millis.SECOND;
function E(e, t) {
    return (0, o.yG)(t)
        ? { permission: t, state: a.A.getDecision(e, t) ?? "prompt" }
        : { permission: t, state: "unsupported" };
}
async function m(e) {
    let {
        applicationId: t,
        appName: u = s.A.getApplication(t)?.name,
        iframeId: a,
        modalContextKey: o,
        permissions: m,
    } = e;
    function y() {
        return m.map((e) => E(t, e));
    }
    async function _() {
        return (
            y().some((e) => {
                let { state: t } = e;
                return "granted" !== t;
            }) && (await (0, l.yy)(g)),
            y()
        );
    }
    let C = m.filter((e) => "prompt" === E(t, e).state);
    if (
        0 === C.length ||
        null == u ||
        S.has(t) ||
        !(function (e) {
            if (null == e) return !0;
            let t = i.A.getFrameByIframeId(e);
            return null != t && i.A.isFrameVisible(t.id) && t.data.layoutMode !== f.y0.PIP;
        })(a)
    )
        return _();
    S.add(t);
    try {
        let e = await ((e) => {
            let { appName: t, iframeId: l, modalContextKey: r, permissions: s } = e,
                i = null != l ? (0, p.C6)(l) : r;
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
                                      permissions: s,
                                      onDecide: (e) => {
                                          l = e;
                                      },
                                  });
                          },
                          { contextKey: i, dismissable: !1, onCloseCallback: () => e(l) },
                      ).catch(() => e(null));
                  });
        })({ appName: u, iframeId: a, modalContextKey: o, permissions: C });
        null != e &&
            r.h.dispatch({ type: "CONJURE_DEVICE_PERMISSIONS_DECIDE", applicationId: t, permissions: C, allowed: e });
    } finally {
        S.delete(t);
    }
    return y();
}
