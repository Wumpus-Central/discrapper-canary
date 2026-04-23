"use strict";
n.d(t, { A: () => r }), n(321073);
let r = new (class {
    queue = [];
    enqueue(e) {
        this.queue.push(e);
    }
    flush() {
        for (; this.queue.length > 0; ) this.queue.shift()?.();
    }
})();
