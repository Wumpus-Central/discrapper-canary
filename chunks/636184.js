s.d(t, { h: () => j });
var i = s(627968),
    a = s(64700),
    n = s(503698),
    l = s.n(n),
    r = s(158954),
    c = s(311907),
    o = s(582754),
    d = s(397927),
    u = s(308528),
    A = s(854627),
    m = s(779733),
    h = s(954571),
    R = s(975571),
    f = s(427262),
    g = s(326084),
    x = s(851746),
    E = s(652215),
    p = s(985018),
    _ = s(471449),
    S = s(299148);
let T = (e) => {
        let { recipient: t, status: s, onClose: a } = e,
            { avatarSrc: n, eventHandlers: r } = (0, A.A)({ userId: t?.id, size: d._3J.SIZE_56 }),
            c = f.Ay.getName(t),
            o = s === g.o.FAIL;
        return (0, i.jsxs)("div", {
            className: _.w4,
            children: [
                (0, i.jsx)(d.euF, {
                    imageClassName: l()({ [_.jN]: o }),
                    src: n,
                    "aria-label": c,
                    size: d._3J.SIZE_32,
                    ...r,
                }),
                o
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(d.Text, {
                                  className: _.E0,
                                  variant: "text-md/medium",
                                  color: "text-strong",
                                  children: c,
                              }),
                              (0, i.jsx)(d.Text, {
                                  variant: "text-md/medium",
                                  className: _.nT,
                                  color: "text-strong",
                                  children: p.intl.format(p.t.RO3T4B, { userName: c }),
                              }),
                          ],
                      })
                    : (0, i.jsx)(d.Text, {
                          variant: "text-md/medium",
                          className: _.Pm,
                          color: "text-strong",
                          children: c,
                      }),
                (0, i.jsx)(d.Button, {
                    variant: "secondary",
                    size: "sm",
                    text: p.intl.string(p.t["g33r/P"]),
                    icon: d.oyn,
                    onClick: () => {
                        var e;
                        return (e = t.id), void ((0, m.default)(), u.A.openPrivateChannel({ recipientIds: e }), a());
                    },
                }),
            ],
        });
    },
    j = (e) => {
        let { transitionState: t, results: s, onClose: n, isReminderConfirmation: l } = e,
            u = (0, c.bG)([x.A], () => x.A.getReferralsRemaining());
        h.default.track(E.HAw.REFERRAL_PROGRAM_SHARE_CTA_CLICKED);
        let { reducedMotion: A } = a.useContext(o.CZ);
        return null === u
            ? (0, i.jsx)(d.y$y, {})
            : (0, i.jsx)(r.ExpressiveModal, {
                  graphic: A.enabled ? { src: S.A, type: "image" } : { rive: d.lBW, type: "rive" },
                  gradientColor: "nitro-pink",
                  title:
                      0 === s.filter((e) => e.status === g.o.SUCCESS).length
                          ? p.intl.string(p.t["7VBEue"])
                          : !0 === l
                            ? p.intl.string(p.t.GP5lbq)
                            : p.intl.string(p.t.tKCltd),
                  subtitle:
                      !0 === l
                          ? p.intl.format(p.t["4gJJfD"], { helpdeskArticle: R.A.getArticleURL(E.MVz.REFERRAL_PROGRAM) })
                          : p.intl.format(p.t.AwGSWl, { helpdeskArticle: R.A.getArticleURL(E.MVz.REFERRAL_PROGRAM) }),
                  onClose: n,
                  transitionState: t,
                  children: (0, i.jsx)("div", {
                      className: _.Hz,
                      children: s.map((e) =>
                          (0, i.jsx)(T, { recipient: e.recipient, status: e.status, onClose: n }, e.recipient.id),
                      ),
                  }),
              });
    };
