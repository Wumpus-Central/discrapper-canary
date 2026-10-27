n.d(e, { A: () => p });
var i = n(582128),
    a = n(858899),
    l = n(949757),
    r = n(889921),
    u = n(639519),
    c = n(391712),
    s = n(371169),
    o = n(248675),
    d = n(105292);
function p(t, e) {
    let [n, p] = i.useState(!1),
        f = i.useRef(!1),
        h = i.useCallback(
            async (n) => {
                let i = (0, l.vt)(n);
                if (null != i) return void (0, a.P0)({ text: i, variant: "critical" });
                if (null == t || f.current) return;
                ((f.current = !0), p(!0));
                let h = null;
                try {
                    ((h = await (0, s.gA)({ guild_id: t, install_scope: "user" })),
                        (0, r.ensureConnection)(h),
                        (0, r.stageModelSettings)(h, c.A4),
                        await (0, l.Hj)(h, n, d.intl.string(o.default["LUc7/5"])),
                        e(h));
                } catch (t) {
                    if (null != h)
                        try {
                            await (0, s.xx)(h);
                        } catch {}
                    (0, a.P0)({
                        text: null != h ? d.intl.string(o.default["Q+l4Hv"]) : (0, u.mG)(t),
                        variant: "critical",
                    });
                } finally {
                    ((f.current = !1), p(!1));
                }
            },
            [t, e],
        );
    return { ...(0, l.yN)(h), importing: n };
}
