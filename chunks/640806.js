n.d(t, { Z: () => u });
var i = n(200651);
n(192379);
var l = n(704215),
    r = n(230711),
    a = n(765585),
    s = n(981631),
    o = n(921944),
    d = n(388032),
    c = n(439200);
function u(e) {
    let { markAsDismissed: t } = e;
    return (0, i.jsx)(a.Z, {
        header: d.intl.string(d.t['89R9tb']),
        body: d.intl.string(d.t['/BB09P']),
        tryItText: d.intl.string(d.t.jVcuVV),
        dismissibleContent: l.z.SOUNDBOARD_VOLUME_EDUCATION,
        artClassName: c.art,
        onTryFeature: () => {
            r.Z.open(s.oAB.VOICE), t(o.L.UNKNOWN);
        },
        onClose: () => t(o.L.UNKNOWN),
        shouldUseHorizontalButtons: !0,
        inlineArt: !0
    });
}
