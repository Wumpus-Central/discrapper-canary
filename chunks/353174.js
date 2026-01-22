s.d(t, {
    A: () => w,
}),
    s(896048);
var i = s(627968);
s(64700);
var a = s(503698),
    l = s.n(a),
    r = s(284009),
    n = s.n(r),
    C = s(311907),
    d = s(990078),
    o = s(582754),
    c = s(397927),
    x = s(308528),
    p = s(398590),
    h = s(736653),
    f = s(854627),
    u = s(186111),
    j = s(975571),
    _ = s(427262),
    m = s(326084),
    g = s(851746),
    L = s(558450),
    y = s(614298);
s(232198);
var v = s(652215),
    b = s(985018),
    A = s(535828);
let S = (e) => {
        let { user: t, trialCreationResult: s, onClose: a } = e,
            { avatarSrc: r, eventHandlers: n } = (0, f.A)({
                userId: null == t ? void 0 : t.id,
                size: c._3J.SIZE_56,
            }),
            C = _.Ay.getName(t),
            o = t.username !== C && s === m.o.SUCCESS,
            h = s === m.o.FAIL;
        return (0, i.jsxs)("div", {
            className: A.El,
            children: [
                (0, i.jsx)(
                    c.euF,
                    (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var s = null != arguments[t] ? arguments[t] : {},
                                i = Object.keys(s);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (i = i.concat(
                                    Object.getOwnPropertySymbols(s).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(s, e).enumerable;
                                    }),
                                )),
                                i.forEach(function (t) {
                                    var i;
                                    (i = s[t]),
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
                            imageClassName: l()({
                                [A.jN]: h,
                            }),
                            src: r,
                            "aria-label": C,
                            size: c._3J.SIZE_56,
                        },
                        n,
                    ),
                ),
                (0, i.jsxs)("div", {
                    className: A.Dp,
                    children: [
                        h
                            ? (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(c.Text, {
                                          className: A.E0,
                                          variant: "text-md/medium",
                                          children: C,
                                      }),
                                      (0, i.jsx)(c.Text, {
                                          variant: "text-md/medium",
                                          className: A.nT,
                                          children: b.intl.format(b.t.RO3T4B, {
                                              userName: C,
                                          }),
                                      }),
                                  ],
                              })
                            : (0, i.jsx)(d.m, {
                                  asContainer: !0,
                                  text: b.intl.string(b.t.xkVQPN),
                                  position: "right",
                                  children: (0, i.jsx)(c.DUT, {
                                      onClick: () => {
                                          var e;
                                          return (
                                              (e = t.id),
                                              void (u.A.hasLayers() && (0, p.jH)(),
                                              x.A.openPrivateChannel({
                                                  recipientIds: e,
                                              }),
                                              a())
                                          );
                                      },
                                      className: A.t0,
                                      children: (0, i.jsx)(c.Text, {
                                          variant: "text-md/medium",
                                          className: A.QC,
                                          children: C,
                                      }),
                                  }),
                              }),
                        o &&
                            (0, i.jsx)(c.Text, {
                                variant: "text-md/medium",
                                className: A.nT,
                                children: t.username,
                            }),
                    ],
                }),
            ],
        });
    },
    w = (e) => {
        let { selectedUsers: t, trialCreationResult: s, onClose: a } = e,
            l = [...t].map((e) =>
                (0, i.jsx)(
                    S,
                    {
                        user: e,
                        trialCreationResult: s.get(e.id),
                        onClose: a,
                    },
                    e.id,
                ),
            ),
            r = (0, C.bG)([g.A], () => g.A.getReferralsRemaining());
        n()(null !== r, "Referrals remaining should not be null");
        let d = (0, h.DP)(),
            x = (0, o.qB)(d) ? y.A : L.A,
            p = b.intl.string(b.t.Pcb7KF),
            f = [...s.values()].filter((e) => e === m.o.SUCCESS).length;
        return (
            r > 0 &&
                (p = b.intl.formatToPlainString(b.t.iWtOfC, {
                    numReferrals: f,
                })),
            0 === f && (p = b.intl.string(b.t["7VBEue"])),
            (0, i.jsxs)("div", {
                className: A.Jc,
                children: [
                    (0, i.jsx)(c.DUT, {
                        onClick: a,
                        className: A.cG,
                        children: (0, i.jsx)(c.PGe, {
                            size: "custom",
                            width: 20,
                            height: 20,
                        }),
                    }),
                    (0, i.jsx)(x, {
                        className: A.nr,
                    }),
                    (0, i.jsx)(c.Heading, {
                        variant: "heading-lg/bold",
                        className: A.R_,
                        children: p,
                    }),
                    (0, i.jsx)("div", {
                        className: A.wj,
                        children: l,
                    }),
                    (0, i.jsx)(c.Text, {
                        variant: "text-md/medium",
                        children: b.intl.format(b.t.CZaMHn, {
                            days: 10,
                            helpdeskArticle: j.A.getArticleURL(v.MVz.REFERRAL_PROGRAM),
                        }),
                    }),
                ],
            })
        );
    };
