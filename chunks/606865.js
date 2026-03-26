s.d(t, { A: () => N });
var i = s(627968);
s(64700);
var r = s(503698),
    a = s.n(r),
    l = s(284009),
    n = s.n(l),
    C = s(311907),
    d = s(990078),
    o = s(582754),
    c = s(397927),
    x = s(308528),
    h = s(398590),
    p = s(736653),
    _ = s(854627),
    f = s(186111),
    u = s(975571),
    j = s(427262),
    m = s(326084),
    g = s(851746),
    L = s(747115),
    y = s(344565);
s(232198);
var v = s(652215),
    A = s(985018),
    S = s(408789);
let w = (e) => {
        let { user: t, trialCreationResult: s, onClose: r } = e,
            { avatarSrc: l, eventHandlers: n } = (0, _.A)({ userId: t?.id, size: c._3J.SIZE_56 }),
            C = j.Ay.getName(t),
            o = t.username !== C && s === m.o.SUCCESS,
            p = s === m.o.FAIL;
        return (0, i.jsxs)("div", {
            className: S.El,
            children: [
                (0, i.jsx)(c.euF, {
                    imageClassName: a()({ [S.jN]: p }),
                    src: l,
                    "aria-label": C,
                    size: c._3J.SIZE_56,
                    ...n,
                }),
                (0, i.jsxs)("div", {
                    className: S.Dp,
                    children: [
                        p
                            ? (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(c.Text, { className: S.E0, variant: "text-md/medium", children: C }),
                                      (0, i.jsx)(c.Text, {
                                          variant: "text-md/medium",
                                          className: S.nT,
                                          children: A.intl.format(A.t.RO3T4B, { userName: C }),
                                      }),
                                  ],
                              })
                            : (0, i.jsx)(d.m, {
                                  asContainer: !0,
                                  text: A.intl.string(A.t.xkVQPN),
                                  position: "right",
                                  children: (0, i.jsx)(c.DUT, {
                                      onClick: () => {
                                          var e;
                                          return (
                                              (e = t.id),
                                              void (f.A.hasLayers() && (0, h.jH)(),
                                              x.A.openPrivateChannel({ recipientIds: e }),
                                              r())
                                          );
                                      },
                                      className: S.t0,
                                      children: (0, i.jsx)(c.Text, {
                                          variant: "text-md/medium",
                                          className: S.QC,
                                          children: C,
                                      }),
                                  }),
                              }),
                        o && (0, i.jsx)(c.Text, { variant: "text-md/medium", className: S.nT, children: t.username }),
                    ],
                }),
            ],
        });
    },
    N = (e) => {
        let { selectedUsers: t, trialCreationResult: s, onClose: r } = e,
            a = [...t].map((e) => (0, i.jsx)(w, { user: e, trialCreationResult: s.get(e.id), onClose: r }, e.id)),
            l = (0, C.bG)([g.A], () => g.A.getReferralsRemaining());
        n()(null !== l, "Referrals remaining should not be null");
        let d = (0, p.DP)(),
            x = (0, o.qB)(d) ? y.A : L.A,
            h = A.intl.string(A.t.Pcb7KF),
            _ = [...s.values()].filter((e) => e === m.o.SUCCESS).length;
        return (
            l > 0 && (h = A.intl.formatToPlainString(A.t.iWtOfC, { numReferrals: _ })),
            0 === _ && (h = A.intl.string(A.t["7VBEue"])),
            (0, i.jsxs)("div", {
                className: S.Jc,
                children: [
                    (0, i.jsx)(c.DUT, {
                        onClick: r,
                        className: S.cG,
                        children: (0, i.jsx)(c.PGe, { size: "custom", width: 20, height: 20 }),
                    }),
                    (0, i.jsx)(x, { className: S.nr }),
                    (0, i.jsx)(c.Heading, { variant: "heading-lg/bold", className: S.R_, children: h }),
                    (0, i.jsx)("div", { className: S.wj, children: a }),
                    (0, i.jsx)(c.Text, {
                        variant: "text-md/medium",
                        children: A.intl.format(A.t.CZaMHn, {
                            days: 10,
                            helpdeskArticle: u.A.getArticleURL(v.MVz.REFERRAL_PROGRAM),
                        }),
                    }),
                ],
            })
        );
    };
