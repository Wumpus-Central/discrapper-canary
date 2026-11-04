var n = l(477900),
    a = l(582128),
    i = l(189213),
    r = l(858899),
    u = l(331322),
    p = l(664619),
    o = l(733791),
    s = l(298702),
    c = l(706935),
    d = l(191850),
    f = l(792996);
function A(e) {
    let { app: t, title: l, heading: s, body: A, items: g, confirmText: m, onPlainConfirm: b, children: h, ...v } = e,
        N = null != t.rest && g.length > 0,
        [w, k] = a.useState(!0),
        [y, I] = a.useState(!1),
        [C, j] = a.useState(null);
    return (0, n.jsx)(i.a, {
        ...v,
        role: "alertdialog",
        title: null == s ? l : (0, o.WX)(s),
        subtitle: A,
        "aria-label": l,
        notice: null == C ? void 0 : { message: C, type: "critical", role: "alert" },
        actions: [
            { text: f.intl.string(f.t["ETE/oC"]), variant: "secondary", onClick: v.onClose },
            {
                text: m,
                variant: "critical-primary",
                loading: y,
                disabled: y,
                onClick: () => {
                    N && w
                        ? (async function () {
                              (I(!0), j(null));
                              let e = await (0, p.YI)(t.projectId, {
                                  guildId: t.guildId,
                                  alsoRemovePreviewBot: !0,
                              }).catch(() => null);
                              (I(!1), e?.ok !== !0)
                                  ? j(f.intl.string(d.default.PJ2Fkn))
                                  : ((0, r.P0)({
                                        text: f.intl.formatToPlainString(d.default.SNFGxP, {
                                            app: t.rest?.appName ?? t.targetAppName,
                                            server: t.guildName,
                                        }),
                                        variant: "success",
                                    }),
                                    v.onClose());
                          })().catch(() => {})
                        : (b(), v.onClose());
                },
            },
        ],
        children:
            N || null != h
                ? (0, n.jsxs)(u.B, {
                      gap: 16,
                      children: [N ? (0, n.jsx)(c.Yg, { checked: w, onChange: k, items: g }) : null, h],
                  })
                : null,
    });
}
l.d(
    t,
    {},
    {
        BU: function (e) {
            let { app: t, ...l } = e;
            return (0, n.jsx)(A, {
                ...l,
                app: t,
                title: f.intl.formatToPlainString(d.default.wVNCN7, { app: t.targetAppName }),
                heading: (0, c.tb)(d.default.wVNCN7, t.targetAppName),
                body: f.intl.string(d.default["tw+iyx"]),
                items: null == t.rest ? [] : (0, s.S6)(t.rest),
            });
        },
        lt: function (e) {
            let { app: t, channelId: l, ...a } = e;
            return (0, n.jsx)(A, {
                ...a,
                app: t,
                title: f.intl.string(f.t["8D8Rsb"]),
                body: (0, c.tb)(d.default["HmNT/r"], t.targetAppName),
                items: null == t.rest ? [] : (0, s.CB)(t.rest, l),
                confirmText: f.intl.string(f.t["8D8Rsb"]),
            });
        },
    },
);
