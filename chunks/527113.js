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
    _ = n(202541),
    h = n(375708),
    f = n(131148);
let E = [
    {
        getPerkLabel: () => h.intl.string(h.t.tIiwuj),
        getTier0Value: () => _.TG[d.TVA.NONE].limits.emoji,
        getTier1Value: () => _.TG[d.TVA.TIER_1].limits.emoji,
        getTier2Value: () => _.TG[d.TVA.TIER_2].limits.emoji,
        getTier3Value: () => _.TG[d.TVA.TIER_3].limits.emoji,
    },
    {
        getPerkLabel: () => h.intl.string(h.t["3iccet"]),
        getTier0Value: () => _.TG[d.TVA.NONE].limits.stickers,
        getTier1Value: () => _.TG[d.TVA.TIER_1].limits.stickers,
        getTier2Value: () => _.TG[d.TVA.TIER_2].limits.stickers,
        getTier3Value: () => _.TG[d.TVA.TIER_3].limits.stickers,
    },
    {
        getPerkLabel: () => h.intl.string(h.t["+smCv9"]),
        getTier0Value: () => _.TG[d.TVA.NONE].limits.soundboardSounds,
        getTier1Value: () => _.TG[d.TVA.TIER_1].limits.soundboardSounds,
        getTier2Value: () => _.TG[d.TVA.TIER_2].limits.soundboardSounds,
        getTier3Value: () => _.TG[d.TVA.TIER_3].limits.soundboardSounds,
    },
    {
        getPerkLabel: () => h.intl.string(h.t.SMYauD),
        getTier0Value: () =>
            h.intl.formatToPlainString(h.t.zZ6Rdi, {
                resolution: _.TG[d.TVA.NONE].limits.screenShareQualityResolution,
                framerate: _.TG[d.TVA.NONE].limits.screenShareQualityFramerate,
            }),
        getTier1Value: () =>
            h.intl.formatToPlainString(h.t.zZ6Rdi, {
                resolution: _.TG[d.TVA.TIER_1].limits.screenShareQualityResolution,
                framerate: _.TG[d.TVA.TIER_1].limits.screenShareQualityFramerate,
            }),
        getTier2Value: () =>
            h.intl.formatToPlainString(h.t.zZ6Rdi, {
                resolution: (0, c.eT)("GuildBoostingMarketingPerksTable"),
                framerate: _.TG[d.TVA.TIER_2].limits.screenShareQualityFramerate,
            }),
        getTier3Value: () =>
            h.intl.formatToPlainString(h.t.zZ6Rdi, {
                resolution: (0, c.eT)("GuildBoostingMarketingPerksTable"),
                framerate: _.TG[d.TVA.TIER_3].limits.screenShareQualityFramerate,
            }),
    },
    {
        getPerkLabel: () => h.intl.string(h.t["/79IDj"]),
        getTier0Value: () => h.intl.formatToPlainString(h.t.w1gmLt, { bitrate: _.TG[d.TVA.NONE].limits.bitrate / 1e3 }),
        getTier1Value: () =>
            h.intl.formatToPlainString(h.t.w1gmLt, { bitrate: _.TG[d.TVA.TIER_1].limits.bitrate / 1e3 }),
        getTier2Value: () =>
            h.intl.formatToPlainString(h.t.w1gmLt, { bitrate: _.TG[d.TVA.TIER_2].limits.bitrate / 1e3 }),
        getTier3Value: () =>
            h.intl.formatToPlainString(h.t.w1gmLt, { bitrate: _.TG[d.TVA.TIER_3].limits.bitrate / 1e3 }),
    },
    {
        getPerkLabel: () => h.intl.string(h.t.R1U2xC),
        getTier0Value: () =>
            h.intl.formatToPlainString(h.t.pIn7Af, { size: _.TG[d.TVA.NONE].limits.fileSize / 1048576 }),
        getTier1Value: () =>
            h.intl.formatToPlainString(h.t.pIn7Af, { size: _.TG[d.TVA.TIER_1].limits.fileSize / 1048576 }),
        getTier2Value: () =>
            h.intl.formatToPlainString(h.t.pIn7Af, { size: _.TG[d.TVA.TIER_2].limits.fileSize / 1048576 }),
        getTier3Value: () =>
            h.intl.formatToPlainString(h.t.pIn7Af, { size: _.TG[d.TVA.TIER_3].limits.fileSize / 1048576 }),
    },
    {
        getPerkLabel: () => h.intl.string(h.t.f6vfso),
        getTier0Value: () => _.TG[d.TVA.NONE].limits.stageVideoUsers,
        getTier1Value: () => _.TG[d.TVA.TIER_1].limits.stageVideoUsers,
        getTier2Value: () => _.TG[d.TVA.TIER_2].limits.stageVideoUsers,
        getTier3Value: () => _.TG[d.TVA.TIER_3].limits.stageVideoUsers,
    },
    {
        getPerkLabel: () => h.intl.string(h.t.qDqUME),
        getTier0Value: () => !1,
        getTier1Value: () => !0,
        getTier2Value: () => !0,
        getTier3Value: () => !0,
    },
    {
        getPerkLabel: () => h.intl.string(h.t.uwqgbu),
        getTier0Value: () => !1,
        getTier1Value: () => !0,
        getTier2Value: () => !0,
        getTier3Value: () => !0,
    },
    {
        getPerkLabel: () => h.intl.string(h.t.zxsDxc),
        getTier0Value: () => !1,
        getTier1Value: () => !1,
        getTier2Value: () => h.intl.string(h.t["2TNS3n"]),
        getTier3Value: () => h.intl.string(h.t["l+S46U"]),
    },
    {
        getPerkLabel: () => h.intl.string(h.t["bHa+Ee"]),
        getTier0Value: () => !1,
        getTier1Value: () => !1,
        getTier2Value: () => !0,
        getTier3Value: () => !0,
    },
    {
        getPerkLabel: () => h.intl.string(h.t.QV6MZQ),
        getTier0Value: () => !1,
        getTier1Value: () => !1,
        getTier2Value: () => !1,
        getTier3Value: () => !0,
    },
];
function p(e) {
    let { value: t, isBoosted: n = !1 } = e;
    return "boolean" == typeof t
        ? t
            ? (0, i.jsx)(a.A, { size: "md", color: "currentColor", className: f.oE })
            : (0, i.jsx)(o.P, { size: "md", color: "currentColor", className: f.i3 })
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
              className: s()(f.ER, { [f.GH]: n === d.TVA.TIER_2, [f.z5]: n === d.TVA.TIER_3 }),
              children: (0, i.jsx)(l.E, {
                  className: f.uQ,
                  color: "text-overlay-light",
                  variant: "text-xs/bold",
                  children: t === d.TVA.TIER_3 ? h.intl.string(h.t.d849Up) : h.intl.string(h.t.dZeX1z),
              }),
          });
}
function g(e) {
    let { className: t, guild: n, hideHeading: r = !1, hideTier0: a = !1 } = e;
    return (0, i.jsxs)("div", {
        className: s()(f.iE, t),
        children: [
            !r &&
                (0, i.jsx)(u.D, {
                    className: f.R_,
                    variant: "heading-xxl/semibold",
                    children: h.intl.string(h.t["9GGb9k"]),
                }),
            (0, i.jsxs)("div", {
                className: f.wY,
                children: [
                    null != n && (0, i.jsx)(m, { currentTier: n.premiumTier }),
                    (0, i.jsxs)("div", {
                        className: f.tp,
                        children: [
                            (0, i.jsxs)("div", {
                                className: s()(f.nM, f.U1),
                                children: [
                                    (0, i.jsx)("div", {
                                        className: s()(f.Hn, f.DV),
                                        children: (0, i.jsx)(u.D, {
                                            color: "text-default",
                                            variant: "heading-lg/semibold",
                                            children: h.intl.string(h.t.F5MY0k),
                                        }),
                                    }),
                                    !a &&
                                        (0, i.jsxs)("div", {
                                            className: s()(f.Hn, f.pU),
                                            children: [
                                                (0, i.jsx)(u.D, {
                                                    color: "text-default",
                                                    variant: "heading-lg/semibold",
                                                    children: h.intl.string(h.t.mx8j2m),
                                                }),
                                                (0, i.jsx)(l.E, {
                                                    color: "text-muted",
                                                    variant: "text-sm/medium",
                                                    children: h.intl.format(h.t["pob/cL"], {
                                                        subscriptions: d.M2T[d.TVA.NONE],
                                                    }),
                                                }),
                                            ],
                                        }),
                                    (0, i.jsxs)("div", {
                                        className: s()(f.Hn, f.pU),
                                        children: [
                                            (0, i.jsx)(u.D, {
                                                color: "text-default",
                                                variant: "heading-lg/semibold",
                                                children: h.intl.string(h.t.nzXtaS),
                                            }),
                                            (0, i.jsx)(l.E, {
                                                color: "text-muted",
                                                variant: "text-sm/medium",
                                                children: h.intl.format(h.t["pob/cL"], {
                                                    subscriptions: d.M2T[d.TVA.TIER_1],
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, i.jsxs)("div", {
                                        className: s()(f.Hn, f.pU),
                                        children: [
                                            (0, i.jsx)(u.D, {
                                                color: "text-default",
                                                variant: "heading-lg/semibold",
                                                children: h.intl.string(h.t["h33/uW"]),
                                            }),
                                            (0, i.jsx)(l.E, {
                                                color: "text-muted",
                                                variant: "text-sm/medium",
                                                children: h.intl.format(h.t["pob/cL"], {
                                                    subscriptions: d.M2T[d.TVA.TIER_2],
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, i.jsxs)("div", {
                                        className: s()(f.Hn, f.pU),
                                        children: [
                                            (0, i.jsx)(u.D, {
                                                color: "text-default",
                                                variant: "heading-lg/semibold",
                                                children: h.intl.string(h.t.BfF6ED),
                                            }),
                                            (0, i.jsx)(l.E, {
                                                color: "text-muted",
                                                variant: "text-sm/medium",
                                                children: h.intl.format(h.t["pob/cL"], {
                                                    subscriptions: d.M2T[d.TVA.TIER_3],
                                                }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            E.map((e, t) =>
                                (0, i.jsxs)(
                                    "div",
                                    {
                                        className: s()(f.nM, { [f.fW]: t === E.length - 1 }),
                                        children: [
                                            (0, i.jsx)("div", {
                                                className: s()(f.Hn, f.DV),
                                                children: (0, i.jsx)(l.E, {
                                                    color: "text-muted",
                                                    variant: "text-md/medium",
                                                    children: e.getPerkLabel(),
                                                }),
                                            }),
                                            !a &&
                                                (0, i.jsx)("div", {
                                                    className: s()(f.Hn, f.pU),
                                                    children: (0, i.jsx)(p, { value: e.getTier0Value() }),
                                                }),
                                            (0, i.jsx)("div", {
                                                className: s()(f.Hn, f.pU),
                                                children: (0, i.jsx)(p, { value: e.getTier1Value(), isBoosted: !0 }),
                                            }),
                                            (0, i.jsx)("div", {
                                                className: s()(f.Hn, f.pU),
                                                children: (0, i.jsx)(p, { value: e.getTier2Value(), isBoosted: !0 }),
                                            }),
                                            (0, i.jsx)("div", {
                                                className: s()(f.Hn, f.pU),
                                                children: (0, i.jsx)(p, { value: e.getTier3Value(), isBoosted: !0 }),
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
