"use strict";
n.d(t, { iP: () => i, pA: () => s });
let r = null;
function i(e, t = "assertive", n = 7e3) {
    r
        ? r.announce(e, t, n)
        : ((r = new a()),
          ("boolean" == typeof IS_REACT_ACT_ENVIRONMENT ? IS_REACT_ACT_ENVIRONMENT : "u" > typeof jest)
              ? r.announce(e, t, n)
              : setTimeout(() => {
                    (null == r ? void 0 : r.isAttached()) && (null == r || r.announce(e, t, n));
                }, 100));
}
function s(e) {
    r && r.clear(e);
}
class a {
    isAttached() {
        var e;
        return null == (e = this.node) ? void 0 : e.isConnected;
    }
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
        var r, i;
        if (!this.node) return;
        let s = document.createElement("div");
        "object" == typeof e
            ? (s.setAttribute("role", "img"), s.setAttribute("aria-labelledby", e["aria-labelledby"]))
            : (s.textContent = e),
            "assertive" === t
                ? null == (r = this.assertiveLog) || r.appendChild(s)
                : null == (i = this.politeLog) || i.appendChild(s),
            "" !== e &&
                setTimeout(() => {
                    s.remove();
                }, n);
    }
    clear(e) {
        this.node &&
            ((!e || "assertive" === e) && this.assertiveLog && (this.assertiveLog.innerHTML = ""),
            (!e || "polite" === e) && this.politeLog && (this.politeLog.innerHTML = ""));
    }
    constructor() {
        (this.node = null),
            (this.assertiveLog = null),
            (this.politeLog = null),
            "u" > typeof document &&
                ((this.node = document.createElement("div")),
                (this.node.dataset.liveAnnouncer = "true"),
                Object.assign(this.node.style, {
                    border: 0,
                    clip: "rect(0 0 0 0)",
                    clipPath: "inset(50%)",
                    height: "1px",
                    margin: "-1px",
                    overflow: "hidden",
                    padding: 0,
                    position: "absolute",
                    width: "1px",
                    whiteSpace: "nowrap",
                }),
                (this.assertiveLog = this.createLog("assertive")),
                this.node.appendChild(this.assertiveLog),
                (this.politeLog = this.createLog("polite")),
                this.node.appendChild(this.politeLog),
                document.body.prepend(this.node));
    }
}
