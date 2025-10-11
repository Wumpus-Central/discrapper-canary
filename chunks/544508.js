n.d(t, { Z: () => v }), n(388685), n(704826), n(35282);
var r = n(951288),
    i = n(647438),
    o = n(120356),
    a = n.n(o),
    s = n(137317),
    l = n(399606),
    c = n(481060),
    u = n(607070),
    d = n(745510),
    m = n(899007),
    g = n(867176),
    f = n(51144),
    E = n(346585),
    p = n(81259),
    y = n(119848),
    O = n(801461),
    h = n(671955),
    b = n(388032),
    S = n(631936),
    _ = n(733469);
let v = i.forwardRef(function (e, t) {
    let {
            user: n,
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
        D = i.useMemo(() => n.merge({ discriminator: "0000" }), [n]),
        [k, Z] = (0, c.q_F)(() => ({
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
                I === O.Wq.PREVIEW &&
                n.username.includes(O.nA) &&
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
        }, [G, I, n, U]),
        (0, r.jsxs)("div", {
            className: a()(S.userCardContainer, { [S.shinyCard]: I === O.Wq.PREVIEW }),
            children: [
                (0, r.jsxs)("div", {
                    className: S.profileCard,
                    children: [
                        (0, r.jsx)(g.Z, {
                            user: D,
                            displayProfile: j,
                            themeType: h.l.SIDEBAR,
                        }),
                        (0, r.jsx)(m.Z, {
                            user: D,
                            displayProfile: j,
                            themeType: h.l.SIDEBAR,
                            className: S.avatar,
                        }),
                        I === O.Wq.PREVIEW &&
                            null != W &&
                            (0, r.jsx)("div", {
                                className: S.legacyUsernameBadgeContainer,
                                children: (0, r.jsx)(c.ua7, {
                                    "data-migration-pending": !0,
                                    position: "top",
                                    text: b.intl.formatToPlainString(b.t.bhrgkJ, { legacyUsername: W }),
                                    spacing: 12,
                                    children: (e) => {
                                        var t, n;
                                        return (0, r.jsx)(
                                            c.Anchor,
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
                                            })({}, e)),
                                            (n = n =
                                                {
                                                    onClick: e.onClick,
                                                    children: (0, r.jsx)("img", {
                                                        className: S.legacyUsernameBadge,
                                                        alt: "",
                                                        src: _,
                                                    }),
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
                                                      Object.defineProperty(
                                                          t,
                                                          e,
                                                          Object.getOwnPropertyDescriptor(n, e),
                                                      );
                                                  }),
                                            t),
                                        );
                                    },
                                }),
                            }),
                    ],
                }),
                I !== O.Wq.PREVIEW &&
                    (0, r.jsxs)(s.animated.div, {
                        style: {
                            opacity: k.opacity,
                            y: k.y,
                        },
                        className: S.inputContainer,
                        children: [
                            (0, r.jsxs)(c.Kqy, {
                                gap: 16,
                                children: [
                                    I === O.Wq.EDIT_DISPLAY_NAME &&
                                        (0, r.jsx)(c.oil, {
                                            label: b.intl.string(b.t["9AjdkJ"]),
                                            value: null != w ? w : "",
                                            placeholder: f.ZP.getName(n),
                                            maxLength: O.hy,
                                            onChange: (e) => N({ globalName: e }),
                                            onFocus: x,
                                            inputRef: L,
                                        }),
                                    (I === O.Wq.EDIT_USERNAME || I === O.Wq.SUGGESTION) &&
                                        (0, r.jsx)(c.oil, {
                                            label: b.intl.string(b.t.IEpCBQ),
                                            leading: "@",
                                            value: null != R ? R : "",
                                            placeholder: n.username,
                                            maxLength: O.hy,
                                            onChange: (e) => N({ username: e.replace("@", "") }),
                                            onFocus: T,
                                            inputRef: M,
                                        }),
                                ],
                            }),
                            (0, r.jsx)("div", {
                                className: S.messageContainer,
                                children: (() => {
                                    if (null != o)
                                        return (0, r.jsx)(p.Z, {
                                            type: "error",
                                            children: o,
                                        });
                                    if (null != P) {
                                        if (I !== O.Wq.SUGGESTION)
                                            return (0, r.jsx)(c.Text, {
                                                variant: "text-sm/normal",
                                                children: P,
                                            });
                                        else if (!C)
                                            return (0, r.jsx)(p.Z, {
                                                type: "success",
                                                children: P,
                                            });
                                    }
                                    return null == P && null == o && (I === O.Wq.EDIT_USERNAME || I === O.Wq.SUGGESTION)
                                        ? (0, r.jsx)(y.Z, {
                                              username: R,
                                              oneClickFlow: A,
                                          })
                                        : null;
                                })(),
                            }),
                        ],
                    }),
                I === O.Wq.PREVIEW &&
                    (0, r.jsxs)("div", {
                        className: S.userCard,
                        children: [
                            (0, r.jsx)(c.Heading, {
                                color: "header-primary",
                                variant: "heading-xl/bold",
                                children: f.ZP.getName(n),
                            }),
                            (0, r.jsx)(c.Heading, {
                                color: "text-default",
                                variant: "heading-lg/medium",
                                children: n.username,
                            }),
                            (0, r.jsx)(c.Text, {
                                className: S.memberText,
                                color: "text-muted",
                                variant: "text-sm/medium",
                                children: b.intl.format(b.t["9rfonp"], { date: (0, E.K9)(n.id) }),
                            }),
                        ],
                    }),
            ],
        })
    );
});
