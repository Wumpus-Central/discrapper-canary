n.d(t, { A: () => V });
var i = n(627968),
    r = n(64700),
    a = n(158954),
    l = n(311907),
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
    v = n(699352),
    b = n(378570),
    T = n(138298),
    y = n(253932),
    S = n(761640),
    N = n(734057),
    j = n(540999),
    L = n(71393),
    R = n(576705),
    P = n(994500),
    M = n(309010),
    w = n(287809),
    D = n(954571),
    k = n(709634),
    O = n(652215),
    U = n(381941),
    B = n(618231);
function G(e) {
    let { message: t, snapshot: n, index: c } = e,
        _ = r.useMemo(() => new u.j(t, n, c), [t, n, c]),
        h = (0, l.bG)(
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
                a = S.Ay.getCurrentSidebarChannelId(t.messageReference?.channel_id),
                l = r === i && a === e?.id;
            null == e ||
                null == n ||
                l ||
                null == i ||
                (T.A.openModReportAsSidebar({ channelId: e.id, baseChannelId: i, guildId: e.guild_id }),
                (0, b.iN)(i),
                D.default.track(O.HAw.MODERATOR_REPORT_ORIGINAL_MESSAGE_LINK_CLICKED, {
                    moderator_report_id: t.channel_id,
                    destination_channel_id: i,
                    destination_message_id: t.id,
                }));
        }, [t]);
    return null == h
        ? null
        : (0, i.jsxs)(d.DUT, {
              className: B.xQ,
              onClick: p,
              "aria-label": h.accessibilityLabel,
              children: [
                  null != h.originIconUrl
                      ? (0, i.jsx)("img", { className: B.yl, src: h.originIconUrl, alt: "" })
                      : null,
                  (0, i.jsx)(a.EYj, {
                      className: B.PJ,
                      variant: "text-sm/medium",
                      color: "none",
                      children: `${h.originLabel}  •  ${h.timestampLabel}`,
                  }),
                  (0, i.jsx)(d._BQ, { size: "xxs", color: o.A.colors.TEXT_MUTED }),
              ],
          });
}
function F(e) {
    let { mergedMessageRecord: t, content: n, channel: a, reportingUserId: l, reportedTimestamp: s } = e,
        o = (0, p.m2)(t.author, a),
        {
            onClickUsername: d,
            onClickAvatar: c,
            onPopoutRequestClose: u,
            showUsernamePopout: _,
            showAvatarPopout: m,
        } = (function (e, t) {
            let { popouts: n, setPopout: i } = (0, E.A)(e.id, U.Fd),
                { usernameProfile: a, avatarProfile: l } = n,
                s = (0, C.m)(e, t, a, i);
            return {
                onClickUsername: s,
                onClickAvatar: (0, C.Jo)(l, i),
                onPopoutRequestClose: r.useCallback(
                    () => i({ usernameProfile: !1, avatarProfile: !1, referencedUsernameProfile: !1 }),
                    [i],
                ),
                showUsernamePopout: a,
                showAvatarPopout: l,
            };
        })(t, a);
    return (0, i.jsx)(g.A, {
        childrenExecutedCommand: (0, i.jsx)(k.A, {
            reportingUserId: l,
            guildId: a.guild_id,
            channel: a,
            messageId: t.id,
            reportedTimestamp: s,
            compact: !1,
        }),
        childrenHeader: (0, i.jsx)(x.Ay, {
            message: t,
            channel: a,
            author: o,
            guildId: a.guild_id,
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
        className: B.iU,
        author: o,
    });
}
function H(e) {
    let { message: t, snapshot: n, index: a } = e,
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
        u = y.hD.useSetting(),
        m = y.rs.useSetting(),
        p = (0, l.bG)([j.A], () => j.A.isDeveloper),
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
        C = (0, l.bG)([N.A], () => N.A.getChannel(t.channel_id));
    return null == C
        ? null
        : (0, i.jsx)(
              "div",
              {
                  className: B.kL,
                  children: (0, i.jsxs)("div", {
                      className: B.Qs,
                      children: [
                          (0, i.jsx)(F, {
                              mergedMessageRecord: d,
                              content: A,
                              channel: C,
                              reportingUserId: n?.moderatorReport?.reporting_user_id,
                              reportedTimestamp: t.timestamp,
                          }),
                          (0, v.A)({
                              channelMessageProps: { message: d, channel: C, compact: !1 },
                              hasSpoilerEmbeds: x,
                              hasBailedAst: f,
                              isInteracting: !1,
                              isMessageSnapshot: !0,
                              renderThreadAccessory: !1,
                              className: B.Mf,
                          }),
                          (0, i.jsx)(G, { message: t, snapshot: n, index: a }),
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
