n.d(t, { Z: () => N }), n(388685), n(953529);
var a = n(54381),
    o = n(473749),
    i = n(512722),
    s = n.n(i),
    r = n(442837),
    l = n(692547),
    c = n(755721),
    d = n(481060),
    u = n(771308),
    f = n(13430),
    p = n(594174),
    b = n(63063),
    m = n(981631),
    _ = n(723359),
    h = n(388032),
    E = n(520698);
function N(e) {
    let { onComplete: t, onClose: n } = e,
        [i, N] = o.useState(null),
        [x, A] = o.useState(null),
        [T, C] = o.useState(!1),
        g = (0, r.e7)([p.default], () => p.default.getCurrentUser()),
        j = o.useRef(null);
    async function O(e) {
        e.preventDefault(), s()(null != i, "Cannot submit null birthday."), C(!0);
        try {
            await u.Av(i, _.L0.NEW_USER_FLOW), t();
        } catch (e) {
            if (null != e.body && null != e.body.date_of_birth) u.wE(_.L0.NEW_USER_FLOW), u.hp(_.L0.NEW_USER_FLOW), n();
            else {
                var a;
                (null == e || null == (a = e.body) ? void 0 : a.username) != null
                    ? A(h.intl.string(h.t["TGg/2k"]))
                    : A(null == e ? void 0 : e.body.message);
            }
        }
        C(!1);
    }
    o.useEffect(() => {
        null != g && null != g.nsfwAllowed && t();
    }, [g, t]);
    let y = o.useCallback(
            (e) => {
                N(e);
            },
            [N],
        ),
        v = o.useCallback(() => {
            var e;
            null == (e = j.current) || e.focus();
        }, [j]);
    return null == g
        ? null
        : (0, a.jsxs)("form", {
              className: E.content,
              onSubmit: O,
              children: [
                  (0, a.jsx)(d.gw7, {
                      size: "custom",
                      width: 56,
                      height: 40,
                      className: E.logo,
                      color: l.Z.unsafe_rawColors.BRAND_500.css,
                  }),
                  (0, a.jsx)(d.Heading, {
                      className: E.title,
                      variant: "heading-xl/semibold",
                      children: h.intl.string(h.t.n7i7sv),
                  }),
                  (0, a.jsx)(d.Text, {
                      color: "text-default",
                      className: E.description,
                      variant: "text-md/normal",
                      children: h.intl.format(h.t.fa8kW1, { helpURL: b.Z.getArticleURL(m.BhN.AGE_GATE) }),
                  }),
                  (0, a.jsx)(d.ze6, {
                      theme: m.BRd.LIGHT,
                      children: (0, a.jsx)(f.Z, {
                          required: !0,
                          autoFocus: !0,
                          wrapperClassName: E.formItem,
                          label: h.intl.string(h.t.rhBeKe),
                          name: "birthday",
                          onChange: y,
                          onPopulated: v,
                          error: x,
                          value: i,
                      }),
                  }),
                  (0, a.jsx)("div", {
                      className: E.footer,
                      children: (0, a.jsx)("div", {
                          className: E.buttonWrapper,
                          children: (0, a.jsx)(c.zx, {
                              "data-migration-pending": !0,
                              buttonRef: j,
                              type: "submit",
                              size: c.zx.Sizes.LARGE,
                              submitting: T,
                              disabled: null == i,
                              fullWidth: !0,
                              children: h.intl.string(h.t.PDTjLN),
                          }),
                      }),
                  }),
              ],
          });
}
