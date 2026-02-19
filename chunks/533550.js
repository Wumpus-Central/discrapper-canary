"use strict";
n.d(t, { RX: () => o, q8: () => d });
var i = n(64700),
    s = n(942381),
    l = n(265690),
    r = n(121894);
let a = (0, l.h)((e) => ({ upsellsByGuildId: {} }));
function o(e) {
    return a((t) => {
        let n = {};
        return null == e ? n : (t.upsellsByGuildId[e] ?? n);
    }, s.x);
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
        s = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            let i = s.current,
                l = () => {
                    requestAnimationFrame(() => {
                        var i;
                        (i = {
                            name: t,
                            guildId: e,
                            disabled: n,
                            boundingRect: s.current?.getBoundingClientRect() ?? null ?? null,
                        }),
                            (0, r.r)(() => {
                                a.setState((e) => ({
                                    upsellsByGuildId: {
                                        ...(e.upsellsByGuildId ?? {}),
                                        [i.guildId]: { ...(e.upsellsByGuildId[i.guildId] ?? {}), [i.name]: i },
                                    },
                                }));
                            });
                    });
                };
            if (null == i) return l(), () => {};
            let o = (function (e) {
                let t = e.parentNode;
                for (; null != t && t !== document.body && !c(t); ) t = t.parentNode;
                return c(t) ? t : null;
            })(i);
            return (
                l(),
                o?.addEventListener("scroll", l, { passive: !0 }),
                () => {
                    o?.removeEventListener("scroll", l);
                }
            );
        }, [e, t, n]),
        s
    );
}
