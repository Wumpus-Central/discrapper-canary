n.d(t, { Z: () => s });
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(422034),
    o = n(938475),
    l = n(189341);
function s(e) {
    let { channel: t } = e;
    if (null == t) return null;
    let n = o.ZP.getVoiceStatesForChannel(t).slice(0, 6),
        s = n.map((e, t) => {
            let { user: o } = e;
            return (0, r.jsx)(
                a.O,
                {
                    affinity: o,
                    applyMask: t !== n.length - 1,
                    size: i.EFr.SIZE_20
                },
                o.id
            );
        });
    return (0, r.jsx)('div', {
        className: l.avatars,
        children: s
    });
}
