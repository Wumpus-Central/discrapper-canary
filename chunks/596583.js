r.d(t, { Z: () => F }), r(47120);
var a = r(200651);
r(192379);
var s = r(120356),
    i = r.n(s),
    n = r(512722),
    l = r.n(n),
    C = r(442837),
    o = r(780384),
    d = r(481060),
    c = r(493683),
    x = r(37234),
    h = r(410030),
    p = r(518950),
    f = r(819640),
    u = r(63063),
    m = r(51144),
    _ = r(281494),
    j = r(276444),
    g = r(792451),
    L = r(814667),
    y = r(263885),
    v = r(981631),
    S = r(388032),
    N = r(131593);
let Z = (e, t) => {
        f.Z.hasLayers() && (0, x.xf)(), c.Z.openPrivateChannel(e), t();
    },
    w = (e) => {
        let { user: t, trialCreationResult: r, onClose: s } = e,
            { avatarSrc: n, eventHandlers: l } = (0, p.Z)({
                user: t,
                size: d.EFr.SIZE_56
            }),
            C = m.ZP.getName(t),
            o = t.username !== C && r === _.Fz.SUCCESS,
            c = r === _.Fz.FAIL;
        return (0, a.jsxs)('div', {
            className: N.referredUserRowContainer,
            children: [
                (0, a.jsx)(d.qEK, {
                    imageClassName: i()({ [N.erroredAvatar]: c }),
                    src: n,
                    'aria-label': C,
                    size: d.EFr.SIZE_56,
                    ...l
                }),
                (0, a.jsxs)('div', {
                    className: N.referredUserRowBody,
                    children: [
                        c
                            ? (0, a.jsxs)(a.Fragment, {
                                  children: [
                                      (0, a.jsx)(d.Text, {
                                          className: N.errorDisplayName,
                                          variant: 'text-md/medium',
                                          children: C
                                      }),
                                      (0, a.jsx)(d.Text, {
                                          variant: 'text-md/medium',
                                          className: N.userName,
                                          children: S.intl.format(S.t.RO3T4O, { userName: C })
                                      })
                                  ]
                              })
                            : (0, a.jsx)(d.ua7, {
                                  text: S.intl.string(S.t.xkVQPD),
                                  position: 'right',
                                  children: (e) => {
                                      let { onMouseEnter: r, onMouseLeave: i } = e;
                                      return (0, a.jsx)(d.P3F, {
                                          onClick: () => Z(t.id, s),
                                          className: N.displayNameClickableContainer,
                                          onMouseEnter: r,
                                          onMouseLeave: i,
                                          children: (0, a.jsx)(d.Text, {
                                              variant: 'text-md/medium',
                                              className: N.displayName,
                                              children: C
                                          })
                                      });
                                  }
                              }),
                        o &&
                            (0, a.jsx)(d.Text, {
                                variant: 'text-md/medium',
                                className: N.userName,
                                children: t.username
                            })
                    ]
                })
            ]
        });
    },
    F = (e) => {
        let { selectedUsers: t, trialCreationResult: r, onClose: s } = e,
            i = [...t].map((e) =>
                (0, a.jsx)(
                    w,
                    {
                        user: e,
                        trialCreationResult: r.get(e.id),
                        onClose: s
                    },
                    e.id
                )
            ),
            n = (0, C.e7)([j.Z], () => j.Z.getReferralsRemaining());
        l()(null !== n, 'Referrals remaining should not be null');
        let c = (0, h.Fg)(),
            x = (0, o.ap)(c) ? L.Z : g.Z,
            p = S.intl.string(S.t.Pcb7KC),
            f = [...r.values()].filter((e) => e === _.Fz.SUCCESS).length;
        return (
            n > 0 && (p = S.intl.formatToPlainString(S.t.iWtOfH, { numReferrals: f })),
            0 === f && (p = S.intl.string(S.t['7VBEub'])),
            (0, a.jsxs)('div', {
                className: N.confrimationContainer,
                children: [
                    (0, a.jsx)(d.P3F, {
                        onClick: s,
                        className: N.closeButtonContainer,
                        children: (0, a.jsx)(d.Dio, {
                            size: 'custom',
                            width: 20,
                            height: 20
                        })
                    }),
                    (0, a.jsx)(x, { className: N.headerIcon }),
                    (0, a.jsx)(d.X6q, {
                        variant: 'heading-lg/bold',
                        className: N.heading,
                        children: p
                    }),
                    (0, a.jsx)('div', {
                        className: N.confirmedUserContainer,
                        children: i
                    }),
                    (0, a.jsx)(d.Text, {
                        variant: 'text-md/medium',
                        children: S.intl.format(S.t.CZaMHh, {
                            days: y.p,
                            helpdeskArticle: u.Z.getArticleURL(v.BhN.REFERRAL_PROGRAM)
                        })
                    })
                ]
            })
        );
    };
