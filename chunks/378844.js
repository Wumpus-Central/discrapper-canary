n.d(t, {
    R: () => O,
    Z: () => y
});
var r,
    i = n(255367);
n(73800);
var l = n(442837),
    o = n(755721),
    a = n(481060),
    s = n(893776),
    c = n(391650),
    u = n(313201),
    d = n(144114),
    h = n(607744),
    p = n(594174),
    f = n(981631),
    g = n(815660),
    m = n(388032),
    b = n(879653);
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
var O = (((r = {})[(r.VOICE = 0)] = 'VOICE'), r);
let y = (e) => {
    let { type: t, guildId: r, closePopout: O } = e,
        y = (0, u.Dt)(),
        { notClaimed: v, notEmailVerified: C, notPhoneVerified: j, newAccount: E, newMember: x } = (0, l.e7)([h.Z], () => h.Z.getCheck(r), [r]),
        S = 0 === t ? m.intl.string(m.t['6zY8BA']) : null,
        I = null,
        P = null;
    return (0 === t && (v ? ((I = m.intl.string(m.t.IRxUlJ)), (P = m.intl.string(m.t.fiNVio))) : j ? ((I = m.intl.string(m.t.vW8iUF)), (P = m.intl.string(m.t['50gfOj']))) : C ? ((I = m.intl.string(m.t.vdSOp6)), (P = m.intl.string(m.t.lm1UKi))) : x ? ((I = m.intl.formatToPlainString(m.t.v1ktYW, { min: f.YeM.MEMBER_AGE })), (P = m.intl.string(m.t.BddRzc))) : E && ((I = m.intl.formatToPlainString(m.t['sncw4+'], { min: f.YeM.ACCOUNT_AGE })), (P = m.intl.string(m.t.BddRzc)))), null == S || null == I)
        ? null
        : (0, i.jsxs)(a.VqE, {
              className: b.container,
              'aria-labelledby': y,
              children: [
                  (0, i.jsx)('img', {
                      alt: '',
                      className: b.image,
                      src: n(64395)
                  }),
                  (0, i.jsxs)('div', {
                      className: b.content,
                      children: [
                          (0, i.jsx)(a.X6q, {
                              variant: 'heading-md/semibold',
                              id: y,
                              children: S
                          }),
                          (0, i.jsx)(a.Text, {
                              color: 'header-secondary',
                              variant: 'text-sm/normal',
                              children: I
                          }),
                          (0, i.jsxs)('div', {
                              className: b.buttonContainer,
                              children: [
                                  null != P
                                      ? (0, i.jsx)('div', {
                                            'data-button-hoisted-classname-wrapper': !0,
                                            className: b.primaryButton,
                                            children: (0, i.jsx)(a.zxk, {
                                                variant: 'primary',
                                                text: P,
                                                onClick: () => {
                                                    (v
                                                        ? c.j()
                                                        : j
                                                          ? (0, a.ZDy)(
                                                                async () => {
                                                                    let { default: e } = await Promise.resolve().then(n.bind(n, 607018));
                                                                    return (t) => (0, i.jsx)(e, _({ reason: d.L.GUILD_PHONE_REQUIRED }, t));
                                                                },
                                                                { modalKey: g.M }
                                                            )
                                                          : C &&
                                                            (s.Z.verifyResend(),
                                                            (0, a.h7j)((e) => {
                                                                var t, n, r;
                                                                return (0, i.jsx)(
                                                                    a.ConfirmModal,
                                                                    ((n = _(
                                                                        {
                                                                            header: m.intl.string(m.t.LykQYm),
                                                                            confirmText: m.intl.string(m.t.BddRzc),
                                                                            confirmButtonColor: o.zx.Colors.BRAND
                                                                        },
                                                                        e
                                                                    )),
                                                                    (r = r =
                                                                        {
                                                                            children: (0, i.jsx)(a.Text, {
                                                                                variant: 'text-md/normal',
                                                                                children: m.intl.format(m.t.azKEPz, { email: null == (t = p.default.getCurrentUser()) ? void 0 : t.email })
                                                                            })
                                                                        }),
                                                                    Object.getOwnPropertyDescriptors
                                                                        ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                                                                        : (function (e, t) {
                                                                              var n = Object.keys(e);
                                                                              if (Object.getOwnPropertySymbols) {
                                                                                  var r = Object.getOwnPropertySymbols(e);
                                                                                  n.push.apply(n, r);
                                                                              }
                                                                              return n;
                                                                          })(Object(r)).forEach(function (e) {
                                                                              Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
                                                                          }),
                                                                    n)
                                                                );
                                                            })),
                                                        O());
                                                }
                                            })
                                        })
                                      : null,
                                  v || j || C
                                      ? (0, i.jsx)(o.zx, {
                                            onClick: O,
                                            look: o.zx.Looks.BLANK,
                                            className: b.cancel,
                                            children: m.intl.string(m.t.oEAioK)
                                        })
                                      : null
                              ]
                          })
                      ]
                  })
              ]
          });
};
