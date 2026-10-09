l.d(t, { BU: () => A, lt: () => m });
var n = l(477900),
    i = l(582128),
    a = l(189213),
    r = l(376357),
    u = l(331322),
    p = l(371169),
    o = l(733791),
    s = l(298702),
    d = l(706935),
    c = l(248675),
    g = l(660183);
function f(e) {
    let { app: t, title: l, heading: s, body: f, items: A, confirmText: m, onPlainConfirm: b, children: v, ...h } = e,
        N = null != t.rest && A.length > 0,
        [w, k] = i.useState(!0),
        [y, C] = i.useState(!1),
        [I, P] = i.useState(null);
    async function S() {
        (C(!0), P(null));
        let e = await (0, p.YI)(t.projectId, { guildId: t.guildId, alsoRemovePreviewBot: !0 }).catch(() => null);
        (C(!1), e?.ok !== !0)
            ? P(g.intl.string(c.default.PJ2Fkn))
            : ((0, r.P0)(
                  (0, r.ox)(
                      g.intl.formatToPlainString(c.default.SNFGxP, {
                          app: t.rest?.appName ?? t.targetAppName,
                          server: t.guildName,
                      }),
                      r.Ck.SUCCESS,
                  ),
              ),
              h.onClose());
    }
    return (0, n.jsx)(a.a, {
        ...h,
        role: "alertdialog",
        title: null == s ? l : (0, o.WX)(s),
        subtitle: f,
        "aria-label": l,
        notice: null == I ? void 0 : { message: I, type: "critical" },
        actions: [
            { text: g.intl.string(g.t["ETE/oC"]), variant: "secondary", onClick: h.onClose },
            {
                text: m,
                variant: "critical-primary",
                loading: y,
                disabled: y,
                onClick: () => {
                    N && w ? S().catch(() => {}) : (b(), h.onClose());
                },
            },
        ],
        children:
            N || null != v
                ? (0, n.jsxs)(u.B, {
                      gap: 16,
                      children: [N ? (0, n.jsx)(d.Yg, { checked: w, onChange: k, items: A }) : null, v],
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
        items: null == t.rest ? [] : (0, s.S6)(t.rest),
    });
}
function m(e) {
    let { app: t, channelId: l, ...i } = e;
    return (0, n.jsx)(f, {
        ...i,
        app: t,
        title: g.intl.string(g.t["8D8Rsb"]),
        body: (0, d.tb)(c.default["HmNT/r"], t.targetAppName),
        items: null == t.rest ? [] : (0, s.CB)(t.rest, l),
        confirmText: g.intl.string(g.t["8D8Rsb"]),
    });
}
