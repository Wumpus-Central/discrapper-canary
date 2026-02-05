n.d(t, { h: () => v });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(158954),
    o = n(311907),
    d = n(582754),
    c = n(397927),
    u = n(308528),
    m = n(854627),
    _ = n(12901),
    h = n(954571),
    p = n(975571),
    g = n(427262),
    A = n(326084),
    f = n(851746),
    x = n(652215),
    E = n(985018),
    C = n(185914),
    I = n(299148);
let T = (e) => {
        let { recipient: t, status: n, onClose: l } = e,
            { avatarSrc: a, eventHandlers: s } = (0, m.A)({ userId: t?.id, size: c._3J.SIZE_56 }),
            o = g.Ay.getName(t),
            d = n === A.o.FAIL;
        return (0, i.jsxs)("div", {
            className: C.w4,
            children: [
                (0, i.jsx)(c.euF, {
                    imageClassName: r()({ [C.jN]: d }),
                    src: a,
                    "aria-label": o,
                    size: c._3J.SIZE_32,
                    ...s,
                }),
                d
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(c.Text, {
                                  className: C.E0,
                                  variant: "text-md/medium",
                                  color: "text-strong",
                                  children: o,
                              }),
                              (0, i.jsx)(c.Text, {
                                  variant: "text-md/medium",
                                  className: C.nT,
                                  color: "text-strong",
                                  children: E.intl.format(E.t.RO3T4B, { userName: o }),
                              }),
                          ],
                      })
                    : (0, i.jsx)(c.Text, {
                          variant: "text-md/medium",
                          className: C.Pm,
                          color: "text-strong",
                          children: o,
                      }),
                (0, i.jsx)(c.Button, {
                    variant: "secondary",
                    size: "sm",
                    text: E.intl.string(E.t["g33r/P"]),
                    icon: c.oyn,
                    onClick: () => {
                        var e;
                        return (e = t.id), void ((0, _.default)(), u.A.openPrivateChannel({ recipientIds: e }), l());
                    },
                }),
            ],
        });
    },
    v = (e) => {
        let { results: t, onClose: n, isReminderConfirmation: a } = e,
            r = (0, o.bG)([f.A], () => f.A.getReferralsRemaining());
        h.default.track(x.HAw.REFERRAL_PROGRAM_SHARE_CTA_CLICKED);
        let { reducedMotion: u } = l.useContext(d.CZ);
        return null === r
            ? (0, i.jsx)(c.y$y, {})
            : (0, i.jsx)(s.ExpressiveModal, {
                  graphic: u.enabled ? { src: I.A, type: "image" } : { rive: c.lBW, type: "rive" },
                  gradientColor: "nitro-pink",
                  title:
                      0 === t.filter((e) => e.status === A.o.SUCCESS).length
                          ? E.intl.string(E.t["7VBEue"])
                          : !0 === a
                            ? E.intl.string(E.t.GP5lbq)
                            : E.intl.string(E.t.tKCltd),
                  subtitle:
                      !0 === a
                          ? E.intl.format(E.t["4gJJfD"], { helpdeskArticle: p.A.getArticleURL(x.MVz.REFERRAL_PROGRAM) })
                          : E.intl.format(E.t.AwGSWl, { helpdeskArticle: p.A.getArticleURL(x.MVz.REFERRAL_PROGRAM) }),
                  onClose: n,
                  transitionState: s.ip4.ENTERED,
                  children: (0, i.jsx)("div", {
                      className: C.Hz,
                      children: t.map((e) =>
                          (0, i.jsx)(T, { recipient: e.recipient, status: e.status, onClose: n }, e.recipient.id),
                      ),
                  }),
              });
    };
