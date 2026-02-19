"use strict";
n.d(t, { A: () => a });
var i = n(627968),
    s = n(64700),
    l = n(763793),
    r = n(532485);
let a = s.memo(function (e) {
    let { channel: t, participants: n, tileWidth: s, selectedParticipant: a, popoutType: o } = e;
    return (0, i.jsx)("div", {
        className: r.q,
        children: n.map((e) =>
            e.id === a?.id ? null : (0, i.jsx)(l.A, { channel: t, participant: e, width: s, popoutType: o }, e.id),
        ),
    });
});
