t.d(n, { FE: () => T, Sb: () => N, Y1: () => j, bE: () => b });
var l = t(477900),
    i = t(582128),
    a = t(17928),
    s = t(765178),
    r = t(315710),
    o = t(834730),
    c = t(775602),
    u = t(625494),
    d = t(446243),
    A = t(558076),
    m = t(743943),
    h = t(652215),
    C = t(1195),
    E = t(375708),
    f = t(107465);
function p(e) {
    return Math.min(100, Math.max(0, e));
}
function g() {
    let e = (2 * Math.random() - 1) * 5;
    return 0.5 > Math.random() ? { x: 5, y: e } : { x: e, y: -5 };
}
function x(e, n) {
    return { x: p(e.x + n.x), y: p(e.y + n.y) };
}
let I = i.createContext(null),
    v = new Set();
function T(e) {
    return v.delete(e);
}
function _(e) {
    return (0, a.bG)([A.A], () => {
        let n = A.A.getPendingNote(e);
        return null != n && null == n.position;
    });
}
function j(e) {
    let n = _(e),
        t = (0, a.bG)([c.Ay], () => c.Ay.keyboardModeEnabled);
    return n && t;
}
function N(e) {
    let { position: n, targetLabel: t } = e,
        l = i.useContext(I),
        { x: a, y: s } = n;
    return i.useMemo(
        () =>
            null == l
                ? null
                : {
                      "aria-label": E.intl.formatToPlainString(C.default.NBm6jz, { targetLabel: t }),
                      "aria-describedby": l.descriptionId,
                      onFocus: () => l.setPreviewTarget({ x: a, y: s }),
                      onClick: () => l.placeNextTo({ x: a, y: s }),
                  },
        [l, t, a, s],
    );
}
function b(e) {
    let { channelId: n, containerRef: t, roomWidth: a, children: c } = e,
        p = _(n),
        T = j(n),
        N = i.useId(),
        [b, S] = i.useState(null),
        O = i.useRef(null);
    T || null == b || S(null),
        i.useEffect(() => {
            if (p)
                return (
                    v.delete(n),
                    u._.subscribe(h.jej.GUILD_ROOM_NOTE_PLACEMENT_CANCEL, e),
                    () => {
                        u._.unsubscribe(h.jej.GUILD_ROOM_NOTE_PLACEMENT_CANCEL, e);
                    }
                );
            function e() {
                v.add(n), (0, d.HW)(n), s.O.announce(E.intl.string(C.default.bUGP71), "assertive");
            }
        }, [p, n]),
        i.useEffect(() => {
            if (T)
                return () => {
                    O.current = null;
                };
        }, [T]);
    let y = i.useMemo(
        () =>
            T
                ? {
                      descriptionId: N,
                      setPreviewTarget: (e) => {
                          let n = O.current ?? g();
                          (O.current = n), S(x(e, n));
                      },
                      placeNextTo: (e) => {
                          let t = A.A.getPendingNote(n);
                          if (null == t || null != t.position) return;
                          let l = O.current ?? g();
                          (O.current = l), (0, d.Dr)(n, x(e, l));
                      },
                  }
                : null,
        [T, N, n],
    );
    return (0, l.jsxs)(I.Provider, {
        value: y,
        children: [
            T &&
                (0, l.jsx)(r.Ok, {
                    containerRef: t,
                    keyboardModeEnabled: !1,
                    children: (0, l.jsx)("div", {
                        className: f.a,
                        children: (0, l.jsx)("div", {
                            className: f.G,
                            id: N,
                            children: (0, l.jsx)(o.E, {
                                variant: "text-sm/medium",
                                children: E.intl.string(C.default.xyO7AD),
                            }),
                        }),
                    }),
                }),
            c,
            null != b && (0, l.jsx)(m.A, { position: b, roomWidth: a }),
        ],
    });
}
