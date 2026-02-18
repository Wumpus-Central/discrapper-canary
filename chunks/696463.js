"use strict";
n.d(t, { B: () => l });
var r = n(64700),
    i = n(787925),
    s = n(199773),
    a = n(256787),
    o = n(49999);
function l(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        l = arguments.length > 3 ? arguments[3] : void 0,
        u = !n && null != e && !i.C.has(e);
    r.useEffect(
        () => () => {
            u &&
                (s.A.lastDismissed?.content !== e || ((0, a.vf)(e) && s.A.lastDismissed?.guildId !== l)) &&
                t(o.i.AUTO_DISMISS, !0);
        },
        [u, t, e, l],
    );
}
