n.r(t),
    n.d(t, {
        announce: () => o,
        clearAnnouncer: () => a,
        destroyAnnouncer: () => s
    });
let r = 7000,
    i = null;
function o(e, t = 'assertive', n = r) {
    i || (i = new l()), i.announce(e, t, n);
}
function a(e) {
    i && i.clear(e);
}
function s() {
    i && (i.destroy(), (i = null));
}
class l {
    createLog(e) {
        let t = document.createElement('div');
        return t.setAttribute('role', 'log'), t.setAttribute('aria-live', e), t.setAttribute('aria-relevant', 'additions'), t;
    }
    destroy() {
        this.node && (document.body.removeChild(this.node), (this.node = null));
    }
    announce(e, t = 'assertive', n = r) {
        if (!this.node) return;
        let i = document.createElement('div');
        (i.textContent = e),
            'assertive' === t ? this.assertiveLog.appendChild(i) : this.politeLog.appendChild(i),
            '' !== e &&
                setTimeout(() => {
                    i.remove();
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
