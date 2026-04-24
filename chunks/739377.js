n.d(t, { A: () => ea });
var i = n(627968),
    l = n(64700),
    a = n(834730),
    r = n(17928),
    s = n(52133),
    o = n(661531),
    c = n(939249),
    d = n(320448),
    u = n(803306),
    _ = n(862804),
    m = n(387408),
    h = n(958340),
    p = n(384231),
    g = n(763754),
    f = n(491182),
    x = n(291812),
    A = n(639288),
    C = n(10364),
    v = n(112758),
    I = n(754459),
    E = n(375199),
    b = n(699352),
    y = n(378570),
    T = n(138298),
    j = n(253932),
    N = n(761640),
    S = n(734057),
    k = n(540999),
    L = n(71393),
    R = n(576705),
    w = n(994500),
    P = n(309010),
    D = n(287809),
    M = n(954571),
    O = n(503698),
    U = n.n(O),
    G = n(989349),
    B = n.n(G),
    V = n(778712),
    F = n(97808),
    H = n(606049),
    z = n(943815),
    W = n(447215),
    Y = n(58703),
    K = n(221314),
    q = n(985018),
    Z = n(237507),
    J = n(334211),
    Q = n(513653);
let X = (e) => {
    let { reportingUserId: t, guildId: n, compact: r, channel: s, messageId: o, reportedTimestamp: c } = e,
        d = D.default.getUser(t),
        u = l.useMemo(() => (r ? (0, z.A)((0, Y.i$)(B()(), "LT")) : null), [r]),
        _ = (0, W.P)({ user: d, channelId: s.id, guildId: n, messageId: o })((0, g.m2)(d, s)),
        m = null != d ? d.getAvatarURL(n, (0, V.FT)(V._3.SIZE_16)) : Q,
        h =
            null != d
                ? q.intl.format(K.default["+zqXZs"], { username: d.username, onUserClick: _ })
                : q.intl.string(K.default.xpRjfS);
    return (0, i.jsxs)("div", {
        className: U()(J.NB, J.JZ, u),
        children: [
            (0, i.jsx)(F.eu, { src: m, size: V._3.SIZE_16, className: Z.my, "aria-label": "" }),
            (0, i.jsx)(a.E, { variant: "text-sm/medium", color: "text-subtle", className: Z.Xh, children: h }),
            (0, i.jsxs)(a.E, {
                variant: "text-sm/medium",
                color: "text-subtle",
                children: [
                    (0, i.jsx)("span", { className: Z.Ek, children: "•" }),
                    (0, i.jsx)(H.A, { timestamp: c, className: Z.vE }),
                ],
            }),
        ],
    });
};
var $ = n(652215),
    ee = n(381941),
    et = n(167684);
function en(e) {
    let { message: t, snapshot: n, index: u } = e,
        m = l.useMemo(() => new _.j(t, n, u), [t, n, u]),
        p = (0, r.bG)(
            [S.A, D.default, w.A, R.A, L.A, h.A],
            () => m.getForwardInfo(S.A, D.default, w.A, R.A, L.A, h.A).footerInfo,
            [m],
            s.A,
        ),
        g = l.useCallback(() => {
            let e = S.A.getChannel(t.channel_id),
                n = L.A.getGuild(e?.guild_id),
                i = t.messageReference?.channel_id,
                l = P.A.getCurrentlySelectedChannelId(),
                a = N.Ay.getCurrentSidebarChannelId(t.messageReference?.channel_id),
                r = l === i && a === e?.id;
            null == e ||
                null == n ||
                r ||
                null == i ||
                (T.A.openModReportAsSidebar({ channelId: e.id, baseChannelId: i, guildId: e.guild_id }),
                (0, y.iN)(i),
                M.default.track($.HAw.MODERATOR_REPORT_ORIGINAL_MESSAGE_LINK_CLICKED, {
                    moderator_report_id: t.channel_id,
                    destination_channel_id: i,
                    destination_message_id: t.id,
                }));
        }, [t]);
    return null == p
        ? null
        : (0, i.jsxs)(c.D, {
              className: et.xQ,
              onClick: g,
              "aria-label": p.accessibilityLabel,
              children: [
                  null != p.originIconUrl
                      ? (0, i.jsx)("img", { className: et.yl, src: p.originIconUrl, alt: "" })
                      : null,
                  (0, i.jsx)(a.E, {
                      className: et.PJ,
                      variant: "text-sm/medium",
                      color: "none",
                      children: `${p.originLabel}  •  ${p.timestampLabel}`,
                  }),
                  (0, i.jsx)(d._, { size: "xxs", color: o.A.colors.TEXT_MUTED }),
              ],
          });
}
function ei(e) {
    let { mergedMessageRecord: t, content: n, channel: a, reportingUserId: r, reportedTimestamp: s } = e,
        o = (0, g.m2)(t.author, a),
        {
            onClickUsername: c,
            onClickAvatar: d,
            onPopoutRequestClose: u,
            showUsernamePopout: _,
            showAvatarPopout: m,
        } = (function (e, t) {
            let { popouts: n, setPopout: i } = (0, I.A)(e.id, ee.Fd),
                { usernameProfile: a, avatarProfile: r } = n,
                s = (0, v.m)(e, t, a, i);
            return {
                onClickUsername: s,
                onClickAvatar: (0, v.Jo)(r, i),
                onPopoutRequestClose: l.useCallback(
                    () => i({ usernameProfile: !1, avatarProfile: !1, referencedUsernameProfile: !1 }),
                    [i],
                ),
                showUsernamePopout: a,
                showAvatarPopout: r,
            };
        })(t, a);
    return (0, i.jsx)(f.A, {
        childrenExecutedCommand: (0, i.jsx)(X, {
            reportingUserId: r,
            guildId: a.guild_id,
            channel: a,
            messageId: t.id,
            reportedTimestamp: s,
            compact: !1,
        }),
        childrenHeader: (0, i.jsx)(A.Ay, {
            message: t,
            channel: a,
            author: o,
            guildId: a.guild_id,
            hideTimestamp: !0,
            onClickUsername: c,
            onClickAvatar: d,
            onPopoutRequestClose: u,
            showUsernamePopout: _,
            showAvatarPopout: m,
            renderPopout: C.A,
            compact: !1,
            displayCompactAvatars: !1,
        }),
        childrenMessageContent: (0, i.jsx)(x.Ay, { message: t, content: n, compact: !1 }),
        disableInteraction: !0,
        compact: !1,
        className: et.iU,
        author: o,
    });
}
function el(e) {
    let { message: t, snapshot: n, index: a } = e,
        [s, o] = l.useState(void 0);
    l.useEffect(() => {
        n?.moderatorReport?.reported_user_id != null &&
            (0, u.wz)(n.moderatorReport.reported_user_id)
                .then((e) => {
                    o(e);
                })
                .catch(() => {});
    }, [n?.moderatorReport?.reported_user_id]);
    let c = l.useMemo(() => {
            let e = (0, m.A)(t, n);
            return null != s && n?.moderatorReport?.reported_user_id != null ? e.set("author", s) : e;
        }, [t, n, s]),
        d = j.hD.useSetting(),
        _ = j.rs.useSetting(),
        h = (0, r.bG)([k.A], () => k.A.isDeveloper),
        g = (0, p.S)((c.editedTimestamp ?? c.timestamp).valueOf()),
        {
            content: f,
            hasSpoilerEmbeds: x,
            hasBailedAst: A,
        } = (0, E.A)(c, {
            hideSimpleEmbedContent: d && _,
            formatInline: !1,
            allowList: g,
            allowHeading: g,
            allowLinks: !0,
            allowDevLinks: h,
            previewLinkTarget: !0,
        }),
        C = (0, r.bG)([S.A], () => S.A.getChannel(t.channel_id));
    return null == C
        ? null
        : (0, i.jsx)(
              "div",
              {
                  className: et.kL,
                  children: (0, i.jsxs)("div", {
                      className: et.Qs,
                      children: [
                          (0, i.jsx)(ei, {
                              mergedMessageRecord: c,
                              content: f,
                              channel: C,
                              reportingUserId: n?.moderatorReport?.reporting_user_id,
                              reportedTimestamp: t.timestamp,
                          }),
                          (0, b.A)({
                              channelMessageProps: { message: c, channel: C, compact: !1 },
                              hasSpoilerEmbeds: x,
                              hasBailedAst: A,
                              isInteracting: !1,
                              isMessageSnapshot: !0,
                              renderThreadAccessory: !1,
                              className: et.Mf,
                          }),
                          (0, i.jsx)(en, { message: t, snapshot: n, index: a }),
                      ],
                  }),
              },
              a,
          );
}
function ea(e) {
    let { message: t } = e;
    return (0, i.jsx)(i.Fragment, {
        children: t.messageSnapshots.map((e, n) => (0, i.jsx)(el, { message: t, snapshot: e, index: n }, n)),
    });
}
