r.d(t, { Z: () => k }), r(539854), r(388685), r(361932), r(187205), r(290780);
var n = r(951288),
    a = r(647438),
    i = r(392711),
    l = r.n(i),
    o = r(442837),
    s = r(481060),
    c = r(304680),
    d = r(503089),
    u = r(493544),
    m = r(600164),
    p = r(984802),
    h = r(210887),
    f = r(592125),
    y = r(271383),
    g = r(19780),
    v = r(226961),
    D = r(594174),
    b = r(51144),
    C = r(189648),
    E = r(775194),
    P = r(499848),
    j = r(724392),
    R = r(442580),
    Z = r(770800),
    N = r(981631),
    x = r(65154),
    F = r(388032),
    S = r(966117);
function I(e, t, r, a, i) {
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
            label: F.intl.formatToPlainString(F.t.PK5fOD, { context: e }),
        }),
        null != d &&
            o.push({
                section: (0, v.J$)(e, N._s_.TRANSPORT, r),
                label: F.intl.string(F.t.wU9INz),
                element: Z.Z,
                elementProps: {
                    context: e,
                    index: r,
                },
            }),
        null == h ||
            l().isEmpty(h) ||
            o.push({
                section: (0, v.J$)(e, N._s_.OUTBOUND, r),
                label: F.intl.string(F.t["3u0gIC"]),
                element: j.Z,
                elementProps: {
                    context: e,
                    index: r,
                },
            }),
        null != f &&
            o.push({
                section: (0, v.J$)(e, N._s_.CAMERA, r),
                label: F.intl.string(F.t["2AGBWF"]),
                element: C.Z,
                elementProps: {
                    context: e,
                    index: r,
                    camera: f,
                },
            }),
        null != p && !l().isEmpty(p))
    ) {
        let t = [];
        Object.keys(p).forEach((l) => {
            let o,
                d = D.default.getUser(l),
                u = y.ZP.getNick(i, l),
                h = (0, v.J$)(e, l, r);
            null != p[l] &&
                p[l].length > 0 &&
                t.push({
                    section: h,
                    label:
                        null != d
                            ? (0, n.jsx)(m.Z, {
                                  align: m.Z.Align.CENTER,
                                  children: (0, n.jsx)(m.Z.Child, {
                                      children: (0, n.jsxs)(m.Z, {
                                          align: m.Z.Align.CENTER,
                                          children: [
                                              (0, n.jsx)(s.qEK, {
                                                  size: s.EFr.SIZE_24,
                                                  src: d.getAvatarURL(i, 24),
                                                  "aria-label": d.username,
                                                  className: S.avatar,
                                              }),
                                              (0, n.jsx)("span", {
                                                  className: S.username,
                                                  children: null != u ? u : b.ZP.getName(d),
                                              }),
                                          ],
                                      }),
                                  }),
                              })
                            : ((o = null != u ? u : l),
                              (0, n.jsx)(m.Z, {
                                  align: m.Z.Align.CENTER,
                                  children: (0, n.jsx)(m.Z.Child, {
                                      children: (0, n.jsx)(m.Z, {
                                          align: m.Z.Align.CENTER,
                                          children: (0, n.jsx)("span", {
                                              className: S.username,
                                              children: o,
                                          }),
                                      }),
                                  }),
                              })),
                    ariaLabel: null != d ? d.tag : l,
                    onClick: () => {
                        c.zc(h);
                    },
                    element: P.Z,
                    elementProps: {
                        context: e,
                        index: r,
                        videoStreams: a,
                    },
                });
        }),
            t.length > 0 &&
                (o.push({
                    section: u.ID.HEADER,
                    label: F.intl.string(F.t.SJmZam),
                }),
                o.push(...t));
    }
    return o;
}
function k() {
    var e, t;
    let { defaultStats: r, streamStats: i } = (0, o.e7)(
            [v.ZP],
            () => ({
                defaultStats: v.ZP.getAllStats(x.Yn.DEFAULT),
                streamStats: v.ZP.getAllStats(x.Yn.STREAM),
            }),
            [],
            o.pF,
        ),
        l = (0, o.e7)([g.Z, f.Z], () => f.Z.getChannel(g.Z.getChannelId())),
        m = null == (e = r.concat(i).find((e) => null != e.screenshare)) ? void 0 : e.screenshare,
        y = null == (t = i.find((e) => null != e.clips)) ? void 0 : t.clips,
        D = (0, o.e7)([h.Z], () => h.Z.theme),
        b = (0, p.Ll)(),
        C = (0, o.e7)([v.ZP], () => v.ZP.getSection()),
        P = (function (e) {
            let {
                    defaultStats: t,
                    streamStats: r,
                    videoStreams: a,
                    screenshare: i,
                    clips: l,
                    channel: o,
                    connectionState: c,
                } = e,
                d = t.flatMap((e, t) => I(x.Yn.DEFAULT, e, t, a, null == o ? void 0 : o.getGuildId())),
                m = r.flatMap((e, t) => I(x.Yn.STREAM, e, t, a, null == o ? void 0 : o.getGuildId())),
                p = [],
                h = [],
                f = { section: u.ID.DIVIDER };
            return (
                null != i &&
                    (p.push(f),
                    p.push({
                        section: N._s_.SCREENSHARE,
                        label: F.intl.string(F.t["gWbr/f"]),
                        element: R.Z,
                        elementProps: { screenshare: i },
                    })),
                null != l &&
                    (h.push(f),
                    h.push({
                        section: N._s_.CLIPS,
                        label: F.intl.string(F.t.MKrFKC),
                        element: E.Z,
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
                                      (0, n.jsx)(s.X6q, {
                                          className: S.channelName,
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
                            (0, n.jsx)(s.X6q, {
                                className: S.channelName,
                                variant: "heading-md/normal",
                                children: c === N.hes.RTC_CONNECTED ? "Connected" : "Disconnected",
                            }),
                    },
                    ...d,
                    ...m,
                    ...p,
                    ...h,
                ]
            );
        })({
            defaultStats: r,
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
        (0, n.jsx)(d.ZP, {
            theme: D,
            sidebarTheme: b,
            section: C,
            onSetSection: c.zc,
            sections: P,
        })
    );
}
