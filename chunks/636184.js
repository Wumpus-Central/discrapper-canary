"use strict";
s.d(t, { h: () => P });
var r = s(627968),
    i = s(64700),
    n = s(503698),
    a = s.n(n),
    l = s(158954),
    u = s(311907),
    c = s(582754),
    o = s(397927),
    d = s(308528),
    E = s(854627),
    _ = s(12901),
    R = s(954571),
    p = s(975571),
    I = s(427262),
    S = s(326084),
    h = s(851746),
    f = s(652215),
    g = s(985018),
    M = s(471449),
    A = s(299148);
let m = (e) => {
        let { recipient: t, status: s, onClose: i } = e,
            { avatarSrc: n, eventHandlers: l } = (0, E.A)({ userId: t?.id, size: o._3J.SIZE_56 }),
            u = I.Ay.getName(t),
            c = s === S.o.FAIL;
        return (0, r.jsxs)("div", {
            className: M.w4,
            children: [
                (0, r.jsx)(o.euF, {
                    imageClassName: a()({ [M.jN]: c }),
                    src: n,
                    "aria-label": u,
                    size: o._3J.SIZE_32,
                    ...l,
                }),
                c
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(o.Text, {
                                  className: M.E0,
                                  variant: "text-md/medium",
                                  color: "text-strong",
                                  children: u,
                              }),
                              (0, r.jsx)(o.Text, {
                                  variant: "text-md/medium",
                                  className: M.nT,
                                  color: "text-strong",
                                  children: g.intl.format(g.t.RO3T4B, { userName: u }),
                              }),
                          ],
                      })
                    : (0, r.jsx)(o.Text, {
                          variant: "text-md/medium",
                          className: M.Pm,
                          color: "text-strong",
                          children: u,
                      }),
                (0, r.jsx)(o.Button, {
                    variant: "secondary",
                    size: "sm",
                    text: g.intl.string(g.t["g33r/P"]),
                    icon: o.oyn,
                    onClick: () => {
                        var e;
                        return (e = t.id), void ((0, _.default)(), d.A.openPrivateChannel({ recipientIds: e }), i());
                    },
                }),
            ],
        });
    },
    P = (e) => {
        let { transitionState: t, results: s, onClose: n, isReminderConfirmation: a } = e,
            d = (0, u.bG)([h.A], () => h.A.getReferralsRemaining());
        R.default.track(f.HAw.REFERRAL_PROGRAM_SHARE_CTA_CLICKED);
        let { reducedMotion: E } = i.useContext(c.CZ);
        return null === d
            ? (0, r.jsx)(o.y$y, {})
            : (0, r.jsx)(l.ExpressiveModal, {
                  graphic: E.enabled ? { src: A.A, type: "image" } : { rive: o.lBW, type: "rive" },
                  gradientColor: "nitro-pink",
                  title:
                      0 === s.filter((e) => e.status === S.o.SUCCESS).length
                          ? g.intl.string(g.t["7VBEue"])
                          : !0 === a
                            ? g.intl.string(g.t.GP5lbq)
                            : g.intl.string(g.t.tKCltd),
                  subtitle:
                      !0 === a
                          ? g.intl.format(g.t["4gJJfD"], { helpdeskArticle: p.A.getArticleURL(f.MVz.REFERRAL_PROGRAM) })
                          : g.intl.format(g.t.AwGSWl, { helpdeskArticle: p.A.getArticleURL(f.MVz.REFERRAL_PROGRAM) }),
                  onClose: n,
                  transitionState: t,
                  children: (0, r.jsx)("div", {
                      className: M.Hz,
                      children: s.map((e) =>
                          (0, r.jsx)(m, { recipient: e.recipient, status: e.status, onClose: n }, e.recipient.id),
                      ),
                  }),
              });
    };
