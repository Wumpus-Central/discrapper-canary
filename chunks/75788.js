n.d(t, { Z: () => m }), n(388685);
var a = n(951288),
    s = n(647438),
    r = n(442837),
    i = n(481060),
    l = n(479531),
    o = n(393869),
    c = n(25990),
    d = n(388032),
    u = n(780187);
function m(e) {
    var t;
    let { isSlideReady: n, error: m, setEmailToken: x, setError: _, onNext: E, onClose: N } = e,
        [p, h] = s.useState(!1),
        [A, C] = s.useState(""),
        [f, j] = s.useState(!1),
        g = (0, r.e7)([c.Z], () => c.Z.getErrors()),
        S = s.useRef(null);
    s.useEffect(() => {
        if (n) {
            var e;
            null == (e = S.current) || e.focus();
        }
    }, [n]);
    let v = async (e) => {
            e.preventDefault(), _(null), h(!0);
            try {
                let { token: e } = await (0, o.w)(A);
                x(e), E();
            } catch (e) {
                _(new l.Z(e).getAnyErrorMessage());
            } finally {
                h(!1);
            }
        },
        O = async () => {
            if (!f) {
                j(!0);
                try {
                    await (0, o.i)(!0),
                        (0, i.showToast)((0, i.createToast)(d.intl.string(d.t["84yeo6"]), i.ToastType.SUCCESS));
                } catch (t) {
                    let e = new l.Z(t).getAnyErrorMessage();
                    null != e && (0, i.showToast)((0, i.createToast)(e, i.ToastType.FAILURE));
                } finally {
                    j(!1);
                }
            }
        };
    return (0, a.jsxs)("form", {
        onSubmit: v,
        children: [
            (0, a.jsxs)(i.xBx, {
                separator: !1,
                className: u.header,
                children: [
                    (0, a.jsx)(i.Heading, {
                        className: u.title,
                        variant: "heading-xl/extrabold",
                        children: d.intl.string(d.t.jMGc4O),
                    }),
                    (0, a.jsx)(i.Text, {
                        color: "header-secondary",
                        variant: "text-md/normal",
                        className: u.subtitle,
                        children: d.intl.string(d.t.SZJow8),
                    }),
                    (0, a.jsx)(i.olH, {
                        onClick: N,
                        className: u.modalCloseButton,
                    }),
                ],
            }),
            (0, a.jsxs)(i.hzk, {
                className: u.content,
                children: [
                    (0, a.jsx)(i.oil, {
                        label: d.intl.string(d.t["8mZX6O"]),
                        error: null != m ? m : null == g || null == (t = g.email_token) ? void 0 : t[0],
                        value: A,
                        onChange: C,
                        inputRef: S,
                    }),
                    (0, a.jsx)(i.Text, {
                        className: u.help,
                        variant: "text-sm/normal",
                        children: d.intl.format(d.t.P0sak5, { onResend: O }),
                    }),
                ],
            }),
            (0, a.jsx)(i.mzw, {
                children: (0, a.jsx)(i.Button, {
                    variant: "primary",
                    text: d.intl.string(d.t.PDTjLC),
                    type: "submit",
                    loading: p,
                }),
            }),
        ],
    });
}
