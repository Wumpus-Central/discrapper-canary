n.d(t, { p: () => u });
var i = n(311907),
    s = n(684013),
    l = n(419954),
    a = n(256415),
    r = n(780964),
    o = n(652215),
    d = n(985018);
let u = (0, l.Hn)(r.X.OVERLAY_VOICE_WIDGET_DISPLAY_USERS, {
    useTitle: () => d.intl.string(d.t.swsWWC),
    useValue: () => (0, i.bG)([a.default], () => a.default.getDisplayUserMode()),
    setValue: (e) => {
        s.A.setDisplayUserMode(e);
    },
    useOptions: () => [
        { id: "always", label: d.intl.string(d.t.nBmDrT), value: o.f5z.ALWAYS },
        { id: "speaking", label: d.intl.string(d.t["2OvIZY"]), value: o.f5z.ONLY_WHILE_SPEAKING },
    ],
});
