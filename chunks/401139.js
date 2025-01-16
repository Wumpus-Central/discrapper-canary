var i = n(200651),
    l = n(192379),
    r = n(450369),
    a = n(500042);
t.Z = l.memo(function (e) {
    let { channel: t, participants: n, tileWidth: l, selectedParticipant: s } = e;
    return (0, i.jsx)('div', {
        className: a.rowContainer,
        children: n.map((e) =>
            e.id === (null == s ? void 0 : s.id)
                ? null
                : (0, i.jsx)(
                      r.Z,
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
