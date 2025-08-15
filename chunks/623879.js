n.d(t, {
    FZ: () => l,
    ZP: () => a,
});
var r,
    i = n(818083),
    l = (((r = {}).Control = "CONTROL"), (r.Social = "SOCIAL"), (r.Perks = "PERKS"), r);
let a = (0, i.B)({
    kind: "user",
    id: "2025-06_referral_program_dm_embed_refresh_experiment",
    label: "Referral Program DM Embed Refresh Experiment",
    defaultConfig: { cohort: "CONTROL" },
    treatments: [
        {
            id: 0,
            label: "Control group. Users experience existing flow.",
            config: { cohort: "CONTROL" },
        },
        {
            id: 1,
            label: "Social Focus treatment group. Users see copy and imagery that emphasises the social aspect of the referral",
            config: { cohort: "SOCIAL" },
        },
        {
            id: 2,
            label: "Perks Focus treatment group. Users see copy and imagery that emphasises the perks aspect of the referral",
            config: { cohort: "PERKS" },
        },
    ],
});
