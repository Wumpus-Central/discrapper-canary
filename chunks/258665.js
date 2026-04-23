n.d(t, { A: () => O });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(837381),
    o = n(311907),
    d = n(462887),
    c = n(834730),
    u = n(97808),
    m = n(778712),
    g = n(939249),
    h = n(573648),
    x = n(793574),
    _ = n(47167),
    p = n(342296),
    A = n(544028),
    E = n(427157),
    f = n(994500),
    j = n(287809),
    N = n(147925),
    I = n(860689),
    C = n(427262),
    b = n(820883),
    v = n(276373),
    S = n(438407),
    T = n(652215),
    y = n(985018),
    R = n(214876);
class L extends l.PureComponent {
    render() {
        let { user: e, onContextMenu: t } = this.props;
        return (0, i.jsxs)("span", {
            onContextMenu: t,
            className: R.userHook,
            children: [
                (0, i.jsx)(c.E, { variant: "text-md/normal", children: C.Ay.getUserTag(e, { mode: "username" }) }),
                "0" !== e.discriminator &&
                    (0, i.jsxs)(c.E, {
                        variant: "text-xs/normal",
                        className: R.discrim,
                        children: ["#", e.discriminator],
                    }),
            ],
        });
    }
}
let D = l.forwardRef((e, t) => {
    let n,
        {
            log: s,
            className: o,
            expanded: A,
            guildId: C,
            guild: D,
            onChannelContextMenu: O,
            onContentClick: G,
            onHeaderClick: M,
            onTargetContextMenu: k,
            onUserContextMenu: U,
            theme: w,
        } = e,
        P = l.useRef(null),
        B = v.checkChangesToRender(s),
        F = R.headerDefault;
    A ? (F = R.headerExpanded) : B && (F = R.headerClickable);
    let H = s.timestampStart.calendar(),
        V = s.timestampEnd.calendar();
    n =
        H === V
            ? (0, i.jsx)(c.E, { className: R.timestamp, variant: "text-sm/normal", children: H })
            : (0, i.jsxs)(c.E, { className: R.timestamp, variant: "text-sm/normal", children: [H, "—", V] });
    let z = B ? M : T.tEg;
    return (0, i.jsx)(a.tG, {
        id: s.id,
        children: (e) =>
            (0, i.jsxs)("div", {
                ref: t,
                className: r()(R.auditLog, o),
                children: [
                    (0, i.jsxs)(g.D, {
                        className: F,
                        "aria-expanded": A,
                        onClick: z,
                        ...e,
                        children: [
                            (0, i.jsx)(S.H, { action: s.action, actionType: s.actionType, targetType: s.targetType }),
                            (function () {
                                let {
                                    user: e,
                                    userId: t,
                                    options: { integration_type: n },
                                } = s;
                                if (null != e && null != t)
                                    return (0, i.jsx)(p.A, {
                                        targetElementRef: P,
                                        user: e,
                                        guildId: C,
                                        newAnalyticsLocations: [x.A.AVATAR],
                                        children: (e) =>
                                            (0, i.jsx)(u.eu, {
                                                ...e,
                                                ref: P,
                                                onClick: (t) => {
                                                    t.stopPropagation(), e.onClick(t);
                                                },
                                                className: R.avatar,
                                                src:
                                                    s.action === T.F_X.AUTO_MODERATION_BLOCK_MESSAGE ||
                                                    s.action === T.F_X.AUTO_MODERATION_FLAG_TO_CHANNEL ||
                                                    s.action === T.F_X.AUTO_MODERATION_USER_COMMUNICATION_DISABLED ||
                                                    s.action === T.F_X.AUTO_MODERATION_QUARANTINE_USER
                                                        ? (0, b.q)()
                                                        : s.user?.getAvatarURL(C, 40),
                                                "aria-hidden": !0,
                                                size: m._3.SIZE_40,
                                            }),
                                    });
                                if (null != n) {
                                    let e = h.A.get(n);
                                    if (null != e) {
                                        let t = (0, d.M)(w) ? e.icon.darkSVG : e.icon.lightSVG;
                                        return (0, i.jsx)(u.eu, {
                                            className: R.avatar,
                                            src: t,
                                            "aria-hidden": !0,
                                            size: m._3.SIZE_40,
                                        });
                                    }
                                }
                                return null;
                            })(),
                            (0, i.jsxs)("div", {
                                className: R.timeWrap,
                                children: [
                                    (0, i.jsx)("div", {
                                        className: R.title,
                                        children: (function () {
                                            let e,
                                                { user: t, target: n, options: l } = s;
                                            e = (0, I.fh)(n) ? n.name : n.toString();
                                            let r = v.getChangeTitle(s);
                                            return null != r
                                                ? (0, i.jsx)("div", {
                                                      className: R.overflowEllipsis,
                                                      children: y.intl.format(r, {
                                                          user: t,
                                                          target: e,
                                                          userHook: (e, t) => {
                                                              if (null != s.user)
                                                                  return (0, i.jsx)(
                                                                      L,
                                                                      { user: s.user, onContextMenu: U },
                                                                      t,
                                                                  );
                                                              if (null != s.options.integration_type) {
                                                                  let e = h.A.get(s.options.integration_type);
                                                                  return e?.name ?? y.intl.string(y.t["n+olu7"]);
                                                              }
                                                              return y.intl.string(y.t["30mdIx"]);
                                                          },
                                                          targetHook: (e, t) =>
                                                              s.targetType === T.GaG.USER && s.target instanceof E.A
                                                                  ? (0, i.jsx)(
                                                                        L,
                                                                        { user: s.target, onContextMenu: k },
                                                                        t,
                                                                    )
                                                                  : (0, i.jsx)(
                                                                        "span",
                                                                        { onContextMenu: k, children: e },
                                                                        t,
                                                                    ),
                                                          count: l.count ?? "",
                                                          channel:
                                                              null == l.channel || "string" == typeof l.channel
                                                                  ? l.channel
                                                                  : (0, _.m1)(l.channel, j.default, f.A, !0),
                                                          channelHook: (e, t) =>
                                                              (0, i.jsx)("span", { onContextMenu: O, children: e }, t),
                                                          subtarget: l.subtarget,
                                                      }),
                                                  })
                                                : null;
                                        })(),
                                    }),
                                    n,
                                ],
                            }),
                            B
                                ? (0, i.jsx)(N.A, {
                                      className: R.expand,
                                      foreground: R.expandForeground,
                                      expanded: A,
                                      "aria-hidden": !0,
                                  })
                                : null,
                        ],
                    }),
                    A ? (0, i.jsx)("div", { className: R.divider }) : null,
                    A && null != D ? (0, i.jsx)(S.r, { log: s, guild: D, onContentClick: G }) : null,
                ],
            }),
    });
});
D.displayName = "GuildSettingsAuditLogEntry";
let O = o.Ay.connectStores([A.A], () => ({ theme: A.A.theme }), { forwardRef: !0 })(D);
