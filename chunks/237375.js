n.d(t, { Z: () => y }), n(953529);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(28664),
    c = n(481060),
    u = n(965386),
    d = n(271383),
    f = n(987826),
    _ = n(826298),
    p = n(761652),
    h = n(388032),
    m = n(685532);
let g = 200;
function E(e, t, n) {
    return (0, r.jsx)(
        f.Z,
        {
            className: m.option,
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
            className: m.optionalNames,
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
        _ =
            s.length > 0
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(c.Heading, {
                              className: m.optionalHeader,
                              variant: "heading-deprecated-12/semibold",
                              children: h.intl.string(h.t["5C107K"]),
                          }),
                          s.map((e) => E(e, null == n ? void 0 : n[e.name], a)),
                      ],
                  })
                : null,
        p =
            u.length > 0
                ? (0, r.jsx)(l.u, {
                      __unsupportedReactNodeAsText: d,
                      "aria-label": !1,
                      delay: g,
                      children: (0, r.jsx)(c.Text, {
                          className: m.optionalCount,
                          color: "text-muted",
                          variant: "text-sm/normal",
                          children:
                              0 === s.length
                                  ? h.intl.formatToPlainString(h.t["0mI72g"], { count: u.length })
                                  : h.intl.formatToPlainString(h.t.BP8N0K, { count: u.length }),
                      }),
                  })
                : null;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            f,
            null != _ || null != p
                ? (0, r.jsxs)("div", {
                      className: m.optionals,
                      children: [_, p],
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
            channel: h,
            showOptions: g,
            showImage: E,
            optionStates: y,
            onOptionClick: O,
            section: v,
            isSelectable: I = !0,
        } = e,
        T = i.useMemo(() => {
            var e;
            return null == c || null == (e = c.options) ? void 0 : e.find((e) => e.name === f);
        }, [f, c]),
        S = null != f ? (null == y ? void 0 : y[f]) : null;
    l =
        null != S && (null == (t = S.lastValidationResult) ? void 0 : t.success) === !1
            ? null != (n = S.lastValidationResult.error)
                ? n
                : ""
            : null;
    let A = E && null != v ? (0, _.ky)(v) : null,
        C = (0, s.e7)([d.ZP], () => {
            if (null != h.guild_id && (null == v ? void 0 : v.botId) != null) {
                var e;
                return null == (e = d.ZP.getMember(h.guild_id, v.botId)) ? void 0 : e.nick;
            }
        });
    return (0, r.jsxs)("div", {
        className: o()(m.wrapper, I ? null : m.disabled),
        children: [
            null != A
                ? (0, r.jsx)(A, {
                      className: m.image,
                      channel: h,
                      section: v,
                      width: 32,
                      height: 32,
                  })
                : null,
            (0, r.jsxs)("div", {
                className: m.infoWrapper,
                children: [
                    (0, r.jsxs)("div", {
                        className: m.usageWrapper,
                        children: [
                            (0, r.jsx)(u.BR, {
                                className: m.title,
                                children: p.GI + c.displayName,
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
                        className: o()(m.description, null != l ? m.error : null),
                        children:
                            null != (a = null != l ? l : null == T ? void 0 : T.displayDescription)
                                ? a
                                : c.displayDescription,
                    }),
                ],
            }),
            (0, r.jsx)(u.dY, {
                className: m.source,
                children: null != C ? C : null == v ? void 0 : v.name,
            }),
        ],
    });
}
