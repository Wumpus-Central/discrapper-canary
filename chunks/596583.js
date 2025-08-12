t.d(r, { Z: () => B }), t(388685);
var a = t(255367);
t(73800);
var i = t(120356),
    C = t.n(i),
    s = t(512722),
    l = t.n(s),
    n = t(442837),
    o = t(780384),
    d = t(481060),
    p = t(493683),
    c = t(37234),
    x = t(410030),
    f = t(518950),
    _ = t(819640),
    h = t(63063),
    u = t(51144),
    j = t(281494),
    L = t(276444),
    m = t(792451),
    y = t(814667),
    g = t(263885),
    F = t(981631),
    S = t(388032),
    w = t(18557);
let U = (e, r) => {
        _.Z.hasLayers() && (0, c.xf)(), p.Z.openPrivateChannel({ recipientIds: e }), r();
    },
    O = (e) => {
        let { user: r, trialCreationResult: t, onClose: i } = e,
            { avatarSrc: s, eventHandlers: l } = (0, f.Z)({
                userId: null == r ? void 0 : r.id,
                size: d.EFr.SIZE_56,
            }),
            n = u.ZP.getName(r),
            o = r.username !== n && t === j.Fz.SUCCESS,
            p = t === j.Fz.FAIL;
        return (0, a.jsxs)("div", {
            className: w.referredUserRowContainer,
            children: [
                (0, a.jsx)(
                    d.qEK,
                    (function (e) {
                        for (var r = 1; r < arguments.length; r++) {
                            var t = null != arguments[r] ? arguments[r] : {},
                                a = Object.keys(t);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (a = a.concat(
                                    Object.getOwnPropertySymbols(t).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                    }),
                                )),
                                a.forEach(function (r) {
                                    var a;
                                    (a = t[r]),
                                        r in e
                                            ? Object.defineProperty(e, r, {
                                                  value: a,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[r] = a);
                                });
                        }
                        return e;
                    })(
                        {
                            imageClassName: C()({ [w.erroredAvatar]: p }),
                            src: s,
                            "aria-label": n,
                            size: d.EFr.SIZE_56,
                        },
                        l,
                    ),
                ),
                (0, a.jsxs)("div", {
                    className: w.referredUserRowBody,
                    children: [
                        p
                            ? (0, a.jsxs)(a.Fragment, {
                                  children: [
                                      (0, a.jsx)(d.Text, {
                                          className: w.errorDisplayName,
                                          variant: "text-md/medium",
                                          children: n,
                                      }),
                                      (0, a.jsx)(d.Text, {
                                          variant: "text-md/medium",
                                          className: w.userName,
                                          children: S.intl.format(S.t.RO3T4O, { userName: n }),
                                      }),
                                  ],
                              })
                            : (0, a.jsx)(d.ua7, {
                                  text: S.intl.string(S.t.xkVQPD),
                                  position: "right",
                                  children: (e) => {
                                      let { onMouseEnter: t, onMouseLeave: C } = e;
                                      return (0, a.jsx)(d.P3F, {
                                          onClick: () => U(r.id, i),
                                          className: w.displayNameClickableContainer,
                                          onMouseEnter: t,
                                          onMouseLeave: C,
                                          children: (0, a.jsx)(d.Text, {
                                              variant: "text-md/medium",
                                              className: w.displayName,
                                              children: n,
                                          }),
                                      });
                                  },
                              }),
                        o &&
                            (0, a.jsx)(d.Text, {
                                variant: "text-md/medium",
                                className: w.userName,
                                children: r.username,
                            }),
                    ],
                }),
            ],
        });
    },
    B = (e) => {
        let { selectedUsers: r, trialCreationResult: t, onClose: i } = e,
            C = [...r].map((e) =>
                (0, a.jsx)(
                    O,
                    {
                        user: e,
                        trialCreationResult: t.get(e.id),
                        onClose: i,
                    },
                    e.id,
                ),
            ),
            s = (0, n.e7)([L.Z], () => L.Z.getReferralsRemaining());
        l()(null !== s, "Referrals remaining should not be null");
        let p = (0, x.Fg)(),
            c = (0, o.ap)(p) ? y.Z : m.Z,
            f = S.intl.string(S.t.Pcb7KC),
            _ = [...t.values()].filter((e) => e === j.Fz.SUCCESS).length;
        return (
            s > 0 && (f = S.intl.formatToPlainString(S.t.iWtOfH, { numReferrals: _ })),
            0 === _ && (f = S.intl.string(S.t["7VBEub"])),
            (0, a.jsxs)("div", {
                className: w.confrimationContainer,
                children: [
                    (0, a.jsx)(d.P3F, {
                        onClick: i,
                        className: w.closeButtonContainer,
                        children: (0, a.jsx)(d.Dio, {
                            size: "custom",
                            width: 20,
                            height: 20,
                        }),
                    }),
                    (0, a.jsx)(c, { className: w.headerIcon }),
                    (0, a.jsx)(d.X6q, {
                        variant: "heading-lg/bold",
                        className: w.heading,
                        children: f,
                    }),
                    (0, a.jsx)("div", {
                        className: w.confirmedUserContainer,
                        children: C,
                    }),
                    (0, a.jsx)(d.Text, {
                        variant: "text-md/medium",
                        children: S.intl.format(S.t.CZaMHh, {
                            days: g.p,
                            helpdeskArticle: h.Z.getArticleURL(F.BhN.REFERRAL_PROGRAM),
                        }),
                    }),
                ],
            })
        );
    };
