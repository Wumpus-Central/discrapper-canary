n.d(t, {
    Ay: () => C,
    NH: () => N,
    T: () => I,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(481613),
    o = n.n(s),
    c = n(837381),
    u = n(311907),
    d = n(397927),
    f = n(73153),
    p = n(964486),
    h = n(775602),
    b = n(928039),
    g = n(954571),
    m = n(203982),
    A = n(723702),
    y = n(157296),
    O = n(963702),
    j = n(792967),
    v = n(712209),
    x = n(652215),
    E = n(985018),
    _ = n(852570);

function C(e) {
    var t, n, i, s, y, C, I;
    let { onJump: N, showTutorial: T, setSeenTutorial: P, closePopout: w } = e,
        R = l.useRef(null),
        [D, M] = (0, v.Ay)(R),
        { loadState: L, channels: G } = D,
        { maybeLoadMore: k } = M,
        U = (0, u.bG)([h.A], () => h.A.messageGroupSpacing);
    (t = R),
        (n = D),
        (i = M),
        l.useLayoutEffect(() => {
            var e;
            let { scrollToChannelIndex: r } = n;
            i.clearScrollToChannelIndex();
            let { current: l } = t;
            if (null == l || null == r) return;
            let a = null == (e = l.getScrollerNode()) ? void 0 : e.children;
            if (null == a) return;
            let s = a[r];
            if (null == s) return;
            let { scrollTop: o, offsetHeight: c } = l.getScrollerState();
            (s.offsetTop < o || s.offsetTop > o + c) &&
                l.scrollTo({
                    to: s.offsetTop,
                });
        }),
        (s = D),
        (y = M),
        l.useEffect(() => {
            let e = () => {
                let e = s.channels.find((e) => !e.collapsed);
                null != e && y.markChannelRead(e);
            };
            return (
                m._.subscribe(x.jej.MARK_TOP_INBOX_CHANNEL_READ, e),
                () => {
                    m._.unsubscribe(x.jej.MARK_TOP_INBOX_CHANNEL_READ, e);
                }
            );
        }, [y, s.channels]),
        (C = M),
        l.useEffect(() => {
            let e = (e) => {
                ((0, A.isMac)() || (0, A.isMacWeb)() ? e.metaKey : e.ctrlKey) &&
                    !e.shiftKey &&
                    !e.altKey &&
                    "z" === e.key &&
                    C.undoMarkChannelRead();
            };
            return (
                document.addEventListener("keydown", e),
                () => {
                    document.removeEventListener("keydown", e);
                }
            );
        }, [C]),
        l.useEffect(() => {
            g.default.track(x.HAw.OPEN_POPOUT, {
                type: "Inbox",
            });
        }, []),
        l.useEffect(
            () => (
                f.h.subscribe("CONNECTION_OPEN", w),
                () => {
                    f.h.unsubscribe("CONNECTION_OPEN", w);
                }
            ),
            [w],
        ),
        (0, p.Ay)(
            () => (
                m._.subscribe(x.jej.INBOX_MARK_ALL_UNREADS_READ, M.markAllRead),
                () => {
                    m._.unsubscribe(x.jej.INBOX_MARK_ALL_UNREADS_READ, M.markAllRead);
                }
            ),
        );
    let V = (0, b.A)("unreads", R);
    if (0 === G.length) {
        return (0, r.jsx)(O.A, {
            Icon: d.K$s,
            header: E.intl.string(E.t["6XMM+D"]),
            tip:
                (null == (I = o().os) ? void 0 : I.family) === "OS X"
                    ? E.intl.string(E.t.w9uDOW)
                    : E.intl.string(E.t.BiUJC6),
        });
    }
    return (0, r.jsx)(c.hD, {
        navigator: V,
        children: (0, r.jsx)(c.PR, {
            children: (e) => {
                var t, n;
                let { ref: l } = e,
                    i = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            l,
                            i = {};
                        if ("u" > typeof Reflect && Reflect.ownKeys) {
                            for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++)
                                (r = n[l]),
                                    !(t.indexOf(r) >= 0) &&
                                        Object.prototype.propertyIsEnumerable.call(e, r) &&
                                        (i[r] = e[r]);
                            return i;
                        }
                        if (
                            ((i = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    l = {},
                                    i = Object.getOwnPropertyNames(e);
                                for (r = 0; r < i.length; r++)
                                    (n = i[r]),
                                        !(t.indexOf(n) >= 0) &&
                                            Object.prototype.propertyIsEnumerable.call(e, n) &&
                                            (l[n] = e[n]);
                                return l;
                            })(e, t)),
                            Object.getOwnPropertySymbols)
                        )
                            for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++)
                                (r = n[l]),
                                    !(t.indexOf(r) >= 0) &&
                                        Object.prototype.propertyIsEnumerable.call(e, r) &&
                                        (i[r] = e[r]);
                        return i;
                    })(e, ["ref"]);
                return (0, r.jsxs)(
                    d.ChK,
                    ((t = (function (e) {
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
                    })(
                        {
                            ref: (e) => {
                                var t;
                                (R.current = e),
                                    (l.current = null != (t = null == e ? void 0 : e.getScrollerNode()) ? t : null);
                            },
                        },
                        i,
                    )),
                    (n = n =
                        {
                            onScroll: L === v.mJ.Done ? void 0 : k,
                            className: a()(_.XG, "group-spacing-".concat(U)),
                            children: [
                                T
                                    ? (0, r.jsx)(S, {
                                          setSeenTutorial: P,
                                      })
                                    : null,
                                (0, j.A)(G, M, N),
                                L === v.mJ.Done
                                    ? null
                                    : (0, r.jsx)(d.y$y, {
                                          className: _.u1,
                                      }),
                            ],
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(n)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                          }),
                    t),
                );
            },
        }),
    });
}

function S(e) {
    let { setSeenTutorial: t } = e;
    return (0, r.jsxs)("div", {
        className: _.d$,
        children: [
            (0, r.jsx)("div", {
                className: _.cm,
                children: (0, r.jsx)(d.K$s, {
                    size: "md",
                    color: "currentColor",
                }),
            }),
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(d.Heading, {
                        className: _.__invalid_tutorialHeader,
                        variant: "heading-md/semibold",
                        children: E.intl.string(E.t.vZPktJ),
                    }),
                    (0, r.jsx)(d.Text, {
                        color: "text-default",
                        variant: "text-sm/normal",
                        children: E.intl.string(E.t.vWkIII),
                    }),
                    (0, r.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: _.dh,
                        children: (0, r.jsx)(d.Button, {
                            variant: "primary",
                            size: "sm",
                            text: E.intl.string(E.t["+IrDzN"]),
                            onClick: t,
                        }),
                    }),
                ],
            }),
        ],
    });
}

function I() {
    return (0, r.jsx)(O.A, {
        Icon: d.K$s,
        disableStars: !0,
        header: E.intl.string(E.t["KG/ynf"]),
        tip: E.intl.string(E.t.cvcKzX),
    });
}
let N = () =>
    (0, r.jsx)(y.A, {
        onClick: () => m._.dispatch(x.jej.INBOX_MARK_ALL_UNREADS_READ),
    });
