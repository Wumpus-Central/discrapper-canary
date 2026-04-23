"use strict";
n.d(t, { Ei: () => a, Ld: () => o, pc: () => s, u9: () => i });
let r = (0, n(353640).v)((e) => ({}));
function i(e) {
    r.setState({ getVisibleGuildIds: e });
}
function s() {
    return r.getState().getVisibleGuildIds;
}
function a(e) {
    r.setState({ getVisibleChannelIds: e });
}
function o() {
    return r.getState().getVisibleChannelIds;
}
