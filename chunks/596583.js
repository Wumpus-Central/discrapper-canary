(r.d(t, { Z: () => w }), r(388685));
var a = r(255367);
r(73800);
var s = r(120356),
    i = r.n(s),
    n = r(512722),
    l = r.n(n),
    o = r(442837),
    d = r(780384),
    C = r(481060),
    c = r(493683),
    u = r(37234),
    p = r(410030),
    h = r(518950),
    f = r(819640),
    x = r(63063),
    g = r(51144),
    m = r(281494),
    _ = r(276444),
    j = r(792451),
    y = r(814667),
    L = r(263885),
    v = r(981631),
    b = r(388032),
    S = r(974149);
let R = (e, t) => {
        (f.Z.hasLayers() && (0, u.xf)(), c.Z.openPrivateChannel({ recipientIds: e }), t());
    },
    E = (e) => {
        let { user: t, trialCreationResult: r, onClose: s } = e,
            { avatarSrc: n, eventHandlers: l } = (0, h.Z)({
                userId: null == t ? void 0 : t.id,
                size: C.EFr.SIZE_56
            }),
            o = g.ZP.getName(t),
            d = t.username !== o && r === m.Fz.SUCCESS,
            c = r === m.Fz.FAIL;
        return (0, a.jsxs)('div', {
            className: S.referredUserRowContainer,
            children: [
                (0, a.jsx)(
                    C.qEK,
                    (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {},
                                a = Object.keys(r);
                            ('function' == typeof Object.getOwnPropertySymbols &&
                                (a = a.concat(
                                    Object.getOwnPropertySymbols(r).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                    })
                                )),
                                a.forEach(function (t) {
                                    var a;
                                    ((a = r[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: a,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = a));
                                }));
                        }
                        return e;
                    })(
                        {
                            imageClassName: i()({ [S.erroredAvatar]: c }),
                            src: n,
                            'aria-label': o,
                            size: C.EFr.SIZE_56
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
                                      (0, a.jsx)(C.Text, {
                                          className: S.errorDisplayName,
                                          variant: 'text-md/medium',
                                          children: o
                                      }),
                                      (0, a.jsx)(C.Text, {
                                          variant: 'text-md/medium',
                                          className: S.userName,
                                          children: b.intl.format(b.t.RO3T4O, { userName: o })
                                      })
                                  ]
                              })
                            : (0, a.jsx)(C.ua7, {
                                  text: b.intl.string(b.t.xkVQPD),
                                  position: 'right',
                                  children: (e) => {
                                      let { onMouseEnter: r, onMouseLeave: i } = e;
                                      return (0, a.jsx)(C.P3F, {
                                          onClick: () => R(t.id, s),
                                          className: S.displayNameClickableContainer,
                                          onMouseEnter: r,
                                          onMouseLeave: i,
                                          children: (0, a.jsx)(C.Text, {
                                              variant: 'text-md/medium',
                                              className: S.displayName,
                                              children: o
                                          })
                                      });
                                  }
                              }),
                        d &&
                            (0, a.jsx)(C.Text, {
                                variant: 'text-md/medium',
                                className: S.userName,
                                children: t.username
                            })
                    ]
                })
            ]
        });
    },
    w = (e) => {
        let { selectedUsers: t, trialCreationResult: r, onClose: s } = e,
            i = [...t].map((e) =>
                (0, a.jsx)(
                    E,
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
        let c = (0, p.Fg)(),
            u = (0, d.ap)(c) ? y.Z : j.Z,
            h = b.intl.string(b.t.Pcb7KC),
            f = [...r.values()].filter((e) => e === m.Fz.SUCCESS).length;
        return (
            n > 0 && (h = b.intl.formatToPlainString(b.t.iWtOfH, { numReferrals: f })),
            0 === f && (h = b.intl.string(b.t['7VBEub'])),
            (0, a.jsxs)('div', {
                className: S.confrimationContainer,
                children: [
                    (0, a.jsx)(C.P3F, {
                        onClick: s,
                        className: S.closeButtonContainer,
                        children: (0, a.jsx)(C.Dio, {
                            size: 'custom',
                            width: 20,
                            height: 20
                        })
                    }),
                    (0, a.jsx)(u, { className: S.headerIcon }),
                    (0, a.jsx)(C.X6q, {
                        variant: 'heading-lg/bold',
                        className: S.heading,
                        children: h
                    }),
                    (0, a.jsx)('div', {
                        className: S.confirmedUserContainer,
                        children: i
                    }),
                    (0, a.jsx)(C.Text, {
                        variant: 'text-md/medium',
                        children: b.intl.format(b.t.CZaMHh, {
                            days: L.p,
                            helpdeskArticle: x.Z.getArticleURL(v.BhN.REFERRAL_PROGRAM)
                        })
                    })
                ]
            })
        );
    };
