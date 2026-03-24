"use strict";
n.d(t, { K: () => i });
var r = n(652215);
function i(e, t, n) {
    let i = new n.constructor(n.toJS());
    return (
        (i.position_ = t.order),
        null != t.nickname && n.type !== r.rbe.DM && (i.name = t.nickname),
        null != t.parentId && t.parentId in e && (i.parent_id = t.parentId),
        i
    );
}
