var e = n(582128),
    i = n(858899),
    r = n(949757),
    l = n(363882),
    s = n(540665),
    u = n(639519),
    c = n(391712),
    d = n(233470),
    o = n(191850),
    p = n(792996);
n.d(
    a,
    {},
    {
        A: function (t, a) {
            let [n, f] = e.useState(!1),
                h = e.useRef(!1),
                v = e.useCallback(
                    async (n) => {
                        let e = (0, r.vt)(n);
                        if (null != e) return void (0, i.P0)({ text: e, variant: "critical" });
                        if (null == t || h.current) return;
                        ((h.current = !0), f(!0));
                        let v = null;
                        try {
                            let e = await (0, l.A)(n, t);
                            ((v = await (0, d.gA)({ guild_id: t, install_scope: e ?? "user" })),
                                (0, s.ensureConnection)(v),
                                (0, s.r2)(v, c.A4),
                                await (0, r.Hj)(v, n, p.intl.string(o.default["LUc7/5"])),
                                a(v));
                        } catch (t) {
                            if (null != v)
                                try {
                                    await (0, d.xx)(v);
                                } catch {}
                            (0, i.P0)({
                                text: null != v ? p.intl.string(o.default["Q+l4Hv"]) : (0, u.mG)(t),
                                variant: "critical",
                            });
                        } finally {
                            ((h.current = !1), f(!1));
                        }
                    },
                    [t, a],
                );
            return { ...(0, r.yN)(v), importing: n };
        },
    },
);
