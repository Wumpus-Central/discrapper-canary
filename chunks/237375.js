r.d(n, {
    Z: function () {
        return v;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(120356),
    s = r.n(o),
    l = r(481060),
    u = r(965386),
    c = r(118012),
    d = r(987826),
    f = r(826298),
    p = r(665692),
    h = r(388032),
    _ = r(102543);
let m = 200;
function g(e, n, r) {
    return (0, i.jsx)(
        d.Z,
        {
            className: _.option,
            name: e.displayName,
            state: n,
            onClick: r
        },
        e.name
    );
}
function E(e) {
    let { command: n, optionStates: r, onOptionClick: o } = e,
        {
            requiredOptions: s,
            setOptionalOptions: u,
            unsetOptionalOptions: d
        } = a.useMemo(() => {
            var e, i, a, o;
            let s = null !== (a = null === (e = n.options) || void 0 === e ? void 0 : e.filter((e) => e.required)) && void 0 !== a ? a : [],
                l = null !== (o = null === (i = n.options) || void 0 === i ? void 0 : i.filter((e) => !e.required)) && void 0 !== o ? o : [],
                u = l.filter((e) => {
                    var n;
                    return null == r ? void 0 : null === (n = r[e.name]) || void 0 === n ? void 0 : n.hasValue;
                });
            return {
                requiredOptions: s,
                setOptionalOptions: u,
                unsetOptionalOptions: l.filter((e) => {
                    var n;
                    return !(null == r ? void 0 : null === (n = r[e.name]) || void 0 === n ? void 0 : n.hasValue);
                })
            };
        }, [n.options, r]),
        f = (0, i.jsx)('div', {
            className: _.optionalNames,
            children: d.map((e) =>
                (0, i.jsx)(
                    l.Text,
                    {
                        variant: 'text-sm/normal',
                        children: e.displayName
                    },
                    e.name
                )
            )
        }),
        p = s.map((e) => g(e, null == r ? void 0 : r[e.name], o)),
        E =
            u.length > 0
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(l.Heading, {
                              className: _.optionalHeader,
                              variant: 'heading-deprecated-12/semibold',
                              children: h.intl.string(h.t['5C107O'])
                          }),
                          u.map((e) => g(e, null == r ? void 0 : r[e.name], o))
                      ]
                  })
                : null,
        v =
            d.length > 0
                ? (0, i.jsx)(l.Tooltip, {
                      text: f,
                      'aria-label': !1,
                      delay: m,
                      children: (e) =>
                          (0, i.jsx)(c.Z, {
                              className: _.optionalCount,
                              color: c.Z.Colors.MUTED,
                              ...e,
                              children: 0 === u.length ? h.intl.formatToPlainString(h.t['0mI72t'], { count: d.length }) : h.intl.formatToPlainString(h.t.BP8N0N, { count: d.length })
                          })
                  })
                : null;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            p,
            null != E || null != v
                ? (0, i.jsxs)('div', {
                      className: _.optionals,
                      children: [E, v]
                  })
                : null
        ]
    });
}
function v(e) {
    var n, r, o;
    let l,
        { command: c, activeOptionName: d, channel: h, showOptions: m, showImage: g, optionStates: v, onOptionClick: y, section: b, isSelectable: I = !0 } = e,
        T = a.useMemo(() => {
            var e;
            return null == c ? void 0 : null === (e = c.options) || void 0 === e ? void 0 : e.find((e) => e.name === d);
        }, [d, c]),
        S = null != d ? (null == v ? void 0 : v[d]) : null;
    l = null != S && (null === (n = S.lastValidationResult) || void 0 === n ? void 0 : n.success) === !1 ? (null !== (r = S.lastValidationResult.error) && void 0 !== r ? r : '') : null;
    let A = g && null != b ? (0, f.ky)(b) : null;
    return (0, i.jsxs)('div', {
        className: s()(_.wrapper, I ? null : _.disabled),
        children: [
            null != A
                ? (0, i.jsx)(A, {
                      className: _.image,
                      channel: h,
                      section: b,
                      width: 32,
                      height: 32
                  })
                : null,
            (0, i.jsxs)('div', {
                className: _.infoWrapper,
                children: [
                    (0, i.jsxs)('div', {
                        className: _.usageWrapper,
                        children: [
                            (0, i.jsx)(u.BR, {
                                className: _.title,
                                children: p.GI + c.displayName
                            }),
                            m
                                ? (0, i.jsx)(E, {
                                      command: c,
                                      optionStates: v,
                                      onOptionClick: y
                                  })
                                : null
                        ]
                    }),
                    (0, i.jsx)(u.wL, {
                        className: s()(_.description, null != l ? _.error : null),
                        children: null !== (o = null != l ? l : null == T ? void 0 : T.displayDescription) && void 0 !== o ? o : c.displayDescription
                    })
                ]
            }),
            (0, i.jsx)(u.dY, {
                className: _.source,
                children: null == b ? void 0 : b.name
            })
        ]
    });
}
