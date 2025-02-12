n.d(t, { Z: () => B }), n(653041), n(47120), n(390547), n(733860);
var r = n(200651),
    a = n(192379),
    i = n(392711),
    o = n.n(i),
    l = n(442837),
    s = n(481060),
    d = n(304680),
    c = n(503089),
    u = n(493544),
    m = n(600164),
    p = n(210887),
    h = n(592125),
    g = n(271383),
    b = n(19780),
    y = n(226961),
    f = n(594174),
    v = n(51144),
    C = n(189648),
    R = n(775194),
    D = n(499848),
    S = n(724392),
    E = n(442580),
    Z = n(770800),
    N = n(981631),
    x = n(65154),
    j = n(388032),
    P = n(288241);
let _ = (e, t, n) =>
        (0, r.jsx)(m.Z, {
            align: m.Z.Align.CENTER,
            children: (0, r.jsx)(m.Z.Child, {
                children: (0, r.jsxs)(m.Z, {
                    align: m.Z.Align.CENTER,
                    children: [
                        (0, r.jsx)(s.qEK, {
                            size: s.EFr.SIZE_24,
                            src: e.getAvatarURL(n, 24),
                            'aria-label': e.username,
                            className: P.avatar
                        }),
                        (0, r.jsx)('span', {
                            className: P.username,
                            children: null != t ? t : v.ZP.getName(e)
                        })
                    ]
                })
            })
        }),
    F = (e) =>
        (0, r.jsx)(m.Z, {
            align: m.Z.Align.CENTER,
            children: (0, r.jsx)(m.Z.Child, {
                children: (0, r.jsx)(m.Z, {
                    align: m.Z.Align.CENTER,
                    children: (0, r.jsx)('span', {
                        className: P.username,
                        children: e
                    })
                })
            })
        });
function I(e, t, n, r, a) {
    let i = [];
    if (null == t) return i;
    let {
        transport: l,
        rtp: { inbound: s, outbound: c },
        camera: m
    } = t;
    if (
        (i.push({
            section: u.ID.HEADER,
            label: j.intl.formatToPlainString(j.t.PK5fOD, { context: e })
        }),
        null != l &&
            i.push({
                section: (0, y.J$)(e, N._s_.TRANSPORT, n),
                label: j.intl.string(j.t.wU9INz),
                element: Z.Z,
                elementProps: {
                    context: e,
                    index: n
                }
            }),
        null == c ||
            o().isEmpty(c) ||
            i.push({
                section: (0, y.J$)(e, N._s_.OUTBOUND, n),
                label: j.intl.string(j.t['3u0gIC']),
                element: S.Z,
                elementProps: {
                    context: e,
                    index: n
                }
            }),
        null != m &&
            i.push({
                section: (0, y.J$)(e, N._s_.CAMERA, n),
                label: j.intl.string(j.t['2AGBWF']),
                element: C.Z,
                elementProps: {
                    context: e,
                    index: n,
                    camera: m
                }
            }),
        null != s && !o().isEmpty(s))
    ) {
        let t = [];
        Object.keys(s).forEach((i) => {
            let o = f.default.getUser(i),
                l = g.ZP.getNick(a, i),
                c = (0, y.J$)(e, i, n);
            null != s[i] &&
                s[i].length > 0 &&
                t.push({
                    section: c,
                    label: null != o ? _(o, l, a) : F(null != l ? l : i),
                    ariaLabel: null != o ? o.tag : i,
                    onClick: () => {
                        d.zc(c);
                    },
                    element: D.Z,
                    elementProps: {
                        context: e,
                        index: n,
                        videoStreams: r
                    }
                });
        }),
            t.length > 0 &&
                (i.push({
                    section: u.ID.HEADER,
                    label: j.intl.string(j.t.SJmZam)
                }),
                i.push(...t));
    }
    return i;
}
function B() {
    var e, t;
    let { defaultStats: n, streamStats: i } = (0, l.e7)(
            [y.ZP],
            () => ({
                defaultStats: y.ZP.getAllStats(x.Yn.DEFAULT),
                streamStats: y.ZP.getAllStats(x.Yn.STREAM)
            }),
            [],
            l.pF
        ),
        o = (0, l.e7)([b.Z, h.Z], () => h.Z.getChannel(b.Z.getChannelId())),
        m = null === (e = n.concat(i).find((e) => null != e.screenshare)) || void 0 === e ? void 0 : e.screenshare,
        g = null === (t = i.find((e) => null != e.clips)) || void 0 === t ? void 0 : t.clips,
        f = (0, l.e7)([p.Z], () => p.Z.theme),
        v = (0, l.e7)([p.Z], () => (p.Z.darkSidebar ? N.BRd.DARK : void 0)),
        C = (0, l.e7)([y.ZP], () => y.ZP.getSection()),
        D = (function (e) {
            let { defaultStats: t, streamStats: n, videoStreams: a, screenshare: i, clips: o, channel: l, connectionState: d } = e,
                c = t.flatMap((e, t) => I(x.Yn.DEFAULT, e, t, a, null == l ? void 0 : l.getGuildId())),
                m = n.flatMap((e, t) => I(x.Yn.STREAM, e, t, a, null == l ? void 0 : l.getGuildId())),
                p = [],
                h = [],
                g = { section: u.ID.DIVIDER };
            return (
                null != i &&
                    (p.push(g),
                    p.push({
                        section: N._s_.SCREENSHARE,
                        label: j.intl.string(j.t['gWbr/f']),
                        element: E.Z,
                        elementProps: { screenshare: i }
                    })),
                null != o &&
                    (h.push(g),
                    h.push({
                        section: N._s_.CLIPS,
                        label: j.intl.string(j.t.MKrFKC),
                        element: R.Z,
                        elementProps: { clips: o }
                    })),
                m.length > 0 && m.unshift(g),
                [
                    ...(null != l
                        ? [
                              {
                                  section: u.ID.CUSTOM,
                                  label: 'Channel Name',
                                  element: () =>
                                      (0, r.jsx)(s.X6q, {
                                          className: P.channelName,
                                          variant: 'heading-lg/semibold',
                                          children: l.name
                                      })
                              }
                          ]
                        : []),
                    {
                        section: u.ID.CUSTOM,
                        label: 'Connection State',
                        element: () =>
                            (0, r.jsx)(s.X6q, {
                                className: P.channelName,
                                variant: 'heading-md/normal',
                                children: d === N.hes.RTC_CONNECTED ? 'Connected' : 'Disconnected'
                            })
                    },
                    ...c,
                    ...m,
                    ...p,
                    ...h
                ]
            );
        })({
            defaultStats: n,
            streamStats: i,
            videoStreams: (0, l.e7)([y.ZP], () => y.ZP.getVideoStreams()),
            screenshare: m,
            clips: g,
            channel: o,
            connectionState: (0, l.e7)([b.Z], () => b.Z.getState())
        });
    return (
        a.useEffect(
            () => () => {
                d.xv();
            },
            []
        ),
        (0, r.jsx)(c.ZP, {
            theme: f,
            sidebarTheme: v,
            section: C,
            onSetSection: d.zc,
            sections: D
        })
    );
}
