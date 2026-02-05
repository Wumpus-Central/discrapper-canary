n.d(t, { A: () => r });
var i = n(353640),
    l = n(849077);
let s = { [l.Ur.UNREAD]: !0, [l.Ur.TODAY]: !0, [l.Ur.YESTERDAY]: !0, [l.Ur.OLDER]: !0 },
    a = { [l.Ur.UNREAD]: !0, [l.Ur.TODAY]: !1, [l.Ur.YESTERDAY]: !1, [l.Ur.OLDER]: !1 },
    r = (0, i.v)((e, t) => ({
        messageCategoryOpenStates: s,
        getOpenState: (e) => t().messageCategoryOpenStates[e],
        toggleOpenState: (t) => {
            e((e) => ({
                messageCategoryOpenStates: { ...e.messageCategoryOpenStates, [t]: !e.messageCategoryOpenStates[t] },
            }));
        },
        setOpenStateFromUnreads: (t) => {
            e({ messageCategoryOpenStates: t ? a : s });
        },
    }));
