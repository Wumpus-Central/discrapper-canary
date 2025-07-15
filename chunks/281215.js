function i(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
(n.d(t, {
    Em: () => f,
    Jq: () => r,
    ZP: () => s,
    k4: () => u,
    qs: () => d,
    wf: () => c
}),
    n(953529),
    n(388685),
    n(415506));
let a = Symbol.iterator;
class s {
    linkToParent(e) {
        this._parent = e;
    }
    get parent() {
        if (0 !== this.type) {
            if (null == this._parent) throw Error('This node has not been linked to its parent. It must be added to a SettingsTree first.');
            return this._parent;
        }
    }
    is(e) {
        return this.type === e;
    }
    isDataOfType(e) {
        return this.is(e);
    }
    isLayoutType() {
        return this.isDataOfType(0) || this.isDataOfType(1) || this.isDataOfType(2) || this.isDataOfType(3) || this.isDataOfType(4);
    }
    [a]() {
        return this.isLayoutType() ? this.data.layout.values() : [].values();
    }
    constructor(e, t, n) {
        (i(this, 'key', void 0), i(this, 'type', void 0), i(this, 'data', void 0), i(this, '_parent', void 0), (this.type = e), (this.key = t), (this.data = n));
    }
}
var o,
    r = (((o = {})[(o.ROOT = 0)] = 'ROOT'), (o[(o.PANEL = 1)] = 'PANEL'), (o[(o.PANE = 2)] = 'PANE'), (o[(o.CATEGORY = 3)] = 'CATEGORY'), (o[(o.ACCORDION = 4)] = 'ACCORDION'), (o[(o.STATIC = 5)] = 'STATIC'), (o[(o.BUTTON = 6)] = 'BUTTON'), (o[(o.TOGGLE = 7)] = 'TOGGLE'), (o[(o.SLIDER = 8)] = 'SLIDER'), (o[(o.SELECT = 9)] = 'SELECT'), (o[(o.RADIO = 10)] = 'RADIO'), (o[(o.CHECKBOX = 11)] = 'CHECKBOX'), (o[(o.NAVIGATOR = 12)] = 'NAVIGATOR'), (o[(o.CUSTOM = 13)] = 'CUSTOM'), o);
function l(e) {
    return (t, n) => new s(e, t, n);
}
(l(5), l(6));
let d = l(7);
function c(e, t) {
    return new s(1, e, t);
}
function u(e, t) {
    return new s(3, e, t);
}
function f(e, t) {
    return new s(9, e, t);
}
(l(8), l(12), l(13));
