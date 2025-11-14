n.d(t, { t: () => s });
var l = n(442837),
    o = n(778825),
    r = n(271383),
    i = n(25990),
    a = n(51144);
function s(e, t) {
    var n, s;
    let c = null != (n = a.ZP.useName(e)) ? n : "",
        d =
            null !=
            (s = (0, l.e7)([o.Z, i.Z, r.ZP], () => {
                if (null != t) {
                    var n;
                    return null != (n = o.Z.getPendingNickname()) ? n : r.ZP.getNick(t, null == e ? void 0 : e.id);
                }
                return i.Z.getPendingGlobalName();
            }, [t, e]))
                ? s
                : c;
    return null != d ? d : c;
}
