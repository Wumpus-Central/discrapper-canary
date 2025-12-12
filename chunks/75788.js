e.d(n, { Z: () => A }), e(388685);
var r = e(54381),
    i = e(473749),
    a = e(442837),
    l = e(481060),
    s = e(479531),
    o = e(393869),
    c = e(25990),
    u = e(388032),
    E = e(800010);
function A(t) {
    var n;
    let { error: e, setEmailToken: A, setError: _, onNext: C, onClose: d, transitionState: x } = t,
        [N, S] = i.useState(!1),
        [g, p] = i.useState(""),
        [f, m] = i.useState(!1),
        v = (0, a.e7)([c.Z], () => c.Z.getErrors()),
        y = i.useRef(null);
    i.useEffect(() => {
        var t;
        null == (t = y.current) || t.focus();
    }, []);
    let h = async (t) => {
            t.preventDefault(), _(null), S(!0);
            try {
                let { token: t } = await (0, o.w)(g);
                A(t), C();
            } catch (t) {
                _(new s.Z(t).getAnyErrorMessage());
            } finally {
                S(!1);
            }
        },
        M = async () => {
            if (!f) {
                m(!0);
                try {
                    await (0, o.i)(!0),
                        (0, l.showToast)((0, l.createToast)(u.intl.string(u.t["84yeoz"]), l.ToastType.SUCCESS));
                } catch (n) {
                    let t = new s.Z(n).getAnyErrorMessage();
                    null != t && (0, l.showToast)((0, l.createToast)(t, l.ToastType.FAILURE));
                } finally {
                    m(!1);
                }
            }
        };
    return (0, r.jsx)(l.Ioy, {
        title: u.intl.string(u.t.jMGc4J),
        subtitle: u.intl.string(u.t.SZJowy),
        graphic: {
            type: "image",
            src: E,
        },
        transitionState: x,
        onClose: d,
        actions: [
            {
                variant: "primary",
                text: u.intl.string(u.t.PDTjLN),
                loading: N,
                onClick: h,
            },
        ],
        children: (0, r.jsxs)(l.Kqy, {
            gap: 8,
            children: [
                (0, r.jsx)(l.oil, {
                    label: u.intl.string(u.t["8mZX6M"]),
                    error: null != e ? e : null == v || null == (n = v.email_token) ? void 0 : n[0],
                    value: g,
                    onChange: p,
                    inputRef: y,
                }),
                (0, r.jsx)(l.Avr, {
                    textVariant: "text-sm/normal",
                    text: u.intl.string(u.t.K0NPQ6),
                    onClick: M,
                }),
            ],
        }),
    });
}
