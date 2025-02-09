n.d(t, { i: () => u });
var i = n(200651),
    r = n(481060),
    a = n(451478),
    s = n(40851),
    o = n(981631);
function l() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.IlC.POPOUT;
    e !== o.IlC.APP &&
        (0, r.ZDy)(
            async () => {
                let { default: t } = await n.e('30720').then(n.bind(n, 285171));
                return (n) =>
                    (0, i.jsx)(t, {
                        ...n,
                        contextKey: e
                    });
            },
            { contextKey: (0, r.VnL)(e) }
        );
}
function u() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.IlC.APP,
        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = null != e ? e : (0, s.GB)();
    if ((n !== o.IlC.APP && null != n) || (t && null == n)) {
        if (a.Z.isFocused()) return;
        l(e);
    }
}
