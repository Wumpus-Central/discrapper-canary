n.d(t, { A: () => x });
var i = n(627968),
    l = n(64700),
    r = n(172710),
    a = n(456060),
    s = n(659051),
    o = n(834730),
    d = n(572211),
    c = n(666176),
    u = n(768349),
    m = n(375708),
    p = n(378);
function A(e) {
    let { application: t, message: n, header: r, onClickContent: a, onView: s, guildId: A } = e,
        g = l.useMemo(
            () =>
                (0, i.jsx)(o.E, {
                    variant: "text-xs/medium",
                    className: p.h_,
                    color: "none",
                    lineClamp: 1,
                    children: m.intl.string(m.t["84qx9r"]),
                }),
            [],
        );
    return (0, i.jsx)(d.h, {
        header: r,
        title: t.name,
        iconSrc: c.HT.getWhiteIconURL(),
        info: g,
        onClickContent: a,
        trackingConfig: {
            id: t.id,
            linkType: u.J.RICH_PRESENCE_INVITE,
            onView: s,
            referrerId: n.author.id,
            guildId: A,
            channelId: n.channel_id,
            messageId: n.id,
            isDeadEnd: !0,
        },
    });
}
n(321073);
var g = n(432017),
    I = n(354287),
    h = n(85451),
    C = n(353411),
    S = n(970928),
    E = n(360469),
    f = n(206589);
function _(e) {
    var t;
    let {
            application: n,
            message: r,
            header: a,
            presenceActivity: s,
            hideParty: c,
            partyStatusElement: A,
            currentUserPresenceActivity: _,
            onClickContent: x,
            onView: T,
            guildId: v,
        } = e,
        N = (0, f.w)(_, s),
        y = (0, C.Gq)(s, r.author, "Invite Embed"),
        k = l.useMemo(() => {
            let e = [];
            return (
                N ||
                    e.push({
                        label: y.label ?? m.intl.string(m.t.VJlc0S),
                        trackingArea: I.kY.SYNC,
                        onClick: () => {
                            y.onClick();
                        },
                        disabled: y.disabled,
                        disabledReason: y.disabled ? y.tooltip : void 0,
                    }),
                e
            );
        }, [N, y]),
        b =
            null != s && null != s.details && null != s.state
                ? m.intl.formatToPlainString(m.t.JCvHtx, { track: s.details, artist: s.state })
                : n.name,
        L = s?.timestamps?.start ?? s?.created_at,
        R = l.useMemo(
            () =>
                null != L
                    ? (0, i.jsxs)("div", {
                          className: p.Ym,
                          children: [
                              (0, i.jsx)(g.T, { size: "xxs", color: "currentColor" }),
                              (0, i.jsx)(h.z, {
                                  entry: { start: L, end: s?.timestamps?.end },
                                  textColor: "currentColor",
                                  textTabularNumbers: !1,
                                  textFontCode: !1,
                              }),
                          ],
                      })
                    : null,
            [L, s?.timestamps?.end],
        ),
        P = l.useMemo(
            () =>
                (0, i.jsxs)("div", {
                    className: p.pq,
                    children: [
                        (0, i.jsx)(o.E, {
                            variant: "text-xs/normal",
                            className: p.dS,
                            color: "none",
                            lineClamp: 1,
                            children: R,
                        }),
                        c ? null : A,
                    ],
                }),
            [R, c, A],
        );
    return (0, i.jsx)(d.h, {
        header: a,
        title: b,
        iconSrc:
            ((t = n.id),
            (null == s || null == s.assets || null == s.assets.large_image
                ? null
                : (0, S.uD)(t, s.assets.large_image, [E.Ig, E.Ig])) ?? void 0),
        info: P,
        actions: k,
        onClickContent: x,
        trackingConfig: {
            id: n.id,
            linkType: u.J.RICH_PRESENCE_INVITE,
            onView: T,
            referrerId: r.author.id,
            guildId: v,
            channelId: r.channel_id,
            messageId: r.id,
        },
    });
}
function x(e) {
    let {
            application: t,
            currentUserPresenceActivity: n,
            hideParty: o,
            message: d,
            onView: c,
            partyStatusElement: u,
            presenceActivity: m,
            guildId: p,
        } = e,
        g = !(0, s.A)(m, d, t.id),
        I = (0, a.n$)(t.name, d.activity?.type, g),
        h = l.useMemo(() => {
            if (null != m) return () => (0, r.Mp)(m);
        }, [m]);
    return g
        ? (0, i.jsx)(A, { application: t, message: d, header: I, onClickContent: h, onView: c, guildId: p })
        : (0, i.jsx)(_, {
              application: t,
              message: d,
              header: I,
              presenceActivity: m,
              hideParty: o,
              partyStatusElement: u,
              currentUserPresenceActivity: n,
              onClickContent: h,
              onView: c,
              guildId: p,
          });
}
