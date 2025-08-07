n.d(t, { Z: () => N }), n(388685), n(953529);
var r = n(255367),
    o = n(73800),
    a = n(512722),
    s = n.n(a),
    i = n(442837),
    l = n(692547),
    c = n(755721),
    u = n(481060),
    d = n(771308),
    f = n(13430),
    _ = n(594174),
    p = n(63063),
    b = n(981631),
    m = n(723359),
    h = n(388032),
    x = n(965851);
function N(e) {
    let { onComplete: t, onClose: n } = e,
        [a, N] = o.useState(null),
        [y, v] = o.useState(null),
        [j, E] = o.useState(!1),
        C = (0, i.e7)([_.default], () => _.default.getCurrentUser()),
        T = o.useRef(null);
    async function g(e) {
        e.preventDefault(), s()(null != a, "Cannot submit null birthday."), E(!0);
        try {
            await d.Av(a, m.L0.NEW_USER_FLOW), t();
        } catch (e) {
            if (null != e.body && null != e.body.date_of_birth) d.wE(m.L0.NEW_USER_FLOW), d.hp(m.L0.NEW_USER_FLOW), n();
            else {
                var r;
                (null == e || null == (r = e.body) ? void 0 : r.username) != null
                    ? v(h.intl.string(h.t["TGg/2t"]))
                    : v(null == e ? void 0 : e.body.message);
            }
        }
        E(!1);
    }
    o.useEffect(() => {
        null != C && null != C.nsfwAllowed && t();
    }, [C, t]);
    let O = o.useCallback(
            (e) => {
                N(e);
            },
            [N],
        ),
        I = o.useCallback(() => {
            var e;
            null == (e = T.current) || e.focus();
        }, [T]);
    return null == C
        ? null
        : (0, r.jsxs)("form", {
              className: x.content,
              onSubmit: g,
              children: [
                  (0, r.jsx)(u.gw7, {
                      size: "custom",
                      width: 56,
                      height: 40,
                      className: x.logo,
                      color: l.Z.unsafe_rawColors.BRAND_500.css,
                  }),
                  (0, r.jsx)(u.X6q, {
                      className: x.title,
                      variant: "heading-xl/semibold",
                      children: h.intl.string(h.t.n7i7sr),
                  }),
                  (0, r.jsx)(u.Text, {
                      color: "text-default",
                      className: x.description,
                      variant: "text-md/normal",
                      children: h.intl.format(h.t.fa8kW1, { helpURL: p.Z.getArticleURL(b.BhN.AGE_GATE) }),
                  }),
                  (0, r.jsx)(u.ze6, {
                      theme: b.BRd.LIGHT,
                      children: (0, r.jsx)(f.Z, {
                          required: !0,
                          autoFocus: !0,
                          wrapperClassName: x.formItem,
                          label: h.intl.string(h.t.rhBeKS),
                          name: "birthday",
                          onChange: O,
                          onPopulated: I,
                          error: y,
                          value: a,
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: x.footer,
                      children: (0, r.jsx)("div", {
                          className: x.buttonWrapper,
                          children: (0, r.jsx)(c.zx, {
                              buttonRef: T,
                              type: "submit",
                              size: c.zx.Sizes.LARGE,
                              submitting: j,
                              disabled: null == a,
                              fullWidth: !0,
                              children: h.intl.string(h.t.PDTjLC),
                          }),
                      }),
                  }),
              ],
          });
}
