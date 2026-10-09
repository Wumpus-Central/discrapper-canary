l.d(t, { BU: () => A, lt: () => m });
var n = l(477900),
    i = l(582128),
    a = l(189213),
    r = l(858899),
    u = l(331322),
    p = l(371169),
    s = l(733791),
    o = l(298702),
    d = l(706935),
    c = l(248675),
    g = l(660183);
function f(e) {
    let { app: t, title: l, heading: o, body: f, items: A, confirmText: m, onPlainConfirm: b, children: v, ...h } = e,
        N = null != t.rest && A.length > 0,
        [w, y] = i.useState(!0),
        [k, I] = i.useState(!1),
        [C, P] = i.useState(null);
    async function x() {
        (I(!0), P(null));
        let e = await (0, p.YI)(t.projectId, { guildId: t.guildId, alsoRemovePreviewBot: !0 }).catch(() => null);
        (I(!1), e?.ok !== !0)
            ? P(g.intl.string(c.default.PJ2Fkn))
            : ((0, r.P0)({
                  text: g.intl.formatToPlainString(c.default.SNFGxP, {
                      app: t.rest?.appName ?? t.targetAppName,
                      server: t.guildName,
                  }),
                  variant: "success",
              }),
              h.onClose());
    }
    return (0, n.jsx)(a.a, {
        ...h,
        role: "alertdialog",
        title: null == o ? l : (0, s.WX)(o),
        subtitle: f,
        "aria-label": l,
        notice: null == C ? void 0 : { message: C, type: "critical" },
        actions: [
            { text: g.intl.string(g.t["ETE/oC"]), variant: "secondary", onClick: h.onClose },
            {
                text: m,
                variant: "critical-primary",
                loading: k,
                disabled: k,
                onClick: () => {
                    N && w ? x().catch(() => {}) : (b(), h.onClose());
                },
            },
        ],
        children:
            N || null != v
                ? (0, n.jsxs)(u.B, {
                      gap: 16,
                      children: [N ? (0, n.jsx)(d.Yg, { checked: w, onChange: y, items: A }) : null, v],
                  })
                : null,
    });
}
function A(e) {
    let { app: t, ...l } = e;
    return (0, n.jsx)(f, {
        ...l,
        app: t,
        title: g.intl.formatToPlainString(c.default.wVNCN7, { app: t.targetAppName }),
        heading: (0, d.tb)(c.default.wVNCN7, t.targetAppName),
        body: g.intl.string(c.default["tw+iyx"]),
        items: null == t.rest ? [] : (0, o.S6)(t.rest),
    });
}
function m(e) {
    let { app: t, channelId: l, ...i } = e;
    return (0, n.jsx)(f, {
        ...i,
        app: t,
        title: g.intl.string(g.t["8D8Rsb"]),
        body: (0, d.tb)(c.default["HmNT/r"], t.targetAppName),
        items: null == t.rest ? [] : (0, o.CB)(t.rest, l),
        confirmText: g.intl.string(g.t["8D8Rsb"]),
    });
}
