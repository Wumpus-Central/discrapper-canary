"use strict";
n.d(t, { c: () => r });
class r {
    searchFetchers = new Map();
    cleanUp(e) {
        this.cancel(e), this.delete(e);
    }
    cancel(e) {
        this.searchFetchers.get(e)?.cancel();
    }
    delete(e) {
        this.searchFetchers.delete(e);
    }
    get(e) {
        return this.searchFetchers.get(e);
    }
    set(e, t) {
        this.searchFetchers.set(e, t);
    }
}
