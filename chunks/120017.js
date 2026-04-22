n.d(t, { A: () => r });
var i = n(627968),
    l = n(64700),
    a = n(763793),
    s = n(23540);
let r = l.memo(function (e) {
    let { channel: t, participants: n, tileWidth: l, selectedParticipant: r, popoutType: o } = e;
    return (0, i.jsx)("div", {
        className: s.q,
        children: n.map((e) =>
            e.id === r?.id ? null : (0, i.jsx)(a.A, { channel: t, participant: e, width: l, popoutType: o }, e.id),
        ),
    });
});
