l.d(t, { m: () => x });
var a = l(627968),
    n = l(64700),
    r = l(311907),
    i = l(421380),
    o = l(397927),
    s = l(67281),
    d = l(664111),
    c = l(994500),
    u = l(287809),
    p = l(403362),
    m = l(784018),
    h = l(190066);
let x = {
    title: "Clips",
    stories: [
        {
            name: "Clip Embed Overlay",
            id: "clip-embed-overlay",
            component: function (e) {
                let { videoUrl: t, orientation: l, title: m, autoplay: x } = e,
                    b = (0, r.yK)([c.A, u.default], () =>
                        c.A.getFriendIDs()
                            .map((e) => u.default.getUser(e))
                            .filter(p.Vq),
                    ),
                    [y, f] = n.useState(new Set()),
                    g = n.useCallback((e, t) => {
                        f((l) => {
                            let a = new Set(l);
                            return t ? a.add(e) : a.delete(e), a;
                        });
                    }, []),
                    v = n.useMemo(() => Array.from(y), [y]),
                    _ = n.useCallback(() => (0, a.jsx)(s.A, { title: m, participantIds: v }), [m, v]),
                    E = "landscape" === l ? 640 : 360;
                return (0, a.jsxs)("div", {
                    className: h.iE,
                    children: [
                        (0, a.jsx)("div", {
                            className: h.j,
                            style: { width: E, height: "landscape" === l ? 360 : 640 },
                            children: (0, a.jsx)(d.A, {
                                src: t,
                                active: x,
                                autoplay: x,
                                orientation: l,
                                renderOverlay: _,
                                parentTransitionState: o.ip4.ENTERED,
                                targetTimeSec: 1 / 0,
                                onOptimisticProgressUpdate: () => {},
                                performanceClockStartTime: 0,
                            }),
                        }),
                        (0, a.jsxs)(o.ZpM, {
                            className: h.nd,
                            type: o.sl2.PRIMARY,
                            style: { width: E },
                            children: [
                                (0, a.jsxs)("div", {
                                    className: h.Iv,
                                    children: [
                                        (0, a.jsx)(o.Text, {
                                            variant: "text-sm/semibold",
                                            color: "text-default",
                                            children: "Participants",
                                        }),
                                        (0, a.jsxs)(o.Text, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: [y.size, " selected"],
                                        }),
                                    ],
                                }),
                                (0, a.jsx)(o.cGx, {}),
                                0 === b.length
                                    ? (0, a.jsx)("div", {
                                          className: h.p$,
                                          children: (0, a.jsx)(o.Text, {
                                              variant: "text-sm/normal",
                                              color: "text-muted",
                                              children: "No friends found in local store.",
                                          }),
                                      })
                                    : (0, a.jsx)("div", {
                                          className: h.p_,
                                          onScroll: (e) => e.stopPropagation(),
                                          children: b.map((e) => {
                                              let t = y.has(e.id);
                                              return (0, a.jsxs)(
                                                  o.DUT,
                                                  {
                                                      className: h.nM,
                                                      role: "checkbox",
                                                      "aria-checked": t,
                                                      onClick: () => g(e.id, !t),
                                                      children: [
                                                          (0, a.jsx)(i.Lc, { value: t, size: 16 }),
                                                          (0, a.jsx)(o.euF, {
                                                              src: e.getAvatarURL(void 0, 24),
                                                              size: o._3J.SIZE_24,
                                                              "aria-hidden": !0,
                                                          }),
                                                          (0, a.jsx)(o.Text, {
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
                videoUrl: { label: "Video URL", type: "text", defaultValue: m.kz },
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
