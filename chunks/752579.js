t.d(a, { w: () => n });
var r = t(64700);
function n(e) {
    let { ref: a, box: t, onResize: n } = e;
    (0, r.useEffect)(() => {
        let e = null == a ? void 0 : a.current;
        if (e)
            if (void 0 === window.ResizeObserver)
                return (
                    window.addEventListener("resize", n, !1),
                    () => {
                        window.removeEventListener("resize", n, !1);
                    }
                );
            else {
                let a = new window.ResizeObserver((e) => {
                    e.length && n();
                });
                return (
                    a.observe(e, { box: t }),
                    () => {
                        e && a.unobserve(e);
                    }
                );
            }
    }, [n, a, t]);
}
