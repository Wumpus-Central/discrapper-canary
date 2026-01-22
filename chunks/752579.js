n.d(t, {
    w: () => a,
});
var r = n(64700);

function i() {
    return void 0 !== window.ResizeObserver;
}

function a(e) {
    let { ref: t, box: n, onResize: a } = e;
    (0, r.useEffect)(() => {
        let e = null == t ? void 0 : t.current;
        if (e)
            if (!i())
                return (
                    window.addEventListener("resize", a, !1),
                    () => {
                        window.removeEventListener("resize", a, !1);
                    }
                );
            else {
                let t = new window.ResizeObserver((e) => {
                    e.length && a();
                });
                return (
                    t.observe(e, {
                        box: n,
                    }),
                    () => {
                        e && t.unobserve(e);
                    }
                );
            }
    }, [a, t, n]);
}
