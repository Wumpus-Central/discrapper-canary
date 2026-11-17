var n = t(582128),
    i = t(855986),
    a = t(71393),
    r = t(260498),
    s = t(951178),
    u = t(733791),
    o = t(680032),
    d = t(551233),
    c = t(191850),
    h = t(792996);
t.d(
    l,
    {},
    {
        A: function (e, l, t) {
            let g = (0, i.bG)([r.Ay], () => r.Ay.getProject(e) ?? null, [e]),
                [f] = n.useState(() => g?.install_scope === "guild"),
                x = (0, d.A)(e, l, t, f),
                m = (0, u.Bs)(f ? e : null),
                b = (f ? null != g && (0, d.i)(g, m, "ConjureShareServers") : null != t && x.available) ? x.guilds : [],
                j = (0, i.yK)(
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
                [p, v] = n.useState(null),
                y = b.find((e) => e.id === p) ?? null,
                { pickGuild: C, share: k, publish: w } = x,
                E = n.useCallback(
                    (e) => {
                        (v(e), C(e));
                    },
                    [C],
                ),
                S = n.useRef(!1);
            n.useEffect(
                () => (
                    (S.current = !1),
                    () => {
                        S.current = !0;
                    }
                ),
                [],
            );
            let A = g?.name ?? "",
                _ = n.useRef(!1),
                B = n.useCallback(
                    async function (e, l) {
                        let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        if (null == y) return void e();
                        if (_.current) return;
                        _.current = !0;
                        let n = await k();
                        if (!n.shared) {
                            _.current = !1;
                            return;
                        }
                        if (!S.current) {
                            if ((e(), "publish" === n.next)) return void (await w(t));
                            l(
                                h.intl.formatToPlainString(
                                    "added" === n.next ? c.default["4WtS+v"] : c.default.o2xHEb,
                                    { app: A, server: y.name },
                                ),
                            );
                        }
                    },
                    [y, k, w, A],
                );
            return {
                current: j,
                candidates: b,
                picked: y,
                pick: E,
                changeRows: null == y ? [] : f ? (0, o._i)(g) : (0, o.dv)(g),
                sharing: x.sharing,
                error: x.error,
                finish: B,
            };
        },
    },
);
