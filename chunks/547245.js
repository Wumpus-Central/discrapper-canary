n.d(t, { Z: () => o }), n(388685);
var r = n(951288),
    a = n(647438),
    i = n(308982),
    l = n(36706);
function o(e) {
    let { channelId: t } = e,
        n = (0, i.E1)(t, (e) => e.prompt),
        o = a.useRef(null),
        [c, u] = a.useState("auto"),
        s = a.useCallback(
            (e) => {
                i.kg.getState().setPrompt(t, e.target.value);
            },
            [t],
        );
    return (
        a.useLayoutEffect(() => {
            let e = o.current;
            if (null != e) {
                let t = e.style.height;
                e.style.height = "auto";
                let n = e.scrollHeight;
                (e.style.height = t), u("".concat(n, "px"));
            }
        }, [n]),
        (0, r.jsx)("textarea", {
            ref: o,
            className: l.promptInput,
            value: n,
            onChange: s,
            placeholder: "Type a prompt or hit shuffle to start",
            style: { height: c },
        })
    );
}
