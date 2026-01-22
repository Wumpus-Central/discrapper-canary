n.d(t, { T: () => u });
var r = n(317374),
    i = n(681456),
    a = n(988440);
function s(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function o(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? s(Object(n), !0).forEach(function (t) {
                  l(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : s(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
var c = {
    itemType: null,
    item: null,
    sourceId: null,
    targetIds: [],
    dropResult: null,
    didDrop: !1,
    isSourcePublic: null,
};
function u() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c,
        t = arguments.length > 1 ? arguments[1] : void 0,
        n = t.payload;
    switch (t.type) {
        case r.Vw:
            return o(
                o({}, e),
                {},
                {
                    itemType: n.itemType,
                    item: n.item,
                    sourceId: n.sourceId,
                    isSourcePublic: n.isSourcePublic,
                    dropResult: null,
                    didDrop: !1,
                },
            );
        case r.BS:
            return o(o({}, e), {}, { isSourcePublic: !0 });
        case r.l6:
            return o(o({}, e), {}, { targetIds: n.targetIds });
        case i.v4:
            if (-1 === e.targetIds.indexOf(n.targetId)) return e;
            return o(o({}, e), {}, { targetIds: (0, a.FF)(e.targetIds, n.targetId) });
        case r.q2:
            return o(
                o({}, e),
                {},
                {
                    dropResult: n.dropResult,
                    didDrop: !0,
                    targetIds: [],
                },
            );
        case r.dU:
            return o(
                o({}, e),
                {},
                {
                    itemType: null,
                    item: null,
                    sourceId: null,
                    dropResult: null,
                    didDrop: !1,
                    isSourcePublic: null,
                    targetIds: [],
                },
            );
        default:
            return e;
    }
}
