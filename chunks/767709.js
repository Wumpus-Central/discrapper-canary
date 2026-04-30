"use strict";
var i = n(739305),
    r = n(410323),
    s = n(514575),
    a = n(412405),
    o = i.aTypedArray,
    l = i.getTypedArrayConstructor,
    u = i.exportTypedArrayMethod,
    c = r(i.TypedArrayPrototype.sort);
u("toSorted", function (e) {
    void 0 !== e && s(e);
    var t = o(this);
    return c(a(l(t), t), e);
});
