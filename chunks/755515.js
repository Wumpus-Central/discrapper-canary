n.d(t, { Z: () => o });
var r = n(951288),
    i = n(647438),
    l = n(450369),
    a = n(123382);
let o = i.memo(function (e) {
    let { channel: t, participants: n, tileWidth: i, selectedParticipant: o } = e;
    return (0, r.jsx)("div", {
        className: a.rowContainer,
        children: n.map((e) =>
            e.id === (null == o ? void 0 : o.id)
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
