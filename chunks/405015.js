n.d(e, { A: () => _ });
var a = n(627968),
    r = n(64700),
    i = n(311907),
    s = n(397927),
    l = n(181658),
    o = n(780333),
    c = n(287809),
    E = n(985018),
    u = n(297002),
    A = n(222872);
function _(t) {
    let { onNext: e, onClose: n, transitionState: _ } = t,
        [C, g] = r.useState(!1),
        N = (0, i.bG)([c.default], () => c.default.getCurrentUser()),
        S = async (t) => {
            t.preventDefault(), g(!0);
            try {
                await (0, o.B)(), e();
            } catch (e) {
                let t = new l.A(e).getAnyErrorMessage();
                null != t && (0, s.showToast)((0, s.createToast)(t, s.ToastType.FAILURE));
            } finally {
                g(!1);
            }
        };
    return (0, a.jsx)(s.kpP, {
        graphic: { type: "image", src: A },
        title: E.intl.string(E.t.uFxYq0),
        onClose: n,
        transitionState: _,
        actions: [
            { variant: "secondary", text: E.intl.string(E.t["ETE/oC"]), onClick: n },
            { variant: "primary", text: E.intl.string(E.t.rXV81H), loading: C, onClick: S },
        ],
        children: (0, a.jsx)(s.Text, {
            className: u.h_,
            variant: "text-md/normal",
            children: E.intl.format(E.t.oMFSgi, { oldEmail: N?.email }),
        }),
    });
}
