n.d(t, {
    A: () => d,
});
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(397927),
    s = n(827343),
    o = n(195043),
    l = n(430452),
    c = n(531525),
    u = n(985018);

function d() {
    let e = (0, i.bG)([l.A], () => l.A.getEnableSilenceWarning());
    return (0, r.jsx)(o.x, {
        setting: c.H.VOICE_AND_VIDEO_ADVANCED_SILENCE_WARNING,
        children: (0, r.jsx)(a.dOG, {
            label: u.intl.string(u.t.jtiiCw),
            checked: e,
            onChange: (e) => s.A.setSilenceWarning(e),
        }),
    });
}
