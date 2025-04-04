n.d(t, { Z: () => o });
var r = n(388032);
function i(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class o {
    announce(e, t, n) {
        this.announcer.announce(e, t, n);
    }
    announceDrag(e, t) {
        if (null == e) return;
        let n = this.getName(e, t);
        this.announce(r.NW.formatToPlainString(r.t['vHD/JS'], { itemName: n }));
    }
    announceHover(e, t) {
        null != e && this.announce(this.getName(e, t));
    }
    announceDrop() {
        this.announce(r.NW.string(r.t.lMkmz8));
    }
    announceCancel() {
        this.announce(r.NW.string(r.t['u4d/eH']));
    }
    clear() {
        this.announcer.clearAnnouncements();
    }
    getName(e, t) {
        var n, r;
        return null != (r = null != (n = e.getAttribute('data-dnd-name')) ? n : e.getAttribute('aria-label')) ? r : t;
    }
    constructor(e) {
        if ((i(this, 'announcer', void 0), null != e)) this.announcer = e;
        else {
            let e = n(408160);
            this.announcer = {
                announce: e.announce,
                clearAnnouncements: e.clearAnnouncer
            };
        }
    }
}
