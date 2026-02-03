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
    o = n(508770),
    s = n(140735),
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
    let { id: t, errorMessage: n, helperText: r, successMessage: a, description: o } = e,
        [s, l] = i.useState(!1),
        c = i.useId(),
        u = i.useId(),
        d = i.useId(),
        f = i.useId(),
        p = i.useId(),
        _ = null != o && "" !== o,
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
            isLabelHovered: s,
            setIsLabelHovered: l,
        }),
        [c, t, u, g, n, p, h, d, _, f, s, l],
    );
}

function m(e) {
    let {
        label: t,
        hideLabel: n,
        badge: r,
        icon: i,
        required: a,
        disabled: o,
        description: s,
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
            disabled: o,
            description: s,
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
            layout: y = "vertical",
            layoutConfig: b,
            badge: O,
            icon: v = null,
            interactiveLabel: A = !1,
            auxiliaryContentPosition: I = "under-control",
            trailingAuxiliaryContent: S,
            ref: T,
        } = e,
        C = h(e),
        { labelId: N, controlId: w, errorMessageId: R, describedById: P, helperTextId: D, descriptionId: L } = C,
        x = null == b ? void 0 : b.horizontalControlColumnWidth,
        M = "group" === g || "radiogroup" === g,
        j = M ? "span" : "label",
        k = M ? "fieldset" : "div",
        U = M
            ? (0, r.jsx)("legend", {
                  id: N,
                  children: (0, r.jsx)(s.A, {
                      children: t,
                  }),
              })
            : null,
        G = null != t && "" !== t,
        V = null != l && "" !== l,
        F = G
            ? (0, r.jsxs)(u.E, {
                  "aria-hidden": M,
                  "data-interactive": A,
                  id: N,
                  tag: j,
                  variant: "text-md/medium",
                  color: "text-strong",
                  htmlFor: w,
                  className: f.Pf,
                  children: [
                      null != v
                          ? (0, r.jsx)(v, {
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
                                children: (0, r.jsx)(o.E, {
                                    type: O,
                                    variant: "brand",
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
            trailing: S,
            helperTextId: D,
            errorMessageId: R,
        });
    return (0, r.jsx)(d._.Provider, {
        value: C,
        children: (0, r.jsxs)(k, {
            role: g,
            ref: T,
            className: f.kL,
            "data-layout": y,
            style:
                null != x
                    ? {
                          "--custom-field-horizontal-control-width": x,
                      }
                    : void 0,
            "data-disabled": a,
            "aria-describedby": M ? P : void 0,
            disabled: M ? a : void 0,
            children: [
                U,
                G && n
                    ? (0, r.jsx)(s.A, {
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
                                      id: L,
                                      children: l,
                                  }),
                              "under-label" === I ? B : null,
                          ],
                      })
                    : null,
                (0, r.jsxs)("div", {
                    className: f.A4,
                    children: ["function" == typeof p ? p(C) : p, "under-control" === I ? B : null],
                }),
            ],
        }),
    });
}

function E(e) {
    let { successMessage: t, errorMessage: n, helperText: i, trailing: o, helperTextId: s, errorMessageId: d } = e,
        p = (0, r.jsx)("div", {}),
        _ = null != o;
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
                        id: s,
                        children: t,
                    }),
                ],
            })))
          : null != i &&
            ((_ = !0),
            (p = (0, r.jsx)(u.E, {
                variant: "text-xs/normal",
                color: "text-subtle",
                id: s,
                children: i,
            }))),
    _)
        ? (0, r.jsxs)("div", {
              className: f.JA,
              children: [p, o],
          })
        : null;
}
