n.d(t, { default: () => Z }), n(388685);
var r = n(951288),
    c = n(647438),
    s = n(120356),
    a = n.n(s),
    o = n(202841),
    i = n(442837),
    l = n(755721),
    d = n(481060),
    u = n(110924),
    f = n(410030),
    b = n(607070),
    m = n(100527),
    p = n(335131),
    h = n(70097),
    j = n(507808),
    O = n(43747),
    y = n(82856),
    x = n(960919),
    g = n(272008),
    v = n(497505),
    _ = n(46140),
    C = n(981631),
    S = n(215023),
    N = n(388032),
    P = n(378658),
    w = n(557256),
    B = n(582425),
    T = n(345554),
    A = n(88490),
    E = n(466674);
function I() {
    let e = (0, i.e7)([b.Z], () => b.Z.useReducedMotion),
        [t, n] = c.useState(!e),
        [s, l] = c.useState(!1),
        u = c.useRef(null),
        m = (0, f.ZP)(),
        p = (0, d.apv)(m),
        j = p ? T.Z : B.Z,
        O = p ? E.Z : A.Z;
    c.useEffect(() => {
        if (!t && !e) {
            var n;
            null == (n = u.current) || n.play();
        }
    }, [t, e]);
    let y = (0, d.q_F)({
        from: { y: 50 },
        to: { y: 0 },
        config: {
            tension: 170,
            friction: 26,
        },
    });
    return (0, r.jsxs)(o.animated.div, {
        className: P.videoLayers,
        style: y,
        children: [
            !s && (0, r.jsx)("div", { className: P.videoPlaceholder }),
            (0, r.jsx)(h.Z, {
                ref: u,
                autoPlay: !1,
                loop: !0,
                muted: !0,
                playsInline: !0,
                className: a()(P.videoAsset, { [P.hidden]: t }),
                controls: !1,
                children: (0, r.jsx)("source", {
                    src: O,
                    type: "video/webm",
                }),
            }),
            (0, r.jsx)(h.Z, {
                autoPlay: !0,
                muted: !0,
                playsInline: !0,
                className: a()(P.videoAsset, { [P.hidden]: !t }),
                controls: !1,
                onLoadedData: () => l(!0),
                onEnded: () => {
                    n(!1);
                },
                children: (0, r.jsx)("source", {
                    src: j,
                    type: "video/webm",
                }),
            }),
        ],
    });
}
function R(e) {
    let { transitionState: t, balance: n, onSubmit: c, onClose: s, state: a } = e;
    return (0, r.jsxs)(d.Y0X, {
        "data-migration-pending": !0,
        transitionState: t,
        size: d.CgR.DYNAMIC,
        className: P.modal,
        parentComponent: "QuestsOrbsRewardModal",
        children: [
            (0, r.jsx)("div", {
                className: P.header,
                children: (0, r.jsx)(d.olH, {
                    "data-migration-pending": !0,
                    className: P.closeBtn,
                    onClick: s,
                }),
            }),
            "loading" === a
                ? (0, r.jsx)("div", {
                      className: P.spinnerContainer,
                      children: (0, r.jsx)(d.$jN, { type: d.RAz.SPINNING_CIRCLE }),
                  })
                : "success" === a
                  ? (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(I, {}),
                            (0, r.jsx)(d.X6q, {
                                variant: "heading-lg/medium",
                                className: P.title,
                                children: N.intl.format(N.t["8l9H0t"], {
                                    balanceHook: () =>
                                        (0, r.jsxs)("span", {
                                            className: P.orbsBalance,
                                            children: [
                                                (0, r.jsx)(x.Z, {
                                                    shouldUseThemeColor: !0,
                                                    className: P.orbsBalanceIcon,
                                                }),
                                                n,
                                            ],
                                        }),
                                }),
                            }),
                            (0, r.jsx)(d.Text, {
                                variant: "text-sm/normal",
                                className: P.subtext,
                                children: N.intl.string(N.t.EDUOIC),
                            }),
                            (0, r.jsx)(l.zx, {
                                className: P.ctaBtn,
                                onClick: c,
                                children: N.intl.string(N.t.WYchdX),
                            }),
                            (0, r.jsx)(l.zx, {
                                look: l.iL.LINK,
                                color: l.Tt.CUSTOM,
                                className: P.orbsTermsButton,
                                onClick: () => window.open(C.EYA.PAID_TERMS_ORBS),
                                children: N.intl.string(N.t["7kTAgI"]),
                            }),
                        ],
                    })
                  : (0, r.jsxs)("div", {
                        className: P.errorContainer,
                        children: [
                            (0, r.jsx)("img", {
                                alt: "",
                                className: P.errorImage,
                                src: w,
                            }),
                            (0, r.jsxs)("div", {
                                className: P.errorContentContainer,
                                children: [
                                    (0, r.jsx)(d.X6q, {
                                        variant: "heading-xl/medium",
                                        className: P.errorHeader,
                                        children: N.intl.string(N.t.tWYWJy),
                                    }),
                                    (0, r.jsx)(d.Text, {
                                        variant: "text-md/normal",
                                        color: "text-muted",
                                        children: N.intl.string(N.t.JNQRU1),
                                    }),
                                ],
                            }),
                            (0, r.jsx)(l.zx, {
                                className: P.ctaBtn,
                                onClick: s,
                                children: N.intl.string(N.t.cpT0Cg),
                            }),
                        ],
                    }),
        ],
    });
}
function Z(e) {
    var t,
        n,
        { quest: s, onClose: a } = e,
        o = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                c = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        c = {},
                        s = Object.keys(e);
                    for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (c[n] = e[n]);
                    return c;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (r = 0; r < s.length; r++)
                    (n = s[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (c[n] = e[n]);
            }
            return c;
        })(e, ["quest", "onClose"]);
    let { balance: i } = (0, O.A)(),
        l = (function (e, t, n) {
            let [r, s] = c.useState("loading"),
                [a, o] = c.useState(!1),
                { balance: i } = (0, O.A)(),
                l = (0, u.Z)(i),
                [d, f] = c.useState(!1);
            return (c.useEffect(() => {
                let e = null;
                return (
                    "success" === r &&
                        t &&
                        (e = setTimeout(() => {
                            f(!0);
                        }, 1000)),
                    () => {
                        null != e && clearTimeout(e);
                    }
                );
            }, [r, t]),
            c.useEffect(() => {
                !a && null != i && null != l && i > l && o(!0);
            }, [i, l, a]),
            c.useEffect(() => {
                (0, g.QB)(e, v.y$.CROSS_PLATFORM, n)
                    .then((e) => {
                        if ((null == e ? void 0 : e.claimedAt) != null) return void s("success");
                        s("error");
                    })
                    .catch(() => {
                        s("error");
                    });
            }, [e, n]),
            "error" === r)
                ? r
                : "success" === r && (a || d)
                  ? "success"
                  : "loading";
        })(s.id, s.preview, o.location),
        d = c.useCallback(() => {
            a(),
                (0, j.Y)({
                    pageType: C.ZY5.GLOBAL_DISCOVERY_QUESTS,
                    sectionType: C.jXE.ORBS_REWARD_MODAL,
                    ctaObject: C.qAy.CTA_TO_ORBS_SHOP,
                }),
                (0, p.mK)({
                    openInLayer: !1,
                    tab: S.AW.ORBS,
                    analyticsLocations: [],
                    analyticsSource: s.id === _.V6 ? m.Z.INTRO_TO_ORBS_QUEST : m.Z.QUEST_HOME_PAGE,
                });
        }, [a, s.id]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(y.o, {}),
            (0, r.jsx)(
                R,
                ((t = (function (e) {
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
                })({}, o)),
                (n = n =
                    {
                        balance: i,
                        onClose: a,
                        onSubmit: d,
                        state: l,
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(n)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                      }),
                t),
            ),
        ],
    });
}
