"use strict";
n.d(t, { A: () => p });
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(148810),
    o = n(521502),
    l = n(380610),
    u = n(446347),
    c = n(390486);
async function d(e) {
    if (200 !== (await (0, s.oA)(e)).status) throw Error("Build override couldn't apply");
    window.location.reload(!0);
}
async function _(e) {
    if (200 !== (await (0, s.Zk)(e)).status) throw Error("Build override couldn't apply");
    window.location.reload(!0);
}
async function f() {
    await (0, s.iD)(), window.location.reload(!0);
}
let p = i.memo(function (e) {
    let { url: t } = e,
        n = (0, a.cf)([o.A], () => o.A.getCurrentBuildOverride()),
        s = (0, a.bG)([o.A], () => o.A.getBuildOverride(t)),
        { payload: p, validatedURL: h } = s,
        m = n.state === o.U.Resolving || s.state === o.U.Resolving,
        g = i.useCallback(
            () =>
                (0, l.h4)(s.url) && null != s.override
                    ? _(s.override?.targetBuildOverride)
                    : null == p
                      ? Promise.reject(Error("Invalid override payload"))
                      : ((0, c.R)(s.override, p), d(p)),
            [p, s],
        );
    return null != h
        ? (0, r.jsx)(u.A, {
              loading: m,
              linkMeta: s.override,
              currentOverrides: n.overrides,
              applyBuildOverride: g,
              clearBuildOverride: f,
              url: h,
          })
        : null;
});
