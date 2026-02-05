"use strict";
n.d(t, { HI: () => A, HU: () => E, cu: () => y, iA: () => h, sF: () => f });
var r = n(64700),
    i = n(942381),
    a = n(265690),
    s = n(121894);
let o = { base: n(723702).isPlatformEmbedded ? void 0 : "Discord" },
    l = 0,
    u = { count: 3, onlyWhenBlurred: !1, interval: 1e3 },
    c = (0, a.h)(() => ({ titles: [o], notificationCount: void 0, flashQueue: [] }));
function d(e) {
    let t, n, r;
    for (let i of e.titles) {
        if (null != t && null != n) break;
        (t = t ?? i.base), (n = n ?? i.location), (r = r ?? i.subsection);
    }
    return [t, r, n];
}
function _(e) {
    let { notificationCount: t } = e;
    return null == t || 0 === t ? "" : t < 0 ? "• " : `(${t}) `;
}
function f(e) {
    (0, s.r)(() => c.setState({ notificationCount: e }));
}
function p(e) {
    return (
        (0, s.r)(() => c.setState((t) => ({ titles: [e, ...t.titles] }))),
        () => {
            (0, s.r)(() => c.setState((t) => ({ titles: t.titles.filter((t) => t !== e) })));
        }
    );
}
function h(e) {
    let t = { ...u, ...e, id: l++ };
    return (
        (t.count = Math.max(t.count, t.messages.length)),
        c.setState((e) => ({ flashQueue: [...e.flashQueue, t] })),
        () => m(t.id)
    );
}
function m(e) {
    c.setState((t) => ({ flashQueue: t.flashQueue.filter((t) => t.id !== e) }));
}
function g() {
    c.setState({ flashQueue: [] });
}
function E(e) {
    r.useEffect(() => p(e), [...Object.values(e)]);
}
function A(e) {
    return E(e), null;
}
function I() {
    let [e, t] = c((e) => {
            let { flashQueue: t } = e,
                n = d(e)
                    .filter((e) => null != e)
                    .join(" | "),
                r = _(e);
            return [`${r}${n}`, t[0]];
        }, i.x),
        [n, a] = r.useState(!1),
        s = r.useRef(0),
        o = t?.messages[s.current % t.messages.length];
    return (
        r.useEffect(() => {
            if (null == t) {
                (s.current = 0), a(!1);
                return;
            }
            if (document.hasFocus() && t.onlyWhenBlurred) {
                m(t.id), a(!1);
                return;
            }
            let e = setInterval(() => {
                if (s.current >= t.count) {
                    m(t.id), a(!1);
                    return;
                }
                a((e) => !e || ((s.current += 1), !1));
            }, t.interval);
            return () => clearInterval(e);
        }, [t]),
        n ? o : e
    );
}
function T() {
    r.useEffect(() => {
        function e() {
            g();
        }
        return (
            document.addEventListener("focusin", e, { capture: !0 }),
            () => document.removeEventListener("focusin", e, { capture: !0 })
        );
    }, []);
}
function y() {
    let { skipsSettingDefaultPageTitle: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    T();
    let t = I();
    r.useEffect(() => {
        let n = t === o.base;
        (e && n) || (document.title = t);
    }, [e, t]);
}
