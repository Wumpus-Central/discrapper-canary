"use strict";
n.d(t, { x: () => d, e: () => _ });
var i = n(64700),
    r = n(735991),
    s = n(20015);
let a = (0, n(945810).mj)({
    name: "2026-01-contextless-frames-mobile",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var o = n(652215);
function l(e, t) {
    return (
        null != e &&
        !!(function (e) {
            if (!(0, r.$B)(e)) return !1;
            let t = (0, s.n)(e, o.gfo.EMBEDDED),
                n = (0, s.n)(e, o.gfo.CONTEXTLESS_ACTIVITY);
            return t && n;
        })(e)
    );
}
function d(e) {
    return l(e, a.getConfig({ location: "canLaunchFrame" }));
}
function _(e) {
    let t = a.useConfig({ location: "canLaunchFrame" });
    return i.useMemo(() => l(e, t), [e, t]);
}
