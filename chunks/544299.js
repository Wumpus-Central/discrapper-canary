var i = n(477900),
    l = n(582128),
    a = n(855986),
    s = n(765178),
    r = n(315710),
    o = n(834730),
    c = n(775602),
    d = n(188567),
    u = n(303227),
    h = n(558076),
    p = n(743943),
    m = n(652215),
    A = n(687782),
    f = n(792996),
    g = n(107465);
function x(e) {
    return Math.min(100, Math.max(0, e));
}
function C() {
    let e = (2 * Math.random() - 1) * 5;
    return 0.5 > Math.random() ? { x: 5, y: e } : { x: e, y: -5 };
}
function y(e, t) {
    return { x: x(e.x + t.x), y: x(e.y + t.y) };
}
let I = l.createContext(null);
function j(e) {
    return (0, a.bG)([h.A], () => {
        let t = h.A.getPendingNote(e);
        return null != t && null == t.position;
    });
}
function N(e) {
    let t = j(e),
        n = (0, a.bG)([c.Ay], () => c.Ay.keyboardModeEnabled);
    return t && n;
}
n.d(
    t,
    {},
    {
        Sb: function (e) {
            let { position: t, targetLabel: n } = e,
                i = l.useContext(I),
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
        },
        Y1: N,
        bE: function (e) {
            let { channelId: t, containerRef: n, roomWidth: a, children: c } = e,
                x = j(t),
                v = N(t),
                E = l.useId(),
                [b, S] = l.useState(null),
                T = l.useRef(null);
            (v || null == b || S(null),
                l.useEffect(() => {
                    if (x)
                        return (
                            d._.subscribe(m.jej.GUILD_ROOM_NOTE_PLACEMENT_CANCEL, e),
                            () => {
                                d._.unsubscribe(m.jej.GUILD_ROOM_NOTE_PLACEMENT_CANCEL, e);
                            }
                        );
                    function e() {
                        ((0, u.HW)(t), s.O.announce(f.intl.string(A.default.bUGP71), "assertive"));
                    }
                }, [x, t]),
                l.useEffect(() => {
                    if (v)
                        return () => {
                            T.current = null;
                        };
                }, [v]),
                l.useEffect(() => {
                    v && n.current?.querySelector('[tabindex]:not([tabindex="-1"])')?.focus();
                }, [v, n]));
            let _ = l.useMemo(
                () =>
                    v
                        ? {
                              descriptionId: E,
                              setPreviewTarget: (e) => {
                                  let t = T.current ?? C();
                                  ((T.current = t), S(y(e, t)));
                              },
                              placeNextTo: (e) => {
                                  let n = h.A.getPendingNote(t);
                                  if (null == n || null != n.position) return;
                                  let i = T.current ?? C();
                                  ((T.current = i), (0, u.Dr)(t, y(e, i)));
                              },
                          }
                        : null,
                [v, E, t],
            );
            return (0, i.jsxs)(I.Provider, {
                value: _,
                children: [
                    v &&
                        (0, i.jsx)(r.Ok, {
                            containerRef: n,
                            disableReturn: !0,
                            children: (0, i.jsx)("div", {
                                className: g.a,
                                children: (0, i.jsx)("div", {
                                    className: g.G,
                                    id: E,
                                    children: (0, i.jsx)(o.E, {
                                        variant: "body-sm/medium",
                                        children: f.intl.string(A.default.xyO7AD),
                                    }),
                                }),
                            }),
                        }),
                    c,
                    null != b && (0, i.jsx)(p.A, { position: b, roomWidth: a }),
                ],
            });
        },
    },
);
