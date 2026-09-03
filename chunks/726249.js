n.d(t, { HI: () => h, HU: () => A, cu: () => I, iA: () => _, sF: () => u });
var i = n(582128),
    r = n(462180),
    a = n(882035),
    s = n(121894);
let l = { base: n(723702).isPlatformEmbedded ? void 0 : "Discord" },
    o = 0,
    d = { count: 3, onlyWhenBlurred: !1, interval: 1e3 },
    c = (0, a.h)(() => ({ titles: [l], notificationCount: void 0, flashQueue: [] }));
function u(e) {
    (0, s.r)(() => c.setState({ notificationCount: e }));
}
function _(e) {
    let t = { ...d, ...e, id: o++ };
    return (
        (t.count = Math.max(t.count, t.messages.length)),
        c.setState((e) => ({ flashQueue: [...e.flashQueue, t] })),
        () => E(t.id)
    );
}
function E(e) {
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
function h(e) {
    return A(e), null;
}
function I() {
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
                        return null == t || 0 === t ? "" : t < 0 ? "\u2022 " : `(${t}) `;
                    })(e);
                return [`${i}${n}`, t[0]];
            }, r.x),
            [n, a] = i.useState(!1),
            s = i.useRef(0),
            l = t?.messages[s.current % t.messages.length];
        return (
            i.useEffect(() => {
                if (null == t) {
                    (s.current = 0), a(!1);
                    return;
                }
                if (document.hasFocus() && t.onlyWhenBlurred) {
                    E(t.id), a(!1);
                    return;
                }
                let e = setInterval(() => {
                    if (s.current >= t.count) {
                        E(t.id), a(!1);
                        return;
                    }
                    a((e) => !e || ((s.current += 1), !1));
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
