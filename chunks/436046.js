s.d(t, { Z: () => h }), s(47120), s(266796);
var n = s(200651),
    o = s(192379),
    a = s(512722),
    r = s.n(a),
    i = s(442837),
    l = s(692547),
    c = s(481060),
    d = s(771308),
    _ = s(13430),
    u = s(594174),
    p = s(63063),
    f = s(981631),
    m = s(723359),
    b = s(388032),
    N = s(965851);
function h(e) {
    let { onComplete: t, onClose: s } = e,
        [a, h] = o.useState(null),
        [x, E] = o.useState(null),
        [C, j] = o.useState(!1),
        T = (0, i.e7)([u.default], () => u.default.getCurrentUser()),
        I = o.createRef();
    async function g(e) {
        e.preventDefault(), r()(null != a, 'Cannot submit null birthday.'), j(!0);
        try {
            await d.Av(a, m.L0.NEW_USER_FLOW), t();
        } catch (e) {
            if (null != e.body && null != e.body.date_of_birth) d.wE(m.L0.NEW_USER_FLOW), d.hp(m.L0.NEW_USER_FLOW), s();
            else {
                var n;
                (null == e || null == (n = e.body) ? void 0 : n.username) != null ? E(b.NW.string(b.t['TGg/2t'])) : E(null == e ? void 0 : e.body.message);
            }
        }
        j(!1);
    }
    o.useEffect(() => {
        null != T && null != T.nsfwAllowed && t();
    }, [T, t]);
    let v = o.useCallback(
            (e) => {
                h(e);
            },
            [h]
        ),
        O = o.useCallback(() => {
            var e;
            null == (e = I.current) || e.focus();
        }, [I]);
    return null == T
        ? null
        : (0, n.jsxs)('form', {
              className: N.content,
              onSubmit: g,
              children: [
                  (0, n.jsx)(c.gw7, {
                      size: 'custom',
                      width: 56,
                      height: 40,
                      className: N.logo,
                      color: l.Z.unsafe_rawColors.BRAND_500.css
                  }),
                  (0, n.jsx)(c.X6q, {
                      className: N.title,
                      variant: 'heading-xl/semibold',
                      children: b.NW.string(b.t.n7i7sr)
                  }),
                  (0, n.jsx)(c.Text, {
                      color: 'text-normal',
                      className: N.description,
                      variant: 'text-md/normal',
                      children: b.NW.format(b.t.fa8kW1, { helpURL: p.Z.getArticleURL(f.BhN.AGE_GATE) })
                  }),
                  (0, n.jsx)(c.ze6, {
                      theme: f.BRd.LIGHT,
                      children: (0, n.jsx)(_.Z, {
                          required: !0,
                          autoFocus: !0,
                          wrapperClassName: N.formItem,
                          label: b.NW.string(b.t.rhBeKS),
                          name: 'birthday',
                          onChange: v,
                          onPopulated: O,
                          error: x,
                          value: a
                      })
                  }),
                  (0, n.jsx)('div', {
                      className: N.footer,
                      children: (0, n.jsx)('div', {
                          className: N.buttonWrapper,
                          children: (0, n.jsx)(c.zxk, {
                              buttonRef: I,
                              type: 'submit',
                              size: c.zxk.Sizes.LARGE,
                              submitting: C,
                              disabled: null == a,
                              fullWidth: !0,
                              children: b.NW.string(b.t.PDTjLC)
                          })
                      })
                  })
              ]
          });
}
