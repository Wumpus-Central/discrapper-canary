n.d(t, { h: () => S });
var r = n(627968),
    a = n(64700),
    i = n(503698),
    s = n.n(i),
    l = n(772707),
    c = n(311907),
    o = n(844222),
    d = n(778712),
    u = n(97808),
    _ = n(834730),
    m = n(821609),
    p = n(534890),
    f = n(289873),
    A = n(498101),
    g = n(308528),
    h = n(854627),
    b = n(779733),
    x = n(954571),
    C = n(975571),
    v = n(427262),
    R = n(326084),
    N = n(851746),
    E = n(652215),
    j = n(985018),
    T = n(494025),
    y = n(299148);
let I = (e) => {
        let { recipient: t, status: n, onClose: a } = e,
            { avatarSrc: i, eventHandlers: l } = (0, h.A)({ userId: t?.id, size: d._3.SIZE_56 }),
            c = v.Ay.getName(t),
            o = n === R.o.FAIL;
        return (0, r.jsxs)("div", {
            className: T.w4,
            children: [
                (0, r.jsx)(u.eu, {
                    imageClassName: s()({ [T.jN]: o }),
                    src: i,
                    "aria-label": c,
                    size: d._3.SIZE_32,
                    ...l,
                }),
                o
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(_.E, {
                                  className: T.E0,
                                  variant: "text-md/medium",
                                  color: "text-strong",
                                  children: c,
                              }),
                              (0, r.jsx)(_.E, {
                                  variant: "text-md/medium",
                                  className: T.nT,
                                  color: "text-strong",
                                  children: j.intl.format(j.t.RO3T4B, { userName: c }),
                              }),
                          ],
                      })
                    : (0, r.jsx)(_.E, {
                          variant: "text-md/medium",
                          className: T.Pm,
                          color: "text-strong",
                          children: c,
                      }),
                (0, r.jsx)(m.$, {
                    variant: "secondary",
                    size: "sm",
                    text: j.intl.string(j.t["g33r/P"]),
                    icon: p.o,
                    onClick: () => {
                        var e;
                        return (e = t.id), void ((0, b.default)(), g.A.openPrivateChannel({ recipientIds: e }), a());
                    },
                }),
            ],
        });
    },
    S = (e) => {
        let { transitionState: t, results: n, onClose: i, isReminderConfirmation: s } = e,
            d = (0, c.bG)([N.A], () => N.A.getReferralsRemaining());
        x.default.track(E.HAw.REFERRAL_PROGRAM_SHARE_CTA_CLICKED);
        let { reducedMotion: u } = a.useContext(o.C);
        return null === d
            ? (0, r.jsx)(f.y, {})
            : (0, r.jsx)(l.k, {
                  graphic: u.enabled ? { src: y.A, type: "image" } : { rive: A.l, type: "rive" },
                  gradientColor: "nitro-pink",
                  title:
                      0 === n.filter((e) => e.status === R.o.SUCCESS).length
                          ? j.intl.string(j.t["7VBEue"])
                          : !0 === s
                            ? j.intl.string(j.t.GP5lbq)
                            : j.intl.string(j.t.tKCltd),
                  subtitle:
                      !0 === s
                          ? j.intl.format(j.t["4gJJfD"], { helpdeskArticle: C.A.getArticleURL(E.MVz.REFERRAL_PROGRAM) })
                          : j.intl.format(j.t.AwGSWl, { helpdeskArticle: C.A.getArticleURL(E.MVz.REFERRAL_PROGRAM) }),
                  onClose: i,
                  transitionState: t,
                  children: (0, r.jsx)("div", {
                      className: T.Hz,
                      children: n.map((e) =>
                          (0, r.jsx)(I, { recipient: e.recipient, status: e.status, onClose: i }, e.recipient.id),
                      ),
                  }),
              });
    };
