r.d(t, { Z: () => Z }), r(388685);
var i = r(54381);
r(473749);
var a = r(120356),
    s = r.n(a),
    n = r(512722),
    l = r.n(n),
    o = r(442837),
    C = r(28664),
    d = r(780384),
    c = r(481060),
    x = r(493683),
    p = r(37234),
    f = r(410030),
    h = r(518950),
    u = r(819640),
    j = r(63063),
    m = r(51144),
    _ = r(281494),
    g = r(276444),
    L = r(792451),
    y = r(814667),
    v = r(263885),
    S = r(981631),
    b = r(388032),
    w = r(436931);
let N = (e) => {
        let { user: t, trialCreationResult: r, onClose: a } = e,
            { avatarSrc: n, eventHandlers: l } = (0, h.Z)({
                userId: null == t ? void 0 : t.id,
                size: c.EFr.SIZE_56,
            }),
            o = m.ZP.getName(t),
            d = t.username !== o && r === _.Fz.SUCCESS,
            f = r === _.Fz.FAIL;
        return (0, i.jsxs)("div", {
            className: w.referredUserRowContainer,
            children: [
                (0, i.jsx)(
                    c.qEK,
                    (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {},
                                i = Object.keys(r);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (i = i.concat(
                                    Object.getOwnPropertySymbols(r).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                    }),
                                )),
                                i.forEach(function (t) {
                                    var i;
                                    (i = r[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: i,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = i);
                                });
                        }
                        return e;
                    })(
                        {
                            imageClassName: s()({ [w.erroredAvatar]: f }),
                            src: n,
                            "aria-label": o,
                            size: c.EFr.SIZE_56,
                        },
                        l,
                    ),
                ),
                (0, i.jsxs)("div", {
                    className: w.referredUserRowBody,
                    children: [
                        f
                            ? (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(c.Text, {
                                          className: w.errorDisplayName,
                                          variant: "text-md/medium",
                                          children: o,
                                      }),
                                      (0, i.jsx)(c.Text, {
                                          variant: "text-md/medium",
                                          className: w.userName,
                                          children: b.intl.format(b.t.RO3T4B, { userName: o }),
                                      }),
                                  ],
                              })
                            : (0, i.jsx)(C.u, {
                                  asContainer: !0,
                                  text: b.intl.string(b.t.xkVQPN),
                                  position: "right",
                                  children: (0, i.jsx)(c.P3F, {
                                      onClick: () => {
                                          var e;
                                          return (
                                              (e = t.id),
                                              void (u.Z.hasLayers() && (0, p.xf)(),
                                              x.Z.openPrivateChannel({ recipientIds: e }),
                                              a())
                                          );
                                      },
                                      className: w.displayNameClickableContainer,
                                      children: (0, i.jsx)(c.Text, {
                                          variant: "text-md/medium",
                                          className: w.displayName,
                                          children: o,
                                      }),
                                  }),
                              }),
                        d &&
                            (0, i.jsx)(c.Text, {
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
        let { selectedUsers: t, trialCreationResult: r, onClose: a } = e,
            s = [...t].map((e) =>
                (0, i.jsx)(
                    N,
                    {
                        user: e,
                        trialCreationResult: r.get(e.id),
                        onClose: a,
                    },
                    e.id,
                ),
            ),
            n = (0, o.e7)([g.Z], () => g.Z.getReferralsRemaining());
        l()(null !== n, "Referrals remaining should not be null");
        let C = (0, f.Fg)(),
            x = (0, d.ap)(C) ? y.Z : L.Z,
            p = b.intl.string(b.t.Pcb7KF),
            h = [...r.values()].filter((e) => e === _.Fz.SUCCESS).length;
        return (
            n > 0 && (p = b.intl.formatToPlainString(b.t.iWtOfC, { numReferrals: h })),
            0 === h && (p = b.intl.string(b.t["7VBEue"])),
            (0, i.jsxs)("div", {
                className: w.confrimationContainer,
                children: [
                    (0, i.jsx)(c.P3F, {
                        onClick: a,
                        className: w.closeButtonContainer,
                        children: (0, i.jsx)(c.Dio, {
                            size: "custom",
                            width: 20,
                            height: 20,
                        }),
                    }),
                    (0, i.jsx)(x, { className: w.headerIcon }),
                    (0, i.jsx)(c.Heading, {
                        variant: "heading-lg/bold",
                        className: w.heading,
                        children: p,
                    }),
                    (0, i.jsx)("div", {
                        className: w.confirmedUserContainer,
                        children: s,
                    }),
                    (0, i.jsx)(c.Text, {
                        variant: "text-md/medium",
                        children: b.intl.format(b.t.CZaMHn, {
                            days: v.p,
                            helpdeskArticle: j.Z.getArticleURL(S.BhN.REFERRAL_PROGRAM),
                        }),
                    }),
                ],
            })
        );
    };
