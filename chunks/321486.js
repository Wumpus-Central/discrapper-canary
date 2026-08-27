n.d(t, { A: () => w });
var i = n(477900),
    l = n(582128),
    a = n(503698),
    s = n.n(a),
    r = n(221877),
    o = n(17928),
    c = n(866323),
    d = n(97808),
    u = n(778712),
    h = n(939249),
    p = n(821609),
    m = n(408278),
    A = n(881636),
    f = n(402216),
    x = n(652896),
    g = n(616356),
    C = n(287809),
    y = n(927813),
    j = n(562153),
    I = n(218394),
    N = n(393371),
    v = n(360627),
    E = n(809369),
    b = n(652215),
    T = n(1195),
    _ = n(375708),
    R = n(814402);
let S = 10 * y.A.Millis.SECOND,
    L = { tension: 220, friction: 30, clamp: !0 },
    O = { x: "100%" },
    P = { x: "0%" },
    M = { x: "-100%" };
function w(e) {
    let { streams: t, fit: n, tooltipSpacing: a, containerWidthPx: y } = e,
        w = (0, o.yK)(
            [g.A],
            () =>
                t
                    .filter((e) => {
                        let t = g.A.getActiveStreamForApplicationStream(e);
                        return null != t && t.state !== b.XYD.ENDED;
                    })
                    .map((e) => (0, x._z)(e)),
            [t],
        ),
        [D, U] = l.useState({ streamKey: w[0] ?? null, sequence: 0 }),
        [V, k] = l.useState(!1),
        [G, B] = l.useState(!1),
        F = Math.max(
            0,
            t.findIndex((e) => (0, x._z)(e) === D.streamKey),
        ),
        H = t[F],
        z = t[(F + 1) % t.length],
        W = t.length > 1,
        $ = w.includes((0, x._z)(H)),
        Y = G ? z : H,
        K = (0, o.bG)([C.default], () => C.default.getUser(Y.ownerId), [Y]),
        q = j.Ay.useName(Y.guildId, Y.channelId, K),
        X = (0, I.j)(),
        Z = y / 225,
        Q = $ ? _.intl.string(T.default.zW6Hyu) : _.intl.string(_.t["7Xq/nV"]),
        J = _.intl.string(T.default["t+GPi4"]),
        ee = l.useCallback(() => {
            let e = (0, x._z)(z);
            U((t) => ({ streamKey: e, sequence: t.sequence + 1 }));
        }, [z]);
    l.useEffect(() => {
        if (!W || !X || V || $) return;
        let e = setTimeout(ee, S);
        return () => clearTimeout(e);
    }, [W, X, V, $, ee]);
    let et = l.useCallback(() => (0, E.k)(H), [H]),
        en = { left: `${n.originX}%`, top: `${n.originY}%`, transform: n.matrix },
        ei = (0, c.p)(H, {
            keys: () => `${D.sequence}:${(0, x._z)(H)}`,
            initial: P,
            from: O,
            enter: P,
            leave: M,
            config: L,
        });
    function el() {
        k(!0);
    }
    function ea() {
        k(!1), B(!1);
    }
    return (0, i.jsxs)("div", {
        className: s()(R.VH, { [R.ke]: $ }),
        style: en,
        onMouseEnter: el,
        onMouseLeave: ea,
        onFocus: el,
        onBlur: ea,
        children: [
            (0, i.jsx)(v.A, {
                title: q,
                image: (0, i.jsx)(d.eu, { src: K?.getAvatarURL(Y.guildId, 96), size: u._3.SIZE_48, "aria-hidden": !0 }),
                forceOpen: G,
                spacing: a,
                children: (0, i.jsxs)(h.D, {
                    tag: "div",
                    "aria-label": Q,
                    className: R.KR,
                    onClick: et,
                    children: [
                        (0, i.jsx)("div", {
                            className: R.vd,
                            children: ei((e, t) =>
                                (0, i.jsx)(r.animated.div, {
                                    className: R.G8,
                                    style: e,
                                    children: (0, i.jsx)(N.A, { stream: t, previewClassName: R.oz }),
                                }),
                            ),
                        }),
                        (0, i.jsx)(f.Ay, {
                            size: f.Ay.Sizes.SMALL,
                            className: R.Ok,
                            style: { transform: `scale(${Z})` },
                            count: t.length,
                        }),
                    ],
                }),
            }),
            (0, i.jsx)("div", {
                className: R.y,
                children: (0, i.jsxs)("div", {
                    className: R.ne,
                    style: { transform: `scale(${Z})` },
                    children: [
                        (0, i.jsx)("div", {
                            className: R.kx,
                            children: (0, i.jsx)(p.$, {
                                text: Q,
                                variant: "overlay-secondary",
                                size: "sm",
                                tabIndex: -1,
                                "aria-hidden": !0,
                            }),
                        }),
                        W
                            ? (0, i.jsx)("div", {
                                  className: R.ch,
                                  children: (0, i.jsx)("div", {
                                      className: R.iI,
                                      onMouseEnter: () => B(!0),
                                      onMouseLeave: () => B(!1),
                                      onFocus: () => B(!0),
                                      onBlur: () => B(!1),
                                      children: (0, i.jsx)(m.K, {
                                          icon: A.u,
                                          variant: "overlay-secondary",
                                          size: "sm",
                                          "aria-label": J,
                                          onClick: ee,
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
