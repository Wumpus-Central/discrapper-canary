n.d(t, { Z: () => h }), n(539854);
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(758199),
    s = n(914498),
    l = n(368176),
    c = n(371991),
    u = n(829820),
    d = n(276852),
    f = n(691731),
    p = n(967249),
    _ = n(388032),
    m = n(837262);
function h(e) {
    var t, n, h, g;
    let {
            application: E,
            message: b,
            header: y,
            presenceActivity: O,
            hideParty: v,
            partyStatusElement: S,
            currentUserPresenceActivity: I,
            onClickContent: T,
            onView: A,
            guildId: C,
        } = e,
        { enabled: N } = l.Q.useConfig({ location: "rich_presence_spotify_invite" }),
        P = (0, f.g)(I, O),
        R = (0, u.Lz)(O, b.author, "Invite Embed"),
        D = i.useMemo(() => {
            let e = [];
            if (!P) {
                var t;
                e.push({
                    label: null != (t = R.label) ? t : _.intl.string(_.t.VJlc0S),
                    trackingArea: s.j_.SYNC,
                    onClick: () => {
                        R.onClick();
                    },
                    disabled: R.disabled,
                    disabledReason: R.disabled ? R.tooltip : void 0,
                });
            }
            return e;
        }, [P, R]),
        w =
            null != O && null != O.details && null != O.state
                ? _.intl.formatToPlainString(_.t.JCvHtx, {
                      track: O.details,
                      artist: O.state,
                  })
                : E.name,
        x =
            null != (h = null == O || null == (t = O.timestamps) ? void 0 : t.start)
                ? h
                : null == O
                  ? void 0
                  : O.created_at,
        L = i.useMemo(() => {
            var e;
            return null != x
                ? (0, r.jsxs)("div", {
                      className: m.timestampContainer,
                      children: [
                          (0, r.jsx)(a.RZG, {
                              size: "xxs",
                              color: N ? a.TVs.colors.ICON_FEEDBACK_POSITIVE : "currentColor",
                          }),
                          (0, r.jsx)(c.x3, {
                              entry: {
                                  start: x,
                                  end: null == O || null == (e = O.timestamps) ? void 0 : e.end,
                              },
                              textColor: "currentColor",
                              textTabularNumbers: !1,
                              textFontCode: !1,
                          }),
                      ],
                  })
                : null;
        }, [x, null == O || null == (n = O.timestamps) ? void 0 : n.end, N]),
        j = i.useMemo(
            () =>
                (0, r.jsxs)("div", {
                    className: m.info,
                    children: [
                        (0, r.jsx)(a.Text, {
                            variant: "text-xs/normal",
                            className: m.tagline,
                            color: "none",
                            lineClamp: 1,
                            children: L,
                        }),
                        v ? null : S,
                    ],
                }),
            [L, v, S],
        );
    return (0, r.jsx)(o.W, {
        header: y,
        title: w,
        iconSrc: null != (g = (0, d.Z)(O, E.id)) ? g : void 0,
        info: j,
        actions: D,
        onClickContent: T,
        trackingConfig: {
            id: E.id,
            linkType: p.U.RICH_PRESENCE_INVITE,
            onView: A,
            referrerId: b.author.id,
            guildId: C,
            channelId: b.channel_id,
            messageId: b.id,
        },
    });
}
