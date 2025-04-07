r.d(t, { Z: () => B }), r(539854), r(388685), r(361932), r(187205), r(290780);
var n = r(200651),
    a = r(192379),
    i = r(392711),
    s = r.n(i),
    l = r(442837),
    o = r(481060),
    c = r(304680),
    d = r(503089),
    u = r(493544),
    m = r(600164),
    p = r(210887),
    h = r(592125),
    y = r(271383),
    g = r(19780),
    f = r(226961),
    v = r(594174),
    D = r(51144),
    N = r(189648),
    b = r(775194),
    E = r(499848),
    P = r(724392),
    j = r(442580),
    C = r(770800),
    Z = r(981631),
    R = r(65154),
    x = r(388032),
    F = r(442122);
let S = (e, t, r) =>
        (0, n.jsx)(m.Z, {
            align: m.Z.Align.CENTER,
            children: (0, n.jsx)(m.Z.Child, {
                children: (0, n.jsxs)(m.Z, {
                    align: m.Z.Align.CENTER,
                    children: [
                        (0, n.jsx)(o.qEK, {
                            size: o.EFr.SIZE_24,
                            src: e.getAvatarURL(r, 24),
                            'aria-label': e.username,
                            className: F.avatar
                        }),
                        (0, n.jsx)('span', {
                            className: F.username,
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
                        className: F.username,
                        children: e
                    })
                })
            })
        });
function k(e, t, r, n, a) {
    let i = [];
    if (null == t) return i;
    let {
        transport: l,
        rtp: { inbound: o, outbound: d },
        camera: m
    } = t;
    if (
        (i.push({
            section: u.ID.HEADER,
            label: x.NW.formatToPlainString(x.t.PK5fOD, { context: e })
        }),
        null != l &&
            i.push({
                section: (0, f.J$)(e, Z._s_.TRANSPORT, r),
                label: x.NW.string(x.t.wU9INz),
                element: C.Z,
                elementProps: {
                    context: e,
                    index: r
                }
            }),
        null == d ||
            s().isEmpty(d) ||
            i.push({
                section: (0, f.J$)(e, Z._s_.OUTBOUND, r),
                label: x.NW.string(x.t['3u0gIC']),
                element: P.Z,
                elementProps: {
                    context: e,
                    index: r
                }
            }),
        null != m &&
            i.push({
                section: (0, f.J$)(e, Z._s_.CAMERA, r),
                label: x.NW.string(x.t['2AGBWF']),
                element: N.Z,
                elementProps: {
                    context: e,
                    index: r,
                    camera: m
                }
            }),
        null != o && !s().isEmpty(o))
    ) {
        let t = [];
        Object.keys(o).forEach((i) => {
            let s = v.default.getUser(i),
                l = y.ZP.getNick(a, i),
                d = (0, f.J$)(e, i, r);
            null != o[i] &&
                o[i].length > 0 &&
                t.push({
                    section: d,
                    label: null != s ? S(s, l, a) : I(null != l ? l : i),
                    ariaLabel: null != s ? s.tag : i,
                    onClick: () => {
                        c.zc(d);
                    },
                    element: E.Z,
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
                    label: x.NW.string(x.t.SJmZam)
                }),
                i.push(...t));
    }
    return i;
}
function B() {
    var e, t;
    let { defaultStats: r, streamStats: i } = (0, l.e7)(
            [f.ZP],
            () => ({
                defaultStats: f.ZP.getAllStats(R.Yn.DEFAULT),
                streamStats: f.ZP.getAllStats(R.Yn.STREAM)
            }),
            [],
            l.pF
        ),
        s = (0, l.e7)([g.ZP, h.Z], () => h.Z.getChannel(g.ZP.getChannelId())),
        m = null == (e = r.concat(i).find((e) => null != e.screenshare)) ? void 0 : e.screenshare,
        y = null == (t = i.find((e) => null != e.clips)) ? void 0 : t.clips,
        v = (0, l.e7)([p.Z], () => p.Z.theme),
        D = (0, l.e7)([p.Z], () => (p.Z.darkSidebar ? Z.BRd.DARK : void 0)),
        N = (0, l.e7)([f.ZP], () => f.ZP.getSection()),
        E = (function (e) {
            let { defaultStats: t, streamStats: r, videoStreams: a, screenshare: i, clips: s, channel: l, connectionState: c } = e,
                d = t.flatMap((e, t) => k(R.Yn.DEFAULT, e, t, a, null == l ? void 0 : l.getGuildId())),
                m = r.flatMap((e, t) => k(R.Yn.STREAM, e, t, a, null == l ? void 0 : l.getGuildId())),
                p = [],
                h = [],
                y = { section: u.ID.DIVIDER };
            return (
                null != i &&
                    (p.push(y),
                    p.push({
                        section: Z._s_.SCREENSHARE,
                        label: x.NW.string(x.t['gWbr/f']),
                        element: j.Z,
                        elementProps: { screenshare: i }
                    })),
                null != s &&
                    (h.push(y),
                    h.push({
                        section: Z._s_.CLIPS,
                        label: x.NW.string(x.t.MKrFKC),
                        element: b.Z,
                        elementProps: { clips: s }
                    })),
                m.length > 0 && m.unshift(y),
                [
                    ...(null != l
                        ? [
                              {
                                  section: u.ID.CUSTOM,
                                  label: 'Channel Name',
                                  element: () =>
                                      (0, n.jsx)(o.X6q, {
                                          className: F.channelName,
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
                            (0, n.jsx)(o.X6q, {
                                className: F.channelName,
                                variant: 'heading-md/normal',
                                children: c === Z.hes.RTC_CONNECTED ? 'Connected' : 'Disconnected'
                            })
                    },
                    ...d,
                    ...m,
                    ...p,
                    ...h
                ]
            );
        })({
            defaultStats: r,
            streamStats: i,
            videoStreams: (0, l.e7)([f.ZP], () => f.ZP.getVideoStreams()),
            screenshare: m,
            clips: y,
            channel: s,
            connectionState: (0, l.e7)([g.ZP], () => g.ZP.getState())
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
            section: N,
            onSetSection: c.zc,
            sections: E
        })
    );
}
