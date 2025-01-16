r.d(n, {
    Z: function () {
        return h;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(120356),
    o = r.n(s),
    l = r(239091),
    u = r(962293),
    c = r(555573),
    d = r(665692),
    f = r(388032),
    _ = r(870493);
function h(e) {
    var n;
    let s,
        h,
        p,
        { className: m, activeCommand: g, activeOption: E, optionStates: v, channelId: I } = e,
        T = a.useCallback(
            (e) => {
                var n;
                let a = null == g ? void 0 : null === (n = g.rootCommand) || void 0 === n ? void 0 : n.id;
                if (null == a) {
                    e.preventDefault();
                    return;
                }
                (0, l.jW)(e, async () => {
                    let { default: e } = await r.e('5396').then(r.bind(r, 731646));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            id: a,
                            label: f.intl.string(f.t.oJ1Mu7)
                        });
                });
            },
            [null == g ? void 0 : null === (n = g.rootCommand) || void 0 === n ? void 0 : n.id]
        ),
        b = a.useCallback(() => {
            c.Po({
                channelId: I,
                command: null,
                section: null
            });
        }, [I]);
    if (null == g) return null;
    if (null != E) {
        let e = v[E.name].lastValidationResult;
        (s = E.displayName), (h = E.displayDescription), (p = (null == e ? void 0 : e.success) ? null : null == e ? void 0 : e.error);
    } else (s = ''.concat(d.GI).concat(g.displayName)), (h = g.displayDescription), (p = null);
    return (0, i.jsxs)('div', {
        className: o()(m, _.bar),
        onContextMenu: T,
        children: [
            (0, i.jsxs)('div', {
                className: _.commandInfo,
                children: [
                    (0, i.jsx)('span', {
                        className: _.name,
                        children: s
                    }),
                    null != p
                        ? (0, i.jsx)('span', {
                              className: _.error,
                              children: p
                          })
                        : (0, i.jsx)('span', {
                              className: _.description,
                              children: h
                          })
                ]
            }),
            (0, i.jsx)('div', {
                className: _.actions,
                children: (0, i.jsx)(u.B, { onClick: b })
            })
        ]
    });
}
