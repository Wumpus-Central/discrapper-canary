r.d(t, { Z: () => Z }), r(388685);
var a = r(255367);
r(73800);
var i = r(120356),
    s = r.n(i),
    n = r(512722),
    l = r.n(n),
    o = r(442837),
    C = r(780384),
    d = r(481060),
    c = r(493683),
    x = r(37234),
    f = r(410030),
    p = r(518950),
    u = r(819640),
    h = r(63063),
    m = r(51144),
    j = r(281494),
    _ = r(276444),
    g = r(792451),
    L = r(814667),
    y = r(263885),
    v = r(981631),
    S = r(388032),
    w = r(974149);
let b = (e, t) => {
        u.Z.hasLayers() && (0, x.xf)(), c.Z.openPrivateChannel({ recipientIds: e }), t();
    },
    N = (e) => {
        let { user: t, trialCreationResult: r, onClose: i } = e,
            { avatarSrc: n, eventHandlers: l } = (0, p.Z)({
                user: t,
                size: d.EFr.SIZE_56
            }),
            o = m.ZP.getName(t),
            C = t.username !== o && r === j.Fz.SUCCESS,
            c = r === j.Fz.FAIL;
        return (0, a.jsxs)('div', {
            className: w.referredUserRowContainer,
            children: [
                (0, a.jsx)(
                    d.qEK,
                    (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {},
                                a = Object.keys(r);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (a = a.concat(
                                    Object.getOwnPropertySymbols(r).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                    })
                                )),
                                a.forEach(function (t) {
                                    var a;
                                    (a = r[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: a,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = a);
                                });
                        }
                        return e;
                    })(
                        {
                            imageClassName: s()({ [w.erroredAvatar]: c }),
                            src: n,
                            'aria-label': o,
                            size: d.EFr.SIZE_56
                        },
                        l
                    )
                ),
                (0, a.jsxs)('div', {
                    className: w.referredUserRowBody,
                    children: [
                        c
                            ? (0, a.jsxs)(a.Fragment, {
                                  children: [
                                      (0, a.jsx)(d.Text, {
                                          className: w.errorDisplayName,
                                          variant: 'text-md/medium',
                                          children: o
                                      }),
                                      (0, a.jsx)(d.Text, {
                                          variant: 'text-md/medium',
                                          className: w.userName,
                                          children: S.intl.format(S.t.RO3T4O, { userName: o })
                                      })
                                  ]
                              })
                            : (0, a.jsx)(d.ua7, {
                                  text: S.intl.string(S.t.xkVQPD),
                                  position: 'right',
                                  children: (e) => {
                                      let { onMouseEnter: r, onMouseLeave: s } = e;
                                      return (0, a.jsx)(d.P3F, {
                                          onClick: () => b(t.id, i),
                                          className: w.displayNameClickableContainer,
                                          onMouseEnter: r,
                                          onMouseLeave: s,
                                          children: (0, a.jsx)(d.Text, {
                                              variant: 'text-md/medium',
                                              className: w.displayName,
                                              children: o
                                          })
                                      });
                                  }
                              }),
                        C &&
                            (0, a.jsx)(d.Text, {
                                variant: 'text-md/medium',
                                className: w.userName,
                                children: t.username
                            })
                    ]
                })
            ]
        });
    },
    Z = (e) => {
        let { selectedUsers: t, trialCreationResult: r, onClose: i } = e,
            s = [...t].map((e) =>
                (0, a.jsx)(
                    N,
                    {
                        user: e,
                        trialCreationResult: r.get(e.id),
                        onClose: i
                    },
                    e.id
                )
            ),
            n = (0, o.e7)([_.Z], () => _.Z.getReferralsRemaining());
        l()(null !== n, 'Referrals remaining should not be null');
        let c = (0, f.Fg)(),
            x = (0, C.ap)(c) ? L.Z : g.Z,
            p = S.intl.string(S.t.Pcb7KC),
            u = [...r.values()].filter((e) => e === j.Fz.SUCCESS).length;
        return (
            n > 0 && (p = S.intl.formatToPlainString(S.t.iWtOfH, { numReferrals: u })),
            0 === u && (p = S.intl.string(S.t['7VBEub'])),
            (0, a.jsxs)('div', {
                className: w.confrimationContainer,
                children: [
                    (0, a.jsx)(d.P3F, {
                        onClick: i,
                        className: w.closeButtonContainer,
                        children: (0, a.jsx)(d.Dio, {
                            size: 'custom',
                            width: 20,
                            height: 20
                        })
                    }),
                    (0, a.jsx)(x, { className: w.headerIcon }),
                    (0, a.jsx)(d.X6q, {
                        variant: 'heading-lg/bold',
                        className: w.heading,
                        children: p
                    }),
                    (0, a.jsx)('div', {
                        className: w.confirmedUserContainer,
                        children: s
                    }),
                    (0, a.jsx)(d.Text, {
                        variant: 'text-md/medium',
                        children: S.intl.format(S.t.CZaMHh, {
                            days: y.p,
                            helpdeskArticle: h.Z.getArticleURL(v.BhN.REFERRAL_PROGRAM)
                        })
                    })
                ]
            })
        );
    };
