i.d(n, { A: () => p });
var a = i(582128),
    e = i(858899),
    l = i(949757),
    r = i(567630),
    u = i(322227),
    c = i(639519),
    s = i(391712),
    d = i(371169),
    o = i(87501),
    f = i(105292);
function p(t, n) {
    let [i, p] = a.useState(!1),
        h = a.useRef(!1),
        v = a.useCallback(
            async (i) => {
                let a = (0, l.vt)(i);
                if (null != a) return void (0, e.P0)({ text: a, variant: "critical" });
                if (null == t || h.current) return;
                ((h.current = !0), p(!0));
                let v = null;
                try {
                    let a = await (0, r.A)(i, t);
                    ((v = await (0, d.gA)({ guild_id: t, install_scope: a ?? "user" })),
                        (0, u.ensureConnection)(v),
                        (0, u.stageModelSettings)(v, s.A4),
                        await (0, l.Hj)(v, i, f.intl.string(o.default["LUc7/5"])),
                        n(v));
                } catch (t) {
                    if (null != v)
                        try {
                            await (0, d.xx)(v);
                        } catch {}
                    (0, e.P0)({
                        text: null != v ? f.intl.string(o.default["Q+l4Hv"]) : (0, c.mG)(t),
                        variant: "critical",
                    });
                } finally {
                    ((h.current = !1), p(!1));
                }
            },
            [t, n],
        );
    return { ...(0, l.yN)(v), importing: i };
}
