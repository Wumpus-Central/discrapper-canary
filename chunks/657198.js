n.d(t, { Z: () => O }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(270445),
    l = n(442837),
    c = n(911969),
    u = n(998698),
    d = n(703558),
    f = n(117530),
    p = n(91313),
    _ = n(436660),
    h = n(887490),
    m = n(388032),
    g = n(742493);
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
function v(e) {
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
function b(e, t) {
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
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function O(e, t, n) {
    let { attributes: i, children: o, element: a } = t;
    switch (a.type) {
        case 'applicationCommand':
            let s = u.Z.getActiveCommand(n),
                l = 0,
                c = 0;
            if (null != s && s.id === a.command.id) {
                var d;
                let t = p.cu(e);
                for (let e of null !== (d = s.options) && void 0 !== d ? d : []) t.includes(e.name) ? c++ : l++;
            }
            let f = {};
            if (l > 0) {
                let e;
                (e = c > 0 ? m.NW.formatToPlainString(m.t.BP8N0N, { count: l }) : m.NW.formatToPlainString(m.t.lziVCw, { count: l })), (f['data-trailing-placeholder'] = e);
            }
            return (0, r.jsx)('div', y(v({ className: g.applicationCommand }, i, f), { children: o }));
        case 'applicationCommandOption':
            return (0, r.jsx)(S, {
                attributes: i,
                channelId: n,
                element: a,
                children: o
            });
        default:
            return null;
    }
}
let S = (e) => {
    let t,
        { channelId: n, element: o, attributes: p, children: E } = e,
        b = (0, s.vt)(),
        O = (0, s.UE)(),
        S = (0, s._7)(),
        { optionType: I, errored: T } = (0, l.cj)(
            [u.Z],
            () => {
                var e, t, r;
                return {
                    optionType: null === (e = u.Z.getOption(n, o.optionName)) || void 0 === e ? void 0 : e.type,
                    errored: (null === (r = u.Z.getOptionState(n, o.optionName)) || void 0 === r ? void 0 : null === (t = r.lastValidationResult) || void 0 === t ? void 0 : t.success) !== !0
                };
            },
            [n, o.optionName]
        ),
        N = (0, l.e7)([f.Z], () => f.Z.getUpload(n, o.optionName, d.d.SlashCommand), [n, o.optionName]),
        A = o.children[o.children.length - 1],
        C = null != A && h.LC.isText(A) && A.text.endsWith('\n'),
        R = a()(g.inlineElement, g.optionPill, {
            [g.selectedPill]: O && b,
            [g.erroredPill]: (!O || !b) && T
        }),
        P = i.useCallback(() => {
            h.bN.isVoid(S, o) || _.Q.selectCommandOption(S, o.optionName, !0);
        }, [S, o]);
    return (
        (t =
            I === c.jw.ATTACHMENT
                ? (null == N ? void 0 : N.filename) != null
                    ? (0, r.jsxs)('span', {
                          className: a()(g.optionPillValue, g.attachmentFilename),
                          contentEditable: !1,
                          children: [N.filename, E]
                      })
                    : (0, r.jsxs)('span', {
                          className: a()(g.optionPillValue, g.readonlyPillValue),
                          contentEditable: !1,
                          children: [m.NW.string(m.t.GRdFnp), E]
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
            y(v({}, p), {
                className: R,
                children: [
                    (0, r.jsxs)('span', {
                        className: g.optionPillKey,
                        contentEditable: !1,
                        onClick: P,
                        children: [o.optionDisplayName, '\u200B']
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
