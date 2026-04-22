"use strict";
n.r(t), n.d(t, { announce: () => i, clearAnnouncer: () => s, destroyAnnouncer: () => a });
let r = null;
function i(e, t = "assertive", n = 7e3) {
    r || (r = new o()), r.announce(e, t, n);
}
function s(e) {
    r && r.clear(e);
}
function a() {
    r && (r.destroy(), (r = null));
}
class o {
    createLog(e) {
        let t = document.createElement("div");
        return (
            t.setAttribute("role", "log"),
            t.setAttribute("aria-live", e),
            t.setAttribute("aria-relevant", "additions"),
            t
        );
    }
    destroy() {
        this.node && (document.body.removeChild(this.node), (this.node = null));
    }
    announce(e, t = "assertive", n = 7e3) {
        if (!this.node) return;
        let r = document.createElement("div");
        (r.textContent = e),
            "assertive" === t ? this.assertiveLog.appendChild(r) : this.politeLog.appendChild(r),
            "" !== e &&
                setTimeout(() => {
                    r.remove();
                }, n);
    }
    clear(e) {
        this.node &&
            ((e && "assertive" !== e) || (this.assertiveLog.innerHTML = ""),
            (e && "polite" !== e) || (this.politeLog.innerHTML = ""));
    }
    constructor() {
        (this.node = document.createElement("div")),
            (this.node.dataset.liveAnnouncer = "true"),
            Object.assign(this.node.style, {
                border: 0,
                clip: "rect(0 0 0 0)",
                clipPath: "inset(50%)",
                height: 1,
                margin: "0 -1px -1px 0",
                overflow: "hidden",
                padding: 0,
                position: "absolute",
                width: 1,
                whiteSpace: "nowrap",
            }),
            (this.assertiveLog = this.createLog("assertive")),
            this.node.appendChild(this.assertiveLog),
            (this.politeLog = this.createLog("polite")),
            this.node.appendChild(this.politeLog),
            document.body.prepend(this.node);
    }
}
