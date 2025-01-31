n.d(t, {
    JJ: () => s,
    KG: () => r,
    jo: () => a
}),
    n(47120);
var i = n(260866);
function r(e, t) {
    return new Promise((n) => {
        let r = new IntersectionObserver(
            (e) => {
                let t = 0,
                    a = null;
                for (let { isIntersecting: s, intersectionRatio: o, target: l } of e) {
                    if (s && 1 === o) {
                        r.disconnect();
                        let e = l.getAttribute(i.ie);
                        if (null != e) return n(e);
                    }
                    o > t && ((t = o), (a = l.getAttribute(i.ie)));
                }
                r.disconnect(), n(a);
            },
            { root: e }
        );
        for (let e of t) r.observe(e);
    });
}
function a(e, t) {
    return new Promise((n) => {
        let r = new IntersectionObserver(
            (e) => {
                let t = 0,
                    a = null;
                for (let s = e.length - 1; s >= 0; s--) {
                    let { isIntersecting: o, intersectionRatio: l, target: u } = e[s];
                    if (o && 1 === l) {
                        r.disconnect();
                        let e = u.getAttribute(i.ie);
                        if (null != e) return n(e);
                    }
                    l > t && ((t = l), (a = u.getAttribute(i.ie)));
                }
                r.disconnect(), n(a);
            },
            { root: e }
        );
        for (let e of t) r.observe(e);
    });
}
function s(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0.5;
    return new Promise((i) => {
        let r = new IntersectionObserver(
            (e) => {
                let t = e[0];
                r.disconnect(), i(t.intersectionRatio >= n);
            },
            { root: e }
        );
        r.observe(t);
    });
}
