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
    CB: () => f,
    Em: () => v,
    Jq: () => l,
    ZP: () => o,
    ax: () => c,
    k4: () => m,
    qs: () => u,
    wf: () => d
}),
    n(953529),
    n(388685),
    n(415506));
let a = Symbol.iterator;
class o {
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
var s,
    l = (((s = {})[(s.ROOT = 0)] = 'ROOT'), (s[(s.PANEL = 1)] = 'PANEL'), (s[(s.PANE = 2)] = 'PANE'), (s[(s.CATEGORY = 3)] = 'CATEGORY'), (s[(s.ACCORDION = 4)] = 'ACCORDION'), (s[(s.STATIC = 5)] = 'STATIC'), (s[(s.BUTTON = 6)] = 'BUTTON'), (s[(s.TOGGLE = 7)] = 'TOGGLE'), (s[(s.SLIDER = 8)] = 'SLIDER'), (s[(s.SELECT = 9)] = 'SELECT'), (s[(s.RADIO = 10)] = 'RADIO'), (s[(s.CHECKBOX = 11)] = 'CHECKBOX'), (s[(s.NAVIGATOR = 12)] = 'NAVIGATOR'), (s[(s.CUSTOM = 13)] = 'CUSTOM'), s);
function r(e) {
    return (t, n) => new o(e, t, n);
}
r(5);
let c = r(6),
    u = r(7);
function d(e, t) {
    return new o(1, e, t);
}
function f(e, t) {
    return new o(4, e, t);
}
function m(e, t) {
    return new o(3, e, t);
}
function v(e, t) {
    return new o(9, e, t);
}
(r(8), r(12), r(13));
