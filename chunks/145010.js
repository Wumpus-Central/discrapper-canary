n.d(t, { Z: () => b });
var r = n(255367),
    i = n(73800),
    o = n(399606),
    a = n(481060),
    s = n(125268),
    l = n(673125),
    c = n(984063),
    u = n(390322),
    d = n(871499),
    f = n(12168),
    _ = n(304388),
    p = n(388032);
function h(e, t, n) {
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
function m(e) {
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
                h(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
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
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function b(e) {
    let { channel: t } = e,
        n = (0, o.e7)([l.Z], () => l.Z.getDrawMode()),
        h = (null == n ? void 0 : n.type) === c.W.EMOJI_HOSE,
        g = i.useRef(null),
        b = (e, t) => {
            null != e
                ? (0, s.Bo)({
                      type: c.W.EMOJI_HOSE,
                      emojiName: e.name,
                      emojiId: e.id,
                  })
                : h && (0, s.Bo)(null),
                null == t || t();
        };
    return (0, r.jsx)(_.Z, {
        renderPopout: (e) => {
            let { closePopout: n, onFocus: i } = e;
            return (0, r.jsx)(u.Z, {
                children: (0, r.jsx)(f.Z, {
                    title: p.intl.string(p.t.XYLOyM),
                    channel: t,
                    closePopout: n,
                    onFocus: i,
                    onSelectEmoji: (e) => b(e, n),
                }),
            });
        },
        popoutTargetRef: g,
        children: (e) =>
            (0, r.jsx)(
                d.Z,
                E(m({}, e), {
                    buttonRef: g,
                    iconComponent: a.j9u,
                    isActive: h || e.isActive,
                    onClick: (t) => {
                        b(null), e.onClick(t);
                    },
                }),
            ),
    });
}
