"use strict";
n.d(t, { A: () => p });
var i = n(477900);
n(582128);
var r = n(503698),
    a = n.n(r),
    s = n(933832),
    l = n(789645),
    o = n(834730),
    d = n(297264),
    c = n(116891),
    u = n(652215),
    _ = n(202541),
    E = n(375708),
    A = n(456996);
let h = [
    {
        getPerkLabel: () => E.intl.string(E.t.tIiwuj),
        getTier0Value: () => _.TG[u.TVA.NONE].limits.emoji,
        getTier1Value: () => _.TG[u.TVA.TIER_1].limits.emoji,
        getTier2Value: () => _.TG[u.TVA.TIER_2].limits.emoji,
        getTier3Value: () => _.TG[u.TVA.TIER_3].limits.emoji,
    },
    {
        getPerkLabel: () => E.intl.string(E.t["3iccet"]),
        getTier0Value: () => _.TG[u.TVA.NONE].limits.stickers,
        getTier1Value: () => _.TG[u.TVA.TIER_1].limits.stickers,
        getTier2Value: () => _.TG[u.TVA.TIER_2].limits.stickers,
        getTier3Value: () => _.TG[u.TVA.TIER_3].limits.stickers,
    },
    {
        getPerkLabel: () => E.intl.string(E.t["+smCv9"]),
        getTier0Value: () => _.TG[u.TVA.NONE].limits.soundboardSounds,
        getTier1Value: () => _.TG[u.TVA.TIER_1].limits.soundboardSounds,
        getTier2Value: () => _.TG[u.TVA.TIER_2].limits.soundboardSounds,
        getTier3Value: () => _.TG[u.TVA.TIER_3].limits.soundboardSounds,
    },
    {
        getPerkLabel: () => E.intl.string(E.t.SMYauD),
        getTier0Value: () =>
            E.intl.formatToPlainString(E.t.zZ6Rdi, {
                resolution: _.TG[u.TVA.NONE].limits.screenShareQualityResolution,
                framerate: _.TG[u.TVA.NONE].limits.screenShareQualityFramerate,
            }),
        getTier1Value: () =>
            E.intl.formatToPlainString(E.t.zZ6Rdi, {
                resolution: _.TG[u.TVA.TIER_1].limits.screenShareQualityResolution,
                framerate: _.TG[u.TVA.TIER_1].limits.screenShareQualityFramerate,
            }),
        getTier2Value: () =>
            E.intl.formatToPlainString(E.t.zZ6Rdi, {
                resolution: (0, c.eT)("GuildBoostingMarketingPerksTable"),
                framerate: _.TG[u.TVA.TIER_2].limits.screenShareQualityFramerate,
            }),
        getTier3Value: () =>
            E.intl.formatToPlainString(E.t.zZ6Rdi, {
                resolution: (0, c.eT)("GuildBoostingMarketingPerksTable"),
                framerate: _.TG[u.TVA.TIER_3].limits.screenShareQualityFramerate,
            }),
    },
    {
        getPerkLabel: () => E.intl.string(E.t["/79IDj"]),
        getTier0Value: () => E.intl.formatToPlainString(E.t.w1gmLt, { bitrate: _.TG[u.TVA.NONE].limits.bitrate / 1e3 }),
        getTier1Value: () =>
            E.intl.formatToPlainString(E.t.w1gmLt, { bitrate: _.TG[u.TVA.TIER_1].limits.bitrate / 1e3 }),
        getTier2Value: () =>
            E.intl.formatToPlainString(E.t.w1gmLt, { bitrate: _.TG[u.TVA.TIER_2].limits.bitrate / 1e3 }),
        getTier3Value: () =>
            E.intl.formatToPlainString(E.t.w1gmLt, { bitrate: _.TG[u.TVA.TIER_3].limits.bitrate / 1e3 }),
    },
    {
        getPerkLabel: () => E.intl.string(E.t.R1U2xC),
        getTier0Value: () =>
            E.intl.formatToPlainString(E.t.pIn7Af, { size: _.TG[u.TVA.NONE].limits.fileSize / 1048576 }),
        getTier1Value: () =>
            E.intl.formatToPlainString(E.t.pIn7Af, { size: _.TG[u.TVA.TIER_1].limits.fileSize / 1048576 }),
        getTier2Value: () =>
            E.intl.formatToPlainString(E.t.pIn7Af, { size: _.TG[u.TVA.TIER_2].limits.fileSize / 1048576 }),
        getTier3Value: () =>
            E.intl.formatToPlainString(E.t.pIn7Af, { size: _.TG[u.TVA.TIER_3].limits.fileSize / 1048576 }),
    },
    {
        getPerkLabel: () => E.intl.string(E.t.f6vfso),
        getTier0Value: () => _.TG[u.TVA.NONE].limits.stageVideoUsers,
        getTier1Value: () => _.TG[u.TVA.TIER_1].limits.stageVideoUsers,
        getTier2Value: () => _.TG[u.TVA.TIER_2].limits.stageVideoUsers,
        getTier3Value: () => _.TG[u.TVA.TIER_3].limits.stageVideoUsers,
    },
    {
        getPerkLabel: () => E.intl.string(E.t.qDqUME),
        getTier0Value: () => !1,
        getTier1Value: () => !0,
        getTier2Value: () => !0,
        getTier3Value: () => !0,
    },
    {
        getPerkLabel: () => E.intl.string(E.t.uwqgbu),
        getTier0Value: () => !1,
        getTier1Value: () => !0,
        getTier2Value: () => !0,
        getTier3Value: () => !0,
    },
    {
        getPerkLabel: () => E.intl.string(E.t.zxsDxc),
        getTier0Value: () => !1,
        getTier1Value: () => !1,
        getTier2Value: () => E.intl.string(E.t["2TNS3n"]),
        getTier3Value: () => E.intl.string(E.t["l+S46U"]),
    },
    {
        getPerkLabel: () => E.intl.string(E.t["bHa+Ee"]),
        getTier0Value: () => !1,
        getTier1Value: () => !1,
        getTier2Value: () => !0,
        getTier3Value: () => !0,
    },
    {
        getPerkLabel: () => E.intl.string(E.t.QV6MZQ),
        getTier0Value: () => !1,
        getTier1Value: () => !1,
        getTier2Value: () => !1,
        getTier3Value: () => !0,
    },
];
function I(e) {
    let { value: t, isBoosted: n = !1 } = e;
    return "boolean" == typeof t
        ? t
            ? (0, i.jsx)(s.A, { size: "md", color: "currentColor", className: A.oE })
            : (0, i.jsx)(l.P, { size: "md", color: "currentColor", className: A.i3 })
        : (0, i.jsx)(o.E, {
              color: n ? "text-strong" : "text-muted",
              variant: n ? "text-md/bold" : "text-md/medium",
              children: t,
          });
}
function f(e) {
    let { currentTier: t } = e,
        n = (function (e) {
            switch (e) {
                case u.TVA.NONE:
                case u.TVA.TIER_1:
                    return u.TVA.TIER_2;
                case u.TVA.TIER_2:
                case u.TVA.TIER_3:
                    return u.TVA.TIER_3;
                default:
                    return null;
            }
        })(t);
    return null == n
        ? null
        : (0, i.jsx)("div", {
              className: a()(A.ER, { [A.GH]: n === u.TVA.TIER_2, [A.z5]: n === u.TVA.TIER_3 }),
              children: (0, i.jsx)(o.E, {
                  className: A.uQ,
                  color: "text-overlay-light",
                  variant: "text-xs/bold",
                  children: t === u.TVA.TIER_3 ? E.intl.string(E.t.d849Up) : E.intl.string(E.t.dZeX1z),
              }),
          });
}
function p(e) {
    let { className: t, guild: n, hideHeading: r = !1, hideTier0: s = !1 } = e;
    return (0, i.jsxs)("div", {
        className: a()(A.iE, t),
        children: [
            !r &&
                (0, i.jsx)(d.D, {
                    className: A.R_,
                    variant: "heading-xxl/semibold",
                    children: E.intl.string(E.t["9GGb9k"]),
                }),
            (0, i.jsxs)("div", {
                className: A.wY,
                children: [
                    null != n && (0, i.jsx)(f, { currentTier: n.premiumTier }),
                    (0, i.jsxs)("div", {
                        className: A.tp,
                        children: [
                            (0, i.jsxs)("div", {
                                className: a()(A.nM, A.U1),
                                children: [
                                    (0, i.jsx)("div", {
                                        className: a()(A.Hn, A.DV),
                                        children: (0, i.jsx)(d.D, {
                                            color: "text-default",
                                            variant: "heading-lg/semibold",
                                            children: E.intl.string(E.t.F5MY0k),
                                        }),
                                    }),
                                    !s &&
                                        (0, i.jsxs)("div", {
                                            className: a()(A.Hn, A.pU),
                                            children: [
                                                (0, i.jsx)(d.D, {
                                                    color: "text-default",
                                                    variant: "heading-lg/semibold",
                                                    children: E.intl.string(E.t.mx8j2m),
                                                }),
                                                (0, i.jsx)(o.E, {
                                                    color: "text-muted",
                                                    variant: "text-sm/medium",
                                                    children: E.intl.format(E.t["pob/cL"], {
                                                        subscriptions: u.M2T[u.TVA.NONE],
                                                    }),
                                                }),
                                            ],
                                        }),
                                    (0, i.jsxs)("div", {
                                        className: a()(A.Hn, A.pU),
                                        children: [
                                            (0, i.jsx)(d.D, {
                                                color: "text-default",
                                                variant: "heading-lg/semibold",
                                                children: E.intl.string(E.t.nzXtaS),
                                            }),
                                            (0, i.jsx)(o.E, {
                                                color: "text-muted",
                                                variant: "text-sm/medium",
                                                children: E.intl.format(E.t["pob/cL"], {
                                                    subscriptions: u.M2T[u.TVA.TIER_1],
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, i.jsxs)("div", {
                                        className: a()(A.Hn, A.pU),
                                        children: [
                                            (0, i.jsx)(d.D, {
                                                color: "text-default",
                                                variant: "heading-lg/semibold",
                                                children: E.intl.string(E.t["h33/uW"]),
                                            }),
                                            (0, i.jsx)(o.E, {
                                                color: "text-muted",
                                                variant: "text-sm/medium",
                                                children: E.intl.format(E.t["pob/cL"], {
                                                    subscriptions: u.M2T[u.TVA.TIER_2],
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, i.jsxs)("div", {
                                        className: a()(A.Hn, A.pU),
                                        children: [
                                            (0, i.jsx)(d.D, {
                                                color: "text-default",
                                                variant: "heading-lg/semibold",
                                                children: E.intl.string(E.t.BfF6ED),
                                            }),
                                            (0, i.jsx)(o.E, {
                                                color: "text-muted",
                                                variant: "text-sm/medium",
                                                children: E.intl.format(E.t["pob/cL"], {
                                                    subscriptions: u.M2T[u.TVA.TIER_3],
                                                }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            h.map((e, t) =>
                                (0, i.jsxs)(
                                    "div",
                                    {
                                        className: a()(A.nM, { [A.fW]: t === h.length - 1 }),
                                        children: [
                                            (0, i.jsx)("div", {
                                                className: a()(A.Hn, A.DV),
                                                children: (0, i.jsx)(o.E, {
                                                    color: "text-muted",
                                                    variant: "text-md/medium",
                                                    children: e.getPerkLabel(),
                                                }),
                                            }),
                                            !s &&
                                                (0, i.jsx)("div", {
                                                    className: a()(A.Hn, A.pU),
                                                    children: (0, i.jsx)(I, { value: e.getTier0Value() }),
                                                }),
                                            (0, i.jsx)("div", {
                                                className: a()(A.Hn, A.pU),
                                                children: (0, i.jsx)(I, { value: e.getTier1Value(), isBoosted: !0 }),
                                            }),
                                            (0, i.jsx)("div", {
                                                className: a()(A.Hn, A.pU),
                                                children: (0, i.jsx)(I, { value: e.getTier2Value(), isBoosted: !0 }),
                                            }),
                                            (0, i.jsx)("div", {
                                                className: a()(A.Hn, A.pU),
                                                children: (0, i.jsx)(I, { value: e.getTier3Value(), isBoosted: !0 }),
                                            }),
                                        ],
                                    },
                                    t,
                                ),
                            ),
                        ],
                    }),
                ],
            }),
        ],
    });
}
