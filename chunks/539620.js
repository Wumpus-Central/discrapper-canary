t.d(l, { default: () => h });
var a = t(477900),
    n = t(582128),
    i = t(189213),
    s = t(834730),
    r = t(95477),
    d = t(297264),
    o = t(821609),
    c = t(957565),
    u = t(998939),
    m = t(295813),
    x = t(375708),
    f = t(652140);
function h(e) {
    let { projectId: l, request: t, transitionState: h, onClose: j } = e,
        p = t.connection,
        b = null == p ? "" : p.label,
        [v, g] = n.useState({}),
        [k, C] = n.useState(""),
        [y, S] = n.useState(""),
        [_, N] = n.useState(!1),
        [E, w] = n.useState(!1),
        [T, q] = n.useState(null),
        z = n.useCallback((e) => {
            (0, c.C)(e, () => q(e));
        }, []),
        W = n.useCallback((e, l) => {
            null != l && (w(!1), g((t) => ({ ...t, [l]: e })));
        }, []),
        Z = t.fields.every((e) => "" !== (v[e.name] ?? "").trim()),
        A = null == p || ("" !== k.trim() && "" !== y.trim()),
        J = Z && A && (t.fields.length > 0 || null != p),
        P = n.useCallback(
            async (e) => {
                if ((e.preventDefault(), !J || _)) return;
                let a = {};
                t.fields.length > 0 &&
                    (a.secrets = Object.fromEntries(t.fields.map((e) => [e.name, v[e.name].trim()]))),
                    null != p &&
                        (a.connection = {
                            connection_type: p.connection_type,
                            client_id: k.trim(),
                            client_secret: y.trim(),
                            authorize_url: p.authorize_url,
                            token_url: p.token_url,
                        }),
                    N(!0),
                    w(!1);
                try {
                    await (0, u.$S)(l, a), (0, u.dv)(l, x.intl.string(m.default.lM98yZ)), await j();
                } catch {
                    w(!0);
                } finally {
                    N(!1);
                }
            },
            [J, k, y, p, j, l, t.fields, _, v],
        );
    return (0, a.jsx)("form", {
        onSubmit: P,
        children: (0, a.jsx)(i.Modal, {
            transitionState: h,
            onClose: j,
            title: x.intl.string(m.default.ACvhVC),
            size: "md",
            actions: [
                { text: x.intl.string(x.t["ETE/oC"]), variant: "secondary", onClick: j, disabled: _ },
                {
                    text: x.intl.string(m.default["8SWZaW"]),
                    variant: "primary",
                    type: "submit",
                    loading: _,
                    disabled: !J,
                },
            ],
            children: (0, a.jsxs)("div", {
                className: f._I,
                children: [
                    null != t.note && "" !== t.note
                        ? (0, a.jsx)(s.E, {
                              variant: "text-sm/normal",
                              color: "text-default",
                              selectable: !0,
                              children: t.note,
                          })
                        : null,
                    (0, a.jsx)(s.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        selectable: !0,
                        children: x.intl.string(m.default.p0Ay4J),
                    }),
                    t.fields.map((e) =>
                        (0, a.jsx)(
                            r.k,
                            {
                                label: e.label,
                                helperText: null != e.hint && "" !== e.hint ? e.hint : void 0,
                                name: e.name,
                                type: "password",
                                autoComplete: "off",
                                required: !0,
                                value: v[e.name] ?? "",
                                onChange: W,
                                disabled: _,
                                fullWidth: !0,
                            },
                            e.name,
                        ),
                    ),
                    null != p
                        ? (0, a.jsxs)("div", {
                              className: f.uJ,
                              children: [
                                  (0, a.jsx)(d.D, {
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
                                                      children: [p.callback_urls.stable, p.callback_urls.preview].map(
                                                          (e) =>
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
                                                                                  children: e,
                                                                              }),
                                                                          }),
                                                                          (0, a.jsx)(o.$, {
                                                                              variant: "secondary",
                                                                              size: "sm",
                                                                              text: x.intl.string(
                                                                                  T === e ? x.t.t5VZ88 : x.t.OpuAlK,
                                                                              ),
                                                                              onClick: () => z(e),
                                                                          }),
                                                                      ],
                                                                  },
                                                                  e,
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
                                                              required: !0,
                                                              value: k,
                                                              onChange: (e) => {
                                                                  w(!1), C(e);
                                                              },
                                                              disabled: _,
                                                              fullWidth: !0,
                                                          }),
                                                          (0, a.jsx)(r.k, {
                                                              label: x.intl.formatToPlainString(m.default["koywk/"], {
                                                                  platform: b,
                                                              }),
                                                              name: "client_secret",
                                                              type: "password",
                                                              autoComplete: "off",
                                                              required: !0,
                                                              value: y,
                                                              onChange: (e) => {
                                                                  w(!1), S(e);
                                                              },
                                                              disabled: _,
                                                              fullWidth: !0,
                                                          }),
                                                      ],
                                                  }),
                                              ],
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : null,
                    E
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
