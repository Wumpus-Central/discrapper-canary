r.d(t, { Z: () => v }), r(388685), r(704826), r(35282);
var n = r(951288),
    i = r(647438),
    o = r(120356),
    a = r.n(o),
    s = r(261616),
    l = r(399606),
    c = r(481060),
    u = r(607070),
    d = r(745510),
    m = r(899007),
    f = r(867176),
    g = r(51144),
    E = r(346585),
    p = r(81259),
    O = r(119848),
    y = r(801461),
    h = r(671955),
    b = r(388032),
    S = r(631936),
    _ = r(733469);
let v = i.forwardRef(function (e, t) {
    let {
            user: r,
            error: o,
            formValues: v,
            displayProfile: j,
            onChangeFormValue: N,
            onFocusDisplayName: x,
            onFocusUsername: T,
            editState: I,
            footerNotice: P,
            usernameSuggestionLoading: C,
            oneClickFlow: A,
        } = e,
        { username: R, globalName: w } = v,
        M = i.useRef(null),
        L = i.useRef(null),
        k = i.useMemo(() => r.merge({ discriminator: "0000" }), [r]),
        [D, Z] = (0, c.q_F)(() => ({
            opacity: 0,
            y: 5,
        }));
    i.useEffect(() => {
        Z({
            y: 0,
            opacity: 1,
            from: {
                y: 5,
                opacity: 0,
            },
        });
    }, [Z, I]),
        i.useImperativeHandle(
            t,
            () => ({
                focusDisplayName: () => {
                    var e;
                    null == (e = L.current) || e.focus();
                },
                focusUsername: () => {
                    var e;
                    null == (e = M.current) || e.focus();
                },
            }),
            [],
        );
    let U = (0, l.e7)([u.Z], () => u.Z.useReducedMotion),
        { createMultipleConfettiAt: G } = i.useContext(d.h),
        W = null == j ? void 0 : j.getLegacyUsername();
    return (
        i.useEffect(() => {
            !U &&
                I === y.Wq.PREVIEW &&
                r.username.includes(y.nA) &&
                (G(
                    window.innerWidth / 2 + 150,
                    0,
                    {
                        velocity: {
                            type: "static-random",
                            minValue: {
                                x: 0,
                                y: -180,
                            },
                            maxValue: {
                                x: 500,
                                y: 180,
                            },
                        },
                    },
                    15,
                ),
                G(
                    window.innerWidth / 2 - 150,
                    0,
                    {
                        velocity: {
                            type: "static-random",
                            minValue: {
                                x: -500,
                                y: -180,
                            },
                            maxValue: {
                                x: 0,
                                y: 180,
                            },
                        },
                    },
                    15,
                ));
        }, [G, I, r, U]),
        (0, n.jsxs)("div", {
            className: a()(S.userCardContainer, { [S.shinyCard]: I === y.Wq.PREVIEW }),
            children: [
                (0, n.jsxs)("div", {
                    className: S.profileCard,
                    children: [
                        (0, n.jsx)(f.Z, {
                            user: k,
                            displayProfile: j,
                            themeType: h.l.SIDEBAR,
                        }),
                        (0, n.jsx)(m.Z, {
                            user: k,
                            displayProfile: j,
                            themeType: h.l.SIDEBAR,
                            className: S.avatar,
                        }),
                        I === y.Wq.PREVIEW &&
                            null != W &&
                            (0, n.jsx)("div", {
                                className: S.legacyUsernameBadgeContainer,
                                children: (0, n.jsx)(c.ua7, {
                                    position: "top",
                                    text: b.intl.formatToPlainString(b.t.bhrgkJ, { legacyUsername: W }),
                                    spacing: 12,
                                    children: (e) => {
                                        var t, r;
                                        return (0, n.jsx)(
                                            c.eee,
                                            ((t = (function (e) {
                                                for (var t = 1; t < arguments.length; t++) {
                                                    var r = null != arguments[t] ? arguments[t] : {},
                                                        n = Object.keys(r);
                                                    "function" == typeof Object.getOwnPropertySymbols &&
                                                        (n = n.concat(
                                                            Object.getOwnPropertySymbols(r).filter(function (e) {
                                                                return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                                            }),
                                                        )),
                                                        n.forEach(function (t) {
                                                            var n;
                                                            (n = r[t]),
                                                                t in e
                                                                    ? Object.defineProperty(e, t, {
                                                                          value: n,
                                                                          enumerable: !0,
                                                                          configurable: !0,
                                                                          writable: !0,
                                                                      })
                                                                    : (e[t] = n);
                                                        });
                                                }
                                                return e;
                                            })({}, e)),
                                            (r = r =
                                                {
                                                    onClick: e.onClick,
                                                    children: (0, n.jsx)("img", {
                                                        className: S.legacyUsernameBadge,
                                                        alt: "",
                                                        src: _,
                                                    }),
                                                }),
                                            Object.getOwnPropertyDescriptors
                                                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                                                : (function (e, t) {
                                                      var r = Object.keys(e);
                                                      if (Object.getOwnPropertySymbols) {
                                                          var n = Object.getOwnPropertySymbols(e);
                                                          r.push.apply(r, n);
                                                      }
                                                      return r;
                                                  })(Object(r)).forEach(function (e) {
                                                      Object.defineProperty(
                                                          t,
                                                          e,
                                                          Object.getOwnPropertyDescriptor(r, e),
                                                      );
                                                  }),
                                            t),
                                        );
                                    },
                                }),
                            }),
                    ],
                }),
                I !== y.Wq.PREVIEW &&
                    (0, n.jsxs)(s.animated.div, {
                        style: {
                            opacity: D.opacity,
                            y: D.y,
                        },
                        className: S.inputContainer,
                        children: [
                            (0, n.jsxs)(c.Kqy, {
                                gap: 16,
                                children: [
                                    I === y.Wq.EDIT_DISPLAY_NAME &&
                                        (0, n.jsx)(c.oil, {
                                            label: b.intl.string(b.t["9AjdkJ"]),
                                            value: null != w ? w : "",
                                            placeholder: g.ZP.getName(r),
                                            maxLength: y.hy,
                                            onChange: (e) => N({ globalName: e }),
                                            onFocus: x,
                                            inputRef: L,
                                        }),
                                    (I === y.Wq.EDIT_USERNAME || I === y.Wq.SUGGESTION) &&
                                        (0, n.jsx)(c.oil, {
                                            label: b.intl.string(b.t.IEpCBQ),
                                            leading: "@",
                                            value: null != R ? R : "",
                                            placeholder: r.username,
                                            maxLength: y.hy,
                                            onChange: (e) => N({ username: e.replace("@", "") }),
                                            onFocus: T,
                                            inputRef: M,
                                        }),
                                ],
                            }),
                            (0, n.jsx)("div", {
                                className: S.messageContainer,
                                children: (() => {
                                    if (null != o)
                                        return (0, n.jsx)(p.Z, {
                                            type: "error",
                                            children: o,
                                        });
                                    if (null != P) {
                                        if (I !== y.Wq.SUGGESTION)
                                            return (0, n.jsx)(c.Text, {
                                                variant: "text-sm/normal",
                                                children: P,
                                            });
                                        else if (!C)
                                            return (0, n.jsx)(p.Z, {
                                                type: "success",
                                                children: P,
                                            });
                                    }
                                    return null == P && null == o && (I === y.Wq.EDIT_USERNAME || I === y.Wq.SUGGESTION)
                                        ? (0, n.jsx)(O.Z, {
                                              username: R,
                                              oneClickFlow: A,
                                          })
                                        : null;
                                })(),
                            }),
                        ],
                    }),
                I === y.Wq.PREVIEW &&
                    (0, n.jsxs)("div", {
                        className: S.userCard,
                        children: [
                            (0, n.jsx)(c.X6q, {
                                color: "header-primary",
                                variant: "heading-xl/bold",
                                children: g.ZP.getName(r),
                            }),
                            (0, n.jsx)(c.X6q, {
                                color: "text-default",
                                variant: "heading-lg/medium",
                                children: r.username,
                            }),
                            (0, n.jsx)(c.Text, {
                                className: S.memberText,
                                color: "text-muted",
                                variant: "text-sm/medium",
                                children: b.intl.format(b.t["9rfonp"], { date: (0, E.K9)(r.id) }),
                            }),
                        ],
                    }),
            ],
        })
    );
});
