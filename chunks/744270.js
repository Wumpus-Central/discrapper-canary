n.d(t, { A: () => B });
var i = n(627968),
    l = n(64700),
    a = n(834730),
    r = n(17928),
    s = n(52133),
    o = n(661531),
    c = n(939249),
    d = n(320448),
    u = n(713654),
    _ = n(958340),
    m = n(384231),
    h = n(291812),
    p = n(375199),
    g = n(699352),
    f = n(8455),
    x = n(253932),
    A = n(734057),
    C = n(540999),
    v = n(71393),
    I = n(576705),
    E = n(994500),
    b = n(287809),
    y = n(862804),
    T = n(686956),
    j = n(22007),
    N = n(954571),
    S = n(449054),
    k = n(652215);
async function L(e) {
    if (null == e.messageReference) return;
    let t = e.messageReference.guild_id,
        n = e.messageReference.channel_id,
        i = e.messageReference.message_id,
        l = A.A.getChannel(n),
        a = !1;
    if (null == l && null != t && null == v.A.getGuild(t))
        try {
            await (0, S.Z2)(t, { object: k.ZSU.FORWARD_BREADCRUMB }, { shouldNavigate: !1 }),
                (a = !0),
                await (0, T.k)(t),
                (l = A.A.getChannel(n));
        } catch {}
    N.default.track(k.HAw.FORWARD_BREADCRUMB_CLICKED, {
        guild_id: A.A.getBasicChannel(e.channel_id)?.guild_id,
        channel_id: e.channel_id,
        message_id: e.id,
        breadcrumb_guild_id: t,
        breadcrumb_channel_id: n,
        breadcrumb_message_id: i,
        did_lurk: a,
    });
    let r = a ? n : void 0;
    (0, j.A)(k.BVt.CHANNEL(t, n, i), { welcomeModalChannelId: r });
}
var R = n(387408),
    w = n(427209),
    P = n(985018),
    D = n(249847);
function M() {
    return (0, i.jsxs)("div", {
        className: D.N1,
        children: [
            (0, i.jsx)(w.A, { size: "xs", className: D.nr, color: o.A.colors.TEXT_MUTED }),
            (0, i.jsx)(a.E, {
                className: D.TK,
                variant: "text-sm/semibold",
                color: "text-muted",
                children: P.intl.string(P.t.ToyvLk),
            }),
        ],
    });
}
function O(e) {
    let { message: t, snapshot: n, index: u } = e,
        m = l.useMemo(() => new y.j(t, n, u), [t, n, u]),
        h = (0, r.bG)(
            [A.A, b.default, E.A, I.A, v.A, _.A],
            () => m.getForwardInfo(A.A, b.default, E.A, I.A, v.A, _.A).footerInfo,
            [m],
            s.A,
        ),
        p = (0, r.bG)([A.A], () => A.A.getChannel(t.messageReference?.channel_id)),
        g = l.useCallback(() => {
            L(t);
        }, [t]);
    return null == h
        ? null
        : (0, i.jsxs)(c.D, {
              className: D.xQ,
              onClick: g,
              "aria-label": h.accessibilityLabel,
              children: [
                  null != h.originIconUrl
                      ? (0, i.jsx)("img", { className: D.yl, src: h.originIconUrl, alt: "" })
                      : null,
                  null == h.originIconUrl && p?.isThread() ? (0, i.jsx)(U, { channel: p }) : null,
                  (0, i.jsx)(a.E, {
                      className: D.PJ,
                      variant: "text-sm/medium",
                      color: "none",
                      children: `${h.originLabel}  •  ${h.timestampLabel}`,
                  }),
                  (0, i.jsx)(d._, { size: "xxs", color: o.A.colors.TEXT_MUTED }),
              ],
          });
}
function U(e) {
    let { channel: t } = e,
        n = (0, f.Vp)({ location: "ForwardFooter" }),
        a = l.useMemo(() => (0, u.gU)(t), [t]);
    return n.enabled && null != a ? (0, i.jsx)(a, { className: D.yl, size: "xs", color: "currentColor" }) : null;
}
function G(e) {
    let { message: t, snapshot: n, index: a } = e,
        s = l.useMemo(() => (0, R.A)(t, n), [t, n]),
        o = x.hD.useSetting(),
        c = x.rs.useSetting(),
        d = (0, r.bG)([C.A], () => C.A.isDeveloper),
        u = (0, m.S)((s.editedTimestamp ?? s.timestamp).valueOf()),
        {
            content: _,
            hasSpoilerEmbeds: f,
            hasBailedAst: v,
        } = (0, p.A)(s, {
            hideSimpleEmbedContent: o && c,
            formatInline: !1,
            allowList: u,
            allowHeading: u,
            allowLinks: !0,
            allowDevLinks: d,
            previewLinkTarget: !0,
        }),
        I = (0, r.bG)([A.A], () => A.A.getChannel(t.channel_id)),
        E = x.hH.useSetting();
    return null == I
        ? null
        : (0, i.jsxs)(
              "div",
              {
                  className: D.kL,
                  children: [
                      (0, i.jsx)("div", { className: D.hD }),
                      (0, i.jsxs)("div", {
                          className: D.Qs,
                          children: [
                              (0, i.jsx)(M, {}),
                              (0, i.jsx)(h.Ay, { message: s, content: _, compact: E }),
                              (0, g.A)({
                                  channelMessageProps: { message: s, channel: I, compact: E },
                                  hasSpoilerEmbeds: f,
                                  hasBailedAst: v,
                                  isInteracting: !1,
                                  isMessageSnapshot: !0,
                                  renderThreadAccessory: !1,
                              }),
                              (0, i.jsx)(O, { message: t, snapshot: n, index: a }),
                          ],
                      }),
                  ],
              },
              a,
          );
}
function B(e) {
    let { message: t } = e;
    return (0, i.jsx)(i.Fragment, {
        children: t.messageSnapshots.map((e, n) => (0, i.jsx)(G, { message: t, snapshot: e, index: n }, n)),
    });
}
