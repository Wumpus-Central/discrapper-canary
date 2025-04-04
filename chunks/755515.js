n.d(t, { Z: () => a });
var r = n(200651),
    i = n(192379),
    l = n(450369),
    o = n(172211);
let a = i.memo(function (e) {
    let { channel: t, participants: n, tileWidth: i, selectedParticipant: a } = e;
    return (0, r.jsx)('div', {
        className: o.rowContainer,
        children: n.map((e) =>
            e.id === (null == a ? void 0 : a.id)
                ? null
                : (0, r.jsx)(
                      l.Z,
                      {
                          channel: t,
                          participant: e,
                          width: i
                      },
                      e.id
                  )
        )
    });
});
