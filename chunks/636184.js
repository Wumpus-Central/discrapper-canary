n.d(t, {
    h: () => E,
});
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(158954),
    o = n(311907),
    c = n(582754),
    u = n(397927),
    d = n(308528),
    p = n(854627),
    m = n(12901),
    f = n(954571),
    g = n(975571),
    h = n(427262),
    _ = n(326084),
    b = n(851746),
    A = n(652215),
    y = n(985018),
    v = n(185914),
    x = n(299148);
let O = (e) => {
        let { recipient: t, status: n, onClose: i } = e,
            { avatarSrc: l, eventHandlers: s } = (0, p.A)({
                userId: null == t ? void 0 : t.id,
                size: u._3J.SIZE_56,
            }),
            o = h.Ay.getName(t),
            c = n === _.o.FAIL;
        return (0, r.jsxs)("div", {
            className: v.w4,
            children: [
                (0, r.jsx)(
                    u.euF,
                    (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    }),
                                )),
                                r.forEach(function (t) {
                                    var r;
                                    (r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = r);
                                });
                        }
                        return e;
                    })(
                        {
                            imageClassName: a()({
                                [v.jN]: c,
                            }),
                            src: l,
                            "aria-label": o,
                            size: u._3J.SIZE_32,
                        },
                        s,
                    ),
                ),
                c
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(u.Text, {
                                  className: v.E0,
                                  variant: "text-md/medium",
                                  color: "text-strong",
                                  children: o,
                              }),
                              (0, r.jsx)(u.Text, {
                                  variant: "text-md/medium",
                                  className: v.nT,
                                  color: "text-strong",
                                  children: y.intl.format(y.t.RO3T4B, {
                                      userName: o,
                                  }),
                              }),
                          ],
                      })
                    : (0, r.jsx)(u.Text, {
                          variant: "text-md/medium",
                          className: v.Pm,
                          color: "text-strong",
                          children: o,
                      }),
                (0, r.jsx)(u.Button, {
                    variant: "secondary",
                    size: "sm",
                    text: y.intl.string(y.t["g33r/P"]),
                    icon: u.oyn,
                    onClick: () => {
                        var e;
                        return (
                            (e = t.id),
                            void ((0, m.default)(),
                            d.A.openPrivateChannel({
                                recipientIds: e,
                            }),
                            i())
                        );
                    },
                }),
            ],
        });
    },
    E = (e) => {
        let { results: t, onClose: n, isReminderConfirmation: l } = e,
            a = (0, o.bG)([b.A], () => b.A.getReferralsRemaining());
        f.default.track(A.HAw.REFERRAL_PROGRAM_SHARE_CTA_CLICKED);
        let { reducedMotion: d } = i.useContext(c.CZ);
        return null === a
            ? (0, r.jsx)(u.y$y, {})
            : (0, r.jsx)(s.ExpressiveModal, {
                  graphic: d.enabled
                      ? {
                            src: x.A,
                            type: "image",
                        }
                      : {
                            rive: u.lBW,
                            type: "rive",
                        },
                  gradientColor: "nitro-pink",
                  title:
                      0 === t.filter((e) => e.status === _.o.SUCCESS).length
                          ? y.intl.string(y.t["7VBEue"])
                          : !0 === l
                            ? y.intl.string(y.t.GP5lbq)
                            : y.intl.string(y.t.tKCltd),
                  subtitle:
                      !0 === l
                          ? y.intl.format(y.t["4gJJfD"], {
                                helpdeskArticle: g.A.getArticleURL(A.MVz.REFERRAL_PROGRAM),
                            })
                          : y.intl.format(y.t.AwGSWl, {
                                helpdeskArticle: g.A.getArticleURL(A.MVz.REFERRAL_PROGRAM),
                            }),
                  onClose: n,
                  transitionState: s.ip4.ENTERED,
                  children: (0, r.jsx)("div", {
                      className: v.Hz,
                      children: t.map((e) =>
                          (0, r.jsx)(
                              O,
                              {
                                  recipient: e.recipient,
                                  status: e.status,
                                  onClose: n,
                              },
                              e.recipient.id,
                          ),
                      ),
                  }),
              });
    };
