"use strict";
n.d(t, { A: () => A });
var i = n(627968),
    r = n(64700),
    a = n(688810),
    s = n(183555),
    l = n(758873),
    o = n(80330),
    d = n(402857),
    c = n(64622),
    u = n(986712),
    _ = n(518477),
    E = n(375708);
function A(e) {
    let { user: t, currentUser: n, guildId: A, onOpenUserProfileModal: h, onClose: I } = e,
        { analyticsLocations: f } = (0, a.Ay)(),
        { trackUserProfileAction: p } = (0, s.NJ)(),
        { cards: T, isOffline: m } = (0, l.A)({ userId: t.id, currentUserId: n.id, guildId: A }),
        g = r.useCallback(
            (e) => {
                let r = { ...e, user: t, currentUser: n, onClose: I };
                return T.map((e, t) =>
                    (function (e, t, n) {
                        switch (e.type) {
                            case "stream":
                                return (0, i.jsx)(c.A, { stream: e.stream, ...n }, "stream");
                            case "live":
                                return (0, i.jsx)(d.A, { activity: e.activity, ...n }, `live-${t}`);
                            case "voice":
                                return (0, i.jsx)(u.A, { voiceChannel: e.voiceChannel, ...n }, "voice");
                        }
                    })(e, t, r),
                );
            },
            [T, n, I, t],
        );
    return m
        ? null
        : (0, i.jsx)(o.A, {
              renderCards: g,
              heading: E.intl.string(E.t.J6STd9),
              onExpand: () => {
                  p({ action: "PRESS_SHOW_MORE_ACTIVITY", analyticsLocations: f }), h?.({ tabSection: _.RP.ACTIVITY });
              },
          });
}
