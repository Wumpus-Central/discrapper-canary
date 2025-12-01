n.d(t, { Z: () => m }), n(539854);
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(758199),
    s = n(914498),
    l = n(371991),
    c = n(829820),
    u = n(276852),
    d = n(691731),
    f = n(967249),
    p = n(388032),
    _ = n(837262);
function m(e) {
    var t, n, m, h;
    let {
            application: g,
            message: E,
            header: b,
            presenceActivity: y,
            hideParty: O,
            partyStatusElement: v,
            currentUserPresenceActivity: S,
            onClickContent: I,
            onView: T,
            guildId: A,
        } = e,
        C = (0, d.g)(S, y),
        N = (0, c.Lz)(y, E.author, "Invite Embed"),
        P = i.useMemo(() => {
            let e = [];
            if (!C) {
                var t;
                e.push({
                    label: null != (t = N.label) ? t : p.intl.string(p.t.VJlc0S),
                    trackingArea: s.j_.SYNC,
                    onClick: () => {
                        N.onClick();
                    },
                    disabled: N.disabled,
                    disabledReason: N.disabled ? N.tooltip : void 0,
                });
            }
            return e;
        }, [C, N]),
        R =
            null != y && null != y.details && null != y.state
                ? p.intl.formatToPlainString(p.t.JCvHtx, {
                      track: y.details,
                      artist: y.state,
                  })
                : g.name,
        w =
            null != (m = null == y || null == (t = y.timestamps) ? void 0 : t.start)
                ? m
                : null == y
                  ? void 0
                  : y.created_at,
        D = i.useMemo(() => {
            var e;
            return null != w
                ? (0, r.jsxs)("div", {
                      className: _.timestampContainer,
                      children: [
                          (0, r.jsx)(a.RZG, {
                              size: "xxs",
                              color: "currentColor",
                          }),
                          (0, r.jsx)(l.x3, {
                              entry: {
                                  start: w,
                                  end: null == y || null == (e = y.timestamps) ? void 0 : e.end,
                              },
                              textColor: "currentColor",
                              textTabularNumbers: !1,
                              textFontCode: !1,
                          }),
                      ],
                  })
                : null;
        }, [w, null == y || null == (n = y.timestamps) ? void 0 : n.end]),
        x = i.useMemo(
            () =>
                (0, r.jsxs)("div", {
                    className: _.info,
                    children: [
                        (0, r.jsx)(a.Text, {
                            variant: "text-xs/normal",
                            className: _.tagline,
                            color: "none",
                            lineClamp: 1,
                            children: D,
                        }),
                        O ? null : v,
                    ],
                }),
            [D, O, v],
        );
    return (0, r.jsx)(o.W, {
        header: b,
        title: R,
        iconSrc: null != (h = (0, u.Z)(y, g.id)) ? h : void 0,
        info: x,
        actions: P,
        onClickContent: I,
        trackingConfig: {
            id: g.id,
            linkType: f.U.RICH_PRESENCE_INVITE,
            onView: T,
            referrerId: E.author.id,
            guildId: A,
            channelId: E.channel_id,
            messageId: E.id,
        },
    });
}
