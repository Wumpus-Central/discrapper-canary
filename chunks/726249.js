n.d(t, { HI: () => A, HU: () => I, cu: () => T, iA: () => c, sF: () => d });
var i = n(64700),
    r = n(942381),
    a = n(265690),
    s = n(121894);
let _ = { base: n(723702).isPlatformEmbedded ? void 0 : "Discord" },
    l = 0,
    o = { count: 3, onlyWhenBlurred: !1, interval: 1e3 },
    E = (0, a.h)(() => ({ titles: [_], notificationCount: void 0, flashQueue: [] }));
function d(e) {
    (0, s.r)(() => E.setState({ notificationCount: e }));
}
function c(e) {
    let t = { ...o, ...e, id: l++ };
    return (
        (t.count = Math.max(t.count, t.messages.length)),
        E.setState((e) => ({ flashQueue: [...e.flashQueue, t] })),
        () => u(t.id)
    );
}
function u(e) {
    E.setState((t) => ({ flashQueue: t.flashQueue.filter((t) => t.id !== e) }));
}
function I(e) {
    i.useEffect(
        () => (
            (0, s.r)(() => E.setState((t) => ({ titles: [e, ...t.titles] }))),
            () => {
                (0, s.r)(() => E.setState((t) => ({ titles: t.titles.filter((t) => t !== e) })));
            }
        ),
        [...Object.values(e)],
    );
}
function A(e) {
    return I(e), null;
}
function T() {
    let { skipsSettingDefaultPageTitle: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    i.useEffect(() => {
        function e() {
            E.setState({ flashQueue: [] });
        }
        return (
            document.addEventListener("focusin", e, { capture: !0 }),
            () => document.removeEventListener("focusin", e, { capture: !0 })
        );
    }, []);
    let t = (function () {
        let [e, t] = E((e) => {
                let { flashQueue: t } = e,
                    n = (function (e) {
                        let t, n, i;
                        for (let r of e.titles) {
                            if (null != t && null != n) break;
                            (t = t ?? r.base), (n = n ?? r.location), (i = i ?? r.subsection);
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
            }, r.x),
            [n, a] = i.useState(!1),
            s = i.useRef(0),
            _ = t?.messages[s.current % t.messages.length];
        return (
            i.useEffect(() => {
                if (null == t) {
                    (s.current = 0), a(!1);
                    return;
                }
                if (document.hasFocus() && t.onlyWhenBlurred) {
                    u(t.id), a(!1);
                    return;
                }
                let e = setInterval(() => {
                    if (s.current >= t.count) {
                        u(t.id), a(!1);
                        return;
                    }
                    a((e) => !e || ((s.current += 1), !1));
                }, t.interval);
                return () => clearInterval(e);
            }, [t]),
            n ? _ : e
        );
    })();
    i.useEffect(() => {
        let n = t === _.base;
        (e && n) || (document.title = t);
    }, [e, t]);
}
