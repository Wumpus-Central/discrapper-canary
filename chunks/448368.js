t.d(s, {
    A: () => L,
    o: () => k,
}),
    t(896048);
var n = t(627968),
    l = t(64700),
    a = t(503698),
    i = t.n(a),
    r = t(989349),
    o = t.n(r),
    c = t(397927),
    u = t(793574),
    m = t(688810),
    d = t(659859),
    h = t(427930),
    g = t(387408),
    p = t(427209),
    j = t(969632),
    A = t(9842),
    x = t(697474),
    N = t(378058),
    C = t(486020),
    f = t(405269),
    v = t(403362),
    E = t(860227),
    I = t(291812),
    O = t(943220),
    y = t(943815),
    _ = t(838541),
    M = t(652215),
    S = t(985018),
    T = t(679740),
    b = t(206314);

function P(e) {
    let { width: s = 12, height: t = 8, color: l = "currentColor", className: a, foreground: i } = e;
    return (0, n.jsx)("svg", {
        className: a,
        width: s,
        height: t,
        viewBox: "0 0 12 8",
        children: (0, n.jsx)("path", {
            d: "M0.809739 3.59646L5.12565 0.468433C5.17446 0.431163 5.23323 0.408043 5.2951 0.401763C5.35698 0.395482 5.41943 0.406298 5.4752 0.432954C5.53096 0.45961 5.57776 0.50101 5.61013 0.552343C5.64251 0.603676 5.65914 0.662833 5.6581 0.722939V2.3707C10.3624 2.3707 11.2539 5.52482 11.3991 7.21174C11.4028 7.27916 11.3848 7.34603 11.3474 7.40312C11.3101 7.46021 11.2554 7.50471 11.1908 7.53049C11.1262 7.55626 11.0549 7.56204 10.9868 7.54703C10.9187 7.53201 10.857 7.49695 10.8104 7.44666C8.72224 5.08977 5.6581 5.63359 5.6581 5.63359V7.28135C5.65831 7.34051 5.64141 7.39856 5.60931 7.44894C5.5772 7.49932 5.53117 7.54004 5.4764 7.5665C5.42163 7.59296 5.3603 7.60411 5.29932 7.59869C5.23834 7.59328 5.18014 7.57151 5.13128 7.53585L0.809739 4.40892C0.744492 4.3616 0.691538 4.30026 0.655067 4.22975C0.618596 4.15925 0.599609 4.08151 0.599609 4.00269C0.599609 3.92386 0.618596 3.84612 0.655067 3.77562C0.691538 3.70511 0.744492 3.64377 0.809739 3.59646Z",
            className: i,
            fill: l,
        }),
    });
}

function D(e) {
    let { width: s = 18, height: t = 18, className: l, foreground: a } = e;
    return (0, n.jsx)("svg", {
        className: l,
        width: s,
        height: t,
        viewBox: "0 0 18 18",
        children: (0, n.jsx)("path", {
            fill: "#3ba55c",
            d: "M0 8h14.2l-3.6-3.6L12 3l6 6-6 6-1.4-1.4 3.6-3.6H0",
            className: a,
        }),
    });
}

function k(e, s, t, l, a, r) {
    let o,
        u,
        m,
        A,
        x = (0, g.A)(e),
        { trailingIconClass: C, leadingIconClass: f, iconSize: v } = r,
        E = null == s || "" === s || (Array.isArray(s) && 0 === s.length),
        O = (0, N.o6)(x).length > 0,
        y = null != x.interaction,
        _ = x.hasFlag(M.pr7.IS_VOICE_MESSAGE),
        P = x.isPoll(),
        D = x.type === M.lAJ.POLL_RESULT;
    if (
        ((0, h.A)(e) &&
            (A = (0, n.jsx)(p.A, {
                size: "custom",
                className: f,
                width: v,
                height: v,
            })),
        t)
    )
        o = S.intl.string(S.t.XAkOo2);
    else if (l) o = S.intl.string(S.t["G7p6v/"]);
    else if (x.type === M.lAJ.CHANNEL_PINNED_MESSAGE) o = S.intl.string(S.t.sCfDDl);
    else if (x.type === M.lAJ.EMOJI_ADDED)
        u = (0, n.jsx)(d.HN, {
            message: x,
            rendered: s,
        });
    else if (E)
        if (P) {
            var k, L;
            u = (0, n.jsx)("div", {
                className: i()(T.Io, b.PT),
                children: null == x || null == (L = x.poll) || null == (k = L.question) ? void 0 : k.text,
            });
        } else
            D
                ? (o = (0, j.Il)(x))
                : O
                  ? (o = S.intl.string(S.t.kHdYCW))
                  : y
                    ? (o = S.intl.string(S.t["E+6SSY"]))
                    : _
                      ? (o = S.intl.string(S.t.XC3A52))
                      : x.hasFlag(M.pr7.IS_COMPONENTS_V2)
                        ? (o = S.intl.string(S.t.Xxat6S))
                        : ((o = S.intl.string(S.t["6hGo0c"])),
                          (m = (0, n.jsx)(c.xfq, {
                              size: "custom",
                              color: "currentColor",
                              className: C,
                              width: v,
                              height: v,
                          })));
    else
        u = (0, n.jsx)(I.Ay, {
            message: x,
            content: s,
            className: a,
            compact: !0,
        });
    return (
        O
            ? (m = (0, n.jsx)(c.s2T, {
                  size: "custom",
                  color: "currentColor",
                  className: C,
                  width: v,
                  height: v,
              }))
            : y
              ? (m = (0, n.jsx)(c.kC9, {
                    size: "custom",
                    color: "currentColor",
                    className: C,
                    width: v,
                    height: v,
                }))
              : _
                ? (m = (0, n.jsx)(c.cNw, {
                      size: "custom",
                      color: "currentColor",
                      className: C,
                      width: (19 / 24) * v,
                      height: v,
                  }))
                : (x.attachments.length > 0 || x.embeds.length > 0) &&
                  !D &&
                  (m = (0, n.jsx)(c.xfq, {
                      size: "custom",
                      color: "currentColor",
                      className: C,
                      width: v,
                      height: v,
                  })),
        {
            contentPlaceholder: o,
            renderedContent: u,
            trailingIcon: m,
            leadingIcon: A,
        }
    );
}

function L(e) {
    let s,
        {
            repliedAuthor: t,
            baseAuthor: a,
            baseMessage: r,
            referencedMessage: d,
            renderPopout: h,
            isReplySpineClickable: g,
            showReplySpine: p,
        } = e,
        [j, N] = l.useState(!1),
        I = l.useMemo(() => (null != h && d.state === A.a.LOADED ? (e) => h(e, d.message) : void 0), [d, h]),
        b = l.useCallback(() => N((e) => !e), []),
        L = (function (e, s, t) {
            let {
                    referencedMessage: a,
                    channel: r,
                    compact: o,
                    isReplyAuthorBlocked: d,
                    repliedAuthor: h,
                    showAvatarPopout: g,
                    onClickAvatar: p,
                    onContextMenu: j,
                    onPopoutRequestClose: x,
                } = e,
                { analyticsLocations: N } = (0, m.Ay)(u.A.AVATAR),
                f = l.useRef(null);
            if (o || a.state !== A.a.LOADED || d)
                return t === M.lAJ.CONTEXT_MENU_COMMAND
                    ? (0, n.jsx)("div", {
                          className: T.Do,
                          children: (0, n.jsx)(c.oyn, {
                              size: "xs",
                          }),
                      })
                    : (0, n.jsx)("div", {
                          className: T.Cz,
                          children: (0, n.jsx)(P, {
                              className: T.UE,
                          }),
                      });
            if (
                a.message.type === M.lAJ.USER_JOIN ||
                a.message.type === M.lAJ.ROLE_SUBSCRIPTION_PURCHASE ||
                a.message.type === M.lAJ.GUILD_DEADCHAT_REVIVE_PROMPT ||
                a.message.type === M.lAJ.GUILD_GAMING_STATS_PROMPT
            )
                return (0, n.jsx)(D, {
                    className: T.VJ,
                });
            if (a.message.type === M.lAJ.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION)
                return (0, n.jsx)(c.qyI, {
                    size: "md",
                    color: "currentColor",
                    className: T.Cw,
                });
            if (a.message.type === M.lAJ.POLL_RESULT)
                return (0, n.jsx)(c.YRe, {
                    className: T.Vs,
                    width: _.eJ,
                    height: _.eJ,
                    size: "custom",
                });
            let v = () => {
                var e, s;
                return (
                    (e = a.message.author),
                    (s = r.guild_id),
                    (0, n.jsx)("img", {
                        alt: "",
                        src:
                            (null == h ? void 0 : h.guildMemberAvatar) != null && null != s
                                ? (0, C.s7)({
                                      guildId: s,
                                      userId: e.id,
                                      avatar: h.guildMemberAvatar,
                                  })
                                : e.getAvatarURL(s, 16),
                        onClick: p,
                        onContextMenu: j,
                        className: i()({
                            [T.mf]: !0,
                            [T.vk]: null != p,
                        }),
                        ref: f,
                    })
                );
            };
            return null != s && null != g
                ? (0, n.jsx)(m.f5, {
                      value: N,
                      children: (0, n.jsx)(c.YNO, {
                          targetElementRef: f,
                          renderPopout: s,
                          shouldShow: g,
                          position: "right",
                          onRequestClose: x,
                          children: v,
                      }),
                  })
                : (0, n.jsx)(m.f5, {
                      value: N,
                      children: v(),
                  });
        })(e, I, r.type),
        R = (function (e, s) {
            let {
                    baseMessage: t,
                    channel: l,
                    referencedMessage: a,
                    showUsernamePopout: i,
                    onClickUsername: r,
                    onContextMenu: o,
                    onPopoutRequestClose: c,
                } = e,
                u = (null == a ? void 0 : a.state) === A.a.LOADED ? a.message : void 0;
            return null == u ||
                u.type === M.lAJ.USER_JOIN ||
                u.type === M.lAJ.ROLE_SUBSCRIPTION_PURCHASE ||
                u.type === M.lAJ.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION ||
                u.type === M.lAJ.GUILD_DEADCHAT_REVIVE_PROMPT ||
                u.type === M.lAJ.GUILD_GAMING_STATS_PROMPT ||
                u.type === M.lAJ.POLL_RESULT
                ? null
                : (0, n.jsx)(O.A, {
                      message: u,
                      channel: l,
                      compact: !0,
                      withMentionPrefix: (0, x.A)(t, u),
                      showPopout: i,
                      renderPopout: s,
                      onClick: r,
                      onContextMenu: o,
                      onPopoutRequestClose: c,
                      isRepliedMessage: !0,
                  });
        })(e, I),
        w = (function (e, s, t) {
            let {
                    content: l,
                    referencedMessage: a,
                    isReplyAuthorBlocked: r,
                    isReplyAuthorIgnored: o,
                    onClickReply: u,
                } = e,
                m = a.state !== A.a.DELETED ? u : void 0;
            switch (a.state) {
                case A.a.LOADED: {
                    let {
                        contentPlaceholder: e,
                        renderedContent: u,
                        trailingIcon: d,
                        leadingIcon: h,
                    } = k(a.message, l, r, o, T.Io, {
                        trailingIconClass: T.$4,
                        leadingIconClass: T.Vs,
                        iconSize: _.eJ,
                    });
                    return (0, n.jsxs)(n.Fragment, {
                        children: [
                            h,
                            (0, n.jsx)(c.DUT, {
                                className: i()(T.$y, T.vk, {
                                    [T.FQ]: s,
                                }),
                                onClick: m,
                                onMouseEnter: t,
                                onMouseLeave: t,
                                children: (0, n.jsx)(c.RDc, {
                                    children:
                                        null != u
                                            ? u
                                            : (0, n.jsx)("span", {
                                                  className: T.MK,
                                                  children: e,
                                              }),
                                }),
                            }),
                            d,
                        ],
                    });
                }
                case A.a.NOT_LOADED:
                    return (0, n.jsx)(c.DUT, {
                        className: i()(T.$y, T.vk),
                        onClick: m,
                        children: (0, n.jsx)("span", {
                            className: T.MK,
                            children: S.intl.string(S.t["1i+hMi"]),
                        }),
                    });
                case A.a.DELETED:
                    return (0, n.jsx)("div", {
                        className: T.$y,
                        children: (0, n.jsx)("span", {
                            className: T.MK,
                            children: S.intl.string(S.t.mE3KJN),
                        }),
                    });
                default:
                    (0, v.xb)(a);
            }
        })(e, j, b),
        U = l.useMemo(() => (e.compact ? (0, y.A)((0, f.i$)(o()(), "LT")) : null), [e.compact]);
    null != t &&
        null != a &&
        (s = S.intl.formatToPlainString(S.t.RhbQ2K, {
            author: null == a ? void 0 : a.nick,
            repliedAuthor: null == t ? void 0 : t.nick,
        }));
    let J = r.type === M.lAJ.CONTEXT_MENU_COMMAND;
    return (0, n.jsxs)("div", {
        id: (0, E.nS)(r),
        className: i()(
            T.JZ,
            U,
            J
                ? T.C4
                : {
                      [T.NB]: !g && p,
                  },
        ),
        "aria-label": s,
        children: [
            g &&
                p &&
                (0, n.jsx)(c.DUT, {
                    tag: "div",
                    "aria-label": S.intl.string(S.t.dpjpOp),
                    className: i()(T.Uo, {
                        [T.xe]: j,
                    }),
                    onClick: e.onClickReply,
                    onMouseEnter: b,
                    onMouseLeave: b,
                }),
            L,
            R,
            w,
        ],
    });
}
