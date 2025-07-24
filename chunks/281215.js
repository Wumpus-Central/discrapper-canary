function a(e, t, n) {
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
    Jq: () => o,
    ZP: () => r,
    k4: () => u,
    qs: () => c,
    wf: () => d
}),
    n(953529),
    n(388685),
    n(415506));
let i = Symbol.iterator;
class r {
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
    [i]() {
        return this.isLayoutType() ? this.data.layout.values() : [].values();
    }
    constructor(e, t, n) {
        (a(this, 'key', void 0), a(this, 'type', void 0), a(this, 'data', void 0), a(this, '_parent', void 0), (this.type = e), (this.key = t), (this.data = n));
    }
}
var s,
    o = (((s = {})[(s.ROOT = 0)] = 'ROOT'), (s[(s.PANEL = 1)] = 'PANEL'), (s[(s.PANE = 2)] = 'PANE'), (s[(s.CATEGORY = 3)] = 'CATEGORY'), (s[(s.ACCORDION = 4)] = 'ACCORDION'), (s[(s.STATIC = 5)] = 'STATIC'), (s[(s.BUTTON = 6)] = 'BUTTON'), (s[(s.TOGGLE = 7)] = 'TOGGLE'), (s[(s.SLIDER = 8)] = 'SLIDER'), (s[(s.SELECT = 9)] = 'SELECT'), (s[(s.RADIO = 10)] = 'RADIO'), (s[(s.CHECKBOX = 11)] = 'CHECKBOX'), (s[(s.NAVIGATOR = 12)] = 'NAVIGATOR'), (s[(s.CUSTOM = 13)] = 'CUSTOM'), s);
function l(e) {
    return (t, n) => new r(e, t, n);
}
(l(5), l(6));
let c = l(7);
function d(e, t) {
    return new r(1, e, t);
}
function u(e, t) {
    return new r(3, e, t);
}
function f(e, t) {
    return new r(9, e, t);
}
(l(8), l(12), l(13));
