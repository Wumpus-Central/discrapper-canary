n.d(t, { Z: () => m }), n(388685), n(953529);
var a = n(951288),
    s = n(647438),
    r = n(442837),
    i = n(481060),
    l = n(479531),
    o = n(393869),
    c = n(594174),
    d = n(388032),
    u = n(780187);
function m(e) {
    let { onNext: t, onClose: n } = e,
        [m, x] = s.useState(!1),
        _ = (0, r.e7)([c.default], () => c.default.getCurrentUser()),
        E = async (e) => {
            e.preventDefault(), x(!0);
            try {
                await (0, o.i)(), t();
            } catch (t) {
                let e = new l.Z(t).getAnyErrorMessage();
                null != e && (0, i.showToast)((0, i.createToast)(e, i.ToastType.FAILURE));
            } finally {
                x(!1);
            }
        };
    return (0, a.jsxs)("form", {
        onSubmit: E,
        children: [
            (0, a.jsxs)(i.xBx, {
                separator: !1,
                className: u.header,
                children: [
                    (0, a.jsx)(i.Heading, {
                        className: u.title,
                        variant: "heading-xl/extrabold",
                        children: d.intl.string(d.t.uFxYq6),
                    }),
                    (0, a.jsx)(i.olH, {
                        onClick: n,
                        className: u.modalCloseButton,
                    }),
                ],
            }),
            (0, a.jsx)(i.hzk, {
                className: u.content,
                children: (0, a.jsx)(i.Text, {
                    className: u.description,
                    variant: "text-md/normal",
                    children: d.intl.format(d.t.oMFSgo, { oldEmail: null == _ ? void 0 : _.email }),
                }),
            }),
            (0, a.jsxs)(i.mzw, {
                className: u.modalFooter,
                children: [
                    (0, a.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: u.__invalid_submit,
                        children: (0, a.jsx)(i.Button, {
                            variant: "primary",
                            text: d.intl.string(d.t.rXV81N),
                            type: "submit",
                            loading: m,
                        }),
                    }),
                    (0, a.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: u.__invalid_cancel,
                        children: (0, a.jsx)(i.Button, {
                            variant: "secondary",
                            text: d.intl.string(d.t["ETE/oK"]),
                            onClick: n,
                        }),
                    }),
                ],
            }),
        ],
    });
}
