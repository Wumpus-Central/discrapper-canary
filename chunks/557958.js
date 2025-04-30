function n(t, e, r) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (t[e] = r),
        t
    );
}
var i = r(169774),
    o = r(924970),
    a = r(86426),
    u = r(65183),
    s = r(581079),
    c = r(467159),
    l = u.Map,
    f = {
        subtree: !0,
        characterData: !0,
        childList: !0,
        characterDataOldValue: !1,
        attributes: !1
    },
    p = i.isBrowser('IE <= 11');
t.exports = (function () {
    function t(t) {
        var e = this;
        n(this, 'observer', void 0), n(this, 'container', void 0), n(this, 'mutations', void 0), n(this, 'onCharData', void 0), (this.container = t), (this.mutations = l());
        var r = a(t);
        r.MutationObserver && !p
            ? (this.observer = new r.MutationObserver(function (t) {
                  return e.registerMutations(t);
              }))
            : (this.onCharData = function (t) {
                  t.target instanceof Node || s(!1),
                      e.registerMutation({
                          type: 'characterData',
                          target: t.target
                      });
              });
    }
    var e = t.prototype;
    return (
        (e.start = function () {
            this.observer ? this.observer.observe(this.container, f) : this.container.addEventListener('DOMCharacterDataModified', this.onCharData);
        }),
        (e.stopAndFlushMutations = function () {
            var t = this.observer;
            t ? (this.registerMutations(t.takeRecords()), t.disconnect()) : this.container.removeEventListener('DOMCharacterDataModified', this.onCharData);
            var e = this.mutations;
            return (this.mutations = l()), e;
        }),
        (e.registerMutations = function (t) {
            for (var e = 0; e < t.length; e++) this.registerMutation(t[e]);
        }),
        (e.getMutationTextContent = function (t) {
            var e = t.type,
                r = t.target,
                n = t.removedNodes;
            if ('characterData' === e) {
                if ('' !== r.textContent) return p ? r.textContent.replace('\n', '') : r.textContent;
            } else if ('childList' === e) {
                if (n && n.length) return '';
                else if ('' !== r.textContent) return r.textContent;
            }
            return null;
        }),
        (e.registerMutation = function (t) {
            var e = this.getMutationTextContent(t);
            if (null != e) {
                var r = c(o(t.target));
                this.mutations = this.mutations.set(r, e);
            }
        }),
        t
    );
})();
