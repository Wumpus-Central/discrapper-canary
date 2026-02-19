"use strict";
n.d(t, { A: () => r });
var i = n(311907),
    s = n(961350),
    l = n(312006);
function r(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return (0, i.cf)([l.Ay, s.default], () => {
        let n = s.default.getId();
        return l.Ay.getPermissionsForUser(n, e, t);
    }, [e, t]);
}
