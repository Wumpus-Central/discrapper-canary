a.d(e, { default: () => p }), a(388685);
var s = a(54381),
    n = a(473749),
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
        [C, b] = n.useState(!1),
        [k, v] = n.useState(null),
        E = n.useRef(null),
        j = async (t) => {
            t.preventDefault(), v(null), x(!0);
            try {
                let t = await a(S);
                null != y && y(t), d();
            } catch (t) {
                v(new o.Z(t).getAnyErrorMessage());
            } finally {
                x(!1);
            }
        },
        M = async () => {
            if (!C) {
                b(!0);
                try {
                    await p(), (0, l.showToast)((0, l.createToast)(c.intl.string(c.t["84yeoz"]), l.ToastType.SUCCESS));
                } catch (e) {
                    let t = new o.Z(e).getAnyErrorMessage();
                    null != t && (0, l.showToast)((0, l.createToast)(t, l.ToastType.FAILURE));
                } finally {
                    b(!1);
                }
            }
        },
        A = m || C;
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
            subtitle: c.intl.string(c.t.SZJowy),
            actions: [
                {
                    text: c.intl.string(c.t["ETE/oC"]),
                    onClick: d,
                    variant: "secondary",
                    disabled: A,
                },
                {
                    text: g,
                    variant: T,
                    loading: A,
                    type: "submit",
                },
            ],
            onClose: d,
            children: (0, s.jsxs)(l.Kqy, {
                gap: 8,
                children: [
                    (0, s.jsx)(l.oil, {
                        label: c.intl.string(c.t["8mZX6M"]),
                        error: k,
                        value: S,
                        onChange: w,
                        inputRef: E,
                    }),
                    (0, s.jsx)(l.Text, {
                        variant: "text-sm/normal",
                        children: c.intl.format(c.t.P0sak5, { onResend: M }),
                    }),
                ],
            }),
        }),
    });
}
