n.d(t, { A: () => E }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(397927),
    r = n(475743),
    o = n(624458),
    d = n(408213),
    c = n(212455),
    u = n(967198),
    h = n(636449),
    A = n(263715),
    g = n(928568),
    m = n(842452),
    p = n(357064),
    _ = n(985018),
    x = n(971090);
function f(e) {
    let { onActivate: t, children: n } = e,
        o = l.useRef(null),
        u = (0, s.bG)([c.A], () => c.A.hasJoinRequestCoackmark()),
        h = l.useCallback(() => {
            d.Ay.clearCoachmark();
        }, []),
        A = (0, r.A)(u),
        g = l.useRef(null);
    return (
        l.useEffect(() => {
            u && u !== A && (t(), g.current?.ref?.current?.layerRef?.current?.updatePosition());
        }, [g, u, A, t]),
        (0, i.jsxs)("div", {
            className: x.kL,
            children: [
                (0, i.jsx)(a.YNO, {
                    ref: g,
                    targetElementRef: o,
                    shouldShow: u,
                    renderPopout: () =>
                        (0, i.jsxs)("div", {
                            className: x.jC,
                            children: [
                                (0, i.jsxs)("div", {
                                    className: x.Bm,
                                    children: [
                                        (0, i.jsxs)("div", {
                                            className: x.q3,
                                            children: [
                                                (0, i.jsx)(a.Heading, {
                                                    variant: "heading-md/medium",
                                                    children: _.intl.string(_.t["0YV0YE"]),
                                                }),
                                                (0, i.jsx)(a.Text, {
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    children: _.intl.string(_.t["0UQVDL"]),
                                                }),
                                            ],
                                        }),
                                        (0, i.jsx)(a.Button, {
                                            variant: "primary",
                                            size: "sm",
                                            text: _.intl.string(_.t["4r+amb"]),
                                            fullWidth: !0,
                                            onClick: h,
                                        }),
                                    ],
                                }),
                                (0, i.jsx)("div", { className: x.ed }),
                            ],
                        }),
                    position: "right",
                    animationPosition: "right",
                    align: "top",
                    spacing: 16,
                    children: (e) => (0, i.jsx)("div", { ...e, className: x.Ne, ref: o }),
                }),
                n,
            ],
        })
    );
}
function E(e) {
    let { onActivate: t } = e,
        [n, E] = l.useState(!1),
        C = (0, s.bG)([u.A], () => u.A.getGuildId()),
        I = (0, s.bG)([c.A], () => c.A.hasFetchedRequestToJoinGuilds),
        S = (0, g.A)(),
        b = (0, r.A)(C),
        N = l.useMemo(() => {
            let e = (0, A.xW)({
                folderId: h.U.PENDING_JOIN_REQUESTS_FOLDER,
                folderName: _.intl.string(_.t["scsU+l"]),
                expanded: n,
                guildIds: [],
            });
            for (let t of S) e.children.push((0, A.EL)(t, e.id));
            return e;
        }, [S, n]);
    l.useEffect(() => {
        n && !I && o.A.fetchRequestToJoinGuilds();
    }, [n, I]);
    let T = null != C && S.includes(C);
    return (l.useEffect(() => {
        !n && T && b !== C && E(!0);
    }, [n, T, b, C]),
    0 === S.length)
        ? null
        : (0, i.jsx)(f, {
              onActivate: t,
              children: (0, i.jsx)(m.A, {
                  folderNode: N,
                  expanded: n,
                  selected: T,
                  draggable: !1,
                  sorting: !1,
                  onExpandCollapse: () => {
                      E(!n), d.Ay.clearCoachmark();
                  },
                  folderButtonSize: "icon",
                  folderButtonContent: (0, i.jsx)("div", {
                      className: x.rH,
                      children: (0, i.jsx)(a.Qfk, { size: "sm", color: "currentColor" }),
                  }),
                  renderChildNode: function (e, t, n) {
                      return e.type !== A.PJ.GUILD
                          ? null
                          : (0, i.jsx)(p.A, { guildNode: e, "aria-setsize": n, "aria-posinset": t }, e.id);
                  },
              }),
          });
}
