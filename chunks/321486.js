n.d(t, { A: () => U });
var i = n(477900),
    l = n(582128),
    a = n(503698),
    s = n.n(a),
    r = n(74445),
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
    N = n(920639),
    v = n(393371),
    E = n(360627),
    b = n(809369),
    _ = n(652215),
    T = n(977241),
    S = n(375708),
    R = n(814402);
let L = 10 * y.A.Millis.SECOND,
    O = { tension: 220, friction: 30, clamp: !0 },
    P = { x: "100%" },
    M = { x: "0%" },
    w = { x: "-100%" };
function U(e) {
    let { streams: t, fit: n, tooltipSpacing: a, containerWidthPx: y } = e,
        U = (0, o.yK)(
            [g.A],
            () =>
                t
                    .filter((e) => {
                        let t = g.A.getActiveStreamForApplicationStream(e);
                        return null != t && t.state !== _.XYD.ENDED;
                    })
                    .map((e) => (0, x._z)(e)),
            [t],
        ),
        [D, V] = l.useState({ streamKey: U[0] ?? null, sequence: 0 }),
        [k, G] = l.useState(!1),
        [B, F] = l.useState(!1),
        z = Math.max(
            0,
            t.findIndex((e) => (0, x._z)(e) === D.streamKey),
        ),
        H = t[z],
        W = t[(z + 1) % t.length],
        $ = t.length > 1,
        Y = U.includes((0, x._z)(H)),
        K = B ? W : H,
        q = (0, o.bG)([C.default], () => C.default.getUser(K.ownerId), [K]),
        X = j.Ay.useName(K.guildId, K.channelId, q),
        Z = (0, I.j)(),
        Q = y / 225,
        J = Y ? S.intl.string(T.default.zW6Hyu) : S.intl.string(S.t["7Xq/nV"]),
        ee = S.intl.string(T.default["t+GPi4"]),
        et = l.useCallback(() => {
            let e = (0, x._z)(W);
            V((t) => ({ streamKey: e, sequence: t.sequence + 1 }));
        }, [W]);
    l.useEffect(() => {
        if (!$ || !Z || k || Y) return;
        let e = setTimeout(et, L);
        return () => clearTimeout(e);
    }, [$, Z, k, Y, et]);
    let en = l.useCallback(() => {
            (0, N.n0)({ channelId: H.channelId, interactionType: "tv_clicked_stream_preview" }), (0, b.k)(H);
        }, [H]),
        ei = { left: `${n.originX}%`, top: `${n.originY}%`, transform: n.matrix },
        el = (0, c.p)(H, {
            keys: () => `${D.sequence}:${(0, x._z)(H)}`,
            initial: M,
            from: P,
            enter: M,
            leave: w,
            config: O,
        });
    function ea() {
        G(!0);
    }
    function es() {
        G(!1), F(!1);
    }
    return (0, i.jsxs)("div", {
        className: s()(R.VH, { [R.ke]: Y }),
        style: ei,
        onMouseEnter: ea,
        onMouseLeave: es,
        onFocus: ea,
        onBlur: es,
        children: [
            (0, i.jsx)(E.A, {
                title: X,
                image: (0, i.jsx)(d.eu, { src: q?.getAvatarURL(K.guildId, 96), size: u._3.SIZE_48, "aria-hidden": !0 }),
                forceOpen: B,
                spacing: a,
                children: (0, i.jsxs)(h.D, {
                    tag: "div",
                    "aria-label": J,
                    className: R.KR,
                    onClick: en,
                    children: [
                        (0, i.jsx)("div", {
                            className: R.vd,
                            children: el((e, t) =>
                                (0, i.jsx)(r.animated.div, {
                                    className: R.G8,
                                    style: e,
                                    children: (0, i.jsx)(v.A, { stream: t, previewClassName: R.oz }),
                                }),
                            ),
                        }),
                        (0, i.jsx)(f.Ay, {
                            size: f.Ay.Sizes.SMALL,
                            className: R.Ok,
                            style: { transform: `scale(${Q})` },
                            count: t.length,
                        }),
                    ],
                }),
            }),
            (0, i.jsx)("div", {
                className: R.y,
                children: (0, i.jsxs)("div", {
                    className: R.ne,
                    style: { transform: `scale(${Q})` },
                    children: [
                        (0, i.jsx)("div", {
                            className: R.kx,
                            children: (0, i.jsx)(p.$, {
                                text: J,
                                variant: "overlay-secondary",
                                size: "sm",
                                tabIndex: -1,
                                "aria-hidden": !0,
                            }),
                        }),
                        $
                            ? (0, i.jsx)("div", {
                                  className: R.ch,
                                  children: (0, i.jsx)("div", {
                                      className: R.iI,
                                      onMouseEnter: () => F(!0),
                                      onMouseLeave: () => F(!1),
                                      onFocus: () => F(!0),
                                      onBlur: () => F(!1),
                                      children: (0, i.jsx)(m.K, {
                                          icon: A.u,
                                          variant: "overlay-secondary",
                                          size: "sm",
                                          "aria-label": ee,
                                          onClick: et,
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
