n.d(t, {
    AI: () => l,
    EL: () => d,
    SE: () => u,
    ew: () => c
});
var i = n(570140),
    r = n(314897),
    a = n(351780),
    s = n(843693),
    o = n(112606);
function l(e) {
    i.Z.dispatch({
        type: 'POGGERMODE_SETTINGS_UPDATE',
        settings: e
    });
    let t = {
        ...a.Z.getState(),
        ...e
    };
    (0, o.Z)(t);
}
function u(e) {
    i.Z.dispatch({
        type: 'POGGERMODE_UPDATE_COMBO',
        ...e
    });
}
function c(e) {
    i.Z.dispatch({
        type: 'POGGERMODE_UPDATE_MESSAGE_COMBO',
        comboMessage: {
            ...e,
            displayed: !0
        }
    });
}
function d(e, t) {
    var n;
    let a = r.default.getId(),
        o = s.ZP.getUserCombo(a, e);
    null != o &&
        i.Z.dispatch({
            type: 'POGGERMODE_UPDATE_MESSAGE_COMBO',
            comboMessage: {
                combo: o,
                channelId: e,
                messageId: t,
                displayed: !1
            }
        });
    let l = null != o && (null == o ? void 0 : o.value) > 0 ? (null !== (n = null == o ? void 0 : o.multiplier) && void 0 !== n ? n : 0) + 1 : 1;
    i.Z.dispatch({
        type: 'POGGERMODE_UPDATE_COMBO',
        channelId: e,
        userId: a,
        multiplier: l,
        value: 0
    });
}
