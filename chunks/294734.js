n.d(t, { Z: () => L });
var r = n(54381),
    i = n(473749),
    a = n(793030),
    o = n(442837),
    s = n(902704),
    l = n(692547),
    c = n(481060),
    u = n(471445),
    d = n(356264),
    f = n(628238),
    p = n(930282),
    _ = n(25015),
    m = n(438075),
    h = n(284928),
    g = n(695346),
    E = n(592125),
    b = n(906467),
    y = n(430824),
    O = n(496675),
    v = n(699516),
    S = n(594174),
    I = n(100604),
    T = n(694784),
    C = n(39154),
    A = n(245216),
    N = n(388032),
    P = n(154706);
function R() {
    return (0, r.jsxs)("div", {
        className: P.headerContainer,
        children: [
            (0, r.jsx)(A.Z, {
                size: "xs",
                className: P.headerIcon,
                color: l.Z.colors.TEXT_MUTED,
            }),
            (0, r.jsx)(a.xvT, {
                className: P.headerText,
                variant: "text-sm/semibold",
                color: "text-muted",
                children: N.intl.string(N.t.ToyvLk),
            }),
        ],
    });
}
function w(e) {
    let { message: t, snapshot: n, index: u } = e,
        f = i.useMemo(() => new I.r(t, n, u), [t, n, u]),
        p = (0, o.e7)(
            [E.Z, S.default, v.Z, O.Z, y.Z, d.Z],
            () => f.getForwardInfo(E.Z, S.default, v.Z, O.Z, y.Z, d.Z).footerInfo,
            [f],
            s.Z,
        ),
        _ = (0, o.e7)([E.Z], () => {
            var e;
            return E.Z.getChannel(null == (e = t.messageReference) ? void 0 : e.channel_id);
        }),
        m = i.useCallback(() => {
            (0, T.Z)(t);
        }, [t]);
    return null == p
        ? null
        : (0, r.jsxs)(c.P3F, {
              className: P.footerContainer,
              onClick: m,
              "aria-label": p.accessibilityLabel,
              children: [
                  null != p.originIconUrl
                      ? (0, r.jsx)("img", {
                            className: P.originIcon,
                            src: p.originIconUrl,
                            alt: "",
                        })
                      : null,
                  null == p.originIconUrl && (null == _ ? void 0 : _.isThread()) ? (0, r.jsx)(D, { channel: _ }) : null,
                  (0, r.jsx)(a.xvT, {
                      className: P.footerText,
                      variant: "text-sm/medium",
                      color: "none",
                      children: "".concat(p.originLabel, "  \u2022  ").concat(p.timestampLabel),
                  }),
                  (0, r.jsx)(c.Fbu, {
                      size: "xxs",
                      color: l.Z.colors.TEXT_MUTED,
                  }),
              ],
          });
}
function D(e) {
    let { channel: t } = e,
        n = (0, h.KN)({ location: "ForwardFooter" }),
        a = i.useMemo(() => (0, u.KS)(t), [t]);
    return n.enabled && null != a
        ? (0, r.jsx)(a, {
              className: P.originIcon,
              size: "xs",
              color: "currentColor",
          })
        : null;
}
function x(e) {
    var t;
    let { message: n, snapshot: a, index: s } = e,
        l = i.useMemo(() => (0, C.Z)(n, a), [n, a]),
        c = g.RS.useSetting(),
        u = g.NA.useSetting(),
        d = c && u,
        h = (0, o.e7)([b.Z], () => b.Z.isDeveloper),
        y = (0, f.A)((null != (t = l.editedTimestamp) ? t : l.timestamp).valueOf()),
        {
            content: O,
            hasSpoilerEmbeds: v,
            hasBailedAst: S,
        } = (0, _.Z)(l, {
            hideSimpleEmbedContent: d,
            isInteracting: !1,
            formatInline: !1,
            allowList: y,
            allowHeading: y,
            allowLinks: !0,
            allowDevLinks: h,
            previewLinkTarget: !0,
        }),
        I = (0, o.e7)([E.Z], () => E.Z.getChannel(n.channel_id)),
        T = g.jU.useSetting();
    return null == I
        ? null
        : (0, r.jsxs)(
              "div",
              {
                  className: P.container,
                  children: [
                      (0, r.jsx)("div", { className: P.quote }),
                      (0, r.jsxs)("div", {
                          className: P.content,
                          children: [
                              (0, r.jsx)(R, {}),
                              (0, r.jsx)(p.ZP, {
                                  message: l,
                                  content: O,
                                  compact: T,
                              }),
                              (0, m.Z)({
                                  channelMessageProps: {
                                      message: l,
                                      channel: I,
                                      compact: T,
                                  },
                                  hasSpoilerEmbeds: v,
                                  hasBailedAst: S,
                                  isInteracting: !1,
                                  isMessageSnapshot: !0,
                                  renderThreadAccessory: !1,
                              }),
                              (0, r.jsx)(w, {
                                  message: n,
                                  snapshot: a,
                                  index: s,
                              }),
                          ],
                      }),
                  ],
              },
              s,
          );
}
function L(e) {
    let { message: t } = e;
    return (0, r.jsx)(r.Fragment, {
        children: t.messageSnapshots.map((e, n) =>
            (0, r.jsx)(
                x,
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
