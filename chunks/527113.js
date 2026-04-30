"use strict";
n.d(t, { A: () => g });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(933832),
    o = n(789645),
    l = n(834730),
    u = n(534514),
    c = n(116891),
    d = n(652215),
    _ = n(788868),
    f = n(375708),
    h = n(131148);
let p = [
    {
        getPerkLabel: () => f.intl.string(f.t.tIiwuj),
        getTier0Value: () => _.TG[d.TVA.NONE].limits.emoji,
        getTier1Value: () => _.TG[d.TVA.TIER_1].limits.emoji,
        getTier2Value: () => _.TG[d.TVA.TIER_2].limits.emoji,
        getTier3Value: () => _.TG[d.TVA.TIER_3].limits.emoji,
    },
    {
        getPerkLabel: () => f.intl.string(f.t["3iccet"]),
        getTier0Value: () => _.TG[d.TVA.NONE].limits.stickers,
        getTier1Value: () => _.TG[d.TVA.TIER_1].limits.stickers,
        getTier2Value: () => _.TG[d.TVA.TIER_2].limits.stickers,
        getTier3Value: () => _.TG[d.TVA.TIER_3].limits.stickers,
    },
    {
        getPerkLabel: () => f.intl.string(f.t["+smCv9"]),
        getTier0Value: () => _.TG[d.TVA.NONE].limits.soundboardSounds,
        getTier1Value: () => _.TG[d.TVA.TIER_1].limits.soundboardSounds,
        getTier2Value: () => _.TG[d.TVA.TIER_2].limits.soundboardSounds,
        getTier3Value: () => _.TG[d.TVA.TIER_3].limits.soundboardSounds,
    },
    {
        getPerkLabel: () => f.intl.string(f.t.SMYauD),
        getTier0Value: () =>
            f.intl.formatToPlainString(f.t.zZ6Rdi, {
                resolution: _.TG[d.TVA.NONE].limits.screenShareQualityResolution,
                framerate: _.TG[d.TVA.NONE].limits.screenShareQualityFramerate,
            }),
        getTier1Value: () =>
            f.intl.formatToPlainString(f.t.zZ6Rdi, {
                resolution: _.TG[d.TVA.TIER_1].limits.screenShareQualityResolution,
                framerate: _.TG[d.TVA.TIER_1].limits.screenShareQualityFramerate,
            }),
        getTier2Value: () =>
            f.intl.formatToPlainString(f.t.zZ6Rdi, {
                resolution: (0, c.eT)("GuildBoostingMarketingPerksTable"),
                framerate: _.TG[d.TVA.TIER_2].limits.screenShareQualityFramerate,
            }),
        getTier3Value: () =>
            f.intl.formatToPlainString(f.t.zZ6Rdi, {
                resolution: (0, c.eT)("GuildBoostingMarketingPerksTable"),
                framerate: _.TG[d.TVA.TIER_3].limits.screenShareQualityFramerate,
            }),
    },
    {
        getPerkLabel: () => f.intl.string(f.t["/79IDj"]),
        getTier0Value: () => f.intl.formatToPlainString(f.t.w1gmLt, { bitrate: _.TG[d.TVA.NONE].limits.bitrate / 1e3 }),
        getTier1Value: () =>
            f.intl.formatToPlainString(f.t.w1gmLt, { bitrate: _.TG[d.TVA.TIER_1].limits.bitrate / 1e3 }),
        getTier2Value: () =>
            f.intl.formatToPlainString(f.t.w1gmLt, { bitrate: _.TG[d.TVA.TIER_2].limits.bitrate / 1e3 }),
        getTier3Value: () =>
            f.intl.formatToPlainString(f.t.w1gmLt, { bitrate: _.TG[d.TVA.TIER_3].limits.bitrate / 1e3 }),
    },
    {
        getPerkLabel: () => f.intl.string(f.t.R1U2xC),
        getTier0Value: () =>
            f.intl.formatToPlainString(f.t.pIn7Af, { size: _.TG[d.TVA.NONE].limits.fileSize / 1048576 }),
        getTier1Value: () =>
            f.intl.formatToPlainString(f.t.pIn7Af, { size: _.TG[d.TVA.TIER_1].limits.fileSize / 1048576 }),
        getTier2Value: () =>
            f.intl.formatToPlainString(f.t.pIn7Af, { size: _.TG[d.TVA.TIER_2].limits.fileSize / 1048576 }),
        getTier3Value: () =>
            f.intl.formatToPlainString(f.t.pIn7Af, { size: _.TG[d.TVA.TIER_3].limits.fileSize / 1048576 }),
    },
    {
        getPerkLabel: () => f.intl.string(f.t.f6vfso),
        getTier0Value: () => _.TG[d.TVA.NONE].limits.stageVideoUsers,
        getTier1Value: () => _.TG[d.TVA.TIER_1].limits.stageVideoUsers,
        getTier2Value: () => _.TG[d.TVA.TIER_2].limits.stageVideoUsers,
        getTier3Value: () => _.TG[d.TVA.TIER_3].limits.stageVideoUsers,
    },
    {
        getPerkLabel: () => f.intl.string(f.t.qDqUME),
        getTier0Value: () => !1,
        getTier1Value: () => !0,
        getTier2Value: () => !0,
        getTier3Value: () => !0,
    },
    {
        getPerkLabel: () => f.intl.string(f.t.uwqgbu),
        getTier0Value: () => !1,
        getTier1Value: () => !0,
        getTier2Value: () => !0,
        getTier3Value: () => !0,
    },
    {
        getPerkLabel: () => f.intl.string(f.t.zxsDxc),
        getTier0Value: () => !1,
        getTier1Value: () => !1,
        getTier2Value: () => f.intl.string(f.t["2TNS3n"]),
        getTier3Value: () => f.intl.string(f.t["l+S46U"]),
    },
    {
        getPerkLabel: () => f.intl.string(f.t["bHa+Ee"]),
        getTier0Value: () => !1,
        getTier1Value: () => !1,
        getTier2Value: () => !0,
        getTier3Value: () => !0,
    },
    {
        getPerkLabel: () => f.intl.string(f.t.QV6MZQ),
        getTier0Value: () => !1,
        getTier1Value: () => !1,
        getTier2Value: () => !1,
        getTier3Value: () => !0,
    },
];
function E(e) {
    let { value: t, isBoosted: n = !1 } = e;
    return "boolean" == typeof t
        ? t
            ? (0, i.jsx)(a.A, { size: "md", color: "currentColor", className: h.oE })
            : (0, i.jsx)(o.P, { size: "md", color: "currentColor", className: h.i3 })
        : (0, i.jsx)(l.E, {
              color: n ? "text-strong" : "text-muted",
              variant: n ? "text-md/bold" : "text-md/medium",
              children: t,
          });
}
function m(e) {
    let { currentTier: t } = e,
        n = (function (e) {
            switch (e) {
                case d.TVA.NONE:
                case d.TVA.TIER_1:
                    return d.TVA.TIER_2;
                case d.TVA.TIER_2:
                case d.TVA.TIER_3:
                    return d.TVA.TIER_3;
                default:
                    return null;
            }
        })(t);
    return null == n
        ? null
        : (0, i.jsx)("div", {
              className: s()(h.ER, { [h.GH]: n === d.TVA.TIER_2, [h.z5]: n === d.TVA.TIER_3 }),
              children: (0, i.jsx)(l.E, {
                  className: h.uQ,
                  color: "always-white",
                  variant: "text-xs/bold",
                  children: t === d.TVA.TIER_3 ? f.intl.string(f.t.d849Up) : f.intl.string(f.t.dZeX1z),
              }),
          });
}
function g(e) {
    let { className: t, guild: n, hideHeading: r = !1, hideTier0: a = !1 } = e;
    return (0, i.jsxs)("div", {
        className: s()(h.iE, t),
        children: [
            !r &&
                (0, i.jsx)(u.D, {
                    className: h.R_,
                    variant: "heading-xxl/semibold",
                    children: f.intl.string(f.t["9GGb9k"]),
                }),
            (0, i.jsxs)("div", {
                className: h.wY,
                children: [
                    null != n && (0, i.jsx)(m, { currentTier: n.premiumTier }),
                    (0, i.jsxs)("div", {
                        className: h.tp,
                        children: [
                            (0, i.jsxs)("div", {
                                className: s()(h.nM, h.U1),
                                children: [
                                    (0, i.jsx)("div", {
                                        className: s()(h.Hn, h.DV),
                                        children: (0, i.jsx)(u.D, {
                                            color: "text-default",
                                            variant: "heading-lg/semibold",
                                            children: f.intl.string(f.t.F5MY0k),
                                        }),
                                    }),
                                    !a &&
                                        (0, i.jsxs)("div", {
                                            className: s()(h.Hn, h.pU),
                                            children: [
                                                (0, i.jsx)(u.D, {
                                                    color: "text-default",
                                                    variant: "heading-lg/semibold",
                                                    children: f.intl.string(f.t.mx8j2m),
                                                }),
                                                (0, i.jsx)(l.E, {
                                                    color: "text-muted",
                                                    variant: "text-sm/medium",
                                                    children: f.intl.format(f.t["pob/cL"], {
                                                        subscriptions: d.M2T[d.TVA.NONE],
                                                    }),
                                                }),
                                            ],
                                        }),
                                    (0, i.jsxs)("div", {
                                        className: s()(h.Hn, h.pU),
                                        children: [
                                            (0, i.jsx)(u.D, {
                                                color: "text-default",
                                                variant: "heading-lg/semibold",
                                                children: f.intl.string(f.t.nzXtaS),
                                            }),
                                            (0, i.jsx)(l.E, {
                                                color: "text-muted",
                                                variant: "text-sm/medium",
                                                children: f.intl.format(f.t["pob/cL"], {
                                                    subscriptions: d.M2T[d.TVA.TIER_1],
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, i.jsxs)("div", {
                                        className: s()(h.Hn, h.pU),
                                        children: [
                                            (0, i.jsx)(u.D, {
                                                color: "text-default",
                                                variant: "heading-lg/semibold",
                                                children: f.intl.string(f.t["h33/uW"]),
                                            }),
                                            (0, i.jsx)(l.E, {
                                                color: "text-muted",
                                                variant: "text-sm/medium",
                                                children: f.intl.format(f.t["pob/cL"], {
                                                    subscriptions: d.M2T[d.TVA.TIER_2],
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, i.jsxs)("div", {
                                        className: s()(h.Hn, h.pU),
                                        children: [
                                            (0, i.jsx)(u.D, {
                                                color: "text-default",
                                                variant: "heading-lg/semibold",
                                                children: f.intl.string(f.t.BfF6ED),
                                            }),
                                            (0, i.jsx)(l.E, {
                                                color: "text-muted",
                                                variant: "text-sm/medium",
                                                children: f.intl.format(f.t["pob/cL"], {
                                                    subscriptions: d.M2T[d.TVA.TIER_3],
                                                }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            p.map((e, t) =>
                                (0, i.jsxs)(
                                    "div",
                                    {
                                        className: s()(h.nM, { [h.fW]: t === p.length - 1 }),
                                        children: [
                                            (0, i.jsx)("div", {
                                                className: s()(h.Hn, h.DV),
                                                children: (0, i.jsx)(l.E, {
                                                    color: "text-muted",
                                                    variant: "text-md/medium",
                                                    children: e.getPerkLabel(),
                                                }),
                                            }),
                                            !a &&
                                                (0, i.jsx)("div", {
                                                    className: s()(h.Hn, h.pU),
                                                    children: (0, i.jsx)(E, { value: e.getTier0Value() }),
                                                }),
                                            (0, i.jsx)("div", {
                                                className: s()(h.Hn, h.pU),
                                                children: (0, i.jsx)(E, { value: e.getTier1Value(), isBoosted: !0 }),
                                            }),
                                            (0, i.jsx)("div", {
                                                className: s()(h.Hn, h.pU),
                                                children: (0, i.jsx)(E, { value: e.getTier2Value(), isBoosted: !0 }),
                                            }),
                                            (0, i.jsx)("div", {
                                                className: s()(h.Hn, h.pU),
                                                children: (0, i.jsx)(E, { value: e.getTier3Value(), isBoosted: !0 }),
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
