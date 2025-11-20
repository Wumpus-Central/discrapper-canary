n.d(t, { Z: () => h }), n(539854);
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
    _ = n(388032),
    p = n(837262);
function h(e) {
    var t, n, h, m;
    let {
            application: g,
            message: E,
            header: b,
            presenceActivity: y,
            hideParty: O,
            partyStatusElement: v,
            currentUserPresenceActivity: I,
            onClickContent: T,
            onView: S,
            guildId: A,
        } = e,
        C = (0, d.g)(I, y),
        N = (0, c.Lz)(y, E.author, "Invite Embed"),
        R = i.useMemo(() => {
            let e = [];
            if (!C) {
                var t;
                e.push({
                    label: null != (t = N.label) ? t : _.intl.string(_.t.VJlc0S),
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
        P =
            null != y && null != y.details && null != y.state
                ? _.intl.formatToPlainString(_.t.JCvHtx, {
                      track: y.details,
                      artist: y.state,
                  })
                : g.name,
        D =
            null != (h = null == y || null == (t = y.timestamps) ? void 0 : t.start)
                ? h
                : null == y
                  ? void 0
                  : y.created_at,
        w = i.useMemo(() => {
            var e;
            return null != D
                ? (0, r.jsxs)("div", {
                      className: p.timestampContainer,
                      children: [
                          (0, r.jsx)(a.RZG, {
                              size: "xxs",
                              color: "currentColor",
                          }),
                          (0, r.jsx)(l.x3, {
                              entry: {
                                  start: D,
                                  end: null == y || null == (e = y.timestamps) ? void 0 : e.end,
                              },
                              textColor: "currentColor",
                              textTabularNumbers: !1,
                              textFontCode: !1,
                          }),
                      ],
                  })
                : null;
        }, [D, null == y || null == (n = y.timestamps) ? void 0 : n.end]),
        L = i.useMemo(
            () =>
                (0, r.jsxs)("div", {
                    className: p.info,
                    children: [
                        (0, r.jsx)(a.Text, {
                            variant: "text-xs/normal",
                            className: p.tagline,
                            color: "none",
                            lineClamp: 1,
                            children: w,
                        }),
                        O ? null : v,
                    ],
                }),
            [w, O, v],
        );
    return (0, r.jsx)(o.W, {
        header: b,
        title: P,
        iconSrc: null != (m = (0, u.Z)(y, g.id)) ? m : void 0,
        info: L,
        actions: R,
        onClickContent: T,
        trackingConfig: {
            id: g.id,
            linkType: f.U.RICH_PRESENCE_INVITE,
            onView: S,
            referrerId: E.author.id,
            guildId: A,
            channelId: E.channel_id,
            messageId: E.id,
        },
    });
}
