n.d(t, { A: () => q });
var i = n(627968),
    l = n(64700),
    a = n(834730),
    s = n(311907),
    r = n(52133),
    o = n(827734),
    d = n(939249),
    c = n(320448),
    u = n(803306),
    m = n(862804),
    _ = n(387408),
    h = n(958340),
    p = n(384231),
    g = n(763754),
    A = n(491182),
    f = n(291812),
    x = n(643204),
    C = n(535421),
    E = n(112758),
    I = n(754459),
    v = n(538355),
    b = n(699352),
    T = n(378570),
    S = n(138298),
    y = n(253932),
    N = n(761640),
    j = n(734057),
    L = n(540999),
    R = n(71393),
    P = n(576705),
    w = n(994500),
    D = n(309010),
    k = n(287809),
    O = n(954571),
    M = n(709634),
    U = n(652215),
    G = n(381941),
    B = n(167684);
function F(e) {
    let { message: t, snapshot: n, index: u } = e,
        _ = l.useMemo(() => new m.j(t, n, u), [t, n, u]),
        p = (0, s.bG)(
            [j.A, k.default, w.A, P.A, R.A, h.A],
            () => _.getForwardInfo(j.A, k.default, w.A, P.A, R.A, h.A).footerInfo,
            [_],
            r.A,
        ),
        g = l.useCallback(() => {
            let e = j.A.getChannel(t.channel_id),
                n = R.A.getGuild(e?.guild_id),
                i = t.messageReference?.channel_id,
                l = D.A.getCurrentlySelectedChannelId(),
                a = N.Ay.getCurrentSidebarChannelId(t.messageReference?.channel_id),
                s = l === i && a === e?.id;
            null == e ||
                null == n ||
                s ||
                null == i ||
                (S.A.openModReportAsSidebar({ channelId: e.id, baseChannelId: i, guildId: e.guild_id }),
                (0, T.iN)(i),
                O.default.track(U.HAw.MODERATOR_REPORT_ORIGINAL_MESSAGE_LINK_CLICKED, {
                    moderator_report_id: t.channel_id,
                    destination_channel_id: i,
                    destination_message_id: t.id,
                }));
        }, [t]);
    return null == p
        ? null
        : (0, i.jsxs)(d.D, {
              className: B.xQ,
              onClick: g,
              "aria-label": p.accessibilityLabel,
              children: [
                  null != p.originIconUrl
                      ? (0, i.jsx)("img", { className: B.yl, src: p.originIconUrl, alt: "" })
                      : null,
                  (0, i.jsx)(a.E, {
                      className: B.PJ,
                      variant: "text-sm/medium",
                      color: "none",
                      children: `${p.originLabel}  •  ${p.timestampLabel}`,
                  }),
                  (0, i.jsx)(c._, { size: "xxs", color: o.A.colors.TEXT_MUTED }),
              ],
          });
}
function H(e) {
    let { mergedMessageRecord: t, content: n, channel: a, reportingUserId: s, reportedTimestamp: r } = e,
        o = (0, g.m2)(t.author, a),
        {
            onClickUsername: d,
            onClickAvatar: c,
            onPopoutRequestClose: u,
            showUsernamePopout: m,
            showAvatarPopout: _,
        } = (function (e, t) {
            let { popouts: n, setPopout: i } = (0, I.A)(e.id, G.Fd),
                { usernameProfile: a, avatarProfile: s } = n,
                r = (0, E.m)(e, t, a, i);
            return {
                onClickUsername: r,
                onClickAvatar: (0, E.Jo)(s, i),
                onPopoutRequestClose: l.useCallback(
                    () => i({ usernameProfile: !1, avatarProfile: !1, referencedUsernameProfile: !1 }),
                    [i],
                ),
                showUsernamePopout: a,
                showAvatarPopout: s,
            };
        })(t, a);
    return (0, i.jsx)(A.A, {
        childrenExecutedCommand: (0, i.jsx)(M.A, {
            reportingUserId: s,
            guildId: a.guild_id,
            channel: a,
            messageId: t.id,
            reportedTimestamp: r,
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
            showUsernamePopout: m,
            showAvatarPopout: _,
            renderPopout: C.A,
            compact: !1,
            displayCompactAvatars: !1,
        }),
        childrenMessageContent: (0, i.jsx)(f.Ay, { message: t, content: n, compact: !1 }),
        disableInteraction: !0,
        compact: !1,
        className: B.iU,
        author: o,
    });
}
function V(e) {
    let { message: t, snapshot: n, index: a } = e,
        [r, o] = l.useState(void 0);
    l.useEffect(() => {
        n?.moderatorReport?.reported_user_id != null &&
            (0, u.wz)(n.moderatorReport.reported_user_id)
                .then((e) => {
                    o(e);
                })
                .catch(() => {});
    }, [n?.moderatorReport?.reported_user_id]);
    let d = l.useMemo(() => {
            let e = (0, _.A)(t, n);
            return null != r && n?.moderatorReport?.reported_user_id != null ? e.set("author", r) : e;
        }, [t, n, r]),
        c = y.hD.useSetting(),
        m = y.rs.useSetting(),
        h = (0, s.bG)([L.A], () => L.A.isDeveloper),
        g = (0, p.S)((d.editedTimestamp ?? d.timestamp).valueOf()),
        {
            content: A,
            hasSpoilerEmbeds: f,
            hasBailedAst: x,
        } = (0, v.A)(d, {
            hideSimpleEmbedContent: c && m,
            formatInline: !1,
            allowList: g,
            allowHeading: g,
            allowLinks: !0,
            allowDevLinks: h,
            previewLinkTarget: !0,
        }),
        C = (0, s.bG)([j.A], () => j.A.getChannel(t.channel_id));
    return null == C
        ? null
        : (0, i.jsx)(
              "div",
              {
                  className: B.kL,
                  children: (0, i.jsxs)("div", {
                      className: B.Qs,
                      children: [
                          (0, i.jsx)(H, {
                              mergedMessageRecord: d,
                              content: A,
                              channel: C,
                              reportingUserId: n?.moderatorReport?.reporting_user_id,
                              reportedTimestamp: t.timestamp,
                          }),
                          (0, b.A)({
                              channelMessageProps: { message: d, channel: C, compact: !1 },
                              hasSpoilerEmbeds: f,
                              hasBailedAst: x,
                              isInteracting: !1,
                              isMessageSnapshot: !0,
                              renderThreadAccessory: !1,
                              className: B.Mf,
                          }),
                          (0, i.jsx)(F, { message: t, snapshot: n, index: a }),
                      ],
                  }),
              },
              a,
          );
}
function q(e) {
    let { message: t } = e;
    return (0, i.jsx)(i.Fragment, {
        children: t.messageSnapshots.map((e, n) => (0, i.jsx)(V, { message: t, snapshot: e, index: n }, n)),
    });
}
