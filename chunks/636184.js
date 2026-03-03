n.d(t, { h: () => N });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(158954),
    o = n(311907),
    c = n(582754),
    d = n(397927),
    u = n(308528),
    m = n(854627),
    _ = n(12901),
    A = n(954571),
    f = n(975571),
    h = n(427262),
    g = n(326084),
    E = n(851746),
    p = n(652215),
    x = n(985018),
    C = n(185914),
    I = n(299148);
let T = (e) => {
        let { recipient: t, status: n, onClose: l } = e,
            { avatarSrc: a, eventHandlers: s } = (0, m.A)({ userId: t?.id, size: d._3J.SIZE_56 }),
            o = h.Ay.getName(t),
            c = n === g.o.FAIL;
        return (0, i.jsxs)("div", {
            className: C.w4,
            children: [
                (0, i.jsx)(d.euF, {
                    imageClassName: r()({ [C.jN]: c }),
                    src: a,
                    "aria-label": o,
                    size: d._3J.SIZE_32,
                    ...s,
                }),
                c
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(d.Text, {
                                  className: C.E0,
                                  variant: "text-md/medium",
                                  color: "text-strong",
                                  children: o,
                              }),
                              (0, i.jsx)(d.Text, {
                                  variant: "text-md/medium",
                                  className: C.nT,
                                  color: "text-strong",
                                  children: x.intl.format(x.t.RO3T4B, { userName: o }),
                              }),
                          ],
                      })
                    : (0, i.jsx)(d.Text, {
                          variant: "text-md/medium",
                          className: C.Pm,
                          color: "text-strong",
                          children: o,
                      }),
                (0, i.jsx)(d.Button, {
                    variant: "secondary",
                    size: "sm",
                    text: x.intl.string(x.t["g33r/P"]),
                    icon: d.oyn,
                    onClick: () => {
                        var e;
                        return (e = t.id), void ((0, _.default)(), u.A.openPrivateChannel({ recipientIds: e }), l());
                    },
                }),
            ],
        });
    },
    N = (e) => {
        let { transitionState: t, results: n, onClose: a, isReminderConfirmation: r } = e,
            u = (0, o.bG)([E.A], () => E.A.getReferralsRemaining());
        A.default.track(p.HAw.REFERRAL_PROGRAM_SHARE_CTA_CLICKED);
        let { reducedMotion: m } = l.useContext(c.CZ);
        return null === u
            ? (0, i.jsx)(d.y$y, {})
            : (0, i.jsx)(s.ExpressiveModal, {
                  graphic: m.enabled ? { src: I.A, type: "image" } : { rive: d.lBW, type: "rive" },
                  gradientColor: "nitro-pink",
                  title:
                      0 === n.filter((e) => e.status === g.o.SUCCESS).length
                          ? x.intl.string(x.t["7VBEue"])
                          : !0 === r
                            ? x.intl.string(x.t.GP5lbq)
                            : x.intl.string(x.t.tKCltd),
                  subtitle:
                      !0 === r
                          ? x.intl.format(x.t["4gJJfD"], { helpdeskArticle: f.A.getArticleURL(p.MVz.REFERRAL_PROGRAM) })
                          : x.intl.format(x.t.AwGSWl, { helpdeskArticle: f.A.getArticleURL(p.MVz.REFERRAL_PROGRAM) }),
                  onClose: a,
                  transitionState: t,
                  children: (0, i.jsx)("div", {
                      className: C.Hz,
                      children: n.map((e) =>
                          (0, i.jsx)(T, { recipient: e.recipient, status: e.status, onClose: a }, e.recipient.id),
                      ),
                  }),
              });
    };
