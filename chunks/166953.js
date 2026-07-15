d.d(t, { t: () => i });
var i = class {
    async get(l) {
        try {
            let t = localStorage.getItem(l);
            if (null === t) return null;
            return JSON.parse(t);
        } catch (t) {
            if (t instanceof SyntaxError) throw Error(`Invalid JSON stored at key "${l}": ${t.message}`);
            throw t;
        }
    }
    async set(l, t) {
        try {
            let d = JSON.stringify(t);
            localStorage.setItem(l, d);
        } catch (t) {
            if ((t instanceof DOMException || "QuotaExceededError" === t.name) && "QuotaExceededError" === t.name)
                throw Error(`Storage quota exceeded for key "${l}"`);
            if (t instanceof TypeError) throw Error(`Failed to serialize value for key "${l}": ${t.message}`);
            throw t;
        }
    }
    async remove(l) {
        localStorage.removeItem(l);
    }
    async clear() {
        localStorage.clear();
    }
};
