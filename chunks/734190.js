var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(91192),
    s = n(442837),
    c = n(481060),
    u = n(493683),
    d = n(239091),
    h = n(111028),
    p = n(540059),
    f = n(569471),
    m = n(488131),
    g = n(592125),
    v = n(306680),
    C = n(979651),
    x = n(938475),
    I = n(714794),
    _ = n(135724),
    Z = n(25601),
    b = n(207055),
    S = n(981631),
    N = n(124368),
    E = n(388032),
    y = n(831746),
    j = n(193877),
    T = n(329986);
function P(e) {
    let { style: t, withGuildIcon: n, inverted: l } = e,
        r = {
            className: a()(T.spine, { [T.spineWithGuildIcon]: n }, { [T.invertedSpine]: l }),
            style: t
        },
        { density: o } = (0, c.useThemeContext)();
    return 'cozy' === o
        ? (0, i.jsxs)('svg', {
              ...r,
              width: '25',
              height: '23',
              viewBox: '0 0 25 23',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
              children: [
                  (0, i.jsx)('path', {
                      d: 'M2 1C2 0.447715 1.55228 0 1 0C0.447715 0 0 0.447715 0 1H2ZM0 1V18H2V1H0ZM0 18C0 20.7614 2.23858 23 5 23V21C3.34315 21 2 19.6569 2 18H0Z',
                      fill: 'currentColor'
                  }),
                  (0, i.jsx)('path', {
                      d: 'M6 21L5 21L5 23L6 23L6 21ZM24 23C24.5523 23 25 22.5523 25 22C25 21.4477 24.5523 21 24 21L24 23ZM6 23L24 23L24 21L6 21L6 23Z',
                      fill: 'currentColor'
                  })
              ]
          })
        : (0, i.jsxs)('svg', {
              ...r,
              width: '25',
              height: '19',
              viewBox: '0 0 25 19',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
              children: [
                  (0, i.jsx)('path', {
                      d: 'M2 1C2 0.447715 1.55228 0 1 0C0.447715 0 0 0.447715 0 1H2ZM0 1V14H2V1H0ZM0 14C0 16.7614 2.23858 19 5 19V17C3.34315 17 2 15.6569 2 14H0Z',
                      fill: 'currentColor'
                  }),
                  (0, i.jsx)('path', {
                      d: 'M6 17L5 17L5 19L6 19L6 17ZM24 19C24.5523 19 25 18.5523 25 18C25 17.4477 24.5523 17 24 17L24 19ZM6 19L24 19L24 17L6 17L6 19Z',
                      fill: 'currentColor'
                  })
              ]
          });
}
function A(e) {
    let { style: t, withGuildIcon: n } = e;
    return (0, i.jsx)('svg', {
        className: a()(T.spine, { [T.spineWithGuildIcon]: n }),
        width: '12',
        height: '11',
        viewBox: '0 0 12 11',
        fill: 'none',
        'aria-hidden': !0,
        style: t,
        children: (0, i.jsx)('path', {
            d: 'M11 9H4C2.89543 9 2 8.10457 2 7V1C2 0.447715 1.55228 0 1 0C0.447715 0 0 0.447715 0 1V7C0 9.20914 1.79086 11 4 11H11C11.5523 11 12 10.5523 12 10C12 9.44771 11.5523 9 11 9Z',
            fill: 'currentColor'
        })
    });
}
t.Z = l.memo(function (e) {
    let { thread: t, isSelectedChannel: r, isSelectedVoice: T, isLast: w, withGuildIcon: M } = e,
        L = (0, s.e7)([x.ZP], () => x.ZP.getVoiceStatesForChannel(t), [t]),
        R = (0, s.e7)([C.Z], () => C.Z.hasVideo(t.id)),
        {
            unread: D,
            mentionCount: G,
            isMentionLowImportance: B
        } = (0, s.cj)([v.ZP], () => ({
            unread: v.ZP.hasUnread(t.id),
            mentionCount: v.ZP.getMentionCount(t.id),
            isMentionLowImportance: v.ZP.getIsMentionLowImportance(t.id)
        })),
        k = (0, s.e7)([f.Z], () => f.Z.isMuted(t.id)),
        U = l.useCallback(
            (e) => {
                (0, m.ok)(t, !e.shiftKey, N.on.CHANNEL_LIST);
            },
            [t]
        ),
        O = l.useCallback(() => {
            u.Z.preload(t.guild_id, t.id);
        }, [t.guild_id, t.id]),
        V = l.useCallback(
            (e) => {
                let l = g.Z.getChannel(t.id);
                null != l &&
                    (0, d.jW)(e, async () => {
                        let { default: e } = await n.e('40157').then(n.bind(n, 422200));
                        return (t) =>
                            (0, i.jsx)(e, {
                                ...t,
                                channel: l
                            });
                    });
            },
            [t.id]
        ),
        H = null == L ? 0 : L.length,
        { role: F, ...W } = (0, o.JA)(t.id),
        z = l.useRef(null),
        q =
            G > 0
                ? E.intl.formatToPlainString(E.t['ZL7+Iy'], {
                      channelName: t.name,
                      mentionCount: G
                  })
                : D
                  ? E.intl.formatToPlainString(E.t.YlVvmZ, { channelName: t.name })
                  : E.intl.formatToPlainString(E.t['0nZpiI'], { channelName: t.name }),
        Y = (0, p.Q3)('GuildSidebarThreadListEntry') ? P : A;
    return (0, i.jsxs)('li', {
        role: F,
        className: a()(y.containerDefault, { [y.selected]: r }),
        children: [
            (0, i.jsx)(Y, { withGuildIcon: M }),
            w
                ? null
                : (0, i.jsx)(Y, {
                      withGuildIcon: M,
                      inverted: !0,
                      style: { transform: 'rotateX(180deg) translateY(-9px)' }
                  }),
            (0, i.jsx)(c.FocusRing, {
                focusTarget: z,
                ringTarget: z,
                offset: {
                    top: 2,
                    bottom: 2,
                    right: 4
                },
                children: (0, i.jsxs)('div', {
                    className: a()(y.iconVisibility, j.wrapper, j.typeThread, {
                        [j.modeSelected]: r,
                        [j.modeMuted]: !r && k,
                        [j.modeUnreadImportant]: !k && !r && D,
                        [j.withGuildIcon]: M
                    }),
                    onMouseDown: O,
                    onContextMenu: V,
                    children: [
                        !D || k || r ? null : (0, i.jsx)('div', { className: a()(j.unread, j.unreadImportant) }),
                        (0, i.jsx)(c.Clickable, {
                            ...W,
                            innerRef: z,
                            className: j.link,
                            onClick: U,
                            'aria-label': q,
                            focusProps: { enabled: !1 },
                            children: (0, i.jsxs)('div', {
                                className: a()(j.linkTop, j.__invalid_threadMainContent),
                                children: [
                                    (0, i.jsx)(h.Z, {
                                        className: j.name,
                                        'aria-hidden': !0,
                                        children: t.name
                                    }),
                                    (0, i.jsxs)('div', {
                                        className: j.children,
                                        children: [
                                            H > 0 && t.userLimit > 0
                                                ? (0, i.jsx)(_.Z, {
                                                      userCount: H,
                                                      video: R,
                                                      channel: t
                                                  })
                                                : null,
                                            (0, I.Z)(G)
                                                ? (0, i.jsx)(Z.Z, {
                                                      mentionsCount: G,
                                                      isMentionLowImportance: B
                                                  })
                                                : null
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            (0, i.jsx)(b.Z, {
                channel: t,
                collapsed: !T,
                collapsedMax: 6,
                voiceStates: L,
                location: S.Sbl.GUILD_CHANNEL_LIST
            })
        ]
    });
});
