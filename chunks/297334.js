n.d(t, {
    F7: () => o,
    Mt: () => c,
    PH: () => u,
    aw: () => s,
    hs: () => d,
});
var r = n(735438),
    l = n.n(r),
    i = n(994500),
    a = n(403362);

function s(e, t) {
    return e.filter((e) => (0, a.Vq)(e)).filter((e) => !(null != t ? t.includes(e.id) : i.A.isBlockedOrIgnored(e.id)));
}

function o(e, t) {
    return e.filter((e) => !(null != t ? t.includes(e) : i.A.isBlockedOrIgnored(e)));
}

function c(e) {
    return e.filter((e) => !i.A.isBlockedOrIgnored(e.ownerId));
}

function u(e, t) {
    return e.some((e) => (null != t ? t.includes(e) : i.A.isBlockedOrIgnored(e)));
}

function d(e) {
    return l()(e)
        .filter((e) => !i.A.isBlockedOrIgnored(e.userId))
        .keyBy("userId")
        .value();
}
