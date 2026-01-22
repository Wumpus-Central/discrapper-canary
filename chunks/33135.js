n.d(t, {
    A: () => k,
}),
    n(321073),
    n(896048),
    n(114821),
    n(339614),
    n(667532);
var r = n(627968),
    a = n(64700),
    i = n(735438),
    l = n.n(i),
    s = n(311907),
    o = n(397927),
    d = n(233545),
    c = n(83257),
    u = n(361739),
    m = n(235986),
    p = n(97469),
    y = n(544028),
    h = n(734057),
    g = n(696451),
    A = n(383501),
    f = n(412780),
    v = n(287809),
    b = n(427262),
    C = n(817006),
    E = n(121614),
    x = n(663272),
    D = n(820931),
    R = n(307414),
    F = n(244920),
    S = n(652215),
    j = n(731854),
    P = n(985018),
    N = n(518959);

function I(e, t, n, a, i) {
    let s = [];
    if (null == t) return s;
    let {
        transport: c,
        rtp: { inbound: p, outbound: y },
        camera: h,
    } = t;
    if (
        (s.push({
            section: u.Fq.HEADER,
            label: P.intl.formatToPlainString(P.t.PK5fOC, {
                context: e,
            }),
        }),
        null != c &&
            s.push({
                section: (0, f.Xi)(e, S.zWA.TRANSPORT, n),
                label: P.intl.string(P.t.wU9IN2),
                element: F.A,
                elementProps: {
                    context: e,
                    index: n,
                },
            }),
        null == y ||
            l().isEmpty(y) ||
            s.push({
                section: (0, f.Xi)(e, S.zWA.OUTBOUND, n),
                label: P.intl.string(P.t["3u0gII"]),
                element: D.A,
                elementProps: {
                    context: e,
                    index: n,
                },
            }),
        null != h &&
            s.push({
                section: (0, f.Xi)(e, S.zWA.CAMERA, n),
                label: P.intl.string(P.t["2AGBWH"]),
                element: C.A,
                elementProps: {
                    context: e,
                    index: n,
                    camera: h,
                },
            }),
        null != p && !l().isEmpty(p))
    ) {
        let t = [];
        Object.keys(p).forEach((l) => {
            let s,
                c = v.default.getUser(l),
                u = g.Ay.getNick(i, l),
                y = (0, f.Xi)(e, l, n);
            null != p[l] &&
                p[l].length > 0 &&
                t.push({
                    section: y,
                    label:
                        null != c
                            ? (0, r.jsx)(m.A, {
                                  align: m.A.Align.CENTER,
                                  children: (0, r.jsx)(m.A.Child, {
                                      children: (0, r.jsxs)(m.A, {
                                          align: m.A.Align.CENTER,
                                          children: [
                                              (0, r.jsx)(o.euF, {
                                                  size: o._3J.SIZE_24,
                                                  src: c.getAvatarURL(i, 24),
                                                  "aria-label": c.username,
                                                  className: N.my,
                                              }),
                                              (0, r.jsx)("span", {
                                                  className: N.Xh,
                                                  children: null != u ? u : b.Ay.getName(c),
                                              }),
                                          ],
                                      }),
                                  }),
                              })
                            : ((s = null != u ? u : l),
                              (0, r.jsx)(m.A, {
                                  align: m.A.Align.CENTER,
                                  children: (0, r.jsx)(m.A.Child, {
                                      children: (0, r.jsx)(m.A, {
                                          align: m.A.Align.CENTER,
                                          children: (0, r.jsx)("span", {
                                              className: N.Xh,
                                              children: s,
                                          }),
                                      }),
                                  }),
                              })),
                    ariaLabel: null != c ? c.tag : l,
                    onClick: () => {
                        d.c4(y);
                    },
                    element: x.A,
                    elementProps: {
                        context: e,
                        index: n,
                        videoStreams: a,
                    },
                });
        }),
            t.length > 0 &&
                (s.push({
                    section: u.Fq.HEADER,
                    label: P.intl.string(P.t.SJmZaq),
                }),
                s.push(...t));
    }
    return s;
}

function k() {
    var e, t;
    let { defaultStats: n, streamStats: i } = (0, s.bG)(
            [f.Ay],
            () => ({
                defaultStats: f.Ay.getAllStats(j.x.DEFAULT),
                streamStats: f.Ay.getAllStats(j.x.STREAM),
            }),
            [],
            s.My,
        ),
        l = (0, s.bG)([A.A, h.A], () => h.A.getChannel(A.A.getChannelId())),
        m = null == (e = n.concat(i).find((e) => null != e.screenshare)) ? void 0 : e.screenshare,
        g = null == (t = i.find((e) => null != e.clips)) ? void 0 : t.clips,
        v = (0, s.bG)([y.A], () => y.A.theme),
        b = (0, p.NC)(),
        C = (0, s.bG)([f.Ay], () => f.Ay.getSection()),
        x = (function (e) {
            let {
                    defaultStats: t,
                    streamStats: n,
                    videoStreams: a,
                    screenshare: i,
                    clips: l,
                    channel: s,
                    connectionState: d,
                } = e,
                c = t.flatMap((e, t) => I(j.x.DEFAULT, e, t, a, null == s ? void 0 : s.getGuildId())),
                m = n.flatMap((e, t) => I(j.x.STREAM, e, t, a, null == s ? void 0 : s.getGuildId())),
                p = [],
                y = [],
                h = {
                    section: u.Fq.DIVIDER,
                };
            return (
                null != i &&
                    (p.push(h),
                    p.push({
                        section: S.zWA.SCREENSHARE,
                        label: P.intl.string(P.t["gWbr/U"]),
                        element: R.A,
                        elementProps: {
                            screenshare: i,
                        },
                    })),
                null != l &&
                    (y.push(h),
                    y.push({
                        section: S.zWA.CLIPS,
                        label: P.intl.string(P.t.MKrFKE),
                        element: E.A,
                        elementProps: {
                            clips: l,
                        },
                    })),
                m.length > 0 && m.unshift(h),
                [
                    ...(null != s
                        ? [
                              {
                                  section: u.Fq.CUSTOM,
                                  label: "Channel Name",
                                  element: () =>
                                      (0, r.jsx)(o.Heading, {
                                          className: N.HA,
                                          variant: "heading-lg/semibold",
                                          children: s.name,
                                      }),
                              },
                          ]
                        : []),
                    {
                        section: u.Fq.CUSTOM,
                        label: "Connection State",
                        element: () =>
                            (0, r.jsx)(o.Heading, {
                                className: N.HA,
                                variant: "heading-md/normal",
                                children: d === S.S7L.RTC_CONNECTED ? "Connected" : "Disconnected",
                            }),
                    },
                    ...c,
                    ...m,
                    ...p,
                    ...y,
                ]
            );
        })({
            defaultStats: n,
            streamStats: i,
            videoStreams: (0, s.bG)([f.Ay], () => f.Ay.getVideoStreams()),
            screenshare: m,
            clips: g,
            channel: l,
            connectionState: (0, s.bG)([A.A], () => A.A.getState()),
        });
    return (
        a.useEffect(
            () => () => {
                d.VN();
            },
            [],
        ),
        (0, r.jsx)(c.Ay, {
            theme: v,
            sidebarTheme: b,
            section: C,
            onSetSection: d.c4,
            sections: x,
        })
    );
}
