a(321073);
var l = a(477900);
a(582128);
var s = a(503698),
    n = a.n(s),
    E = a(435558),
    T = a.n(E),
    _ = a(118751),
    o = a(834730),
    c = a(866665),
    r = a(370480),
    u = a(783419),
    p = a(792996),
    i = a(51407);
function N(t) {
    let e,
        { count: a, label: s, className: E, percent: T } = t,
        c = (0, _.$h)(a) + (T ? "%" : "");
    return (
        (e =
            "string" == typeof s
                ? p.intl.format(p.t.HLoinF, { name: s, value: c })
                : p.intl.format(s, { count: a, value: c })),
        (0, l.jsx)(o.E, { className: n()(i.pQ, E), variant: "footnote/normal", color: "text-default", children: e })
    );
}
function O(t) {
    let { date: e, locale: a, label: s, className: E } = t;
    return (0, l.jsx)(o.E, {
        className: n()(i.pQ, E),
        variant: "footnote/normal",
        color: "text-default",
        children: p.intl.format(p.t.HLoinF, { value: (0, r.An)(e, a), name: s }),
    });
}
function A(t) {
    let { label: e, imageSrc: a, imageAlt: s, className: E } = t;
    return (0, l.jsxs)("div", {
        className: n()(i.pQ, i.uR, E),
        children: [
            (0, l.jsx)(c.m, {
                __unsupportedReactNodeAsText: s,
                children: (0, l.jsx)("img", { src: a, alt: s, className: i.pv }),
            }),
            (0, l.jsx)(o.E, { variant: "footnote/normal", color: "text-default", children: e }),
        ],
    });
}
function m(t) {
    let { label: e, className: a } = t;
    return (0, l.jsx)(o.E, {
        variant: "footnote/normal",
        color: "text-default",
        className: n()(i.pQ, i.RB, a),
        children: e,
    });
}
a.d(
    e,
    {},
    {
        ED: function (t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                a = [],
                s = Number(t[u.pK.TWITTER_STATUSES_COUNT] ?? -1),
                n = Number(t[u.pK.TWITTER_FOLLOWERS_COUNT] ?? -1);
            return (
                s > -1 &&
                    a.push((0, l.jsx)(N, { className: e, count: s, label: p.t.wJZw02 }, u.pK.TWITTER_STATUSES_COUNT)),
                n > -1 &&
                    a.push((0, l.jsx)(N, { className: e, count: n, label: p.t.grbQMy }, u.pK.TWITTER_FOLLOWERS_COUNT)),
                a
            );
        },
        HU: function (t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                a = [],
                s = "1" === t[u.pK.TIKTOK_VERIFIED],
                n = Number(t[u.pK.TIKTOK_FOLLOWER_COUNT] ?? -1),
                E = Number(t[u.pK.TIKTOK_FOLLOWING_COUNT] ?? -1),
                T = Number(t[u.pK.TIKTOK_LIKES_COUNT] ?? -1);
            return (
                n > -1 &&
                    a.push((0, l.jsx)(N, { className: e, count: n, label: p.t["O0/8iD"] }, u.pK.TIKTOK_FOLLOWER_COUNT)),
                E > -1 &&
                    a.push((0, l.jsx)(N, { className: e, count: E, label: p.t.ftf12v }, u.pK.TIKTOK_FOLLOWING_COUNT)),
                T > -1 && a.push((0, l.jsx)(N, { className: e, count: T, label: p.t.tEyTTp }, u.pK.TIKTOK_LIKES_COUNT)),
                s && a.push((0, l.jsx)(m, { className: e, label: p.intl.string(p.t.QHHwRR) }, u.pK.TIKTOK_VERIFIED)),
                a
            );
        },
        VW: function (t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                a = [],
                s = Object.keys(t.metadata);
            if (null == t.application_metadata || 0 === Object.keys(t.application_metadata).length || 0 === s.length)
                return a;
            for (let n of T().sortBy(s, (e) => t.application_metadata?.[e]?.name)) {
                let s = t.application_metadata[n];
                if (null == s) continue;
                let E = t.metadata[n];
                try {
                    switch (s.type) {
                        case u.g1.BOOLEAN_EQUAL:
                        case u.g1.BOOLEAN_NOT_EQUAL:
                            ((s.type === u.g1.BOOLEAN_EQUAL && "1" === E) ||
                                (s.type === u.g1.BOOLEAN_NOT_EQUAL && "1" !== E)) &&
                                a.push((0, l.jsx)(m, { label: s.name }, s.key));
                            break;
                        case u.g1.DATETIME_GREATER_THAN_EQUAL:
                        case u.g1.DATETIME_LESS_THAN_EQUAL:
                            a.push((0, l.jsx)(O, { date: E, locale: e, label: s.name }, s.key));
                            break;
                        case u.g1.INTEGER_EQUAL:
                        case u.g1.INTEGER_NOT_EQUAL:
                        case u.g1.INTEGER_GREATER_THAN_EQUAL:
                        case u.g1.INTEGER_LESS_THAN_EQUAL:
                            a.push((0, l.jsx)(N, { count: Number(E), label: s.name }, s.key));
                    }
                } catch (t) {}
            }
            return a;
        },
        dy: function (t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                s = [],
                n = Number(t[u.pK.STEAM_GAME_COUNT] ?? -1),
                E = Number(t[u.pK.STEAM_ITEM_COUNT_DOTA2] ?? -1),
                T = Number(t[u.pK.STEAM_ITEM_COUNT_TF2] ?? -1);
            return (
                n > -1 && s.push((0, l.jsx)(N, { className: e, count: n, label: p.t.ZatMuX }, u.pK.STEAM_GAME_COUNT)),
                E > -1 &&
                    s.push(
                        (0, l.jsx)(
                            A,
                            {
                                className: e,
                                label: p.intl.format(p.t.Y88M5x, { count: E }),
                                imageSrc: a(455070),
                                imageAlt: p.intl.string(p.t.HKUEZo),
                            },
                            u.pK.STEAM_ITEM_COUNT_DOTA2,
                        ),
                    ),
                T > -1 &&
                    s.push(
                        (0, l.jsx)(
                            A,
                            {
                                className: e,
                                label: p.intl.format(p.t.Y88M5x, { count: T }),
                                imageSrc: a(101554),
                                imageAlt: p.intl.string(p.t.C8p1Sh),
                            },
                            u.pK.STEAM_ITEM_COUNT_TF2,
                        ),
                    ),
                s
            );
        },
        gZ: function (t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                a = [];
            return (
                "1" === t[u.pK.PAYPAL_VERIFIED] &&
                    a.push(
                        (0, l.jsx)(
                            m,
                            { className: n()(e, i.wI), label: p.intl.string(p.t.IhXLyx) },
                            u.pK.PAYPAL_VERIFIED,
                        ),
                    ),
                a
            );
        },
        ub: function (t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                a = [],
                s = Number(t[u.pK.EBAY_POSITIVE_FEEDBACK_PERCENTAGE] ?? -1),
                n = "1" === t[u.pK.EBAY_TOP_RATED_SELLER];
            return (
                s > 0 &&
                    a.push(
                        (0, l.jsx)(
                            N,
                            { className: e, count: s, label: p.t.YmL22d, percent: !0 },
                            u.pK.EBAY_POSITIVE_FEEDBACK_PERCENTAGE,
                        ),
                    ),
                n &&
                    a.push(
                        (0, l.jsx)(m, { className: e, label: p.intl.string(p.t.TEEYwa) }, u.pK.EBAY_TOP_RATED_SELLER),
                    ),
                a
            );
        },
        uq: function (t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                a = [],
                s = Number(t[u.pK.LETTERBOXD_WATCHES] ?? -1),
                n = Number(t[u.pK.LETTERBOXD_FILMS_IN_DIARY_THIS_YEAR] ?? -1);
            return (
                s > -1 && a.push((0, l.jsx)(N, { className: e, count: s, label: p.t.Ck2y4x }, u.pK.LETTERBOXD_WATCHES)),
                n > -1 &&
                    a.push(
                        (0, l.jsx)(
                            N,
                            { className: e, count: n, label: p.t["5JpDYR"] },
                            u.pK.LETTERBOXD_FILMS_IN_DIARY_THIS_YEAR,
                        ),
                    ),
                a
            );
        },
        xE: function (t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                a = [],
                s = Number(t[u.pK.REDDIT_TOTAL_KARMA] ?? -1),
                n = "1" === t[u.pK.REDDIT_GOLD],
                E = "1" === t[u.pK.REDDIT_MOD];
            return (
                s > -1 && a.push((0, l.jsx)(N, { className: e, count: s, label: p.t.SbCNox }, u.pK.REDDIT_TOTAL_KARMA)),
                n && a.push((0, l.jsx)(m, { className: e, label: p.intl.string(p.t["06rDHU"]) }, u.pK.REDDIT_GOLD)),
                E && a.push((0, l.jsx)(m, { className: e, label: p.intl.string(p.t.oWM95M) }, u.pK.REDDIT_MOD)),
                a
            );
        },
    },
);
