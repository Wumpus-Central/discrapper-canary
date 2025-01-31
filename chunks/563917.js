n.d(t, { Z: () => r });
var i = n(200651);
n(192379);
var l = n(792766),
    a = n(955415);
let r = (e) => {
    let { stageInstance: t, guild: n, isMember: r, onTransitionToInviteChannel: s, onAcceptInstantInvite: o } = e;
    return (0, i.jsx)(a.Z, {
        children: (0, i.jsx)(l.Z, {
            isEmbed: !0,
            stageInstance: t,
            guild: n,
            onClick: r ? s : o
        })
    });
};
