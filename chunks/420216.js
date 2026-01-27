n.d(t, {
    r: () => m,
});
var r = n(627968);
n(64700);
var i = n(554146),
    l = n(397927),
    o = n(803306),
    a = n(573648),
    s = n(793574),
    c = n(882997),
    u = n(662427),
    E = n(532794),
    d = n(819982),
    _ = n(745299),
    T = n(976860),
    A = n(780964),
    I = n(840065),
    O = n(879945),
    N = n(954571),
    p = n(379848),
    R = n(49999),
    S = n(652215),
    P = n(789622),
    y = n(788868),
    f = n(985018),
    C = n(237082);

function D(e) {
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
}
let m = (e) => {
    let { dismissibleContent: t, noticeType: m } = e;
    return (0, r.jsx)(p.Ay, {
        contentTypes: [t],
        groupName: R.m.NOTICE_BAR,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: p } = e;
            switch (t) {
                case i.M.NAGBAR_NOTICE_DOWNLOAD:
                    return (0, r.jsxs)(l.$Td, {
                        color: l.Hv$.DEFAULT,
                        children: [
                            (0, r.jsx)(l.PMB, {
                                onClick: () => p(R.i.UNKNOWN),
                                noticeType: m,
                            }),
                            f.intl.string(f.t["+xn1o5"]),
                            (0, r.jsx)("i", {
                                className: C.c9,
                            }),
                            (0, r.jsx)("i", {
                                className: C.Vz,
                            }),
                            (0, r.jsx)("i", {
                                className: C.p0,
                            }),
                            (0, r.jsx)(l.Z_L, {
                                noticeType: m,
                                onClick: () => {
                                    (0, l.mMO)(async () => {
                                        let { default: e } = await Promise.all([n.e("56423"), n.e("25280")]).then(
                                            n.bind(n, 987482),
                                        );
                                        return (t) =>
                                            (0, r.jsx)(
                                                e,
                                                D(
                                                    {
                                                        source: "Top Bar Nag",
                                                    },
                                                    t,
                                                ),
                                            );
                                    });
                                },
                                children: f.intl.string(f.t["1WjMbC"]),
                            }),
                        ],
                    });
                case i.M.NAGBAR_NOTICE_CONNECT_SPOTIFY:
                    return (0, r.jsxs)(l.$Td, {
                        color: l.Hv$.SPOTIFY,
                        children: [
                            (0, r.jsx)(l.PMB, {
                                onClick: () => p(R.i.UNKNOWN),
                                noticeType: m,
                            }),
                            (0, r.jsx)(O.A, {
                                className: C.tV,
                            }),
                            f.intl.string(f.t["5NUVHH"]),
                            (0, r.jsx)(l.Z_L, {
                                onClick: () =>
                                    (0, c.A)({
                                        platformType: S.fg2.SPOTIFY,
                                        location: "Notice Bar",
                                    }),
                                noticeType: m,
                                children: f.intl.string(f.t.S0W8Z5),
                            }),
                        ],
                    });
                case i.M.NAGBAR_NOTICE_CONNECT_PLAYSTATION:
                    return (0, r.jsxs)(l.$Td, {
                        color: l.Hv$.PLAYSTATION,
                        children: [
                            (0, r.jsx)(l.PMB, {
                                noticeType: m,
                                onClick: () => p(R.i.UNKNOWN),
                            }),
                            (0, r.jsx)("img", {
                                alt: "",
                                className: C.tV,
                                src: a.A.get(S.fg2.PLAYSTATION).icon.whiteSVG,
                            }),
                            f.intl.string(f.t.WHWgoY),
                            (0, r.jsx)(l.zr9, {
                                onClick: () =>
                                    (0, c.A)({
                                        platformType: S.fg2.PLAYSTATION,
                                        location: "Notice Bar",
                                    }),
                                children: f.intl.string(f.t.S0W8Z5),
                            }),
                        ],
                    });
                case i.M.NAGBAR_NOTICE_PASSKEY_BACKUP:
                    return (0, r.jsxs)(l.$Td, {
                        color: l.Hv$.DEFAULT,
                        children: [
                            (0, r.jsx)(l.PMB, {
                                onClick: () => p(R.i.USER_DISMISS),
                                noticeType: m,
                            }),
                            f.intl.string(f.t["3qKN/h"]),
                            (0, r.jsx)(l.Z_L, {
                                onClick: async () => {
                                    p(R.i.TAKE_ACTION);
                                    try {
                                        let { startRegisterWebAuthnCredential: e } = await Promise.resolve().then(
                                                n.bind(n, 917136),
                                            ),
                                            { ticket: t, challenge: i } = await e();
                                        (0, l.mMO)(async () => {
                                            let { RegisterWebAuthnCredentialModal: e } = await Promise.all([
                                                n.e("44667"),
                                                n.e("65685"),
                                            ]).then(n.bind(n, 359990));
                                            return (n) => {
                                                var l, o;
                                                return (0, r.jsx)(
                                                    e,
                                                    ((l = D({}, n)),
                                                    (o = {
                                                        ticket: t,
                                                        challenge: i,
                                                        showAccountSettingsButton: !0,
                                                    }),
                                                    (o = null != o ? o : {}),
                                                    Object.getOwnPropertyDescriptors
                                                        ? Object.defineProperties(
                                                              l,
                                                              Object.getOwnPropertyDescriptors(o),
                                                          )
                                                        : (function (e, t) {
                                                              var n = Object.keys(e);
                                                              if (Object.getOwnPropertySymbols) {
                                                                  var r = Object.getOwnPropertySymbols(e);
                                                                  n.push.apply(n, r);
                                                              }
                                                              return n;
                                                          })(Object(o)).forEach(function (e) {
                                                              Object.defineProperty(
                                                                  l,
                                                                  e,
                                                                  Object.getOwnPropertyDescriptor(o, e),
                                                              );
                                                          }),
                                                    l),
                                                );
                                            };
                                        });
                                    } catch (e) {
                                        (0, l.showToast)(
                                            (0, l.createToast)(f.intl.string(f.t.xSCvBf), l.ToastType.FAILURE),
                                        );
                                    }
                                },
                                noticeType: m,
                                children: f.intl.string(f.t["ff/XXy"]),
                            }),
                        ],
                    });
                case i.M.NAGBAR_NOTICE_PREMIUM_PROMO:
                    return (0, r.jsxs)(l.$Td, {
                        color: l.Hv$.PREMIUM_TIER_2,
                        children: [
                            (0, r.jsx)("span", {
                                className: C.lK,
                            }),
                            (0, r.jsx)("span", {
                                className: C.$t,
                                children: f.intl.string(f.t["+urf75"]),
                            }),
                            (0, r.jsx)(l.Z_L, {
                                className: C.CO,
                                noticeType: m,
                                onClick: () => {
                                    N.default.track(S.HAw.PREMIUM_PROMOTION_OPENED, {
                                        location_section: S.JJy.NOTIFICATION_BAR,
                                        location_object: S.ZSU.BUTTON_CTA,
                                    }),
                                        (0, I.openUserSettings)(A.X.NITRO_PANEL, {
                                            section: S.nc_.PREMIUM,
                                        });
                                },
                                children: f.intl.string(f.t["8JC5e/"]),
                            }),
                            (0, r.jsx)(l.PMB, {
                                onClick: () => {
                                    p(R.i.UNKNOWN), (0, o.lA)(S.nhx.PREMIUM_PROMO_DISMISSED, !0);
                                },
                                noticeType: m,
                            }),
                        ],
                    });
                case i.M.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING:
                    return (0, r.jsx)(_.A, {
                        dismissCurrentNotice: () => p(R.i.UNKNOWN),
                        subscriptionTier: y.pe.TIER_2,
                    });
                case i.M.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING:
                    return (0, r.jsx)(_.A, {
                        dismissCurrentNotice: () => p(R.i.UNKNOWN),
                        subscriptionTier: y.pe.TIER_0,
                    });
                case i.M.NAGBAR_NOTICE_PREMIUM_REACTIVATE:
                    return (0, r.jsxs)(l.$Td, {
                        color: l.Hv$.PREMIUM_TIER_2,
                        children: [
                            (0, r.jsx)(l.PMB, {
                                noticeType: m,
                                onClick: () => p(R.i.UNKNOWN),
                            }),
                            f.intl.string(f.t["0KFB2B"]),
                            (0, r.jsx)(l.Z_L, {
                                noticeType: m,
                                onClick: () => {
                                    p(R.i.UNKNOWN),
                                        (0, I.openUserSettings)(A.X.NITRO_PANEL, {
                                            section: S.nc_.PREMIUM,
                                        });
                                },
                                children: f.intl.string(f.t.pyYSiO),
                            }),
                        ],
                    });
                case i.M.NAGBAR_BOUNCED_EMAIL_NOTICE:
                    return (0, r.jsxs)(l.$Td, {
                        color: l.Hv$.DANGER,
                        children: [
                            (0, r.jsx)(l.PMB, {
                                onClick: () => p(R.i.UNKNOWN),
                                noticeType: m,
                            }),
                            f.intl.string(f.t["7490vQ"]),
                            (0, r.jsx)(l.Z_L, {
                                noticeType: m,
                                onClick: () => {
                                    (0, T.pX)(S.BVt.SETTINGS("account"));
                                },
                                children: f.intl.string(f.t.Vm8akB),
                            }),
                        ],
                    });
                case i.M.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION:
                    let g = u.A.getEligibleGuildsForNagActivate();
                    return (0, r.jsxs)(l.$Td, {
                        color: l.Hv$.DEFAULT,
                        children: [
                            (0, r.jsx)(l.PMB, {
                                onClick: () => p(R.i.UNKNOWN),
                                noticeType: m,
                            }),
                            f.intl.string(f.t.pJ4hJE),
                            (0, r.jsx)(l.Z_L, {
                                noticeType: m,
                                onClick: () => {
                                    p(R.i.PRIMARY),
                                        (0, T.pX)(
                                            1 === g.length
                                                ? S.BVt.GUILD_SETTINGS(g[0], "role-subscriptions")
                                                : S.BVt.PICK_GUILD_SETTINGS(
                                                      "role-subscriptions",
                                                      void 0,
                                                      "server-subscriptions-finish-setting-up",
                                                  ),
                                        );
                                },
                                children: f.intl.string(f.t["74s74F"]),
                            }),
                        ],
                    });
                case i.M.NAGBAR_NOTICE_POMELO:
                    return (0, r.jsxs)(l.$Td, {
                        color: l.Hv$.WARNING,
                        children: [
                            (0, r.jsx)(l.PMB, {
                                onClick: () => p(R.i.UNKNOWN),
                                noticeType: m,
                            }),
                            f.intl.format(f.t.pdYZyg, {}),
                            (0, r.jsx)(l.Z_L, {
                                onClick: () => (0, d.A)(P.gg.NOTICE),
                                noticeType: m,
                                children: f.intl.string(f.t.LhlgY9),
                            }),
                        ],
                    });
                case i.M.CHECKOUT_RECOVERY_NAGBAR:
                    return (0, r.jsxs)(l.$Td, {
                        color: l.Hv$.PREMIUM_TIER_2,
                        children: [
                            (0, r.jsx)(l.PMB, {
                                onClick: () => p(R.i.UNKNOWN),
                                noticeType: m,
                            }),
                            f.intl.string(f.t["O9GI+k"]),
                            (0, r.jsx)(l.Z_L, {
                                onClick: () => {
                                    (0, E.A)({
                                        subscriptionTier: y.pe.TIER_2,
                                        analyticsLocations: [s.A.CHECKOUT_RECOVERY_NAGBAR],
                                        analyticsLocation: S.ThZ.CHECKOUT_RECOVERY_NAGBAR,
                                        onClose: () => p(R.i.UNKNOWN),
                                    });
                                },
                                noticeType: m,
                                children: f.intl.string(f.t.Zi69D4),
                            }),
                        ],
                    });
            }
        },
    });
};
