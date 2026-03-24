r.d(t, { A: () => k }), r(321073), r(667532);
var n = r(627968),
    a = r(64700),
    i = r(735438),
    s = r.n(i),
    l = r(311907),
    o = r(397927),
    d = r(233545),
    u = r(83257),
    c = r(361739),
    m = r(235986),
    p = r(97469),
    h = r(544028),
    y = r(734057),
    f = r(696451),
    A = r(383501),
    g = r(412780),
    v = r(287809),
    F = r(427262),
    C = r(817006),
    b = r(121614),
    x = r(663272),
    E = r(820931),
    D = r(307414),
    R = r(244920),
    S = r(652215),
    j = r(731854),
    N = r(985018),
    I = r(518959);
function P(e, t, r, a, i) {
    let l = [];
    if (null == t) return l;
    let {
        transport: u,
        rtp: { inbound: p, outbound: h },
        camera: y,
    } = t;
    if (
        (l.push({ section: c.Fq.HEADER, label: N.intl.formatToPlainString(N.t.PK5fOC, { context: e }) }),
        null != u &&
            l.push({
                section: (0, g.Xi)(e, S.zWA.TRANSPORT, r),
                label: N.intl.string(N.t.wU9IN2),
                element: R.A,
                elementProps: { context: e, index: r },
            }),
        null == h ||
            s().isEmpty(h) ||
            l.push({
                section: (0, g.Xi)(e, S.zWA.OUTBOUND, r),
                label: N.intl.string(N.t["3u0gII"]),
                element: E.A,
                elementProps: { context: e, index: r },
            }),
        null != y &&
            l.push({
                section: (0, g.Xi)(e, S.zWA.CAMERA, r),
                label: N.intl.string(N.t["2AGBWH"]),
                element: C.A,
                elementProps: { context: e, index: r, camera: y },
            }),
        null != p && !s().isEmpty(p))
    ) {
        let t = [];
        Object.keys(p).forEach((s) => {
            let l,
                u = v.default.getUser(s),
                c = f.Ay.getNick(i, s),
                h = (0, g.Xi)(e, s, r);
            null != p[s] &&
                p[s].length > 0 &&
                t.push({
                    section: h,
                    label:
                        null != u
                            ? (0, n.jsx)(m.A, {
                                  align: m.A.Align.CENTER,
                                  children: (0, n.jsx)(m.A.Child, {
                                      children: (0, n.jsxs)(m.A, {
                                          align: m.A.Align.CENTER,
                                          children: [
                                              (0, n.jsx)(o.euF, {
                                                  size: o._3J.SIZE_24,
                                                  src: u.getAvatarURL(i, 24),
                                                  "aria-label": u.username,
                                                  className: I.my,
                                              }),
                                              (0, n.jsx)("span", { className: I.Xh, children: c ?? F.Ay.getName(u) }),
                                          ],
                                      }),
                                  }),
                              })
                            : ((l = c ?? s),
                              (0, n.jsx)(m.A, {
                                  align: m.A.Align.CENTER,
                                  children: (0, n.jsx)(m.A.Child, {
                                      children: (0, n.jsx)(m.A, {
                                          align: m.A.Align.CENTER,
                                          children: (0, n.jsx)("span", { className: I.Xh, children: l }),
                                      }),
                                  }),
                              })),
                    ariaLabel: null != u ? u.tag : s,
                    onClick: () => {
                        d.c4(h);
                    },
                    element: x.A,
                    elementProps: { context: e, index: r, videoStreams: a },
                });
        }),
            t.length > 0 && (l.push({ section: c.Fq.HEADER, label: N.intl.string(N.t.SJmZaq) }), l.push(...t));
    }
    return l;
}
function k() {
    let { defaultStats: e, streamStats: t } = (0, l.bG)(
            [g.Ay],
            () => ({ defaultStats: g.Ay.getAllStats(j.x.DEFAULT), streamStats: g.Ay.getAllStats(j.x.STREAM) }),
            [],
            l.My,
        ),
        r = (0, l.bG)([A.A, y.A], () => y.A.getChannel(A.A.getChannelId())),
        i = e.concat(t).find((e) => null != e.screenshare)?.screenshare,
        s = t.find((e) => null != e.clips)?.clips,
        m = (0, l.bG)([h.A], () => h.A.theme),
        f = (0, p.NC)(),
        v = (0, l.bG)([g.Ay], () => g.Ay.getSection()),
        F = (function (e) {
            let {
                    defaultStats: t,
                    streamStats: r,
                    videoStreams: a,
                    screenshare: i,
                    clips: s,
                    channel: l,
                    connectionState: d,
                } = e,
                u = t.flatMap((e, t) => P(j.x.DEFAULT, e, t, a, l?.getGuildId())),
                m = r.flatMap((e, t) => P(j.x.STREAM, e, t, a, l?.getGuildId())),
                p = [],
                h = [],
                y = { section: c.Fq.DIVIDER };
            return (
                null != i &&
                    (p.push(y),
                    p.push({
                        section: S.zWA.SCREENSHARE,
                        label: N.intl.string(N.t["gWbr/U"]),
                        element: D.A,
                        elementProps: { screenshare: i },
                    })),
                null != s &&
                    (h.push(y),
                    h.push({
                        section: S.zWA.CLIPS,
                        label: N.intl.string(N.t.MKrFKE),
                        element: b.A,
                        elementProps: { clips: s },
                    })),
                m.length > 0 && m.unshift(y),
                [
                    ...(null != l
                        ? [
                              {
                                  section: c.Fq.CUSTOM,
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
                        section: c.Fq.CUSTOM,
                        label: "Connection State",
                        element: () =>
                            (0, n.jsx)(o.Heading, {
                                className: I.HA,
                                variant: "heading-md/normal",
                                children: d === S.S7L.RTC_CONNECTED ? "Connected" : "Disconnected",
                            }),
                    },
                    ...u,
                    ...m,
                    ...p,
                    ...h,
                ]
            );
        })({
            defaultStats: e,
            streamStats: t,
            videoStreams: (0, l.bG)([g.Ay], () => g.Ay.getVideoStreams()),
            screenshare: i,
            clips: s,
            channel: r,
            connectionState: (0, l.bG)([A.A], () => A.A.getState()),
        });
    return (
        a.useEffect(
            () => () => {
                d.VN();
            },
            [],
        ),
        a.useEffect(() => {
            F.some((e) => e.section === v) || v === g.EM || d.c4(g.EM);
        }, [F, v]),
        (0, n.jsx)(u.Ay, { theme: m, sidebarTheme: f, section: v, onSetSection: d.c4, sections: F })
    );
}
