"use strict";
n.d(t, { A: () => s });
var r = n(315069),
    i = n(427157);
class s extends r.A {
    id;
    name;
    type;
    user;
    displayName;
    static createFromServer(e) {
        return new s({ ...e, user: new i.A(e.user) });
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
