n.d(t, { u: () => i });
var r = n(40284);
function i() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
        t = arguments.length > 1 ? arguments[1] : void 0;
    switch (t.type) {
        case r.fu:
        case r.Rd:
            return e + 1;
        case r.SG:
        case r.IS:
            return e - 1;
        default:
            return e;
    }
}
