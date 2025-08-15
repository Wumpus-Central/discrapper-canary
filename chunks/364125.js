n.d(t, { Z: () => d });
var r = n(73800),
    l = n(399606),
    i = n(673125),
    a = n(984063),
    o = n(88315),
    u = n(179295),
    s = n(370663),
    c = n(743597);
function d(e) {
    let { user: t, channelId: n, streamerId: d, stream: f, focused: p, canvas: m } = e,
        E = r.useRef(!1),
        g = (0, l.e7)([i.Z], () => i.Z.getDrawMode()),
        S = (0, u.Z)((0, s.Z)(t.id, n, d), f),
        v = (0, u.Z)((0, c.Z)(t.id, n, d), f),
        h = r.useCallback(
            (e, t, n) => {
                if (null == m) return;
                let { x: r, y: l } = (0, o.hn)(m, n);
                switch (t.type) {
                    case a.W.LINE:
                        return S[e](t, r, l);
                    case a.W.EMOJI_HOSE:
                        return v[e](t, r, l);
                }
            },
            [m, S, v],
        ),
        b = r.useCallback(
            (e) => {
                p && null != g && (e.stopPropagation(), (E.current = !0), h("handleMouseDown", g, e));
            },
            [h, g, p],
        ),
        O = r.useCallback(
            (e) => {
                p && null != g && (e.stopPropagation(), E.current && h("handleMouseMove", g, e));
            },
            [h, g, p],
        ),
        y = r.useCallback(
            (e) => {
                p && null != g && (e.stopPropagation(), (E.current = !1), h("handleMouseUp", g, e));
            },
            [h, g, p],
        ),
        _ = r.useCallback(
            (e) => {
                E.current && null != g && h("handleMouseEnter", g, e);
            },
            [h, g],
        );
    return (
        r.useEffect(() => {
            let e = (e) => {
                null != g && ((E.current = !1), h("handleMouseUp", g, e));
            };
            return window.addEventListener("mouseup", e), () => window.removeEventListener("mouseup", e);
        }, [h, g]),
        {
            handleClick: r.useCallback(
                (e) => {
                    p && null != g && e.stopPropagation();
                },
                [g, p],
            ),
            handleMouseDown: b,
            handleMouseEnter: _,
            handleMouseMove: O,
            handleMouseUp: y,
        }
    );
}
