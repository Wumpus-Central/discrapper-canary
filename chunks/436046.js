s.d(t, {
    Z: function () {
        return x;
    }
}),
    s(47120);
var n = s(200651),
    o = s(192379),
    a = s(512722),
    i = s.n(a),
    r = s(442837),
    l = s(692547),
    c = s(481060),
    d = s(771308),
    u = s(13430),
    f = s(594174),
    _ = s(63063),
    p = s(981631),
    m = s(723359),
    h = s(388032),
    N = s(580200);
function x(e) {
    let { onComplete: t, onClose: s } = e,
        [a, x] = o.useState(null),
        [C, E] = o.useState(null),
        [T, b] = o.useState(!1),
        I = (0, r.e7)([f.default], () => f.default.getCurrentUser()),
        j = o.createRef();
    async function v(e) {
        e.preventDefault(), i()(null != a, 'Cannot submit null birthday.'), b(!0);
        try {
            await d.Av(a, m.L0.NEW_USER_FLOW), t();
        } catch (e) {
            if (null != e.body && null != e.body.date_of_birth) d.wE(m.L0.NEW_USER_FLOW), d.hp(m.L0.NEW_USER_FLOW), s();
            else {
                var n;
                (null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.username) != null ? E(h.intl.string(h.t['TGg/2t'])) : E(null == e ? void 0 : e.body.message);
            }
        }
        b(!1);
    }
    o.useEffect(() => {
        null != I && null != I.nsfwAllowed && t();
    }, [I, t]);
    let A = o.useCallback(
            (e) => {
                x(e);
            },
            [x]
        ),
        F = o.useCallback(() => {
            var e;
            null === (e = j.current) || void 0 === e || e.focus();
        }, [j]);
    return null == I
        ? null
        : (0, n.jsxs)('form', {
              className: N.content,
              onSubmit: v,
              children: [
                  (0, n.jsx)(c.ClydeIcon, {
                      size: 'custom',
                      width: 56,
                      height: 40,
                      className: N.logo,
                      color: l.Z.unsafe_rawColors.BRAND_500.css
                  }),
                  (0, n.jsx)(c.Heading, {
                      className: N.title,
                      variant: 'heading-xl/semibold',
                      children: h.intl.string(h.t.n7i7sr)
                  }),
                  (0, n.jsx)(c.Text, {
                      color: 'text-normal',
                      className: N.description,
                      variant: 'text-md/normal',
                      children: h.intl.format(h.t.fa8kW1, { helpURL: _.Z.getArticleURL(p.BhN.AGE_GATE) })
                  }),
                  (0, n.jsx)(c.ThemeContextProvider, {
                      theme: p.BRd.LIGHT,
                      children: (0, n.jsx)(u.Z, {
                          required: !0,
                          autoFocus: !0,
                          wrapperClassName: N.formItem,
                          label: h.intl.string(h.t.rhBeKS),
                          name: 'birthday',
                          onChange: A,
                          onPopulated: F,
                          error: C,
                          value: a
                      })
                  }),
                  (0, n.jsx)('div', {
                      className: N.footer,
                      children: (0, n.jsx)('div', {
                          className: N.buttonWrapper,
                          children: (0, n.jsx)(c.Button, {
                              buttonRef: j,
                              type: 'submit',
                              size: c.Button.Sizes.LARGE,
                              submitting: T,
                              disabled: null == a,
                              fullWidth: !0,
                              children: h.intl.string(h.t.PDTjLC)
                          })
                      })
                  })
              ]
          });
}
