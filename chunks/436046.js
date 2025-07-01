(n.d(t, { Z: () => x }), n(388685), n(953529));
var s = n(255367),
    a = n(73800),
    o = n(512722),
    r = n.n(o),
    i = n(442837),
    l = n(692547),
    c = n(481060),
    d = n(771308),
    u = n(13430),
    _ = n(594174),
    p = n(63063),
    f = n(981631),
    m = n(723359),
    b = n(388032),
    h = n(965851);
function x(e) {
    let { onComplete: t, onClose: n } = e,
        [o, x] = a.useState(null),
        [N, C] = a.useState(null),
        [E, j] = a.useState(!1),
        T = (0, i.e7)([_.default], () => _.default.getCurrentUser()),
        I = a.useRef(null);
    async function g(e) {
        (e.preventDefault(), r()(null != o, 'Cannot submit null birthday.'), j(!0));
        try {
            (await d.Av(o, m.L0.NEW_USER_FLOW), t());
        } catch (e) {
            if (null != e.body && null != e.body.date_of_birth) (d.wE(m.L0.NEW_USER_FLOW), d.hp(m.L0.NEW_USER_FLOW), n());
            else {
                var s;
                (null == e || null == (s = e.body) ? void 0 : s.username) != null ? C(b.intl.string(b.t['TGg/2t'])) : C(null == e ? void 0 : e.body.message);
            }
        }
        j(!1);
    }
    a.useEffect(() => {
        null != T && null != T.nsfwAllowed && t();
    }, [T, t]);
    let v = a.useCallback(
            (e) => {
                x(e);
            },
            [x]
        ),
        O = a.useCallback(() => {
            var e;
            null == (e = I.current) || e.focus();
        }, [I]);
    return null == T
        ? null
        : (0, s.jsxs)('form', {
              className: h.content,
              onSubmit: g,
              children: [
                  (0, s.jsx)(c.gw7, {
                      size: 'custom',
                      width: 56,
                      height: 40,
                      className: h.logo,
                      color: l.Z.unsafe_rawColors.BRAND_500.css
                  }),
                  (0, s.jsx)(c.X6q, {
                      className: h.title,
                      variant: 'heading-xl/semibold',
                      children: b.intl.string(b.t.n7i7sr)
                  }),
                  (0, s.jsx)(c.Text, {
                      color: 'text-default',
                      className: h.description,
                      variant: 'text-md/normal',
                      children: b.intl.format(b.t.fa8kW1, { helpURL: p.Z.getArticleURL(f.BhN.AGE_GATE) })
                  }),
                  (0, s.jsx)(c.ze6, {
                      theme: f.BRd.LIGHT,
                      children: (0, s.jsx)(u.Z, {
                          required: !0,
                          autoFocus: !0,
                          wrapperClassName: h.formItem,
                          label: b.intl.string(b.t.rhBeKS),
                          name: 'birthday',
                          onChange: v,
                          onPopulated: O,
                          error: N,
                          value: o
                      })
                  }),
                  (0, s.jsx)('div', {
                      className: h.footer,
                      children: (0, s.jsx)('div', {
                          className: h.buttonWrapper,
                          children: (0, s.jsx)(c.zxk, {
                              buttonRef: I,
                              type: 'submit',
                              size: c.zxk.Sizes.LARGE,
                              submitting: E,
                              disabled: null == o,
                              fullWidth: !0,
                              children: b.intl.string(b.t.PDTjLC)
                          })
                      })
                  })
              ]
          });
}
