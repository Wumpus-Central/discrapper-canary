n.d(t, {
    A: () => w,
    n: () => C,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(696292),
    s = n(554146),
    o = n(397927),
    l = n(359549),
    c = n(627363),
    u = n(379848),
    d = n(753845),
    f = n(657331),
    p = n(964195),
    _ = n(939341),
    h = n(263577),
    m = n(506326),
    g = n(868065),
    E = n(424994),
    y = n(518477),
    b = n(985018),
    O = n(22589),
    v = n(332225);

function A(e, t, n) {
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

function I(e) {
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
                A(e, t, n[t]);
            });
    }
    return e;
}

function S(e, t) {
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

function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : S(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let C = [m.iq, m.Zc, m.Xy, m.$X, m.tR, m.K7, m.fg, m.sp, m.MK],
    N = (e) => {
        let {
                entry: t,
                channel: n,
                selected: i,
                hovered: A,
                isFirstApplicationOccurrence: S,
                trackRankingItemInteraction: N,
            } = e,
            { largeImage: w } = (0, _.nO)({
                entry: t,
                showCoverImage: !1,
            }),
            { data: R } = (0, c.YY)(t.extra.application_id),
            P = (0, l.J)(R) && S,
            D = P ? [s.M.CLOUD_PLAY_NEW_BADGE] : [],
            [x] = (0, u.kn)(D);
        return (0, r.jsxs)(g.Zp, {
            selected: i,
            usesCardRows: !0,
            children: [
                (0, r.jsx)(d.A, {
                    applicationId: t.extra.application_id,
                    questContent: a.u.MEMBERS_LIST_CARD,
                    children: (e) => {
                        var i;
                        return (0, r.jsxs)(g.dM, {
                            ref: e,
                            children: [
                                (0, r.jsxs)(g.UA, {
                                    children: [
                                        (0, r.jsx)(g.Hp, {
                                            entry: t,
                                            channelId: n.id,
                                            guildId: n.guild_id,
                                        }),
                                        (0, r.jsx)(g.ZB, {
                                            children: t.extra.game_name,
                                        }),
                                        (0, r.jsx)(m.mG, {
                                            location: m.N5.CARD,
                                            children: C.map((e, n) =>
                                                (0, r.jsx)(
                                                    e,
                                                    {
                                                        entry: t,
                                                        hovered: A,
                                                    },
                                                    n,
                                                ),
                                            ),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(h.V, {
                                    alt: null != (i = null == w ? void 0 : w.text) ? i : null == w ? void 0 : w.alt,
                                    src: null == w ? void 0 : w.src,
                                    size: 48,
                                    className: v.xn,
                                    showTooltip: (null == w ? void 0 : w.text) != null,
                                }),
                            ],
                        });
                    },
                }),
                P &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(g.ik, {}),
                            (0, r.jsxs)(g.dM, {
                                className: O.DK,
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: O.tJ,
                                        children: [
                                            (0, r.jsx)(o.hpF, {
                                                color: o.LU0.colors.ICON_SUBTLE,
                                                size: "xxs",
                                            }),
                                            (0, r.jsx)(o.Text, {
                                                variant: "text-xs/normal",
                                                color: "text-subtle",
                                                children: b.intl.string(b.t["5HiF2i"]),
                                            }),
                                        ],
                                    }),
                                    x === s.M.CLOUD_PLAY_NEW_BADGE &&
                                        (0, r.jsx)(o.LpS, {
                                            text: b.intl.string(b.t.y2b7CA),
                                            color: o.LU0.colors.BACKGROUND_BRAND.css,
                                        }),
                                ],
                            }),
                        ],
                    }),
                "applicationWidgetPreview" in t &&
                    null != t.applicationWidgetPreview &&
                    (0, r.jsx)(
                        p.F,
                        T(I({}, t.applicationWidgetPreview), {
                            className: O.AB,
                            onClickViewMore: () => {
                                N(E.PA.APPLICATION_WIDGET_PREVIEW_VIEW_MORE),
                                    (0, f.openUserProfileModal)({
                                        userId: t.author_id,
                                        tabSection: y.RP.WIDGETS,
                                    });
                            },
                        }),
                    ),
            ],
        });
    },
    w = i.memo(N);
