n.d(t, { Z: () => w });
var r = n(951288),
    i = n(647438),
    a = n(793030),
    o = n(442837),
    s = n(902704),
    l = n(692547),
    c = n(481060),
    u = n(356264),
    d = n(628238),
    f = n(930282),
    _ = n(25015),
    p = n(438075),
    h = n(695346),
    m = n(592125),
    g = n(906467),
    E = n(430824),
    b = n(496675),
    y = n(699516),
    O = n(594174),
    v = n(100604),
    I = n(694784),
    S = n(39154),
    T = n(245216),
    A = n(388032),
    C = n(761053);
function N() {
    return (0, r.jsxs)("div", {
        className: C.headerContainer,
        children: [
            (0, r.jsx)(T.Z, {
                size: "xs",
                className: C.headerIcon,
                color: l.Z.colors.TEXT_LOW_CONTRAST,
            }),
            (0, r.jsx)(a.xvT, {
                className: C.headerText,
                variant: "text-sm/semibold",
                color: "text-low-contrast",
                children: A.intl.string(A.t.ToyvLk),
            }),
        ],
    });
}
function R(e) {
    let { message: t, snapshot: n, index: d } = e,
        f = i.useMemo(() => new v.r(t, n, d), [t, n, d]),
        _ = (0, o.e7)(
            [m.Z, O.default, y.Z, b.Z, E.Z, u.Z],
            () => f.getForwardInfo(m.Z, O.default, y.Z, b.Z, E.Z, u.Z).footerInfo,
            [f],
            s.Z,
        ),
        p = i.useCallback(() => {
            (0, I.Z)(t);
        }, [t]);
    return null == _
        ? null
        : (0, r.jsxs)(c.P3F, {
              className: C.footerContainer,
              onClick: p,
              "aria-label": _.accessibilityLabel,
              children: [
                  null != _.originIconUrl
                      ? (0, r.jsx)("img", {
                            className: C.originIcon,
                            src: _.originIconUrl,
                            alt: "",
                        })
                      : null,
                  (0, r.jsx)(a.xvT, {
                      className: C.footerText,
                      variant: "text-sm/medium",
                      color: "none",
                      children: "".concat(_.originLabel, "  \u2022  ").concat(_.timestampLabel),
                  }),
                  (0, r.jsx)(c.Fbu, {
                      size: "xxs",
                      color: l.Z.colors.TEXT_LOW_CONTRAST,
                  }),
              ],
          });
}
function P(e) {
    var t;
    let { message: n, snapshot: a, index: s } = e,
        l = i.useMemo(() => (0, S.Z)(n, a), [n, a]),
        c = h.RS.useSetting(),
        u = h.NA.useSetting(),
        E = c && u,
        b = (0, o.e7)([g.Z], () => g.Z.isDeveloper),
        y = (0, d.A)((null != (t = l.editedTimestamp) ? t : l.timestamp).valueOf()),
        { content: O, hasSpoilerEmbeds: v } = (0, _.Z)(l, {
            hideSimpleEmbedContent: E,
            isInteracting: !1,
            formatInline: !1,
            allowList: y,
            allowHeading: y,
            allowLinks: !0,
            allowDevLinks: b,
            previewLinkTarget: !0,
        }),
        I = (0, o.e7)([m.Z], () => m.Z.getChannel(n.channel_id)),
        T = h.jU.useSetting();
    return null == I
        ? null
        : (0, r.jsxs)(
              "div",
              {
                  className: C.container,
                  children: [
                      (0, r.jsx)("div", { className: C.quote }),
                      (0, r.jsxs)("div", {
                          className: C.content,
                          children: [
                              (0, r.jsx)(N, {}),
                              (0, r.jsx)(f.ZP, {
                                  message: l,
                                  content: O,
                                  compact: T,
                              }),
                              (0, p.Z)({
                                  channelMessageProps: {
                                      message: l,
                                      channel: I,
                                      compact: T,
                                  },
                                  hasSpoilerEmbeds: v,
                                  isInteracting: !1,
                                  isMessageSnapshot: !0,
                                  renderThreadAccessory: !1,
                              }),
                              (0, r.jsx)(R, {
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
function w(e) {
    let { message: t } = e;
    return (0, r.jsx)(r.Fragment, {
        children: t.messageSnapshots.map((e, n) =>
            (0, r.jsx)(
                P,
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
