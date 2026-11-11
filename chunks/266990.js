var l = a(477900),
    i = a(582128),
    n = a(189213),
    r = a(858899),
    s = a(664619),
    o = a(733791),
    u = a(298702),
    c = a(936508),
    d = a(199267),
    p = a(706935),
    g = a(191850),
    m = a(792996);
function f(t) {
    let { app: e, title: a, heading: u, body: c, items: d, confirmText: f, onPlainConfirm: x, ...h } = t,
        v = null != e.rest && d.length > 0,
        [b, C] = i.useState(!0),
        [P, k] = i.useState(!1),
        [N, T] = i.useState(null);
    return (0, l.jsx)(n.a, {
        ...h,
        role: "alertdialog",
        title: null == u ? a : (0, o.WX)(u),
        subtitle: c,
        "aria-label": a,
        notice: null == N ? void 0 : { message: N, type: "critical", role: "alert" },
        actions: [
            { text: m.intl.string(m.t["ETE/oC"]), variant: "secondary", onClick: h.onClose },
            {
                text: f,
                variant: "critical-primary",
                loading: P,
                disabled: P,
                onClick: () => {
                    v && b
                        ? (async function () {
                              (k(!0), T(null));
                              let t = await (0, s.YI)(e.projectId, {
                                  guildId: e.guildId,
                                  alsoRemovePreviewBot: !0,
                              }).catch(() => null);
                              (k(!1), t?.ok !== !0)
                                  ? T(m.intl.string(g.default.PJ2Fkn))
                                  : ((0, r.P0)({
                                        text: m.intl.formatToPlainString(g.default.SNFGxP, {
                                            app: e.rest?.appName ?? e.targetAppName,
                                            server: e.guildName,
                                        }),
                                        variant: "success",
                                    }),
                                    h.onClose());
                          })().catch(() => {})
                        : (x(), h.onClose());
                },
            },
        ],
        children: v ? (0, l.jsx)(p.Yg, { checked: b, onChange: C, items: d }) : null,
    });
}
a.d(
    e,
    {},
    {
        VI: function (t) {
            let { app: e, onPlainConfirm: a, ...i } = t;
            return e.targetIsPreview
                ? (0, l.jsx)(f, {
                      ...i,
                      app: e,
                      title: m.intl.formatToPlainString(g.default.x6FvsZ, { app: e.targetAppName }),
                      heading: (0, p.tb)(g.default.x6FvsZ, e.targetAppName),
                      body: m.intl.formatToPlainString(g.default.f22PGK, { server: e.guildName }),
                      items: [],
                      confirmText: m.intl.string(g.default.BGF8VT),
                      onPlainConfirm: a,
                  })
                : (0, l.jsx)(d.A, { ...i, target: (0, c.It)(e) });
        },
        lt: function (t) {
            let { app: e, channelId: a, ...i } = t;
            return (0, l.jsx)(f, {
                ...i,
                app: e,
                title: m.intl.string(m.t["8D8Rsb"]),
                body: (0, p.tb)(g.default["HmNT/r"], e.targetAppName),
                items: null == e.rest ? [] : (0, u.CB)(e.rest, a),
                confirmText: m.intl.string(m.t["8D8Rsb"]),
            });
        },
    },
);
