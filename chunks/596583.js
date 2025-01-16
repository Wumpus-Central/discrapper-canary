r(47120);
var s = r(200651);
r(192379);
var i = r(120356),
    a = r.n(i),
    n = r(512722),
    l = r.n(n),
    C = r(442837),
    o = r(780384),
    d = r(481060),
    c = r(493683),
    x = r(37234),
    f = r(410030),
    h = r(518950),
    p = r(819640),
    u = r(63063),
    m = r(51144),
    _ = r(281494),
    j = r(276444),
    g = r(792451),
    L = r(814667),
    S = r(263885),
    y = r(981631),
    v = r(388032),
    N = r(790877);
let Z = (e, t) => {
        p.Z.hasLayers() && (0, x.xf)(), c.Z.openPrivateChannel(e), t();
    },
    w = (e) => {
        let { user: t, trialCreationResult: r, onClose: i } = e,
            { avatarSrc: n, eventHandlers: l } = (0, h.Z)({
                user: t,
                size: d.AvatarSizes.SIZE_56
            }),
            C = m.ZP.getName(t),
            o = t.username !== C && r === _.Fz.SUCCESS,
            c = r === _.Fz.FAIL;
        return (0, s.jsxs)('div', {
            className: N.referredUserRowContainer,
            children: [
                (0, s.jsx)(d.Avatar, {
                    imageClassName: a()({ [N.erroredAvatar]: c }),
                    src: n,
                    'aria-label': C,
                    size: d.AvatarSizes.SIZE_56,
                    ...l
                }),
                (0, s.jsxs)('div', {
                    className: N.referredUserRowBody,
                    children: [
                        c
                            ? (0, s.jsxs)(s.Fragment, {
                                  children: [
                                      (0, s.jsx)(d.Text, {
                                          className: N.errorDisplayName,
                                          variant: 'text-md/medium',
                                          children: C
                                      }),
                                      (0, s.jsx)(d.Text, {
                                          variant: 'text-md/medium',
                                          className: N.userName,
                                          children: v.intl.format(v.t.RO3T4O, { userName: C })
                                      })
                                  ]
                              })
                            : (0, s.jsx)(d.Tooltip, {
                                  text: v.intl.string(v.t.xkVQPD),
                                  position: 'right',
                                  children: (e) => {
                                      let { onMouseEnter: r, onMouseLeave: a } = e;
                                      return (0, s.jsx)(d.Clickable, {
                                          onClick: () => Z(t.id, i),
                                          className: N.displayNameClickableContainer,
                                          onMouseEnter: r,
                                          onMouseLeave: a,
                                          children: (0, s.jsx)(d.Text, {
                                              variant: 'text-md/medium',
                                              className: N.displayName,
                                              children: C
                                          })
                                      });
                                  }
                              }),
                        o &&
                            (0, s.jsx)(d.Text, {
                                variant: 'text-md/medium',
                                className: N.userName,
                                children: t.username
                            })
                    ]
                })
            ]
        });
    };
t.Z = (e) => {
    let { selectedUsers: t, trialCreationResult: r, onClose: i } = e,
        a = [...t].map((e) =>
            (0, s.jsx)(
                w,
                {
                    user: e,
                    trialCreationResult: r.get(e.id),
                    onClose: i
                },
                e.id
            )
        ),
        n = (0, C.e7)([j.Z], () => j.Z.getReferralsRemaining());
    l()(null !== n, 'Referrals remaining should not be null');
    let c = (0, f.Fg)(),
        x = (0, o.ap)(c) ? L.Z : g.Z,
        h = v.intl.string(v.t.Pcb7KC),
        p = [...r.values()].filter((e) => e === _.Fz.SUCCESS).length;
    return (
        n > 0 && (h = v.intl.formatToPlainString(v.t.iWtOfH, { numReferrals: p })),
        0 === p && (h = v.intl.string(v.t['7VBEub'])),
        (0, s.jsxs)('div', {
            className: N.confrimationContainer,
            children: [
                (0, s.jsx)(d.Clickable, {
                    onClick: i,
                    className: N.closeButtonContainer,
                    children: (0, s.jsx)(d.XSmallIcon, {
                        size: 'custom',
                        width: 20,
                        height: 20
                    })
                }),
                (0, s.jsx)(x, { className: N.headerIcon }),
                (0, s.jsx)(d.Heading, {
                    variant: 'heading-lg/bold',
                    className: N.heading,
                    children: h
                }),
                (0, s.jsx)('div', {
                    className: N.confirmedUserContainer,
                    children: a
                }),
                (0, s.jsx)(d.Text, {
                    variant: 'text-md/medium',
                    children: v.intl.format(v.t.CZaMHh, {
                        days: S.p,
                        helpdeskArticle: u.Z.getArticleURL(y.BhN.REFERRAL_PROGRAM)
                    })
                })
            ]
        })
    );
};
