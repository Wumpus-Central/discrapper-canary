n.d(t, { A: () => _ }), n(65821);
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(148810),
    o = n(521502),
    l = n(380610),
    c = n(446347),
    u = n(390486);
async function d(e) {
    if (200 !== (await (0, s.oA)(e)).status) throw Error("Build override couldn't apply");
    window.location.reload(!0);
}
async function f(e) {
    if (200 !== (await (0, s.Zk)(e)).status) throw Error("Build override couldn't apply");
    window.location.reload(!0);
}
async function p() {
    await (0, s.iD)(), window.location.reload(!0);
}
let _ = i.memo(function (e) {
    let { url: t } = e,
        n = (0, a.cf)([o.A], () => o.A.getCurrentBuildOverride()),
        s = (0, a.bG)([o.A], () => o.A.getBuildOverride(t)),
        { payload: _, validatedURL: h } = s,
        m = n.state === o.U.Resolving || s.state === o.U.Resolving,
        g = i.useCallback(() => {
            if ((0, l.h4)(s.url) && null != s.override) {
                var e;
                return f(null == (e = s.override) ? void 0 : e.targetBuildOverride);
            }
            return null == _ ? Promise.reject(Error("Invalid override payload")) : ((0, u.R)(s.override, _), d(_));
        }, [_, s]);
    return null != h
        ? (0, r.jsx)(c.A, {
              loading: m,
              linkMeta: s.override,
              currentOverrides: n.overrides,
              applyBuildOverride: g,
              clearBuildOverride: p,
              url: h,
          })
        : null;
});
