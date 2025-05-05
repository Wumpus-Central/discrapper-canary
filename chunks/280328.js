n.d(t, { A: () => s });
var r = n(73800),
    i = n(261376),
    a = n(68985),
    o = n(921944);
function s(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        s = !n && null != e && !i.O.has(e);
    r.useEffect(
        () => () => {
            s && a.Z.lastDCDismissed !== e && t(o.L.AUTO_DISMISS, !0);
        },
        [s, t, e]
    );
}
