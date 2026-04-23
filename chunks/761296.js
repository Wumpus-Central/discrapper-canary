"use strict";
n.d(t, { Q: () => s });
var r = n(39304),
    i = n(73153);
function s(e) {
    return {
        ...e,
        extra: {
            ...e?.extra,
            ...{
                ...(null != i.h._currentDispatchActionType ? { currentAction: i.h._currentDispatchActionType } : {}),
                lastFewActions: (0, r.lK)(),
            },
        },
    };
}
