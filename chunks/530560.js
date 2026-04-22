r.d(t, { X: () => s, d: () => n });
class n {
    refine(e, t) {
        return t.filter((t) => this.isValid(e, t));
    }
}
class s {
    refine(e, t) {
        if (t.length < 2) return t;
        let r = [],
            n = t[0],
            s = null;
        for (let a = 1; a < t.length; a++) {
            s = t[a];
            let i = e.text.substring(n.index + n.text.length, s.index);
            if (this.shouldMergeResults(i, n, s, e)) {
                let t = n,
                    r = s,
                    a = this.mergeResults(i, t, r, e);
                e.debug(() => {
                    console.log(`${this.constructor.name} merged ${t} and ${r} into ${a}`);
                }),
                    (n = a);
            } else r.push(n), (n = s);
        }
        return null != n && r.push(n), r;
    }
}
