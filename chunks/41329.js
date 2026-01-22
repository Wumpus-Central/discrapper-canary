n.d(t, { A: () => b }), n(228524);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(990078),
    c = n(397927),
    u = n(557158),
    d = n(696451),
    f = n(963146),
    p = n(664929);
n(827669);
var _ = n(985018),
    h = n(27101);
let m = 200;
function g(e, t, n) {
    return (0, r.jsx)(
        f.A,
        {
            className: h.uK,
            name: e.displayName,
            state: t,
            onClick: n,
        },
        e.name,
    );
}
function E(e) {
    let { command: t, optionStates: n, onOptionClick: a } = e,
        {
            requiredOptions: s,
            setOptionalOptions: o,
            unsetOptionalOptions: u,
        } = i.useMemo(() => {
            var e, r, i, a;
            let s = null != (e = null == (i = t.options) ? void 0 : i.filter((e) => e.required)) ? e : [],
                o = null != (r = null == (a = t.options) ? void 0 : a.filter((e) => !e.required)) ? r : [];
            return {
                requiredOptions: s,
                setOptionalOptions: o.filter((e) => {
                    var t;
                    return null == n || null == (t = n[e.name]) ? void 0 : t.hasValue;
                }),
                unsetOptionalOptions: o.filter((e) => {
                    var t;
                    return !(null == n || null == (t = n[e.name]) ? void 0 : t.hasValue);
                }),
            };
        }, [t.options, n]),
        d = (0, r.jsx)("div", {
            className: h.$2,
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
        f = s.map((e) => g(e, null == n ? void 0 : n[e.name], a)),
        p =
            o.length > 0
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(c.Heading, {
                              className: h.Ki,
                              variant: "heading-deprecated-12/semibold",
                              children: _.intl.string(_.t["5C107K"]),
                          }),
                          o.map((e) => g(e, null == n ? void 0 : n[e.name], a)),
                      ],
                  })
                : null,
        E =
            u.length > 0
                ? (0, r.jsx)(l.m, {
                      __unsupportedReactNodeAsText: d,
                      "aria-label": !1,
                      delay: m,
                      children: (0, r.jsx)(c.Text, {
                          className: h.kP,
                          color: "text-muted",
                          variant: "text-sm/normal",
                          children:
                              0 === o.length
                                  ? _.intl.formatToPlainString(_.t["0mI72g"], { count: u.length })
                                  : _.intl.formatToPlainString(_.t.BP8N0K, { count: u.length }),
                      }),
                  })
                : null;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            f,
            null != p || null != E
                ? (0, r.jsxs)("div", {
                      className: h.gM,
                      children: [p, E],
                  })
                : null,
        ],
    });
}
function b(e) {
    var t, n, a;
    let l,
        {
            command: c,
            activeOptionName: f,
            channel: _,
            showOptions: m,
            showImage: g,
            optionStates: b,
            onOptionClick: y,
            section: O,
            isSelectable: A = !0,
        } = e,
        v = i.useMemo(() => {
            var e;
            return null == c || null == (e = c.options) ? void 0 : e.find((e) => e.name === f);
        }, [f, c]),
        S = null != f ? (null == b ? void 0 : b[f]) : null;
    l =
        null != S && (null == (n = S.lastValidationResult) ? void 0 : n.success) === !1
            ? null != (a = S.lastValidationResult.error)
                ? a
                : ""
            : null;
    let I = g && null != O ? (0, p.Rg)(O) : null,
        T = (0, o.bG)([d.Ay], () => {
            if (null != _.guild_id && (null == O ? void 0 : O.botId) != null) {
                var e;
                return null == (e = d.Ay.getMember(_.guild_id, O.botId)) ? void 0 : e.nick;
            }
        });
    return (0, r.jsxs)("div", {
        className: s()(h.iE, A ? null : h.r9),
        children: [
            null != I
                ? (0, r.jsx)(I, {
                      className: h.Sl,
                      channel: _,
                      section: O,
                      width: 32,
                      height: 32,
                  })
                : null,
            (0, r.jsxs)("div", {
                className: h.QR,
                children: [
                    (0, r.jsxs)("div", {
                        className: h.nY,
                        children: [
                            (0, r.jsx)(u.dB, {
                                className: h.DD,
                                children: "/" + c.displayName,
                            }),
                            m
                                ? (0, r.jsx)(E, {
                                      command: c,
                                      optionStates: b,
                                      onOptionClick: y,
                                  })
                                : null,
                        ],
                    }),
                    (0, r.jsx)(u.Nd, {
                        className: s()(h.h_, null != l ? h.z3 : null),
                        children:
                            null != (t = null != l ? l : null == v ? void 0 : v.displayDescription)
                                ? t
                                : c.displayDescription,
                    }),
                ],
            }),
            (0, r.jsx)(u.Aq, {
                className: h.sP,
                children: null != T ? T : null == O ? void 0 : O.name,
            }),
        ],
    });
}
