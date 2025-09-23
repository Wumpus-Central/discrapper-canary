n.d(t, { Z: () => V }), n(388685), n(781311);
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
    C = n(726985),
    N = n(981631),
    R = n(388032),
    P = n(174546),
    w = n(10198);
function D(e, t, n) {
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
function x(e) {
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
                D(e, t, n[t]);
            });
    }
    return e;
}
function L(e, t) {
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
function j(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : L(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function M(e) {
    let t = () => {
        A.SE.updateSetting(e ? O.Z.getGuildIds() : []);
    };
    (0, _.h7j)((e) =>
        (0, r.jsx)(
            _.ConfirmModal,
            j(
                x(
                    {
                        header: R.intl.string(R.t["uUr+GR"]),
                        confirmText: R.intl.string(R.t.gm1Ven),
                        cancelText: R.intl.string(R.t.p89ACg),
                        onCancel: t,
                        confirmButtonColor: f.zx.Colors.BRAND,
                    },
                    e,
                ),
                {
                    children: (0, r.jsx)(_.Text, {
                        variant: "text-md/normal",
                        children: R.intl.string(R.t.EFu2Ki),
                    }),
                },
            ),
        ),
    );
}
function k() {
    let e = A.G6.useSetting(),
        t = A.no.useSetting(),
        n = (0, T.Yd)("activity privacy tab"),
        i = I.isPlatformEmbedded ? R.intl.string(R.t.MznbeH) : R.intl.string(R.t.oKqC4u),
        a = (e) => {
            A.no.updateSetting(e ? u.GI.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS : u.GI.ACTIVITY_STATUS_OFF), M(e);
        },
        s = (e) => {
            A.no.updateSetting(e), M(e !== u.GI.ACTIVITY_STATUS_OFF);
        },
        l = [
            {
                value: u.GI.ACTIVITY_STATUS_ON,
                label: R.intl.string(R.t.UzGMHx),
            },
            {
                value: u.GI.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS,
                label: R.intl.string(R.t.OFqxQU),
            },
            {
                value: u.GI.ACTIVITY_STATUS_OFF,
                label: R.intl.string(R.t.MIgNPD),
            },
        ];
    return (0, r.jsx)(b.F, {
        setting: C.s6.ACTIVITY_PRIVACY_STATUS,
        children: (0, r.jsxs)(_.hjN, {
            children: [
                (0, r.jsx)(_.vwX, {
                    className: w.marginBottom8,
                    children: R.intl.string(R.t["8ka8lp"]),
                }),
                (0, r.jsx)(_.j7V, {
                    value: e,
                    onChange: (e) => A.G6.updateSetting(e),
                    note: i,
                    children: R.intl.string(R.t["4q/Ewc"]),
                }),
                n
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsxs)(_.xJW, {
                                  tag: _.RB0.H3,
                                  title: R.intl.string(R.t.ffGYGx),
                                  children: [
                                      (0, r.jsx)(_.Text, {
                                          variant: "text-sm/normal",
                                          color: "header-secondary",
                                          className: w.marginBottom8,
                                          children: R.intl.format(R.t.aUxRra, {
                                              helpdeskArticle: v.Z.getArticleURL(N.BhN.ACTIVITY_STATUS_SETTINGS),
                                          }),
                                      }),
                                      (0, r.jsx)(_.q4e, {
                                          options: l,
                                          value: t,
                                          onChange: (e) => s(e),
                                      }),
                                  ],
                              }),
                              (0, r.jsx)(_.$i$, { className: o()(w.marginBottom20, w.marginTop20) }),
                          ],
                      })
                    : (0, r.jsx)(_.j7V, {
                          value: t === u.GI.ACTIVITY_STATUS_OFF,
                          note: R.intl.format(R.t["+5/xu7"], {
                              helpdeskArticle: v.Z.getArticleURL(N.BhN.ACTIVITY_STATUS_SETTINGS),
                          }),
                          onChange: (e) => a(!e),
                          children: R.intl.string(R.t.D5GXTU),
                      }),
            ],
        }),
    });
}
function U() {
    let e = A.cP.useSetting(),
        t = A.Ou.useSetting();
    return (0, r.jsx)(b.F, {
        setting: C.s6.ACTIVITY_PRIVACY_RICH_PRESENCE,
        children: (0, r.jsxs)(_.hjN, {
            className: w.marginBottom40,
            children: [
                (0, r.jsx)(_.vwX, {
                    className: w.marginBottom8,
                    children: R.intl.string(R.t.VOszPD),
                }),
                (0, r.jsx)(_.j7V, {
                    value: e,
                    note: R.intl.string(R.t.Hdh7sb),
                    onChange: (e) => A.cP.updateSetting(e),
                    children: R.intl.string(R.t.WEWQQk),
                }),
                (0, r.jsx)(_.j7V, {
                    value: t,
                    note: R.intl.string(R.t.Czr3Bg),
                    onChange: (e) => A.Ou.updateSetting(e),
                    children: R.intl.string(R.t.UUvJVl),
                }),
            ],
        }),
    });
}
function G() {
    return (0, r.jsx)(b.F, {
        setting: C.s6.ACTIVITY_PRIVACY_TOS,
        children: (0, r.jsx)(_.hjN, {
            className: w.marginBottom40,
            children: (0, r.jsx)(_.ToO, {
                type: _.ToO.Types.PRIMARY,
                body: R.intl.format(R.t.xvCsx8, {
                    termsLink: N.EYA.TERMS,
                    privacyLink: N.EYA.PRIVACY,
                }),
            }),
        }),
    });
}
let B = (e) => {
    switch (e.type) {
        case N.ABu.SPOTIFY:
            return R.intl.format(R.t["5sYPnp"], { name: e.name });
        case N.ABu.CRUNCHYROLL:
            return R.intl.format(R.t.Ge29Z2, { name: e.name });
        default:
            return R.intl.format(R.t.nmMsys, { game: e.name });
    }
};
function Z(e) {
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
                className: P.switchRowContainer,
                hideBorder: !0,
                value: n,
                onChange: s,
                children: (0, r.jsxs)("div", {
                    className: P.activitySwitchRow,
                    children: [
                        (0, r.jsx)("img", {
                            alt: l.name,
                            className: P.connectionIcon,
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
                                    children: ['"', B(l), '"'],
                                }),
                            ],
                        }),
                    ],
                }),
            }),
            (0, r.jsx)("div", { className: P.divider }),
        ],
    });
}
function F() {
    let e = (0, c.e7)([y.Z], () => y.Z.getAccounts()),
        t = i.useMemo(() => e.filter((e) => m.Z.isSupported(e.type) && N.vbS.has(e.type)), [e]),
        [n, a] = i.useState(""),
        o = i.useMemo(() => {
            let e = n.trim().toLowerCase();
            return "" === e ? t : t.filter((t) => l()(e, m.Z.get(t.type).name.toLowerCase()));
        }, [t, n]);
    return 0 === t.length
        ? null
        : (0, r.jsx)(b.F, {
              setting: C.s6.ACTIVITY_PRIVACY_STATUS_DISPLAY,
              children: (0, r.jsx)(_.hjN, {
                  className: w.marginBottom40,
                  children: (0, r.jsxs)(_.Kqy, {
                      gap: 12,
                      children: [
                          (0, r.jsx)(_.vwX, {
                              className: w.marginBottom8,
                              children: R.intl.string(R.t["4F2KoK"]),
                          }),
                          (0, r.jsx)(_.E1j, {
                              query: n,
                              onChange: a,
                              placeholder: R.intl.string(R.t.WPrtoa),
                          }),
                          o.map((e) => (0, r.jsx)(Z, { account: e }, e.id)),
                      ],
                  }),
              }),
          });
}
function V(e) {
    let { className: t, showHeader: n = !0 } = e,
        { showRedesign: i } = S.b.useExperiment({ location: "activity privacy tab" }),
        { showUpdatedSettingsPage: a } = (0, g.D)("activity privacy tab");
    return a
        ? (0, r.jsx)(E.Z, {})
        : (0, r.jsxs)(_.hjN, {
              className: t,
              tag: _.RB0.H1,
              title: n ? R.intl.string(R.t.Cq98yM) : null,
              children: [(0, r.jsx)(k, {}), (0, r.jsx)(U, {}), (0, r.jsx)(G, {}), i && (0, r.jsx)(F, {})],
          });
}
