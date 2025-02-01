Object.defineProperty(t, '__esModule', { value: !0 });
let i = n(851409);
class r {
    constructor() {
        this._queue = [];
    }
    enqueue(e, t) {
        let n = {
            priority: (t = Object.assign({ priority: 0 }, t)).priority,
            run: e
        };
        if (this.size && this._queue[this.size - 1].priority >= t.priority) {
            this._queue.push(n);
            return;
        }
        let r = i.default(this._queue, n, (e, t) => t.priority - e.priority);
        this._queue.splice(r, 0, n);
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
}
t.default = r;
