n.d(t, {
    A: () => s,
});
var r = n(627968),
    l = n(64700),
    i = n(763793),
    a = n(532485);
let s = l.memo(function (e) {
    let { channel: t, participants: n, tileWidth: l, selectedParticipant: s, popoutType: o } = e;
    return (0, r.jsx)("div", {
        className: a.q,
        children: n.map((e) =>
            e.id === (null == s ? void 0 : s.id)
                ? null
                : (0, r.jsx)(
                      i.A,
                      {
                          channel: t,
                          participant: e,
                          width: l,
                          popoutType: o,
                      },
                      e.id,
                  ),
        ),
    });
});
