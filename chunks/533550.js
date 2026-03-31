n.d(t, { RX: () => o, q8: () => d });
var i = n(64700),
    l = n(942381),
    s = n(265690),
    a = n(121894);
let r = (0, s.h)((e) => ({ upsellsByGuildId: {} }));
function o(e) {
    return r((t) => {
        let n = {};
        return null == e ? n : (t.upsellsByGuildId[e] ?? n);
    }, l.x);
}
function c(e) {
    if (null == e) return !1;
    try {
        return window.getComputedStyle(e).overflow.includes("scroll");
    } catch (e) {
        return !1;
    }
}
function d(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        l = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            let i = l.current,
                s = () => {
                    requestAnimationFrame(() => {
                        var i;
                        (i = {
                            name: t,
                            guildId: e,
                            disabled: n,
                            boundingRect: l.current?.getBoundingClientRect() ?? null ?? null,
                        }),
                            (0, a.r)(() => {
                                r.setState((e) => ({
                                    upsellsByGuildId: {
                                        ...(e.upsellsByGuildId ?? {}),
                                        [i.guildId]: { ...(e.upsellsByGuildId[i.guildId] ?? {}), [i.name]: i },
                                    },
                                }));
                            });
                    });
                };
            if (null == i) return s(), () => {};
            let o = (function (e) {
                let t = e.parentNode;
                for (; null != t && t !== document.body && !c(t); ) t = t.parentNode;
                return c(t) ? t : null;
            })(i);
            return (
                s(),
                o?.addEventListener("scroll", s, { passive: !0 }),
                () => {
                    o?.removeEventListener("scroll", s);
                }
            );
        }, [e, t, n]),
        l
    );
}
