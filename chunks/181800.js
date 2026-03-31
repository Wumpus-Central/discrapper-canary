n.d(t, { A: () => E }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(397927),
    r = n(475743),
    o = n(624458),
    c = n(408213),
    d = n(212455),
    u = n(967198),
    h = n(636449),
    A = n(263715),
    _ = n(928568),
    m = n(842452),
    g = n(357064),
    p = n(985018),
    f = n(250607);
function x(e) {
    let { onActivate: t, children: n } = e,
        o = l.useRef(null),
        u = (0, s.bG)([d.A], () => d.A.hasJoinRequestCoackmark()),
        h = l.useCallback(() => {
            c.Ay.clearCoachmark();
        }, []),
        A = (0, r.A)(u),
        _ = l.useRef(null);
    return (
        l.useEffect(() => {
            u && u !== A && (t(), _.current?.ref?.current?.layerRef?.current?.updatePosition());
        }, [_, u, A, t]),
        (0, i.jsxs)("div", {
            className: f.kL,
            children: [
                (0, i.jsx)(a.YNO, {
                    ref: _,
                    targetElementRef: o,
                    shouldShow: u,
                    renderPopout: () =>
                        (0, i.jsxs)("div", {
                            className: f.jC,
                            children: [
                                (0, i.jsxs)("div", {
                                    className: f.Bm,
                                    children: [
                                        (0, i.jsxs)("div", {
                                            className: f.q3,
                                            children: [
                                                (0, i.jsx)(a.Heading, {
                                                    variant: "heading-md/medium",
                                                    children: p.intl.string(p.t["0YV0YE"]),
                                                }),
                                                (0, i.jsx)(a.Text, {
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    children: p.intl.string(p.t["0UQVDL"]),
                                                }),
                                            ],
                                        }),
                                        (0, i.jsx)(a.Button, {
                                            variant: "primary",
                                            size: "sm",
                                            text: p.intl.string(p.t["4r+amb"]),
                                            fullWidth: !0,
                                            onClick: h,
                                        }),
                                    ],
                                }),
                                (0, i.jsx)("div", { className: f.ed }),
                            ],
                        }),
                    position: "right",
                    animationPosition: "right",
                    align: "top",
                    spacing: 16,
                    children: (e) => (0, i.jsx)("div", { ...e, className: f.Ne, ref: o }),
                }),
                n,
            ],
        })
    );
}
function E(e) {
    let { onActivate: t } = e,
        [n, E] = l.useState(!1),
        I = (0, s.bG)([u.A], () => u.A.getGuildId()),
        C = (0, s.bG)([d.A], () => d.A.hasFetchedRequestToJoinGuilds),
        N = (0, _.A)(),
        T = (0, r.A)(I),
        S = l.useMemo(() => {
            let e = (0, A.xW)({
                folderId: h.U.PENDING_JOIN_REQUESTS_FOLDER,
                folderName: p.intl.string(p.t["scsU+l"]),
                expanded: n,
                guildIds: [],
            });
            for (let t of N) e.children.push((0, A.EL)(t, e.id));
            return e;
        }, [N, n]);
    l.useEffect(() => {
        n && !C && o.A.fetchRequestToJoinGuilds();
    }, [n, C]);
    let b = null != I && N.includes(I);
    return (l.useEffect(() => {
        !n && b && T !== I && E(!0);
    }, [n, b, T, I]),
    0 === N.length)
        ? null
        : (0, i.jsx)(x, {
              onActivate: t,
              children: (0, i.jsx)(m.A, {
                  folderNode: S,
                  expanded: n,
                  selected: b,
                  draggable: !1,
                  sorting: !1,
                  onExpandCollapse: () => {
                      E(!n), c.Ay.clearCoachmark();
                  },
                  folderButtonSize: "icon",
                  folderButtonContent: (0, i.jsx)("div", {
                      className: f.rH,
                      children: (0, i.jsx)(a.Qfk, { size: "sm", color: "currentColor" }),
                  }),
                  renderChildNode: function (e, t, n) {
                      return e.type !== A.PJ.GUILD
                          ? null
                          : (0, i.jsx)(g.A, { guildNode: e, "aria-setsize": n, "aria-posinset": t }, e.id);
                  },
              }),
          });
}
