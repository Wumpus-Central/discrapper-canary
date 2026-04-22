s.d(t, { A: () => M });
var i = s(627968);
s(64700);
var r = s(503698),
    a = s.n(r),
    l = s(284009),
    n = s.n(l),
    C = s(311907),
    d = s(990078),
    o = s(462887),
    c = s(778712),
    x = s(97808),
    h = s(834730),
    p = s(939249),
    _ = s(789645),
    f = s(534514),
    u = s(308528),
    j = s(398590),
    m = s(736653),
    g = s(854627),
    L = s(186111),
    y = s(975571),
    v = s(427262),
    A = s(326084),
    S = s(851746),
    w = s(747115),
    N = s(344565);
s(232198);
var E = s(652215),
    b = s(985018),
    F = s(31794);
let U = (e) => {
        let { user: t, trialCreationResult: s, onClose: r } = e,
            { avatarSrc: l, eventHandlers: n } = (0, g.A)({ userId: t?.id, size: c._3.SIZE_56 }),
            C = v.Ay.getName(t),
            o = t.username !== C && s === A.o.SUCCESS,
            _ = s === A.o.FAIL;
        return (0, i.jsxs)("div", {
            className: F.El,
            children: [
                (0, i.jsx)(x.eu, {
                    imageClassName: a()({ [F.jN]: _ }),
                    src: l,
                    "aria-label": C,
                    size: c._3.SIZE_56,
                    ...n,
                }),
                (0, i.jsxs)("div", {
                    className: F.Dp,
                    children: [
                        _
                            ? (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(h.E, { className: F.E0, variant: "text-md/medium", children: C }),
                                      (0, i.jsx)(h.E, {
                                          variant: "text-md/medium",
                                          className: F.nT,
                                          children: b.intl.format(b.t.RO3T4B, { userName: C }),
                                      }),
                                  ],
                              })
                            : (0, i.jsx)(d.m, {
                                  asContainer: !0,
                                  text: b.intl.string(b.t.xkVQPN),
                                  position: "right",
                                  children: (0, i.jsx)(p.D, {
                                      onClick: () => {
                                          var e;
                                          return (
                                              (e = t.id),
                                              void (L.A.hasLayers() && (0, j.jH)(),
                                              u.A.openPrivateChannel({ recipientIds: e }),
                                              r())
                                          );
                                      },
                                      className: F.t0,
                                      children: (0, i.jsx)(h.E, {
                                          variant: "text-md/medium",
                                          className: F.QC,
                                          children: C,
                                      }),
                                  }),
                              }),
                        o && (0, i.jsx)(h.E, { variant: "text-md/medium", className: F.nT, children: t.username }),
                    ],
                }),
            ],
        });
    },
    M = (e) => {
        let { selectedUsers: t, trialCreationResult: s, onClose: r } = e,
            a = [...t].map((e) => (0, i.jsx)(U, { user: e, trialCreationResult: s.get(e.id), onClose: r }, e.id)),
            l = (0, C.bG)([S.A], () => S.A.getReferralsRemaining());
        n()(null !== l, "Referrals remaining should not be null");
        let d = (0, m.DP)(),
            c = (0, o.q)(d) ? N.A : w.A,
            x = b.intl.string(b.t.Pcb7KF),
            u = [...s.values()].filter((e) => e === A.o.SUCCESS).length;
        return (
            l > 0 && (x = b.intl.formatToPlainString(b.t.iWtOfC, { numReferrals: u })),
            0 === u && (x = b.intl.string(b.t["7VBEue"])),
            (0, i.jsxs)("div", {
                className: F.Jc,
                children: [
                    (0, i.jsx)(p.D, {
                        onClick: r,
                        className: F.cG,
                        children: (0, i.jsx)(_.P, { size: "custom", width: 20, height: 20 }),
                    }),
                    (0, i.jsx)(c, { className: F.nr }),
                    (0, i.jsx)(f.D, { variant: "heading-lg/bold", className: F.R_, children: x }),
                    (0, i.jsx)("div", { className: F.wj, children: a }),
                    (0, i.jsx)(h.E, {
                        variant: "text-md/medium",
                        children: b.intl.format(b.t.CZaMHn, {
                            days: 10,
                            helpdeskArticle: y.A.getArticleURL(E.MVz.REFERRAL_PROGRAM),
                        }),
                    }),
                ],
            })
        );
    };
