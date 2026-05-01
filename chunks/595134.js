n.d(t, { b: () => f });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(110259),
    o = n(862482),
    c = n(789645),
    u = n(834730),
    d = n(403581),
    A = n(139286),
    E = n(954571),
    m = n(17928),
    h = n(623646),
    C = n(43189),
    g = n(964404),
    I = n(461782),
    p = n(447404);
function x(e) {
    let {
            buttonRef: t,
            dismissed: n,
            onDismiss: s,
            renderComponent: a,
            nudgeAlignIntoViewport: r = !1,
            skipForceHide: o = !1,
        } = e,
        c = i.useContext(I.vG),
        [u, d] = i.useState(""),
        [A, E] = i.useState(!1),
        x = (0, m.bG)([g.Ay], () => g.Ay.callHeaderHeight),
        T = i.useRef(null),
        _ = i.useRef(0);
    i.useEffect(() => {
        let e = t.current;
        if (null != e) return e.addEventListener("click", s), () => e.removeEventListener("click", s);
    }),
        i.useEffect(() => {
            o || (d(String(_.current)), E(void 0 !== x && x < (T.current?.clientHeight ?? 300) + 24), (_.current += 1));
        }, [x, T, o]);
    let { preventIdle: v, allowIdle: N } = (0, p.o)("popup");
    return t?.current == null
        ? null
        : (0, l.jsx)(C.Ay, {
              children: (0, l.jsx)(h.Q, {
                  targetRef: t,
                  position: "top",
                  align: "center",
                  spacing: 0,
                  positionKey: u,
                  nudgeAlignIntoViewport: r,
                  children: () =>
                      (0, l.jsx)("div", {
                          ref: T,
                          onMouseOver: v,
                          onFocus: v,
                          onBlur: N,
                          onMouseLeave: N,
                          children: a({ hidden: A || c || n, onDismiss: s }),
                      }),
              }),
          });
}
var T = n(652215),
    _ = n(985018),
    v = n(648666);
function N(e) {
    let { hidden: t, onDismiss: n } = e;
    return (
        (0, A.A)({ type: r.ImpressionTypes.VIEW, name: r.ImpressionNames.HD_STREAMING_POPOUT }, { disableTrack: t }, [
            t,
        ]),
        (0, l.jsxs)("div", {
            className: a()(v.jC, { [v.R]: t }),
            children: [
                (0, l.jsx)("img", {
                    className: v.Sl,
                    src: "https://cdn.discordapp.com/assets/premium/roadblocks/hd_streaming.png",
                    alt: "HD Streaming Nitro Perk",
                }),
                (0, l.jsx)(o.$n, {
                    "data-migration-pending": !0,
                    className: v.b,
                    "aria-label": _.intl.string(_.t.cpT0Cq),
                    look: o.$n.Looks.BLANK,
                    size: o.$n.Sizes.NONE,
                    onClick: () => {
                        n(), E.default.track(T.HAw.HD_STREAMING_POPOUT_DISMISSED);
                    },
                    children: (0, l.jsx)(c.P, { size: "xs", className: v.ut, color: "white" }),
                }),
                (0, l.jsx)("div", {
                    className: v.Gm,
                    children: (0, l.jsxs)("div", {
                        className: v.op,
                        children: [
                            (0, l.jsx)(u.E, {
                                className: v.aV,
                                variant: "text-sm/medium",
                                children: _.intl.format(_.t.ruvD7i, {}),
                            }),
                            (0, l.jsxs)("div", {
                                className: v.vX,
                                children: [
                                    (0, l.jsx)(d.t, { size: "xs" }),
                                    (0, l.jsx)(u.E, {
                                        className: v.aV,
                                        variant: "text-sm/medium",
                                        children: _.intl.string(_.t["BMw+7I"]),
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
            ],
        })
    );
}
function f(e) {
    let { ...t } = e;
    return (0, l.jsx)(x, { ...t, renderComponent: (e) => (0, l.jsx)(N, { ...e }) });
}
