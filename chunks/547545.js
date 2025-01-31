n.d(t, { Z: () => a });
var i = n(388032);
function r(e, t, n) {
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
class a {
    announce(e, t, n) {
        this.announcer.announce(e, t, n);
    }
    announceDrag(e, t) {
        if (null == e) return;
        let n = this.getName(e, t);
        this.announce(i.intl.formatToPlainString(i.t['vHD/JS'], { itemName: n }));
    }
    announceHover(e, t) {
        null != e && this.announce(this.getName(e, t));
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
    getName(e, t) {
        var n, i;
        return null !== (i = null !== (n = e.getAttribute('data-dnd-name')) && void 0 !== n ? n : e.getAttribute('aria-label')) && void 0 !== i ? i : t;
    }
    constructor(e) {
        if ((r(this, 'announcer', void 0), null != e)) this.announcer = e;
        else {
            let e = n(408160);
            this.announcer = {
                announce: e.announce,
                clearAnnouncements: e.clearAnnouncer
            };
        }
    }
}
