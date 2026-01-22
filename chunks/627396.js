n.d(e, { A: () => _ }), n(896048), n(228524);
var a = n(627968),
    r = n(64700),
    i = n(311907),
    l = n(397927),
    s = n(181658),
    o = n(780333),
    c = n(287809),
    u = n(985018),
    E = n(297002),
    A = n(222872);
function _(t) {
    let { onNext: e, onClose: n, transitionState: _ } = t,
        [C, d] = r.useState(!1),
        g = (0, i.bG)([c.default], () => c.default.getCurrentUser()),
        N = async (t) => {
            t.preventDefault(), d(!0);
            try {
                await (0, o.B)(), e();
            } catch (e) {
                let t = new s.A(e).getAnyErrorMessage();
                null != t && (0, l.showToast)((0, l.createToast)(t, l.ToastType.FAILURE));
            } finally {
                d(!1);
            }
        };
    return (0, a.jsx)(l.kpP, {
        graphic: {
            type: "image",
            src: A,
        },
        title: u.intl.string(u.t.uFxYq0),
        onClose: n,
        transitionState: _,
        actions: [
            {
                variant: "secondary",
                text: u.intl.string(u.t["ETE/oC"]),
                onClick: n,
            },
            {
                variant: "primary",
                text: u.intl.string(u.t.rXV81H),
                loading: C,
                onClick: N,
            },
        ],
        children: (0, a.jsx)(l.Text, {
            className: E.h_,
            variant: "text-md/normal",
            children: u.intl.format(u.t.oMFSgi, { oldEmail: null == g ? void 0 : g.email }),
        }),
    });
}
