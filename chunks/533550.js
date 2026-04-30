n.d(t, { RX: () => o, q8: () => c });
var i = n(64700),
    a = n(942381),
    r = n(265690),
    s = n(121894);
let l = (0, r.h)((e) => ({ upsellsByGuildId: {} }));
function o(e) {
    return l((t) => {
        let n = {};
        return null == e ? n : (t.upsellsByGuildId[e] ?? n);
    }, a.x);
}
function d(e) {
    if (null == e) return !1;
    try {
        return window.getComputedStyle(e).overflow.includes("scroll");
    } catch (e) {
        return !1;
    }
}
function c(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        a = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            let i = a.current,
                r = () => {
                    requestAnimationFrame(() => {
                        var i;
                        (i = {
                            name: t,
                            guildId: e,
                            disabled: n,
                            boundingRect: a.current?.getBoundingClientRect() ?? null ?? null,
                        }),
                            (0, s.r)(() => {
                                l.setState((e) => ({
                                    upsellsByGuildId: {
                                        ...(e.upsellsByGuildId ?? {}),
                                        [i.guildId]: { ...(e.upsellsByGuildId[i.guildId] ?? {}), [i.name]: i },
                                    },
                                }));
                            });
                    });
                };
            if (null == i) return r(), () => {};
            let o = (function (e) {
                let t = e.parentNode;
                for (; null != t && t !== document.body && !d(t); ) t = t.parentNode;
                return d(t) ? t : null;
            })(i);
            return (
                r(),
                o?.addEventListener("scroll", r, { passive: !0 }),
                () => {
                    o?.removeEventListener("scroll", r);
                }
            );
        }, [e, t, n]),
        a
    );
}
