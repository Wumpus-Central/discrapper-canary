var n = t(582128),
    i = t(855986),
    a = t(71393),
    r = t(260498),
    s = t(951178),
    u = t(733791),
    o = t(680032),
    d = t(551233),
    c = t(191850),
    g = t(792996);
t.d(
    l,
    {},
    {
        A: function (e, l, t) {
            let h = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                f = (0, i.bG)([r.Ay], () => r.Ay.getProject(e) ?? null, [e]),
                [x] = n.useState(() => f?.install_scope === "guild"),
                b = (0, d.A)(e, l, t, x),
                m = (0, u.Bs)(x ? e : null),
                j = (x ? null != f && (0, d.i)(f, m, "ConjureShareServers") : null != t && b.available) ? b.guilds : [],
                p = (0, i.yK)(
                    [r.Ay, a.A],
                    () => {
                        let l = r.Ay.getProject(e);
                        return null == l || "guild" !== l.install_scope
                            ? []
                            : (0, s.Jr)(l)
                                  .map((e) => a.A.getGuild(e))
                                  .filter((e) => null != e);
                    },
                    [e],
                ),
                [v, y] = n.useState(() => (h ? (f?.guild_id ?? null) : null)),
                C = j.find((e) => e.id === v) ?? null,
                { pickGuild: k, share: w, publish: E } = b,
                S = n.useCallback(
                    (e) => {
                        (y(e), null != e && k(e));
                    },
                    [k],
                ),
                A = n.useRef(!1);
            n.useEffect(
                () => (
                    (A.current = !1),
                    () => {
                        A.current = !0;
                    }
                ),
                [],
            );
            let _ = f?.name ?? "",
                B = n.useRef(!1),
                P = n.useCallback(
                    async function (e, l) {
                        let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        if (null == C) return void e();
                        if (B.current) return;
                        B.current = !0;
                        let n = await w();
                        if (!n.shared) {
                            B.current = !1;
                            return;
                        }
                        if (!A.current) {
                            if ((e(), "publish" === n.next)) return void (await E(t));
                            l(
                                g.intl.formatToPlainString(
                                    "added" === n.next ? c.default["4WtS+v"] : c.default.o2xHEb,
                                    { app: _, server: C.name },
                                ),
                            );
                        }
                    },
                    [C, w, E, _],
                );
            return {
                current: p,
                candidates: j,
                picked: C,
                pick: S,
                changeRows: null == C ? [] : x ? (0, o._i)(f) : (0, o.dv)(f),
                sharing: b.sharing,
                error: b.error,
                finish: P,
            };
        },
    },
);
