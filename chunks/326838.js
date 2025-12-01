n.d(t, { Z: () => y }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(913527),
    o = n.n(l),
    a = n(442837),
    s = n(28664),
    c = n(755721),
    u = n(481060),
    d = n(782568),
    f = n(104505),
    h = n(317632),
    p = n(174767),
    g = n(594174),
    m = n(55935),
    b = n(388032),
    _ = n(313227);
function y(e) {
    let { invite: t, expired: n } = e,
        l = (0, a.e7)([g.default], () => {
            var e, n;
            return null != (n = null == (e = g.default.getUser(t.inviter_id)) ? void 0 : e.username) ? n : "";
        }),
        s = (0, m.vc)(o()(t.created_at), "LT"),
        c = i.useRef(null),
        { isHoveringOrFocusing: d } = (0, f.Z)(c);
    return (
        i.useEffect(() => {
            n || (0, p.Br)(t);
        }, [t, n]),
        (0, r.jsxs)("div", {
            className: _.container,
            ref: c,
            children: [
                (0, r.jsxs)("div", {
                    className: _.primaryRow,
                    children: [
                        (0, r.jsx)("img", {
                            className: _.inviteImage,
                            src: t.application_asset,
                            alt: "Game Invite",
                        }),
                        (0, r.jsx)(u.Text, {
                            className: _.title,
                            variant: "text-md/semibold",
                            color: "interactive-active",
                            children: b.intl.format(b.t.vtUO3Y, { username: l }),
                        }),
                        (0, r.jsxs)("div", {
                            className: _.buttonContainer,
                            children: [
                                (0, r.jsx)(O, {
                                    expired: n,
                                    invite: t,
                                    isHoveringInvite: d,
                                }),
                                (0, r.jsx)(u.M0o, {
                                    className: _.deleteButton,
                                    tooltip: b.intl.string(b.t.oyYWHE),
                                    color: u.YX$.SECONDARY,
                                    icon: (0, r.jsx)(u.XHJ, { size: "xs" }),
                                    onClick: () => {
                                        (0, p.UF)(t);
                                    },
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)("div", { className: _.divider }),
                (0, r.jsxs)("div", {
                    className: _.secondaryRow,
                    children: [
                        (0, r.jsxs)(u.Text, {
                            variant: "text-xs/medium",
                            className: _.subtitle,
                            color: "text-muted",
                            children: [t.application_name, " \xB7 ", s],
                        }),
                        n &&
                            (0, r.jsx)("div", {
                                className: _.metaContainer,
                                children: (0, r.jsx)(u.Text, {
                                    variant: "text-xxs/semibold",
                                    className: _.__invalid_metaText,
                                    color: "text-muted",
                                    children: b.intl.string(b.t["//8UqT"]),
                                }),
                            }),
                    ],
                }),
            ],
        })
    );
}
function O(e) {
    let { expired: t, invite: n, isHoveringInvite: l } = e,
        o = (0, a.e7)([h.Z], () => h.Z.isInviteGameInstalled(n)),
        f = (0, a.e7)([h.Z], () => h.Z.isInviteJoinable(n)),
        [g, m] = i.useState(!1),
        y = i.useCallback(async () => {
            m(!0);
            try {
                await (0, p.MH)(n);
            } catch (e) {}
            m(!1);
        }, [n]),
        O = i.useCallback(async () => {
            m(!0);
            try {
                await (0, p.Ol)(n);
            } catch (e) {}
            m(!1);
        }, [n]);
    if (t)
        if (o && l)
            return (0, r.jsx)(c.zx, {
                className: _.primaryButton,
                color: c.Tt.TRANSPARENT,
                disabled: g,
                size: c.Ph.SMALL,
                onClick: y,
                children: b.intl.string(b.t["s+J8Dl"]),
            });
        else return null;
    return o && f
        ? (0, r.jsx)(c.zx, {
              className: _.primaryButton,
              color: c.Tt.GREEN,
              disabled: g,
              size: c.Ph.SMALL,
              onClick: O,
              children: b.intl.string(b.t["/loN98"]),
          })
        : null != n.fallback_url
          ? (0, r.jsx)(c.zx, {
                className: _.primaryButton,
                disabled: g,
                size: c.Ph.SMALL,
                color: c.Tt.TRANSPARENT,
                onClick: () => (0, d.Z)(n.fallback_url),
                children: b.intl.string(b.t["27y8KF"]),
            })
          : (0, r.jsx)(s.u, {
                text: b.intl.formatToPlainString(b.t.issFLA, { gameTitle: n.application_name }),
                children: (0, r.jsx)(c.zx, {
                    className: _.primaryButton,
                    disabled: !0,
                    size: c.Ph.SMALL,
                    color: c.Tt.TRANSPARENT,
                    onClick: () => (0, d.Z)(n.fallback_url),
                    children: (0, r.jsxs)("div", {
                        className: _.launchToJoinContainer,
                        children: [
                            (0, r.jsx)(u.Text, {
                                variant: "text-xxs/medium",
                                className: _.launchToJoinText,
                                color: "text-muted",
                                children: b.intl.string(b.t.dai1Ow),
                            }),
                            (0, r.jsx)(u.d3s, {
                                size: "xxs",
                                color: u.TVs.colors.TEXT_MUTED.css,
                            }),
                        ],
                    }),
                }),
            });
}
