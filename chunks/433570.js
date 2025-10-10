a.d(e, { default: () => p }), a(388685);
var s = a(951288),
    n = a(647438),
    i = a(990547),
    r = a(793030),
    l = a(481060),
    o = a(479531),
    c = a(388032),
    u = a(800010);
function p(t) {
    let {
            transitionState: e,
            onFormSubmit: a,
            onResend: p,
            onSuccess: y,
            onClose: d,
            headerText: h,
            confirmButtonText: g,
            confirmButtonVariant: T = "primary",
            impression: f,
        } = t,
        [m, x] = n.useState(!1),
        [S, w] = n.useState(""),
        [b, k] = n.useState(!1),
        [v, C] = n.useState(null),
        E = n.useRef(null),
        j = async (t) => {
            t.preventDefault(), C(null), x(!0);
            try {
                let t = await a(S);
                null != y && y(t), d();
            } catch (t) {
                C(new o.Z(t).getAnyErrorMessage());
            } finally {
                x(!1);
            }
        },
        A = async () => {
            if (!b) {
                k(!0);
                try {
                    await p(), (0, l.showToast)((0, l.createToast)(c.intl.string(c.t["84yeo6"]), l.ToastType.SUCCESS));
                } catch (e) {
                    let t = new o.Z(e).getAnyErrorMessage();
                    null != t && (0, l.showToast)((0, l.createToast)(t, l.ToastType.FAILURE));
                } finally {
                    k(!1);
                }
            }
        },
        M = m || b;
    return (0, s.jsx)("form", {
        onSubmit: j,
        children: (0, s.jsx)(r.ExpressiveModal, {
            transitionState: e,
            trackingProps: {
                impression: f,
                impressionType: i.ImpressionTypes.MODAL,
            },
            graphic: {
                src: u,
                type: "image",
            },
            title: h,
            subtitle: c.intl.string(c.t.SZJow8),
            actions: [
                {
                    text: c.intl.string(c.t["ETE/oK"]),
                    onClick: d,
                    variant: "secondary",
                    disabled: M,
                },
                {
                    text: g,
                    variant: T,
                    loading: M,
                    type: "submit",
                },
            ],
            onClose: d,
            children: (0, s.jsxs)(l.Kqy, {
                gap: 8,
                children: [
                    (0, s.jsx)(l.oil, {
                        label: c.intl.string(c.t["8mZX6O"]),
                        error: v,
                        value: S,
                        onChange: w,
                        inputRef: E,
                    }),
                    (0, s.jsx)(l.Text, {
                        variant: "text-sm/normal",
                        children: c.intl.format(c.t.P0sak5, { onResend: A }),
                    }),
                ],
            }),
        }),
    });
}
