n.d(t, {
    a: () => o,
});
var r = n(311907),
    i = n(734057),
    a = n(309010);

function s() {
    try {
        return CSS.supports("selector(:has(*))");
    } catch (e) {
        return !1;
    }
}

function o() {
    return null != (0, r.bG)([i.A, a.A], () => i.A.getChannel(a.A.getChannelId())) && !!s();
}
