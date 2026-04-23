l.d(t, { m: () => _ });
var a = l(627968),
    n = l(64700),
    r = l(311907),
    i = l(27192),
    o = l(231723),
    s = l(359778),
    d = l(834730),
    c = l(404778),
    u = l(939249),
    p = l(97808),
    m = l(778712),
    b = l(67281),
    h = l(664111),
    x = l(994500),
    y = l(287809),
    v = l(403362),
    g = l(784018),
    f = l(94269);
let _ = {
    title: "Clips",
    stories: [
        {
            name: "Clip Embed Overlay",
            id: "clip-embed-overlay",
            component: function (e) {
                let { videoUrl: t, orientation: l, title: g, autoplay: _ } = e,
                    E = (0, r.yK)([x.A, y.default], () =>
                        x.A.getFriendIDs()
                            .map((e) => y.default.getUser(e))
                            .filter(v.Vq),
                    ),
                    [C, S] = n.useState(new Set()),
                    j = n.useCallback((e, t) => {
                        S((l) => {
                            let a = new Set(l);
                            return t ? a.add(e) : a.delete(e), a;
                        });
                    }, []),
                    T = n.useMemo(() => Array.from(C), [C]),
                    P = n.useCallback(() => (0, a.jsx)(b.A, { title: g, participantIds: T }), [g, T]),
                    I = "landscape" === l ? 640 : 360;
                return (0, a.jsxs)("div", {
                    className: f.iE,
                    children: [
                        (0, a.jsx)("div", {
                            className: f.j,
                            style: { width: I, height: "landscape" === l ? 360 : 640 },
                            children: (0, a.jsx)(h.default, {
                                src: t,
                                active: _,
                                autoplay: _,
                                orientation: l,
                                renderOverlay: P,
                                parentTransitionState: o.ip.ENTERED,
                            }),
                        }),
                        (0, a.jsxs)(s.Z, {
                            className: f.nd,
                            type: s.s.PRIMARY,
                            style: { width: I },
                            children: [
                                (0, a.jsxs)("div", {
                                    className: f.Iv,
                                    children: [
                                        (0, a.jsx)(d.E, {
                                            variant: "text-sm/semibold",
                                            color: "text-default",
                                            children: "Participants",
                                        }),
                                        (0, a.jsxs)(d.E, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: [C.size, " selected"],
                                        }),
                                    ],
                                }),
                                (0, a.jsx)(c.c, {}),
                                0 === E.length
                                    ? (0, a.jsx)("div", {
                                          className: f.p$,
                                          children: (0, a.jsx)(d.E, {
                                              variant: "text-sm/normal",
                                              color: "text-muted",
                                              children: "No friends found in local store.",
                                          }),
                                      })
                                    : (0, a.jsx)("div", {
                                          className: f.p_,
                                          onScroll: (e) => e.stopPropagation(),
                                          children: E.map((e) => {
                                              let t = C.has(e.id);
                                              return (0, a.jsxs)(
                                                  u.D,
                                                  {
                                                      className: f.nM,
                                                      role: "checkbox",
                                                      "aria-checked": t,
                                                      onClick: () => j(e.id, !t),
                                                      children: [
                                                          (0, a.jsx)(i.Lc, { value: t, size: 16 }),
                                                          (0, a.jsx)(p.eu, {
                                                              src: e.getAvatarURL(void 0, 24),
                                                              size: m._3.SIZE_24,
                                                              "aria-hidden": !0,
                                                          }),
                                                          (0, a.jsx)(d.E, {
                                                              variant: "text-sm/normal",
                                                              color: "interactive-text-default",
                                                              children: e.username,
                                                          }),
                                                      ],
                                                  },
                                                  e.id,
                                              );
                                          }),
                                      }),
                            ],
                        }),
                    ],
                });
            },
            controls: {
                videoUrl: { label: "Video URL", type: "text", defaultValue: g.kz },
                orientation: {
                    label: "Orientation",
                    type: "select",
                    options: [
                        { label: "Landscape", value: "landscape" },
                        { label: "Portrait", value: "portrait" },
                    ],
                    defaultValue: "landscape",
                },
                title: { label: "Title", type: "text", defaultValue: "Epic Gaming Moment" },
                autoplay: { label: "Autoplay", type: "boolean", defaultValue: !1 },
            },
        },
    ],
};
