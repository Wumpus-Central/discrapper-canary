"use strict";
n.d(t, { S: () => o });
var i,
    r = (((i = {})[(i.NOTE = 1)] = "NOTE"), (i[(i.PLANT = 2)] = "PLANT"), i);
function s(e) {
    return {
        objectId: e.object_id,
        createdBy: e.created_by,
        updatedAt: null != e.updated_at ? new Date(e.updated_at) : void 0,
        updatedBy: e.updated_by,
    };
}
function a(e) {
    return e.object_type === r.PLANT
        ? { objectType: r.PLANT, ...s(e) }
        : { objectType: r.NOTE, ...s(e), content: e.content, position: e.position };
}
function o(e) {
    return {
        roomId: e.room_id,
        users: e.users.reduce(
            (e, t) => (
                e.set(t.user_id, {
                    userId: t.user_id,
                    position: t.position,
                    statusId: t.status_id,
                    statusText: t.status_text,
                }),
                e
            ),
            new Map(),
        ),
        background: e.background,
        objects: Object.entries(e.objects).reduce((e, t) => {
            let [n, i] = t;
            return e.set(+n, i.map(a)), e;
        }, new Map()),
    };
}
