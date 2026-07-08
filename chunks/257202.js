i.d(t, { t: () => r });
var r = class {
    async get(e) {
        try {
            let t = localStorage.getItem(e);
            if (null === t) return null;
            return JSON.parse(t);
        } catch (t) {
            if (t instanceof SyntaxError) throw Error(`Invalid JSON stored at key "${e}": ${t.message}`);
            throw t;
        }
    }
    async set(e, t) {
        try {
            let i = JSON.stringify(t);
            localStorage.setItem(e, i);
        } catch (t) {
            if ((t instanceof DOMException || "QuotaExceededError" === t.name) && "QuotaExceededError" === t.name)
                throw Error(`Storage quota exceeded for key "${e}"`);
            if (t instanceof TypeError) throw Error(`Failed to serialize value for key "${e}": ${t.message}`);
            throw t;
        }
    }
    async remove(e) {
        localStorage.removeItem(e);
    }
    async clear() {
        localStorage.clear();
    }
};
