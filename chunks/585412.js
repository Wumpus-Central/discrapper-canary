t.d(n, { A: () => d, K: () => o });
var l = t(582128),
    a = t(260498),
    u = t(88112),
    r = t(722701),
    i = t(984782),
    s = t(477900),
    c = t(192308);
let p = "conjure-publish";
var f = t(738604);
function o(e, n, l) {
    if (
        (function (e, n) {
            let t = a.Ay.getProject(e);
            if (null == t || !0 === n.busy || (0, f.t8)(e) || r.A.isProjectPublishing(e)) return !1;
            let l = r.A.getPublishStatus(e);
            return null != (0, i.a1)(t, l) || (l?.safetyHold !== !0 && (0, u.oH)(l?.views));
        })(e, l)
    ) {
        var o;
        let a, u;
        return void ((o = { projectId: e, publishOptions: l, entryPoint: n }),
        (a = (0, c.lx)()),
        (u = { current: !1 }),
        (0, c.mM)(
            async () => {
                let { default: e } = await Promise.all([
                    t.e(151431),
                    t.e(41250),
                    t.e(177102),
                    t.e(60086),
                    t.e(460773),
                    t.e(208018),
                    t.e(788064),
                    t.e(441532),
                    t.e(422963),
                    t.e(433256),
                ]).then(t.bind(t, 113947));
                return (n) => (0, s.jsx)(e, { ...n, ...o, savingRef: u });
            },
            {
                modalKey: p,
                contextKey: a,
                onCloseRequest: () => {
                    u.current || (0, c.Oo)(p, a);
                },
            },
        ));
    }
    !(async function (e, n, t) {
        try {
            await (0, f.FZ)(e, n, t);
        } catch (n) {
            console.error("[conjure] publish action failed", e, n);
        }
    })(e, n, l);
}
function d(e, n, t) {
    let a = l.useContext(f.bI),
        u = t ?? a;
    return l.useCallback(
        (t) => {
            null == e || null == n || null == u || n.disabled || o(e, t, u);
        },
        [e, n, u],
    );
}
