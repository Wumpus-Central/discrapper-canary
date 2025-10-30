n.d(t, {
    V: () => i,
    w: () => r,
});
class r {
    refine(e, t) {
        return t.filter((t) => this.isValid(e, t));
    }
}
class i {
    refine(e, t) {
        if (t.length < 2) return t;
        let n = [],
            r = t[0],
            i = null;
        for (let a = 1; a < t.length; a++) {
            i = t[a];
            let o = e.text.substring(r.index + r.text.length, i.index);
            if (this.shouldMergeResults(o, r, i, e)) {
                let t = r,
                    n = i,
                    a = this.mergeResults(o, t, n, e);
                e.debug(() => {
                    console.log(`${this.constructor.name} merged ${t} and ${n} into ${a}`);
                }),
                    (r = a);
            } else n.push(r), (r = i);
        }
        return null != r && n.push(r), n;
    }
}
