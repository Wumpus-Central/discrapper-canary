"use strict";
n.d(t, { H: () => a });
var r = n(241827),
    i = n(790637);
class s {
    get currentNode() {
        return this._currentNode;
    }
    set currentNode(e) {
        if (!(0, r.sD)(this.root, e))
            throw Error("Cannot set currentNode to a node that is not contained by the root node.");
        let t = [],
            n = e,
            i = e;
        for (this._currentNode = e; n && n !== this.root; )
            if (n.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                let e = n,
                    r = this._doc.createTreeWalker(e, this.whatToShow, { acceptNode: this._acceptNode });
                t.push(r), (r.currentNode = i), this._currentSetFor.add(r), (n = i = e.host);
            } else n = n.parentNode;
        let s = this._doc.createTreeWalker(this.root, this.whatToShow, { acceptNode: this._acceptNode });
        t.push(s), (s.currentNode = i), this._currentSetFor.add(s), (this._walkerStack = t);
    }
    get doc() {
        return this._doc;
    }
    firstChild() {
        let e = this.currentNode,
            t = this.nextNode();
        return (0, r.sD)(e, t) ? (t && (this.currentNode = t), t) : ((this.currentNode = e), null);
    }
    lastChild() {
        let e = this._walkerStack[0].lastChild();
        return e && (this.currentNode = e), e;
    }
    nextNode() {
        let e = this._walkerStack[0].nextNode();
        if (e) {
            if (e.shadowRoot) {
                var t;
                let n;
                if (
                    ("function" == typeof this.filter
                        ? (n = this.filter(e))
                        : (null == (t = this.filter) ? void 0 : t.acceptNode) && (n = this.filter.acceptNode(e)),
                    n === NodeFilter.FILTER_ACCEPT)
                )
                    return (this.currentNode = e), e;
                let r = this.nextNode();
                return r && (this.currentNode = r), r;
            }
            return e && (this.currentNode = e), e;
        }
        if (!(this._walkerStack.length > 1)) return null;
        {
            this._walkerStack.shift();
            let e = this.nextNode();
            return e && (this.currentNode = e), e;
        }
    }
    previousNode() {
        let e = this._walkerStack[0];
        if (e.currentNode === e.root) {
            if (this._currentSetFor.has(e) && (this._currentSetFor.delete(e), this._walkerStack.length > 1)) {
                this._walkerStack.shift();
                let e = this.previousNode();
                return e && (this.currentNode = e), e;
            }
            return null;
        }
        let t = e.previousNode();
        if (t) {
            if (t.shadowRoot) {
                var n;
                let e;
                if (
                    ("function" == typeof this.filter
                        ? (e = this.filter(t))
                        : (null == (n = this.filter) ? void 0 : n.acceptNode) && (e = this.filter.acceptNode(t)),
                    e === NodeFilter.FILTER_ACCEPT)
                )
                    return t && (this.currentNode = t), t;
                let r = this.lastChild();
                return r && (this.currentNode = r), r;
            }
            return t && (this.currentNode = t), t;
        }
        if (!(this._walkerStack.length > 1)) return null;
        {
            this._walkerStack.shift();
            let e = this.previousNode();
            return e && (this.currentNode = e), e;
        }
    }
    nextSibling() {
        return null;
    }
    previousSibling() {
        return null;
    }
    parentNode() {
        return null;
    }
    constructor(e, t, n, r) {
        (this._walkerStack = []),
            (this._currentSetFor = new Set()),
            (this._acceptNode = (e) => {
                if (e.nodeType === Node.ELEMENT_NODE) {
                    var t;
                    let n = e.shadowRoot;
                    if (n) {
                        let e = this._doc.createTreeWalker(n, this.whatToShow, { acceptNode: this._acceptNode });
                        return this._walkerStack.unshift(e), NodeFilter.FILTER_ACCEPT;
                    }
                    if ("function" == typeof this.filter) return this.filter(e);
                    if (null == (t = this.filter) ? void 0 : t.acceptNode) return this.filter.acceptNode(e);
                    if (null === this.filter) return NodeFilter.FILTER_ACCEPT;
                }
                return NodeFilter.FILTER_SKIP;
            }),
            (this._doc = e),
            (this.root = t),
            (this.filter = null != r ? r : null),
            (this.whatToShow = null != n ? n : NodeFilter.SHOW_ALL),
            (this._currentNode = t),
            this._walkerStack.unshift(e.createTreeWalker(t, n, this._acceptNode));
        const i = t.shadowRoot;
        if (i) {
            const e = this._doc.createTreeWalker(i, this.whatToShow, { acceptNode: this._acceptNode });
            this._walkerStack.unshift(e);
        }
    }
}
function a(e, t, n, r) {
    return (0, i.Nf)() ? new s(e, t, n, r) : e.createTreeWalker(t, n, r);
}
