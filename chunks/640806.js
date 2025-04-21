n.d(t, { Z: () => u });
var i = n(200651);
n(192379);
var r = n(704215),
    s = n(230711),
    l = n(765585),
    a = n(981631),
    o = n(921944),
    c = n(388032),
    d = n(109253);
function u(e) {
    let { markAsDismissed: t } = e;
    return (0, i.jsx)(l.Z, {
        header: c.intl.string(c.t['89R9tb']),
        body: c.intl.string(c.t['/BB09P']),
        tryItText: c.intl.string(c.t.jVcuVV),
        dismissibleContent: r.z.SOUNDBOARD_VOLUME_EDUCATION,
        artClassName: d.art,
        onTryFeature: () => {
            s.Z.open(a.oAB.VOICE), t(o.L.UNKNOWN);
        },
        onClose: () => t(o.L.UNKNOWN),
        shouldUseHorizontalButtons: !0,
        inlineArt: !0
    });
}
