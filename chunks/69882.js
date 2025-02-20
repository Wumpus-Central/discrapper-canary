function r(e) {
    return null != e && new Date(e) > new Date();
}
function i(e) {
    return r(null == e ? void 0 : e.communicationDisabledUntil);
}
n.d(t, {
    J: () => r,
    b: () => i
});
