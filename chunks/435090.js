"use strict";
n.d(t, { A: () => i });
var r = n(315069);
class i extends r.A {
    id;
    widgets;
    version;
    constructor(e) {
        super(), (this.version = Number(e.version) ?? 0), (this.id = e.id || ""), (this.widgets = e.widgets || []);
    }
}
