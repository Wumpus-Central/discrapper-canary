n.d(e, { A: () => N });
var a = n(627968),
    r = n(64700),
    i = n(311907),
    s = n(691540),
    l = n(857250),
    o = n(97483),
    c = n(772707),
    E = n(834730),
    u = n(181658),
    A = n(780333),
    _ = n(287809),
    C = n(985018),
    d = n(680281),
    g = n(37229);
function N(t) {
    let { onNext: e, onClose: n, transitionState: N } = t,
        [S, k] = r.useState(!1),
        m = (0, i.bG)([_.default], () => _.default.getCurrentUser()),
        h = async (t) => {
            t.preventDefault(), k(!0);
            try {
                await (0, A.B)(), e();
            } catch (e) {
                let t = new u.A(e).getAnyErrorMessage();
                null != t && (0, s.P0)((0, l.o)(t, o.Ck.FAILURE));
            } finally {
                k(!1);
            }
        };
    return (0, a.jsx)(c.k, {
        graphic: { type: "image", src: g },
        title: C.intl.string(C.t.uFxYq0),
        onClose: n,
        transitionState: N,
        actions: [
            { variant: "secondary", text: C.intl.string(C.t["ETE/oC"]), onClick: n },
            { variant: "primary", text: C.intl.string(C.t.rXV81H), loading: S, onClick: h },
        ],
        children: (0, a.jsx)(E.E, {
            className: d.h_,
            variant: "text-md/normal",
            children: C.intl.format(C.t.oMFSgi, { oldEmail: m?.email }),
        }),
    });
}
