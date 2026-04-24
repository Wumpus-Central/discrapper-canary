"use strict";
n.d(t, { D: () => o });
var i = n(17928),
    r = n(994500),
    l = n(800828),
    a = n(652215),
    s = n(985018);
function o(e) {
    return (0, i.bG)(
        [l.A, r.A],
        () =>
            r.A.getRelationshipType(e) === a.eA$.PENDING_INCOMING
                ? s.intl.string(s.t.wPI56w)
                : l.A.getGameRelationshipsForUser(e).length > 0
                  ? s.intl.string(s.t.LAcY7m)
                  : s.intl.string(s.t.w5uwoI),
        [e],
    );
}
