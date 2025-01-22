r.d(n, {
    AI: function () {
        return u;
    },
    EL: function () {
        return f;
    },
    SE: function () {
        return c;
    },
    ew: function () {
        return d;
    }
});
var i = r(570140),
    a = r(314897),
    o = r(351780),
    s = r(843693),
    l = r(112606);
function u(e) {
    i.Z.dispatch({
        type: 'POGGERMODE_SETTINGS_UPDATE',
        settings: e
    });
    let n = {
        ...o.Z.getState(),
        ...e
    };
    (0, l.Z)(n);
}
function c(e) {
    i.Z.dispatch({
        type: 'POGGERMODE_UPDATE_COMBO',
        ...e
    });
}
function d(e) {
    i.Z.dispatch({
        type: 'POGGERMODE_UPDATE_MESSAGE_COMBO',
        comboMessage: {
            ...e,
            displayed: !0
        }
    });
}
function f(e, n) {
    var r;
    let o = a.default.getId(),
        l = s.ZP.getUserCombo(o, e);
    null != l &&
        i.Z.dispatch({
            type: 'POGGERMODE_UPDATE_MESSAGE_COMBO',
            comboMessage: {
                combo: l,
                channelId: e,
                messageId: n,
                displayed: !1
            }
        });
    let u = null != l && (null == l ? void 0 : l.value) > 0 ? (null !== (r = null == l ? void 0 : l.multiplier) && void 0 !== r ? r : 0) + 1 : 1;
    i.Z.dispatch({
        type: 'POGGERMODE_UPDATE_COMBO',
        channelId: e,
        userId: o,
        multiplier: u,
        value: 0
    });
}
