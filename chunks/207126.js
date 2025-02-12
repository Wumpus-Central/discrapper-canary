n.d(t, { Z: () => o });
var i = n(200651);
n(192379);
var l = n(481060),
    a = n(422034),
    r = n(938475),
    s = n(248862);
function o(e) {
    let { channel: t } = e;
    if (null == t) return null;
    let n = r.ZP.getVoiceStatesForChannel(t).slice(0, 6),
        o = n.map((e, t) => {
            let { user: r } = e;
            return (0, i.jsx)(
                a.O,
                {
                    affinity: r,
                    applyMask: t !== n.length - 1,
                    size: l.EFr.SIZE_20
                },
                r.id
            );
        });
    return (0, i.jsx)('div', {
        className: s.avatars,
        children: o
    });
}
