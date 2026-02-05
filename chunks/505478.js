n.d(t, { A: () => c });
var i = n(627968),
    r = n(64700),
    a = n(397927),
    l = n(890687),
    s = n(651892),
    o = n(264580),
    d = n(985018);
let c = function (e) {
    let { onChange: t, optionClassName: n, selectedSortMethod: c } = e,
        u = r.useCallback(
            (e) => {
                t(e);
            },
            [t],
        ),
        A = (0, l.XD)(),
        h = r.useMemo(() => A.map((e) => ({ name: e.label, value: e.value, radioBarClassName: n })), [A, n]);
    return (0, i.jsx)(o.A, {
        renderPopout: (e, t) => {
            let { closePopout: n } = e;
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(o.q, { id: t, children: d.intl.string(d.t.tZXJIS) }),
                    (0, i.jsx)(a.z6M, {
                        options: h,
                        onChange: (e) => {
                            n(), u(e);
                        },
                        value: c,
                    }),
                ],
            });
        },
        children: (e, t) =>
            (0, i.jsx)(a.Button, {
                ...e,
                buttonRef: t,
                size: "sm",
                text: (0, s.Js)(c),
                icon: a.g8p,
                iconPosition: "end",
                variant: "secondary",
            }),
    });
};
