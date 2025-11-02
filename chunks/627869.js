n.d(t, { Z: () => h }), n(388685), n(781311), n(539854);
var r = n(951288),
    i = n(647438),
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
    let { autoClipPhrases: e, maxAutoClips: t, clipSignals: n } = (0, a.cj)([s.Z], () => s.Z.getSettings()),
        [d, _] = i.useState(""),
        h = i.useMemo(
            () =>
                e.map((e) => ({
                    id: e,
                    label: e,
                })),
            [e],
        ),
        m = i.useCallback((e) => {
            _(e);
        }, []),
        g = i.useCallback(
            (t) => {
                if ("Enter" === t.key || "," === t.key) {
                    t.preventDefault();
                    let n = d.trim().toLowerCase();
                    n.length > 0 && !e.includes(n) && (l.a2([...e, n]), _(""));
                } else if ("Backspace" === t.key && "" === d && e.length > 0) {
                    let t = e.slice(0, -1);
                    l.a2(t);
                }
            },
            [d, e],
        ),
        E = i.useCallback(
            (t) => {
                let n = Array.from(t)[0],
                    r = e.filter((e) => e !== n);
                l.a2(r);
            },
            [e],
        ),
        b = i.useCallback(
            (e) => {
                l.Rr(p(f({}, n), { enableGameSignals: e }));
            },
            [n],
        ),
        y = i.useCallback(
            (e) => {
                l.Rr(p(f({}, n), { enableDistributedSignals: e }));
            },
            [n],
        ),
        O = i.useCallback(
            (e) => {
                l.Rr(p(f({}, n), { enablePhraseSignals: e }));
            },
            [n],
        ),
        v = i.useCallback((e) => {
            l.W6(Math.floor(e));
        }, []),
        I = i.useMemo(() => {
            let e = [c.qb];
            for (let t = 10; t <= c.b0; t += 10) e.push(t);
            return e[e.length - 1] !== c.b0 && e.push(c.b0), e;
        }, []);
    return (0, r.jsxs)(o.l09, {
        children: [
            (0, r.jsx)(o.iRW, {
                label: u.intl.string(u.t.yfsrDI),
                description: u.intl.string(u.t.vlDHdC),
                initialValue: t,
                layout: "vertical",
                onValueRender: (e) => "".concat(Math.floor(e)),
                minValue: c.qb,
                maxValue: c.b0,
                onValueChange: v,
                markers: I,
                onMarkerRender: (e) => "".concat(Math.floor(e)),
            }),
            (0, r.jsx)(o.izJ, {}),
            (0, r.jsx)(o.rsf, {
                label: u.intl.string(u.t.iV6KcI),
                description: u.intl.string(u.t["dJ2tX+"]),
                checked: n.enableGameSignals,
                onChange: b,
            }),
            (0, r.jsx)(o.rsf, {
                label: u.intl.string(u.t["01JPeO"]),
                description: u.intl.string(u.t["Xnx+Co"]),
                checked: n.enableDistributedSignals,
                onChange: y,
            }),
            (0, r.jsx)(o.rsf, {
                label: u.intl.string(u.t.nHsilt),
                description: u.intl.string(u.t["s6wq+m"]),
                checked: n.enablePhraseSignals,
                onChange: O,
            }),
            n.enablePhraseSignals &&
                (0, r.jsx)(o.oil, {
                    value: d,
                    onChange: m,
                    onKeyDown: g,
                    placeholder: u.intl.string(u.t.zYUZpt),
                    leading:
                        h.length > 0
                            ? {
                                  type: "tags",
                                  items: h,
                                  onRemove: E,
                              }
                            : void 0,
                }),
        ],
    });
}
