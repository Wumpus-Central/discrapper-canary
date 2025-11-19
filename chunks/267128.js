n.d(t, {
    Z: () => G,
    f: () => U,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(913527),
    l = n.n(s),
    c = n(481060),
    u = n(100527),
    d = n(906732),
    f = n(387188),
    _ = n(978003),
    p = n(39154),
    h = n(245216),
    m = n(79390),
    g = n(869765),
    E = n(403132),
    b = n(378233),
    y = n(768581),
    O = n(55935),
    v = n(823379),
    I = n(453687),
    T = n(930282),
    S = n(123145),
    A = n(223021),
    C = n(217702),
    N = n(981631),
    R = n(388032),
    P = n(724913),
    D = n(430864);
function w(e) {
    let { width: t = 12, height: n = 8, color: i = "currentColor", className: a, foreground: o } = e;
    return (0, r.jsx)("svg", {
        className: a,
        width: t,
        height: n,
        viewBox: "0 0 12 8",
        children: (0, r.jsx)("path", {
            d: "M0.809739 3.59646L5.12565 0.468433C5.17446 0.431163 5.23323 0.408043 5.2951 0.401763C5.35698 0.395482 5.41943 0.406298 5.4752 0.432954C5.53096 0.45961 5.57776 0.50101 5.61013 0.552343C5.64251 0.603676 5.65914 0.662833 5.6581 0.722939V2.3707C10.3624 2.3707 11.2539 5.52482 11.3991 7.21174C11.4028 7.27916 11.3848 7.34603 11.3474 7.40312C11.3101 7.46021 11.2554 7.50471 11.1908 7.53049C11.1262 7.55626 11.0549 7.56204 10.9868 7.54703C10.9187 7.53201 10.857 7.49695 10.8104 7.44666C8.72224 5.08977 5.6581 5.63359 5.6581 5.63359V7.28135C5.65831 7.34051 5.64141 7.39856 5.60931 7.44894C5.5772 7.49932 5.53117 7.54004 5.4764 7.5665C5.42163 7.59296 5.3603 7.60411 5.29932 7.59869C5.23834 7.59328 5.18014 7.57151 5.13128 7.53585L0.809739 4.40892C0.744492 4.3616 0.691538 4.30026 0.655067 4.22975C0.618596 4.15925 0.599609 4.08151 0.599609 4.00269C0.599609 3.92386 0.618596 3.84612 0.655067 3.77562C0.691538 3.70511 0.744492 3.64377 0.809739 3.59646Z",
            className: o,
            fill: i,
        }),
    });
}
function L(e) {
    let { width: t = 18, height: n = 18, className: i, foreground: a } = e;
    return (0, r.jsx)("svg", {
        className: i,
        width: t,
        height: n,
        viewBox: "0 0 18 18",
        children: (0, r.jsx)("path", {
            fill: "#3ba55c",
            d: "M0 8h14.2l-3.6-3.6L12 3l6 6-6 6-1.4-1.4 3.6-3.6H0",
            className: a,
        }),
    });
}
function x(e, t, n, i, a, s) {
    return (0, r.jsx)("img", {
        alt: "",
        src:
            (null == t ? void 0 : t.guildMemberAvatar) != null && null != n
                ? (0, y.JM)({
                      guildId: n,
                      userId: e.id,
                      avatar: t.guildMemberAvatar,
                  })
                : e.getAvatarURL(n, 16),
        onClick: i,
        onContextMenu: a,
        className: o()({
            [P.replyAvatar]: !0,
            [P.clickable]: null != i,
        }),
        ref: s,
    });
}
function M(e, t, n) {
    let {
            referencedMessage: a,
            channel: o,
            compact: s,
            isReplyAuthorBlocked: l,
            repliedAuthor: f,
            showAvatarPopout: _,
            onClickAvatar: p,
            onContextMenu: h,
            onPopoutRequestClose: m,
        } = e,
        { analyticsLocations: E } = (0, d.ZP)(u.Z.AVATAR),
        b = i.useRef(null);
    if (s || a.state !== g.Y.LOADED || l)
        return n === N.uaV.CONTEXT_MENU_COMMAND
            ? (0, r.jsx)("div", {
                  className: P.replyChatIconContainer,
                  children: (0, r.jsx)(c.kBi, { size: "xs" }),
              })
            : (0, r.jsx)("div", {
                  className: P.replyBadge,
                  children: (0, r.jsx)(w, { className: P.replyIcon }),
              });
    if (
        a.message.type === N.uaV.USER_JOIN ||
        a.message.type === N.uaV.ROLE_SUBSCRIPTION_PURCHASE ||
        a.message.type === N.uaV.GUILD_DEADCHAT_REVIVE_PROMPT ||
        a.message.type === N.uaV.GUILD_GAMING_STATS_PROMPT
    )
        return (0, r.jsx)(L, { className: P.userJoinSystemMessageIcon });
    if (a.message.type === N.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION)
        return (0, r.jsx)(c.Prq, {
            size: "md",
            color: "currentColor",
            className: P.ticketIcon,
        });
    if (a.message.type === N.uaV.POLL_RESULT)
        return (0, r.jsx)(c.QDj, {
            className: P.repliedTextContentLeadingIcon,
            width: C.WW,
            height: C.WW,
            size: "custom",
        });
    let y = () => x(a.message.author, f, o.guild_id, p, h, b);
    return null != t && null != _
        ? (0, r.jsx)(d.Gt, {
              value: E,
              children: (0, r.jsx)(c.yRy, {
                  targetElementRef: b,
                  renderPopout: t,
                  shouldShow: _,
                  position: "right",
                  onRequestClose: m,
                  children: y,
              }),
          })
        : (0, r.jsx)(d.Gt, {
              value: E,
              children: y(),
          });
}
function k(e, t) {
    let {
            baseMessage: n,
            channel: i,
            referencedMessage: a,
            showUsernamePopout: o,
            onClickUsername: s,
            onContextMenu: l,
            onPopoutRequestClose: c,
        } = e,
        u = (null == a ? void 0 : a.state) === g.Y.LOADED ? a.message : void 0;
    return null == u ||
        u.type === N.uaV.USER_JOIN ||
        u.type === N.uaV.ROLE_SUBSCRIPTION_PURCHASE ||
        u.type === N.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION ||
        u.type === N.uaV.GUILD_DEADCHAT_REVIVE_PROMPT ||
        u.type === N.uaV.GUILD_GAMING_STATS_PROMPT ||
        u.type === N.uaV.POLL_RESULT
        ? null
        : (0, r.jsx)(S.Z, {
              message: u,
              channel: i,
              compact: !0,
              withMentionPrefix: (0, E.Z)(n, u),
              showPopout: o,
              renderPopout: t,
              onClick: s,
              onContextMenu: l,
              onPopoutRequestClose: c,
              isRepliedMessage: !0,
          });
}
function j(e, t, n) {
    let { content: i, referencedMessage: a, isReplyAuthorBlocked: s, isReplyAuthorIgnored: l, onClickReply: u } = e,
        d = a.state !== g.Y.DELETED ? u : void 0;
    switch (a.state) {
        case g.Y.LOADED: {
            let {
                contentPlaceholder: e,
                renderedContent: u,
                trailingIcon: f,
                leadingIcon: _,
            } = U(a.message, i, s, l, P.repliedTextContent, {
                trailingIconClass: P.repliedTextContentTrailingIcon,
                leadingIconClass: P.repliedTextContentLeadingIcon,
                iconSize: C.WW,
            });
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    _,
                    (0, r.jsx)(c.P3F, {
                        className: o()(P.repliedTextPreview, P.clickable, {
                            [P.repliedMessageClickableSpineHovered]: t,
                        }),
                        onClick: d,
                        onMouseEnter: n,
                        onMouseLeave: n,
                        children: (0, r.jsx)(c.nuw, {
                            children:
                                null != u
                                    ? u
                                    : (0, r.jsx)("span", {
                                          className: P.repliedTextPlaceholder,
                                          children: e,
                                      }),
                        }),
                    }),
                    f,
                ],
            });
        }
        case g.Y.NOT_LOADED:
            return (0, r.jsx)(c.P3F, {
                className: o()(P.repliedTextPreview, P.clickable),
                onClick: d,
                children: (0, r.jsx)("span", {
                    className: P.repliedTextPlaceholder,
                    children: R.intl.string(R.t["1i+hMi"]),
                }),
            });
        case g.Y.DELETED:
            return (0, r.jsx)("div", {
                className: P.repliedTextPreview,
                children: (0, r.jsx)("span", {
                    className: P.repliedTextPlaceholder,
                    children: R.intl.string(R.t.mE3KJN),
                }),
            });
        default:
            (0, v.vE)(a);
    }
}
function U(e, t, n, i, a, s) {
    let l,
        u,
        d,
        g,
        E = (0, p.Z)(e),
        { trailingIconClass: y, leadingIconClass: O, iconSize: v } = s,
        I = null == t || "" === t || (Array.isArray(t) && 0 === t.length),
        S = (0, b.cv)(E).length > 0,
        A = null != E.interaction,
        C = E.hasFlag(N.iLy.IS_VOICE_MESSAGE),
        w = E.isPoll(),
        L = E.type === N.uaV.POLL_RESULT;
    if (
        ((0, _.Z)(e) &&
            (g = (0, r.jsx)(h.Z, {
                size: "custom",
                className: O,
                width: v,
                height: v,
            })),
        n)
    )
        l = R.intl.string(R.t.XAkOo2);
    else if (i) l = R.intl.string(R.t["G7p6v/"]);
    else if (E.type === N.uaV.CHANNEL_PINNED_MESSAGE) l = R.intl.string(R.t.sCfDDl);
    else if (E.type === N.uaV.EMOJI_ADDED)
        u = (0, r.jsx)(f.Zh, {
            message: E,
            rendered: t,
        });
    else if (I)
        if (w) {
            var x, M;
            u = (0, r.jsx)("div", {
                className: o()(P.repliedTextContent, D.markup),
                children: null == E || null == (M = E.poll) || null == (x = M.question) ? void 0 : x.text,
            });
        } else
            L
                ? (l = (0, m.N4)(E))
                : S
                  ? (l = R.intl.string(R.t.kHdYCW))
                  : A
                    ? (l = R.intl.string(R.t["E+6SSY"]))
                    : C
                      ? (l = R.intl.string(R.t.XC3A52))
                      : E.hasFlag(N.iLy.IS_COMPONENTS_V2)
                        ? (l = R.intl.string(R.t.Xxat6S))
                        : ((l = R.intl.string(R.t["6hGo0c"])),
                          (d = (0, r.jsx)(c.XBm, {
                              size: "custom",
                              color: "currentColor",
                              className: y,
                              width: v,
                              height: v,
                          })));
    else
        u = (0, r.jsx)(T.ZP, {
            message: E,
            content: t,
            className: a,
            compact: !0,
        });
    return (
        S
            ? (d = (0, r.jsx)(c.B7q, {
                  size: "custom",
                  color: "currentColor",
                  className: y,
                  width: v,
                  height: v,
              }))
            : A
              ? (d = (0, r.jsx)(c.SsZ, {
                    size: "custom",
                    color: "currentColor",
                    className: y,
                    width: v,
                    height: v,
                }))
              : C
                ? (d = (0, r.jsx)(c.S6n, {
                      size: "custom",
                      color: "currentColor",
                      className: y,
                      width: (19 / 24) * v,
                      height: v,
                  }))
                : (E.attachments.length > 0 || E.embeds.length > 0) &&
                  !L &&
                  (d = (0, r.jsx)(c.XBm, {
                      size: "custom",
                      color: "currentColor",
                      className: y,
                      width: v,
                      height: v,
                  })),
        {
            contentPlaceholder: l,
            renderedContent: u,
            trailingIcon: d,
            leadingIcon: g,
        }
    );
}
function G(e) {
    let t,
        {
            repliedAuthor: n,
            baseAuthor: a,
            baseMessage: s,
            referencedMessage: u,
            renderPopout: d,
            isReplySpineClickable: f,
            showReplySpine: _,
        } = e,
        [p, h] = i.useState(!1),
        m = i.useMemo(() => (null != d && u.state === g.Y.LOADED ? (e) => d(e, u.message) : void 0), [u, d]),
        E = i.useCallback(() => h((e) => !e), []),
        b = M(e, m, s.type),
        y = k(e, m),
        v = j(e, p, E),
        T = i.useMemo(() => (e.compact ? (0, A.Z)((0, O.vc)(l()(), "LT")) : null), [e.compact]);
    null != n &&
        null != a &&
        (t = R.intl.formatToPlainString(R.t.RhbQ2K, {
            author: null == a ? void 0 : a.nick,
            repliedAuthor: null == n ? void 0 : n.nick,
        }));
    let S = s.type === N.uaV.CONTEXT_MENU_COMMAND;
    return (0, r.jsxs)("div", {
        id: (0, I.Gq)(s),
        className: o()(P.repliedMessage, T, S ? P.contextCommandMessage : { [P.messageSpine]: !f && _ }),
        "aria-label": t,
        children: [
            f &&
                _ &&
                (0, r.jsx)(c.P3F, {
                    tag: "div",
                    "aria-label": R.intl.string(R.t.dpjpOp),
                    className: o()(P.repliedMessageClickableSpine, { [P.repliedMessageContentHovered]: p }),
                    onClick: e.onClickReply,
                    onMouseEnter: E,
                    onMouseLeave: E,
                }),
            b,
            y,
            v,
        ],
    });
}
