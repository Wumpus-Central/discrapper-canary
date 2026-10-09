n.d(t, { Sb: () => E, Y1: () => N, bE: () => v });
var i = n(477900),
    l = n(582128),
    a = n(17928),
    s = n(765178),
    r = n(315710),
    o = n(834730),
    c = n(775602),
    d = n(625494),
    u = n(446243),
    h = n(558076),
    p = n(743943),
    m = n(652215),
    A = n(270103),
    f = n(660183),
    x = n(107465);
function g(e) {
    return Math.min(100, Math.max(0, e));
}
function C() {
    let e = (2 * Math.random() - 1) * 5;
    return 0.5 > Math.random() ? { x: 5, y: e } : { x: e, y: -5 };
}
function j(e, t) {
    return { x: g(e.x + t.x), y: g(e.y + t.y) };
}
let y = l.createContext(null);
function I(e) {
    return (0, a.bG)([h.A], () => {
        let t = h.A.getPendingNote(e);
        return null != t && null == t.position;
    });
}
function N(e) {
    let t = I(e),
        n = (0, a.bG)([c.Ay], () => c.Ay.keyboardModeEnabled);
    return t && n;
}
function E(e) {
    let { position: t, targetLabel: n } = e,
        i = l.useContext(y),
        { x: a, y: s } = t;
    return l.useMemo(
        () =>
            null == i
                ? null
                : {
                      "aria-label": f.intl.formatToPlainString(A.default.NBm6jz, { targetLabel: n }),
                      "aria-describedby": i.descriptionId,
                      onFocus: () => i.setPreviewTarget({ x: a, y: s }),
                      onClick: () => i.placeNextTo({ x: a, y: s }),
                  },
        [i, n, a, s],
    );
}
function v(e) {
    let { channelId: t, containerRef: n, roomWidth: a, children: c } = e,
        g = I(t),
        E = N(t),
        v = l.useId(),
        [b, _] = l.useState(null),
        S = l.useRef(null);
    (E || null == b || _(null),
        l.useEffect(() => {
            if (g)
                return (
                    d._.subscribe(m.jej.GUILD_ROOM_NOTE_PLACEMENT_CANCEL, e),
                    () => {
                        d._.unsubscribe(m.jej.GUILD_ROOM_NOTE_PLACEMENT_CANCEL, e);
                    }
                );
            function e() {
                ((0, u.HW)(t), s.O.announce(f.intl.string(A.default.bUGP71), "assertive"));
            }
        }, [g, t]),
        l.useEffect(() => {
            if (E)
                return () => {
                    S.current = null;
                };
        }, [E]),
        l.useEffect(() => {
            E && n.current?.querySelector('[tabindex]:not([tabindex="-1"])')?.focus();
        }, [E, n]));
    let T = l.useMemo(
        () =>
            E
                ? {
                      descriptionId: v,
                      setPreviewTarget: (e) => {
                          let t = S.current ?? C();
                          ((S.current = t), _(j(e, t)));
                      },
                      placeNextTo: (e) => {
                          let n = h.A.getPendingNote(t);
                          if (null == n || null != n.position) return;
                          let i = S.current ?? C();
                          ((S.current = i), (0, u.Dr)(t, j(e, i)));
                      },
                  }
                : null,
        [E, v, t],
    );
    return (0, i.jsxs)(y.Provider, {
        value: T,
        children: [
            E &&
                (0, i.jsx)(r.Ok, {
                    containerRef: n,
                    disableReturn: !0,
                    children: (0, i.jsx)("div", {
                        className: x.a,
                        children: (0, i.jsx)("div", {
                            className: x.G,
                            id: v,
                            children: (0, i.jsx)(o.E, {
                                variant: "text-sm/medium",
                                children: f.intl.string(A.default.xyO7AD),
                            }),
                        }),
                    }),
                }),
            c,
            null != b && (0, i.jsx)(p.A, { position: b, roomWidth: a }),
        ],
    });
}
