a.d(t, {
    A: () => h,
}),
    a(896048),
    a(228524);
var n = a(627968),
    l = a(64700),
    i = a(284009),
    s = a.n(i),
    r = a(311907),
    c = a(827734),
    o = a(421380),
    d = a(397927),
    u = a(955437),
    f = a(201505),
    b = a(287809),
    _ = a(975571),
    m = a(652215),
    p = a(204925),
    E = a(985018),
    N = a(216344);

function h(e) {
    let { onComplete: t, onClose: a } = e,
        [i, h] = l.useState(null),
        [x, A] = l.useState(null),
        [T, y] = l.useState(!1),
        j = (0, r.bG)([b.default], () => b.default.getCurrentUser()),
        O = l.useRef(null);
    async function g(e) {
        e.preventDefault(), s()(null != i, "Cannot submit null birthday."), y(!0);
        try {
            await u.n7(i, p.w_.NEW_USER_FLOW), t();
        } catch (e) {
            if (null != e.body && null != e.body.date_of_birth) u.Xv(p.w_.NEW_USER_FLOW), u.$2(p.w_.NEW_USER_FLOW), a();
            else {
                var n;
                (null == e || null == (n = e.body) ? void 0 : n.username) != null
                    ? A(E.intl.string(E.t["TGg/2k"]))
                    : A(null == e ? void 0 : e.body.message);
            }
        }
        y(!1);
    }
    l.useEffect(() => {
        null != j && null != j.nsfwAllowed && t();
    }, [j, t]);
    let v = l.useCallback(
            (e) => {
                h(e);
            },
            [h],
        ),
        D = l.useCallback(() => {
            var e;
            null == (e = O.current) || e.focus();
        }, [O]);
    return null == j
        ? null
        : (0, n.jsxs)("form", {
              className: N.Qs,
              onSubmit: g,
              children: [
                  (0, n.jsx)(d.pVd, {
                      size: "custom",
                      width: 56,
                      height: 40,
                      className: N.wm,
                      color: c.A.unsafe_rawColors.BRAND_500.css,
                  }),
                  (0, n.jsx)(d.Heading, {
                      className: N.DD,
                      variant: "heading-xl/semibold",
                      children: E.intl.string(E.t.n7i7sv),
                  }),
                  (0, n.jsx)(d.Text, {
                      color: "text-default",
                      className: N.h_,
                      variant: "text-md/normal",
                      children: E.intl.format(E.t.fa8kW1, {
                          helpURL: _.A.getArticleURL(m.MVz.AGE_GATE),
                      }),
                  }),
                  (0, n.jsx)(d.wXn, {
                      theme: m.NJ8.LIGHT,
                      children: (0, n.jsx)(f.A, {
                          required: !0,
                          autoFocus: !0,
                          wrapperClassName: N.kz,
                          label: E.intl.string(E.t.rhBeKe),
                          name: "birthday",
                          onChange: v,
                          onPopulated: D,
                          error: x,
                          value: i,
                      }),
                  }),
                  (0, n.jsx)("div", {
                      className: N.qr,
                      children: (0, n.jsx)("div", {
                          className: N._o,
                          children: (0, n.jsx)(o.$n, {
                              "data-migration-pending": !0,
                              buttonRef: O,
                              type: "submit",
                              size: o.$n.Sizes.LARGE,
                              submitting: T,
                              disabled: null == i,
                              fullWidth: !0,
                              children: E.intl.string(E.t.PDTjLN),
                          }),
                      }),
                  }),
              ],
          });
}
