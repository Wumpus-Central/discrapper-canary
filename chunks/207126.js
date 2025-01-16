n.d(t, {
    Z: function () {
        return s;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(422034),
    a = n(938475),
    o = n(239628);
function s(e) {
    let { channel: t } = e;
    if (null == t) return null;
    let n = a.ZP.getVoiceStatesForChannel(t).slice(0, 6),
        s = n.map((e, t) => {
            let { user: a } = e;
            return (0, i.jsx)(
                l.O,
                {
                    affinity: a,
                    applyMask: t !== n.length - 1,
                    size: r.AvatarSizes.SIZE_20
                },
                a.id
            );
        });
    return (0, i.jsx)('div', {
        className: o.avatars,
        children: s
    });
}
