e.d(n, { Z: () => _ }), e(388685), e(953529);
var a = e(54381),
    r = e(473749),
    i = e(442837),
    l = e(481060),
    s = e(479531),
    o = e(393869),
    c = e(594174),
    u = e(388032),
    E = e(36884),
    A = e(800010);
function _(t) {
    let { onNext: n, onClose: e, transitionState: _ } = t,
        [d, C] = r.useState(!1),
        x = (0, i.e7)([c.default], () => c.default.getCurrentUser()),
        N = async (t) => {
            t.preventDefault(), C(!0);
            try {
                await (0, o.i)(), n();
            } catch (n) {
                let t = new s.Z(n).getAnyErrorMessage();
                null != t && (0, l.showToast)((0, l.createToast)(t, l.ToastType.FAILURE));
            } finally {
                C(!1);
            }
        };
    return (0, a.jsx)(l.Ioy, {
        graphic: {
            type: "image",
            src: A,
        },
        title: u.intl.string(u.t.uFxYq0),
        onClose: e,
        transitionState: _,
        actions: [
            {
                variant: "secondary",
                text: u.intl.string(u.t["ETE/oC"]),
                onClick: e,
            },
            {
                variant: "primary",
                text: u.intl.string(u.t.rXV81H),
                loading: d,
                onClick: N,
            },
        ],
        children: (0, a.jsx)(l.Text, {
            className: E.description,
            variant: "text-md/normal",
            children: u.intl.format(u.t.oMFSgi, { oldEmail: null == x ? void 0 : x.email }),
        }),
    });
}
