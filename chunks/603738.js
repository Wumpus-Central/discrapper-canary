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
    N = a(985018),
    A = a(216344);
function h(e) {
    let { onComplete: t, onClose: a } = e,
        [i, h] = s.useState(null),
        [b, x] = s.useState(null),
        [T, C] = s.useState(!1),
        I = (0, r.bG)([m.default], () => m.default.getCurrentUser()),
        j = s.useRef(null);
    async function D(e) {
        e.preventDefault(), l()(null != i, "Cannot submit null birthday."), C(!0);
        try {
            await d.n7(i, E.w_.NEW_USER_FLOW), t();
        } catch (e) {
            null != e.body && null != e.body.date_of_birth
                ? (d.Xv(E.w_.NEW_USER_FLOW), d.$2(E.w_.NEW_USER_FLOW), a())
                : e?.body?.username != null
                  ? x(N.intl.string(N.t["TGg/2k"]))
                  : x(e?.body.message);
        }
        C(!1);
    }
    s.useEffect(() => {
        null != I && null != I.nsfwAllowed && t();
    }, [I, t]);
    let g = s.useCallback(
            (e) => {
                h(e);
            },
            [h],
        ),
        y = s.useCallback(() => {
            j.current?.focus();
        }, [j]);
    return null == I
        ? null
        : (0, n.jsxs)("form", {
              className: A.Qs,
              onSubmit: D,
              children: [
                  (0, n.jsx)(_.pVd, {
                      size: "custom",
                      width: 56,
                      height: 40,
                      className: A.wm,
                      color: o.A.unsafe_rawColors.BRAND_500.css,
                  }),
                  (0, n.jsx)(_.Heading, {
                      className: A.DD,
                      variant: "heading-xl/semibold",
                      children: N.intl.string(N.t.n7i7sv),
                  }),
                  (0, n.jsx)(_.Text, {
                      color: "text-default",
                      className: A.h_,
                      variant: "text-md/normal",
                      children: N.intl.format(N.t.fa8kW1, { helpURL: p.A.getArticleURL(f.MVz.AGE_GATE) }),
                  }),
                  (0, n.jsx)(_.wXn, {
                      theme: f.NJ8.LIGHT,
                      children: (0, n.jsx)(u.A, {
                          required: !0,
                          autoFocus: !0,
                          wrapperClassName: A.kz,
                          label: N.intl.string(N.t.rhBeKe),
                          name: "birthday",
                          onChange: g,
                          onPopulated: y,
                          error: b,
                          value: i,
                      }),
                  }),
                  (0, n.jsx)("div", {
                      className: A.qr,
                      children: (0, n.jsx)("div", {
                          className: A._o,
                          children: (0, n.jsx)(c.$n, {
                              "data-migration-pending": !0,
                              buttonRef: j,
                              type: "submit",
                              size: c.$n.Sizes.LARGE,
                              submitting: T,
                              disabled: null == i,
                              fullWidth: !0,
                              children: N.intl.string(N.t.PDTjLN),
                          }),
                      }),
                  }),
              ],
          });
}
