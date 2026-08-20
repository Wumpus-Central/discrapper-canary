e.d(l, { default: () => h });
var a = e(477900),
    n = e(582128),
    i = e(189213),
    s = e(834730),
    r = e(95477),
    o = e(297264),
    c = e(821609),
    d = e(957565),
    u = e(998939),
    m = e(459864),
    x = e(375708),
    f = e(652140);
function h(t) {
    let { projectId: l, request: e, transitionState: h, onClose: p } = t,
        j = e.connection,
        b = null == j ? "" : j.label,
        [g, v] = n.useState({}),
        [k, C] = n.useState(""),
        [S, _] = n.useState(""),
        [y, E] = n.useState(!1),
        [N, T] = n.useState(!1),
        [w, z] = n.useState(null),
        P = n.useCallback((t) => {
            (0, d.C)(t, () => z(t));
        }, []),
        V = n.useCallback((t, l) => {
            null != l && (T(!1), v((e) => ({ ...e, [l]: t })));
        }, []),
        W = e.fields.map((t) => t.name).filter((t) => "" !== (g[t] ?? "").trim()),
        Z = null != j && "" !== k.trim() && "" !== S.trim(),
        A = null != j && !Z && ("" !== k.trim() || "" !== S.trim()),
        F = !A && (W.length > 0 || Z),
        J = W.length < e.fields.length || (null != j && !Z),
        q = n.useCallback(
            async (t) => {
                if ((t.preventDefault(), !F || y)) return;
                let e = {};
                W.length > 0 && (e.secrets = Object.fromEntries(W.map((t) => [t, g[t].trim()]))),
                    Z &&
                        null != j &&
                        (e.connection = {
                            connection_type: j.connection_type,
                            client_id: k.trim(),
                            client_secret: S.trim(),
                            authorize_url: j.authorize_url,
                            token_url: j.token_url,
                        }),
                    E(!0),
                    T(!1);
                try {
                    await (0, u.$S)(l, e),
                        (0, u.dv)(l, x.intl.string(J ? m.default.pu8e3p : m.default.lM98yZ)),
                        await p();
                } catch {
                    T(!0);
                } finally {
                    E(!1);
                }
            },
            [F, k, S, j, Z, W, J, p, l, y, g],
        );
    return (0, a.jsx)("form", {
        onSubmit: q,
        children: (0, a.jsx)(i.Modal, {
            transitionState: h,
            onClose: p,
            title: x.intl.string(m.default.ACvhVC),
            size: "md",
            actions: [
                { text: x.intl.string(x.t["ETE/oC"]), variant: "secondary", onClick: p, disabled: y },
                {
                    text: x.intl.string(m.default["8SWZaW"]),
                    variant: "primary",
                    type: "submit",
                    loading: y,
                    disabled: !F,
                },
            ],
            children: (0, a.jsxs)("div", {
                className: f._I,
                children: [
                    null != e.note && "" !== e.note
                        ? (0, a.jsx)(s.E, {
                              variant: "text-sm/normal",
                              color: "text-default",
                              selectable: !0,
                              children: e.note,
                          })
                        : null,
                    (0, a.jsx)(s.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        selectable: !0,
                        children: x.intl.string(m.default.p0Ay4J),
                    }),
                    e.fields.length + +(null != j) > 1
                        ? (0, a.jsx)(s.E, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              selectable: !0,
                              children: x.intl.string(m.default.LpnmXm),
                          })
                        : null,
                    e.fields.map((t) =>
                        (0, a.jsx)(
                            r.k,
                            {
                                label: t.label,
                                helperText: null != t.hint && "" !== t.hint ? t.hint : void 0,
                                name: t.name,
                                type: "password",
                                autoComplete: "off",
                                value: g[t.name] ?? "",
                                onChange: V,
                                disabled: y,
                                fullWidth: !0,
                            },
                            t.name,
                        ),
                    ),
                    null != j
                        ? (0, a.jsxs)("div", {
                              className: f.uJ,
                              children: [
                                  (0, a.jsx)(o.D, {
                                      variant: "heading-sm/semibold",
                                      color: "text-default",
                                      children: x.intl.formatToPlainString(m.default.zqgV1t, { platform: b }),
                                  }),
                                  (0, a.jsxs)("ol", {
                                      className: f.tk,
                                      children: [
                                          (0, a.jsx)("li", {
                                              className: f.Ci,
                                              children: (0, a.jsx)(s.E, {
                                                  variant: "text-sm/normal",
                                                  color: "text-default",
                                                  children: x.intl.formatToPlainString(m.default.A4GtqV, {
                                                      platform: b,
                                                  }),
                                              }),
                                          }),
                                          (0, a.jsxs)("li", {
                                              className: f.Ci,
                                              children: [
                                                  (0, a.jsx)(s.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-default",
                                                      children: x.intl.string(m.default.j2JF7B),
                                                  }),
                                                  (0, a.jsx)("ul", {
                                                      className: f.Dl,
                                                      children: [j.callback_urls.stable, j.callback_urls.preview].map(
                                                          (t) =>
                                                              (0, a.jsxs)(
                                                                  "li",
                                                                  {
                                                                      className: f.NT,
                                                                      children: [
                                                                          (0, a.jsx)("span", {
                                                                              className: f.kg,
                                                                              children: (0, a.jsx)(s.E, {
                                                                                  variant: "text-xs/normal",
                                                                                  color: "text-default",
                                                                                  selectable: !0,
                                                                                  children: t,
                                                                              }),
                                                                          }),
                                                                          (0, a.jsx)(c.$, {
                                                                              variant: "secondary",
                                                                              size: "sm",
                                                                              text: x.intl.string(
                                                                                  w === t ? x.t.t5VZ88 : x.t.OpuAlK,
                                                                              ),
                                                                              onClick: () => P(t),
                                                                          }),
                                                                      ],
                                                                  },
                                                                  t,
                                                              ),
                                                      ),
                                                  }),
                                              ],
                                          }),
                                          (0, a.jsxs)("li", {
                                              className: f.Ci,
                                              children: [
                                                  (0, a.jsx)(s.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-default",
                                                      children: x.intl.string(m.default.JiwZjF),
                                                  }),
                                                  (0, a.jsxs)("div", {
                                                      className: f.Z4,
                                                      children: [
                                                          (0, a.jsx)(r.k, {
                                                              label: x.intl.formatToPlainString(m.default.NT5IFS, {
                                                                  platform: b,
                                                              }),
                                                              name: "client_id",
                                                              autoComplete: "off",
                                                              value: k,
                                                              onChange: (t) => {
                                                                  T(!1), C(t);
                                                              },
                                                              disabled: y,
                                                              fullWidth: !0,
                                                          }),
                                                          (0, a.jsx)(r.k, {
                                                              label: x.intl.formatToPlainString(m.default["koywk/"], {
                                                                  platform: b,
                                                              }),
                                                              name: "client_secret",
                                                              type: "password",
                                                              autoComplete: "off",
                                                              value: S,
                                                              onChange: (t) => {
                                                                  T(!1), _(t);
                                                              },
                                                              disabled: y,
                                                              fullWidth: !0,
                                                          }),
                                                      ],
                                                  }),
                                              ],
                                          }),
                                      ],
                                  }),
                                  A
                                      ? (0, a.jsx)(s.E, {
                                            variant: "text-xs/normal",
                                            color: "text-feedback-critical",
                                            role: "alert",
                                            children: x.intl.formatToPlainString(m.default.VqmTFn, { platform: b }),
                                        })
                                      : null,
                              ],
                          })
                        : null,
                    N
                        ? (0, a.jsx)(s.E, {
                              variant: "text-xs/normal",
                              color: "text-feedback-critical",
                              role: "alert",
                              children: x.intl.string(m.default["4nT7Lo"]),
                          })
                        : null,
                ],
            }),
        }),
    });
}
