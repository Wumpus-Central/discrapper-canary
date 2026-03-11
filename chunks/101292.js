"use strict";
n.d(t, { q: () => o });
var r = n(499867),
    i = n(265690),
    s = n(121894),
    a = n(932607);
let o = (0, i.h)()(
    (0, r.Zr)(
        (e, t) => ({
            seenUnfurlQuestIds: {},
            markUnfurlSeen: (n) => {
                (0, s.r)(() => {
                    let { seenUnfurlQuestIds: r } = t();
                    !0 !== r[n] && e({ seenUnfurlQuestIds: { ...r, [n]: !0 } });
                });
            },
            clearUserState: () => {
                e({ seenUnfurlQuestIds: {} });
            },
        }),
        {
            name: "questBarUnfurlState",
            storage: (0, r.KU)(() => a.A),
            partialize: (e) => ({ seenUnfurlQuestIds: e.seenUnfurlQuestIds }),
            version: 0,
        },
    ),
);
