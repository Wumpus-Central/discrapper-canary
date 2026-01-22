n.d(t, {
    fo: () => s,
    uW: () => i,
    vr: () => o,
    z0: () => c,
}),
    n(733351);
var l = n(753738),
    r = n(985018);

function a(e, t) {
    return {
        type: e,
        message: null != t ? t : null,
    };
}

function i() {
    return a(0, r.intl.string(r.t["71wuR0"]));
}

function s() {
    return a(0, r.intl.string(r.t["w/BT3G"]));
}

function c(e, t) {
    return a(1, (0, l.cw)(e, null == t ? void 0 : t.id));
}

function o(e, t) {
    var n;
    return null == e ||
        (0 === e.type && null != t.content && t.content.trim().length > 0) ||
        (2 === e.type && null != t.tags && t.tags.length > 0)
        ? null
        : null != (n = e.message)
          ? n
          : null;
}
