r.d(n, {
    JJ: function () {
        return l;
    },
    KG: function () {
        return o;
    },
    jo: function () {
        return s;
    }
});
var i = r(47120);
var a = r(260866);
function o(e, n) {
    return new Promise((r) => {
        let i = new IntersectionObserver(
            (e) => {
                let n = 0,
                    o = null;
                for (let { isIntersecting: s, intersectionRatio: l, target: u } of e) {
                    if (s && 1 === l) {
                        i.disconnect();
                        let e = u.getAttribute(a.ie);
                        if (null != e) return r(e);
                    }
                    l > n && ((n = l), (o = u.getAttribute(a.ie)));
                }
                i.disconnect(), r(o);
            },
            { root: e }
        );
        for (let e of n) i.observe(e);
    });
}
function s(e, n) {
    return new Promise((r) => {
        let i = new IntersectionObserver(
            (e) => {
                let n = 0,
                    o = null;
                for (let s = e.length - 1; s >= 0; s--) {
                    let { isIntersecting: l, intersectionRatio: u, target: c } = e[s];
                    if (l && 1 === u) {
                        i.disconnect();
                        let e = c.getAttribute(a.ie);
                        if (null != e) return r(e);
                    }
                    u > n && ((n = u), (o = c.getAttribute(a.ie)));
                }
                i.disconnect(), r(o);
            },
            { root: e }
        );
        for (let e of n) i.observe(e);
    });
}
function l(e, n) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0.5;
    return new Promise((i) => {
        let a = new IntersectionObserver(
            (e) => {
                let n = e[0];
                a.disconnect(), i(n.intersectionRatio >= r);
            },
            { root: e }
        );
        a.observe(n);
    });
}
