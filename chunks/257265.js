var i = d(768611),
    e = "IncodeModalScrollLock",
    c =
        'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
d.d(
    t,
    {},
    {
        a: function (l, t) {
            let [d, e] = (0, i.p)(null);
            return (
                (0, i._)(() => {
                    if (!l) return void e(null);
                    if (t)
                        return (
                            e(t),
                            () => {
                                e(null);
                            }
                        );
                    let d = document.createElement("div");
                    return (
                        d.setAttribute("data-incode-modal-portal", ""),
                        (document.querySelector(".IncodeComponent") ?? document.body).appendChild(d),
                        e(d),
                        () => {
                            (d.remove(), e(null));
                        }
                    );
                }, [l, t]),
                d
            );
        },
        i: function (l, t, d = !0, e) {
            (0, i._)(() => {
                if (!l) return;
                let i = document.activeElement,
                    a = e?.current ?? null;
                if (d) {
                    let l,
                        d = t.current;
                    d &&
                        ((l = d.querySelector("[autofocus]")) &&
                        (function (l) {
                            try {
                                return l.matches(c);
                            } catch {
                                return !1;
                            }
                        })(l)
                            ? l
                            : (d.querySelector("#incode-modal-title") ?? d)
                        ).focus();
                }
                return () => {
                    a && "function" == typeof a.focus ? a.focus() : i && "function" == typeof i.focus && i.focus();
                };
            }, [l, t, d, e]);
        },
        n: function (l) {
            (0, i._)(() => {
                if (!l) return;
                let t = document.querySelector(".IncodeComponent");
                return (
                    (t ?? document.body).classList.add(e),
                    () => {
                        (t ?? document.body).classList.remove(e);
                    }
                );
            }, [l]);
        },
        o: function (l, t) {
            (0, i._)(() => {
                if (!l) return;
                let d = (l) => {
                    if ("Tab" !== l.key) return;
                    let d = t.current;
                    if (!d) return;
                    let i = Array.from(d.querySelectorAll(c));
                    if (0 === i.length) return void l.preventDefault();
                    let e = i[0],
                        a = i[i.length - 1];
                    l.shiftKey
                        ? document.activeElement === e && (l.preventDefault(), a.focus())
                        : document.activeElement === a && (l.preventDefault(), e.focus());
                };
                return (document.addEventListener("keydown", d), () => document.removeEventListener("keydown", d));
            }, [l, t]);
        },
        r: function (l, t, d) {
            (0, i._)(() => {
                if (!l || !t) return;
                let i = (l) => {
                    "Escape" === l.key && (l.preventDefault(), d());
                };
                return (document.addEventListener("keydown", i), () => document.removeEventListener("keydown", i));
            }, [l, t, d]);
        },
        s: function (l, t) {
            (0, i._)(() => {
                if (!l || "u" < typeof window) return;
                let d = window.visualViewport;
                if (!d) return;
                let i = () => {
                    let l = t.current;
                    l &&
                        (l.style.setProperty("--incode-visual-viewport-height", `${d.height}px`),
                        l.style.setProperty("--incode-visual-viewport-offset-top", `${d.offsetTop}px`));
                };
                return (
                    i(),
                    d.addEventListener("resize", i),
                    d.addEventListener("scroll", i),
                    () => {
                        (d.removeEventListener("resize", i), d.removeEventListener("scroll", i));
                    }
                );
            }, [l, t]);
        },
        t: "incode-modal-title",
    },
);
