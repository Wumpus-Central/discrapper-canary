n.d(t, {
    $i: () => f,
    I: () => c,
    Io: () => l,
    Rv: () => p,
    TH: () => i,
    _5: () => s,
    cL: () => u,
    dF: () => o,
    e5: () => _,
    fO: () => r,
    l8: () => d,
    wR: () => a
});
var r = (function (e) {
        return (e[(e.STREAM = 0)] = 'STREAM'), (e[(e.HIDDEN_STREAM = 1)] = 'HIDDEN_STREAM'), (e[(e.USER = 2)] = 'USER'), (e[(e.ACTIVITY = 3)] = 'ACTIVITY'), (e[(e.PRESENCE_EMBEDDED_ACTIVITY = 4)] = 'PRESENCE_EMBEDDED_ACTIVITY'), e;
    })({}),
    i = (function (e) {
        return (e.STREAM = 'STREAM'), (e.USER = 'USER'), (e.ACTIVITY = 'ACTIVITY'), e;
    })({}),
    o = (function (e) {
        return (e.NONE = 'NONE'), (e.AUTO = 'AUTO'), e;
    })({}),
    a = (function (e) {
        return (e[(e.DESKTOP = 0)] = 'DESKTOP'), (e[(e.MOBILE = 1)] = 'MOBILE'), (e[(e.XBOX = 2)] = 'XBOX'), (e[(e.PLAYSTATION = 3)] = 'PLAYSTATION'), e;
    })({});
function s(e) {
    return (null == e ? void 0 : e.type) === 0 || (null == e ? void 0 : e.type) === 1;
}
function l(e) {
    return (null == e ? void 0 : e.type) === 2;
}
function c(e) {
    return (null == e ? void 0 : e.type) === 3;
}
var u = (function (e) {
    return (e[(e.VIDEO = 0)] = 'VIDEO'), (e[(e.CAMERA_PREVIEW = 1)] = 'CAMERA_PREVIEW'), e;
})({});
let d = {
        0: 320,
        1: 160
    },
    f = {
        0: 960,
        1: 480
    },
    p = {
        0: 200,
        1: 160
    },
    _ = 8;
