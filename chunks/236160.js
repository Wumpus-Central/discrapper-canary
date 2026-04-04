n.d(t, { B: () => c });
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(256311),
    a = n(883600),
    r = n(419954),
    o = n(780964),
    d = n(89516);
let c = (0, r.E2)(o.X.CHANGE_LOG_OVERRIDE, {
    useSearchTerms: () => ["changelog override", "change log override"],
    Component: function () {
        let e = (0, s.bG)([a.A], () => a.A.overrideId()),
            t = async (e) => {
                let t = a.A.getChangelog(e, "en-US");
                return null != t ? t : ((await l.A.fetchChangelog(e, "en-US", !1, !0)) ?? null);
            };
        return (0, i.jsx)(d.q, {
            label: "Change Log Override",
            description: "Provide a change log ID to override the change log shown to this user.",
            placeholder: "Enter Change Log ID...",
            overrideId: e ?? null,
            setOverride: (e) => l.A.setChangelogOverride(e),
            fetchOverride: t,
        });
    },
});
