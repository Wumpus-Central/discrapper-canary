a.d(e, { default: () => p }), a(388685);
var n = a(951288),
    s = a(647438),
    i = a(990547),
    r = a(667202),
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
        [m, S] = s.useState(!1),
        [w, x] = s.useState(""),
        [b, k] = s.useState(!1),
        [C, v] = s.useState(null),
        E = s.useRef(null),
        j = async (t) => {
            t.preventDefault(), v(null), S(!0);
            try {
                let t = await a(w);
                null != y && y(t), d();
            } catch (t) {
                v(new o.Z(t).getAnyErrorMessage());
            } finally {
                S(!1);
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
        R = m || b;
    return (0, n.jsx)("form", {
        onSubmit: j,
        children: (0, n.jsx)(r.I, {
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
                    disabled: R,
                },
                {
                    text: g,
                    variant: T,
                    loading: R,
                    type: "submit",
                },
            ],
            onClose: d,
            children: (0, n.jsxs)(l.Kqy, {
                gap: 8,
                children: [
                    (0, n.jsx)(l.oil, {
                        label: c.intl.string(c.t["8mZX6O"]),
                        error: C,
                        value: w,
                        onChange: x,
                        inputRef: E,
                    }),
                    (0, n.jsx)(l.Text, {
                        variant: "text-sm/normal",
                        children: c.intl.format(c.t.P0sak5, { onResend: A }),
                    }),
                ],
            }),
        }),
    });
}
