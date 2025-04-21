n.d(t, { Z: () => O }), n(388685);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    s = n(270445),
    l = n(442837),
    c = n(911969),
    u = n(998698),
    d = n(703558),
    f = n(117530),
    _ = n(91313),
    p = n(436660),
    h = n(887490),
    m = n(388032),
    g = n(112360);
function E(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                E(e, t, n[t]);
            });
    }
    return e;
}
function y(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function O(e, t, n) {
    let { attributes: i, children: a, element: o } = t;
    switch (o.type) {
        case 'applicationCommand':
            let s = u.Z.getActiveCommand(n),
                l = 0,
                c = 0;
            if (null != s && s.id === o.command.id) {
                var d;
                let t = _.cu(e);
                for (let e of null != (d = s.options) ? d : []) t.includes(e.name) ? c++ : l++;
            }
            let f = {};
            if (l > 0) {
                let e;
                (e = c > 0 ? m.intl.formatToPlainString(m.t.BP8N0N, { count: l }) : m.intl.formatToPlainString(m.t.lziVCw, { count: l })), (f['data-trailing-placeholder'] = e);
            }
            return (0, r.jsx)('div', v(b({ className: g.applicationCommand }, i, f), { children: a }));
        case 'applicationCommandOption':
            return (0, r.jsx)(I, {
                attributes: i,
                channelId: n,
                element: o,
                children: a
            });
        default:
            return null;
    }
}
let I = (e) => {
    let t,
        { channelId: n, element: a, attributes: _, children: E } = e,
        y = (0, s.vt)(),
        O = (0, s.UE)(),
        I = (0, s._7)(),
        { optionType: S, errored: T } = (0, l.cj)(
            [u.Z],
            () => {
                var e, t, r;
                return {
                    optionType: null == (e = u.Z.getOption(n, a.optionName)) ? void 0 : e.type,
                    errored: (null == (r = u.Z.getOptionState(n, a.optionName)) || null == (t = r.lastValidationResult) ? void 0 : t.success) !== !0
                };
            },
            [n, a.optionName]
        ),
        A = (0, l.e7)([f.Z], () => f.Z.getUpload(n, a.optionName, d.d.SlashCommand), [n, a.optionName]),
        N = a.children[a.children.length - 1],
        C = null != N && h.LC.isText(N) && N.text.endsWith('\n'),
        R = o()(g.inlineElement, g.optionPill, {
            [g.selectedPill]: O && y,
            [g.erroredPill]: (!O || !y) && T
        }),
        P = i.useCallback(() => {
            h.bN.isVoid(I, a) || p.Q.selectCommandOption(I, a.optionName, !0);
        }, [I, a]);
    return (
        (t =
            S === c.jw.ATTACHMENT
                ? (null == A ? void 0 : A.filename) != null
                    ? (0, r.jsxs)('span', {
                          className: o()(g.optionPillValue, g.attachmentFilename),
                          contentEditable: !1,
                          children: [A.filename, E]
                      })
                    : (0, r.jsxs)('span', {
                          className: o()(g.optionPillValue, g.readonlyPillValue),
                          contentEditable: !1,
                          children: [m.intl.string(m.t.GRdFnp), E]
                      })
                : (0, r.jsxs)('span', {
                      className: g.optionPillValue,
                      children: [
                          E,
                          C
                              ? (0, r.jsx)('span', {
                                    className: g.newLine,
                                    contentEditable: !1
                                })
                              : null
                      ]
                  })),
        (0, r.jsxs)(
            'span',
            v(b({}, _), {
                className: R,
                children: [
                    (0, r.jsxs)('span', {
                        className: g.optionPillKey,
                        contentEditable: !1,
                        onClick: P,
                        children: [a.optionDisplayName, '\u200B']
                    }),
                    t,
                    (0, r.jsx)('span', {
                        contentEditable: !1,
                        children: '\u200B'
                    })
                ]
            })
        )
    );
};
