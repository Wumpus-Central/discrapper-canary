a.d(t, { A: () => h });
var n = a(627968),
    s = a(64700),
    i = a(284009),
    l = a.n(i),
    r = a(311907),
    o = a(827734),
    c = a(421380),
    _ = a(397927),
    d = a(955437),
    u = a(201505),
    m = a(287809),
    p = a(975571),
    f = a(652215),
    E = a(204925),
    A = a(985018),
    N = a(921455);
function h(e) {
    let { onComplete: t, onClose: a } = e,
        [i, h] = s.useState(null),
        [b, x] = s.useState(null),
        [T, C] = s.useState(!1),
        j = (0, r.bG)([m.default], () => m.default.getCurrentUser()),
        D = s.useRef(null);
    async function I(e) {
        e.preventDefault(), l()(null != i, "Cannot submit null birthday."), C(!0);
        try {
            await d.n7(i, E.w_.NEW_USER_FLOW), t();
        } catch (e) {
            null != e.body && null != e.body.date_of_birth
                ? (d.Xv(E.w_.NEW_USER_FLOW), d.$2(E.w_.NEW_USER_FLOW), a())
                : e?.body?.username != null
                  ? x(A.intl.string(A.t["TGg/2k"]))
                  : x(e?.body.message);
        }
        C(!1);
    }
    s.useEffect(() => {
        null != j && null != j.nsfwAllowed && t();
    }, [j, t]);
    let g = s.useCallback(
            (e) => {
                h(e);
            },
            [h],
        ),
        y = s.useCallback(() => {
            D.current?.focus();
        }, [D]);
    return null == j
        ? null
        : (0, n.jsxs)("form", {
              className: N.Qs,
              onSubmit: I,
              children: [
                  (0, n.jsx)(_.pVd, {
                      size: "custom",
                      width: 56,
                      height: 40,
                      className: N.wm,
                      color: o.A.unsafe_rawColors.BRAND_500.css,
                  }),
                  (0, n.jsx)(_.Heading, {
                      className: N.DD,
                      variant: "heading-xl/semibold",
                      children: A.intl.string(A.t.n7i7sv),
                  }),
                  (0, n.jsx)(_.Text, {
                      color: "text-default",
                      className: N.h_,
                      variant: "text-md/normal",
                      children: A.intl.format(A.t.fa8kW1, { helpURL: p.A.getArticleURL(f.MVz.AGE_GATE) }),
                  }),
                  (0, n.jsx)(_.wXn, {
                      theme: f.NJ8.LIGHT,
                      children: (0, n.jsx)(u.A, {
                          required: !0,
                          autoFocus: !0,
                          wrapperClassName: N.kz,
                          label: A.intl.string(A.t.rhBeKe),
                          name: "birthday",
                          onChange: g,
                          onPopulated: y,
                          error: b,
                          value: i,
                      }),
                  }),
                  (0, n.jsx)("div", {
                      className: N.qr,
                      children: (0, n.jsx)("div", {
                          className: N._o,
                          children: (0, n.jsx)(c.$n, {
                              "data-migration-pending": !0,
                              buttonRef: D,
                              type: "submit",
                              size: c.$n.Sizes.LARGE,
                              submitting: T,
                              disabled: null == i,
                              fullWidth: !0,
                              children: A.intl.string(A.t.PDTjLN),
                          }),
                      }),
                  }),
              ],
          });
}
