n.d(t, { Z: () => r });
class r {
    refine(e, t) {
        if (t.length < 2) return t;
        let n = [],
            r = t[0];
        for (let i = 1; i < t.length; i++) {
            let a = t[i];
            if (a.index >= r.index + r.text.length) {
                n.push(r), (r = a);
                continue;
            }
            let o = null,
                s = null;
            a.text.length > r.text.length ? ((o = a), (s = r)) : ((o = r), (s = a)),
                e.debug(() => {
                    console.log(`${this.constructor.name} remove ${s} by ${o}`);
                }),
                (r = o);
        }
        return null != r && n.push(r), n;
    }
}
