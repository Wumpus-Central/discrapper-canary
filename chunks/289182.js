r.d(n, {
    v: function () {
        return s;
    }
});
var i = r(625306),
    a = r(570140);
function o() {
    return {
        ...(null != a.Z._currentDispatchActionType ? { currentAction: a.Z._currentDispatchActionType } : {}),
        lastFewActions: (0, i.qC)()
    };
}
function s(e) {
    return {
        ...e,
        extra: {
            ...(null == e ? void 0 : e.extra),
            ...o()
        }
    };
}
