"use strict";
n.d(t, { A: () => i }), n(321073);
class r {
    queue = [];
    enqueue(e) {
        this.queue.push(e);
    }
    flush() {
        for (; this.queue.length > 0; ) this.queue.shift()?.();
    }
}
let i = new r();
