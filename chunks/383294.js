n.d(t, { default: () => w }), n(388685);
var r = n(951288),
    a = n(647438),
    o = n(120356),
    c = n.n(o),
    i = n(13941),
    s = n(442837),
    l = n(481060),
    d = n(110924),
    u = n(410030),
    f = n(607070),
    b = n(100527),
    p = n(335131),
    _ = n(70097),
    m = n(507808),
    h = n(43747),
    C = n(82856),
    g = n(960919),
    y = n(272008),
    E = n(497505),
    v = n(46140),
    j = n(981631),
    R = n(215023),
    x = n(388032),
    O = n(378658),
    A = n(557256),
    S = n(582425),
    N = n(345554),
    I = n(88490),
    L = n(466674);
function Z() {
    let e = (0, s.e7)([f.Z], () => f.Z.useReducedMotion),
        [t, n] = a.useState(!e),
        [o, d] = a.useState(!1),
        b = a.useRef(null),
        p = (0, u.ZP)(),
        m = (0, l.apv)(p),
        h = m ? N.Z : S.Z,
        C = m ? L.Z : I.Z;
    a.useEffect(() => {
        if (!t && !e) {
            var n;
            null == (n = b.current) || n.play();
        }
    }, [t, e]);
    let g = (0, l.q_F)({
        from: { y: 50 },
        to: { y: 0 },
        config: {
            tension: 170,
            friction: 26,
        },
    });
    return (0, r.jsxs)(i.animated.div, {
        className: O.videoLayers,
        style: g,
        children: [
            !o && (0, r.jsx)("div", { className: O.videoPlaceholder }),
            (0, r.jsx)(_.Z, {
                ref: b,
                autoPlay: !1,
                loop: !0,
                muted: !0,
                playsInline: !0,
                className: c()(O.videoAsset, { [O.hidden]: t }),
                controls: !1,
                children: (0, r.jsx)("source", {
                    src: C,
                    type: "video/webm",
                }),
            }),
            (0, r.jsx)(_.Z, {
                autoPlay: !0,
                muted: !0,
                playsInline: !0,
                className: c()(O.videoAsset, { [O.hidden]: !t }),
                controls: !1,
                onLoadedData: () => d(!0),
                onEnded: () => {
                    n(!1);
                },
                children: (0, r.jsx)("source", {
                    src: h,
                    type: "video/webm",
                }),
            }),
        ],
    });
}
function T(e) {
    let { transitionState: t, balance: n, onSubmit: a, onClose: o, state: c } = e;
    return (0, r.jsxs)(l.Y0X, {
        "data-migration-pending": !0,
        transitionState: t,
        size: l.CgR.DYNAMIC,
        className: O.modal,
        parentComponent: "QuestsOrbsRewardModal",
        children: [
            (0, r.jsx)("div", {
                className: O.header,
                children: (0, r.jsx)(l.olH, {
                    "data-migration-pending": !0,
                    className: O.closeBtn,
                    onClick: o,
                }),
            }),
            "loading" === c
                ? (0, r.jsx)("div", {
                      className: O.spinnerContainer,
                      children: (0, r.jsx)(l.$jN, { type: l.RAz.SPINNING_CIRCLE }),
                  })
                : "success" === c
                  ? (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(Z, {}),
                            (0, r.jsx)(l.Heading, {
                                variant: "heading-lg/medium",
                                className: O.title,
                                children: x.intl.format(x.t["8l9H0s"], {
                                    balanceHook: () =>
                                        (0, r.jsxs)("span", {
                                            className: O.orbsBalance,
                                            children: [
                                                (0, r.jsx)(g.Z, {
                                                    shouldUseThemeColor: !0,
                                                    className: O.orbsBalanceIcon,
                                                }),
                                                n,
                                            ],
                                        }),
                                }),
                            }),
                            (0, r.jsx)(l.Text, {
                                variant: "text-sm/normal",
                                className: O.subtext,
                                children: x.intl.string(x.t.EDUOIH),
                            }),
                            (0, r.jsxs)(l.ButtonGroup, {
                                className: O.buttonContainer,
                                fullWidthContainer: !0,
                                fullWidth: !0,
                                direction: "vertical",
                                children: [
                                    (0, r.jsx)(l.Button, {
                                        variant: "primary",
                                        fullWidth: !0,
                                        text: x.intl.string(x.t.WYchde),
                                        onClick: a,
                                    }),
                                    (0, r.jsx)(l.Button, {
                                        variant: "secondary",
                                        fullWidth: !0,
                                        text: x.intl.string(x.t["7kTAgJ"]),
                                        onClick: () => window.open(j.EYA.PAID_TERMS_ORBS),
                                    }),
                                ],
                            }),
                        ],
                    })
                  : (0, r.jsxs)("div", {
                        className: O.errorContainer,
                        children: [
                            (0, r.jsx)("img", {
                                alt: "",
                                className: O.errorImage,
                                src: A,
                            }),
                            (0, r.jsxs)("div", {
                                className: O.errorContentContainer,
                                children: [
                                    (0, r.jsx)(l.Heading, {
                                        variant: "heading-xl/medium",
                                        className: O.errorHeader,
                                        children: x.intl.string(x.t["tWYWJ+"]),
                                    }),
                                    (0, r.jsx)(l.Text, {
                                        variant: "text-md/normal",
                                        color: "text-muted",
                                        children: x.intl.string(x.t.JNQRU4),
                                    }),
                                ],
                            }),
                            (0, r.jsx)("div", {
                                className: O.buttonContainer,
                                children: (0, r.jsx)(l.Button, {
                                    variant: "primary",
                                    fullWidth: !0,
                                    text: x.intl.string(x.t.cpT0Cq),
                                    onClick: o,
                                }),
                            }),
                        ],
                    }),
        ],
    });
}
function w(e) {
    var t,
        n,
        { quest: o, onClose: c } = e,
        i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                a = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        a = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (r = 0; r < o.length; r++)
                    (n = o[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
            }
            return a;
        })(e, ["quest", "onClose"]);
    let { balance: s } = (0, h.A)(),
        l = (function (e, t, n) {
            let [r, o] = a.useState("loading"),
                [c, i] = a.useState(!1),
                { balance: s } = (0, h.A)(),
                l = (0, d.Z)(s),
                [u, f] = a.useState(!1);
            return (a.useEffect(() => {
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
            a.useEffect(() => {
                !c && null != s && null != l && s > l && i(!0);
            }, [s, l, c]),
            a.useEffect(() => {
                (0, y.QB)(e, E.y$.CROSS_PLATFORM, n)
                    .then((e) => {
                        if ((null == e ? void 0 : e.claimedAt) != null) return void o("success");
                        o("error");
                    })
                    .catch(() => {
                        o("error");
                    });
            }, [e, n]),
            "error" === r)
                ? r
                : "success" === r && (c || u)
                  ? "success"
                  : "loading";
        })(o.id, o.preview, i.location),
        u = a.useCallback(() => {
            c(),
                (0, m.Y)({
                    pageType: j.ZY5.GLOBAL_DISCOVERY_QUESTS,
                    sectionType: j.jXE.ORBS_REWARD_MODAL,
                    ctaObject: j.qAy.CTA_TO_ORBS_SHOP,
                }),
                (0, p.mK)({
                    tab: R.AW.ORBS,
                    analyticsLocations: [],
                    analyticsSource: o.id === v.V6 ? b.Z.INTRO_TO_ORBS_QUEST : b.Z.QUEST_HOME_PAGE,
                });
        }, [c, o.id]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(C.o, {}),
            (0, r.jsx)(
                T,
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
                })({}, i)),
                (n = n =
                    {
                        balance: s,
                        onClose: c,
                        onSubmit: u,
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
