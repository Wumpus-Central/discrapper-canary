r.d(t, { Z: () => k }), r(653041), r(47120), r(390547), r(733860);
var n = r(200651),
    a = r(192379),
    i = r(392711),
    l = r.n(i),
    s = r(442837),
    o = r(481060),
    d = r(304680),
    c = r(503089),
    u = r(493544),
    m = r(600164),
    p = r(210887),
    h = r(592125),
    y = r(271383),
    g = r(19780),
    f = r(226961),
    v = r(594174),
    D = r(51144),
    E = r(189648),
    C = r(775194),
    Z = r(499848),
    N = r(724392),
    R = r(442580),
    j = r(770800),
    x = r(981631),
    b = r(65154),
    F = r(388032),
    P = r(316095);
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
                            className: P.avatar
                        }),
                        (0, n.jsx)('span', {
                            className: P.username,
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
                        className: P.username,
                        children: e
                    })
                })
            })
        });
function B(e, t, r, n, a) {
    let i = [];
    if (null == t) return i;
    let {
        transport: s,
        rtp: { inbound: o, outbound: c },
        camera: m
    } = t;
    if (
        (i.push({
            section: u.ID.HEADER,
            label: F.intl.formatToPlainString(F.t.PK5fOD, { context: e })
        }),
        null != s &&
            i.push({
                section: (0, f.J$)(e, x._s_.TRANSPORT, r),
                label: F.intl.string(F.t.wU9INz),
                element: j.Z,
                elementProps: {
                    context: e,
                    index: r
                }
            }),
        null == c ||
            l().isEmpty(c) ||
            i.push({
                section: (0, f.J$)(e, x._s_.OUTBOUND, r),
                label: F.intl.string(F.t['3u0gIC']),
                element: N.Z,
                elementProps: {
                    context: e,
                    index: r
                }
            }),
        null != m &&
            i.push({
                section: (0, f.J$)(e, x._s_.CAMERA, r),
                label: F.intl.string(F.t['2AGBWF']),
                element: E.Z,
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
                c = (0, f.J$)(e, i, r);
            null != o[i] &&
                o[i].length > 0 &&
                t.push({
                    section: c,
                    label: null != l ? S(l, s, a) : I(null != s ? s : i),
                    ariaLabel: null != l ? l.tag : i,
                    onClick: () => {
                        d.zc(c);
                    },
                    element: Z.Z,
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
                    label: F.intl.string(F.t.SJmZam)
                }),
                i.push(...t));
    }
    return i;
}
function k() {
    var e, t;
    let { defaultStats: r, streamStats: i } = (0, s.e7)(
            [f.ZP],
            () => ({
                defaultStats: f.ZP.getAllStats(b.Yn.DEFAULT),
                streamStats: f.ZP.getAllStats(b.Yn.STREAM)
            }),
            [],
            s.pF
        ),
        l = (0, s.e7)([g.Z, h.Z], () => h.Z.getChannel(g.Z.getChannelId())),
        m = null === (e = r.concat(i).find((e) => null != e.screenshare)) || void 0 === e ? void 0 : e.screenshare,
        y = null === (t = i.find((e) => null != e.clips)) || void 0 === t ? void 0 : t.clips,
        v = (0, s.e7)([p.Z], () => p.Z.theme),
        D = (0, s.e7)([p.Z], () => (p.Z.darkSidebar ? x.BRd.DARK : void 0)),
        E = (0, s.e7)([f.ZP], () => f.ZP.getSection()),
        Z = (function (e) {
            let { defaultStats: t, streamStats: r, videoStreams: a, screenshare: i, clips: l, channel: s, connectionState: d } = e,
                c = t.flatMap((e, t) => B(b.Yn.DEFAULT, e, t, a, null == s ? void 0 : s.getGuildId())),
                m = r.flatMap((e, t) => B(b.Yn.STREAM, e, t, a, null == s ? void 0 : s.getGuildId())),
                p = [],
                h = [],
                y = { section: u.ID.DIVIDER };
            return (
                null != i &&
                    (p.push(y),
                    p.push({
                        section: x._s_.SCREENSHARE,
                        label: F.intl.string(F.t['gWbr/f']),
                        element: R.Z,
                        elementProps: { screenshare: i }
                    })),
                null != l &&
                    (h.push(y),
                    h.push({
                        section: x._s_.CLIPS,
                        label: F.intl.string(F.t.MKrFKC),
                        element: C.Z,
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
                                          className: P.channelName,
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
                                className: P.channelName,
                                variant: 'heading-md/normal',
                                children: d === x.hes.RTC_CONNECTED ? 'Connected' : 'Disconnected'
                            })
                    },
                    ...c,
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
                d.xv();
            },
            []
        ),
        (0, n.jsx)(c.ZP, {
            theme: v,
            sidebarTheme: D,
            section: E,
            onSetSection: d.zc,
            sections: Z
        })
    );
}
