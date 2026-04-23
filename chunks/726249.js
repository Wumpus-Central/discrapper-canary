"use strict";
n.d(t, { HI: () => h, HU: () => p, cu: () => E, iA: () => _, sF: () => d });
var r = n(64700),
    i = n(942381),
    s = n(265690),
    a = n(121894);
let o = { base: n(723702).isPlatformEmbedded ? void 0 : "Discord" },
    l = 0,
    u = { count: 3, onlyWhenBlurred: !1, interval: 1e3 },
    c = (0, s.h)(() => ({ titles: [o], notificationCount: void 0, flashQueue: [] }));
function d(e) {
    (0, a.r)(() => c.setState({ notificationCount: e }));
}
function _(e) {
    let t = { ...u, ...e, id: l++ };
    return (
        (t.count = Math.max(t.count, t.messages.length)),
        c.setState((e) => ({ flashQueue: [...e.flashQueue, t] })),
        () => f(t.id)
    );
}
function f(e) {
    c.setState((t) => ({ flashQueue: t.flashQueue.filter((t) => t.id !== e) }));
}
function p(e) {
    r.useEffect(
        () => (
            (0, a.r)(() => c.setState((t) => ({ titles: [e, ...t.titles] }))),
            () => {
                (0, a.r)(() => c.setState((t) => ({ titles: t.titles.filter((t) => t !== e) })));
            }
        ),
        [...Object.values(e)],
    );
}
function h(e) {
    return p(e), null;
}
function E() {
    let { skipsSettingDefaultPageTitle: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    r.useEffect(() => {
        function e() {
            c.setState({ flashQueue: [] });
        }
        return (
            document.addEventListener("focusin", e, { capture: !0 }),
            () => document.removeEventListener("focusin", e, { capture: !0 })
        );
    }, []);
    let t = (function () {
        let [e, t] = c((e) => {
                let { flashQueue: t } = e,
                    n = (function (e) {
                        let t, n, r;
                        for (let i of e.titles) {
                            if (null != t && null != n) break;
                            (t = t ?? i.base), (n = n ?? i.location), (r = r ?? i.subsection);
                        }
                        return [t, r, n];
                    })(e)
                        .filter((e) => null != e)
                        .join(" | "),
                    r = (function (e) {
                        let { notificationCount: t } = e;
                        return null == t || 0 === t ? "" : t < 0 ? "• " : `(${t}) `;
                    })(e);
                return [`${r}${n}`, t[0]];
            }, i.x),
            [n, s] = r.useState(!1),
            a = r.useRef(0),
            o = t?.messages[a.current % t.messages.length];
        return (
            r.useEffect(() => {
                if (null == t) {
                    (a.current = 0), s(!1);
                    return;
                }
                if (document.hasFocus() && t.onlyWhenBlurred) {
                    f(t.id), s(!1);
                    return;
                }
                let e = setInterval(() => {
                    if (a.current >= t.count) {
                        f(t.id), s(!1);
                        return;
                    }
                    s((e) => !e || ((a.current += 1), !1));
                }, t.interval);
                return () => clearInterval(e);
            }, [t]),
            n ? o : e
        );
    })();
    r.useEffect(() => {
        let n = t === o.base;
        (e && n) || (document.title = t);
    }, [e, t]);
}
