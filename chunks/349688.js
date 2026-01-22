n.d(t, {
    A: () => I,
    L: () => A,
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

function b(e, t) {
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

function y(e, t) {
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
var A = (function (e) {
    return (
        (e[(e.SMALL = 0)] = "SMALL"),
        (e[(e.MEDIUM = 1)] = "MEDIUM"),
        (e[(e.CLIP = 2)] = "CLIP"),
        (e[(e.XXSMALL = 3)] = "XXSMALL"),
        (e[(e.XSMALL = 4)] = "XSMALL"),
        e
    );
})({});

function v(e) {
    e.stopPropagation();
}

function S(e, t) {
    let {
            id: n,
            channelId: i,
            className: a,
            children: m,
            actions: E,
            handleEditModal: O,
            keyboardModeEnabled: A,
            onKeyDown: S,
            draftType: I,
            size: T = 1,
        } = e,
        C = (0, o.rm)(n),
        { onFocus: N } = C,
        R = y(C, ["onFocus"]),
        { handleFocus: w, handleBlur: P } = (0, f.G)(N),
        D = 0 === T,
        x = null != E,
        L = (e) => {
            if (A) {
                switch (e.which) {
                    case p.Ks6.D:
                        e.preventDefault(), c.A.remove(i, n, I);
                        return;
                    case p.Ks6.E:
                        null != O && (e.preventDefault(), O(e));
                        return;
                    case p.Ks6.BACKSPACE:
                        e.ctrlKey
                            ? (e.preventDefault(), c.A.clearAll(i, I))
                            : (e.preventDefault(), c.A.remove(i, n, I));
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
            b(g({}, R), {
                onFocus: w,
                onBlur: P,
                onKeyDown: L,
                className: s()(h.Se, a, {
                    [h.oi]: 2 === T,
                }),
                ref: t,
                children: (0, r.jsxs)("div", {
                    className: h.PO,
                    children: [
                        m,
                        x
                            ? (0, r.jsx)("div", {
                                  className: h.TC,
                                  children: (0, r.jsx)("div", {
                                      className: s()(h.KY, {
                                          [h.BN]: D,
                                      }),
                                      onContextMenu: v,
                                      "aria-label": _.intl.string(_.t["8Lu3Du"]),
                                      children: (0, r.jsx)(u.Ay, {
                                          className: s()({
                                              [h.BX]: D,
                                          }),
                                          children: E,
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
let I = i.forwardRef(S);
