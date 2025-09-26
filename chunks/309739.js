n.d(t, { Z: () => H }), n(388685), n(781311);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(658722),
    l = n.n(s),
    c = n(442837),
    u = n(524437),
    d = n(780384),
    f = n(755721),
    _ = n(481060),
    p = n(457330),
    h = n(410030),
    m = n(726542),
    g = n(316496),
    E = n(335082),
    b = n(921801),
    y = n(553795),
    O = n(430824),
    v = n(63063),
    I = n(358085),
    T = n(362352),
    S = n(413182),
    A = n(695346),
    C = n(273313),
    N = n(726985),
    R = n(981631),
    P = n(388032),
    w = n(85240),
    D = n(197571);
function x(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function L(e) {
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
                x(e, t, n[t]);
            });
    }
    return e;
}
function j(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function M(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : j(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function k(e) {
    let t = () => {
        A.SE.updateSetting(e ? O.Z.getGuildIds() : []);
    };
    (0, _.h7j)((e) =>
        (0, r.jsx)(
            _.ConfirmModal,
            M(
                L(
                    {
                        header: P.intl.string(P.t["uUr+GR"]),
                        confirmText: P.intl.string(P.t.gm1Ven),
                        cancelText: P.intl.string(P.t.p89ACg),
                        onCancel: t,
                        confirmButtonColor: f.zx.Colors.BRAND,
                    },
                    e,
                ),
                {
                    children: (0, r.jsx)(_.Text, {
                        variant: "text-md/normal",
                        children: P.intl.string(P.t.EFu2Ki),
                    }),
                },
            ),
        ),
    );
}
function U() {
    let e = A.G6.useSetting(),
        t = A.no.useSetting(),
        n = (0, T.Yd)("activity privacy tab"),
        i = I.isPlatformEmbedded ? P.intl.string(P.t.MznbeH) : P.intl.string(P.t.oKqC4u),
        a = (e) => {
            A.no.updateSetting(e ? u.GI.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS : u.GI.ACTIVITY_STATUS_OFF), k(e);
        },
        s = (e) => {
            A.no.updateSetting(e), k(e !== u.GI.ACTIVITY_STATUS_OFF);
        },
        l = [
            {
                value: u.GI.ACTIVITY_STATUS_ON,
                label: P.intl.string(P.t.UzGMHx),
            },
            {
                value: u.GI.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS,
                label: P.intl.string(P.t.OFqxQU),
            },
            {
                value: u.GI.ACTIVITY_STATUS_OFF,
                label: P.intl.string(P.t.MIgNPD),
            },
        ];
    return (0, r.jsx)(b.F, {
        setting: N.s6.ACTIVITY_PRIVACY_STATUS,
        children: (0, r.jsxs)(_.hjN, {
            children: [
                (0, r.jsx)(_.vwX, {
                    className: D.marginBottom8,
                    children: P.intl.string(P.t["8ka8lp"]),
                }),
                (0, r.jsx)(_.j7V, {
                    value: e,
                    onChange: (e) => A.G6.updateSetting(e),
                    note: i,
                    children: P.intl.string(P.t["4q/Ewc"]),
                }),
                n
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsxs)(_.xJW, {
                                  tag: _.RB0.H3,
                                  title: P.intl.string(P.t.ffGYGx),
                                  children: [
                                      (0, r.jsx)(_.Text, {
                                          variant: "text-sm/normal",
                                          color: "header-secondary",
                                          className: D.marginBottom8,
                                          children: P.intl.format(P.t.aUxRra, {
                                              helpdeskArticle: v.Z.getArticleURL(R.BhN.ACTIVITY_STATUS_SETTINGS),
                                          }),
                                      }),
                                      (0, r.jsx)(_.q4e, {
                                          options: l,
                                          value: t,
                                          onChange: (e) => s(e),
                                      }),
                                  ],
                              }),
                              (0, r.jsx)(_.$i$, { className: o()(D.marginBottom20, D.marginTop20) }),
                          ],
                      })
                    : (0, r.jsx)(_.j7V, {
                          value: t === u.GI.ACTIVITY_STATUS_OFF,
                          note: P.intl.format(P.t["+5/xu7"], {
                              helpdeskArticle: v.Z.getArticleURL(R.BhN.ACTIVITY_STATUS_SETTINGS),
                          }),
                          onChange: (e) => a(!e),
                          children: P.intl.string(P.t.D5GXTU),
                      }),
            ],
        }),
    });
}
function G() {
    let e = A.cP.useSetting(),
        t = A.Ou.useSetting();
    return (0, r.jsx)(b.F, {
        setting: N.s6.ACTIVITY_PRIVACY_RICH_PRESENCE,
        children: (0, r.jsxs)(_.hjN, {
            className: D.marginBottom40,
            children: [
                (0, r.jsx)(_.vwX, {
                    className: D.marginBottom8,
                    children: P.intl.string(P.t.VOszPD),
                }),
                (0, r.jsx)(_.j7V, {
                    value: e,
                    note: P.intl.string(P.t.Hdh7sb),
                    onChange: (e) => A.cP.updateSetting(e),
                    children: P.intl.string(P.t.WEWQQk),
                }),
                (0, r.jsx)(_.j7V, {
                    value: t,
                    note: P.intl.string(P.t.Czr3Bg),
                    onChange: (e) => A.Ou.updateSetting(e),
                    children: P.intl.string(P.t.UUvJVl),
                }),
            ],
        }),
    });
}
function B() {
    return (0, r.jsx)(b.F, {
        setting: N.s6.ACTIVITY_PRIVACY_TOS,
        children: (0, r.jsx)(_.hjN, {
            className: D.marginBottom40,
            children: (0, r.jsx)(_.ToO, {
                type: _.ToO.Types.PRIMARY,
                body: P.intl.format(P.t.xvCsx8, {
                    termsLink: R.EYA.TERMS,
                    privacyLink: R.EYA.PRIVACY,
                }),
            }),
        }),
    });
}
let Z = (e) => {
    switch (e.type) {
        case R.ABu.SPOTIFY:
            return P.intl.format(P.t["5sYPnp"], { name: e.name });
        case R.ABu.CRUNCHYROLL:
            return P.intl.format(P.t.Ge29Z2, { name: e.name });
        default:
            return P.intl.format(P.t.nmMsys, { game: e.name });
    }
};
function F(e) {
    let { account: t } = e,
        [n, a] = i.useState(t.showActivity),
        o = (0, h.ZP)();
    function s(e) {
        a(e), p.Z.setShowActivity(t.type, t.id, e);
    }
    i.useEffect(() => {
        a(t.showActivity);
    }, [t]);
    let l = m.Z.get(t.type);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(_.j7V, {
                className: w.switchRowContainer,
                hideBorder: !0,
                value: n,
                onChange: s,
                children: (0, r.jsxs)("div", {
                    className: w.activitySwitchRow,
                    children: [
                        (0, r.jsx)("img", {
                            alt: l.name,
                            className: w.connectionIcon,
                            src: (0, d.wj)(o) ? l.icon.darkSVG : l.icon.lightSVG,
                        }),
                        (0, r.jsxs)("div", {
                            children: [
                                (0, r.jsx)(_.Text, {
                                    variant: "text-md/semibold",
                                    children: l.name,
                                }),
                                (0, r.jsxs)(_.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: ['"', Z(l), '"'],
                                }),
                            ],
                        }),
                    ],
                }),
            }),
            (0, r.jsx)("div", { className: w.divider }),
        ],
    });
}
function V() {
    let e = (0, c.e7)([y.Z], () => y.Z.getAccounts()),
        t = i.useMemo(() => e.filter((e) => m.Z.isSupported(e.type) && R.vbS.has(e.type)), [e]),
        [n, a] = i.useState(""),
        o = i.useMemo(() => {
            let e = n.trim().toLowerCase();
            return "" === e ? t : t.filter((t) => l()(e, m.Z.get(t.type).name.toLowerCase()));
        }, [t, n]);
    return 0 === t.length
        ? null
        : (0, r.jsx)(b.F, {
              setting: N.s6.ACTIVITY_PRIVACY_STATUS_DISPLAY,
              children: (0, r.jsx)(_.hjN, {
                  className: D.marginBottom40,
                  children: (0, r.jsxs)(_.Kqy, {
                      gap: 12,
                      children: [
                          (0, r.jsx)(_.vwX, {
                              className: D.marginBottom8,
                              children: P.intl.string(P.t["4F2KoK"]),
                          }),
                          (0, r.jsx)(_.E1j, {
                              query: n,
                              onChange: a,
                              placeholder: P.intl.string(P.t.WPrtoa),
                          }),
                          o.map((e) => (0, r.jsx)(F, { account: e }, e.id)),
                      ],
                  }),
              }),
          });
}
function H(e) {
    let { className: t, showHeader: n = !0 } = e,
        { showRedesign: i } = S.b.useExperiment({ location: "activity privacy tab" }),
        { showUpdatedSettingsPage: a } = (0, g.D)("activity privacy tab");
    return a
        ? (0, r.jsx)(E.Z, {})
        : (0, r.jsxs)(C.Z, {
              className: t,
              title: n ? P.intl.string(P.t.Cq98yM) : null,
              children: [(0, r.jsx)(U, {}), (0, r.jsx)(G, {}), (0, r.jsx)(B, {}), i && (0, r.jsx)(V, {})],
          });
}
