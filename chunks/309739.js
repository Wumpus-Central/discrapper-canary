n.d(t, { Z: () => F }), n(388685), n(781311);
var r = n(951288),
    i = n(647438),
    a = n(658722),
    o = n.n(a),
    s = n(442837),
    l = n(524437),
    c = n(780384),
    u = n(755721),
    d = n(481060),
    f = n(457330),
    _ = n(410030),
    p = n(726542),
    h = n(316496),
    m = n(335082),
    g = n(921801),
    E = n(553795),
    b = n(430824),
    y = n(63063),
    O = n(358085),
    v = n(362352),
    I = n(413182),
    T = n(695346),
    S = n(273313),
    A = n(726985),
    C = n(981631),
    N = n(388032),
    R = n(174546),
    P = n(10198);
function w(e, t, n) {
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
                w(e, t, n[t]);
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
function x(e, t) {
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
function j(e) {
    let t = () => {
        T.SE.updateSetting(e ? b.Z.getGuildIds() : []);
    };
    (0, d.h7j)((e) =>
        (0, r.jsx)(
            d.ConfirmModal,
            x(
                D(
                    {
                        header: N.intl.string(N.t["uUr+GR"]),
                        confirmText: N.intl.string(N.t.gm1Ven),
                        cancelText: N.intl.string(N.t.p89ACg),
                        onCancel: t,
                        confirmButtonColor: u.zx.Colors.BRAND,
                    },
                    e,
                ),
                {
                    children: (0, r.jsx)(d.Text, {
                        variant: "text-md/normal",
                        children: N.intl.string(N.t.EFu2Ki),
                    }),
                },
            ),
        ),
    );
}
function M() {
    let e = T.G6.useSetting(),
        t = T.no.useSetting(),
        n = (0, v.Yd)("activity privacy tab"),
        i = O.isPlatformEmbedded ? N.intl.string(N.t.MznbeH) : N.intl.string(N.t.oKqC4u),
        a = (e) => {
            T.no.updateSetting(e ? l.GI.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS : l.GI.ACTIVITY_STATUS_OFF), j(e);
        },
        o = (e) => {
            T.no.updateSetting(e), j(e !== l.GI.ACTIVITY_STATUS_OFF);
        },
        s = [
            {
                value: l.GI.ACTIVITY_STATUS_ON,
                label: N.intl.string(N.t.UzGMHx),
            },
            {
                value: l.GI.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS,
                label: N.intl.string(N.t.OFqxQU),
            },
            {
                value: l.GI.ACTIVITY_STATUS_OFF,
                label: N.intl.string(N.t.MIgNPD),
            },
        ];
    return (0, r.jsx)(g.F, {
        setting: A.s6.ACTIVITY_PRIVACY_STATUS,
        children: (0, r.jsxs)(d.C3N, {
            label: N.intl.string(N.t["8ka8lp"]),
            children: [
                (0, r.jsx)(d.rsf, {
                    label: N.intl.string(N.t["4q/Ewc"]),
                    description: i,
                    checked: e,
                    onChange: (e) => T.G6.updateSetting(e),
                }),
                n
                    ? (0, r.jsx)(d.q4e, {
                          label: N.intl.string(N.t.ffGYGx),
                          description: N.intl.format(N.t.aUxRra, {
                              helpdeskArticle: y.Z.getArticleURL(C.BhN.ACTIVITY_STATUS_SETTINGS),
                          }),
                          options: s,
                          value: t,
                          onChange: (e) => o(e),
                      })
                    : (0, r.jsx)(d.rsf, {
                          label: N.intl.string(N.t.D5GXTU),
                          description: N.intl.format(N.t["+5/xu7"], {
                              helpdeskArticle: y.Z.getArticleURL(C.BhN.ACTIVITY_STATUS_SETTINGS),
                          }),
                          checked: t === l.GI.ACTIVITY_STATUS_OFF,
                          onChange: (e) => a(!e),
                      }),
            ],
        }),
    });
}
function k() {
    let e = T.cP.useSetting(),
        t = T.Ou.useSetting();
    return (0, r.jsx)(g.F, {
        setting: A.s6.ACTIVITY_PRIVACY_RICH_PRESENCE,
        children: (0, r.jsxs)(d.C3N, {
            label: N.intl.string(N.t.VOszPD),
            children: [
                (0, r.jsx)(d.rsf, {
                    label: N.intl.string(N.t.WEWQQk),
                    description: N.intl.string(N.t.Hdh7sb),
                    checked: e,
                    onChange: (e) => T.cP.updateSetting(e),
                }),
                (0, r.jsx)(d.rsf, {
                    label: N.intl.string(N.t.UUvJVl),
                    description: N.intl.string(N.t.Czr3Bg),
                    checked: t,
                    onChange: (e) => T.Ou.updateSetting(e),
                }),
            ],
        }),
    });
}
function U() {
    return (0, r.jsx)(g.F, {
        setting: A.s6.ACTIVITY_PRIVACY_TOS,
        children: (0, r.jsx)(d.hjN, {
            className: P.marginBottom40,
            children: (0, r.jsx)(d.ToO, {
                type: d.ToO.Types.PRIMARY,
                body: N.intl.format(N.t.xvCsx8, {
                    termsLink: C.EYA.TERMS,
                    privacyLink: C.EYA.PRIVACY,
                }),
            }),
        }),
    });
}
let G = (e) => {
    switch (e.type) {
        case C.ABu.SPOTIFY:
            return N.intl.format(N.t["5sYPnp"], { name: e.name });
        case C.ABu.CRUNCHYROLL:
            return N.intl.format(N.t.Ge29Z2, { name: e.name });
        default:
            return N.intl.format(N.t.nmMsys, { game: e.name });
    }
};
function B(e) {
    let { account: t } = e,
        [n, a] = i.useState(t.showActivity),
        o = (0, _.ZP)();
    function s(e) {
        a(e), f.Z.setShowActivity(t.type, t.id, e);
    }
    i.useEffect(() => {
        a(t.showActivity);
    }, [t]);
    let l = p.Z.get(t.type);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: R.connectedAccountToggle,
                children: [
                    (0, r.jsx)("img", {
                        alt: l.name,
                        className: R.connectionIcon,
                        src: (0, c.wj)(o) ? l.icon.darkSVG : l.icon.lightSVG,
                    }),
                    (0, r.jsx)(d.rsf, {
                        label: l.name,
                        description: '"'.concat(G(l), '"'),
                        checked: n,
                        onChange: s,
                    }),
                ],
            }),
            (0, r.jsx)(d.izJ, {}),
        ],
    });
}
function Z() {
    let e = (0, s.e7)([E.Z], () => E.Z.getAccounts()),
        t = i.useMemo(() => e.filter((e) => p.Z.isSupported(e.type) && C.vbS.has(e.type)), [e]),
        [n, a] = i.useState(""),
        l = i.useMemo(() => {
            let e = n.trim().toLowerCase();
            return "" === e ? t : t.filter((t) => o()(e, p.Z.get(t.type).name.toLowerCase()));
        }, [t, n]);
    return 0 === t.length
        ? null
        : (0, r.jsx)(g.F, {
              setting: A.s6.ACTIVITY_PRIVACY_STATUS_DISPLAY,
              children: (0, r.jsxs)(d.C3N, {
                  label: N.intl.string(N.t["4F2KoK"]),
                  children: [
                      (0, r.jsx)(d.E1j, {
                          query: n,
                          onChange: a,
                          placeholder: N.intl.string(N.t.WPrtoa),
                      }),
                      l.map((e) => (0, r.jsx)(B, { account: e }, e.id)),
                  ],
              }),
          });
}
function F(e) {
    let { className: t, showHeader: n = !0 } = e,
        { showRedesign: i } = I.b.useExperiment({ location: "activity privacy tab" }),
        { showUpdatedSettingsPage: a } = (0, h.D)("activity privacy tab");
    return a
        ? (0, r.jsx)(m.Z, {})
        : (0, r.jsx)(S.Z, {
              className: t,
              title: n ? N.intl.string(N.t.Cq98yM) : null,
              children: (0, r.jsxs)(d.Kqy, {
                  gap: 24,
                  children: [
                      (0, r.jsx)(M, {}),
                      (0, r.jsx)(d.izJ, {}),
                      (0, r.jsx)(k, {}),
                      (0, r.jsx)(U, {}),
                      i &&
                          (0, r.jsxs)(r.Fragment, {
                              children: [(0, r.jsx)(d.izJ, {}), (0, r.jsx)(Z, {})],
                          }),
                  ],
              }),
          });
}
