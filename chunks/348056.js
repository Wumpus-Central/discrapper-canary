t.d(l, { A: () => h });
var r = t(627968),
    n = t(64700),
    i = t(311907),
    a = t(148810),
    s = t(521502),
    d = t(380610),
    o = t(446347),
    u = t(390486);
async function c(e) {
    if (200 !== (await (0, a.oA)(e)).status) throw Error("Build override couldn't apply");
    window.location.reload(!0);
}
async function v(e) {
    if (200 !== (await (0, a.Zk)(e)).status) throw Error("Build override couldn't apply");
    window.location.reload(!0);
}
async function C() {
    await (0, a.iD)(), window.location.reload(!0);
}
let h = n.memo(function (e) {
    let { url: l } = e,
        t = (0, i.cf)([s.A], () => s.A.getCurrentBuildOverride()),
        a = (0, i.bG)([s.A], () => s.A.getBuildOverride(l)),
        { payload: h, validatedURL: m } = a,
        g = t.state === s.U.Resolving || a.state === s.U.Resolving,
        f = n.useCallback(
            () =>
                (0, d.h4)(a.url) && null != a.override
                    ? v(a.override?.targetBuildOverride)
                    : null == h
                      ? Promise.reject(Error("Invalid override payload"))
                      : ((0, u.R)(a.override, h), c(h)),
            [h, a],
        );
    return null != m
        ? (0, r.jsx)(o.A, {
              loading: g,
              linkMeta: a.override,
              currentOverrides: t.overrides,
              applyBuildOverride: f,
              clearBuildOverride: C,
              url: m,
          })
        : null;
});
