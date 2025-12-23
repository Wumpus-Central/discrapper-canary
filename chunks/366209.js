n.d(e, { Q: () => T });
var i = n(442837),
    l = n(13245),
    s = n(509613),
    u = n(237997),
    r = n(313789),
    a = n(981631),
    o = n(388032);
let T = (0, s.Em)(r.n.OVERLAY_VOICE_WIDGET_DISPLAY_USERS, {
    fieldLayout: "horizontal",
    useTitle: () => o.intl.string(o.t.swsWWC),
    useValue: () => (0, i.e7)([u.default], () => u.default.getDisplayUserMode()),
    setValue: (t) => {
        l.Z.setDisplayUserMode(t);
    },
    useOptions: () => [
        {
            id: "always",
            label: o.intl.string(o.t.nBmDrT),
            value: a.OYC.ALWAYS,
        },
        {
            id: "speaking",
            label: o.intl.string(o.t["2OvIZY"]),
            value: a.OYC.ONLY_WHILE_SPEAKING,
        },
    ],
});
