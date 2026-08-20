i.d(e, { A: () => h });
var n = i(477900),
    l = i(582128),
    c = i(259678),
    t = i(866665),
    r = i(862482),
    a = i(625494),
    d = i(652215),
    o = i(375708),
    u = i(585023);
let h = function (s) {
    let {
            message: e,
            errorMessage: i,
            submitting: h,
            onReset: j,
            onSave: x,
            onSaveText: k,
            onResetText: m,
            onSaveButtonColor: p,
            disabled: E,
            saveButtonTooltip: N,
        } = s,
        b = l.useRef(null),
        [C, L] = l.useState(!1);
    return (
        l.useEffect(() => {
            function s() {
                L(!0), setTimeout(() => L(!1), 1e3);
            }
            return (
                a._.subscribe(d.jej.EMPHASIZE_NOTICE, s),
                () => {
                    a._.unsubscribe(d.jej.EMPHASIZE_NOTICE, s);
                }
            );
        }, []),
        (0, n.jsx)("div", {
            className: u.kL,
            "data-emphasized": C,
            children: (0, n.jsx)("div", {
                className: u.nP,
                ref: b,
                children: (0, n.jsxs)(c.xp, {
                    containerRef: b,
                    children: [
                        (0, n.jsx)("div", {
                            className: u.Xk,
                            children: (0, n.jsx)("div", {
                                className: u.iU,
                                children: i ?? e ?? o.intl.string(o.t.GP7JLE),
                            }),
                        }),
                        (0, n.jsxs)("div", {
                            className: u.o1,
                            children: [
                                null != j &&
                                    (0, n.jsx)(r.$n, {
                                        className: u.WA,
                                        size: r.$n.Sizes.SMALL,
                                        color: r.$n.Colors.PRIMARY,
                                        look: r.$n.Looks.LINK,
                                        onClick: j,
                                        children: (0, n.jsx)("span", { children: m ?? o.intl.string(o.t.yBZMsQ) }),
                                    }),
                                null != x
                                    ? (0, n.jsx)(t.m, {
                                          text: N,
                                          children: (0, n.jsx)(r.$n, {
                                              size: r.$n.Sizes.SMALL,
                                              color: p ?? r.$n.Colors.GREEN,
                                              submitting: h,
                                              disabled: E,
                                              onClick: x,
                                              children: k ?? o.intl.string(o.t.K344S7),
                                          }),
                                      })
                                    : null,
                            ],
                        }),
                    ],
                }),
            }),
        })
    );
};
