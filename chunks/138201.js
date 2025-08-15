n.d(t, {
    JZ: () => d,
    rT: () => c,
}),
    n(953529);
var r = n(255367);
n(73800);
var a = n(120356),
    i = n.n(a);
n(755721);
var l = n(481060),
    o = n(753599);
function s(e) {
    let { title: t } = e;
    return (0, r.jsx)(l.Text, {
        variant: "text-sm/semibold",
        color: "header-secondary",
        children: t,
    });
}
function c(e) {
    let { children: t, title: n, description: a, accessibilityRole: i = "none", accessibilityLabel: c } = e;
    return (0, r.jsxs)("div", {
        className: o.tableRowGroup,
        children: [
            null != n && (0, r.jsx)(s, { title: n }),
            null != a &&
                (0, r.jsx)(l.Text, {
                    variant: "text-sm/normal",
                    color: "text-secondary",
                    children: a,
                }),
            (0, r.jsx)("div", {
                className: o.content,
                role: i,
                "aria-label": c,
                children: t,
            }),
        ],
    });
}
function d(e) {
    let {
            icon: t,
            title: n,
            titleVariant: a = "text-md/semibold",
            description: s,
            descriptionVariant: c = "text-xs/medium",
            iconClassName: d,
            color: u,
            buttonText: m,
            buttonVariant: p = "secondary",
            buttonSize: _ = "sm",
            buttonDisabled: g,
            buttonIcon: b,
            buttonIconPosition: h = "start",
            buttonLoading: x,
            onButtonPress: f,
            listType: v = "icon",
            index: j,
        } = e,
        y =
            null != m
                ? (0, r.jsx)(l.zxk, {
                      variant: p,
                      size: _,
                      text: m,
                      icon: b,
                      iconPosition: h,
                      disabled: g,
                      loading: x,
                      onClick: f,
                      "aria-label": m,
                  })
                : void 0;
    return (0, r.jsxs)("div", {
        className: i()(o.row, o.rowMana),
        children: [
            (0, r.jsxs)(l.Kqy, {
                direction: "horizontal",
                gap: 16,
                align: "center",
                children: [
                    "numbered" === v && null != j
                        ? (0, r.jsx)(l.X6q, {
                              variant: "heading-md/semibold",
                              color: "text-brand",
                              className: o.number,
                              children: j + 1,
                          })
                        : null != t &&
                          (0, r.jsx)("div", {
                              className: o.iconContainer,
                              children: (0, r.jsx)(t, {
                                  color: null != u ? u : "currentColor",
                                  className: i()(o.icon, d),
                              }),
                          }),
                    (0, r.jsxs)("div", {
                        className: o.textContainer,
                        children: [
                            (0, r.jsx)(l.Text, {
                                variant: a,
                                color: "header-primary",
                                children: n,
                            }),
                            null != s &&
                                (0, r.jsx)(l.Text, {
                                    variant: c,
                                    color: "text-secondary",
                                    children: s,
                                }),
                        ],
                    }),
                ],
            }),
            y,
        ],
    });
}
