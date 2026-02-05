r.d(t, { A: () => B }), r(321073), r(667532);
var n = r(627968),
    a = r(64700),
    i = r(735438),
    s = r.n(i),
    l = r(311907),
    o = r(397927),
    d = r(233545),
    c = r(83257),
    u = r(361739),
    m = r(235986),
    p = r(97469),
    y = r(544028),
    h = r(734057),
    A = r(696451),
    g = r(383501),
    f = r(412780),
    v = r(287809),
    C = r(427262),
    x = r(817006),
    E = r(121614),
    D = r(663272),
    b = r(820931),
    R = r(307414),
    F = r(244920),
    S = r(652215),
    j = r(731854),
    N = r(985018),
    I = r(518959);
function P(e, t, r, a, i) {
    let l = [];
    if (null == t) return l;
    let {
        transport: c,
        rtp: { inbound: p, outbound: y },
        camera: h,
    } = t;
    if (
        (l.push({ section: u.Fq.HEADER, label: N.intl.formatToPlainString(N.t.PK5fOC, { context: e }) }),
        null != c &&
            l.push({
                section: (0, f.Xi)(e, S.zWA.TRANSPORT, r),
                label: N.intl.string(N.t.wU9IN2),
                element: F.A,
                elementProps: { context: e, index: r },
            }),
        null == y ||
            s().isEmpty(y) ||
            l.push({
                section: (0, f.Xi)(e, S.zWA.OUTBOUND, r),
                label: N.intl.string(N.t["3u0gII"]),
                element: b.A,
                elementProps: { context: e, index: r },
            }),
        null != h &&
            l.push({
                section: (0, f.Xi)(e, S.zWA.CAMERA, r),
                label: N.intl.string(N.t["2AGBWH"]),
                element: x.A,
                elementProps: { context: e, index: r, camera: h },
            }),
        null != p && !s().isEmpty(p))
    ) {
        let t = [];
        Object.keys(p).forEach((s) => {
            let l,
                c = v.default.getUser(s),
                u = A.Ay.getNick(i, s),
                y = (0, f.Xi)(e, s, r);
            null != p[s] &&
                p[s].length > 0 &&
                t.push({
                    section: y,
                    label:
                        null != c
                            ? (0, n.jsx)(m.A, {
                                  align: m.A.Align.CENTER,
                                  children: (0, n.jsx)(m.A.Child, {
                                      children: (0, n.jsxs)(m.A, {
                                          align: m.A.Align.CENTER,
                                          children: [
                                              (0, n.jsx)(o.euF, {
                                                  size: o._3J.SIZE_24,
                                                  src: c.getAvatarURL(i, 24),
                                                  "aria-label": c.username,
                                                  className: I.my,
                                              }),
                                              (0, n.jsx)("span", { className: I.Xh, children: u ?? C.Ay.getName(c) }),
                                          ],
                                      }),
                                  }),
                              })
                            : ((l = u ?? s),
                              (0, n.jsx)(m.A, {
                                  align: m.A.Align.CENTER,
                                  children: (0, n.jsx)(m.A.Child, {
                                      children: (0, n.jsx)(m.A, {
                                          align: m.A.Align.CENTER,
                                          children: (0, n.jsx)("span", { className: I.Xh, children: l }),
                                      }),
                                  }),
                              })),
                    ariaLabel: null != c ? c.tag : s,
                    onClick: () => {
                        d.c4(y);
                    },
                    element: D.A,
                    elementProps: { context: e, index: r, videoStreams: a },
                });
        }),
            t.length > 0 && (l.push({ section: u.Fq.HEADER, label: N.intl.string(N.t.SJmZaq) }), l.push(...t));
    }
    return l;
}
function B() {
    let { defaultStats: e, streamStats: t } = (0, l.bG)(
            [f.Ay],
            () => ({ defaultStats: f.Ay.getAllStats(j.x.DEFAULT), streamStats: f.Ay.getAllStats(j.x.STREAM) }),
            [],
            l.My,
        ),
        r = (0, l.bG)([g.A, h.A], () => h.A.getChannel(g.A.getChannelId())),
        i = e.concat(t).find((e) => null != e.screenshare)?.screenshare,
        s = t.find((e) => null != e.clips)?.clips,
        m = (0, l.bG)([y.A], () => y.A.theme),
        A = (0, p.NC)(),
        v = (0, l.bG)([f.Ay], () => f.Ay.getSection()),
        C = (function (e) {
            let {
                    defaultStats: t,
                    streamStats: r,
                    videoStreams: a,
                    screenshare: i,
                    clips: s,
                    channel: l,
                    connectionState: d,
                } = e,
                c = t.flatMap((e, t) => P(j.x.DEFAULT, e, t, a, l?.getGuildId())),
                m = r.flatMap((e, t) => P(j.x.STREAM, e, t, a, l?.getGuildId())),
                p = [],
                y = [],
                h = { section: u.Fq.DIVIDER };
            return (
                null != i &&
                    (p.push(h),
                    p.push({
                        section: S.zWA.SCREENSHARE,
                        label: N.intl.string(N.t["gWbr/U"]),
                        element: R.A,
                        elementProps: { screenshare: i },
                    })),
                null != s &&
                    (y.push(h),
                    y.push({
                        section: S.zWA.CLIPS,
                        label: N.intl.string(N.t.MKrFKE),
                        element: E.A,
                        elementProps: { clips: s },
                    })),
                m.length > 0 && m.unshift(h),
                [
                    ...(null != l
                        ? [
                              {
                                  section: u.Fq.CUSTOM,
                                  label: "Channel Name",
                                  element: () =>
                                      (0, n.jsx)(o.Heading, {
                                          className: I.HA,
                                          variant: "heading-lg/semibold",
                                          children: l.name,
                                      }),
                              },
                          ]
                        : []),
                    {
                        section: u.Fq.CUSTOM,
                        label: "Connection State",
                        element: () =>
                            (0, n.jsx)(o.Heading, {
                                className: I.HA,
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
            defaultStats: e,
            streamStats: t,
            videoStreams: (0, l.bG)([f.Ay], () => f.Ay.getVideoStreams()),
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
        (0, n.jsx)(c.Ay, { theme: m, sidebarTheme: A, section: v, onSetSection: d.c4, sections: C })
    );
}
