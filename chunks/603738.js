a.d(t, { A: () => T });
var n = a(627968),
    s = a(64700),
    i = a(284009),
    l = a.n(i),
    r = a(311907),
    o = a(827734),
    c = a(862482),
    _ = a(111159),
    d = a(534514),
    u = a(834730),
    m = a(86182),
    p = a(955437),
    f = a(201505),
    E = a(287809),
    A = a(975571),
    h = a(652215),
    N = a(204925),
    b = a(985018),
    x = a(530335);
function T(e) {
    let { onComplete: t, onClose: a } = e,
        [i, T] = s.useState(null),
        [D, j] = s.useState(null),
        [C, I] = s.useState(!1),
        g = (0, r.bG)([E.default], () => E.default.getCurrentUser()),
        y = s.useRef(null);
    async function G(e) {
        e.preventDefault(), l()(null != i, "Cannot submit null birthday."), I(!0);
        try {
            await p.n7(i, N.w_.NEW_USER_FLOW), t();
        } catch (e) {
            null != e.body && null != e.body.date_of_birth
                ? (p.Xv(N.w_.NEW_USER_FLOW), p.$2(N.w_.NEW_USER_FLOW), a())
                : e?.body?.username != null
                  ? j(b.intl.string(b.t["TGg/2k"]))
                  : j(e?.body.message);
        }
        I(!1);
    }
    s.useEffect(() => {
        null != g && null != g.nsfwAllowed && t();
    }, [g, t]);
    let v = s.useCallback(
            (e) => {
                T(e);
            },
            [T],
        ),
        L = s.useCallback(() => {
            y.current?.focus();
        }, [y]);
    return null == g
        ? null
        : (0, n.jsxs)("form", {
              className: x.Qs,
              onSubmit: G,
              children: [
                  (0, n.jsx)(_.p, {
                      size: "custom",
                      width: 56,
                      height: 40,
                      className: x.wm,
                      color: o.A.unsafe_rawColors.BRAND_500.css,
                  }),
                  (0, n.jsx)(d.D, {
                      className: x.DD,
                      variant: "heading-xl/semibold",
                      children: b.intl.string(b.t.n7i7sv),
                  }),
                  (0, n.jsx)(u.E, {
                      color: "text-default",
                      className: x.h_,
                      variant: "text-md/normal",
                      children: b.intl.format(b.t.fa8kW1, { helpURL: A.A.getArticleURL(h.MVz.AGE_GATE) }),
                  }),
                  (0, n.jsx)(m.w, {
                      theme: h.NJ8.LIGHT,
                      children: (0, n.jsx)(f.A, {
                          required: !0,
                          autoFocus: !0,
                          wrapperClassName: x.kz,
                          label: b.intl.string(b.t.rhBeKe),
                          name: "birthday",
                          onChange: v,
                          onPopulated: L,
                          error: D,
                          value: i,
                      }),
                  }),
                  (0, n.jsx)("div", {
                      className: x.qr,
                      children: (0, n.jsx)("div", {
                          className: x._o,
                          children: (0, n.jsx)(c.$n, {
                              "data-migration-pending": !0,
                              buttonRef: y,
                              type: "submit",
                              size: c.$n.Sizes.LARGE,
                              submitting: C,
                              disabled: null == i,
                              fullWidth: !0,
                              children: b.intl.string(b.t.PDTjLN),
                          }),
                      }),
                  }),
              ],
          });
}
