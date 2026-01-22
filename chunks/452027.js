n.d(t, {
    D: () => g,
    n: () => m,
}),
    n(228524),
    n(896048),
    n(321073);
var r = n(627968),
    i = n(64700),
    a = n(827734),
    s = n(508770),
    o = n(140735),
    l = n(628284),
    c = n(695366),
    u = n(834730),
    d = n(15626),
    f = n(104983);

function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = _(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}

function h(e) {
    let { id: t, errorMessage: n, helperText: r, successMessage: a, description: s } = e,
        [o, l] = i.useState(!1),
        c = i.useId(),
        u = i.useId(),
        d = i.useId(),
        f = i.useId(),
        p = i.useId(),
        _ = null != s && "" !== s,
        h = (null != r && "" !== r) || (null != a && "" !== a),
        m = [];
    _ && m.push(f), h && m.push(d);
    let g = m.length > 0 ? m.join(" ") : void 0;
    return i.useMemo(
        () => ({
            labelId: c,
            controlId: null != t ? t : u,
            describedById: g,
            errorMessageId: null != n && "" !== n ? p : void 0,
            helperTextId: h ? d : void 0,
            descriptionId: _ ? f : void 0,
            isLabelHovered: o,
            setIsLabelHovered: l,
        }),
        [c, t, u, g, n, p, h, d, _, f, o, l],
    );
}

function m(e) {
    let {
        label: t,
        hideLabel: n,
        badge: r,
        icon: i,
        required: a,
        disabled: s,
        description: o,
        helperText: l,
        id: c,
        errorMessage: u,
        successMessage: d,
        layout: f,
        layoutConfig: _,
    } = e;
    return {
        fieldProps: {
            label: t,
            hideLabel: n,
            badge: r,
            icon: i,
            required: a,
            disabled: s,
            description: o,
            helperText: l,
            id: c,
            errorMessage: u,
            successMessage: d,
            layout: f,
            layoutConfig: _,
        },
        props: p(e, [
            "label",
            "hideLabel",
            "badge",
            "icon",
            "required",
            "disabled",
            "description",
            "helperText",
            "id",
            "errorMessage",
            "successMessage",
            "layout",
            "layoutConfig",
        ]),
    };
}

function g(e) {
    let {
            label: t,
            hideLabel: n = !1,
            required: i,
            disabled: a,
            description: l,
            helperText: c,
            children: p,
            errorMessage: _,
            successMessage: m,
            role: g,
            layout: b = "vertical",
            layoutConfig: y,
            badge: O,
            icon: A = null,
            interactiveLabel: v = !1,
            auxiliaryContentPosition: S = "under-control",
            trailingAuxiliaryContent: I,
            ref: T,
        } = e,
        C = h(e),
        { labelId: N, controlId: R, errorMessageId: w, describedById: P, helperTextId: D, descriptionId: x } = C,
        L = null == y ? void 0 : y.horizontalControlColumnWidth,
        j = "group" === g || "radiogroup" === g,
        M = j ? "span" : "label",
        k = j ? "fieldset" : "div",
        U = j
            ? (0, r.jsx)("legend", {
                  id: N,
                  children: (0, r.jsx)(o.A, {
                      children: t,
                  }),
              })
            : null,
        G = null != t && "" !== t,
        V = null != l && "" !== l,
        F = G
            ? (0, r.jsxs)(u.E, {
                  "aria-hidden": j,
                  "data-interactive": v,
                  id: N,
                  tag: M,
                  variant: "text-md/medium",
                  color: "text-strong",
                  htmlFor: R,
                  className: f.Pf,
                  children: [
                      null != A
                          ? (0, r.jsx)(A, {
                                "aria-hidden": !0,
                                size: "xs",
                                className: f.Kk,
                            })
                          : null,
                      t,
                      i &&
                          (0, r.jsx)(u.E, {
                              "aria-hidden": !0,
                              variant: "text-md/normal",
                              color: "text-feedback-critical",
                              className: f.mw,
                              children: "*",
                          }),
                      null != O
                          ? (0, r.jsx)("span", {
                                className: f.fC,
                                children: (0, r.jsx)(s.E, {
                                    type: O,
                                }),
                            })
                          : null,
                  ],
              })
            : null,
        B = (0, r.jsx)(E, {
            successMessage: m,
            errorMessage: _,
            helperText: c,
            trailing: I,
            helperTextId: D,
            errorMessageId: w,
        });
    return (0, r.jsx)(d._.Provider, {
        value: C,
        children: (0, r.jsxs)(k, {
            role: g,
            ref: T,
            className: f.kL,
            "data-layout": b,
            style:
                null != L
                    ? {
                          "--custom-field-horizontal-control-width": L,
                      }
                    : void 0,
            "data-disabled": a,
            "aria-describedby": j ? P : void 0,
            disabled: j ? a : void 0,
            children: [
                U,
                G && n
                    ? (0, r.jsx)(o.A, {
                          children: F,
                      })
                    : null,
                (G && !n) || V
                    ? (0, r.jsxs)("div", {
                          className: f._A,
                          children: [
                              n ? null : F,
                              V &&
                                  (0, r.jsx)(u.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: f.h_,
                                      id: x,
                                      children: l,
                                  }),
                              "under-label" === S ? B : null,
                          ],
                      })
                    : null,
                (0, r.jsxs)("div", {
                    className: f.A4,
                    children: ["function" == typeof p ? p(C) : p, "under-control" === S ? B : null],
                }),
            ],
        }),
    });
}

function E(e) {
    let { successMessage: t, errorMessage: n, helperText: i, trailing: s, helperTextId: o, errorMessageId: d } = e,
        p = (0, r.jsx)("div", {}),
        _ = null != s;
    return (null != n && "" !== n
        ? ((_ = !0),
          (p = (0, r.jsxs)("div", {
              className: f.lI,
              children: [
                  (0, r.jsx)(c.E, {
                      size: "xs",
                      color: a.A.colors.TEXT_FEEDBACK_CRITICAL,
                  }),
                  (0, r.jsx)(u.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      id: d,
                      children: n,
                  }),
              ],
          })))
        : null != t && "" !== t
          ? ((_ = !0),
            (p = (0, r.jsxs)("div", {
                className: f.lI,
                children: [
                    (0, r.jsx)(l.y, {
                        size: "xs",
                        color: a.A.colors.TEXT_FEEDBACK_POSITIVE,
                    }),
                    (0, r.jsx)(u.E, {
                        variant: "text-xs/normal",
                        color: "text-feedback-positive",
                        id: o,
                        children: t,
                    }),
                ],
            })))
          : null != i &&
            ((_ = !0),
            (p = (0, r.jsx)(u.E, {
                variant: "text-xs/normal",
                color: "text-subtle",
                id: o,
                children: i,
            }))),
    _)
        ? (0, r.jsxs)("div", {
              className: f.JA,
              children: [p, s],
          })
        : null;
}
