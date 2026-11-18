var r = n(582128),
    e = n(858899),
    i = n(949757),
    l = n(540665),
    c = n(639519),
    s = n(391712),
    u = n(233470),
    d = n(191850),
    f = n(792996);
n.d(
    a,
    {},
    {
        A: function (t) {
            let [a, n] = r.useState(!1),
                o = r.useRef(!1),
                p = r.useCallback(
                    async (a) => {
                        let r = (0, i.vt)(a);
                        if (null != r) return void (0, e.P0)({ text: r, variant: "critical" });
                        if (o.current) return;
                        ((o.current = !0), n(!0));
                        let p = null;
                        try {
                            ((p = await (0, u.gA)({})),
                                (0, l.ensureConnection)(p),
                                (0, l.r2)(p, s.A4),
                                await (0, i.Hj)(p, a, f.intl.string(d.default["LUc7/5"])),
                                t(p));
                        } catch (t) {
                            if (null != p)
                                try {
                                    await (0, u.xx)(p);
                                } catch {}
                            (0, e.P0)({
                                text: null != p ? f.intl.string(d.default["Q+l4Hv"]) : (0, c.mG)(t),
                                variant: "critical",
                            });
                        } finally {
                            ((o.current = !1), n(!1));
                        }
                    },
                    [t],
                );
            return { ...(0, i.yN)(p), importing: a };
        },
    },
);
