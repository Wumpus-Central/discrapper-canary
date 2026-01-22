n.d(t, {
    A: () => Y,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(158954),
    s = n(311907),
    o = n(52133),
    l = n(827734),
    c = n(397927),
    u = n(803306),
    d = n(862804),
    f = n(387408),
    p = n(958340),
    _ = n(384231),
    h = n(763754),
    m = n(491182),
    g = n(291812),
    E = n(643204),
    b = n(535421),
    y = n(112758),
    O = n(754459),
    A = n(538355),
    v = n(699352),
    S = n(378570),
    I = n(138298),
    T = n(253932),
    C = n(761640),
    N = n(734057),
    R = n(540999),
    w = n(71393),
    P = n(576705),
    D = n(994500),
    x = n(309010),
    L = n(287809),
    j = n(954571),
    M = n(709634),
    k = n(652215),
    U = n(381941),
    G = n(618231);

function V(e) {
    let { message: t, snapshot: n, index: u } = e,
        f = i.useMemo(() => new d.j(t, n, u), [t, n, u]),
        _ = (0, s.bG)(
            [N.A, L.default, D.A, P.A, w.A, p.A],
            () => f.getForwardInfo(N.A, L.default, D.A, P.A, w.A, p.A).footerInfo,
            [f],
            o.A,
        ),
        h = i.useCallback(() => {
            var e, n;
            let r = N.A.getChannel(t.channel_id),
                i = w.A.getGuild(null == r ? void 0 : r.guild_id),
                a = null == (e = t.messageReference) ? void 0 : e.channel_id,
                s = x.A.getCurrentlySelectedChannelId(),
                o = C.Ay.getCurrentSidebarChannelId(null == (n = t.messageReference) ? void 0 : n.channel_id),
                l = s === a && o === (null == r ? void 0 : r.id);
            null == r ||
                null == i ||
                l ||
                null == a ||
                (I.A.openModReportAsSidebar({
                    channelId: r.id,
                    baseChannelId: a,
                    guildId: r.guild_id,
                }),
                (0, S.iN)(a),
                j.default.track(k.HAw.MODERATOR_REPORT_ORIGINAL_MESSAGE_LINK_CLICKED, {
                    moderator_report_id: t.channel_id,
                    destination_channel_id: a,
                    destination_message_id: t.id,
                }));
        }, [t]);
    return null == _
        ? null
        : (0, r.jsxs)(c.DUT, {
              className: G.xQ,
              onClick: h,
              "aria-label": _.accessibilityLabel,
              children: [
                  null != _.originIconUrl
                      ? (0, r.jsx)("img", {
                            className: G.yl,
                            src: _.originIconUrl,
                            alt: "",
                        })
                      : null,
                  (0, r.jsx)(a.EYj, {
                      className: G.PJ,
                      variant: "text-sm/medium",
                      color: "none",
                      children: "".concat(_.originLabel, "  •  ").concat(_.timestampLabel),
                  }),
                  (0, r.jsx)(c._BQ, {
                      size: "xxs",
                      color: l.A.colors.TEXT_MUTED,
                  }),
              ],
          });
}

function F(e, t) {
    let { popouts: n, setPopout: r } = (0, O.A)(e.id, U.Fd),
        { usernameProfile: a, avatarProfile: s } = n,
        o = (0, y.m)(e, t, a, r);
    return {
        onClickUsername: o,
        onClickAvatar: (0, y.Jo)(s, r),
        onPopoutRequestClose: i.useCallback(
            () =>
                r({
                    usernameProfile: !1,
                    avatarProfile: !1,
                    referencedUsernameProfile: !1,
                }),
            [r],
        ),
        showUsernamePopout: a,
        showAvatarPopout: s,
    };
}

function B(e) {
    let { mergedMessageRecord: t, content: n, channel: i, reportingUserId: a, reportedTimestamp: s } = e,
        o = (0, h.m2)(t.author, i),
        {
            onClickUsername: l,
            onClickAvatar: c,
            onPopoutRequestClose: u,
            showUsernamePopout: d,
            showAvatarPopout: f,
        } = F(t, i);
    return (0, r.jsx)(m.A, {
        childrenExecutedCommand: (0, r.jsx)(M.A, {
            reportingUserId: a,
            guildId: i.guild_id,
            channel: i,
            messageId: t.id,
            reportedTimestamp: s,
            compact: !1,
        }),
        childrenHeader: (0, r.jsx)(E.Ay, {
            message: t,
            channel: i,
            author: o,
            guildId: i.guild_id,
            hideTimestamp: !0,
            onClickUsername: l,
            onClickAvatar: c,
            onPopoutRequestClose: u,
            showUsernamePopout: d,
            showAvatarPopout: f,
            renderPopout: b.A,
            compact: !1,
            displayCompactAvatars: !1,
        }),
        childrenMessageContent: (0, r.jsx)(g.Ay, {
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
    var t, n, a;
    let { message: o, snapshot: l, index: c } = e,
        [d, p] = i.useState(void 0);
    i.useEffect(() => {
        var e;
        (null == l || null == (e = l.moderatorReport) ? void 0 : e.reported_user_id) != null &&
            (0, u.wz)(l.moderatorReport.reported_user_id)
                .then((e) => {
                    p(e);
                })
                .catch(() => {});
    }, [null == l || null == (n = l.moderatorReport) ? void 0 : n.reported_user_id]);
    let h = i.useMemo(() => {
            var e;
            let t = (0, f.A)(o, l);
            return null != d && (null == l || null == (e = l.moderatorReport) ? void 0 : e.reported_user_id) != null
                ? t.set("author", d)
                : t;
        }, [o, l, d]),
        m = T.hD.useSetting(),
        g = T.rs.useSetting(),
        E = m && g,
        b = (0, s.bG)([R.A], () => R.A.isDeveloper),
        y = (0, _.S)((null != (t = h.editedTimestamp) ? t : h.timestamp).valueOf()),
        {
            content: O,
            hasSpoilerEmbeds: S,
            hasBailedAst: I,
        } = (0, A.A)(h, {
            hideSimpleEmbedContent: E,
            isInteracting: !1,
            formatInline: !1,
            allowList: y,
            allowHeading: y,
            allowLinks: !0,
            allowDevLinks: b,
            previewLinkTarget: !0,
        }),
        C = (0, s.bG)([N.A], () => N.A.getChannel(o.channel_id));
    return null == C
        ? null
        : (0, r.jsx)(
              "div",
              {
                  className: G.kL,
                  children: (0, r.jsxs)("div", {
                      className: G.Qs,
                      children: [
                          (0, r.jsx)(B, {
                              mergedMessageRecord: h,
                              content: O,
                              channel: C,
                              reportingUserId:
                                  null == l || null == (a = l.moderatorReport) ? void 0 : a.reporting_user_id,
                              reportedTimestamp: o.timestamp,
                          }),
                          (0, v.A)({
                              channelMessageProps: {
                                  message: h,
                                  channel: C,
                                  compact: !1,
                              },
                              hasSpoilerEmbeds: S,
                              hasBailedAst: I,
                              isInteracting: !1,
                              isMessageSnapshot: !0,
                              renderThreadAccessory: !1,
                              className: G.Mf,
                          }),
                          (0, r.jsx)(V, {
                              message: o,
                              snapshot: l,
                              index: c,
                          }),
                      ],
                  }),
              },
              c,
          );
}

function Y(e) {
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
