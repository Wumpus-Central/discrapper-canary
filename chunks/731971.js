n.d(t, {
    U1: function () {
        return o;
    },
    XW: function () {
        return i;
    },
    c4: function () {
        return c;
    },
    h6: function () {
        return l;
    },
    oE: function () {
        return a;
    },
    y: function () {
        return r;
    }
});
let i = (0, n(15729).U)((e) => ({
        nickname: void 0,
        dmsAllowed: !0,
        showActivity: !0,
        receiveNotifications: !1,
        setNickname: (t) => e({ nickname: t }),
        setDmsAllowed: (t) => e({ dmsAllowed: t }),
        setShowActivity: (t) => e({ showActivity: t }),
        setReceiveNotifications: (t) => e({ receiveNotifications: t }),
        reset: () =>
            e({
                nickname: void 0,
                dmsAllowed: !0,
                showActivity: !0,
                receiveNotifications: !1
            })
    })),
    a = () => {
        i.getState().reset();
    },
    r = () => i.getState().nickname,
    l = () => i.getState().dmsAllowed,
    o = () => i.getState().showActivity,
    c = () => i.getState().receiveNotifications;
