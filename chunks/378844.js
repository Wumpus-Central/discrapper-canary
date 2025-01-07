n.d(t, {
    R: function () {
        return l;
    }
});
var i,
    l,
    r = n(200651);
n(192379);
var a = n(442837),
    o = n(481060),
    s = n(893776),
    c = n(391650),
    u = n(313201),
    d = n(144114),
    h = n(607744),
    p = n(594174),
    f = n(981631),
    m = n(815660),
    g = n(388032),
    v = n(496472);
(i = l || (l = {}))[(i.VOICE = 0)] = 'VOICE';
t.Z = (e) => {
    let { type: t, guildId: i, closePopout: l } = e,
        C = (0, u.Dt)(),
        { notClaimed: x, notEmailVerified: I, notPhoneVerified: _, newAccount: Z, newMember: b } = (0, a.e7)([h.Z], () => h.Z.getCheck(i), [i]),
        S = 0 === t ? g.intl.string(g.t['6zY8BA']) : null,
        N = null,
        E = null;
    return (0 === t && (x ? ((N = g.intl.string(g.t.IRxUlJ)), (E = g.intl.string(g.t.fiNVio))) : _ ? ((N = g.intl.string(g.t.vW8iUF)), (E = g.intl.string(g.t['50gfOj']))) : I ? ((N = g.intl.string(g.t.vdSOp6)), (E = g.intl.string(g.t.lm1UKi))) : b ? ((N = g.intl.formatToPlainString(g.t.v1ktYW, { min: f.YeM.MEMBER_AGE })), (E = g.intl.string(g.t.BddRzc))) : Z && ((N = g.intl.formatToPlainString(g.t['sncw4+'], { min: f.YeM.ACCOUNT_AGE })), (E = g.intl.string(g.t.BddRzc)))), null == S || null == N)
        ? null
        : (0, r.jsxs)(o.Dialog, {
              className: v.container,
              'aria-labelledby': C,
              children: [
                  (0, r.jsx)('img', {
                      alt: '',
                      className: v.image,
                      src: n(64395)
                  }),
                  (0, r.jsxs)('div', {
                      className: v.content,
                      children: [
                          (0, r.jsx)(o.Heading, {
                              variant: 'heading-md/semibold',
                              id: C,
                              children: S
                          }),
                          (0, r.jsx)(o.Text, {
                              color: 'header-secondary',
                              variant: 'text-sm/normal',
                              children: N
                          }),
                          (0, r.jsxs)('div', {
                              className: v.buttonContainer,
                              children: [
                                  null != E
                                      ? (0, r.jsx)(o.Button, {
                                            onClick: () => {
                                                x
                                                    ? c.j()
                                                    : _
                                                      ? (0, o.openModalLazy)(
                                                            async () => {
                                                                let { default: e } = await Promise.all([n.e('76540'), n.e('51501')]).then(n.bind(n, 607018));
                                                                return (t) =>
                                                                    (0, r.jsx)(e, {
                                                                        reason: d.L.GUILD_PHONE_REQUIRED,
                                                                        ...t
                                                                    });
                                                            },
                                                            { modalKey: m.M }
                                                        )
                                                      : I &&
                                                        (s.Z.verifyResend(),
                                                        (0, o.openModal)((e) => {
                                                            var t;
                                                            return (0, r.jsx)(o.ConfirmModal, {
                                                                header: g.intl.string(g.t.LykQYm),
                                                                confirmText: g.intl.string(g.t.BddRzc),
                                                                confirmButtonColor: o.Button.Colors.BRAND,
                                                                ...e,
                                                                children: (0, r.jsx)(o.Text, {
                                                                    variant: 'text-md/normal',
                                                                    children: g.intl.format(g.t.azKEPz, { email: null === (t = p.default.getCurrentUser()) || void 0 === t ? void 0 : t.email })
                                                                })
                                                            });
                                                        })),
                                                    l();
                                            },
                                            className: v.primaryButton,
                                            children: E
                                        })
                                      : null,
                                  x || _ || I
                                      ? (0, r.jsx)(o.Button, {
                                            onClick: l,
                                            look: o.Button.Looks.BLANK,
                                            className: v.cancel,
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
