"use strict";
n.d(t, { A: () => m });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(397927),
    o = n(652215),
    l = n(788868),
    u = n(985018),
    c = n(921033);
let d = 1048576;
function _(e) {
    switch (e) {
        case o.TVA.NONE:
        case o.TVA.TIER_1:
            return o.TVA.TIER_2;
        case o.TVA.TIER_2:
        case o.TVA.TIER_3:
            return o.TVA.TIER_3;
        default:
            return null;
    }
}
let f = [
    {
        getPerkLabel: () => u.intl.string(u.t.tIiwuj),
        getTier0Value: () => l.TG[o.TVA.NONE].limits.emoji,
        getTier1Value: () => l.TG[o.TVA.TIER_1].limits.emoji,
        getTier2Value: () => l.TG[o.TVA.TIER_2].limits.emoji,
        getTier3Value: () => l.TG[o.TVA.TIER_3].limits.emoji,
    },
    {
        getPerkLabel: () => u.intl.string(u.t["3iccet"]),
        getTier0Value: () => l.TG[o.TVA.NONE].limits.stickers,
        getTier1Value: () => l.TG[o.TVA.TIER_1].limits.stickers,
        getTier2Value: () => l.TG[o.TVA.TIER_2].limits.stickers,
        getTier3Value: () => l.TG[o.TVA.TIER_3].limits.stickers,
    },
    {
        getPerkLabel: () => u.intl.string(u.t["+smCv9"]),
        getTier0Value: () => l.TG[o.TVA.NONE].limits.soundboardSounds,
        getTier1Value: () => l.TG[o.TVA.TIER_1].limits.soundboardSounds,
        getTier2Value: () => l.TG[o.TVA.TIER_2].limits.soundboardSounds,
        getTier3Value: () => l.TG[o.TVA.TIER_3].limits.soundboardSounds,
    },
    {
        getPerkLabel: () => u.intl.string(u.t.SMYauD),
        getTier0Value: () =>
            u.intl.formatToPlainString(u.t.zZ6Rdi, {
                resolution: l.TG[o.TVA.NONE].limits.screenShareQualityResolution,
                framerate: l.TG[o.TVA.NONE].limits.screenShareQualityFramerate,
            }),
        getTier1Value: () =>
            u.intl.formatToPlainString(u.t.zZ6Rdi, {
                resolution: l.TG[o.TVA.TIER_1].limits.screenShareQualityResolution,
                framerate: l.TG[o.TVA.TIER_1].limits.screenShareQualityFramerate,
            }),
        getTier2Value: () =>
            u.intl.formatToPlainString(u.t.zZ6Rdi, {
                resolution: l.TG[o.TVA.TIER_2].limits.screenShareQualityResolution,
                framerate: l.TG[o.TVA.TIER_2].limits.screenShareQualityFramerate,
            }),
        getTier3Value: () =>
            u.intl.formatToPlainString(u.t.zZ6Rdi, {
                resolution: l.TG[o.TVA.TIER_3].limits.screenShareQualityResolution,
                framerate: l.TG[o.TVA.TIER_3].limits.screenShareQualityFramerate,
            }),
    },
    {
        getPerkLabel: () => u.intl.string(u.t["/79IDj"]),
        getTier0Value: () => u.intl.formatToPlainString(u.t.w1gmLt, { bitrate: l.TG[o.TVA.NONE].limits.bitrate / 1e3 }),
        getTier1Value: () =>
            u.intl.formatToPlainString(u.t.w1gmLt, { bitrate: l.TG[o.TVA.TIER_1].limits.bitrate / 1e3 }),
        getTier2Value: () =>
            u.intl.formatToPlainString(u.t.w1gmLt, { bitrate: l.TG[o.TVA.TIER_2].limits.bitrate / 1e3 }),
        getTier3Value: () =>
            u.intl.formatToPlainString(u.t.w1gmLt, { bitrate: l.TG[o.TVA.TIER_3].limits.bitrate / 1e3 }),
    },
    {
        getPerkLabel: () => u.intl.string(u.t.R1U2xC),
        getTier0Value: () => u.intl.formatToPlainString(u.t.pIn7Af, { size: l.TG[o.TVA.NONE].limits.fileSize / d }),
        getTier1Value: () => u.intl.formatToPlainString(u.t.pIn7Af, { size: l.TG[o.TVA.TIER_1].limits.fileSize / d }),
        getTier2Value: () => u.intl.formatToPlainString(u.t.pIn7Af, { size: l.TG[o.TVA.TIER_2].limits.fileSize / d }),
        getTier3Value: () => u.intl.formatToPlainString(u.t.pIn7Af, { size: l.TG[o.TVA.TIER_3].limits.fileSize / d }),
    },
    {
        getPerkLabel: () => u.intl.string(u.t.f6vfso),
        getTier0Value: () => l.TG[o.TVA.NONE].limits.stageVideoUsers,
        getTier1Value: () => l.TG[o.TVA.TIER_1].limits.stageVideoUsers,
        getTier2Value: () => l.TG[o.TVA.TIER_2].limits.stageVideoUsers,
        getTier3Value: () => l.TG[o.TVA.TIER_3].limits.stageVideoUsers,
    },
    {
        getPerkLabel: () => u.intl.string(u.t.qDqUME),
        getTier0Value: () => !1,
        getTier1Value: () => !0,
        getTier2Value: () => !0,
        getTier3Value: () => !0,
    },
    {
        getPerkLabel: () => u.intl.string(u.t.uwqgbu),
        getTier0Value: () => !1,
        getTier1Value: () => !0,
        getTier2Value: () => !0,
        getTier3Value: () => !0,
    },
    {
        getPerkLabel: () => u.intl.string(u.t.zxsDxc),
        getTier0Value: () => !1,
        getTier1Value: () => !1,
        getTier2Value: () => u.intl.string(u.t["2TNS3n"]),
        getTier3Value: () => u.intl.string(u.t["l+S46U"]),
    },
    {
        getPerkLabel: () => u.intl.string(u.t["bHa+Ee"]),
        getTier0Value: () => !1,
        getTier1Value: () => !1,
        getTier2Value: () => !0,
        getTier3Value: () => !0,
    },
    {
        getPerkLabel: () => u.intl.string(u.t.QV6MZQ),
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
            ? (0, r.jsx)(a.A9s, { size: "md", color: "currentColor", className: c.oE })
            : (0, r.jsx)(a.PGe, { size: "md", color: "currentColor", className: c.i3 })
        : (0, r.jsx)(a.Text, {
              color: n ? "text-strong" : "text-muted",
              variant: n ? "text-md/bold" : "text-md/medium",
              children: t,
          });
}
function h(e) {
    let { currentTier: t } = e,
        n = _(t);
    return null == n
        ? null
        : (0, r.jsx)("div", {
              className: s()(c.ER, { [c.GH]: n === o.TVA.TIER_2, [c.z5]: n === o.TVA.TIER_3 }),
              children: (0, r.jsx)(a.Text, {
                  className: c.uQ,
                  color: "always-white",
                  variant: "text-xs/bold",
                  children: t === o.TVA.TIER_3 ? u.intl.string(u.t.d849Up) : u.intl.string(u.t.dZeX1z),
              }),
          });
}
function m(e) {
    let { className: t, guild: n, hideHeading: i = !1, hideTier0: l = !1 } = e;
    return (0, r.jsxs)("div", {
        className: s()(c.iE, t),
        children: [
            !i &&
                (0, r.jsx)(a.Heading, {
                    className: c.R_,
                    variant: "heading-xxl/semibold",
                    children: u.intl.string(u.t["9GGb9k"]),
                }),
            (0, r.jsxs)("div", {
                className: c.wY,
                children: [
                    null != n && (0, r.jsx)(h, { currentTier: n.premiumTier }),
                    (0, r.jsxs)("div", {
                        className: c.tp,
                        children: [
                            (0, r.jsxs)("div", {
                                className: s()(c.nM, c.U1),
                                children: [
                                    (0, r.jsx)("div", {
                                        className: s()(c.Hn, c.DV),
                                        children: (0, r.jsx)(a.Heading, {
                                            color: "text-default",
                                            variant: "heading-lg/semibold",
                                            children: u.intl.string(u.t.F5MY0k),
                                        }),
                                    }),
                                    !l &&
                                        (0, r.jsxs)("div", {
                                            className: s()(c.Hn, c.pU),
                                            children: [
                                                (0, r.jsx)(a.Heading, {
                                                    color: "text-default",
                                                    variant: "heading-lg/semibold",
                                                    children: u.intl.string(u.t.mx8j2m),
                                                }),
                                                (0, r.jsx)(a.Text, {
                                                    color: "text-muted",
                                                    variant: "text-sm/medium",
                                                    children: u.intl.format(u.t["pob/cL"], {
                                                        subscriptions: o.M2T[o.TVA.NONE],
                                                    }),
                                                }),
                                            ],
                                        }),
                                    (0, r.jsxs)("div", {
                                        className: s()(c.Hn, c.pU),
                                        children: [
                                            (0, r.jsx)(a.Heading, {
                                                color: "text-default",
                                                variant: "heading-lg/semibold",
                                                children: u.intl.string(u.t.nzXtaS),
                                            }),
                                            (0, r.jsx)(a.Text, {
                                                color: "text-muted",
                                                variant: "text-sm/medium",
                                                children: u.intl.format(u.t["pob/cL"], {
                                                    subscriptions: o.M2T[o.TVA.TIER_1],
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: s()(c.Hn, c.pU),
                                        children: [
                                            (0, r.jsx)(a.Heading, {
                                                color: "text-default",
                                                variant: "heading-lg/semibold",
                                                children: u.intl.string(u.t["h33/uW"]),
                                            }),
                                            (0, r.jsx)(a.Text, {
                                                color: "text-muted",
                                                variant: "text-sm/medium",
                                                children: u.intl.format(u.t["pob/cL"], {
                                                    subscriptions: o.M2T[o.TVA.TIER_2],
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: s()(c.Hn, c.pU),
                                        children: [
                                            (0, r.jsx)(a.Heading, {
                                                color: "text-default",
                                                variant: "heading-lg/semibold",
                                                children: u.intl.string(u.t.BfF6ED),
                                            }),
                                            (0, r.jsx)(a.Text, {
                                                color: "text-muted",
                                                variant: "text-sm/medium",
                                                children: u.intl.format(u.t["pob/cL"], {
                                                    subscriptions: o.M2T[o.TVA.TIER_3],
                                                }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            f.map((e, t) =>
                                (0, r.jsxs)(
                                    "div",
                                    {
                                        className: s()(c.nM, { [c.fW]: t === f.length - 1 }),
                                        children: [
                                            (0, r.jsx)("div", {
                                                className: s()(c.Hn, c.DV),
                                                children: (0, r.jsx)(a.Text, {
                                                    color: "text-muted",
                                                    variant: "text-md/medium",
                                                    children: e.getPerkLabel(),
                                                }),
                                            }),
                                            !l &&
                                                (0, r.jsx)("div", {
                                                    className: s()(c.Hn, c.pU),
                                                    children: (0, r.jsx)(p, { value: e.getTier0Value() }),
                                                }),
                                            (0, r.jsx)("div", {
                                                className: s()(c.Hn, c.pU),
                                                children: (0, r.jsx)(p, { value: e.getTier1Value(), isBoosted: !0 }),
                                            }),
                                            (0, r.jsx)("div", {
                                                className: s()(c.Hn, c.pU),
                                                children: (0, r.jsx)(p, { value: e.getTier2Value(), isBoosted: !0 }),
                                            }),
                                            (0, r.jsx)("div", {
                                                className: s()(c.Hn, c.pU),
                                                children: (0, r.jsx)(p, { value: e.getTier3Value(), isBoosted: !0 }),
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
