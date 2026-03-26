"use strict";
n.d(t, { A: () => A });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(311907),
    l = n(990078),
    u = n(397927),
    c = n(557158),
    d = n(696451),
    _ = n(963146),
    f = n(664929);
n(827669);
var p = n(985018),
    h = n(852196);
let m = 200;
function E(e, t, n) {
    return (0, r.jsx)(_.A, { className: h.uK, name: e.displayName, state: t, onClick: n }, e.name);
}
function g(e) {
    let { command: t, optionStates: n, onOptionClick: s } = e,
        {
            requiredOptions: a,
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
            className: h.$2,
            children: c.map((e) => (0, r.jsx)(u.Text, { variant: "text-sm/normal", children: e.displayName }, e.name)),
        }),
        _ = a.map((e) => E(e, n?.[e.name], s)),
        f =
            o.length > 0
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(u.Heading, {
                              className: h.Ki,
                              variant: "heading-deprecated-12/semibold",
                              children: p.intl.string(p.t["5C107K"]),
                          }),
                          o.map((e) => E(e, n?.[e.name], s)),
                      ],
                  })
                : null,
        g =
            c.length > 0
                ? (0, r.jsx)(l.m, {
                      __unsupportedReactNodeAsText: d,
                      "aria-label": !1,
                      delay: m,
                      children: (0, r.jsx)(u.Text, {
                          className: h.kP,
                          color: "text-muted",
                          variant: "text-sm/normal",
                          children:
                              0 === o.length
                                  ? p.intl.formatToPlainString(p.t["0mI72g"], { count: c.length })
                                  : p.intl.formatToPlainString(p.t.BP8N0K, { count: c.length }),
                      }),
                  })
                : null;
    return (0, r.jsxs)(r.Fragment, {
        children: [_, null != f || null != g ? (0, r.jsxs)("div", { className: h.gM, children: [f, g] }) : null],
    });
}
function A(e) {
    let t,
        {
            command: n,
            activeOptionName: s,
            channel: l,
            showOptions: u,
            showImage: _,
            optionStates: p,
            onOptionClick: m,
            section: E,
            isSelectable: A = !0,
        } = e,
        I = i.useMemo(() => n?.options?.find((e) => e.name === s), [s, n]),
        T = null != s ? p?.[s] : null;
    t = null != T && T.lastValidationResult?.success === !1 ? (T.lastValidationResult.error ?? "") : null;
    let S = _ && null != E ? (0, f.Rg)(E) : null,
        y = (0, o.bG)([d.Ay], () => {
            if (null != l.guild_id && E?.botId != null) return d.Ay.getMember(l.guild_id, E.botId)?.nick;
        });
    return (0, r.jsxs)("div", {
        className: a()(h.iE, A ? null : h.r9),
        children: [
            null != S ? (0, r.jsx)(S, { className: h.Sl, channel: l, section: E, width: 32, height: 32 }) : null,
            (0, r.jsxs)("div", {
                className: h.QR,
                children: [
                    (0, r.jsxs)("div", {
                        className: h.nY,
                        children: [
                            (0, r.jsx)(c.dB, { className: h.DD, children: "/" + n.displayName }),
                            u ? (0, r.jsx)(g, { command: n, optionStates: p, onOptionClick: m }) : null,
                        ],
                    }),
                    (0, r.jsx)(c.Nd, {
                        className: a()(h.h_, null != t ? h.z3 : null),
                        children: t ?? I?.displayDescription ?? n.displayDescription,
                    }),
                ],
            }),
            (0, r.jsx)(c.Aq, { className: h.sP, children: y ?? E?.name }),
        ],
    });
}
