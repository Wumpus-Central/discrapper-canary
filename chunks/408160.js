n.r(t),
    n.d(t, {
        announce: () => a,
        clearAnnouncer: () => s,
        destroyAnnouncer: () => o
    });
let i = 7000,
    r = null;
function a(e, t = 'assertive', n = i) {
    r || (r = new l()), r.announce(e, t, n);
}
function s(e) {
    r && r.clear(e);
}
function o() {
    r && (r.destroy(), (r = null));
}
class l {
    createLog(e) {
        let t = document.createElement('div');
        return t.setAttribute('role', 'log'), t.setAttribute('aria-live', e), t.setAttribute('aria-relevant', 'additions'), t;
    }
    destroy() {
        this.node && (document.body.removeChild(this.node), (this.node = null));
    }
    announce(e, t = 'assertive', n = i) {
        if (!this.node) return;
        let r = document.createElement('div');
        (r.textContent = e),
            'assertive' === t ? this.assertiveLog.appendChild(r) : this.politeLog.appendChild(r),
            '' !== e &&
                setTimeout(() => {
                    r.remove();
                }, n);
    }
    clear(e) {
        this.node && ((e && 'assertive' !== e) || (this.assertiveLog.innerHTML = ''), (e && 'polite' !== e) || (this.politeLog.innerHTML = ''));
    }
    constructor() {
        (this.node = document.createElement('div')),
            (this.node.dataset.liveAnnouncer = 'true'),
            Object.assign(this.node.style, {
                border: 0,
                clip: 'rect(0 0 0 0)',
                clipPath: 'inset(50%)',
                height: 1,
                margin: '0 -1px -1px 0',
                overflow: 'hidden',
                padding: 0,
                position: 'absolute',
                width: 1,
                whiteSpace: 'nowrap'
            }),
            (this.assertiveLog = this.createLog('assertive')),
            this.node.appendChild(this.assertiveLog),
            (this.politeLog = this.createLog('polite')),
            this.node.appendChild(this.politeLog),
            document.body.prepend(this.node);
    }
}
