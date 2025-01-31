n.d(t, { u: () => r });
var i = n(40284);
function r() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
        t = arguments.length > 1 ? arguments[1] : void 0;
    switch (t.type) {
        case i.fu:
        case i.Rd:
            return e + 1;
        case i.SG:
        case i.IS:
            return e - 1;
        default:
            return e;
    }
}
