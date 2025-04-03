r.d(t, { Z: () => Z }), r(47120);
var a = r(200651);
r(192379);
var s = r(120356),
    i = r.n(s),
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
    N = r(981631),
    v = r(388032),
    S = r(974149);
let w = (e, t) => {
        u.Z.hasLayers() && (0, x.xf)(), c.Z.openPrivateChannel(e), t();
    },
    b = (e) => {
        let { user: t, trialCreationResult: r, onClose: s } = e,
            { avatarSrc: n, eventHandlers: l } = (0, p.Z)({
                user: t,
                size: d.EFr.SIZE_56
            }),
            o = m.ZP.getName(t),
            C = t.username !== o && r === j.Fz.SUCCESS,
            c = r === j.Fz.FAIL;
        return (0, a.jsxs)('div', {
            className: S.referredUserRowContainer,
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
                            imageClassName: i()({ [S.erroredAvatar]: c }),
                            src: n,
                            'aria-label': o,
                            size: d.EFr.SIZE_56
                        },
                        l
                    )
                ),
                (0, a.jsxs)('div', {
                    className: S.referredUserRowBody,
                    children: [
                        c
                            ? (0, a.jsxs)(a.Fragment, {
                                  children: [
                                      (0, a.jsx)(d.Text, {
                                          className: S.errorDisplayName,
                                          variant: 'text-md/medium',
                                          children: o
                                      }),
                                      (0, a.jsx)(d.Text, {
                                          variant: 'text-md/medium',
                                          className: S.userName,
                                          children: v.NW.format(v.t.RO3T4O, { userName: o })
                                      })
                                  ]
                              })
                            : (0, a.jsx)(d.ua7, {
                                  text: v.NW.string(v.t.xkVQPD),
                                  position: 'right',
                                  children: (e) => {
                                      let { onMouseEnter: r, onMouseLeave: i } = e;
                                      return (0, a.jsx)(d.P3F, {
                                          onClick: () => w(t.id, s),
                                          className: S.displayNameClickableContainer,
                                          onMouseEnter: r,
                                          onMouseLeave: i,
                                          children: (0, a.jsx)(d.Text, {
                                              variant: 'text-md/medium',
                                              className: S.displayName,
                                              children: o
                                          })
                                      });
                                  }
                              }),
                        C &&
                            (0, a.jsx)(d.Text, {
                                variant: 'text-md/medium',
                                className: S.userName,
                                children: t.username
                            })
                    ]
                })
            ]
        });
    },
    Z = (e) => {
        let { selectedUsers: t, trialCreationResult: r, onClose: s } = e,
            i = [...t].map((e) =>
                (0, a.jsx)(
                    b,
                    {
                        user: e,
                        trialCreationResult: r.get(e.id),
                        onClose: s
                    },
                    e.id
                )
            ),
            n = (0, o.e7)([_.Z], () => _.Z.getReferralsRemaining());
        l()(null !== n, 'Referrals remaining should not be null');
        let c = (0, f.Fg)(),
            x = (0, C.ap)(c) ? L.Z : g.Z,
            p = v.NW.string(v.t.Pcb7KC),
            u = [...r.values()].filter((e) => e === j.Fz.SUCCESS).length;
        return (
            n > 0 && (p = v.NW.formatToPlainString(v.t.iWtOfH, { numReferrals: u })),
            0 === u && (p = v.NW.string(v.t['7VBEub'])),
            (0, a.jsxs)('div', {
                className: S.confrimationContainer,
                children: [
                    (0, a.jsx)(d.P3F, {
                        onClick: s,
                        className: S.closeButtonContainer,
                        children: (0, a.jsx)(d.Dio, {
                            size: 'custom',
                            width: 20,
                            height: 20
                        })
                    }),
                    (0, a.jsx)(x, { className: S.headerIcon }),
                    (0, a.jsx)(d.X6q, {
                        variant: 'heading-lg/bold',
                        className: S.heading,
                        children: p
                    }),
                    (0, a.jsx)('div', {
                        className: S.confirmedUserContainer,
                        children: i
                    }),
                    (0, a.jsx)(d.Text, {
                        variant: 'text-md/medium',
                        children: v.NW.format(v.t.CZaMHh, {
                            days: y.p,
                            helpdeskArticle: h.Z.getArticleURL(N.BhN.REFERRAL_PROGRAM)
                        })
                    })
                ]
            })
        );
    };
