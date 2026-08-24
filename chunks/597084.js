"use strict";
Object.defineProperty(t, "__esModule", { value: !0 });
let n = r(152772);
t.default = class {
    constructor() {
        this._queue = [];
    }
    enqueue(e, t) {
        let r = { priority: (t = Object.assign({ priority: 0 }, t)).priority, run: e };
        if (this.size && this._queue[this.size - 1].priority >= t.priority) return void this._queue.push(r);
        let i = n.default(this._queue, r, (e, t) => t.priority - e.priority);
        this._queue.splice(i, 0, r);
    }
    dequeue() {
        let e = this._queue.shift();
        return null == e ? void 0 : e.run;
    }
    filter(e) {
        return this._queue.filter((t) => t.priority === e.priority).map((e) => e.run);
    }
    get size() {
        return this._queue.length;
    }
};
