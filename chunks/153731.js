r.d(t, {
    Z: function () {
        return k;
    }
}),
    r(653041),
    r(47120),
    r(390547),
    r(733860);
var n = r(200651),
    a = r(192379),
    i = r(392711),
    l = r.n(i),
    s = r(442837),
    o = r(481060),
    c = r(304680),
    d = r(503089),
    u = r(493544),
    m = r(600164),
    p = r(210887),
    h = r(592125),
    g = r(271383),
    f = r(19780),
    y = r(226961),
    v = r(594174),
    D = r(51144),
    F = r(189648),
    S = r(775194),
    C = r(499848),
    E = r(724392),
    Z = r(442580),
    R = r(770800),
    b = r(981631),
    x = r(65154),
    P = r(388032),
    N = r(14863);
let j = (e, t, r) =>
        (0, n.jsx)(m.Z, {
            align: m.Z.Align.CENTER,
            children: (0, n.jsx)(m.Z.Child, {
                children: (0, n.jsxs)(m.Z, {
                    align: m.Z.Align.CENTER,
                    children: [
                        (0, n.jsx)(o.Avatar, {
                            size: o.AvatarSizes.SIZE_24,
                            src: e.getAvatarURL(r, 24),
                            'aria-label': e.username,
                            className: N.avatar
                        }),
                        (0, n.jsx)('span', {
                            className: N.username,
                            children: null != t ? t : D.ZP.getName(e)
                        })
                    ]
                })
            })
        }),
    I = (e) =>
        (0, n.jsx)(m.Z, {
            align: m.Z.Align.CENTER,
            children: (0, n.jsx)(m.Z.Child, {
                children: (0, n.jsx)(m.Z, {
                    align: m.Z.Align.CENTER,
                    children: (0, n.jsx)('span', {
                        className: N.username,
                        children: e
                    })
                })
            })
        });
function T(e, t, r, n, a) {
    let i = [];
    if (null == t) return i;
    let {
        transport: s,
        rtp: { inbound: o, outbound: d },
        camera: m
    } = t;
    if (
        (i.push({
            section: u.ID.HEADER,
            label: P.intl.formatToPlainString(P.t.PK5fOD, { context: e })
        }),
        null != s &&
            i.push({
                section: (0, y.J$)(e, b._s_.TRANSPORT, r),
                label: P.intl.string(P.t.wU9INz),
                element: R.Z,
                elementProps: {
                    context: e,
                    index: r
                }
            }),
        null != d &&
            !l().isEmpty(d) &&
            i.push({
                section: (0, y.J$)(e, b._s_.OUTBOUND, r),
                label: P.intl.string(P.t['3u0gIC']),
                element: E.Z,
                elementProps: {
                    context: e,
                    index: r
                }
            }),
        null != m &&
            i.push({
                section: (0, y.J$)(e, b._s_.CAMERA, r),
                label: P.intl.string(P.t['2AGBWF']),
                element: F.Z,
                elementProps: {
                    context: e,
                    index: r,
                    camera: m
                }
            }),
        null != o && !l().isEmpty(o))
    ) {
        let t = [];
        Object.keys(o).forEach((i) => {
            let l = v.default.getUser(i),
                s = g.ZP.getNick(a, i),
                d = (0, y.J$)(e, i, r);
            null != o[i] &&
                o[i].length > 0 &&
                t.push({
                    section: d,
                    label: null != l ? j(l, s, a) : I(null != s ? s : i),
                    ariaLabel: null != l ? l.tag : i,
                    onClick: () => {
                        c.zc(d);
                    },
                    element: C.Z,
                    elementProps: {
                        context: e,
                        index: r,
                        videoStreams: n
                    }
                });
        }),
            t.length > 0 &&
                (i.push({
                    section: u.ID.HEADER,
                    label: P.intl.string(P.t.SJmZam)
                }),
                i.push(...t));
    }
    return i;
}
function k() {
    var e, t;
    let { defaultStats: r, streamStats: i } = (0, s.e7)(
            [y.ZP],
            () => ({
                defaultStats: y.ZP.getAllStats(x.Yn.DEFAULT),
                streamStats: y.ZP.getAllStats(x.Yn.STREAM)
            }),
            [],
            s.pF
        ),
        l = (0, s.e7)([f.Z, h.Z], () => h.Z.getChannel(f.Z.getChannelId())),
        m = null === (e = r.concat(i).find((e) => null != e.screenshare)) || void 0 === e ? void 0 : e.screenshare,
        g = null === (t = i.find((e) => null != e.clips)) || void 0 === t ? void 0 : t.clips,
        v = (0, s.e7)([p.Z], () => p.Z.theme),
        D = (0, s.e7)([p.Z], () => (p.Z.darkSidebar ? b.BRd.DARK : void 0)),
        F = (0, s.e7)([y.ZP], () => y.ZP.getSection()),
        C = (0, s.e7)([y.ZP], () => y.ZP.getVideoStreams()),
        E = (function (e) {
            let { defaultStats: t, streamStats: r, videoStreams: a, screenshare: i, clips: l, channel: s, connectionState: c } = e,
                d = t.flatMap((e, t) => T(x.Yn.DEFAULT, e, t, a, null == s ? void 0 : s.getGuildId())),
                m = r.flatMap((e, t) => T(x.Yn.STREAM, e, t, a, null == s ? void 0 : s.getGuildId())),
                p = [],
                h = [],
                g = { section: u.ID.DIVIDER };
            null != i &&
                (p.push(g),
                p.push({
                    section: b._s_.SCREENSHARE,
                    label: P.intl.string(P.t['gWbr/f']),
                    element: Z.Z,
                    elementProps: { screenshare: i }
                })),
                null != l &&
                    (h.push(g),
                    h.push({
                        section: b._s_.CLIPS,
                        label: P.intl.string(P.t.MKrFKC),
                        element: S.Z,
                        elementProps: { clips: l }
                    })),
                m.length > 0 && m.unshift(g);
            let f =
                null != s
                    ? [
                          {
                              section: u.ID.CUSTOM,
                              label: 'Channel Name',
                              element: () =>
                                  (0, n.jsx)(o.Heading, {
                                      className: N.channelName,
                                      variant: 'heading-lg/semibold',
                                      children: s.name
                                  })
                          }
                      ]
                    : [];
            return [
                ...f,
                {
                    section: u.ID.CUSTOM,
                    label: 'Connection State',
                    element: () =>
                        (0, n.jsx)(o.Heading, {
                            className: N.channelName,
                            variant: 'heading-md/normal',
                            children: c === b.hes.RTC_CONNECTED ? 'Connected' : 'Disconnected'
                        })
                },
                ...d,
                ...m,
                ...p,
                ...h
            ];
        })({
            defaultStats: r,
            streamStats: i,
            videoStreams: C,
            screenshare: m,
            clips: g,
            channel: l,
            connectionState: (0, s.e7)([f.Z], () => f.Z.getState())
        });
    return (
        a.useEffect(
            () => () => {
                c.xv();
            },
            []
        ),
        (0, n.jsx)(d.ZP, {
            theme: v,
            sidebarTheme: D,
            section: F,
            onSetSection: c.zc,
            sections: E
        })
    );
}
