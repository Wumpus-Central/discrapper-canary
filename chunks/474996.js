"use strict";
n.d(t, { i: () => i });
var r = n(488430);
class i {
    dismissibleContent;
    version;
    constructor(e) {
        (this.type = r.G.BADGE), (this.dismissibleContent = e.dismissibleContent), (this.version = e.version);
    }
    static fromServer(e) {
        return new i({ ...e, dismissibleContent: e.dismissible_content });
    }
}
