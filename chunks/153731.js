n.d(t, { Z: () => k }), n(539854), n(388685), n(361932), n(187205), n(290780);
var r = n(54381),
    a = n(473749),
    i = n(392711),
    l = n.n(i),
    o = n(442837),
    s = n(481060),
    c = n(304680),
    d = n(503089),
    u = n(493544),
    m = n(600164),
    p = n(984802),
    h = n(210887),
    f = n(592125),
    y = n(271383),
    g = n(19780),
    v = n(226961),
    E = n(594174),
    b = n(51144),
    D = n(189648),
    P = n(775194),
    j = n(499848),
    x = n(724392),
    C = n(442580),
    Z = n(770800),
    R = n(981631),
    S = n(65154),
    F = n(388032),
    N = n(101713);
function I(e, t, n, a, i) {
    let o = [];
    if (null == t) return o;
    let {
        transport: d,
        rtp: { inbound: p, outbound: h },
        camera: f,
    } = t;
    if (
        (o.push({
            section: u.ID.HEADER,
            label: F.intl.formatToPlainString(F.t.PK5fOC, { context: e }),
        }),
        null != d &&
            o.push({
                section: (0, v.J$)(e, R._s_.TRANSPORT, n),
                label: F.intl.string(F.t.wU9IN2),
                element: Z.Z,
                elementProps: {
                    context: e,
                    index: n,
                },
            }),
        null == h ||
            l().isEmpty(h) ||
            o.push({
                section: (0, v.J$)(e, R._s_.OUTBOUND, n),
                label: F.intl.string(F.t["3u0gII"]),
                element: x.Z,
                elementProps: {
                    context: e,
                    index: n,
                },
            }),
        null != f &&
            o.push({
                section: (0, v.J$)(e, R._s_.CAMERA, n),
                label: F.intl.string(F.t["2AGBWH"]),
                element: D.Z,
                elementProps: {
                    context: e,
                    index: n,
                    camera: f,
                },
            }),
        null != p && !l().isEmpty(p))
    ) {
        let t = [];
        Object.keys(p).forEach((l) => {
            let o,
                d = E.default.getUser(l),
                u = y.ZP.getNick(i, l),
                h = (0, v.J$)(e, l, n);
            null != p[l] &&
                p[l].length > 0 &&
                t.push({
                    section: h,
                    label:
                        null != d
                            ? (0, r.jsx)(m.Z, {
                                  align: m.Z.Align.CENTER,
                                  children: (0, r.jsx)(m.Z.Child, {
                                      children: (0, r.jsxs)(m.Z, {
                                          align: m.Z.Align.CENTER,
                                          children: [
                                              (0, r.jsx)(s.qEK, {
                                                  size: s.EFr.SIZE_24,
                                                  src: d.getAvatarURL(i, 24),
                                                  "aria-label": d.username,
                                                  className: N.avatar,
                                              }),
                                              (0, r.jsx)("span", {
                                                  className: N.username,
                                                  children: null != u ? u : b.ZP.getName(d),
                                              }),
                                          ],
                                      }),
                                  }),
                              })
                            : ((o = null != u ? u : l),
                              (0, r.jsx)(m.Z, {
                                  align: m.Z.Align.CENTER,
                                  children: (0, r.jsx)(m.Z.Child, {
                                      children: (0, r.jsx)(m.Z, {
                                          align: m.Z.Align.CENTER,
                                          children: (0, r.jsx)("span", {
                                              className: N.username,
                                              children: o,
                                          }),
                                      }),
                                  }),
                              })),
                    ariaLabel: null != d ? d.tag : l,
                    onClick: () => {
                        c.zc(h);
                    },
                    element: j.Z,
                    elementProps: {
                        context: e,
                        index: n,
                        videoStreams: a,
                    },
                });
        }),
            t.length > 0 &&
                (o.push({
                    section: u.ID.HEADER,
                    label: F.intl.string(F.t.SJmZaq),
                }),
                o.push(...t));
    }
    return o;
}
function k() {
    var e, t;
    let { defaultStats: n, streamStats: i } = (0, o.e7)(
            [v.ZP],
            () => ({
                defaultStats: v.ZP.getAllStats(S.Yn.DEFAULT),
                streamStats: v.ZP.getAllStats(S.Yn.STREAM),
            }),
            [],
            o.pF,
        ),
        l = (0, o.e7)([g.Z, f.Z], () => f.Z.getChannel(g.Z.getChannelId())),
        m = null == (e = n.concat(i).find((e) => null != e.screenshare)) ? void 0 : e.screenshare,
        y = null == (t = i.find((e) => null != e.clips)) ? void 0 : t.clips,
        E = (0, o.e7)([h.Z], () => h.Z.theme),
        b = (0, p.Ll)(),
        D = (0, o.e7)([v.ZP], () => v.ZP.getSection()),
        j = (function (e) {
            let {
                    defaultStats: t,
                    streamStats: n,
                    videoStreams: a,
                    screenshare: i,
                    clips: l,
                    channel: o,
                    connectionState: c,
                } = e,
                d = t.flatMap((e, t) => I(S.Yn.DEFAULT, e, t, a, null == o ? void 0 : o.getGuildId())),
                m = n.flatMap((e, t) => I(S.Yn.STREAM, e, t, a, null == o ? void 0 : o.getGuildId())),
                p = [],
                h = [],
                f = { section: u.ID.DIVIDER };
            return (
                null != i &&
                    (p.push(f),
                    p.push({
                        section: R._s_.SCREENSHARE,
                        label: F.intl.string(F.t["gWbr/U"]),
                        element: C.Z,
                        elementProps: { screenshare: i },
                    })),
                null != l &&
                    (h.push(f),
                    h.push({
                        section: R._s_.CLIPS,
                        label: F.intl.string(F.t.MKrFKE),
                        element: P.Z,
                        elementProps: { clips: l },
                    })),
                m.length > 0 && m.unshift(f),
                [
                    ...(null != o
                        ? [
                              {
                                  section: u.ID.CUSTOM,
                                  label: "Channel Name",
                                  element: () =>
                                      (0, r.jsx)(s.Heading, {
                                          className: N.channelName,
                                          variant: "heading-lg/semibold",
                                          children: o.name,
                                      }),
                              },
                          ]
                        : []),
                    {
                        section: u.ID.CUSTOM,
                        label: "Connection State",
                        element: () =>
                            (0, r.jsx)(s.Heading, {
                                className: N.channelName,
                                variant: "heading-md/normal",
                                children: c === R.hes.RTC_CONNECTED ? "Connected" : "Disconnected",
                            }),
                    },
                    ...d,
                    ...m,
                    ...p,
                    ...h,
                ]
            );
        })({
            defaultStats: n,
            streamStats: i,
            videoStreams: (0, o.e7)([v.ZP], () => v.ZP.getVideoStreams()),
            screenshare: m,
            clips: y,
            channel: l,
            connectionState: (0, o.e7)([g.Z], () => g.Z.getState()),
        });
    return (
        a.useEffect(
            () => () => {
                c.xv();
            },
            [],
        ),
        (0, r.jsx)(d.ZP, {
            theme: E,
            sidebarTheme: b,
            section: D,
            onSetSection: c.zc,
            sections: j,
        })
    );
}
