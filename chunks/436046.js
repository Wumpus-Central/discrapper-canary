n.d(t, { Z: () => N }), n(388685), n(953529);
var a = n(54381),
    o = n(473749),
    s = n(512722),
    l = n.n(s),
    i = n(442837),
    r = n(692547),
    c = n(755721),
    u = n(481060),
    d = n(771308),
    _ = n(13430),
    p = n(594174),
    f = n(63063),
    m = n(981631),
    h = n(723359),
    b = n(388032),
    E = n(181576);
function N(e) {
    let { onComplete: t, onClose: n } = e,
        [s, N] = o.useState(null),
        [x, A] = o.useState(null),
        [T, C] = o.useState(!1),
        j = (0, i.e7)([p.default], () => p.default.getCurrentUser()),
        y = o.useRef(null);
    async function O(e) {
        e.preventDefault(), l()(null != s, "Cannot submit null birthday."), C(!0);
        try {
            await d.Av(s, h.L0.NEW_USER_FLOW), t();
        } catch (e) {
            if (null != e.body && null != e.body.date_of_birth) d.wE(h.L0.NEW_USER_FLOW), d.hp(h.L0.NEW_USER_FLOW), n();
            else {
                var a;
                (null == e || null == (a = e.body) ? void 0 : a.username) != null
                    ? A(b.intl.string(b.t["TGg/2k"]))
                    : A(null == e ? void 0 : e.body.message);
            }
        }
        C(!1);
    }
    o.useEffect(() => {
        null != j && null != j.nsfwAllowed && t();
    }, [j, t]);
    let v = o.useCallback(
            (e) => {
                N(e);
            },
            [N],
        ),
        I = o.useCallback(() => {
            var e;
            null == (e = y.current) || e.focus();
        }, [y]);
    return null == j
        ? null
        : (0, a.jsxs)("form", {
              className: E.content,
              onSubmit: O,
              children: [
                  (0, a.jsx)(u.gw7, {
                      size: "custom",
                      width: 56,
                      height: 40,
                      className: E.logo,
                      color: r.Z.unsafe_rawColors.BRAND_500.css,
                  }),
                  (0, a.jsx)(u.Heading, {
                      className: E.title,
                      variant: "heading-xl/semibold",
                      children: b.intl.string(b.t.n7i7sv),
                  }),
                  (0, a.jsx)(u.Text, {
                      color: "text-default",
                      className: E.description,
                      variant: "text-md/normal",
                      children: b.intl.format(b.t.fa8kW1, { helpURL: f.Z.getArticleURL(m.BhN.AGE_GATE) }),
                  }),
                  (0, a.jsx)(u.ze6, {
                      theme: m.BRd.LIGHT,
                      children: (0, a.jsx)(_.Z, {
                          required: !0,
                          autoFocus: !0,
                          wrapperClassName: E.formItem,
                          label: b.intl.string(b.t.rhBeKe),
                          name: "birthday",
                          onChange: v,
                          onPopulated: I,
                          error: x,
                          value: s,
                      }),
                  }),
                  (0, a.jsx)("div", {
                      className: E.footer,
                      children: (0, a.jsx)("div", {
                          className: E.buttonWrapper,
                          children: (0, a.jsx)(c.zx, {
                              buttonRef: y,
                              type: "submit",
                              size: c.zx.Sizes.LARGE,
                              submitting: T,
                              disabled: null == s,
                              fullWidth: !0,
                              children: b.intl.string(b.t.PDTjLN),
                          }),
                      }),
                  }),
              ],
          });
}
