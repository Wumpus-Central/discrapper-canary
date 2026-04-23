"use strict";
n.d(t, { A: () => A });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(311907),
    l = n(990078),
    u = n(834730),
    c = n(534514),
    d = n(557158),
    _ = n(696451),
    f = n(963146),
    p = n(664929);
n(827669);
var h = n(985018),
    E = n(577332);
function m(e, t, n) {
    return (0, r.jsx)(f.A, { className: E.uK, name: e.displayName, state: t, onClick: n }, e.name);
}
function g(e) {
    let { command: t, optionStates: n, onOptionClick: s } = e,
        {
            requiredOptions: a,
            setOptionalOptions: o,
            unsetOptionalOptions: d,
        } = i.useMemo(() => {
            let e = t.options?.filter((e) => e.required) ?? [],
                r = t.options?.filter((e) => !e.required) ?? [];
            return {
                requiredOptions: e,
                setOptionalOptions: r.filter((e) => n?.[e.name]?.hasValue),
                unsetOptionalOptions: r.filter((e) => !n?.[e.name]?.hasValue),
            };
        }, [t.options, n]),
        _ = (0, r.jsx)("div", {
            className: E.$2,
            children: d.map((e) => (0, r.jsx)(u.E, { variant: "text-sm/normal", children: e.displayName }, e.name)),
        }),
        f = a.map((e) => m(e, n?.[e.name], s)),
        p =
            o.length > 0
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(c.D, {
                              className: E.Ki,
                              variant: "heading-deprecated-12/semibold",
                              children: h.intl.string(h.t["5C107K"]),
                          }),
                          o.map((e) => m(e, n?.[e.name], s)),
                      ],
                  })
                : null,
        g =
            d.length > 0
                ? (0, r.jsx)(l.m, {
                      __unsupportedReactNodeAsText: _,
                      "aria-label": !1,
                      delay: 200,
                      children: (0, r.jsx)(u.E, {
                          className: E.kP,
                          color: "text-muted",
                          variant: "text-sm/normal",
                          children:
                              0 === o.length
                                  ? h.intl.formatToPlainString(h.t["0mI72g"], { count: d.length })
                                  : h.intl.formatToPlainString(h.t.BP8N0K, { count: d.length }),
                      }),
                  })
                : null;
    return (0, r.jsxs)(r.Fragment, {
        children: [f, null != p || null != g ? (0, r.jsxs)("div", { className: E.gM, children: [p, g] }) : null],
    });
}
function A(e) {
    let t,
        {
            command: n,
            activeOptionName: s,
            channel: l,
            showOptions: u,
            showImage: c,
            optionStates: f,
            onOptionClick: h,
            section: m,
            isSelectable: A = !0,
        } = e,
        I = i.useMemo(() => n?.options?.find((e) => e.name === s), [s, n]),
        T = null != s ? f?.[s] : null;
    t = null != T && T.lastValidationResult?.success === !1 ? (T.lastValidationResult.error ?? "") : null;
    let S = c && null != m ? (0, p.Rg)(m) : null,
        y = (0, o.bG)([_.Ay], () => {
            if (null != l.guild_id && m?.botId != null) return _.Ay.getMember(l.guild_id, m.botId)?.nick;
        });
    return (0, r.jsxs)("div", {
        className: a()(E.iE, A ? null : E.r9),
        children: [
            null != S ? (0, r.jsx)(S, { className: E.Sl, channel: l, section: m, width: 32, height: 32 }) : null,
            (0, r.jsxs)("div", {
                className: E.QR,
                children: [
                    (0, r.jsxs)("div", {
                        className: E.nY,
                        children: [
                            (0, r.jsx)(d.dB, { className: E.DD, children: "/" + n.displayName }),
                            u ? (0, r.jsx)(g, { command: n, optionStates: f, onOptionClick: h }) : null,
                        ],
                    }),
                    (0, r.jsx)(d.Nd, {
                        className: a()(E.h_, null != t ? E.z3 : null),
                        children: t ?? I?.displayDescription ?? n.displayDescription,
                    }),
                ],
            }),
            (0, r.jsx)(d.Aq, { className: E.sP, children: y ?? m?.name }),
        ],
    });
}
