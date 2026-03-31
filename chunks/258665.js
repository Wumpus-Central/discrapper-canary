"use strict";
n.d(t, { A: () => R });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(837381),
    o = n(311907),
    d = n(582754),
    c = n(397927),
    u = n(573648),
    m = n(793574),
    g = n(47167),
    x = n(342296),
    h = n(544028),
    _ = n(427157),
    p = n(994500),
    A = n(287809),
    f = n(147925),
    j = n(860689),
    N = n(427262),
    E = n(820883),
    b = n(276373),
    C = n(438407),
    T = n(652215),
    I = n(985018),
    v = n(165636);
class S extends s.PureComponent {
    render() {
        let { user: e, onContextMenu: t } = this.props;
        return (0, i.jsxs)("span", {
            onContextMenu: t,
            className: v.userHook,
            children: [
                (0, i.jsx)(c.Text, { variant: "text-md/normal", children: N.Ay.getUserTag(e, { mode: "username" }) }),
                "0" !== e.discriminator &&
                    (0, i.jsxs)(c.Text, {
                        variant: "text-xs/normal",
                        className: v.discrim,
                        children: ["#", e.discriminator],
                    }),
            ],
        });
    }
}
let y = s.forwardRef((e, t) => {
    let n,
        {
            log: l,
            className: o,
            expanded: h,
            guildId: N,
            guild: y,
            onChannelContextMenu: R,
            onContentClick: O,
            onHeaderClick: L,
            onTargetContextMenu: G,
            onUserContextMenu: D,
            theme: M,
        } = e,
        k = s.useRef(null),
        U = b.checkChangesToRender(l),
        P = v.headerDefault;
    h ? (P = v.headerExpanded) : U && (P = v.headerClickable);
    let w = l.timestampStart.calendar(),
        B = l.timestampEnd.calendar();
    n =
        w === B
            ? (0, i.jsx)(c.Text, { className: v.timestamp, variant: "text-sm/normal", children: w })
            : (0, i.jsxs)(c.Text, { className: v.timestamp, variant: "text-sm/normal", children: [w, "—", B] });
    let F = U ? L : T.tEg;
    return (0, i.jsx)(a.tG, {
        id: l.id,
        children: (e) =>
            (0, i.jsxs)("div", {
                ref: t,
                className: r()(v.auditLog, o),
                children: [
                    (0, i.jsxs)(c.DUT, {
                        className: P,
                        "aria-expanded": h,
                        onClick: F,
                        ...e,
                        children: [
                            (0, i.jsx)(C.H, { action: l.action, actionType: l.actionType, targetType: l.targetType }),
                            (function () {
                                let {
                                    user: e,
                                    userId: t,
                                    options: { integration_type: n },
                                } = l;
                                if (null != e && null != t)
                                    return (0, i.jsx)(x.A, {
                                        targetElementRef: k,
                                        user: e,
                                        guildId: N,
                                        newAnalyticsLocations: [m.A.AVATAR],
                                        children: (e) =>
                                            (0, i.jsx)(c.euF, {
                                                ...e,
                                                ref: k,
                                                onClick: (t) => {
                                                    t.stopPropagation(), e.onClick(t);
                                                },
                                                className: v.avatar,
                                                src:
                                                    l.action === T.F_X.AUTO_MODERATION_BLOCK_MESSAGE ||
                                                    l.action === T.F_X.AUTO_MODERATION_FLAG_TO_CHANNEL ||
                                                    l.action === T.F_X.AUTO_MODERATION_USER_COMMUNICATION_DISABLED ||
                                                    l.action === T.F_X.AUTO_MODERATION_QUARANTINE_USER
                                                        ? (0, E.q)()
                                                        : l.user?.getAvatarURL(N, 40),
                                                "aria-hidden": !0,
                                                size: c._3J.SIZE_40,
                                            }),
                                    });
                                if (null != n) {
                                    let e = u.A.get(n);
                                    if (null != e) {
                                        let t = (0, d.Mw)(M) ? e.icon.darkSVG : e.icon.lightSVG;
                                        return (0, i.jsx)(c.euF, {
                                            className: v.avatar,
                                            src: t,
                                            "aria-hidden": !0,
                                            size: c._3J.SIZE_40,
                                        });
                                    }
                                }
                                return null;
                            })(),
                            (0, i.jsxs)("div", {
                                className: v.timeWrap,
                                children: [
                                    (0, i.jsx)("div", {
                                        className: v.title,
                                        children: (function () {
                                            let e,
                                                { user: t, target: n, options: s } = l;
                                            e = (0, j.fh)(n) ? n.name : n.toString();
                                            let r = b.getChangeTitle(l);
                                            return null != r
                                                ? (0, i.jsx)("div", {
                                                      className: v.overflowEllipsis,
                                                      children: I.intl.format(r, {
                                                          user: t,
                                                          target: e,
                                                          userHook: (e, t) => {
                                                              if (null != l.user)
                                                                  return (0, i.jsx)(
                                                                      S,
                                                                      { user: l.user, onContextMenu: D },
                                                                      t,
                                                                  );
                                                              if (null != l.options.integration_type) {
                                                                  let e = u.A.get(l.options.integration_type);
                                                                  return e?.name ?? I.intl.string(I.t["n+olu7"]);
                                                              }
                                                              return I.intl.string(I.t["30mdIx"]);
                                                          },
                                                          targetHook: (e, t) =>
                                                              l.targetType === T.GaG.USER && l.target instanceof _.A
                                                                  ? (0, i.jsx)(
                                                                        S,
                                                                        { user: l.target, onContextMenu: G },
                                                                        t,
                                                                    )
                                                                  : (0, i.jsx)(
                                                                        "span",
                                                                        { onContextMenu: G, children: e },
                                                                        t,
                                                                    ),
                                                          count: s.count ?? "",
                                                          channel:
                                                              null == s.channel || "string" == typeof s.channel
                                                                  ? s.channel
                                                                  : (0, g.m1)(s.channel, A.default, p.A, !0),
                                                          channelHook: (e, t) =>
                                                              (0, i.jsx)("span", { onContextMenu: R, children: e }, t),
                                                          subtarget: s.subtarget,
                                                      }),
                                                  })
                                                : null;
                                        })(),
                                    }),
                                    n,
                                ],
                            }),
                            U
                                ? (0, i.jsx)(f.A, {
                                      className: v.expand,
                                      foreground: v.expandForeground,
                                      expanded: h,
                                      "aria-hidden": !0,
                                  })
                                : null,
                        ],
                    }),
                    h ? (0, i.jsx)("div", { className: v.divider }) : null,
                    h && null != y ? (0, i.jsx)(C.r, { log: l, guild: y, onContentClick: O }) : null,
                ],
            }),
    });
});
y.displayName = "GuildSettingsAuditLogEntry";
let R = o.Ay.connectStores([h.A], () => ({ theme: h.A.theme }), { forwardRef: !0 })(y);
