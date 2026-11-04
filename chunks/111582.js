var r = i(582128),
    a = i(858899),
    l = i(949757),
    e = i(363882),
    u = i(540665),
    c = i(639519),
    s = i(391712),
    d = i(371169),
    f = i(191850),
    o = i(792996);
i.d(
    n,
    {},
    {
        A: function (t, n) {
            let [i, p] = r.useState(!1),
                h = r.useRef(!1),
                v = r.useCallback(
                    async (i) => {
                        let r = (0, l.vt)(i);
                        if (null != r) return void (0, a.P0)({ text: r, variant: "critical" });
                        if (null == t || h.current) return;
                        ((h.current = !0), p(!0));
                        let v = null;
                        try {
                            let r = await (0, e.A)(i, t);
                            ((v = await (0, d.gA)({ guild_id: t, install_scope: r ?? "user" })),
                                (0, u.ensureConnection)(v),
                                (0, u.r2)(v, s.A4),
                                await (0, l.Hj)(v, i, o.intl.string(f.default["LUc7/5"])),
                                n(v));
                        } catch (t) {
                            if (null != v)
                                try {
                                    await (0, d.xx)(v);
                                } catch {}
                            (0, a.P0)({
                                text: null != v ? o.intl.string(f.default["Q+l4Hv"]) : (0, c.mG)(t),
                                variant: "critical",
                            });
                        } finally {
                            ((h.current = !1), p(!1));
                        }
                    },
                    [t, n],
                );
            return { ...(0, l.yN)(v), importing: i };
        },
    },
);
