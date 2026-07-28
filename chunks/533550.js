"use strict";
n.d(t, { RX: () => o, q8: () => c });
var i = n(582128),
    r = n(462180),
    a = n(882035),
    s = n(121894);
let l = (0, a.h)((e) => ({ upsellsByGuildId: {} }));
function o(e) {
    return l((t) => {
        let n = {};
        return null == e ? n : (t.upsellsByGuildId[e] ?? n);
    }, r.x);
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
        r = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            let i = r.current;
            function a() {
                requestAnimationFrame(() => {
                    var i;
                    (i = {
                        name: t,
                        guildId: e,
                        disabled: n,
                        boundingRect: r.current?.getBoundingClientRect() ?? null ?? null,
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
            }
            if (null == i) return a(), () => {};
            let o = (function (e) {
                let t = e.parentNode;
                for (; null != t && t !== document.body && !d(t); ) t = t.parentNode;
                return d(t) ? t : null;
            })(i);
            return (
                a(),
                o?.addEventListener("scroll", a, { passive: !0 }),
                () => {
                    o?.removeEventListener("scroll", a);
                }
            );
        }, [e, t, n]),
        r
    );
}
