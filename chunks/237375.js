n.d(t, { Z: () => E });
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    l = n(965386),
    u = n(118012),
    c = n(987826),
    d = n(826298),
    f = n(665692),
    _ = n(388032),
    p = n(283933);
let h = 200;
function m(e, t, n) {
    return (0, i.jsx)(
        c.Z,
        {
            className: p.option,
            name: e.displayName,
            state: t,
            onClick: n
        },
        e.name
    );
}
function g(e) {
    let { command: t, optionStates: n, onOptionClick: a } = e,
        {
            requiredOptions: s,
            setOptionalOptions: l,
            unsetOptionalOptions: c
        } = r.useMemo(() => {
            var e, i, r, a;
            let s = null !== (r = null === (e = t.options) || void 0 === e ? void 0 : e.filter((e) => e.required)) && void 0 !== r ? r : [],
                o = null !== (a = null === (i = t.options) || void 0 === i ? void 0 : i.filter((e) => !e.required)) && void 0 !== a ? a : [];
            return {
                requiredOptions: s,
                setOptionalOptions: o.filter((e) => {
                    var t;
                    return null == n ? void 0 : null === (t = n[e.name]) || void 0 === t ? void 0 : t.hasValue;
                }),
                unsetOptionalOptions: o.filter((e) => {
                    var t;
                    return !(null == n ? void 0 : null === (t = n[e.name]) || void 0 === t ? void 0 : t.hasValue);
                })
            };
        }, [t.options, n]),
        d = (0, i.jsx)('div', {
            className: p.optionalNames,
            children: c.map((e) =>
                (0, i.jsx)(
                    o.Text,
                    {
                        variant: 'text-sm/normal',
                        children: e.displayName
                    },
                    e.name
                )
            )
        }),
        f = s.map((e) => m(e, null == n ? void 0 : n[e.name], a)),
        g =
            l.length > 0
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(o.X6q, {
                              className: p.optionalHeader,
                              variant: 'heading-deprecated-12/semibold',
                              children: _.intl.string(_.t['5C107O'])
                          }),
                          l.map((e) => m(e, null == n ? void 0 : n[e.name], a))
                      ]
                  })
                : null,
        E =
            c.length > 0
                ? (0, i.jsx)(o.ua7, {
                      text: d,
                      'aria-label': !1,
                      delay: h,
                      children: (e) =>
                          (0, i.jsx)(u.Z, {
                              className: p.optionalCount,
                              color: u.Z.Colors.MUTED,
                              ...e,
                              children: 0 === l.length ? _.intl.formatToPlainString(_.t['0mI72t'], { count: c.length }) : _.intl.formatToPlainString(_.t.BP8N0N, { count: c.length })
                          })
                  })
                : null;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            f,
            null != g || null != E
                ? (0, i.jsxs)('div', {
                      className: p.optionals,
                      children: [g, E]
                  })
                : null
        ]
    });
}
function E(e) {
    var t, n, a;
    let o,
        { command: u, activeOptionName: c, channel: _, showOptions: h, showImage: m, optionStates: E, onOptionClick: v, section: y, isSelectable: I = !0 } = e,
        T = r.useMemo(() => {
            var e;
            return null == u ? void 0 : null === (e = u.options) || void 0 === e ? void 0 : e.find((e) => e.name === c);
        }, [c, u]),
        b = null != c ? (null == E ? void 0 : E[c]) : null;
    o = null != b && (null === (t = b.lastValidationResult) || void 0 === t ? void 0 : t.success) === !1 ? (null !== (n = b.lastValidationResult.error) && void 0 !== n ? n : '') : null;
    let S = m && null != y ? (0, d.ky)(y) : null;
    return (0, i.jsxs)('div', {
        className: s()(p.wrapper, I ? null : p.disabled),
        children: [
            null != S
                ? (0, i.jsx)(S, {
                      className: p.image,
                      channel: _,
                      section: y,
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
                            (0, i.jsx)(l.BR, {
                                className: p.title,
                                children: f.GI + u.displayName
                            }),
                            h
                                ? (0, i.jsx)(g, {
                                      command: u,
                                      optionStates: E,
                                      onOptionClick: v
                                  })
                                : null
                        ]
                    }),
                    (0, i.jsx)(l.wL, {
                        className: s()(p.description, null != o ? p.error : null),
                        children: null !== (a = null != o ? o : null == T ? void 0 : T.displayDescription) && void 0 !== a ? a : u.displayDescription
                    })
                ]
            }),
            (0, i.jsx)(l.dY, {
                className: p.source,
                children: null == y ? void 0 : y.name
            })
        ]
    });
}
