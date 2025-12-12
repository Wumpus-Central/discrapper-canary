a.d(t, { Z: () => Z }), a(388685);
var r = a(54381);
a(473749);
var i = a(120356),
    s = a.n(i),
    n = a(512722),
    l = a.n(n),
    d = a(442837),
    o = a(28664),
    C = a(780384),
    c = a(481060),
    x = a(493683),
    p = a(37234),
    f = a(410030),
    h = a(518950),
    u = a(819640),
    j = a(63063),
    m = a(51144),
    _ = a(281494),
    g = a(276444),
    L = a(792451),
    y = a(814667),
    v = a(263885),
    b = a(981631),
    S = a(388032),
    w = a(730314);
let N = (e) => {
        let { user: t, trialCreationResult: a, onClose: i } = e,
            { avatarSrc: n, eventHandlers: l } = (0, h.Z)({
                userId: null == t ? void 0 : t.id,
                size: c.EFr.SIZE_56,
            }),
            d = m.ZP.getName(t),
            C = t.username !== d && a === _.Fz.SUCCESS,
            f = a === _.Fz.FAIL;
        return (0, r.jsxs)("div", {
            className: w.referredUserRowContainer,
            children: [
                (0, r.jsx)(
                    c.qEK,
                    (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var a = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(a);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                    Object.getOwnPropertySymbols(a).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(a, e).enumerable;
                                    }),
                                )),
                                r.forEach(function (t) {
                                    var r;
                                    (r = a[t]),
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
                            imageClassName: s()({ [w.erroredAvatar]: f }),
                            src: n,
                            "aria-label": d,
                            size: c.EFr.SIZE_56,
                        },
                        l,
                    ),
                ),
                (0, r.jsxs)("div", {
                    className: w.referredUserRowBody,
                    children: [
                        f
                            ? (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)(c.Text, {
                                          className: w.errorDisplayName,
                                          variant: "text-md/medium",
                                          children: d,
                                      }),
                                      (0, r.jsx)(c.Text, {
                                          variant: "text-md/medium",
                                          className: w.userName,
                                          children: S.intl.format(S.t.RO3T4B, { userName: d }),
                                      }),
                                  ],
                              })
                            : (0, r.jsx)(o.u, {
                                  asContainer: !0,
                                  text: S.intl.string(S.t.xkVQPN),
                                  position: "right",
                                  children: (0, r.jsx)(c.P3F, {
                                      onClick: () => {
                                          var e;
                                          return (
                                              (e = t.id),
                                              void (u.Z.hasLayers() && (0, p.xf)(),
                                              x.Z.openPrivateChannel({ recipientIds: e }),
                                              i())
                                          );
                                      },
                                      className: w.displayNameClickableContainer,
                                      children: (0, r.jsx)(c.Text, {
                                          variant: "text-md/medium",
                                          className: w.displayName,
                                          children: d,
                                      }),
                                  }),
                              }),
                        C &&
                            (0, r.jsx)(c.Text, {
                                variant: "text-md/medium",
                                className: w.userName,
                                children: t.username,
                            }),
                    ],
                }),
            ],
        });
    },
    Z = (e) => {
        let { selectedUsers: t, trialCreationResult: a, onClose: i } = e,
            s = [...t].map((e) =>
                (0, r.jsx)(
                    N,
                    {
                        user: e,
                        trialCreationResult: a.get(e.id),
                        onClose: i,
                    },
                    e.id,
                ),
            ),
            n = (0, d.e7)([g.Z], () => g.Z.getReferralsRemaining());
        l()(null !== n, "Referrals remaining should not be null");
        let o = (0, f.Fg)(),
            x = (0, C.ap)(o) ? y.Z : L.Z,
            p = S.intl.string(S.t.Pcb7KF),
            h = [...a.values()].filter((e) => e === _.Fz.SUCCESS).length;
        return (
            n > 0 && (p = S.intl.formatToPlainString(S.t.iWtOfC, { numReferrals: h })),
            0 === h && (p = S.intl.string(S.t["7VBEue"])),
            (0, r.jsxs)("div", {
                className: w.confrimationContainer,
                children: [
                    (0, r.jsx)(c.P3F, {
                        onClick: i,
                        className: w.closeButtonContainer,
                        children: (0, r.jsx)(c.Dio, {
                            size: "custom",
                            width: 20,
                            height: 20,
                        }),
                    }),
                    (0, r.jsx)(x, { className: w.headerIcon }),
                    (0, r.jsx)(c.Heading, {
                        variant: "heading-lg/bold",
                        className: w.heading,
                        children: p,
                    }),
                    (0, r.jsx)("div", {
                        className: w.confirmedUserContainer,
                        children: s,
                    }),
                    (0, r.jsx)(c.Text, {
                        variant: "text-md/medium",
                        children: S.intl.format(S.t.CZaMHn, {
                            days: v.p,
                            helpdeskArticle: j.Z.getArticleURL(b.BhN.REFERRAL_PROGRAM),
                        }),
                    }),
                ],
            })
        );
    };
