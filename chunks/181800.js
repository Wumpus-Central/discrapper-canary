"use strict";
n.d(t, { A: () => C }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(397927),
    a = n(475743),
    o = n(624458),
    c = n(408213),
    d = n(212455),
    u = n(967198),
    h = n(636449),
    A = n(263715),
    p = n(928568),
    g = n(842452),
    m = n(357064),
    _ = n(985018),
    f = n(971090);
function x(e) {
    let { onActivate: t, children: n } = e,
        o = s.useRef(null),
        u = (0, l.bG)([d.A], () => d.A.hasJoinRequestCoackmark()),
        h = s.useCallback(() => {
            c.Ay.clearCoachmark();
        }, []),
        A = (0, a.A)(u),
        p = s.useRef(null);
    return (
        s.useEffect(() => {
            u && u !== A && (t(), p.current?.ref?.current?.layerRef?.current?.updatePosition());
        }, [p, u, A, t]),
        (0, i.jsxs)("div", {
            className: f.kL,
            children: [
                (0, i.jsx)(r.YNO, {
                    ref: p,
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
                                                (0, i.jsx)(r.Heading, {
                                                    variant: "heading-md/medium",
                                                    children: _.intl.string(_.t["0YV0YE"]),
                                                }),
                                                (0, i.jsx)(r.Text, {
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    children: _.intl.string(_.t["0UQVDL"]),
                                                }),
                                            ],
                                        }),
                                        (0, i.jsx)(r.Button, {
                                            variant: "primary",
                                            size: "sm",
                                            text: _.intl.string(_.t["4r+amb"]),
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
function C(e) {
    let { onActivate: t } = e,
        [n, C] = s.useState(!1),
        E = (0, l.bG)([u.A], () => u.A.getGuildId()),
        I = (0, l.bG)([d.A], () => d.A.hasFetchedRequestToJoinGuilds),
        b = (0, p.A)(),
        N = (0, a.A)(E),
        S = s.useMemo(() => {
            let e = (0, A.xW)({
                folderId: h.U.PENDING_JOIN_REQUESTS_FOLDER,
                folderName: _.intl.string(_.t["scsU+l"]),
                expanded: n,
                guildIds: [],
            });
            for (let t of b) e.children.push((0, A.EL)(t, e.id));
            return e;
        }, [b, n]);
    s.useEffect(() => {
        n && !I && o.A.fetchRequestToJoinGuilds();
    }, [n, I]);
    let T = null != E && b.includes(E);
    return (s.useEffect(() => {
        !n && T && N !== E && C(!0);
    }, [n, T, N, E]),
    0 === b.length)
        ? null
        : (0, i.jsx)(x, {
              onActivate: t,
              children: (0, i.jsx)(g.A, {
                  folderNode: S,
                  expanded: n,
                  selected: T,
                  draggable: !1,
                  sorting: !1,
                  onExpandCollapse: () => {
                      C(!n), c.Ay.clearCoachmark();
                  },
                  folderButtonSize: "icon",
                  folderButtonContent: (0, i.jsx)("div", {
                      className: f.rH,
                      children: (0, i.jsx)(r.Qfk, { size: "sm", color: "currentColor" }),
                  }),
                  renderChildNode: function (e, t, n) {
                      return e.type !== A.PJ.GUILD
                          ? null
                          : (0, i.jsx)(m.A, { guildNode: e, "aria-setsize": n, "aria-posinset": t }, e.id);
                  },
              }),
          });
}
