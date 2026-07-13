s.d(l, { A: () => v });
var a = s(627968),
    n = s(64700),
    i = s(688810),
    r = s(183555),
    t = s(758873),
    c = s(80330),
    d = s(402857),
    u = s(64622),
    h = s(986712),
    o = s(518477),
    x = s(375708);
function v(e) {
    let { user: l, currentUser: s, guildId: v, onOpenUserProfileModal: j, onClose: m } = e,
        { analyticsLocations: A } = (0, i.Ay)(),
        { trackUserProfileAction: p } = (0, r.NJ)(),
        { cards: b, isOffline: C } = (0, t.A)({ userId: l.id, currentUserId: s.id, guildId: v }),
        I = n.useCallback(
            (e) => {
                let n = { ...e, user: l, currentUser: s, onClose: m };
                return b.map((e, l) =>
                    (function (e, l, s) {
                        switch (e.type) {
                            case "stream":
                                return (0, a.jsx)(u.A, { stream: e.stream, ...s }, "stream");
                            case "live":
                                return (0, a.jsx)(d.A, { activity: e.activity, ...s }, `live-${l}`);
                            case "voice":
                                return (0, a.jsx)(h.A, { voiceChannel: e.voiceChannel, ...s }, "voice");
                        }
                    })(e, l, n),
                );
            },
            [b, s, m, l],
        );
    return C
        ? null
        : (0, a.jsx)(c.A, {
              renderCards: I,
              heading: x.intl.string(x.t.J6STd9),
              onExpand: () => {
                  p({ action: "PRESS_SHOW_MORE_ACTIVITY", analyticsLocations: A }), j?.({ tabSection: o.RP.ACTIVITY });
              },
          });
}
