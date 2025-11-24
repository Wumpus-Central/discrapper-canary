n.d(t, {
    Z: () => m,
    j: () => h,
}),
    n(388685),
    n(781311),
    n(539854);
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(481060),
    s = n(435064),
    l = n(39604),
    c = n(356659),
    u = n(388032);
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
function _(e, t) {
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
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function h() {
    let e = (0, a.e7)([s.Z], () => s.Z.getSettings().autoClipPhrases),
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
                    i.length > 0 && !e.includes(i) && (l.a2([...e, i]), n(""));
                } else if ("Backspace" === r.key && "" === t && e.length > 0) {
                    let t = e.slice(0, -1);
                    l.a2(t);
                }
            },
            [t, e],
        ),
        _ = i.useCallback(
            (t) => {
                let n = Array.from(t)[0],
                    r = e.filter((e) => e !== n);
                l.a2(r);
            },
            [e],
        );
    return (0, r.jsx)(o.oil, {
        value: t,
        onChange: d,
        onKeyDown: f,
        placeholder: u.intl.string(u.t.zYUZpt),
        leading:
            c.length > 0
                ? {
                      type: "tags",
                      items: c,
                      onRemove: _,
                  }
                : void 0,
    });
}
function m() {
    let { maxAutoClips: e, clipSignals: t } = (0, a.cj)([s.Z], () => s.Z.getSettings()),
        n = i.useCallback(
            (e) => {
                l.Rr(p(f({}, t), { enableGameSignals: e }));
            },
            [t],
        ),
        d = i.useCallback(
            (e) => {
                l.Rr(p(f({}, t), { enablePhraseSignals: e }));
            },
            [t],
        ),
        _ = i.useCallback((e) => {
            l.W6(Math.floor(e));
        }, []),
        m = i.useMemo(() => {
            let e = [c.qb];
            for (let t = 10; t <= c.b0; t += 10) e.push(t);
            return e[e.length - 1] !== c.b0 && e.push(c.b0), e;
        }, []);
    return (0, r.jsxs)(o.l09, {
        children: [
            (0, r.jsx)(o.iRW, {
                label: u.intl.string(u.t.yfsrDI),
                description: u.intl.string(u.t.vlDHdC),
                initialValue: e,
                layout: "vertical",
                onValueRender: (e) => "".concat(Math.floor(e)),
                minValue: c.qb,
                maxValue: c.b0,
                onValueChange: _,
                markers: m,
                onMarkerRender: (e) => "".concat(Math.floor(e)),
            }),
            (0, r.jsx)(o.izJ, {}),
            (0, r.jsx)(o.rsf, {
                label: u.intl.string(u.t.iV6KcI),
                description: u.intl.string(u.t["dJ2tX+"]),
                checked: t.enableGameSignals,
                onChange: n,
            }),
            (0, r.jsx)(o.rsf, {
                label: u.intl.string(u.t.nHsilt),
                description: u.intl.string(u.t["s6wq+m"]),
                checked: t.enablePhraseSignals,
                onChange: d,
            }),
            t.enablePhraseSignals && (0, r.jsx)(h, {}),
        ],
    });
}
