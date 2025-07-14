n.d(t, { A: () => l });
var r = n(73800),
    i = n(261376),
    a = n(68985),
    o = n(428967),
    s = n(921944);
function l(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        l = !n && null != e && !i.O.has(e);
    r.useEffect(
        () => () => {
            l && (a.Z.lastDCDismissed !== e || (0, o.Vc)(e)) && t(s.L.AUTO_DISMISS, !0);
        },
        [l, t, e]
    );
}
