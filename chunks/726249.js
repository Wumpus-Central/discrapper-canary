n.d(t, { HI: () => I, HU: () => A, cu: () => T, iA: () => E, sF: () => _ });
var i = n(64700),
    a = n(942381),
    r = n(265690),
    s = n(121894);
let l = { base: n(723702).isPlatformEmbedded ? void 0 : "Discord" },
    o = 0,
    d = { count: 3, onlyWhenBlurred: !1, interval: 1e3 },
    c = (0, r.h)(() => ({ titles: [l], notificationCount: void 0, flashQueue: [] }));
function _(e) {
    (0, s.r)(() => c.setState({ notificationCount: e }));
}
function E(e) {
    let t = { ...d, ...e, id: o++ };
    return (
        (t.count = Math.max(t.count, t.messages.length)),
        c.setState((e) => ({ flashQueue: [...e.flashQueue, t] })),
        () => u(t.id)
    );
}
function u(e) {
    c.setState((t) => ({ flashQueue: t.flashQueue.filter((t) => t.id !== e) }));
}
function A(e) {
    i.useEffect(
        () => (
            (0, s.r)(() => c.setState((t) => ({ titles: [e, ...t.titles] }))),
            () => {
                (0, s.r)(() => c.setState((t) => ({ titles: t.titles.filter((t) => t !== e) })));
            }
        ),
        [...Object.values(e)],
    );
}
function I(e) {
    return A(e), null;
}
function T() {
    let { skipsSettingDefaultPageTitle: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    i.useEffect(() => {
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
                        let t, n, i;
                        for (let a of e.titles) {
                            if (null != t && null != n) break;
                            (t = t ?? a.base), (n = n ?? a.location), (i = i ?? a.subsection);
                        }
                        return [t, i, n];
                    })(e)
                        .filter((e) => null != e)
                        .join(" | "),
                    i = (function (e) {
                        let { notificationCount: t } = e;
                        return null == t || 0 === t ? "" : t < 0 ? "• " : `(${t}) `;
                    })(e);
                return [`${i}${n}`, t[0]];
            }, a.x),
            [n, r] = i.useState(!1),
            s = i.useRef(0),
            l = t?.messages[s.current % t.messages.length];
        return (
            i.useEffect(() => {
                if (null == t) {
                    (s.current = 0), r(!1);
                    return;
                }
                if (document.hasFocus() && t.onlyWhenBlurred) {
                    u(t.id), r(!1);
                    return;
                }
                let e = setInterval(() => {
                    if (s.current >= t.count) {
                        u(t.id), r(!1);
                        return;
                    }
                    r((e) => !e || ((s.current += 1), !1));
                }, t.interval);
                return () => clearInterval(e);
            }, [t]),
            n ? l : e
        );
    })();
    i.useEffect(() => {
        let n = t === l.base;
        (e && n) || (document.title = t);
    }, [e, t]);
}
