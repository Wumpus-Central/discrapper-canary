n.d(t, { Z: () => o });
var r = n(200651);
n(192379);
var i = n(792766),
    a = n(955415);
let o = (e) => {
    let { stageInstance: t, guild: n, isMember: o, onTransitionToInviteChannel: l, onAcceptInstantInvite: s } = e;
    return (0, r.jsx)(a.Z, {
        children: (0, r.jsx)(i.Z, {
            isEmbed: !0,
            stageInstance: t,
            guild: n,
            onClick: o ? l : s
        })
    });
};
