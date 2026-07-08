i.d(t, { a: () => c, i: () => h, n: () => d, o: () => f, r: () => u, s: () => p, t: () => o });
var r = i(248702),
    n = "IncodeModalScrollLock",
    o = "data-incode-modal-initial-focus",
    a =
        'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
function s(e) {
    return Array.from(e.querySelectorAll(a));
}
function l(e) {
    try {
        return e.matches(a);
    } catch {
        return !1;
    }
}
function c(e, t) {
    let [i, n] = (0, r.p)(null);
    return (
        (0, r._)(() => {
            if (!e) return void n(null);
            if (t)
                return (
                    n(t),
                    () => {
                        n(null);
                    }
                );
            let i = document.createElement("div");
            return (
                i.setAttribute("data-incode-modal-portal", ""),
                (document.querySelector(".IncodeComponent") ?? document.body).appendChild(i),
                n(i),
                () => {
                    i.remove(), n(null);
                }
            );
        }, [e, t]),
        i
    );
}
function d(e) {
    (0, r._)(() => {
        if (!e) return;
        let t = document.querySelector(".IncodeComponent");
        return (
            (t ?? document.body).classList.add(n),
            () => {
                (t ?? document.body).classList.remove(n);
            }
        );
    }, [e]);
}
function u(e, t, i) {
    (0, r._)(() => {
        if (!e || !t) return;
        let r = (e) => {
            "Escape" === e.key && (e.preventDefault(), i());
        };
        return document.addEventListener("keydown", r), () => document.removeEventListener("keydown", r);
    }, [e, t, i]);
}
function h(e, t, i = !0, n) {
    (0, r._)(() => {
        if (!e) return;
        let r = document.activeElement,
            c = n?.current ?? null;
        if (i) {
            let e = t.current;
            e &&
                (function (e) {
                    let t = e.querySelector("[autofocus]");
                    if (t && l(t)) return t;
                    let i = e.querySelector(`[${o}]`);
                    if (i) {
                        if (l(i)) return i;
                        let e = i.querySelector(a);
                        if (e) return e;
                    }
                    return s(e)[0] ?? e;
                })(e).focus();
        }
        return () => {
            c && "function" == typeof c.focus ? c.focus() : r && "function" == typeof r.focus && r.focus();
        };
    }, [e, t, i, n]);
}
function p(e, t) {
    (0, r._)(() => {
        if (!e || typeof window > "u") return;
        let i = window.visualViewport;
        if (!i) return;
        let r = () => {
            let e = t.current;
            e &&
                (e.style.setProperty("--incode-visual-viewport-height", `${i.height}px`),
                e.style.setProperty("--incode-visual-viewport-offset-top", `${i.offsetTop}px`));
        };
        return (
            r(),
            i.addEventListener("resize", r),
            i.addEventListener("scroll", r),
            () => {
                i.removeEventListener("resize", r), i.removeEventListener("scroll", r);
            }
        );
    }, [e, t]);
}
function f(e, t) {
    (0, r._)(() => {
        if (!e) return;
        let i = (e) => {
            if ("Tab" !== e.key) return;
            let i = t.current;
            if (!i) return;
            let r = s(i);
            if (0 === r.length && document.activeElement === i) return void e.preventDefault();
            if (0 === r.length) return;
            let n = r[0],
                o = r[r.length - 1];
            e.shiftKey
                ? document.activeElement === n && (e.preventDefault(), o.focus())
                : document.activeElement === o && (e.preventDefault(), n.focus());
        };
        return document.addEventListener("keydown", i), () => document.removeEventListener("keydown", i);
    }, [e, t]);
}
