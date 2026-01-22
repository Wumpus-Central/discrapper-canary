n.d(t, {
    A: () => P,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(417597),
    o = n(554146),
    c = n(621956),
    u = n(990078),
    d = n(421380),
    p = n(397927),
    f = n(442433),
    h = n(793574),
    A = n(688810),
    g = n(384059),
    m = n(480890),
    b = n(160761),
    _ = n(173660),
    E = n(430452),
    O = n(234320),
    y = n(536432),
    I = n(674168),
    v = n(989799),
    S = n(652215),
    C = n(49999),
    N = n(985018),
    T = n(255259);

function j(e) {
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

function x(e, t) {
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

function P(e) {
    let { channel: t } = e,
        l = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i,
                l = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
                    (r = n[i]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                return l;
            }
            if (
                ((l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.getOwnPropertyNames(e);
                    for (r = 0; r < l.length; r++)
                        (n = l[r]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                    return i;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                    (r = n[i]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
            return l;
        })(e, ["channel"]),
        P = i.useRef(null),
        { mute: w, suppress: L } = (0, _.A)(t),
        R = (0, s.bG)([E.A], () => E.A.isDeaf()),
        D = w || L || R,
        [M, k] = i.useState(!1),
        U = t.getGuildId(),
        G = (0, y.VE)({
            isSoundboardButtonDisabled: D,
        }),
        [V, B] = (0, b.DP)(G),
        { analyticsLocations: H, parentAnalyticsLocation: F } = (0, A.Ay)(h.A.SOUNDBOARD_BUTTON);

    function Y(e) {
        null != U &&
            (0, f.L3)(e, async () => {
                let { default: e } = await n.e("51111").then(n.bind(n, 323002));
                return (t) =>
                    (0, r.jsx)(
                        e,
                        x(
                            j(
                                {
                                    guildId: U,
                                    sourceAnalyticsLocations: H,
                                },
                                t,
                            ),
                            {
                                onInteraction: (0, m.s)("SoundboardContextMenu", h.A.RTC_PANEL),
                            },
                        ),
                    );
            });
    }
    let {
            Component: K,
            play: z,
            events: { onMouseEnter: W, onMouseLeave: q },
        } = (0, c.E)(),
        Q = i.useCallback(() => {
            D || k(!M);
        }, [D, M]);
    return (
        (0, O.Vo)({
            event: S.jej.TOGGLE_SOUNDBOARD,
            handler: Q,
        }),
        (0, r.jsx)(A.f5, {
            value: H,
            children: (0, r.jsx)(u.m, {
                targetElementRef: P,
                text: w
                    ? N.intl.string(N.t["Ox4/zU"])
                    : L
                      ? N.intl.string(N.t["+YBKYI"])
                      : R
                        ? N.intl.string(N.t.X1lQli)
                        : N.intl.string(N.t["6EJvHt"]),
                asContainer: !0,
                shouldShow: !M,
                children: (0, r.jsx)(p.YNO, {
                    targetElementRef: P,
                    animation: p.YNO.Animation.FADE,
                    shouldShow: M,
                    position: "top",
                    onRequestClose: () => k(!1),
                    renderPopout: (e) => {
                        let { closePopout: n } = e;
                        return (0, r.jsx)(v.A, {
                            guildId: U,
                            channel: t,
                            onClose: n,
                            gridNotice:
                                V === o.M.CUSTOM_CALL_SOUNDS_PICKER_UPSELL &&
                                (0, r.jsx)(I.m, {
                                    onClose: n,
                                    markAsDismissed: B,
                                }),
                            analyticsSource: "rtc panel",
                        });
                    },
                    children: (e) =>
                        (0, r.jsx)("div", {
                            ref: P,
                            children: (0, r.jsx)(
                                d.$n,
                                x(
                                    j(
                                        x(
                                            j(
                                                {
                                                    "data-migration-pending": !0,
                                                },
                                                e,
                                            ),
                                            {
                                                className: a()(T.x6, T.Sq, {
                                                    [T.W4]: M,
                                                    [T.r9]: D,
                                                }),
                                                wrapperClassName: T.x6,
                                                innerClassName: T.bk,
                                                disabled: D,
                                                onClick: () => {
                                                    null != V &&
                                                        V !== o.M.CUSTOM_CALL_SOUNDS_PICKER_UPSELL &&
                                                        B(C.i.UNKNOWN),
                                                        k(!M),
                                                        z(),
                                                        (0, g.X)(F, g.O.SOUNDBOARD);
                                                },
                                                onMouseEnter: (e) => {
                                                    var t;
                                                    null == (t = l.onMouseEnter) || t.call(l, e), W();
                                                },
                                                onMouseLeave: (e) => {
                                                    var t;
                                                    null == (t = l.onMouseLeave) || t.call(l, e), q();
                                                },
                                                onContextMenu: Y,
                                                fullWidth: !0,
                                                size: d.$n.Sizes.MEDIUM,
                                            },
                                        ),
                                        l,
                                    ),
                                    {
                                        children: (0, r.jsx)(K, {
                                            className: T.iA,
                                            size: "sm",
                                            color: "currentColor",
                                        }),
                                    },
                                ),
                            ),
                        }),
                }),
            }),
        })
    );
}
