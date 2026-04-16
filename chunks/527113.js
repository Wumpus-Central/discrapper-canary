"use strict";
n.d(t, { A: () => E });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(397927),
    o = n(116891),
    l = n(652215),
    u = n(788868),
    c = n(985018),
    d = n(131148);
let _ = 1048576;
function f(e) {
    switch (e) {
        case l.TVA.NONE:
        case l.TVA.TIER_1:
            return l.TVA.TIER_2;
        case l.TVA.TIER_2:
        case l.TVA.TIER_3:
            return l.TVA.TIER_3;
        default:
            return null;
    }
}
let p = [
    {
        getPerkLabel: () => c.intl.string(c.t.tIiwuj),
        getTier0Value: () => u.TG[l.TVA.NONE].limits.emoji,
        getTier1Value: () => u.TG[l.TVA.TIER_1].limits.emoji,
        getTier2Value: () => u.TG[l.TVA.TIER_2].limits.emoji,
        getTier3Value: () => u.TG[l.TVA.TIER_3].limits.emoji,
    },
    {
        getPerkLabel: () => c.intl.string(c.t["3iccet"]),
        getTier0Value: () => u.TG[l.TVA.NONE].limits.stickers,
        getTier1Value: () => u.TG[l.TVA.TIER_1].limits.stickers,
        getTier2Value: () => u.TG[l.TVA.TIER_2].limits.stickers,
        getTier3Value: () => u.TG[l.TVA.TIER_3].limits.stickers,
    },
    {
        getPerkLabel: () => c.intl.string(c.t["+smCv9"]),
        getTier0Value: () => u.TG[l.TVA.NONE].limits.soundboardSounds,
        getTier1Value: () => u.TG[l.TVA.TIER_1].limits.soundboardSounds,
        getTier2Value: () => u.TG[l.TVA.TIER_2].limits.soundboardSounds,
        getTier3Value: () => u.TG[l.TVA.TIER_3].limits.soundboardSounds,
    },
    {
        getPerkLabel: () => c.intl.string(c.t.SMYauD),
        getTier0Value: () =>
            c.intl.formatToPlainString(c.t.zZ6Rdi, {
                resolution: u.TG[l.TVA.NONE].limits.screenShareQualityResolution,
                framerate: u.TG[l.TVA.NONE].limits.screenShareQualityFramerate,
            }),
        getTier1Value: () =>
            c.intl.formatToPlainString(c.t.zZ6Rdi, {
                resolution: u.TG[l.TVA.TIER_1].limits.screenShareQualityResolution,
                framerate: u.TG[l.TVA.TIER_1].limits.screenShareQualityFramerate,
            }),
        getTier2Value: () =>
            c.intl.formatToPlainString(c.t.zZ6Rdi, {
                resolution: (0, o.eT)("GuildBoostingMarketingPerksTable"),
                framerate: u.TG[l.TVA.TIER_2].limits.screenShareQualityFramerate,
            }),
        getTier3Value: () =>
            c.intl.formatToPlainString(c.t.zZ6Rdi, {
                resolution: (0, o.eT)("GuildBoostingMarketingPerksTable"),
                framerate: u.TG[l.TVA.TIER_3].limits.screenShareQualityFramerate,
            }),
    },
    {
        getPerkLabel: () => c.intl.string(c.t["/79IDj"]),
        getTier0Value: () => c.intl.formatToPlainString(c.t.w1gmLt, { bitrate: u.TG[l.TVA.NONE].limits.bitrate / 1e3 }),
        getTier1Value: () =>
            c.intl.formatToPlainString(c.t.w1gmLt, { bitrate: u.TG[l.TVA.TIER_1].limits.bitrate / 1e3 }),
        getTier2Value: () =>
            c.intl.formatToPlainString(c.t.w1gmLt, { bitrate: u.TG[l.TVA.TIER_2].limits.bitrate / 1e3 }),
        getTier3Value: () =>
            c.intl.formatToPlainString(c.t.w1gmLt, { bitrate: u.TG[l.TVA.TIER_3].limits.bitrate / 1e3 }),
    },
    {
        getPerkLabel: () => c.intl.string(c.t.R1U2xC),
        getTier0Value: () => c.intl.formatToPlainString(c.t.pIn7Af, { size: u.TG[l.TVA.NONE].limits.fileSize / _ }),
        getTier1Value: () => c.intl.formatToPlainString(c.t.pIn7Af, { size: u.TG[l.TVA.TIER_1].limits.fileSize / _ }),
        getTier2Value: () => c.intl.formatToPlainString(c.t.pIn7Af, { size: u.TG[l.TVA.TIER_2].limits.fileSize / _ }),
        getTier3Value: () => c.intl.formatToPlainString(c.t.pIn7Af, { size: u.TG[l.TVA.TIER_3].limits.fileSize / _ }),
    },
    {
        getPerkLabel: () => c.intl.string(c.t.f6vfso),
        getTier0Value: () => u.TG[l.TVA.NONE].limits.stageVideoUsers,
        getTier1Value: () => u.TG[l.TVA.TIER_1].limits.stageVideoUsers,
        getTier2Value: () => u.TG[l.TVA.TIER_2].limits.stageVideoUsers,
        getTier3Value: () => u.TG[l.TVA.TIER_3].limits.stageVideoUsers,
    },
    {
        getPerkLabel: () => c.intl.string(c.t.qDqUME),
        getTier0Value: () => !1,
        getTier1Value: () => !0,
        getTier2Value: () => !0,
        getTier3Value: () => !0,
    },
    {
        getPerkLabel: () => c.intl.string(c.t.uwqgbu),
        getTier0Value: () => !1,
        getTier1Value: () => !0,
        getTier2Value: () => !0,
        getTier3Value: () => !0,
    },
    {
        getPerkLabel: () => c.intl.string(c.t.zxsDxc),
        getTier0Value: () => !1,
        getTier1Value: () => !1,
        getTier2Value: () => c.intl.string(c.t["2TNS3n"]),
        getTier3Value: () => c.intl.string(c.t["l+S46U"]),
    },
    {
        getPerkLabel: () => c.intl.string(c.t["bHa+Ee"]),
        getTier0Value: () => !1,
        getTier1Value: () => !1,
        getTier2Value: () => !0,
        getTier3Value: () => !0,
    },
    {
        getPerkLabel: () => c.intl.string(c.t.QV6MZQ),
        getTier0Value: () => !1,
        getTier1Value: () => !1,
        getTier2Value: () => !1,
        getTier3Value: () => !0,
    },
];
function h(e) {
    let { value: t, isBoosted: n = !1 } = e;
    return "boolean" == typeof t
        ? t
            ? (0, r.jsx)(a.A9s, { size: "md", color: "currentColor", className: d.oE })
            : (0, r.jsx)(a.PGe, { size: "md", color: "currentColor", className: d.i3 })
        : (0, r.jsx)(a.Text, {
              color: n ? "text-strong" : "text-muted",
              variant: n ? "text-md/bold" : "text-md/medium",
              children: t,
          });
}
function m(e) {
    let { currentTier: t } = e,
        n = f(t);
    return null == n
        ? null
        : (0, r.jsx)("div", {
              className: s()(d.ER, { [d.GH]: n === l.TVA.TIER_2, [d.z5]: n === l.TVA.TIER_3 }),
              children: (0, r.jsx)(a.Text, {
                  className: d.uQ,
                  color: "always-white",
                  variant: "text-xs/bold",
                  children: t === l.TVA.TIER_3 ? c.intl.string(c.t.d849Up) : c.intl.string(c.t.dZeX1z),
              }),
          });
}
function E(e) {
    let { className: t, guild: n, hideHeading: i = !1, hideTier0: o = !1 } = e;
    return (0, r.jsxs)("div", {
        className: s()(d.iE, t),
        children: [
            !i &&
                (0, r.jsx)(a.Heading, {
                    className: d.R_,
                    variant: "heading-xxl/semibold",
                    children: c.intl.string(c.t["9GGb9k"]),
                }),
            (0, r.jsxs)("div", {
                className: d.wY,
                children: [
                    null != n && (0, r.jsx)(m, { currentTier: n.premiumTier }),
                    (0, r.jsxs)("div", {
                        className: d.tp,
                        children: [
                            (0, r.jsxs)("div", {
                                className: s()(d.nM, d.U1),
                                children: [
                                    (0, r.jsx)("div", {
                                        className: s()(d.Hn, d.DV),
                                        children: (0, r.jsx)(a.Heading, {
                                            color: "text-default",
                                            variant: "heading-lg/semibold",
                                            children: c.intl.string(c.t.F5MY0k),
                                        }),
                                    }),
                                    !o &&
                                        (0, r.jsxs)("div", {
                                            className: s()(d.Hn, d.pU),
                                            children: [
                                                (0, r.jsx)(a.Heading, {
                                                    color: "text-default",
                                                    variant: "heading-lg/semibold",
                                                    children: c.intl.string(c.t.mx8j2m),
                                                }),
                                                (0, r.jsx)(a.Text, {
                                                    color: "text-muted",
                                                    variant: "text-sm/medium",
                                                    children: c.intl.format(c.t["pob/cL"], {
                                                        subscriptions: l.M2T[l.TVA.NONE],
                                                    }),
                                                }),
                                            ],
                                        }),
                                    (0, r.jsxs)("div", {
                                        className: s()(d.Hn, d.pU),
                                        children: [
                                            (0, r.jsx)(a.Heading, {
                                                color: "text-default",
                                                variant: "heading-lg/semibold",
                                                children: c.intl.string(c.t.nzXtaS),
                                            }),
                                            (0, r.jsx)(a.Text, {
                                                color: "text-muted",
                                                variant: "text-sm/medium",
                                                children: c.intl.format(c.t["pob/cL"], {
                                                    subscriptions: l.M2T[l.TVA.TIER_1],
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: s()(d.Hn, d.pU),
                                        children: [
                                            (0, r.jsx)(a.Heading, {
                                                color: "text-default",
                                                variant: "heading-lg/semibold",
                                                children: c.intl.string(c.t["h33/uW"]),
                                            }),
                                            (0, r.jsx)(a.Text, {
                                                color: "text-muted",
                                                variant: "text-sm/medium",
                                                children: c.intl.format(c.t["pob/cL"], {
                                                    subscriptions: l.M2T[l.TVA.TIER_2],
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: s()(d.Hn, d.pU),
                                        children: [
                                            (0, r.jsx)(a.Heading, {
                                                color: "text-default",
                                                variant: "heading-lg/semibold",
                                                children: c.intl.string(c.t.BfF6ED),
                                            }),
                                            (0, r.jsx)(a.Text, {
                                                color: "text-muted",
                                                variant: "text-sm/medium",
                                                children: c.intl.format(c.t["pob/cL"], {
                                                    subscriptions: l.M2T[l.TVA.TIER_3],
                                                }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            p.map((e, t) =>
                                (0, r.jsxs)(
                                    "div",
                                    {
                                        className: s()(d.nM, { [d.fW]: t === p.length - 1 }),
                                        children: [
                                            (0, r.jsx)("div", {
                                                className: s()(d.Hn, d.DV),
                                                children: (0, r.jsx)(a.Text, {
                                                    color: "text-muted",
                                                    variant: "text-md/medium",
                                                    children: e.getPerkLabel(),
                                                }),
                                            }),
                                            !o &&
                                                (0, r.jsx)("div", {
                                                    className: s()(d.Hn, d.pU),
                                                    children: (0, r.jsx)(h, { value: e.getTier0Value() }),
                                                }),
                                            (0, r.jsx)("div", {
                                                className: s()(d.Hn, d.pU),
                                                children: (0, r.jsx)(h, { value: e.getTier1Value(), isBoosted: !0 }),
                                            }),
                                            (0, r.jsx)("div", {
                                                className: s()(d.Hn, d.pU),
                                                children: (0, r.jsx)(h, { value: e.getTier2Value(), isBoosted: !0 }),
                                            }),
                                            (0, r.jsx)("div", {
                                                className: s()(d.Hn, d.pU),
                                                children: (0, r.jsx)(h, { value: e.getTier3Value(), isBoosted: !0 }),
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
