n.d(t, { A: () => o });
var i = n(192379),
    r = n(261376),
    a = n(68985),
    s = n(921944);
function o(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        o = !n && null != e && !r.O.has(e);
    i.useEffect(
        () => () => {
            o && a.Z.lastDCDismissed !== e && t(s.L.AUTO_DISMISS, !0);
        },
        [o, t, e]
    );
}
