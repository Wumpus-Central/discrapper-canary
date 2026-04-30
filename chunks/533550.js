"use strict";
n.d(t, { RX: () => l, q8: () => c });
var i = n(64700),
    r = n(942381),
    s = n(265690),
    a = n(121894);
let o = (0, s.h)((e) => ({ upsellsByGuildId: {} }));
function l(e) {
    return o((t) => {
        let n = {};
        return null == e ? n : (t.upsellsByGuildId[e] ?? n);
    }, r.x);
}
function u(e) {
    if (null == e) return !1;
    try {
        return window.getComputedStyle(e).overflow.includes("scroll");
    } catch (e) {
        return !1;
    }
}
function c(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            let i = r.current,
                s = () => {
                    requestAnimationFrame(() => {
                        var i;
                        (i = {
                            name: t,
                            guildId: e,
                            disabled: n,
                            boundingRect: r.current?.getBoundingClientRect() ?? null ?? null,
                        }),
                            (0, a.r)(() => {
                                o.setState((e) => ({
                                    upsellsByGuildId: {
                                        ...(e.upsellsByGuildId ?? {}),
                                        [i.guildId]: { ...(e.upsellsByGuildId[i.guildId] ?? {}), [i.name]: i },
                                    },
                                }));
                            });
                    });
                };
            if (null == i) return s(), () => {};
            let l = (function (e) {
                let t = e.parentNode;
                for (; null != t && t !== document.body && !u(t); ) t = t.parentNode;
                return u(t) ? t : null;
            })(i);
            return (
                s(),
                l?.addEventListener("scroll", s, { passive: !0 }),
                () => {
                    l?.removeEventListener("scroll", s);
                }
            );
        }, [e, t, n]),
        r
    );
}
