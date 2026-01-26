n.d(t, {
    A: () => N,
    n: () => T,
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
    E = n(518477),
    y = n(985018),
    b = n(22589),
    O = n(332225);

function v(e, t, n) {
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

function A(e) {
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
                v(e, t, n[t]);
            });
    }
    return e;
}

function I(e, t) {
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

function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : I(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let T = [m.iq, m.Zc, m.Xy, m.$X, m.tR, m.K7, m.fg, m.sp, m.MK],
    C = (e) => {
        let { entry: t, channel: n, selected: i, hovered: v, isFirstApplicationOccurrence: I } = e,
            { largeImage: C } = (0, _.nO)({
                entry: t,
                showCoverImage: !1,
            }),
            { data: N } = (0, c.YY)(t.extra.application_id),
            w = (0, l.J)(N) && I,
            R = w ? [s.M.CLOUD_PLAY_NEW_BADGE] : [],
            [P] = (0, u.kn)(R);
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
                                            children: T.map((e, n) =>
                                                (0, r.jsx)(
                                                    e,
                                                    {
                                                        entry: t,
                                                        hovered: v,
                                                    },
                                                    n,
                                                ),
                                            ),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(h.V, {
                                    alt: null != (i = null == C ? void 0 : C.text) ? i : null == C ? void 0 : C.alt,
                                    src: null == C ? void 0 : C.src,
                                    size: 48,
                                    className: O.xn,
                                    showTooltip: (null == C ? void 0 : C.text) != null,
                                }),
                            ],
                        });
                    },
                }),
                w &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(g.ik, {}),
                            (0, r.jsxs)(g.dM, {
                                className: b.DK,
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: b.tJ,
                                        children: [
                                            (0, r.jsx)(o.hpF, {
                                                color: o.LU0.colors.ICON_SUBTLE,
                                                size: "xxs",
                                            }),
                                            (0, r.jsx)(o.Text, {
                                                variant: "text-xs/normal",
                                                color: "text-subtle",
                                                children: y.intl.string(y.t["5HiF2i"]),
                                            }),
                                        ],
                                    }),
                                    P === s.M.CLOUD_PLAY_NEW_BADGE &&
                                        (0, r.jsx)(o.LpS, {
                                            text: y.intl.string(y.t.y2b7CA),
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
                        S(A({}, t.applicationWidgetPreview), {
                            className: b.AB,
                            onClickViewMore: () => {
                                (0, f.openUserProfileModal)({
                                    userId: t.author_id,
                                    tabSection: E.RP.WIDGETS,
                                });
                            },
                        }),
                    ),
            ],
        });
    },
    N = i.memo(C);
