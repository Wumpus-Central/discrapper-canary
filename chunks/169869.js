n.d(t, { ED: () => h, HU: () => T, VW: () => S, dy: () => p, gZ: () => x, ub: () => E, xE: () => A }), n(321073);
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    a = n(735438),
    r = n.n(a),
    o = n(990078),
    d = n(834730),
    u = n(252424),
    c = n(370480),
    g = n(783419),
    m = n(985018),
    _ = n(303604);
function A(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        n = [],
        s = Number(e[g.pK.REDDIT_TOTAL_KARMA] ?? -1),
        l = "1" === e[g.pK.REDDIT_GOLD],
        a = "1" === e[g.pK.REDDIT_MOD];
    return (
        s > -1 && n.push((0, i.jsx)(f, { className: t, count: s, label: m.t.SbCNox }, g.pK.REDDIT_TOTAL_KARMA)),
        l && n.push((0, i.jsx)(v, { className: t, label: m.intl.string(m.t["06rDHU"]) }, g.pK.REDDIT_GOLD)),
        a && n.push((0, i.jsx)(v, { className: t, label: m.intl.string(m.t.oWM95M) }, g.pK.REDDIT_MOD)),
        n
    );
}
function h(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        n = [],
        s = Number(e[g.pK.TWITTER_STATUSES_COUNT] ?? -1),
        l = Number(e[g.pK.TWITTER_FOLLOWERS_COUNT] ?? -1);
    return (
        s > -1 && n.push((0, i.jsx)(f, { className: t, count: s, label: m.t.llwqqe }, g.pK.TWITTER_STATUSES_COUNT)),
        l > -1 && n.push((0, i.jsx)(f, { className: t, count: l, label: m.t.LMNOUQ }, g.pK.TWITTER_FOLLOWERS_COUNT)),
        n
    );
}
function p(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        s = [],
        l = Number(e[g.pK.STEAM_GAME_COUNT] ?? -1),
        a = Number(e[g.pK.STEAM_ITEM_COUNT_DOTA2] ?? -1),
        r = Number(e[g.pK.STEAM_ITEM_COUNT_TF2] ?? -1);
    return (
        l > -1 && s.push((0, i.jsx)(f, { className: t, count: l, label: m.t["ppXMu/"] }, g.pK.STEAM_GAME_COUNT)),
        a > -1 &&
            s.push(
                (0, i.jsx)(
                    C,
                    {
                        className: t,
                        label: m.intl.format(m.t.Y88M5x, { count: a }),
                        imageSrc: n(455070),
                        imageAlt: m.intl.string(m.t.HKUEZo),
                    },
                    g.pK.STEAM_ITEM_COUNT_DOTA2,
                ),
            ),
        r > -1 &&
            s.push(
                (0, i.jsx)(
                    C,
                    {
                        className: t,
                        label: m.intl.format(m.t.Y88M5x, { count: r }),
                        imageSrc: n(101554),
                        imageAlt: m.intl.string(m.t.C8p1Sh),
                    },
                    g.pK.STEAM_ITEM_COUNT_TF2,
                ),
            ),
        s
    );
}
function x(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        n = [];
    return (
        "1" === e[g.pK.PAYPAL_VERIFIED] &&
            n.push((0, i.jsx)(v, { className: l()(t, _.wI), label: m.intl.string(m.t.IhXLyx) }, g.pK.PAYPAL_VERIFIED)),
        n
    );
}
function E(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        n = [],
        s = Number(e[g.pK.EBAY_POSITIVE_FEEDBACK_PERCENTAGE] ?? -1),
        l = "1" === e[g.pK.EBAY_TOP_RATED_SELLER];
    return (
        s > 0 &&
            n.push(
                (0, i.jsx)(
                    f,
                    { className: t, count: s, label: m.t.YmL22d, percent: !0 },
                    g.pK.EBAY_POSITIVE_FEEDBACK_PERCENTAGE,
                ),
            ),
        l && n.push((0, i.jsx)(v, { className: t, label: m.intl.string(m.t.TEEYwa) }, g.pK.EBAY_TOP_RATED_SELLER)),
        n
    );
}
function T(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        n = [],
        s = "1" === e[g.pK.TIKTOK_VERIFIED],
        l = Number(e[g.pK.TIKTOK_FOLLOWER_COUNT] ?? -1),
        a = Number(e[g.pK.TIKTOK_FOLLOWING_COUNT] ?? -1),
        r = Number(e[g.pK.TIKTOK_LIKES_COUNT] ?? -1);
    return (
        l > -1 && n.push((0, i.jsx)(f, { className: t, count: l, label: m.t["Mpm/Bc"] }, g.pK.TIKTOK_FOLLOWER_COUNT)),
        a > -1 && n.push((0, i.jsx)(f, { className: t, count: a, label: m.t.ftf12v }, g.pK.TIKTOK_FOLLOWING_COUNT)),
        r > -1 && n.push((0, i.jsx)(f, { className: t, count: r, label: m.t.Qwhe5j }, g.pK.TIKTOK_LIKES_COUNT)),
        s && n.push((0, i.jsx)(v, { className: t, label: m.intl.string(m.t.QHHwRR) }, g.pK.TIKTOK_VERIFIED)),
        n
    );
}
function S(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
        n = [],
        s = Object.keys(e.metadata);
    if (null == e.application_metadata || 0 === Object.keys(e.application_metadata).length || 0 === s.length) return n;
    for (let l of r().sortBy(s, (t) => e.application_metadata?.[t]?.name)) {
        let s = e.application_metadata[l];
        if (null == s) continue;
        let a = e.metadata[l];
        try {
            switch (s.type) {
                case g.g1.BOOLEAN_EQUAL:
                case g.g1.BOOLEAN_NOT_EQUAL:
                    ((s.type === g.g1.BOOLEAN_EQUAL && "1" === a) ||
                        (s.type === g.g1.BOOLEAN_NOT_EQUAL && "1" !== a)) &&
                        n.push((0, i.jsx)(v, { label: s.name }, s.key));
                    break;
                case g.g1.DATETIME_GREATER_THAN_EQUAL:
                case g.g1.DATETIME_LESS_THAN_EQUAL:
                    n.push((0, i.jsx)(b, { date: a, locale: t, label: s.name }, s.key));
                    break;
                case g.g1.INTEGER_EQUAL:
                case g.g1.INTEGER_NOT_EQUAL:
                case g.g1.INTEGER_GREATER_THAN_EQUAL:
                case g.g1.INTEGER_LESS_THAN_EQUAL:
                    n.push((0, i.jsx)(f, { count: Number(a), label: s.name }, s.key));
            }
        } catch (e) {}
    }
    return n;
}
function f(e) {
    let t,
        { count: n, label: s, className: a, percent: r } = e,
        o = (0, u.$h)(n) + (r ? "%" : "");
    return (
        (t = "string" == typeof s ? m.intl.format(m.t.HLoinF, { name: s, value: o }) : m.intl.format(s, { value: o })),
        (0, i.jsx)(d.E, { className: l()(_.pQ, a), variant: "text-xxs/normal", color: "text-default", children: t })
    );
}
function b(e) {
    let { date: t, locale: n, label: s, className: a } = e;
    return (0, i.jsx)(d.E, {
        className: l()(_.pQ, a),
        variant: "text-xxs/normal",
        color: "text-default",
        children: m.intl.format(m.t.HLoinF, { value: (0, c.An)(t, n), name: s }),
    });
}
function C(e) {
    let { label: t, imageSrc: n, imageAlt: s, className: a } = e;
    return (0, i.jsxs)("div", {
        className: l()(_.pQ, _.uR, a),
        children: [
            (0, i.jsx)(o.m, {
                __unsupportedReactNodeAsText: s,
                children: (0, i.jsx)("img", { src: n, alt: s, className: _.pv }),
            }),
            (0, i.jsx)(d.E, { variant: "text-xxs/normal", color: "text-default", children: t }),
        ],
    });
}
function v(e) {
    let { label: t, className: n } = e;
    return (0, i.jsx)(d.E, {
        variant: "text-xxs/normal",
        color: "text-default",
        className: l()(_.pQ, _.RB, n),
        children: t,
    });
}
