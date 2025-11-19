n.d(t, { default: () => Z }), n(388685);
var r = n(54381),
    c = n(473749),
    s = n(120356),
    a = n.n(s),
    o = n(790519),
    i = n(442837),
    l = n(481060),
    d = n(110924),
    u = n(410030),
    f = n(607070),
    b = n(100527),
    m = n(335131),
    p = n(70097),
    h = n(507808),
    j = n(43747),
    y = n(82856),
    O = n(960919),
    x = n(22095),
    v = n(497505),
    g = n(46140),
    C = n(981631),
    _ = n(215023),
    S = n(388032),
    N = n(378658),
    P = n(557256),
    w = n(582425),
    A = n(345554),
    B = n(88490),
    E = n(466674);
function R() {
    let e = (0, i.e7)([f.Z], () => f.Z.useReducedMotion),
        [t, n] = c.useState(!e),
        [s, d] = c.useState(!1),
        b = c.useRef(null),
        m = (0, u.ZP)(),
        h = (0, l.apv)(m),
        j = h ? A.Z : w.Z,
        y = h ? E.Z : B.Z;
    c.useEffect(() => {
        if (!t && !e) {
            var n;
            null == (n = b.current) || n.play();
        }
    }, [t, e]);
    let O = (0, l.q_F)({
        from: { y: 50 },
        to: { y: 0 },
        config: {
            tension: 170,
            friction: 26,
        },
    });
    return (0, r.jsxs)(o.animated.div, {
        className: N.videoLayers,
        style: O,
        children: [
            !s && (0, r.jsx)("div", { className: N.videoPlaceholder }),
            (0, r.jsx)(p.Z, {
                ref: b,
                autoPlay: !1,
                loop: !0,
                muted: !0,
                playsInline: !0,
                className: a()(N.videoAsset, { [N.hidden]: t }),
                controls: !1,
                children: (0, r.jsx)("source", {
                    src: y,
                    type: "video/webm",
                }),
            }),
            (0, r.jsx)(p.Z, {
                autoPlay: !0,
                muted: !0,
                playsInline: !0,
                className: a()(N.videoAsset, { [N.hidden]: !t }),
                controls: !1,
                onLoadedData: () => d(!0),
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
function T(e) {
    let { transitionState: t, balance: n, onSubmit: c, onClose: s, state: a } = e;
    return (0, r.jsxs)(l.Y0X, {
        "data-migration-pending": !0,
        transitionState: t,
        size: l.CgR.DYNAMIC,
        className: N.modal,
        parentComponent: "QuestsOrbsRewardModal",
        children: [
            (0, r.jsx)("div", {
                className: N.header,
                children: (0, r.jsx)(l.olH, {
                    "data-migration-pending": !0,
                    className: N.closeBtn,
                    onClick: s,
                }),
            }),
            "loading" === a
                ? (0, r.jsx)("div", {
                      className: N.spinnerContainer,
                      children: (0, r.jsx)(l.$jN, { type: l.RAz.SPINNING_CIRCLE }),
                  })
                : "success" === a
                  ? (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(R, {}),
                            (0, r.jsx)(l.Heading, {
                                variant: "heading-lg/medium",
                                className: N.title,
                                children: S.intl.format(S.t["8l9H0s"], {
                                    balanceHook: () =>
                                        (0, r.jsxs)("span", {
                                            className: N.orbsBalance,
                                            children: [
                                                (0, r.jsx)(O.Z, {
                                                    shouldUseThemeColor: !0,
                                                    className: N.orbsBalanceIcon,
                                                }),
                                                n,
                                            ],
                                        }),
                                }),
                            }),
                            (0, r.jsx)(l.Text, {
                                variant: "text-sm/normal",
                                className: N.subtext,
                                children: S.intl.string(S.t.EDUOIH),
                            }),
                            (0, r.jsxs)(l.ButtonGroup, {
                                className: N.buttonContainer,
                                fullWidthContainer: !0,
                                fullWidth: !0,
                                direction: "vertical",
                                children: [
                                    (0, r.jsx)(l.Button, {
                                        variant: "primary",
                                        fullWidth: !0,
                                        text: S.intl.string(S.t.WYchde),
                                        onClick: c,
                                    }),
                                    (0, r.jsx)(l.Button, {
                                        variant: "secondary",
                                        fullWidth: !0,
                                        text: S.intl.string(S.t["7kTAgJ"]),
                                        onClick: () => window.open(C.EYA.PAID_TERMS_ORBS),
                                    }),
                                ],
                            }),
                        ],
                    })
                  : (0, r.jsxs)("div", {
                        className: N.errorContainer,
                        children: [
                            (0, r.jsx)("img", {
                                alt: "",
                                className: N.errorImage,
                                src: P,
                            }),
                            (0, r.jsxs)("div", {
                                className: N.errorContentContainer,
                                children: [
                                    (0, r.jsx)(l.Heading, {
                                        variant: "heading-xl/medium",
                                        className: N.errorHeader,
                                        children: S.intl.string(S.t["tWYWJ+"]),
                                    }),
                                    (0, r.jsx)(l.Text, {
                                        variant: "text-md/normal",
                                        color: "text-muted",
                                        children: S.intl.string(S.t.JNQRU4),
                                    }),
                                ],
                            }),
                            (0, r.jsx)("div", {
                                className: N.buttonContainer,
                                children: (0, r.jsx)(l.Button, {
                                    variant: "primary",
                                    fullWidth: !0,
                                    text: S.intl.string(S.t.cpT0Cq),
                                    onClick: s,
                                }),
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
    let { balance: i } = (0, j.A)(),
        l = (function (e, t, n) {
            let [r, s] = c.useState("loading"),
                [a, o] = c.useState(!1),
                { balance: i } = (0, j.A)(),
                l = (0, d.Z)(i),
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
                !a && null != i && null != l && i > l && o(!0);
            }, [i, l, a]),
            c.useEffect(() => {
                (0, x.QB)(e, v.y$.CROSS_PLATFORM, n)
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
                : "success" === r && (a || u)
                  ? "success"
                  : "loading";
        })(s.id, s.preview, o.location),
        u = c.useCallback(() => {
            a(),
                (0, h.Y)({
                    pageType: C.ZY5.GLOBAL_DISCOVERY_QUESTS,
                    sectionType: C.jXE.ORBS_REWARD_MODAL,
                    ctaObject: C.qAy.CTA_TO_ORBS_SHOP,
                }),
                (0, m.mK)({
                    tab: _.AW.ORBS,
                    analyticsLocations: [],
                    analyticsSource: s.id === g.V6 ? b.Z.INTRO_TO_ORBS_QUEST : b.Z.QUEST_HOME_PAGE,
                });
        }, [a, s.id]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(y.o, {}),
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
                })({}, o)),
                (n = n =
                    {
                        balance: i,
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
