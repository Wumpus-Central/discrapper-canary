s.d(t, { A: () => _ });
var n = s(627968),
    l = s(64700),
    a = s(954197),
    r = s(821609),
    i = s(715482),
    o = s(890687),
    c = s(651892),
    u = s(264580),
    d = s(985018);
let _ = function (e) {
    let { onChange: t, optionClassName: s, selectedSortMethod: _ } = e,
        m = l.useCallback(
            (e) => {
                t(e);
            },
            [t],
        ),
        h = (0, o.XD)(),
        x = l.useMemo(() => h.map((e) => ({ name: e.label, value: e.value, radioBarClassName: s })), [h, s]);
    return (0, n.jsx)(u.A, {
        renderPopout: (e, t) => {
            let { closePopout: s } = e;
            return (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)(u.q, { id: t, children: d.intl.string(d.t.tZXJIS) }),
                    (0, n.jsx)(a.z, {
                        options: x,
                        onChange: (e) => {
                            s(), m(e);
                        },
                        value: _,
                    }),
                ],
            });
        },
        children: (e, t) =>
            (0, n.jsx)(r.$, {
                ...e,
                buttonRef: t,
                size: "sm",
                text: (0, c.Js)(_),
                icon: i.g,
                iconPosition: "end",
                variant: "secondary",
            }),
    });
};
