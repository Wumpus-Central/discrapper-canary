"use strict";
r.d(t, { iP: () => o, pA: () => i, vS: () => a });
let n = null;
function o(e, t = "assertive", r = 7e3) {
    n
        ? n.announce(e, t, r)
        : ((n = new s()),
          ("boolean" == typeof IS_REACT_ACT_ENVIRONMENT ? IS_REACT_ACT_ENVIRONMENT : "u" > typeof jest)
              ? n.announce(e, t, r)
              : setTimeout(() => {
                    (null == n ? void 0 : n.isAttached()) && (null == n || n.announce(e, t, r));
                }, 100));
}
function i(e) {
    n && n.clear(e);
}
function a(e = null) {
    n
        ? n.move(e)
        : (function (e = null) {
              n || (n = new s(e));
          })(e);
}
class s {
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
        this.node && this.parentNode && (this.parentNode.removeChild(this.node), (this.node = null));
    }
    move(e = null) {
        this.node && ((this.parentNode = null != e ? e : document.body), this.parentNode.prepend(this.node));
    }
    announce(e, t = "assertive", r = 7e3) {
        var n, o;
        if (!this.node) return;
        let i = document.createElement("div");
        "object" == typeof e
            ? (i.setAttribute("role", "img"), i.setAttribute("aria-labelledby", e["aria-labelledby"]))
            : (i.textContent = e),
            "assertive" === t
                ? null == (n = this.assertiveLog) || n.appendChild(i)
                : null == (o = this.politeLog) || o.appendChild(i),
            "" !== e &&
                setTimeout(() => {
                    i.remove();
                }, r);
    }
    clear(e) {
        this.node &&
            ((!e || "assertive" === e) && this.assertiveLog && (this.assertiveLog.innerHTML = ""),
            (!e || "polite" === e) && this.politeLog && (this.politeLog.innerHTML = ""));
    }
    constructor(e = null) {
        (this.node = null),
            (this.parentNode = null),
            (this.assertiveLog = null),
            (this.politeLog = null),
            "u" > typeof document &&
                ((this.node = document.createElement("div")),
                (this.parentNode = null != e ? e : document.body),
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
                this.parentNode.prepend(this.node));
    }
}
