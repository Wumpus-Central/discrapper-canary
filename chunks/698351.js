"use strict";
n.d(t, { A: () => i });
var r = n(985018);
class i {
    announcer;
    constructor(e) {
        if (null != e) this.announcer = e;
        else {
            const e = n(620557);
            this.announcer = { announce: e.announce, clearAnnouncements: e.clearAnnouncer };
        }
    }
    announce(e, t, n) {
        this.announcer.announce(e, t, n);
    }
    announceDrag(e, t) {
        if (null == e) return;
        let n = this.getName(e, t);
        this.announce(r.intl.formatToPlainString(r.t["vHD/Je"], { itemName: n }));
    }
    announceHover(e, t) {
        null != e && this.announce(this.getName(e, t));
    }
    announceDrop() {
        this.announce(r.intl.string(r.t.lMkmz7));
    }
    announceCancel() {
        this.announce(r.intl.string(r.t["u4d/eC"]));
    }
    clear() {
        this.announcer.clearAnnouncements();
    }
    getName(e, t) {
        return e.getAttribute("data-dnd-name") ?? e.getAttribute("aria-label") ?? t;
    }
}
