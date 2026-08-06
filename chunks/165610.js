"use strict";
n.d(t, {
    U4: () => l,
    VA: () => u,
    Yf: () => c,
    h: () => _,
    ny: () => A,
    sV: () => d,
    sd: () => o,
    x1: () => E,
    y0: () => s,
});
var i,
    r,
    a,
    s = (((i = {})[(i.FOCUSED = 0)] = "FOCUSED"), (i[(i.PIP = 1)] = "PIP"), i),
    l = (((r = {})[(r.MAIN = 0)] = "MAIN"), (r[(r.APP_CHANNEL = 1)] = "APP_CHANNEL"), r);
let o = { type: 0 };
var d = (((a = {})[(a.MAIN = 0)] = "MAIN"), (a[(a.INLINE = 1)] = "INLINE"), a);
function c(e) {
    switch (e.type) {
        case 0:
            return 0;
        case 1:
            return 1;
    }
}
function u(e, t) {
    switch (t.type) {
        case 0:
            return `main:${e}`;
        case 1:
            return `app-channel:${e}:${t.channelId}`;
    }
}
function _(e) {
    if (null != e)
        switch (e.type) {
            case 0:
                return;
            case 1:
                return e.channelId;
        }
}
function E(e) {
    return e?.state === "launched";
}
function A(e) {
    return E(e) ? e : null;
}
