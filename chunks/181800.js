n.d(t, { A: () => O }), n(896048), n(321073);
var r = n(627968),
    l = n(64700),
    i = n(311907),
    a = n(397927),
    s = n(475743),
    o = n(624458),
    c = n(408213),
    u = n(212455),
    d = n(967198),
    f = n(636449),
    p = n(263715),
    h = n(928568),
    b = n(842452),
    g = n(357064),
    m = n(985018),
    A = n(971090);
function y(e) {
    let { onActivate: t, children: n } = e,
        o = l.useRef(null),
        d = (0, i.bG)([u.A], () => u.A.hasJoinRequestCoackmark()),
        f = l.useCallback(() => {
            c.Ay.clearCoachmark();
        }, []),
        p = (0, s.A)(d),
        h = l.useRef(null);
    return (
        l.useEffect(() => {
            if (d && d !== p) {
                var e, n, r, l, i;
                t(),
                    null == (i = h.current) ||
                        null == (l = i.ref) ||
                        null == (r = l.current) ||
                        null == (n = r.layerRef) ||
                        null == (e = n.current) ||
                        e.updatePosition();
            }
        }, [h, d, p, t]),
        (0, r.jsxs)("div", {
            className: A.kL,
            children: [
                (0, r.jsx)(a.YNO, {
                    ref: h,
                    targetElementRef: o,
                    shouldShow: d,
                    renderPopout: () =>
                        (0, r.jsxs)("div", {
                            className: A.jC,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: A.Bm,
                                    children: [
                                        (0, r.jsxs)("div", {
                                            className: A.q3,
                                            children: [
                                                (0, r.jsx)(a.Heading, {
                                                    variant: "heading-md/medium",
                                                    children: m.intl.string(m.t["0YV0YE"]),
                                                }),
                                                (0, r.jsx)(a.Text, {
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    children: m.intl.string(m.t["0UQVDL"]),
                                                }),
                                            ],
                                        }),
                                        (0, r.jsx)(a.Button, {
                                            variant: "primary",
                                            size: "sm",
                                            text: m.intl.string(m.t["4r+amb"]),
                                            fullWidth: !0,
                                            onClick: f,
                                        }),
                                    ],
                                }),
                                (0, r.jsx)("div", { className: A.ed }),
                            ],
                        }),
                    position: "right",
                    animationPosition: "right",
                    align: "top",
                    spacing: 16,
                    children: (e) => {
                        var t, n;
                        return (0, r.jsx)(
                            "div",
                            ((t = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols &&
                                        (r = r.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            }),
                                        )),
                                        r.forEach(function (t) {
                                            var r;
                                            (r = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: r,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0,
                                                      })
                                                    : (e[t] = r);
                                        });
                                }
                                return e;
                            })({}, e)),
                            (n = n =
                                {
                                    className: A.Ne,
                                    ref: o,
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(n)).forEach(function (e) {
                                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                  }),
                            t),
                        );
                    },
                }),
                n,
            ],
        })
    );
}
function O(e) {
    let { onActivate: t } = e,
        [n, O] = l.useState(!1),
        j = (0, i.bG)([d.A], () => d.A.getGuildId()),
        v = (0, i.bG)([u.A], () => u.A.hasFetchedRequestToJoinGuilds),
        x = (0, h.A)(),
        E = (0, s.A)(j),
        _ = l.useMemo(() => {
            let e = (0, p.xW)({
                folderId: f.U.PENDING_JOIN_REQUESTS_FOLDER,
                folderName: m.intl.string(m.t["scsU+l"]),
                expanded: n,
                guildIds: [],
            });
            for (let t of x) e.children.push((0, p.EL)(t, e.id));
            return e;
        }, [x, n]);
    l.useEffect(() => {
        n && !v && o.A.fetchRequestToJoinGuilds();
    }, [n, v]);
    let C = null != j && x.includes(j);
    return (l.useEffect(() => {
        !n && C && E !== j && O(!0);
    }, [n, C, E, j]),
    0 === x.length)
        ? null
        : (0, r.jsx)(y, {
              onActivate: t,
              children: (0, r.jsx)(b.A, {
                  folderNode: _,
                  expanded: n,
                  selected: C,
                  draggable: !1,
                  sorting: !1,
                  onExpandCollapse: () => {
                      O(!n), c.Ay.clearCoachmark();
                  },
                  folderButtonSize: "icon",
                  folderButtonContent: (0, r.jsx)("div", {
                      className: A.rH,
                      children: (0, r.jsx)(a.Qfk, {
                          size: "sm",
                          color: "currentColor",
                      }),
                  }),
                  renderChildNode: function (e, t, n) {
                      return e.type !== p.PJ.GUILD
                          ? null
                          : (0, r.jsx)(
                                g.A,
                                {
                                    guildNode: e,
                                    "aria-setsize": n,
                                    "aria-posinset": t,
                                },
                                e.id,
                            );
                  },
              }),
          });
}
