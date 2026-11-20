l.d(t, { A: () => o, K: () => p });
var n = l(582128),
    s = l(260498),
    u = l(722701),
    r = l(984782),
    a = l(477900),
    i = l(192308);
let c = "conjure-publish";
var d = l(738604);
function p(e, t, n) {
    var p;
    let o;
    if (
        !(null == (o = s.Ay.getProject(e)) || !0 === n.busy || (0, d.t8)(e) || u.A.isProjectPublishing(e)) &&
        null != (0, r.a1)(o, u.A.getPublishStatus(e))
    ) {
        let s, u;
        return void ((p = { projectId: e, publishOptions: n, entryPoint: t }),
        (s = (0, i.lx)()),
        (u = { current: !1 }),
        (0, i.mM)(
            async () => {
                let { default: e } = await Promise.all([
                    l.e(314098),
                    l.e(41250),
                    l.e(177102),
                    l.e(60086),
                    l.e(460773),
                    l.e(208018),
                    l.e(788064),
                    l.e(441532),
                    l.e(422963),
                    l.e(53374),
                ]).then(l.bind(l, 735181));
                return (t) => (0, a.jsx)(e, { ...t, ...p, savingRef: u });
            },
            {
                modalKey: c,
                contextKey: s,
                onCloseRequest: () => {
                    u.current || (0, i.Oo)(c, s);
                },
            },
        ));
    }
    !(async function (e, t, l) {
        try {
            await (0, d.FZ)(e, t, l);
        } catch (t) {
            console.error("[conjure] publish action failed", e, t);
        }
    })(e, t, n);
}
function o(e, t, l) {
    let s = n.useContext(d.bI),
        u = l ?? s;
    return n.useCallback(
        (l) => {
            null == e || null == t || null == u || t.disabled || p(e, l, u);
        },
        [e, t, u],
    );
}
