n.d(t, {
    A: () => V,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(158954),
    a = n(311907),
    s = n(52133),
    o = n(827734),
    c = n(397927),
    u = n(803306),
    d = n(862804),
    p = n(387408),
    m = n(958340),
    f = n(384231),
    g = n(763754),
    h = n(491182),
    _ = n(291812),
    b = n(643204),
    A = n(535421),
    y = n(112758),
    v = n(754459),
    x = n(538355),
    O = n(699352),
    E = n(378570),
    j = n(138298),
    C = n(253932),
    I = n(761640),
    S = n(734057),
    T = n(540999),
    N = n(71393),
    P = n(576705),
    w = n(994500),
    R = n(309010),
    D = n(287809),
    L = n(954571),
    M = n(709634),
    k = n(652215),
    U = n(381941),
    G = n(618231);

function B(e) {
    let { message: t, snapshot: n, index: u } = e,
        p = i.useMemo(() => new d.j(t, n, u), [t, n, u]),
        f = (0, a.bG)(
            [S.A, D.default, w.A, P.A, N.A, m.A],
            () => p.getForwardInfo(S.A, D.default, w.A, P.A, N.A, m.A).footerInfo,
            [p],
            s.A,
        ),
        g = i.useCallback(() => {
            var e, n;
            let r = S.A.getChannel(t.channel_id),
                i = N.A.getGuild(null == r ? void 0 : r.guild_id),
                l = null == (e = t.messageReference) ? void 0 : e.channel_id,
                a = R.A.getCurrentlySelectedChannelId(),
                s = I.Ay.getCurrentSidebarChannelId(null == (n = t.messageReference) ? void 0 : n.channel_id),
                o = a === l && s === (null == r ? void 0 : r.id);
            null == r ||
                null == i ||
                o ||
                null == l ||
                (j.A.openModReportAsSidebar({
                    channelId: r.id,
                    baseChannelId: l,
                    guildId: r.guild_id,
                }),
                (0, E.iN)(l),
                L.default.track(k.HAw.MODERATOR_REPORT_ORIGINAL_MESSAGE_LINK_CLICKED, {
                    moderator_report_id: t.channel_id,
                    destination_channel_id: l,
                    destination_message_id: t.id,
                }));
        }, [t]);
    return null == f
        ? null
        : (0, r.jsxs)(c.DUT, {
              className: G.xQ,
              onClick: g,
              "aria-label": f.accessibilityLabel,
              children: [
                  null != f.originIconUrl
                      ? (0, r.jsx)("img", {
                            className: G.yl,
                            src: f.originIconUrl,
                            alt: "",
                        })
                      : null,
                  (0, r.jsx)(l.EYj, {
                      className: G.PJ,
                      variant: "text-sm/medium",
                      color: "none",
                      children: "".concat(f.originLabel, "  •  ").concat(f.timestampLabel),
                  }),
                  (0, r.jsx)(c._BQ, {
                      size: "xxs",
                      color: o.A.colors.TEXT_MUTED,
                  }),
              ],
          });
}

function F(e) {
    let { mergedMessageRecord: t, content: n, channel: l, reportingUserId: a, reportedTimestamp: s } = e,
        o = (0, g.m2)(t.author, l),
        {
            onClickUsername: c,
            onClickAvatar: u,
            onPopoutRequestClose: d,
            showUsernamePopout: p,
            showAvatarPopout: m,
        } = (function (e, t) {
            let { popouts: n, setPopout: r } = (0, v.A)(e.id, U.Fd),
                { usernameProfile: l, avatarProfile: a } = n,
                s = (0, y.m)(e, t, l, r);
            return {
                onClickUsername: s,
                onClickAvatar: (0, y.Jo)(a, r),
                onPopoutRequestClose: i.useCallback(
                    () =>
                        r({
                            usernameProfile: !1,
                            avatarProfile: !1,
                            referencedUsernameProfile: !1,
                        }),
                    [r],
                ),
                showUsernamePopout: l,
                showAvatarPopout: a,
            };
        })(t, l);
    return (0, r.jsx)(h.A, {
        childrenExecutedCommand: (0, r.jsx)(M.A, {
            reportingUserId: a,
            guildId: l.guild_id,
            channel: l,
            messageId: t.id,
            reportedTimestamp: s,
            compact: !1,
        }),
        childrenHeader: (0, r.jsx)(b.Ay, {
            message: t,
            channel: l,
            author: o,
            guildId: l.guild_id,
            hideTimestamp: !0,
            onClickUsername: c,
            onClickAvatar: u,
            onPopoutRequestClose: d,
            showUsernamePopout: p,
            showAvatarPopout: m,
            renderPopout: A.A,
            compact: !1,
            displayCompactAvatars: !1,
        }),
        childrenMessageContent: (0, r.jsx)(_.Ay, {
            message: t,
            content: n,
            compact: !1,
        }),
        disableInteraction: !0,
        compact: !1,
        className: G.iU,
        author: o,
    });
}

function H(e) {
    var t, n, l;
    let { message: s, snapshot: o, index: c } = e,
        [d, m] = i.useState(void 0);
    i.useEffect(() => {
        var e;
        (null == o || null == (e = o.moderatorReport) ? void 0 : e.reported_user_id) != null &&
            (0, u.wz)(o.moderatorReport.reported_user_id)
                .then((e) => {
                    m(e);
                })
                .catch(() => {});
    }, [null == o || null == (n = o.moderatorReport) ? void 0 : n.reported_user_id]);
    let g = i.useMemo(() => {
            var e;
            let t = (0, p.A)(s, o);
            return null != d && (null == o || null == (e = o.moderatorReport) ? void 0 : e.reported_user_id) != null
                ? t.set("author", d)
                : t;
        }, [s, o, d]),
        h = C.hD.useSetting(),
        _ = C.rs.useSetting(),
        b = (0, a.bG)([T.A], () => T.A.isDeveloper),
        A = (0, f.S)((null != (t = g.editedTimestamp) ? t : g.timestamp).valueOf()),
        {
            content: y,
            hasSpoilerEmbeds: v,
            hasBailedAst: E,
        } = (0, x.A)(g, {
            hideSimpleEmbedContent: h && _,
            isInteracting: !1,
            formatInline: !1,
            allowList: A,
            allowHeading: A,
            allowLinks: !0,
            allowDevLinks: b,
            previewLinkTarget: !0,
        }),
        j = (0, a.bG)([S.A], () => S.A.getChannel(s.channel_id));
    return null == j
        ? null
        : (0, r.jsx)(
              "div",
              {
                  className: G.kL,
                  children: (0, r.jsxs)("div", {
                      className: G.Qs,
                      children: [
                          (0, r.jsx)(F, {
                              mergedMessageRecord: g,
                              content: y,
                              channel: j,
                              reportingUserId:
                                  null == o || null == (l = o.moderatorReport) ? void 0 : l.reporting_user_id,
                              reportedTimestamp: s.timestamp,
                          }),
                          (0, O.A)({
                              channelMessageProps: {
                                  message: g,
                                  channel: j,
                                  compact: !1,
                              },
                              hasSpoilerEmbeds: v,
                              hasBailedAst: E,
                              isInteracting: !1,
                              isMessageSnapshot: !0,
                              renderThreadAccessory: !1,
                              className: G.Mf,
                          }),
                          (0, r.jsx)(B, {
                              message: s,
                              snapshot: o,
                              index: c,
                          }),
                      ],
                  }),
              },
              c,
          );
}

function V(e) {
    let { message: t } = e;
    return (0, r.jsx)(r.Fragment, {
        children: t.messageSnapshots.map((e, n) =>
            (0, r.jsx)(
                H,
                {
                    message: t,
                    snapshot: e,
                    index: n,
                },
                n,
            ),
        ),
    });
}
