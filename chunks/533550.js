n.d(t, {
    RX: () => u,
    q8: () => f,
});
var r = n(64700),
    l = n(942381),
    i = n(265690),
    a = n(121894);
function s(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function o(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let c = (0, i.h)((e) => ({ upsellsByGuildId: {} }));
function u(e) {
    return c((t) => {
        var n;
        let r = {};
        return null == e ? r : null != (n = t.upsellsByGuildId[e]) ? n : r;
    }, l.x);
}
function d(e) {
    if (null == e) return !1;
    try {
        return window.getComputedStyle(e).overflow.includes("scroll");
    } catch (e) {
        return !1;
    }
}
function f(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        l = r.useRef(null);
    return (
        r.useLayoutEffect(() => {
            let r = l.current,
                i = () => {
                    requestAnimationFrame(() => {
                        var r, i, u;
                        let d = null != (r = null == (i = l.current) ? void 0 : i.getBoundingClientRect()) ? r : null;
                        (u = {
                            name: t,
                            guildId: e,
                            disabled: n,
                            boundingRect: null != d ? d : null,
                        }),
                            (0, a.r)(() => {
                                c.setState((e) => {
                                    var t, n;
                                    return {
                                        upsellsByGuildId: o(s({}, null != (t = e.upsellsByGuildId) ? t : {}), {
                                            [u.guildId]: o(
                                                s({}, null != (n = e.upsellsByGuildId[u.guildId]) ? n : {}),
                                                { [u.name]: u },
                                            ),
                                        }),
                                    };
                                });
                            });
                    });
                };
            if (null == r) return i(), () => {};
            let u = (function (e) {
                let t = e.parentNode;
                for (; null != t && t !== document.body && !d(t); ) t = t.parentNode;
                return d(t) ? t : null;
            })(r);
            return (
                i(),
                null == u || u.addEventListener("scroll", i, { passive: !0 }),
                () => {
                    null == u || u.removeEventListener("scroll", i);
                }
            );
        }, [e, t, n]),
        l
    );
}
