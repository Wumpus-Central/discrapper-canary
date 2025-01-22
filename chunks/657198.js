r.d(n, {
    Z: function () {
        return y;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(270445),
    c = r(442837),
    d = r(911969),
    f = r(998698),
    p = r(703558),
    h = r(117530),
    _ = r(91313),
    m = r(436660),
    g = r(887490),
    E = r(388032),
    v = r(223979);
function y(e, n, r) {
    let { attributes: i, children: o, element: s } = n;
    switch (s.type) {
        case 'applicationCommand':
            let l = f.Z.getActiveCommand(r),
                u = 0,
                c = 0;
            if (null != l && l.id === s.command.id) {
                var d;
                let n = _.cu(e);
                for (let e of null !== (d = l.options) && void 0 !== d ? d : []) n.includes(e.name) ? c++ : u++;
            }
            let p = {};
            if (u > 0) {
                let e;
                (e = c > 0 ? E.intl.formatToPlainString(E.t.BP8N0N, { count: u }) : E.intl.formatToPlainString(E.t.lziVCw, { count: u })), (p['data-trailing-placeholder'] = e);
            }
            return (0, a.jsx)('div', {
                className: v.applicationCommand,
                ...i,
                ...p,
                children: o
            });
        case 'applicationCommandOption':
            return (0, a.jsx)(b, {
                attributes: i,
                channelId: r,
                element: s,
                children: o
            });
        default:
            return null;
    }
}
let b = (e) => {
    let n,
        { channelId: r, element: i, attributes: s, children: _ } = e,
        y = (0, u.vt)(),
        b = (0, u.UE)(),
        I = (0, u._7)(),
        { optionType: T, errored: S } = (0, c.cj)(
            [f.Z],
            () => {
                var e, n, a;
                return {
                    optionType: null === (e = f.Z.getOption(r, i.optionName)) || void 0 === e ? void 0 : e.type,
                    errored: (null === (a = f.Z.getOptionState(r, i.optionName)) || void 0 === a ? void 0 : null === (n = a.lastValidationResult) || void 0 === n ? void 0 : n.success) !== !0
                };
            },
            [r, i.optionName]
        ),
        A = (0, c.e7)([h.Z], () => h.Z.getUpload(r, i.optionName, p.d.SlashCommand), [r, i.optionName]),
        C = i.children[i.children.length - 1],
        N = null != C && g.LC.isText(C) && C.text.endsWith('\n'),
        R = l()(v.inlineElement, v.optionPill, {
            [v.selectedPill]: b && y,
            [v.erroredPill]: (!b || !y) && S
        }),
        O = o.useCallback(() => {
            !g.bN.isVoid(I, i) && m.Q.selectCommandOption(I, i.optionName, !0);
        }, [I, i]);
    return (
        (n =
            T === d.jw.ATTACHMENT
                ? (null == A ? void 0 : A.filename) != null
                    ? (0, a.jsxs)('span', {
                          className: l()(v.optionPillValue, v.attachmentFilename),
                          contentEditable: !1,
                          children: [A.filename, _]
                      })
                    : (0, a.jsxs)('span', {
                          className: l()(v.optionPillValue, v.readonlyPillValue),
                          contentEditable: !1,
                          children: [E.intl.string(E.t.GRdFnp), _]
                      })
                : (0, a.jsxs)('span', {
                      className: v.optionPillValue,
                      children: [
                          _,
                          N
                              ? (0, a.jsx)('span', {
                                    className: v.newLine,
                                    contentEditable: !1
                                })
                              : null
                      ]
                  })),
        (0, a.jsxs)('span', {
            ...s,
            className: R,
            children: [
                (0, a.jsxs)('span', {
                    className: v.optionPillKey,
                    contentEditable: !1,
                    onClick: O,
                    children: [i.optionDisplayName, '\u200B']
                }),
                n,
                (0, a.jsx)('span', {
                    contentEditable: !1,
                    children: '\u200B'
                })
            ]
        })
    );
};
