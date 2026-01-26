n.d(t, {
    A: () => k,
    h: () => L,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(284009),
    a = n.n(i),
    s = n(108531),
    o = n(884362),
    c = n(837381),
    d = n(741918),
    u = n(621466),
    m = n(311907),
    h = n(397927),
    g = n(817363),
    f = n(775602),
    x = n(355622),
    p = n(349688),
    b = n(914905),
    j = n(734057),
    v = n(31717),
    _ = n(522602),
    y = n(518960),
    A = n(853742),
    C = n(985018),
    O = n(149707);

function T(e) {
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

function S(e, t) {
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
let N = {
        scale: 0.95,
        opacity: 0,
    },
    w = {
        scale: 1,
        opacity: 1,
    },
    E = {
        scale: 1,
        opacity: 1,
    },
    I = {
        tension: 2400,
        friction: 52,
    },
    P = ".".concat(O.EJ),
    R = {
        behavior: "smooth",
        block: "nearest",
        inline: "nearest",
    };

function k(e) {
    let { channelId: t, onClick: n, onClose: i, onMouseEnter: s, listItemProps: o } = e,
        c = l.useRef(null),
        d = (0, m.bG)([j.A], () => j.A.getChannel(t), [t]);
    return (
        a()(null != d, "Forum Channel is null"),
        (0, r.jsxs)(
            h.DUT,
            S(T({}, o), {
                "aria-label": C.intl.string(C.t.nzoF5p),
                className: O.EJ,
                onMouseEnter: s,
                onClick: (e) => {
                    if (0 === e.detail) {
                        var t;
                        null == (t = c.current) || t.activateUploadDialogue();
                    }
                    (0, A.ri)({
                        isMobile: !1,
                    }),
                        null == n || n();
                },
                children: [
                    (0, r.jsx)(g.A, {
                        className: O.Fg,
                        ref: c,
                        onChange: (e) => {
                            null == i || i(),
                                (0, y.R)(e.currentTarget.files, d, v.C.FirstThreadMessage, {
                                    requireConfirm: !0,
                                    origin: "file_picker",
                                }),
                                (e.currentTarget.value = null);
                        },
                        multiple: d.rateLimitPerUser <= 0,
                        tabIndex: -1,
                        "aria-hidden": !0,
                    }),
                    (0, r.jsx)(h.XGR, {
                        size: "custom",
                        color: "currentColor",
                        width: 28,
                        height: 28,
                        className: O.T3,
                    }),
                ],
            }),
        )
    );
}

function M(e) {
    let { channelId: t, closePopout: n } = e,
        [i, a] = l.useState(!1),
        { reducedMotion: u } = l.useContext(h.CZY),
        g = (0, h.zhh)(
            {
                from: u.enabled ? w : N,
                to: E,
                config: I,
            },
            "animate-always",
        ),
        j = (0, m.bG)([f.A], () => f.A.keyboardModeEnabled),
        v = (0, m.bG)([_.A], () => _.A.getUploads(t, x.oU.CREATE_FORUM_POST.drafts.type)),
        y = (0, o.Ay)({
            id: "forum-composer-attachments-popout",
            isEnabled: j,
            orientation: d.Gl.HORIZONTAL,
            scrollToStart: () => Promise.resolve(),
            scrollToEnd: () => Promise.resolve(),
        });
    return (0, r.jsx)(s.animated.div, {
        className: O.jC,
        onMouseLeave: () => {
            i || j || n();
        },
        onFocus: (e) => {
            e.target.scrollIntoView(R);
        },
        style: g,
        children: (0, r.jsx)(h.IpV, {
            orientation: "horizontal",
            className: O.SW,
            paddingFix: !1,
            fade: !0,
            children: (0, r.jsx)(c.hD, {
                navigator: y,
                children: (0, r.jsx)(c.PR, {
                    children: (e) => {
                        let { ref: n } = e,
                            l = (function (e, t) {
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
                            "div",
                            S(
                                T(
                                    {
                                        className: O.p8,
                                        ref: n,
                                    },
                                    l,
                                ),
                                {
                                    children: [
                                        v.map((e) =>
                                            (0, r.jsx)(
                                                b.A,
                                                {
                                                    channelId: t,
                                                    draftType: x.oU.CREATE_FORUM_POST.drafts.type,
                                                    upload: e,
                                                    keyboardModeEnabled: j,
                                                    hideFileName: !0,
                                                    size: p.L.SMALL,
                                                },
                                                e.id,
                                            ),
                                        ),
                                        (0, r.jsx)(D, {
                                            channelId: t,
                                            setFileInputOpen: a,
                                        }),
                                    ],
                                },
                            ),
                        );
                    },
                }),
            }),
        }),
    });
}

function D(e) {
    let { channelId: t, setFileInputOpen: n } = e,
        l = S(T({}, (0, c.rm)("upload-button")), {
            tabIndex: 0,
        });
    return (0, r.jsx)(k, {
        channelId: t,
        onClick: () => {
            n(!0);
        },
        onClose: () => {
            n(!1),
                requestAnimationFrame(() => {
                    (0, u.vq)(document.activeElement, HTMLElement) && document.activeElement.scrollIntoView(R);
                });
        },
        listItemProps: l,
    });
}

function L(e) {
    let { channelId: t } = e,
        [n, i] = l.useState(!1),
        a = l.useRef(null),
        s = (0, m.bG)([_.A], () => _.A.getUploads(t, x.oU.CREATE_FORUM_POST.drafts.type)),
        o = s.length,
        c = o > 0;
    l.useEffect(() => {
        n && !c && i(!1);
    }, [n, c]),
        l.useEffect(() => {
            if (document.activeElement !== document.body && null != document.activeElement) return;
            i(o > 0);
            let e = requestAnimationFrame(() => {
                var e;
                let t = null == (e = a.current) ? void 0 : e.querySelector(P);
                null == t || t.focus();
            });
            return () => cancelAnimationFrame(e);
        }, [o]);
    let d = () => {
            c && i(!0);
        },
        u = () => {
            i(!1);
        };
    return (0, r.jsxs)("div", {
        className: O.kL,
        ref: a,
        onBlur: (e) => {
            var t, n;
            null == e.relatedTarget ||
                (null == (t = a.current) ? void 0 : t.contains(e.relatedTarget)) ||
                ((null == (n = e.relatedTarget) ? void 0 : n.closest('[role="dialog"]')) == null && u());
        },
        children: [
            c
                ? !n &&
                  (0, r.jsxs)(h.DUT, {
                      "aria-label": C.intl.string(C.t.nzoF5p),
                      className: O.fY,
                      tabIndex: 0,
                      onClick: d,
                      onFocus: () => {
                          d(),
                              c &&
                                  requestAnimationFrame(() => {
                                      var e;
                                      let t = null == (e = a.current) ? void 0 : e.querySelector(P);
                                      null == t || t.focus();
                                  });
                      },
                      onMouseEnter: d,
                      children: [
                          (0, r.jsx)(b.J, {
                              upload: s[0],
                              size: p.L.SMALL,
                          }),
                          (0, r.jsx)("div", {
                              className: O.qS,
                              children: o,
                          }),
                      ],
                  })
                : (0, r.jsx)(k, {
                      onMouseEnter: d,
                      channelId: t,
                  }),
            n &&
                (0, r.jsx)(M, {
                    channelId: t,
                    closePopout: u,
                }),
        ],
    });
}
