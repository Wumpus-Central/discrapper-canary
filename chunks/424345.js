"use strict";
n.d(t, { K: () => r });
var i = n(652215);
function r(e, t, n) {
    let r = new n.constructor(n.toJS());
    return (
        (r.position_ = t.order),
        null != t.nickname && n.type !== i.rbe.DM && (r.name = t.nickname),
        null != t.parentId && t.parentId in e && (r.parent_id = t.parentId),
        r
    );
}
