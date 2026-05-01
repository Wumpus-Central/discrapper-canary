n.d(t, { A: () => V });
var i = n(627968),
    l = n(64700),
    s = n(834730),
    a = n(17928),
    r = n(52133),
    o = n(661531),
    d = n(939249),
    c = n(320448),
    u = n(713654),
    m = n(958340),
    h = n(384231),
    g = n(291812),
    A = n(375199),
    p = n(699352),
    x = n(8455),
    f = n(253932),
    C = n(734057),
    E = n(540999),
    v = n(71393),
    I = n(576705),
    _ = n(994500),
    j = n(287809),
    N = n(862804),
    T = n(686956),
    y = n(22007),
    S = n(954571),
    b = n(449054),
    k = n(652215);
async function L(e) {
    if (null == e.messageReference) return;
    let t = e.messageReference.guild_id,
        n = e.messageReference.channel_id,
        i = e.messageReference.message_id,
        l = C.A.getChannel(n),
        s = !1;
    if (null == l && null != t && null == v.A.getGuild(t))
        try {
            await (0, b.Z2)(t, { object: k.ZSU.FORWARD_BREADCRUMB }, { shouldNavigate: !1 }),
                (s = !0),
                await (0, T.k)(t),
                (l = C.A.getChannel(n));
        } catch {}
    S.default.track(k.HAw.FORWARD_BREADCRUMB_CLICKED, {
        guild_id: C.A.getBasicChannel(e.channel_id)?.guild_id,
        channel_id: e.channel_id,
        message_id: e.id,
        breadcrumb_guild_id: t,
        breadcrumb_channel_id: n,
        breadcrumb_message_id: i,
        did_lurk: s,
    });
    let a = s ? n : void 0;
    (0, y.A)(k.BVt.CHANNEL(t, n, i), { welcomeModalChannelId: a });
}
var R = n(387408),
    P = n(427209),
    M = n(985018),
    D = n(249847);
function w() {
    return (0, i.jsxs)("div", {
        className: D.N1,
        children: [
            (0, i.jsx)(P.A, { size: "xs", className: D.nr, color: o.A.colors.TEXT_MUTED }),
            (0, i.jsx)(s.E, {
                className: D.TK,
                variant: "text-sm/semibold",
                color: "text-muted",
                children: M.intl.string(M.t.ToyvLk),
            }),
        ],
    });
}
function O(e) {
    let { message: t, snapshot: n, index: u } = e,
        h = l.useMemo(() => new N.j(t, n, u), [t, n, u]),
        g = (0, a.bG)(
            [C.A, j.default, _.A, I.A, v.A, m.A],
            () => h.getForwardInfo(C.A, j.default, _.A, I.A, v.A, m.A).footerInfo,
            [h],
            r.A,
        ),
        A = (0, a.bG)([C.A], () => C.A.getChannel(t.messageReference?.channel_id)),
        p = l.useCallback(() => {
            L(t);
        }, [t]);
    return null == g
        ? null
        : (0, i.jsxs)(d.D, {
              className: D.xQ,
              onClick: p,
              "aria-label": g.accessibilityLabel,
              children: [
                  null != g.originIconUrl
                      ? (0, i.jsx)("img", { className: D.yl, src: g.originIconUrl, alt: "" })
                      : null,
                  null == g.originIconUrl && A?.isThread() ? (0, i.jsx)(U, { channel: A }) : null,
                  (0, i.jsx)(s.E, {
                      className: D.PJ,
                      variant: "text-sm/medium",
                      color: "none",
                      children: `${g.originLabel}  •  ${g.timestampLabel}`,
                  }),
                  (0, i.jsx)(c._, { size: "xxs", color: o.A.colors.TEXT_MUTED }),
              ],
          });
}
function U(e) {
    let { channel: t } = e,
        n = (0, x.Vp)({ location: "ForwardFooter" }),
        s = l.useMemo(() => (0, u.gU)(t), [t]);
    return n.enabled && null != s ? (0, i.jsx)(s, { className: D.yl, size: "xs", color: "currentColor" }) : null;
}
function G(e) {
    let { message: t, snapshot: n, index: s } = e,
        r = l.useMemo(() => (0, R.A)(t, n), [t, n]),
        o = f.hD.useSetting(),
        d = f.rs.useSetting(),
        c = (0, a.bG)([E.A], () => E.A.isDeveloper),
        u = (0, h.S)((r.editedTimestamp ?? r.timestamp).valueOf()),
        {
            content: m,
            hasSpoilerEmbeds: x,
            hasBailedAst: v,
        } = (0, A.A)(r, {
            hideSimpleEmbedContent: o && d,
            formatInline: !1,
            allowList: u,
            allowHeading: u,
            allowLinks: !0,
            allowDevLinks: c,
            previewLinkTarget: !0,
        }),
        I = (0, a.bG)([C.A], () => C.A.getChannel(t.channel_id)),
        _ = f.hH.useSetting();
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
                              (0, i.jsx)(w, {}),
                              (0, i.jsx)(g.Ay, { message: r, content: m, compact: _ }),
                              (0, p.A)({
                                  channelMessageProps: { message: r, channel: I, compact: _ },
                                  hasSpoilerEmbeds: x,
                                  hasBailedAst: v,
                                  isInteracting: !1,
                                  isMessageSnapshot: !0,
                                  renderThreadAccessory: !1,
                              }),
                              (0, i.jsx)(O, { message: t, snapshot: n, index: s }),
                          ],
                      }),
                  ],
              },
              s,
          );
}
function V(e) {
    let { message: t } = e;
    return (0, i.jsx)(i.Fragment, {
        children: t.messageSnapshots.map((e, n) => (0, i.jsx)(G, { message: t, snapshot: e, index: n }, n)),
    });
}
