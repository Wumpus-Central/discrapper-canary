var a = r(582128),
    i = r(858899),
    e = r(949757),
    c = r(540665),
    l = r(639519),
    u = r(391712),
    s = r(233470),
    f = r(258576),
    d = r(792996);
r.d(
    n,
    {},
    {
        A: function (t) {
            let [n, r] = a.useState(!1),
                o = a.useRef(!1),
                h = a.useCallback(
                    async (n) => {
                        let a = (0, e.vt)(n);
                        if (null != a) return void (0, i.P0)({ text: a, variant: "critical" });
                        if (o.current) return;
                        ((o.current = !0), r(!0));
                        let h = null;
                        try {
                            ((h = await (0, s.gA)({})),
                                (0, c.ensureConnection)(h),
                                (0, c.r2)(h, u.A4),
                                await (0, e.Hj)(h, n, d.intl.string(f.default["LUc7/5"])),
                                t(h));
                        } catch (t) {
                            if (null != h)
                                try {
                                    await (0, s.xx)(h);
                                } catch {}
                            (0, i.P0)({
                                text: null != h ? d.intl.string(f.default["Q+l4Hv"]) : (0, l.mG)(t),
                                variant: "critical",
                            });
                        } finally {
                            ((o.current = !1), r(!1));
                        }
                    },
                    [t],
                );
            return { ...(0, e.yN)(h), importing: n };
        },
    },
);
