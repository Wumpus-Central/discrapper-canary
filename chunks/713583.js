r.d(n, {
    Z: function () {
        return h;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(120356),
    s = r.n(o),
    l = r(239091),
    u = r(962293),
    c = r(555573),
    d = r(665692),
    f = r(388032),
    p = r(870493);
function h(e) {
    var n;
    let o,
        h,
        _,
        { className: m, activeCommand: g, activeOption: E, optionStates: v, channelId: y } = e,
        b = a.useCallback(
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
        I = a.useCallback(() => {
            c.Po({
                channelId: y,
                command: null,
                section: null
            });
        }, [y]);
    if (null == g) return null;
    if (null != E) {
        let e = v[E.name].lastValidationResult;
        (o = E.displayName), (h = E.displayDescription), (_ = (null == e ? void 0 : e.success) ? null : null == e ? void 0 : e.error);
    } else (o = ''.concat(d.GI).concat(g.displayName)), (h = g.displayDescription), (_ = null);
    return (0, i.jsxs)('div', {
        className: s()(m, p.bar),
        onContextMenu: b,
        children: [
            (0, i.jsxs)('div', {
                className: p.commandInfo,
                children: [
                    (0, i.jsx)('span', {
                        className: p.name,
                        children: o
                    }),
                    null != _
                        ? (0, i.jsx)('span', {
                              className: p.error,
                              children: _
                          })
                        : (0, i.jsx)('span', {
                              className: p.description,
                              children: h
                          })
                ]
            }),
            (0, i.jsx)('div', {
                className: p.actions,
                children: (0, i.jsx)(u.B, { onClick: I })
            })
        ]
    });
}
