n.d(t, { A: () => N }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(265872),
    r = n(534514),
    o = n(834730),
    d = n(821609),
    c = n(339350),
    u = n(475743),
    h = n(624458),
    A = n(408213),
    _ = n(212455),
    m = n(967198),
    g = n(636449),
    p = n(263715),
    f = n(928568),
    E = n(842452),
    x = n(357064),
    I = n(985018),
    C = n(785439);
function b(e) {
    let { onActivate: t, children: n } = e,
        c = l.useRef(null),
        h = (0, s.bG)([_.A], () => _.A.hasJoinRequestCoackmark()),
        m = l.useCallback(() => {
            A.Ay.clearCoachmark();
        }, []),
        g = (0, u.A)(h),
        p = l.useRef(null);
    return (
        l.useEffect(() => {
            h && h !== g && (t(), p.current?.ref?.current?.layerRef?.current?.updatePosition());
        }, [p, h, g, t]),
        (0, i.jsxs)("div", {
            className: C.kL,
            children: [
                (0, i.jsx)(a.Y, {
                    ref: p,
                    targetElementRef: c,
                    shouldShow: h,
                    renderPopout: () =>
                        (0, i.jsxs)("div", {
                            className: C.jC,
                            children: [
                                (0, i.jsxs)("div", {
                                    className: C.Bm,
                                    children: [
                                        (0, i.jsxs)("div", {
                                            className: C.q3,
                                            children: [
                                                (0, i.jsx)(r.D, {
                                                    variant: "heading-md/medium",
                                                    children: I.intl.string(I.t["0YV0YE"]),
                                                }),
                                                (0, i.jsx)(o.E, {
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    children: I.intl.string(I.t["0UQVDL"]),
                                                }),
                                            ],
                                        }),
                                        (0, i.jsx)(d.$, {
                                            variant: "primary",
                                            size: "sm",
                                            text: I.intl.string(I.t["4r+amb"]),
                                            fullWidth: !0,
                                            onClick: m,
                                        }),
                                    ],
                                }),
                                (0, i.jsx)("div", { className: C.ed }),
                            ],
                        }),
                    position: "right",
                    animationPosition: "right",
                    align: "top",
                    spacing: 16,
                    children: (e) => (0, i.jsx)("div", { ...e, className: C.Ne, ref: c }),
                }),
                n,
            ],
        })
    );
}
function N(e) {
    let { onActivate: t } = e,
        [n, a] = l.useState(!1),
        r = (0, s.bG)([m.A], () => m.A.getGuildId()),
        o = (0, s.bG)([_.A], () => _.A.hasFetchedRequestToJoinGuilds),
        d = (0, f.A)(),
        N = (0, u.A)(r),
        S = l.useMemo(() => {
            let e = (0, p.xW)({
                folderId: g.U.PENDING_JOIN_REQUESTS_FOLDER,
                folderName: I.intl.string(I.t["scsU+l"]),
                expanded: n,
                guildIds: [],
            });
            for (let t of d) e.children.push((0, p.EL)(t, e.id));
            return e;
        }, [d, n]);
    l.useEffect(() => {
        n && !o && h.A.fetchRequestToJoinGuilds();
    }, [n, o]);
    let v = null != r && d.includes(r);
    return (l.useEffect(() => {
        !n && v && N !== r && a(!0);
    }, [n, v, N, r]),
    0 === d.length)
        ? null
        : (0, i.jsx)(b, {
              onActivate: t,
              children: (0, i.jsx)(E.A, {
                  folderNode: S,
                  expanded: n,
                  selected: v,
                  draggable: !1,
                  sorting: !1,
                  onExpandCollapse: () => {
                      a(!n), A.Ay.clearCoachmark();
                  },
                  folderButtonSize: "icon",
                  folderButtonContent: (0, i.jsx)("div", {
                      className: C.rH,
                      children: (0, i.jsx)(c.Q, { size: "sm", color: "currentColor" }),
                  }),
                  renderChildNode: function (e, t, n) {
                      return e.type !== p.PJ.GUILD
                          ? null
                          : (0, i.jsx)(x.A, { guildNode: e, "aria-setsize": n, "aria-posinset": t }, e.id);
                  },
              }),
          });
}
