"use strict";
n.d(t, { q: () => o });
var r = n(499867),
    i = n(265690),
    a = n(121894),
    s = n(506774);
let o = (0, i.h)()(
    (0, r.Zr)(
        (e, t) => ({
            seenUnfurlQuestIds: {},
            markUnfurlSeen: (n) => {
                (0, a.r)(() => {
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
            storage: (0, r.KU)(() => ({
                getItem: (e) => s.w.get(e) ?? null,
                setItem: (e, t) => s.w.set(e, t),
                removeItem: (e) => s.w.remove(e),
            })),
            partialize: (e) => ({ seenUnfurlQuestIds: e.seenUnfurlQuestIds }),
            version: 0,
        },
    ),
);
