"use strict";
s.d(t, { h: () => m });
var r = s(627968),
    i = s(64700),
    n = s(503698),
    a = s.n(n),
    l = s(158954),
    c = s(311907),
    u = s(582754),
    o = s(397927),
    E = s(308528),
    d = s(854627),
    _ = s(779733),
    R = s(954571),
    p = s(975571),
    I = s(427262),
    S = s(326084),
    h = s(851746),
    f = s(652215),
    A = s(985018),
    M = s(344684),
    g = s(299148);
let T = (e) => {
        let { recipient: t, status: s, onClose: i } = e,
            { avatarSrc: n, eventHandlers: l } = (0, d.A)({ userId: t?.id, size: o._3J.SIZE_56 }),
            c = I.Ay.getName(t),
            u = s === S.o.FAIL;
        return (0, r.jsxs)("div", {
            className: M.w4,
            children: [
                (0, r.jsx)(o.euF, {
                    imageClassName: a()({ [M.jN]: u }),
                    src: n,
                    "aria-label": c,
                    size: o._3J.SIZE_32,
                    ...l,
                }),
                u
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(o.Text, {
                                  className: M.E0,
                                  variant: "text-md/medium",
                                  color: "text-strong",
                                  children: c,
                              }),
                              (0, r.jsx)(o.Text, {
                                  variant: "text-md/medium",
                                  className: M.nT,
                                  color: "text-strong",
                                  children: A.intl.format(A.t.RO3T4B, { userName: c }),
                              }),
                          ],
                      })
                    : (0, r.jsx)(o.Text, {
                          variant: "text-md/medium",
                          className: M.Pm,
                          color: "text-strong",
                          children: c,
                      }),
                (0, r.jsx)(o.Button, {
                    variant: "secondary",
                    size: "sm",
                    text: A.intl.string(A.t["g33r/P"]),
                    icon: o.oyn,
                    onClick: () => {
                        var e;
                        return (e = t.id), void ((0, _.default)(), E.A.openPrivateChannel({ recipientIds: e }), i());
                    },
                }),
            ],
        });
    },
    m = (e) => {
        let { transitionState: t, results: s, onClose: n, isReminderConfirmation: a } = e,
            E = (0, c.bG)([h.A], () => h.A.getReferralsRemaining());
        R.default.track(f.HAw.REFERRAL_PROGRAM_SHARE_CTA_CLICKED);
        let { reducedMotion: d } = i.useContext(u.CZ);
        return null === E
            ? (0, r.jsx)(o.y$y, {})
            : (0, r.jsx)(l.ExpressiveModal, {
                  graphic: d.enabled ? { src: g.A, type: "image" } : { rive: o.lBW, type: "rive" },
                  gradientColor: "nitro-pink",
                  title:
                      0 === s.filter((e) => e.status === S.o.SUCCESS).length
                          ? A.intl.string(A.t["7VBEue"])
                          : !0 === a
                            ? A.intl.string(A.t.GP5lbq)
                            : A.intl.string(A.t.tKCltd),
                  subtitle:
                      !0 === a
                          ? A.intl.format(A.t["4gJJfD"], { helpdeskArticle: p.A.getArticleURL(f.MVz.REFERRAL_PROGRAM) })
                          : A.intl.format(A.t.AwGSWl, { helpdeskArticle: p.A.getArticleURL(f.MVz.REFERRAL_PROGRAM) }),
                  onClose: n,
                  transitionState: t,
                  children: (0, r.jsx)("div", {
                      className: M.Hz,
                      children: s.map((e) =>
                          (0, r.jsx)(T, { recipient: e.recipient, status: e.status, onClose: n }, e.recipient.id),
                      ),
                  }),
              });
    };
