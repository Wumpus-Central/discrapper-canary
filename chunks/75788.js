n.d(t, { Z: () => x }), n(388685);
var a = n(951288),
    s = n(647438),
    r = n(442837),
    i = n(481060),
    l = n(479531),
    o = n(393869),
    c = n(25990),
    d = n(388032),
    m = n(780187);
function x(e) {
    var t;
    let { isSlideReady: n, error: x, setEmailToken: u, setError: _, onNext: E, onClose: N } = e,
        [h, p] = s.useState(!1),
        [A, C] = s.useState(""),
        [j, f] = s.useState(!1),
        g = (0, r.e7)([c.Z], () => c.Z.getErrors()),
        S = s.useRef(null);
    s.useEffect(() => {
        if (n) {
            var e;
            null == (e = S.current) || e.focus();
        }
    }, [n]);
    let v = async (e) => {
            e.preventDefault(), _(null), p(!0);
            try {
                let { token: e } = await (0, o.w)(A);
                u(e), E();
            } catch (e) {
                _(new l.Z(e).getAnyErrorMessage());
            } finally {
                p(!1);
            }
        },
        O = async () => {
            if (!j) {
                f(!0);
                try {
                    await (0, o.i)(!0),
                        (0, i.showToast)((0, i.createToast)(d.intl.string(d.t["84yeo6"]), i.ToastType.SUCCESS));
                } catch (t) {
                    let e = new l.Z(t).getAnyErrorMessage();
                    null != e && (0, i.showToast)((0, i.createToast)(e, i.ToastType.FAILURE));
                } finally {
                    f(!1);
                }
            }
        };
    return (0, a.jsxs)("form", {
        onSubmit: v,
        children: [
            (0, a.jsxs)(i.xBx, {
                separator: !1,
                className: m.header,
                children: [
                    (0, a.jsx)(i.X6q, {
                        className: m.title,
                        variant: "heading-xl/extrabold",
                        children: d.intl.string(d.t.jMGc4O),
                    }),
                    (0, a.jsx)(i.Text, {
                        color: "header-secondary",
                        variant: "text-md/normal",
                        className: m.subtitle,
                        children: d.intl.string(d.t.SZJow8),
                    }),
                    (0, a.jsx)(i.olH, {
                        onClick: N,
                        className: m.modalCloseButton,
                    }),
                ],
            }),
            (0, a.jsxs)(i.hzk, {
                className: m.content,
                children: [
                    (0, a.jsx)(i.xJW, {
                        title: d.intl.string(d.t["8mZX6O"]),
                        error: null != x ? x : null == g || null == (t = g.email_token) ? void 0 : t[0],
                        children: (0, a.jsx)(i.oil, {
                            value: A,
                            onChange: C,
                            inputRef: S,
                        }),
                    }),
                    (0, a.jsx)(i.Text, {
                        className: m.help,
                        variant: "text-sm/normal",
                        children: d.intl.format(d.t.P0sak5, { onResend: O }),
                    }),
                ],
            }),
            (0, a.jsx)(i.mzw, {
                children: (0, a.jsx)(i.zxk, {
                    variant: "primary",
                    text: d.intl.string(d.t.PDTjLC),
                    type: "submit",
                    loading: h,
                }),
            }),
        ],
    });
}
