n.d(t, { r: () => M, w: () => w });
var l = n(477900),
    i = n(582128),
    a = n(503698),
    r = n.n(a),
    s = n(750943),
    u = n(834730),
    o = n(331322),
    d = n(821609),
    c = n(95635),
    f = n(123292),
    p = n(95477),
    h = n(103557),
    g = n(709066),
    m = n(946274),
    b = n(240248),
    v = n(164892),
    x = n(535466),
    y = n(248675),
    A = n(660183),
    j = n(154600);
function C(e) {
    let { src: t, label: n, size: i, onClick: a, disabled: o } = e,
        d = r()(j.Vs, "lg" === i ? j.mY : j.sT),
        c =
            null != t
                ? (0, l.jsx)("img", { className: j.uP, src: t, alt: "" })
                : null != a
                  ? (0, l.jsx)(s.X, { size: "md", color: "currentColor" })
                  : (0, l.jsx)(u.E, { variant: "text-md/semibold", color: "text-muted", children: (0, b.oN)(n) });
    return null == a
        ? (0, l.jsx)("div", { className: d, children: c })
        : (0, l.jsx)("button", {
              type: "button",
              tabIndex: -1,
              "aria-hidden": !0,
              disabled: o,
              className: r()(d, j.Bk, { [j.A6]: null == t }),
              onClick: a,
              children: c,
          });
}
function S(e) {
    let { iconURL: t, canRemove: n, disabled: a = !1, onChange: r } = e,
        s = i.useRef(null),
        [p, h] = i.useState(null);
    function g() {
        a || s.current?.activateUploadDialogue();
    }
    return (0, l.jsxs)(o.B, {
        direction: "horizontal",
        gap: 16,
        align: "center",
        children: [
            (0, l.jsx)(C, { src: t, label: "", size: "lg", onClick: g, disabled: a }),
            (0, l.jsxs)(o.B, {
                gap: 8,
                align: "start",
                children: [
                    (0, l.jsxs)(o.B, {
                        gap: 4,
                        children: [
                            (0, l.jsx)(u.E, {
                                variant: "text-sm/medium",
                                color: "text-strong",
                                children: A.intl.string(y.default.M3q9QZ),
                            }),
                            (0, l.jsx)(u.E, {
                                variant: "text-xs/normal",
                                color: null != p ? "text-feedback-critical" : "text-muted",
                                "aria-live": "polite",
                                children: p ?? A.intl.string(y.default.F6L3s4),
                            }),
                        ],
                    }),
                    (0, l.jsxs)(o.B, {
                        direction: "horizontal",
                        gap: 12,
                        align: "center",
                        children: [
                            (0, l.jsx)(d.$, {
                                size: "sm",
                                variant: "secondary",
                                icon: c.UploadIcon,
                                text: A.intl.string(null == t ? y.default.WpXHIP : y.default.iwCCor),
                                "aria-label": null == t ? void 0 : A.intl.string(y.default["75j6Qp"]),
                                onClick: g,
                                disabled: a,
                            }),
                            n
                                ? (0, l.jsx)(f.Q, {
                                      variant: "secondary",
                                      text: A.intl.string(y.default.gqtFOS),
                                      onClick: () => {
                                          (h(null), r(null));
                                      },
                                      disabled: a,
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
            (0, l.jsx)(m.Ay, {
                ref: s,
                className: j.Fg,
                multiple: !1,
                filters: [{ name: A.intl.string(A.t["Sp2NF+"]), extensions: x.En }],
                maxFileSizeBytes: x.Q0,
                onChange: (e) => {
                    (h(null), r(e));
                },
                onFileSizeError: () => h(A.intl.string(y.default.ZTAAMc)),
                "aria-hidden": !0,
            }),
        ],
    });
}
function k(e) {
    let { name: t, nameError: n, onNameChange: i, description: a, onDescriptionChange: r, disabled: s = !1 } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(p.k, {
                label: A.intl.string(y.default.GWBCF9),
                value: t,
                onChange: i,
                error: n,
                maxLength: v.eq,
                disabled: s,
                fullWidth: !0,
            }),
            (0, l.jsx)(h.f, {
                label: A.intl.string(y.default.ynaGa1),
                placeholder: A.intl.string(y.default["I+3UTL"]),
                value: a,
                onChange: r,
                maxLength: v.HR,
                disabled: s,
            }),
        ],
    });
}
function w(e) {
    let { iconURL: t, name: n, description: i } = e;
    return (0, l.jsxs)(o.B, {
        gap: 8,
        children: [
            (0, l.jsx)(u.E, {
                variant: "text-xs/semibold",
                color: "text-muted",
                children: A.intl.string(y.default.KhR80V),
            }),
            (0, l.jsxs)("div", {
                className: j.B0,
                "aria-live": "polite",
                children: [
                    (0, l.jsx)(C, { src: t, label: n, size: "sm" }),
                    (0, l.jsxs)("div", {
                        className: j.Wi,
                        children: [
                            (0, l.jsxs)(o.B, {
                                direction: "horizontal",
                                gap: 4,
                                align: "center",
                                children: [
                                    (0, l.jsx)(u.E, {
                                        variant: "text-md/semibold",
                                        color: "text-strong",
                                        lineClamp: 1,
                                        children: n,
                                    }),
                                    (0, l.jsx)(g.A, {}),
                                ],
                            }),
                            (0, l.jsx)(u.E, {
                                variant: "text-sm/normal",
                                color: "" === i ? "text-muted" : "text-default",
                                lineClamp: 2,
                                children: "" === i ? A.intl.string(y.default.yQ158z) : i,
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function M(e) {
    let { iconURL: t, canRemove: n, onIconChange: i, previewName: a, inlinePreview: r = !0, ...s } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(S, { iconURL: t, canRemove: n, disabled: s.disabled, onChange: i }),
            (0, l.jsx)(k, { ...s }),
            r ? (0, l.jsx)(w, { iconURL: t, name: a, description: s.description.trim() }) : null,
        ],
    });
}
