"use strict";
n.d(t, { A: () => f });
var i = n(627968),
    r = n(64700),
    s = n(688810),
    a = n(183555),
    o = n(758873),
    l = n(80330),
    u = n(402857),
    c = n(64622),
    d = n(986712),
    _ = n(518477),
    h = n(375708);
function f(e) {
    let { user: t, currentUser: n, guildId: f, onOpenUserProfileModal: p, onClose: E } = e,
        { analyticsLocations: m } = (0, s.Ay)(),
        { trackUserProfileAction: g } = (0, a.NJ)(),
        { cards: A, isOffline: I } = (0, o.A)({ userId: t.id, currentUserId: n.id, guildId: f }),
        T = r.useCallback(
            (e) => {
                let r = { ...e, user: t, currentUser: n, onClose: E };
                return A.map((e, t) =>
                    (function (e, t, n) {
                        switch (e.type) {
                            case "stream":
                                return (0, i.jsx)(c.A, { stream: e.stream, ...n }, "stream");
                            case "live":
                                return (0, i.jsx)(u.A, { activity: e.activity, ...n }, `live-${t}`);
                            case "voice":
                                return (0, i.jsx)(d.A, { voiceChannel: e.voiceChannel, ...n }, "voice");
                        }
                    })(e, t, r),
                );
            },
            [A, n, E, t],
        );
    return I
        ? null
        : (0, i.jsx)(l.A, {
              renderCards: T,
              heading: h.intl.string(h.t.J6STd9),
              onExpand: () => {
                  g({ action: "PRESS_SHOW_MORE_ACTIVITY", analyticsLocations: m }), p?.({ tabSection: _.RP.ACTIVITY });
              },
          });
}
