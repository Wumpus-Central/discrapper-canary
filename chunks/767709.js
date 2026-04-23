"use strict";
var r = n(739305),
    i = n(410323),
    s = n(514575),
    a = n(412405),
    o = r.aTypedArray,
    l = r.getTypedArrayConstructor,
    u = r.exportTypedArrayMethod,
    c = i(r.TypedArrayPrototype.sort);
u("toSorted", function (e) {
    void 0 !== e && s(e);
    var t = o(this);
    return c(a(l(t), t), e);
});
