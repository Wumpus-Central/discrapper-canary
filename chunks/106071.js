function t(e, t, r, n) {
    Object.defineProperty(e, t, { get: r, set: n, enumerable: !0, configurable: !0 });
}
t(e.exports, "announce", () => i),
    t(e.exports, "createAnnouncer", () => n),
    t(e.exports, "clearAnnouncer", () => o),
    t(e.exports, "destroyAnnouncer", () => a),
    t(e.exports, "moveAnnouncer", () => s);
let r = null;
function n(e = null) {
    r || (r = new u(e));
}
function i(e, t = "assertive", n = 7e3) {
    r
        ? r.announce(e, t, n)
        : ((r = new u()),
          ("boolean" == typeof IS_REACT_ACT_ENVIRONMENT ? IS_REACT_ACT_ENVIRONMENT : "u" > typeof jest)
              ? r.announce(e, t, n)
              : setTimeout(() => {
                    (null == r ? void 0 : r.isAttached()) && (null == r || r.announce(e, t, n));
                }, 100));
}
function o(e) {
    r && r.clear(e);
}
function a() {
    r && (r.destroy(), (r = null));
}
function s(e = null) {
    r ? r.move(e) : n(e);
}
class u {
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
        var n, i;
        if (!this.node) return;
        let o = document.createElement("div");
        "object" == typeof e
            ? (o.setAttribute("role", "img"), o.setAttribute("aria-labelledby", e["aria-labelledby"]))
            : (o.textContent = e),
            "assertive" === t
                ? null == (n = this.assertiveLog) || n.appendChild(o)
                : null == (i = this.politeLog) || i.appendChild(o),
            "" !== e &&
                setTimeout(() => {
                    o.remove();
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
