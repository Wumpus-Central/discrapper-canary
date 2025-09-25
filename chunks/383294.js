n.d(t, { default: () => T }), n(388685);
var r = n(951288),
    a = n(647438),
    i = n(120356),
    l = n.n(i),
    c = n(6383),
    s = n(442837),
    o = n(481060),
    d = n(110924),
    u = n(410030),
    h = n(607070),
    _ = n(100527),
    b = n(335131),
    f = n(70097),
    C = n(507808),
    m = n(43747),
    p = n(82856),
    R = n(960919),
    E = n(272008),
    g = n(497505),
    y = n(46140),
    O = n(981631),
    A = n(215023),
    S = n(388032),
    N = n(378658),
    v = n(557256),
    L = n(582425),
    I = n(345554),
    B = n(88490),
    j = n(466674);
function x() {
    let e = (0, s.e7)([h.Z], () => h.Z.useReducedMotion),
        [t, n] = a.useState(!e),
        [i, d] = a.useState(!1),
        _ = a.useRef(null),
        b = (0, u.ZP)(),
        C = (0, o.apv)(b),
        m = C ? I.Z : L.Z,
        p = C ? j.Z : B.Z;
    a.useEffect(() => {
        if (!t && !e) {
            var n;
            null == (n = _.current) || n.play();
        }
    }, [t, e]);
    let R = (0, o.q_F)({
        from: { y: 50 },
        to: { y: 0 },
        config: {
            tension: 170,
            friction: 26,
        },
    });
    return (0, r.jsxs)(c.animated.div, {
        className: N.videoLayers,
        style: R,
        children: [
            !i && (0, r.jsx)("div", { className: N.videoPlaceholder }),
            (0, r.jsx)(f.Z, {
                ref: _,
                autoPlay: !1,
                loop: !0,
                muted: !0,
                playsInline: !0,
                className: l()(N.videoAsset, { [N.hidden]: t }),
                controls: !1,
                children: (0, r.jsx)("source", {
                    src: p,
                    type: "video/webm",
                }),
            }),
            (0, r.jsx)(f.Z, {
                autoPlay: !0,
                muted: !0,
                playsInline: !0,
                className: l()(N.videoAsset, { [N.hidden]: !t }),
                controls: !1,
                onLoadedData: () => d(!0),
                onEnded: () => {
                    n(!1);
                },
                children: (0, r.jsx)("source", {
                    src: m,
                    type: "video/webm",
                }),
            }),
        ],
    });
}
function U(e) {
    let { transitionState: t, balance: n, onSubmit: a, onClose: i, state: l } = e;
    return (0, r.jsxs)(o.Y0X, {
        "data-migration-pending": !0,
        transitionState: t,
        size: o.CgR.DYNAMIC,
        className: N.modal,
        parentComponent: "QuestsOrbsRewardModal",
        children: [
            (0, r.jsx)("div", {
                className: N.header,
                children: (0, r.jsx)(o.olH, {
                    "data-migration-pending": !0,
                    className: N.closeBtn,
                    onClick: i,
                }),
            }),
            "loading" === l
                ? (0, r.jsx)("div", {
                      className: N.spinnerContainer,
                      children: (0, r.jsx)(o.$jN, { type: o.RAz.SPINNING_CIRCLE }),
                  })
                : "success" === l
                  ? (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(x, {}),
                            (0, r.jsx)(o.X6q, {
                                variant: "heading-lg/medium",
                                className: N.title,
                                children: S.intl.format(S.t["8l9H0t"], {
                                    balanceHook: () =>
                                        (0, r.jsxs)("span", {
                                            className: N.orbsBalance,
                                            children: [
                                                (0, r.jsx)(R.Z, {
                                                    shouldUseThemeColor: !0,
                                                    className: N.orbsBalanceIcon,
                                                }),
                                                n,
                                            ],
                                        }),
                                }),
                            }),
                            (0, r.jsx)(o.Text, {
                                variant: "text-sm/normal",
                                className: N.subtext,
                                children: S.intl.string(S.t.EDUOIC),
                            }),
                            (0, r.jsxs)(o.hE2, {
                                className: N.buttonContainer,
                                fullWidthContainer: !0,
                                fullWidth: !0,
                                direction: "vertical",
                                children: [
                                    (0, r.jsx)(o.zxk, {
                                        variant: "primary",
                                        fullWidth: !0,
                                        text: S.intl.string(S.t.WYchdX),
                                        onClick: a,
                                    }),
                                    (0, r.jsx)(o.zxk, {
                                        variant: "secondary",
                                        fullWidth: !0,
                                        text: S.intl.string(S.t["7kTAgI"]),
                                        onClick: () => window.open(O.EYA.PAID_TERMS_ORBS),
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
                                src: v,
                            }),
                            (0, r.jsxs)("div", {
                                className: N.errorContentContainer,
                                children: [
                                    (0, r.jsx)(o.X6q, {
                                        variant: "heading-xl/medium",
                                        className: N.errorHeader,
                                        children: S.intl.string(S.t.tWYWJy),
                                    }),
                                    (0, r.jsx)(o.Text, {
                                        variant: "text-md/normal",
                                        color: "text-muted",
                                        children: S.intl.string(S.t.JNQRU1),
                                    }),
                                ],
                            }),
                            (0, r.jsx)("div", {
                                className: N.buttonContainer,
                                children: (0, r.jsx)(o.zxk, {
                                    variant: "primary",
                                    fullWidth: !0,
                                    text: S.intl.string(S.t.cpT0Cg),
                                    onClick: i,
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
        { quest: i, onClose: l } = e,
        c = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                a = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        a = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++)
                    (n = i[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
            }
            return a;
        })(e, ["quest", "onClose"]);
    let { balance: s } = (0, m.A)(),
        o = (function (e, t, n) {
            let [r, i] = a.useState("loading"),
                [l, c] = a.useState(!1),
                { balance: s } = (0, m.A)(),
                o = (0, d.Z)(s),
                [u, h] = a.useState(!1);
            return (a.useEffect(() => {
                let e = null;
                return (
                    "success" === r &&
                        t &&
                        (e = setTimeout(() => {
                            h(!0);
                        }, 1000)),
                    () => {
                        null != e && clearTimeout(e);
                    }
                );
            }, [r, t]),
            a.useEffect(() => {
                !l && null != s && null != o && s > o && c(!0);
            }, [s, o, l]),
            a.useEffect(() => {
                (0, E.QB)(e, g.y$.CROSS_PLATFORM, n)
                    .then((e) => {
                        if ((null == e ? void 0 : e.claimedAt) != null) return void i("success");
                        i("error");
                    })
                    .catch(() => {
                        i("error");
                    });
            }, [e, n]),
            "error" === r)
                ? r
                : "success" === r && (l || u)
                  ? "success"
                  : "loading";
        })(i.id, i.preview, c.location),
        u = a.useCallback(() => {
            l(),
                (0, C.Y)({
                    pageType: O.ZY5.GLOBAL_DISCOVERY_QUESTS,
                    sectionType: O.jXE.ORBS_REWARD_MODAL,
                    ctaObject: O.qAy.CTA_TO_ORBS_SHOP,
                }),
                (0, b.mK)({
                    openInLayer: !1,
                    tab: A.AW.ORBS,
                    analyticsLocations: [],
                    analyticsSource: i.id === y.V6 ? _.Z.INTRO_TO_ORBS_QUEST : _.Z.QUEST_HOME_PAGE,
                });
        }, [l, i.id]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(p.o, {}),
            (0, r.jsx)(
                U,
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
                })({}, c)),
                (n = n =
                    {
                        balance: s,
                        onClose: l,
                        onSubmit: u,
                        state: o,
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
