r.d(n, {
    gb: function () {
        return s;
    },
    xQ: function () {
        return o;
    }
});
let i = 7000,
    a = null;
function o(e, n = 'assertive', r = i) {
    !a && (a = new l()), a.announce(e, n, r);
}
function s(e) {
    a && a.clear(e);
}
class l {
    createLog(e) {
        let n = document.createElement('div');
        return n.setAttribute('role', 'log'), n.setAttribute('aria-live', e), n.setAttribute('aria-relevant', 'additions'), n;
    }
    destroy() {
        this.node && (document.body.removeChild(this.node), (this.node = null));
    }
    announce(e, n = 'assertive', r = i) {
        if (!this.node) return;
        let a = document.createElement('div');
        (a.textContent = e),
            'assertive' === n ? this.assertiveLog.appendChild(a) : this.politeLog.appendChild(a),
            '' !== e &&
                setTimeout(() => {
                    a.remove();
                }, r);
    }
    clear(e) {
        this.node && ((!e || 'assertive' === e) && (this.assertiveLog.innerHTML = ''), (!e || 'polite' === e) && (this.politeLog.innerHTML = ''));
    }
    constructor() {
        (this.node = document.createElement('div')),
            (this.node.dataset.liveAnnouncer = 'true'),
            Object.assign(this.node.style, {
                border: 0,
                clip: 'rect(0 0 0 0)',
                clipPath: 'inset(50%)',
                height: '1px',
                margin: '-1px',
                overflow: 'hidden',
                padding: 0,
                position: 'absolute',
                width: '1px',
                whiteSpace: 'nowrap'
            }),
            (this.assertiveLog = this.createLog('assertive')),
            this.node.appendChild(this.assertiveLog),
            (this.politeLog = this.createLog('polite')),
            this.node.appendChild(this.politeLog),
            document.body.prepend(this.node);
    }
}
