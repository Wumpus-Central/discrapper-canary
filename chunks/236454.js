n.d(t, {
    A: () => m,
    W: () => h,
}),
    n(896048),
    n(733351),
    n(321073);
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(397927),
    o = n(274372),
    l = n(399925),
    c = n(696016),
    u = n(985018);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function h() {
    let e = (0, a.bG)([o.A], () => o.A.getSettings().autoClipPhrases),
        [t, n] = i.useState(""),
        c = i.useMemo(
            () =>
                e.map((e) => ({
                    id: e,
                    label: e,
                })),
            [e],
        ),
        d = i.useCallback((e) => {
            n(e);
        }, []),
        f = i.useCallback(
            (r) => {
                if ("Enter" === r.key || "," === r.key) {
                    r.preventDefault();
                    let i = t.trim().toLowerCase();
                    i.length > 0 && !e.includes(i) && (l.pM([...e, i]), n(""));
                } else if ("Backspace" === r.key && "" === t && e.length > 0) {
                    let t = e.slice(0, -1);
                    l.pM(t);
                }
            },
            [t, e],
        ),
        p = i.useCallback(
            (t) => {
                let n = Array.from(t)[0],
                    r = e.filter((e) => e !== n);
                l.pM(r);
            },
            [e],
        );
    return (0, r.jsx)(s.ksK, {
        value: t,
        onChange: d,
        onKeyDown: f,
        placeholder: u.intl.string(u.t.zYUZpt),
        leading:
            c.length > 0
                ? {
                      type: "tags",
                      items: c,
                      onRemove: p,
                  }
                : void 0,
    });
}
function m() {
    let { maxAutoClips: e, clipSignals: t } = (0, a.cf)([o.A], () => o.A.getSettings()),
        n = i.useCallback(
            (e) => {
                l.PW(_(f({}, t), { enableGameSignals: e }));
            },
            [t],
        ),
        d = i.useCallback(
            (e) => {
                l.PW(_(f({}, t), { enablePhraseSignals: e }));
            },
            [t],
        ),
        p = i.useCallback((e) => {
            l.e6(Math.floor(e));
        }, []),
        m = i.useMemo(() => {
            let e = [c.wN];
            for (let t = 10; t <= c.qh; t += 10) e.push(t);
            return e[e.length - 1] !== c.qh && e.push(c.qh), e;
        }, []);
    return (0, r.jsxs)(s.lVW, {
        children: [
            (0, r.jsx)(s.Apm, {
                label: u.intl.string(u.t.yfsrDI),
                description: u.intl.string(u.t.vlDHdC),
                initialValue: e,
                layout: "vertical",
                onValueRender: (e) => "".concat(Math.floor(e)),
                minValue: c.wN,
                maxValue: c.qh,
                onValueChange: p,
                markers: m,
                onMarkerRender: (e) => "".concat(Math.floor(e)),
            }),
            (0, r.jsx)(s.cGx, {}),
            (0, r.jsx)(s.dOG, {
                label: u.intl.string(u.t.iV6KcI),
                description: u.intl.string(u.t["dJ2tX+"]),
                checked: t.enableGameSignals,
                onChange: n,
            }),
            (0, r.jsx)(s.dOG, {
                label: u.intl.string(u.t.nHsilt),
                description: u.intl.string(u.t["s6wq+m"]),
                checked: t.enablePhraseSignals,
                onChange: d,
            }),
            t.enablePhraseSignals && (0, r.jsx)(h, {}),
        ],
    });
}
