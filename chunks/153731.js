r.d(t, { Z: () => B }), r(539854), r(388685), r(361932), r(187205), r(290780);
var n = r(255367),
    a = r(73800),
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
    y = r(271383),
    g = r(19780),
    f = r(226961),
    v = r(594174),
    D = r(51144),
    b = r(189648),
    E = r(775194),
    j = r(499848),
    C = r(724392),
    Z = r(442580),
    P = r(770800),
    N = r(981631),
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
        transport: s,
        rtp: { inbound: o, outbound: d },
        camera: m
    } = t;
    if (
        (i.push({
            section: u.ID.HEADER,
            label: x.intl.formatToPlainString(x.t.PK5fOD, { context: e })
        }),
        null != s &&
            i.push({
                section: (0, f.J$)(e, N._s_.TRANSPORT, r),
                label: x.intl.string(x.t.wU9INz),
                element: P.Z,
                elementProps: {
                    context: e,
                    index: r
                }
            }),
        null == d ||
            l().isEmpty(d) ||
            i.push({
                section: (0, f.J$)(e, N._s_.OUTBOUND, r),
                label: x.intl.string(x.t['3u0gIC']),
                element: C.Z,
                elementProps: {
                    context: e,
                    index: r
                }
            }),
        null != m &&
            i.push({
                section: (0, f.J$)(e, N._s_.CAMERA, r),
                label: x.intl.string(x.t['2AGBWF']),
                element: b.Z,
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
                s = y.ZP.getNick(a, i),
                d = (0, f.J$)(e, i, r);
            null != o[i] &&
                o[i].length > 0 &&
                t.push({
                    section: d,
                    label: null != l ? S(l, s, a) : I(null != s ? s : i),
                    ariaLabel: null != l ? l.tag : i,
                    onClick: () => {
                        c.zc(d);
                    },
                    element: j.Z,
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
                    label: x.intl.string(x.t.SJmZam)
                }),
                i.push(...t));
    }
    return i;
}
function B() {
    var e, t;
    let { defaultStats: r, streamStats: i } = (0, s.e7)(
            [f.ZP],
            () => ({
                defaultStats: f.ZP.getAllStats(R.Yn.DEFAULT),
                streamStats: f.ZP.getAllStats(R.Yn.STREAM)
            }),
            [],
            s.pF
        ),
        l = (0, s.e7)([g.Z, h.Z], () => h.Z.getChannel(g.Z.getChannelId())),
        m = null == (e = r.concat(i).find((e) => null != e.screenshare)) ? void 0 : e.screenshare,
        y = null == (t = i.find((e) => null != e.clips)) ? void 0 : t.clips,
        v = (0, s.e7)([p.Z], () => p.Z.theme),
        D = (0, s.e7)([p.Z], () => (p.Z.darkSidebar ? N.BRd.DARK : void 0)),
        b = (0, s.e7)([f.ZP], () => f.ZP.getSection()),
        j = (function (e) {
            let { defaultStats: t, streamStats: r, videoStreams: a, screenshare: i, clips: l, channel: s, connectionState: c } = e,
                d = t.flatMap((e, t) => k(R.Yn.DEFAULT, e, t, a, null == s ? void 0 : s.getGuildId())),
                m = r.flatMap((e, t) => k(R.Yn.STREAM, e, t, a, null == s ? void 0 : s.getGuildId())),
                p = [],
                h = [],
                y = { section: u.ID.DIVIDER };
            return (
                null != i &&
                    (p.push(y),
                    p.push({
                        section: N._s_.SCREENSHARE,
                        label: x.intl.string(x.t['gWbr/f']),
                        element: Z.Z,
                        elementProps: { screenshare: i }
                    })),
                null != l &&
                    (h.push(y),
                    h.push({
                        section: N._s_.CLIPS,
                        label: x.intl.string(x.t.MKrFKC),
                        element: E.Z,
                        elementProps: { clips: l }
                    })),
                m.length > 0 && m.unshift(y),
                [
                    ...(null != s
                        ? [
                              {
                                  section: u.ID.CUSTOM,
                                  label: 'Channel Name',
                                  element: () =>
                                      (0, n.jsx)(o.X6q, {
                                          className: F.channelName,
                                          variant: 'heading-lg/semibold',
                                          children: s.name
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
                                children: c === N.hes.RTC_CONNECTED ? 'Connected' : 'Disconnected'
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
            videoStreams: (0, s.e7)([f.ZP], () => f.ZP.getVideoStreams()),
            screenshare: m,
            clips: y,
            channel: l,
            connectionState: (0, s.e7)([g.Z], () => g.Z.getState())
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
            section: b,
            onSetSection: c.zc,
            sections: j
        })
    );
}
