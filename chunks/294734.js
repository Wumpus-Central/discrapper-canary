n.d(t, { Z: () => w });
var r = n(54381),
    i = n(473749),
    a = n(793030),
    o = n(442837),
    s = n(902704),
    l = n(692547),
    c = n(481060),
    u = n(356264),
    d = n(628238),
    f = n(930282),
    p = n(25015),
    _ = n(438075),
    m = n(695346),
    h = n(592125),
    g = n(906467),
    E = n(430824),
    b = n(496675),
    y = n(699516),
    O = n(594174),
    v = n(100604),
    S = n(694784),
    I = n(39154),
    T = n(245216),
    A = n(388032),
    C = n(823914);
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
function P(e) {
    let { message: t, snapshot: n, index: d } = e,
        f = i.useMemo(() => new v.r(t, n, d), [t, n, d]),
        p = (0, o.e7)(
            [h.Z, O.default, y.Z, b.Z, E.Z, u.Z],
            () => f.getForwardInfo(h.Z, O.default, y.Z, b.Z, E.Z, u.Z).footerInfo,
            [f],
            s.Z,
        ),
        _ = i.useCallback(() => {
            (0, S.Z)(t);
        }, [t]);
    return null == p
        ? null
        : (0, r.jsxs)(c.P3F, {
              className: C.footerContainer,
              onClick: _,
              "aria-label": p.accessibilityLabel,
              children: [
                  null != p.originIconUrl
                      ? (0, r.jsx)("img", {
                            className: C.originIcon,
                            src: p.originIconUrl,
                            alt: "",
                        })
                      : null,
                  (0, r.jsx)(a.xvT, {
                      className: C.footerText,
                      variant: "text-sm/medium",
                      color: "none",
                      children: "".concat(p.originLabel, "  \u2022  ").concat(p.timestampLabel),
                  }),
                  (0, r.jsx)(c.Fbu, {
                      size: "xxs",
                      color: l.Z.colors.TEXT_LOW_CONTRAST,
                  }),
              ],
          });
}
function R(e) {
    var t;
    let { message: n, snapshot: a, index: s } = e,
        l = i.useMemo(() => (0, I.Z)(n, a), [n, a]),
        c = m.RS.useSetting(),
        u = m.NA.useSetting(),
        E = c && u,
        b = (0, o.e7)([g.Z], () => g.Z.isDeveloper),
        y = (0, d.A)((null != (t = l.editedTimestamp) ? t : l.timestamp).valueOf()),
        {
            content: O,
            hasSpoilerEmbeds: v,
            hasBailedAst: S,
        } = (0, p.Z)(l, {
            hideSimpleEmbedContent: E,
            isInteracting: !1,
            formatInline: !1,
            allowList: y,
            allowHeading: y,
            allowLinks: !0,
            allowDevLinks: b,
            previewLinkTarget: !0,
        }),
        T = (0, o.e7)([h.Z], () => h.Z.getChannel(n.channel_id)),
        A = m.jU.useSetting();
    return null == T
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
                                  compact: A,
                              }),
                              (0, _.Z)({
                                  channelMessageProps: {
                                      message: l,
                                      channel: T,
                                      compact: A,
                                  },
                                  hasSpoilerEmbeds: v,
                                  hasBailedAst: S,
                                  isInteracting: !1,
                                  isMessageSnapshot: !0,
                                  renderThreadAccessory: !1,
                              }),
                              (0, r.jsx)(P, {
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
                R,
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
