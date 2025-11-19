n.d(e, { Z: () => d }), n(388685), n(953529);
var a = n(54381),
    r = n(473749),
    i = n(442837),
    l = n(481060),
    s = n(479531),
    o = n(393869),
    c = n(594174),
    u = n(388032),
    E = n(810512),
    _ = n(800010);
function d(t) {
    let { onNext: e, onClose: n, transitionState: d } = t,
        [A, x] = r.useState(!1),
        C = (0, i.e7)([c.default], () => c.default.getCurrentUser()),
        g = async (t) => {
            t.preventDefault(), x(!0);
            try {
                await (0, o.i)(), e();
            } catch (e) {
                let t = new s.Z(e).getAnyErrorMessage();
                null != t && (0, l.showToast)((0, l.createToast)(t, l.ToastType.FAILURE));
            } finally {
                x(!1);
            }
        };
    return (0, a.jsx)(l.Ioy, {
        graphic: {
            type: "image",
            src: _,
        },
        title: u.intl.string(u.t.uFxYq0),
        onClose: n,
        transitionState: d,
        actions: [
            {
                variant: "secondary",
                text: u.intl.string(u.t["ETE/oC"]),
                onClick: n,
            },
            {
                variant: "primary",
                text: u.intl.string(u.t.rXV81H),
                loading: A,
                onClick: g,
            },
        ],
        children: (0, a.jsx)(l.Text, {
            className: E.description,
            variant: "text-md/normal",
            children: u.intl.format(u.t.oMFSgi, { oldEmail: null == C ? void 0 : C.email }),
        }),
    });
}
