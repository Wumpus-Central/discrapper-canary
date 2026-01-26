n.d(t, {
    A: () => S,
    L: () => v,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(837381),
    l = n(397927),
    c = n(608299),
    u = n(101555),
    d = n(203982),
    f = n(844992),
    p = n(652215),
    _ = n(985018),
    h = n(735314);

function m(e, t, n) {
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

function g(e) {
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
                m(e, t, n[t]);
            });
    }
    return e;
}

function E(e, t) {
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

function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = O(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function O(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
var v = (function (e) {
    return (
        (e[(e.SMALL = 0)] = "SMALL"),
        (e[(e.MEDIUM = 1)] = "MEDIUM"),
        (e[(e.CLIP = 2)] = "CLIP"),
        (e[(e.XXSMALL = 3)] = "XXSMALL"),
        (e[(e.XSMALL = 4)] = "XSMALL"),
        e
    );
})({});

function A(e) {
    e.stopPropagation();
}

function I(e, t) {
    let {
            id: n,
            channelId: a,
            className: m,
            children: E,
            actions: O,
            handleEditModal: v,
            keyboardModeEnabled: I,
            onKeyDown: S,
            draftType: T,
            size: C = 1,
        } = e,
        N = i.useRef(null),
        w = (0, o.rm)(n),
        { onFocus: R } = w,
        P = b(w, ["onFocus"]),
        { handleFocus: D, handleBlur: x } = (0, f.G)(R),
        L = 0 === C,
        j = null != O,
        M = (e) => {
            if (0 === e.detail && null != N.current) {
                let e = N.current.querySelector('[role="button"], button');
                null == e || e.click();
            }
        },
        k = (e) => {
            if (I) {
                switch (e.which) {
                    case p.Ks6.D:
                        e.preventDefault(), c.A.remove(a, n, T);
                        return;
                    case p.Ks6.E:
                        null != v && (e.preventDefault(), v(e));
                        return;
                    case p.Ks6.BACKSPACE:
                        e.ctrlKey
                            ? (e.preventDefault(), c.A.clearAll(a, T))
                            : (e.preventDefault(), c.A.remove(a, n, T));
                        return;
                    case p.Ks6.ARROW_UP:
                        let t = e.shiftKey || e.altKey || e.ctrlKey || e.metaKey;
                        if (t) return;
                        e.preventDefault(),
                            d._.dispatchToLastSubscribed(p.jej.FOCUS_MESSAGES, {
                                atEnd: !0,
                            });
                }
                null == S || S(e);
            }
        };
    return (0, r.jsx)(l.vN3, {
        children: (0, r.jsx)(
            "li",
            y(g({}, P), {
                onFocus: D,
                onBlur: x,
                onClick: M,
                onKeyDown: k,
                className: s()(h.Se, m, {
                    [h.oi]: 2 === C,
                }),
                ref: t,
                children: (0, r.jsxs)("div", {
                    className: h.PO,
                    ref: N,
                    children: [
                        E,
                        j
                            ? (0, r.jsx)("div", {
                                  className: h.TC,
                                  children: (0, r.jsx)("div", {
                                      className: s()(h.KY, {
                                          [h.BN]: L,
                                      }),
                                      onContextMenu: A,
                                      "aria-label": _.intl.string(_.t["8Lu3Du"]),
                                      children: (0, r.jsx)(u.Ay, {
                                          className: s()({
                                              [h.BX]: L,
                                          }),
                                          children: O,
                                      }),
                                  }),
                              })
                            : null,
                    ],
                }),
            }),
        ),
    });
}
let S = i.forwardRef(I);
