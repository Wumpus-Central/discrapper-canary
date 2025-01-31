Object.defineProperty(e, '__esModule', { value: !0 });
let i = a(26507);
e.default = class {
    constructor(t) {
        (this.data = { name: null }), void 0 !== t.name && this.name(t.name);
    }
    name(t) {
        return void 0 === t ? this.data.name : ((this.data.name = t || null), this);
    }
    toJSON() {
        return Object.assign({}, this.data);
    }
    toString() {
        if (!this.data.name) throw Error('No value for `name` in ICalCategory given!');
        return (0, i.escape)(this.data.name);
    }
};
