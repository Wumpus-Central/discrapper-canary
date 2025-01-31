s.d(t, { Z: () => x }), s(47120);
var n = s(200651),
    a = s(192379),
    o = s(512722),
    i = s.n(o),
    r = s(442837),
    l = s(692547),
    c = s(481060),
    d = s(771308),
    _ = s(13430),
    u = s(594174),
    m = s(63063),
    p = s(981631),
    f = s(723359),
    b = s(388032),
    h = s(580200);
function x(e) {
    let { onComplete: t, onClose: s } = e,
        [o, x] = a.useState(null),
        [N, E] = a.useState(null),
        [C, T] = a.useState(!1),
        I = (0, r.e7)([u.default], () => u.default.getCurrentUser()),
        j = a.createRef();
    async function v(e) {
        e.preventDefault(), i()(null != o, 'Cannot submit null birthday.'), T(!0);
        try {
            await d.Av(o, f.L0.NEW_USER_FLOW), t();
        } catch (e) {
            if (null != e.body && null != e.body.date_of_birth) d.wE(f.L0.NEW_USER_FLOW), d.hp(f.L0.NEW_USER_FLOW), s();
            else {
                var n;
                (null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.username) != null ? E(b.intl.string(b.t['TGg/2t'])) : E(null == e ? void 0 : e.body.message);
            }
        }
        T(!1);
    }
    a.useEffect(() => {
        null != I && null != I.nsfwAllowed && t();
    }, [I, t]);
    let A = a.useCallback(
            (e) => {
                x(e);
            },
            [x]
        ),
        g = a.useCallback(() => {
            var e;
            null === (e = j.current) || void 0 === e || e.focus();
        }, [j]);
    return null == I
        ? null
        : (0, n.jsxs)('form', {
              className: h.content,
              onSubmit: v,
              children: [
                  (0, n.jsx)(c.gw7, {
                      size: 'custom',
                      width: 56,
                      height: 40,
                      className: h.logo,
                      color: l.Z.unsafe_rawColors.BRAND_500.css
                  }),
                  (0, n.jsx)(c.X6q, {
                      className: h.title,
                      variant: 'heading-xl/semibold',
                      children: b.intl.string(b.t.n7i7sr)
                  }),
                  (0, n.jsx)(c.Text, {
                      color: 'text-normal',
                      className: h.description,
                      variant: 'text-md/normal',
                      children: b.intl.format(b.t.fa8kW1, { helpURL: m.Z.getArticleURL(p.BhN.AGE_GATE) })
                  }),
                  (0, n.jsx)(c.ze6, {
                      theme: p.BRd.LIGHT,
                      children: (0, n.jsx)(_.Z, {
                          required: !0,
                          autoFocus: !0,
                          wrapperClassName: h.formItem,
                          label: b.intl.string(b.t.rhBeKS),
                          name: 'birthday',
                          onChange: A,
                          onPopulated: g,
                          error: N,
                          value: o
                      })
                  }),
                  (0, n.jsx)('div', {
                      className: h.footer,
                      children: (0, n.jsx)('div', {
                          className: h.buttonWrapper,
                          children: (0, n.jsx)(c.zxk, {
                              buttonRef: j,
                              type: 'submit',
                              size: c.zxk.Sizes.LARGE,
                              submitting: C,
                              disabled: null == o,
                              fullWidth: !0,
                              children: b.intl.string(b.t.PDTjLC)
                          })
                      })
                  })
              ]
          });
}
