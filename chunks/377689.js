d.d(t, { t: () => e });
var i = d(880008),
    e = class {
        async get(l) {
            let t = (0, i.n)();
            if (!t) return null;
            try {
                let d = t.getItem(l);
                if (null === d) return null;
                return JSON.parse(d);
            } catch (t) {
                if (t instanceof SyntaxError) throw Error(`Invalid JSON stored at key "${l}": ${t.message}`);
                throw t;
            }
        }
        async set(l, t) {
            let d = (0, i.n)();
            if (d)
                try {
                    let i = JSON.stringify(t);
                    d.setItem(l, i);
                } catch (t) {
                    if (
                        (t instanceof DOMException || "QuotaExceededError" === t.name) &&
                        "QuotaExceededError" === t.name
                    )
                        throw Error(`Storage quota exceeded for key "${l}"`);
                    if (t instanceof TypeError) throw Error(`Failed to serialize value for key "${l}": ${t.message}`);
                    throw t;
                }
        }
        async remove(l) {
            let t = (0, i.n)();
            t && t.removeItem(l);
        }
        async clear() {
            let l = (0, i.n)();
            l && l.clear();
        }
    };
