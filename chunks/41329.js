"use strict";
n.d(t, { A: () => I });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(990078),
    u = n(397927),
    c = n(557158),
    d = n(696451),
    _ = n(963146),
    f = n(664929);
n(827669);
var h = n(985018),
    p = n(152271);
let g = 200;
function E(e, t, n) {
    return (0, r.jsx)(_.A, { className: p.uK, name: e.displayName, state: t, onClick: n }, e.name);
}
function A(e) {
    let { command: t, optionStates: n, onOptionClick: a } = e,
        {
            requiredOptions: s,
            setOptionalOptions: o,
            unsetOptionalOptions: c,
        } = i.useMemo(() => {
            let e = t.options?.filter((e) => e.required) ?? [],
                r = t.options?.filter((e) => !e.required) ?? [];
            return {
                requiredOptions: e,
                setOptionalOptions: r.filter((e) => n?.[e.name]?.hasValue),
                unsetOptionalOptions: r.filter((e) => !n?.[e.name]?.hasValue),
            };
        }, [t.options, n]),
        d = (0, r.jsx)("div", {
            className: p.$2,
            children: c.map((e) => (0, r.jsx)(u.Text, { variant: "text-sm/normal", children: e.displayName }, e.name)),
        }),
        _ = s.map((e) => E(e, n?.[e.name], a)),
        f =
            o.length > 0
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(u.Heading, {
                              className: p.Ki,
                              variant: "heading-deprecated-12/semibold",
                              children: h.intl.string(h.t["5C107K"]),
                          }),
                          o.map((e) => E(e, n?.[e.name], a)),
                      ],
                  })
                : null,
        A =
            c.length > 0
                ? (0, r.jsx)(l.m, {
                      __unsupportedReactNodeAsText: d,
                      "aria-label": !1,
                      delay: g,
                      children: (0, r.jsx)(u.Text, {
                          className: p.kP,
                          color: "text-muted",
                          variant: "text-sm/normal",
                          children:
                              0 === o.length
                                  ? h.intl.formatToPlainString(h.t["0mI72g"], { count: c.length })
                                  : h.intl.formatToPlainString(h.t.BP8N0K, { count: c.length }),
                      }),
                  })
                : null;
    return (0, r.jsxs)(r.Fragment, {
        children: [_, null != f || null != A ? (0, r.jsxs)("div", { className: p.gM, children: [f, A] }) : null],
    });
}
function I(e) {
    let t,
        {
            command: n,
            activeOptionName: a,
            channel: l,
            showOptions: u,
            showImage: _,
            optionStates: h,
            onOptionClick: g,
            section: E,
            isSelectable: I = !0,
        } = e,
        T = i.useMemo(() => n?.options?.find((e) => e.name === a), [a, n]),
        y = null != a ? h?.[a] : null;
    t = null != y && y.lastValidationResult?.success === !1 ? (y.lastValidationResult.error ?? "") : null;
    let S = _ && null != E ? (0, f.Rg)(E) : null,
        v = (0, o.bG)([d.Ay], () => {
            if (null != l.guild_id && E?.botId != null) return d.Ay.getMember(l.guild_id, E.botId)?.nick;
        });
    return (0, r.jsxs)("div", {
        className: s()(p.iE, I ? null : p.r9),
        children: [
            null != S ? (0, r.jsx)(S, { className: p.Sl, channel: l, section: E, width: 32, height: 32 }) : null,
            (0, r.jsxs)("div", {
                className: p.QR,
                children: [
                    (0, r.jsxs)("div", {
                        className: p.nY,
                        children: [
                            (0, r.jsx)(c.dB, { className: p.DD, children: "/" + n.displayName }),
                            u ? (0, r.jsx)(A, { command: n, optionStates: h, onOptionClick: g }) : null,
                        ],
                    }),
                    (0, r.jsx)(c.Nd, {
                        className: s()(p.h_, null != t ? p.z3 : null),
                        children: t ?? T?.displayDescription ?? n.displayDescription,
                    }),
                ],
            }),
            (0, r.jsx)(c.Aq, { className: p.sP, children: v ?? E?.name }),
        ],
    });
}
