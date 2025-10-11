n.d(t, { Z: () => E }), n(953529);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(28664),
    l = n(481060),
    c = n(965386),
    u = n(987826),
    d = n(826298),
    f = n(761652),
    _ = n(388032),
    p = n(685532);
let h = 200;
function m(e, t, n) {
    return (0, r.jsx)(
        u.Z,
        {
            className: p.option,
            name: e.displayName,
            state: t,
            onClick: n,
        },
        e.name,
    );
}
function g(e) {
    let { command: t, optionStates: n, onOptionClick: a } = e,
        {
            requiredOptions: o,
            setOptionalOptions: c,
            unsetOptionalOptions: u,
        } = i.useMemo(() => {
            var e, r, i, a;
            let o = null != (i = null == (e = t.options) ? void 0 : e.filter((e) => e.required)) ? i : [],
                s = null != (a = null == (r = t.options) ? void 0 : r.filter((e) => !e.required)) ? a : [];
            return {
                requiredOptions: o,
                setOptionalOptions: s.filter((e) => {
                    var t;
                    return null == n || null == (t = n[e.name]) ? void 0 : t.hasValue;
                }),
                unsetOptionalOptions: s.filter((e) => {
                    var t;
                    return !(null == n || null == (t = n[e.name]) ? void 0 : t.hasValue);
                }),
            };
        }, [t.options, n]),
        d = (0, r.jsx)("div", {
            className: p.optionalNames,
            children: u.map((e) =>
                (0, r.jsx)(
                    l.Text,
                    {
                        variant: "text-sm/normal",
                        children: e.displayName,
                    },
                    e.name,
                ),
            ),
        }),
        f = o.map((e) => m(e, null == n ? void 0 : n[e.name], a)),
        g =
            c.length > 0
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(l.Heading, {
                              className: p.optionalHeader,
                              variant: "heading-deprecated-12/semibold",
                              children: _.intl.string(_.t["5C107O"]),
                          }),
                          c.map((e) => m(e, null == n ? void 0 : n[e.name], a)),
                      ],
                  })
                : null,
        E =
            u.length > 0
                ? (0, r.jsx)(s.u, {
                      __unsupportedReactNodeAsText: d,
                      "aria-label": !1,
                      delay: h,
                      children: (0, r.jsx)(l.Text, {
                          className: p.optionalCount,
                          color: "text-muted",
                          variant: "text-sm/normal",
                          children:
                              0 === c.length
                                  ? _.intl.formatToPlainString(_.t["0mI72t"], { count: u.length })
                                  : _.intl.formatToPlainString(_.t.BP8N0N, { count: u.length }),
                      }),
                  })
                : null;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            f,
            null != g || null != E
                ? (0, r.jsxs)("div", {
                      className: p.optionals,
                      children: [g, E],
                  })
                : null,
        ],
    });
}
function E(e) {
    var t, n, a;
    let s,
        {
            command: l,
            activeOptionName: u,
            channel: _,
            showOptions: h,
            showImage: m,
            optionStates: E,
            onOptionClick: b,
            section: y,
            isSelectable: O = !0,
        } = e,
        v = i.useMemo(() => {
            var e;
            return null == l || null == (e = l.options) ? void 0 : e.find((e) => e.name === u);
        }, [u, l]),
        I = null != u ? (null == E ? void 0 : E[u]) : null;
    s =
        null != I && (null == (t = I.lastValidationResult) ? void 0 : t.success) === !1
            ? null != (n = I.lastValidationResult.error)
                ? n
                : ""
            : null;
    let T = m && null != y ? (0, d.ky)(y) : null;
    return (0, r.jsxs)("div", {
        className: o()(p.wrapper, O ? null : p.disabled),
        children: [
            null != T
                ? (0, r.jsx)(T, {
                      className: p.image,
                      channel: _,
                      section: y,
                      width: 32,
                      height: 32,
                  })
                : null,
            (0, r.jsxs)("div", {
                className: p.infoWrapper,
                children: [
                    (0, r.jsxs)("div", {
                        className: p.usageWrapper,
                        children: [
                            (0, r.jsx)(c.BR, {
                                className: p.title,
                                children: f.GI + l.displayName,
                            }),
                            h
                                ? (0, r.jsx)(g, {
                                      command: l,
                                      optionStates: E,
                                      onOptionClick: b,
                                  })
                                : null,
                        ],
                    }),
                    (0, r.jsx)(c.wL, {
                        className: o()(p.description, null != s ? p.error : null),
                        children:
                            null != (a = null != s ? s : null == v ? void 0 : v.displayDescription)
                                ? a
                                : l.displayDescription,
                    }),
                ],
            }),
            (0, r.jsx)(c.dY, {
                className: p.source,
                children: null == y ? void 0 : y.name,
            }),
        ],
    });
}
