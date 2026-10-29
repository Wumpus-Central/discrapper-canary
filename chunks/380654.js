n.d(t, { V: () => v, S: () => j });
var l = n(477900),
    a = n(582128),
    i = n(442433),
    r = n(314116),
    s = n(858899),
    o = n(381991),
    u = n(716594),
    d = n(949757),
    c = n(87501),
    f = n(105292),
    m = n(260498),
    p = n(193072),
    g = n(95264);
function x(e, t) {
    let n,
        l,
        i,
        p,
        x,
        h,
        { onExport: j } =
            ((n = e.id),
            (l = e.name),
            (i = a.useRef(!1)),
            (p = a.useCallback(() => {
                i.current ||
                    ((i.current = !0),
                    (0, s.P0)({ text: f.intl.formatToPlainString(c.default.aN2JdD, { name: l }) }),
                    (0, d.iG)(n, l)
                        .catch((e) => {
                            let t;
                            (console.error("[conjure] project export failed", n, e),
                                (0, s.P0)({
                                    text:
                                        409 === (t = e instanceof u.x ? e.status : null)
                                            ? f.intl.string(c.default["9oqbEw"])
                                            : 404 === t
                                              ? f.intl.string(c.default["0W8uLq"])
                                              : f.intl.string(c.default.N8753A),
                                    variant: "critical",
                                }));
                        })
                        .finally(() => {
                            i.current = !1;
                        }));
            }, [n, l])),
            (x = a.useCallback(
                (e) => {
                    let t = (0, d.vt)(e);
                    null != t
                        ? (0, s.P0)({ text: t, variant: "critical" })
                        : (0, r.A)({
                              title: f.intl.formatToPlainString(c.default["Gm+u1+"], { name: l }),
                              subtitle: f.intl.string(c.default.M7H3sJ),
                              confirmText: f.intl.string(c.default.gFHykw),
                              variant: "critical",
                              onConfirm: async () => {
                                  (0, o.A)(n);
                                  try {
                                      await (0, d.Hj)(n, e, f.intl.string(c.default.Owerd3));
                                  } catch {
                                      (0, s.P0)({ text: f.intl.string(c.default["Q+l4Hv"]), variant: "critical" });
                                  }
                              },
                          });
                },
                [n, l],
            )),
            { onExport: p, onImport: (h = (0, d.yN)(x)).open, importInput: h.input });
    return {
        projectId: e.id,
        projectName: e.name,
        guildId: t,
        projectGuildId: e.guild_id,
        isOwner: (0, m.PV)(e),
        canRemix: (0, m.H_)(e),
        onRemix: () => (0, g.A)(e, t),
        onExport: j,
    };
}
function h(e) {
    let { project: t, guildId: n } = e,
        a = x(t, n);
    return (0, l.jsx)(p.z, { ...a, onCloseMenu: i.Z_ });
}
function j(e) {
    let { project: t, guildId: n } = e,
        a = x(t, n);
    return (0, l.jsx)(p.A, { ...a, trigger: "iconButton" });
}
function v(e, t, n) {
    (0, i.jA)(e, () => (0, l.jsx)(h, { project: t, guildId: n }));
}
