s.d(e, { default: () => p }), s(388685);
var a = s(54381),
    n = s(473749),
    i = s(990547),
    r = s(793030),
    l = s(481060),
    o = s(479531),
    c = s(388032),
    u = s(800010);
function p(t) {
    let {
            transitionState: e,
            onFormSubmit: s,
            onResend: p,
            onSuccess: y,
            onClose: g,
            headerText: d,
            confirmButtonText: h,
            confirmButtonVariant: x = "primary",
            impression: T,
        } = t,
        [f, m] = n.useState(!1),
        [S, w] = n.useState(""),
        [C, b] = n.useState(!1),
        [k, v] = n.useState(null),
        E = n.useRef(null),
        j = async (t) => {
            t.preventDefault(), v(null), m(!0);
            try {
                let t = await s(S);
                null != y && y(t), g();
            } catch (t) {
                v(new o.Z(t).getAnyErrorMessage());
            } finally {
                m(!1);
            }
        },
        A = async () => {
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
        M = f || C;
    return (0, a.jsx)("form", {
        onSubmit: j,
        children: (0, a.jsx)(r.ExpressiveModal, {
            transitionState: e,
            trackingProps: {
                impression: T,
                impressionType: i.ImpressionTypes.MODAL,
            },
            graphic: {
                src: u,
                type: "image",
            },
            title: d,
            subtitle: c.intl.string(c.t.SZJowy),
            actions: [
                {
                    text: c.intl.string(c.t["ETE/oC"]),
                    onClick: g,
                    variant: "secondary",
                    disabled: M,
                },
                {
                    text: h,
                    variant: x,
                    loading: M,
                    type: "submit",
                },
            ],
            onClose: g,
            children: (0, a.jsxs)(l.Kqy, {
                gap: 8,
                children: [
                    (0, a.jsx)(l.oil, {
                        label: c.intl.string(c.t["8mZX6M"]),
                        error: k,
                        value: S,
                        onChange: w,
                        inputRef: E,
                    }),
                    (0, a.jsx)(r.Avr, {
                        textVariant: "text-sm/normal",
                        text: c.intl.string(c.t.K0NPQ6),
                        onClick: A,
                    }),
                ],
            }),
        }),
    });
}
