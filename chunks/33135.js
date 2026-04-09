r.d(t, { A: () => w }), r(321073), r(667532);
var n = r(627968),
    a = r(64700),
    i = r(735438),
    s = r.n(i),
    l = r(311907),
    o = r(397927),
    d = r(233545),
    u = r(83257),
    c = r(361739),
    m = r(47167),
    p = r(235986),
    h = r(97469),
    y = r(544028),
    f = r(734057),
    A = r(696451),
    g = r(383501),
    F = r(412780),
    v = r(994500),
    C = r(287809),
    b = r(427262),
    E = r(817006),
    x = r(121614),
    D = r(663272),
    R = r(820931),
    S = r(307414),
    j = r(244920),
    N = r(652215),
    I = r(731854),
    P = r(985018),
    k = r(653297);
function B(e, t, r, a, i) {
    let l = [];
    if (null == t) return l;
    let {
        transport: u,
        rtp: { inbound: m, outbound: h },
        camera: y,
    } = t;
    if (
        (l.push({ section: c.Fq.HEADER, label: P.intl.formatToPlainString(P.t.PK5fOC, { context: e }) }),
        null != u &&
            l.push({
                section: (0, F.Xi)(e, N.zWA.TRANSPORT, r),
                label: P.intl.string(P.t.wU9IN2),
                element: j.A,
                elementProps: { context: e, index: r },
            }),
        null == h ||
            s().isEmpty(h) ||
            l.push({
                section: (0, F.Xi)(e, N.zWA.OUTBOUND, r),
                label: P.intl.string(P.t["3u0gII"]),
                element: R.A,
                elementProps: { context: e, index: r },
            }),
        null != y &&
            l.push({
                section: (0, F.Xi)(e, N.zWA.CAMERA, r),
                label: P.intl.string(P.t["2AGBWH"]),
                element: E.A,
                elementProps: { context: e, index: r, camera: y },
            }),
        null != m && !s().isEmpty(m))
    ) {
        let t = [];
        Object.keys(m).forEach((s) => {
            let l,
                u = C.default.getUser(s),
                c = A.Ay.getNick(i, s),
                h = (0, F.Xi)(e, s, r);
            null != m[s] &&
                m[s].length > 0 &&
                t.push({
                    section: h,
                    label:
                        null != u
                            ? (0, n.jsx)(p.A, {
                                  align: p.A.Align.CENTER,
                                  children: (0, n.jsx)(p.A.Child, {
                                      children: (0, n.jsxs)(p.A, {
                                          align: p.A.Align.CENTER,
                                          children: [
                                              (0, n.jsx)(o.euF, {
                                                  size: o._3J.SIZE_24,
                                                  src: u.getAvatarURL(i, 24),
                                                  "aria-label": u.username,
                                                  className: k.my,
                                              }),
                                              (0, n.jsx)("span", { className: k.Xh, children: c ?? b.Ay.getName(u) }),
                                          ],
                                      }),
                                  }),
                              })
                            : ((l = c ?? s),
                              (0, n.jsx)(p.A, {
                                  align: p.A.Align.CENTER,
                                  children: (0, n.jsx)(p.A.Child, {
                                      children: (0, n.jsx)(p.A, {
                                          align: p.A.Align.CENTER,
                                          children: (0, n.jsx)("span", { className: k.Xh, children: l }),
                                      }),
                                  }),
                              })),
                    ariaLabel: null != u ? u.tag : s,
                    onClick: () => {
                        d.c4(h);
                    },
                    element: D.A,
                    elementProps: { context: e, index: r, videoStreams: a },
                });
        }),
            t.length > 0 && (l.push({ section: c.Fq.HEADER, label: P.intl.string(P.t.SJmZaq) }), l.push(...t));
    }
    return l;
}
function w() {
    let { defaultStats: e, streamStats: t } = (0, l.bG)(
            [F.Ay],
            () => ({ defaultStats: F.Ay.getAllStats(I.x.DEFAULT), streamStats: F.Ay.getAllStats(I.x.STREAM) }),
            [],
            l.My,
        ),
        r = (0, l.bG)([g.A, f.A], () => f.A.getChannel(g.A.getChannelId())),
        i = e.concat(t).find((e) => null != e.screenshare)?.screenshare,
        s = t.find((e) => null != e.clips)?.clips,
        p = (0, l.bG)([y.A], () => y.A.theme),
        A = (0, h.NC)(),
        b = (0, l.bG)([F.Ay], () => F.Ay.getSection()),
        E = (function (e) {
            let {
                    defaultStats: t,
                    streamStats: r,
                    videoStreams: a,
                    screenshare: i,
                    clips: s,
                    channel: l,
                    connectionState: d,
                } = e,
                u = t.flatMap((e, t) => B(I.x.DEFAULT, e, t, a, l?.getGuildId())),
                p = r.flatMap((e, t) => B(I.x.STREAM, e, t, a, l?.getGuildId())),
                h = [],
                y = [],
                f = { section: c.Fq.DIVIDER };
            return (
                null != i &&
                    (h.push(f),
                    h.push({
                        section: N.zWA.SCREENSHARE,
                        label: P.intl.string(P.t["gWbr/U"]),
                        element: S.A,
                        elementProps: { screenshare: i },
                    })),
                null != s &&
                    (y.push(f),
                    y.push({
                        section: N.zWA.CLIPS,
                        label: P.intl.string(P.t.MKrFKE),
                        element: x.A,
                        elementProps: { clips: s },
                    })),
                p.length > 0 && p.unshift(f),
                [
                    ...(null != l
                        ? [
                              {
                                  section: c.Fq.CUSTOM,
                                  label: "Channel Name",
                                  element: () =>
                                      (0, n.jsx)(o.Heading, {
                                          className: k.HA,
                                          variant: "heading-lg/semibold",
                                          children: (0, m.m1)(l, C.default, v.A),
                                      }),
                              },
                          ]
                        : []),
                    {
                        section: c.Fq.CUSTOM,
                        label: "Connection State",
                        element: () =>
                            (0, n.jsx)(o.Heading, {
                                className: k.HA,
                                variant: "heading-md/normal",
                                children: d === N.S7L.RTC_CONNECTED ? "Connected" : "Disconnected",
                            }),
                    },
                    ...u,
                    ...p,
                    ...h,
                    ...y,
                ]
            );
        })({
            defaultStats: e,
            streamStats: t,
            videoStreams: (0, l.bG)([F.Ay], () => F.Ay.getVideoStreams()),
            screenshare: i,
            clips: s,
            channel: r,
            connectionState: (0, l.bG)([g.A], () => g.A.getState()),
        });
    return (
        a.useEffect(
            () => () => {
                d.VN();
            },
            [],
        ),
        a.useEffect(() => {
            E.some((e) => e.section === b) || b === F.EM || d.c4(F.EM);
        }, [E, b]),
        (0, n.jsx)(u.Ay, { theme: p, sidebarTheme: A, section: b, onSetSection: d.c4, sections: E })
    );
}
