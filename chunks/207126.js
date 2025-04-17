n.d(t, { Z: () => s });
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(422034),
    l = n(938475),
    o = n(787508);
function s(e) {
    let { channel: t } = e;
    if (null == t) return null;
    let n = l.ZP.getVoiceStatesForChannel(t).slice(0, 6),
        s = n.map((e, t) => {
            let { user: l } = e;
            return (0, r.jsx)(
                a.O,
                {
                    affinity: l,
                    applyMask: t !== n.length - 1,
                    size: i.EFr.SIZE_20
                },
                l.id
            );
        });
    return (0, r.jsx)('div', {
        className: o.avatars,
        children: s
    });
}
