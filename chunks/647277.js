n.d(t, { _: () => C }), n(388685);
var i = n(951288),
    r = n(442837),
    s = n(481060),
    a = n(518950),
    l = n(626135),
    o = n(63063),
    c = n(51144),
    d = n(281494),
    u = n(276444),
    m = n(796634),
    p = n(656139),
    g = n(981631),
    h = n(388032),
    f = n(756555),
    b = n(295234);
function x(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
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
}
let _ = (e) => {
        let { startingScreen: t, analyticsLocations: r } = e;
        l.default.track(g.rMx.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, { location_stack: r }),
            (0, s.ZDy)(async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 656139));
                return (n) => {
                    var r, s;
                    return (0, i.jsx)(
                        e,
                        ((r = x({}, n)),
                        (s = s = { startingScreen: t }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(s))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var i = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, i);
                                  }
                                  return n;
                              })(Object(s)).forEach(function (e) {
                                  Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(s, e));
                              }),
                        r),
                    );
                };
            });
    },
    j = (e) => {
        let { user: t } = e,
            { avatarSrc: n, eventHandlers: r } = (0, a.Z)({
                userId: t.id,
                size: s.EFr.SIZE_24,
            });
        return (0, i.jsx)(
            s.qEK,
            x(
                {
                    className: f.reminderAvatar,
                    src: n,
                    "aria-label": (0, c.oY)(t),
                    size: s.EFr.SIZE_24,
                },
                r,
            ),
            t.id,
        );
    },
    E = (e) => {
        let { referralSentUsers: t, allRedeemed: n } = e;
        return (0, i.jsxs)("div", {
            className: f.reminderContainer,
            children: [
                (0, i.jsxs)("div", {
                    className: f.remindersSentContainer,
                    children: [
                        t.map((e) => (0, i.jsx)(j, { user: e }, e.id)),
                        (0, i.jsx)(s.Text, {
                            variant: "text-md/medium",
                            color: "text-primary",
                            className: f.reminderAvatarText,
                            children: ((e) => {
                                let { recipientNames: t } = e,
                                    [n, i, r] = t;
                                return 1 === t.length
                                    ? h.intl.format(h.t["B/IYFR"], { recipientName: n })
                                    : 2 === t.length
                                      ? h.intl.format(h.t.uIOxcH, {
                                            firstRecipientName: n,
                                            secondRecipientName: i,
                                        })
                                      : 3 === t.length
                                        ? h.intl.format(h.t["1k64R0"], {
                                              firstRecipientName: n,
                                              secondRecipientName: i,
                                              thirdRecipientName: r,
                                          })
                                        : "";
                            })({ recipientNames: t.map((e) => (0, c.oY)(e)) }),
                        }),
                    ],
                }),
                (0, i.jsx)(s.zxk, {
                    variant: "secondary",
                    size: "sm",
                    disabled: n,
                    text: h.intl.string(h.t.NPCYFR),
                    onClick: () =>
                        _({
                            startingScreen: p.K.REMINDER,
                            analyticsLocations: [],
                        }),
                }),
            ],
        });
    },
    C = () => {
        let { referralSentUsers: e } = (0, m.G)(),
            t = (0, r.e7)([u.Z], () => u.Z.getRecipientStatus())
                .values()
                .every((e) => e === d.Fe.REDEEMED);
        return (0, i.jsxs)("div", {
            className: f.container,
            children: [
                (0, i.jsxs)("div", {
                    className: f.bannerContainer,
                    children: [
                        (0, i.jsx)(s.Eep, {
                            src: b.Z,
                            height: 84,
                            width: 144,
                        }),
                        (0, i.jsxs)("div", {
                            className: f.bannerContent,
                            children: [
                                (0, i.jsxs)("div", {
                                    className: f.bannerContentText,
                                    children: [
                                        (0, i.jsx)(s.X6q, {
                                            variant: "heading-md/semibold",
                                            color: "header-primary",
                                            children: h.intl.string(h.t.USo4s7),
                                        }),
                                        (0, i.jsx)(s.Text, {
                                            variant: "text-md/medium",
                                            color: "text-secondary",
                                            children:
                                                e.length === m.Q
                                                    ? !0 === t
                                                        ? h.intl.format(h.t["1aEjsL"], {
                                                              helpdeskArticle: o.Z.getArticleURL(
                                                                  g.BhN.REFERRAL_PROGRAM,
                                                              ),
                                                          })
                                                        : h.intl.format(h.t["+u3AOD"], {
                                                              helpdeskArticle: o.Z.getArticleURL(
                                                                  g.BhN.REFERRAL_PROGRAM,
                                                              ),
                                                          })
                                                    : h.intl.format(h.t["omMr+f"], {
                                                          helpdeskArticle: o.Z.getArticleURL(g.BhN.REFERRAL_PROGRAM),
                                                      }),
                                        }),
                                    ],
                                }),
                                (0, i.jsx)(s.zxk, {
                                    variant: "primary",
                                    text: h.intl.string(h.t.Lm2nFR),
                                    onClick: () =>
                                        _({
                                            startingScreen: p.K.SELECT_FRIENDS,
                                            analyticsLocations: [],
                                        }),
                                }),
                            ],
                        }),
                    ],
                }),
                e.length > 0 &&
                    (0, i.jsx)(E, {
                        referralSentUsers: e,
                        allRedeemed: t,
                    }),
            ],
        });
    };
