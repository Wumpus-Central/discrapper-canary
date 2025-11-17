function r(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
var i = n(169774),
    a = n(466312),
    o = n(131513),
    s = n(65183),
    l = n(581079),
    c = n(467159),
    u = s.Map,
    d = {
        subtree: !0,
        characterData: !0,
        childList: !0,
        characterDataOldValue: !1,
        attributes: !1,
    },
    f = i.isBrowser("IE <= 11");
e.exports = (function () {
    function e(e) {
        var t = this;
        r(this, "observer", void 0),
            r(this, "container", void 0),
            r(this, "mutations", void 0),
            r(this, "onCharData", void 0),
            (this.container = e),
            (this.mutations = u());
        var n = o(e);
        n.MutationObserver && !f
            ? (this.observer = new n.MutationObserver(function (e) {
                  return t.registerMutations(e);
              }))
            : (this.onCharData = function (e) {
                  e.target instanceof Node || l(!1),
                      t.registerMutation({
                          type: "characterData",
                          target: e.target,
                      });
              });
    }
    var t = e.prototype;
    return (
        (t.start = function () {
            this.observer
                ? this.observer.observe(this.container, d)
                : this.container.addEventListener("DOMCharacterDataModified", this.onCharData);
        }),
        (t.stopAndFlushMutations = function () {
            var e = this.observer;
            e
                ? (this.registerMutations(e.takeRecords()), e.disconnect())
                : this.container.removeEventListener("DOMCharacterDataModified", this.onCharData);
            var t = this.mutations;
            return (this.mutations = u()), t;
        }),
        (t.registerMutations = function (e) {
            for (var t = 0; t < e.length; t++) this.registerMutation(e[t]);
        }),
        (t.getMutationTextContent = function (e) {
            var t = e.type,
                n = e.target,
                r = e.removedNodes;
            if ("characterData" === t) {
                if ("" !== n.textContent) return f ? n.textContent.replace("\n", "") : n.textContent;
            } else if ("childList" === t) {
                if (r && r.length) return "";
                else if ("" !== n.textContent) return n.textContent;
            }
            return null;
        }),
        (t.registerMutation = function (e) {
            var t = this.getMutationTextContent(e);
            if (null != t) {
                var n = c(a(e.target));
                this.mutations = this.mutations.set(n, t);
            }
        }),
        e
    );
})();
