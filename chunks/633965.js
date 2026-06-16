"use strict";
n.d(t, { Ei: () => a, Ld: () => o, pc: () => s, u9: () => r });
let i = (0, n(353640).v)((e) => ({}));
function r(e) {
    i.setState({ getVisibleGuildIds: e });
}
function s() {
    return i.getState().getVisibleGuildIds;
}
function a(e) {
    i.setState({ getVisibleChannelIds: e });
}
function o() {
    return i.getState().getVisibleChannelIds;
}
