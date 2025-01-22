r.d(n, {
    A: function () {
        return l;
    }
});
var i = r(192379),
    a = r(261376),
    o = r(68985),
    s = r(921944);
function l(e, n) {
    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        l = !r && null != e && !a.O.has(e);
    i.useEffect(
        () => () => {
            l && o.Z.lastDCDismissed !== e && n(s.L.AUTO_DISMISS, !0);
        },
        [l, n, e]
    );
}
