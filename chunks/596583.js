i.d(t, { Z: () => S }), i(388685);
var r = i(951288);
i(647438);
var C = i(120356),
    s = i.n(C),
    a = i(512722),
    l = i.n(a),
    n = i(442837),
    o = i(780384),
    d = i(481060),
    p = i(493683),
    x = i(37234),
    c = i(410030),
    f = i(518950),
    h = i(819640),
    _ = i(63063),
    u = i(51144),
    j = i(281494),
    L = i(276444),
    m = i(792451),
    y = i(814667),
    g = i(263885),
    F = i(981631),
    w = i(388032),
    U = i(436931);
let O = (e) => {
        let { user: t, trialCreationResult: i, onClose: C } = e,
            { avatarSrc: a, eventHandlers: l } = (0, f.Z)({
                userId: null == t ? void 0 : t.id,
                size: d.EFr.SIZE_56,
            }),
            n = u.ZP.getName(t),
            o = t.username !== n && i === j.Fz.SUCCESS,
            c = i === j.Fz.FAIL;
        return (0, r.jsxs)("div", {
            className: U.referredUserRowContainer,
            children: [
                (0, r.jsx)(
                    d.qEK,
                    (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var i = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(i);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                    Object.getOwnPropertySymbols(i).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(i, e).enumerable;
                                    }),
                                )),
                                r.forEach(function (t) {
                                    var r;
                                    (r = i[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = r);
                                });
                        }
                        return e;
                    })(
                        {
                            imageClassName: s()({ [U.erroredAvatar]: c }),
                            src: a,
                            "aria-label": n,
                            size: d.EFr.SIZE_56,
                        },
                        l,
                    ),
                ),
                (0, r.jsxs)("div", {
                    className: U.referredUserRowBody,
                    children: [
                        c
                            ? (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)(d.Text, {
                                          className: U.errorDisplayName,
                                          variant: "text-md/medium",
                                          children: n,
                                      }),
                                      (0, r.jsx)(d.Text, {
                                          variant: "text-md/medium",
                                          className: U.userName,
                                          children: w.intl.format(w.t.RO3T4O, { userName: n }),
                                      }),
                                  ],
                              })
                            : (0, r.jsx)(d.ua7, {
                                  text: w.intl.string(w.t.xkVQPD),
                                  position: "right",
                                  children: (e) => {
                                      let { onMouseEnter: i, onMouseLeave: s } = e;
                                      return (0, r.jsx)(d.P3F, {
                                          onClick: () => {
                                              var e;
                                              return (
                                                  (e = t.id),
                                                  void (h.Z.hasLayers() && (0, x.xf)(),
                                                  p.Z.openPrivateChannel({ recipientIds: e }),
                                                  C())
                                              );
                                          },
                                          className: U.displayNameClickableContainer,
                                          onMouseEnter: i,
                                          onMouseLeave: s,
                                          children: (0, r.jsx)(d.Text, {
                                              variant: "text-md/medium",
                                              className: U.displayName,
                                              children: n,
                                          }),
                                      });
                                  },
                              }),
                        o &&
                            (0, r.jsx)(d.Text, {
                                variant: "text-md/medium",
                                className: U.userName,
                                children: t.username,
                            }),
                    ],
                }),
            ],
        });
    },
    S = (e) => {
        let { selectedUsers: t, trialCreationResult: i, onClose: C } = e,
            s = [...t].map((e) =>
                (0, r.jsx)(
                    O,
                    {
                        user: e,
                        trialCreationResult: i.get(e.id),
                        onClose: C,
                    },
                    e.id,
                ),
            ),
            a = (0, n.e7)([L.Z], () => L.Z.getReferralsRemaining());
        l()(null !== a, "Referrals remaining should not be null");
        let p = (0, c.Fg)(),
            x = (0, o.ap)(p) ? y.Z : m.Z,
            f = w.intl.string(w.t.Pcb7KC),
            h = [...i.values()].filter((e) => e === j.Fz.SUCCESS).length;
        return (
            a > 0 && (f = w.intl.formatToPlainString(w.t.iWtOfH, { numReferrals: h })),
            0 === h && (f = w.intl.string(w.t["7VBEub"])),
            (0, r.jsxs)("div", {
                className: U.confrimationContainer,
                children: [
                    (0, r.jsx)(d.P3F, {
                        onClick: C,
                        className: U.closeButtonContainer,
                        children: (0, r.jsx)(d.Dio, {
                            size: "custom",
                            width: 20,
                            height: 20,
                        }),
                    }),
                    (0, r.jsx)(x, { className: U.headerIcon }),
                    (0, r.jsx)(d.X6q, {
                        variant: "heading-lg/bold",
                        className: U.heading,
                        children: f,
                    }),
                    (0, r.jsx)("div", {
                        className: U.confirmedUserContainer,
                        children: s,
                    }),
                    (0, r.jsx)(d.Text, {
                        variant: "text-md/medium",
                        children: w.intl.format(w.t.CZaMHh, {
                            days: g.p,
                            helpdeskArticle: _.Z.getArticleURL(F.BhN.REFERRAL_PROGRAM),
                        }),
                    }),
                ],
            })
        );
    };
