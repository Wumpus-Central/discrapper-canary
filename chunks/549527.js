n.d(t, { A: () => V });
var i = n(627968),
    r = n(64700),
    l = n(158954),
    a = n(311907),
    s = n(52133),
    o = n(827734),
    d = n(397927),
    c = n(803306),
    u = n(862804),
    _ = n(387408),
    m = n(958340),
    h = n(384231),
    p = n(763754),
    g = n(491182),
    A = n(291812),
    x = n(643204),
    f = n(535421),
    C = n(112758),
    E = n(754459),
    I = n(538355),
    b = n(699352),
    T = n(378570),
    v = n(138298),
    S = n(253932),
    y = n(761640),
    N = n(734057),
    j = n(540999),
    L = n(71393),
    R = n(576705),
    P = n(994500),
    M = n(309010),
    w = n(287809),
    D = n(954571),
    O = n(709634),
    k = n(652215),
    U = n(381941),
    G = n(8185);
function B(e) {
    let { message: t, snapshot: n, index: c } = e,
        _ = r.useMemo(() => new u.j(t, n, c), [t, n, c]),
        h = (0, a.bG)(
            [N.A, w.default, P.A, R.A, L.A, m.A],
            () => _.getForwardInfo(N.A, w.default, P.A, R.A, L.A, m.A).footerInfo,
            [_],
            s.A,
        ),
        p = r.useCallback(() => {
            let e = N.A.getChannel(t.channel_id),
                n = L.A.getGuild(e?.guild_id),
                i = t.messageReference?.channel_id,
                r = M.A.getCurrentlySelectedChannelId(),
                l = y.Ay.getCurrentSidebarChannelId(t.messageReference?.channel_id),
                a = r === i && l === e?.id;
            null == e ||
                null == n ||
                a ||
                null == i ||
                (v.A.openModReportAsSidebar({ channelId: e.id, baseChannelId: i, guildId: e.guild_id }),
                (0, T.iN)(i),
                D.default.track(k.HAw.MODERATOR_REPORT_ORIGINAL_MESSAGE_LINK_CLICKED, {
                    moderator_report_id: t.channel_id,
                    destination_channel_id: i,
                    destination_message_id: t.id,
                }));
        }, [t]);
    return null == h
        ? null
        : (0, i.jsxs)(d.DUT, {
              className: G.xQ,
              onClick: p,
              "aria-label": h.accessibilityLabel,
              children: [
                  null != h.originIconUrl
                      ? (0, i.jsx)("img", { className: G.yl, src: h.originIconUrl, alt: "" })
                      : null,
                  (0, i.jsx)(l.EYj, {
                      className: G.PJ,
                      variant: "text-sm/medium",
                      color: "none",
                      children: `${h.originLabel}  •  ${h.timestampLabel}`,
                  }),
                  (0, i.jsx)(d._BQ, { size: "xxs", color: o.A.colors.TEXT_MUTED }),
              ],
          });
}
function F(e) {
    let { mergedMessageRecord: t, content: n, channel: l, reportingUserId: a, reportedTimestamp: s } = e,
        o = (0, p.m2)(t.author, l),
        {
            onClickUsername: d,
            onClickAvatar: c,
            onPopoutRequestClose: u,
            showUsernamePopout: _,
            showAvatarPopout: m,
        } = (function (e, t) {
            let { popouts: n, setPopout: i } = (0, E.A)(e.id, U.Fd),
                { usernameProfile: l, avatarProfile: a } = n,
                s = (0, C.m)(e, t, l, i);
            return {
                onClickUsername: s,
                onClickAvatar: (0, C.Jo)(a, i),
                onPopoutRequestClose: r.useCallback(
                    () => i({ usernameProfile: !1, avatarProfile: !1, referencedUsernameProfile: !1 }),
                    [i],
                ),
                showUsernamePopout: l,
                showAvatarPopout: a,
            };
        })(t, l);
    return (0, i.jsx)(g.A, {
        childrenExecutedCommand: (0, i.jsx)(O.A, {
            reportingUserId: a,
            guildId: l.guild_id,
            channel: l,
            messageId: t.id,
            reportedTimestamp: s,
            compact: !1,
        }),
        childrenHeader: (0, i.jsx)(x.Ay, {
            message: t,
            channel: l,
            author: o,
            guildId: l.guild_id,
            hideTimestamp: !0,
            onClickUsername: d,
            onClickAvatar: c,
            onPopoutRequestClose: u,
            showUsernamePopout: _,
            showAvatarPopout: m,
            renderPopout: f.A,
            compact: !1,
            displayCompactAvatars: !1,
        }),
        childrenMessageContent: (0, i.jsx)(A.Ay, { message: t, content: n, compact: !1 }),
        disableInteraction: !0,
        compact: !1,
        className: G.iU,
        author: o,
    });
}
function H(e) {
    let { message: t, snapshot: n, index: l } = e,
        [s, o] = r.useState(void 0);
    r.useEffect(() => {
        n?.moderatorReport?.reported_user_id != null &&
            (0, c.wz)(n.moderatorReport.reported_user_id)
                .then((e) => {
                    o(e);
                })
                .catch(() => {});
    }, [n?.moderatorReport?.reported_user_id]);
    let d = r.useMemo(() => {
            let e = (0, _.A)(t, n);
            return null != s && n?.moderatorReport?.reported_user_id != null ? e.set("author", s) : e;
        }, [t, n, s]),
        u = S.hD.useSetting(),
        m = S.rs.useSetting(),
        p = (0, a.bG)([j.A], () => j.A.isDeveloper),
        g = (0, h.S)((d.editedTimestamp ?? d.timestamp).valueOf()),
        {
            content: A,
            hasSpoilerEmbeds: x,
            hasBailedAst: f,
        } = (0, I.A)(d, {
            hideSimpleEmbedContent: u && m,
            isInteracting: !1,
            formatInline: !1,
            allowList: g,
            allowHeading: g,
            allowLinks: !0,
            allowDevLinks: p,
            previewLinkTarget: !0,
        }),
        C = (0, a.bG)([N.A], () => N.A.getChannel(t.channel_id));
    return null == C
        ? null
        : (0, i.jsx)(
              "div",
              {
                  className: G.kL,
                  children: (0, i.jsxs)("div", {
                      className: G.Qs,
                      children: [
                          (0, i.jsx)(F, {
                              mergedMessageRecord: d,
                              content: A,
                              channel: C,
                              reportingUserId: n?.moderatorReport?.reporting_user_id,
                              reportedTimestamp: t.timestamp,
                          }),
                          (0, b.A)({
                              channelMessageProps: { message: d, channel: C, compact: !1 },
                              hasSpoilerEmbeds: x,
                              hasBailedAst: f,
                              isInteracting: !1,
                              isMessageSnapshot: !0,
                              renderThreadAccessory: !1,
                              className: G.Mf,
                          }),
                          (0, i.jsx)(B, { message: t, snapshot: n, index: l }),
                      ],
                  }),
              },
              l,
          );
}
function V(e) {
    let { message: t } = e;
    return (0, i.jsx)(i.Fragment, {
        children: t.messageSnapshots.map((e, n) => (0, i.jsx)(H, { message: t, snapshot: e, index: n }, n)),
    });
}
