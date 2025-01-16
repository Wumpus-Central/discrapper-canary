r.d(n, {
    Z: function () {
        return v;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(120356),
    o = r.n(s),
    l = r(481060),
    u = r(965386),
    c = r(118012),
    d = r(987826),
    f = r(826298),
    _ = r(665692),
    h = r(388032),
    p = r(102543);
let m = 200;
function g(e, n, r) {
    return (0, i.jsx)(
        d.Z,
        {
            className: p.option,
            name: e.displayName,
            state: n,
            onClick: r
        },
        e.name
    );
}
function E(e) {
    let { command: n, optionStates: r, onOptionClick: s } = e,
        {
            requiredOptions: o,
            setOptionalOptions: u,
            unsetOptionalOptions: d
        } = a.useMemo(() => {
            var e, i, a, s;
            let o = null !== (a = null === (e = n.options) || void 0 === e ? void 0 : e.filter((e) => e.required)) && void 0 !== a ? a : [],
                l = null !== (s = null === (i = n.options) || void 0 === i ? void 0 : i.filter((e) => !e.required)) && void 0 !== s ? s : [],
                u = l.filter((e) => {
                    var n;
                    return null == r ? void 0 : null === (n = r[e.name]) || void 0 === n ? void 0 : n.hasValue;
                });
            return {
                requiredOptions: o,
                setOptionalOptions: u,
                unsetOptionalOptions: l.filter((e) => {
                    var n;
                    return !(null == r ? void 0 : null === (n = r[e.name]) || void 0 === n ? void 0 : n.hasValue);
                })
            };
        }, [n.options, r]),
        f = (0, i.jsx)('div', {
            className: p.optionalNames,
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
        _ = o.map((e) => g(e, null == r ? void 0 : r[e.name], s)),
        E =
            u.length > 0
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(l.Heading, {
                              className: p.optionalHeader,
                              variant: 'heading-deprecated-12/semibold',
                              children: h.intl.string(h.t['5C107O'])
                          }),
                          u.map((e) => g(e, null == r ? void 0 : r[e.name], s))
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
                              className: p.optionalCount,
                              color: c.Z.Colors.MUTED,
                              ...e,
                              children: 0 === u.length ? h.intl.formatToPlainString(h.t['0mI72t'], { count: d.length }) : h.intl.formatToPlainString(h.t.BP8N0N, { count: d.length })
                          })
                  })
                : null;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            _,
            null != E || null != v
                ? (0, i.jsxs)('div', {
                      className: p.optionals,
                      children: [E, v]
                  })
                : null
        ]
    });
}
function v(e) {
    var n, r, s;
    let l,
        { command: c, activeOptionName: d, channel: h, showOptions: m, showImage: g, optionStates: v, onOptionClick: I, section: T, isSelectable: b = !0 } = e,
        y = a.useMemo(() => {
            var e;
            return null == c ? void 0 : null === (e = c.options) || void 0 === e ? void 0 : e.find((e) => e.name === d);
        }, [d, c]),
        S = null != d ? (null == v ? void 0 : v[d]) : null;
    l = null != S && (null === (n = S.lastValidationResult) || void 0 === n ? void 0 : n.success) === !1 ? (null !== (r = S.lastValidationResult.error) && void 0 !== r ? r : '') : null;
    let A = g && null != T ? (0, f.ky)(T) : null;
    return (0, i.jsxs)('div', {
        className: o()(p.wrapper, b ? null : p.disabled),
        children: [
            null != A
                ? (0, i.jsx)(A, {
                      className: p.image,
                      channel: h,
                      section: T,
                      width: 32,
                      height: 32
                  })
                : null,
            (0, i.jsxs)('div', {
                className: p.infoWrapper,
                children: [
                    (0, i.jsxs)('div', {
                        className: p.usageWrapper,
                        children: [
                            (0, i.jsx)(u.BR, {
                                className: p.title,
                                children: _.GI + c.displayName
                            }),
                            m
                                ? (0, i.jsx)(E, {
                                      command: c,
                                      optionStates: v,
                                      onOptionClick: I
                                  })
                                : null
                        ]
                    }),
                    (0, i.jsx)(u.wL, {
                        className: o()(p.description, null != l ? p.error : null),
                        children: null !== (s = null != l ? l : null == y ? void 0 : y.displayDescription) && void 0 !== s ? s : c.displayDescription
                    })
                ]
            }),
            (0, i.jsx)(u.dY, {
                className: p.source,
                children: null == T ? void 0 : T.name
            })
        ]
    });
}
