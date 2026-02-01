n.d(t, {
    b: () => P,
}),
    n(896048);
var i = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(311907),
    o = n(397927),
    u = n(730134),
    c = n(566903),
    d = n(47167),
    h = n(410540),
    p = n(302223),
    f = n(609425),
    g = n(922301),
    m = n(750112),
    y = n(853390),
    A = n(253932),
    v = n(734057),
    b = n(290863),
    E = n(383501),
    O = n(309010),
    x = n(486020),
    _ = n(914853),
    S = n(545807),
    I = n(652215),
    j = n(985018),
    T = n(742466);
let C = r.memo(function (e) {
    let { startTimestampMs: t } = e,
        n = (0, S.A)(),
        [i, l] = r.useState(() => Date.now());
    r.useEffect(() => {
        let e = n.setInterval(() => l(Date.now()), 1e3);
        return () => n.clearInterval(e);
    }, [n]);
    let a = Math.max(0, (i - t) / 1e3);
    return (0, y.f)(a);
});
C.displayName = "OverlayElapsedTime";
let N = r.memo(function () {
    var e;
    let t = (0, S.A)(),
        [n, i] = r.useState(() => Date.now());
    r.useEffect(() => {
        let e = t.setInterval(() => i(Date.now()), 1e3);
        return () => t.clearInterval(e);
    }, [t]);
    let l =
        null !=
        (e = (0, s.bG)([E.A], () => {
            var e;
            return null != (e = E.A.getDuration()) ? e : 0;
        }, [n]))
            ? e
            : 0;
    return (0, y.f)(l / 1e3);
});

function w(e) {
    var t, n, l, a, y, E, _;
    let S,
        { currentUser: w, activity: P, currentGameName: D } = e,
        R = null != (t = null == w ? void 0 : w.id) ? t : null,
        k = (0, f.A)({
            userId: R,
            guildId: null,
        }),
        { isMobileOnline: M, status: L } = (0, s.cf)(
            [b.A],
            () =>
                null == R
                    ? {
                          isMobileOnline: void 0,
                          status: void 0,
                      }
                    : {
                          isMobileOnline: b.A.isMobileOnline(R),
                          status: b.A.getStatus(R),
                      },
            [R],
        ),
        U = (0, s.bG)([O.A], () => O.A.getVoiceChannelId()),
        G = (0, s.bG)([v.A], () => (null != U ? v.A.getChannel(U) : null), [U]),
        V = (0, d.Ay)(G),
        z = null != (n = (0, h.A)(null != R ? R : "0")) ? n : null,
        F = null != R ? z : null,
        H =
            null == (S = null != (y = (0, c.A)(P, !0).text) ? y : D)
                ? null
                : (null == P ? void 0 : P.type) === I.$pd.PLAYING || null == P
                  ? j.intl.formatToPlainString(j.t.lFApmz, {
                        game: S,
                    })
                  : S,
        Y =
            (null == P || null == (a = P.timestamps) ? void 0 : a.start) != null
                ? (E = P.timestamps.start) < 1e12
                    ? 1e3 * E
                    : E
                : null,
        K = r.useMemo(
            () =>
                (function (e) {
                    let {
                        activityLabel: t,
                        activityStartTimestampMs: n,
                        voiceCallName: i,
                        customStatusActivity: r,
                    } = e;
                    return null != t
                        ? {
                              type: "activity",
                              label: t,
                              startTimestampMs: n,
                          }
                        : null != i
                          ? {
                                type: "voice_call",
                                label: i,
                            }
                          : null != r
                            ? {
                                  type: "custom_status",
                                  customStatusActivity: r,
                              }
                            : {
                                  type: "none",
                              };
                })({
                    activityLabel: H,
                    activityStartTimestampMs: Y,
                    voiceCallName: V,
                    customStatusActivity: F,
                }),
            [H, Y, V, F],
        );
    if (null == w) return null;
    let W =
            null == w.banner
                ? null
                : null !=
                    (_ = (0, x.z)({
                        id: w.id,
                        banner: w.banner,
                        canAnimate: A.kt.getSetting(),
                        size: 600,
                    }))
                  ? _
                  : null,
        B = null != (l = w.globalName) ? l : w.username;
    return (0, i.jsxs)("div", {
        className: T.cI,
        children: [
            (0, i.jsx)("div", {
                className: T.CK,
                style: {
                    backgroundImage: null != W ? "url(".concat(W, ")") : void 0,
                },
            }),
            (0, i.jsxs)("div", {
                className: T.vK,
                children: [
                    (0, i.jsxs)("div", {
                        className: T.iy,
                        children: [
                            (0, i.jsx)(u.A, {
                                user: w,
                                isMobile: M,
                                status: L,
                                className: T.my,
                                size: o._3J.SIZE_40,
                            }),
                            (0, i.jsxs)("div", {
                                className: T.ic,
                                children: [
                                    (0, i.jsx)(m.A, {
                                        userName: B,
                                        textClassName: T.Xh,
                                        displayNameStyles: k,
                                        effectDisplayType: g.G.ANIMATED,
                                    }),
                                    (() => {
                                        switch (K.type) {
                                            case "activity":
                                                return (0, i.jsxs)("div", {
                                                    className: T.nU,
                                                    children: [
                                                        (0, i.jsx)(o._xR, {
                                                            size: "xxs",
                                                            color: "currentColor",
                                                            className: T.Wo,
                                                        }),
                                                        (0, i.jsx)(o.Text, {
                                                            className: T.Yg,
                                                            variant: "text-xs/medium",
                                                            color: "text-subtle",
                                                            children: K.label,
                                                        }),
                                                    ],
                                                });
                                            case "voice_call":
                                                return (0, i.jsxs)("div", {
                                                    className: T.nU,
                                                    children: [
                                                        (0, i.jsx)(o.HKD, {
                                                            size: "xxs",
                                                            color: "currentColor",
                                                            className: T.Wo,
                                                        }),
                                                        (0, i.jsx)(o.Text, {
                                                            className: T.Yg,
                                                            variant: "text-xs/medium",
                                                            color: "text-subtle",
                                                            children: K.label,
                                                        }),
                                                    ],
                                                });
                                            case "custom_status":
                                                return (0, i.jsx)("div", {
                                                    className: T.nU,
                                                    children: (0, i.jsx)(p.A, {
                                                        activity: K.customStatusActivity,
                                                        className: T.tR,
                                                        emojiClassName: T.qp,
                                                        textClassName: T.Yg,
                                                        hideTooltip: !0,
                                                    }),
                                                });
                                            default:
                                                return null;
                                        }
                                    })(),
                                ],
                            }),
                        ],
                    }),
                    "activity" === K.type
                        ? null == K.startTimestampMs
                            ? null
                            : (0, i.jsx)(o.Text, {
                                  className: T.p0,
                                  variant: "code",
                                  tag: "div",
                                  children: (0, i.jsx)(C, {
                                      startTimestampMs: K.startTimestampMs,
                                  }),
                              })
                        : "voice_call" === K.type
                          ? null == U
                              ? null
                              : (0, i.jsx)(o.Text, {
                                    className: T.p0,
                                    variant: "code",
                                    tag: "div",
                                    children: (0, i.jsx)(N, {}),
                                })
                          : null,
                ],
            }),
        ],
    });
}

function P(e) {
    let { currentUser: t, activity: n, currentGameName: r, activeTab: l, onTabChange: a } = e;
    return (0, i.jsxs)("div", {
        className: T.kL,
        children: [
            (0, i.jsx)(w, {
                currentUser: t,
                activity: n,
                currentGameName: r,
            }),
            (0, i.jsx)("div", {
                className: T.vR,
                role: "tablist",
                "aria-label": j.intl.string(j.t.TdEu5X),
                children: [
                    {
                        id: _.x.FRIENDS,
                        label: j.t.TdEu5X,
                    },
                    {
                        id: _.x.MESSAGES,
                        label: j.t.OIgYlQ,
                    },
                    {
                        id: _.x.VOICE,
                        label: j.t.K3lovD,
                    },
                ].map((e) => {
                    let { id: t, label: n } = e;
                    return (0, i.jsx)(
                        D,
                        {
                            tab: t,
                            label: j.intl.formatToPlainString(n, {}),
                            selected: l === t,
                            onSelect: a,
                        },
                        t,
                    );
                }),
            }),
        ],
    });
}

function D(e) {
    let { tab: t, label: n, selected: r, onSelect: l, className: s } = e;
    return (0, i.jsx)(o.DUT, {
        role: "tab",
        "aria-selected": r,
        className: a()(T.Mf, r && T.jP, s),
        onClick: () => l(t),
        children: (0, i.jsx)(o.Text, {
            variant: "text-sm/medium",
            color: "currentColor",
            children: n,
        }),
    });
}
N.displayName = "OverlayVoiceCallElapsedTime";
