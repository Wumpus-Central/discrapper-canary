"use strict";
n.d(t, { A: () => A });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(311907),
    o = n(990078),
    c = n(834730),
    u = n(534514),
    d = n(557158),
    h = n(696451),
    m = n(963146),
    p = n(664929);
n(827669);
var f = n(985018),
    g = n(577332);
function _(e, t, n) {
    return (0, i.jsx)(m.A, { className: g.uK, name: e.displayName, state: t, onClick: n }, e.name);
}
function x(e) {
    let { command: t, optionStates: n, onOptionClick: s } = e,
        {
            requiredOptions: r,
            setOptionalOptions: a,
            unsetOptionalOptions: d,
        } = l.useMemo(() => {
            let e = t.options?.filter((e) => e.required) ?? [],
                i = t.options?.filter((e) => !e.required) ?? [];
            return {
                requiredOptions: e,
                setOptionalOptions: i.filter((e) => n?.[e.name]?.hasValue),
                unsetOptionalOptions: i.filter((e) => !n?.[e.name]?.hasValue),
            };
        }, [t.options, n]),
        h = (0, i.jsx)("div", {
            className: g.$2,
            children: d.map((e) => (0, i.jsx)(c.E, { variant: "text-sm/normal", children: e.displayName }, e.name)),
        }),
        m = r.map((e) => _(e, n?.[e.name], s)),
        p =
            a.length > 0
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(u.D, {
                              className: g.Ki,
                              variant: "heading-deprecated-12/semibold",
                              children: f.intl.string(f.t["5C107K"]),
                          }),
                          a.map((e) => _(e, n?.[e.name], s)),
                      ],
                  })
                : null,
        x =
            d.length > 0
                ? (0, i.jsx)(o.m, {
                      __unsupportedReactNodeAsText: h,
                      "aria-label": !1,
                      delay: 200,
                      children: (0, i.jsx)(c.E, {
                          className: g.kP,
                          color: "text-muted",
                          variant: "text-sm/normal",
                          children:
                              0 === a.length
                                  ? f.intl.formatToPlainString(f.t["0mI72g"], { count: d.length })
                                  : f.intl.formatToPlainString(f.t.BP8N0K, { count: d.length }),
                      }),
                  })
                : null;
    return (0, i.jsxs)(i.Fragment, {
        children: [m, null != p || null != x ? (0, i.jsxs)("div", { className: g.gM, children: [p, x] }) : null],
    });
}
function A(e) {
    let t,
        {
            command: n,
            activeOptionName: s,
            channel: o,
            showOptions: c,
            showImage: u,
            optionStates: m,
            onOptionClick: f,
            section: _,
            isSelectable: A = !0,
        } = e,
        C = l.useMemo(() => n?.options?.find((e) => e.name === s), [s, n]),
        E = null != s ? m?.[s] : null;
    t = null != E && E.lastValidationResult?.success === !1 ? (E.lastValidationResult.error ?? "") : null;
    let I = u && null != _ ? (0, p.Rg)(_) : null,
        v = (0, a.bG)([h.Ay], () => {
            if (null != o.guild_id && _?.botId != null) return h.Ay.getMember(o.guild_id, _.botId)?.nick;
        });
    return (0, i.jsxs)("div", {
        className: r()(g.iE, A ? null : g.r9),
        children: [
            null != I ? (0, i.jsx)(I, { className: g.Sl, channel: o, section: _, width: 32, height: 32 }) : null,
            (0, i.jsxs)("div", {
                className: g.QR,
                children: [
                    (0, i.jsxs)("div", {
                        className: g.nY,
                        children: [
                            (0, i.jsx)(d.dB, { className: g.DD, children: "/" + n.displayName }),
                            c ? (0, i.jsx)(x, { command: n, optionStates: m, onOptionClick: f }) : null,
                        ],
                    }),
                    (0, i.jsx)(d.Nd, {
                        className: r()(g.h_, null != t ? g.z3 : null),
                        children: t ?? C?.displayDescription ?? n.displayDescription,
                    }),
                ],
            }),
            (0, i.jsx)(d.Aq, { className: g.sP, children: v ?? _?.name }),
        ],
    });
}
