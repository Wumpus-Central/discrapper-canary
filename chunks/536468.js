n.d(e, { A: () => c });
var l = n(582128),
    i = n(811587),
    a = n(826058),
    r = n(477900),
    u = n(192308);
let s = "conjure-publish";
function o(t) {
    let e = (0, u.lx)(),
        l = { current: !1 };
    (0, u.mM)(
        async () => {
            let { default: e } = await Promise.all([
                n.e(880475),
                n.e(460773),
                n.e(208018),
                n.e(801342),
                n.e(524260),
            ]).then(n.bind(n, 937679));
            return (n) => (0, r.jsx)(e, { ...n, ...t, savingRef: l });
        },
        {
            modalKey: s,
            contextKey: e,
            onCloseRequest: () => {
                l.current || (0, u.Oo)(s, e);
            },
        },
    );
}
function c(t, e, n) {
    let r, u;
    return (
        (r = l.useContext(a.bI)),
        (u = n ?? r),
        l.useCallback(
            (n) => {
                if (null == t || null == e || null == u || e.disabled) return;
                let l = e.status?.publishState;
                e.awaitingApproval || e.status?.safetyHold === !0 || (null != l && (0, i.lE)(l))
                    ? e.run(n)
                    : o({ projectId: t, publishOptions: u, entryPoint: n });
            },
            [t, e, u, o],
        )
    );
}
