"use strict";
n.d(t, { A: () => a });
var i = n(353640),
    s = n(849077);
let l = { [s.Ur.UNREAD]: !0, [s.Ur.TODAY]: !0, [s.Ur.YESTERDAY]: !0, [s.Ur.OLDER]: !0 },
    r = { [s.Ur.UNREAD]: !0, [s.Ur.TODAY]: !1, [s.Ur.YESTERDAY]: !1, [s.Ur.OLDER]: !1 },
    a = (0, i.v)((e, t) => ({
        messageCategoryOpenStates: l,
        getOpenState: (e) => t().messageCategoryOpenStates[e],
        toggleOpenState: (t) => {
            e((e) => ({
                messageCategoryOpenStates: { ...e.messageCategoryOpenStates, [t]: !e.messageCategoryOpenStates[t] },
            }));
        },
        setOpenStateFromUnreads: (t) => {
            e({ messageCategoryOpenStates: t ? r : l });
        },
    }));
