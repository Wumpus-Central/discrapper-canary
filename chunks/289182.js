n.d(t, { v: () => s });
var i = n(625306),
    r = n(570140);
function a() {
    return {
        ...(null != r.Z._currentDispatchActionType ? { currentAction: r.Z._currentDispatchActionType } : {}),
        lastFewActions: (0, i.qC)()
    };
}
function s(e) {
    return {
        ...e,
        extra: {
            ...(null == e ? void 0 : e.extra),
            ...a()
        }
    };
}
