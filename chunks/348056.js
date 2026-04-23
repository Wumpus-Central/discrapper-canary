"use strict";
n.d(t, { A: () => p });
var r = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(148810),
    o = n(521502),
    l = n(380610),
    u = n(446347),
    c = n(390486);
async function d(e) {
    if (200 !== (await (0, a.oA)(e)).status) throw Error("Build override couldn't apply");
    window.location.reload(!0);
}
async function _(e) {
    if (200 !== (await (0, a.Zk)(e)).status) throw Error("Build override couldn't apply");
    window.location.reload(!0);
}
async function f() {
    await (0, a.iD)(), window.location.reload(!0);
}
let p = i.memo(function (e) {
    let { url: t } = e,
        n = (0, s.cf)([o.A], () => o.A.getCurrentBuildOverride()),
        a = (0, s.bG)([o.A], () => o.A.getBuildOverride(t)),
        { payload: p, validatedURL: h } = a,
        E = n.state === o.U.Resolving || a.state === o.U.Resolving,
        m = i.useCallback(
            () =>
                (0, l.h4)(a.url) && null != a.override
                    ? _(a.override?.targetBuildOverride)
                    : null == p
                      ? Promise.reject(Error("Invalid override payload"))
                      : ((0, c.R)(a.override, p), d(p)),
            [p, a],
        );
    return null != h
        ? (0, r.jsx)(u.A, {
              loading: E,
              linkMeta: a.override,
              currentOverrides: n.overrides,
              applyBuildOverride: m,
              clearBuildOverride: f,
              url: h,
          })
        : null;
});
