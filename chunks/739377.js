n.d(t, { A: () => es });
var i = n(627968),
    l = n(64700),
    s = n(834730),
    a = n(17928),
    r = n(52133),
    o = n(661531),
    d = n(939249),
    c = n(320448),
    u = n(803306),
    m = n(862804),
    h = n(387408),
    g = n(958340),
    A = n(384231),
    p = n(763754),
    x = n(491182),
    f = n(291812),
    C = n(639288),
    E = n(10364),
    v = n(112758),
    I = n(754459),
    _ = n(375199),
    j = n(699352),
    N = n(378570),
    T = n(138298),
    y = n(253932),
    S = n(761640),
    b = n(734057),
    k = n(540999),
    L = n(71393),
    R = n(576705),
    P = n(994500),
    M = n(309010),
    D = n(287809),
    w = n(954571),
    O = n(503698),
    U = n.n(O),
    G = n(989349),
    V = n.n(G),
    B = n(778712),
    H = n(97808),
    F = n(606049),
    z = n(943815),
    Y = n(447215),
    W = n(58703),
    K = n(221314),
    J = n(985018),
    q = n(237507),
    Z = n(334211),
    X = n(513653);
let $ = (e) => {
    let { reportingUserId: t, guildId: n, compact: a, channel: r, messageId: o, reportedTimestamp: d } = e,
        c = D.default.getUser(t),
        u = l.useMemo(() => (a ? (0, z.A)((0, W.i$)(V()(), "LT")) : null), [a]),
        m = (0, Y.P)({ user: c, channelId: r.id, guildId: n, messageId: o })((0, p.m2)(c, r)),
        h = null != c ? c.getAvatarURL(n, (0, B.FT)(B._3.SIZE_16)) : X,
        g =
            null != c
                ? J.intl.format(K.default["+zqXZs"], { username: c.username, onUserClick: m })
                : J.intl.string(K.default.xpRjfS);
    return (0, i.jsxs)("div", {
        className: U()(Z.NB, Z.JZ, u),
        children: [
            (0, i.jsx)(H.eu, { src: h, size: B._3.SIZE_16, className: q.my, "aria-label": "" }),
            (0, i.jsx)(s.E, { variant: "text-sm/medium", color: "text-subtle", className: q.Xh, children: g }),
            (0, i.jsxs)(s.E, {
                variant: "text-sm/medium",
                color: "text-subtle",
                children: [
                    (0, i.jsx)("span", { className: q.Ek, children: "•" }),
                    (0, i.jsx)(F.A, { timestamp: d, className: q.vE }),
                ],
            }),
        ],
    });
};
var Q = n(652215),
    ee = n(381941),
    et = n(167684);
function en(e) {
    let { message: t, snapshot: n, index: u } = e,
        h = l.useMemo(() => new m.j(t, n, u), [t, n, u]),
        A = (0, a.bG)(
            [b.A, D.default, P.A, R.A, L.A, g.A],
            () => h.getForwardInfo(b.A, D.default, P.A, R.A, L.A, g.A).footerInfo,
            [h],
            r.A,
        ),
        p = l.useCallback(() => {
            let e = b.A.getChannel(t.channel_id),
                n = L.A.getGuild(e?.guild_id),
                i = t.messageReference?.channel_id,
                l = M.A.getCurrentlySelectedChannelId(),
                s = S.Ay.getCurrentSidebarChannelId(t.messageReference?.channel_id),
                a = l === i && s === e?.id;
            null == e ||
                null == n ||
                a ||
                null == i ||
                (T.A.openModReportAsSidebar({ channelId: e.id, baseChannelId: i, guildId: e.guild_id }),
                (0, N.iN)(i),
                w.default.track(Q.HAw.MODERATOR_REPORT_ORIGINAL_MESSAGE_LINK_CLICKED, {
                    moderator_report_id: t.channel_id,
                    destination_channel_id: i,
                    destination_message_id: t.id,
                }));
        }, [t]);
    return null == A
        ? null
        : (0, i.jsxs)(d.D, {
              className: et.xQ,
              onClick: p,
              "aria-label": A.accessibilityLabel,
              children: [
                  null != A.originIconUrl
                      ? (0, i.jsx)("img", { className: et.yl, src: A.originIconUrl, alt: "" })
                      : null,
                  (0, i.jsx)(s.E, {
                      className: et.PJ,
                      variant: "text-sm/medium",
                      color: "none",
                      children: `${A.originLabel}  •  ${A.timestampLabel}`,
                  }),
                  (0, i.jsx)(c._, { size: "xxs", color: o.A.colors.TEXT_MUTED }),
              ],
          });
}
function ei(e) {
    let { mergedMessageRecord: t, content: n, channel: s, reportingUserId: a, reportedTimestamp: r } = e,
        o = (0, p.m2)(t.author, s),
        {
            onClickUsername: d,
            onClickAvatar: c,
            onPopoutRequestClose: u,
            showUsernamePopout: m,
            showAvatarPopout: h,
        } = (function (e, t) {
            let { popouts: n, setPopout: i } = (0, I.A)(e.id, ee.Fd),
                { usernameProfile: s, avatarProfile: a } = n,
                r = (0, v.m)(e, t, s, i);
            return {
                onClickUsername: r,
                onClickAvatar: (0, v.Jo)(a, i),
                onPopoutRequestClose: l.useCallback(
                    () => i({ usernameProfile: !1, avatarProfile: !1, referencedUsernameProfile: !1 }),
                    [i],
                ),
                showUsernamePopout: s,
                showAvatarPopout: a,
            };
        })(t, s);
    return (0, i.jsx)(x.A, {
        childrenExecutedCommand: (0, i.jsx)($, {
            reportingUserId: a,
            guildId: s.guild_id,
            channel: s,
            messageId: t.id,
            reportedTimestamp: r,
            compact: !1,
        }),
        childrenHeader: (0, i.jsx)(C.Ay, {
            message: t,
            channel: s,
            author: o,
            guildId: s.guild_id,
            hideTimestamp: !0,
            onClickUsername: d,
            onClickAvatar: c,
            onPopoutRequestClose: u,
            showUsernamePopout: m,
            showAvatarPopout: h,
            renderPopout: E.A,
            compact: !1,
            displayCompactAvatars: !1,
        }),
        childrenMessageContent: (0, i.jsx)(f.Ay, { message: t, content: n, compact: !1 }),
        disableInteraction: !0,
        compact: !1,
        className: et.iU,
        author: o,
    });
}
function el(e) {
    let { message: t, snapshot: n, index: s } = e,
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
            let e = (0, h.A)(t, n);
            return null != r && n?.moderatorReport?.reported_user_id != null ? e.set("author", r) : e;
        }, [t, n, r]),
        c = y.hD.useSetting(),
        m = y.rs.useSetting(),
        g = (0, a.bG)([k.A], () => k.A.isDeveloper),
        p = (0, A.S)((d.editedTimestamp ?? d.timestamp).valueOf()),
        {
            content: x,
            hasSpoilerEmbeds: f,
            hasBailedAst: C,
        } = (0, _.A)(d, {
            hideSimpleEmbedContent: c && m,
            formatInline: !1,
            allowList: p,
            allowHeading: p,
            allowLinks: !0,
            allowDevLinks: g,
            previewLinkTarget: !0,
        }),
        E = (0, a.bG)([b.A], () => b.A.getChannel(t.channel_id));
    return null == E
        ? null
        : (0, i.jsx)(
              "div",
              {
                  className: et.kL,
                  children: (0, i.jsxs)("div", {
                      className: et.Qs,
                      children: [
                          (0, i.jsx)(ei, {
                              mergedMessageRecord: d,
                              content: x,
                              channel: E,
                              reportingUserId: n?.moderatorReport?.reporting_user_id,
                              reportedTimestamp: t.timestamp,
                          }),
                          (0, j.A)({
                              channelMessageProps: { message: d, channel: E, compact: !1 },
                              hasSpoilerEmbeds: f,
                              hasBailedAst: C,
                              isInteracting: !1,
                              isMessageSnapshot: !0,
                              renderThreadAccessory: !1,
                              className: et.Mf,
                          }),
                          (0, i.jsx)(en, { message: t, snapshot: n, index: s }),
                      ],
                  }),
              },
              s,
          );
}
function es(e) {
    let { message: t } = e;
    return (0, i.jsx)(i.Fragment, {
        children: t.messageSnapshots.map((e, n) => (0, i.jsx)(el, { message: t, snapshot: e, index: n }, n)),
    });
}
