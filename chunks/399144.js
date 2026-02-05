"use strict";
n.d(t, { A: () => a });
var r = n(315069),
    i = n(427157);
class a extends r.A {
    id;
    name;
    type;
    user;
    displayName;
    static createFromServer(e) {
        return new a({ ...e, user: new i.A(e.user) });
    }
    constructor(e) {
        super(),
            (this.id = e.id),
            (this.name = e.name),
            (this.type = e.type),
            (this.user = e.user),
            (this.displayName = e.name_localized ?? e.name);
    }
}
