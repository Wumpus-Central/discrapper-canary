n.d(t, { Z: () => y }), n(953529);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(28664),
    c = n(481060),
    u = n(965386),
    d = n(271383),
    f = n(987826),
    p = n(826298),
    _ = n(761652),
    m = n(388032),
    h = n(804901);
let g = 200;
function E(e, t, n) {
    return (0, r.jsx)(
        f.Z,
        {
            className: h.option,
            name: e.displayName,
            state: t,
            onClick: n,
        },
        e.name,
    );
}
function b(e) {
    let { command: t, optionStates: n, onOptionClick: a } = e,
        {
            requiredOptions: o,
            setOptionalOptions: s,
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
            className: h.optionalNames,
            children: u.map((e) =>
                (0, r.jsx)(
                    c.Text,
                    {
                        variant: "text-sm/normal",
                        children: e.displayName,
                    },
                    e.name,
                ),
            ),
        }),
        f = o.map((e) => E(e, null == n ? void 0 : n[e.name], a)),
        p =
            s.length > 0
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(c.Heading, {
                              className: h.optionalHeader,
                              variant: "heading-deprecated-12/semibold",
                              children: m.intl.string(m.t["5C107K"]),
                          }),
                          s.map((e) => E(e, null == n ? void 0 : n[e.name], a)),
                      ],
                  })
                : null,
        _ =
            u.length > 0
                ? (0, r.jsx)(l.u, {
                      __unsupportedReactNodeAsText: d,
                      "aria-label": !1,
                      delay: g,
                      children: (0, r.jsx)(c.Text, {
                          className: h.optionalCount,
                          color: "text-muted",
                          variant: "text-sm/normal",
                          children:
                              0 === s.length
                                  ? m.intl.formatToPlainString(m.t["0mI72g"], { count: u.length })
                                  : m.intl.formatToPlainString(m.t.BP8N0K, { count: u.length }),
                      }),
                  })
                : null;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            f,
            null != p || null != _
                ? (0, r.jsxs)("div", {
                      className: h.optionals,
                      children: [p, _],
                  })
                : null,
        ],
    });
}
function y(e) {
    var t, n, a;
    let l,
        {
            command: c,
            activeOptionName: f,
            channel: m,
            showOptions: g,
            showImage: E,
            optionStates: y,
            onOptionClick: O,
            section: v,
            isSelectable: S = !0,
        } = e,
        I = i.useMemo(() => {
            var e;
            return null == c || null == (e = c.options) ? void 0 : e.find((e) => e.name === f);
        }, [f, c]),
        T = null != f ? (null == y ? void 0 : y[f]) : null;
    l =
        null != T && (null == (t = T.lastValidationResult) ? void 0 : t.success) === !1
            ? null != (n = T.lastValidationResult.error)
                ? n
                : ""
            : null;
    let C = E && null != v ? (0, p.ky)(v) : null,
        A = (0, s.e7)([d.ZP], () => {
            if (null != m.guild_id && (null == v ? void 0 : v.botId) != null) {
                var e;
                return null == (e = d.ZP.getMember(m.guild_id, v.botId)) ? void 0 : e.nick;
            }
        });
    return (0, r.jsxs)("div", {
        className: o()(h.wrapper, S ? null : h.disabled),
        children: [
            null != C
                ? (0, r.jsx)(C, {
                      className: h.image,
                      channel: m,
                      section: v,
                      width: 32,
                      height: 32,
                  })
                : null,
            (0, r.jsxs)("div", {
                className: h.infoWrapper,
                children: [
                    (0, r.jsxs)("div", {
                        className: h.usageWrapper,
                        children: [
                            (0, r.jsx)(u.BR, {
                                className: h.title,
                                children: _.GI + c.displayName,
                            }),
                            g
                                ? (0, r.jsx)(b, {
                                      command: c,
                                      optionStates: y,
                                      onOptionClick: O,
                                  })
                                : null,
                        ],
                    }),
                    (0, r.jsx)(u.wL, {
                        className: o()(h.description, null != l ? h.error : null),
                        children:
                            null != (a = null != l ? l : null == I ? void 0 : I.displayDescription)
                                ? a
                                : c.displayDescription,
                    }),
                ],
            }),
            (0, r.jsx)(u.dY, {
                className: h.source,
                children: null != A ? A : null == v ? void 0 : v.name,
            }),
        ],
    });
}
