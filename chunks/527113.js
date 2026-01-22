n.d(t, {
    A: () => m,
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(397927),
    o = n(652215),
    l = n(788868),
    c = n(985018),
    u = n(921033);
let d = 1048576;

function f(e) {
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
let p = [
    {
        getPerkLabel: () => c.intl.string(c.t.tIiwuj),
        getTier0Value: () => l.TG[o.TVA.NONE].limits.emoji,
        getTier1Value: () => l.TG[o.TVA.TIER_1].limits.emoji,
        getTier2Value: () => l.TG[o.TVA.TIER_2].limits.emoji,
        getTier3Value: () => l.TG[o.TVA.TIER_3].limits.emoji,
    },
    {
        getPerkLabel: () => c.intl.string(c.t["3iccet"]),
        getTier0Value: () => l.TG[o.TVA.NONE].limits.stickers,
        getTier1Value: () => l.TG[o.TVA.TIER_1].limits.stickers,
        getTier2Value: () => l.TG[o.TVA.TIER_2].limits.stickers,
        getTier3Value: () => l.TG[o.TVA.TIER_3].limits.stickers,
    },
    {
        getPerkLabel: () => c.intl.string(c.t["+smCv9"]),
        getTier0Value: () => l.TG[o.TVA.NONE].limits.soundboardSounds,
        getTier1Value: () => l.TG[o.TVA.TIER_1].limits.soundboardSounds,
        getTier2Value: () => l.TG[o.TVA.TIER_2].limits.soundboardSounds,
        getTier3Value: () => l.TG[o.TVA.TIER_3].limits.soundboardSounds,
    },
    {
        getPerkLabel: () => c.intl.string(c.t.SMYauD),
        getTier0Value: () =>
            c.intl.formatToPlainString(c.t.zZ6Rdi, {
                resolution: l.TG[o.TVA.NONE].limits.screenShareQualityResolution,
                framerate: l.TG[o.TVA.NONE].limits.screenShareQualityFramerate,
            }),
        getTier1Value: () =>
            c.intl.formatToPlainString(c.t.zZ6Rdi, {
                resolution: l.TG[o.TVA.TIER_1].limits.screenShareQualityResolution,
                framerate: l.TG[o.TVA.TIER_1].limits.screenShareQualityFramerate,
            }),
        getTier2Value: () =>
            c.intl.formatToPlainString(c.t.zZ6Rdi, {
                resolution: l.TG[o.TVA.TIER_2].limits.screenShareQualityResolution,
                framerate: l.TG[o.TVA.TIER_2].limits.screenShareQualityFramerate,
            }),
        getTier3Value: () =>
            c.intl.formatToPlainString(c.t.zZ6Rdi, {
                resolution: l.TG[o.TVA.TIER_3].limits.screenShareQualityResolution,
                framerate: l.TG[o.TVA.TIER_3].limits.screenShareQualityFramerate,
            }),
    },
    {
        getPerkLabel: () => c.intl.string(c.t["/79IDj"]),
        getTier0Value: () =>
            c.intl.formatToPlainString(c.t.w1gmLt, {
                bitrate: l.TG[o.TVA.NONE].limits.bitrate / 1e3,
            }),
        getTier1Value: () =>
            c.intl.formatToPlainString(c.t.w1gmLt, {
                bitrate: l.TG[o.TVA.TIER_1].limits.bitrate / 1e3,
            }),
        getTier2Value: () =>
            c.intl.formatToPlainString(c.t.w1gmLt, {
                bitrate: l.TG[o.TVA.TIER_2].limits.bitrate / 1e3,
            }),
        getTier3Value: () =>
            c.intl.formatToPlainString(c.t.w1gmLt, {
                bitrate: l.TG[o.TVA.TIER_3].limits.bitrate / 1e3,
            }),
    },
    {
        getPerkLabel: () => c.intl.string(c.t.R1U2xC),
        getTier0Value: () =>
            c.intl.formatToPlainString(c.t.pIn7Af, {
                size: l.TG[o.TVA.NONE].limits.fileSize / d,
            }),
        getTier1Value: () =>
            c.intl.formatToPlainString(c.t.pIn7Af, {
                size: l.TG[o.TVA.TIER_1].limits.fileSize / d,
            }),
        getTier2Value: () =>
            c.intl.formatToPlainString(c.t.pIn7Af, {
                size: l.TG[o.TVA.TIER_2].limits.fileSize / d,
            }),
        getTier3Value: () =>
            c.intl.formatToPlainString(c.t.pIn7Af, {
                size: l.TG[o.TVA.TIER_3].limits.fileSize / d,
            }),
    },
    {
        getPerkLabel: () => c.intl.string(c.t.f6vfso),
        getTier0Value: () => l.TG[o.TVA.NONE].limits.stageVideoUsers,
        getTier1Value: () => l.TG[o.TVA.TIER_1].limits.stageVideoUsers,
        getTier2Value: () => l.TG[o.TVA.TIER_2].limits.stageVideoUsers,
        getTier3Value: () => l.TG[o.TVA.TIER_3].limits.stageVideoUsers,
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

function _(e) {
    let { value: t, isBoosted: n = !1 } = e;
    return "boolean" == typeof t
        ? t
            ? (0, r.jsx)(s.A9s, {
                  size: "md",
                  color: "currentColor",
                  className: u.oE,
              })
            : (0, r.jsx)(s.PGe, {
                  size: "md",
                  color: "currentColor",
                  className: u.i3,
              })
        : (0, r.jsx)(s.Text, {
              color: n ? "text-strong" : "text-muted",
              variant: n ? "text-md/bold" : "text-md/medium",
              children: t,
          });
}

function h(e) {
    let { currentTier: t } = e,
        n = f(t);
    return null == n
        ? null
        : (0, r.jsx)("div", {
              className: a()(u.ER, {
                  [u.GH]: n === o.TVA.TIER_2,
                  [u.z5]: n === o.TVA.TIER_3,
              }),
              children: (0, r.jsx)(s.Text, {
                  className: u.uQ,
                  color: "always-white",
                  variant: "text-xs/bold",
                  children: t === o.TVA.TIER_3 ? c.intl.string(c.t.d849Up) : c.intl.string(c.t.dZeX1z),
              }),
          });
}

function m(e) {
    let { className: t, guild: n } = e;
    return (0, r.jsxs)("div", {
        className: a()(u.iE, t),
        children: [
            (0, r.jsx)(s.Heading, {
                className: u.R_,
                variant: "heading-xxl/semibold",
                children: c.intl.string(c.t["9GGb9k"]),
            }),
            (0, r.jsxs)("div", {
                className: u.wY,
                children: [
                    null != n &&
                        (0, r.jsx)(h, {
                            currentTier: n.premiumTier,
                        }),
                    (0, r.jsxs)("div", {
                        className: u.tp,
                        children: [
                            (0, r.jsxs)("div", {
                                className: a()(u.nM, u.U1),
                                children: [
                                    (0, r.jsx)("div", {
                                        className: a()(u.Hn, u.DV),
                                        children: (0, r.jsx)(s.Heading, {
                                            color: "text-default",
                                            variant: "heading-lg/semibold",
                                            children: c.intl.string(c.t.F5MY0k),
                                        }),
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: a()(u.Hn, u.pU),
                                        children: [
                                            (0, r.jsx)(s.Heading, {
                                                color: "text-default",
                                                variant: "heading-lg/semibold",
                                                children: c.intl.string(c.t.mx8j2m),
                                            }),
                                            (0, r.jsx)(s.Text, {
                                                color: "text-muted",
                                                variant: "text-sm/medium",
                                                children: c.intl.format(c.t["pob/cL"], {
                                                    subscriptions: o.M2T[o.TVA.NONE],
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: a()(u.Hn, u.pU),
                                        children: [
                                            (0, r.jsx)(s.Heading, {
                                                color: "text-default",
                                                variant: "heading-lg/semibold",
                                                children: c.intl.string(c.t.nzXtaS),
                                            }),
                                            (0, r.jsx)(s.Text, {
                                                color: "text-muted",
                                                variant: "text-sm/medium",
                                                children: c.intl.format(c.t["pob/cL"], {
                                                    subscriptions: o.M2T[o.TVA.TIER_1],
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: a()(u.Hn, u.pU),
                                        children: [
                                            (0, r.jsx)(s.Heading, {
                                                color: "text-default",
                                                variant: "heading-lg/semibold",
                                                children: c.intl.string(c.t["h33/uW"]),
                                            }),
                                            (0, r.jsx)(s.Text, {
                                                color: "text-muted",
                                                variant: "text-sm/medium",
                                                children: c.intl.format(c.t["pob/cL"], {
                                                    subscriptions: o.M2T[o.TVA.TIER_2],
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: a()(u.Hn, u.pU),
                                        children: [
                                            (0, r.jsx)(s.Heading, {
                                                color: "text-default",
                                                variant: "heading-lg/semibold",
                                                children: c.intl.string(c.t.BfF6ED),
                                            }),
                                            (0, r.jsx)(s.Text, {
                                                color: "text-muted",
                                                variant: "text-sm/medium",
                                                children: c.intl.format(c.t["pob/cL"], {
                                                    subscriptions: o.M2T[o.TVA.TIER_3],
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
                                        className: a()(u.nM, {
                                            [u.fW]: t === p.length - 1,
                                        }),
                                        children: [
                                            (0, r.jsx)("div", {
                                                className: a()(u.Hn, u.DV),
                                                children: (0, r.jsx)(s.Text, {
                                                    color: "text-muted",
                                                    variant: "text-md/medium",
                                                    children: e.getPerkLabel(),
                                                }),
                                            }),
                                            (0, r.jsx)("div", {
                                                className: a()(u.Hn, u.pU),
                                                children: (0, r.jsx)(_, {
                                                    value: e.getTier0Value(),
                                                }),
                                            }),
                                            (0, r.jsx)("div", {
                                                className: a()(u.Hn, u.pU),
                                                children: (0, r.jsx)(_, {
                                                    value: e.getTier1Value(),
                                                    isBoosted: !0,
                                                }),
                                            }),
                                            (0, r.jsx)("div", {
                                                className: a()(u.Hn, u.pU),
                                                children: (0, r.jsx)(_, {
                                                    value: e.getTier2Value(),
                                                    isBoosted: !0,
                                                }),
                                            }),
                                            (0, r.jsx)("div", {
                                                className: a()(u.Hn, u.pU),
                                                children: (0, r.jsx)(_, {
                                                    value: e.getTier3Value(),
                                                    isBoosted: !0,
                                                }),
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
