n.d(t, { A: () => L });
var i = n(477900),
    l = n(582128),
    a = n(221877),
    s = n(17928),
    r = n(866323),
    o = n(97808),
    c = n(778712),
    d = n(939249),
    u = n(821609),
    h = n(408278),
    p = n(881636),
    m = n(402216),
    f = n(652896),
    A = n(607407),
    x = n(287809),
    g = n(927813),
    C = n(562153),
    y = n(218394),
    j = n(360627),
    I = n(809369),
    N = n(1195),
    v = n(375708),
    E = n(814402);
let b = 10 * g.A.Millis.SECOND,
    T = { tension: 220, friction: 30, clamp: !0 },
    _ = { x: "100%" },
    R = { x: "0%" },
    S = { x: "-100%" };
function L(e) {
    let { streams: t, fit: n, tooltipSpacing: g, containerWidthPx: L } = e,
        [O, P] = l.useState({ streamKey: null, sequence: 0 }),
        [M, w] = l.useState(!1),
        [U, D] = l.useState(!1),
        V = Math.max(
            0,
            t.findIndex((e) => (0, f._z)(e) === O.streamKey),
        ),
        k = t[V],
        G = t[(V + 1) % t.length],
        B = t.length > 1,
        F = U ? G : k,
        H = (0, s.bG)([x.default], () => x.default.getUser(F.ownerId), [F]),
        z = C.Ay.useName(F.guildId, F.channelId, H),
        W = (0, y.j)(),
        $ = L / 225,
        Y = v.intl.string(v.t["7Xq/nV"]),
        K = v.intl.string(N.default["t+GPi4"]),
        q = l.useCallback(() => {
            let e = (0, f._z)(G);
            P((t) => ({ streamKey: e, sequence: t.sequence + 1 }));
        }, [G]);
    l.useEffect(() => {
        if (!B || !W || M) return;
        let e = setTimeout(q, b);
        return () => clearTimeout(e);
    }, [B, W, M, q]);
    let X = l.useCallback(() => (0, I.k)(k), [k]),
        Z = { left: `${n.originX}%`, top: `${n.originY}%`, transform: n.matrix },
        Q = (0, r.p)(k, {
            keys: () => `${O.sequence}:${(0, f._z)(k)}`,
            initial: R,
            from: _,
            enter: R,
            leave: S,
            config: T,
        });
    function J() {
        w(!0);
    }
    function ee() {
        w(!1), D(!1);
    }
    return (0, i.jsxs)("div", {
        className: E.VH,
        style: Z,
        onMouseEnter: J,
        onMouseLeave: ee,
        onFocus: J,
        onBlur: ee,
        children: [
            (0, i.jsx)(j.A, {
                title: z,
                image: (0, i.jsx)(o.eu, { src: H?.getAvatarURL(F.guildId, 96), size: c._3.SIZE_48, "aria-hidden": !0 }),
                forceOpen: U,
                spacing: g,
                children: (0, i.jsxs)(d.D, {
                    tag: "div",
                    "aria-label": Y,
                    className: E.KR,
                    onClick: X,
                    children: [
                        (0, i.jsx)("div", {
                            className: E.vd,
                            children: Q((e, t) =>
                                (0, i.jsx)(a.animated.div, {
                                    className: E.G8,
                                    style: e,
                                    children: (0, i.jsx)(A.A, { stream: t, className: E.oz, noText: !0 }),
                                }),
                            ),
                        }),
                        (0, i.jsx)(m.Ay, {
                            size: m.Ay.Sizes.SMALL,
                            className: E.Ok,
                            style: { transform: `scale(${$})` },
                            count: t.length,
                        }),
                    ],
                }),
            }),
            (0, i.jsx)("div", {
                className: E.y,
                children: (0, i.jsxs)("div", {
                    className: E.ne,
                    style: { transform: `scale(${$})` },
                    children: [
                        (0, i.jsx)("div", {
                            className: E.kx,
                            children: (0, i.jsx)(u.$, {
                                text: Y,
                                variant: "overlay-secondary",
                                size: "sm",
                                tabIndex: -1,
                                "aria-hidden": !0,
                            }),
                        }),
                        B
                            ? (0, i.jsx)("div", {
                                  className: E.ch,
                                  children: (0, i.jsx)("div", {
                                      className: E.iI,
                                      onMouseEnter: () => D(!0),
                                      onMouseLeave: () => D(!1),
                                      onFocus: () => D(!0),
                                      onBlur: () => D(!1),
                                      children: (0, i.jsx)(h.K, {
                                          icon: p.u,
                                          variant: "overlay-secondary",
                                          size: "sm",
                                          "aria-label": K,
                                          onClick: q,
                                      }),
                                  }),
                              })
                            : null,
                    ],
                }),
            }),
        ],
    });
}
