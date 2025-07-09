(n.d(t, { Z: () => N }), n(388685), n(953529));
var s = n(255367),
    a = n(73800),
    o = n(512722),
    r = n.n(o),
    i = n(442837),
    l = n(692547),
    c = n(755721),
    d = n(481060),
    u = n(771308),
    _ = n(13430),
    p = n(594174),
    f = n(63063),
    m = n(981631),
    b = n(723359),
    h = n(388032),
    x = n(965851);
function N(e) {
    let { onComplete: t, onClose: n } = e,
        [o, N] = a.useState(null),
        [C, E] = a.useState(null),
        [j, T] = a.useState(!1),
        v = (0, i.e7)([p.default], () => p.default.getCurrentUser()),
        I = a.useRef(null);
    async function g(e) {
        (e.preventDefault(), r()(null != o, 'Cannot submit null birthday.'), T(!0));
        try {
            (await u.Av(o, b.L0.NEW_USER_FLOW), t());
        } catch (e) {
            if (null != e.body && null != e.body.date_of_birth) (u.wE(b.L0.NEW_USER_FLOW), u.hp(b.L0.NEW_USER_FLOW), n());
            else {
                var s;
                (null == e || null == (s = e.body) ? void 0 : s.username) != null ? E(h.intl.string(h.t['TGg/2t'])) : E(null == e ? void 0 : e.body.message);
            }
        }
        T(!1);
    }
    a.useEffect(() => {
        null != v && null != v.nsfwAllowed && t();
    }, [v, t]);
    let O = a.useCallback(
            (e) => {
                N(e);
            },
            [N]
        ),
        A = a.useCallback(() => {
            var e;
            null == (e = I.current) || e.focus();
        }, [I]);
    return null == v
        ? null
        : (0, s.jsxs)('form', {
              className: x.content,
              onSubmit: g,
              children: [
                  (0, s.jsx)(d.gw7, {
                      size: 'custom',
                      width: 56,
                      height: 40,
                      className: x.logo,
                      color: l.Z.unsafe_rawColors.BRAND_500.css
                  }),
                  (0, s.jsx)(d.X6q, {
                      className: x.title,
                      variant: 'heading-xl/semibold',
                      children: h.intl.string(h.t.n7i7sr)
                  }),
                  (0, s.jsx)(d.Text, {
                      color: 'text-default',
                      className: x.description,
                      variant: 'text-md/normal',
                      children: h.intl.format(h.t.fa8kW1, { helpURL: f.Z.getArticleURL(m.BhN.AGE_GATE) })
                  }),
                  (0, s.jsx)(d.ze6, {
                      theme: m.BRd.LIGHT,
                      children: (0, s.jsx)(_.Z, {
                          required: !0,
                          autoFocus: !0,
                          wrapperClassName: x.formItem,
                          label: h.intl.string(h.t.rhBeKS),
                          name: 'birthday',
                          onChange: O,
                          onPopulated: A,
                          error: C,
                          value: o
                      })
                  }),
                  (0, s.jsx)('div', {
                      className: x.footer,
                      children: (0, s.jsx)('div', {
                          className: x.buttonWrapper,
                          children: (0, s.jsx)(c.zx, {
                              buttonRef: I,
                              type: 'submit',
                              size: c.zx.Sizes.LARGE,
                              submitting: j,
                              disabled: null == o,
                              fullWidth: !0,
                              children: h.intl.string(h.t.PDTjLC)
                          })
                      })
                  })
              ]
          });
}
