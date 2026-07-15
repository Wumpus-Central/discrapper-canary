d.d(t, {
    a: () => m,
    c: () => Z,
    i: () => o,
    l: () => s,
    n: () => W,
    o: () => b,
    r: () => u,
    s: () => n,
    t: () => h,
    u: () => c,
});
var i = d(287822),
    e = d(389956);
function c(l, t = {}) {
    let { autoLoad: d = !0, manageLifecycle: e = !0 } = t,
        [a] = (0, i.p)(l),
        [s, n] = (0, i.p)(() => a.getState());
    return (
        (0, i._)(() => {
            let l = a.subscribe(n);
            return (
                e && d && a.load && a.load(),
                () => {
                    l(), e && a.stop?.();
                }
            );
        }, [a, d, e]),
        [s, a]
    );
}
d(354331);
var a = null;
function s() {
    let [l, t] = (0, i.p)(!1);
    return (
        (0, i._)(() => {
            let l = (a || (a = (0, e.lh)(new e._S(), (0, e.l3)())), a);
            return (
                t(l.isLandscapeMobile),
                l.subscribe((l) => {
                    (0, i.s)(() => t(l));
                })
            );
        }, []),
        { isLandscapeMobile: l }
    );
}
function n(l) {
    var t;
    return "finished" === (t = l.status) || "error" === t || "closed" === t || "failed" === t;
}
function Z({ status: l, onFinish: t, onError: d, error: e, errorCode: c, moduleErrorCode: a, errorStatuses: s }) {
    let n = (0, i.l)(!1);
    (0, i._)(() => {
        if (!n.current) {
            if ("finished" === l) {
                (n.current = !0), t?.();
                return;
            }
            if ("closed" === l) {
                (n.current = !0), d?.(void 0);
                return;
            }
            (s ?? ["error"]).includes(l) && ((n.current = !0), void 0 !== a ? d?.(e, c, a) : d?.(e, c));
        }
    }, [l, t, d, e, c, a, s]);
}
function b(l, t) {
    let [d, e] = (0, i.p)(!1);
    return (
        (0, i._)(() => {
            let t = l.current;
            if (!t) return;
            let d = () => e(t.scrollHeight > t.clientHeight);
            d();
            let i = new ResizeObserver(d);
            return i.observe(t), () => i.disconnect();
        }, [t, l]),
        d
    );
}
function m() {
    return (function (l) {
        let [t, d] = (0, i.p)(() => "u" > typeof window && window.matchMedia(l).matches);
        return (
            (0, i._)(() => {
                if ("u" < typeof window) return;
                let t = window.matchMedia(l),
                    i = () => d(t.matches);
                return t.addEventListener("change", i), () => t.removeEventListener("change", i);
            }, [l]),
            t
        );
    })("(max-width: 767px)");
}
function o(l, t) {
    (0, i._)(() => (window.addEventListener(l, t), () => window.removeEventListener(l, t)), [l, t]);
}
function u(l, t) {
    (0, i._)(() => {
        let d = l.current;
        if (!d || "u" < typeof ResizeObserver) return void t();
        t();
        let i = new ResizeObserver(t);
        return i.observe(d), () => i.disconnect();
    }, [l, t]);
}
function h(l, t) {
    (0, i._)(() => {
        if (null === t) return;
        let d = window.setTimeout(l, t);
        return () => {
            window.clearTimeout(d);
        };
    }, [l, t]);
}
function W() {
    let l = (0, i.l)(),
        t = (0, i.h)(() => {
            void 0 !== l.current && (window.clearTimeout(l.current), (l.current = void 0));
        }, []),
        d = (0, i.h)(
            (d, i) => {
                t(), (l.current = window.setTimeout(d, i));
            },
            [t],
        );
    return (0, i._)(() => t, [t]), (0, i.d)(() => ({ schedule: d, clear: t }), [d, t]);
}
