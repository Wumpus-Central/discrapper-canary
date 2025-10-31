n.d(t, { default: () => T }), n(388685);
var r = n(951288),
    c = n(647438),
    o = n(120356),
    a = n.n(o),
    i = n(13941),
    s = n(442837),
    l = n(481060),
    d = n(110924),
    u = n(410030),
    f = n(607070),
    p = n(100527),
    b = n(335131),
    m = n(70097),
    y = n(507808),
    h = n(43747),
    O = n(82856),
    j = n(960919),
    g = n(22095),
    _ = n(497505),
    v = n(46140),
    C = n(981631),
    E = n(215023),
    R = n(388032),
    x = n(898694),
    S = n(557256),
    A = n(582425),
    N = n(345554),
    P = n(88490),
    w = n(466674);
function Z() {
    let e = (0, s.e7)([f.Z], () => f.Z.useReducedMotion),
        [t, n] = c.useState(!e),
        [o, d] = c.useState(!1),
        p = c.useRef(null),
        b = (0, u.ZP)(),
        y = (0, l.apv)(b),
        h = y ? N.Z : A.Z,
        O = y ? w.Z : P.Z;
    c.useEffect(() => {
        if (!t && !e) {
            var n;
            null == (n = p.current) || n.play();
        }
    }, [t, e]);
    let j = (0, l.q_F)({
        from: { y: 50 },
        to: { y: 0 },
        config: {
            tension: 170,
            friction: 26,
        },
    });
    return (0, r.jsxs)(i.animated.div, {
        className: x.videoLayers,
        style: j,
        children: [
            !o && (0, r.jsx)("div", { className: x.videoPlaceholder }),
            (0, r.jsx)(m.Z, {
                ref: p,
                autoPlay: !1,
                loop: !0,
                muted: !0,
                playsInline: !0,
                className: a()(x.videoAsset, { [x.hidden]: t }),
                controls: !1,
                children: (0, r.jsx)("source", {
                    src: O,
                    type: "video/webm",
                }),
            }),
            (0, r.jsx)(m.Z, {
                autoPlay: !0,
                muted: !0,
                playsInline: !0,
                className: a()(x.videoAsset, { [x.hidden]: !t }),
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
function I(e) {
    let { transitionState: t, balance: n, onSubmit: c, onClose: o, state: a } = e;
    return (0, r.jsxs)(l.Y0X, {
        "data-migration-pending": !0,
        transitionState: t,
        size: l.CgR.DYNAMIC,
        className: x.modal,
        parentComponent: "QuestsOrbsRewardModal",
        children: [
            (0, r.jsx)("div", {
                className: x.header,
                children: (0, r.jsx)(l.olH, {
                    "data-migration-pending": !0,
                    className: x.closeBtn,
                    onClick: o,
                }),
            }),
            "loading" === a
                ? (0, r.jsx)("div", {
                      className: x.spinnerContainer,
                      children: (0, r.jsx)(l.$jN, { type: l.RAz.SPINNING_CIRCLE }),
                  })
                : "success" === a
                  ? (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(Z, {}),
                            (0, r.jsx)(l.Heading, {
                                variant: "heading-lg/medium",
                                className: x.title,
                                children: R.intl.format(R.t["8l9H0s"], {
                                    balanceHook: () =>
                                        (0, r.jsxs)("span", {
                                            className: x.orbsBalance,
                                            children: [
                                                (0, r.jsx)(j.Z, {
                                                    shouldUseThemeColor: !0,
                                                    className: x.orbsBalanceIcon,
                                                }),
                                                n,
                                            ],
                                        }),
                                }),
                            }),
                            (0, r.jsx)(l.Text, {
                                variant: "text-sm/normal",
                                className: x.subtext,
                                children: R.intl.string(R.t.EDUOIH),
                            }),
                            (0, r.jsxs)(l.ButtonGroup, {
                                className: x.buttonContainer,
                                fullWidthContainer: !0,
                                fullWidth: !0,
                                direction: "vertical",
                                children: [
                                    (0, r.jsx)(l.Button, {
                                        variant: "primary",
                                        fullWidth: !0,
                                        text: R.intl.string(R.t.WYchde),
                                        onClick: c,
                                    }),
                                    (0, r.jsx)(l.Button, {
                                        variant: "secondary",
                                        fullWidth: !0,
                                        text: R.intl.string(R.t["7kTAgJ"]),
                                        onClick: () => window.open(C.EYA.PAID_TERMS_ORBS),
                                    }),
                                ],
                            }),
                        ],
                    })
                  : (0, r.jsxs)("div", {
                        className: x.errorContainer,
                        children: [
                            (0, r.jsx)("img", {
                                alt: "",
                                className: x.errorImage,
                                src: S,
                            }),
                            (0, r.jsxs)("div", {
                                className: x.errorContentContainer,
                                children: [
                                    (0, r.jsx)(l.Heading, {
                                        variant: "heading-xl/medium",
                                        className: x.errorHeader,
                                        children: R.intl.string(R.t["tWYWJ+"]),
                                    }),
                                    (0, r.jsx)(l.Text, {
                                        variant: "text-md/normal",
                                        color: "text-muted",
                                        children: R.intl.string(R.t.JNQRU4),
                                    }),
                                ],
                            }),
                            (0, r.jsx)("div", {
                                className: x.buttonContainer,
                                children: (0, r.jsx)(l.Button, {
                                    variant: "primary",
                                    fullWidth: !0,
                                    text: R.intl.string(R.t.cpT0Cq),
                                    onClick: o,
                                }),
                            }),
                        ],
                    }),
        ],
    });
}
function T(e) {
    var t,
        n,
        { quest: o, onClose: a } = e,
        i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                c = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        c = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (c[n] = e[n]);
                    return c;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (r = 0; r < o.length; r++)
                    (n = o[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (c[n] = e[n]);
            }
            return c;
        })(e, ["quest", "onClose"]);
    let { balance: s } = (0, h.A)(),
        l = (function (e, t, n) {
            let [r, o] = c.useState("loading"),
                [a, i] = c.useState(!1),
                { balance: s } = (0, h.A)(),
                l = (0, d.Z)(s),
                [u, f] = c.useState(!1);
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
                !a && null != s && null != l && s > l && i(!0);
            }, [s, l, a]),
            c.useEffect(() => {
                (0, g.QB)(e, _.y$.CROSS_PLATFORM, n)
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
                : "success" === r && (a || u)
                  ? "success"
                  : "loading";
        })(o.id, o.preview, i.location),
        u = c.useCallback(() => {
            a(),
                (0, y.Y)({
                    pageType: C.ZY5.GLOBAL_DISCOVERY_QUESTS,
                    sectionType: C.jXE.ORBS_REWARD_MODAL,
                    ctaObject: C.qAy.CTA_TO_ORBS_SHOP,
                }),
                (0, b.mK)({
                    tab: E.AW.ORBS,
                    analyticsLocations: [],
                    analyticsSource: o.id === v.V6 ? p.Z.INTRO_TO_ORBS_QUEST : p.Z.QUEST_HOME_PAGE,
                });
        }, [a, o.id]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(O.o, {}),
            (0, r.jsx)(
                I,
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
                        onClose: a,
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
