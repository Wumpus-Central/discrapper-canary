"use strict";
var r = n(739305),
    i = n(410323),
    a = n(514575),
    s = n(412405),
    o = r.aTypedArray,
    l = r.getTypedArrayConstructor,
    u = r.exportTypedArrayMethod,
    c = i(r.TypedArrayPrototype.sort);
u("toSorted", function (e) {
    void 0 !== e && a(e);
    var t = o(this);
    return c(s(l(t), t), e);
});
