t.d(a, { y: () => n });
var u = t(647438);
function n(e) {
    let { ref: a, box: t, onResize: n } = e;
    (0, u.useEffect)(() => {
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
