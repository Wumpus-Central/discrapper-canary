n.d(t, { Z: () => x }), n(388685), n(953529);
var r = n(255367),
    o = n(73800),
    a = n(512722),
    i = n.n(a),
    s = n(442837),
    l = n(692547),
    c = n(755721),
    u = n(481060),
    d = n(771308),
    f = n(13430),
    _ = n(594174),
    p = n(63063),
    m = n(981631),
    b = n(723359),
    h = n(388032),
    N = n(181576);
function x(e) {
    let { onComplete: t, onClose: n } = e,
        [a, x] = o.useState(null),
        [y, j] = o.useState(null),
        [E, v] = o.useState(!1),
        C = (0, s.e7)([_.default], () => _.default.getCurrentUser()),
        T = o.useRef(null);
    async function O(e) {
        e.preventDefault(), i()(null != a, "Cannot submit null birthday."), v(!0);
        try {
            await d.Av(a, b.L0.NEW_USER_FLOW), t();
        } catch (e) {
            if (null != e.body && null != e.body.date_of_birth) d.wE(b.L0.NEW_USER_FLOW), d.hp(b.L0.NEW_USER_FLOW), n();
            else {
                var r;
                (null == e || null == (r = e.body) ? void 0 : r.username) != null
                    ? j(h.intl.string(h.t["TGg/2t"]))
                    : j(null == e ? void 0 : e.body.message);
            }
        }
        v(!1);
    }
    o.useEffect(() => {
        null != C && null != C.nsfwAllowed && t();
    }, [C, t]);
    let I = o.useCallback(
            (e) => {
                x(e);
            },
            [x],
        ),
        g = o.useCallback(() => {
            var e;
            null == (e = T.current) || e.focus();
        }, [T]);
    return null == C
        ? null
        : (0, r.jsxs)("form", {
              className: N.content,
              onSubmit: O,
              children: [
                  (0, r.jsx)(u.gw7, {
                      size: "custom",
                      width: 56,
                      height: 40,
                      className: N.logo,
                      color: l.Z.unsafe_rawColors.BRAND_500.css,
                  }),
                  (0, r.jsx)(u.X6q, {
                      className: N.title,
                      variant: "heading-xl/semibold",
                      children: h.intl.string(h.t.n7i7sr),
                  }),
                  (0, r.jsx)(u.Text, {
                      color: "text-default",
                      className: N.description,
                      variant: "text-md/normal",
                      children: h.intl.format(h.t.fa8kW1, { helpURL: p.Z.getArticleURL(m.BhN.AGE_GATE) }),
                  }),
                  (0, r.jsx)(u.ze6, {
                      theme: m.BRd.LIGHT,
                      children: (0, r.jsx)(f.Z, {
                          required: !0,
                          autoFocus: !0,
                          wrapperClassName: N.formItem,
                          label: h.intl.string(h.t.rhBeKS),
                          name: "birthday",
                          onChange: I,
                          onPopulated: g,
                          error: y,
                          value: a,
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: N.footer,
                      children: (0, r.jsx)("div", {
                          className: N.buttonWrapper,
                          children: (0, r.jsx)(c.zx, {
                              buttonRef: T,
                              type: "submit",
                              size: c.zx.Sizes.LARGE,
                              submitting: E,
                              disabled: null == a,
                              fullWidth: !0,
                              children: h.intl.string(h.t.PDTjLC),
                          }),
                      }),
                  }),
              ],
          });
}
