n.d(t, {
    R: () => _,
    Z: () => v
});
var i,
    l = n(200651);
n(192379);
var r = n(442837),
    a = n(481060),
    o = n(893776),
    s = n(391650),
    c = n(313201),
    d = n(144114),
    u = n(607744),
    h = n(594174),
    p = n(981631),
    m = n(815660),
    g = n(388032),
    f = n(496472),
    _ = (((i = {})[(i.VOICE = 0)] = 'VOICE'), i);
let v = (e) => {
    let { type: t, guildId: i, closePopout: _ } = e,
        v = (0, c.Dt)(),
        { notClaimed: x, notEmailVerified: C, notPhoneVerified: Z, newAccount: I, newMember: b } = (0, r.e7)([u.Z], () => u.Z.getCheck(i), [i]),
        S = 0 === t ? g.intl.string(g.t['6zY8BA']) : null,
        N = null,
        j = null;
    return (0 === t && (x ? ((N = g.intl.string(g.t.IRxUlJ)), (j = g.intl.string(g.t.fiNVio))) : Z ? ((N = g.intl.string(g.t.vW8iUF)), (j = g.intl.string(g.t['50gfOj']))) : C ? ((N = g.intl.string(g.t.vdSOp6)), (j = g.intl.string(g.t.lm1UKi))) : b ? ((N = g.intl.formatToPlainString(g.t.v1ktYW, { min: p.YeM.MEMBER_AGE })), (j = g.intl.string(g.t.BddRzc))) : I && ((N = g.intl.formatToPlainString(g.t['sncw4+'], { min: p.YeM.ACCOUNT_AGE })), (j = g.intl.string(g.t.BddRzc)))), null == S || null == N)
        ? null
        : (0, l.jsxs)(a.VqE, {
              className: f.container,
              'aria-labelledby': v,
              children: [
                  (0, l.jsx)('img', {
                      alt: '',
                      className: f.image,
                      src: n(64395)
                  }),
                  (0, l.jsxs)('div', {
                      className: f.content,
                      children: [
                          (0, l.jsx)(a.X6q, {
                              variant: 'heading-md/semibold',
                              id: v,
                              children: S
                          }),
                          (0, l.jsx)(a.Text, {
                              color: 'header-secondary',
                              variant: 'text-sm/normal',
                              children: N
                          }),
                          (0, l.jsxs)('div', {
                              className: f.buttonContainer,
                              children: [
                                  null != j
                                      ? (0, l.jsx)(a.zxk, {
                                            onClick: () => {
                                                x
                                                    ? s.j()
                                                    : Z
                                                      ? (0, a.ZDy)(
                                                            async () => {
                                                                let { default: e } = await Promise.all([n.e('76540'), n.e('93399')]).then(n.bind(n, 607018));
                                                                return (t) =>
                                                                    (0, l.jsx)(e, {
                                                                        reason: d.L.GUILD_PHONE_REQUIRED,
                                                                        ...t
                                                                    });
                                                            },
                                                            { modalKey: m.M }
                                                        )
                                                      : C &&
                                                        (o.Z.verifyResend(),
                                                        (0, a.h7j)((e) => {
                                                            var t;
                                                            return (0, l.jsx)(a.ConfirmModal, {
                                                                header: g.intl.string(g.t.LykQYm),
                                                                confirmText: g.intl.string(g.t.BddRzc),
                                                                confirmButtonColor: a.zxk.Colors.BRAND,
                                                                ...e,
                                                                children: (0, l.jsx)(a.Text, {
                                                                    variant: 'text-md/normal',
                                                                    children: g.intl.format(g.t.azKEPz, { email: null === (t = h.default.getCurrentUser()) || void 0 === t ? void 0 : t.email })
                                                                })
                                                            });
                                                        })),
                                                    _();
                                            },
                                            className: f.primaryButton,
                                            children: j
                                        })
                                      : null,
                                  x || Z || C
                                      ? (0, l.jsx)(a.zxk, {
                                            onClick: _,
                                            look: a.zxk.Looks.BLANK,
                                            className: f.cancel,
                                            children: g.intl.string(g.t.oEAioK)
                                        })
                                      : null
                              ]
                          })
                      ]
                  })
              ]
          });
};
