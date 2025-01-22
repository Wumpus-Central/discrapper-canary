r.d(n, {
    Z: function () {
        return o;
    }
});
var i = r(388032);
function a(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
class o {
    announce(e, n, r) {
        this.announcer.announce(e, n, r);
    }
    announceDrag(e, n) {
        if (null == e) return;
        let r = this.getName(e, n);
        this.announce(i.intl.formatToPlainString(i.t['vHD/JS'], { itemName: r }));
    }
    announceHover(e, n) {
        null != e && this.announce(this.getName(e, n));
    }
    announceDrop() {
        this.announce(i.intl.string(i.t.lMkmz8));
    }
    announceCancel() {
        this.announce(i.intl.string(i.t['u4d/eH']));
    }
    clear() {
        this.announcer.clearAnnouncements();
    }
    getName(e, n) {
        var r, i;
        return null !== (i = null !== (r = e.getAttribute('data-dnd-name')) && void 0 !== r ? r : e.getAttribute('aria-label')) && void 0 !== i ? i : n;
    }
    constructor(e) {
        if ((a(this, 'announcer', void 0), null != e)) this.announcer = e;
        else {
            let e = r(408160);
            this.announcer = {
                announce: e.announce,
                clearAnnouncements: e.clearAnnouncer
            };
        }
    }
}
