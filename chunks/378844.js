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
    g = n(815660),
    m = n(388032),
    f = n(496472),
    _ = (((i = {})[(i.VOICE = 0)] = 'VOICE'), i);
let v = (e) => {
    let { type: t, guildId: i, closePopout: _ } = e,
        v = (0, c.Dt)(),
        { notClaimed: C, notEmailVerified: x, notPhoneVerified: Z, newAccount: I, newMember: b } = (0, r.e7)([u.Z], () => u.Z.getCheck(i), [i]),
        S = 0 === t ? m.intl.string(m.t['6zY8BA']) : null,
        N = null,
        E = null;
    return (0 === t && (C ? ((N = m.intl.string(m.t.IRxUlJ)), (E = m.intl.string(m.t.fiNVio))) : Z ? ((N = m.intl.string(m.t.vW8iUF)), (E = m.intl.string(m.t['50gfOj']))) : x ? ((N = m.intl.string(m.t.vdSOp6)), (E = m.intl.string(m.t.lm1UKi))) : b ? ((N = m.intl.formatToPlainString(m.t.v1ktYW, { min: p.YeM.MEMBER_AGE })), (E = m.intl.string(m.t.BddRzc))) : I && ((N = m.intl.formatToPlainString(m.t['sncw4+'], { min: p.YeM.ACCOUNT_AGE })), (E = m.intl.string(m.t.BddRzc)))), null == S || null == N)
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
                                  null != E
                                      ? (0, l.jsx)(a.zxk, {
                                            onClick: () => {
                                                C
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
                                                            { modalKey: g.M }
                                                        )
                                                      : x &&
                                                        (o.Z.verifyResend(),
                                                        (0, a.h7j)((e) => {
                                                            var t;
                                                            return (0, l.jsx)(a.ConfirmModal, {
                                                                header: m.intl.string(m.t.LykQYm),
                                                                confirmText: m.intl.string(m.t.BddRzc),
                                                                confirmButtonColor: a.zxk.Colors.BRAND,
                                                                ...e,
                                                                children: (0, l.jsx)(a.Text, {
                                                                    variant: 'text-md/normal',
                                                                    children: m.intl.format(m.t.azKEPz, { email: null === (t = h.default.getCurrentUser()) || void 0 === t ? void 0 : t.email })
                                                                })
                                                            });
                                                        })),
                                                    _();
                                            },
                                            className: f.primaryButton,
                                            children: E
                                        })
                                      : null,
                                  C || Z || x
                                      ? (0, l.jsx)(a.zxk, {
                                            onClick: _,
                                            look: a.zxk.Looks.BLANK,
                                            className: f.cancel,
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
