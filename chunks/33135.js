r.d(t, { A: () => T }), r(321073), r(667532);
var n = r(627968),
    i = r(64700),
    a = r(735438),
    o = r.n(a),
    l = r(311907),
    s = r(97808),
    d = r(778712),
    c = r(534514),
    u = r(233545),
    m = r(83257),
    p = r(361739),
    h = r(47167),
    y = r(235986),
    b = r(97469),
    g = r(544028),
    f = r(734057),
    A = r(696451),
    C = r(383501),
    v = r(412780),
    F = r(994500),
    x = r(287809),
    D = r(427262),
    E = r(817006),
    S = r(121614),
    R = r(663272),
    _ = r(820931),
    j = r(307414),
    I = r(244920),
    B = r(652215),
    k = r(731854),
    N = r(985018),
    P = r(41604);
function w(e, t, r, i, a) {
    let l = [];
    if (null == t) return l;
    let {
        transport: c,
        rtp: { inbound: m, outbound: h },
        camera: b,
    } = t;
    if (
        (l.push({ section: p.Fq.HEADER, label: N.intl.formatToPlainString(N.t.PK5fOC, { context: e }) }),
        null != c &&
            l.push({
                section: (0, v.Xi)(e, B.zWA.TRANSPORT, r),
                label: N.intl.string(N.t.wU9IN2),
                element: I.A,
                elementProps: { context: e, index: r },
            }),
        null == h ||
            o().isEmpty(h) ||
            l.push({
                section: (0, v.Xi)(e, B.zWA.OUTBOUND, r),
                label: N.intl.string(N.t["3u0gII"]),
                element: _.A,
                elementProps: { context: e, index: r },
            }),
        null != b &&
            l.push({
                section: (0, v.Xi)(e, B.zWA.CAMERA, r),
                label: N.intl.string(N.t["2AGBWH"]),
                element: E.A,
                elementProps: { context: e, index: r, camera: b },
            }),
        null != m && !o().isEmpty(m))
    ) {
        let t = [];
        Object.keys(m).forEach((o) => {
            let l,
                c = x.default.getUser(o),
                p = A.Ay.getNick(a, o),
                h = (0, v.Xi)(e, o, r);
            null != m[o] &&
                m[o].length > 0 &&
                t.push({
                    section: h,
                    label:
                        null != c
                            ? (0, n.jsx)(y.A, {
                                  align: y.A.Align.CENTER,
                                  children: (0, n.jsx)(y.A.Child, {
                                      children: (0, n.jsxs)(y.A, {
                                          align: y.A.Align.CENTER,
                                          children: [
                                              (0, n.jsx)(s.eu, {
                                                  size: d._3.SIZE_24,
                                                  src: c.getAvatarURL(a, 24),
                                                  "aria-label": c.username,
                                                  className: P.my,
                                              }),
                                              (0, n.jsx)("span", { className: P.Xh, children: p ?? D.Ay.getName(c) }),
                                          ],
                                      }),
                                  }),
                              })
                            : ((l = p ?? o),
                              (0, n.jsx)(y.A, {
                                  align: y.A.Align.CENTER,
                                  children: (0, n.jsx)(y.A.Child, {
                                      children: (0, n.jsx)(y.A, {
                                          align: y.A.Align.CENTER,
                                          children: (0, n.jsx)("span", { className: P.Xh, children: l }),
                                      }),
                                  }),
                              })),
                    ariaLabel: null != c ? c.tag : o,
                    onClick: () => {
                        u.c4(h);
                    },
                    element: R.A,
                    elementProps: { context: e, index: r, videoStreams: i },
                });
        }),
            t.length > 0 && (l.push({ section: p.Fq.HEADER, label: N.intl.string(N.t.SJmZaq) }), l.push(...t));
    }
    return l;
}
function T() {
    let { defaultStats: e, streamStats: t } = (0, l.bG)(
            [v.Ay],
            () => ({ defaultStats: v.Ay.getAllStats(k.x.DEFAULT), streamStats: v.Ay.getAllStats(k.x.STREAM) }),
            [],
            l.My,
        ),
        r = (0, l.bG)([C.A, f.A], () => f.A.getChannel(C.A.getChannelId())),
        a = e.concat(t).find((e) => null != e.screenshare)?.screenshare,
        o = t.find((e) => null != e.clips)?.clips,
        s = (0, l.bG)([g.A], () => g.A.theme),
        d = (0, b.NC)(),
        y = (0, l.bG)([v.Ay], () => v.Ay.getSection()),
        A = (function (e) {
            let {
                    defaultStats: t,
                    streamStats: r,
                    videoStreams: i,
                    screenshare: a,
                    clips: o,
                    channel: l,
                    connectionState: s,
                } = e,
                d = t.flatMap((e, t) => w(k.x.DEFAULT, e, t, i, l?.getGuildId())),
                u = r.flatMap((e, t) => w(k.x.STREAM, e, t, i, l?.getGuildId())),
                m = [],
                y = [],
                b = { section: p.Fq.DIVIDER };
            return (
                null != a &&
                    (m.push(b),
                    m.push({
                        section: B.zWA.SCREENSHARE,
                        label: N.intl.string(N.t["gWbr/U"]),
                        element: j.A,
                        elementProps: { screenshare: a },
                    })),
                null != o &&
                    (y.push(b),
                    y.push({
                        section: B.zWA.CLIPS,
                        label: N.intl.string(N.t.MKrFKE),
                        element: S.A,
                        elementProps: { clips: o },
                    })),
                u.length > 0 && u.unshift(b),
                [
                    ...(null != l
                        ? [
                              {
                                  section: p.Fq.CUSTOM,
                                  label: "Channel Name",
                                  element: () =>
                                      (0, n.jsx)(c.D, {
                                          className: P.HA,
                                          variant: "heading-lg/semibold",
                                          children: (0, h.m1)(l, x.default, F.A),
                                      }),
                              },
                          ]
                        : []),
                    {
                        section: p.Fq.CUSTOM,
                        label: "Connection State",
                        element: () =>
                            (0, n.jsx)(c.D, {
                                className: P.HA,
                                variant: "heading-md/normal",
                                children: s === B.S7L.RTC_CONNECTED ? "Connected" : "Disconnected",
                            }),
                    },
                    ...d,
                    ...u,
                    ...m,
                    ...y,
                ]
            );
        })({
            defaultStats: e,
            streamStats: t,
            videoStreams: (0, l.bG)([v.Ay], () => v.Ay.getVideoStreams()),
            screenshare: a,
            clips: o,
            channel: r,
            connectionState: (0, l.bG)([C.A], () => C.A.getState()),
        });
    return (
        i.useEffect(
            () => () => {
                u.VN();
            },
            [],
        ),
        i.useEffect(() => {
            A.some((e) => e.section === y) || y === v.EM || u.c4(v.EM);
        }, [A, y]),
        (0, n.jsx)(m.Ay, { theme: s, sidebarTheme: d, section: y, onSetSection: u.c4, sections: A })
    );
}
