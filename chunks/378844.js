n.d(t, {
    R: () => y,
    Z: () => _
});
var r,
    i = n(200651);
n(192379);
var l = n(442837),
    o = n(481060),
    s = n(893776),
    a = n(391650),
    c = n(313201),
    u = n(144114),
    d = n(607744),
    h = n(594174),
    p = n(981631),
    f = n(815660),
    g = n(388032),
    m = n(2548);
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
var y = (((r = {})[(r.VOICE = 0)] = 'VOICE'), r);
let _ = (e) => {
    let { type: t, guildId: r, closePopout: y } = e,
        _ = (0, c.Dt)(),
        { notClaimed: v, notEmailVerified: O, notPhoneVerified: C, newAccount: S, newMember: j } = (0, l.e7)([d.Z], () => d.Z.getCheck(r), [r]),
        E = 0 === t ? g.NW.string(g.t['6zY8BA']) : null,
        x = null,
        I = null;
    return (0 === t && (v ? ((x = g.NW.string(g.t.IRxUlJ)), (I = g.NW.string(g.t.fiNVio))) : C ? ((x = g.NW.string(g.t.vW8iUF)), (I = g.NW.string(g.t['50gfOj']))) : O ? ((x = g.NW.string(g.t.vdSOp6)), (I = g.NW.string(g.t.lm1UKi))) : j ? ((x = g.NW.formatToPlainString(g.t.v1ktYW, { min: p.YeM.MEMBER_AGE })), (I = g.NW.string(g.t.BddRzc))) : S && ((x = g.NW.formatToPlainString(g.t['sncw4+'], { min: p.YeM.ACCOUNT_AGE })), (I = g.NW.string(g.t.BddRzc)))), null == E || null == x)
        ? null
        : (0, i.jsxs)(o.VqE, {
              className: m.container,
              'aria-labelledby': _,
              children: [
                  (0, i.jsx)('img', {
                      alt: '',
                      className: m.image,
                      src: n(64395)
                  }),
                  (0, i.jsxs)('div', {
                      className: m.content,
                      children: [
                          (0, i.jsx)(o.X6q, {
                              variant: 'heading-md/semibold',
                              id: _,
                              children: E
                          }),
                          (0, i.jsx)(o.Text, {
                              color: 'header-secondary',
                              variant: 'text-sm/normal',
                              children: x
                          }),
                          (0, i.jsxs)('div', {
                              className: m.buttonContainer,
                              children: [
                                  null != I
                                      ? (0, i.jsx)(o.zxk, {
                                            onClick: () => {
                                                v
                                                    ? a.j()
                                                    : C
                                                      ? (0, o.ZDy)(
                                                            async () => {
                                                                let { default: e } = await Promise.resolve().then(n.bind(n, 607018));
                                                                return (t) => (0, i.jsx)(e, b({ reason: u.L.GUILD_PHONE_REQUIRED }, t));
                                                            },
                                                            { modalKey: f.M }
                                                        )
                                                      : O &&
                                                        (s.Z.verifyResend(),
                                                        (0, o.h7j)((e) => {
                                                            var t, n, r;
                                                            return (0, i.jsx)(
                                                                o.ConfirmModal,
                                                                ((n = b(
                                                                    {
                                                                        header: g.NW.string(g.t.LykQYm),
                                                                        confirmText: g.NW.string(g.t.BddRzc),
                                                                        confirmButtonColor: o.zxk.Colors.BRAND
                                                                    },
                                                                    e
                                                                )),
                                                                (r = r =
                                                                    {
                                                                        children: (0, i.jsx)(o.Text, {
                                                                            variant: 'text-md/normal',
                                                                            children: g.NW.format(g.t.azKEPz, { email: null == (t = h.default.getCurrentUser()) ? void 0 : t.email })
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
                                                    y();
                                            },
                                            className: m.primaryButton,
                                            children: I
                                        })
                                      : null,
                                  v || C || O
                                      ? (0, i.jsx)(o.zxk, {
                                            onClick: y,
                                            look: o.zxk.Looks.BLANK,
                                            className: m.cancel,
                                            children: g.NW.string(g.t.oEAioK)
                                        })
                                      : null
                              ]
                          })
                      ]
                  })
              ]
          });
};
