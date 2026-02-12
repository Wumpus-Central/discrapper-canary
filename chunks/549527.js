n.d(t, { A: () => V });
var i = n(627968),
    l = n(64700),
    a = n(158954),
    r = n(311907),
    s = n(52133),
    o = n(827734),
    d = n(397927),
    c = n(803306),
    u = n(862804),
    m = n(387408),
    _ = n(958340),
    h = n(384231),
    p = n(763754),
    g = n(491182),
    A = n(291812),
    f = n(643204),
    x = n(535421),
    E = n(112758),
    C = n(754459),
    I = n(538355),
    T = n(699352),
    v = n(378570),
    N = n(138298),
    S = n(253932),
    b = n(761640),
    j = n(734057),
    y = n(540999),
    R = n(71393),
    L = n(576705),
    M = n(994500),
    O = n(309010),
    D = n(287809),
    P = n(954571),
    k = n(709634),
    U = n(652215),
    w = n(381941),
    G = n(618231);
function B(e) {
    let { message: t, snapshot: n, index: c } = e,
        m = l.useMemo(() => new u.j(t, n, c), [t, n, c]),
        h = (0, r.bG)(
            [j.A, D.default, M.A, L.A, R.A, _.A],
            () => m.getForwardInfo(j.A, D.default, M.A, L.A, R.A, _.A).footerInfo,
            [m],
            s.A,
        ),
        p = l.useCallback(() => {
            let e = j.A.getChannel(t.channel_id),
                n = R.A.getGuild(e?.guild_id),
                i = t.messageReference?.channel_id,
                l = O.A.getCurrentlySelectedChannelId(),
                a = b.Ay.getCurrentSidebarChannelId(t.messageReference?.channel_id),
                r = l === i && a === e?.id;
            null == e ||
                null == n ||
                r ||
                null == i ||
                (N.A.openModReportAsSidebar({ channelId: e.id, baseChannelId: i, guildId: e.guild_id }),
                (0, v.iN)(i),
                P.default.track(U.HAw.MODERATOR_REPORT_ORIGINAL_MESSAGE_LINK_CLICKED, {
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
                  (0, i.jsx)(a.EYj, {
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
    let { mergedMessageRecord: t, content: n, channel: a, reportingUserId: r, reportedTimestamp: s } = e,
        o = (0, p.m2)(t.author, a),
        {
            onClickUsername: d,
            onClickAvatar: c,
            onPopoutRequestClose: u,
            showUsernamePopout: m,
            showAvatarPopout: _,
        } = (function (e, t) {
            let { popouts: n, setPopout: i } = (0, C.A)(e.id, w.Fd),
                { usernameProfile: a, avatarProfile: r } = n,
                s = (0, E.m)(e, t, a, i);
            return {
                onClickUsername: s,
                onClickAvatar: (0, E.Jo)(r, i),
                onPopoutRequestClose: l.useCallback(
                    () => i({ usernameProfile: !1, avatarProfile: !1, referencedUsernameProfile: !1 }),
                    [i],
                ),
                showUsernamePopout: a,
                showAvatarPopout: r,
            };
        })(t, a);
    return (0, i.jsx)(g.A, {
        childrenExecutedCommand: (0, i.jsx)(k.A, {
            reportingUserId: r,
            guildId: a.guild_id,
            channel: a,
            messageId: t.id,
            reportedTimestamp: s,
            compact: !1,
        }),
        childrenHeader: (0, i.jsx)(f.Ay, {
            message: t,
            channel: a,
            author: o,
            guildId: a.guild_id,
            hideTimestamp: !0,
            onClickUsername: d,
            onClickAvatar: c,
            onPopoutRequestClose: u,
            showUsernamePopout: m,
            showAvatarPopout: _,
            renderPopout: x.A,
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
    let { message: t, snapshot: n, index: a } = e,
        [s, o] = l.useState(void 0);
    l.useEffect(() => {
        n?.moderatorReport?.reported_user_id != null &&
            (0, c.wz)(n.moderatorReport.reported_user_id)
                .then((e) => {
                    o(e);
                })
                .catch(() => {});
    }, [n?.moderatorReport?.reported_user_id]);
    let d = l.useMemo(() => {
            let e = (0, m.A)(t, n);
            return null != s && n?.moderatorReport?.reported_user_id != null ? e.set("author", s) : e;
        }, [t, n, s]),
        u = S.hD.useSetting(),
        _ = S.rs.useSetting(),
        p = (0, r.bG)([y.A], () => y.A.isDeveloper),
        g = (0, h.S)((d.editedTimestamp ?? d.timestamp).valueOf()),
        {
            content: A,
            hasSpoilerEmbeds: f,
            hasBailedAst: x,
        } = (0, I.A)(d, {
            hideSimpleEmbedContent: u && _,
            isInteracting: !1,
            formatInline: !1,
            allowList: g,
            allowHeading: g,
            allowLinks: !0,
            allowDevLinks: p,
            previewLinkTarget: !0,
        }),
        E = (0, r.bG)([j.A], () => j.A.getChannel(t.channel_id));
    return null == E
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
                              channel: E,
                              reportingUserId: n?.moderatorReport?.reporting_user_id,
                              reportedTimestamp: t.timestamp,
                          }),
                          (0, T.A)({
                              channelMessageProps: { message: d, channel: E, compact: !1 },
                              hasSpoilerEmbeds: f,
                              hasBailedAst: x,
                              isInteracting: !1,
                              isMessageSnapshot: !0,
                              renderThreadAccessory: !1,
                              className: G.Mf,
                          }),
                          (0, i.jsx)(B, { message: t, snapshot: n, index: a }),
                      ],
                  }),
              },
              a,
          );
}
function V(e) {
    let { message: t } = e;
    return (0, i.jsx)(i.Fragment, {
        children: t.messageSnapshots.map((e, n) => (0, i.jsx)(H, { message: t, snapshot: e, index: n }, n)),
    });
}
