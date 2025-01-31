n.d(t, { Z: () => w });
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(91192),
    s = n(442837),
    c = n(481060),
    d = n(493683),
    u = n(239091),
    h = n(111028),
    p = n(540059),
    m = n(569471),
    g = n(488131),
    f = n(592125),
    _ = n(306680),
    v = n(979651),
    x = n(938475),
    C = n(714794),
    Z = n(876548),
    I = n(25601),
    b = n(207055),
    S = n(981631),
    N = n(124368),
    E = n(388032),
    j = n(831746),
    y = n(193877),
    P = n(329986);
function A(e) {
    let { style: t, withGuildIcon: n, inverted: l } = e,
        r = {
            className: a()(P.spine, { [P.spineWithGuildIcon]: n }, { [P.invertedSpine]: l }),
            style: t
        },
        { density: o } = (0, c.TCT)();
    return 'cozy' === o
        ? (0, i.jsxs)('svg', {
              ...r,
              width: '10',
              height: '23',
              viewBox: '0 0 10 23',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
              children: [
                  (0, i.jsx)('path', {
                      d: 'M0 18H2c0 1.6569 1.3432 3 3 3v2c-2.7614 0-5-2.2386-5-5ZM0 1H2V18H0V1ZM2 1H0C0 .4477.4477 0 1 0c.5523 0 1 .4477 1 1Z',
                      fill: 'currentColor'
                  }),
                  (0, i.jsx)('path', {
                      d: 'M6 21H5v2H6V21Zm4 2s1 0 1-1-1-1-1-1v2ZM6 23h4V21H6v2Z',
                      fill: 'currentColor'
                  })
              ]
          })
        : (0, i.jsxs)('svg', {
              ...r,
              width: '10',
              height: '19',
              viewBox: '0 0 10 19',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
              children: [
                  (0, i.jsx)('path', {
                      d: 'M0 14H2c0 1.6569 1.3432 3 3 3v2c-2.7614 0-5-2.2386-5-5ZM0 1H2V14H0V1ZM2 1H0C0 .4477.4477 0 1 0c.5523 0 1 .4477 1 1Z',
                      fill: 'currentColor'
                  }),
                  (0, i.jsx)('path', {
                      d: 'M6 19V17H9v2H6Zm3 0V17s1 0 1 1-1 1-.989 1.004ZM6 17v2H5V17H6Z',
                      fill: 'currentColor'
                  })
              ]
          });
}
function T(e) {
    let { style: t, withGuildIcon: n } = e;
    return (0, i.jsx)('svg', {
        className: a()(P.spine, { [P.spineWithGuildIcon]: n }),
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
let w = l.memo(function (e) {
    let { thread: t, isSelectedChannel: r, isSelectedVoice: P, isLast: w, withGuildIcon: R } = e,
        L = (0, s.e7)([x.ZP], () => x.ZP.getVoiceStatesForChannel(t), [t]),
        M = (0, s.e7)([v.Z], () => v.Z.hasVideo(t.id)),
        {
            unread: D,
            mentionCount: G,
            isMentionLowImportance: k
        } = (0, s.cj)([_.ZP], () => ({
            unread: _.ZP.hasUnread(t.id),
            mentionCount: _.ZP.getMentionCount(t.id),
            isMentionLowImportance: _.ZP.getIsMentionLowImportance(t.id)
        })),
        B = (0, s.e7)([m.Z], () => m.Z.isMuted(t.id)),
        O = l.useCallback(
            (e) => {
                (0, g.ok)(t, !e.shiftKey, N.on.CHANNEL_LIST);
            },
            [t]
        ),
        U = l.useCallback(() => {
            d.Z.preload(t.guild_id, t.id);
        }, [t.guild_id, t.id]),
        V = l.useCallback(
            (e) => {
                let l = f.Z.getChannel(t.id);
                null != l &&
                    (0, u.jW)(e, async () => {
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
        F = null == L ? 0 : L.length,
        { role: H, ...z } = (0, o.JA)(t.id),
        W = l.useRef(null),
        q =
            G > 0
                ? E.intl.formatToPlainString(E.t['ZL7+Iy'], {
                      channelName: t.name,
                      mentionCount: G
                  })
                : D
                  ? E.intl.formatToPlainString(E.t.YlVvmZ, { channelName: t.name })
                  : E.intl.formatToPlainString(E.t['0nZpiI'], { channelName: t.name }),
        Y = (0, p.Q3)('GuildSidebarThreadListEntry') ? A : T;
    return (0, i.jsxs)('li', {
        role: H,
        className: a()(j.containerDefault, { [j.selected]: r }),
        children: [
            (0, i.jsx)(Y, { withGuildIcon: R }),
            w
                ? null
                : (0, i.jsx)(Y, {
                      withGuildIcon: R,
                      inverted: !0,
                      style: { transform: 'rotateX(180deg) translateY(-9px)' }
                  }),
            (0, i.jsx)(c.tEY, {
                focusTarget: W,
                ringTarget: W,
                offset: {
                    top: 2,
                    bottom: 2,
                    right: 4
                },
                children: (0, i.jsxs)('div', {
                    className: a()(j.iconVisibility, y.wrapper, y.typeThread, {
                        [y.modeSelected]: r,
                        [y.modeMuted]: !r && B,
                        [y.modeUnreadImportant]: !B && !r && D,
                        [y.withGuildIcon]: R
                    }),
                    onMouseDown: U,
                    onContextMenu: V,
                    children: [
                        !D || B || r ? null : (0, i.jsx)('div', { className: a()(y.unread, y.unreadImportant) }),
                        (0, i.jsx)(c.P3F, {
                            ...z,
                            innerRef: W,
                            className: y.link,
                            onClick: O,
                            'aria-label': q,
                            focusProps: { enabled: !1 },
                            children: (0, i.jsxs)('div', {
                                className: a()(y.linkTop, y.__invalid_threadMainContent),
                                children: [
                                    (0, i.jsx)(h.Z, {
                                        className: y.name,
                                        'aria-hidden': !0,
                                        children: t.name
                                    }),
                                    (0, i.jsxs)('div', {
                                        className: y.children,
                                        children: [
                                            F > 0 && t.userLimit > 0
                                                ? (0, i.jsx)(Z.Z, {
                                                      userCount: F,
                                                      video: M,
                                                      channel: t
                                                  })
                                                : null,
                                            (0, C.Z)(G)
                                                ? (0, i.jsx)(I.Z, {
                                                      mentionsCount: G,
                                                      isMentionLowImportance: k
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
                collapsed: !P,
                collapsedMax: 6,
                voiceStates: L,
                location: S.Sbl.GUILD_CHANNEL_LIST
            })
        ]
    });
});
