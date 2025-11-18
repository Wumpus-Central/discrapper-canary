n.r(t), n.d(t, { default: () => y }), n(388685);
var r = n(54381),
    a = n(473749),
    i = n(120356),
    s = n.n(i),
    d = n(990547),
    o = n(481060),
    c = n(213609),
    l = n(70097),
    u = n(483444),
    _ = n(626135),
    p = n(553896),
    b = n(848572),
    g = n(474936),
    f = n(981631),
    m = n(388032),
    x = n(225002);
function y(e) {
    var t;
    let { levelUpData: n } = e,
        [i, y] = a.useState(!1),
        [h, O] = a.useState(!1),
        [T, j] = a.useState(!1),
        v = (0, b.GG)(),
        E = a.useRef(null),
        w = a.useRef(null),
        { currentBadge: P, prevBadge: N, levelUpVideoSrc: U } = n,
        k = a.useCallback(() => {
            let e = 700 * (P.id !== g.VU.PREMIUM_TENURE_1_MONTH);
            (w.current.currentTime = 0),
                setTimeout(() => {
                    j(!0), w.current.play();
                }, e);
        }, [P.id]);
    a.useEffect(() => {
        i && k();
    }, [i, k]),
        (0, c.Z)(
            {
                type: d.ImpressionTypes.POPOUT,
                name: d.ImpressionNames.TIERED_TENURE_BADGE_LEVEL_UP,
                properties: { new_badge_id: P.id },
            },
            { trackOnInitialLoad: !0 },
        ),
        a.useEffect(() => {
            null != w.current && w.current.load();
        }, []);
    let B = a.useCallback(() => {
            O(!1),
                j(!1),
                k(),
                (E.current.style.display = "none"),
                E.current.offsetWidth,
                (E.current.style.display = ""),
                _.default.track(f.rMx.TIERED_TENURE_BADGE_LEVEL_UP_REPLAY_CLICKED, { new_badge_id: P.id });
        }, [P.id, k]),
        C = {
            "--custom-old-badge-color": "linear-gradient(to right, ".concat(
                null != (t = n.prevBadgeTextGradient) ? t : "transparent",
                ")",
            ),
            "--custom-new-badge-color": "linear-gradient(to right, ".concat(n.currentBadgeTextGradient, ")"),
        };
    return (0, r.jsxs)("div", {
        className: s()(x.content, {
            [x.ended]: h,
            [x.loaded]: i,
            [x.started]: T,
        }),
        style: C,
        ref: E,
        children: [
            (0, r.jsx)(l.Z, {
                ref: w,
                className: x.video,
                src: U,
                playsInline: !0,
                onLoadedData: () => y(!0),
                onEnded: () => O(!0),
            }),
            (0, r.jsxs)("div", {
                className: x.textContainer,
                children: [
                    (0, r.jsx)(u.Z, {
                        width: 60,
                        height: 15,
                    }),
                    null != N &&
                        (0, r.jsx)(o.Text, {
                            variant: "display-md",
                            className: s()(x.badgeText, x.old),
                            children: m.intl.string(N.nameUnformatted),
                        }),
                    (0, r.jsx)(o.Text, {
                        variant: "display-md",
                        className: s()(x.badgeText, x.new),
                        children: m.intl.string(P.nameUnformatted),
                    }),
                    null != v &&
                        (0, r.jsx)(o.Text, {
                            variant: "text-xs/medium",
                            className: x.subscribedText,
                            children: m.intl.formatToPlainString(m.t["f/OGgM"], {
                                timeFrame: (0, p.q)(P.id, P.tenureReqNumMonths),
                                date: v,
                            }),
                        }),
                    (0, r.jsx)("div", {
                        className: x.actionButtons,
                        children: (0, r.jsx)(o.aML, {
                            "data-migration-pending": !0,
                            text: m.intl.string(m.t.hsvh0i),
                            children: (e) => {
                                var t, n;
                                return (0, r.jsx)(
                                    o.hU,
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
                                    })({}, e)),
                                    (n = n =
                                        {
                                            icon: o.o1U,
                                            variant: "secondary",
                                            size: "sm",
                                            onClick: B,
                                            "aria-label": m.intl.string(m.t.hsvh0i),
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
                                );
                            },
                        }),
                    }),
                ],
            }),
        ],
    });
}
