n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var i = n(704215),
    s = n(230711),
    a = n(765585),
    l = n(981631),
    o = n(921944),
    c = n(388032),
    d = n(109253);
function u(e) {
    let { markAsDismissed: t } = e;
    return (0, r.jsx)(a.Z, {
        header: c.NW.string(c.t['89R9tb']),
        body: c.NW.string(c.t['/BB09P']),
        tryItText: c.NW.string(c.t.jVcuVV),
        dismissibleContent: i.z.SOUNDBOARD_VOLUME_EDUCATION,
        artClassName: d.art,
        onTryFeature: () => {
            s.Z.open(l.oAB.VOICE), t(o.L.UNKNOWN);
        },
        onClose: () => t(o.L.UNKNOWN),
        shouldUseHorizontalButtons: !0,
        inlineArt: !0
    });
}
