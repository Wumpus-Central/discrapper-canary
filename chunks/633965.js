"use strict";
n.d(t, { Ei: () => s, Ld: () => l, pc: () => a, u9: () => r });
let i = (0, n(196765).v)((e) => ({}));
function r(e) {
    i.setState({ getVisibleGuildIds: e });
}
function a() {
    return i.getState().getVisibleGuildIds;
}
function s(e) {
    i.setState({ getVisibleChannelIds: e });
}
function l() {
    return i.getState().getVisibleChannelIds;
}
