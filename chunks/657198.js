r.d(n, {
    Z: function () {
        return I;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(270445),
    c = r(442837),
    d = r(911969),
    f = r(998698),
    _ = r(703558),
    h = r(117530),
    p = r(91313),
    m = r(436660),
    g = r(887490),
    E = r(388032),
    v = r(223979);
function I(e, n, r) {
    let { attributes: i, children: s, element: o } = n;
    switch (o.type) {
        case 'applicationCommand':
            let l = f.Z.getActiveCommand(r),
                u = 0,
                c = 0;
            if (null != l && l.id === o.command.id) {
                var d;
                let n = p.cu(e);
                for (let e of null !== (d = l.options) && void 0 !== d ? d : []) n.includes(e.name) ? c++ : u++;
            }
            let _ = {};
            if (u > 0) {
                let e;
                (e = c > 0 ? E.intl.formatToPlainString(E.t.BP8N0N, { count: u }) : E.intl.formatToPlainString(E.t.lziVCw, { count: u })), (_['data-trailing-placeholder'] = e);
            }
            return (0, a.jsx)('div', {
                className: v.applicationCommand,
                ...i,
                ..._,
                children: s
            });
        case 'applicationCommandOption':
            return (0, a.jsx)(T, {
                attributes: i,
                channelId: r,
                element: o,
                children: s
            });
        default:
            return null;
    }
}
let T = (e) => {
    let n,
        { channelId: r, element: i, attributes: o, children: p } = e,
        I = (0, u.vt)(),
        T = (0, u.UE)(),
        b = (0, u._7)(),
        { optionType: y, errored: S } = (0, c.cj)(
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
        A = (0, c.e7)([h.Z], () => h.Z.getUpload(r, i.optionName, _.d.SlashCommand), [r, i.optionName]),
        N = i.children[i.children.length - 1],
        C = null != N && g.LC.isText(N) && N.text.endsWith('\n'),
        R = l()(v.inlineElement, v.optionPill, {
            [v.selectedPill]: T && I,
            [v.erroredPill]: (!T || !I) && S
        }),
        O = s.useCallback(() => {
            !g.bN.isVoid(b, i) && m.Q.selectCommandOption(b, i.optionName, !0);
        }, [b, i]);
    return (
        (n =
            y === d.jw.ATTACHMENT
                ? (null == A ? void 0 : A.filename) != null
                    ? (0, a.jsxs)('span', {
                          className: l()(v.optionPillValue, v.attachmentFilename),
                          contentEditable: !1,
                          children: [A.filename, p]
                      })
                    : (0, a.jsxs)('span', {
                          className: l()(v.optionPillValue, v.readonlyPillValue),
                          contentEditable: !1,
                          children: [E.intl.string(E.t.GRdFnp), p]
                      })
                : (0, a.jsxs)('span', {
                      className: v.optionPillValue,
                      children: [
                          p,
                          C
                              ? (0, a.jsx)('span', {
                                    className: v.newLine,
                                    contentEditable: !1
                                })
                              : null
                      ]
                  })),
        (0, a.jsxs)('span', {
            ...o,
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
