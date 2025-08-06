n.d(t, { Z: () => s });
var r = n(255367),
    i = n(73800),
    l = n(450369),
    a = n(172211);
let s = i.memo(function (e) {
    let { channel: t, participants: n, tileWidth: i, selectedParticipant: s } = e;
    return (0, r.jsx)("div", {
        className: a.rowContainer,
        children: n.map((e) =>
            e.id === (null == s ? void 0 : s.id)
                ? null
                : (0, r.jsx)(
                      l.Z,
                      {
                          channel: t,
                          participant: e,
                          width: i,
                      },
                      e.id,
                  ),
        ),
    });
});
