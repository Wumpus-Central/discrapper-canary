"use strict";
n.d(t, { D: () => l });
var r = n(311907),
    i = n(994500),
    a = n(800828),
    s = n(652215),
    o = n(985018);
function l(e) {
    return (0, r.bG)(
        [a.A, i.A],
        () =>
            i.A.getRelationshipType(e) === s.eA$.PENDING_INCOMING
                ? o.intl.string(o.t.wPI56w)
                : a.A.getGameRelationshipsForUser(e).length > 0
                  ? o.intl.string(o.t.LAcY7m)
                  : o.intl.string(o.t.w5uwoI),
        [e],
    );
}
