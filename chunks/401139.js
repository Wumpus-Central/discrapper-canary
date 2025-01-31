n.d(t, { Z: () => s });
var i = n(200651),
    l = n(192379),
    a = n(450369),
    r = n(500042);
let s = l.memo(function (e) {
    let { channel: t, participants: n, tileWidth: l, selectedParticipant: s } = e;
    return (0, i.jsx)('div', {
        className: r.rowContainer,
        children: n.map((e) =>
            e.id === (null == s ? void 0 : s.id)
                ? null
                : (0, i.jsx)(
                      a.Z,
                      {
                          channel: t,
                          participant: e,
                          width: l
                      },
                      e.id
                  )
        )
    });
});
