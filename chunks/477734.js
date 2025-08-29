n.d(t, {
    X$: () => o,
    _f: () => s,
}),
    n(906732);
var r = n(818083),
    i = n(387332);
let a = (0, r.B)({
    kind: "user",
    id: "2023-08_remix_ga",
    label: "Remix General Available",
    defaultConfig: {
        canSeeRemixBadge: !1,
        canRemix: !1,
        isNitroPerk: !1,
    },
    treatments: [
        {
            id: 1,
            label: "Remix for Nitro Subscribers",
            config: {
                canSeeRemixBadge: !0,
                canRemix: !0,
                isNitroPerk: !0,
            },
        },
        {
            id: 3,
            label: "Upsell Remix for Non-Nitro Users",
            config: {
                canSeeRemixBadge: !0,
                canRemix: !1,
                isNitroPerk: !0,
            },
        },
        {
            id: 5,
            label: "Remix GA for everyone",
            config: {
                canSeeRemixBadge: !0,
                canRemix: !0,
                isNitroPerk: !1,
            },
        },
    ],
});
function o() {
    let e = (0, i.Y0)({ location: "canSeeRemixBadge" });
    return a.useExperiment({ location: "canSeeRemixBadge" }, { autoTrackExposure: !0 }).canSeeRemixBadge && e;
}
function s() {
    let e = (0, i.Y0)({ location: "isRemixANitroPerkHook" });
    return a.useExperiment({ location: "isRemixANitroPerkHook" }, { autoTrackExposure: !0 }).isNitroPerk && e;
}
