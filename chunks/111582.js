i.d(n, { A: () => f });
var e = i(582128),
    r = i(858899),
    a = i(949757),
    l = i(322227),
    u = i(639519),
    c = i(391712),
    s = i(371169),
    d = i(87501),
    o = i(105292);
function f(t, n) {
    let [i, f] = e.useState(!1),
        p = e.useRef(!1),
        h = e.useCallback(
            async (i) => {
                let e = (0, a.vt)(i);
                if (null != e) return void (0, r.P0)({ text: e, variant: "critical" });
                if (null == t || p.current) return;
                ((p.current = !0), f(!0));
                let h = null;
                try {
                    ((h = await (0, s.gA)({ guild_id: t, install_scope: "user" })),
                        (0, l.ensureConnection)(h),
                        (0, l.stageModelSettings)(h, c.A4),
                        await (0, a.Hj)(h, i, o.intl.string(d.default["LUc7/5"])),
                        n(h));
                } catch (t) {
                    if (null != h)
                        try {
                            await (0, s.xx)(h);
                        } catch {}
                    (0, r.P0)({
                        text: null != h ? o.intl.string(d.default["Q+l4Hv"]) : (0, u.mG)(t),
                        variant: "critical",
                    });
                } finally {
                    ((p.current = !1), f(!1));
                }
            },
            [t, n],
        );
    return { ...(0, a.yN)(h), importing: i };
}
