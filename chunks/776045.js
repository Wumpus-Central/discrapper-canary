A.d(t, {
    A: () => d,
    default: () => c,
}),
    A(388685);
var n,
    r = A(255367),
    l = A(73800),
    a = A(755721),
    o = A(481060),
    i = A(388032),
    s = A(86054),
    d = (((n = {}).DANGER = "danger"), (n.WARNING = "warning"), n);
function c(e) {
    let {
            transitionState: t,
            onClose: A,
            title: n,
            body: d,
            cta: c,
            closeLabel: u,
            onConfirm: f,
            iconVariant: g = "warning",
        } = e,
        [p, m] = l.useState(!1),
        h = async () => {
            m(!0);
            try {
                await f(), A();
            } finally {
                m(!1);
            }
        },
        C = null != n ? n : i.intl.string(i.t.D94rwc);
    return (0, r.jsxs)(o.Y0X, {
        className: s.__invalid_container,
        size: o.CgR.DYNAMIC,
        transitionState: t,
        "aria-label": C,
        parentComponent: "WarningModal",
        children: [
            (0, r.jsxs)(o.hzk, {
                className: s.content,
                children: [
                    (0, r.jsxs)("div", {
                        className: s.header,
                        children: [
                            (0, r.jsx)(o.Mgn, {
                                size: "custom",
                                color: "currentColor",
                                width: 20,
                                height: 20,
                                className: (function (e) {
                                    switch (e) {
                                        case "danger":
                                            return s.dangerIcon;
                                        case "warning":
                                            return s.warningIcon;
                                    }
                                })(g),
                            }),
                            (0, r.jsx)(o.LZC, {
                                size: 8,
                                horizontal: !0,
                            }),
                            (0, r.jsx)(o.X6q, {
                                variant: "heading-xl/semibold",
                                color: "header-primary",
                                children: C,
                            }),
                        ],
                    }),
                    (0, r.jsx)(o.LZC, { size: 12 }),
                    (0, r.jsx)(o.Text, {
                        variant: "text-md/normal",
                        color: "text-muted",
                        className: s.__invalid_body,
                        children: d,
                    }),
                ],
            }),
            (0, r.jsxs)(o.mzw, {
                children: [
                    (0, r.jsx)(o.zxk, {
                        variant: "primary",
                        text: c,
                        onClick: h,
                        loading: p,
                    }),
                    (0, r.jsx)(o.LZC, {
                        size: 12,
                        horizontal: !0,
                    }),
                    null != u &&
                        (0, r.jsx)(a.zx, {
                            color: a.zx.Colors.PRIMARY,
                            look: a.zx.Looks.OUTLINED,
                            onClick: A,
                            children: u,
                        }),
                ],
            }),
        ],
    });
}
