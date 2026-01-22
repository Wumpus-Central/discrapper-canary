n.d(t, { Y: () => a }), n(896048), n(680155), n(323874), n(14289), n(35956), n(747238), n(812715);
var r = n(64700),
    i = n(960488),
    l = n(458518);
function a() {
    let e = (0, l.o)(),
        t = (0, i.W6)(),
        n = r.useRef(null),
        a = r.useCallback(
            (r) => {
                var i;
                let l = new URLSearchParams(null != (i = n.current) ? i : e);
                for (let [e, t] of Object.entries(r)) null == t ? l.delete(e) : l.set(e, t);
                (n.current = l),
                    t.replace({ search: l.toString() }),
                    Promise.resolve().then(() => {
                        n.current = null;
                    });
            },
            [e, t],
        );
    return [e, a];
}
