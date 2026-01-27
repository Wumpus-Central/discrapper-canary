n.d(t, {
    A: () => et,
}),
    n(638769);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(989349),
    o = n.n(s),
    c = n(837381),
    u = n(311907),
    d = n(827734),
    p = n(990078),
    m = n(397927),
    f = n(956793),
    g = n(775602),
    h = n(709066),
    _ = n(845625),
    b = n(785823),
    A = n(449585),
    y = n(137207),
    v = n(22007),
    x = n(378570),
    O = n(589022),
    E = n(576705),
    j = n(287809),
    C = n(562153),
    I = n(427262),
    S = n(465364),
    T = n(763754),
    N = n(901057),
    P = n(936044),
    w = n(643204),
    R = n(535421),
    D = n(112758),
    L = n(754459),
    M = n(809115),
    k = n(888675),
    U = n(381941),
    G = n(652215),
    B = n(705751),
    F = n(200700),
    H = n(985018),
    V = n(906135);

function z(e) {
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

function W(e, t) {
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

function K(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        l = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
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
                (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            return i;
        })(e, t)),
        Object.getOwnPropertySymbols)
    )
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
    return l;
}

function Y(e, t) {
    let { popouts: n, selected: r, setPopout: l } = (0, L.A)(e.id, U.Fd),
        { usernameProfile: a, avatarProfile: s } = n,
        o = (0, D.r4)(e.author.id, t.id),
        c = (0, D.UY)(e.author.id, t.id, e.id),
        u = (0, D.m)(e, t, a, l);
    return {
        selected: r,
        onContextMenu: o,
        onContextMenuModerateUser: c,
        onClickUsername: u,
        onClickAvatar: (0, D.Jo)(s, l),
        onPopoutRequestClose: i.useCallback(
            () =>
                l({
                    usernameProfile: !1,
                    avatarProfile: !1,
                    referencedUsernameProfile: !1,
                }),
            [l],
        ),
        renderPopout: R.A,
        showAvatarPopout: s,
        showUsernamePopout: a,
    };
}

function q(e, t, n) {
    return i.useMemo(() => {
        if (null != t && null != n)
            return (i) =>
                (0, r.jsx)(
                    O.A,
                    W(z({}, i), {
                        user: t,
                        currentUser: n,
                        guildId: e.guild_id,
                        channelId: e.id,
                    }),
                );
    }, [e, t, n]);
}

function J(e) {
    let { children: t, className: n, compact: i } = e;
    return (0, r.jsx)("div", {
        className: a()(V.xQ, n, {
            [V.oE]: i,
        }),
        children: t,
    });
}

function Q(e) {
    let { children: t, className: n } = e;
    return (0, r.jsx)("div", {
        className: a()(V.A3, n),
        children: t,
    });
}

function Z(e) {
    switch (e) {
        case _.G.DELETE_USER_MESSAGE:
            return (0, r.jsx)(m.ucK, {
                size: "xs",
                color: "currentColor",
                className: V.yr,
            });
        case _.G.SET_COMPLETED:
            return (0, r.jsx)(m.A9s, {
                size: "xs",
                color: "currentColor",
                className: a()(V.yr, V.r0),
            });
        case _.G.SUBMIT_FEEDBACK:
            return (0, r.jsx)(m.iFK, {
                size: "xs",
                color: "currentColor",
                className: V.yr,
            });
        default:
            return null;
    }
}

function X(e) {
    let { alertAction: t, guildId: n } = e,
        i = (0, u.bG)([j.default], () => j.default.getUser(t.actor), [t.actor]);
    try {
        let e = parseInt(t.actionType);
        if (null == i) return Z(e);
        let l = (function (e, t, n) {
            var r;
            let i = null != (r = C.Ay.getNickname(n, null, t)) ? r : I.Ay.getUserTag(t),
                l = o()(e.ts),
                a = "".concat(i, " ").concat(l.fromNow());
            try {
                switch (parseInt(e.actionType)) {
                    case _.G.DELETE_USER_MESSAGE:
                        return H.intl.formatToPlainString(H.t.BtKE9h, {
                            userName: i,
                            timestamp: l.fromNow(),
                        });
                    case _.G.SET_COMPLETED:
                        return H.intl.formatToPlainString(H.t.dyo9US, {
                            userName: i,
                            timestamp: l.fromNow(),
                        });
                    case _.G.SUBMIT_FEEDBACK:
                        return H.intl.formatToPlainString(H.t["C9/kIO"], {
                            userName: i,
                            timestamp: l.fromNow(),
                        });
                    default:
                        return a;
                }
            } catch (e) {
                return a;
            }
        })(t, i, n);
        return (0, r.jsx)(p.m, {
            text: l,
            children: Z(e),
        });
    } catch (e) {
        return null;
    }
}

function $(e) {
    let { alertActionsExecution: t, guildId: n } = e,
        i = Object.values(t.actions).sort((e, t) => (e.actionType < t.actionType ? 1 : -1));
    return (0, r.jsx)("div", {
        className: V.q_,
        children: i.map((e) =>
            (0, r.jsx)(
                X,
                {
                    alertAction: e,
                    guildId: n,
                },
                e.actionType,
            ),
        ),
    });
}
let ee = i.memo(function (e) {
    let t,
        { message: n, channel: i, embedChannel: l, compact: a, interactionUserId: s } = e,
        o = Y(n, i),
        c = q(i, n.author),
        u = (0, T.Ay)(n),
        d = (0, w.tO)(
            z(
                {
                    message: n,
                    channel: i,
                    author: u,
                    guildId: null == i ? void 0 : i.guild_id,
                    compact: a,
                },
                o,
            ),
            c,
        ),
        p = j.default.getUser(s),
        f = Y(n, i),
        g = q(i, p, j.default.getCurrentUser());
    if (null != p) {
        let e = (0, T.FT)(p, i),
            r = (0, w.tO)(
                z(
                    {
                        message: n,
                        channel: i,
                        author: e,
                        guildId: null == i ? void 0 : i.guild_id,
                        compact: a,
                    },
                    f,
                ),
                g,
            );
        t = () => r;
    }
    return (0, r.jsx)(m.Text, {
        variant: "text-md/normal",
        color: "text-strong",
        tag: "span",
        className: V.he,
        children: (0, b.fu)(
            n,
            l,
            () =>
                (0, r.jsx)("div", {
                    className: V.aT,
                    children: (0, r.jsx)(N.A, {
                        channel: l,
                        className: V.HA,
                        openChatWithoutConnecting: !0,
                    }),
                }),
            () => d,
            t,
        ),
    });
});

function et(e) {
    var t;
    let { id: n, compact: l, message: s, channel: o } = e,
        {
            avatarSrc: p,
            eventHandlers: { onMouseEnter: O, onMouseLeave: j },
        } = (0, M.a)(!0),
        C = (0, c.rm)(null != n ? n : ""),
        { onFocus: I } = C,
        T = K(C, ["onFocus"]),
        { isFocused: N, handleFocus: R, handleBlur: L } = (0, D.G8)(I),
        U = (0, u.bG)([g.A], () => g.A.keyboardModeEnabled),
        q = (0, u.bG)([E.A], () => E.A.can(G.xBc.MANAGE_MESSAGES, o), [o]),
        {
            ruleName: Z,
            embedChannel: X,
            decisionId: et,
            keywordMatchedContent: en,
            keyword: er,
            content: ei,
            flaggedMessageId: el,
            timeoutDuration: ea,
            decisionReason: es,
            alertActionsExecution: eo,
            quarantineType: ec,
            interactionUserId: eu,
        } = (0, b.Ay)(s),
        ed = i.useMemo(() => (0, S.Tz)(ei, en, o.id), [ei, en, o]),
        ep = Y(s, o),
        { selected: em } = ep,
        ef = K(ep, ["selected"]),
        eg = i.useCallback(() => {
            (0, A.w2)(s.id, ei, et, o);
        }, [s.id, ei, et, o]),
        eh = i.useCallback(
            (e) => {
                null != el &&
                    null != X &&
                    (e.stopPropagation(),
                    e.preventDefault(),
                    (0, v.A)(G.BVt.CHANNEL(null == X ? void 0 : X.guild_id, null == X ? void 0 : X.id, el)));
            },
            [X, el],
        ),
        e_ = i.useCallback(
            (e) => {
                null != X &&
                    (f.default.selectChannel({
                        guildId: X.guild_id,
                        channelId: e,
                        messageId: s.id,
                    }),
                    (0, x.iN)(e));
            },
            [s, X],
        ),
        eb = i.useCallback(() => {
            (0, y.E5)(s.id, o, _.G.DELETE_USER_MESSAGE);
        }, [o, s.id]),
        eA = (0, F.getFriendlyDurationString)(Number(ea)),
        ey = null != es,
        ev = q && null != el && (null == eo || !eo.actions.hasOwnProperty(_.G.DELETE_USER_MESSAGE)),
        ex =
            s.embeds.length > 0
                ? null == (t = s.embeds[0].fields.find((e) => "channel_id" === e.rawName))
                    ? void 0
                    : t.rawValue
                : null,
        eO = null != ex;
    return (0, r.jsx)("div", {
        onMouseEnter: O,
        onMouseLeave: j,
        children: (0, r.jsx)(k.A, {
            className: a()(V.rs, {
                [V.oE]: l,
            }),
            iconNode: l
                ? null
                : (0, r.jsx)(M.l, {
                      src: p,
                  }),
            iconContainerClassName: V.zc,
            compact: l,
            children: (0, r.jsxs)("div", {
                className: a()(V.Qs, {
                    [V.oE]: l,
                }),
                children: [
                    (0, r.jsx)(w.ix, {
                        message: s,
                        messageClassname: V.he,
                        className: a()(V.QV, V.he, {
                            [V.oE]: l,
                        }),
                        username: (0, r.jsxs)("div", {
                            className: V.he,
                            children: [
                                (0, r.jsx)(m.Text, {
                                    variant: "text-md/normal",
                                    color: "text-brand",
                                    tag: "span",
                                    className: V.Xh,
                                    children: H.intl.string(H.t.hG1StD),
                                }),
                                (0, r.jsx)(h.A, {
                                    type: B.nu.SYSTEM_DM,
                                    className: V.Al,
                                }),
                                (0, r.jsx)(ee, {
                                    message: s,
                                    channel: o,
                                    embedChannel: X,
                                    compact: l,
                                    interactionUserId: eu,
                                }),
                            ],
                        }),
                        compact: l,
                        showTimestamp: !0,
                    }),
                    (0, r.jsx)("div", {
                        className: a()(V.BK, {
                            [V.oE]: l,
                        }),
                        children: (0, r.jsx)(
                            P.A,
                            W(z({}, T), {
                                message: s,
                                channel: X,
                                content: ed,
                                compact: l,
                                withFooter: !0,
                                hideTimestamp: !0,
                                className: a()(V.gD, {
                                    [V.oE]: l,
                                    [V.wH]: em || (U && N),
                                    [V.JD]: null != el && null != X,
                                }),
                                childrenAccessories: (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsxs)("div", {
                                            className: V.Y4,
                                            children: [
                                                null != er &&
                                                    (0, r.jsxs)(r.Fragment, {
                                                        children: [
                                                            (0, r.jsx)(m.Text, {
                                                                variant: "text-xs/medium",
                                                                color: "text-muted",
                                                                tag: "span",
                                                                children: H.intl.format(H.t.SYIUTR, {
                                                                    keyword: er,
                                                                }),
                                                            }),
                                                            (0, r.jsx)("div", {
                                                                className: a()(V.Om, V.Gx),
                                                            }),
                                                        ],
                                                    }),
                                                null != Z &&
                                                    (0, r.jsx)(m.Text, {
                                                        variant: "text-xs/medium",
                                                        color: "text-muted",
                                                        tag: "span",
                                                        children: H.intl.format(H.t.ZoOyKB, {
                                                            ruleName: Z,
                                                        }),
                                                    }),
                                                null != eA &&
                                                    (0, r.jsxs)(r.Fragment, {
                                                        children: [
                                                            (0, r.jsx)("div", {
                                                                className: a()(V.Om, V.Gx),
                                                            }),
                                                            (0, r.jsx)(m.Text, {
                                                                variant: "text-xs/medium",
                                                                color: "text-muted",
                                                                tag: "span",
                                                                className: V.__invalid_footerText,
                                                                children: H.intl.format(H.t["3LYql6"], {
                                                                    duration: eA,
                                                                }),
                                                            }),
                                                        ],
                                                    }),
                                                null != ec &&
                                                    (0, r.jsxs)(r.Fragment, {
                                                        children: [
                                                            (0, r.jsx)("div", {
                                                                className: a()(V.Om, V.Gx),
                                                            }),
                                                            (0, r.jsx)(m.Text, {
                                                                variant: "text-xs/medium",
                                                                color: "text-muted",
                                                                tag: "span",
                                                                className: V.nx,
                                                                children: H.intl.format(H.t["26bB2M"], {
                                                                    reason: (0, b.o2)(ec),
                                                                }),
                                                            }),
                                                        ],
                                                    }),
                                            ],
                                        }),
                                        ey
                                            ? (0, r.jsx)(Q, {
                                                  children: (0, r.jsx)(m.Text, {
                                                      variant: "text-xs/medium",
                                                      color: "text-default",
                                                      tag: "span",
                                                      children: es,
                                                  }),
                                              })
                                            : null,
                                    ],
                                }),
                                popoutProps: ef,
                                zalgo: !0,
                                onFocus: R,
                                onBlur: L,
                                onClick: eh,
                            }),
                        ),
                    }),
                    (0, r.jsx)(J, {
                        compact: l,
                        children: (0, r.jsxs)("div", {
                            className: a()(V.Y4, V.UD, {
                                [V.oE]: l,
                            }),
                            children: [
                                (0, r.jsxs)("div", {
                                    className: V.AX,
                                    children: [
                                        (0, r.jsx)(m.lmn, {
                                            size: "xs",
                                            color: d.A.unsafe_rawColors.BRAND_500.css,
                                            className: V.Dq,
                                        }),
                                        (0, r.jsx)(m.QWc, {
                                            variant: "primary",
                                            size: "sm",
                                            textVariant: "text-xs/normal",
                                            text: H.intl.string(H.t.DEoVWZ),
                                            onClick: (e) => {
                                                var t;
                                                null == (t = ef.onContextMenuModerateUser) || t.call(ef, e);
                                            },
                                        }),
                                    ],
                                }),
                                eO
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)("div", {
                                                  className: V.Om,
                                              }),
                                              (0, r.jsx)("div", {
                                                  className: V.AX,
                                                  children: (0, r.jsx)(m.QWc, {
                                                      onClick: () => e_(ex),
                                                      variant: "primary",
                                                      size: "sm",
                                                      textVariant: "text-xs/normal",
                                                      text: H.intl.string(H.t.jtkj06),
                                                  }),
                                              }),
                                          ],
                                      })
                                    : null,
                                (0, r.jsx)("div", {
                                    className: V.Om,
                                }),
                                (0, r.jsx)("div", {
                                    className: V.AX,
                                    children: (0, r.jsx)(m.QWc, {
                                        onClick: eg,
                                        variant: "primary",
                                        size: "sm",
                                        textVariant: "text-xs/normal",
                                        text: H.intl.string(H.t["94JbM3"]),
                                    }),
                                }),
                                ev
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)("div", {
                                                  className: V.Om,
                                              }),
                                              (0, r.jsx)("div", {
                                                  className: V.AX,
                                                  children: (0, r.jsx)(m.QWc, {
                                                      onClick: eb,
                                                      variant: "primary",
                                                      size: "sm",
                                                      textVariant: "text-xs/normal",
                                                      text: H.intl.string(H.t["3A52tY"]),
                                                  }),
                                              }),
                                          ],
                                      })
                                    : null,
                                null != eo
                                    ? (0, r.jsx)($, {
                                          alertActionsExecution: eo,
                                          guildId: o.guild_id,
                                      })
                                    : null,
                            ],
                        }),
                    }),
                ],
            }),
        }),
    });
}
