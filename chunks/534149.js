n.d(t, { N: () => i });
var l = n(627968),
    a = n(64700),
    r = n(744682);
let s = { earn: { name: "earn", start: 0, duration: 180 }, spend: { name: "spend", start: 240, duration: 180 } },
    i = (e) => {
        let t = a.useRef(null),
            i = a.useRef(e);
        i.current = e;
        let u = a.useMemo(
                () => () => {
                    null != t.current && t.current.play(e);
                },
                [e],
            ),
            c = a.useCallback(
                (e) =>
                    (0, l.jsx)(r.P, {
                        ...e,
                        src: () => n.e("78611").then(n.t.bind(n, 433886, 19)),
                        ref: t,
                        initialAnimation: i.current,
                        markers: s,
                    }),
                [],
            );
        return {
            events: {},
            play: u,
            getDuration: a.useCallback(() => t.current?.getDuration(), []),
            getCurrentFrame: a.useCallback(() => t.current?.getCurrentFrame() ?? null, []),
            Component: c,
        };
    };
